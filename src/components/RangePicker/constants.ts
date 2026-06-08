import moment from 'moment';

const today = new Date();
const currentTimestamp = moment().unix();

export const MIN_DATE_OF_DATE_FILTER = moment().subtract(2, 'months').toDate();

export const MAX_DATE_OF_DATE_FILTER = today;

export const QUICK_SELECT_OPTIONS = {
    today: [moment().startOf('day').unix(), moment().endOf('day').unix()],
    'last week': [moment().subtract(1, 'week').unix(), currentTimestamp],
    'last month': [moment().subtract(1, 'month').unix(), currentTimestamp],
    'last 2 months': [moment().subtract(2, 'month').unix(), currentTimestamp],
};
