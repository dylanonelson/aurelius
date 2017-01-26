import React from 'react';
import Add from 'material-ui/svg-icons/content/add';
import Checkbox from 'material-ui/Checkbox';
import Remove from 'material-ui/svg-icons/content/remove';

const getStyles = ({ active }) => {
  return {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    title: {
      lineHeight: '56px',
      fontFamily: 'Roboto',
      fontSize: 24,
      fontWeight: 300,
      width: '50%',
    },
    modeToggleContainer: {
      marginTop: 13,
      height: 30,
    },
    icon: {
      height: 30,
      marginRight: 0,
      opacity: active ? '1' : '0.8',
      width: 30,
    },
  };
};

const LogSummary = (props) => {
  const { logType, mode, toggleChecked } = props;
  const styles = getStyles(props);

  return (
    <div
      id="log-summary"
      style={styles.container}
    >
      <h2 style={styles.title}>
        {logType.name}
      </h2>
      <div
        style={styles.modeToggleContainer}
        onTouchTap={toggleChecked}
      >
        <Checkbox
          checked={mode === 'add' ? true : false}
          checkedIcon={<Add />}
          iconStyle={styles.icon}
          uncheckedIcon={<Remove />}
        />
      </div>
    </div>
  );
};

LogSummary.propTypes = {
  active: React.PropTypes.bool,
  logs: React.PropTypes.array.isRequired,
  logType: React.PropTypes.object.isRequired,
  mode: React.PropTypes.string.isRequired,
  toggleChecked: React.PropTypes.func,
};

export default LogSummary;
