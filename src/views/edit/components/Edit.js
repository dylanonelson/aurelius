import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { data } from '../../../data';
import AddButton from './AddButton';
import EditDialog from './EditDialog';
import Header from './Header';
import LogTypes from './LogTypes';

@observer
class Edit extends React.Component {

  @observable selectedLogType = null;

  @autobind
  handleLogTypeSelection({ logType }) {
    this.selectedLogType = logType;
  }

  @autobind
  handleLogTypeCreation() {
    this.selectedLogType = { id: null };
  }

  @autobind
  handleDialogClose() {
    this.selectedLogType = null;
  }

  @autobind
  handleSave(logType) {
    const { id } = logType;

    if (id) {
      delete logType.id;
      data.LOG_TYPES.update(id, logType);
    } else if (id === null) {
      data.LOG_TYPES.write(logType);
    } else {
      throw new Error(`Cannot save logType with id of ${id}`);
    }

    this.handleDialogClose();
  }

  render() {
    const { logTypes } = this.props.state;

    const callbacks = {
      onLogTypeSelection: this.handleLogTypeSelection,
    };

    return (
      <div id="edit">
        <Header />
        <LogTypes logTypes={logTypes} {...callbacks} />
        <AddButton
          onClick={this.handleLogTypeCreation}
        />
        <EditDialog
          logType={this.selectedLogType}
          onClose={this.handleDialogClose}
          onSave={this.handleSave}
        />
      </div>
    );
  }
}

Edit.propTypes = {
  state: React.PropTypes.object.isRequired,
};

export default Edit;
