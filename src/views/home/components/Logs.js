import React from 'react';

import Log from './Log';

const styles = {
  list: {
    // Add bottom margin for FAB
    marginBottom: 100,
    // Compensate for the height of the fixed App Bar
    position: 'relative',
    top: 64,
  },
};

const Logs = ({ logs }) => (
  <ul
    style={styles.list}
  >
    {[...logs].map(([logType, logs]) => {
      return (
        <Log
          key={logType.id}
          logType={logType}
          logs={logs}
        />
      );
    })}
  </ul>
);

Logs.propTypes = {
  // Map of log type objects to a list of log objects
  logs: React.PropTypes.object.isRequired,
};

export default Logs;
