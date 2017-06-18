import Worker from 'utilities/worker';
import store from '../state';

const storageWorker = new Worker(500);
const persistStore = () =>
  localStorage.setItem('currentState', JSON.stringify(store.getState()));

localStorage.setItem('previousState', localStorage.getItem('currentState'));

store.subscribe(() => storageWorker.reschedule(persistStore));
