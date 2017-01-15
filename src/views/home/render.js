import React from 'react';

import View from './view';
import { Home } from './components';

const render = () => {
  const dataView = new View();
  dataView.sync();
  console.log('yo');

  return (
    <Home state={dataView} />
  );
};

export default render;
