import React from 'react';

const LogHeader = ({ logType, onLogCreate }) => (
  <h3>
    <p
      style={{
        display: 'inline',
        paddingRight: '10px',
      }}
    >
      {logType.name}
    </p>
    <button
      onClick={onLogCreate}
    >
      {logType.mark}
    </button>
  </h3>
)

LogHeader.propTypes = {
  logType: React.PropTypes.object,
  onLogCreate: React.PropTypes.func.isRequired,
};

export default LogHeader;
