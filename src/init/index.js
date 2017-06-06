import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import React from 'react';

import './firebaseInit';
import { actions as initActions } from '../redux-modules/init';
import App from '../views';
import store from '../state';

const renderApp = () => {
  injectTapEventPlugin();

  ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
  );
};

document.addEventListener('DOMContentLoaded', renderApp);

const { authenticateUser } = initActions;

store.dispatch(authenticateUser());
