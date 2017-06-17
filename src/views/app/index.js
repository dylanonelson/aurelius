import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepPurple700 } from 'material-ui/styles/colors';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';

import Edit from '../edit';
import Home from '../home';
import LoadingScreen from '../loadingScreen';
import store from '../../state';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple700,
    accent1Color: '#7c4dfe',
  },
});

const App = (props) => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <LoadingScreen>
        {props.children}
      </LoadingScreen>
    </MuiThemeProvider>
  </Provider>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};

App.displayName = 'App';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'edit', component: Edit },
  ],
};

const router = (props) => (
  <Router history={hashHistory} routes={routes} />
);

router.displayName = 'AppRouter';

export default router;
