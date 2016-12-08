import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class LogTypeControls extends React.Component {

  @observable logType = {
    mark: '',
    name: '',
  };

  render() {
    const { onLogTypeCreate } = this.props;
    return (
      <div>
        <label htmlFor="log-type-name">Name</label>
        <input
          name="log-type-name"
          onChange={e => this.logType.name = e.target.value }
        />
        <label htmlFor="log-type-mark">Mark</label>
        <input
          name="log-type-mark"
          onChange={e => this.logType.mark = e.target.value }
        />
        <button
          onClick={() => onLogTypeCreate(this.logType)}
        >
          Create new type
        </button>
      </div>
    );
  }
}

LogTypeControls.propTypes = {
  onLogTypeCreate: React.PropTypes.func,
};

export default LogTypeControls;
