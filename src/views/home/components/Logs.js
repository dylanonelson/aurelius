import React from 'react';

const Logs = ({ logs }) => (
  <ul>
    {[...logs].map(([logType, logs]) => {
      return (
        <li key={logType.id}>
          {logType.name}
          {logType.mark}
        </li>
      );
    })}
  </ul>
);

Logs.propTypes = {
  // Map of log type objects to a list of log objects
  logs: React.PropTypes.object.isRequired,
};

export default Logs;
