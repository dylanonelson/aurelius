import React from 'react';

import Marks from './Marks';

const styles = {
  container: {
    display: 'flex',
    marginTop: 15,
    position: 'relative',
  },
  count: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 300,
    textAlign: 'right',
    position: 'absolute',
    right: 9,
    bottom: 0,
    width: '50%',
  },
};

const LogDetails = ({ logType, logs }) => (logs.length === 0 ? null : (
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
));

LogDetails.propTypes = {
  logType: React.PropTypes.object.isRequired,
  logs: React.PropTypes.array.isRequired,
};

export default LogDetails;
