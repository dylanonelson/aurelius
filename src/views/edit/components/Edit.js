import React from 'react';

import AddButton from './AddButton';
import Header from './Header';
import LogTypes from './LogTypes';

const Edit = () => {
  return (
    <div id="edit">
      <Header title="Edit Log Types" />
      <LogTypes />
      <AddButton />
    </div>
  );
};

export default Edit;
