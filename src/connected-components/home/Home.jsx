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
    flexWrap: 'wrap',
    position: 'sticky',
    top: -64,
  },
  bodyFrame: {
    boxSizing: 'border-box',
    height: 'calc(100% - 64px - 48px)',
    top: 64 + 48,
    overflow: 'scroll',
    paddingBottom: 100,
    paddingTop: 15,
    width: '100%',
  },
  tabs: {
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
        <div id="body-frame" style={styles.bodyFrame}>
          {this.getBody()}
        </div>
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
      <AppBar
        children={this.getTabs()}
        iconElementRight={<HomeDatePicker />}
        showMenuIconButton={false}
        style={styles.appbar}
        title={title}
        zDepth={2}
      />
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
