import PropTypes from 'prop-types';
import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';

import Header from './components/Header';

function mapStateToProps(state, props) {
  const { logTypeId } = props;

  if (state && state.logTypes && state.logTypes[logTypeId]) {
    return state.logTypes[logTypeId];
  }

  return {};
}

const styles = {
  fieldContainer: {
    position: 'absolute',
    top: 64,
    padding: '0 25px',
  },
};

@connect(
  mapStateToProps,
)
class EditLogType extends React.Component {
  render() {
    const { mark, name } = this.props;

    return (
      <div id="edit-log-type">
        <Header title={`Edit ${name}`} />
        <div style={styles.fieldContainer}>
          <TextField
            defaultValue={name}
            floatingLabelText="Name"
            floatingLabelFixed={true}
          />
          <TextField
            defaultValue={mark}
            floatingLabelText="Mark"
            floatingLabelFixed={true}
          />
        </div>
      </div>
    );
  }
}

EditLogType.propTypes = {
  mark: PropTypes.string,
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
