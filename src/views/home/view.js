import Moment from 'moment';
import { asMap, autorun, observable } from 'mobx';

import { state } from '../../data';

class HomeView {

  @observable dailyLogMap = asMap({});
  @observable weeklyLogMap = asMap({});
  @observable date = '';

  sync() {
    autorun(() => {
      if (state.logTypes.size === 0 || state.logs.size === 0 ) return;

      const dailyLogMap = new Map();
      const weeklyLogMap = new Map();

      [...state.logTypes].forEach(([id, logType]) => {
        const typeObj = logType;
        typeObj.id = id;
        dailyLogMap.set(typeObj, []);
        weeklyLogMap.set(typeObj, []);
      });

      [...state.logs].forEach(([id, log]) => {
        const logObj = log;
        logObj.id = id;

        weeklyLogMap.get(state.logTypes.get(log.logType)).push(logObj);

        if (log.date === Moment(state.date).format('YYYY-MM-DD'))
          dailyLogMap.get(state.logTypes.get(log.logType)).push(logObj);
      });

      this.dailyLogMap = dailyLogMap;
      this.weeklyLogMap = weeklyLogMap;
      this.date = Moment(state.date).format('MMMM D, YYYY');
    });
  }
}

export default HomeView;
