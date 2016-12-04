import React from 'react';

import Header from './Header';
import Main from './Main';

import './app.css';

const App = ({ user, logTypes, logs }) => (
  <div>
    <Header user={user} />
    <Main
      logs={logs}
      logTypes={logTypes}
    />
  </div>
);

App.propTypes = {
  user: React.PropTypes.object,
  logTypes: React.PropTypes.object.isRequired,
  logs: React.PropTypes.object.isRequired,
};

export default App;
