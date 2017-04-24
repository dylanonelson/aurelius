import React from 'react';
import { observer } from 'mobx-react';
import CircularProgress from 'material-ui/CircularProgress';

import Log from './Log';

const styles = {
  list: {
    // Add bottom margin for FAB
    marginBottom: 100,
    // Spacing beneath tabs
    position: 'relative',
    top: 15,
  },
  spinner: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
  },
};

@observer
class Logs extends React.Component {
  render() {
    const { logs, loading } = this.props;

    let children;

    if (loading !== true) {
      children = (
        [...logs].map(([logType, logs]) => (
          <Log
            key={logType.id}
            logType={logType}
            logs={logs}
          />
        ))
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
  loading: React.PropTypes.bool,
  // Map of log type objects to a list of log objects
  logs: React.PropTypes.object.isRequired,
};

export default Logs;
