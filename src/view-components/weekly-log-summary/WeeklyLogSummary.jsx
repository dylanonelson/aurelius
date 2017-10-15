import PropTypes from 'prop-types';
import React from 'react';

import Paper from 'material-ui/Paper';

const styles = {
  line: {
    height: 175,
    margin: '0 15px 15px 15px',
    position: 'relative',
  },
};

const WeeklyLogSummary = (props) => {
  const { avg, logType: { name }, max, nonzeroes, sum } = props;

  return (
    <Paper
      className="weekly-log-summary"
      style={styles.line}
      zDepth={1}
    >
      <h2>{name}</h2>
      <ul>
        <p>
          Avg: {avg}
        </p>
        <p>
          Max: {max}
        </p>
        <p>
          Non-zeroes: {nonzeroes}
        </p>
        <p>
          Total: {sum}
        </p>
      </ul>
    </Paper>
  );
};

WeeklyLogSummary.propTypes = {
  logType: PropTypes.shape({
    mark: PropTypes.string,
    name: PropTypes.string,
  }),
  avg: PropTypes.number,
  max: PropTypes.number,
  nonzeroes: PropTypes.number,
  sum: PropTypes.number,
};

export default WeeklyLogSummary;
