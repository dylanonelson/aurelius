import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Tab, Tabs } from 'material-ui/Tabs';

import EditButton from './EditButton.jsx';
import HomeDatePicker from './HomeDatePicker.jsx';
import Logs from './Logs.jsx';
import WeeklySummary from './WeeklySummary.jsx';

const styles = {
  appbar: {
    position: 'fixed',
    top: 0,
  },
  tabs: {
    position: 'relative',
    top: 64,
    width: '100%',
  },
};

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      route: '/today',
    };
    this.handleActiveTab = this.handleActiveTab.bind(this);
  }

  render() {
    const { displayDate } = this.props;

    return (
      <div id="home">
        {this.getHeader(displayDate)}
        {this.getTabs()}
        {this.getBody()}
        <EditButton />
      </div>
    );
  }

  getBody() {
    switch (this.state.route) {
      case '/this-week': {
        return (
          <WeeklySummary
            logTypes={this.props.logTypes}
          />
        );
      }
      default: {
        return (
          <Logs
            logTypes={this.props.logTypes}
          />
        );
      }
    }
  }

  handleActiveTab({ props }) {
    const route = props['data-route'];
    this.setState({ route });
  }

  getHeader() {
    const { beginningOfCurrentISOWeek, displayDate } = this.props;
    const { route } = this.state;

    const title = route === '/this-week'
      ? `Since ${moment(beginningOfCurrentISOWeek).format('MMMM D')}`
      : displayDate;

    return (
      <div id="home-header">
        <AppBar
          iconElementRight={<HomeDatePicker />}
          style={styles.appbar}
          showMenuIconButton={false}
          title={title}
          zDepth={0}
        />
      </div>
    );
  }

  getTabs() {
    return (
      <Tabs
        style={styles.tabs}
      >
        <Tab
          data-route="/today"
          label="Today"
          onActive={this.handleActiveTab}
        />
        <Tab
          data-route="/this-week"
          label="This week"
          onActive={this.handleActiveTab}
        />
      </Tabs>
    );
  }
}

Home.propTypes = {
  beginningOfCurrentISOWeek: PropTypes.string.isRequired,
  displayDate: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  logTypes: PropTypes.object.isRequired,
};

export default Home;
