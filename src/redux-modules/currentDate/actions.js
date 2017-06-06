import { createAction } from 'redux-actions';

const RESET_DATE = 'currentDate/RESET_DATE';

export const resetDate = createAction(RESET_DATE);
