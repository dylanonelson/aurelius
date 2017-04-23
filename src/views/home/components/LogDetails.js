import React from 'react';

import Marks from './Marks';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: 104,
    justifyContent: 'center',
    position: 'relative',
  },
};

const LogDetails = ({ logType, numLogs }) => (
  <div
    id="log-details"
    style={styles.container}
  >
    <Marks
      mark={logType.mark}
      num={numLogs}
    />
  </div>
);

LogDetails.propTypes = {
  logType: React.PropTypes.object.isRequired,
  numLogs: React.PropTypes.number.isRequired,
};

export default LogDetails;
