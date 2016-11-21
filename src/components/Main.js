import React from 'react';
import database from '../database';

class Main extends React.Component {
  render() {
    const { dysfunctionalThoughts, productiveThoughts } = this.props;

    return (
      <main>
        <h1
          style={{
            textAlign: 'center'
          }}
        >
          {database.getDateString()}
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingTop: 50,
            width: '100%',
          }}
        >
          <div className="productive">
            <ul>
              {productiveThoughts.map(thought => (
                <li
                 key={thought.ts}
                >
                 +
                </li>
              ))}
            </ul>
            <button
              style={{
                border: '1px solid #ccc'
              }}
              onClick={() => {
                this.props.productiveThoughts.push({ ts: Date.now() });
                database.writeThought('productive');
                this.forceUpdate();
              }}
            >
              Productive
            </button>
          </div>
          <div className="dysfunctional">
            <ul>
              {dysfunctionalThoughts.map(thought => (
                <li
                  key={thought.ts}
                >
                 ×
                </li>
              ))}
            </ul>
            <button
              style={{
                border: '1px solid #ccc'
              }}
              onClick={() => {
                this.props.dysfunctionalThoughts.push({ ts: Date.now() });
                database.writeThought('dysfunctional');
                this.forceUpdate();
              }}
            >
            Dysfunctional
            </button>
          </div>
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  dysfunctionalThoughts: React.PropTypes.array,
  productiveThoughts: React.PropTypes.array,
};

export default Main;
