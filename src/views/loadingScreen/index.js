import CircularProgress from 'material-ui/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { deepPurple700 } from 'material-ui/styles/colors';

import './styles.css';
import LandingPage from '../landingPage';

const getStyles = (loading, isVisible) => ({
  loadingContainer: {
    background: deepPurple700,
    bottom: 0,
    display: isVisible ? 'block' : 'none',
    left: 0,
    opacity: loading ? 1 : 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 10000,
  },
  progress: {
    display: loading ? 'block' : 'none',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
  },
});

class LoadingScreen extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isVisible: props.loading,
    };
  }

  componentWillReceiveProps(nextProps) {
    // Once the opacity transition has finished, hide the whole node.
    if (nextProps.loading === false && this.props.loading === true)
      setTimeout(() => this.setState({ isVisible: false }), 500);
  }

  render() {
    const { children, currentUser, loading } = this.props;
    const styles = getStyles(loading, this.state.isVisible);

    return (
      <main>
        <div className="loading-container" style={styles.loadingContainer}>
          <CircularProgress
            color="white"
            style={styles.progress}
          />
        </div>
        {currentUser === null ? <LandingPage /> : children}
      </main>
    );
  }
}

LoadingScreen.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  currentUser: PropTypes.object,
};

function mapStateToProps(state, props) {
  const { children } = props;
  const { currentUser } = state.init;
  const { logs, logTypes } = state.persistence;
  const loaded = (currentUser === null)
    || (logs && logTypes && currentUser);
  const loading = !loaded;

  return {
    children,
    currentUser,
    loading,
  };
}

export default connect(
  mapStateToProps,
)(LoadingScreen);
