import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Create from 'material-ui/svg-icons/content/create';

// Use full stylesheet to center FAB with translateX
import './fab.css';

const styles = {
  fab: {
    bottom: 20,
    position: 'fixed',
  },
};

const EditButton = () => (
  <FloatingActionButton
    className="fab"
    style={styles.fab}
  >
    <Create />
  </FloatingActionButton>
);

export default EditButton;
