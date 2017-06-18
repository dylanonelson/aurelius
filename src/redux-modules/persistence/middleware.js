import { data } from '../../persistence';

import { INCREMENT_LOG_TYPE } from '../logs/actions';
import { FLUSH_QUEUED_ACTIONS, addLogAtKey, deleteLogAtKey } from './actions';
import Worker from 'utilities/worker';

export const persistenceWorker = new Worker(500);

const deletedKeys = {};

const persistToFirebase = (store, action) => {
  const { date, logType } = action.payload;
  let { amount } = action.payload;
  let f;

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
          logs[k].date === date &&
          deletedKeys[k] !== true
        ) return k;

        return memo;
      }, null);

      if (key) {
        deletedKeys[key] = true;
        data.CURRENT_LOGS.delete(key);
      }
    };

    persistenceWorker.schedule(f);

    amount++;
  }
};

const persistToLocalStorage = (action) => {
  (action.meta || (action.meta = {})).saveToQueue = true;
};

export default store => next => action => {
  if (action.type === INCREMENT_LOG_TYPE) {
    if (store.getState().persistence.connectedToFirebase) {
      persistToFirebase(store, action);
    } else {
      persistToLocalStorage(action);
    }
  }

  if (action.type === FLUSH_QUEUED_ACTIONS) {
    data.CURRENT_LOGS.onChildAdded((id, log) => {
      store.dispatch(addLogAtKey(id, log));
    });

    data.CURRENT_LOGS.onChildRemoved((id, log) => {
      store.dispatch(deleteLogAtKey(id));
    });

    (store.getState().persistence.queuedActions || []).forEach(action => {
      persistToFirebase(store, action);
    });
  }

  return next(action);
};
