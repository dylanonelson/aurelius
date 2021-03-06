import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { deepPurple700 } from 'material-ui/styles/colors';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';

import Edit from 'connected-components/edit';
import Home from 'connected-components/home';
import LoadingScreen from 'connected-components/loading-screen';
import store from '../../redux-store';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple700,
    primary2Color: '#673AB7',
    accent1Color: '#7c4dfe',
    accent2Color: '#C3B7D9',
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
