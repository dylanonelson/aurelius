import Moment from 'moment';
import { autorun, observable } from 'mobx';
import { state } from '../../data';

class HeaderView {

  @observable date = '';

  sync() {
    autorun(() => {
      this.date = Moment(state.date).format('MMMM D, YYYY');
    });
  }
}

export default HeaderView;
