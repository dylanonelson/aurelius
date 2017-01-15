import React from 'react';

import Buttons from './Buttons';

const styles = {
  container: {
    display: 'flex',
  },
  title: {
    lineHeight: '48px',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 300,
    width: '50%',
  },
};

const LogSummary = ({ logs, logType }) => (
  <div
    id="log-summary"
    style={styles.container}
  >
    <h2 style={styles.title}>
      {logType.name}
    </h2>
    <Buttons logType={logType} logs={logs} />
  </div>
);

LogSummary.propTypes = {
  logs: React.PropTypes.array.isRequired,
  logType: React.PropTypes.object.isRequired,
};

export default LogSummary;
