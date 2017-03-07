import Add from 'material-ui/svg-icons/content/add';
import Create from 'material-ui/svg-icons/content/create';
import IconButton from 'material-ui/IconButton';
import React from 'react';
import Remove from 'material-ui/svg-icons/content/remove';

const getStyles = () => ({
  addIcon: {
    color: '#7c4dfe',
    height: 46,
    width: 46,
  },
  addButton: {
    height: 70,
    width: 70,
  },
  row: {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-around',
    left: 0,
    margin: '0 15px',
    position: 'absolute',
    right: 0,
  },
  secondaryButton: {
    height: 64,
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
        style={styles.secondaryButton}
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
  addLog: React.PropTypes.func,
  removeLog: React.PropTypes.func,
  editLogs: React.PropTypes.func,
};

export default LogControls;
