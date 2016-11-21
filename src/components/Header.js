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
          .catch(error => {
            document.write(error);
          });
      }}
    >
      Delete account
    </button>
  </header>
);

Header.propTypes = {
  user: React.PropTypes.object,
};

export default Header;
