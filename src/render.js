import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { bindData, data, state } from './data';
import { Header, Home  } from './views';

const render = () => {
  injectTapEventPlugin();

  bindData(data, state);

  const header = Header();

  ReactDOM.render(
    header,
    document.getElementById('header')
  );

  const home = Home();

  ReactDOM.render(
    home,
    document.getElementById('body')
  );
};

export default render;
