import React from 'react';

class LogTypeControls extends React.Component {
  render() {
    const { onLogTypeCreate, logTypes } = this.props;
    return (
      <div>
        <label htmlFor="log-type-name">Name</label>
        <input
          name="log-type-name"
          onChange={(e) => {
            this.setState({
              name: e.target.value
            });
          }}
        />
        <label htmlFor="log-type-mark">Mark</label>
        <input
          name="log-type-mark"
          onChange={(e) => {
            this.setState({
              mark: e.target.value
            });
          }}
        />
        <button
          onClick={(e) => onLogTypeCreate(this.state)}
        >
          Create new type
        </button>
      </div>
    );
  }
}

LogTypeControls.propTypes = {
  onLogTypeCreate: React.PropTypes.func,
  logTypes: React.PropTypes.object,
};

export default LogTypeControls;
