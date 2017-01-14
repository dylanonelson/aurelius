import React from 'react';
import AppBar from 'material-ui/AppBar';
import { indigo500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
  },
});

const Header = ({ date }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title={date} />
  </MuiThemeProvider>
);

Header.propTypes = {
  date: React.PropTypes.string.isRequired,
};

export default Header;
