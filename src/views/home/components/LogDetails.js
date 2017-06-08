import PropTypes from 'prop-types';
import React from 'react';

import Marks from './Marks';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: 25,
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
  logType: PropTypes.object.isRequired,
  numLogs: PropTypes.number.isRequired,
};

export default LogDetails;
