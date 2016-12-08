import React from 'react';
import { observer } from 'mobx-react';

const LogControls = observer(({ onLogCreate, logTypes }) => (
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
));

LogControls.propTypes = {
  logTypes: React.PropTypes.object,
  onLogCreate: React.PropTypes.func,
};

export default LogControls;
