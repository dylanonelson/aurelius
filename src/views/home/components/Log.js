import { observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import Moment from 'moment';
import Paper from 'material-ui/Paper';
import React from 'react';

import { data } from '../../../data';
import LogDetails from './LogDetails';
import LogSummary from './LogSummary';
import LogControls from './LogControls';

const styles = {
  line: {
    height: 250,
    margin: '0 15px 15px 15px',
    position: 'relative',
  },
};

@observer
class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.logs.length,
    };
  }

  shouldComponentUpdate(newProps, newState) {
    return newState.count !== this.state.count;
  }

  render() {
    const children = (
      <div>
        <LogSummary
          logType={this.props.logType}
          numLogs={this.state.count}
        />
        <LogDetails
          logType={this.props.logType}
          numLogs={this.state.count}
        />
        <LogControls
          removeLog={this.removeLog}
          addLog={this.addLog}
        />
      </div>
    );

    return (
      <li>
        <Paper
          children={children}
          style={styles.line}
          zDepth={this.zDepth}
        />
      </li>
    );
  }

  @autobind
  removeLog() {
    if (this.state.count > 0)
      this.setState({ count: this.state.count - 1 });

    const { logs } = this.props;

    return logs.length > 0 ?
      data.CURRENT_LOGS.delete(logs[logs.length - 1].id) :
      null;
  }

  @autobind
  addLog() {
    this.setState({ count: this.state.count + 1 });

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
