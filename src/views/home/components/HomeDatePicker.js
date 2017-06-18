import Moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';
import EventIcon from 'material-ui/svg-icons/action/event';
import RestoreIcon from 'material-ui/svg-icons/action/restore';
import { connect } from 'react-redux';

import { setSelectedDate } from 'redux-modules/home/actions';

const styles = {
  datePicker: {
    display: 'none',
  },
  icon: {
    color: 'white',
  },
};

const HomeDatePicker = ({ selectedDate, todaysDate, selectNewDate }) => {
  const onDateSelection = (e, date) => {
    selectNewDate(Number(Moment(date).format('x')));
  };

  const resetDateToToday = () =>
    selectNewDate(todaysDate);

  const selectedIsToday =
    Moment(todaysDate).format('YYYYMMDD') === Moment(selectedDate).format('YYYYMMDD');
  const d = new Date(selectedDate);
  let datePickerEl = null;

  const datePicker = React.createElement(DatePicker, {
    id: 'home-date-picker',
    onChange: onDateSelection,
    ref: (child) => datePickerEl = child,
    style: styles.datePicker,
    value: d,
  });

  return (selectedIsToday ? (
    <div>
      {datePicker}
      <IconButton
        iconStyle={styles.icon}
        onClick={() => datePickerEl.focus()}
      >
        <EventIcon />
      </IconButton>
    </div>
  ) : (
    <IconButton
      iconStyle={styles.icon}
      onClick={resetDateToToday}
    >
      <RestoreIcon />
    </IconButton>
  ));
};

HomeDatePicker.propTypes = {
  selectedDate: PropTypes.number.isRequired,
  selectNewDate: PropTypes.func.isRequired,
  todaysDate: PropTypes.number.isRequired,
};

function mapStateToProps(state, props) {
  return {
    selectedDate: Number(state.home.selectedDate.milliseconds),
    todaysDate: Number(state.currentDate.milliseconds),
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    selectNewDate: (date) => dispatch(setSelectedDate(date)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeDatePicker);
