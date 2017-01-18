import React from 'react';
import Create from 'material-ui/svg-icons/content/create';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

const styles = {
  line: {
    borderBottom: '1px solid rgba(0,0,0,0.3)',
    fontFamily: 'Roboto',
    fontSize: 20,
    height: 70,
    lineHeight: '70px',
    width: '100%',
  },
  mark: {
    float: 'left',
    marginLeft: 27,
  },
  name: {
    float: 'left',
    marginLeft: 27,
  },
  create: {
    float: 'right',
    marginTop: 11,
    marginRight: 3,
  },
  'delete': {
    float: 'right',
    marginTop: 11,
    marginRight: 15,
  },
};

const LogType = ({ logType }) => (
  <li id="edit-log-type" style={styles.line}>
    <span style={styles.mark}>
      {logType.mark}
    </span>
    <span style={styles.name}>
      {logType.name}
    </span>
    <IconButton
      style={styles.delete}
    >
      <Delete />
    </IconButton>
    <IconButton
      style={styles.create}
    >
      <Create />
    </IconButton>
  </li>
);

LogType.propTypes = {
  logType: React.PropTypes.object.isRequired,
};

export default LogType;
