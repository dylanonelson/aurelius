import { connect } from 'react-redux';
import Moment from 'moment';

import { Home } from './components';
import { incrementLogType } from '../../redux-modules/logs/actions';

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
