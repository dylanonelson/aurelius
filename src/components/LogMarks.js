import React from 'react';

const MARKS_PER_ROW = 5;

const getMarks = (mark, times) => {
  const rows = Math.floor(times / MARKS_PER_ROW);
  const remainder = times % MARKS_PER_ROW
  const lis = [];
  for (let i = 0; i < rows; i++) {
    lis.push(
      <li
        key={i}
      >
        {new Array(5).fill(mark).join('')}
      </li>
    )
  }
  lis.push(
    <li
      key={rows}
    >
      {new Array(remainder).fill(mark).join('')}
    </li>
  );
  return (
    <ul>
      {lis}
    </ul>
  );
}

const LogMarks = ({ logs, logType }) => {
  return (
    <li>
      <h3>{logType.name}</h3>
      {getMarks(logType.mark, logs.length)}
    </li>
  );
};

LogMarks.propTypes = {
  logs: React.PropTypes.array,
  logType: React.PropTypes.object,
};

export default LogMarks;
