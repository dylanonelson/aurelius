import React from 'react';

import Log from './Log';

const Logs = ({ logs }) => (
  <ul>
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
