import { hooks as t } from "../../moment-DHYryOIn.js";
const o = /* @__PURE__ */ new Date(), n = t().unix(), a = t().subtract(2, "months").toDate(), e = o, u = {
  today: [t().startOf("day").unix(), t().endOf("day").unix()],
  "last week": [t().subtract(1, "week").unix(), n],
  "last month": [t().subtract(1, "month").unix(), n],
  "last 2 months": [t().subtract(2, "month").unix(), n]
};
export {
  e as MAX_DATE_OF_DATE_FILTER,
  a as MIN_DATE_OF_DATE_FILTER,
  u as QUICK_SELECT_OPTIONS
};
