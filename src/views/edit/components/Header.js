import AppBar from 'material-ui/AppBar';
import Back from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
import React from 'react';

const styles = {
  appbar: {
    position: 'fixed',
  },
};

const Header = () => {

  const backButton = (
    <Link to="/">
      <IconButton>
        <Back color="white" />
      </IconButton>
    </Link>
  );

  return (
    <div id="edit-header">
      <AppBar
        iconElementLeft={backButton}
        style={styles.appbar}
        title="Edit Log Types"
        zDepth={4}
      />
    </div>
  );
};

export default Header;
