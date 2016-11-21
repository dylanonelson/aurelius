import React from 'react';
import Firebase from 'firebase';

const Header = ({ user }) => (
  <header>
    <span
      style={{
        float: 'left',
      }}
    >
      {`Hello ${user.displayName}`}
    </span>
    <button
      style={{
        float: 'right',
      }}
      onClick={() => {
        Firebase.auth().signOut();
      }}
    >
      Log out
    </button>
    <button
      style={{
        float: 'right',
      }}
      onClick={() => {
        Firebase.auth().currentUser.delete()
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            document.write(error);
          });
      }}
    >
      Delete account
    </button>
  </header>
);

export default Header;
