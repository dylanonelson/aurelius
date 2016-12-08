import React from 'react';

import Header from './Header';
import Main from './Main';

import './app.css';

const App = ({ user, store }) => (
  <div>
    <Header user={user} />
    <Main
      store={store}
    />
  </div>
);

App.propTypes = {
  user: React.PropTypes.object,
  store: React.PropTypes.object,
};

export default App;
