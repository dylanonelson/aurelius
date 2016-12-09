import Moment from 'moment';
import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';

import LogControls from './LogControls';
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
    this.store.add(DataTypes.LOG, { log_type: typeID });
  }

  @autobind
  handleLogTypeCreate(logType) {
    this.store.add(DataTypes.LOG_TYPE, logType);
  }

  render() {
    return (
      <main>
        <h1>{Moment().subtract(4, 'hours').format('YYYY-MM-DD')}</h1>
        <LogList
          logs={this.store.logs}
          logTypes={this.store.logTypes}
        />
        <LogControls
          logTypes={this.store.logTypes}
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
