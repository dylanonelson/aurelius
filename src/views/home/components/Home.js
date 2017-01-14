import React from 'react';
import { observer } from 'mobx-react';

@observer
class Home extends React.Component {
  render() {
    const { state } = this.props;

    return (
      <ul>
        {[...state.logMap].map(([logType, logs]) => {
          return (
            <li key={logType.id}>
              {logType.name}
              {logType.mark}
            </li>
          );
        })}
      </ul>
    );
  }
}

Home.propTypes = {
  state: React.PropTypes.object,
}

export default Home;
