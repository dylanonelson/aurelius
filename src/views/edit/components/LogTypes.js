import React from 'react';
import LogType from './LogType';

const styles = {
  list: {
    position: 'relative',
    top: 64,
  },
};

const LogTypes = ({ logTypes }) => {
  return (
    <div id="edit-log-types">
      <ul style={styles.list}>
        {logTypes.map((logType) => <LogType key={logType.id} logType={logType} />)}
      </ul>
    </div>
  );
};

LogTypes.propTypes = {
  // MobX observable array
  logTypes: React.PropTypes.object.isRequired,
};

export default LogTypes;
