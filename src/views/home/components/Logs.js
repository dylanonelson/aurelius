import PropTypes from 'prop-types';
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import Log from './Log';

const styles = {
  list: {
    // Add bottom margin for FAB
    marginBottom: 100,
    // Spacing beneath tabs
    position: 'relative',
    top: 64,
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

export default Logs;
