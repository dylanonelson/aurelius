import AppBar from 'material-ui/AppBar';
import Back from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

const styles = {
  appbar: {
    position: 'fixed',
  },
};

const Header = ({ title }) => {

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
        zDepth={2}
      />
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
