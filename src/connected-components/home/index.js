import { connect } from 'react-redux';

import Home from './Home.jsx';
import { selectors as currentDateSelectors } from 'redux-modules/currentDate';

function mapStateToProps(state) {
  const { selectedDate } = state.home;
  const { display } = selectedDate;
  const beginningOfCurrentISOWeek = currentDateSelectors.beginningOfCurrentISOWeekSelector(state);

  const loading = (state.logs === 'loading' || state.logTypes === 'loading');

  return {
    beginningOfCurrentISOWeek,
    displayDate: display,
    loading,
    logTypes: state.logTypes === 'loading' ? {} : state.logTypes,
  };
}

export default connect(
  mapStateToProps,
)(Home);
