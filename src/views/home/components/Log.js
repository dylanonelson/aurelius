import { observable } from 'mobx';
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
    margin: '5px 0',
  },
};

@observer
class Log extends React.Component {

  @observable zDepth = 1;
  @observable active = false;
  @observable mode = 'add';

  set deactivateTimer(dt) {
    if (this._dt)
      clearTimeout(this._dt);

    this._dt = dt;
    return this._dt;
  }

  @autobind
  handleTap() {
    this.active = true;
    this.zDepth = this.zDepth > 2 ? this.zDepth : this.zDepth + 1;

    this.deactivateTimer = setTimeout(() => {
      this.active = false;
      this.zDepth = 1;
    }, 500);

    if (this.mode === 'add') {
      this.addLog();
      return;
    }

    this.removeLog();
  }

  @autobind
  handleToggleMode(e) {
    this.mode = this.mode === 'add' ? 'remove' : 'add';
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    const children = (
      <div>
        <LogSummary
          active={this.active}
          mode={this.mode}
          toggleChecked={this.handleToggleMode}
          {...this.props}
        />
        <LogDetails {...this.props} active={this.active} />
      </div>
    );

    return (
      <li
        onTouchTap={this.handleTap}
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
};

export default Log;
