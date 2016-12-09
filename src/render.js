import React from 'react';
import ReactDOM from 'react-dom';

import db from './data';

import App from './components/App';

const render = (user) => {
  db.initialize();

  const app = (
    <App
      user={user}
      store={db}
    />
  );

  ReactDOM.render(
    app,
    document.getElementById('root')
  );
};

export default render;
