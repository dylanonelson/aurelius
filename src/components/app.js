import React from 'react';

import Header from './Header';
import Main from './Main';

const App = ({ user, dysfunctionalThoughts, productiveThoughts }) => (
  <div>
    <Header user={user} />
    <Main
      dysfunctionalThoughts={dysfunctionalThoughts}
      productiveThoughts={productiveThoughts}
    />
  </div>
);

App.propTypes = {
  user: React.PropTypes.object,
  dysfunctionalThoughts: React.PropTypes.array,
  productiveThoughts: React.PropTypes.array,
};

export default App;
