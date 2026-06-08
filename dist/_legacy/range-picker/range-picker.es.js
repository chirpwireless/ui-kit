import { jsxRuntimeExports as H } from "../../jsx-runtime-BgepH7Pb.js";
import * as P from "react";
import m, { useLayoutEffect as Ur, cloneElement as $r, createRef as we, Component as j, useRef as Ht, useCallback as bn, useEffect as _n, createElement as kn, useState as tt } from "react";
import { useTheme as Sn, Stack as Te, alpha as ar, Divider as or, capitalize as ir } from "@mui/material";
import { differenceInDays as Cn } from "date-fns";
import { addDays as Me } from "date-fns/addDays";
import { addHours as xn } from "date-fns/addHours";
import { addMinutes as Bt } from "date-fns/addMinutes";
import { addMonths as be } from "date-fns/addMonths";
import { addQuarters as zr } from "date-fns/addQuarters";
import { addSeconds as Mn } from "date-fns/addSeconds";
import { addWeeks as Vt } from "date-fns/addWeeks";
import { addYears as ge } from "date-fns/addYears";
import { differenceInCalendarDays as ht } from "date-fns/differenceInCalendarDays";
import { differenceInCalendarMonths as mt } from "date-fns/differenceInCalendarMonths";
import { differenceInCalendarQuarters as vt } from "date-fns/differenceInCalendarQuarters";
import { differenceInCalendarYears as gt } from "date-fns/differenceInCalendarYears";
import { endOfDay as Xr } from "date-fns/endOfDay";
import { endOfMonth as Gr } from "date-fns/endOfMonth";
import { endOfWeek as En } from "date-fns/endOfWeek";
import { endOfYear as qr } from "date-fns/endOfYear";
import { longFormatters as Pn, format as sr } from "date-fns/format";
import { getDate as lr } from "date-fns/getDate";
import { getDay as On } from "date-fns/getDay";
import { getHours as le } from "date-fns/getHours";
import { getISOWeek as Rn } from "date-fns/getISOWeek";
import { getMinutes as ce } from "date-fns/getMinutes";
import { getMonth as q } from "date-fns/getMonth";
import { getQuarter as Ue } from "date-fns/getQuarter";
import { getSeconds as fe } from "date-fns/getSeconds";
import { getTime as Kt } from "date-fns/getTime";
import { getYear as I } from "date-fns/getYear";
import { isAfter as _e } from "date-fns/isAfter";
import { isBefore as Re } from "date-fns/isBefore";
import { isDate as De } from "date-fns/isDate";
import { isEqual as Nn } from "date-fns/isEqual";
import { isSameDay as Tn } from "date-fns/isSameDay";
import { isSameMonth as In } from "date-fns/isSameMonth";
import { isSameQuarter as Ln } from "date-fns/isSameQuarter";
import { isSameYear as Yn } from "date-fns/isSameYear";
import { isValid as Qt } from "date-fns/isValid";
import { isWithinInterval as ze } from "date-fns/isWithinInterval";
import { max as cr } from "date-fns/max";
import { min as ur } from "date-fns/min";
import { parse as Ot } from "date-fns/parse";
import { parseISO as An } from "date-fns/parseISO";
import { set as Fn } from "date-fns/set";
import { setHours as lt } from "date-fns/setHours";
import { setMinutes as ct } from "date-fns/setMinutes";
import { setMonth as ae } from "date-fns/setMonth";
import { setQuarter as Le } from "date-fns/setQuarter";
import { setSeconds as ut } from "date-fns/setSeconds";
import { setYear as oe } from "date-fns/setYear";
import { startOfDay as zt } from "date-fns/startOfDay";
import { startOfMonth as Zr } from "date-fns/startOfMonth";
import { startOfQuarter as Wn } from "date-fns/startOfQuarter";
import { startOfWeek as Hn } from "date-fns/startOfWeek";
import { startOfYear as Xt } from "date-fns/startOfYear";
import { subDays as Bn } from "date-fns/subDays";
import { subMonths as Ee } from "date-fns/subMonths";
import { subQuarters as Jr } from "date-fns/subQuarters";
import { subWeeks as pr } from "date-fns/subWeeks";
import { subYears as Fe } from "date-fns/subYears";
import { toDate as en } from "date-fns/toDate";
import * as Vn from "react-dom";
import Kn from "react-dom";
import { hooks as $ } from "../../moment-DHYryOIn.js";
/* empty css                              */
import { CustomDatepickerHeader as dr } from "./components/custom-header.es.js";
import { CalendarQuickSelect as Qn, CalendarQuickSelectItem as jn, CalendarQuickSelectButton as Un, DatePickerWrapper as fr } from "./styles.es.js";
import { TextField as hr } from "../text-field/index.es.js";
import { Button as mr } from "../button/index.es.js";
import { Typography as $n } from "../typogrpahy/index.es.js";
import { useTranslation as zn } from "react-i18next";
import { getLocaleObj as Xn } from "./helpers/get-locale.es.js";
import { QUICK_SELECT_OPTIONS as Rt } from "./constants.es.js";
import { Checkmark as Gn } from "../../assets/icons/Checkmark/index.es.js";
function tn(a) {
  var o, t, e = "";
  if (typeof a == "string" || typeof a == "number") e += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var r = a.length;
    for (o = 0; o < r; o++) a[o] && (t = tn(a[o])) && (e && (e += " "), e += t);
  } else for (t in a) a[t] && (e && (e += " "), e += t);
  return e;
}
function z() {
  for (var a, o, t = 0, e = "", r = arguments.length; t < r; t++) (a = arguments[t]) && (o = tn(a)) && (e && (e += " "), e += o);
  return e;
}
function St() {
  return typeof window < "u";
}
function Ve(a) {
  return rn(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function Z(a) {
  var o;
  return (a == null || (o = a.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function pe(a) {
  var o;
  return (o = (rn(a) ? a.ownerDocument : a.document) || window.document) == null ? void 0 : o.documentElement;
}
function rn(a) {
  return St() ? a instanceof Node || a instanceof Z(a).Node : !1;
}
function X(a) {
  return St() ? a instanceof Element || a instanceof Z(a).Element : !1;
}
function me(a) {
  return St() ? a instanceof HTMLElement || a instanceof Z(a).HTMLElement : !1;
}
function vr(a) {
  return !St() || typeof ShadowRoot > "u" ? !1 : a instanceof ShadowRoot || a instanceof Z(a).ShadowRoot;
}
function qe(a) {
  const {
    overflow: o,
    overflowX: t,
    overflowY: e,
    display: r
  } = te(a);
  return /auto|scroll|overlay|hidden|clip/.test(o + e + t) && r !== "inline" && r !== "contents";
}
function qn(a) {
  return /^(table|td|th)$/.test(Ve(a));
}
function Ct(a) {
  try {
    if (a.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return a.matches(":modal");
  } catch {
    return !1;
  }
}
const Zn = /transform|translate|scale|rotate|perspective|filter/, Jn = /paint|layout|strict|content/, Se = (a) => !!a && a !== "none";
let Nt;
function Gt(a) {
  const o = X(a) ? te(a) : a;
  return Se(o.transform) || Se(o.translate) || Se(o.scale) || Se(o.rotate) || Se(o.perspective) || !qt() && (Se(o.backdropFilter) || Se(o.filter)) || Zn.test(o.willChange || "") || Jn.test(o.contain || "");
}
function ea(a) {
  let o = ke(a);
  for (; me(o) && !We(o); ) {
    if (Gt(o))
      return o;
    if (Ct(o))
      return null;
    o = ke(o);
  }
  return null;
}
function qt() {
  return Nt == null && (Nt = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Nt;
}
function We(a) {
  return /^(html|body|#document)$/.test(Ve(a));
}
function te(a) {
  return Z(a).getComputedStyle(a);
}
function xt(a) {
  return X(a) ? {
    scrollLeft: a.scrollLeft,
    scrollTop: a.scrollTop
  } : {
    scrollLeft: a.scrollX,
    scrollTop: a.scrollY
  };
}
function ke(a) {
  if (Ve(a) === "html")
    return a;
  const o = (
    // Step into the shadow DOM of the parent of a slotted node.
    a.assignedSlot || // DOM Element detected.
    a.parentNode || // ShadowRoot detected.
    vr(a) && a.host || // Fallback.
    pe(a)
  );
  return vr(o) ? o.host : o;
}
function nn(a) {
  const o = ke(a);
  return We(o) ? a.ownerDocument ? a.ownerDocument.body : a.body : me(o) && qe(o) ? o : nn(o);
}
function Xe(a, o, t) {
  var e;
  o === void 0 && (o = []), t === void 0 && (t = !0);
  const r = nn(a), n = r === ((e = a.ownerDocument) == null ? void 0 : e.body), i = Z(r);
  if (n) {
    const s = jt(i);
    return o.concat(i, i.visualViewport || [], qe(r) ? r : [], s && t ? Xe(s) : []);
  } else
    return o.concat(r, Xe(r, [], t));
}
function jt(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
const He = Math.min, Pe = Math.max, Dt = Math.round, rt = Math.floor, ue = (a) => ({
  x: a,
  y: a
}), ta = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ra(a, o, t) {
  return Pe(a, He(o, t));
}
function Mt(a, o) {
  return typeof a == "function" ? a(o) : a;
}
function Be(a) {
  return a.split("-")[0];
}
function Ze(a) {
  return a.split("-")[1];
}
function na(a) {
  return a === "x" ? "y" : "x";
}
function Zt(a) {
  return a === "y" ? "height" : "width";
}
function Ce(a) {
  const o = a[0];
  return o === "t" || o === "b" ? "y" : "x";
}
function Jt(a) {
  return na(Ce(a));
}
function aa(a, o, t) {
  t === void 0 && (t = !1);
  const e = Ze(a), r = Jt(a), n = Zt(r);
  let i = r === "x" ? e === (t ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return o.reference[n] > o.floating[n] && (i = yt(i)), [i, yt(i)];
}
function oa(a) {
  const o = yt(a);
  return [Ut(a), o, Ut(o)];
}
function Ut(a) {
  return a.includes("start") ? a.replace("start", "end") : a.replace("end", "start");
}
const gr = ["left", "right"], Dr = ["right", "left"], ia = ["top", "bottom"], sa = ["bottom", "top"];
function la(a, o, t) {
  switch (a) {
    case "top":
    case "bottom":
      return t ? o ? Dr : gr : o ? gr : Dr;
    case "left":
    case "right":
      return o ? ia : sa;
    default:
      return [];
  }
}
function ca(a, o, t, e) {
  const r = Ze(a);
  let n = la(Be(a), t === "start", e);
  return r && (n = n.map((i) => i + "-" + r), o && (n = n.concat(n.map(Ut)))), n;
}
function yt(a) {
  const o = Be(a);
  return ta[o] + a.slice(o.length);
}
function ua(a) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...a
  };
}
function an(a) {
  return typeof a != "number" ? ua(a) : {
    top: a,
    right: a,
    bottom: a,
    left: a
  };
}
function wt(a) {
  const {
    x: o,
    y: t,
    width: e,
    height: r
  } = a;
  return {
    width: e,
    height: r,
    top: t,
    left: o,
    right: o + e,
    bottom: t + r,
    x: o,
    y: t
  };
}
var pa = typeof document < "u", da = function() {
}, bt = pa ? Ur : da;
const fa = {
  ...P
}, ha = fa.useInsertionEffect, ma = ha || ((a) => a());
function va(a) {
  const o = P.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return ma(() => {
    o.current = a;
  }), P.useCallback(function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    return o.current == null ? void 0 : o.current(...e);
  }, []);
}
function yr(a, o, t) {
  let {
    reference: e,
    floating: r
  } = a;
  const n = Ce(o), i = Jt(o), s = Zt(i), l = Be(o), u = n === "y", c = e.x + e.width / 2 - r.width / 2, p = e.y + e.height / 2 - r.height / 2, d = e[s] / 2 - r[s] / 2;
  let f;
  switch (l) {
    case "top":
      f = {
        x: c,
        y: e.y - r.height
      };
      break;
    case "bottom":
      f = {
        x: c,
        y: e.y + e.height
      };
      break;
    case "right":
      f = {
        x: e.x + e.width,
        y: p
      };
      break;
    case "left":
      f = {
        x: e.x - r.width,
        y: p
      };
      break;
    default:
      f = {
        x: e.x,
        y: e.y
      };
  }
  switch (Ze(o)) {
    case "start":
      f[i] -= d * (t && u ? -1 : 1);
      break;
    case "end":
      f[i] += d * (t && u ? -1 : 1);
      break;
  }
  return f;
}
async function ga(a, o) {
  var t;
  o === void 0 && (o = {});
  const {
    x: e,
    y: r,
    platform: n,
    rects: i,
    elements: s,
    strategy: l
  } = a, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: d = !1,
    padding: f = 0
  } = Mt(o, a), h = an(f), v = s[d ? p === "floating" ? "reference" : "floating" : p], D = wt(await n.getClippingRect({
    element: (t = await (n.isElement == null ? void 0 : n.isElement(v))) == null || t ? v : v.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), _ = p === "floating" ? {
    x: e,
    y: r,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, b = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(s.floating)), k = await (n.isElement == null ? void 0 : n.isElement(b)) ? await (n.getScale == null ? void 0 : n.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = wt(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: _,
    offsetParent: b,
    strategy: l
  }) : _);
  return {
    top: (D.top - S.top + h.top) / k.y,
    bottom: (S.bottom - D.bottom + h.bottom) / k.y,
    left: (D.left - S.left + h.left) / k.x,
    right: (S.right - D.right + h.right) / k.x
  };
}
const Da = 50, ya = async (a, o, t) => {
  const {
    placement: e = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: i
  } = t, s = i.detectOverflow ? i : {
    ...i,
    detectOverflow: ga
  }, l = await (i.isRTL == null ? void 0 : i.isRTL(o));
  let u = await i.getElementRects({
    reference: a,
    floating: o,
    strategy: r
  }), {
    x: c,
    y: p
  } = yr(u, e, l), d = e, f = 0;
  const h = {};
  for (let g = 0; g < n.length; g++) {
    const v = n[g];
    if (!v)
      continue;
    const {
      name: D,
      fn: _
    } = v, {
      x: b,
      y: k,
      data: S,
      reset: C
    } = await _({
      x: c,
      y: p,
      initialPlacement: e,
      placement: d,
      strategy: r,
      middlewareData: h,
      rects: u,
      platform: s,
      elements: {
        reference: a,
        floating: o
      }
    });
    c = b ?? c, p = k ?? p, h[D] = {
      ...h[D],
      ...S
    }, C && f < Da && (f++, typeof C == "object" && (C.placement && (d = C.placement), C.rects && (u = C.rects === !0 ? await i.getElementRects({
      reference: a,
      floating: o,
      strategy: r
    }) : C.rects), {
      x: c,
      y: p
    } = yr(u, d, l)), g = -1);
  }
  return {
    x: c,
    y: p,
    placement: d,
    strategy: r,
    middlewareData: h
  };
}, wa = (a) => ({
  name: "arrow",
  options: a,
  async fn(o) {
    const {
      x: t,
      y: e,
      placement: r,
      rects: n,
      platform: i,
      elements: s,
      middlewareData: l
    } = o, {
      element: u,
      padding: c = 0
    } = Mt(a, o) || {};
    if (u == null)
      return {};
    const p = an(c), d = {
      x: t,
      y: e
    }, f = Jt(r), h = Zt(f), g = await i.getDimensions(u), v = f === "y", D = v ? "top" : "left", _ = v ? "bottom" : "right", b = v ? "clientHeight" : "clientWidth", k = n.reference[h] + n.reference[f] - d[f] - n.floating[h], S = d[f] - n.reference[f], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let M = C ? C[b] : 0;
    (!M || !await (i.isElement == null ? void 0 : i.isElement(C))) && (M = s.floating[b] || n.floating[h]);
    const O = k / 2 - S / 2, x = M / 2 - g[h] / 2 - 1, L = He(p[D], x), V = He(p[_], x), w = L, Y = M - g[h] - V, N = M / 2 - g[h] / 2 + O, W = ra(w, N, Y), E = !l.arrow && Ze(r) != null && N !== W && n.reference[h] / 2 - (N < w ? L : V) - g[h] / 2 < 0, T = E ? N < w ? N - w : N - Y : 0;
    return {
      [f]: d[f] + T,
      data: {
        [f]: W,
        centerOffset: N - W - T,
        ...E && {
          alignmentOffset: T
        }
      },
      reset: E
    };
  }
}), ba = function(a) {
  return a === void 0 && (a = {}), {
    name: "flip",
    options: a,
    async fn(o) {
      var t, e;
      const {
        placement: r,
        middlewareData: n,
        rects: i,
        initialPlacement: s,
        platform: l,
        elements: u
      } = o, {
        mainAxis: c = !0,
        crossAxis: p = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...v
      } = Mt(a, o);
      if ((t = n.arrow) != null && t.alignmentOffset)
        return {};
      const D = Be(r), _ = Ce(s), b = Be(s) === s, k = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), S = d || (b || !g ? [yt(s)] : oa(s)), C = h !== "none";
      !d && C && S.push(...ca(s, g, h, k));
      const M = [s, ...S], O = await l.detectOverflow(o, v), x = [];
      let L = ((e = n.flip) == null ? void 0 : e.overflows) || [];
      if (c && x.push(O[D]), p) {
        const N = aa(r, i, k);
        x.push(O[N[0]], O[N[1]]);
      }
      if (L = [...L, {
        placement: r,
        overflows: x
      }], !x.every((N) => N <= 0)) {
        var V, w;
        const N = (((V = n.flip) == null ? void 0 : V.index) || 0) + 1, W = M[N];
        if (W && (!(p === "alignment" ? _ !== Ce(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        L.every((R) => Ce(R.placement) === _ ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: N,
              overflows: L
            },
            reset: {
              placement: W
            }
          };
        let E = (w = L.filter((T) => T.overflows[0] <= 0).sort((T, R) => T.overflows[1] - R.overflows[1])[0]) == null ? void 0 : w.placement;
        if (!E)
          switch (f) {
            case "bestFit": {
              var Y;
              const T = (Y = L.filter((R) => {
                if (C) {
                  const Q = Ce(R.placement);
                  return Q === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Q === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((Q) => Q > 0).reduce((Q, re) => Q + re, 0)]).sort((R, Q) => R[1] - Q[1])[0]) == null ? void 0 : Y[0];
              T && (E = T);
              break;
            }
            case "initialPlacement":
              E = s;
              break;
          }
        if (r !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
}, _a = /* @__PURE__ */ new Set(["left", "top"]);
async function ka(a, o) {
  const {
    placement: t,
    platform: e,
    elements: r
  } = a, n = await (e.isRTL == null ? void 0 : e.isRTL(r.floating)), i = Be(t), s = Ze(t), l = Ce(t) === "y", u = _a.has(i) ? -1 : 1, c = n && l ? -1 : 1, p = Mt(o, a);
  let {
    mainAxis: d,
    crossAxis: f,
    alignmentAxis: h
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return s && typeof h == "number" && (f = s === "end" ? h * -1 : h), l ? {
    x: f * c,
    y: d * u
  } : {
    x: d * u,
    y: f * c
  };
}
const Sa = function(a) {
  return a === void 0 && (a = 0), {
    name: "offset",
    options: a,
    async fn(o) {
      var t, e;
      const {
        x: r,
        y: n,
        placement: i,
        middlewareData: s
      } = o, l = await ka(o, a);
      return i === ((t = s.offset) == null ? void 0 : t.placement) && (e = s.arrow) != null && e.alignmentOffset ? {} : {
        x: r + l.x,
        y: n + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
};
function on(a) {
  const o = te(a);
  let t = parseFloat(o.width) || 0, e = parseFloat(o.height) || 0;
  const r = me(a), n = r ? a.offsetWidth : t, i = r ? a.offsetHeight : e, s = Dt(t) !== n || Dt(e) !== i;
  return s && (t = n, e = i), {
    width: t,
    height: e,
    $: s
  };
}
function er(a) {
  return X(a) ? a : a.contextElement;
}
function Ye(a) {
  const o = er(a);
  if (!me(o))
    return ue(1);
  const t = o.getBoundingClientRect(), {
    width: e,
    height: r,
    $: n
  } = on(o);
  let i = (n ? Dt(t.width) : t.width) / e, s = (n ? Dt(t.height) : t.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Ca = /* @__PURE__ */ ue(0);
function sn(a) {
  const o = Z(a);
  return !qt() || !o.visualViewport ? Ca : {
    x: o.visualViewport.offsetLeft,
    y: o.visualViewport.offsetTop
  };
}
function xa(a, o, t) {
  return o === void 0 && (o = !1), !t || o && t !== Z(a) ? !1 : o;
}
function Ne(a, o, t, e) {
  o === void 0 && (o = !1), t === void 0 && (t = !1);
  const r = a.getBoundingClientRect(), n = er(a);
  let i = ue(1);
  o && (e ? X(e) && (i = Ye(e)) : i = Ye(a));
  const s = xa(n, t, e) ? sn(n) : ue(0);
  let l = (r.left + s.x) / i.x, u = (r.top + s.y) / i.y, c = r.width / i.x, p = r.height / i.y;
  if (n) {
    const d = Z(n), f = e && X(e) ? Z(e) : e;
    let h = d, g = jt(h);
    for (; g && e && f !== h; ) {
      const v = Ye(g), D = g.getBoundingClientRect(), _ = te(g), b = D.left + (g.clientLeft + parseFloat(_.paddingLeft)) * v.x, k = D.top + (g.clientTop + parseFloat(_.paddingTop)) * v.y;
      l *= v.x, u *= v.y, c *= v.x, p *= v.y, l += b, u += k, h = Z(g), g = jt(h);
    }
  }
  return wt({
    width: c,
    height: p,
    x: l,
    y: u
  });
}
function Et(a, o) {
  const t = xt(a).scrollLeft;
  return o ? o.left + t : Ne(pe(a)).left + t;
}
function ln(a, o) {
  const t = a.getBoundingClientRect(), e = t.left + o.scrollLeft - Et(a, t), r = t.top + o.scrollTop;
  return {
    x: e,
    y: r
  };
}
function Ma(a) {
  let {
    elements: o,
    rect: t,
    offsetParent: e,
    strategy: r
  } = a;
  const n = r === "fixed", i = pe(e), s = o ? Ct(o.floating) : !1;
  if (e === i || s && n)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = ue(1);
  const c = ue(0), p = me(e);
  if ((p || !p && !n) && ((Ve(e) !== "body" || qe(i)) && (l = xt(e)), p)) {
    const f = Ne(e);
    u = Ye(e), c.x = f.x + e.clientLeft, c.y = f.y + e.clientTop;
  }
  const d = i && !p && !n ? ln(i, l) : ue(0);
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - l.scrollLeft * u.x + c.x + d.x,
    y: t.y * u.y - l.scrollTop * u.y + c.y + d.y
  };
}
function Ea(a) {
  return Array.from(a.getClientRects());
}
function Pa(a) {
  const o = pe(a), t = xt(a), e = a.ownerDocument.body, r = Pe(o.scrollWidth, o.clientWidth, e.scrollWidth, e.clientWidth), n = Pe(o.scrollHeight, o.clientHeight, e.scrollHeight, e.clientHeight);
  let i = -t.scrollLeft + Et(a);
  const s = -t.scrollTop;
  return te(e).direction === "rtl" && (i += Pe(o.clientWidth, e.clientWidth) - r), {
    width: r,
    height: n,
    x: i,
    y: s
  };
}
const wr = 25;
function Oa(a, o) {
  const t = Z(a), e = pe(a), r = t.visualViewport;
  let n = e.clientWidth, i = e.clientHeight, s = 0, l = 0;
  if (r) {
    n = r.width, i = r.height;
    const c = qt();
    (!c || c && o === "fixed") && (s = r.offsetLeft, l = r.offsetTop);
  }
  const u = Et(e);
  if (u <= 0) {
    const c = e.ownerDocument, p = c.body, d = getComputedStyle(p), f = c.compatMode === "CSS1Compat" && parseFloat(d.marginLeft) + parseFloat(d.marginRight) || 0, h = Math.abs(e.clientWidth - p.clientWidth - f);
    h <= wr && (n -= h);
  } else u <= wr && (n += u);
  return {
    width: n,
    height: i,
    x: s,
    y: l
  };
}
function Ra(a, o) {
  const t = Ne(a, !0, o === "fixed"), e = t.top + a.clientTop, r = t.left + a.clientLeft, n = me(a) ? Ye(a) : ue(1), i = a.clientWidth * n.x, s = a.clientHeight * n.y, l = r * n.x, u = e * n.y;
  return {
    width: i,
    height: s,
    x: l,
    y: u
  };
}
function br(a, o, t) {
  let e;
  if (o === "viewport")
    e = Oa(a, t);
  else if (o === "document")
    e = Pa(pe(a));
  else if (X(o))
    e = Ra(o, t);
  else {
    const r = sn(a);
    e = {
      x: o.x - r.x,
      y: o.y - r.y,
      width: o.width,
      height: o.height
    };
  }
  return wt(e);
}
function cn(a, o) {
  const t = ke(a);
  return t === o || !X(t) || We(t) ? !1 : te(t).position === "fixed" || cn(t, o);
}
function Na(a, o) {
  const t = o.get(a);
  if (t)
    return t;
  let e = Xe(a, [], !1).filter((s) => X(s) && Ve(s) !== "body"), r = null;
  const n = te(a).position === "fixed";
  let i = n ? ke(a) : a;
  for (; X(i) && !We(i); ) {
    const s = te(i), l = Gt(i);
    !l && s.position === "fixed" && (r = null), (n ? !l && !r : !l && s.position === "static" && !!r && (r.position === "absolute" || r.position === "fixed") || qe(i) && !l && cn(a, i)) ? e = e.filter((c) => c !== i) : r = s, i = ke(i);
  }
  return o.set(a, e), e;
}
function Ta(a) {
  let {
    element: o,
    boundary: t,
    rootBoundary: e,
    strategy: r
  } = a;
  const i = [...t === "clippingAncestors" ? Ct(o) ? [] : Na(o, this._c) : [].concat(t), e], s = br(o, i[0], r);
  let l = s.top, u = s.right, c = s.bottom, p = s.left;
  for (let d = 1; d < i.length; d++) {
    const f = br(o, i[d], r);
    l = Pe(f.top, l), u = He(f.right, u), c = He(f.bottom, c), p = Pe(f.left, p);
  }
  return {
    width: u - p,
    height: c - l,
    x: p,
    y: l
  };
}
function Ia(a) {
  const {
    width: o,
    height: t
  } = on(a);
  return {
    width: o,
    height: t
  };
}
function La(a, o, t) {
  const e = me(o), r = pe(o), n = t === "fixed", i = Ne(a, !0, n, o);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ue(0);
  function u() {
    l.x = Et(r);
  }
  if (e || !e && !n)
    if ((Ve(o) !== "body" || qe(r)) && (s = xt(o)), e) {
      const f = Ne(o, !0, n, o);
      l.x = f.x + o.clientLeft, l.y = f.y + o.clientTop;
    } else r && u();
  n && !e && r && u();
  const c = r && !e && !n ? ln(r, s) : ue(0), p = i.left + s.scrollLeft - l.x - c.x, d = i.top + s.scrollTop - l.y - c.y;
  return {
    x: p,
    y: d,
    width: i.width,
    height: i.height
  };
}
function Tt(a) {
  return te(a).position === "static";
}
function _r(a, o) {
  if (!me(a) || te(a).position === "fixed")
    return null;
  if (o)
    return o(a);
  let t = a.offsetParent;
  return pe(a) === t && (t = t.ownerDocument.body), t;
}
function un(a, o) {
  const t = Z(a);
  if (Ct(a))
    return t;
  if (!me(a)) {
    let r = ke(a);
    for (; r && !We(r); ) {
      if (X(r) && !Tt(r))
        return r;
      r = ke(r);
    }
    return t;
  }
  let e = _r(a, o);
  for (; e && qn(e) && Tt(e); )
    e = _r(e, o);
  return e && We(e) && Tt(e) && !Gt(e) ? t : e || ea(a) || t;
}
const Ya = async function(a) {
  const o = this.getOffsetParent || un, t = this.getDimensions, e = await t(a.floating);
  return {
    reference: La(a.reference, await o(a.floating), a.strategy),
    floating: {
      x: 0,
      y: 0,
      width: e.width,
      height: e.height
    }
  };
};
function Aa(a) {
  return te(a).direction === "rtl";
}
const Fa = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ma,
  getDocumentElement: pe,
  getClippingRect: Ta,
  getOffsetParent: un,
  getElementRects: Ya,
  getClientRects: Ea,
  getDimensions: Ia,
  getScale: Ye,
  isElement: X,
  isRTL: Aa
};
function pn(a, o) {
  return a.x === o.x && a.y === o.y && a.width === o.width && a.height === o.height;
}
function Wa(a, o) {
  let t = null, e;
  const r = pe(a);
  function n() {
    var s;
    clearTimeout(e), (s = t) == null || s.disconnect(), t = null;
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), n();
    const u = a.getBoundingClientRect(), {
      left: c,
      top: p,
      width: d,
      height: f
    } = u;
    if (s || o(), !d || !f)
      return;
    const h = rt(p), g = rt(r.clientWidth - (c + d)), v = rt(r.clientHeight - (p + f)), D = rt(c), b = {
      rootMargin: -h + "px " + -g + "px " + -v + "px " + -D + "px",
      threshold: Pe(0, He(1, l)) || 1
    };
    let k = !0;
    function S(C) {
      const M = C[0].intersectionRatio;
      if (M !== l) {
        if (!k)
          return i();
        M ? i(!1, M) : e = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !pn(u, a.getBoundingClientRect()) && i(), k = !1;
    }
    try {
      t = new IntersectionObserver(S, {
        ...b,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(S, b);
    }
    t.observe(a);
  }
  return i(!0), n;
}
function Ha(a, o, t, e) {
  e === void 0 && (e = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: n = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = e, u = er(a), c = r || n ? [...u ? Xe(u) : [], ...o ? Xe(o) : []] : [];
  c.forEach((D) => {
    r && D.addEventListener("scroll", t, {
      passive: !0
    }), n && D.addEventListener("resize", t);
  });
  const p = u && s ? Wa(u, t) : null;
  let d = -1, f = null;
  i && (f = new ResizeObserver((D) => {
    let [_] = D;
    _ && _.target === u && f && o && (f.unobserve(o), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var b;
      (b = f) == null || b.observe(o);
    })), t();
  }), u && !l && f.observe(u), o && f.observe(o));
  let h, g = l ? Ne(a) : null;
  l && v();
  function v() {
    const D = Ne(a);
    g && !pn(g, D) && t(), g = D, h = requestAnimationFrame(v);
  }
  return t(), () => {
    var D;
    c.forEach((_) => {
      r && _.removeEventListener("scroll", t), n && _.removeEventListener("resize", t);
    }), p == null || p(), (D = f) == null || D.disconnect(), f = null, l && cancelAnimationFrame(h);
  };
}
const Ba = Sa, Va = ba, kr = wa, Ka = (a, o, t) => {
  const e = /* @__PURE__ */ new Map(), r = {
    platform: Fa,
    ...t
  }, n = {
    ...r.platform,
    _c: e
  };
  return ya(a, o, {
    ...r,
    platform: n
  });
};
var Qa = typeof document < "u", ja = function() {
}, pt = Qa ? Ur : ja;
function _t(a, o) {
  if (a === o)
    return !0;
  if (typeof a != typeof o)
    return !1;
  if (typeof a == "function" && a.toString() === o.toString())
    return !0;
  let t, e, r;
  if (a && o && typeof a == "object") {
    if (Array.isArray(a)) {
      if (t = a.length, t !== o.length) return !1;
      for (e = t; e-- !== 0; )
        if (!_t(a[e], o[e]))
          return !1;
      return !0;
    }
    if (r = Object.keys(a), t = r.length, t !== Object.keys(o).length)
      return !1;
    for (e = t; e-- !== 0; )
      if (!{}.hasOwnProperty.call(o, r[e]))
        return !1;
    for (e = t; e-- !== 0; ) {
      const n = r[e];
      if (!(n === "_owner" && a.$$typeof) && !_t(a[n], o[n]))
        return !1;
    }
    return !0;
  }
  return a !== a && o !== o;
}
function dn(a) {
  return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Sr(a, o) {
  const t = dn(a);
  return Math.round(o * t) / t;
}
function It(a) {
  const o = P.useRef(a);
  return pt(() => {
    o.current = a;
  }), o;
}
function Ua(a) {
  a === void 0 && (a = {});
  const {
    placement: o = "bottom",
    strategy: t = "absolute",
    middleware: e = [],
    platform: r,
    elements: {
      reference: n,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: u
  } = a, [c, p] = P.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: o,
    middlewareData: {},
    isPositioned: !1
  }), [d, f] = P.useState(e);
  _t(d, e) || f(e);
  const [h, g] = P.useState(null), [v, D] = P.useState(null), _ = P.useCallback((R) => {
    R !== C.current && (C.current = R, g(R));
  }, []), b = P.useCallback((R) => {
    R !== M.current && (M.current = R, D(R));
  }, []), k = n || h, S = i || v, C = P.useRef(null), M = P.useRef(null), O = P.useRef(c), x = l != null, L = It(l), V = It(r), w = It(u), Y = P.useCallback(() => {
    if (!C.current || !M.current)
      return;
    const R = {
      placement: o,
      strategy: t,
      middleware: d
    };
    V.current && (R.platform = V.current), Ka(C.current, M.current, R).then((Q) => {
      const re = {
        ...Q,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: w.current !== !1
      };
      N.current && !_t(O.current, re) && (O.current = re, Vn.flushSync(() => {
        p(re);
      }));
    });
  }, [d, o, t, V, w]);
  pt(() => {
    u === !1 && O.current.isPositioned && (O.current.isPositioned = !1, p((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [u]);
  const N = P.useRef(!1);
  pt(() => (N.current = !0, () => {
    N.current = !1;
  }), []), pt(() => {
    if (k && (C.current = k), S && (M.current = S), k && S) {
      if (L.current)
        return L.current(k, S, Y);
      Y();
    }
  }, [k, S, Y, L, x]);
  const W = P.useMemo(() => ({
    reference: C,
    floating: M,
    setReference: _,
    setFloating: b
  }), [_, b]), E = P.useMemo(() => ({
    reference: k,
    floating: S
  }), [k, S]), T = P.useMemo(() => {
    const R = {
      position: t,
      left: 0,
      top: 0
    };
    if (!E.floating)
      return R;
    const Q = Sr(E.floating, c.x), re = Sr(E.floating, c.y);
    return s ? {
      ...R,
      transform: "translate(" + Q + "px, " + re + "px)",
      ...dn(E.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: Q,
      top: re
    };
  }, [t, s, E.floating, c.x, c.y]);
  return P.useMemo(() => ({
    ...c,
    update: Y,
    refs: W,
    elements: E,
    floatingStyles: T
  }), [c, Y, W, E, T]);
}
const $a = (a) => {
  function o(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: a,
    fn(t) {
      const {
        element: e,
        padding: r
      } = typeof a == "function" ? a(t) : a;
      return e && o(e) ? e.current != null ? kr({
        element: e.current,
        padding: r
      }).fn(t) : {} : e ? kr({
        element: e,
        padding: r
      }).fn(t) : {};
    }
  };
}, za = (a, o) => {
  const t = Ba(a);
  return {
    name: t.name,
    fn: t.fn,
    options: [a, o]
  };
}, Xa = (a, o) => {
  const t = Va(a);
  return {
    name: t.name,
    fn: t.fn,
    options: [a, o]
  };
}, Ga = (a, o) => {
  const t = $a(a);
  return {
    name: t.name,
    fn: t.fn,
    options: [a, o]
  };
}, qa = {
  ...P
};
let Cr = !1, Za = 0;
const xr = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Za++
);
function Ja() {
  const [a, o] = P.useState(() => Cr ? xr() : void 0);
  return bt(() => {
    a == null && o(xr());
  }, []), P.useEffect(() => {
    Cr = !0;
  }, []), a;
}
const eo = qa.useId, fn = eo || Ja;
let Ge;
process.env.NODE_ENV !== "production" && (Ge = /* @__PURE__ */ new Set());
function to() {
  for (var a, o = arguments.length, t = new Array(o), e = 0; e < o; e++)
    t[e] = arguments[e];
  const r = "Floating UI: " + t.join(" ");
  if (!((a = Ge) != null && a.has(r))) {
    var n;
    (n = Ge) == null || n.add(r), console.warn(r);
  }
}
function ro() {
  for (var a, o = arguments.length, t = new Array(o), e = 0; e < o; e++)
    t[e] = arguments[e];
  const r = "Floating UI: " + t.join(" ");
  if (!((a = Ge) != null && a.has(r))) {
    var n;
    (n = Ge) == null || n.add(r), console.error(r);
  }
}
const no = /* @__PURE__ */ P.forwardRef(function(o, t) {
  const {
    context: {
      placement: e,
      elements: {
        floating: r
      },
      middlewareData: {
        arrow: n,
        shift: i
      }
    },
    width: s = 14,
    height: l = 7,
    tipRadius: u = 0,
    strokeWidth: c = 0,
    staticOffset: p,
    stroke: d,
    d: f,
    style: {
      transform: h,
      ...g
    } = {},
    ...v
  } = o;
  process.env.NODE_ENV !== "production" && (t || to("The `ref` prop is required for `FloatingArrow`."));
  const D = fn(), [_, b] = P.useState(!1);
  if (bt(() => {
    if (!r) return;
    te(r).direction === "rtl" && b(!0);
  }, [r]), !r)
    return null;
  const [k, S] = e.split("-"), C = k === "top" || k === "bottom";
  let M = p;
  (C && i != null && i.x || !C && i != null && i.y) && (M = null);
  const O = c * 2, x = O / 2, L = s / 2 * (u / -8 + 1), V = l / 2 * u / 4, w = !!f, Y = M && S === "end" ? "bottom" : "top";
  let N = M && S === "end" ? "right" : "left";
  M && _ && (N = S === "end" ? "left" : "right");
  const W = (n == null ? void 0 : n.x) != null ? M || n.x : "", E = (n == null ? void 0 : n.y) != null ? M || n.y : "", T = f || "M0,0" + (" H" + s) + (" L" + (s - L) + "," + (l - V)) + (" Q" + s / 2 + "," + l + " " + L + "," + (l - V)) + " Z", R = {
    top: w ? "rotate(180deg)" : "",
    left: w ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: w ? "" : "rotate(180deg)",
    right: w ? "rotate(-90deg)" : "rotate(90deg)"
  }[k];
  return /* @__PURE__ */ H.jsxs("svg", {
    ...v,
    "aria-hidden": !0,
    ref: t,
    width: w ? s : s + O,
    height: s,
    viewBox: "0 0 " + s + " " + (l > s ? l : s),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [N]: W,
      [Y]: E,
      [k]: C || w ? "100%" : "calc(100% - " + O / 2 + "px)",
      transform: [R, h].filter((Q) => !!Q).join(" "),
      ...g
    },
    children: [O > 0 && /* @__PURE__ */ H.jsx("path", {
      clipPath: "url(#" + D + ")",
      fill: "none",
      stroke: d,
      strokeWidth: O + (f ? 0 : 1),
      d: T
    }), /* @__PURE__ */ H.jsx("path", {
      stroke: O && !f ? v.fill : "none",
      d: T
    }), /* @__PURE__ */ H.jsx("clipPath", {
      id: D,
      children: /* @__PURE__ */ H.jsx("rect", {
        x: -x,
        y: x * (w ? -1 : 1),
        width: s + O,
        height: s
      })
    })]
  });
});
function ao() {
  const a = /* @__PURE__ */ new Map();
  return {
    emit(o, t) {
      var e;
      (e = a.get(o)) == null || e.forEach((r) => r(t));
    },
    on(o, t) {
      a.has(o) || a.set(o, /* @__PURE__ */ new Set()), a.get(o).add(t);
    },
    off(o, t) {
      var e;
      (e = a.get(o)) == null || e.delete(t);
    }
  };
}
const oo = /* @__PURE__ */ P.createContext(null), io = /* @__PURE__ */ P.createContext(null), so = () => {
  var a;
  return ((a = P.useContext(oo)) == null ? void 0 : a.id) || null;
}, lo = () => P.useContext(io);
function co(a) {
  const {
    open: o = !1,
    onOpenChange: t,
    elements: e
  } = a, r = fn(), n = P.useRef({}), [i] = P.useState(() => ao()), s = so() != null;
  if (process.env.NODE_ENV !== "production") {
    const f = e.reference;
    f && !X(f) && ro("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [l, u] = P.useState(e.reference), c = va((f, h, g) => {
    n.current.openEvent = f ? h : void 0, i.emit("openchange", {
      open: f,
      event: h,
      reason: g,
      nested: s
    }), t == null || t(f, h, g);
  }), p = P.useMemo(() => ({
    setPositionReference: u
  }), []), d = P.useMemo(() => ({
    reference: l || e.reference || null,
    floating: e.floating || null,
    domReference: e.reference
  }), [l, e.reference, e.floating]);
  return P.useMemo(() => ({
    dataRef: n,
    open: o,
    onOpenChange: c,
    elements: d,
    events: i,
    floatingId: r,
    refs: p
  }), [o, c, d, i, r, p]);
}
function uo(a) {
  a === void 0 && (a = {});
  const {
    nodeId: o
  } = a, t = co({
    ...a,
    elements: {
      reference: null,
      floating: null,
      ...a.elements
    }
  }), e = a.rootContext || t, r = e.elements, [n, i] = P.useState(null), [s, l] = P.useState(null), c = (r == null ? void 0 : r.domReference) || n, p = P.useRef(null), d = lo();
  bt(() => {
    c && (p.current = c);
  }, [c]);
  const f = Ua({
    ...a,
    elements: {
      ...r,
      ...s && {
        reference: s
      }
    }
  }), h = P.useCallback((b) => {
    const k = X(b) ? {
      getBoundingClientRect: () => b.getBoundingClientRect(),
      getClientRects: () => b.getClientRects(),
      contextElement: b
    } : b;
    l(k), f.refs.setReference(k);
  }, [f.refs]), g = P.useCallback((b) => {
    (X(b) || b === null) && (p.current = b, i(b)), (X(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    b !== null && !X(b)) && f.refs.setReference(b);
  }, [f.refs]), v = P.useMemo(() => ({
    ...f.refs,
    setReference: g,
    setPositionReference: h,
    domReference: p
  }), [f.refs, g, h]), D = P.useMemo(() => ({
    ...f.elements,
    domReference: c
  }), [f.elements, c]), _ = P.useMemo(() => ({
    ...f,
    ...e,
    refs: v,
    elements: D,
    nodeId: o
  }), [f, v, D, o, e]);
  return bt(() => {
    e.dataRef.current.floatingContext = _;
    const b = d == null ? void 0 : d.nodesRef.current.find((k) => k.id === o);
    b && (b.context = _);
  }), P.useMemo(() => ({
    ...f,
    context: _,
    refs: v,
    elements: D
  }), [f, v, D, _]);
}
/*!
  react-datepicker v7.6.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/
var $t = function(o, t) {
  return $t = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }, $t(o, t);
};
function U(a, o) {
  if (typeof o != "function" && o !== null) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
  $t(a, o);
  function t() {
    this.constructor = a;
  }
  a.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
}
var F = function() {
  return F = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, F.apply(this, arguments);
};
function se(a, o, t) {
  if (t || arguments.length === 2) for (var e = 0, r = o.length, n; e < r; e++)
    (n || !(e in o)) && (n || (n = Array.prototype.slice.call(o, 0, e)), n[e] = o[e]);
  return a.concat(n || Array.prototype.slice.call(o));
}
var po = function(a) {
  var o = a.showTimeSelectOnly, t = o === void 0 ? !1 : o, e = a.showTime, r = e === void 0 ? !1 : e, n = a.className, i = a.children, s = t ? "Choose Time" : "Choose Date".concat(r ? " and Time" : "");
  return m.createElement("div", { className: n, role: "dialog", "aria-label": s, "aria-modal": "true" }, i);
}, fo = function(a, o) {
  var t = Ht(null), e = Ht(a);
  e.current = a;
  var r = bn(function(n) {
    var i;
    t.current && !t.current.contains(n.target) && (o && n.target instanceof HTMLElement && n.target.classList.contains(o) || (i = e.current) === null || i === void 0 || i.call(e, n));
  }, [o]);
  return _n(function() {
    return document.addEventListener("mousedown", r), function() {
      document.removeEventListener("mousedown", r);
    };
  }, [r]), t;
}, Pt = function(a) {
  var o = a.children, t = a.onClickOutside, e = a.className, r = a.containerRef, n = a.style, i = a.ignoreClass, s = fo(t, i);
  return m.createElement("div", { className: e, style: n, ref: function(l) {
    s.current = l, r && (r.current = l);
  } }, o);
}, y;
(function(a) {
  a.ArrowUp = "ArrowUp", a.ArrowDown = "ArrowDown", a.ArrowLeft = "ArrowLeft", a.ArrowRight = "ArrowRight", a.PageUp = "PageUp", a.PageDown = "PageDown", a.Home = "Home", a.End = "End", a.Enter = "Enter", a.Space = " ", a.Tab = "Tab", a.Escape = "Escape", a.Backspace = "Backspace", a.X = "x";
})(y || (y = {}));
function tr() {
  var a = typeof window < "u" ? window : globalThis;
  return a;
}
var Je = 12, ho = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function B(a) {
  if (a == null)
    return /* @__PURE__ */ new Date();
  var o = typeof a == "string" ? An(a) : en(a);
  return de(o) ? o : /* @__PURE__ */ new Date();
}
function Lt(a, o, t, e, r) {
  var n, i = null, s = Oe(t) || Oe($e()), l = !0;
  if (Array.isArray(o))
    return o.forEach(function(c) {
      var p = Ot(a, c, /* @__PURE__ */ new Date(), {
        locale: s,
        useAdditionalWeekYearTokens: !0,
        useAdditionalDayOfYearTokens: !0
      });
      e && (l = de(p, r) && a === K(p, c, t)), de(p, r) && l && (i = p);
    }), i;
  if (i = Ot(a, o, /* @__PURE__ */ new Date(), {
    locale: s,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  }), e)
    l = de(i) && a === K(i, o, t);
  else if (!de(i)) {
    var u = ((n = o.match(ho)) !== null && n !== void 0 ? n : []).map(function(c) {
      var p = c[0];
      if (p === "p" || p === "P") {
        var d = Pn[p];
        return s ? d(c, s.formatLong) : p;
      }
      return c;
    }).join("");
    a.length > 0 && (i = Ot(a, u.slice(0, a.length), /* @__PURE__ */ new Date(), {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    })), de(i) || (i = new Date(a));
  }
  return de(i) && l ? i : null;
}
function de(a, o) {
  return Qt(a) && !Re(a, o ?? /* @__PURE__ */ new Date("1/1/1800"));
}
function K(a, o, t) {
  if (t === "en")
    return sr(a, o, {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    });
  var e = t ? Oe(t) : void 0;
  return t && !e && console.warn('A locale object was not found for the provided string ["'.concat(t, '"].')), !e && $e() && Oe($e()) && (e = Oe($e())), sr(a, o, {
    locale: e,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  });
}
function J(a, o) {
  var t = o.dateFormat, e = o.locale, r = Array.isArray(t) && t.length > 0 ? t[0] : t;
  return a && K(a, r, e) || "";
}
function mo(a, o, t) {
  if (!a)
    return "";
  var e = J(a, t), r = o ? J(o, t) : "";
  return "".concat(e, " - ").concat(r);
}
function vo(a, o) {
  if (!(a != null && a.length))
    return "";
  var t = a[0] ? J(a[0], o) : "";
  if (a.length === 1)
    return t;
  if (a.length === 2 && a[1]) {
    var e = J(a[1], o);
    return "".concat(t, ", ").concat(e);
  }
  var r = a.length - 1;
  return "".concat(t, " (+").concat(r, ")");
}
function Yt(a, o) {
  var t = o.hour, e = t === void 0 ? 0 : t, r = o.minute, n = r === void 0 ? 0 : r, i = o.second, s = i === void 0 ? 0 : i;
  return lt(ct(ut(a, s), n), e);
}
function go(a) {
  return Rn(a);
}
function Do(a, o) {
  return K(a, "ddd", o);
}
function dt(a) {
  return zt(a);
}
function ye(a, o, t) {
  var e = Oe(o || $e());
  return Hn(a, {
    locale: e,
    weekStartsOn: t
  });
}
function he(a) {
  return Zr(a);
}
function Qe(a) {
  return Xt(a);
}
function Mr(a) {
  return Wn(a);
}
function Er() {
  return zt(B());
}
function Pr(a) {
  return Xr(a);
}
function yo(a) {
  return En(a);
}
function wo(a) {
  return Gr(a);
}
function ie(a, o) {
  return a && o ? Yn(a, o) : !a && !o;
}
function G(a, o) {
  return a && o ? In(a, o) : !a && !o;
}
function kt(a, o) {
  return a && o ? Ln(a, o) : !a && !o;
}
function A(a, o) {
  return a && o ? Tn(a, o) : !a && !o;
}
function xe(a, o) {
  return a && o ? Nn(a, o) : !a && !o;
}
function je(a, o, t) {
  var e, r = zt(o), n = Xr(t);
  try {
    e = ze(a, { start: r, end: n });
  } catch {
    e = !1;
  }
  return e;
}
function bo(a, o) {
  var t = tr();
  t.__localeData__ || (t.__localeData__ = {}), t.__localeData__[a] = o;
}
function $e() {
  var a = tr();
  return a.__localeId__;
}
function Oe(a) {
  if (typeof a == "string") {
    var o = tr();
    return o.__localeData__ ? o.__localeData__[a] : void 0;
  } else
    return a;
}
function _o(a, o, t) {
  return o(K(a, "EEEE", t));
}
function ko(a, o) {
  return K(a, "EEEEEE", o);
}
function So(a, o) {
  return K(a, "EEE", o);
}
function rr(a, o) {
  return K(ae(B(), a), "LLLL", o);
}
function hn(a, o) {
  return K(ae(B(), a), "LLL", o);
}
function Co(a, o) {
  return K(Le(B(), a), "QQQ", o);
}
function ee(a, o) {
  var t = o === void 0 ? {} : o, e = t.minDate, r = t.maxDate, n = t.excludeDates, i = t.excludeDateIntervals, s = t.includeDates, l = t.includeDateIntervals, u = t.filterDate;
  return et(a, { minDate: e, maxDate: r }) || n && n.some(function(c) {
    return c instanceof Date ? A(a, c) : A(a, c.date);
  }) || i && i.some(function(c) {
    var p = c.start, d = c.end;
    return ze(a, { start: p, end: d });
  }) || s && !s.some(function(c) {
    return A(a, c);
  }) || l && !l.some(function(c) {
    var p = c.start, d = c.end;
    return ze(a, { start: p, end: d });
  }) || u && !u(B(a)) || !1;
}
function nr(a, o) {
  var t = o === void 0 ? {} : o, e = t.excludeDates, r = t.excludeDateIntervals;
  return r && r.length > 0 ? r.some(function(n) {
    var i = n.start, s = n.end;
    return ze(a, { start: i, end: s });
  }) : e && e.some(function(n) {
    var i;
    return n instanceof Date ? A(a, n) : A(a, (i = n.date) !== null && i !== void 0 ? i : /* @__PURE__ */ new Date());
  }) || !1;
}
function mn(a, o) {
  var t = o === void 0 ? {} : o, e = t.minDate, r = t.maxDate, n = t.excludeDates, i = t.includeDates, s = t.filterDate;
  return et(a, {
    minDate: e ? Zr(e) : void 0,
    maxDate: r ? Gr(r) : void 0
  }) || (n == null ? void 0 : n.some(function(l) {
    return G(a, l instanceof Date ? l : l.date);
  })) || i && !i.some(function(l) {
    return G(a, l);
  }) || s && !s(B(a)) || !1;
}
function nt(a, o, t, e) {
  var r = I(a), n = q(a), i = I(o), s = q(o), l = I(e);
  return r === i && r === l ? n <= t && t <= s : r < i ? l === r && n <= t || l === i && s >= t || l < i && l > r : !1;
}
function xo(a, o) {
  var t = o === void 0 ? {} : o, e = t.minDate, r = t.maxDate, n = t.excludeDates, i = t.includeDates;
  return et(a, { minDate: e, maxDate: r }) || n && n.some(function(s) {
    return G(s instanceof Date ? s : s.date, a);
  }) || i && !i.some(function(s) {
    return G(s, a);
  }) || !1;
}
function at(a, o) {
  var t = o === void 0 ? {} : o, e = t.minDate, r = t.maxDate, n = t.excludeDates, i = t.includeDates, s = t.filterDate;
  return et(a, { minDate: e, maxDate: r }) || (n == null ? void 0 : n.some(function(l) {
    return kt(a, l instanceof Date ? l : l.date);
  })) || i && !i.some(function(l) {
    return kt(a, l);
  }) || s && !s(B(a)) || !1;
}
function ot(a, o, t) {
  if (!o || !t || !Qt(o) || !Qt(t))
    return !1;
  var e = I(o), r = I(t);
  return e <= a && r >= a;
}
function ft(a, o) {
  var t = o === void 0 ? {} : o, e = t.minDate, r = t.maxDate, n = t.excludeDates, i = t.includeDates, s = t.filterDate, l = new Date(a, 0, 1);
  return et(l, {
    minDate: e ? Xt(e) : void 0,
    maxDate: r ? qr(r) : void 0
  }) || (n == null ? void 0 : n.some(function(u) {
    return ie(l, u instanceof Date ? u : u.date);
  })) || i && !i.some(function(u) {
    return ie(l, u);
  }) || s && !s(B(l)) || !1;
}
function it(a, o, t, e) {
  var r = I(a), n = Ue(a), i = I(o), s = Ue(o), l = I(e);
  return r === i && r === l ? n <= t && t <= s : r < i ? l === r && n <= t || l === i && s >= t || l < i && l > r : !1;
}
function et(a, o) {
  var t, e = o === void 0 ? {} : o, r = e.minDate, n = e.maxDate;
  return (t = r && ht(a, r) < 0 || n && ht(a, n) > 0) !== null && t !== void 0 ? t : !1;
}
function Or(a, o) {
  return o.some(function(t) {
    return le(t) === le(a) && ce(t) === ce(a) && fe(t) === fe(a);
  });
}
function Rr(a, o) {
  var t = o === void 0 ? {} : o, e = t.excludeTimes, r = t.includeTimes, n = t.filterTime;
  return e && Or(a, e) || r && !Or(a, r) || n && !n(a) || !1;
}
function Nr(a, o) {
  var t = o.minTime, e = o.maxTime;
  if (!t || !e)
    throw new Error("Both minTime and maxTime props required");
  var r = B();
  r = lt(r, le(a)), r = ct(r, ce(a)), r = ut(r, fe(a));
  var n = B();
  n = lt(n, le(t)), n = ct(n, ce(t)), n = ut(n, fe(t));
  var i = B();
  i = lt(i, le(e)), i = ct(i, ce(e)), i = ut(i, fe(e));
  var s;
  try {
    s = !ze(r, { start: n, end: i });
  } catch {
    s = !1;
  }
  return s;
}
function Tr(a, o) {
  var t = o === void 0 ? {} : o, e = t.minDate, r = t.includeDates, n = Ee(a, 1);
  return e && mt(e, n) > 0 || r && r.every(function(i) {
    return mt(i, n) > 0;
  }) || !1;
}
function Ir(a, o) {
  var t = o === void 0 ? {} : o, e = t.maxDate, r = t.includeDates, n = be(a, 1);
  return e && mt(n, e) > 0 || r && r.every(function(i) {
    return mt(n, i) > 0;
  }) || !1;
}
function Mo(a, o) {
  var t = o === void 0 ? {} : o, e = t.minDate, r = t.includeDates, n = Xt(a), i = Jr(n, 1);
  return e && vt(e, i) > 0 || r && r.every(function(s) {
    return vt(s, i) > 0;
  }) || !1;
}
function Eo(a, o) {
  var t = o === void 0 ? {} : o, e = t.maxDate, r = t.includeDates, n = qr(a), i = zr(n, 1);
  return e && vt(i, e) > 0 || r && r.every(function(s) {
    return vt(i, s) > 0;
  }) || !1;
}
function Lr(a, o) {
  var t = o === void 0 ? {} : o, e = t.minDate, r = t.includeDates, n = Fe(a, 1);
  return e && gt(e, n) > 0 || r && r.every(function(i) {
    return gt(i, n) > 0;
  }) || !1;
}
function Po(a, o) {
  var t = o === void 0 ? {} : o, e = t.minDate, r = t.yearItemNumber, n = r === void 0 ? Je : r, i = Qe(Fe(a, n)), s = ve(i, n).endPeriod, l = e && I(e);
  return l && l > s || !1;
}
function Yr(a, o) {
  var t = o === void 0 ? {} : o, e = t.maxDate, r = t.includeDates, n = ge(a, 1);
  return e && gt(n, e) > 0 || r && r.every(function(i) {
    return gt(n, i) > 0;
  }) || !1;
}
function Oo(a, o) {
  var t = o === void 0 ? {} : o, e = t.maxDate, r = t.yearItemNumber, n = r === void 0 ? Je : r, i = ge(a, n), s = ve(i, n).startPeriod, l = e && I(e);
  return l && l < s || !1;
}
function vn(a) {
  var o = a.minDate, t = a.includeDates;
  if (t && o) {
    var e = t.filter(function(r) {
      return ht(r, o) >= 0;
    });
    return ur(e);
  } else return t ? ur(t) : o;
}
function gn(a) {
  var o = a.maxDate, t = a.includeDates;
  if (t && o) {
    var e = t.filter(function(r) {
      return ht(r, o) <= 0;
    });
    return cr(e);
  } else return t ? cr(t) : o;
}
function Ar(a, o) {
  var t;
  a === void 0 && (a = []), o === void 0 && (o = "react-datepicker__day--highlighted");
  for (var e = /* @__PURE__ */ new Map(), r = 0, n = a.length; r < n; r++) {
    var i = a[r];
    if (De(i)) {
      var s = K(i, "MM.dd.yyyy"), l = e.get(s) || [];
      l.includes(o) || (l.push(o), e.set(s, l));
    } else if (typeof i == "object") {
      var u = Object.keys(i), c = (t = u[0]) !== null && t !== void 0 ? t : "", p = i[c];
      if (typeof c == "string" && Array.isArray(p))
        for (var d = 0, f = p.length; d < f; d++) {
          var h = p[d];
          if (h) {
            var s = K(h, "MM.dd.yyyy"), l = e.get(s) || [];
            l.includes(c) || (l.push(c), e.set(s, l));
          }
        }
    }
  }
  return e;
}
function Ro(a, o) {
  return a.length !== o.length ? !1 : a.every(function(t, e) {
    return t === o[e];
  });
}
function No(a, o) {
  a === void 0 && (a = []), o === void 0 && (o = "react-datepicker__day--holidays");
  var t = /* @__PURE__ */ new Map();
  return a.forEach(function(e) {
    var r = e.date, n = e.holidayName;
    if (De(r)) {
      var i = K(r, "MM.dd.yyyy"), s = t.get(i) || {
        className: "",
        holidayNames: []
      };
      if (!("className" in s && s.className === o && Ro(s.holidayNames, [n]))) {
        s.className = o;
        var l = s.holidayNames;
        s.holidayNames = l ? se(se([], l, !0), [n], !1) : [n], t.set(i, s);
      }
    }
  }), t;
}
function To(a, o, t, e, r) {
  for (var n = r.length, i = [], s = 0; s < n; s++) {
    var l = a, u = r[s];
    u && (l = xn(l, le(u)), l = Bt(l, ce(u)), l = Mn(l, fe(u)));
    var c = Bt(a, (t + 1) * e);
    _e(l, o) && Re(l, c) && u != null && i.push(u);
  }
  return i;
}
function Fr(a) {
  return a < 10 ? "0".concat(a) : "".concat(a);
}
function ve(a, o) {
  o === void 0 && (o = Je);
  var t = Math.ceil(I(a) / o) * o, e = t - (o - 1);
  return { startPeriod: e, endPeriod: t };
}
function Io(a) {
  var o = new Date(a.getFullYear(), a.getMonth(), a.getDate()), t = new Date(a.getFullYear(), a.getMonth(), a.getDate(), 24);
  return Math.round((+t - +o) / 36e5);
}
function Wr(a) {
  var o = a.getSeconds(), t = a.getMilliseconds();
  return en(a.getTime() - o * 1e3 - t);
}
function Lo(a, o) {
  return Wr(a).getTime() === Wr(o).getTime();
}
function Hr(a) {
  if (!De(a))
    throw new Error("Invalid date");
  var o = new Date(a);
  return o.setHours(0, 0, 0, 0), o;
}
function Br(a, o) {
  if (!De(a) || !De(o))
    throw new Error("Invalid date received");
  var t = Hr(a), e = Hr(o);
  return Re(t, e);
}
function Dn(a) {
  return a.key === y.Space;
}
var Yo = (
  /** @class */
  function(a) {
    U(o, a);
    function o(t) {
      var e = a.call(this, t) || this;
      return e.inputRef = m.createRef(), e.onTimeChange = function(r) {
        var n, i;
        e.setState({ time: r });
        var s = e.props.date, l = s instanceof Date && !isNaN(+s), u = l ? s : /* @__PURE__ */ new Date();
        if (r != null && r.includes(":")) {
          var c = r.split(":"), p = c[0], d = c[1];
          u.setHours(Number(p)), u.setMinutes(Number(d));
        }
        (i = (n = e.props).onChange) === null || i === void 0 || i.call(n, u);
      }, e.renderTimeInput = function() {
        var r = e.state.time, n = e.props, i = n.date, s = n.timeString, l = n.customTimeInput;
        return l ? $r(l, {
          date: i,
          value: r,
          onChange: e.onTimeChange
        }) : m.createElement("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", ref: e.inputRef, onClick: function() {
          var u;
          (u = e.inputRef.current) === null || u === void 0 || u.focus();
        }, required: !0, value: r, onChange: function(u) {
          e.onTimeChange(u.target.value || s);
        } });
      }, e.state = {
        time: e.props.timeString
      }, e;
    }
    return o.getDerivedStateFromProps = function(t, e) {
      return t.timeString !== e.time ? {
        time: t.timeString
      } : null;
    }, o.prototype.render = function() {
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
    }, o;
  }(j)
), Ao = (
  /** @class */
  function(a) {
    U(o, a);
    function o() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.dayEl = we(), t.handleClick = function(e) {
        !t.isDisabled() && t.props.onClick && t.props.onClick(e);
      }, t.handleMouseEnter = function(e) {
        !t.isDisabled() && t.props.onMouseEnter && t.props.onMouseEnter(e);
      }, t.handleOnKeyDown = function(e) {
        var r, n, i = e.key;
        i === y.Space && (e.preventDefault(), e.key = y.Enter), (n = (r = t.props).handleOnKeyDown) === null || n === void 0 || n.call(r, e);
      }, t.isSameDay = function(e) {
        return A(t.props.day, e);
      }, t.isKeyboardSelected = function() {
        var e;
        if (t.props.disabledKeyboardNavigation)
          return !1;
        var r = t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(i) {
          return t.isSameDayOrWeek(i);
        }) : t.isSameDayOrWeek(t.props.selected), n = t.props.preSelection && t.isDisabled(t.props.preSelection);
        return !r && t.isSameDayOrWeek(t.props.preSelection) && !n;
      }, t.isDisabled = function(e) {
        return e === void 0 && (e = t.props.day), ee(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function() {
        return nr(t.props.day, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.isStartOfWeek = function() {
        return A(t.props.day, ye(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameWeek = function(e) {
        return t.props.showWeekPicker && A(e, ye(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameDayOrWeek = function(e) {
        return t.isSameDay(e) || t.isSameWeek(e);
      }, t.getHighLightedClass = function() {
        var e = t.props, r = e.day, n = e.highlightDates;
        if (!n)
          return !1;
        var i = K(r, "MM.dd.yyyy");
        return n.get(i);
      }, t.getHolidaysClass = function() {
        var e, r = t.props, n = r.day, i = r.holidays;
        if (!i)
          return [void 0];
        var s = K(n, "MM.dd.yyyy");
        return i.has(s) ? [(e = i.get(s)) === null || e === void 0 ? void 0 : e.className] : [void 0];
      }, t.isInRange = function() {
        var e = t.props, r = e.day, n = e.startDate, i = e.endDate;
        return !n || !i ? !1 : je(r, n, i);
      }, t.isInSelectingRange = function() {
        var e, r = t.props, n = r.day, i = r.selectsStart, s = r.selectsEnd, l = r.selectsRange, u = r.selectsDisabledDaysInRange, c = r.startDate, p = r.endDate, d = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return !(i || s || l) || !d || !u && t.isDisabled() ? !1 : i && p && (Re(d, p) || xe(d, p)) ? je(n, d, p) : s && c && (_e(d, c) || xe(d, c)) || l && c && !p && (_e(d, c) || xe(d, c)) ? je(n, c, d) : !1;
      }, t.isSelectingRangeStart = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var r = t.props, n = r.day, i = r.startDate, s = r.selectsStart, l = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return s ? A(n, l) : A(n, i);
      }, t.isSelectingRangeEnd = function() {
        var e;
        if (!t.isInSelectingRange())
          return !1;
        var r = t.props, n = r.day, i = r.endDate, s = r.selectsEnd, l = r.selectsRange, u = (e = t.props.selectingDate) !== null && e !== void 0 ? e : t.props.preSelection;
        return s || l ? A(n, u) : A(n, i);
      }, t.isRangeStart = function() {
        var e = t.props, r = e.day, n = e.startDate, i = e.endDate;
        return !n || !i ? !1 : A(n, r);
      }, t.isRangeEnd = function() {
        var e = t.props, r = e.day, n = e.startDate, i = e.endDate;
        return !n || !i ? !1 : A(i, r);
      }, t.isWeekend = function() {
        var e = On(t.props.day);
        return e === 0 || e === 6;
      }, t.isAfterMonth = function() {
        return t.props.month !== void 0 && (t.props.month + 1) % 12 === q(t.props.day);
      }, t.isBeforeMonth = function() {
        return t.props.month !== void 0 && (q(t.props.day) + 1) % 12 === t.props.month;
      }, t.isCurrentDay = function() {
        return t.isSameDay(B());
      }, t.isSelected = function() {
        var e;
        return t.props.selectsMultiple ? (e = t.props.selectedDates) === null || e === void 0 ? void 0 : e.some(function(r) {
          return t.isSameDayOrWeek(r);
        }) : t.isSameDayOrWeek(t.props.selected);
      }, t.getClassNames = function(e) {
        var r = t.props.dayClassName ? t.props.dayClassName(e) : void 0;
        return z("react-datepicker__day", r, "react-datepicker__day--" + Do(t.props.day), {
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
        var e = t.props, r = e.day, n = e.ariaLabelPrefixWhenEnabled, i = n === void 0 ? "Choose" : n, s = e.ariaLabelPrefixWhenDisabled, l = s === void 0 ? "Not available" : s, u = t.isDisabled() || t.isExcluded() ? l : i;
        return "".concat(u, " ").concat(K(r, "PPPP", t.props.locale));
      }, t.getTitle = function() {
        var e = t.props, r = e.day, n = e.holidays, i = n === void 0 ? /* @__PURE__ */ new Map() : n, s = e.excludeDates, l = K(r, "MM.dd.yyyy"), u = [];
        return i.has(l) && u.push.apply(u, i.get(l).holidayNames), t.isExcluded() && u.push(s == null ? void 0 : s.filter(function(c) {
          return c instanceof Date ? A(c, r) : A(c == null ? void 0 : c.date, r);
        }).map(function(c) {
          if (!(c instanceof Date))
            return c == null ? void 0 : c.message;
        })), u.join(", ");
      }, t.getTabIndex = function() {
        var e = t.props.selected, r = t.props.preSelection, n = !(t.props.showWeekPicker && (t.props.showWeekNumber || !t.isStartOfWeek())) && (t.isKeyboardSelected() || t.isSameDay(e) && A(r, e)) ? 0 : -1;
        return n;
      }, t.handleFocusDay = function() {
        var e;
        t.shouldFocusDay() && ((e = t.dayEl.current) === null || e === void 0 || e.focus({ preventScroll: !0 }));
      }, t.renderDayContents = function() {
        return t.props.monthShowsDuplicateDaysEnd && t.isAfterMonth() || t.props.monthShowsDuplicateDaysStart && t.isBeforeMonth() ? null : t.props.renderDayContents ? t.props.renderDayContents(lr(t.props.day), t.props.day) : lr(t.props.day);
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
    return o.prototype.componentDidMount = function() {
      this.handleFocusDay();
    }, o.prototype.componentDidUpdate = function() {
      this.handleFocusDay();
    }, o.prototype.shouldFocusDay = function() {
      var t = !1;
      return this.getTabIndex() === 0 && this.isSameDay(this.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (t = !0), this.props.inline && !this.props.shouldFocusDayInline && (t = !1), this.isDayActiveElement() && (t = !0), this.isDuplicateDay() && (t = !1)), t;
    }, o.prototype.isDayActiveElement = function() {
      var t, e, r;
      return ((e = (t = this.props.containerRef) === null || t === void 0 ? void 0 : t.current) === null || e === void 0 ? void 0 : e.contains(document.activeElement)) && ((r = document.activeElement) === null || r === void 0 ? void 0 : r.classList.contains("react-datepicker__day"));
    }, o.prototype.isDuplicateDay = function() {
      return (
        //day is one of the non rendered duplicate days
        this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth()
      );
    }, o;
  }(j)
), Fo = (
  /** @class */
  function(a) {
    U(o, a);
    function o() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.weekNumberEl = we(), t.handleClick = function(e) {
        t.props.onClick && t.props.onClick(e);
      }, t.handleOnKeyDown = function(e) {
        var r, n, i = e.key;
        i === y.Space && (e.preventDefault(), e.key = y.Enter), (n = (r = t.props).handleOnKeyDown) === null || n === void 0 || n.call(r, e);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !A(t.props.date, t.props.selected) && A(t.props.date, t.props.preSelection);
      }, t.getTabIndex = function() {
        return t.props.showWeekPicker && t.props.showWeekNumber && (t.isKeyboardSelected() || A(t.props.date, t.props.selected) && A(t.props.preSelection, t.props.selected)) ? 0 : -1;
      }, t.handleFocusWeekNumber = function(e) {
        var r = !1;
        t.getTabIndex() === 0 && !(e != null && e.isInputFocused) && A(t.props.date, t.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (r = !0), t.props.inline && !t.props.shouldFocusDayInline && (r = !1), t.props.containerRef && t.props.containerRef.current && t.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (r = !0)), r && t.weekNumberEl.current && t.weekNumberEl.current.focus({ preventScroll: !0 });
      }, t;
    }
    return Object.defineProperty(o, "defaultProps", {
      get: function() {
        return {
          ariaLabelPrefix: "week "
        };
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.componentDidMount = function() {
      this.handleFocusWeekNumber();
    }, o.prototype.componentDidUpdate = function(t) {
      this.handleFocusWeekNumber(t);
    }, o.prototype.render = function() {
      var t = this.props, e = t.weekNumber, r = t.isWeekDisabled, n = t.ariaLabelPrefix, i = n === void 0 ? o.defaultProps.ariaLabelPrefix : n, s = t.onClick, l = {
        "react-datepicker__week-number": !0,
        "react-datepicker__week-number--clickable": !!s && !r,
        "react-datepicker__week-number--selected": !!s && A(this.props.date, this.props.selected)
      };
      return m.createElement("div", { ref: this.weekNumberEl, className: z(l), "aria-label": "".concat(i, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex() }, e);
    }, o;
  }(j)
), Wo = (
  /** @class */
  function(a) {
    U(o, a);
    function o() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.isDisabled = function(e) {
        return ee(e, {
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
      }, t.handleWeekClick = function(e, r, n) {
        for (var i, s, l, u = new Date(e), c = 0; c < 7; c++) {
          var p = new Date(e);
          p.setDate(p.getDate() + c);
          var d = !t.isDisabled(p);
          if (d) {
            u = p;
            break;
          }
        }
        typeof t.props.onWeekSelect == "function" && t.props.onWeekSelect(u, r, n), t.props.showWeekPicker && t.handleDayClick(u, n), ((i = t.props.shouldCloseOnSelect) !== null && i !== void 0 ? i : o.defaultProps.shouldCloseOnSelect) && ((l = (s = t.props).setOpen) === null || l === void 0 || l.call(s, !1));
      }, t.formatWeekNumber = function(e) {
        return t.props.formatWeekNumber ? t.props.formatWeekNumber(e) : go(e);
      }, t.isWeekDisabled = function() {
        for (var e = t.startOfWeek(), r = Me(e, 6), n = new Date(e); n <= r; ) {
          if (!t.isDisabled(n))
            return !1;
          n = Me(n, 1);
        }
        return !0;
      }, t.renderDays = function() {
        var e = t.startOfWeek(), r = [], n = t.formatWeekNumber(e);
        if (t.props.showWeekNumber) {
          var i = t.props.onWeekSelect || t.props.showWeekPicker ? t.handleWeekClick.bind(t, e, n) : void 0;
          r.push(m.createElement(Fo, F({ key: "W" }, o.defaultProps, t.props, { weekNumber: n, isWeekDisabled: t.isWeekDisabled(), date: e, onClick: i })));
        }
        return r.concat([0, 1, 2, 3, 4, 5, 6].map(function(s) {
          var l = Me(e, s);
          return m.createElement(Ao, F({}, o.defaultProps, t.props, { ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix, key: l.valueOf(), day: l, onClick: t.handleDayClick.bind(t, l), onMouseEnter: t.handleDayMouseEnter.bind(t, l) }));
        }));
      }, t.startOfWeek = function() {
        return ye(t.props.day, t.props.locale, t.props.calendarStartDay);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !A(t.startOfWeek(), t.props.selected) && A(t.startOfWeek(), t.props.preSelection);
      }, t;
    }
    return Object.defineProperty(o, "defaultProps", {
      get: function() {
        return {
          shouldCloseOnSelect: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.render = function() {
      var t = {
        "react-datepicker__week": !0,
        "react-datepicker__week--selected": A(this.startOfWeek(), this.props.selected),
        "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
      };
      return m.createElement("div", { className: z(t) }, this.renderDays());
    }, o;
  }(j)
), Ke, Ho = 6, Ae = {
  TWO_COLUMNS: "two_columns",
  THREE_COLUMNS: "three_columns",
  FOUR_COLUMNS: "four_columns"
}, At = (Ke = {}, Ke[Ae.TWO_COLUMNS] = {
  grid: [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11]
  ],
  verticalNavigationOffset: 2
}, Ke[Ae.THREE_COLUMNS] = {
  grid: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ],
  verticalNavigationOffset: 3
}, Ke[Ae.FOUR_COLUMNS] = {
  grid: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ],
  verticalNavigationOffset: 4
}, Ke), st = 1;
function Vr(a, o) {
  return a ? Ae.FOUR_COLUMNS : o ? Ae.TWO_COLUMNS : Ae.THREE_COLUMNS;
}
var Bo = (
  /** @class */
  function(a) {
    U(o, a);
    function o() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.MONTH_REFS = se([], Array(12), !0).map(function() {
        return we();
      }), t.QUARTER_REFS = se([], Array(4), !0).map(function() {
        return we();
      }), t.isDisabled = function(e) {
        return ee(e, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function(e) {
        return nr(e, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.handleDayClick = function(e, r) {
        var n, i;
        (i = (n = t.props).onDayClick) === null || i === void 0 || i.call(n, e, r, t.props.orderInDisplay);
      }, t.handleDayMouseEnter = function(e) {
        var r, n;
        (n = (r = t.props).onDayMouseEnter) === null || n === void 0 || n.call(r, e);
      }, t.handleMouseLeave = function() {
        var e, r;
        (r = (e = t.props).onMouseLeave) === null || r === void 0 || r.call(e);
      }, t.isRangeStartMonth = function(e) {
        var r = t.props, n = r.day, i = r.startDate, s = r.endDate;
        return !i || !s ? !1 : G(ae(n, e), i);
      }, t.isRangeStartQuarter = function(e) {
        var r = t.props, n = r.day, i = r.startDate, s = r.endDate;
        return !i || !s ? !1 : kt(Le(n, e), i);
      }, t.isRangeEndMonth = function(e) {
        var r = t.props, n = r.day, i = r.startDate, s = r.endDate;
        return !i || !s ? !1 : G(ae(n, e), s);
      }, t.isRangeEndQuarter = function(e) {
        var r = t.props, n = r.day, i = r.startDate, s = r.endDate;
        return !i || !s ? !1 : kt(Le(n, e), s);
      }, t.isInSelectingRangeMonth = function(e) {
        var r, n = t.props, i = n.day, s = n.selectsStart, l = n.selectsEnd, u = n.selectsRange, c = n.startDate, p = n.endDate, d = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return !(s || l || u) || !d ? !1 : s && p ? nt(d, p, e, i) : l && c || u && c && !p ? nt(c, d, e, i) : !1;
      }, t.isSelectingMonthRangeStart = function(e) {
        var r;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var n = t.props, i = n.day, s = n.startDate, l = n.selectsStart, u = ae(i, e), c = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return l ? G(u, c) : G(u, s);
      }, t.isSelectingMonthRangeEnd = function(e) {
        var r;
        if (!t.isInSelectingRangeMonth(e))
          return !1;
        var n = t.props, i = n.day, s = n.endDate, l = n.selectsEnd, u = n.selectsRange, c = ae(i, e), p = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return l || u ? G(c, p) : G(c, s);
      }, t.isInSelectingRangeQuarter = function(e) {
        var r, n = t.props, i = n.day, s = n.selectsStart, l = n.selectsEnd, u = n.selectsRange, c = n.startDate, p = n.endDate, d = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return !(s || l || u) || !d ? !1 : s && p ? it(d, p, e, i) : l && c || u && c && !p ? it(c, d, e, i) : !1;
      }, t.isWeekInMonth = function(e) {
        var r = t.props.day, n = Me(e, 6);
        return G(e, r) || G(n, r);
      }, t.isCurrentMonth = function(e, r) {
        return I(e) === I(B()) && r === q(B());
      }, t.isCurrentQuarter = function(e, r) {
        return I(e) === I(B()) && r === Ue(B());
      }, t.isSelectedMonth = function(e, r, n) {
        return q(n) === r && I(e) === I(n);
      }, t.isSelectMonthInList = function(e, r, n) {
        return n.some(function(i) {
          return t.isSelectedMonth(e, r, i);
        });
      }, t.isSelectedQuarter = function(e, r, n) {
        return Ue(e) === r && I(e) === I(n);
      }, t.renderWeeks = function() {
        for (var e = [], r = t.props.fixedHeight, n = 0, i = !1, s = ye(he(t.props.day), t.props.locale, t.props.calendarStartDay), l = function(h) {
          return t.props.showWeekPicker ? ye(h, t.props.locale, t.props.calendarStartDay) : t.props.preSelection;
        }, u = function(h) {
          return t.props.showWeekPicker ? ye(h, t.props.locale, t.props.calendarStartDay) : t.props.selected;
        }, c = t.props.selected ? u(t.props.selected) : void 0, p = t.props.preSelection ? l(t.props.preSelection) : void 0; e.push(m.createElement(Wo, F({}, t.props, { ariaLabelPrefix: t.props.weekAriaLabelPrefix, key: n, day: s, month: q(t.props.day), onDayClick: t.handleDayClick, onDayMouseEnter: t.handleDayMouseEnter, selected: c, preSelection: p, showWeekNumber: t.props.showWeekNumbers }))), !i; ) {
          n++, s = Vt(s, 1);
          var d = r && n >= Ho, f = !r && !t.isWeekInMonth(s);
          if (d || f)
            if (t.props.peekNextMonth)
              i = !0;
            else
              break;
        }
        return e;
      }, t.onMonthClick = function(e, r) {
        var n = t.isMonthDisabledForLabelDate(r), i = n.isDisabled, s = n.labelDate;
        i || t.handleDayClick(he(s), e);
      }, t.onMonthMouseEnter = function(e) {
        var r = t.isMonthDisabledForLabelDate(e), n = r.isDisabled, i = r.labelDate;
        n || t.handleDayMouseEnter(he(i));
      }, t.handleMonthNavigation = function(e, r) {
        var n, i, s, l;
        (i = (n = t.props).setPreSelection) === null || i === void 0 || i.call(n, r), (l = (s = t.MONTH_REFS[e]) === null || s === void 0 ? void 0 : s.current) === null || l === void 0 || l.focus();
      }, t.handleKeyboardNavigation = function(e, r, n) {
        var i, s = t.props, l = s.selected, u = s.preSelection, c = s.setPreSelection, p = s.minDate, d = s.maxDate, f = s.showFourColumnMonthYearPicker, h = s.showTwoColumnMonthYearPicker;
        if (u) {
          var g = Vr(f, h), v = t.getVerticalOffset(g), D = (i = At[g]) === null || i === void 0 ? void 0 : i.grid, _ = function(M, O, x) {
            var L, V, w = O, Y = x;
            switch (M) {
              case y.ArrowRight:
                w = be(O, st), Y = x === 11 ? 0 : x + st;
                break;
              case y.ArrowLeft:
                w = Ee(O, st), Y = x === 0 ? 11 : x - st;
                break;
              case y.ArrowUp:
                w = Ee(O, v), Y = !((L = D == null ? void 0 : D[0]) === null || L === void 0) && L.includes(x) ? x + 12 - v : x - v;
                break;
              case y.ArrowDown:
                w = be(O, v), Y = !((V = D == null ? void 0 : D[D.length - 1]) === null || V === void 0) && V.includes(x) ? x - 12 + v : x + v;
                break;
            }
            return { newCalculatedDate: w, newCalculatedMonth: Y };
          }, b = function(M, O, x) {
            for (var L = 40, V = M, w = !1, Y = 0, N = _(V, O, x), W = N.newCalculatedDate, E = N.newCalculatedMonth; !w; ) {
              if (Y >= L) {
                W = O, E = x;
                break;
              }
              if (p && W < p) {
                V = y.ArrowRight;
                var T = _(V, W, E);
                W = T.newCalculatedDate, E = T.newCalculatedMonth;
              }
              if (d && W > d) {
                V = y.ArrowLeft;
                var T = _(V, W, E);
                W = T.newCalculatedDate, E = T.newCalculatedMonth;
              }
              if (xo(W, t.props)) {
                var T = _(V, W, E);
                W = T.newCalculatedDate, E = T.newCalculatedMonth;
              } else
                w = !0;
              Y++;
            }
            return { newCalculatedDate: W, newCalculatedMonth: E };
          };
          if (r === y.Enter) {
            t.isMonthDisabled(n) || (t.onMonthClick(e, n), c == null || c(l));
            return;
          }
          var k = b(r, u, n), S = k.newCalculatedDate, C = k.newCalculatedMonth;
          switch (r) {
            case y.ArrowRight:
            case y.ArrowLeft:
            case y.ArrowUp:
            case y.ArrowDown:
              t.handleMonthNavigation(C, S);
              break;
          }
        }
      }, t.getVerticalOffset = function(e) {
        var r, n;
        return (n = (r = At[e]) === null || r === void 0 ? void 0 : r.verticalNavigationOffset) !== null && n !== void 0 ? n : 0;
      }, t.onMonthKeyDown = function(e, r) {
        var n = t.props, i = n.disabledKeyboardNavigation, s = n.handleOnMonthKeyDown, l = e.key;
        l !== y.Tab && e.preventDefault(), i || t.handleKeyboardNavigation(e, l, r), s && s(e);
      }, t.onQuarterClick = function(e, r) {
        var n = Le(t.props.day, r);
        at(n, t.props) || t.handleDayClick(Mr(n), e);
      }, t.onQuarterMouseEnter = function(e) {
        var r = Le(t.props.day, e);
        at(r, t.props) || t.handleDayMouseEnter(Mr(r));
      }, t.handleQuarterNavigation = function(e, r) {
        var n, i, s, l;
        t.isDisabled(r) || t.isExcluded(r) || ((i = (n = t.props).setPreSelection) === null || i === void 0 || i.call(n, r), (l = (s = t.QUARTER_REFS[e - 1]) === null || s === void 0 ? void 0 : s.current) === null || l === void 0 || l.focus());
      }, t.onQuarterKeyDown = function(e, r) {
        var n, i, s = e.key;
        if (!t.props.disabledKeyboardNavigation)
          switch (s) {
            case y.Enter:
              t.onQuarterClick(e, r), (i = (n = t.props).setPreSelection) === null || i === void 0 || i.call(n, t.props.selected);
              break;
            case y.ArrowRight:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(r === 4 ? 1 : r + 1, zr(t.props.preSelection, 1));
              break;
            case y.ArrowLeft:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(r === 1 ? 4 : r - 1, Jr(t.props.preSelection, 1));
              break;
          }
      }, t.isMonthDisabledForLabelDate = function(e) {
        var r, n = t.props, i = n.day, s = n.minDate, l = n.maxDate, u = n.excludeDates, c = n.includeDates, p = ae(i, e);
        return {
          isDisabled: (r = (s || l || u || c) && mn(p, t.props)) !== null && r !== void 0 ? r : !1,
          labelDate: p
        };
      }, t.isMonthDisabled = function(e) {
        var r = t.isMonthDisabledForLabelDate(e).isDisabled;
        return r;
      }, t.getMonthClassNames = function(e) {
        var r = t.props, n = r.day, i = r.startDate, s = r.endDate, l = r.preSelection, u = r.monthClassName, c = u ? u(ae(n, e)) : void 0, p = t.getSelection();
        return z("react-datepicker__month-text", "react-datepicker__month-".concat(e), c, {
          "react-datepicker__month-text--disabled": t.isMonthDisabled(e),
          "react-datepicker__month-text--selected": p ? t.isSelectMonthInList(n, e, p) : void 0,
          "react-datepicker__month-text--keyboard-selected": !t.props.disabledKeyboardNavigation && l && t.isSelectedMonth(n, e, l) && !t.isMonthDisabled(e),
          "react-datepicker__month-text--in-selecting-range": t.isInSelectingRangeMonth(e),
          "react-datepicker__month-text--in-range": i && s ? nt(i, s, e, n) : void 0,
          "react-datepicker__month-text--range-start": t.isRangeStartMonth(e),
          "react-datepicker__month-text--range-end": t.isRangeEndMonth(e),
          "react-datepicker__month-text--selecting-range-start": t.isSelectingMonthRangeStart(e),
          "react-datepicker__month-text--selecting-range-end": t.isSelectingMonthRangeEnd(e),
          "react-datepicker__month-text--today": t.isCurrentMonth(n, e)
        });
      }, t.getTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var r = q(t.props.preSelection), n = t.isMonthDisabledForLabelDate(r).isDisabled, i = e === r && !(n || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return i;
      }, t.getQuarterTabIndex = function(e) {
        if (t.props.preSelection == null)
          return "-1";
        var r = Ue(t.props.preSelection), n = at(t.props.day, t.props), i = e === r && !(n || t.props.disabledKeyboardNavigation) ? "0" : "-1";
        return i;
      }, t.getAriaLabel = function(e) {
        var r = t.props, n = r.chooseDayAriaLabelPrefix, i = n === void 0 ? "Choose" : n, s = r.disabledDayAriaLabelPrefix, l = s === void 0 ? "Not available" : s, u = r.day, c = r.locale, p = ae(u, e), d = t.isDisabled(p) || t.isExcluded(p) ? l : i;
        return "".concat(d, " ").concat(K(p, "MMMM yyyy", c));
      }, t.getQuarterClassNames = function(e) {
        var r = t.props, n = r.day, i = r.startDate, s = r.endDate, l = r.selected, u = r.minDate, c = r.maxDate, p = r.excludeDates, d = r.includeDates, f = r.filterDate, h = r.preSelection, g = r.disabledKeyboardNavigation, v = (u || c || p || d || f) && at(Le(n, e), t.props);
        return z("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(e), {
          "react-datepicker__quarter-text--disabled": v,
          "react-datepicker__quarter-text--selected": l ? t.isSelectedQuarter(n, e, l) : void 0,
          "react-datepicker__quarter-text--keyboard-selected": !g && h && t.isSelectedQuarter(n, e, h) && !v,
          "react-datepicker__quarter-text--in-selecting-range": t.isInSelectingRangeQuarter(e),
          "react-datepicker__quarter-text--in-range": i && s ? it(i, s, e, n) : void 0,
          "react-datepicker__quarter-text--range-start": t.isRangeStartQuarter(e),
          "react-datepicker__quarter-text--range-end": t.isRangeEndQuarter(e)
        });
      }, t.getMonthContent = function(e) {
        var r = t.props, n = r.showFullMonthYearPicker, i = r.renderMonthContent, s = r.locale, l = r.day, u = hn(e, s), c = rr(e, s);
        return i ? i(e, u, c, l) : n ? c : u;
      }, t.getQuarterContent = function(e) {
        var r, n = t.props, i = n.renderQuarterContent, s = n.locale, l = Co(e, s);
        return (r = i == null ? void 0 : i(e, l)) !== null && r !== void 0 ? r : l;
      }, t.renderMonths = function() {
        var e, r = t.props, n = r.showTwoColumnMonthYearPicker, i = r.showFourColumnMonthYearPicker, s = r.day, l = r.selected, u = (e = At[Vr(i, n)]) === null || e === void 0 ? void 0 : e.grid;
        return u == null ? void 0 : u.map(function(c, p) {
          return m.createElement("div", { className: "react-datepicker__month-wrapper", key: p }, c.map(function(d, f) {
            return m.createElement("div", { ref: t.MONTH_REFS[d], key: f, onClick: function(h) {
              t.onMonthClick(h, d);
            }, onKeyDown: function(h) {
              Dn(h) && (h.preventDefault(), h.key = y.Enter), t.onMonthKeyDown(h, d);
            }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
              return t.onMonthMouseEnter(d);
            }, onPointerEnter: t.props.usePointerEvent ? function() {
              return t.onMonthMouseEnter(d);
            } : void 0, tabIndex: Number(t.getTabIndex(d)), className: t.getMonthClassNames(d), "aria-disabled": t.isMonthDisabled(d), role: "option", "aria-label": t.getAriaLabel(d), "aria-current": t.isCurrentMonth(s, d) ? "date" : void 0, "aria-selected": l ? t.isSelectedMonth(s, d, l) : void 0 }, t.getMonthContent(d));
          }));
        });
      }, t.renderQuarters = function() {
        var e = t.props, r = e.day, n = e.selected, i = [1, 2, 3, 4];
        return m.createElement("div", { className: "react-datepicker__quarter-wrapper" }, i.map(function(s, l) {
          return m.createElement("div", { key: l, ref: t.QUARTER_REFS[l], role: "option", onClick: function(u) {
            t.onQuarterClick(u, s);
          }, onKeyDown: function(u) {
            t.onQuarterKeyDown(u, s);
          }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
            return t.onQuarterMouseEnter(s);
          }, onPointerEnter: t.props.usePointerEvent ? function() {
            return t.onQuarterMouseEnter(s);
          } : void 0, className: t.getQuarterClassNames(s), "aria-selected": n ? t.isSelectedQuarter(r, s, n) : void 0, tabIndex: Number(t.getQuarterTabIndex(s)), "aria-current": t.isCurrentQuarter(r, s) ? "date" : void 0 }, t.getQuarterContent(s));
        }));
      }, t.getClassNames = function() {
        var e = t.props, r = e.selectingDate, n = e.selectsStart, i = e.selectsEnd, s = e.showMonthYearPicker, l = e.showQuarterYearPicker, u = e.showWeekPicker;
        return z("react-datepicker__month", {
          "react-datepicker__month--selecting-range": r && (n || i)
        }, { "react-datepicker__monthPicker": s }, { "react-datepicker__quarterPicker": l }, { "react-datepicker__weekPicker": u });
      }, t;
    }
    return o.prototype.getSelection = function() {
      var t = this.props, e = t.selected, r = t.selectedDates, n = t.selectsMultiple;
      if (n)
        return r;
      if (e)
        return [e];
    }, o.prototype.render = function() {
      var t = this.props, e = t.showMonthYearPicker, r = t.showQuarterYearPicker, n = t.day, i = t.ariaLabelPrefix, s = i === void 0 ? "Month " : i, l = s ? s.trim() + " " : "";
      return m.createElement("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": "".concat(l).concat(K(n, "MMMM, yyyy", this.props.locale)), role: "listbox" }, e ? this.renderMonths() : r ? this.renderQuarters() : this.renderWeeks());
    }, o;
  }(j)
), Vo = (
  /** @class */
  function(a) {
    U(o, a);
    function o() {
      var t = a !== null && a.apply(this, arguments) || this;
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
    return o.prototype.render = function() {
      return m.createElement(Pt, { className: "react-datepicker__month-dropdown", onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, o;
  }(j)
), Ko = (
  /** @class */
  function(a) {
    U(o, a);
    function o() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function(e) {
        return e.map(function(r, n) {
          return m.createElement("option", { key: r, value: n }, r);
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
        return m.createElement(Vo, F({ key: "dropdown" }, t.props, { monthNames: e, onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function(e) {
        var r = t.state.dropdownVisible, n = [t.renderReadView(!r, e)];
        return r && n.unshift(t.renderDropdown(e)), n;
      }, t.onChange = function(e) {
        t.toggleDropdown(), e !== t.props.month && t.props.onChange(e);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return o.prototype.render = function() {
      var t = this, e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function(n) {
        return hn(n, t.props.locale);
      } : function(n) {
        return rr(n, t.props.locale);
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
    }, o;
  }(j)
);
function Qo(a, o) {
  for (var t = [], e = he(a), r = he(o); !_e(e, r); )
    t.push(B(e)), e = be(e, 1);
  return t;
}
var jo = (
  /** @class */
  function(a) {
    U(o, a);
    function o(t) {
      var e = a.call(this, t) || this;
      return e.renderOptions = function() {
        return e.state.monthYearsList.map(function(r) {
          var n = Kt(r), i = ie(e.props.date, r) && G(e.props.date, r);
          return m.createElement(
            "div",
            { className: i ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", key: n, onClick: e.onChange.bind(e, n), "aria-selected": i ? "true" : void 0 },
            i ? m.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "",
            K(r, e.props.dateFormat, e.props.locale)
          );
        });
      }, e.onChange = function(r) {
        return e.props.onChange(r);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.state = {
        monthYearsList: Qo(e.props.minDate, e.props.maxDate)
      }, e;
    }
    return o.prototype.render = function() {
      var t = z({
        "react-datepicker__month-year-dropdown": !0,
        "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
      });
      return m.createElement(Pt, { className: t, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, o;
  }(j)
), Uo = (
  /** @class */
  function(a) {
    U(o, a);
    function o() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = he(t.props.minDate), r = he(t.props.maxDate), n = []; !_e(e, r); ) {
          var i = Kt(e);
          n.push(m.createElement("option", { key: i, value: i }, K(e, t.props.dateFormat, t.props.locale))), e = be(e, 1);
        }
        return n;
      }, t.onSelectChange = function(e) {
        t.onChange(parseInt(e.target.value));
      }, t.renderSelectMode = function() {
        return m.createElement("select", { value: Kt(he(t.props.date)), className: "react-datepicker__month-year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(e) {
        var r = K(t.props.date, t.props.dateFormat, t.props.locale);
        return m.createElement(
          "div",
          { key: "read", style: { visibility: e ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: t.toggleDropdown },
          m.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
          m.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, r)
        );
      }, t.renderDropdown = function() {
        return m.createElement(jo, F({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var e = t.state.dropdownVisible, r = [t.renderReadView(!e)];
        return e && r.unshift(t.renderDropdown()), r;
      }, t.onChange = function(e) {
        t.toggleDropdown();
        var r = B(e);
        ie(t.props.date, r) && G(t.props.date, r) || t.props.onChange(r);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return o.prototype.render = function() {
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
    }, o;
  }(j)
), $o = (
  /** @class */
  function(a) {
    U(o, a);
    function o() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.state = {
        height: null
      }, t.scrollToTheSelectedTime = function() {
        requestAnimationFrame(function() {
          var e, r, n;
          t.list && (t.list.scrollTop = (n = t.centerLi && o.calcCenterPosition(t.props.monthRef ? t.props.monthRef.clientHeight - ((r = (e = t.header) === null || e === void 0 ? void 0 : e.clientHeight) !== null && r !== void 0 ? r : 0) : t.list.clientHeight, t.centerLi)) !== null && n !== void 0 ? n : 0);
        });
      }, t.handleClick = function(e) {
        var r, n;
        (t.props.minTime || t.props.maxTime) && Nr(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && Rr(e, t.props) || (n = (r = t.props).onChange) === null || n === void 0 || n.call(r, e);
      }, t.isSelectedTime = function(e) {
        return t.props.selected && Lo(t.props.selected, e);
      }, t.isDisabledTime = function(e) {
        return (t.props.minTime || t.props.maxTime) && Nr(e, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && Rr(e, t.props);
      }, t.liClasses = function(e) {
        var r, n = [
          "react-datepicker__time-list-item",
          t.props.timeClassName ? t.props.timeClassName(e) : void 0
        ];
        return t.isSelectedTime(e) && n.push("react-datepicker__time-list-item--selected"), t.isDisabledTime(e) && n.push("react-datepicker__time-list-item--disabled"), t.props.injectTimes && (le(e) * 3600 + ce(e) * 60 + fe(e)) % (((r = t.props.intervals) !== null && r !== void 0 ? r : o.defaultProps.intervals) * 60) !== 0 && n.push("react-datepicker__time-list-item--injected"), n.join(" ");
      }, t.handleOnKeyDown = function(e, r) {
        var n, i;
        e.key === y.Space && (e.preventDefault(), e.key = y.Enter), (e.key === y.ArrowUp || e.key === y.ArrowLeft) && e.target instanceof HTMLElement && e.target.previousSibling && (e.preventDefault(), e.target.previousSibling instanceof HTMLElement && e.target.previousSibling.focus()), (e.key === y.ArrowDown || e.key === y.ArrowRight) && e.target instanceof HTMLElement && e.target.nextSibling && (e.preventDefault(), e.target.nextSibling instanceof HTMLElement && e.target.nextSibling.focus()), e.key === y.Enter && t.handleClick(r), (i = (n = t.props).handleOnKeyDown) === null || i === void 0 || i.call(n, e);
      }, t.renderTimes = function() {
        for (var e, r = [], n = typeof t.props.format == "string" ? t.props.format : "p", i = (e = t.props.intervals) !== null && e !== void 0 ? e : o.defaultProps.intervals, s = t.props.selected || t.props.openToDate || B(), l = dt(s), u = t.props.injectTimes && t.props.injectTimes.sort(function(v, D) {
          return v.getTime() - D.getTime();
        }), c = 60 * Io(s), p = c / i, d = 0; d < p; d++) {
          var f = Bt(l, d * i);
          if (r.push(f), u) {
            var h = To(l, f, d, i, u);
            r = r.concat(h);
          }
        }
        var g = r.reduce(function(v, D) {
          return D.getTime() <= s.getTime() ? D : v;
        }, r[0]);
        return r.map(function(v) {
          return m.createElement("li", { key: v.valueOf(), onClick: t.handleClick.bind(t, v), className: t.liClasses(v), ref: function(D) {
            v === g && (t.centerLi = D);
          }, onKeyDown: function(D) {
            t.handleOnKeyDown(D, v);
          }, tabIndex: v === g ? 0 : -1, role: "option", "aria-selected": t.isSelectedTime(v) ? "true" : void 0, "aria-disabled": t.isDisabledTime(v) ? "true" : void 0 }, K(v, n, t.props.locale));
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
    return Object.defineProperty(o, "defaultProps", {
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
    }), o.prototype.componentDidMount = function() {
      this.scrollToTheSelectedTime(), this.props.monthRef && this.header && this.setState({
        height: this.props.monthRef.clientHeight - this.header.clientHeight
      });
    }, o.prototype.render = function() {
      var t = this, e, r = this.state.height;
      return m.createElement(
        "div",
        { className: "react-datepicker__time-container ".concat(((e = this.props.todayButton) !== null && e !== void 0 ? e : o.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "") },
        this.renderTimeCaption(),
        m.createElement(
          "div",
          { className: "react-datepicker__time" },
          m.createElement(
            "div",
            { className: "react-datepicker__time-box" },
            m.createElement("ul", { className: "react-datepicker__time-list", ref: function(n) {
              t.list = n;
            }, style: r ? { height: r } : {}, role: "listbox", "aria-label": this.props.timeCaption }, this.renderTimes())
          )
        )
      );
    }, o.calcCenterPosition = function(t, e) {
      return e.offsetTop - (t / 2 - e.clientHeight / 2);
    }, o;
  }(j)
), Kr = 3, zo = (
  /** @class */
  function(a) {
    U(o, a);
    function o(t) {
      var e = a.call(this, t) || this;
      return e.YEAR_REFS = se([], Array(e.props.yearItemNumber), !0).map(function() {
        return we();
      }), e.isDisabled = function(r) {
        return ee(r, {
          minDate: e.props.minDate,
          maxDate: e.props.maxDate,
          excludeDates: e.props.excludeDates,
          includeDates: e.props.includeDates,
          filterDate: e.props.filterDate
        });
      }, e.isExcluded = function(r) {
        return nr(r, {
          excludeDates: e.props.excludeDates
        });
      }, e.selectingDate = function() {
        var r;
        return (r = e.props.selectingDate) !== null && r !== void 0 ? r : e.props.preSelection;
      }, e.updateFocusOnPaginate = function(r) {
        var n = function() {
          var i, s;
          (s = (i = e.YEAR_REFS[r]) === null || i === void 0 ? void 0 : i.current) === null || s === void 0 || s.focus();
        };
        window.requestAnimationFrame(n);
      }, e.handleYearClick = function(r, n) {
        e.props.onDayClick && e.props.onDayClick(r, n);
      }, e.handleYearNavigation = function(r, n) {
        var i, s, l, u, c = e.props, p = c.date, d = c.yearItemNumber;
        if (!(p === void 0 || d === void 0)) {
          var f = ve(p, d).startPeriod;
          e.isDisabled(n) || e.isExcluded(n) || ((s = (i = e.props).setPreSelection) === null || s === void 0 || s.call(i, n), r - f < 0 ? e.updateFocusOnPaginate(d - (f - r)) : r - f >= d ? e.updateFocusOnPaginate(Math.abs(d - (r - f))) : (u = (l = e.YEAR_REFS[r - f]) === null || l === void 0 ? void 0 : l.current) === null || u === void 0 || u.focus());
        }
      }, e.isSameDay = function(r, n) {
        return A(r, n);
      }, e.isCurrentYear = function(r) {
        return r === I(B());
      }, e.isRangeStart = function(r) {
        return e.props.startDate && e.props.endDate && ie(oe(B(), r), e.props.startDate);
      }, e.isRangeEnd = function(r) {
        return e.props.startDate && e.props.endDate && ie(oe(B(), r), e.props.endDate);
      }, e.isInRange = function(r) {
        return ot(r, e.props.startDate, e.props.endDate);
      }, e.isInSelectingRange = function(r) {
        var n = e.props, i = n.selectsStart, s = n.selectsEnd, l = n.selectsRange, u = n.startDate, c = n.endDate;
        return !(i || s || l) || !e.selectingDate() ? !1 : i && c ? ot(r, e.selectingDate(), c) : s && u || l && u && !c ? ot(r, u, e.selectingDate()) : !1;
      }, e.isSelectingRangeStart = function(r) {
        var n;
        if (!e.isInSelectingRange(r))
          return !1;
        var i = e.props, s = i.startDate, l = i.selectsStart, u = oe(B(), r);
        return l ? ie(u, (n = e.selectingDate()) !== null && n !== void 0 ? n : null) : ie(u, s ?? null);
      }, e.isSelectingRangeEnd = function(r) {
        var n;
        if (!e.isInSelectingRange(r))
          return !1;
        var i = e.props, s = i.endDate, l = i.selectsEnd, u = i.selectsRange, c = oe(B(), r);
        return l || u ? ie(c, (n = e.selectingDate()) !== null && n !== void 0 ? n : null) : ie(c, s ?? null);
      }, e.isKeyboardSelected = function(r) {
        if (!(e.props.date === void 0 || e.props.selected == null || e.props.preSelection == null)) {
          var n = e.props, i = n.minDate, s = n.maxDate, l = n.excludeDates, u = n.includeDates, c = n.filterDate, p = Qe(oe(e.props.date, r)), d = (i || s || l || u || c) && ft(r, e.props);
          return !e.props.disabledKeyboardNavigation && !e.props.inline && !A(p, Qe(e.props.selected)) && A(p, Qe(e.props.preSelection)) && !d;
        }
      }, e.onYearClick = function(r, n) {
        var i = e.props.date;
        i !== void 0 && e.handleYearClick(Qe(oe(i, n)), r);
      }, e.onYearKeyDown = function(r, n) {
        var i, s, l = r.key, u = e.props, c = u.date, p = u.yearItemNumber, d = u.handleOnKeyDown;
        if (l !== y.Tab && r.preventDefault(), !e.props.disabledKeyboardNavigation)
          switch (l) {
            case y.Enter:
              if (e.props.selected == null)
                break;
              e.onYearClick(r, n), (s = (i = e.props).setPreSelection) === null || s === void 0 || s.call(i, e.props.selected);
              break;
            case y.ArrowRight:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(n + 1, ge(e.props.preSelection, 1));
              break;
            case y.ArrowLeft:
              if (e.props.preSelection == null)
                break;
              e.handleYearNavigation(n - 1, Fe(e.props.preSelection, 1));
              break;
            case y.ArrowUp: {
              if (c === void 0 || p === void 0 || e.props.preSelection == null)
                break;
              var f = ve(c, p).startPeriod, h = Kr, g = n - h;
              if (g < f) {
                var v = p % h;
                n >= f && n < f + v ? h = v : h += v, g = n - h;
              }
              e.handleYearNavigation(g, Fe(e.props.preSelection, h));
              break;
            }
            case y.ArrowDown: {
              if (c === void 0 || p === void 0 || e.props.preSelection == null)
                break;
              var D = ve(c, p).endPeriod, h = Kr, g = n + h;
              if (g > D) {
                var v = p % h;
                n <= D && n > D - v ? h = v : h += v, g = n + h;
              }
              e.handleYearNavigation(g, ge(e.props.preSelection, h));
              break;
            }
          }
        d && d(r);
      }, e.getYearClassNames = function(r) {
        var n = e.props, i = n.date, s = n.minDate, l = n.maxDate, u = n.selected, c = n.excludeDates, p = n.includeDates, d = n.filterDate, f = n.yearClassName;
        return z("react-datepicker__year-text", "react-datepicker__year-".concat(r), i ? f == null ? void 0 : f(oe(i, r)) : void 0, {
          "react-datepicker__year-text--selected": u ? r === I(u) : void 0,
          "react-datepicker__year-text--disabled": (s || l || c || p || d) && ft(r, e.props),
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
        var n = I(e.props.preSelection), i = ft(r, e.props);
        return r === n && !i ? "0" : "-1";
      }, e.getYearContent = function(r) {
        return e.props.renderYearContent ? e.props.renderYearContent(r) : r;
      }, e;
    }
    return o.prototype.render = function() {
      var t = this, e = [], r = this.props, n = r.date, i = r.yearItemNumber, s = r.onYearMouseEnter, l = r.onYearMouseLeave;
      if (n === void 0)
        return null;
      for (var u = ve(n, i), c = u.startPeriod, p = u.endPeriod, d = function(g) {
        e.push(m.createElement("div", { ref: f.YEAR_REFS[g - c], onClick: function(v) {
          t.onYearClick(v, g);
        }, onKeyDown: function(v) {
          Dn(v) && (v.preventDefault(), v.key = y.Enter), t.onYearKeyDown(v, g);
        }, tabIndex: Number(f.getYearTabIndex(g)), className: f.getYearClassNames(g), onMouseEnter: f.props.usePointerEvent ? void 0 : function(v) {
          return s(v, g);
        }, onPointerEnter: f.props.usePointerEvent ? function(v) {
          return s(v, g);
        } : void 0, onMouseLeave: f.props.usePointerEvent ? void 0 : function(v) {
          return l(v, g);
        }, onPointerLeave: f.props.usePointerEvent ? function(v) {
          return l(v, g);
        } : void 0, key: g, "aria-current": f.isCurrentYear(g) ? "date" : void 0 }, f.getYearContent(g)));
      }, f = this, h = c; h <= p; h++)
        d(h);
      return m.createElement(
        "div",
        { className: "react-datepicker__year" },
        m.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0 }, e)
      );
    }, o;
  }(j)
);
function Xo(a, o, t, e) {
  for (var r = [], n = 0; n < 2 * o + 1; n++) {
    var i = a + o - n, s = !0;
    t && (s = I(t) <= i), e && s && (s = I(e) >= i), s && r.push(i);
  }
  return r;
}
var Go = (
  /** @class */
  function(a) {
    U(o, a);
    function o(t) {
      var e = a.call(this, t) || this;
      e.renderOptions = function() {
        var s = e.props.year, l = e.state.yearsList.map(function(p) {
          return m.createElement(
            "div",
            { className: s === p ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", key: p, onClick: e.onChange.bind(e, p), "aria-selected": s === p ? "true" : void 0 },
            s === p ? m.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "",
            p
          );
        }), u = e.props.minDate ? I(e.props.minDate) : null, c = e.props.maxDate ? I(e.props.maxDate) : null;
        return (!c || !e.state.yearsList.find(function(p) {
          return p === c;
        })) && l.unshift(m.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "upcoming", onClick: e.incrementYears },
          m.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
        )), (!u || !e.state.yearsList.find(function(p) {
          return p === u;
        })) && l.push(m.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "previous", onClick: e.decrementYears },
          m.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
        )), l;
      }, e.onChange = function(s) {
        e.props.onChange(s);
      }, e.handleClickOutside = function() {
        e.props.onCancel();
      }, e.shiftYears = function(s) {
        var l = e.state.yearsList.map(function(u) {
          return u + s;
        });
        e.setState({
          yearsList: l
        });
      }, e.incrementYears = function() {
        return e.shiftYears(1);
      }, e.decrementYears = function() {
        return e.shiftYears(-1);
      };
      var r = t.yearDropdownItemNumber, n = t.scrollableYearDropdown, i = r || (n ? 10 : 5);
      return e.state = {
        yearsList: Xo(e.props.year, i, e.props.minDate, e.props.maxDate)
      }, e.dropdownRef = we(), e;
    }
    return o.prototype.componentDidMount = function() {
      var t = this.dropdownRef.current;
      if (t) {
        var e = t.children ? Array.from(t.children) : null, r = e ? e.find(function(n) {
          return n.ariaSelected;
        }) : null;
        t.scrollTop = r && r instanceof HTMLElement ? r.offsetTop + (r.clientHeight - t.clientHeight) / 2 : (t.scrollHeight - t.clientHeight) / 2;
      }
    }, o.prototype.render = function() {
      var t = z({
        "react-datepicker__year-dropdown": !0,
        "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
      });
      return m.createElement(Pt, { className: t, containerRef: this.dropdownRef, onClickOutside: this.handleClickOutside }, this.renderOptions());
    }, o;
  }(j)
), qo = (
  /** @class */
  function(a) {
    U(o, a);
    function o() {
      var t = a !== null && a.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var e = t.props.minDate ? I(t.props.minDate) : 1900, r = t.props.maxDate ? I(t.props.maxDate) : 2100, n = [], i = e; i <= r; i++)
          n.push(m.createElement("option", { key: i, value: i }, i));
        return n;
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
        return m.createElement(Go, F({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
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
        var n;
        (n = t.onSelect) === null || n === void 0 || n.call(t, e, r), t.setOpen();
      }, t.onSelect = function(e, r) {
        var n, i;
        (i = (n = t.props).onSelect) === null || i === void 0 || i.call(n, e, r);
      }, t.setOpen = function() {
        var e, r;
        (r = (e = t.props).setOpen) === null || r === void 0 || r.call(e, !0);
      }, t;
    }
    return o.prototype.render = function() {
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
    }, o;
  }(j)
), Zo = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select"
], Jo = function(a) {
  var o = (a.className || "").split(/\s+/);
  return Zo.some(function(t) {
    return o.indexOf(t) >= 0;
  });
}, ei = (
  /** @class */
  function(a) {
    U(o, a);
    function o(t) {
      var e = a.call(this, t) || this;
      return e.monthContainer = void 0, e.handleClickOutside = function(r) {
        e.props.onClickOutside(r);
      }, e.setClickOutsideRef = function() {
        return e.containerRef.current;
      }, e.handleDropdownFocus = function(r) {
        var n, i;
        Jo(r.target) && ((i = (n = e.props).onDropdownFocus) === null || i === void 0 || i.call(n, r));
      }, e.getDateInView = function() {
        var r = e.props, n = r.preSelection, i = r.selected, s = r.openToDate, l = vn(e.props), u = gn(e.props), c = B(), p = s || i || n;
        return p || (l && Re(c, l) ? l : u && _e(c, u) ? u : c);
      }, e.increaseMonth = function() {
        e.setState(function(r) {
          var n = r.date;
          return {
            date: be(n, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.decreaseMonth = function() {
        e.setState(function(r) {
          var n = r.date;
          return {
            date: Ee(n, 1)
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.handleDayClick = function(r, n, i) {
        e.props.onSelect(r, n, i), e.props.setPreSelection && e.props.setPreSelection(r);
      }, e.handleDayMouseEnter = function(r) {
        e.setState({ selectingDate: r }), e.props.onDayMouseEnter && e.props.onDayMouseEnter(r);
      }, e.handleMonthMouseLeave = function() {
        e.setState({ selectingDate: void 0 }), e.props.onMonthMouseLeave && e.props.onMonthMouseLeave();
      }, e.handleYearMouseEnter = function(r, n) {
        e.setState({ selectingDate: oe(B(), n) }), e.props.onYearMouseEnter && e.props.onYearMouseEnter(r, n);
      }, e.handleYearMouseLeave = function(r, n) {
        e.props.onYearMouseLeave && e.props.onYearMouseLeave(r, n);
      }, e.handleYearChange = function(r) {
        var n, i, s, l;
        (i = (n = e.props).onYearChange) === null || i === void 0 || i.call(n, r), e.setState({ isRenderAriaLiveMessage: !0 }), e.props.adjustDateOnChange && (e.props.onSelect(r), (l = (s = e.props).setOpen) === null || l === void 0 || l.call(s, !0)), e.props.setPreSelection && e.props.setPreSelection(r);
      }, e.getEnabledPreSelectionDateForMonth = function(r) {
        if (!ee(r, e.props))
          return r;
        for (var n = he(r), i = wo(r), s = Cn(i, n), l = null, u = 0; u <= s; u++) {
          var c = Me(n, u);
          if (!ee(c, e.props)) {
            l = c;
            break;
          }
        }
        return l;
      }, e.handleMonthChange = function(r) {
        var n, i, s, l = (n = e.getEnabledPreSelectionDateForMonth(r)) !== null && n !== void 0 ? n : r;
        e.handleCustomMonthChange(l), e.props.adjustDateOnChange && (e.props.onSelect(l), (s = (i = e.props).setOpen) === null || s === void 0 || s.call(i, !0)), e.props.setPreSelection && e.props.setPreSelection(l);
      }, e.handleCustomMonthChange = function(r) {
        var n, i;
        (i = (n = e.props).onMonthChange) === null || i === void 0 || i.call(n, r), e.setState({ isRenderAriaLiveMessage: !0 });
      }, e.handleMonthYearChange = function(r) {
        e.handleYearChange(r), e.handleMonthChange(r);
      }, e.changeYear = function(r) {
        e.setState(function(n) {
          var i = n.date;
          return {
            date: oe(i, Number(r))
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.changeMonth = function(r) {
        e.setState(function(n) {
          var i = n.date;
          return {
            date: ae(i, Number(r))
          };
        }, function() {
          return e.handleMonthChange(e.state.date);
        });
      }, e.changeMonthYear = function(r) {
        e.setState(function(n) {
          var i = n.date;
          return {
            date: oe(ae(i, q(r)), I(r))
          };
        }, function() {
          return e.handleMonthYearChange(e.state.date);
        });
      }, e.header = function(r) {
        r === void 0 && (r = e.state.date);
        var n = ye(r, e.props.locale, e.props.calendarStartDay), i = [];
        return e.props.showWeekNumbers && i.push(m.createElement("div", { key: "W", className: "react-datepicker__day-name" }, e.props.weekLabel || "#")), i.concat([0, 1, 2, 3, 4, 5, 6].map(function(s) {
          var l = Me(n, s), u = e.formatWeekday(l, e.props.locale), c = e.props.weekDayClassName ? e.props.weekDayClassName(l) : void 0;
          return m.createElement("div", { key: s, "aria-label": K(l, "EEEE", e.props.locale), className: z("react-datepicker__day-name", c) }, u);
        }));
      }, e.formatWeekday = function(r, n) {
        return e.props.formatWeekDay ? _o(r, e.props.formatWeekDay, n) : e.props.useWeekdaysShort ? So(r, n) : ko(r, n);
      }, e.decreaseYear = function() {
        e.setState(function(r) {
          var n, i = r.date;
          return {
            date: Fe(i, e.props.showYearPicker ? (n = e.props.yearItemNumber) !== null && n !== void 0 ? n : o.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.clearSelectingDate = function() {
        e.setState({ selectingDate: void 0 });
      }, e.renderPreviousButton = function() {
        var r, n, i;
        if (!e.props.renderCustomHeader) {
          var s = (r = e.props.monthsShown) !== null && r !== void 0 ? r : o.defaultProps.monthsShown, l = e.props.showPreviousMonths ? s - 1 : 0, u = (n = e.props.monthSelectedIn) !== null && n !== void 0 ? n : l, c = Ee(e.state.date, u), p;
          switch (!0) {
            case e.props.showMonthYearPicker:
              p = Lr(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              p = Po(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              p = Mo(e.state.date, e.props);
              break;
            default:
              p = Tr(c, e.props);
              break;
          }
          if (!(!((i = e.props.forceShowMonthNavigation) !== null && i !== void 0 ? i : o.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && p || e.props.showTimeSelectOnly)) {
            var d = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--previous"
            ], f = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--previous"
            ], h = e.decreaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (h = e.decreaseYear), p && e.props.showDisabledMonthNavigation && (f.push("react-datepicker__navigation--previous--disabled"), h = void 0);
            var g = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, v = e.props, D = v.previousMonthButtonLabel, _ = D === void 0 ? o.defaultProps.previousMonthButtonLabel : D, b = v.previousYearButtonLabel, k = b === void 0 ? o.defaultProps.previousYearButtonLabel : b, S = e.props, C = S.previousMonthAriaLabel, M = C === void 0 ? typeof _ == "string" ? _ : "Previous Month" : C, O = S.previousYearAriaLabel, x = O === void 0 ? typeof k == "string" ? k : "Previous Year" : O;
            return m.createElement(
              "button",
              { type: "button", className: f.join(" "), onClick: h, onKeyDown: e.props.handleOnKeyDown, "aria-label": g ? x : M },
              m.createElement("span", { className: d.join(" ") }, g ? k : _)
            );
          }
        }
      }, e.increaseYear = function() {
        e.setState(function(r) {
          var n, i = r.date;
          return {
            date: ge(i, e.props.showYearPicker ? (n = e.props.yearItemNumber) !== null && n !== void 0 ? n : o.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return e.handleYearChange(e.state.date);
        });
      }, e.renderNextButton = function() {
        var r;
        if (!e.props.renderCustomHeader) {
          var n;
          switch (!0) {
            case e.props.showMonthYearPicker:
              n = Yr(e.state.date, e.props);
              break;
            case e.props.showYearPicker:
              n = Oo(e.state.date, e.props);
              break;
            case e.props.showQuarterYearPicker:
              n = Eo(e.state.date, e.props);
              break;
            default:
              n = Ir(e.state.date, e.props);
              break;
          }
          if (!(!((r = e.props.forceShowMonthNavigation) !== null && r !== void 0 ? r : o.defaultProps.forceShowMonthNavigation) && !e.props.showDisabledMonthNavigation && n || e.props.showTimeSelectOnly)) {
            var i = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--next"
            ], s = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--next"
            ];
            e.props.showTimeSelect && i.push("react-datepicker__navigation--next--with-time"), e.props.todayButton && i.push("react-datepicker__navigation--next--with-today-button");
            var l = e.increaseMonth;
            (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker) && (l = e.increaseYear), n && e.props.showDisabledMonthNavigation && (i.push("react-datepicker__navigation--next--disabled"), l = void 0);
            var u = e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker, c = e.props, p = c.nextMonthButtonLabel, d = p === void 0 ? o.defaultProps.nextMonthButtonLabel : p, f = c.nextYearButtonLabel, h = f === void 0 ? o.defaultProps.nextYearButtonLabel : f, g = e.props, v = g.nextMonthAriaLabel, D = v === void 0 ? typeof d == "string" ? d : "Next Month" : v, _ = g.nextYearAriaLabel, b = _ === void 0 ? typeof h == "string" ? h : "Next Year" : _;
            return m.createElement(
              "button",
              { type: "button", className: i.join(" "), onClick: l, onKeyDown: e.props.handleOnKeyDown, "aria-label": u ? b : D },
              m.createElement("span", { className: s.join(" ") }, u ? h : d)
            );
          }
        }
      }, e.renderCurrentMonth = function(r) {
        r === void 0 && (r = e.state.date);
        var n = ["react-datepicker__current-month"];
        return e.props.showYearDropdown && n.push("react-datepicker__current-month--hasYearDropdown"), e.props.showMonthDropdown && n.push("react-datepicker__current-month--hasMonthDropdown"), e.props.showMonthYearDropdown && n.push("react-datepicker__current-month--hasMonthYearDropdown"), m.createElement("h2", { className: n.join(" ") }, K(r, e.props.dateFormat, e.props.locale));
      }, e.renderYearDropdown = function(r) {
        if (r === void 0 && (r = !1), !(!e.props.showYearDropdown || r))
          return m.createElement(qo, F({}, o.defaultProps, e.props, { date: e.state.date, onChange: e.changeYear, year: I(e.state.date) }));
      }, e.renderMonthDropdown = function(r) {
        if (r === void 0 && (r = !1), !(!e.props.showMonthDropdown || r))
          return m.createElement(Ko, F({}, o.defaultProps, e.props, { month: q(e.state.date), onChange: e.changeMonth }));
      }, e.renderMonthYearDropdown = function(r) {
        if (r === void 0 && (r = !1), !(!e.props.showMonthYearDropdown || r))
          return m.createElement(Uo, F({}, o.defaultProps, e.props, { date: e.state.date, onChange: e.changeMonthYear }));
      }, e.handleTodayButtonClick = function(r) {
        e.props.onSelect(Er(), r), e.props.setPreSelection && e.props.setPreSelection(Er());
      }, e.renderTodayButton = function() {
        if (!(!e.props.todayButton || e.props.showTimeSelectOnly))
          return m.createElement("div", { className: "react-datepicker__today-button", onClick: e.handleTodayButtonClick }, e.props.todayButton);
      }, e.renderDefaultHeader = function(r) {
        var n = r.monthDate, i = r.i;
        return m.createElement(
          "div",
          { className: "react-datepicker__header ".concat(e.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "") },
          e.renderCurrentMonth(n),
          m.createElement(
            "div",
            { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(e.props.dropdownMode), onFocus: e.handleDropdownFocus },
            e.renderMonthDropdown(i !== 0),
            e.renderMonthYearDropdown(i !== 0),
            e.renderYearDropdown(i !== 0)
          ),
          m.createElement("div", { className: "react-datepicker__day-names" }, e.header(n))
        );
      }, e.renderCustomHeader = function(r) {
        var n, i, s = r.monthDate, l = r.i;
        if (e.props.showTimeSelect && !e.state.monthContainer || e.props.showTimeSelectOnly)
          return null;
        var u = Tr(e.state.date, e.props), c = Ir(e.state.date, e.props), p = Lr(e.state.date, e.props), d = Yr(e.state.date, e.props), f = !e.props.showMonthYearPicker && !e.props.showQuarterYearPicker && !e.props.showYearPicker;
        return m.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--custom", onFocus: e.props.onDropdownFocus },
          (i = (n = e.props).renderCustomHeader) === null || i === void 0 ? void 0 : i.call(n, F(F({}, e.state), { customHeaderCount: l, monthDate: s, changeMonth: e.changeMonth, changeYear: e.changeYear, decreaseMonth: e.decreaseMonth, increaseMonth: e.increaseMonth, decreaseYear: e.decreaseYear, increaseYear: e.increaseYear, prevMonthButtonDisabled: u, nextMonthButtonDisabled: c, prevYearButtonDisabled: p, nextYearButtonDisabled: d })),
          f && m.createElement("div", { className: "react-datepicker__day-names" }, e.header(s))
        );
      }, e.renderYearHeader = function(r) {
        var n = r.monthDate, i = e.props, s = i.showYearPicker, l = i.yearItemNumber, u = l === void 0 ? o.defaultProps.yearItemNumber : l, c = ve(n, u), p = c.startPeriod, d = c.endPeriod;
        return m.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, s ? "".concat(p, " - ").concat(d) : I(n));
      }, e.renderHeader = function(r) {
        var n = r.monthDate, i = r.i, s = i === void 0 ? 0 : i, l = { monthDate: n, i: s };
        switch (!0) {
          case e.props.renderCustomHeader !== void 0:
            return e.renderCustomHeader(l);
          case (e.props.showMonthYearPicker || e.props.showQuarterYearPicker || e.props.showYearPicker):
            return e.renderYearHeader(l);
          default:
            return e.renderDefaultHeader(l);
        }
      }, e.renderMonths = function() {
        var r, n;
        if (!(e.props.showTimeSelectOnly || e.props.showYearPicker)) {
          for (var i = [], s = (r = e.props.monthsShown) !== null && r !== void 0 ? r : o.defaultProps.monthsShown, l = e.props.showPreviousMonths ? s - 1 : 0, u = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? ge(e.state.date, l) : Ee(e.state.date, l), c = (n = e.props.monthSelectedIn) !== null && n !== void 0 ? n : l, p = 0; p < s; ++p) {
            var d = p - c + l, f = e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? ge(u, d) : be(u, d), h = "month-".concat(p), g = p < s - 1, v = p > 0;
            i.push(m.createElement(
              "div",
              { key: h, ref: function(D) {
                e.monthContainer = D ?? void 0;
              }, className: "react-datepicker__month-container" },
              e.renderHeader({ monthDate: f, i: p }),
              m.createElement(Bo, F({}, o.defaultProps, e.props, { ariaLabelPrefix: e.props.monthAriaLabelPrefix, day: f, onDayClick: e.handleDayClick, handleOnKeyDown: e.props.handleOnDayKeyDown, handleOnMonthKeyDown: e.props.handleOnKeyDown, onDayMouseEnter: e.handleDayMouseEnter, onMouseLeave: e.handleMonthMouseLeave, orderInDisplay: p, selectingDate: e.state.selectingDate, monthShowsDuplicateDaysEnd: g, monthShowsDuplicateDaysStart: v }))
            ));
          }
          return i;
        }
      }, e.renderYears = function() {
        if (!e.props.showTimeSelectOnly && e.props.showYearPicker)
          return m.createElement(
            "div",
            { className: "react-datepicker__year--container" },
            e.renderHeader({ monthDate: e.state.date }),
            m.createElement(zo, F({}, o.defaultProps, e.props, { selectingDate: e.state.selectingDate, date: e.state.date, onDayClick: e.handleDayClick, clearSelectingDate: e.clearSelectingDate, onYearMouseEnter: e.handleYearMouseEnter, onYearMouseLeave: e.handleYearMouseLeave }))
          );
      }, e.renderTimeSection = function() {
        if (e.props.showTimeSelect && (e.state.monthContainer || e.props.showTimeSelectOnly))
          return m.createElement($o, F({}, o.defaultProps, e.props, { onChange: e.props.onTimeChange, format: e.props.timeFormat, intervals: e.props.timeIntervals, monthRef: e.state.monthContainer }));
      }, e.renderInputTimeSection = function() {
        var r = e.props.selected ? new Date(e.props.selected) : void 0, n = r && de(r) && !!e.props.selected, i = n ? "".concat(Fr(r.getHours()), ":").concat(Fr(r.getMinutes())) : "";
        if (e.props.showTimeInput)
          return m.createElement(Yo, F({}, o.defaultProps, e.props, { date: r, timeString: i, onChange: e.props.onTimeChange }));
      }, e.renderAriaLiveRegion = function() {
        var r, n = ve(e.state.date, (r = e.props.yearItemNumber) !== null && r !== void 0 ? r : o.defaultProps.yearItemNumber), i = n.startPeriod, s = n.endPeriod, l;
        return e.props.showYearPicker ? l = "".concat(i, " - ").concat(s) : e.props.showMonthYearPicker || e.props.showQuarterYearPicker ? l = I(e.state.date) : l = "".concat(rr(q(e.state.date), e.props.locale), " ").concat(I(e.state.date)), m.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, e.state.isRenderAriaLiveMessage && l);
      }, e.renderChildren = function() {
        if (e.props.children)
          return m.createElement("div", { className: "react-datepicker__children-container" }, e.props.children);
      }, e.containerRef = we(), e.state = {
        date: e.getDateInView(),
        selectingDate: void 0,
        monthContainer: void 0,
        isRenderAriaLiveMessage: !1
      }, e;
    }
    return Object.defineProperty(o, "defaultProps", {
      get: function() {
        return {
          monthsShown: 1,
          forceShowMonthNavigation: !1,
          timeCaption: "Time",
          previousYearButtonLabel: "Previous Year",
          nextYearButtonLabel: "Next Year",
          previousMonthButtonLabel: "Previous Month",
          nextMonthButtonLabel: "Next Month",
          yearItemNumber: Je
        };
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.componentDidMount = function() {
      var t = this;
      this.props.showTimeSelect && (this.assignMonthContainer = function() {
        t.setState({ monthContainer: t.monthContainer });
      }());
    }, o.prototype.componentDidUpdate = function(t) {
      var e = this;
      if (this.props.preSelection && (!A(this.props.preSelection, t.preSelection) || this.props.monthSelectedIn !== t.monthSelectedIn)) {
        var r = !G(this.state.date, this.props.preSelection);
        this.setState({
          date: this.props.preSelection
        }, function() {
          return r && e.handleCustomMonthChange(e.state.date);
        });
      } else this.props.openToDate && !A(this.props.openToDate, t.openToDate) && this.setState({
        date: this.props.openToDate
      });
    }, o.prototype.render = function() {
      var t = this.props.container || po;
      return m.createElement(
        Pt,
        { onClickOutside: this.handleClickOutside, style: { display: "contents" }, containerRef: this.containerRef, ignoreClass: this.props.outsideClickIgnoreClass },
        m.createElement(
          t,
          { className: z("react-datepicker", this.props.className, {
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
    }, o;
  }(j)
), ti = function(a) {
  var o = a.icon, t = a.className, e = t === void 0 ? "" : t, r = a.onClick, n = "react-datepicker__calendar-icon";
  return typeof o == "string" ? m.createElement("i", { className: "".concat(n, " ").concat(o, " ").concat(e), "aria-hidden": "true", onClick: r }) : m.isValidElement(o) ? m.cloneElement(o, {
    className: "".concat(o.props.className || "", " ").concat(n, " ").concat(e),
    onClick: function(i) {
      typeof o.props.onClick == "function" && o.props.onClick(i), typeof r == "function" && r(i);
    }
  }) : m.createElement(
    "svg",
    { className: "".concat(n, " ").concat(e), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", onClick: r },
    m.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })
  );
}, yn = (
  /** @class */
  function(a) {
    U(o, a);
    function o(t) {
      var e = a.call(this, t) || this;
      return e.portalRoot = null, e.el = document.createElement("div"), e;
    }
    return o.prototype.componentDidMount = function() {
      this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
    }, o.prototype.componentWillUnmount = function() {
      this.portalRoot && this.portalRoot.removeChild(this.el);
    }, o.prototype.render = function() {
      return Kn.createPortal(this.props.children, this.el);
    }, o;
  }(j)
), ri = "[tabindex], a, button, input, select, textarea", ni = function(a) {
  return (a instanceof HTMLAnchorElement || !a.disabled) && a.tabIndex !== -1;
}, wn = (
  /** @class */
  function(a) {
    U(o, a);
    function o(t) {
      var e = a.call(this, t) || this;
      return e.getTabChildren = function() {
        var r;
        return Array.prototype.slice.call((r = e.tabLoopRef.current) === null || r === void 0 ? void 0 : r.querySelectorAll(ri), 1, -1).filter(ni);
      }, e.handleFocusStart = function() {
        var r = e.getTabChildren();
        r && r.length > 1 && r[r.length - 1].focus();
      }, e.handleFocusEnd = function() {
        var r = e.getTabChildren();
        r && r.length > 1 && r[0].focus();
      }, e.tabLoopRef = we(), e;
    }
    return o.prototype.render = function() {
      var t;
      return ((t = this.props.enableTabLoop) !== null && t !== void 0 ? t : o.defaultProps.enableTabLoop) ? m.createElement(
        "div",
        { className: "react-datepicker__tab-loop", ref: this.tabLoopRef },
        m.createElement("div", { className: "react-datepicker__tab-loop__start", tabIndex: 0, onFocus: this.handleFocusStart }),
        this.props.children,
        m.createElement("div", { className: "react-datepicker__tab-loop__end", tabIndex: 0, onFocus: this.handleFocusEnd })
      ) : this.props.children;
    }, o.defaultProps = {
      enableTabLoop: !0
    }, o;
  }(j)
);
function ai(a) {
  var o = function(t) {
    var e, r = typeof t.hidePopper == "boolean" ? t.hidePopper : !0, n = Ht(null), i = uo(F({ open: !r, whileElementsMounted: Ha, placement: t.popperPlacement, middleware: se([
      Xa({ padding: 15 }),
      za(10),
      Ga({ element: n })
    ], (e = t.popperModifiers) !== null && e !== void 0 ? e : [], !0) }, t.popperProps)), s = F(F({}, t), { hidePopper: r, popperProps: F(F({}, i), { arrowRef: n }) });
    return m.createElement(a, F({}, s));
  };
  return o;
}
var oi = (
  /** @class */
  function(a) {
    U(o, a);
    function o() {
      return a !== null && a.apply(this, arguments) || this;
    }
    return Object.defineProperty(o, "defaultProps", {
      get: function() {
        return {
          hidePopper: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.render = function() {
      var t = this.props, e = t.className, r = t.wrapperClassName, n = t.hidePopper, i = n === void 0 ? o.defaultProps.hidePopper : n, s = t.popperComponent, l = t.targetComponent, u = t.enableTabLoop, c = t.popperOnKeyDown, p = t.portalId, d = t.portalHost, f = t.popperProps, h = t.showArrow, g = void 0;
      if (!i) {
        var v = z("react-datepicker-popper", e);
        g = m.createElement(
          wn,
          { enableTabLoop: u },
          m.createElement(
            "div",
            { ref: f.refs.setFloating, style: f.floatingStyles, className: v, "data-placement": f.placement, onKeyDown: c },
            s,
            h && m.createElement(no, { ref: f.arrowRef, context: f.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })
          )
        );
      }
      this.props.popperContainer && (g = kn(this.props.popperContainer, {}, g)), p && !i && (g = m.createElement(yn, { portalId: p, portalHost: d }, g));
      var D = z("react-datepicker-wrapper", r);
      return m.createElement(
        m.Fragment,
        null,
        m.createElement("div", { ref: f.refs.setReference, className: D }, l),
        g
      );
    }, o;
  }(j)
), ii = ai(oi), Qr = "react-datepicker-ignore-onclickoutside";
function si(a, o) {
  return a && o ? q(a) !== q(o) || I(a) !== I(o) : a !== o;
}
var Ft = "Date input not valid.", jr = (
  /** @class */
  function(a) {
    U(o, a);
    function o(t) {
      var e = a.call(this, t) || this;
      return e.calendar = null, e.input = null, e.getPreSelection = function() {
        return e.props.openToDate ? e.props.openToDate : e.props.selectsEnd && e.props.startDate ? e.props.startDate : e.props.selectsStart && e.props.endDate ? e.props.endDate : B();
      }, e.modifyHolidays = function() {
        var r;
        return (r = e.props.holidays) === null || r === void 0 ? void 0 : r.reduce(function(n, i) {
          var s = new Date(i.date);
          return de(s) ? se(se([], n, !0), [F(F({}, i), { date: s })], !1) : n;
        }, []);
      }, e.calcInitialState = function() {
        var r, n = e.getPreSelection(), i = vn(e.props), s = gn(e.props), l = i && Re(n, dt(i)) ? i : s && _e(n, Pr(s)) ? s : n;
        return {
          open: e.props.startOpen || !1,
          preventFocus: !1,
          inputValue: null,
          preSelection: (r = e.props.selectsRange ? e.props.startDate : e.props.selected) !== null && r !== void 0 ? r : l,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: Ar(e.props.highlightDates),
          focused: !1,
          // used to focus day in inline version after month has changed, but not on
          // initial render
          shouldFocusDayInline: !1,
          isRenderAriaLiveMessage: !1,
          wasHidden: !1
        };
      }, e.resetHiddenStatus = function() {
        e.setState(F(F({}, e.state), { wasHidden: !1 }));
      }, e.setHiddenStatus = function() {
        e.setState(F(F({}, e.state), { wasHidden: !0 }));
      }, e.setHiddenStateOnVisibilityHidden = function() {
        document.visibilityState === "hidden" && e.setHiddenStatus();
      }, e.clearPreventFocusTimeout = function() {
        e.preventFocusTimeout && clearTimeout(e.preventFocusTimeout);
      }, e.safeFocus = function() {
        setTimeout(function() {
          var r, n;
          (n = (r = e.input) === null || r === void 0 ? void 0 : r.focus) === null || n === void 0 || n.call(r, { preventScroll: !0 });
        }, 0);
      }, e.safeBlur = function() {
        setTimeout(function() {
          var r, n;
          (n = (r = e.input) === null || r === void 0 ? void 0 : r.blur) === null || n === void 0 || n.call(r);
        }, 0);
      }, e.setFocus = function() {
        e.safeFocus();
      }, e.setBlur = function() {
        e.safeBlur(), e.cancelFocusInput();
      }, e.setOpen = function(r, n) {
        n === void 0 && (n = !1), e.setState({
          open: r,
          preSelection: r && e.state.open ? e.state.preSelection : e.calcInitialState().preSelection,
          lastPreSelectChange: Wt
        }, function() {
          r || e.setState(function(i) {
            return {
              focused: n ? i.focused : !1
            };
          }, function() {
            !n && e.setBlur(), e.setState({ inputValue: null });
          });
        });
      }, e.inputOk = function() {
        return De(e.state.preSelection);
      }, e.isCalendarOpen = function() {
        return e.props.open === void 0 ? e.state.open && !e.props.disabled && !e.props.readOnly : e.props.open;
      }, e.handleFocus = function(r) {
        var n, i, s = e.state.wasHidden, l = s ? e.state.open : !0;
        s && e.resetHiddenStatus(), !e.state.preventFocus && l && ((i = (n = e.props).onFocus) === null || i === void 0 || i.call(n, r), !e.props.preventOpenOnFocus && !e.props.readOnly && e.setOpen(!0)), e.setState({ focused: !0 });
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
        var n, i;
        (!e.state.open || e.props.withPortal || e.props.showTimeInput) && ((i = (n = e.props).onBlur) === null || i === void 0 || i.call(n, r)), e.setState({ focused: !1 });
      }, e.handleCalendarClickOutside = function(r) {
        var n, i;
        e.props.inline || e.setOpen(!1), (i = (n = e.props).onClickOutside) === null || i === void 0 || i.call(n, r), e.props.withPortal && r.preventDefault();
      }, e.handleChange = function() {
        for (var r, n, i = [], s = 0; s < arguments.length; s++)
          i[s] = arguments[s];
        var l = i[0];
        if (!(e.props.onChangeRaw && (e.props.onChangeRaw.apply(e, i), !l || typeof l.isDefaultPrevented != "function" || l.isDefaultPrevented()))) {
          e.setState({
            inputValue: (l == null ? void 0 : l.target) instanceof HTMLInputElement ? l.target.value : null,
            lastPreSelectChange: li
          });
          var u = e.props, c = u.dateFormat, p = c === void 0 ? o.defaultProps.dateFormat : c, d = u.strictParsing, f = d === void 0 ? o.defaultProps.strictParsing : d, h = u.selectsRange, g = u.startDate, v = u.endDate, D = (l == null ? void 0 : l.target) instanceof HTMLInputElement ? l.target.value : "";
          if (h) {
            var _ = D.split("-", 2).map(function(L) {
              return L.trim();
            }), b = _[0], k = _[1], S = Lt(b ?? "", p, e.props.locale, f), C = Lt(k ?? "", p, e.props.locale, f), M = (g == null ? void 0 : g.getTime()) !== (S == null ? void 0 : S.getTime()), O = (v == null ? void 0 : v.getTime()) !== (C == null ? void 0 : C.getTime());
            if (!M && !O || S && ee(S, e.props) || C && ee(C, e.props))
              return;
            (n = (r = e.props).onChange) === null || n === void 0 || n.call(r, [S, C], l);
          } else {
            var x = Lt(D, p, e.props.locale, f, e.props.minDate);
            e.props.showTimeSelectOnly && e.props.selected && x && !A(x, e.props.selected) && (x = Fn(e.props.selected, {
              hours: le(x),
              minutes: ce(x),
              seconds: fe(x)
            })), (x || !D) && e.setSelected(x, l, !0);
          }
        }
      }, e.handleSelect = function(r, n, i) {
        if (e.props.shouldCloseOnSelect && !e.props.showTimeSelect && e.sendFocusBackToInput(), e.props.onChangeRaw && e.props.onChangeRaw(n), e.setSelected(r, n, !1, i), e.props.showDateSelect && e.setState({ isRenderAriaLiveMessage: !0 }), !e.props.shouldCloseOnSelect || e.props.showTimeSelect)
          e.setPreSelection(r);
        else if (!e.props.inline) {
          e.props.selectsRange || e.setOpen(!1);
          var s = e.props, l = s.startDate, u = s.endDate;
          l && !u && (e.props.swapRange || !Br(r, l)) && e.setOpen(!1);
        }
      }, e.setSelected = function(r, n, i, s) {
        var l, u, c = r;
        if (e.props.showYearPicker) {
          if (c !== null && ft(I(c), e.props))
            return;
        } else if (e.props.showMonthYearPicker) {
          if (c !== null && mn(c, e.props))
            return;
        } else if (c !== null && ee(c, e.props))
          return;
        var p = e.props, d = p.onChange, f = p.selectsRange, h = p.startDate, g = p.endDate, v = p.selectsMultiple, D = p.selectedDates, _ = p.minTime, b = p.swapRange;
        if (!xe(e.props.selected, c) || e.props.allowSameDay || f || v)
          if (c !== null && (e.props.selected && (!i || !e.props.showTimeSelect && !e.props.showTimeSelectOnly && !e.props.showTimeInput) && (c = Yt(c, {
            hour: le(e.props.selected),
            minute: ce(e.props.selected),
            second: fe(e.props.selected)
          })), !i && (e.props.showTimeSelect || e.props.showTimeSelectOnly) && _ && (c = Yt(c, {
            hour: _.getHours(),
            minute: _.getMinutes(),
            second: _.getSeconds()
          })), e.props.inline || e.setState({
            preSelection: c
          }), e.props.focusSelectedMonth || e.setState({ monthSelectedIn: s })), f) {
            var k = !h && !g, S = h && !g, C = h && g;
            k ? d == null || d([c, null], n) : S && (c === null ? d == null || d([null, null], n) : Br(c, h) ? b ? d == null || d([c, h], n) : d == null || d([c, null], n) : d == null || d([h, c], n)), C && (d == null || d([c, null], n));
          } else if (v) {
            if (c !== null)
              if (!(D != null && D.length))
                d == null || d([c], n);
              else {
                var M = D.some(function(x) {
                  return A(x, c);
                });
                if (M) {
                  var O = D.filter(function(x) {
                    return !A(x, c);
                  });
                  d == null || d(O, n);
                } else
                  d == null || d(se(se([], D, !0), [c], !1), n);
              }
          } else
            d == null || d(c, n);
        i || ((u = (l = e.props).onSelect) === null || u === void 0 || u.call(l, c, n), e.setState({ inputValue: null }));
      }, e.setPreSelection = function(r) {
        var n = De(e.props.minDate), i = De(e.props.maxDate), s = !0;
        if (r) {
          var l = dt(r);
          if (n && i)
            s = je(r, e.props.minDate, e.props.maxDate);
          else if (n) {
            var u = dt(e.props.minDate);
            s = _e(r, u) || xe(l, u);
          } else if (i) {
            var c = Pr(e.props.maxDate);
            s = Re(r, c) || xe(l, c);
          }
        }
        s && e.setState({
          preSelection: r
        });
      }, e.toggleCalendar = function() {
        e.setOpen(!e.state.open);
      }, e.handleTimeChange = function(r) {
        var n, i;
        if (!(e.props.selectsRange || e.props.selectsMultiple)) {
          var s = e.props.selected ? e.props.selected : e.getPreSelection(), l = e.props.selected ? r : Yt(s, {
            hour: le(r),
            minute: ce(r)
          });
          e.setState({
            preSelection: l
          }), (i = (n = e.props).onChange) === null || i === void 0 || i.call(n, l), e.props.shouldCloseOnSelect && !e.props.showTimeInput && (e.sendFocusBackToInput(), e.setOpen(!1)), e.props.showTimeInput && e.setOpen(!0), (e.props.showTimeSelectOnly || e.props.showTimeSelect) && e.setState({ isRenderAriaLiveMessage: !0 }), e.setState({ inputValue: null });
        }
      }, e.onInputClick = function() {
        var r, n;
        !e.props.disabled && !e.props.readOnly && e.setOpen(!0), (n = (r = e.props).onInputClick) === null || n === void 0 || n.call(r);
      }, e.onInputKeyDown = function(r) {
        var n, i, s, l, u, c;
        (i = (n = e.props).onKeyDown) === null || i === void 0 || i.call(n, r);
        var p = r.key;
        if (!e.state.open && !e.props.inline && !e.props.preventOpenOnFocus) {
          (p === y.ArrowDown || p === y.ArrowUp || p === y.Enter) && ((s = e.onInputClick) === null || s === void 0 || s.call(e));
          return;
        }
        if (e.state.open) {
          if (p === y.ArrowDown || p === y.ArrowUp) {
            r.preventDefault();
            var d = e.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : e.props.showWeekPicker && e.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : e.props.showFullMonthYearPicker || e.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]', f = ((l = e.calendar) === null || l === void 0 ? void 0 : l.containerRef.current) instanceof Element && e.calendar.containerRef.current.querySelector(d);
            f instanceof HTMLElement && f.focus({ preventScroll: !0 });
            return;
          }
          var h = B(e.state.preSelection);
          p === y.Enter ? (r.preventDefault(), r.target.blur(), e.inputOk() && e.state.lastPreSelectChange === Wt ? (e.handleSelect(h, r), !e.props.shouldCloseOnSelect && e.setPreSelection(h)) : e.setOpen(!1)) : p === y.Escape ? (r.preventDefault(), r.target.blur(), e.sendFocusBackToInput(), e.setOpen(!1)) : p === y.Tab && e.setOpen(!1), e.inputOk() || (c = (u = e.props).onInputError) === null || c === void 0 || c.call(u, { code: 1, msg: Ft });
        }
      }, e.onPortalKeyDown = function(r) {
        var n = r.key;
        n === y.Escape && (r.preventDefault(), e.setState({
          preventFocus: !0
        }, function() {
          e.setOpen(!1), setTimeout(function() {
            e.setFocus(), e.setState({ preventFocus: !1 });
          });
        }));
      }, e.onDayKeyDown = function(r) {
        var n, i, s, l, u, c, p = e.props, d = p.minDate, f = p.maxDate, h = p.disabledKeyboardNavigation, g = p.showWeekPicker, v = p.shouldCloseOnSelect, D = p.locale, _ = p.calendarStartDay, b = p.adjustDateOnChange, k = p.inline;
        if ((i = (n = e.props).onKeyDown) === null || i === void 0 || i.call(n, r), !h) {
          var S = r.key, C = r.shiftKey, M = B(e.state.preSelection), O = function(W, E) {
            var T = E;
            switch (W) {
              case y.ArrowRight:
                T = g ? Vt(E, 1) : Me(E, 1);
                break;
              case y.ArrowLeft:
                T = g ? pr(E, 1) : Bn(E, 1);
                break;
              case y.ArrowUp:
                T = pr(E, 1);
                break;
              case y.ArrowDown:
                T = Vt(E, 1);
                break;
              case y.PageUp:
                T = C ? Fe(E, 1) : Ee(E, 1);
                break;
              case y.PageDown:
                T = C ? ge(E, 1) : be(E, 1);
                break;
              case y.Home:
                T = ye(E, D, _);
                break;
              case y.End:
                T = yo(E);
                break;
            }
            return T;
          }, x = function(W, E) {
            for (var T = 40, R = W, Q = !1, re = 0, ne = O(W, E); !Q; ) {
              if (re >= T) {
                ne = E;
                break;
              }
              d && ne < d && (R = y.ArrowRight, ne = ee(d, e.props) ? O(R, ne) : d), f && ne > f && (R = y.ArrowLeft, ne = ee(f, e.props) ? O(R, ne) : f), ee(ne, e.props) ? ((R === y.PageUp || R === y.Home) && (R = y.ArrowRight), (R === y.PageDown || R === y.End) && (R = y.ArrowLeft), ne = O(R, ne)) : Q = !0, re++;
            }
            return ne;
          };
          if (S === y.Enter) {
            r.preventDefault(), e.handleSelect(M, r), !v && e.setPreSelection(M);
            return;
          } else if (S === y.Escape) {
            r.preventDefault(), e.setOpen(!1), e.inputOk() || (l = (s = e.props).onInputError) === null || l === void 0 || l.call(s, { code: 1, msg: Ft });
            return;
          }
          var L = null;
          switch (S) {
            case y.ArrowLeft:
            case y.ArrowRight:
            case y.ArrowUp:
            case y.ArrowDown:
            case y.PageUp:
            case y.PageDown:
            case y.Home:
            case y.End:
              L = x(S, M);
              break;
          }
          if (!L) {
            (c = (u = e.props).onInputError) === null || c === void 0 || c.call(u, { code: 1, msg: Ft });
            return;
          }
          if (r.preventDefault(), e.setState({ lastPreSelectChange: Wt }), b && e.setSelected(L), e.setPreSelection(L), k) {
            var V = q(M), w = q(L), Y = I(M), N = I(L);
            V !== w || Y !== N ? e.setState({ shouldFocusDayInline: !0 }) : e.setState({ shouldFocusDayInline: !1 });
          }
        }
      }, e.onPopperKeyDown = function(r) {
        var n = r.key;
        n === y.Escape && (r.preventDefault(), e.sendFocusBackToInput());
      }, e.onClearClick = function(r) {
        r && r.preventDefault && r.preventDefault(), e.sendFocusBackToInput();
        var n = e.props, i = n.selectsRange, s = n.onChange;
        i ? s == null || s([null, null], r) : s == null || s(null, r), e.setState({ inputValue: null });
      }, e.clear = function() {
        e.onClearClick();
      }, e.onScroll = function(r) {
        typeof e.props.closeOnScroll == "boolean" && e.props.closeOnScroll ? (r.target === document || r.target === document.documentElement || r.target === document.body) && e.setOpen(!1) : typeof e.props.closeOnScroll == "function" && e.props.closeOnScroll(r) && e.setOpen(!1);
      }, e.renderCalendar = function() {
        var r, n;
        return !e.props.inline && !e.isCalendarOpen() ? null : m.createElement(ei, F({ showMonthYearDropdown: void 0, ref: function(i) {
          e.calendar = i;
        } }, e.props, e.state, { setOpen: e.setOpen, dateFormat: (r = e.props.dateFormatCalendar) !== null && r !== void 0 ? r : o.defaultProps.dateFormatCalendar, onSelect: e.handleSelect, onClickOutside: e.handleCalendarClickOutside, holidays: No(e.modifyHolidays()), outsideClickIgnoreClass: Qr, onDropdownFocus: e.handleDropdownFocus, onTimeChange: e.handleTimeChange, className: e.props.calendarClassName, container: e.props.calendarContainer, handleOnKeyDown: e.props.onKeyDown, handleOnDayKeyDown: e.onDayKeyDown, setPreSelection: e.setPreSelection, dropdownMode: (n = e.props.dropdownMode) !== null && n !== void 0 ? n : o.defaultProps.dropdownMode }), e.props.children);
      }, e.renderAriaLiveRegion = function() {
        var r = e.props, n = r.dateFormat, i = n === void 0 ? o.defaultProps.dateFormat : n, s = r.locale, l = e.props.showTimeInput || e.props.showTimeSelect, u = l ? "PPPPp" : "PPPP", c;
        return e.props.selectsRange ? c = "Selected start date: ".concat(J(e.props.startDate, {
          dateFormat: u,
          locale: s
        }), ". ").concat(e.props.endDate ? "End date: " + J(e.props.endDate, {
          dateFormat: u,
          locale: s
        }) : "") : e.props.showTimeSelectOnly ? c = "Selected time: ".concat(J(e.props.selected, { dateFormat: i, locale: s })) : e.props.showYearPicker ? c = "Selected year: ".concat(J(e.props.selected, { dateFormat: "yyyy", locale: s })) : e.props.showMonthYearPicker ? c = "Selected month: ".concat(J(e.props.selected, { dateFormat: "MMMM yyyy", locale: s })) : e.props.showQuarterYearPicker ? c = "Selected quarter: ".concat(J(e.props.selected, {
          dateFormat: "yyyy, QQQ",
          locale: s
        })) : c = "Selected date: ".concat(J(e.props.selected, {
          dateFormat: u,
          locale: s
        })), m.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, c);
      }, e.renderDateInput = function() {
        var r, n, i, s = z(e.props.className, (r = {}, r[Qr] = e.state.open, r)), l = e.props.customInput || m.createElement("input", { type: "text" }), u = e.props.customInputRef || "ref", c = e.props, p = c.dateFormat, d = p === void 0 ? o.defaultProps.dateFormat : p, f = c.locale, h = typeof e.props.value == "string" ? e.props.value : typeof e.state.inputValue == "string" ? e.state.inputValue : e.props.selectsRange ? mo(e.props.startDate, e.props.endDate, {
          dateFormat: d,
          locale: f
        }) : e.props.selectsMultiple ? vo((i = e.props.selectedDates) !== null && i !== void 0 ? i : [], {
          dateFormat: d,
          locale: f
        }) : J(e.props.selected, {
          dateFormat: d,
          locale: f
        });
        return $r(l, (n = {}, n[u] = function(g) {
          e.input = g;
        }, n.value = h, n.onBlur = e.handleBlur, n.onChange = e.handleChange, n.onClick = e.onInputClick, n.onFocus = e.handleFocus, n.onKeyDown = e.onInputKeyDown, n.id = e.props.id, n.name = e.props.name, n.form = e.props.form, n.autoFocus = e.props.autoFocus, n.placeholder = e.props.placeholderText, n.disabled = e.props.disabled, n.autoComplete = e.props.autoComplete, n.className = z(l.props.className, s), n.title = e.props.title, n.readOnly = e.props.readOnly, n.required = e.props.required, n.tabIndex = e.props.tabIndex, n["aria-describedby"] = e.props.ariaDescribedBy, n["aria-invalid"] = e.props.ariaInvalid, n["aria-labelledby"] = e.props.ariaLabelledBy, n["aria-required"] = e.props.ariaRequired, n));
      }, e.renderClearButton = function() {
        var r = e.props, n = r.isClearable, i = r.disabled, s = r.selected, l = r.startDate, u = r.endDate, c = r.clearButtonTitle, p = r.clearButtonClassName, d = p === void 0 ? "" : p, f = r.ariaLabelClose, h = f === void 0 ? "Close" : f, g = r.selectedDates;
        return n && (s != null || l != null || u != null || g != null && g.length) ? m.createElement("button", { type: "button", className: z("react-datepicker__close-icon", d, { "react-datepicker__close-icon--disabled": i }), disabled: i, "aria-label": h, onClick: e.onClearClick, title: c, tabIndex: -1 }) : null;
      }, e.state = e.calcInitialState(), e.preventFocusTimeout = void 0, e;
    }
    return Object.defineProperty(o, "defaultProps", {
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
          yearItemNumber: Je,
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
    }), o.prototype.componentDidMount = function() {
      window.addEventListener("scroll", this.onScroll, !0), document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, o.prototype.componentDidUpdate = function(t, e) {
      var r, n, i, s;
      t.inline && si(t.selected, this.props.selected) && this.setPreSelection(this.props.selected), this.state.monthSelectedIn !== void 0 && t.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), t.highlightDates !== this.props.highlightDates && this.setState({
        highlightDates: Ar(this.props.highlightDates)
      }), !e.focused && !xe(t.selected, this.props.selected) && this.setState({ inputValue: null }), e.open !== this.state.open && (e.open === !1 && this.state.open === !0 && ((n = (r = this.props).onCalendarOpen) === null || n === void 0 || n.call(r)), e.open === !0 && this.state.open === !1 && ((s = (i = this.props).onCalendarClose) === null || s === void 0 || s.call(i)));
    }, o.prototype.componentWillUnmount = function() {
      this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, !0), document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, o.prototype.renderInputContainer = function() {
      var t = this.props, e = t.showIcon, r = t.icon, n = t.calendarIconClassname, i = t.calendarIconClassName, s = t.toggleCalendarOnIconClick, l = this.state.open;
      return n && console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props."), m.createElement(
        "div",
        { className: "react-datepicker__input-container".concat(e ? " react-datepicker__view-calendar-icon" : "") },
        e && m.createElement(ti, F({ icon: r, className: z(i, !i && n, l && "react-datepicker-ignore-onclickoutside") }, s ? {
          onClick: this.toggleCalendar
        } : null)),
        this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(),
        this.renderDateInput(),
        this.renderClearButton()
      );
    }, o.prototype.render = function() {
      var t = this.renderCalendar();
      if (this.props.inline)
        return t;
      if (this.props.withPortal) {
        var e = this.state.open ? m.createElement(
          wn,
          { enableTabLoop: this.props.enableTabLoop },
          m.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, t)
        ) : null;
        return this.state.open && this.props.portalId && (e = m.createElement(yn, F({ portalId: this.props.portalId }, this.props), e)), m.createElement(
          "div",
          null,
          this.renderInputContainer(),
          e
        );
      }
      return m.createElement(ii, F({}, this.props, { className: this.props.popperClassName, hidePopper: !this.isCalendarOpen(), targetComponent: this.renderInputContainer(), popperComponent: t, popperOnKeyDown: this.onPopperKeyDown, showArrow: this.props.showPopperArrow }));
    }, o;
  }(j)
), li = "input", Wt = "navigate";
const Ie = "YYYY-MM-DD", Os = ({
  handleCloseCalendar: a,
  onDateChange: o,
  onClearDate: t,
  withQuickSelect: e,
  activeQuickSelectState: r,
  setActiveQuickSelectState: n,
  initialStartDate: i = /* @__PURE__ */ new Date(),
  initialEndDate: s = /* @__PURE__ */ new Date()
}) => {
  var L, V;
  const l = Sn(), { t: u, i18n: c } = zn("uiKit", { keyPrefix: "RangePicker" }), [p, d] = tt(() => $(i)), [f, h] = tt(() => $(s)), [g, v] = tt($(i).format(Ie)), [D, _] = tt($(s).format(Ie)), b = () => {
    if (!p || !f) {
      console.error("Please select date range!");
      return;
    }
    if (!p.isValid() || !f.isValid()) {
      console.error("Please select correct date range!");
      return;
    }
    o(p.startOf("day").toISOString(), f.endOf("day").toISOString()), a();
  }, k = (w, Y) => {
    const { value: N } = w.target;
    Y === "start" ? (v(N), $(N).isValid() && d($(N))) : (_(N), $(N).isValid() && h($(N)));
  }, S = (w, Y) => {
    if (!w) return;
    const N = $(w);
    Y === "start" ? (d($(w)), v(N.format(Ie))) : (h($(w)), _(N.format(Ie)));
  }, C = () => {
    t(), n && n(null), a();
  }, M = $(g).isValid(), O = $(D).isValid() && $(g) <= $(D);
  bo(c.language.split("-")[0], Xn(c.language));
  const x = (w) => {
    n && n(w);
    const Y = $(Rt[w][0]), N = $(Rt[w][1]);
    d(Y), v(Y.format(Ie)), h(N), _(N.format(Ie));
  };
  return /* @__PURE__ */ H.jsxs(Te, { direction: "column", gap: "8px", children: [
    /* @__PURE__ */ H.jsx(Te, { direction: "column", gap: "14px", children: /* @__PURE__ */ H.jsx($n, { variant: "caption12", color: l.palette.text.text8, children: u("Choose date range") }) }),
    /* @__PURE__ */ H.jsxs(Te, { direction: "row", alignItems: "flex-start", gap: 4, children: [
      /* @__PURE__ */ H.jsxs(Te, { direction: "row", gap: "8px", alignItems: "center", width: "100%", children: [
        /* @__PURE__ */ H.jsx(
          hr,
          {
            label: u("Input"),
            error: !M,
            value: g,
            placeholder: u("Start date"),
            onChange: (w) => k(w, "start"),
            sx: {
              label: { color: `${l.palette.text.text8} !important` },
              borderColor: ar((L = l.palette.border) == null ? void 0 : L.input, 0.14),
              input: {
                backgroundColor: l.palette.background.background2
              }
            }
          }
        ),
        /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx(
          or,
          {
            orientation: "horizontal",
            flexItem: !0,
            sx: { width: "12px", borderColor: l.palette.text.text8 }
          }
        ) }),
        /* @__PURE__ */ H.jsx(
          hr,
          {
            label: u("Label"),
            error: !O,
            value: D,
            placeholder: u("End date"),
            onChange: (w) => k(w, "end"),
            sx: {
              label: { color: `${l.palette.text.text8} !important` },
              borderColor: ar((V = l.palette.border) == null ? void 0 : V.input, 0.14),
              input: {
                backgroundColor: l.palette.background.background2
              }
            }
          }
        )
      ] }),
      r || e ? /* @__PURE__ */ H.jsx(Qn, { children: Object.keys(Rt).map(
        (w) => {
          const Y = r === w;
          return /* @__PURE__ */ H.jsx(jn, { children: /* @__PURE__ */ H.jsxs(
            Un,
            {
              onClick: () => x(w),
              sx: {
                color: Y ? l.palette.primaryColors.accent : l.palette.lightShades.ternary
              },
              children: [
                u(w),
                Y ? /* @__PURE__ */ H.jsx(Gn, {}) : null
              ]
            }
          ) }, w);
        }
      ) }) : null
    ] }),
    /* @__PURE__ */ H.jsxs(Te, { direction: "row", gap: "16px", children: [
      /* @__PURE__ */ H.jsx(fr, { children: /* @__PURE__ */ H.jsx(
        jr,
        {
          selected: p.toDate(),
          onChange: (w) => S(w, "start"),
          startDate: p.toDate(),
          endDate: f.toDate(),
          selectsStart: !0,
          locale: c.language,
          showFullMonthYearPicker: !0,
          inline: !0,
          renderCustomHeader: (w) => /* @__PURE__ */ H.jsx(dr, { ...w }),
          formatWeekDay: (w) => ir(w.substr(0, 3))
        }
      ) }),
      /* @__PURE__ */ H.jsx(fr, { children: /* @__PURE__ */ H.jsx(
        jr,
        {
          selected: f.toDate(),
          onChange: (w) => S(w, "end"),
          startDate: p.toDate(),
          endDate: f.toDate(),
          selectsEnd: !0,
          locale: c.language,
          minDate: p.toDate(),
          showFullMonthYearPicker: !0,
          inline: !0,
          renderCustomHeader: (w) => /* @__PURE__ */ H.jsx(dr, { ...w }),
          formatWeekDay: (w) => ir(w.substr(0, 3))
        }
      ) }),
      /* @__PURE__ */ H.jsx(or, {})
    ] }),
    /* @__PURE__ */ H.jsxs(Te, { justifyContent: "flex-end", direction: "row", gap: "8px", children: [
      /* @__PURE__ */ H.jsx(mr, { size: "medium", variant: "secondary", onClick: C, children: u("Clear data range") }),
      /* @__PURE__ */ H.jsx(
        mr,
        {
          size: "medium",
          variant: "primary",
          onClick: b,
          disabled: !M || !O,
          children: u("Apply changes")
        }
      )
    ] })
  ] });
};
export {
  Os as RangePicker
};
