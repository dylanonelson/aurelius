import PropTypes from 'prop-types';
import React from 'react';
import './marks.css';

const getStyles = (largeStyle = false) => ({
  emptyList: {
    fontSize: 40,
    opacity: 0.50,
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
  let numMarks, styles;

  if (num === 0) {
    styles = getStyles();

    return (
      <span style={styles.emptyList}>{mark}</span>
    );
  }

  if (num > 10 && num < 50) {
    numMarks = Math.floor(num / 10);
    styles = getStyles(true);

    return (
      <ul style={styles.list}>
        <li style={styles.row}>{mark.repeat(numMarks)}</li>
      </ul>
    );
  }

  if (num >= 50) {
    numMarks = 4;
    styles = getStyles(true);

    return (
      <ul style={Object.assign({}, styles.list, {
        fontSize: 40,
      })}>
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
  mark: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};

export default Marks;
