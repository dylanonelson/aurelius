import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { connect } from 'react-redux';

import { logInWithGoogle } from 'redux-modules/init/actions';

const getStyles = ({ palette }) => ({
  buttonRow: {
    marginTop: 40,
  },
  buttonLabel: {
    color: palette.accent1Color,
    fontWeight: 400,
  },
  emojiIcon: {
    fontSize: 65,
    margin: 0,
  },
  h1: {
    color: palette.alternateTextColor,
    display: 'block',
    fontFamily: 'Roboto',
    fontSize: 45,
    fontWeight: 200,
    marginTop: 25,
  },
  h2: {
    color: palette.alternateTextColor,
    display: 'block',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 200,
    marginTop: 25,
  },
  pageTop: {
    backgroundColor: palette.primary1Color,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
  },
  textContent: {
    paddingBottom: 100,
    textAlign: 'center',
  },
});

const LandingPage = ({ logInWithGoogle, muiTheme }) => {
  const styles = getStyles(muiTheme);

  return (
    <section style={styles.pageTop}>
      <div style={styles.textContent}>
        <p style={styles.emojiIcon}>☀️</p>
        <h1 style={styles.h1}>Aurelius</h1>
        <h2 style={styles.h2}>A minimalist self-tracking app</h2>
        <div style={styles.buttonRow}>
          <RaisedButton
            label="Log In with Google"
            labelColor={muiTheme.palette.primary1Color}
            labelStyle={styles.buttonLabel}
            onClick={logInWithGoogle}
          />
        </div>
      </div>
    </section>
  );
};

LandingPage.propTypes = {
  logInWithGoogle: PropTypes.func.isRequired,
  muiTheme: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch, props) {
  return {
    logInWithGoogle: () => dispatch(logInWithGoogle()),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(muiThemeable()(LandingPage));
