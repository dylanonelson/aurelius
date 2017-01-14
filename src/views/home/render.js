import React from 'react';

import View from './view';
import { Home } from './components';


const render = () => {
  const dataView = new View();
  dataView.sync();

  return (
    <Home state={dataView} />
  );
};

export default render;
