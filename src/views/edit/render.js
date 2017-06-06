import React from 'react';

import { state } from '../../persistence';
import { Edit } from './components';

const render = () => {
  return (
    <Edit state={state} />
  );
};

export default render;
