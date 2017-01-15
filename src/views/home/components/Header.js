import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  appbar: {
    position: 'fixed',
  },
};

const Header = ({ date }) => (
  <AppBar
    style={styles.appbar}
    title={date}
  />
);

Header.propTypes = {
  date: React.PropTypes.string.isRequired,
};

export default Header;
