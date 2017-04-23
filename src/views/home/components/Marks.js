import React from 'react';
import './Marks.css';

const getStyles = (largeStyle = false) => ({
  emptyList: {
    fontSize: 45,
    opacity: 0.70,
  },
  list: {
    width: '50%',
    fontFamily: 'Roboto',
    fontSize: largeStyle ? 35 : 14,
    fontWeight: 100,
    position: 'relative',
    left: -3,
  },
  row: {
    textAlign: 'center',
    lineHeight: 1.5,
  },
});

const Marks = ({ mark, num }) => {
  let styles;

  if (num === 0) {
    styles = getStyles();

    return (
      <span style={styles.emptyList}>{mark}</span>
    );
  }

  if (num > 25) {
    const numMarks = Math.floor(num / 25);
    styles = getStyles(true);

    return (
      <ul style={styles.list}>
        <li style={styles.row}>{mark.repeat(numMarks)}</li>
      </ul>
    );
  }

  const numRows = Math.floor(num / 5) + 1;
  const lastRowLength = num % 5;
  const rows = [];
  styles = getStyles();

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
