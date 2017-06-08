import { connect } from 'react-redux';

import { Home } from './components';

function mapStateToProps(state) {
  const { selectedDate } = state.home;
  const { display, yearmoday } = selectedDate;

  return {
    displayDate: display,
    loading: !state.logs[yearmoday] || Object.keys(state.logTypes).length === 0,
    logs: state.logs[yearmoday] || {},
  };
}

export default connect(
  mapStateToProps,
)(Home);
