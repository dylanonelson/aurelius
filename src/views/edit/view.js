import { autorun, observable } from 'mobx';

import { state } from '../../data';

class EditView {

  @observable logTypes = [];

  sync() {
    autorun(() => {
      this.logTypes = [...state.logTypes].map(([id, props]) =>
        Object.assign({}, props, { id })
      );
    });
  }
}

export default EditView;
