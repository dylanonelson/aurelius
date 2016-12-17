import autobind from 'autobind-decorator';
import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class BenchmarkTypeControls extends React.Component {
  @observable benchmarkType = {
    mark: '',
    name: '',
  };

  @autobind
  handleChange(e) {
    this.benchmarkType[e.target.name] = e.target.value;
  }

  render() {
    const { onBenchmarkTypeCreate } = this.props;

    return (
      <fieldset>
        <h4>New benchmark type</h4>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          onChange={this.handleChange}
          value={this.benchmarkType.name}
        />
        <label htmlFor="mark">Mark</label>
        <input
          name="mark"
          onChange={this.handleChange}
          value={this.benchmarkType.mark}
        />
        <button onClick={() => onBenchmarkTypeCreate({
          mark: this.benchmarkType.mark,
          name: this.benchmarkType.name,
        })}>
          Create new type
        </button>
      </fieldset>
    );
  }
}

BenchmarkTypeControls.propTypes = {
  onBenchmarkTypeCreate: React.PropTypes.func.isRequired
};

export default BenchmarkTypeControls;
