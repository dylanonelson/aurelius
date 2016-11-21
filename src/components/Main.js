import React from 'react';

const Main = () => (
  <main
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      paddingTop: 50,
      width: '100%',
    }}
  >
    <button
      style={{
        border: '1px solid #ccc'
      }}
    >
      Productive
    </button>
    <button
      style={{
        border: '1px solid #ccc'
      }}
    >
      Dysfunctional
    </button>
  </main>
)

export default Main;
