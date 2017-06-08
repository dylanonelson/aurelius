import PropTypes from 'prop-types';
import React from 'react';
import TextField from 'material-ui/TextField';

const EditableLogType = ({ name, mark, onChange }) => (
  <fieldset>
    <TextField
      floatingLabelText="Name"
      value={name}
      name="name"
      onChange={onChange}
    >
    </TextField>
    <TextField
      floatingLabelText="Mark"
      value={mark}
      name="mark"
      onChange={onChange}
    >
    </TextField>
  </fieldset>
);

EditableLogType.propTypes = {
  name: PropTypes.string,
  mark: PropTypes.string,
  onChange: PropTypes.func,
};

export default EditableLogType;
