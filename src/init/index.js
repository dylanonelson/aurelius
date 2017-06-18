import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import React from 'react';

import './firebaseInit';
import './localStorageInit';
import { authenticateUser  } from 'redux-modules/init/actions';
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

store.dispatch(authenticateUser());
