import React from 'react';

const getMarkString = (mark, times) => (new Array(times).fill(mark).join(' '))

const LogMarks = ({ logs, logType }) => {
  return (
    <li>
      <h3>{logType.name}</h3>
      <p>{getMarkString(logType.mark, logs.length)}</p>
    </li>
  );
};

LogMarks.propTypes = {
  logs: React.PropTypes.array,
  logType: React.PropTypes.object,
};

export default LogMarks;
