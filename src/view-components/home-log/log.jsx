import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import React from 'react';

import LogControls from './LogControls.jsx';
import LogDetails from './LogDetails.jsx';
import LogSummary from './LogSummary.jsx';

import './log.css';

const styles = {
  line: {
    height: 175,
    margin: '0 15px 15px 15px',
    position: 'relative',
  },
};

class Log extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.count !== this.props.count ||
      nextProps.dateString !== this.props.dateString
    );
  }

  render() {
    const { addLog, count, logType, removeLog } = this.props;

    const children = (
      <div>
        <LogSummary
          logType={logType}
          numLogs={count}
        />
        <LogDetails
          logType={logType}
          numLogs={count}
        />
        <LogControls
          removeLog={removeLog}
          addLog={addLog}
        />
      </div>
    );

    return (
      <li className="log">
        <Paper
          children={children}
          style={styles.line}
          zDepth={1}
        />
      </li>
    );
  }
}

Log.propTypes = {
  count: PropTypes.number.isRequired,
  dateString: PropTypes.string.isRequired,
  addLog: PropTypes.func.isRequired,
  removeLog: PropTypes.func.isRequired,
  logType: PropTypes.object.isRequired,
};

export default Log;
