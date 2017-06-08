import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import React from 'react';

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

class Log extends React.Component {
  render() {
    const children = (
      <div>
        <LogSummary
          logType={this.props.logType}
          numLogs={this.props.count}
        />
        <LogDetails
          logType={this.props.logType}
          numLogs={this.props.count}
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
  addLog() {
    this.props.incrementLogType(
      this.props.logType.id
    );
  }

  @autobind
  removeLog() {
    this.props.decrementLogType(
      this.props.logType.id
    );
  }
}

Log.propTypes = {
  count: PropTypes.number.isRequired,
  decrementLogType: PropTypes.func.isRequired,
  incrementLogType: PropTypes.func.isRequired,
  logTypeId: PropTypes.string.isRequired,
  logType: PropTypes.object.isRequired,
};

function mapStateToProps(state, props) {
  const { currentDate } = state;
  const { yearmoday } = currentDate;

  return {
    count: state.logs[yearmoday][props.logTypeId] || 0,
    dateString: yearmoday,
    logType: state.logTypes[props.logTypeId],
  };
}

export default connect(
  mapStateToProps,
)(Log);
