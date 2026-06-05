import { hooks as o } from "../../../moment-DHYryOIn.js";
import { WidgetTypes as p } from "../types.es.js";
const g = (e) => e.replace(/\s(\d{2})/, "T$1:00Z"), h = ({
  attribute: e,
  config: t,
  metrics: r,
  unitsConverter: a,
  shouldBeConverted: i
}) => {
  const s = [], l = [];
  for (const n in r) {
    const u = t.display_value ? r[n][t.display_value] : r[n].avg;
    let m = 0;
    t.type !== "text" && typeof u == "number" && (m = i ? a.convert(u) : u);
    const d = { x: o.unix(Number(n)).toDate(), y: Number(m.toFixed(1)) };
    s.push(d), (m || r[n].lastDate) && l.push(d);
  }
  return [{ id: e, data: l.length > 1 ? l.reverse() : s.reverse() }];
}, b = (e) => {
  let t = null, r = null, a = null, i = 0, s = 0;
  return e == null || e.forEach(({ data: l }) => {
    l.forEach(({ y: n }) => {
      typeof n == "number" && ((typeof t != "number" || n < t) && (t = n), (typeof r != "number" || n > r) && (r = n), i += n, s++);
    });
  }), s > 0 && (a = i / s), { min: t, max: r, avg: a };
}, T = (e, t) => {
  const r = o(t);
  return r.isAfter(o(e).add(6, "month")) ? "month" : r.isAfter(o(e).add(1, "month")) ? "week" : r.isAfter(o(e).add(48, "hours")) ? "day" : "hour";
}, S = (e) => {
  const t = e * 1e3;
  return o().isSame(t, "day") ? o(t).local().format("HH:mm") : o(t).local().format("DD.MM, HH:mm");
}, x = ({
  value: e,
  config: t,
  unitsConverter: r,
  shouldBeConverted: a
}) => {
  if (t.type === "boolean" && typeof e < "u")
    try {
      return JSON.parse(t.value_map.replace(/'/g, '"'))[e ? "1" : "0"] ?? e;
    } catch (i) {
      console.error("getValueString error", i);
    }
  return typeof e == "number" && t.type === p.Graphic && r ? (a ? r.convert(e) : e).toFixed(1) : e;
};
export {
  b as calculateValues,
  h as getChartData,
  S as getTimeString,
  T as getTimequant,
  x as getValueString,
  g as toValidTimeString
};
