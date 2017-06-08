import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import './log.css';
import LogControls from './LogControls';
import LogDetails from './LogDetails';
import LogSummary from './LogSummary';
import { incrementLogType } from 'redux-modules/logs/actions';

const styles = {
  line: {
    height: 175,
    margin: '0 15px 15px 15px',
    position: 'relative',
  },
};

const Log = (props) => {
  const { addLog, count, logType, removeLog } = props;

  const children = (
    <div>
      <LogSummary
        logType={logType}
        numLogs={count}
      />
      <LogDetails
        logType={logType}
        numLogs={count}
      />
      <LogControls
        removeLog={removeLog}
        addLog={addLog}
      />
    </div>
  );

  return (
    <li className="log">
      <Paper
        children={children}
        style={styles.line}
        zDepth={1}
      />
    </li>
  );
};

Log.propTypes = {
  count: PropTypes.number.isRequired,
  addLog: PropTypes.func.isRequired,
  removeLog: PropTypes.func.isRequired,
  logType: PropTypes.object.isRequired,
};

function mapStateToProps(state, props) {
  const { selectedDate } = state.home;
  const { yearmoday } = selectedDate;

  return {
    count: state.logs[yearmoday] ? (state.logs[yearmoday][props.logTypeId] || 0) : 0,
    dateString: yearmoday,
    logType: state.logTypes[props.logTypeId],
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    incrementLogType: (date, logType, amount) => dispatch(incrementLogType(date, logType, amount)),
  };
}

function mergeProps(stateProps, dispatchProps) {
  return Object.assign({}, stateProps, {
    addLog: () => dispatchProps.incrementLogType(
      stateProps.dateString,
      stateProps.logType.id,
      1,
    ),
    removeLog: () => dispatchProps.incrementLogType(
      stateProps.dateString,
      stateProps.logType.id,
      -1,
    ),
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Log);
