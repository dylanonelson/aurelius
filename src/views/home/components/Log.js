import React from 'react';

import LogDetails from './LogDetails';
import LogSummary from './LogSummary';

const styles = {
  line: {
    padding: 20,
    borderBottom: '1px solid rgba(0,0,0,0.3)',
  },
};

const Log = (props) => (
  <li style={styles.line}>
    <LogSummary {...props} />
    <LogDetails {...props} />
  </li>
);

Log.propTypes = {
  logType: React.PropTypes.object.isRequired,
  logs: React.PropTypes.array.isRequired,
};

export default Log;
