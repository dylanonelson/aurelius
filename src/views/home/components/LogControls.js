import Add from 'material-ui/svg-icons/content/add';
import Create from 'material-ui/svg-icons/content/create';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import Remove from 'material-ui/svg-icons/content/remove';

const getStyles = () => ({
  addIcon: {
    color: '#7c4dfe',
    height: 46,
    width: 46,
  },
  addButton: {
    bottom: 0,
    height: 70,
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    width: 70,
  },
  row: {
    bottom: 0,
    left: 0,
    margin: '0 15px',
    position: 'absolute',
    right: 0,
  },
  secondaryButton: {
    height: 64,
    position: 'absolute',
    transform: 'translateX(-50%)',
    width: 64,
  },
  secondaryIcon: {
    color: '#9b9b9b',
    height: 40,
    width: 40,
  },
});

const LogControls = (props) => {
  const { addLog, editLogs, removeLog } = props;
  const styles = getStyles(props);

  return (
    <div style={styles.row}>
      <IconButton
        iconStyle={styles.secondaryIcon}
        onClick={removeLog}
        style={Object.assign({}, styles.secondaryButton, {
          bottom: 3,
          left: '20%',
        })}
      >
        <Remove />
      </IconButton>
      <IconButton
        onClick={addLog}
        iconStyle={styles.addIcon}
        style={styles.addButton}
      >
        <Add />
      </IconButton>
      <IconButton
        iconStyle={Object.assign({}, styles.secondaryIcon, {
          height: 30,
          width: 30,
        })}
        onClick={editLogs}
        style={Object.assign({}, styles.secondaryButton, {
          bottom: 8,
          left: 'calc(80% - 4px)',
          height: 54,
          width: 54,
        })}
      >
        <Create />
      </IconButton>
    </div>
  );
};

LogControls.propTypes = {
  addLog: PropTypes.func,
  removeLog: PropTypes.func,
  editLogs: PropTypes.func,
};

export default LogControls;
