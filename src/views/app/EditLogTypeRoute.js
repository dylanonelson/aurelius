import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  const { logTypeId } = props;

  if (state && state.logTypes && state.logTypes[logTypeId]) {
    return state.logTypes[logTypeId];
  }

  return {};
}

@connect(
  mapStateToProps,
)
class EditLogType {
  render() {
    const { name } = this.props;

    return (
      <h1>{name}</h1>
    );
  }
}

const EditLogTypeRoute = ({ match: { logTypeId } }) => {
  return (
    <EditLogType logTypeId={logTypeId} />
  );
};

export default EditLogTypeRoute;
