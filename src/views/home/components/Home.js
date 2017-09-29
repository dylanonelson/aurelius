import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import React from 'react';

import EditButton from './EditButton';
import HomeDatePicker from './HomeDatePicker';
import Logs from './Logs';
import WeeklySummary from './WeeklySummary.jsx';

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
    const { displayDate, logTypes } = this.props;

    return (
      <div id="home">
        {this.getHeader(displayDate)}
        <Logs
          logTypes={logTypes}
        />
        <WeeklySummary
          logTypes={logTypes}
        />
        <EditButton />
      </div>
    );
  }

  getHeader() {
    const { displayDate } = this.props;

    return (
      <div id="home-header">
        <AppBar
          iconElementRight={<HomeDatePicker />}
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
  logTypes: PropTypes.object.isRequired,
};

export default Home;
