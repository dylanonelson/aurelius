import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import LogType from './LogType';

const styles = {
  list: {
    position: 'relative',
    top: 64,
  },
};

function mapStateToProps(state) {
  const { logTypes } = state;
  if (logTypes === 'loading') return { logTypes: {} };
  return { logTypes };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogTypeSelection: () => console.log('Yo'),
  };
}

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class LogTypes extends React.Component {
  render() {
    const { logTypes } = this.props;

    return (
      <div id="edit-log-types">
        <List style={styles.list}>
          {logTypes && Object.keys(logTypes).map(id => {
            const logType = logTypes[id];

            return (
              <LogType
                key={id}
                logType={Object.assign({}, logType, { id })}
              />
            );
           })}
        </List>
      </div>
    );
  }
}

LogTypes.propTypes = {
  logTypes: PropTypes.object.isRequired,
};

export default LogTypes;
