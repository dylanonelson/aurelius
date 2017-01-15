import React from 'react';

const styles = {
  count: {
    float: 'right',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 700,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 300,
  },
};

const LogSummary = ({ logs, logType }) => (
  <div id="log-summary">
    <span style={styles.count}>
      {logs.length}
    </span>
    <h2 style={styles.title}>
      {logType.name}
    </h2>
  </div>
);

LogSummary.propTypes = {
  logs: React.PropTypes.array.isRequired,
  logType: React.PropTypes.object.isRequired,
};

export default LogSummary;
