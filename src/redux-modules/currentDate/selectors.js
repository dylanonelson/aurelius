import moment from 'moment';
import { createSelector } from 'reselect';

const currentDateSelector = state => state.currentDate;

export const currentISODateSelector = createSelector(
  currentDateSelector,
  currentDate => currentDate.yearmoday,
);

export const beginningOfCurrentISOWeekSelector = createSelector(
  currentISODateSelector,
  currentDate => moment(currentDate, 'YYYY-MM-DD').startOf('isoWeek').format('YYYY-MM-DD'),
);

export const thisWeekISORangeSelector = createSelector(
  [
    beginningOfCurrentISOWeekSelector,
    currentISODateSelector,
  ],
  (from, to) => [from, to],
);
