import { connect } from 'react-redux';

import { Home } from './components';

function mapStateToProps(state) {
  const { currentDate } = state;

  return {
    displayDate: currentDate.display,
    loading: !(Object.keys(state.logs).length > 0 && Object.keys(state.logTypes).length > 0),
    logs: state.logs[state.currentDate.yearmoday] || {},
  };
}

export default connect(
  mapStateToProps,
)(Home);
