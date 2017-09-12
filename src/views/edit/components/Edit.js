import PropTypes from 'prop-types';
import React from 'react';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { data } from '../../../persistence';
import AddButton from './AddButton';
import Header from './Header';
import LogTypes from './LogTypes';

function mapStateToProps(state) {
  if (state && state.logTypes) {
    return { logTypes: state.logTypes };
  }

  return { logTypes: {} };
}

@connect(
  mapStateToProps,
)
class Edit extends React.Component {
  render() {
    const { logTypes } = this.props;

    const callbacks = {
      onLogTypeSelection: this.handleLogTypeSelection,
    };

    return (
      <div id="edit">
        <Header />
        <LogTypes />
        <AddButton
          onClick={this.handleLogTypeCreation}
        />
      </div>
    );
  }
}

Edit.propTypes = {};

export default Edit;
