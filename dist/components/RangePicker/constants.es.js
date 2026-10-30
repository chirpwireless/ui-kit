import { hooks as e } from "../../moment-DoaiFqFV.js";
// src/components/RangePicker/constants.ts
var t = /* @__PURE__ */ new Date(), n = e().unix(), r = e().subtract(2, "months").toDate(), i = t, a = {
	today: [e().startOf("day").unix(), e().endOf("day").unix()],
	"last week": [e().subtract(1, "week").unix(), n],
	"last month": [e().subtract(1, "month").unix(), n],
	"last 2 months": [e().subtract(2, "month").unix(), n]
};
export { i as MAX_DATE_OF_DATE_FILTER, r as MIN_DATE_OF_DATE_FILTER, a as QUICK_SELECT_OPTIONS };
