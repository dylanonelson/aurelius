import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import React from 'react';

import Logs from './Logs';
import EditButton from './EditButton';


const styles = {
  appbar: {
    position: 'fixed',
    top: 0,
  },
  tabs: {
    position: 'relative',
    top: 64,
  },
};

class Home extends React.Component {
  render() {
    const { displayDate, loading, logs, logTypes } = this.props;

    return (
      <div id="home">
        {this.getHeader(displayDate)}
        <Logs
          loading={loading}
          logs={logs}
        />
        <EditButton />
      </div>
    );
  }

  getHeader(displayDate) {
    return (
      <div id="home-header">
        <AppBar
          style={styles.appbar}
          title={displayDate}
          zDepth={0}
        />
      </div>
    );
  }
}

Home.propTypes = {
  displayDate: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  logs: PropTypes.object.isRequired,
};

export default Home;
