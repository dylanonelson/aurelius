import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';

import LogList from './LogList';
import LogTypeControls from './LogTypeControls';
import DataTypes from '../data/DataTypes';

@observer
class Main extends React.Component {

  constructor(props) {
    super();
    this.store = props.store;
  }

  @autobind
  handleLogCreate(typeID) {
    this.store.add(DataTypes.LOG, {
      log_type: typeID,
      date: this.store.date,
    });
  }

  @autobind
  handleLogTypeCreate(logType) {
    this.store.add(DataTypes.LOG_TYPE, logType);
  }

  render() {
    return (
      <main>
        <h1>{this.store.date}</h1>
        <LogList
          logTypes={this.store.logTypes}
          logs={this.store.logs}
          onLogCreate={this.handleLogCreate}
        />
        <LogTypeControls
          logTypes={this.store.logTypes}
          onLogTypeCreate={this.handleLogTypeCreate}
        />
      </main>
    );
  }

}

Main.propTypes = {
  store: React.PropTypes.object.isRequired,
}

export default Main;
