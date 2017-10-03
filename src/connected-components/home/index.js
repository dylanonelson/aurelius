import { connect } from 'react-redux';

import Home from './Home.jsx';

function mapStateToProps(state) {
  const { selectedDate } = state.home;
  const { display } = selectedDate;

  const loading = (state.logs === 'loading' || state.logTypes === 'loading');

  return {
    displayDate: display,
    loading,
    logTypes: state.logTypes === 'loading' ? {} : state.logTypes,
  };
}

export default connect(
  mapStateToProps,
)(Home);
