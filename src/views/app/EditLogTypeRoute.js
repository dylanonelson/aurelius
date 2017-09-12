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

const EditLogTypeRoute = ({ params: { logTypeId } }) => {
  return (
    <EditLogType logTypeId={logTypeId} />
  );
};

export default EditLogTypeRoute;
