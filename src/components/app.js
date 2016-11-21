import React from 'react';
import firebase from 'firebase';

const App = ({ user }) => (
  <header>
    <h1>
      {`Hello ${user.displayName}`}
    </h1>
    <button
      onClick={() => {
        firebase.auth().signOut();
      }}
    >
      Log out
    </button>
  </header>
);

App.propTypes = {
  user: React.PropTypes.object,
};

export default App;
