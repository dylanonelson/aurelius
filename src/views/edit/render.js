import React from 'react';

import View from './view';
import { Edit } from './components';

const render = () => {
  const dataView = new View();
  dataView.sync();

  return (
    <Edit state={dataView} />
  );
};

export default render;
