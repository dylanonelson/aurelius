import { data } from '../../persistence';

import { INCREMENT_LOG_TYPE } from '../logs/actions';
import { LOGIN_USER } from '../init/actions';
import { addLogAtKey, deleteLogAtKey } from './actions';
import Worker from 'utilities/worker';

const persistenceWorker = new Worker(1500);

export default store => next => action => {
  if (action.type === INCREMENT_LOG_TYPE) {
    const { date, logType } = action.payload;
    let { amount } = action.payload;
    let f;

    persistenceWorker.pause();

    while (amount > 0) {
      f = () => {
        data.CURRENT_LOGS.write({
          date,
          logType,
        });
      };

      persistenceWorker.schedule(f);

      amount--;
    }

    while (amount < 0) {
      f = () => {
        const { logs } = store.getState().persistence;
        const key = Object.keys(logs).reduce((memo, k) => {
          if (
            logs[k] &&
            logs[k].logType === logType &&
            logs[k].date === date
          ) return k;

          return memo;
        }, null);

        if (key) {
          data.CURRENT_LOGS.delete(key);
        }
      };

      persistenceWorker.schedule(f);

      amount ++;
    }
  }

  if (action.type === LOGIN_USER) {
    data.CURRENT_LOGS.onChildAdded((id, log) => {
      store.dispatch(addLogAtKey(id, log));
    });

    data.CURRENT_LOGS.onChildRemoved((id, log) => {
      store.dispatch(deleteLogAtKey(id));
    });
  }

  return next(action);
};
