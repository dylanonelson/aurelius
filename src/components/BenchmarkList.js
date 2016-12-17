import React from 'react';
import { observer } from 'mobx-react';

const getBenchmarkType = (b, types) => (types.get(b.benchmarkType));

const BenchmarkList = observer(({ benchmarks, types }) => (
  <ul>
    {[...benchmarks].map(([id, b]) => // eslint-disable-line no-unused-vars
      <li
        key={id}
      >
        {getBenchmarkType(b, types).name}: {b.value}
      </li>
    )}
  </ul>
));

BenchmarkList.propTypes = {
  benchmarks: React.PropTypes.object,
  types: React.PropTypes.object,
}

export default BenchmarkList;
