import { observer } from 'mobx-react';
import { Tab, Tabs } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
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

@observer
class Home extends React.Component {
  render() {
    const { state } = this.props;
    const { dailyLogMap, date, loading, weeklyLogMap } = state;

    return (
      <div id="home">
        {this.getHeader({ date })}
        {this.getTabs({ dailyLogMap, loading, weeklyLogMap })}
        <EditButton />
      </div>
    );
  }

  getHeader({ date }) {
    return (
      <div id="home-header">
        <AppBar
          style={styles.appbar}
          title={date}
          zDepth={0}
        />
      </div>
    );
  }

  getTabs({ dailyLogMap, weeklyLogMap, loading }) {
    return (
      <Tabs style={styles.tabs}>
        <Tab label="TODAY">
          <Logs
            loading={loading}
            logs={dailyLogMap}
          />
        </Tab>
        <Tab label="THIS WEEK">
          <Logs logs={weeklyLogMap} />
        </Tab>
      </Tabs>
    );
  }
}

Home.propTypes = {
  state: React.PropTypes.object.isRequired,
};

export default Home;
