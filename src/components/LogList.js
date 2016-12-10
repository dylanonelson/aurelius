import React from 'react';
import LogHeader from './LogHeader';
import LogMarks from './LogMarks';
import { observer } from 'mobx-react';

const getLogsByType = (logs, type) =>
  Object.keys(logs).reduce((memo, log) => {
    if (logs[log].log_type === type) memo.push(logs[log]);
    return memo;
  }, []);

const Logs = observer(({ logs, logTypes, onLogCreate }) => (
  <ul>
    {Object.keys(logTypes).map(type =>
      <li
        key={type}
      >
        <LogHeader
          logType={logTypes[type]}
          onLogCreate={() => onLogCreate(type)}
        />
        <LogMarks
          logs={getLogsByType(logs, type)}
          logType={logTypes[type]}
        />
      </li>
    )}
  </ul>
));

Logs.propTypes = {
  logs: React.PropTypes.object,
  logTypes: React.PropTypes.object,
  onLogCreate: React.PropTypes.func,
}

export default Logs;
