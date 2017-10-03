import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepPurple700 } from 'material-ui/styles/colors';
import { Router, hashHistory } from 'react-router';

import Home from 'connected-components/home';
import { Edit } from './views';
import './app.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple700,
    accent1Color: '#7c4dfe',
  },
});

const App = (props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    {props.children}
  </MuiThemeProvider>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'edit', component: Edit },
  ],
};

const render = () => {
  injectTapEventPlugin();

  ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('root')
  );
};

export default render;
