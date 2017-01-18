import AddButton from './AddButton';
import Header from './Header';
import LogTypes from './LogTypes';
import React from 'react';
import { observer } from 'mobx-react';

@observer
class Edit extends React.Component {
  render() {
    const { logTypes } = this.props.state;

    return (
      <div id="edit">
        <Header />
        <LogTypes logTypes={logTypes} />
        <AddButton />
      </div>
    );
  }
}

Edit.propTypes = {
  state: React.PropTypes.object.isRequired,
};

export default Edit;
