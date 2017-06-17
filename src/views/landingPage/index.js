import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import { logInWithGoogle } from 'redux-modules/init/actions';

const styles = {
};

const LandingPage = ({ logInWithGoogle }) => {
  return (
    <div>
      <h1>Aurelius</h1>
      <button onClick={logInWithGoogle}>
        Log In with Google
      </button>
    </div>
  );
};

LandingPage.propTypes = {
  logInWithGoogle: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch, props) {
  return {
    logInWithGoogle: () => dispatch(logInWithGoogle()),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(LandingPage);
