import Moment from 'moment';
import { asMap, autorun, observable } from 'mobx';

import { state } from '../../data';

class HomeView {

  @observable dailyLogMap = asMap({});
  @observable weeklyLogMap = asMap({});
  @observable date = '';

  sync() {
    autorun(() => {
      const dailyLogMap = new Map();
      const weeklyLogMap = new Map();

      [...state.logTypes].forEach(([id, logType]) => {
        const typeObj = logType;
        logType.id = id;

        const dailyLogs = [...state.logs].reduce((arr, [id, log]) => {
          if (
            (log.logType === logType.id) &&
            (log.date === Moment(state.date).format('YYYY-MM-DD'))
          )
            arr.push(Object.assign({}, log, { id }));

          return arr;
        }, []);

        dailyLogMap.set(typeObj, dailyLogs);

        const weeklyLogs = [...state.logs].reduce((arr, [id, log]) => {
          if (log.logType === logType.id)
            arr.push(Object.assign({}, log, { id }));

          return arr;
        }, []);

        weeklyLogMap.set(typeObj, weeklyLogs);
      });

      this.dailyLogMap = dailyLogMap;
      this.weeklyLogMap = weeklyLogMap;

      this.date = Moment(state.date).format('MMMM D, YYYY');
    });
  }
}

export default HomeView;
