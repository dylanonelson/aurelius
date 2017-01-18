import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';
import React from 'react';

const styles = {
  fab: {
    bottom: 20,
    position: 'fixed',
  },
};

const AddButton = () => (
  <div id="edit-fab">
    <FloatingActionButton
      className="fab"
      style={styles.fab}
    >
      <Add />
    </FloatingActionButton>
  </div>
);

export default AddButton;
