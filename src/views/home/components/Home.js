import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo500 } from 'material-ui/styles/colors';
import { observer } from 'mobx-react';

import Header from './Header';
import Logs from './Logs';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
  },
});

@observer
class Home extends React.Component {
  render() {
    const { state } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id="home">
          <Header date={state.date} />
          <Logs logs={state.logMap} />
        </div>
      </MuiThemeProvider>
    );
  }
}

Home.propTypes = {
  state: React.PropTypes.object.isRequired,
};

export default Home;
