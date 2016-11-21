import React from 'react';
import ReactDOM from 'react-dom';

import database from './database';

import App from './components/App';

const render = (user) => (new Promise((resolve) => {
  database.readThoughts().then((thoughts) => {
    let dysfunctionalThoughts = [],
      productiveThoughts = [];

    if (thoughts) {
      dysfunctionalThoughts = Object.keys(thoughts).reduce((memo, key) => {
        if (thoughts[key].type === 'dysfunctional') {
          memo.push(thoughts[key]);
        }
        return memo;
      }, []);

      productiveThoughts = Object.keys(thoughts).reduce((memo, key) => {
        if (thoughts[key].type === 'productive') {
          memo.push(thoughts[key]);
        }
        return memo;
      }, []);
    }

    const app = (
      <App
        user={user}
        dysfunctionalThoughts={dysfunctionalThoughts}
        productiveThoughts={productiveThoughts}
      />
    );

    ReactDOM.render(
      app,
      document.getElementById('root')
    );

    resolve(app);
  })
}));

export default render;
