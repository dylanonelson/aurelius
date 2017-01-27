import { observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import Moment from 'moment';
import Paper from 'material-ui/Paper';
import React from 'react';

import { data } from '../../../data';
import LogDetails from './LogDetails';
import LogSummary from './LogSummary';

const styles = {
  line: {
    padding: 20,
    margin: '5px 2px',
  },
};

@observer
class Log extends React.Component {
  set deactivateTimer(dt) {
    if (this._dt)
      clearTimeout(this._dt);

    this._dt = dt;
    return this._dt;
  }

  shouldComponentUpdate(newProps, newState) {
    return (
      (newProps.logs.length !== this.props.logs.length) ||
      (newProps.mode !== this.props.mode)
    );
  }

  @autobind
  initiateTap() {
    this.tapInProgress = true;
    setTimeout(this.handleTap, 10);
  }

  @autobind
  cancelTap() {
    this.tapInProgress = false;
  }

  @autobind
  handleTap() {
    if (!this.tapInProgress) return;
    this.tapInProgress = false;

    if (this.props.mode === 'add') {
      this.addLog();
      return;
    }

    // If the user is removing the last log, set mode to add
    if (this.props.logs.length === 1)
      this.props.toggleMode('add');

    this.removeLog();
  }

  @autobind
  handleToggleMode(e) {
    // Don't toggle mode to subtract if there are no logs
    this.props.toggleMode(this.props.logs.length === 0 ?
      'add' :
      this.props.mode === 'add' ?
      'remove' :
      'add'
    );

    e.stopPropagation();
    e.preventDefault();
    return false;
  }

  render() {
    const children = (
      <div>
        <LogSummary
          toggleChecked={this.handleToggleMode}
          {...this.props}
        />
        <LogDetails {...this.props} />
      </div>
    );

    return (
      <li
        onTouchStart={this.initiateTap}
        onTouchMove={this.cancelTap}
      >
        <Paper
          children={children}
          style={styles.line}
          zDepth={this.zDepth}
        />
      </li>
    );
  }

  removeLog() {
    const { logs } = this.props;

    return logs.length > 0 ?
      data.CURRENT_LOGS.delete(logs[logs.length - 1].id) :
      null;
  }

  addLog() {
    const { logType } = this.props;

    return data.CURRENT_LOGS.write({
      logType: logType.id,
      date: Moment().subtract(4, 'hours').format('YYYY-MM-DD'),
    });
  }

}

Log.propTypes = {
  logType: React.PropTypes.object.isRequired,
  logs: React.PropTypes.array.isRequired,
  mode: React.PropTypes.string,
  toggleMode: React.PropTypes.func,
};

export default Log;
