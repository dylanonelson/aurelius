import React from 'react';

import Buttons from './Buttons';
import Marks from './Marks';

const styles = {
  container: {
    display: 'flex',
    marginTop: 15,
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
    <Buttons logType={logType} logs={logs} />
  </div>
);

LogDetails.propTypes = {
  logType: React.PropTypes.object.isRequired,
  logs: React.PropTypes.array.isRequired,
};

export default LogDetails;
