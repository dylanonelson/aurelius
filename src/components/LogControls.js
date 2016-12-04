import React from 'react';

const LogControls = ({ onLogCreate, logTypes }) => (
  <div>
    {Object.keys(logTypes).map((type) => (
      <button
        key={type}
        onClick={() => onLogCreate(type)}
      >
        {logTypes[type].name.split('_').join(' ')}
      </button>
    ))}
  </div>
);

LogControls.propTypes = {
  onLogCreate: React.PropTypes.func
};

export default LogControls;
