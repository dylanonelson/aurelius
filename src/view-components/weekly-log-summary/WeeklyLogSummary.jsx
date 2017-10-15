import PropTypes from 'prop-types';
import React from 'react';

const WeeklyLogSummary = (props) => {
  const { avg, logType: { name }, max, nonzeroes, sum } = props;

  return (
    <div>
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
    </div>
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
