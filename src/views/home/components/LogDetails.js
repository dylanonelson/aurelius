import React from 'react';

import Marks from './Marks';

const styles = {
  container: {
    display: 'flex',
    marginTop: 15,
  },
  count: {
    width: '50%',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 100,
    textAlign: 'right',
  },
};

const LogDetails = ({ logType, logs }) => (
  <div
    id="log-details"
    style={styles.container}
  >
    <Marks
      mark={logType.mark}
      num={logs.length}
    />
    <span style={styles.count}>
      {logs.length}
    </span>
  </div>
);

LogDetails.propTypes = {
  logType: React.PropTypes.object.isRequired,
  logs: React.PropTypes.array.isRequired,
};

export default LogDetails;
