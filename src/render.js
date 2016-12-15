import React from 'react';
import ReactDOM from 'react-dom';

import { bindData, data, state } from './data';

import App from './components/App';

const render = (user) => {
  bindData(data, state);

  const app = (
    <App
      user={user}
      state={state}
    />
  );

  ReactDOM.render(
    app,
    document.getElementById('root')
  );
};

export default render;
