import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const render = (user) => {
  ReactDOM.render(
    <App
      user={user}
    />,
    document.getElementById('root')
  )
};

export default render;
