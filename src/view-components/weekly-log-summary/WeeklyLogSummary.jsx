import PropTypes from 'prop-types';
import React from 'react';

import Paper from 'material-ui/Paper';

const styles = {
  line: {
    height: 185,
    margin: '0 15px 15px 15px',
    padding: '10px 20px',
    position: 'relative',
  },
  logMarks: {
    fontSize: 16,
    letterSpacing: 4,
    marginBottom: 30,
    marginTop: 0,
    textAlign: 'center',
  },
  logName: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 400,
    marginTop: 15,
    textAlign: 'center',
  },
  logStats: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logStatContainer: {
    width: '25%',
  },
  logStatName: {
    fontSize: 14,
    fontWeight: 300,
    marginBottom: 5,
    textAlign: 'center',
  },
  logStatNum: {
    fontSize: 32,
    fontWeight: 100,
    textAlign: 'center',
    lineHeight: 1,
    margin: 0,
  },
};

function roundToOneDecimal(num) {
  return (Math.floor(num * 10) / 10);
}

const LogStat = ({ name, num }) => {
  return (
    <div
      style={styles.logStatContainer}
    >
      <h3 style={styles.logStatName}>{name}</h3>
      <p style={styles.logStatNum}>{num}</p>
    </div>
  );
};

LogStat.propTypes = {
  name: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};

const WeeklyLogSummary = (props) => {
  const { avg, logType: { mark, name }, max, nonzeroes, sum } = props;

  return (
    <Paper
      className="weekly-log-summary"
      style={styles.line}
      zDepth={1}
    >
      <h2
        style={styles.logName}
      >
        {name}
      </h2>
      <p style={styles.logMarks}>{mark.repeat(3)}</p>
      <ul style={styles.logStats}>
        <LogStat
          name="avg"
          num={roundToOneDecimal(avg)}
        />
        <LogStat
          name="max"
          num={max}
        />
        <LogStat
          name="non-zeroes"
          num={nonzeroes}
        />
        <LogStat
          name="sum"
          num={sum}
        />
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
