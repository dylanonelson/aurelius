import AddCircle from 'material-ui/svg-icons/content/add-circle';
import IconButton from 'material-ui/IconButton';
import Moment from 'moment';
import React from 'react';
import RemoveCircleOutline from 'material-ui/svg-icons/content/remove-circle-outline';

import { data } from '../../../data';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '50%',
  },
  button: {
    float: 'right',
    right: -15,
  },
};

const Buttons = ({ logType, logs }) => {

  const callbacks = {
    removeLog: () => {
      return logs.length > 0 ?
        data.CURRENT_LOGS.delete(logs[logs.length - 1].id) :
        null;
    },
    addLog: () => {
      return data.CURRENT_LOGS.write({
        logType: logType.id,
        date: Moment().format('YYYY-MM-DD'),
      });
    },
  };

  const removeButtonStyle = Object.assign({}, styles.button, {
    display: logs.length > 0 ? 'block' : 'none',
  });

  return (
    <div
      id="log-buttons"
      style={styles.container}
    >
      <IconButton
        onClick={callbacks.removeLog}
        style={removeButtonStyle}
      >
        <RemoveCircleOutline />
      </IconButton>
      <IconButton
        onClick={callbacks.addLog}
        style={styles.button}
      >
        <AddCircle />
      </IconButton>
    </div>
  );
};

Buttons.propTypes = {
  logType: React.PropTypes.object.isRequired,
  logs: React.PropTypes.array.isRequired,
};

export default Buttons;
