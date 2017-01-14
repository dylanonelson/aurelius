import ReactDOM from 'react-dom';

import { bindData, data, state } from './data';

import { Home } from './views';

const render = () => {
  bindData(data, state);
  const home = Home();

  ReactDOM.render(
    home,
    document.getElementById('root')
  );
};

export default render;
