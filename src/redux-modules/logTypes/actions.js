import { createAction } from 'redux-actions';

const INGEST_LOG_TYPES = 'logTypes/INGEST_LOG_TYPES';

export const ingestLogTypes = createAction(
  INGEST_LOG_TYPES,
  ({ logTypes }) => {
    if (logTypes == null) return {};

    return Object.keys(logTypes).reduce((memo, logTypeId) => {
      memo[logTypeId] = Object.assign(logTypes[logTypeId], { id: logTypeId });
      return memo;
    }, {});
  },
  ({ meta }) => (meta || { merge: true }),
);
