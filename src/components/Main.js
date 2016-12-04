import React from 'react';
import LogControls from './LogControls';
import LogTypeControls from './LogTypeControls';
import LogList from './LogList';
import Moment from 'moment';
import { Logs, LogTypes } from '../database';

class Main extends React.Component {

  constructor(props) {
    super();

    this.state = {
      logs: props.logs,
      logTypes: props.logTypes,
    };

    this.handleLogCreate = this.handleLogCreate.bind(this);
    this.handleLogTypeCreate = this.handleLogTypeCreate.bind(this);
  }

  handleLogCreate(typeID) {
    Logs.write(typeID)
      .then(val => {
        this.setState({
          logs: Object.assign(this.state.logs, val)
        });
      });
  }

  handleLogTypeCreate(logType) {
    LogTypes.write(logType)
      .then(val => {
        this.setState({
          logTypes: Object.assign(this.state.logTypes, val)
        });
      });
  }

  render() {
    return (
      <main>
        <h1>{Moment().subtract(4, 'hours').format('YYYY-MM-DD')}</h1>
        <LogList
          logs={this.state.logs}
          logTypes={this.state.logTypes}
        />
        <LogControls
          logTypes={this.state.logTypes}
          onLogCreate={this.handleLogCreate}
        />
        <LogTypeControls
          logTypes={this.state.logTypes}
          onLogTypeCreate={this.handleLogTypeCreate}
        />
      </main>
    );
  }

}

Main.propTypes = {
  logTypes: React.PropTypes.object.isRequired,
};

export default Main;
