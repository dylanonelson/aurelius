import Avatar from 'material-ui/avatar';
import Create from 'material-ui/svg-icons/content/create';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import React from 'react';
import { ListItem } from 'material-ui/List';

const styles = {
  avatar: {
    background: 'transparent',
  },
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
  <ListItem
    id="edit-log-type"
    primaryText={logType.name}
    leftAvatar={<Avatar style={styles.avatar}>{logType.mark}</Avatar>}
    rightIcon={<Create />}
  />
);

LogType.propTypes = {
  logType: React.PropTypes.object.isRequired,
};

export default LogType;
