import React from 'react';
import ReactDOM from 'react-dom';

import { LogTypes, Logs } from './database';

import App from './components/App';
import store from './store';

const render = (user) => {
  const readLogTypes = new Promise(resolve => {
    LogTypes.read().then(types => resolve(types));
  });

  const readLogs = new Promise(resolve => {
    Logs.read().then(logs => resolve(logs));
  });

  return Promise.all([readLogTypes, readLogs]).then(([types, logs]) => {
    store.logs = logs;
    store.logTypes = types;

    const app = (
      <App
        user={user}
        store={store}
      />
    );

    ReactDOM.render(
      app,
      document.getElementById('root')
    );
  })
};

export default render;
