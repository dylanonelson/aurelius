import { connect } from 'react-redux';

import Log from 'view-components/home-log';
import { incrementLogType } from 'redux-modules/logs/actions';

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
