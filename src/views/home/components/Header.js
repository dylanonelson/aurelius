import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  appbar: {
    position: 'fixed',
    top: 0,
  },
};

const Header = ({ date }) => (
  <div id="home-header">
    <AppBar
      style={styles.appbar}
      title={date}
    />
  </div>
);

Header.propTypes = {
  date: React.PropTypes.string.isRequired,
};

export default Header;
