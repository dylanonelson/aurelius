import React from 'react';
import ReactDOM from 'react-dom';

import { LogTypes, Logs } from './database';

import App from './components/App';

const render = (user) => {
  const readLogTypes = new Promise(resolve => {
    LogTypes.read().then(types => resolve(types));
  });

  const readLogs = new Promise(resolve => {
    Logs.read().then(logs => resolve(logs));
  });

  return Promise.all([readLogTypes, readLogs]).then(([types, logs]) => {
    const app = (
      <App
        user={user}
        logTypes={types}
        logs={logs}
      />
    );

    ReactDOM.render(
      app,
      document.getElementById('root')
    );
  })
};

export default render;
