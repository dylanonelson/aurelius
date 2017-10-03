import PropTypes from 'prop-types';
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Create from 'material-ui/svg-icons/content/create';
import { Link } from 'react-router';

// Use full stylesheet to center FAB with translateX
import './fab.css';

const styles = {
  fab: {
    bottom: 20,
    position: 'fixed',
  },
};

const EditButton = ({ onClick }) => (
  <Link to="/edit">
    <FloatingActionButton
      className="fab"
      style={styles.fab}
      onClick={onClick}
    >
      <Create />
    </FloatingActionButton>
  </Link>
);

EditButton.propTypes = {
  onClick: PropTypes.func,
};

export default EditButton;
