import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  const { id } = props;

  if (state.logTypes && state.logTypes[id]) {
    return state.logTypes[id];
  }

  return {};
}

class EditLogType extends React.Component {
  render() {
}

EditLogType.propTypes = {
  name: PropTypes.string,
  mark: PropTypes.string,
};

export default connect(
  mapStateToProps,
)(EditLogType);
