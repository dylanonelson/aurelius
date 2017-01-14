import { asMap, autorun, observable } from 'mobx';
import { state } from '../../data';

class HomeView {

  @observable logMap = asMap({});

  sync() {
    autorun(() => {
      const logMap = new Map();
      [...state.logTypes].forEach(([id, logType]) => {
        const typeObj = logType;
        logType.id = id;

        const logs = [...state.logs].reduce((arr, [id, log]) => {
          if (log.logType === logType.id)
            arr.push(Object.assign({}, log, { id }));
          return arr;
        }, []);

        logMap.set(typeObj, logs);
      });
      this.logMap = logMap;
    });
  }
}

export default HomeView;
