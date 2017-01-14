import React from 'react';
import AppBar from 'material-ui/AppBar';

const Header = ({ date }) => (
  <AppBar title={date} />
);

Header.propTypes = {
  date: React.PropTypes.string.isRequired,
};

export default Header;
