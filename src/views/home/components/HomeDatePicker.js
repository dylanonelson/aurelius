import Moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';
import EventIcon from 'material-ui/svg-icons/action/event';
import { connect } from 'react-redux';

import { setSelectedDate } from 'redux-modules/home/actions';

const styles = {
  datePicker: {
    display: 'none',
  },
  iconButton: {
  },
  icon: {
    color: 'white',
  },
};

const HomeDatePicker = ({ selectedDate, selectNewDate }) => {
  const onDateSelection = (e, date) => {
    selectNewDate(Number(Moment(date).format('x')));
  };

  const d = new Date(selectedDate);
  let datePickerEl = null;

  const datePicker = React.createElement(DatePicker, {
    id: 'home-date-picker',
    onChange: onDateSelection,
    ref: (child) => datePickerEl = child,
    style: styles.datePicker,
    value: d,
  });

  return (
    <div>
      {datePicker}
      <IconButton
        iconStyle={styles.icon}
        onClick={() => datePickerEl.focus()}
        style={styles.iconButton}
      >
        <EventIcon />
      </IconButton>
    </div>
  );
};

HomeDatePicker.propTypes = {
  selectedDate: PropTypes.number.isRequired,
  selectNewDate: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {
    selectedDate: Number(state.home.selectedDate.milliseconds),
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
