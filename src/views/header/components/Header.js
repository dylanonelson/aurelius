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

const Header = ({ state }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title={state.date} />
  </MuiThemeProvider>
);

Header.propTypes = {
  state: React.PropTypes.object.isRequired,
}

export default Header;
