import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  fab: {
    bottom: 20,
    position: 'fixed',
  },
};

const AddButton = ({ onClick }) => (
  <div id="edit-fab">
    <FloatingActionButton
      className="fab"
      onClick={onClick}
      style={styles.fab}
    >
      <Add />
    </FloatingActionButton>
  </div>
);

AddButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddButton;
