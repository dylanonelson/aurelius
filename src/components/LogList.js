import React from 'react';
import LogHeader from './LogHeader';
import LogMarks from './LogMarks';
import { observer } from 'mobx-react';

const getLogsByType = (logs, typeId) => {
  const logsByType = [];
  for (let [id, log] of logs) { // eslint-disable-line no-unused-vars
    if (log.logType === typeId) logsByType.push(log);
  }
  return logsByType;
}

const LogList = observer(({ logs, logTypes, onLogCreate }) => (
  <ul>
    {[...logTypes].map(([typeId, type]) =>
      <li
        key={typeId}
      >
        <LogHeader
          logType={type}
          onLogCreate={() => onLogCreate(typeId)}
        />
        <LogMarks
          logs={getLogsByType(logs, typeId)}
          logType={type}
        />
      </li>
    )}
  </ul>
));

LogList.propTypes = {
  logs: React.PropTypes.object,
  logTypes: React.PropTypes.object,
  onLogCreate: React.PropTypes.func,
}

export default LogList;
