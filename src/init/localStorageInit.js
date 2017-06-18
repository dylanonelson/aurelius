import debounce from 'debounce';

import Worker from 'utilities/worker';
import store from '../state';

const storageWorker = new Worker(1000);
const persistStore = () => localStorage.setItem('state', JSON.stringify(store.getState()));
const debouncedPersistStore = debounce(persistStore, 500);

store.subscribe(() => storageWorker.schedule(debouncedPersistStore));
