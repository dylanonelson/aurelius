import React from 'react';

const LogHeader = ({ logType, onLogCreate, onLogRemove }) => (
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
      ADD
    </button>
    <button
      onClick={onLogRemove}
    >
      REMOVE
    </button>
  </h3>
)

LogHeader.propTypes = {
  logType: React.PropTypes.object,
  onLogCreate: React.PropTypes.func.isRequired,
};

export default LogHeader;
