import PropTypes from 'prop-types';
import React from 'react';
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
class EditLogType extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <h1>{name}</h1>
    );
  }
}

EditLogType.propTypes = {
  name: PropTypes.string,
};

const EditLogTypeRoute = ({ params: { logTypeId } }) => {
  return (
    <EditLogType logTypeId={logTypeId} />
  );
};

EditLogTypeRoute.propTypes = {
  params: PropTypes.object,
};

export default EditLogTypeRoute;
