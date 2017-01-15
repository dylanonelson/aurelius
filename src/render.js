import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo500 } from 'material-ui/styles/colors';
import { Router, hashHistory } from 'react-router';

import './app.css';
import { bindData, data, state } from './data';
import { Home, Edit } from './views';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
  },
});

const App = (props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    {props.children}
  </MuiThemeProvider>
);

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
  bindData(data, state);

  ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('body')
  );
};

export default render;
