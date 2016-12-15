import React from 'react';

import Header from './Header';
import Main from './Main';

import './app.css';

const App = ({ state, user }) => (
  <div>
    <Header user={user} />
    <Main
      state={state}
    />
  </div>
);

App.propTypes = {
  user: React.PropTypes.object,
  state: React.PropTypes.object,
};

export default App;
