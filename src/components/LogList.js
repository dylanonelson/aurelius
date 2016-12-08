import React from 'react';
import LogMarks from './LogMarks';
import { observer } from 'mobx-react';

const getLogsByType = (logs, type) =>
  Object.keys(logs).reduce((memo, log) => {
    if (logs[log].log_type === type) memo.push(logs[log]);
    return memo;
  }, []);

const Logs = observer(({ logs, logTypes }) => (
  <ul>
    {Object.keys(logTypes).map(type =>
      <LogMarks
        key={type}
        logs={getLogsByType(logs, type)}
        logType={logTypes[type]}
      />
    )}
  </ul>
));

Logs.propTypes = {
  logs: React.PropTypes.object,
  logTypes: React.PropTypes.object,
}

export default Logs;
