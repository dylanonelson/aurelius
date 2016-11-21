import React from 'react';
import firebase from 'firebase';

import Header from './Header';
import Main from './Main';

const App = ({ user }) => (
  <div>
    <Header user={user} />
    <Main />
  </div>
);

App.propTypes = {
  user: React.PropTypes.object,
};

export default App;
