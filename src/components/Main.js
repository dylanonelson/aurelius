import Moment from 'moment';
import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';

import LogControls from './LogControls';
import LogList from './LogList';
import LogTypeControls from './LogTypeControls';
import { Logs, LogTypes } from '../database';

@observer
class Main extends React.Component {

  constructor(props) {
    super();
    this.store = props.store;
  }

  @autobind
  handleLogCreate(typeID) {
    Logs.write(typeID)
      .then(val => {
        this.store.logs = JSON.parse(
          JSON.stringify(
            Object.assign(this.store.logs, val)
          )
        );
      });
  }

  @autobind
  handleLogTypeCreate(logType) {
    LogTypes.write(logType)
      .then(val => {
        this.store.logTypes = JSON.parse(
          JSON.stringify(
            Object.assign(this.store.logTypes, val)
          )
        );
      });
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
