import { createAction } from 'redux-actions';

const INGEST_LOGS = 'logs/INGEST_LOGS';

export const ingestLogs = createAction(INGEST_LOGS, logs => {
  return Object.keys(logs).reduce((memo, logId) => {
    const log = logs[logId];
    const { date, logType } = log;
    memo[date] = memo[date] || {};
    const o = memo[date];
    o[logType] = o[logType] ? o[logType] + 1 : 1;

    return memo;
  }, {});
});

const INCREMENT_LOG_TYPE = 'logs/INCREMENT_LOG_TYPE';

export const incrementLogType = createAction(INCREMENT_LOG_TYPE, (date, logType, amount) => {
  if (typeof amount !== 'number') amount = 1;
  return { date, logType, amount };
});
