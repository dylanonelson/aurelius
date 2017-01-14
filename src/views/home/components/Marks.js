import React from 'react';

const styles = {
  list: {
    marginTop: 25,
  },
};

const Marks = ({ mark, num }) => {
  if (num === 0) return null;
  const numRows = Math.floor(num / 5) + 1;
  const lastRowLength = num % 5;
  const rows = [];

  for (let j = 0; j < numRows; j++) {
    let rowNum = j + 1;
    rows.push(
      <li key={rowNum}>
        {mark.repeat(rowNum === numRows ? lastRowLength : 5)}
      </li>
    );
  }

  return (
    <ul style={styles.list}>
      {rows}
    </ul>
  );
};

export default Marks;
