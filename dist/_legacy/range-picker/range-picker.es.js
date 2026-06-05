var ma = Object.defineProperty;
var va = (n, a, t) => a in n ? ma(n, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[a] = t;
var k = (n, a, t) => va(n, typeof a != "symbol" ? a + "" : a, t);
import { jsxRuntimeExports as K } from "../../jsx-runtime-BgepH7Pb.js";
import * as N from "react";
import m, { useLayoutEffect as On, cloneElement as Nn, createRef as Ie, Component as ee, useRef as mr, useCallback as ga, useEffect as wa, createElement as Da, useState as bt } from "react";
import { useTheme as ya, Stack as Xe, alpha as Fr, Divider as Ar, capitalize as Wr } from "@mui/material";
import { toDate as x, startOfWeek as Te, getDefaultOptions as it, enUS as Rn, getLocaleObj as ba } from "../../get-locale-CfwUamIX.js";
import * as _a from "react-dom";
import ka from "react-dom";
import { hooks as re } from "../../moment-DHYryOIn.js";
/* empty css                              */
import { CustomDatepickerHeader as Hr } from "./components/custom-header.es.js";
import { CalendarQuickSelect as xa, CalendarQuickSelectItem as Ma, CalendarQuickSelectButton as Ca, DatePickerWrapper as Br } from "./styles.es.js";
import { TextField as Qr } from "../text-field/index.es.js";
import { Button as Vr } from "../button/index.es.js";
import { Typography as Sa } from "../typogrpahy/index.es.js";
import { useTranslation as Ea } from "react-i18next";
import { QUICK_SELECT_OPTIONS as ar } from "./constants.es.js";
import { Checkmark as Pa } from "../../assets/icons/Checkmark/index.es.js";
function Yn(n) {
  var a, t, e = "";
  if (typeof n == "string" || typeof n == "number") e += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var r = n.length;
    for (a = 0; a < r; a++) n[a] && (t = Yn(n[a])) && (e && (e += " "), e += t);
  } else for (t in n) n[t] && (e && (e += " "), e += t);
  return e;
}
function ne() {
  for (var n, a, t = 0, e = "", r = arguments.length; t < r; t++) (n = arguments[t]) && (a = Yn(n)) && (e && (e += " "), e += a);
  return e;
}
function j(n, a) {
  return n instanceof Date ? new n.constructor(a) : new Date(a);
}
function he(n, a) {
  const t = x(n);
  return isNaN(a) ? j(n, NaN) : (a && t.setDate(t.getDate() + a), t);
}
function me(n, a) {
  const t = x(n);
  if (isNaN(a)) return j(n, NaN);
  if (!a)
    return t;
  const e = t.getDate(), r = j(n, t.getTime());
  r.setMonth(t.getMonth() + a + 1, 0);
  const o = r.getDate();
  return e >= o ? r : (t.setFullYear(
    r.getFullYear(),
    r.getMonth(),
    e
  ), t);
}
function kr(n, a) {
  const t = +x(n);
  return j(n, t + a);
}
const In = 6048e5, Ta = 864e5, Xt = 6e4, Gt = 36e5, Oa = 1e3;
function Na(n, a) {
  return kr(n, a * Gt);
}
function tt(n) {
  return Te(n, { weekStartsOn: 1 });
}
function Ln(n) {
  const a = x(n), t = a.getFullYear(), e = j(n, 0);
  e.setFullYear(t + 1, 0, 4), e.setHours(0, 0, 0, 0);
  const r = tt(e), o = j(n, 0);
  o.setFullYear(t, 0, 4), o.setHours(0, 0, 0, 0);
  const s = tt(o);
  return a.getTime() >= r.getTime() ? t + 1 : a.getTime() >= s.getTime() ? t : t - 1;
}
function je(n) {
  const a = x(n);
  return a.setHours(0, 0, 0, 0), a;
}
function It(n) {
  const a = x(n), t = new Date(
    Date.UTC(
      a.getFullYear(),
      a.getMonth(),
      a.getDate(),
      a.getHours(),
      a.getMinutes(),
      a.getSeconds(),
      a.getMilliseconds()
    )
  );
  return t.setUTCFullYear(a.getFullYear()), +n - +t;
}
function rt(n, a) {
  const t = je(n), e = je(a), r = +t - It(t), o = +e - It(e);
  return Math.round((r - o) / Ta);
}
function Ra(n) {
  const a = Ln(n), t = j(n, 0);
  return t.setFullYear(a, 0, 4), t.setHours(0, 0, 0, 0), tt(t);
}
function vr(n, a) {
  return kr(n, a * Xt);
}
function xr(n, a) {
  const t = a * 3;
  return me(n, t);
}
function Ya(n, a) {
  return kr(n, a * 1e3);
}
function Lt(n, a) {
  const t = a * 7;
  return he(n, t);
}
function Ce(n, a) {
  return me(n, a * 12);
}
function Kr(n) {
  let a;
  return n.forEach(function(t) {
    const e = x(t);
    (a === void 0 || a < e || isNaN(Number(e))) && (a = e);
  }), a || /* @__PURE__ */ new Date(NaN);
}
function qr(n) {
  let a;
  return n.forEach((t) => {
    const e = x(t);
    (!a || a > e || isNaN(+e)) && (a = e);
  }), a || /* @__PURE__ */ new Date(NaN);
}
function Ia(n, a) {
  const t = je(n), e = je(a);
  return +t == +e;
}
function Se(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function Ft(n) {
  if (!Se(n) && typeof n != "number")
    return !1;
  const a = x(n);
  return !isNaN(Number(a));
}
function At(n, a) {
  const t = x(n), e = x(a), r = t.getFullYear() - e.getFullYear(), o = t.getMonth() - e.getMonth();
  return r * 12 + o;
}
function Qe(n) {
  const a = x(n);
  return Math.trunc(a.getMonth() / 3) + 1;
}
function Wt(n, a) {
  const t = x(n), e = x(a), r = t.getFullYear() - e.getFullYear(), o = Qe(t) - Qe(e);
  return r * 4 + o;
}
function Ht(n, a) {
  const t = x(n), e = x(a);
  return t.getFullYear() - e.getFullYear();
}
function La(n, a) {
  const t = x(n), e = x(a), r = jr(t, e), o = Math.abs(rt(t, e));
  t.setDate(t.getDate() - r * o);
  const s = +(jr(t, e) === -r), i = r * (o - s);
  return i === 0 ? 0 : i;
}
function jr(n, a) {
  const t = n.getFullYear() - a.getFullYear() || n.getMonth() - a.getMonth() || n.getDate() - a.getDate() || n.getHours() - a.getHours() || n.getMinutes() - a.getMinutes() || n.getSeconds() - a.getSeconds() || n.getMilliseconds() - a.getMilliseconds();
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Fn(n) {
  const a = x(n);
  return a.setHours(23, 59, 59, 999), a;
}
function An(n) {
  const a = x(n), t = a.getMonth();
  return a.setFullYear(a.getFullYear(), t + 1, 0), a.setHours(23, 59, 59, 999), a;
}
function gr(n) {
  const a = x(n), t = a.getMonth(), e = t - t % 3;
  return a.setMonth(e, 1), a.setHours(0, 0, 0, 0), a;
}
function Wn(n) {
  const a = x(n);
  return a.setDate(1), a.setHours(0, 0, 0, 0), a;
}
function Hn(n) {
  const a = x(n), t = a.getFullYear();
  return a.setFullYear(t + 1, 0, 0), a.setHours(23, 59, 59, 999), a;
}
function zt(n) {
  const a = x(n), t = j(n, 0);
  return t.setFullYear(a.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function Fa(n, a) {
  var i, c;
  const t = it(), e = t.weekStartsOn ?? ((c = (i = t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? 0, r = x(n), o = r.getDay(), s = (o < e ? -7 : 0) + 6 - (o - e);
  return r.setDate(r.getDate() + s), r.setHours(23, 59, 59, 999), r;
}
function Aa(n) {
  const a = x(n);
  return rt(a, zt(a)) + 1;
}
function Mr(n) {
  const a = x(n), t = +tt(a) - +Ra(a);
  return Math.round(t / In) + 1;
}
function Cr(n, a) {
  var l, d, p, f;
  const t = x(n), e = t.getFullYear(), r = it(), o = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((d = (l = a == null ? void 0 : a.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((f = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, s = j(n, 0);
  s.setFullYear(e + 1, 0, o), s.setHours(0, 0, 0, 0);
  const i = Te(s, a), c = j(n, 0);
  c.setFullYear(e, 0, o), c.setHours(0, 0, 0, 0);
  const u = Te(c, a);
  return t.getTime() >= i.getTime() ? e + 1 : t.getTime() >= u.getTime() ? e : e - 1;
}
function Wa(n, a) {
  var i, c, u, l;
  const t = it(), e = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((c = (i = a == null ? void 0 : a.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((l = (u = t.locale) == null ? void 0 : u.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, r = Cr(n, a), o = j(n, 0);
  return o.setFullYear(r, 0, e), o.setHours(0, 0, 0, 0), Te(o, a);
}
function Bn(n, a) {
  const t = x(n), e = +Te(t, a) - +Wa(t, a);
  return Math.round(e / In) + 1;
}
function q(n, a) {
  const t = n < 0 ? "-" : "", e = Math.abs(n).toString().padStart(a, "0");
  return t + e;
}
const Ne = {
  // Year
  y(n, a) {
    const t = n.getFullYear(), e = t > 0 ? t : 1 - t;
    return q(a === "yy" ? e % 100 : e, a.length);
  },
  // Month
  M(n, a) {
    const t = n.getMonth();
    return a === "M" ? String(t + 1) : q(t + 1, 2);
  },
  // Day of the month
  d(n, a) {
    return q(n.getDate(), a.length);
  },
  // AM or PM
  a(n, a) {
    const t = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(n, a) {
    return q(n.getHours() % 12 || 12, a.length);
  },
  // Hour [0-23]
  H(n, a) {
    return q(n.getHours(), a.length);
  },
  // Minute
  m(n, a) {
    return q(n.getMinutes(), a.length);
  },
  // Second
  s(n, a) {
    return q(n.getSeconds(), a.length);
  },
  // Fraction of second
  S(n, a) {
    const t = a.length, e = n.getMilliseconds(), r = Math.trunc(
      e * Math.pow(10, t - 3)
    );
    return q(r, a.length);
  }
}, Ge = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, $r = {
  // Era
  G: function(n, a, t) {
    const e = n.getFullYear() > 0 ? 1 : 0;
    switch (a) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(e, { width: "abbreviated" });
      case "GGGGG":
        return t.era(e, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(e, { width: "wide" });
    }
  },
  // Year
  y: function(n, a, t) {
    if (a === "yo") {
      const e = n.getFullYear(), r = e > 0 ? e : 1 - e;
      return t.ordinalNumber(r, { unit: "year" });
    }
    return Ne.y(n, a);
  },
  // Local week-numbering year
  Y: function(n, a, t, e) {
    const r = Cr(n, e), o = r > 0 ? r : 1 - r;
    if (a === "YY") {
      const s = o % 100;
      return q(s, 2);
    }
    return a === "Yo" ? t.ordinalNumber(o, { unit: "year" }) : q(o, a.length);
  },
  // ISO week-numbering year
  R: function(n, a) {
    const t = Ln(n);
    return q(t, a.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(n, a) {
    const t = n.getFullYear();
    return q(t, a.length);
  },
  // Quarter
  Q: function(n, a, t) {
    const e = Math.ceil((n.getMonth() + 1) / 3);
    switch (a) {
      case "Q":
        return String(e);
      case "QQ":
        return q(e, 2);
      case "Qo":
        return t.ordinalNumber(e, { unit: "quarter" });
      case "QQQ":
        return t.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, a, t) {
    const e = Math.ceil((n.getMonth() + 1) / 3);
    switch (a) {
      case "q":
        return String(e);
      case "qq":
        return q(e, 2);
      case "qo":
        return t.ordinalNumber(e, { unit: "quarter" });
      case "qqq":
        return t.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(e, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, a, t) {
    const e = n.getMonth();
    switch (a) {
      case "M":
      case "MM":
        return Ne.M(n, a);
      case "Mo":
        return t.ordinalNumber(e + 1, { unit: "month" });
      case "MMM":
        return t.month(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(e, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(e, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(n, a, t) {
    const e = n.getMonth();
    switch (a) {
      case "L":
        return String(e + 1);
      case "LL":
        return q(e + 1, 2);
      case "Lo":
        return t.ordinalNumber(e + 1, { unit: "month" });
      case "LLL":
        return t.month(e, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(e, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(e, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(n, a, t, e) {
    const r = Bn(n, e);
    return a === "wo" ? t.ordinalNumber(r, { unit: "week" }) : q(r, a.length);
  },
  // ISO week of year
  I: function(n, a, t) {
    const e = Mr(n);
    return a === "Io" ? t.ordinalNumber(e, { unit: "week" }) : q(e, a.length);
  },
  // Day of the month
  d: function(n, a, t) {
    return a === "do" ? t.ordinalNumber(n.getDate(), { unit: "date" }) : Ne.d(n, a);
  },
  // Day of year
  D: function(n, a, t) {
    const e = Aa(n);
    return a === "Do" ? t.ordinalNumber(e, { unit: "dayOfYear" }) : q(e, a.length);
  },
  // Day of week
  E: function(n, a, t) {
    const e = n.getDay();
    switch (a) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(e, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, a, t, e) {
    const r = n.getDay(), o = (r - e.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      case "e":
        return String(o);
      case "ee":
        return q(o, 2);
      case "eo":
        return t.ordinalNumber(o, { unit: "day" });
      case "eee":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, a, t, e) {
    const r = n.getDay(), o = (r - e.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      case "c":
        return String(o);
      case "cc":
        return q(o, a.length);
      case "co":
        return t.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return t.day(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return t.day(r, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return t.day(r, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return t.day(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, a, t) {
    const e = n.getDay(), r = e === 0 ? 7 : e;
    switch (a) {
      case "i":
        return String(r);
      case "ii":
        return q(r, a.length);
      case "io":
        return t.ordinalNumber(r, { unit: "day" });
      case "iii":
        return t.day(e, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(e, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(e, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, a, t) {
    const r = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
      case "a":
      case "aa":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, a, t) {
    const e = n.getHours();
    let r;
    switch (e === 12 ? r = Ge.noon : e === 0 ? r = Ge.midnight : r = e / 12 >= 1 ? "pm" : "am", a) {
      case "b":
      case "bb":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, a, t) {
    const e = n.getHours();
    let r;
    switch (e >= 17 ? r = Ge.evening : e >= 12 ? r = Ge.afternoon : e >= 4 ? r = Ge.morning : r = Ge.night, a) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, a, t) {
    if (a === "ho") {
      let e = n.getHours() % 12;
      return e === 0 && (e = 12), t.ordinalNumber(e, { unit: "hour" });
    }
    return Ne.h(n, a);
  },
  // Hour [0-23]
  H: function(n, a, t) {
    return a === "Ho" ? t.ordinalNumber(n.getHours(), { unit: "hour" }) : Ne.H(n, a);
  },
  // Hour [0-11]
  K: function(n, a, t) {
    const e = n.getHours() % 12;
    return a === "Ko" ? t.ordinalNumber(e, { unit: "hour" }) : q(e, a.length);
  },
  // Hour [1-24]
  k: function(n, a, t) {
    let e = n.getHours();
    return e === 0 && (e = 24), a === "ko" ? t.ordinalNumber(e, { unit: "hour" }) : q(e, a.length);
  },
  // Minute
  m: function(n, a, t) {
    return a === "mo" ? t.ordinalNumber(n.getMinutes(), { unit: "minute" }) : Ne.m(n, a);
  },
  // Second
  s: function(n, a, t) {
    return a === "so" ? t.ordinalNumber(n.getSeconds(), { unit: "second" }) : Ne.s(n, a);
  },
  // Fraction of second
  S: function(n, a) {
    return Ne.S(n, a);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, a, t) {
    const e = n.getTimezoneOffset();
    if (e === 0)
      return "Z";
    switch (a) {
      case "X":
        return Xr(e);
      case "XXXX":
      case "XX":
        return We(e);
      case "XXXXX":
      case "XXX":
      default:
        return We(e, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, a, t) {
    const e = n.getTimezoneOffset();
    switch (a) {
      case "x":
        return Xr(e);
      case "xxxx":
      case "xx":
        return We(e);
      case "xxxxx":
      case "xxx":
      default:
        return We(e, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, a, t) {
    const e = n.getTimezoneOffset();
    switch (a) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ur(e, ":");
      case "OOOO":
      default:
        return "GMT" + We(e, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, a, t) {
    const e = n.getTimezoneOffset();
    switch (a) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ur(e, ":");
      case "zzzz":
      default:
        return "GMT" + We(e, ":");
    }
  },
  // Seconds timestamp
  t: function(n, a, t) {
    const e = Math.trunc(n.getTime() / 1e3);
    return q(e, a.length);
  },
  // Milliseconds timestamp
  T: function(n, a, t) {
    const e = n.getTime();
    return q(e, a.length);
  }
};
function Ur(n, a = "") {
  const t = n > 0 ? "-" : "+", e = Math.abs(n), r = Math.trunc(e / 60), o = e % 60;
  return o === 0 ? t + String(r) : t + String(r) + a + q(o, 2);
}
function Xr(n, a) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + q(Math.abs(n) / 60, 2) : We(n, a);
}
function We(n, a = "") {
  const t = n > 0 ? "-" : "+", e = Math.abs(n), r = q(Math.trunc(e / 60), 2), o = q(e % 60, 2);
  return t + r + a + o;
}
const Gr = (n, a) => {
  switch (n) {
    case "P":
      return a.date({ width: "short" });
    case "PP":
      return a.date({ width: "medium" });
    case "PPP":
      return a.date({ width: "long" });
    case "PPPP":
    default:
      return a.date({ width: "full" });
  }
}, Qn = (n, a) => {
  switch (n) {
    case "p":
      return a.time({ width: "short" });
    case "pp":
      return a.time({ width: "medium" });
    case "ppp":
      return a.time({ width: "long" });
    case "pppp":
    default:
      return a.time({ width: "full" });
  }
}, Ha = (n, a) => {
  const t = n.match(/(P+)(p+)?/) || [], e = t[1], r = t[2];
  if (!r)
    return Gr(n, a);
  let o;
  switch (e) {
    case "P":
      o = a.dateTime({ width: "short" });
      break;
    case "PP":
      o = a.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = a.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = a.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", Gr(e, a)).replace("{{time}}", Qn(r, a));
}, Bt = {
  p: Qn,
  P: Ha
}, Ba = /^D+$/, Qa = /^Y+$/, Va = ["D", "DD", "YY", "YYYY"];
function Vn(n) {
  return Ba.test(n);
}
function Kn(n) {
  return Qa.test(n);
}
function wr(n, a, t) {
  const e = Ka(n, a, t);
  if (console.warn(e), Va.includes(n)) throw new RangeError(e);
}
function Ka(n, a, t) {
  const e = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${a}\`) for formatting ${e} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const qa = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ja = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, $a = /^'([^]*?)'?$/, Ua = /''/g, Xa = /[a-zA-Z]/;
function zr(n, a, t) {
  var l, d, p, f, h, g, v, w;
  const e = it(), r = (t == null ? void 0 : t.locale) ?? e.locale ?? Rn, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : d.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((f = (p = e.locale) == null ? void 0 : p.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, s = (t == null ? void 0 : t.weekStartsOn) ?? ((g = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : g.weekStartsOn) ?? e.weekStartsOn ?? ((w = (v = e.locale) == null ? void 0 : v.options) == null ? void 0 : w.weekStartsOn) ?? 0, i = x(n);
  if (!Ft(i))
    throw new RangeError("Invalid time value");
  let c = a.match(ja).map((b) => {
    const y = b[0];
    if (y === "p" || y === "P") {
      const S = Bt[y];
      return S(b, r.formatLong);
    }
    return b;
  }).join("").match(qa).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const y = b[0];
    if (y === "'")
      return { isToken: !1, value: Ga(b) };
    if ($r[y])
      return { isToken: !0, value: b };
    if (y.match(Xa))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: b };
  });
  r.localize.preprocessor && (c = r.localize.preprocessor(i, c));
  const u = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: r
  };
  return c.map((b) => {
    if (!b.isToken) return b.value;
    const y = b.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && Kn(y) || !(t != null && t.useAdditionalDayOfYearTokens) && Vn(y)) && wr(y, a, String(n));
    const S = $r[y[0]];
    return S(i, y, r.localize, u);
  }).join("");
}
function Ga(n) {
  const a = n.match($a);
  return a ? a[1].replace(Ua, "'") : n;
}
function Zr(n) {
  return x(n).getDate();
}
function za(n) {
  return x(n).getDay();
}
function Za(n) {
  const a = x(n), t = a.getFullYear(), e = a.getMonth(), r = j(n, 0);
  return r.setFullYear(t, e + 1, 0), r.setHours(0, 0, 0, 0), r.getDate();
}
function Ja() {
  return Object.assign({}, it());
}
function be(n) {
  return x(n).getHours();
}
function eo(n) {
  let t = x(n).getDay();
  return t === 0 && (t = 7), t;
}
function _e(n) {
  return x(n).getMinutes();
}
function se(n) {
  return x(n).getMonth();
}
function Ee(n) {
  return x(n).getSeconds();
}
function Dr(n) {
  return x(n).getTime();
}
function L(n) {
  return x(n).getFullYear();
}
function Le(n, a) {
  const t = x(n), e = x(a);
  return t.getTime() > e.getTime();
}
function $e(n, a) {
  const t = x(n), e = x(a);
  return +t < +e;
}
function to(n, a) {
  const t = x(n), e = x(a);
  return +t == +e;
}
function ro(n, a) {
  const t = a instanceof Date ? j(a, 0) : new a(0);
  return t.setFullYear(
    n.getFullYear(),
    n.getMonth(),
    n.getDate()
  ), t.setHours(
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  ), t;
}
const no = 10;
class qn {
  constructor() {
    k(this, "subPriority", 0);
  }
  validate(a, t) {
    return !0;
  }
}
class ao extends qn {
  constructor(a, t, e, r, o) {
    super(), this.value = a, this.validateValue = t, this.setValue = e, this.priority = r, o && (this.subPriority = o);
  }
  validate(a, t) {
    return this.validateValue(a, this.value, t);
  }
  set(a, t, e) {
    return this.setValue(a, t, this.value, e);
  }
}
class oo extends qn {
  constructor() {
    super(...arguments);
    k(this, "priority", no);
    k(this, "subPriority", -1);
  }
  set(t, e) {
    return e.timestampIsSet ? t : j(t, ro(t, Date));
  }
}
class Q {
  run(a, t, e, r) {
    const o = this.parse(a, t, e, r);
    return o ? {
      setter: new ao(
        o.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: o.rest
    } : null;
  }
  validate(a, t, e) {
    return !0;
  }
}
class so extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 140);
    k(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
      case "GGGGG":
        return r.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(t, { width: "wide" }) || r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
    }
  }
  set(t, e, r) {
    return e.era = r, t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
const z = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, we = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Z(n, a) {
  return n && {
    value: a(n.value),
    rest: n.rest
  };
}
function X(n, a) {
  const t = a.match(n);
  return t ? {
    value: parseInt(t[0], 10),
    rest: a.slice(t[0].length)
  } : null;
}
function De(n, a) {
  const t = a.match(n);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: a.slice(1)
    };
  const e = t[1] === "+" ? 1 : -1, r = t[2] ? parseInt(t[2], 10) : 0, o = t[3] ? parseInt(t[3], 10) : 0, s = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: e * (r * Gt + o * Xt + s * Oa),
    rest: a.slice(t[0].length)
  };
}
function jn(n) {
  return X(z.anyDigitsSigned, n);
}
function G(n, a) {
  switch (n) {
    case 1:
      return X(z.singleDigit, a);
    case 2:
      return X(z.twoDigits, a);
    case 3:
      return X(z.threeDigits, a);
    case 4:
      return X(z.fourDigits, a);
    default:
      return X(new RegExp("^\\d{1," + n + "}"), a);
  }
}
function Qt(n, a) {
  switch (n) {
    case 1:
      return X(z.singleDigitSigned, a);
    case 2:
      return X(z.twoDigitsSigned, a);
    case 3:
      return X(z.threeDigitsSigned, a);
    case 4:
      return X(z.fourDigitsSigned, a);
    default:
      return X(new RegExp("^-?\\d{1," + n + "}"), a);
  }
}
function Sr(n) {
  switch (n) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function $n(n, a) {
  const t = a > 0, e = t ? a : 1 - a;
  let r;
  if (e <= 50)
    r = n || 100;
  else {
    const o = e + 50, s = Math.trunc(o / 100) * 100, i = n >= o % 100;
    r = n + s - (i ? 100 : 0);
  }
  return t ? r : 1 - r;
}
function Un(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
class io extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 130);
    k(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, r) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: e === "yy"
    });
    switch (e) {
      case "y":
        return Z(G(4, t), o);
      case "yo":
        return Z(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return Z(G(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, r) {
    const o = t.getFullYear();
    if (r.isTwoDigitYear) {
      const i = $n(
        r.year,
        o
      );
      return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const s = !("era" in e) || e.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class co extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 130);
    k(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: e === "YY"
    });
    switch (e) {
      case "Y":
        return Z(G(4, t), o);
      case "Yo":
        return Z(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return Z(G(e.length, t), o);
    }
  }
  validate(t, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(t, e, r, o) {
    const s = Cr(t, o);
    if (r.isTwoDigitYear) {
      const c = $n(
        r.year,
        s
      );
      return t.setFullYear(
        c,
        0,
        o.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), Te(t, o);
    }
    const i = !("era" in e) || e.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(i, 0, o.firstWeekContainsDate), t.setHours(0, 0, 0, 0), Te(t, o);
  }
}
class lo extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 130);
    k(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e) {
    return Qt(e === "R" ? 4 : e.length, t);
  }
  set(t, e, r) {
    const o = j(t, 0);
    return o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0), tt(o);
  }
}
class uo extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 130);
    k(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, e) {
    return Qt(e === "u" ? 4 : e.length, t);
  }
  set(t, e, r) {
    return t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class po extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 120);
    k(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "Q":
      case "QQ":
        return G(e.length, t);
      case "Qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(t, {
          width: "wide",
          context: "formatting"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 4;
  }
  set(t, e, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class fo extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 120);
    k(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "q":
      case "qq":
        return G(e.length, t);
      case "qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(t, {
          width: "wide",
          context: "standalone"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 4;
  }
  set(t, e, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class ho extends Q {
  constructor() {
    super(...arguments);
    k(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    k(this, "priority", 110);
  }
  parse(t, e, r) {
    const o = (s) => s - 1;
    switch (e) {
      case "M":
        return Z(
          X(z.month, t),
          o
        );
      case "MM":
        return Z(G(2, t), o);
      case "Mo":
        return Z(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      case "MMM":
        return r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return r.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(t, { width: "wide", context: "formatting" }) || r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class mo extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 110);
    k(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    const o = (s) => s - 1;
    switch (e) {
      case "L":
        return Z(
          X(z.month, t),
          o
        );
      case "LL":
        return Z(G(2, t), o);
      case "Lo":
        return Z(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      case "LLL":
        return r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return r.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(t, { width: "wide", context: "standalone" }) || r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function vo(n, a, t) {
  const e = x(n), r = Bn(e, t) - a;
  return e.setDate(e.getDate() - r * 7), e;
}
class go extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 100);
    k(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "w":
        return X(z.week, t);
      case "wo":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return G(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, r, o) {
    return Te(vo(t, r, o), o);
  }
}
function wo(n, a) {
  const t = x(n), e = Mr(t) - a;
  return t.setDate(t.getDate() - e * 7), t;
}
class Do extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 100);
    k(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "I":
        return X(z.week, t);
      case "Io":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return G(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 53;
  }
  set(t, e, r) {
    return tt(wo(t, r));
  }
}
const yo = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], bo = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class _o extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 90);
    k(this, "subPriority", 1);
    k(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "d":
        return X(z.date, t);
      case "do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return G(e.length, t);
    }
  }
  validate(t, e) {
    const r = t.getFullYear(), o = Un(r), s = t.getMonth();
    return o ? e >= 1 && e <= bo[s] : e >= 1 && e <= yo[s];
  }
  set(t, e, r) {
    return t.setDate(r), t.setHours(0, 0, 0, 0), t;
  }
}
class ko extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 90);
    k(this, "subpriority", 1);
    k(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    switch (e) {
      case "D":
      case "DD":
        return X(z.dayOfYear, t);
      case "Do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return G(e.length, t);
    }
  }
  validate(t, e) {
    const r = t.getFullYear();
    return Un(r) ? e >= 1 && e <= 366 : e >= 1 && e <= 365;
  }
  set(t, e, r) {
    return t.setMonth(0, r), t.setHours(0, 0, 0, 0), t;
  }
}
function Er(n, a, t) {
  var d, p, f, h;
  const e = it(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : p.weekStartsOn) ?? e.weekStartsOn ?? ((h = (f = e.locale) == null ? void 0 : f.options) == null ? void 0 : h.weekStartsOn) ?? 0, o = x(n), s = o.getDay(), c = (a % 7 + 7) % 7, u = 7 - r, l = a < 0 || a > 6 ? a - (s + u) % 7 : (c + u) % 7 - (s + u) % 7;
  return he(o, l);
}
class xo extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 90);
    k(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, r, o) {
    return t = Er(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
}
class Mo extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 90);
    k(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r, o) {
    const s = (i) => {
      const c = Math.floor((i - 1) / 7) * 7;
      return (i + o.weekStartsOn + 6) % 7 + c;
    };
    switch (e) {
      case "e":
      case "ee":
        return Z(G(e.length, t), s);
      case "eo":
        return Z(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          s
        );
      case "eee":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "eeeee":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, r, o) {
    return t = Er(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
}
class Co extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 90);
    k(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(t, e, r, o) {
    const s = (i) => {
      const c = Math.floor((i - 1) / 7) * 7;
      return (i + o.weekStartsOn + 6) % 7 + c;
    };
    switch (e) {
      case "c":
      case "cc":
        return Z(G(e.length, t), s);
      case "co":
        return Z(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          s
        );
      case "ccc":
        return r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      case "ccccc":
        return r.day(t, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return r.day(t, { width: "wide", context: "standalone" }) || r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 6;
  }
  set(t, e, r, o) {
    return t = Er(t, r, o), t.setHours(0, 0, 0, 0), t;
  }
}
function So(n, a) {
  const t = x(n), e = eo(t), r = a - e;
  return he(t, r);
}
class Eo extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 90);
    k(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, e, r) {
    const o = (s) => s === 0 ? 7 : s;
    switch (e) {
      case "i":
      case "ii":
        return G(e.length, t);
      case "io":
        return r.ordinalNumber(t, { unit: "day" });
      case "iii":
        return Z(
          r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiiii":
        return Z(
          r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiiiii":
        return Z(
          r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiii":
      default:
        return Z(
          r.day(t, {
            width: "wide",
            context: "formatting"
          }) || r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 7;
  }
  set(t, e, r) {
    return t = So(t, r), t.setHours(0, 0, 0, 0), t;
  }
}
class Po extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 80);
    k(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "a":
      case "aa":
      case "aaa":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, r) {
    return t.setHours(Sr(r), 0, 0, 0), t;
  }
}
class To extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 80);
    k(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "b":
      case "bb":
      case "bbb":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, r) {
    return t.setHours(Sr(r), 0, 0, 0), t;
  }
}
class Oo extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 80);
    k(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, e, r) {
    return t.setHours(Sr(r), 0, 0, 0), t;
  }
}
class No extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 70);
    k(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "h":
        return X(z.hour12h, t);
      case "ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return G(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 12;
  }
  set(t, e, r) {
    const o = t.getHours() >= 12;
    return o && r < 12 ? t.setHours(r + 12, 0, 0, 0) : !o && r === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
}
class Ro extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 70);
    k(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "H":
        return X(z.hour23h, t);
      case "Ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return G(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 23;
  }
  set(t, e, r) {
    return t.setHours(r, 0, 0, 0), t;
  }
}
class Yo extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 70);
    k(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "K":
        return X(z.hour11h, t);
      case "Ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return G(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 11;
  }
  set(t, e, r) {
    return t.getHours() >= 12 && r < 12 ? t.setHours(r + 12, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
}
class Io extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 70);
    k(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "k":
        return X(z.hour24h, t);
      case "ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return G(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 1 && e <= 24;
  }
  set(t, e, r) {
    const o = r <= 24 ? r % 24 : r;
    return t.setHours(o, 0, 0, 0), t;
  }
}
class Lo extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 60);
    k(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "m":
        return X(z.minute, t);
      case "mo":
        return r.ordinalNumber(t, { unit: "minute" });
      default:
        return G(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, r) {
    return t.setMinutes(r, 0, 0), t;
  }
}
class Fo extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 50);
    k(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e, r) {
    switch (e) {
      case "s":
        return X(z.second, t);
      case "so":
        return r.ordinalNumber(t, { unit: "second" });
      default:
        return G(e.length, t);
    }
  }
  validate(t, e) {
    return e >= 0 && e <= 59;
  }
  set(t, e, r) {
    return t.setSeconds(r, 0), t;
  }
}
class Ao extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 30);
    k(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, e) {
    const r = (o) => Math.trunc(o * Math.pow(10, -e.length + 3));
    return Z(G(e.length, t), r);
  }
  set(t, e, r) {
    return t.setMilliseconds(r), t;
  }
}
class Wo extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 10);
    k(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, e) {
    switch (e) {
      case "X":
        return De(
          we.basicOptionalMinutes,
          t
        );
      case "XX":
        return De(we.basic, t);
      case "XXXX":
        return De(
          we.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return De(
          we.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return De(we.extended, t);
    }
  }
  set(t, e, r) {
    return e.timestampIsSet ? t : j(
      t,
      t.getTime() - It(t) - r
    );
  }
}
class Ho extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 10);
    k(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, e) {
    switch (e) {
      case "x":
        return De(
          we.basicOptionalMinutes,
          t
        );
      case "xx":
        return De(we.basic, t);
      case "xxxx":
        return De(
          we.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return De(
          we.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return De(we.extended, t);
    }
  }
  set(t, e, r) {
    return e.timestampIsSet ? t : j(
      t,
      t.getTime() - It(t) - r
    );
  }
}
class Bo extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 40);
    k(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return jn(t);
  }
  set(t, e, r) {
    return [j(t, r * 1e3), { timestampIsSet: !0 }];
  }
}
class Qo extends Q {
  constructor() {
    super(...arguments);
    k(this, "priority", 20);
    k(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return jn(t);
  }
  set(t, e, r) {
    return [j(t, r), { timestampIsSet: !0 }];
  }
}
const Vo = {
  G: new so(),
  y: new io(),
  Y: new co(),
  R: new lo(),
  u: new uo(),
  Q: new po(),
  q: new fo(),
  M: new ho(),
  L: new mo(),
  w: new go(),
  I: new Do(),
  d: new _o(),
  D: new ko(),
  E: new xo(),
  e: new Mo(),
  c: new Co(),
  i: new Eo(),
  a: new Po(),
  b: new To(),
  B: new Oo(),
  h: new No(),
  H: new Ro(),
  K: new Yo(),
  k: new Io(),
  m: new Lo(),
  s: new Fo(),
  S: new Ao(),
  X: new Wo(),
  x: new Ho(),
  t: new Bo(),
  T: new Qo()
}, Ko = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, qo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, jo = /^'([^]*?)'?$/, $o = /''/g, Uo = /\S/, Xo = /[a-zA-Z]/;
function or(n, a, t, e) {
  var g, v, w, b, y, S, P, T;
  const r = Ja(), o = (e == null ? void 0 : e.locale) ?? r.locale ?? Rn, s = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((v = (g = e == null ? void 0 : e.locale) == null ? void 0 : g.options) == null ? void 0 : v.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((b = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, i = (e == null ? void 0 : e.weekStartsOn) ?? ((S = (y = e == null ? void 0 : e.locale) == null ? void 0 : y.options) == null ? void 0 : S.weekStartsOn) ?? r.weekStartsOn ?? ((T = (P = r.locale) == null ? void 0 : P.options) == null ? void 0 : T.weekStartsOn) ?? 0;
  if (a === "")
    return n === "" ? x(t) : j(t, NaN);
  const c = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: o
  }, u = [new oo()], l = a.match(qo).map((D) => {
    const M = D[0];
    if (M in Bt) {
      const E = Bt[M];
      return E(D, o.formatLong);
    }
    return D;
  }).join("").match(Ko), d = [];
  for (let D of l) {
    !(e != null && e.useAdditionalWeekYearTokens) && Kn(D) && wr(D, a, n), !(e != null && e.useAdditionalDayOfYearTokens) && Vn(D) && wr(D, a, n);
    const M = D[0], E = Vo[M];
    if (E) {
      const { incompatibleTokens: F } = E;
      if (Array.isArray(F)) {
        const C = d.find(
          (A) => F.includes(A.token) || A.token === M
        );
        if (C)
          throw new RangeError(
            `The format string mustn't contain \`${C.fullToken}\` and \`${D}\` at the same time`
          );
      } else if (E.incompatibleTokens === "*" && d.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${D}\` and any other token at the same time`
        );
      d.push({ token: M, fullToken: D });
      const B = E.run(
        n,
        D,
        o.match,
        c
      );
      if (!B)
        return j(t, NaN);
      u.push(B.setter), n = B.rest;
    } else {
      if (M.match(Xo))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + M + "`"
        );
      if (D === "''" ? D = "'" : M === "'" && (D = Go(D)), n.indexOf(D) === 0)
        n = n.slice(D.length);
      else
        return j(t, NaN);
    }
  }
  if (n.length > 0 && Uo.test(n))
    return j(t, NaN);
  const p = u.map((D) => D.priority).sort((D, M) => M - D).filter((D, M, E) => E.indexOf(D) === M).map(
    (D) => u.filter((M) => M.priority === D).sort((M, E) => E.subPriority - M.subPriority)
  ).map((D) => D[0]);
  let f = x(t);
  if (isNaN(f.getTime()))
    return j(t, NaN);
  const h = {};
  for (const D of p) {
    if (!D.validate(f, c))
      return j(t, NaN);
    const M = D.set(f, h, c);
    Array.isArray(M) ? (f = M[0], Object.assign(h, M[1])) : f = M;
  }
  return j(t, f);
}
function Go(n) {
  return n.match(jo)[1].replace($o, "'");
}
function zo(n, a) {
  const t = x(n), e = x(a);
  return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth();
}
function Zo(n, a) {
  const t = gr(n), e = gr(a);
  return +t == +e;
}
function Jo(n, a) {
  const t = x(n), e = x(a);
  return t.getFullYear() === e.getFullYear();
}
function ht(n, a) {
  const t = +x(n), [e, r] = [
    +x(a.start),
    +x(a.end)
  ].sort((o, s) => o - s);
  return t >= e && t <= r;
}
function es(n, a) {
  return he(n, -1);
}
function ts(n, a) {
  const e = os(n);
  let r;
  if (e.date) {
    const c = ss(e.date, 2);
    r = is(c.restDateString, c.year);
  }
  if (!r || isNaN(r.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  const o = r.getTime();
  let s = 0, i;
  if (e.time && (s = cs(e.time), isNaN(s)))
    return /* @__PURE__ */ new Date(NaN);
  if (e.timezone) {
    if (i = ls(e.timezone), isNaN(i))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    const c = new Date(o + s), u = /* @__PURE__ */ new Date(0);
    return u.setFullYear(
      c.getUTCFullYear(),
      c.getUTCMonth(),
      c.getUTCDate()
    ), u.setHours(
      c.getUTCHours(),
      c.getUTCMinutes(),
      c.getUTCSeconds(),
      c.getUTCMilliseconds()
    ), u;
  }
  return new Date(o + s + i);
}
const _t = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, rs = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, ns = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, as = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function os(n) {
  const a = {}, t = n.split(_t.dateTimeDelimiter);
  let e;
  if (t.length > 2)
    return a;
  if (/:/.test(t[0]) ? e = t[0] : (a.date = t[0], e = t[1], _t.timeZoneDelimiter.test(a.date) && (a.date = n.split(_t.timeZoneDelimiter)[0], e = n.substr(
    a.date.length,
    n.length
  ))), e) {
    const r = _t.timezone.exec(e);
    r ? (a.time = e.replace(r[1], ""), a.timezone = r[1]) : a.time = e;
  }
  return a;
}
function ss(n, a) {
  const t = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + a) + "})|(\\d{2}|[+-]\\d{" + (2 + a) + "})$)"
  ), e = n.match(t);
  if (!e) return { year: NaN, restDateString: "" };
  const r = e[1] ? parseInt(e[1]) : null, o = e[2] ? parseInt(e[2]) : null;
  return {
    year: o === null ? r : o * 100,
    restDateString: n.slice((e[1] || e[2]).length)
  };
}
function is(n, a) {
  if (a === null) return /* @__PURE__ */ new Date(NaN);
  const t = n.match(rs);
  if (!t) return /* @__PURE__ */ new Date(NaN);
  const e = !!t[4], r = lt(t[1]), o = lt(t[2]) - 1, s = lt(t[3]), i = lt(t[4]), c = lt(t[5]) - 1;
  if (e)
    return hs(a, i, c) ? us(a, i, c) : /* @__PURE__ */ new Date(NaN);
  {
    const u = /* @__PURE__ */ new Date(0);
    return !ps(a, o, s) || !fs(a, r) ? /* @__PURE__ */ new Date(NaN) : (u.setUTCFullYear(a, o, Math.max(r, s)), u);
  }
}
function lt(n) {
  return n ? parseInt(n) : 1;
}
function cs(n) {
  const a = n.match(ns);
  if (!a) return NaN;
  const t = sr(a[1]), e = sr(a[2]), r = sr(a[3]);
  return ms(t, e, r) ? t * Gt + e * Xt + r * 1e3 : NaN;
}
function sr(n) {
  return n && parseFloat(n.replace(",", ".")) || 0;
}
function ls(n) {
  if (n === "Z") return 0;
  const a = n.match(as);
  if (!a) return 0;
  const t = a[1] === "+" ? -1 : 1, e = parseInt(a[2]), r = a[3] && parseInt(a[3]) || 0;
  return vs(e, r) ? t * (e * Gt + r * Xt) : NaN;
}
function us(n, a, t) {
  const e = /* @__PURE__ */ new Date(0);
  e.setUTCFullYear(n, 0, 4);
  const r = e.getUTCDay() || 7, o = (a - 1) * 7 + t + 1 - r;
  return e.setUTCDate(e.getUTCDate() + o), e;
}
const ds = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Xn(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
function ps(n, a, t) {
  return a >= 0 && a <= 11 && t >= 1 && t <= (ds[a] || (Xn(n) ? 29 : 28));
}
function fs(n, a) {
  return a >= 1 && a <= (Xn(n) ? 366 : 365);
}
function hs(n, a, t) {
  return a >= 1 && a <= 53 && t >= 0 && t <= 6;
}
function ms(n, a, t) {
  return n === 24 ? a === 0 && t === 0 : t >= 0 && t < 60 && a >= 0 && a < 60 && n >= 0 && n < 25;
}
function vs(n, a) {
  return a >= 0 && a <= 59;
}
function ie(n, a) {
  const t = x(n), e = t.getFullYear(), r = t.getDate(), o = j(n, 0);
  o.setFullYear(e, a, 15), o.setHours(0, 0, 0, 0);
  const s = Za(o);
  return t.setMonth(a, Math.min(r, s)), t;
}
function gs(n, a) {
  let t = x(n);
  return isNaN(+t) ? j(n, NaN) : (a.year != null && t.setFullYear(a.year), a.month != null && (t = ie(t, a.month)), a.date != null && t.setDate(a.date), a.hours != null && t.setHours(a.hours), a.minutes != null && t.setMinutes(a.minutes), a.seconds != null && t.setSeconds(a.seconds), a.milliseconds != null && t.setMilliseconds(a.milliseconds), t);
}
function Pt(n, a) {
  const t = x(n);
  return t.setHours(a), t;
}
function Tt(n, a) {
  const t = x(n);
  return t.setMinutes(a), t;
}
function Ze(n, a) {
  const t = x(n), e = Math.trunc(t.getMonth() / 3) + 1, r = a - e;
  return ie(t, t.getMonth() + r * 3);
}
function Ot(n, a) {
  const t = x(n);
  return t.setSeconds(a), t;
}
function ve(n, a) {
  const t = x(n);
  return isNaN(+t) ? j(n, NaN) : (t.setFullYear(a), t);
}
function Ve(n, a) {
  return me(n, -a);
}
function Gn(n, a) {
  return xr(n, -1);
}
function Jr(n, a) {
  return Lt(n, -1);
}
function nt(n, a) {
  return Ce(n, -a);
}
function Zt() {
  return typeof window < "u";
}
function ct(n) {
  return zn(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function ce(n) {
  var a;
  return (n == null || (a = n.ownerDocument) == null ? void 0 : a.defaultView) || window;
}
function xe(n) {
  var a;
  return (a = (zn(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : a.documentElement;
}
function zn(n) {
  return Zt() ? n instanceof Node || n instanceof ce(n).Node : !1;
}
function ae(n) {
  return Zt() ? n instanceof Element || n instanceof ce(n).Element : !1;
}
function Oe(n) {
  return Zt() ? n instanceof HTMLElement || n instanceof ce(n).HTMLElement : !1;
}
function en(n) {
  return !Zt() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof ce(n).ShadowRoot;
}
function gt(n) {
  const {
    overflow: a,
    overflowX: t,
    overflowY: e,
    display: r
  } = de(n);
  return /auto|scroll|overlay|hidden|clip/.test(a + e + t) && r !== "inline" && r !== "contents";
}
function ws(n) {
  return /^(table|td|th)$/.test(ct(n));
}
function Jt(n) {
  try {
    if (n.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return n.matches(":modal");
  } catch {
    return !1;
  }
}
const Ds = /transform|translate|scale|rotate|perspective|filter/, ys = /paint|layout|strict|content/, Ae = (n) => !!n && n !== "none";
let ir;
function Pr(n) {
  const a = ae(n) ? de(n) : n;
  return Ae(a.transform) || Ae(a.translate) || Ae(a.scale) || Ae(a.rotate) || Ae(a.perspective) || !Tr() && (Ae(a.backdropFilter) || Ae(a.filter)) || Ds.test(a.willChange || "") || ys.test(a.contain || "");
}
function bs(n) {
  let a = Fe(n);
  for (; Oe(a) && !at(a); ) {
    if (Pr(a))
      return a;
    if (Jt(a))
      return null;
    a = Fe(a);
  }
  return null;
}
function Tr() {
  return ir == null && (ir = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), ir;
}
function at(n) {
  return /^(html|body|#document)$/.test(ct(n));
}
function de(n) {
  return ce(n).getComputedStyle(n);
}
function er(n) {
  return ae(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function Fe(n) {
  if (ct(n) === "html")
    return n;
  const a = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    en(n) && n.host || // Fallback.
    xe(n)
  );
  return en(a) ? a.host : a;
}
function Zn(n) {
  const a = Fe(n);
  return at(a) ? n.ownerDocument ? n.ownerDocument.body : n.body : Oe(a) && gt(a) ? a : Zn(a);
}
function mt(n, a, t) {
  var e;
  a === void 0 && (a = []), t === void 0 && (t = !0);
  const r = Zn(n), o = r === ((e = n.ownerDocument) == null ? void 0 : e.body), s = ce(r);
  if (o) {
    const i = yr(s);
    return a.concat(s, s.visualViewport || [], gt(r) ? r : [], i && t ? mt(i) : []);
  } else
    return a.concat(r, mt(r, [], t));
}
function yr(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
const ot = Math.min, Ke = Math.max, Vt = Math.round, kt = Math.floor, ke = (n) => ({
  x: n,
  y: n
}), _s = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ks(n, a, t) {
  return Ke(n, ot(a, t));
}
function tr(n, a) {
  return typeof n == "function" ? n(a) : n;
}
function st(n) {
  return n.split("-")[0];
}
function wt(n) {
  return n.split("-")[1];
}
function xs(n) {
  return n === "x" ? "y" : "x";
}
function Or(n) {
  return n === "y" ? "height" : "width";
}
function He(n) {
  const a = n[0];
  return a === "t" || a === "b" ? "y" : "x";
}
function Nr(n) {
  return xs(He(n));
}
function Ms(n, a, t) {
  t === void 0 && (t = !1);
  const e = wt(n), r = Nr(n), o = Or(r);
  let s = r === "x" ? e === (t ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return a.reference[o] > a.floating[o] && (s = Kt(s)), [s, Kt(s)];
}
function Cs(n) {
  const a = Kt(n);
  return [br(n), a, br(a)];
}
function br(n) {
  return n.includes("start") ? n.replace("start", "end") : n.replace("end", "start");
}
const tn = ["left", "right"], rn = ["right", "left"], Ss = ["top", "bottom"], Es = ["bottom", "top"];
function Ps(n, a, t) {
  switch (n) {
    case "top":
    case "bottom":
      return t ? a ? rn : tn : a ? tn : rn;
    case "left":
    case "right":
      return a ? Ss : Es;
    default:
      return [];
  }
}
function Ts(n, a, t, e) {
  const r = wt(n);
  let o = Ps(st(n), t === "start", e);
  return r && (o = o.map((s) => s + "-" + r), a && (o = o.concat(o.map(br)))), o;
}
function Kt(n) {
  const a = st(n);
  return _s[a] + n.slice(a.length);
}
function Os(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Jn(n) {
  return typeof n != "number" ? Os(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function qt(n) {
  const {
    x: a,
    y: t,
    width: e,
    height: r
  } = n;
  return {
    width: e,
    height: r,
    top: t,
    left: a,
    right: a + e,
    bottom: t + r,
    x: a,
    y: t
  };
}
var Ns = typeof document < "u", Rs = function() {
}, jt = Ns ? On : Rs;
const Ys = {
  ...N
}, Is = Ys.useInsertionEffect, Ls = Is || ((n) => n());
function Fs(n) {
  const a = N.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Ls(() => {
    a.current = n;
  }), N.useCallback(function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    return a.current == null ? void 0 : a.current(...e);
  }, []);
}
function nn(n, a, t) {
  let {
    reference: e,
    floating: r
  } = n;
  const o = He(a), s = Nr(a), i = Or(s), c = st(a), u = o === "y", l = e.x + e.width / 2 - r.width / 2, d = e.y + e.height / 2 - r.height / 2, p = e[i] / 2 - r[i] / 2;
  let f;
  switch (c) {
    case "top":
      f = {
        x: l,
        y: e.y - r.height
      };
      break;
    case "bottom":
      f = {
        x: l,
        y: e.y + e.height
      };
      break;
    case "right":
      f = {
        x: e.x + e.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: e.x - r.width,
        y: d
      };
      break;
    default:
      f = {
        x: e.x,
        y: e.y
      };
  }
  switch (wt(a)) {
    case "start":
      f[s] -= p * (t && u ? -1 : 1);
      break;
    case "end":
      f[s] += p * (t && u ? -1 : 1);
      break;
  }
  return f;
}
async function As(n, a) {
  var t;
  a === void 0 && (a = {});
  const {
    x: e,
    y: r,
    platform: o,
    rects: s,
    elements: i,
    strategy: c
  } = n, {
    boundary: u = "clippingAncestors",
    rootBoundary: l = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = tr(a, n), h = Jn(f), v = i[p ? d === "floating" ? "reference" : "floating" : d], w = qt(await o.getClippingRect({
    element: (t = await (o.isElement == null ? void 0 : o.isElement(v))) == null || t ? v : v.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: l,
    strategy: c
  })), b = d === "floating" ? {
    x: e,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, y = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(i.floating)), S = await (o.isElement == null ? void 0 : o.isElement(y)) ? await (o.getScale == null ? void 0 : o.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = qt(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: b,
    offsetParent: y,
    strategy: c
  }) : b);
  return {
    top: (w.top - P.top + h.top) / S.y,
    bottom: (P.bottom - w.bottom + h.bottom) / S.y,
    left: (w.left - P.left + h.left) / S.x,
    right: (P.right - w.right + h.right) / S.x
  };
}
const Ws = 50, Hs = async (n, a, t) => {
  const {
    placement: e = "bottom",
    strategy: r = "absolute",
    middleware: o = [],
    platform: s
  } = t, i = s.detectOverflow ? s : {
    ...s,
    detectOverflow: As
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(a));
  let u = await s.getElementRects({
    reference: n,
    floating: a,
    strategy: r
  }), {
    x: l,
    y: d
  } = nn(u, e, c), p = e, f = 0;
  const h = {};
  for (let g = 0; g < o.length; g++) {
    const v = o[g];
    if (!v)
      continue;
    const {
      name: w,
      fn: b
    } = v, {
      x: y,
      y: S,
      data: P,
      reset: T
    } = await b({
      x: l,
      y: d,
      initialPlacement: e,
      placement: p,
      strategy: r,
      middlewareData: h,
      rects: u,
      platform: i,
      elements: {
        reference: n,
        floating: a
      }
    });
    l = y ?? l, d = S ?? d, h[w] = {
      ...h[w],
      ...P
    }, T && f < Ws && (f++, typeof T == "object" && (T.placement && (p = T.placement), T.rects && (u = T.rects === !0 ? await s.getElementRects({
      reference: n,
      floating: a,
      strategy: r
    }) : T.rects), {
      x: l,
      y: d
    } = nn(u, p, c)), g = -1);
  }
  return {
    x: l,
    y: d,
    placement: p,
    strategy: r,
    middlewareData: h
  };
}, Bs = (n) => ({
  name: "arrow",
  options: n,
  async fn(a) {
    const {
      x: t,
      y: e,
      placement: r,
      rects: o,
      platform: s,
      elements: i,
      middlewareData: c
    } = a, {
      element: u,
      padding: l = 0
    } = tr(n, a) || {};
    if (u == null)
      return {};
    const d = Jn(l), p = {
      x: t,
      y: e
    }, f = Nr(r), h = Or(f), g = await s.getDimensions(u), v = f === "y", w = v ? "top" : "left", b = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", S = o.reference[h] + o.reference[f] - p[f] - o.floating[h], P = p[f] - o.reference[f], T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let D = T ? T[y] : 0;
    (!D || !await (s.isElement == null ? void 0 : s.isElement(T))) && (D = i.floating[y] || o.floating[h]);
    const M = S / 2 - P / 2, E = D / 2 - g[h] / 2 - 1, F = ot(d[w], E), B = ot(d[b], E), C = F, A = D - g[h] - B, Y = D / 2 - g[h] / 2 + M, V = ks(C, Y, A), O = !c.arrow && wt(r) != null && Y !== V && o.reference[h] / 2 - (Y < C ? F : B) - g[h] / 2 < 0, I = O ? Y < C ? Y - C : Y - A : 0;
    return {
      [f]: p[f] + I,
      data: {
        [f]: V,
        centerOffset: Y - V - I,
        ...O && {
          alignmentOffset: I
        }
      },
      reset: O
    };
  }
}), Qs = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(a) {
      var t, e;
      const {
        placement: r,
        middlewareData: o,
        rects: s,
        initialPlacement: i,
        platform: c,
        elements: u
      } = a, {
        mainAxis: l = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...v
      } = tr(n, a);
      if ((t = o.arrow) != null && t.alignmentOffset)
        return {};
      const w = st(r), b = He(i), y = st(i) === i, S = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), P = p || (y || !g ? [Kt(i)] : Cs(i)), T = h !== "none";
      !p && T && P.push(...Ts(i, g, h, S));
      const D = [i, ...P], M = await c.detectOverflow(a, v), E = [];
      let F = ((e = o.flip) == null ? void 0 : e.overflows) || [];
      if (l && E.push(M[w]), d) {
        const Y = Ms(r, s, S);
        E.push(M[Y[0]], M[Y[1]]);
      }
      if (F = [...F, {
        placement: r,
        overflows: E
      }], !E.every((Y) => Y <= 0)) {
        var B, C;
        const Y = (((B = o.flip) == null ? void 0 : B.index) || 0) + 1, V = D[Y];
        if (V && (!(d === "alignment" ? b !== He(V) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        F.every((R) => He(R.placement) === b ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: Y,
              overflows: F
            },
            reset: {
              placement: V
            }
          };
        let O = (C = F.filter((I) => I.overflows[0] <= 0).sort((I, R) => I.overflows[1] - R.overflows[1])[0]) == null ? void 0 : C.placement;
        if (!O)
          switch (f) {
            case "bestFit": {
              var A;
              const I = (A = F.filter((R) => {
                if (T) {
                  const J = He(R.placement);
                  return J === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  J === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((J) => J > 0).reduce((J, pe) => J + pe, 0)]).sort((R, J) => R[1] - J[1])[0]) == null ? void 0 : A[0];
              I && (O = I);
              break;
            }
            case "initialPlacement":
              O = i;
              break;
          }
        if (r !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
}, Vs = /* @__PURE__ */ new Set(["left", "top"]);
async function Ks(n, a) {
  const {
    placement: t,
    platform: e,
    elements: r
  } = n, o = await (e.isRTL == null ? void 0 : e.isRTL(r.floating)), s = st(t), i = wt(t), c = He(t) === "y", u = Vs.has(s) ? -1 : 1, l = o && c ? -1 : 1, d = tr(a, n);
  let {
    mainAxis: p,
    crossAxis: f,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return i && typeof h == "number" && (f = i === "end" ? h * -1 : h), c ? {
    x: f * l,
    y: p * u
  } : {
    x: p * u,
    y: f * l
  };
}
const qs = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(a) {
      var t, e;
      const {
        x: r,
        y: o,
        placement: s,
        middlewareData: i
      } = a, c = await Ks(a, n);
      return s === ((t = i.offset) == null ? void 0 : t.placement) && (e = i.arrow) != null && e.alignmentOffset ? {} : {
        x: r + c.x,
        y: o + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
};
function ea(n) {
  const a = de(n);
  let t = parseFloat(a.width) || 0, e = parseFloat(a.height) || 0;
  const r = Oe(n), o = r ? n.offsetWidth : t, s = r ? n.offsetHeight : e, i = Vt(t) !== o || Vt(e) !== s;
  return i && (t = o, e = s), {
    width: t,
    height: e,
    $: i
  };
}
function Rr(n) {
  return ae(n) ? n : n.contextElement;
}
function Je(n) {
  const a = Rr(n);
  if (!Oe(a))
    return ke(1);
  const t = a.getBoundingClientRect(), {
    width: e,
    height: r,
    $: o
  } = ea(a);
  let s = (o ? Vt(t.width) : t.width) / e, i = (o ? Vt(t.height) : t.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const js = /* @__PURE__ */ ke(0);
function ta(n) {
  const a = ce(n);
  return !Tr() || !a.visualViewport ? js : {
    x: a.visualViewport.offsetLeft,
    y: a.visualViewport.offsetTop
  };
}
function $s(n, a, t) {
  return a === void 0 && (a = !1), !t || a && t !== ce(n) ? !1 : a;
}
function Ue(n, a, t, e) {
  a === void 0 && (a = !1), t === void 0 && (t = !1);
  const r = n.getBoundingClientRect(), o = Rr(n);
  let s = ke(1);
  a && (e ? ae(e) && (s = Je(e)) : s = Je(n));
  const i = $s(o, t, e) ? ta(o) : ke(0);
  let c = (r.left + i.x) / s.x, u = (r.top + i.y) / s.y, l = r.width / s.x, d = r.height / s.y;
  if (o) {
    const p = ce(o), f = e && ae(e) ? ce(e) : e;
    let h = p, g = yr(h);
    for (; g && e && f !== h; ) {
      const v = Je(g), w = g.getBoundingClientRect(), b = de(g), y = w.left + (g.clientLeft + parseFloat(b.paddingLeft)) * v.x, S = w.top + (g.clientTop + parseFloat(b.paddingTop)) * v.y;
      c *= v.x, u *= v.y, l *= v.x, d *= v.y, c += y, u += S, h = ce(g), g = yr(h);
    }
  }
  return qt({
    width: l,
    height: d,
    x: c,
    y: u
  });
}
function rr(n, a) {
  const t = er(n).scrollLeft;
  return a ? a.left + t : Ue(xe(n)).left + t;
}
function ra(n, a) {
  const t = n.getBoundingClientRect(), e = t.left + a.scrollLeft - rr(n, t), r = t.top + a.scrollTop;
  return {
    x: e,
    y: r
  };
}
function Us(n) {
  let {
    elements: a,
    rect: t,
    offsetParent: e,
    strategy: r
  } = n;
  const o = r === "fixed", s = xe(e), i = a ? Jt(a.floating) : !1;
  if (e === s || i && o)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ke(1);
  const l = ke(0), d = Oe(e);
  if ((d || !d && !o) && ((ct(e) !== "body" || gt(s)) && (c = er(e)), d)) {
    const f = Ue(e);
    u = Je(e), l.x = f.x + e.clientLeft, l.y = f.y + e.clientTop;
  }
  const p = s && !d && !o ? ra(s, c) : ke(0);
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - c.scrollLeft * u.x + l.x + p.x,
    y: t.y * u.y - c.scrollTop * u.y + l.y + p.y
  };
}
function Xs(n) {
  return Array.from(n.getClientRects());
}
function Gs(n) {
  const a = xe(n), t = er(n), e = n.ownerDocument.body, r = Ke(a.scrollWidth, a.clientWidth, e.scrollWidth, e.clientWidth), o = Ke(a.scrollHeight, a.clientHeight, e.scrollHeight, e.clientHeight);
  let s = -t.scrollLeft + rr(n);
  const i = -t.scrollTop;
  return de(e).direction === "rtl" && (s += Ke(a.clientWidth, e.clientWidth) - r), {
    width: r,
    height: o,
    x: s,
    y: i
  };
}
const an = 25;
function zs(n, a) {
  const t = ce(n), e = xe(n), r = t.visualViewport;
  let o = e.clientWidth, s = e.clientHeight, i = 0, c = 0;
  if (r) {
    o = r.width, s = r.height;
    const l = Tr();
    (!l || l && a === "fixed") && (i = r.offsetLeft, c = r.offsetTop);
  }
  const u = rr(e);
  if (u <= 0) {
    const l = e.ownerDocument, d = l.body, p = getComputedStyle(d), f = l.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, h = Math.abs(e.clientWidth - d.clientWidth - f);
    h <= an && (o -= h);
  } else u <= an && (o += u);
  return {
    width: o,
    height: s,
    x: i,
    y: c
  };
}
function Zs(n, a) {
  const t = Ue(n, !0, a === "fixed"), e = t.top + n.clientTop, r = t.left + n.clientLeft, o = Oe(n) ? Je(n) : ke(1), s = n.clientWidth * o.x, i = n.clientHeight * o.y, c = r * o.x, u = e * o.y;
  return {
    width: s,
    height: i,
    x: c,
    y: u
  };
}
function on(n, a, t) {
  let e;
  if (a === "viewport")
    e = zs(n, t);
  else if (a === "document")
    e = Gs(xe(n));
  else if (ae(a))
    e = Zs(a, t);
  else {
    const r = ta(n);
    e = {
      x: a.x - r.x,
      y: a.y - r.y,
      width: a.width,
      height: a.height
    };
  }
  return qt(e);
}
function na(n, a) {
  const t = Fe(n);
  return t === a || !ae(t) || at(t) ? !1 : de(t).position === "fixed" || na(t, a);
}
function Js(n, a) {
  const t = a.get(n);
  if (t)
    return t;
  let e = mt(n, [], !1).filter((i) => ae(i) && ct(i) !== "body"), r = null;
  const o = de(n).position === "fixed";
  let s = o ? Fe(n) : n;
  for (; ae(s) && !at(s); ) {
    const i = de(s), c = Pr(s);
    !c && i.position === "fixed" && (r = null), (o ? !c && !r : !c && i.position === "static" && !!r && (r.position === "absolute" || r.position === "fixed") || gt(s) && !c && na(n, s)) ? e = e.filter((l) => l !== s) : r = i, s = Fe(s);
  }
  return a.set(n, e), e;
}
function ei(n) {
  let {
    element: a,
    boundary: t,
    rootBoundary: e,
    strategy: r
  } = n;
  const s = [...t === "clippingAncestors" ? Jt(a) ? [] : Js(a, this._c) : [].concat(t), e], i = on(a, s[0], r);
  let c = i.top, u = i.right, l = i.bottom, d = i.left;
  for (let p = 1; p < s.length; p++) {
    const f = on(a, s[p], r);
    c = Ke(f.top, c), u = ot(f.right, u), l = ot(f.bottom, l), d = Ke(f.left, d);
  }
  return {
    width: u - d,
    height: l - c,
    x: d,
    y: c
  };
}
function ti(n) {
  const {
    width: a,
    height: t
  } = ea(n);
  return {
    width: a,
    height: t
  };
}
function ri(n, a, t) {
  const e = Oe(a), r = xe(a), o = t === "fixed", s = Ue(n, !0, o, a);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ke(0);
  function u() {
    c.x = rr(r);
  }
  if (e || !e && !o)
    if ((ct(a) !== "body" || gt(r)) && (i = er(a)), e) {
      const f = Ue(a, !0, o, a);
      c.x = f.x + a.clientLeft, c.y = f.y + a.clientTop;
    } else r && u();
  o && !e && r && u();
  const l = r && !e && !o ? ra(r, i) : ke(0), d = s.left + i.scrollLeft - c.x - l.x, p = s.top + i.scrollTop - c.y - l.y;
  return {
    x: d,
    y: p,
    width: s.width,
    height: s.height
  };
}
function cr(n) {
  return de(n).position === "static";
}
function sn(n, a) {
  if (!Oe(n) || de(n).position === "fixed")
    return null;
  if (a)
    return a(n);
  let t = n.offsetParent;
  return xe(n) === t && (t = t.ownerDocument.body), t;
}
function aa(n, a) {
  const t = ce(n);
  if (Jt(n))
    return t;
  if (!Oe(n)) {
    let r = Fe(n);
    for (; r && !at(r); ) {
      if (ae(r) && !cr(r))
        return r;
      r = Fe(r);
    }
    return t;
  }
  let e = sn(n, a);
  for (; e && ws(e) && cr(e); )
    e = sn(e, a);
  return e && at(e) && cr(e) && !Pr(e) ? t : e || bs(n) || t;
}
const ni = async function(n) {
  const a = this.getOffsetParent || aa, t = this.getDimensions, e = await t(n.floating);
  return {
    reference: ri(n.reference, await a(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: e.width,
      height: e.height
    }
  };
};
function ai(n) {
  return de(n).direction === "rtl";
}
const oi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Us,
  getDocumentElement: xe,
  getClippingRect: ei,
  getOffsetParent: aa,
  getElementRects: ni,
  getClientRects: Xs,
  getDimensions: ti,
  getScale: Je,
  isElement: ae,
  isRTL: ai
};
function oa(n, a) {
  return n.x === a.x && n.y === a.y && n.width === a.width && n.height === a.height;
}
function si(n, a) {
  let t = null, e;
  const r = xe(n);
  function o() {
    var i;
    clearTimeout(e), (i = t) == null || i.disconnect(), t = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), o();
    const u = n.getBoundingClientRect(), {
      left: l,
      top: d,
      width: p,
      height: f
    } = u;
    if (i || a(), !p || !f)
      return;
    const h = kt(d), g = kt(r.clientWidth - (l + p)), v = kt(r.clientHeight - (d + f)), w = kt(l), y = {
      rootMargin: -h + "px " + -g + "px " + -v + "px " + -w + "px",
      threshold: Ke(0, ot(1, c)) || 1
    };
    let S = !0;
    function P(T) {
      const D = T[0].intersectionRatio;
      if (D !== c) {
        if (!S)
          return s();
        D ? s(!1, D) : e = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      D === 1 && !oa(u, n.getBoundingClientRect()) && s(), S = !1;
    }
    try {
      t = new IntersectionObserver(P, {
        ...y,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(P, y);
    }
    t.observe(n);
  }
  return s(!0), o;
}
function ii(n, a, t, e) {
  e === void 0 && (e = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = e, u = Rr(n), l = r || o ? [...u ? mt(u) : [], ...a ? mt(a) : []] : [];
  l.forEach((w) => {
    r && w.addEventListener("scroll", t, {
      passive: !0
    }), o && w.addEventListener("resize", t);
  });
  const d = u && i ? si(u, t) : null;
  let p = -1, f = null;
  s && (f = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === u && f && a && (f.unobserve(a), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = f) == null || y.observe(a);
    })), t();
  }), u && !c && f.observe(u), a && f.observe(a));
  let h, g = c ? Ue(n) : null;
  c && v();
  function v() {
    const w = Ue(n);
    g && !oa(g, w) && t(), g = w, h = requestAnimationFrame(v);
  }
  return t(), () => {
    var w;
    l.forEach((b) => {
      r && b.removeEventListener("scroll", t), o && b.removeEventListener("resize", t);
    }), d == null || d(), (w = f) == null || w.disconnect(), f = null, c && cancelAnimationFrame(h);
  };
}
const ci = qs, li = Qs, cn = Bs, ui = (n, a, t) => {
  const e = /* @__PURE__ */ new Map(), r = {
    platform: oi,
    ...t
  }, o = {
    ...r.platform,
    _c: e
  };
  return Hs(n, a, {
    ...r,
    platform: o
  });
};
var di = typeof document < "u", pi = function() {
}, Nt = di ? On : pi;
function $t(n, a) {
  if (n === a)
    return !0;
  if (typeof n != typeof a)
    return !1;
  if (typeof n == "function" && n.toString() === a.toString())
    return !0;
  let t, e, r;
  if (n && a && typeof n == "object") {
    if (Array.isArray(n)) {
      if (t = n.length, t !== a.length) return !1;
      for (e = t; e-- !== 0; )
        if (!$t(n[e], a[e]))
          return !1;
      return !0;
    }
    if (r = Object.keys(n), t = r.length, t !== Object.keys(a).length)
      return !1;
    for (e = t; e-- !== 0; )
      if (!{}.hasOwnProperty.call(a, r[e]))
        return !1;
    for (e = t; e-- !== 0; ) {
      const o = r[e];
      if (!(o === "_owner" && n.$$typeof) && !$t(n[o], a[o]))
        return !1;
    }
    return !0;
  }
  return n !== n && a !== a;
}
function sa(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ln(n, a) {
  const t = sa(n);
  return Math.round(a * t) / t;
}
function lr(n) {
  const a = N.useRef(n);
  return Nt(() => {
    a.current = n;
  }), a;
}
function fi(n) {
  n === void 0 && (n = {});
  const {
    placement: a = "bottom",
    strategy: t = "absolute",
    middleware: e = [],
    platform: r,
    elements: {
      reference: o,
      floating: s
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: u
  } = n, [l, d] = N.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: a,
    middlewareData: {},
    isPositioned: !1
  }), [p, f] = N.useState(e);
  $t(p, e) || f(e);
  const [h, g] = N.useState(null), [v, w] = N.useState(null), b = N.useCallback((R) => {
    R !== T.current && (T.current = R, g(R));
  }, []), y = N.useCallback((R) => {
    R !== D.current && (D.current = R, w(R));
  }, []), S = o || h, P = s || v, T = N.useRef(null), D = N.useRef(null), M = N.useRef(l), E = c != null, F = lr(c), B = lr(r), C = lr(u), A = N.useCallback(() => {
    if (!T.current || !D.current)
      return;
    const R = {
      placement: a,
      strategy: t,
      middleware: p
    };
    B.current && (R.platform = B.current), ui(T.current, D.current, R).then((J) => {
      const pe = {
        ...J,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: C.current !== !1
      };
      Y.current && !$t(M.current, pe) && (M.current = pe, _a.flushSync(() => {
        d(pe);
      }));
    });
  }, [p, a, t, B, C]);
  Nt(() => {
    u === !1 && M.current.isPositioned && (M.current.isPositioned = !1, d((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [u]);
  const Y = N.useRef(!1);
  Nt(() => (Y.current = !0, () => {
    Y.current = !1;
  }), []), Nt(() => {
    if (S && (T.current = S), P && (D.current = P), S && P) {
      if (F.current)
        return F.current(S, P, A);
      A();
    }
  }, [S, P, A, F, E]);
  const V = N.useMemo(() => ({
    reference: T,
    floating: D,
    setReference: b,
    setFloating: y
  }), [b, y]), O = N.useMemo(() => ({
    reference: S,
    floating: P
  }), [S, P]), I = N.useMemo(() => {
    const R = {
      position: t,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return R;
    const J = ln(O.floating, l.x), pe = ln(O.floating, l.y);
    return i ? {
      ...R,
      transform: "translate(" + J + "px, " + pe + "px)",
      ...sa(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: J,
      top: pe
    };
  }, [t, i, O.floating, l.x, l.y]);
  return N.useMemo(() => ({
    ...l,
    update: A,
    refs: V,
    elements: O,
    floatingStyles: I
  }), [l, A, V, O, I]);
}
const hi = (n) => {
  function a(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: n,
    fn(t) {
      const {
        element: e,
        padding: r
      } = typeof n == "function" ? n(t) : n;
      return e && a(e) ? e.current != null ? cn({
        element: e.current,
        padding: r
      }).fn(t) : {} : e ? cn({
        element: e,
        padding: r
      }).fn(t) : {};
    }
  };
}, mi = (n, a) => {
  const t = ci(n);
  return {
    name: t.name,
    fn: t.fn,
    options: [n, a]
  };
}, vi = (n, a) => {
  const t = li(n);
  return {
    name: t.name,
    fn: t.fn,
    options: [n, a]
  };
}, gi = (n, a) => {
  const t = hi(n);
  return {
    name: t.name,
    fn: t.fn,
    options: [n, a]
  };
}, wi = {
  ...N
};
let un = !1, Di = 0;
const dn = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Di++
);
function yi() {
  const [n, a] = N.useState(() => un ? dn() : void 0);
  return jt(() => {
    n == null && a(dn());
  }, []), N.useEffect(() => {
    un = !0;
  }, []), n;
}
const bi = wi.useId, ia = bi || yi;
let vt;
process.env.NODE_ENV !== "production" && (vt = /* @__PURE__ */ new Set());
function _i() {
  for (var n, a = arguments.length, t = new Array(a), e = 0; e < a; e++)
    t[e] = arguments[e];
  const r = "Floating UI: " + t.join(" ");
  if (!((n = vt) != null && n.has(r))) {
    var o;
    (o = vt) == null || o.add(r), console.warn(r);
  }
}
function ki() {
  for (var n, a = arguments.length, t = new Array(a), e = 0; e < a; e++)
    t[e] = arguments[e];
  const r = "Floating UI: " + t.join(" ");
  if (!((n = vt) != null && n.has(r))) {
    var o;
    (o = vt) == null || o.add(r), console.error(r);
  }
}
const xi = /* @__PURE__ */ N.forwardRef(function(a, t) {
  const {
    context: {
      placement: e,
      elements: {
        floating: r
      },
      middlewareData: {
        arrow: o,
        shift: s
      }
    },
    width: i = 14,
    height: c = 7,
    tipRadius: u = 0,
    strokeWidth: l = 0,
    staticOffset: d,
    stroke: p,
    d: f,
    style: {
      transform: h,
      ...g
    } = {},
    ...v
  } = a;
  process.env.NODE_ENV !== "production" && (t || _i("The `ref` prop is required for `FloatingArrow`."));
  const w = ia(), [b, y] = N.useState(!1);
  if (jt(() => {
    if (!r) return;
    de(r).direction === "rtl" && y(!0);
  }, [r]), !r)
    return null;
  const [S, P] = e.split("-"), T = S === "top" || S === "bottom";
  let D = d;
  (T && s != null && s.x || !T && s != null && s.y) && (D = null);
  const M = l * 2, E = M / 2, F = i / 2 * (u / -8 + 1), B = c / 2 * u / 4, C = !!f, A = D && P === "end" ? "bottom" : "top";
  let Y = D && P === "end" ? "right" : "left";
  D && b && (Y = P === "end" ? "left" : "right");
  const V = (o == null ? void 0 : o.x) != null ? D || o.x : "", O = (o == null ? void 0 : o.y) != null ? D || o.y : "", I = f || "M0,0" + (" H" + i) + (" L" + (i - F) + "," + (c - B)) + (" Q" + i / 2 + "," + c + " " + F + "," + (c - B)) + " Z", R = {
    top: C ? "rotate(180deg)" : "",
    left: C ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: C ? "" : "rotate(180deg)",
    right: C ? "rotate(-90deg)" : "rotate(90deg)"
  }[S];
  return /* @__PURE__ */ K.jsxs("svg", {
    ...v,
    "aria-hidden": !0,
    ref: t,
    width: C ? i : i + M,
    height: i,
    viewBox: "0 0 " + i + " " + (c > i ? c : i),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [Y]: V,
      [A]: O,
      [S]: T || C ? "100%" : "calc(100% - " + M / 2 + "px)",
      transform: [R, h].filter((J) => !!J).join(" "),
      ...g
    },
    children: [M > 0 && /* @__PURE__ */ K.jsx("path", {
      clipPath: "url(#" + w + ")",
      fill: "none",
      stroke: p,
      strokeWidth: M + (f ? 0 : 1),
      d: I
    }), /* @__PURE__ */ K.jsx("path", {
      stroke: M && !f ? v.fill : "none",
      d: I
    }), /* @__PURE__ */ K.jsx("clipPath", {
      id: w,
      children: /* @__PURE__ */ K.jsx("rect", {
        x: -E,
        y: E * (C ? -1 : 1),
        width: i + M,
        height: i
      })
    })]
  });
});
function Mi() {
  const n = /* @__PURE__ */ new Map();
  return {
    emit(a, t) {
      var e;
      (e = n.get(a)) == null || e.forEach((r) => r(t));
    },
    on(a, t) {
      n.has(a) || n.set(a, /* @__PURE__ */ new Set()), n.get(a).add(t);
    },
    off(a, t) {
      var e;
      (e = n.get(a)) == null || e.delete(t);
    }
  };
}
const Ci = /* @__PURE__ */ N.createContext(null), Si = /* @__PURE__ */ N.createContext(null), Ei = () => {
  var n;
  return ((n = N.useContext(Ci)) == null ? void 0 : n.id) || null;
}, Pi = () => N.useContext(Si);
function Ti(n) {
  const {
    open: a = !1,
    onOpenChange: t,
    elements: e
  } = n, r = ia(), o = N.useRef({}), [s] = N.useState(() => Mi()), i = Ei() != null;
  if (process.env.NODE_ENV !== "production") {
    const f = e.reference;
    f && !ae(f) && ki("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [c, u] = N.useState(e.reference), l = Fs((f, h, g) => {
    o.current.openEvent = f ? h : void 0, s.emit("openchange", {
      open: f,
      event: h,
      reason: g,
      nested: i
    }), t == null || t(f, h, g);
  }), d = N.useMemo(() => ({
    setPositionReference: u
  }), []), p = N.useMemo(() => ({
    reference: c || e.reference || null,
    floating: e.floating || null,
    domReference: e.reference
  }), [c, e.reference, e.floating]);
  return N.useMemo(() => ({
    dataRef: o,
    open: a,
    onOpenChange: l,
    elements: p,
    events: s,
    floatingId: r,
    refs: d
  }), [a, l, p, s, r, d]);
}
function Oi(n) {
  n === void 0 && (n = {});
  const {
    nodeId: a
  } = n, t = Ti({
    ...n,
    elements: {
      reference: null,
      floating: null,
      ...n.elements
    }
  }), e = n.rootContext || t, r = e.elements, [o, s] = N.useState(null), [i, c] = N.useState(null), l = (r == null ? void 0 : r.domReference) || o, d = N.useRef(null), p = Pi();
  jt(() => {
    l && (d.current = l);
  }, [l]);
  const f = fi({
    ...n,
    elements: {
      ...r,
      ...i && {
        reference: i
      }
    }
  }), h = N.useCallback((y) => {
    const S = ae(y) ? {
      getBoundingClientRect: () => y.getBoundingClientRect(),
      getClientRects: () => y.getClientRects(),
      contextElement: y
    } : y;
    c(S), f.refs.setReference(S);
  }, [f.refs]), g = N.useCallback((y) => {
    (ae(y) || y === null) && (d.current = y, s(y)), (ae(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    y !== null && !ae(y)) && f.refs.setReference(y);
  }, [f.refs]), v = N.useMemo(() => ({
    ...f.refs,
    setReference: g,
    setPositionReference: h,
    domReference: d
  }), [f.refs, g, h]), w = N.useMemo(() => ({
    ...f.elements,
    domReference: l
  }), [f.elements, l]), b = N.useMemo(() => ({
    ...f,
    ...e,
    refs: v,
    elements: w,
    nodeId: a
  }), [f, v, w, a, e]);
  return jt(() => {
    e.dataRef.current.floatingContext = b;
    const y = p == null ? void 0 : p.nodesRef.current.find((S) => S.id === a);
    y && (y.context = b);
  }), N.useMemo(() => ({
    ...f,
    context: b,
    refs: v,
    elements: w
  }), [f, v, w, b]);
}
/*!
  react-datepicker v7.6.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/
var _r = function(a, t) {
  return _r = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
  }, _r(a, t);
};
function te(n, a) {
  if (typeof a != "function" && a !== null) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
  _r(n, a);
  function t() {
    this.constructor = n;
  }
  n.prototype = a === null ? Object.create(a) : (t.prototype = a.prototype, new t());
}
var H = function() {
  return H = Object.assign || function(t) {
    for (var e, r = 1, o = arguments.length; r < o; r++) {
      e = arguments[r];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, H.apply(this, arguments);
};
function ye(n, a, t) {
  if (t || arguments.length === 2) for (var e = 0, r = a.length, o; e < r; e++)
    (o || !(e in a)) && (o || (o = Array.prototype.slice.call(a, 0, e)), o[e] = a[e]);
  return n.concat(o || Array.prototype.slice.call(a));
}
var Ni = function(n) {
  var a = n.showTimeSelectOnly, t = a === void 0 ? !1 : a, e = n.showTime, r = e === void 0 ? !1 : e, o = n.className, s = n.children, i = t ? "Choose Time" : "Choose Date".concat(r ? " and Time" : "");
  return m.createElement("div", { className: o, role: "dialog", "aria-label": i, "aria-modal": "true" }, s);
}, Ri = function(n, a) {
  var t = mr(null), e = mr(n);
  e.current = n;
  var r = ga(function(o) {
    var s;
    t.current && !t.current.contains(o.target) && (a && o.target instanceof HTMLElement && o.target.classList.contains(a) || (s = e.current) === null || s === void 0 || s.call(e, o));
  }, [a]);
  return wa(function() {
    return document.addEventListener("mousedown", r), function() {
      document.removeEventListener("mousedown", r);
    };
  }, [r]), t;
}, nr = function(n) {
  var a = n.children, t = n.onClickOutside, e = n.className, r = n.containerRef, o = n.style, s = n.ignoreClass, i = Ri(t, s);
  return m.createElement("div", { className: e, style: o, ref: function(c) {
    i.current = c, r && (r.current = c);
  } }, a);
}, _;
(function(n) {
  n.ArrowUp = "ArrowUp", n.ArrowDown = "ArrowDown", n.ArrowLeft = "ArrowLeft", n.ArrowRight = "ArrowRight", n.PageUp = "PageUp", n.PageDown = "PageDown", n.Home = "Home", n.End = "End", n.Enter = "Enter", n.Space = " ", n.Tab = "Tab", n.Escape = "Escape", n.Backspace = "Backspace", n.X = "x";
})(_ || (_ = {}));
function Yr() {
  var n = typeof window < "u" ? window : globalThis;
  return n;
}
var Dt = 12, Yi = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function $(n) {
  if (n == null)
    return /* @__PURE__ */ new Date();
  var a = typeof n == "string" ? ts(n) : x(n);
  return Me(a) ? a : /* @__PURE__ */ new Date();
}
function ur(n, a, t, e, r) {
  var o, s = null, i = qe(t) || qe(ft()), c = !0;
  if (Array.isArray(a))
    return a.forEach(function(l) {
      var d = or(n, l, /* @__PURE__ */ new Date(), {
        locale: i,
        useAdditionalWeekYearTokens: !0,
        useAdditionalDayOfYearTokens: !0
      });
      e && (c = Me(d, r) && n === U(d, l, t)), Me(d, r) && c && (s = d);
    }), s;
  if (s = or(n, a, /* @__PURE__ */ new Date(), {
    locale: i,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  }), e)
    c = Me(s) && n === U(s, a, t);
  else if (!Me(s)) {
    var u = ((o = a.match(Yi)) !== null && o !== void 0 ? o : []).map(function(l) {
      var d = l[0];
      if (d === "p" || d === "P") {
        var p = Bt[d];
        return i ? p(l, i.formatLong) : d;
      }
      return l;
    }).join("");
    n.length > 0 && (s = or(n, u.slice(0, n.length), /* @__PURE__ */ new Date(), {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    })), Me(s) || (s = new Date(n));
  }
  return Me(s) && c ? s : null;
}
function Me(n, a) {
  return Ft(n) && !$e(n, a ?? /* @__PURE__ */ new Date("1/1/1800"));
}
function U(n, a, t) {
  if (t === "en")
    return zr(n, a, {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    });
  var e = t ? qe(t) : void 0;
  return t && !e && console.warn('A locale object was not found for the provided string ["'.concat(t, '"].')), !e && ft() && qe(ft()) && (e = qe(ft())), zr(n, a, {
    locale: e,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  });
}
function le(n, a) {
  var t = a.dateFormat, e = a.locale, r = Array.isArray(t) && t.length > 0 ? t[0] : t;
  return n && U(n, r, e) || "";
}
function Ii(n, a, t) {
  if (!n)
    return "";
  var e = le(n, t), r = a ? le(a, t) : "";
  return "".concat(e, " - ").concat(r);
}
function Li(n, a) {
  if (!(n != null && n.length))
    return "";
  var t = n[0] ? le(n[0], a) : "";
  if (n.length === 1)
    return t;
  if (n.length === 2 && n[1]) {
    var e = le(n[1], a);
    return "".concat(t, ", ").concat(e);
  }
  var r = n.length - 1;
  return "".concat(t, " (+").concat(r, ")");
}
function dr(n, a) {
  var t = a.hour, e = t === void 0 ? 0 : t, r = a.minute, o = r === void 0 ? 0 : r, s = a.second, i = s === void 0 ? 0 : s;
  return Pt(Tt(Ot(n, i), o), e);
}
function Fi(n) {
  return Mr(n);
}
function Ai(n, a) {
  return U(n, "ddd", a);
}
function Rt(n) {
  return je(n);
}
function Ye(n, a, t) {
  var e = qe(a || ft());
  return Te(n, {
    locale: e,
    weekStartsOn: t
  });
}
function Pe(n) {
  return Wn(n);
}
function dt(n) {
  return zt(n);
}
function pn(n) {
  return gr(n);
}
function fn() {
  return je($());
}
function hn(n) {
  return Fn(n);
}
function Wi(n) {
  return Fa(n);
}
function Hi(n) {
  return An(n);
}
function ge(n, a) {
  return n && a ? Jo(n, a) : !n && !a;
}
function oe(n, a) {
  return n && a ? zo(n, a) : !n && !a;
}
function Ut(n, a) {
  return n && a ? Zo(n, a) : !n && !a;
}
function W(n, a) {
  return n && a ? Ia(n, a) : !n && !a;
}
function Be(n, a) {
  return n && a ? to(n, a) : !n && !a;
}
function pt(n, a, t) {
  var e, r = je(a), o = Fn(t);
  try {
    e = ht(n, { start: r, end: o });
  } catch {
    e = !1;
  }
  return e;
}
function Bi(n, a) {
  var t = Yr();
  t.__localeData__ || (t.__localeData__ = {}), t.__localeData__[n] = a;
}
function ft() {
  var n = Yr();
  return n.__localeId__;
}
function qe(n) {
  if (typeof n == "string") {
    var a = Yr();
    return a.__localeData__ ? a.__localeData__[n] : void 0;
  } else
    return n;
}
function Qi(n, a, t) {
  return a(U(n, "EEEE", t));
}
function Vi(n, a) {
  return U(n, "EEEEEE", a);
}
function Ki(n, a) {
  return U(n, "EEE", a);
}
function Ir(n, a) {
  return U(ie($(), n), "LLLL", a);
}
function ca(n, a) {
  return U(ie($(), n), "LLL", a);
}
function qi(n, a) {
  return U(Ze($(), n), "QQQ", a);
}
function ue(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, s = t.excludeDateIntervals, i = t.includeDates, c = t.includeDateIntervals, u = t.filterDate;
  return yt(n, { minDate: e, maxDate: r }) || o && o.some(function(l) {
    return l instanceof Date ? W(n, l) : W(n, l.date);
  }) || s && s.some(function(l) {
    var d = l.start, p = l.end;
    return ht(n, { start: d, end: p });
  }) || i && !i.some(function(l) {
    return W(n, l);
  }) || c && !c.some(function(l) {
    var d = l.start, p = l.end;
    return ht(n, { start: d, end: p });
  }) || u && !u($(n)) || !1;
}
function Lr(n, a) {
  var t = a === void 0 ? {} : a, e = t.excludeDates, r = t.excludeDateIntervals;
  return r && r.length > 0 ? r.some(function(o) {
    var s = o.start, i = o.end;
    return ht(n, { start: s, end: i });
  }) : e && e.some(function(o) {
    var s;
    return o instanceof Date ? W(n, o) : W(n, (s = o.date) !== null && s !== void 0 ? s : /* @__PURE__ */ new Date());
  }) || !1;
}
function la(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, s = t.includeDates, i = t.filterDate;
  return yt(n, {
    minDate: e ? Wn(e) : void 0,
    maxDate: r ? An(r) : void 0
  }) || (o == null ? void 0 : o.some(function(c) {
    return oe(n, c instanceof Date ? c : c.date);
  })) || s && !s.some(function(c) {
    return oe(n, c);
  }) || i && !i($(n)) || !1;
}
function xt(n, a, t, e) {
  var r = L(n), o = se(n), s = L(a), i = se(a), c = L(e);
  return r === s && r === c ? o <= t && t <= i : r < s ? c === r && o <= t || c === s && i >= t || c < s && c > r : !1;
}
function ji(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, s = t.includeDates;
  return yt(n, { minDate: e, maxDate: r }) || o && o.some(function(i) {
    return oe(i instanceof Date ? i : i.date, n);
  }) || s && !s.some(function(i) {
    return oe(i, n);
  }) || !1;
}
function Mt(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, s = t.includeDates, i = t.filterDate;
  return yt(n, { minDate: e, maxDate: r }) || (o == null ? void 0 : o.some(function(c) {
    return Ut(n, c instanceof Date ? c : c.date);
  })) || s && !s.some(function(c) {
    return Ut(n, c);
  }) || i && !i($(n)) || !1;
}
function Ct(n, a, t) {
  if (!a || !t || !Ft(a) || !Ft(t))
    return !1;
  var e = L(a), r = L(t);
  return e <= n && r >= n;
}
function Yt(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.maxDate, o = t.excludeDates, s = t.includeDates, i = t.filterDate, c = new Date(n, 0, 1);
  return yt(c, {
    minDate: e ? zt(e) : void 0,
    maxDate: r ? Hn(r) : void 0
  }) || (o == null ? void 0 : o.some(function(u) {
    return ge(c, u instanceof Date ? u : u.date);
  })) || s && !s.some(function(u) {
    return ge(c, u);
  }) || i && !i($(c)) || !1;
}
function St(n, a, t, e) {
  var r = L(n), o = Qe(n), s = L(a), i = Qe(a), c = L(e);
  return r === s && r === c ? o <= t && t <= i : r < s ? c === r && o <= t || c === s && i >= t || c < s && c > r : !1;
}
function yt(n, a) {
  var t, e = a === void 0 ? {} : a, r = e.minDate, o = e.maxDate;
  return (t = r && rt(n, r) < 0 || o && rt(n, o) > 0) !== null && t !== void 0 ? t : !1;
}
function mn(n, a) {
  return a.some(function(t) {
    return be(t) === be(n) && _e(t) === _e(n) && Ee(t) === Ee(n);
  });
}
function vn(n, a) {
  var t = a === void 0 ? {} : a, e = t.excludeTimes, r = t.includeTimes, o = t.filterTime;
  return e && mn(n, e) || r && !mn(n, r) || o && !o(n) || !1;
}
function gn(n, a) {
  var t = a.minTime, e = a.maxTime;
  if (!t || !e)
    throw new Error("Both minTime and maxTime props required");
  var r = $();
  r = Pt(r, be(n)), r = Tt(r, _e(n)), r = Ot(r, Ee(n));
  var o = $();
  o = Pt(o, be(t)), o = Tt(o, _e(t)), o = Ot(o, Ee(t));
  var s = $();
  s = Pt(s, be(e)), s = Tt(s, _e(e)), s = Ot(s, Ee(e));
  var i;
  try {
    i = !ht(r, { start: o, end: s });
  } catch {
    i = !1;
  }
  return i;
}
function wn(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.includeDates, o = Ve(n, 1);
  return e && At(e, o) > 0 || r && r.every(function(s) {
    return At(s, o) > 0;
  }) || !1;
}
function Dn(n, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, r = t.includeDates, o = me(n, 1);
  return e && At(o, e) > 0 || r && r.every(function(s) {
    return At(o, s) > 0;
  }) || !1;
}
function $i(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.includeDates, o = zt(n), s = Gn(o);
  return e && Wt(e, s) > 0 || r && r.every(function(i) {
    return Wt(i, s) > 0;
  }) || !1;
}
function Ui(n, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, r = t.includeDates, o = Hn(n), s = xr(o, 1);
  return e && Wt(s, e) > 0 || r && r.every(function(i) {
    return Wt(s, i) > 0;
  }) || !1;
}
function yn(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.includeDates, o = nt(n, 1);
  return e && Ht(e, o) > 0 || r && r.every(function(s) {
    return Ht(s, o) > 0;
  }) || !1;
}
function Xi(n, a) {
  var t = a === void 0 ? {} : a, e = t.minDate, r = t.yearItemNumber, o = r === void 0 ? Dt : r, s = dt(nt(n, o)), i = Re(s, o).endPeriod, c = e && L(e);
  return c && c > i || !1;
}
function bn(n, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, r = t.includeDates, o = Ce(n, 1);
  return e && Ht(o, e) > 0 || r && r.every(function(s) {
    return Ht(o, s) > 0;
  }) || !1;
}
function Gi(n, a) {
  var t = a === void 0 ? {} : a, e = t.maxDate, r = t.yearItemNumber, o = r === void 0 ? Dt : r, s = Ce(n, o), i = Re(s, o).startPeriod, c = e && L(e);
  return c && c < i || !1;
}
function ua(n) {
  var a = n.minDate, t = n.includeDates;
  if (t && a) {
    var e = t.filter(function(r) {
      return rt(r, a) >= 0;
    });
    return qr(e);
  } else return t ? qr(t) : a;
}
function da(n) {
  var a = n.maxDate, t = n.includeDates;
  if (t && a) {
    var e = t.filter(function(r) {
      return rt(r, a) <= 0;
    });
    return Kr(e);
  } else return t ? Kr(t) : a;
}
function _n(n, a) {
  var t;
  n === void 0 && (n = []), a === void 0 && (a = "react-datepicker__day--highlighted");
  for (var e = /* @__PURE__ */ new Map(), r = 0, o = n.length; r < o; r++) {
    var s = n[r];
    if (Se(s)) {
      var i = U(s, "MM.dd.yyyy"), c = e.get(i) || [];
      c.includes(a) || (c.push(a), e.set(i, c));
    } else if (typeof s == "object") {
      var u = Object.keys(s), l = (t = u[0]) !== null && t !== void 0 ? t : "", d = s[l];
      if (typeof l == "string" && Array.isArray(d))
        for (var p = 0, f = d.length; p < f; p++) {
          var h = d[p];
          if (h) {
            var i = U(h, "MM.dd.yyyy"), c = e.get(i) || [];
            c.includes(l) || (c.push(l), e.set(i, c));
          }
        }
    }
  }
  return e;
}
function zi(n, a) {
  return n.length !== a.length ? !1 : n.every(function(t, e) {
    return t === a[e];
  });
}
function Zi(n, a) {
  n === void 0 && (n = []), a === void 0 && (a = "react-datepicker__day--holidays");
  var t = /* @__PURE__ */ new Map();
  return n.forEach(function(e) {
    var r = e.date, o = e.holidayName;
    if (Se(r)) {
      var s = U(r, "MM.dd.yyyy"), i = t.get(s) || {
        className: "",
        holidayNames: []
      };
      if (!("className" in i && i.className === a && zi(i.holidayNames, [o]))) {
        i.className = a;
        var c = i.holidayNames;
        i.holidayNames = c ? ye(ye([], c, !0), [o], !1) : [o], t.set(s, i);
      }
    }
  }), t;
}
function Ji(n, a, t, e, r) {
  for (var o = r.length, s = [], i = 0; i < o; i++) {
    var c = n, u = r[i];
    u && (c = Na(c, be(u)), c = vr(c, _e(u)), c = Ya(c, Ee(u)));
    var l = vr(n, (t + 1) * e);
    Le(c, a) && $e(c, l) && u != null && s.push(u);
  }
  return s;
}
function kn(n) {
  return n < 10 ? "0".concat(n) : "".concat(n);
}
function Re(n, a) {
  a === void 0 && (a = Dt);
  var t = Math.ceil(L(n) / a) * a, e = t - (a - 1);
  return { startPeriod: e, endPeriod: t };
}
function ec(n) {
  var a = new Date(n.getFullYear(), n.getMonth(), n.getDate()), t = new Date(n.getFullYear(), n.getMonth(), n.getDate(), 24);
  return Math.round((+t - +a) / 36e5);
}
function xn(n) {
  var a = n.getSeconds(), t = n.getMilliseconds();
  return x(n.getTime() - a * 1e3 - t);
}
function tc(n, a) {
  return xn(n).getTime() === xn(a).getTime();
}
function Mn(n) {
  if (!Se(n))
    throw new Error("Invalid date");
  var a = new Date(n);
  return a.setHours(0, 0, 0, 0), a;
}
function Cn(n, a) {
  if (!Se(n) || !Se(a))
    throw new Error("Invalid date received");
  var t = Mn(n), e = Mn(a);
  return $e(t, e);
}
function pa(n) {
  return n.key === _.Space;
}
var rc = (
  /** @class */
  function(n) {
    te(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.inputRef = m.createRef(), e.onTimeChange = function(r) {
        var o, s;
        e.setState({ time: r });
        var i = e.props.date, c = i instanceof Date && !isNaN(+i), u = c ? i : /* @__PURE__ */ new Date();
        if (r != null && r.includes(":")) {
          var l = r.split(":"), d = l[0], p = l[1];
          u.setHours(Number(d)), u.setMinutes(Number(p));
        }
        (s = (o = e.props).onChange) === null || s === void 0 || s.call(o, u);
      }, e.renderTimeInput = function() {
        var r = e.state.time, o = e.props, s = o.date, i = o.timeString, c = o.customTimeInput;
        return c ? Nn(c, {
          date: s,
          value: r,
          onChange: e.onTimeChange
        }) : m.createElement("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", ref: e.inputRef, onClick: function() {
          var u;
          (u = e.inputRef.current) === null || u === void 0 || u.focus();
        }, required: !0, value: r, onChange: function(u) {
          e.onTimeChange(u.target.value || i);
        } });
      }, e.state = {
        time: e.props.timeString
      }, e;
    }
    return a.getDerivedStateFromProps = function(t, e) {
      return t.timeString !== e.time ? {
        time: t.timeString
      } : null;
    }, a.prototype.render = function() {
      return m.createElement(
        "div",
        { className: "react-datepicker__input-time-container" },
        m.createElement("div", { className: "react-datepicker-time__caption" }, this.props.timeInputLabel),
        m.createElement(
          "div",
          { className: "react-datepicker-time__input-container" },
          m.createElement("div", { className: "react-datepicker-time__input" }, this.renderTimeInput())
        )
      );
    }, a;
  }(ee)
), nc = (
  /** @class */
  function(n) {
    te(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.dayEl = Ie(), t.handleClick = function(e) {
        !t.isDisabled() && t.props.onClick && t.props.onClick(e);
      }, t.handleMouseEnter = function(e) {
        !t.isDisabled() && t.props.onMouseEnter && t.props.onMouseEnter(e);
      }, t.handleOnKeyDown = function(e) {
        var r, o, s = e.key;
        s === _.Space && (e.preventDefault(), e.key = _.Enter), (o = (r = t.props).handleOnKeyDown) === null || o === void 0 || o.call(r, e);
      }, t.isSameDay = function(e) {
        return W(t.props.day, e);
      }, t.isKeyboardSelected = function() {
        var e;
        if (t.props.disabledKeyboardNavigation)
          return !1;
        var r = t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(s) {
          return t.isSameDayOrWeek(s);
        }) : t.isSameDayOrWeek(t.props.selected), o = t.props.preSelection && t.isDisabled(t.props.preSelection);
        return !r && t.isSameDayOrWeek(t.props.preSelection) && !o;
      }, t.isDisabled = function(e) {
        return e === void 0 && (e = t.props.day), ue(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function() {
        return Lr(t.props.day, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.isStartOfWeek = function() {
        return W(t.props.day, Ye(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameWeek = function(e) {
        return t.props.showWeekPicker && W(e, Ye(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameDayOrWeek = function(e) {
        return t.isSameDay(e) || t.isSameWeek(e);
      }, t.getHighLightedClass = function() {
        var e = t.props, r = e.day, o = e.highlightDates;
        if (!o)
          return !1;
        var s = U(r, "MM.dd.yyyy");
        return o.get(s);
      }, t.getHolidaysClass = function() {
        var e, r = t.props, o = r.day, s = r.holidays;
        if (!s)
          return [void 0];
        var i = U(o, "MM.dd.yyyy");
        return s.has(i) ? [(e = s.get(i)) === null || e === void 0 ? void 0 : e.className] : [void 0];
      }, t.isInRange = function() {
        var e = t.props, r = e.day, o = e.startDate, s = e.endDate;
        return !o || !s ? !1 : pt(r, o, s);
      }, t.isInSelectingRange = function() {
        var e, r = t.props, o = r.day, s = r.selectsStart, i = r.selectsEnd, c = r.selectsRange, u = r.selectsDisabledDaysInRange, l = r.startDate, d = r.endDate, p = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return !(s || i || c) || !p || !u && t.isDisabled() ? !1 : s && d && ($e(p, d) || Be(p, d)) ? pt(o, p, d) : i && l && (Le(p, l) || Be(p, l)) || c && l && !d && (Le(p, l) || Be(p, l)) ? pt(o, l, p) : !1;
      }, t.isSelectingRangeStart = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var r = t.props, o = r.day, s = r.startDate, i = r.selectsStart, c = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return i ? W(o, c) : W(o, s);
      }, t.isSelectingRangeEnd = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var r = t.props, o = r.day, s = r.endDate, i = r.selectsEnd, c = r.selectsRange, u = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return i || c ? W(o, u) : W(o, s);
      }, t.isRangeStart = function() {
        var e = t.props, r = e.day, o = e.startDate, s = e.endDate;
        return !o || !s ? !1 : W(o, r);
      }, t.isRangeEnd = function() {
        var e = t.props, r = e.day, o = e.startDate, s = e.endDate;
        return !o || !s ? !1 : W(s, r);
      }, t.isWeekend = function() {
        var e = za(t.props.day);
        return e === 0 || e === 6;
      }, t.isAfterMonth = function() {
        return t.props.month !== void 0 && (t.props.month + 1) % 12 === se(t.props.day);
      }, t.isBeforeMonth = function() {
        return t.props.month !== void 0 && (se(t.props.day) + 1) % 12 === t.props.month;
      }, t.isCurrentDay = function() {
        return t.isSameDay($());
      }, t.isSelected = function() {
        var e;
        return t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(r) {
          return t.isSameDayOrWeek(r);
        }) : t.isSameDayOrWeek(t.props.selected);
      }, t.getClassNames = function(e) {
        var r = t.props.dayClassName ? t.props.dayClassName(e) : void 0;
        return ne("react-datepicker__day", r, "react-datepicker__day--" + Ai(t.props.day), {
          "react-datepicker__day--disabled": t.isDisabled(),
          "react-datepicker__day--excluded": t.isExcluded(),
          "react-datepicker__day--selected": t.isSelected(),
          "react-datepicker__day--keyboard-selected": t.isKeyboardSelected(),
          "react-datepicker__day--range-start": t.isRangeStart(),
          "react-datepicker__day--range-end": t.isRangeEnd(),
          "react-datepicker__day--in-range": t.isInRange(),
          "react-datepicker__day--in-selecting-range": t.isInSelectingRange(),
          "react-datepicker__day--selecting-range-start": t.isSelectingRangeStart(),
          "react-datepicker__day--selecting-range-end": t.isSelectingRangeEnd(),
          "react-datepicker__day--today": t.isCurrentDay(),
          "react-datepicker__day--weekend": t.isWeekend(),
          "react-datepicker__day--outside-month": t.isAfterMonth() || t.isBeforeMonth()
        }, t.getHighLightedClass(), t.getHolidaysClass());
      }, t.getAriaLabel = function() {
        var e = t.props, r = e.day, o = e.ariaLabelPrefixWhenEnabled, s = o === void 0 ? "Choose" : o, i = e.ariaLabelPrefixWhenDisabled, c = i === void 0 ? "Not available" : i, u = t.isDisabled() || t.isExcluded() ? c : s;
        return "".concat(u, " ").concat(U(r, "PPPP", t.props.locale));
      }, t.getTitle = function() {
        var e = t.props, r = e.day, o = e.holidays, s = o === void 0 ? /* @__PURE__ */ new Map() : o, i = e.excludeDates, c = U(r, "MM.dd.yyyy"), u = [];
        return s.has(c) && u.push.apply(u, s.get(c).holidayNames), t.isExcluded() && u.push(i == null ? void 0 : i.filter(function(l) {
          return l instanceof Date ? W(l, r) : W(l == null ? void 0 : l.date, r);
        }).map(function(l) {
          if (!(l instanceof Date))
            return l == null ? void 0 : l.message;
        })), u.join(", ");
      }, t.getTabIndex = function() {
        var e = t.props.selected, r = t.props.preSelection, o = !(t.props.showWeekPicker && (t.props.showWeekNumber || !t.isStartOfWeek())) && (t.isKeyboardSelected() || t.isSameDay(e) && W(r, e)) ? 0 : -1;
        return o;
      }, t.handleFocusDay = function() {
        var e;
        t.shouldFocusDay() && ((e = t.dayEl.current) === null || e === void 0 || e.focus({ preventScroll: !0 }));
      }, t.renderDayContents = function() {
        return t.props.monthShowsDuplicateDaysEnd && t.isAfterMonth() || t.props.monthShowsDuplicateDaysStart && t.isBeforeMonth() ? null : t.props.renderDayContents ? t.props.renderDayContents(Zr(t.props.day), t.props.day) : Zr(t.props.day);
      }, t.render = function() {
        return (
          // TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
          m.createElement(
            "div",
            { ref: t.dayEl, className: t.getClassNames(t.props.day), onKeyDown: t.handleOnKeyDown, onClick: t.handleClick, onMouseEnter: t.props.usePointerEvent ? void 0 : t.handleMouseEnter, onPointerEnter: t.props.usePointerEvent ? t.handleMouseEnter : void 0, tabIndex: t.getTabIndex(), "aria-label": t.getAriaLabel(), role: "option", title: t.getTitle(), "aria-disabled": t.isDisabled(), "aria-current": t.isCurrentDay() ? "date" : void 0, "aria-selected": t.isSelected() || t.isInRange() },
            t.renderDayContents(),
            t.getTitle() !== "" && m.createElement("span", { className: "overlay" }, t.getTitle())
          )
        );
      }, t;
    }
    return a.prototype.componentDidMount = function() {
      this.handleFocusDay();
    }, a.prototype.componentDidUpdate = function() {
      this.handleFocusDay();
    }, a.prototype.shouldFocusDay = function() {
      var t = !1;
      return this.getTabIndex() === 0 && this.isSameDay(this.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (t = !0), this.props.inline && !this.props.shouldFocusDayInline && (t = !1), this.isDayActiveElement() && (t = !0), this.isDuplicateDay() && (t = !1)), t;
    }, a.prototype.isDayActiveElement = function() {
      var t, e, r;
      return ((e = (t = this.props.containerRef) === null || t === void 0 ? void 0 : t.current) === null || e === void 0 ? void 0 : e.contains(document.activeElement)) && ((r = document.activeElement) === null || r === void 0 ? void 0 : r.classList.contains("react-datepicker__day"));
    }, a.prototype.isDuplicateDay = function() {
      return (
        //day is one of the non rendered duplicate days
        this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth()
      );
    }, a;
  }(ee)
), ac = (
  /** @class */
  function(n) {
    te(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.weekNumberEl = Ie(), t.handleClick = function(e) {
        t.props.onClick && t.props.onClick(e);
      }, t.handleOnKeyDown = function(e) {
        var r, o, s = e.key;
        s === _.Space && (e.preventDefault(), e.key = _.Enter), (o = (r = t.props).handleOnKeyDown) === null || o === void 0 || o.call(r, e);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !W(t.props.date, t.props.selected) && W(t.props.date, t.props.preSelection);
      }, t.getTabIndex = function() {
        return t.props.showWeekPicker && t.props.showWeekNumber && (t.isKeyboardSelected() || W(t.props.date, t.props.selected) && W(t.props.preSelection, t.props.selected)) ? 0 : -1;
      }, t.handleFocusWeekNumber = function(e) {
        var r = !1;
        t.getTabIndex() === 0 && !(e != null && e.isInputFocused) && W(t.props.date, t.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (r = !0), t.props.inline && !t.props.shouldFocusDayInline && (r = !1), t.props.containerRef && t.props.containerRef.current && t.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (r = !0)), r && t.weekNumberEl.current && t.weekNumberEl.current.focus({ preventScroll: !0 });
      }, t;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          ariaLabelPrefix: "week "
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      this.handleFocusWeekNumber();
    }, a.prototype.componentDidUpdate = function(t) {
      this.handleFocusWeekNumber(t);
    }, a.prototype.render = function() {
      var t = this.props, e = t.weekNumber, r = t.isWeekDisabled, o = t.ariaLabelPrefix, s = o === void 0 ? a.defaultProps.ariaLabelPrefix : o, i = t.onClick, c = {
        "react-datepicker__week-number": !0,
        "react-datepicker__week-number--clickable": !!i && !r,
        "react-datepicker__week-number--selected": !!i && W(this.props.date, this.props.selected)
      };
      return m.createElement("div", { ref: this.weekNumberEl, className: ne(c), "aria-label": "".concat(s, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex() }, e);
    }, a;
  }(ee)
), oc = (
  /** @class */
  function(n) {
    te(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.isDisabled = function(e) {
        return ue(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.handleDayClick = function(e, r) {
        t.props.onDayClick && t.props.onDayClick(e, r);
      }, t.handleDayMouseEnter = function(e) {
        t.props.onDayMouseEnter && t.props.onDayMouseEnter(e);
      }, t.handleWeekClick = function(e, r, o) {
        for (var s, i, c, u = new Date(e), l = 0; l < 7; l++) {
          var d = new Date(e);
          d.setDate(d.getDate() + l);
          var p = !t.isDisabled(d);
          if (p) {
            u = d;
            break;
          }
        }
        typeof t.props.onWeekSelect == "function" && t.props.onWeekSelect(u, r, o), t.props.showWeekPicker && t.handleDayClick(u, o), ((s = t.props.shouldCloseOnSelect) !== null && s !== void 0 ? s : a.defaultProps.shouldCloseOnSelect) && ((c = (i = t.props).setOpen) === null || c === void 0 || c.call(i, !1));
      }, t.formatWeekNumber = function(e) {
        return t.props.formatWeekNumber ? t.props.formatWeekNumber(e) : Fi(e);
      }, t.isWeekDisabled = function() {
        for (var e = t.startOfWeek(), r = he(e, 6), o = new Date(e); o <= r; ) {
          if (!t.isDisabled(o))
            return !1;
          o = he(o, 1);
        }
        return !0;
      }, t.renderDays = function() {
        var e = t.startOfWeek(), r = [], o = t.formatWeekNumber(e);
        if (t.props.showWeekNumber) {
          var s = t.props.onWeekSelect || t.props.showWeekPicker ? t.handleWeekClick.bind(t, e, o) : void 0;
          r.push(m.createElement(ac, H({ key: "W" }, a.defaultProps, t.props, { weekNumber: o, isWeekDisabled: t.isWeekDisabled(), date: e, onClick: s })));
        }
        return r.concat([0, 1, 2, 3, 4, 5, 6].map(function(i) {
          var c = he(e, i);
          return m.createElement(nc, H({}, a.defaultProps, t.props, { ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix, key: c.valueOf(), day: c, onClick: t.handleDayClick.bind(t, c), onMouseEnter: t.handleDayMouseEnter.bind(t, c) }));
        }));
      }, t.startOfWeek = function() {
        return Ye(t.props.day, t.props.locale, t.props.calendarStartDay);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !W(t.startOfWeek(), t.props.selected) && W(t.startOfWeek(), t.props.preSelection);
      }, t;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          shouldCloseOnSelect: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.render = function() {
      var t = {
        "react-datepicker__week": !0,
        "react-datepicker__week--selected": W(this.startOfWeek(), this.props.selected),
        "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
      };
      return m.createElement("div", { className: ne(t) }, this.renderDays());
    }, a;
  }(ee)
), ut, sc = 6, et = {
  TWO_COLUMNS: "two_columns",
  THREE_COLUMNS: "three_columns",
  FOUR_COLUMNS: "four_columns"
}, pr = (ut = {}, ut[et.TWO_COLUMNS] = {
  grid: [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11]
  ],
  verticalNavigationOffset: 2
}, ut[et.THREE_COLUMNS] = {
  grid: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ],
  verticalNavigationOffset: 3
}, ut[et.FOUR_COLUMNS] = {
  grid: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ],
  verticalNavigationOffset: 4
}, ut), Et = 1;
function Sn(n, a) {
  return n ? et.FOUR_COLUMNS : a ? et.TWO_COLUMNS : et.THREE_COLUMNS;
}
var ic = (
  /** @class */
  function(n) {
    te(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.MONTH_REFS = ye([], Array(12), !0).map(function() {
        return Ie();
      }), t.QUARTER_REFS = ye([], Array(4), !0).map(function() {
        return Ie();
      }), t.isDisabled = function(e) {
        return ue(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function(e) {
        return Lr(e, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.handleDayClick = function(e, r) {
        var o, s;
        (s = (o = t.props).onDayClick) === null || s === void 0 || s.call(o, e, r, t.props.orderInDisplay);
      }, t.handleDayMouseEnter = function(e) {
        var r, o;
        (o = (r = t.props).onDayMouseEnter) === null || o === void 0 || o.call(r, e);
      }, t.handleMouseLeave = function() {
        var e, r;
        (r = (e = t.props).onMouseLeave) === null || r === void 0 || r.call(e);
      }, t.isRangeStartMonth = function(e) {
        var r = t.props, o = r.day, s = r.startDate, i = r.endDate;
        return !s || !i ? !1 : oe(ie(o, e), s);
      }, t.isRangeStartQuarter = function(e) {
        var r = t.props, o = r.day, s = r.startDate, i = r.endDate;
        return !s || !i ? !1 : Ut(Ze(o, e), s);
      }, t.isRangeEndMonth = function(e) {
        var r = t.props, o = r.day, s = r.startDate, i = r.endDate;
        return !s || !i ? !1 : oe(ie(o, e), i);
      }, t.isRangeEndQuarter = function(e) {
        var r = t.props, o = r.day, s = r.startDate, i = r.endDate;
        return !s || !i ? !1 : Ut(Ze(o, e), i);
      }, t.isInSelectingRangeMonth = function(e) {
        var r, o = t.props, s = o.day, i = o.selectsStart, c = o.selectsEnd, u = o.selectsRange, l = o.startDate, d = o.endDate, p = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return !(i || c || u) || !p ? !1 : i && d ? xt(p, d, e, s) : c && l || u && l && !d ? xt(l, p, e, s) : !1;
      }, t.isSelectingMonthRangeStart = function(e) {
        var r;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, s = o.day, i = o.startDate, c = o.selectsStart, u = ie(s, e), l = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return c ? oe(u, l) : oe(u, i);
      }, t.isSelectingMonthRangeEnd = function(e) {
        var r;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var o = t.props, s = o.day, i = o.endDate, c = o.selectsEnd, u = o.selectsRange, l = ie(s, e), d = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return c || u ? oe(l, d) : oe(l, i);
      }, t.isInSelectingRangeQuarter = function(e) {
        var r, o = t.props, s = o.day, i = o.selectsStart, c = o.selectsEnd, u = o.selectsRange, l = o.startDate, d = o.endDate, p = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return !(i || c || u) || !p ? !1 : i && d ? St(p, d, e, s) : c && l || u && l && !d ? St(l, p, e, s) : !1;
      }, t.isWeekInMonth = function(e) {
        var r = t.props.day, o = he(e, 6);
        return oe(e, r) || oe(o, r);
      }, t.isCurrentMonth = function(e, r) {
        return L(e) === L($()) && r === se($());
      }, t.isCurrentQuarter = function(e, r) {
        return L(e) === L($()) && r === Qe($());
      }, t.isSelectedMonth = function(e, r, o) {
        return se(o) === r && L(e) === L(o);
      }, t.isSelectMonthInList = function(e, r, o) {
        return o.some(function(s) {
          return t.isSelectedMonth(e, r, s);
        });
      }, t.isSelectedQuarter = function(e, r, o) {
        return Qe(e) === r && L(e) === L(o);
      }, t.renderWeeks = function() {
        for (var e = [], r = t.props.fixedHeight, o = 0, s = !1, i = Ye(Pe(t.props.day), t.props.locale, t.props.calendarStartDay), c = function(h) {
          return t.props.showWeekPicker ? Ye(h, t.props.locale, t.props.calendarStartDay) : t.props.preSelection;
        }, u = function(h) {
          return t.props.showWeekPicker ? Ye(h, t.props.locale, t.props.calendarStartDay) : t.props.selected;
        }, l = t.props.selected ? u(t.props.selected) : void 0, d = t.props.preSelection ? c(t.props.preSelection) : void 0; e.push(m.createElement(oc, H({}, t.props, { ariaLabelPrefix: t.props.weekAriaLabelPrefix, key: o, day: i, month: se(t.props.day), onDayClick: t.handleDayClick, onDayMouseEnter: t.handleDayMouseEnter, selected: l, preSelection: d, showWeekNumber: t.props.showWeekNumbers }))), !s; ) {
          o++, i = Lt(i, 1);
          var p = r && o >= sc, f = !r && !t.isWeekInMonth(i);
          if (p || f)
            if (t.props.peekNextMonth)
              s = !0;
            else
              break;
        }
        return e;
      }, t.onMonthClick = function(e, r) {
        var o = t.isMonthDisabledForLabelDate(r), s = o.isDisabled, i = o.labelDate;
        s || t.handleDayClick(Pe(i), e);
      }, t.onMonthMouseEnter = function(e) {
        var r = t.isMonthDisabledForLabelDate(e), o = r.isDisabled, s = r.labelDate;
        o || t.handleDayMouseEnter(Pe(s));
      }, t.handleMonthNavigation = function(e, r) {
        var o, s, i, c;
        (s = (o = t.props).setPreSelection) === null || s === void 0 || s.call(o, r), (c = (i = t.MONTH_REFS[e]) === null || i === void 0 ? void 0 : i.current) === null || c === void 0 || c.focus();
      }, t.handleKeyboardNavigation = function(e, r, o) {
        var s, i = t.props, c = i.selected, u = i.preSelection, l = i.setPreSelection, d = i.minDate, p = i.maxDate, f = i.showFourColumnMonthYearPicker, h = i.showTwoColumnMonthYearPicker;
        if (u) {
          var g = Sn(f, h), v = t.getVerticalOffset(g), w = (s = pr[g]) === null || s === void 0 ? void 0 : s.grid, b = function(D, M, E) {
            var F, B, C = M, A = E;
            switch (D) {
              case _.ArrowRight:
                C = me(M, Et), A = E === 11 ? 0 : E + Et;
                break;
              case _.ArrowLeft:
                C = Ve(M, Et), A = E === 0 ? 11 : E - Et;
                break;
              case _.ArrowUp:
                C = Ve(M, v), A = !((F = w == null ? void 0 : w[0]) === null || F === void 0) && F.includes(E) ? E + 12 - v : E - v;
                break;
              case _.ArrowDown:
                C = me(M, v), A = !((B = w == null ? void 0 : w[w.length - 1]) === null || B === void 0) && B.includes(E) ? E - 12 + v : E + v;
                break;
            }
            return { newCalculatedDate: C, newCalculatedMonth: A };
          }, y = function(D, M, E) {
            for (var F = 40, B = D, C = !1, A = 0, Y = b(B, M, E), V = Y.newCalculatedDate, O = Y.newCalculatedMonth; !C; ) {
              if (A >= F) {
                V = M, O = E;
                break;
              }
              if (d && V < d) {
                B = _.ArrowRight;
                var I = b(B, V, O);
                V = I.newCalculatedDate, O = I.newCalculatedMonth;
              }
              if (p && V > p) {
                B = _.ArrowLeft;
                var I = b(B, V, O);
                V = I.newCalculatedDate, O = I.newCalculatedMonth;
              }
              if (ji(V, t.props)) {
                var I = b(B, V, O);
                V = I.newCalculatedDate, O = I.newCalculatedMonth;
              } else
                C = !0;
              A++;
            }
            return { newCalculatedDate: V, newCalculatedMonth: O };
          };
          if (r === _.Enter) {
            t.isMonthDisabled(o) || (t.onMonthClick(e, o), l == null || l(c));
            return;
          }
          var S = y(r, u, o), P = S.newCalculatedDate, T = S.newCalculatedMonth;
          switch (r) {
            case _.ArrowRight:
            case _.ArrowLeft:
            case _.ArrowUp:
            case _.ArrowDown:
              t.handleMonthNavigation(T, P);
              break;
          }
        }
      }, t.getVerticalOffset = function(e) {
        var r, o;
        return (o = (r = pr[e]) === null || r === void 0 ? void 0 : r.verticalNavigationOffset) !== null && o !== void 0 ? o : 0;
      }, t.onMonthKeyDown = function(e, r) {
        var o = t.props, s = o.disabledKeyboardNavigation, i = o.handleOnMonthKeyDown, c = e.key;
        c !== _.Tab && e.preventDefault(), s || t.handleKeyboardNavigation(e, c, r), i && i(e);
      }, t.onQuarterClick = function(e, r) {
        var o = Ze(t.props.day, r);
        Mt(o, t.props) || t.handleDayClick(pn(o), e);
      }, t.onQuarterMouseEnter = function(e) {
        var r = Ze(t.props.day, e);
        Mt(r, t.props) || t.handleDayMouseEnter(pn(r));
      }, t.handleQuarterNavigation = function(e, r) {
        var o, s, i, c;
        t.isDisabled(r) || t.isExcluded(r) || ((s = (o = t.props).setPreSelection) === null || s === void 0 || s.call(o, r), (c = (i = t.QUARTER_REFS[e - 1]) === null || i === void 0 ? void 0 : i.current) === null || c === void 0 || c.focus());
      }, t.onQuarterKeyDown = function(e, r) {
        var o, s, i = e.key;
        if (!t.props.disabledKeyboardNavigation)
          switch (i) {
            case _.Enter:
              t.onQuarterClick(e, r), (s = (o = t.props).setPreSelection) === null || s === void 0 || s.call(o, t.props.selected);
              break;
            case _.ArrowRight:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(r === 4 ? 1 : r + 1, xr(t.props.preSelection, 1));
              break;
            case _.ArrowLeft:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(r === 1 ? 4 : r - 1, Gn(t.props.preSelection));
              break;
          }
      }, t.isMonthDisabledForLabelDate = function(e) {
        var r, o = t.props, s = o.day, i = o.minDate, c = o.maxDate, u = o.excludeDates, l = o.includeDates, d = ie(s, e);
        return {
          isDisabled: (r = (i || c || u || l) && la(d, t.props)) !== null && r !== void 0 ? r : !1,
          labelDate: d
        };
      }, t.isMonthDisabled = function(e) {
        var r = t.isMonthDisabledForLabelDate(e).isDisabled;
        return r;
      }, t.getMonthClassNames = function(e) {
        var r = t.props, o = r.day, s = r.startDate, i = r.endDate, c = r.preSelection, u = r.monthClassName, l = u ? u(ie(o, e)) : void 0, d = t.getSelection();
        return ne("react-datepicker__month-text", "react-datepicker__month-".concat(e), l, {
          "react-datepicker__month-text--disabled": t.isMonthDisabled(e),
          "react-datepicker__month-text--selected": d ? t.isSelectMonthInList(o, e, d) : void 0,
          "react-datepicker__month-text--keyboard-selected": !t.props.disabledKeyboardNavigation && c && t.isSelectedMonth(o, e, c) && !t.isMonthDisabled(e),
          "react-datepicker__month-text--in-selecting-range": t.isInSelectingRangeMonth(e),
          "react-datepicker__month-text--in-range": s && i ? xt(s, i, e, o) : void 0,
          "react-datepicker__month-text--range-start": t.isRangeStartMonth(e),
          "react-datepicker__month-text--range-end": t.isRangeEndMonth(e),
          "react-datepicker__month-text--selecting-range-start": t.isSelectingMonthRangeStart(e),
          "react-datepicker__month-text--selecting-range-end": t.isSelectingMonthRangeEnd(e),
          "react-datepicker__month-text--today": t.isCurrentMonth(o, e)
        });
      }, t.getTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var r = se(t.props.preSelection), o = t.isMonthDisabledForLabelDate(r).isDisabled, s = e === r && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return s;
      }, t.getQuarterTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var r = Qe(t.props.preSelection), o = Mt(t.props.day, t.props), s = e === r && !(o || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return s;
      }, t.getAriaLabel = function(e) {
        var r = t.props, o = r.chooseDayAriaLabelPrefix, s = o === void 0 ? "Choose" : o, i = r.disabledDayAriaLabelPrefix, c = i === void 0 ? "Not available" : i, u = r.day, l = r.locale, d = ie(u, e), p = t.isDisabled(d) || t.isExcluded(d) ? c : s;
        return "".concat(p, " ").concat(U(d, "MMMM yyyy", l));
      }, t.getQuarterClassNames = function(e) {
        var r = t.props, o = r.day, s = r.startDate, i = r.endDate, c = r.selected, u = r.minDate, l = r.maxDate, d = r.excludeDates, p = r.includeDates, f = r.filterDate, h = r.preSelection, g = r.disabledKeyboardNavigation, v = (u || l || d || p || f) && Mt(Ze(o, e), t.props);
        return ne("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(e), {
          "react-datepicker__quarter-text--disabled": v,
          "react-datepicker__quarter-text--selected": c ? t.isSelectedQuarter(o, e, c) : void 0,
          "react-datepicker__quarter-text--keyboard-selected": !g && h && t.isSelectedQuarter(o, e, h) && !v,
          "react-datepicker__quarter-text--in-selecting-range": t.isInSelectingRangeQuarter(e),
          "react-datepicker__quarter-text--in-range": s && i ? St(s, i, e, o) : void 0,
          "react-datepicker__quarter-text--range-start": t.isRangeStartQuarter(e),
          "react-datepicker__quarter-text--range-end": t.isRangeEndQuarter(e)
        });
      }, t.getMonthContent = function(e) {
        var r = t.props, o = r.showFullMonthYearPicker, s = r.renderMonthContent, i = r.locale, c = r.day, u = ca(e, i), l = Ir(e, i);
        return s ? s(e, u, l, c) : o ? l : u;
      }, t.getQuarterContent = function(e) {
        var r, o = t.props, s = o.renderQuarterContent, i = o.locale, c = qi(e, i);
        return (r = s == null ? void 0 : s(e, c)) !== null && r !== void 0 ? r : c;
      }, t.renderMonths = function() {
        var e, r = t.props, o = r.showTwoColumnMonthYearPicker, s = r.showFourColumnMonthYearPicker, i = r.day, c = r.selected, u = (e = pr[Sn(s, o)]) === null || e === void 0 ? void 0 : e.grid;
        return u == null ? void 0 : u.map(function(l, d) {
          return m.createElement("div", { className: "react-datepicker__month-wrapper", key: d }, l.map(function(p, f) {
            return m.createElement("div", { ref: t.MONTH_REFS[p], key: f, onClick: function(h) {
              t.onMonthClick(h, p);
            }, onKeyDown: function(h) {
              pa(h) && (h.preventDefault(), h.key = _.Enter), t.onMonthKeyDown(h, p);
            }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
              return t.onMonthMouseEnter(p);
            }, onPointerEnter: t.props.usePointerEvent ? function() {
              return t.onMonthMouseEnter(p);
            } : void 0, tabIndex: Number(t.getTabIndex(p)), className: t.getMonthClassNames(p), "aria-disabled": t.isMonthDisabled(p), role: "option", "aria-label": t.getAriaLabel(p), "aria-current": t.isCurrentMonth(i, p) ? "date" : void 0, "aria-selected": c ? t.isSelectedMonth(i, p, c) : void 0 }, t.getMonthContent(p));
          }));
        });
      }, t.renderQuarters = function() {
        var e = t.props, r = e.day, o = e.selected, s = [1, 2, 3, 4];
        return m.createElement("div", { className: "react-datepicker__quarter-wrapper" }, s.map(function(i, c) {
          return m.createElement("div", { key: c, ref: t.QUARTER_REFS[c], role: "option", onClick: function(u) {
            t.onQuarterClick(u, i);
          }, onKeyDown: function(u) {
            t.onQuarterKeyDown(u, i);
          }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
            return t.onQuarterMouseEnter(i);
          }, onPointerEnter: t.props.usePointerEvent ? function() {
            return t.onQuarterMouseEnter(i);
          } : void 0, className: t.getQuarterClassNames(i), "aria-selected": o ? t.isSelectedQuarter(r, i, o) : void 0, tabIndex: Number(t.getQuarterTabIndex(i)), "aria-current": t.isCurrentQuarter(r, i) ? "date" : void 0 }, t.getQuarterContent(i));
        }));
      }, t.getClassNames = function() {
        var e = t.props, r = e.selectingDate, o = e.selectsStart, s = e.selectsEnd, i = e.showMonthYearPicker, c = e.showQuarterYearPicker, u = e.showWeekPicker;
        return ne("react-datepicker__month", {
          "react-datepicker__month--selecting-range": r && (o || s)
        }, { "react-datepicker__monthPicker": i }, { "react-datepicker__quarterPicker": c }, { "react-datepicker__weekPicker": u });
      }, t;
    }
    return a.prototype.getSelection = function() {
      var t = this.props, e = t.selected, r = t.selectedDates, o = t.selectsMultiple;
      if (o)
        return r;
      if (e)
        return [e];
    }, a.prototype.render = function() {
      var t = this.props, e = t.showMonthYearPicker, r = t.showQuarterYearPicker, o = t.day, s = t.ariaLabelPrefix, i = s === void 0 ? "Month " : s, c = i ? i.trim() + " " : "";
      return m.createElement("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": "".concat(c).concat(U(o, "MMMM, yyyy", this.props.locale)), role: "listbox" }, e ? this.renderMonths() : r ? this.renderQuarters() : this.renderWeeks());
    }, a;
  }(ee)
), cc = (
  /** @class */
  function(n) {
    te(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.isSelectedMonth = function(e) {
        return t.props.month === e;
      }, t.renderOptions = function() {
        return t.props.monthNames.map(function(e, r) {
          return m.createElement(
            "div",
            { className: t.isSelectedMonth(r) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option", key: e, onClick: t.onChange.bind(t, r), "aria-selected": t.isSelectedMonth(r) ? "true" : void 0 },
            t.isSelectedMonth(r) ? m.createElement("span", { className: "react-datepicker__month-option--selected" }, "✓") : "",
            e
          );
        });
      }, t.onChange = function(e) {
        return t.props.onChange(e);
      }, t.handleClickOutside = function() {
        return t.props.onCancel();
      }, t;
    }
    return a.prototype.render = function() {
      return m.createElement(nr, { className: "react-datepicker__month-dropdown", onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, a;
  }(ee)
), lc = (
  /** @class */
  function(n) {
    te(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function(e) {
        return e.map(function(r, o) {
          return m.createElement("option", { key: r, value: o }, r);
        });
      }, t.renderSelectMode = function(e) {
        return m.createElement("select", { value: t.props.month, className: "react-datepicker__month-select", onChange: function(r) {
          return t.onChange(parseInt(r.target.value));
        } }, t.renderSelectOptions(e));
      }, t.renderReadView = function(e, r) {
        return m.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-read-view", onClick: t.toggleDropdown },
          m.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
          m.createElement("span", { className: "react-datepicker__month-read-view--selected-month" }, r[t.props.month])
        );
      }, t.renderDropdown = function(e) {
        return m.createElement(cc, H({ key: "dropdown" }, t.props, { monthNames: e, onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function(e) {
        var r = t.state.dropdownVisible, o = [t.renderReadView(!r, e)];
        return r && o.unshift(t.renderDropdown(e)), o;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.month && t.props.onChange(e);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return a.prototype.render = function() {
      var t = this, e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function(o) {
        return ca(o, t.props.locale);
      } : function(o) {
        return Ir(o, t.props.locale);
      }), r;
      switch (this.props.dropdownMode) {
        case "scroll":
          r = this.renderScrollMode(e);
          break;
        case "select":
          r = this.renderSelectMode(e);
          break;
      }
      return m.createElement("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode) }, r);
    }, a;
  }(ee)
);
function uc(n, a) {
  for (var t = [], e = Pe(n), r = Pe(a); !Le(e, r); )
    t.push($(e)), e = me(e, 1);
  return t;
}
var dc = (
  /** @class */
  function(n) {
    te(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.renderOptions = function() {
        return e.state.monthYearsList.map(function(r) {
          var o = Dr(r), s = ge(e.props.date, r) && oe(e.props.date, r);
          return m.createElement(
            "div",
            { className: s ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", key: o, onClick: e.onChange.bind(e, o), "aria-selected": s ? "true" : void 0 },
            s ? m.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "",
            U(r, e.props.dateFormat, e.props.locale)
          );
        });
      }, e.onChange = function(r) {
        return e.props.onChange(r);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.state = {
        monthYearsList: uc(e.props.minDate, e.props.maxDate)
      }, e;
    }
    return a.prototype.render = function() {
      var t = ne({
        "react-datepicker__month-year-dropdown": !0,
        "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
      });
      return m.createElement(nr, { className: t, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, a;
  }(ee)
), pc = (
  /** @class */
  function(n) {
    te(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = Pe(t.props.minDate), r = Pe(t.props.maxDate), o = []; !Le(e, r); ) {
          var s = Dr(e);
          o.push(m.createElement("option", { key: s, value: s }, U(e, t.props.dateFormat, t.props.locale))), e = me(e, 1);
        }
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return m.createElement("select", { value: Dr(Pe(t.props.date)), className: "react-datepicker__month-year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        var r = U(t.props.date, t.props.dateFormat, t.props.locale);
        return m.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: t.toggleDropdown },
          m.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
          m.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, r)
        );
      }, t.renderDropdown = function() {
        return m.createElement(dc, H({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, r = [t.renderReadView(!e)];
        return e && r.unshift(t.renderDropdown()), r;
      }, t.onChange = function(e) {
        t.toggleDropdown();
        var r = $(e);
        ge(t.props.date, r) && oe(t.props.date, r) || t.props.onChange(r);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return a.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return m.createElement("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, a;
  }(ee)
), fc = (
  /** @class */
  function(n) {
    te(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        height: null
      }, t.scrollToTheSelectedTime = function() {
        requestAnimationFrame(function() {
          var e, r, o;
          t.list && (t.list.scrollTop = (o = t.centerLi && a.calcCenterPosition(t.props.monthRef ? t.props.monthRef.clientHeight - ((r = (e = t.header) === null || e === void 0 ? void 0 : e.clientHeight) !== null && r !== void 0 ? r : 0) : t.list.clientHeight, t.centerLi)) !== null && o !== void 0 ? o : 0);
        });
      }, t.handleClick = function(e) {
        var r, o;
        (t.props.minTime || t.props.maxTime) && gn(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && vn(e, t.props) || (o = (r = t.props).onChange) === null || o === void 0 || o.call(r, e);
      }, t.isSelectedTime = function(e) {
        return t.props.selected && tc(t.props.selected, e);
      }, t.isDisabledTime = function(e) {
        return (t.props.minTime || t.props.maxTime) && gn(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && vn(e, t.props);
      }, t.liClasses = function(e) {
        var r, o = [
          "react-datepicker__time-list-item",
          t.props.timeClassName ? t.props.timeClassName(e) : void 0
        ];
        return t.isSelectedTime(e) && o.push("react-datepicker__time-list-item--selected"), t.isDisabledTime(e) && o.push("react-datepicker__time-list-item--disabled"), t.props.injectTimes && (be(e) * 3600 + _e(e) * 60 + Ee(e)) % (((r = t.props.intervals) !== null && r !== void 0 ? r : a.defaultProps.intervals) * 60) !== 0 && o.push("react-datepicker__time-list-item--injected"), o.join(" ");
      }, t.handleOnKeyDown = function(e, r) {
        var o, s;
        e.key === _.Space && (e.preventDefault(), e.key = _.Enter), (e.key === _.ArrowUp || e.key === _.ArrowLeft) && e.target instanceof HTMLElement && e.target.previousSibling && (e.preventDefault(), e.target.previousSibling instanceof HTMLElement && e.target.previousSibling.focus()), (e.key === _.ArrowDown || e.key === _.ArrowRight) && e.target instanceof HTMLElement && e.target.nextSibling && (e.preventDefault(), e.target.nextSibling instanceof HTMLElement && e.target.nextSibling.focus()), e.key === _.Enter && t.handleClick(r), (s = (o = t.props).handleOnKeyDown) === null || s === void 0 || s.call(o, e);
      }, t.renderTimes = function() {
        for (var e, r = [], o = typeof t.props.format == "string" ? t.props.format : "p", s = (e = t.props.intervals) !== null && e !== void 0 ? e : a.defaultProps.intervals, i = t.props.selected || t.props.openToDate || $(), c = Rt(i), u = t.props.injectTimes && t.props.injectTimes.sort(function(v, w) {
          return v.getTime() - w.getTime();
        }), l = 60 * ec(i), d = l / s, p = 0; p < d; p++) {
          var f = vr(c, p * s);
          if (r.push(f), u) {
            var h = Ji(c, f, p, s, u);
            r = r.concat(h);
          }
        }
        var g = r.reduce(function(v, w) {
          return w.getTime() <= i.getTime() ? w : v;
        }, r[0]);
        return r.map(function(v) {
          return m.createElement("li", { key: v.valueOf(), onClick: t.handleClick.bind(t, v), className: t.liClasses(v), ref: function(w) {
            v === g && (t.centerLi = w);
          }, onKeyDown: function(w) {
            t.handleOnKeyDown(w, v);
          }, tabIndex: v === g ? 0 : -1, role: "option", "aria-selected": t.isSelectedTime(v) ? "true" : void 0, "aria-disabled": t.isDisabledTime(v) ? "true" : void 0 }, U(v, o, t.props.locale));
        });
      }, t.renderTimeCaption = function() {
        return t.props.showTimeCaption === !1 ? m.createElement(m.Fragment, null) : m.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--time ".concat(t.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""), ref: function(e) {
            t.header = e;
          } },
          m.createElement("div", { className: "react-datepicker-time__header" }, t.props.timeCaption)
        );
      }, t;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          intervals: 30,
          todayButton: null,
          timeCaption: "Time",
          showTimeCaption: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      this.scrollToTheSelectedTime(), this.props.monthRef && this.header && this.setState({
        height: this.props.monthRef.clientHeight - this.header.clientHeight
      });
    }, a.prototype.render = function() {
      var t = this, e, r = this.state.height;
      return m.createElement(
        "div",
        { className: "react-datepicker__time-container ".concat(((e = this.props.todayButton) !== null && e !== void 0 ? e : a.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "") },
        this.renderTimeCaption(),
        m.createElement(
          "div",
          { className: "react-datepicker__time" },
          m.createElement(
            "div",
            { className: "react-datepicker__time-box" },
            m.createElement("ul", { className: "react-datepicker__time-list", ref: function(o) {
              t.list = o;
            }, style: r ? { height: r } : {}, role: "listbox", "aria-label": this.props.timeCaption }, this.renderTimes())
          )
        )
      );
    }, a.calcCenterPosition = function(t, e) {
      return e.offsetTop - (t / 2 - e.clientHeight / 2);
    }, a;
  }(ee)
), En = 3, hc = (
  /** @class */
  function(n) {
    te(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.YEAR_REFS = ye([], Array(e.props.yearItemNumber), !0).map(function() {
        return Ie();
      }), e.isDisabled = function(r) {
        return ue(r, {
          minDate: e.props.minDate,
          maxDate: e.props.maxDate,
          excludeDates: e.props.excludeDates,
          includeDates: e.props.includeDates,
          filterDate: e.props.filterDate
        });
      }, e.isExcluded = function(r) {
        return Lr(r, {
          excludeDates: e.props.excludeDates
        });
      }, e.selectingDate = function() {
        var r;
        return (r = e.props.selectingDate) !== null && r !== void 0 ? r : e.props.preSelection;
      }, e.updateFocusOnPaginate = function(r) {
        var o = function() {
          var s, i;
          (i = (s = e.YEAR_REFS[r]) === null || s === void 0 ? void 0 : s.current) === null || i === void 0 || i.focus();
        };
        window.requestAnimationFrame(o);
      }, e.handleYearClick = function(r, o) {
        e.props.onDayClick && e.props.onDayClick(r, o);
      }, e.handleYearNavigation = function(r, o) {
        var s, i, c, u, l = e.props, d = l.date, p = l.yearItemNumber;
        if (!(d === void 0 || p === void 0)) {
          var f = Re(d, p).startPeriod;
          e.isDisabled(o) || e.isExcluded(o) || ((i = (s = e.props).setPreSelection) === null || i === void 0 || i.call(s, o), r - f < 0 ? e.updateFocusOnPaginate(p - (f - r)) : r - f >= p ? e.updateFocusOnPaginate(Math.abs(p - (r - f))) : (u = (c = e.YEAR_REFS[r - f]) === null || c === void 0 ? void 0 : c.current) === null || u === void 0 || u.focus());
        }
      }, e.isSameDay = function(r, o) {
        return W(r, o);
      }, e.isCurrentYear = function(r) {
        return r === L($());
      }, e.isRangeStart = function(r) {
        return e.props.startDate && e.props.endDate && ge(ve($(), r), e.props.startDate);
      }, e.isRangeEnd = function(r) {
        return e.props.startDate && e.props.endDate && ge(ve($(), r), e.props.endDate);
      }, e.isInRange = function(r) {
        return Ct(r, e.props.startDate, e.props.endDate);
      }, e.isInSelectingRange = function(r) {
        var o = e.props, s = o.selectsStart, i = o.selectsEnd, c = o.selectsRange, u = o.startDate, l = o.endDate;
        return !(s || i || c) || !e.selectingDate() ? !1 : s && l ? Ct(r, e.selectingDate(), l) : i && u || c && u && !l ? Ct(r, u, e.selectingDate()) : !1;
      }, e.isSelectingRangeStart = function(r) {
        var o;
        if (!e.isInSelectingRange(r))
          return !1;
        var s = e.props, i = s.startDate, c = s.selectsStart, u = ve($(), r);
        return c ? ge(u, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : ge(u, i ?? null);
      }, e.isSelectingRangeEnd = function(r) {
        var o;
        if (!e.isInSelectingRange(r))
          return !1;
        var s = e.props, i = s.endDate, c = s.selectsEnd, u = s.selectsRange, l = ve($(), r);
        return c || u ? ge(l, (o = e.selectingDate()) !== null && o !== void 0 ? o : null) : ge(l, i ?? null);
      }, e.isKeyboardSelected = function(r) {
        if (!(e.props.date === void 0 || e.props.selected == null || e.props.preSelection == null)) {
          var o = e.props, s = o.minDate, i = o.maxDate, c = o.excludeDates, u = o.includeDates, l = o.filterDate, d = dt(ve(e.props.date, r)), p = (s || i || c || u || l) && Yt(r, e.props);
          return !e.props.disabledKeyboardNavigation && !e.props.inline && !W(d, dt(e.props.selected)) && W(d, dt(e.props.preSelection)) && !p;
        }
      }, e.onYearClick = function(r, o) {
        var s = e.props.date;
        s !== void 0 && e.handleYearClick(dt(ve(s, o)), r);
      }, e.onYearKeyDown = function(r, o) {
        var s, i, c = r.key, u = e.props, l = u.date, d = u.yearItemNumber, p = u.handleOnKeyDown;
        if (c !== _.Tab && r.preventDefault(), !e.props.disabledKeyboardNavigation)
          switch (c) {
            case _.Enter:
              if (e.props.selected == null)
                break;
              e.onYearClick(r, o), (i = (s = e.props).setPreSelection) === null || i === void 0 || i.call(s, e.props.selected);
              break;
            case _.ArrowRight:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o + 1, Ce(e.props.preSelection, 1));
              break;
            case _.ArrowLeft:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(o - 1, nt(e.props.preSelection, 1));
              break;
            case _.ArrowUp: {
              if (l === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var f = Re(l, d).startPeriod, h = En, g = o - h;
              if (g < f) {
                var v = d % h;
                o >= f && o < f + v ? h = v : h += v, g = o - h;
              }
              e.handleYearNavigation(g, nt(e.props.preSelection, h));
              break;
            }
            case _.ArrowDown: {
              if (l === void 0 || d === void 0 || e.props.preSelection == null)
                break;
              var w = Re(l, d).endPeriod, h = En, g = o + h;
              if (g > w) {
                var v = d % h;
                o <= w && o > w - v ? h = v : h += v, g = o + h;
              }
              e.handleYearNavigation(g, Ce(e.props.preSelection, h));
              break;
            }
          }
        p && p(r);
      }, e.getYearClassNames = function(r) {
        var o = e.props, s = o.date, i = o.minDate, c = o.maxDate, u = o.selected, l = o.excludeDates, d = o.includeDates, p = o.filterDate, f = o.yearClassName;
        return ne("react-datepicker__year-text", "react-datepicker__year-".concat(r), s ? f == null ? void 0 : f(ve(s, r)) : void 0, {
          "react-datepicker__year-text--selected": u ? r === L(u) : void 0,
          "react-datepicker__year-text--disabled": (i || c || l || d || p) && Yt(r, e.props),
          "react-datepicker__year-text--keyboard-selected": e.isKeyboardSelected(r),
          "react-datepicker__year-text--range-start": e.isRangeStart(r),
          "react-datepicker__year-text--range-end": e.isRangeEnd(r),
          "react-datepicker__year-text--in-range": e.isInRange(r),
          "react-datepicker__year-text--in-selecting-range": e.isInSelectingRange(r),
          "react-datepicker__year-text--selecting-range-start": e.isSelectingRangeStart(r),
          "react-datepicker__year-text--selecting-range-end": e.isSelectingRangeEnd(r),
          "react-datepicker__year-text--today": e.isCurrentYear(r)
        });
      }, e.getYearTabIndex = function(r) {
        if (e.props.disabledKeyboardNavigation || e.props.preSelection == null)
          return "-1";
        var o = L(e.props.preSelection), s = Yt(r, e.props);
        return r === o && !s ? "0" : "-1";
      }, e.getYearContent = function(r) {
        return e.props.renderYearContent ? e.props.renderYearContent(r) : r;
      }, e;
    }
    return a.prototype.render = function() {
      var t = this, e = [], r = this.props, o = r.date, s = r.yearItemNumber, i = r.onYearMouseEnter, c = r.onYearMouseLeave;
      if (o === void 0)
        return null;
      for (var u = Re(o, s), l = u.startPeriod, d = u.endPeriod, p = function(g) {
        e.push(m.createElement("div", { ref: f.YEAR_REFS[g - l], onClick: function(v) {
          t.onYearClick(v, g);
        }, onKeyDown: function(v) {
          pa(v) && (v.preventDefault(), v.key = _.Enter), t.onYearKeyDown(v, g);
        }, tabIndex: Number(f.getYearTabIndex(g)), className: f.getYearClassNames(g), onMouseEnter: f.props.usePointerEvent ? void 0 : function(v) {
          return i(v, g);
        }, onPointerEnter: f.props.usePointerEvent ? function(v) {
          return i(v, g);
        } : void 0, onMouseLeave: f.props.usePointerEvent ? void 0 : function(v) {
          return c(v, g);
        }, onPointerLeave: f.props.usePointerEvent ? function(v) {
          return c(v, g);
        } : void 0, key: g, "aria-current": f.isCurrentYear(g) ? "date" : void 0 }, f.getYearContent(g)));
      }, f = this, h = l; h <= d; h++)
        p(h);
      return m.createElement(
        "div",
        { className: "react-datepicker__year" },
        m.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0 }, e)
      );
    }, a;
  }(ee)
);
function mc(n, a, t, e) {
  for (var r = [], o = 0; o < 2 * a + 1; o++) {
    var s = n + a - o, i = !0;
    t && (i = L(t) <= s), e && i && (i = L(e) >= s), i && r.push(s);
  }
  return r;
}
var vc = (
  /** @class */
  function(n) {
    te(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      e.renderOptions = function() {
        var i = e.props.year, c = e.state.yearsList.map(function(d) {
          return m.createElement(
            "div",
            { className: i === d ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", key: d, onClick: e.onChange.bind(e, d), "aria-selected": i === d ? "true" : void 0 },
            i === d ? m.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "",
            d
          );
        }), u = e.props.minDate ? L(e.props.minDate) : null, l = e.props.maxDate ? L(e.props.maxDate) : null;
        return (!l || !e.state.yearsList.find(function(d) {
          return d === l;
        })) && c.unshift(m.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "upcoming", onClick: e.incrementYears },
          m.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
        )), (!u || !e.state.yearsList.find(function(d) {
          return d === u;
        })) && c.push(m.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "previous", onClick: e.decrementYears },
          m.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
        )), c;
      }, e.onChange = function(i) {
        e.props.onChange(i);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.shiftYears = function(i) {
        var c = e.state.yearsList.map(function(u) {
          return u + i;
        });
        e.setState({
          yearsList: c
        });
      }, e.incrementYears = function() {
        return e.shiftYears(1);
      }, e.decrementYears = function() {
        return e.shiftYears(-1);
      };
      var r = t.yearDropdownItemNumber, o = t.scrollableYearDropdown, s = r || (o ? 10 : 5);
      return e.state = {
        yearsList: mc(e.props.year, s, e.props.minDate, e.props.maxDate)
      }, e.dropdownRef = Ie(), e;
    }
    return a.prototype.componentDidMount = function() {
      var t = this.dropdownRef.current;
      if (t) {
        var e = t.children ? Array.from(t.children) : null, r = e ? e.find(function(o) {
          return o.ariaSelected;
        }) : null;
        t.scrollTop = r && r instanceof HTMLElement ? r.offsetTop + (r.clientHeight - t.clientHeight) / 2 : (t.scrollHeight - t.clientHeight) / 2;
      }
    }, a.prototype.render = function() {
      var t = ne({
        "react-datepicker__year-dropdown": !0,
        "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
      });
      return m.createElement(nr, { className: t, containerRef: this.dropdownRef, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, a;
  }(ee)
), gc = (
  /** @class */
  function(n) {
    te(a, n);
    function a() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = t.props.minDate ? L(t.props.minDate) : 1900, r = t.props.maxDate ? L(t.props.maxDate) : 2100, o = [], s = e; s <= r; s++)
          o.push(m.createElement("option", { key: s, value: s }, s));
        return o;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return m.createElement("select", { value: t.props.year, className: "react-datepicker__year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        return m.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__year-read-view", onClick: function(r) {
            return t.toggleDropdown(r);
          } },
          m.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
          m.createElement("span", { className: "react-datepicker__year-read-view--selected-year" }, t.props.year)
        );
      }, t.renderDropdown = function() {
        return m.createElement(vc, H({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, r = [t.renderReadView(!e)];
        return e && r.unshift(t.renderDropdown()), r;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.year && t.props.onChange(e);
      }, t.toggleDropdown = function(e) {
        t.setState({
          dropdownVisible: !t.state.dropdownVisible
        }, function() {
          t.props.adjustDateOnChange && t.handleYearChange(t.props.date, e);
        });
      }, t.handleYearChange = function(e, r) {
        var o;
        (o = t.onSelect) === null || o === void 0 || o.call(t, e, r), t.setOpen();
      }, t.onSelect = function(e, r) {
        var o, s;
        (s = (o = t.props).onSelect) === null || s === void 0 || s.call(o, e, r);
      }, t.setOpen = function() {
        var e, r;
        (r = (e = t.props).setOpen) === null || r === void 0 || r.call(e, !0);
      }, t;
    }
    return a.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return m.createElement("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, a;
  }(ee)
), wc = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select"
], Dc = function(n) {
  var a = (n.className || "").split(/\s+/);
  return wc.some(function(t) {
    return a.indexOf(t) >= 0;
  });
}, yc = (
  /** @class */
  function(n) {
    te(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.monthContainer = void 0, e.handleClickOutside = function(r) {
        e.props.onClickOutside(r);
      }, e.setClickOutsideRef = function() {
        return e.containerRef.current;
      }, e.handleDropdownFocus = function(r) {
        var o, s;
        Dc(r.target) && ((s = (o = e.props).onDropdownFocus) === null || s === void 0 || s.call(o, r));
      }, e.getDateInView = function() {
        var r = e.props, o = r.preSelection, s = r.selected, i = r.openToDate, c = ua(e.props), u = da(e.props), l = $(), d = i || s || o;
        return d || (c && $e(l, c) ? c : u && Le(l, u) ? u : l);
      }, e.increaseMonth = function() {
        e.setState(function(r) {
          var o = r.date;
          return {
            date: me(o, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.decreaseMonth = function() {
        e.setState(function(r) {
          var o = r.date;
          return {
            date: Ve(o, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.handleDayClick = function(r, o, s) {
        e.props.onSelect(r, o, s), e.props.setPreSelection && e.props.setPreSelection(r);
      }, e.handleDayMouseEnter = function(r) {
        e.setState({ selectingDate: r }), e.props.onDayMouseEnter && e.props.onDayMouseEnter(r);
      }, e.handleMonthMouseLeave = function() {
        e.setState({ selectingDate: void 0 }), e.props.onMonthMouseLeave && e.props.onMonthMouseLeave();
      }, e.handleYearMouseEnter = function(r, o) {
        e.setState({ selectingDate: ve($(), o) }), e.props.onYearMouseEnter && e.props.onYearMouseEnter(r, o);
      }, e.handleYearMouseLeave = function(r, o) {
        e.props.onYearMouseLeave && e.props.onYearMouseLeave(r, o);
      }, e.handleYearChange = function(r) {
        var o, s, i, c;
        (s = (o = e.props).onYearChange) === null || s === void 0 || s.call(o, r), e.setState({ isRenderAriaLiveMessage: !0 }), e.props.adjustDateOnChange && (e.props.onSelect(r), (c = (i = e.props).setOpen) === null || c === void 0 || c.call(i, !0)), e.props.setPreSelection && e.props.setPreSelection(r);
      }, e.getEnabledPreSelectionDateForMonth = function(r) {
        if (!ue(r, e.props))
          return r;
        for (var o = Pe(r), s = Hi(r), i = La(s, o), c = null, u = 0; u <= i; u++) {
          var l = he(o, u);
          if (!ue(l, e.props)) {
            c = l;
            break;
          }
        }
        return c;
      }, e.handleMonthChange = function(r) {
        var o, s, i, c = (o = e.getEnabledPreSelectionDateForMonth(r)) !== null && o !== void 0 ? o : r;
        e.handleCustomMonthChange(c), e.props.adjustDateOnChange && (e.props.onSelect(c), (i = (s = e.props).setOpen) === null || i === void 0 || i.call(s, !0)), e.props.setPreSelection && e.props.setPreSelection(c);
      }, e.handleCustomMonthChange = function(r) {
        var o, s;
        (s = (o = e.props).onMonthChange) === null || s === void 0 || s.call(o, r), e.setState({ isRenderAriaLiveMessage: !0 });
      }, e.handleMonthYearChange = function(r) {
        e.handleYearChange(r), e.handleMonthChange(r);
      }, e.changeYear = function(r) {
        e.setState(function(o) {
          var s = o.date;
          return {
            date: ve(s, Number(r))
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.changeMonth = function(r) {
        e.setState(function(o) {
          var s = o.date;
          return {
            date: ie(s, Number(r))
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.changeMonthYear = function(r) {
        e.setState(function(o) {
          var s = o.date;
          return {
            date: ve(ie(s, se(r)), L(r))
          };
        }, function() {
          return e.handleMonthYearChange(e.state.date);
        });
      }, e.header = function(r) {
        r === void 0 && (r = e.state.date);
        var o = Ye(r, e.props.locale, e.props.calendarStartDay), s = [];
        return e.props.showWeekNumbers && s.push(m.createElement("div", { key: "W", className: "react-datepicker__day-name" }, e.props.weekLabel || "#")), s.concat([0, 1, 2, 3, 4, 5, 6].map(function(i) {
          var c = he(o, i), u = e.formatWeekday(c, e.props.locale), l = e.props.weekDayClassName ? e.props.weekDayClassName(c) : void 0;
          return m.createElement("div", { key: i, "aria-label": U(c, "EEEE", e.props.locale), className: ne("react-datepicker__day-name", l) }, u);
        }));
      }, e.formatWeekday = function(r, o) {
        return e.props.formatWeekDay ? Qi(r, e.props.formatWeekDay, o) : e.props.useWeekdaysShort ? Ki(r, o) : Vi(r, o);
      }, e.decreaseYear = function() {
        e.setState(function(r) {
          var o, s = r.date;
          return {
            date: nt(s, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : a.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.clearSelectingDate = function() {
        e.setState({ selectingDate: void 0 });
      }, e.renderPreviousButton = function() {
        var r, o, s;
        if (!e.props.renderCustomHeader) {
          var i = (r = e.props.monthsShown) !== null && r !== void 0 ? r : a.defaultProps.monthsShown, c = e.props.showPreviousMonths ? i - 1 : 0, u = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, l = Ve(e.state.date, u), d;
          switch (!0) {
            case e.props.showMonthYearPicker:
              d = yn(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              d = Xi(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              d = $i(e.state.date, e.props);
              break;
            default:
              d = wn(l, e.props);
              break;
          }
          if (!(!((s = e.props.forceShowMonthNavigation) !== null && s !== void 0 ? s : a.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && d || e.props.showTimeSelectOnly)) {
            var p = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--previous"
            ], f = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--previous"
            ], h = e.decreaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (h = e.decreaseYear), d && e.props.showDisabledMonthNavigation && (f.push("react-datepicker__navigation--previous--disabled"), h = void 0);
            var g = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, v = e.props, w = v.previousMonthButtonLabel, b = w === void 0 ? a.defaultProps.previousMonthButtonLabel : w, y = v.previousYearButtonLabel, S = y === void 0 ? a.defaultProps.previousYearButtonLabel : y, P = e.props, T = P.previousMonthAriaLabel, D = T === void 0 ? typeof b == "string" ? b : "Previous Month" : T, M = P.previousYearAriaLabel, E = M === void 0 ? typeof S == "string" ? S : "Previous Year" : M;
            return m.createElement(
              "button",
              { type: "button", className: f.join(" "), onClick: h, onKeyDown: e.props.handleOnKeyDown, "aria-label": g ? E : D },
              m.createElement("span", { className: p.join(" ") }, g ? S : b)
            );
          }
        }
      }, e.increaseYear = function() {
        e.setState(function(r) {
          var o, s = r.date;
          return {
            date: Ce(s, e.props.showYearPicker ? (o = e.props.yearItemNumber) !== null && o !== void 0 ? o : a.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.renderNextButton = function() {
        var r;
        if (!e.props.renderCustomHeader) {
          var o;
          switch (!0) {
            case e.props.showMonthYearPicker:
              o = bn(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              o = Gi(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              o = Ui(e.state.date, e.props);
              break;
            default:
              o = Dn(e.state.date, e.props);
              break;
          }
          if (!(!((r = e.props.forceShowMonthNavigation) !== null && r !== void 0 ? r : a.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && o || e.props.showTimeSelectOnly)) {
            var s = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--next"
            ], i = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--next"
            ];
            e.props.showTimeSelect && s.push("react-datepicker__navigation--next--with-time"), e.props.todayButton && s.push("react-datepicker__navigation--next--with-today-button");
            var c = e.increaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (c = e.increaseYear), o && e.props.showDisabledMonthNavigation && (s.push("react-datepicker__navigation--next--disabled"), c = void 0);
            var u = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, l = e.props, d = l.nextMonthButtonLabel, p = d === void 0 ? a.defaultProps.nextMonthButtonLabel : d, f = l.nextYearButtonLabel, h = f === void 0 ? a.defaultProps.nextYearButtonLabel : f, g = e.props, v = g.nextMonthAriaLabel, w = v === void 0 ? typeof p == "string" ? p : "Next Month" : v, b = g.nextYearAriaLabel, y = b === void 0 ? typeof h == "string" ? h : "Next Year" : b;
            return m.createElement(
              "button",
              { type: "button", className: s.join(" "), onClick: c, onKeyDown: e.props.handleOnKeyDown, "aria-label": u ? y : w },
              m.createElement("span", { className: i.join(" ") }, u ? h : p)
            );
          }
        }
      }, e.renderCurrentMonth = function(r) {
        r === void 0 && (r = e.state.date);
        var o = ["react-datepicker__current-month"];
        return e.props.showYearDropdown && o.push("react-datepicker__current-month--hasYearDropdown"), e.props.showMonthDropdown && o.push("react-datepicker__current-month--hasMonthDropdown"), e.props.showMonthYearDropdown && o.push("react-datepicker__current-month--hasMonthYearDropdown"), m.createElement("h2", { className: o.join(" ") }, U(r, e.props.dateFormat, e.props.locale));
      }, e.renderYearDropdown = function(r) {
        if (r === void 0 && (r = !1), !(!e.props.showYearDropdown || r))
          return m.createElement(gc, H({}, a.defaultProps, e.props, { date: e.state.date, onChange: e.changeYear, year: L(e.state.date) }));
      }, e.renderMonthDropdown = function(r) {
        if (r === void 0 && (r = !1), !(!e.props.showMonthDropdown || r))
          return m.createElement(lc, H({}, a.defaultProps, e.props, { month: se(e.state.date), onChange: e.changeMonth }));
      }, e.renderMonthYearDropdown = function(r) {
        if (r === void 0 && (r = !1), !(!e.props.showMonthYearDropdown || r))
          return m.createElement(pc, H({}, a.defaultProps, e.props, { date: e.state.date, onChange: e.changeMonthYear }));
      }, e.handleTodayButtonClick = function(r) {
        e.props.onSelect(fn(), r), e.props.setPreSelection && e.props.setPreSelection(fn());
      }, e.renderTodayButton = function() {
        if (!(!e.props.todayButton || e.props.showTimeSelectOnly))
          return m.createElement("div", { className: "react-datepicker__today-button", onClick: e.handleTodayButtonClick }, e.props.todayButton);
      }, e.renderDefaultHeader = function(r) {
        var o = r.monthDate, s = r.i;
        return m.createElement(
          "div",
          { className: "react-datepicker__header ".concat(e.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "") },
          e.renderCurrentMonth(o),
          m.createElement(
            "div",
            { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(e.props.dropdownMode), onFocus: e.handleDropdownFocus },
            e.renderMonthDropdown(s !== 0),
            e.renderMonthYearDropdown(s !== 0),
            e.renderYearDropdown(s !== 0)
          ),
          m.createElement("div", { className: "react-datepicker__day-names" }, e.header(o))
        );
      }, e.renderCustomHeader = function(r) {
        var o, s, i = r.monthDate, c = r.i;
        if (e.props.showTimeSelect && !e.state.monthContainer || e.props.showTimeSelectOnly)
          return null;
        var u = wn(e.state.date, e.props), l = Dn(e.state.date, e.props), d = yn(e.state.date, e.props), p = bn(e.state.date, e.props), f = !e.props.showMonthYearPicker && !e.props.showQuarterYearPicker && !e.props.showYearPicker;
        return m.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--custom", onFocus: e.props.onDropdownFocus },
          (s = (o = e.props).renderCustomHeader) === null || s === void 0 ? void 0 : s.call(o, H(H({}, e.state), { customHeaderCount: c, monthDate: i, changeMonth: e.changeMonth, changeYear: e.changeYear, decreaseMonth: e.decreaseMonth, increaseMonth: e.increaseMonth, decreaseYear: e.decreaseYear, increaseYear: e.increaseYear, prevMonthButtonDisabled: u, nextMonthButtonDisabled: l, prevYearButtonDisabled: d, nextYearButtonDisabled: p })),
          f && m.createElement("div", { className: "react-datepicker__day-names" }, e.header(i))
        );
      }, e.renderYearHeader = function(r) {
        var o = r.monthDate, s = e.props, i = s.showYearPicker, c = s.yearItemNumber, u = c === void 0 ? a.defaultProps.yearItemNumber : c, l = Re(o, u), d = l.startPeriod, p = l.endPeriod;
        return m.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, i ? "".concat(d, " - ").concat(p) : L(o));
      }, e.renderHeader = function(r) {
        var o = r.monthDate, s = r.i, i = s === void 0 ? 0 : s, c = { monthDate: o, i };
        switch (!0) {
          case e.props.renderCustomHeader !== void 0:
            return e.renderCustomHeader(c);
          case (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker):
            return e.renderYearHeader(c);
          default:
            return e.renderDefaultHeader(c);
        }
      }, e.renderMonths = function() {
        var r, o;
        if (!(e.props.showTimeSelectOnly || e.props.showYearPicker)) {
          for (var s = [], i = (r = e.props.monthsShown) !== null && r !== void 0 ? r : a.defaultProps.monthsShown, c = e.props.showPreviousMonths ? i - 1 : 0, u = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? Ce(e.state.date, c) : Ve(e.state.date, c), l = (o = e.props.monthSelectedIn) !== null && o !== void 0 ? o : c, d = 0; d < i; ++d) {
            var p = d - l + c, f = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? Ce(u, p) : me(u, p), h = "month-".concat(d), g = d < i - 1, v = d > 0;
            s.push(m.createElement(
              "div",
              { key: h, ref: function(w) {
                e.monthContainer = w ?? void 0;
              }, className: "react-datepicker__month-container" },
              e.renderHeader({ monthDate: f, i: d }),
              m.createElement(ic, H({}, a.defaultProps, e.props, { ariaLabelPrefix: e.props.monthAriaLabelPrefix, day: f, onDayClick: e.handleDayClick, handleOnKeyDown: e.props.handleOnDayKeyDown, handleOnMonthKeyDown: e.props.handleOnKeyDown, onDayMouseEnter: e.handleDayMouseEnter, onMouseLeave: e.handleMonthMouseLeave, orderInDisplay: d, selectingDate: e.state.selectingDate, monthShowsDuplicateDaysEnd: g, monthShowsDuplicateDaysStart: v }))
            ));
          }
          return s;
        }
      }, e.renderYears = function() {
        if (!e.props.showTimeSelectOnly && e.props.showYearPicker)
          return m.createElement(
            "div",
            { className: "react-datepicker__year--container" },
            e.renderHeader({ monthDate: e.state.date }),
            m.createElement(hc, H({}, a.defaultProps, e.props, { selectingDate: e.state.selectingDate, date: e.state.date, onDayClick: e.handleDayClick, clearSelectingDate: e.clearSelectingDate, onYearMouseEnter: e.handleYearMouseEnter, onYearMouseLeave: e.handleYearMouseLeave }))
          );
      }, e.renderTimeSection = function() {
        if (e.props.showTimeSelect && (e.state.monthContainer || e.props.showTimeSelectOnly))
          return m.createElement(fc, H({}, a.defaultProps, e.props, { onChange: e.props.onTimeChange, format: e.props.timeFormat, intervals: e.props.timeIntervals, monthRef: e.state.monthContainer }));
      }, e.renderInputTimeSection = function() {
        var r = e.props.selected ? new Date(e.props.selected) : void 0, o = r && Me(r) && !!e.props.selected, s = o ? "".concat(kn(r.getHours()), ":").concat(kn(r.getMinutes())) : "";
        if (e.props.showTimeInput)
          return m.createElement(rc, H({}, a.defaultProps, e.props, { date: r, timeString: s, onChange: e.props.onTimeChange }));
      }, e.renderAriaLiveRegion = function() {
        var r, o = Re(e.state.date, (r = e.props.yearItemNumber) !== null && r !== void 0 ? r : a.defaultProps.yearItemNumber), s = o.startPeriod, i = o.endPeriod, c;
        return e.props.showYearPicker ? c = "".concat(s, " - ").concat(i) : e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? c = L(e.state.date) : c = "".concat(Ir(se(e.state.date), e.props.locale), " ").concat(L(e.state.date)), m.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, e.state.isRenderAriaLiveMessage && c);
      }, e.renderChildren = function() {
        if (e.props.children)
          return m.createElement("div", { className: "react-datepicker__children-container" }, e.props.children);
      }, e.containerRef = Ie(), e.state = {
        date: e.getDateInView(),
        selectingDate: void 0,
        monthContainer: void 0,
        isRenderAriaLiveMessage: !1
      }, e;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          monthsShown: 1,
          forceShowMonthNavigation: !1,
          timeCaption: "Time",
          previousYearButtonLabel: "Previous Year",
          nextYearButtonLabel: "Next Year",
          previousMonthButtonLabel: "Previous Month",
          nextMonthButtonLabel: "Next Month",
          yearItemNumber: Dt
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      var t = this;
      this.props.showTimeSelect && (this.assignMonthContainer = function() {
        t.setState({ monthContainer: t.monthContainer });
      }());
    }, a.prototype.componentDidUpdate = function(t) {
      var e = this;
      if (this.props.preSelection && (!W(this.props.preSelection, t.preSelection) || this.props.monthSelectedIn !== t.monthSelectedIn)) {
        var r = !oe(this.state.date, this.props.preSelection);
        this.setState({
          date: this.props.preSelection
        }, function() {
          return r && e.handleCustomMonthChange(e.state.date);
        });
      } else this.props.openToDate && !W(this.props.openToDate, t.openToDate) && this.setState({
        date: this.props.openToDate
      });
    }, a.prototype.render = function() {
      var t = this.props.container || Ni;
      return m.createElement(
        nr,
        { onClickOutside: this.handleClickOutside, style: { display: "contents" }, containerRef: this.containerRef, ignoreClass: this.props.outsideClickIgnoreClass },
        m.createElement(
          t,
          { className: ne("react-datepicker", this.props.className, {
            "react-datepicker--time-only": this.props.showTimeSelectOnly
          }), showTime: this.props.showTimeSelect || this.props.showTimeInput, showTimeSelectOnly: this.props.showTimeSelectOnly },
          this.renderAriaLiveRegion(),
          this.renderPreviousButton(),
          this.renderNextButton(),
          this.renderMonths(),
          this.renderYears(),
          this.renderTodayButton(),
          this.renderTimeSection(),
          this.renderInputTimeSection(),
          this.renderChildren()
        )
      );
    }, a;
  }(ee)
), bc = function(n) {
  var a = n.icon, t = n.className, e = t === void 0 ? "" : t, r = n.onClick, o = "react-datepicker__calendar-icon";
  return typeof a == "string" ? m.createElement("i", { className: "".concat(o, " ").concat(a, " ").concat(e), "aria-hidden": "true", onClick: r }) : m.isValidElement(a) ? m.cloneElement(a, {
    className: "".concat(a.props.className || "", " ").concat(o, " ").concat(e),
    onClick: function(s) {
      typeof a.props.onClick == "function" && a.props.onClick(s), typeof r == "function" && r(s);
    }
  }) : m.createElement(
    "svg",
    { className: "".concat(o, " ").concat(e), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", onClick: r },
    m.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })
  );
}, fa = (
  /** @class */
  function(n) {
    te(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.portalRoot = null, e.el = document.createElement("div"), e;
    }
    return a.prototype.componentDidMount = function() {
      this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
    }, a.prototype.componentWillUnmount = function() {
      this.portalRoot && this.portalRoot.removeChild(this.el);
    }, a.prototype.render = function() {
      return ka.createPortal(this.props.children, this.el);
    }, a;
  }(ee)
), _c = "[tabindex], a, button, input, select, textarea", kc = function(n) {
  return (n instanceof HTMLAnchorElement || !n.disabled) && n.tabIndex !== -1;
}, ha = (
  /** @class */
  function(n) {
    te(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.getTabChildren = function() {
        var r;
        return Array.prototype.slice.call((r = e.tabLoopRef.current) === null || r === void 0 ? void 0 : r.querySelectorAll(_c), 1, -1).filter(kc);
      }, e.handleFocusStart = function() {
        var r = e.getTabChildren();
        r && r.length > 1 && r[r.length - 1].focus();
      }, e.handleFocusEnd = function() {
        var r = e.getTabChildren();
        r && r.length > 1 && r[0].focus();
      }, e.tabLoopRef = Ie(), e;
    }
    return a.prototype.render = function() {
      var t;
      return ((t = this.props.enableTabLoop) !== null && t !== void 0 ? t : a.defaultProps.enableTabLoop) ? m.createElement(
        "div",
        { className: "react-datepicker__tab-loop", ref: this.tabLoopRef },
        m.createElement("div", { className: "react-datepicker__tab-loop__start", tabIndex: 0, onFocus: this.handleFocusStart }),
        this.props.children,
        m.createElement("div", { className: "react-datepicker__tab-loop__end", tabIndex: 0, onFocus: this.handleFocusEnd })
      ) : this.props.children;
    }, a.defaultProps = {
      enableTabLoop: !0
    }, a;
  }(ee)
);
function xc(n) {
  var a = function(t) {
    var e, r = typeof t.hidePopper == "boolean" ? t.hidePopper : !0, o = mr(null), s = Oi(H({ open: !r, whileElementsMounted: ii, placement: t.popperPlacement, middleware: ye([
      vi({ padding: 15 }),
      mi(10),
      gi({ element: o })
    ], (e = t.popperModifiers) !== null && e !== void 0 ? e : [], !0) }, t.popperProps)), i = H(H({}, t), { hidePopper: r, popperProps: H(H({}, s), { arrowRef: o }) });
    return m.createElement(n, H({}, i));
  };
  return a;
}
var Mc = (
  /** @class */
  function(n) {
    te(a, n);
    function a() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          hidePopper: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.render = function() {
      var t = this.props, e = t.className, r = t.wrapperClassName, o = t.hidePopper, s = o === void 0 ? a.defaultProps.hidePopper : o, i = t.popperComponent, c = t.targetComponent, u = t.enableTabLoop, l = t.popperOnKeyDown, d = t.portalId, p = t.portalHost, f = t.popperProps, h = t.showArrow, g = void 0;
      if (!s) {
        var v = ne("react-datepicker-popper", e);
        g = m.createElement(
          ha,
          { enableTabLoop: u },
          m.createElement(
            "div",
            { ref: f.refs.setFloating, style: f.floatingStyles, className: v, "data-placement": f.placement, onKeyDown: l },
            i,
            h && m.createElement(xi, { ref: f.arrowRef, context: f.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })
          )
        );
      }
      this.props.popperContainer && (g = Da(this.props.popperContainer, {}, g)), d && !s && (g = m.createElement(fa, { portalId: d, portalHost: p }, g));
      var w = ne("react-datepicker-wrapper", r);
      return m.createElement(
        m.Fragment,
        null,
        m.createElement("div", { ref: f.refs.setReference, className: w }, c),
        g
      );
    }, a;
  }(ee)
), Cc = xc(Mc), Pn = "react-datepicker-ignore-onclickoutside";
function Sc(n, a) {
  return n && a ? se(n) !== se(a) || L(n) !== L(a) : n !== a;
}
var fr = "Date input not valid.", Tn = (
  /** @class */
  function(n) {
    te(a, n);
    function a(t) {
      var e = n.call(this, t) || this;
      return e.calendar = null, e.input = null, e.getPreSelection = function() {
        return e.props.openToDate ? e.props.openToDate : e.props.selectsEnd && e.props.startDate ? e.props.startDate : e.props.selectsStart && e.props.endDate ? e.props.endDate : $();
      }, e.modifyHolidays = function() {
        var r;
        return (r = e.props.holidays) === null || r === void 0 ? void 0 : r.reduce(function(o, s) {
          var i = new Date(s.date);
          return Me(i) ? ye(ye([], o, !0), [H(H({}, s), { date: i })], !1) : o;
        }, []);
      }, e.calcInitialState = function() {
        var r, o = e.getPreSelection(), s = ua(e.props), i = da(e.props), c = s && $e(o, Rt(s)) ? s : i && Le(o, hn(i)) ? i : o;
        return {
          open: e.props.startOpen || !1,
          preventFocus: !1,
          inputValue: null,
          preSelection: (r = e.props.selectsRange ? e.props.startDate : e.props.selected) !== null && r !== void 0 ? r : c,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: _n(e.props.highlightDates),
          focused: !1,
          // used to focus day in inline version after month has changed, but not on
          // initial render
          shouldFocusDayInline: !1,
          isRenderAriaLiveMessage: !1,
          wasHidden: !1
        };
      }, e.resetHiddenStatus = function() {
        e.setState(H(H({}, e.state), { wasHidden: !1 }));
      }, e.setHiddenStatus = function() {
        e.setState(H(H({}, e.state), { wasHidden: !0 }));
      }, e.setHiddenStateOnVisibilityHidden = function() {
        document.visibilityState === "hidden" && e.setHiddenStatus();
      }, e.clearPreventFocusTimeout = function() {
        e.preventFocusTimeout && clearTimeout(e.preventFocusTimeout);
      }, e.safeFocus = function() {
        setTimeout(function() {
          var r, o;
          (o = (r = e.input) === null || r === void 0 ? void 0 : r.focus) === null || o === void 0 || o.call(r, { preventScroll: !0 });
        }, 0);
      }, e.safeBlur = function() {
        setTimeout(function() {
          var r, o;
          (o = (r = e.input) === null || r === void 0 ? void 0 : r.blur) === null || o === void 0 || o.call(r);
        }, 0);
      }, e.setFocus = function() {
        e.safeFocus();
      }, e.setBlur = function() {
        e.safeBlur(), e.cancelFocusInput();
      }, e.setOpen = function(r, o) {
        o === void 0 && (o = !1), e.setState({
          open: r,
          preSelection: r && e.state.open ? e.state.preSelection : e.calcInitialState().preSelection,
          lastPreSelectChange: hr
        }, function() {
          r || e.setState(function(s) {
            return {
              focused: o ? s.focused : !1
            };
          }, function() {
            !o && e.setBlur(), e.setState({ inputValue: null });
          });
        });
      }, e.inputOk = function() {
        return Se(e.state.preSelection);
      }, e.isCalendarOpen = function() {
        return e.props.open === void 0 ? e.state.open && !e.props.disabled && !e.props.readOnly : e.props.open;
      }, e.handleFocus = function(r) {
        var o, s, i = e.state.wasHidden, c = i ? e.state.open : !0;
        i && e.resetHiddenStatus(), !e.state.preventFocus && c && ((s = (o = e.props).onFocus) === null || s === void 0 || s.call(o, r), !e.props.preventOpenOnFocus && !e.props.readOnly && e.setOpen(!0)), e.setState({ focused: !0 });
      }, e.sendFocusBackToInput = function() {
        e.preventFocusTimeout && e.clearPreventFocusTimeout(), e.setState({ preventFocus: !0 }, function() {
          e.preventFocusTimeout = setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        });
      }, e.cancelFocusInput = function() {
        clearTimeout(e.inputFocusTimeout), e.inputFocusTimeout = void 0;
      }, e.deferFocusInput = function() {
        e.cancelFocusInput(), e.inputFocusTimeout = setTimeout(function() {
          return e.setFocus();
        }, 1);
      }, e.handleDropdownFocus = function() {
        e.cancelFocusInput();
      }, e.handleBlur = function(r) {
        var o, s;
        (!e.state.open || e.props.withPortal || e.props.showTimeInput) && ((s = (o = e.props).onBlur) === null || s === void 0 || s.call(o, r)), e.setState({ focused: !1 });
      }, e.handleCalendarClickOutside = function(r) {
        var o, s;
        e.props.inline || e.setOpen(!1), (s = (o = e.props).onClickOutside) === null || s === void 0 || s.call(o, r), e.props.withPortal && r.preventDefault();
      }, e.handleChange = function() {
        for (var r, o, s = [], i = 0; i < arguments.length; i++)
          s[i] = arguments[i];
        var c = s[0];
        if (!(e.props.onChangeRaw && (e.props.onChangeRaw.apply(e, s), !c || typeof c.isDefaultPrevented != "function" || c.isDefaultPrevented()))) {
          e.setState({
            inputValue: (c == null ? void 0 : c.target) instanceof HTMLInputElement ? c.target.value : null,
            lastPreSelectChange: Ec
          });
          var u = e.props, l = u.dateFormat, d = l === void 0 ? a.defaultProps.dateFormat : l, p = u.strictParsing, f = p === void 0 ? a.defaultProps.strictParsing : p, h = u.selectsRange, g = u.startDate, v = u.endDate, w = (c == null ? void 0 : c.target) instanceof HTMLInputElement ? c.target.value : "";
          if (h) {
            var b = w.split("-", 2).map(function(F) {
              return F.trim();
            }), y = b[0], S = b[1], P = ur(y ?? "", d, e.props.locale, f), T = ur(S ?? "", d, e.props.locale, f), D = (g == null ? void 0 : g.getTime()) !== (P == null ? void 0 : P.getTime()), M = (v == null ? void 0 : v.getTime()) !== (T == null ? void 0 : T.getTime());
            if (!D && !M || P && ue(P, e.props) || T && ue(T, e.props))
              return;
            (o = (r = e.props).onChange) === null || o === void 0 || o.call(r, [P, T], c);
          } else {
            var E = ur(w, d, e.props.locale, f, e.props.minDate);
            e.props.showTimeSelectOnly && e.props.selected && E && !W(E, e.props.selected) && (E = gs(e.props.selected, {
              hours: be(E),
              minutes: _e(E),
              seconds: Ee(E)
            })), (E || !w) && e.setSelected(E, c, !0);
          }
        }
      }, e.handleSelect = function(r, o, s) {
        if (e.props.shouldCloseOnSelect && !e.props.showTimeSelect && e.sendFocusBackToInput(), e.props.onChangeRaw && e.props.onChangeRaw(o), e.setSelected(r, o, !1, s), e.props.showDateSelect && e.setState({ isRenderAriaLiveMessage: !0 }), !e.props.shouldCloseOnSelect || e.props.showTimeSelect)
          e.setPreSelection(r);
        else if (!e.props.inline) {
          e.props.selectsRange || e.setOpen(!1);
          var i = e.props, c = i.startDate, u = i.endDate;
          c && !u && (e.props.swapRange || !Cn(r, c)) && e.setOpen(!1);
        }
      }, e.setSelected = function(r, o, s, i) {
        var c, u, l = r;
        if (e.props.showYearPicker) {
          if (l !== null && Yt(L(l), e.props))
            return;
        } else if (e.props.showMonthYearPicker) {
          if (l !== null && la(l, e.props))
            return;
        } else if (l !== null && ue(l, e.props))
          return;
        var d = e.props, p = d.onChange, f = d.selectsRange, h = d.startDate, g = d.endDate, v = d.selectsMultiple, w = d.selectedDates, b = d.minTime, y = d.swapRange;
        if (!Be(e.props.selected, l) || e.props.allowSameDay || f || v)
          if (l !== null && (e.props.selected && (!s || !e.props.showTimeSelect && !e.props.showTimeSelectOnly && !e.props.showTimeInput) && (l = dr(l, {
            hour: be(e.props.selected),
            minute: _e(e.props.selected),
            second: Ee(e.props.selected)
          })), !s && (e.props.showTimeSelect || e.props.showTimeSelectOnly) && b && (l = dr(l, {
            hour: b.getHours(),
            minute: b.getMinutes(),
            second: b.getSeconds()
          })), e.props.inline || e.setState({
            preSelection: l
          }), e.props.focusSelectedMonth || e.setState({ monthSelectedIn: i })), f) {
            var S = !h && !g, P = h && !g, T = h && g;
            S ? p == null || p([l, null], o) : P && (l === null ? p == null || p([null, null], o) : Cn(l, h) ? y ? p == null || p([l, h], o) : p == null || p([l, null], o) : p == null || p([h, l], o)), T && (p == null || p([l, null], o));
          } else if (v) {
            if (l !== null)
              if (!(w != null && w.length))
                p == null || p([l], o);
              else {
                var D = w.some(function(E) {
                  return W(E, l);
                });
                if (D) {
                  var M = w.filter(function(E) {
                    return !W(E, l);
                  });
                  p == null || p(M, o);
                } else
                  p == null || p(ye(ye([], w, !0), [l], !1), o);
              }
          } else
            p == null || p(l, o);
        s || ((u = (c = e.props).onSelect) === null || u === void 0 || u.call(c, l, o), e.setState({ inputValue: null }));
      }, e.setPreSelection = function(r) {
        var o = Se(e.props.minDate), s = Se(e.props.maxDate), i = !0;
        if (r) {
          var c = Rt(r);
          if (o && s)
            i = pt(r, e.props.minDate, e.props.maxDate);
          else if (o) {
            var u = Rt(e.props.minDate);
            i = Le(r, u) || Be(c, u);
          } else if (s) {
            var l = hn(e.props.maxDate);
            i = $e(r, l) || Be(c, l);
          }
        }
        i && e.setState({
          preSelection: r
        });
      }, e.toggleCalendar = function() {
        e.setOpen(!e.state.open);
      }, e.handleTimeChange = function(r) {
        var o, s;
        if (!(e.props.selectsRange || e.props.selectsMultiple)) {
          var i = e.props.selected ? e.props.selected : e.getPreSelection(), c = e.props.selected ? r : dr(i, {
            hour: be(r),
            minute: _e(r)
          });
          e.setState({
            preSelection: c
          }), (s = (o = e.props).onChange) === null || s === void 0 || s.call(o, c), e.props.shouldCloseOnSelect && !e.props.showTimeInput && (e.sendFocusBackToInput(), e.setOpen(!1)), e.props.showTimeInput && e.setOpen(!0), (e.props.showTimeSelectOnly || e.props.showTimeSelect) && e.setState({ isRenderAriaLiveMessage: !0 }), e.setState({ inputValue: null });
        }
      }, e.onInputClick = function() {
        var r, o;
        !e.props.disabled && !e.props.readOnly && e.setOpen(!0), (o = (r = e.props).onInputClick) === null || o === void 0 || o.call(r);
      }, e.onInputKeyDown = function(r) {
        var o, s, i, c, u, l;
        (s = (o = e.props).onKeyDown) === null || s === void 0 || s.call(o, r);
        var d = r.key;
        if (!e.state.open && !e.props.inline && !e.props.preventOpenOnFocus) {
          (d === _.ArrowDown || d === _.ArrowUp || d === _.Enter) && ((i = e.onInputClick) === null || i === void 0 || i.call(e));
          return;
        }
        if (e.state.open) {
          if (d === _.ArrowDown || d === _.ArrowUp) {
            r.preventDefault();
            var p = e.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : e.props.showWeekPicker && e.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : e.props.showFullMonthYearPicker || e.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]', f = ((c = e.calendar) === null || c === void 0 ? void 0 : c.containerRef.current) instanceof Element && e.calendar.containerRef.current.querySelector(p);
            f instanceof HTMLElement && f.focus({ preventScroll: !0 });
            return;
          }
          var h = $(e.state.preSelection);
          d === _.Enter ? (r.preventDefault(), r.target.blur(), e.inputOk() && e.state.lastPreSelectChange === hr ? (e.handleSelect(h, r), !e.props.shouldCloseOnSelect && e.setPreSelection(h)) : e.setOpen(!1)) : d === _.Escape ? (r.preventDefault(), r.target.blur(), e.sendFocusBackToInput(), e.setOpen(!1)) : d === _.Tab && e.setOpen(!1), e.inputOk() || (l = (u = e.props).onInputError) === null || l === void 0 || l.call(u, { code: 1, msg: fr });
        }
      }, e.onPortalKeyDown = function(r) {
        var o = r.key;
        o === _.Escape && (r.preventDefault(), e.setState({
          preventFocus: !0
        }, function() {
          e.setOpen(!1), setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        }));
      }, e.onDayKeyDown = function(r) {
        var o, s, i, c, u, l, d = e.props, p = d.minDate, f = d.maxDate, h = d.disabledKeyboardNavigation, g = d.showWeekPicker, v = d.shouldCloseOnSelect, w = d.locale, b = d.calendarStartDay, y = d.adjustDateOnChange, S = d.inline;
        if ((s = (o = e.props).onKeyDown) === null || s === void 0 || s.call(o, r), !h) {
          var P = r.key, T = r.shiftKey, D = $(e.state.preSelection), M = function(V, O) {
            var I = O;
            switch (V) {
              case _.ArrowRight:
                I = g ? Lt(O, 1) : he(O, 1);
                break;
              case _.ArrowLeft:
                I = g ? Jr(O) : es(O);
                break;
              case _.ArrowUp:
                I = Jr(O);
                break;
              case _.ArrowDown:
                I = Lt(O, 1);
                break;
              case _.PageUp:
                I = T ? nt(O, 1) : Ve(O, 1);
                break;
              case _.PageDown:
                I = T ? Ce(O, 1) : me(O, 1);
                break;
              case _.Home:
                I = Ye(O, w, b);
                break;
              case _.End:
                I = Wi(O);
                break;
            }
            return I;
          }, E = function(V, O) {
            for (var I = 40, R = V, J = !1, pe = 0, fe = M(V, O); !J; ) {
              if (pe >= I) {
                fe = O;
                break;
              }
              p && fe < p && (R = _.ArrowRight, fe = ue(p, e.props) ? M(R, fe) : p), f && fe > f && (R = _.ArrowLeft, fe = ue(f, e.props) ? M(R, fe) : f), ue(fe, e.props) ? ((R === _.PageUp || R === _.Home) && (R = _.ArrowRight), (R === _.PageDown || R === _.End) && (R = _.ArrowLeft), fe = M(R, fe)) : J = !0, pe++;
            }
            return fe;
          };
          if (P === _.Enter) {
            r.preventDefault(), e.handleSelect(D, r), !v && e.setPreSelection(D);
            return;
          } else if (P === _.Escape) {
            r.preventDefault(), e.setOpen(!1), e.inputOk() || (c = (i = e.props).onInputError) === null || c === void 0 || c.call(i, { code: 1, msg: fr });
            return;
          }
          var F = null;
          switch (P) {
            case _.ArrowLeft:
            case _.ArrowRight:
            case _.ArrowUp:
            case _.ArrowDown:
            case _.PageUp:
            case _.PageDown:
            case _.Home:
            case _.End:
              F = E(P, D);
              break;
          }
          if (!F) {
            (l = (u = e.props).onInputError) === null || l === void 0 || l.call(u, { code: 1, msg: fr });
            return;
          }
          if (r.preventDefault(), e.setState({ lastPreSelectChange: hr }), y && e.setSelected(F), e.setPreSelection(F), S) {
            var B = se(D), C = se(F), A = L(D), Y = L(F);
            B !== C || A !== Y ? e.setState({ shouldFocusDayInline: !0 }) : e.setState({ shouldFocusDayInline: !1 });
          }
        }
      }, e.onPopperKeyDown = function(r) {
        var o = r.key;
        o === _.Escape && (r.preventDefault(), e.sendFocusBackToInput());
      }, e.onClearClick = function(r) {
        r && r.preventDefault && r.preventDefault(), e.sendFocusBackToInput();
        var o = e.props, s = o.selectsRange, i = o.onChange;
        s ? i == null || i([null, null], r) : i == null || i(null, r), e.setState({ inputValue: null });
      }, e.clear = function() {
        e.onClearClick();
      }, e.onScroll = function(r) {
        typeof e.props.closeOnScroll == "boolean" && e.props.closeOnScroll ? (r.target === document || r.target === document.documentElement || r.target === document.body) && e.setOpen(!1) : typeof e.props.closeOnScroll == "function" && e.props.closeOnScroll(r) && e.setOpen(!1);
      }, e.renderCalendar = function() {
        var r, o;
        return !e.props.inline && !e.isCalendarOpen() ? null : m.createElement(yc, H({ showMonthYearDropdown: void 0, ref: function(s) {
          e.calendar = s;
        } }, e.props, e.state, { setOpen: e.setOpen, dateFormat: (r = e.props.dateFormatCalendar) !== null && r !== void 0 ? r : a.defaultProps.dateFormatCalendar, onSelect: e.handleSelect, onClickOutside: e.handleCalendarClickOutside, holidays: Zi(e.modifyHolidays()), outsideClickIgnoreClass: Pn, onDropdownFocus: e.handleDropdownFocus, onTimeChange: e.handleTimeChange, className: e.props.calendarClassName, container: e.props.calendarContainer, handleOnKeyDown: e.props.onKeyDown, handleOnDayKeyDown: e.onDayKeyDown, setPreSelection: e.setPreSelection, dropdownMode: (o = e.props.dropdownMode) !== null && o !== void 0 ? o : a.defaultProps.dropdownMode }), e.props.children);
      }, e.renderAriaLiveRegion = function() {
        var r = e.props, o = r.dateFormat, s = o === void 0 ? a.defaultProps.dateFormat : o, i = r.locale, c = e.props.showTimeInput || e.props.showTimeSelect, u = c ? "PPPPp" : "PPPP", l;
        return e.props.selectsRange ? l = "Selected start date: ".concat(le(e.props.startDate, {
          dateFormat: u,
          locale: i
        }), ". ").concat(e.props.endDate ? "End date: " + le(e.props.endDate, {
          dateFormat: u,
          locale: i
        }) : "") : e.props.showTimeSelectOnly ? l = "Selected time: ".concat(le(e.props.selected, { dateFormat: s, locale: i })) : e.props.showYearPicker ? l = "Selected year: ".concat(le(e.props.selected, { dateFormat: "yyyy", locale: i })) : e.props.showMonthYearPicker ? l = "Selected month: ".concat(le(e.props.selected, { dateFormat: "MMMM yyyy", locale: i })) : e.props.showQuarterYearPicker ? l = "Selected quarter: ".concat(le(e.props.selected, {
          dateFormat: "yyyy, QQQ",
          locale: i
        })) : l = "Selected date: ".concat(le(e.props.selected, {
          dateFormat: u,
          locale: i
        })), m.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, l);
      }, e.renderDateInput = function() {
        var r, o, s, i = ne(e.props.className, (r = {}, r[Pn] = e.state.open, r)), c = e.props.customInput || m.createElement("input", { type: "text" }), u = e.props.customInputRef || "ref", l = e.props, d = l.dateFormat, p = d === void 0 ? a.defaultProps.dateFormat : d, f = l.locale, h = typeof e.props.value == "string" ? e.props.value : typeof e.state.inputValue == "string" ? e.state.inputValue : e.props.selectsRange ? Ii(e.props.startDate, e.props.endDate, {
          dateFormat: p,
          locale: f
        }) : e.props.selectsMultiple ? Li((s = e.props.selectedDates) !== null && s !== void 0 ? s : [], {
          dateFormat: p,
          locale: f
        }) : le(e.props.selected, {
          dateFormat: p,
          locale: f
        });
        return Nn(c, (o = {}, o[u] = function(g) {
          e.input = g;
        }, o.value = h, o.onBlur = e.handleBlur, o.onChange = e.handleChange, o.onClick = e.onInputClick, o.onFocus = e.handleFocus, o.onKeyDown = e.onInputKeyDown, o.id = e.props.id, o.name = e.props.name, o.form = e.props.form, o.autoFocus = e.props.autoFocus, o.placeholder = e.props.placeholderText, o.disabled = e.props.disabled, o.autoComplete = e.props.autoComplete, o.className = ne(c.props.className, i), o.title = e.props.title, o.readOnly = e.props.readOnly, o.required = e.props.required, o.tabIndex = e.props.tabIndex, o["aria-describedby"] = e.props.ariaDescribedBy, o["aria-invalid"] = e.props.ariaInvalid, o["aria-labelledby"] = e.props.ariaLabelledBy, o["aria-required"] = e.props.ariaRequired, o));
      }, e.renderClearButton = function() {
        var r = e.props, o = r.isClearable, s = r.disabled, i = r.selected, c = r.startDate, u = r.endDate, l = r.clearButtonTitle, d = r.clearButtonClassName, p = d === void 0 ? "" : d, f = r.ariaLabelClose, h = f === void 0 ? "Close" : f, g = r.selectedDates;
        return o && (i != null || c != null || u != null || g != null && g.length) ? m.createElement("button", { type: "button", className: ne("react-datepicker__close-icon", p, { "react-datepicker__close-icon--disabled": s }), disabled: s, "aria-label": h, onClick: e.onClearClick, title: l, tabIndex: -1 }) : null;
      }, e.state = e.calcInitialState(), e.preventFocusTimeout = void 0, e;
    }
    return Object.defineProperty(a, "defaultProps", {
      get: function() {
        return {
          allowSameDay: !1,
          dateFormat: "MM/dd/yyyy",
          dateFormatCalendar: "LLLL yyyy",
          disabled: !1,
          disabledKeyboardNavigation: !1,
          dropdownMode: "scroll",
          preventOpenOnFocus: !1,
          monthsShown: 1,
          readOnly: !1,
          withPortal: !1,
          selectsDisabledDaysInRange: !1,
          shouldCloseOnSelect: !0,
          showTimeSelect: !1,
          showTimeInput: !1,
          showPreviousMonths: !1,
          showMonthYearPicker: !1,
          showFullMonthYearPicker: !1,
          showTwoColumnMonthYearPicker: !1,
          showFourColumnMonthYearPicker: !1,
          showYearPicker: !1,
          showQuarterYearPicker: !1,
          showWeekPicker: !1,
          strictParsing: !1,
          swapRange: !1,
          timeIntervals: 30,
          timeCaption: "Time",
          previousMonthAriaLabel: "Previous Month",
          previousMonthButtonLabel: "Previous Month",
          nextMonthAriaLabel: "Next Month",
          nextMonthButtonLabel: "Next Month",
          previousYearAriaLabel: "Previous Year",
          previousYearButtonLabel: "Previous Year",
          nextYearAriaLabel: "Next Year",
          nextYearButtonLabel: "Next Year",
          timeInputLabel: "Time",
          enableTabLoop: !0,
          yearItemNumber: Dt,
          focusSelectedMonth: !1,
          showPopperArrow: !0,
          excludeScrollbar: !0,
          customTimeInput: null,
          calendarStartDay: void 0,
          toggleCalendarOnIconClick: !1,
          usePointerEvent: !1
        };
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      window.addEventListener("scroll", this.onScroll, !0), document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, a.prototype.componentDidUpdate = function(t, e) {
      var r, o, s, i;
      t.inline && Sc(t.selected, this.props.selected) && this.setPreSelection(this.props.selected), this.state.monthSelectedIn !== void 0 && t.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), t.highlightDates !== this.props.highlightDates && this.setState({
        highlightDates: _n(this.props.highlightDates)
      }), !e.focused && !Be(t.selected, this.props.selected) && this.setState({ inputValue: null }), e.open !== this.state.open && (e.open === !1 && this.state.open === !0 && ((o = (r = this.props).onCalendarOpen) === null || o === void 0 || o.call(r)), e.open === !0 && this.state.open === !1 && ((i = (s = this.props).onCalendarClose) === null || i === void 0 || i.call(s)));
    }, a.prototype.componentWillUnmount = function() {
      this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, !0), document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, a.prototype.renderInputContainer = function() {
      var t = this.props, e = t.showIcon, r = t.icon, o = t.calendarIconClassname, s = t.calendarIconClassName, i = t.toggleCalendarOnIconClick, c = this.state.open;
      return o && console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props."), m.createElement(
        "div",
        { className: "react-datepicker__input-container".concat(e ? " react-datepicker__view-calendar-icon" : "") },
        e && m.createElement(bc, H({ icon: r, className: ne(s, !s && o, c && "react-datepicker-ignore-onclickoutside") }, i ? {
          onClick: this.toggleCalendar
        } : null)),
        this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(),
        this.renderDateInput(),
        this.renderClearButton()
      );
    }, a.prototype.render = function() {
      var t = this.renderCalendar();
      if (this.props.inline)
        return t;
      if (this.props.withPortal) {
        var e = this.state.open ? m.createElement(
          ha,
          { enableTabLoop: this.props.enableTabLoop },
          m.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, t)
        ) : null;
        return this.state.open && this.props.portalId && (e = m.createElement(fa, H({ portalId: this.props.portalId }, this.props), e)), m.createElement(
          "div",
          null,
          this.renderInputContainer(),
          e
        );
      }
      return m.createElement(Cc, H({}, this.props, { className: this.props.popperClassName, hidePopper: !this.isCalendarOpen(), targetComponent: this.renderInputContainer(), popperComponent: t, popperOnKeyDown: this.onPopperKeyDown, showArrow: this.props.showPopperArrow }));
    }, a;
  }(ee)
), Ec = "input", hr = "navigate";
const ze = "YYYY-MM-DD", qc = ({
  handleCloseCalendar: n,
  onDateChange: a,
  onClearDate: t,
  withQuickSelect: e,
  activeQuickSelectState: r,
  setActiveQuickSelectState: o,
  initialStartDate: s = /* @__PURE__ */ new Date(),
  initialEndDate: i = /* @__PURE__ */ new Date()
}) => {
  var F, B;
  const c = ya(), { t: u, i18n: l } = Ea("uiKit", { keyPrefix: "RangePicker" }), [d, p] = bt(() => re(s)), [f, h] = bt(() => re(i)), [g, v] = bt(re(s).format(ze)), [w, b] = bt(re(i).format(ze)), y = () => {
    if (!d || !f) {
      console.error("Please select date range!");
      return;
    }
    if (!d.isValid() || !f.isValid()) {
      console.error("Please select correct date range!");
      return;
    }
    a(d.startOf("day").toISOString(), f.endOf("day").toISOString()), n();
  }, S = (C, A) => {
    const { value: Y } = C.target;
    A === "start" ? (v(Y), re(Y).isValid() && p(re(Y))) : (b(Y), re(Y).isValid() && h(re(Y)));
  }, P = (C, A) => {
    if (!C) return;
    const Y = re(C);
    A === "start" ? (p(re(C)), v(Y.format(ze))) : (h(re(C)), b(Y.format(ze)));
  }, T = () => {
    t(), o && o(null), n();
  }, D = re(g).isValid(), M = re(w).isValid() && re(g) <= re(w);
  Bi(l.language.split("-")[0], ba(l.language));
  const E = (C) => {
    o && o(C);
    const A = re(ar[C][0]), Y = re(ar[C][1]);
    p(A), v(A.format(ze)), h(Y), b(Y.format(ze));
  };
  return /* @__PURE__ */ K.jsxs(Xe, { direction: "column", gap: "8px", children: [
    /* @__PURE__ */ K.jsx(Xe, { direction: "column", gap: "14px", children: /* @__PURE__ */ K.jsx(Sa, { variant: "caption12", color: c.palette.text.text8, children: u("Choose date range") }) }),
    /* @__PURE__ */ K.jsxs(Xe, { direction: "row", alignItems: "flex-start", gap: 4, children: [
      /* @__PURE__ */ K.jsxs(Xe, { direction: "row", gap: "8px", alignItems: "center", width: "100%", children: [
        /* @__PURE__ */ K.jsx(
          Qr,
          {
            label: u("Input"),
            error: !D,
            value: g,
            placeholder: u("Start date"),
            onChange: (C) => S(C, "start"),
            sx: {
              label: { color: `${c.palette.text.text8} !important` },
              borderColor: Fr((F = c.palette.border) == null ? void 0 : F.input, 0.14),
              input: {
                backgroundColor: c.palette.background.background2
              }
            }
          }
        ),
        /* @__PURE__ */ K.jsx("div", { children: /* @__PURE__ */ K.jsx(
          Ar,
          {
            orientation: "horizontal",
            flexItem: !0,
            sx: { width: "12px", borderColor: c.palette.text.text8 }
          }
        ) }),
        /* @__PURE__ */ K.jsx(
          Qr,
          {
            label: u("Label"),
            error: !M,
            value: w,
            placeholder: u("End date"),
            onChange: (C) => S(C, "end"),
            sx: {
              label: { color: `${c.palette.text.text8} !important` },
              borderColor: Fr((B = c.palette.border) == null ? void 0 : B.input, 0.14),
              input: {
                backgroundColor: c.palette.background.background2
              }
            }
          }
        )
      ] }),
      r || e ? /* @__PURE__ */ K.jsx(xa, { children: Object.keys(ar).map(
        (C) => {
          const A = r === C;
          return /* @__PURE__ */ K.jsx(Ma, { children: /* @__PURE__ */ K.jsxs(
            Ca,
            {
              onClick: () => E(C),
              sx: {
                color: A ? c.palette.primaryColors.accent : c.palette.lightShades.ternary
              },
              children: [
                u(C),
                A ? /* @__PURE__ */ K.jsx(Pa, {}) : null
              ]
            }
          ) }, C);
        }
      ) }) : null
    ] }),
    /* @__PURE__ */ K.jsxs(Xe, { direction: "row", gap: "16px", children: [
      /* @__PURE__ */ K.jsx(Br, { children: /* @__PURE__ */ K.jsx(
        Tn,
        {
          selected: d.toDate(),
          onChange: (C) => P(C, "start"),
          startDate: d.toDate(),
          endDate: f.toDate(),
          selectsStart: !0,
          locale: l.language,
          showFullMonthYearPicker: !0,
          inline: !0,
          renderCustomHeader: (C) => /* @__PURE__ */ K.jsx(Hr, { ...C }),
          formatWeekDay: (C) => Wr(C.substr(0, 3))
        }
      ) }),
      /* @__PURE__ */ K.jsx(Br, { children: /* @__PURE__ */ K.jsx(
        Tn,
        {
          selected: f.toDate(),
          onChange: (C) => P(C, "end"),
          startDate: d.toDate(),
          endDate: f.toDate(),
          selectsEnd: !0,
          locale: l.language,
          minDate: d.toDate(),
          showFullMonthYearPicker: !0,
          inline: !0,
          renderCustomHeader: (C) => /* @__PURE__ */ K.jsx(Hr, { ...C }),
          formatWeekDay: (C) => Wr(C.substr(0, 3))
        }
      ) }),
      /* @__PURE__ */ K.jsx(Ar, {})
    ] }),
    /* @__PURE__ */ K.jsxs(Xe, { justifyContent: "flex-end", direction: "row", gap: "8px", children: [
      /* @__PURE__ */ K.jsx(Vr, { size: "medium", variant: "secondary", onClick: T, children: u("Clear data range") }),
      /* @__PURE__ */ K.jsx(
        Vr,
        {
          size: "medium",
          variant: "primary",
          onClick: y,
          disabled: !D || !M,
          children: u("Apply changes")
        }
      )
    ] })
  ] });
};
export {
  qc as RangePicker
};
