import { hooks as t } from "../../moment-DHYryOIn.js";
const o = t(), a = {
  today: [t().startOf("day"), t().endOf("day")],
  "last week": [t().subtract(1, "week"), o],
  "last month": [t().subtract(1, "month"), o],
  "last 2 months": [t().subtract(2, "month"), o]
  // TODO: uncomment when the problem with long periods of time on BE will be fixed
  // 'last 180 days': [moment().subtract(180, 'days').unix(), currentTimestamp],
  // 'last year': [moment().startOf('year').unix(), moment().endOf('year').unix()],
};
export {
  a as QUICK_SELECT_OPTIONS
};
