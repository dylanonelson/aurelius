import React from 'react';
import './Marks.css';

const styles = {
  list: {
    width: '50%',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 100,
  },
  row: {},
};

const Marks = ({ mark, num }) => {
  const numRows = Math.floor(num / 5) + 1;
  const lastRowLength = num % 5;
  const rows = [];

  for (let j = 0; j < numRows; j++) {
    let rowNum = j + 1;
    rows.push(
      <li
        key={rowNum}
        style={styles.row}
        className="mark-row"
      >
        {mark.repeat(rowNum === numRows ? lastRowLength : 5)}
      </li>
    );
  }

  return (
    <ul style={styles.list}>
      {num === 0 ? null : rows}
    </ul>
  );
};

Marks.propTypes = {
  mark: React.PropTypes.string.isRequired,
  num: React.PropTypes.number.isRequired,
};

export default Marks;
