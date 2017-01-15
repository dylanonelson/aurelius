import React from 'react';
import { observer } from 'mobx-react';

import Header from './Header';
import Logs from './Logs';
import EditButton from './EditButton';

@observer
class Home extends React.Component {
  render() {
    const { state } = this.props;

    return (
      <div id="home">
        <Header date={state.date} />
        <Logs logs={state.logMap} />
        <EditButton />
      </div>
    );
  }
}

Home.propTypes = {
  state: React.PropTypes.object.isRequired,
};

export default Home;
