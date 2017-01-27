import React from 'react';
import { asMap, observable } from 'mobx';
import { observer } from 'mobx-react';

import Log from './Log';

const styles = {
  list: {
    // Add bottom margin for FAB
    marginBottom: 100,
    // Spacing beneath tabs
    position: 'relative',
    top: 4,
  },
};

@observer
class Logs extends React.Component {

  @observable modes = asMap({});

  componentWillMount() {
    for (let logType in this.props.logs.keys()) {
      this.modes.set(logType.id, 'add');
    }
  }

  render() {
    const { logs } = this.props;

    return (
      <ul
        style={styles.list}
      >
        {[...logs].map(([logType, logs]) => (
          <Log
            key={logType.id}
            logType={logType}
            logs={logs}
            mode={this.modes.get(logType.id) || 'add'}
            toggleMode={(mode) => this.modes.set(logType.id, mode)}
          />
        ))}
      </ul>
    );
  }
}

Logs.propTypes = {
  // Map of log type objects to a list of log objects
  logs: React.PropTypes.object.isRequired,
};

export default Logs;
