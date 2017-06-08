import autobind from 'autobind-decorator';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import React from 'react';
import { observable, autorun } from 'mobx';
import mobx from 'mobx';
import { observer } from 'mobx-react';

import EditableLogType from './EditableLogType';

@observer
class EditDialog extends React.Component {

  @observable isOpen = false;
  @observable logTypeEdits = {};

  componentWillMount() {
    autorun(() => {
      this.logTypeEdits = mobx.toJS(this.props.logType);
      this.isOpen = (this.props.logType === null ? false : true);
    });
  }

  @autobind
  handleLogTypeEdit(e) {
    this.logTypeEdits[e.target.name] = e.target.value;
  }

  render() {
    const { logType } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.onClose}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={() => this.props.onSave(this.logTypeEdits)}
      />,
    ];

    const title = logType && logType.id ?
      `Edit log type ${logType && logType.name}` :
      'Create new log type';

    return (
      <Dialog
        actions={actions}
        title={title}
        open={this.isOpen}
      >
        <EditableLogType
          {...this.logTypeEdits}
          onChange={this.handleLogTypeEdit}
        />
      </Dialog>
    );
  }
}

EditDialog.propTypes = {
  logType: PropTypes.object,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
};

export default EditDialog;
