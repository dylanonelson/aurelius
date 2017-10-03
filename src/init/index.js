import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import React from 'react';

import './firebaseInit';
import './index.css';
import './localStorageInit';
import App from './root-component';
import store from '../redux-store';
import { authenticateUser  } from 'redux-modules/init/actions';

const renderApp = () => {
  injectTapEventPlugin();

  ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
  );
};

document.addEventListener('DOMContentLoaded', renderApp);

store.dispatch(authenticateUser());
