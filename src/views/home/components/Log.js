import React from 'react';
import Marks from './Marks';

const styles = {
  line: {
    padding: 20,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 300,
  },
  count: {
    float: 'right',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 700,
  },
};


const Log = ({ logType, logs }) => (
  <li style={styles.line}>
    <span style={styles.count}>
      {logs.length}
    </span>
    <h2 style={styles.title}>
      {logType.name}
    </h2>
    <Marks
      mark={logType.mark}
      num={logs.length}
    />
  </li>
);

Log.propTypes = {
  logType: React.PropTypes.object.isRequired,
  logs: React.PropTypes.array.isRequired,
};

export default Log;
