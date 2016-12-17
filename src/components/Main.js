import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';

import BenchmarkControls from './BenchmarkControls';
import BenchmarkList from './BenchmarkList';
import BenchmarkTypeControls from './BenchmarkTypeControls';
import LogList from './LogList';
import LogTypeControls from './LogTypeControls';
import { data } from '../data';

@observer
class Main extends React.Component {

  @autobind
  handleLogCreate(logType) {
    const { date } = this.props.state;
    data.CURRENT_LOGS.write({ logType, date });
  }

  handleLogTypeCreate(logType) {
    data.LOG_TYPES.write(logType);
  }

  handleBenchmarkTypeCreate(benchmarkType) {
    data.BENCHMARK_TYPES.write(benchmarkType);
  }

  render() {
    return (
      <main>
        <h1>{this.props.state.date}</h1>
        <LogList
          logTypes={this.props.state.logTypes}
          logs={this.props.state.logs}
          onLogCreate={this.handleLogCreate}
        />
        <BenchmarkList
          types={this.props.state.benchmarkTypes}
          benchmarks={this.props.state.benchmarks}
        />
        <BenchmarkControls state={this.props.state} />
        <LogTypeControls
          logTypes={this.props.state.logTypes}
          onLogTypeCreate={this.handleLogTypeCreate}
        />
        <BenchmarkTypeControls
          onBenchmarkTypeCreate={this.handleBenchmarkTypeCreate}
        />
      </main>
    );
  }

}

Main.propTypes = {
  state: React.PropTypes.object.isRequired,
}

export default Main;
