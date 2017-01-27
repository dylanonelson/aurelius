import React from 'react';
import { List } from 'material-ui/List';
import LogType from './LogType';

const styles = {
  list: {
    position: 'relative',
    top: 64,
  },
};

const LogTypes = ({ logTypes, onLogTypeSelection }) => {
  return (
    <div id="edit-log-types">
      <List style={styles.list}>
        {[...logTypes].map(([id, logType]) => (
          <LogType
            key={id}
            logType={Object.assign({}, logType, { id })}
            onLogTypeSelection={onLogTypeSelection}
          />
         ))}
      </List>
    </div>
  );
};

LogTypes.propTypes = {
  // MobX observable array
  logTypes: React.PropTypes.object.isRequired,
  onLogTypeSelection: React.PropTypes.func.isRequired,
};

export default LogTypes;
