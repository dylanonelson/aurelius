import React from 'react';

import View from './view';
import { Header } from './components';

const render = () => {
  const dataView = new View();
  dataView.sync();

  return (
    <Header state={dataView} />
  );
}

export default render;
