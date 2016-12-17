import autobind from 'autobind-decorator';
import React from 'react';
import { data } from '../data';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class BenchmarkControls extends React.Component {

  @observable value = null;
  @observable selectedType = null;

  @autobind
  handleBenchmarkCreate() {
    const { state } = this.props;

    // Default to first available type
    const benchmarkType =
      this.selectedType ? this.selectedType : state.benchmarkTypes.keys().next().value;
    const { date } = state;
    const value = parseInt(this.value);

    data.CURRENT_BENCHMARKS.write({ benchmarkType, date, value });
  }

  render() {
    const { state } = this.props;

    return (
      <fieldset>
        <h3>New benchmark</h3>
        <label htmlFor="type">Type: </label>
        <select
          name="type"
          onChange={(e) => this.selectedType = e.target.value}
        >
          {[...state.benchmarkTypes].map(([id, type]) => (
            <option
              value={id}
              key={id}
            >
              {type.name}
            </option>
          ))}
        </select>
        <label htmlFor="value">Value</label>
        <input
          name="value"
          onChange={(e) => this.value = e.target.value}
        />
        <button onClick={this.handleBenchmarkCreate}>Save</button>
      </fieldset>
    );
  }
}

BenchmarkControls.propTypes = {
  state: React.PropTypes.object,
};

export default BenchmarkControls;
