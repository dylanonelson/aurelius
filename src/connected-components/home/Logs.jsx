import PropTypes from 'prop-types';
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { connect } from 'react-redux';

import Log from 'connected-components/home-log';

const styles = {
  list: {
  },
  spinner: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
  },
};

class Logs extends React.Component {
  render() {
    const { logs, loading } = this.props;

    let children;

    if (loading !== true) {
      children = (
        Object.keys(logs).map(logTypeId => {
          const count = logs[logTypeId];

          return (
            <Log
              key={logTypeId}
              logTypeId={logTypeId}
              count={count}
            />
          );
        })
      );
    } else {
      children = (
        <CircularProgress style={styles.spinner} />
      );
    }

    return (
      <ul
        style={styles.list}
      >
        {children}
      </ul>
    );
  }
}

Logs.propTypes = {
  loading: PropTypes.bool,
  logs: PropTypes.object.isRequired,
};

function mapStateToProps(state, props) {
  const { loading } = props;

  if (loading) return { loading, logs: {} };

  const { selectedDate } = state.home;
  const { yearmoday } = selectedDate;

  const logs = Object.keys(state.logTypes).reduce((memo, logTypeId) => {
    if (state.logs[yearmoday] === undefined) {
      memo[logTypeId] = {};
    } else {
      memo[logTypeId] = state.logs[yearmoday][logTypeId] || {};
    }

    return memo;
  }, {});

  return {
    loading,
    logs,
  };
}

export default connect(
  mapStateToProps,
)(Logs);
