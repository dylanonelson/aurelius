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

const LogDetails = ({ logType, logs }) => (
  <div
    id="log-details"
    style={styles.container}
  >
    <Marks
      mark={logType.mark}
      num={logs.length}
    />
  </div>
);

LogDetails.propTypes = {
  logType: React.PropTypes.object.isRequired,
  logs: React.PropTypes.array.isRequired,
};

export default LogDetails;
