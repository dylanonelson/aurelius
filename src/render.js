import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './app.css';
import { bindData, data, state } from './data';
import { Home  } from './views';

const render = () => {
  injectTapEventPlugin();
  bindData(data, state);

  const home = Home();

  ReactDOM.render(
    home,
    document.getElementById('body')
  );
};

export default render;
