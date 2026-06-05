import { jsxRuntimeExports as P } from "./jsx-runtime-BgepH7Pb.js";
import * as st from "react";
import { useEffect as Xe, useLayoutEffect as ac, useState as It, useRef as pe, forwardRef as ic, useCallback as fr, useMemo as _e, useContext as Ze, createContext as Or, cloneElement as sc, memo as ge, Component as oc, createElement as Hs } from "react";
import { unstable_batchedUpdates as fc } from "react-dom";
import { getDefaultExportFromCjs as Oe, commonjsGlobal as tr } from "./_commonjsHelpers-TBt1UqMc.js";
import { point as Ys, Basis as Vs, point$1 as Bs, point$2 as Gs, stepBefore as cc, stepAfter as uc, curveStep as dc, curveNatural as lc, monotoneY as hc, monotoneX as bc, curveLinear as pc, curveCatmullRom as gc, curveCardinal as mc, curveBasis as vc } from "./step-BK7X2HW7.js";
import { hooks as yc } from "./moment-DHYryOIn.js";
import { WidgetTypes as _c } from "./_legacy/chirp-widgets/types.es.js";
import { Typography as je } from "./_legacy/typogrpahy/index.es.js";
import { useTheme as xc } from "@mui/material";
import { useTranslation as wc } from "react-i18next";
var zn = Kt(), H = (e) => Gt(e, zn), Wn = Kt();
H.write = (e) => Gt(e, Wn);
var Cr = Kt();
H.onStart = (e) => Gt(e, Cr);
var Hn = Kt();
H.onFrame = (e) => Gt(e, Hn);
var Yn = Kt();
H.onFinish = (e) => Gt(e, Yn);
var ot = [];
H.setTimeout = (e, t) => {
  const r = H.now() + t, n = () => {
    const i = ot.findIndex((s) => s.cancel == n);
    ~i && ot.splice(i, 1), De -= ~i ? 1 : 0;
  }, a = { time: r, handler: e, cancel: n };
  return ot.splice(Ks(r), 0, a), De += 1, Qs(), a;
};
var Ks = (e) => ~(~ot.findIndex((t) => t.time > e) || ~ot.length);
H.cancel = (e) => {
  Cr.delete(e), Hn.delete(e), Yn.delete(e), zn.delete(e), Wn.delete(e);
};
H.sync = (e) => {
  pn = !0, H.batchedUpdates(e), pn = !1;
};
H.throttle = (e) => {
  let t;
  function r() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function n(...a) {
    t = a, H.onStart(r);
  }
  return n.handler = e, n.cancel = () => {
    Cr.delete(r), t = null;
  }, n;
};
var Vn = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
H.use = (e) => Vn = e;
H.now = typeof performance < "u" ? () => performance.now() : Date.now;
H.batchedUpdates = (e) => e();
H.catch = console.error;
H.frameLoop = "always";
H.advance = () => {
  H.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : Zs();
};
var Fe = -1, De = 0, pn = !1;
function Gt(e, t) {
  pn ? (t.delete(e), e(0)) : (t.add(e), Qs());
}
function Qs() {
  Fe < 0 && (Fe = 0, H.frameLoop !== "demand" && Vn(Xs));
}
function $c() {
  Fe = -1;
}
function Xs() {
  ~Fe && (Vn(Xs), H.batchedUpdates(Zs));
}
function Zs() {
  const e = Fe;
  Fe = H.now();
  const t = Ks(Fe);
  if (t && (Js(ot.splice(0, t), (r) => r.handler()), De -= t), !De) {
    $c();
    return;
  }
  Cr.flush(), zn.flush(e ? Math.min(64, Fe - e) : 16.667), Hn.flush(), Wn.flush(), Yn.flush();
}
function Kt() {
  let e = /* @__PURE__ */ new Set(), t = e;
  return {
    add(r) {
      De += t == e && !e.has(r) ? 1 : 0, e.add(r);
    },
    delete(r) {
      return De -= t == e && e.has(r) ? 1 : 0, e.delete(r);
    },
    flush(r) {
      t.size && (e = /* @__PURE__ */ new Set(), De -= t.size, Js(t, (n) => n(r) && e.add(n)), De += e.size, t = e);
    }
  };
}
function Js(e, t) {
  e.forEach((r) => {
    try {
      t(r);
    } catch (n) {
      H.catch(n);
    }
  });
}
var Tc = Object.defineProperty, Sc = (e, t) => {
  for (var r in t)
    Tc(e, r, { get: t[r], enumerable: !0 });
}, Se = {};
Sc(Se, {
  assign: () => Cc,
  colors: () => qe,
  createStringInterpolator: () => Gn,
  skipAnimation: () => to,
  to: () => eo,
  willAdvance: () => Kn
});
function gn() {
}
var Oc = (e, t, r) => Object.defineProperty(e, t, { value: r, writable: !0, configurable: !0 }), $ = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function ke(e, t) {
  if ($.arr(e)) {
    if (!$.arr(t) || e.length !== t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  return e === t;
}
var W = (e, t) => e.forEach(t);
function Pe(e, t, r) {
  if ($.arr(e)) {
    for (let n = 0; n < e.length; n++)
      t.call(r, e[n], `${n}`);
    return;
  }
  for (const n in e)
    e.hasOwnProperty(n) && t.call(r, e[n], n);
}
var de = (e) => $.und(e) ? [] : $.arr(e) ? e : [e];
function Et(e, t) {
  if (e.size) {
    const r = Array.from(e);
    e.clear(), W(r, t);
  }
}
var Pt = (e, ...t) => Et(e, (r) => r(...t)), Bn = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Gn, eo, qe = null, to = !1, Kn = gn, Cc = (e) => {
  e.to && (eo = e.to), e.now && (H.now = e.now), e.colors !== void 0 && (qe = e.colors), e.skipAnimation != null && (to = e.skipAnimation), e.createStringInterpolator && (Gn = e.createStringInterpolator), e.requestAnimationFrame && H.use(e.requestAnimationFrame), e.batchedUpdates && (H.batchedUpdates = e.batchedUpdates), e.willAdvance && (Kn = e.willAdvance), e.frameLoop && (H.frameLoop = e.frameLoop);
}, kt = /* @__PURE__ */ new Set(), ye = [], Br = [], dr = 0, Ar = {
  get idle() {
    return !kt.size && !ye.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    dr > e.priority ? (kt.add(e), H.onStart(Ac)) : (ro(e), H(mn));
  },
  /** Advance all animations by the given time. */
  advance: mn,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (dr)
      H.onFrame(() => Ar.sort(e));
    else {
      const t = ye.indexOf(e);
      ~t && (ye.splice(t, 1), no(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    ye = [], kt.clear();
  }
};
function Ac() {
  kt.forEach(ro), kt.clear(), H(mn);
}
function ro(e) {
  ye.includes(e) || no(e);
}
function no(e) {
  ye.splice(
    Pc(ye, (t) => t.priority > e.priority),
    0,
    e
  );
}
function mn(e) {
  const t = Br;
  for (let r = 0; r < ye.length; r++) {
    const n = ye[r];
    dr = n.priority, n.idle || (Kn(n), n.advance(e), n.idle || t.push(n));
  }
  return dr = 0, Br = ye, Br.length = 0, ye = t, ye.length > 0;
}
function Pc(e, t) {
  const r = e.findIndex(t);
  return r < 0 ? e.length : r;
}
var Rc = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
}, Te = "[-+]?\\d*\\.?\\d+", lr = Te + "%";
function Pr(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var Ec = new RegExp("rgb" + Pr(Te, Te, Te)), kc = new RegExp("rgba" + Pr(Te, Te, Te, Te)), Mc = new RegExp("hsl" + Pr(Te, lr, lr)), jc = new RegExp(
  "hsla" + Pr(Te, lr, lr, Te)
), Ic = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Fc = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Dc = /^#([0-9a-fA-F]{6})$/, qc = /^#([0-9a-fA-F]{8})$/;
function Uc(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Dc.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : qe && qe[e] !== void 0 ? qe[e] : (t = Ec.exec(e)) ? (at(t[1]) << 24 | // r
  at(t[2]) << 16 | // g
  at(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = kc.exec(e)) ? (at(t[1]) << 24 | // r
  at(t[2]) << 16 | // g
  at(t[3]) << 8 | // b
  ni(t[4])) >>> // a
  0 : (t = Ic.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = qc.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Fc.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = Mc.exec(e)) ? (ti(
    ri(t[1]),
    // h
    rr(t[2]),
    // s
    rr(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = jc.exec(e)) ? (ti(
    ri(t[1]),
    // h
    rr(t[2]),
    // s
    rr(t[3])
    // l
  ) | ni(t[4])) >>> // a
  0 : null;
}
function Gr(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function ti(e, t, r) {
  const n = r < 0.5 ? r * (1 + t) : r + t - r * t, a = 2 * r - n, i = Gr(a, n, e + 1 / 3), s = Gr(a, n, e), o = Gr(a, n, e - 1 / 3);
  return Math.round(i * 255) << 24 | Math.round(s * 255) << 16 | Math.round(o * 255) << 8;
}
function at(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function ri(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function ni(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function rr(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function ai(e) {
  let t = Uc(e);
  if (t === null)
    return e;
  t = t || 0;
  const r = (t & 4278190080) >>> 24, n = (t & 16711680) >>> 16, a = (t & 65280) >>> 8, i = (t & 255) / 255;
  return `rgba(${r}, ${n}, ${a}, ${i})`;
}
var Ft = (e, t, r) => {
  if ($.fun(e))
    return e;
  if ($.arr(e))
    return Ft({
      range: e,
      output: t,
      extrapolate: r
    });
  if ($.str(e.output[0]))
    return Gn(e);
  const n = e, a = n.output, i = n.range || [0, 1], s = n.extrapolateLeft || n.extrapolate || "extend", o = n.extrapolateRight || n.extrapolate || "extend", f = n.easing || ((c) => c);
  return (c) => {
    const u = Lc(c, i);
    return Nc(
      c,
      i[u],
      i[u + 1],
      a[u],
      a[u + 1],
      f,
      s,
      o,
      n.map
    );
  };
};
function Nc(e, t, r, n, a, i, s, o, f) {
  let c = f ? f(e) : e;
  if (c < t) {
    if (s === "identity")
      return c;
    s === "clamp" && (c = t);
  }
  if (c > r) {
    if (o === "identity")
      return c;
    o === "clamp" && (c = r);
  }
  return n === a ? n : t === r ? e <= t ? n : a : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c = c - t : c = (c - t) / (r - t), c = i(c), n === -1 / 0 ? c = -c : a === 1 / 0 ? c = c + n : c = c * (a - n) + n, c);
}
function Lc(e, t) {
  for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r)
    ;
  return r - 1;
}
var zc = {
  linear: (e) => e
}, Dt = Symbol.for("FluidValue.get"), ut = Symbol.for("FluidValue.observers"), ve = (e) => !!(e && e[Dt]), le = (e) => e && e[Dt] ? e[Dt]() : e, ii = (e) => e[ut] || null;
function Wc(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function qt(e, t) {
  const r = e[ut];
  r && r.forEach((n) => {
    Wc(n, t);
  });
}
var ao = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    Hc(this, e);
  }
}, Hc = (e, t) => io(e, Dt, t);
function ht(e, t) {
  if (e[Dt]) {
    let r = e[ut];
    r || io(e, ut, r = /* @__PURE__ */ new Set()), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t));
  }
  return t;
}
function Ut(e, t) {
  const r = e[ut];
  if (r && r.has(t)) {
    const n = r.size - 1;
    n ? r.delete(t) : e[ut] = null, e.observerRemoved && e.observerRemoved(n, t);
  }
}
var io = (e, t, r) => Object.defineProperty(e, t, {
  value: r,
  writable: !0,
  configurable: !0
}), cr = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Yc = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, si = new RegExp(`(${cr.source})(%|[a-z]+)`, "i"), Vc = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Rr = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, so = (e) => {
  const [t, r] = Bc(e);
  if (!t || Bn())
    return e;
  const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  if (n)
    return n.trim();
  if (r && r.startsWith("--")) {
    const a = window.getComputedStyle(document.documentElement).getPropertyValue(r);
    return a || e;
  } else {
    if (r && Rr.test(r))
      return so(r);
    if (r)
      return r;
  }
  return e;
}, Bc = (e) => {
  const t = Rr.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}, Kr, Gc = (e, t, r, n, a) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`, oo = (e) => {
  Kr || (Kr = qe ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(qe).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const t = e.output.map((i) => le(i).replace(Rr, so).replace(Yc, ai).replace(Kr, ai)), r = t.map((i) => i.match(cr).map(Number)), a = r[0].map(
    (i, s) => r.map((o) => {
      if (!(s in o))
        throw Error('The arity of each "output" value must be equal');
      return o[s];
    })
  ).map(
    (i) => Ft({ ...e, output: i })
  );
  return (i) => {
    var f;
    const s = !si.test(t[0]) && ((f = t.find((c) => si.test(c))) == null ? void 0 : f.replace(cr, ""));
    let o = 0;
    return t[0].replace(
      cr,
      () => `${a[o++](i)}${s || ""}`
    ).replace(Vc, Gc);
  };
}, Qn = "react-spring: ", fo = (e) => {
  const t = e;
  let r = !1;
  if (typeof t != "function")
    throw new TypeError(`${Qn}once requires a function parameter`);
  return (...n) => {
    r || (t(...n), r = !0);
  };
}, Kc = fo(console.warn);
function Qc() {
  Kc(
    `${Qn}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var Xc = fo(console.warn);
function Zc() {
  Xc(
    `${Qn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Er(e) {
  return $.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !Bn() && Rr.test(e) || e in (qe || {}));
}
var He = Bn() ? Xe : ac, Jc = () => {
  const e = pe(!1);
  return He(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function Xn() {
  const e = It()[1], t = Jc();
  return () => {
    t.current && e(Math.random());
  };
}
function eu(e, t) {
  const [r] = It(
    () => ({
      inputs: t,
      result: e()
    })
  ), n = pe(), a = n.current;
  let i = a;
  return i ? t && i.inputs && tu(t, i.inputs) || (i = {
    inputs: t,
    result: e()
  }) : i = r, Xe(() => {
    n.current = i, a == r && (r.inputs = r.result = void 0);
  }, [i]), i.result;
}
function tu(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Zn = (e) => Xe(e, ru), ru = [];
function vn(e) {
  const t = pe();
  return Xe(() => {
    t.current = e;
  }), t.current;
}
var Nt = Symbol.for("Animated:node"), nu = (e) => !!e && e[Nt] === e, Ce = (e) => e && e[Nt], Jn = (e, t) => Oc(e, Nt, t), kr = (e) => e && e[Nt] && e[Nt].getPayload(), co = class {
  constructor() {
    Jn(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, Qt = class extends co {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, $.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new Qt(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, t) {
    return $.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const { done: e } = this;
    this.done = !1, $.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, Lt = class extends Qt {
  constructor(e) {
    super(0), this._string = null, this._toString = Ft({
      output: [e, e]
    });
  }
  /** @internal */
  static create(e) {
    return new Lt(e);
  }
  getValue() {
    const e = this._string;
    return e ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if ($.str(e)) {
      if (e == this._string)
        return !1;
      this._string = e, this._value = 1;
    } else if (super.setValue(e))
      this._string = null;
    else
      return !1;
    return !0;
  }
  reset(e) {
    e && (this._toString = Ft({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, hr = { dependencies: null }, Mr = class extends co {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const t = {};
    return Pe(this.source, (r, n) => {
      nu(r) ? t[n] = r.getValue(e) : ve(r) ? t[n] = le(r) : e || (t[n] = r);
    }), t;
  }
  /** Replace the raw object data */
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && W(this.payload, (e) => e.reset());
  }
  /** Create a payload set. */
  _makePayload(e) {
    if (e) {
      const t = /* @__PURE__ */ new Set();
      return Pe(e, this._addToPayload, t), Array.from(t);
    }
  }
  /** Add to a payload set. */
  _addToPayload(e) {
    hr.dependencies && ve(e) && hr.dependencies.add(e);
    const t = kr(e);
    t && W(t, (r) => this.add(r));
  }
}, uo = class extends Mr {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new uo(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const t = this.getPayload();
    return e.length == t.length ? t.map((r, n) => r.setValue(e[n])).some(Boolean) : (super.setValue(e.map(au)), !0);
  }
};
function au(e) {
  return (Er(e) ? Lt : Qt).create(e);
}
function yn(e) {
  const t = Ce(e);
  return t ? t.constructor : $.arr(e) ? uo : Er(e) ? Lt : Qt;
}
var oi = (e, t) => {
  const r = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !$.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return ic((n, a) => {
    const i = pe(null), s = r && // eslint-disable-next-line react-hooks/rules-of-hooks
    fr(
      (g) => {
        i.current = ou(a, g);
      },
      [a]
    ), [o, f] = su(n, t), c = Xn(), u = () => {
      const g = i.current;
      if (r && !g)
        return;
      (g ? t.applyAnimatedValues(g, o.getValue(!0)) : !1) === !1 && c();
    }, d = new iu(u, f), l = pe();
    He(() => (l.current = d, W(f, (g) => ht(g, d)), () => {
      l.current && (W(
        l.current.deps,
        (g) => Ut(g, l.current)
      ), H.cancel(l.current.update));
    })), Xe(u, []), Zn(() => () => {
      const g = l.current;
      W(g.deps, (m) => Ut(m, g));
    });
    const v = t.getComponentProps(o.getValue());
    return /* @__PURE__ */ st.createElement(e, { ...v, ref: s });
  });
}, iu = class {
  constructor(e, t) {
    this.update = e, this.deps = t;
  }
  eventObserved(e) {
    e.type == "change" && H.write(this.update);
  }
};
function su(e, t) {
  const r = /* @__PURE__ */ new Set();
  return hr.dependencies = r, e.style && (e = {
    ...e,
    style: t.createAnimatedStyle(e.style)
  }), e = new Mr(e), hr.dependencies = null, [e, r];
}
function ou(e, t) {
  return e && ($.fun(e) ? e(t) : e.current = t), t;
}
var fi = Symbol.for("AnimatedComponent"), fu = (e, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: r = (a) => new Mr(a),
  getComponentProps: n = (a) => a
} = {}) => {
  const a = {
    applyAnimatedValues: t,
    createAnimatedStyle: r,
    getComponentProps: n
  }, i = (s) => {
    const o = ci(s) || "Anonymous";
    return $.str(s) ? s = i[s] || (i[s] = oi(s, a)) : s = s[fi] || (s[fi] = oi(s, a)), s.displayName = `Animated(${o})`, s;
  };
  return Pe(e, (s, o) => {
    $.arr(e) && (o = ci(s)), i[o] = i(s);
  }), {
    animated: i
  };
}, ci = (e) => $.str(e) ? e : e && $.str(e.displayName) ? e.displayName : $.fun(e) && e.name || null;
function he(e, ...t) {
  return $.fun(e) ? e(...t) : e;
}
var Mt = (e, t) => e === !0 || !!(t && e && ($.fun(e) ? e(t) : de(e).includes(t))), lo = (e, t) => $.obj(e) ? t && e[t] : e, ho = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0, cu = (e) => e, jr = (e, t = cu) => {
  let r = uu;
  e.default && e.default !== !0 && (e = e.default, r = Object.keys(e));
  const n = {};
  for (const a of r) {
    const i = t(e[a], a);
    $.und(i) || (n[a] = i);
  }
  return n;
}, uu = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
], du = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  // Transition props
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  // Internal props
  keys: 1,
  callId: 1,
  parentId: 1
};
function lu(e) {
  const t = {};
  let r = 0;
  if (Pe(e, (n, a) => {
    du[a] || (t[a] = n, r++);
  }), r)
    return t;
}
function ea(e) {
  const t = lu(e);
  if (t) {
    const r = { to: t };
    return Pe(e, (n, a) => a in t || (r[a] = n)), r;
  }
  return { ...e };
}
function zt(e) {
  return e = le(e), $.arr(e) ? e.map(zt) : Er(e) ? Se.createStringInterpolator({
    range: [0, 1],
    output: [e, e]
  })(1) : e;
}
function bo(e) {
  for (const t in e)
    return !0;
  return !1;
}
function _n(e) {
  return $.fun(e) || $.arr(e) && $.obj(e[0]);
}
function xn(e, t) {
  var r;
  (r = e.ref) == null || r.delete(e), t == null || t.delete(e);
}
function po(e, t) {
  var r;
  t && e.ref !== t && ((r = e.ref) == null || r.delete(e), t.add(e), e.ref = t);
}
var ta = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
}, wn = {
  ...ta.default,
  mass: 1,
  damping: 1,
  easing: zc.linear,
  clamp: !1
}, hu = class {
  constructor() {
    this.velocity = 0, Object.assign(this, wn);
  }
};
function bu(e, t, r) {
  r && (r = { ...r }, ui(r, t), t = { ...r, ...t }), ui(e, t), Object.assign(e, t);
  for (const s in wn)
    e[s] == null && (e[s] = wn[s]);
  let { frequency: n, damping: a } = e;
  const { mass: i } = e;
  return $.und(n) || (n < 0.01 && (n = 0.01), a < 0 && (a = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * a * i / n), e;
}
function ui(e, t) {
  if (!$.und(t.decay))
    e.duration = void 0;
  else {
    const r = !$.und(t.tension) || !$.und(t.friction);
    (r || !$.und(t.frequency) || !$.und(t.damping) || !$.und(t.mass)) && (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0);
  }
}
var di = [], pu = class {
  constructor() {
    this.changed = !1, this.values = di, this.toValues = null, this.fromValues = di, this.config = new hu(), this.immediate = !1;
  }
};
function go(e, { key: t, props: r, defaultProps: n, state: a, actions: i }) {
  return new Promise((s, o) => {
    let f, c, u = Mt(r.cancel ?? (n == null ? void 0 : n.cancel), t);
    if (u)
      v();
    else {
      $.und(r.pause) || (a.paused = Mt(r.pause, t));
      let g = n == null ? void 0 : n.pause;
      g !== !0 && (g = a.paused || Mt(g, t)), f = he(r.delay || 0, t), g ? (a.resumeQueue.add(l), i.pause()) : (i.resume(), l());
    }
    function d() {
      a.resumeQueue.add(l), a.timeouts.delete(c), c.cancel(), f = c.time - H.now();
    }
    function l() {
      f > 0 && !Se.skipAnimation ? (a.delayed = !0, c = H.setTimeout(v, f), a.pauseQueue.add(d), a.timeouts.add(c)) : v();
    }
    function v() {
      a.delayed && (a.delayed = !1), a.pauseQueue.delete(d), a.timeouts.delete(c), e <= (a.cancelId || 0) && (u = !0);
      try {
        i.start({ ...r, callId: e, cancel: u }, s);
      } catch (g) {
        o(g);
      }
    }
  });
}
var ra = (e, t) => t.length == 1 ? t[0] : t.some((r) => r.cancelled) ? ft(e.get()) : t.every((r) => r.noop) ? mo(e.get()) : we(
  e.get(),
  t.every((r) => r.finished)
), mo = (e) => ({
  value: e,
  noop: !0,
  finished: !0,
  cancelled: !1
}), we = (e, t, r = !1) => ({
  value: e,
  finished: t,
  cancelled: r
}), ft = (e) => ({
  value: e,
  cancelled: !0,
  finished: !1
});
function vo(e, t, r, n) {
  const { callId: a, parentId: i, onRest: s } = t, { asyncTo: o, promise: f } = r;
  return !i && e === o && !t.reset ? f : r.promise = (async () => {
    r.asyncId = a, r.asyncTo = e;
    const c = jr(
      t,
      (p, w) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        w === "onRest" ? void 0 : p
      )
    );
    let u, d;
    const l = new Promise(
      (p, w) => (u = p, d = w)
    ), v = (p) => {
      const w = (
        // The `cancel` prop or `stop` method was used.
        a <= (r.cancelId || 0) && ft(n) || // The async `to` prop was replaced.
        a !== r.asyncId && we(n, !1)
      );
      if (w)
        throw p.result = w, d(p), p;
    }, g = (p, w) => {
      const S = new li(), T = new hi();
      return (async () => {
        if (Se.skipAnimation)
          throw Wt(r), T.result = we(n, !1), d(T), T;
        v(S);
        const A = $.obj(p) ? { ...p } : { ...w, to: p };
        A.parentId = a, Pe(c, (Y, X) => {
          $.und(A[X]) && (A[X] = Y);
        });
        const y = await n.start(A);
        return v(S), r.paused && await new Promise((Y) => {
          r.resumeQueue.add(Y);
        }), y;
      })();
    };
    let m;
    if (Se.skipAnimation)
      return Wt(r), we(n, !1);
    try {
      let p;
      $.arr(e) ? p = (async (w) => {
        for (const S of w)
          await g(S);
      })(e) : p = Promise.resolve(e(g, n.stop.bind(n))), await Promise.all([p.then(u), l]), m = we(n.get(), !0, !1);
    } catch (p) {
      if (p instanceof li)
        m = p.result;
      else if (p instanceof hi)
        m = p.result;
      else
        throw p;
    } finally {
      a == r.asyncId && (r.asyncId = i, r.asyncTo = i ? o : void 0, r.promise = i ? f : void 0);
    }
    return $.fun(s) && H.batchedUpdates(() => {
      s(m, n, n.item);
    }), m;
  })();
}
function Wt(e, t) {
  Et(e.timeouts, (r) => r.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t);
}
var li = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
}, hi = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
}, $n = (e) => e instanceof na, gu = 1, na = class extends ao {
  constructor() {
    super(...arguments), this.id = gu++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  /** Get the current value */
  get() {
    const e = Ce(this);
    return e && e.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...e) {
    return Se.to(this, e);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...e) {
    return Qc(), Se.to(this, e);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(e) {
    e == 1 && this._attach();
  }
  observerRemoved(e) {
    e == 0 && this._detach();
  }
  /** Called when the first child is added. */
  _attach() {
  }
  /** Called when the last child is removed. */
  _detach() {
  }
  /** Tell our children about our new value */
  _onChange(e, t = !1) {
    qt(this, {
      type: "change",
      parent: this,
      value: e,
      idle: t
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(e) {
    this.idle || Ar.sort(this), qt(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, Be = Symbol.for("SpringPhase"), yo = 1, _o = 2, xo = 4, Qr = (e) => (e[Be] & yo) > 0, Ie = (e) => (e[Be] & _o) > 0, yt = (e) => (e[Be] & xo) > 0, bi = (e, t) => t ? e[Be] |= _o | yo : e[Be] &= -3, pi = (e, t) => t ? e[Be] |= xo : e[Be] &= -5, mu = class extends na {
  constructor(e, t) {
    if (super(), this.animation = new pu(), this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !$.und(e) || !$.und(t)) {
      const r = $.obj(e) ? { ...e } : { ...t, from: e };
      $.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(Ie(this) || this._state.asyncTo) || yt(this);
  }
  get goal() {
    return le(this.animation.to);
  }
  get velocity() {
    const e = Ce(this);
    return e instanceof Qt ? e.lastVelocity || 0 : e.getPayload().map((t) => t.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return Qr(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return Ie(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return yt(this);
  }
  /**
   *
   *
   */
  get isDelayed() {
    return this._state.delayed;
  }
  /** Advance the current animation by a number of milliseconds */
  advance(e) {
    let t = !0, r = !1;
    const n = this.animation;
    let { toValues: a } = n;
    const { config: i } = n, s = kr(n.to);
    !s && ve(n.to) && (a = de(le(n.to))), n.values.forEach((c, u) => {
      if (c.done)
        return;
      const d = (
        // Animated strings always go from 0 to 1.
        c.constructor == Lt ? 1 : s ? s[u].lastPosition : a[u]
      );
      let l = n.immediate, v = d;
      if (!l) {
        if (v = c.lastPosition, i.tension <= 0) {
          c.done = !0;
          return;
        }
        let g = c.elapsedTime += e;
        const m = n.fromValues[u], p = c.v0 != null ? c.v0 : c.v0 = $.arr(i.velocity) ? i.velocity[u] : i.velocity;
        let w;
        const S = i.precision || (m == d ? 5e-3 : Math.min(1, Math.abs(d - m) * 1e-3));
        if ($.und(i.duration))
          if (i.decay) {
            const T = i.decay === !0 ? 0.998 : i.decay, A = Math.exp(-(1 - T) * g);
            v = m + p / (1 - T) * (1 - A), l = Math.abs(c.lastPosition - v) <= S, w = p * A;
          } else {
            w = c.lastVelocity == null ? p : c.lastVelocity;
            const T = i.restVelocity || S / 10, A = i.clamp ? 0 : i.bounce, y = !$.und(A), Y = m == d ? c.v0 > 0 : m < d;
            let X, K = !1;
            const te = 1, Q = Math.ceil(e / te);
            for (let E = 0; E < Q && (X = Math.abs(w) > T, !(!X && (l = Math.abs(d - v) <= S, l))); ++E) {
              y && (K = v == d || v > d == Y, K && (w = -w * A, v = d));
              const se = -i.tension * 1e-6 * (v - d), V = -i.friction * 1e-3 * w, C = (se + V) / i.mass;
              w = w + C * te, v = v + w * te;
            }
          }
        else {
          let T = 1;
          i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, c.durationProgress > 0 && (c.elapsedTime = i.duration * c.durationProgress, g = c.elapsedTime += e)), T = (i.progress || 0) + g / this._memoizedDuration, T = T > 1 ? 1 : T < 0 ? 0 : T, c.durationProgress = T), v = m + i.easing(T) * (d - m), w = (v - c.lastPosition) / e, l = T == 1;
        }
        c.lastVelocity = w, Number.isNaN(v) && (console.warn("Got NaN while animating:", this), l = !0);
      }
      s && !s[u].done && (l = !1), l ? c.done = !0 : t = !1, c.setValue(v, i.round) && (r = !0);
    });
    const o = Ce(this), f = o.getValue();
    if (t) {
      const c = le(n.to);
      (f !== c || r) && !i.decay ? (o.setValue(c), this._onChange(c)) : r && i.decay && this._onChange(f), this._stop();
    } else r && this._onChange(f);
  }
  /** Set the current value, while stopping the current animation */
  set(e) {
    return H.batchedUpdates(() => {
      this._stop(), this._focus(e), this._set(e);
    }), this;
  }
  /**
   * Freeze the active animation in time, as well as any updates merged
   * before `resume` is called.
   */
  pause() {
    this._update({ pause: !0 });
  }
  /** Resume the animation if paused. */
  resume() {
    this._update({ pause: !1 });
  }
  /** Skip to the end of the current animation. */
  finish() {
    if (Ie(this)) {
      const { to: e, config: t } = this.animation;
      H.batchedUpdates(() => {
        this._onStart(), t.decay || this._set(e, !1), this._stop();
      });
    }
    return this;
  }
  /** Push props into the pending queue. */
  update(e) {
    return (this.queue || (this.queue = [])).push(e), this;
  }
  start(e, t) {
    let r;
    return $.und(e) ? (r = this.queue || [], this.queue = []) : r = [$.obj(e) ? e : { ...t, to: e }], Promise.all(
      r.map((n) => this._update(n))
    ).then((n) => ra(this, n));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(e) {
    const { to: t } = this.animation;
    return this._focus(this.get()), Wt(this._state, e && this._lastCallId), H.batchedUpdates(() => this._stop(t, e)), this;
  }
  /** Restart the animation. */
  reset() {
    this._update({ reset: !0 });
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? this._start() : e.type == "priority" && (this.priority = e.priority + 1);
  }
  /**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */
  _prepareNode(e) {
    const t = this.key || "";
    let { to: r, from: n } = e;
    r = $.obj(r) ? r[t] : r, (r == null || _n(r)) && (r = void 0), n = $.obj(n) ? n[t] : n, n == null && (n = void 0);
    const a = { to: r, from: n };
    return Qr(this) || (e.reverse && ([r, n] = [n, r]), n = le(n), $.und(n) ? Ce(this) || this._set(r) : this._set(n)), a;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...e }, t) {
    const { key: r, defaultProps: n } = this;
    e.default && Object.assign(
      n,
      jr(
        e,
        (s, o) => /^on/.test(o) ? lo(s, r) : s
      )
    ), mi(this, e, "onProps"), xt(this, "onProps", e, this);
    const a = this._prepareNode(e);
    if (Object.isFrozen(this))
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    const i = this._state;
    return go(++this._lastCallId, {
      key: r,
      props: e,
      defaultProps: n,
      state: i,
      actions: {
        pause: () => {
          yt(this) || (pi(this, !0), Pt(i.pauseQueue), xt(
            this,
            "onPause",
            we(this, _t(this, this.animation.to)),
            this
          ));
        },
        resume: () => {
          yt(this) && (pi(this, !1), Ie(this) && this._resume(), Pt(i.resumeQueue), xt(
            this,
            "onResume",
            we(this, _t(this, this.animation.to)),
            this
          ));
        },
        start: this._merge.bind(this, a)
      }
    }).then((s) => {
      if (e.loop && s.finished && !(t && s.noop)) {
        const o = wo(e);
        if (o)
          return this._update(o, !0);
      }
      return s;
    });
  }
  /** Merge props into the current animation */
  _merge(e, t, r) {
    if (t.cancel)
      return this.stop(!0), r(ft(this));
    const n = !$.und(e.to), a = !$.und(e.from);
    if (n || a)
      if (t.callId > this._lastToId)
        this._lastToId = t.callId;
      else
        return r(ft(this));
    const { key: i, defaultProps: s, animation: o } = this, { to: f, from: c } = o;
    let { to: u = f, from: d = c } = e;
    a && !n && (!t.default || $.und(u)) && (u = d), t.reverse && ([u, d] = [d, u]);
    const l = !ke(d, c);
    l && (o.from = d), d = le(d);
    const v = !ke(u, f);
    v && this._focus(u);
    const g = _n(t.to), { config: m } = o, { decay: p, velocity: w } = m;
    (n || a) && (m.velocity = 0), t.config && !g && bu(
      m,
      he(t.config, i),
      // Avoid calling the same "config" prop twice.
      t.config !== s.config ? he(s.config, i) : void 0
    );
    let S = Ce(this);
    if (!S || $.und(u))
      return r(we(this, !0));
    const T = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      $.und(t.reset) ? a && !t.default : !$.und(d) && Mt(t.reset, i)
    ), A = T ? d : this.get(), y = zt(u), Y = $.num(y) || $.arr(y) || Er(y), X = !g && (!Y || Mt(s.immediate || t.immediate, i));
    if (v) {
      const E = yn(u);
      if (E !== S.constructor)
        if (X)
          S = this._set(y);
        else
          throw Error(
            `Cannot animate between ${S.constructor.name} and ${E.name}, as the "to" prop suggests`
          );
    }
    const K = S.constructor;
    let te = ve(u), Q = !1;
    if (!te) {
      const E = T || !Qr(this) && l;
      (v || E) && (Q = ke(zt(A), y), te = !Q), (!ke(o.immediate, X) && !X || !ke(m.decay, p) || !ke(m.velocity, w)) && (te = !0);
    }
    if (Q && Ie(this) && (o.changed && !T ? te = !0 : te || this._stop(f)), !g && ((te || ve(f)) && (o.values = S.getPayload(), o.toValues = ve(u) ? null : K == Lt ? [1] : de(y)), o.immediate != X && (o.immediate = X, !X && !T && this._set(f)), te)) {
      const { onRest: E } = o;
      W(yu, (V) => mi(this, t, V));
      const se = we(this, _t(this, f));
      Pt(this._pendingCalls, se), this._pendingCalls.add(r), o.changed && H.batchedUpdates(() => {
        var V;
        o.changed = !T, E == null || E(se, this), T ? he(s.onRest, se) : (V = o.onStart) == null || V.call(o, se, this);
      });
    }
    T && this._set(A), g ? r(vo(t.to, t, this._state, this)) : te ? this._start() : Ie(this) && !v ? this._pendingCalls.add(r) : r(mo(A));
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(e) {
    const t = this.animation;
    e !== t.to && (ii(this) && this._detach(), t.to = e, ii(this) && this._attach());
  }
  _attach() {
    let e = 0;
    const { to: t } = this.animation;
    ve(t) && (ht(t, this), $n(t) && (e = t.priority + 1)), this.priority = e;
  }
  _detach() {
    const { to: e } = this.animation;
    ve(e) && Ut(e, this);
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(e, t = !0) {
    const r = le(e);
    if (!$.und(r)) {
      const n = Ce(this);
      if (!n || !ke(r, n.getValue())) {
        const a = yn(r);
        !n || n.constructor != a ? Jn(this, a.create(r)) : n.setValue(r), n && H.batchedUpdates(() => {
          this._onChange(r, t);
        });
      }
    }
    return Ce(this);
  }
  _onStart() {
    const e = this.animation;
    e.changed || (e.changed = !0, xt(
      this,
      "onStart",
      we(this, _t(this, e.to)),
      this
    ));
  }
  _onChange(e, t) {
    t || (this._onStart(), he(this.animation.onChange, e, this)), he(this.defaultProps.onChange, e, this), super._onChange(e, t);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const e = this.animation;
    Ce(this).reset(le(e.to)), e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)), Ie(this) || (bi(this, !0), yt(this) || this._resume());
  }
  _resume() {
    Se.skipAnimation ? this.finish() : Ar.start(this);
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(e, t) {
    if (Ie(this)) {
      bi(this, !1);
      const r = this.animation;
      W(r.values, (a) => {
        a.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), qt(this, {
        type: "idle",
        parent: this
      });
      const n = t ? ft(this.get()) : we(this.get(), _t(this, e ?? r.to));
      Pt(this._pendingCalls, n), r.changed && (r.changed = !1, xt(this, "onRest", n, this));
    }
  }
};
function _t(e, t) {
  const r = zt(t), n = zt(e.get());
  return ke(n, r);
}
function wo(e, t = e.loop, r = e.to) {
  const n = he(t);
  if (n) {
    const a = n !== !0 && ea(n), i = (a || e).reverse, s = !a || a.reset;
    return Ht({
      ...e,
      loop: t,
      // Avoid updating default props when looping.
      default: !1,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !i || _n(r) ? r : void 0,
      // Ignore the "from" prop except on reset.
      from: s ? e.from : void 0,
      reset: s,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...a
    });
  }
}
function Ht(e) {
  const { to: t, from: r } = e = ea(e), n = /* @__PURE__ */ new Set();
  return $.obj(t) && gi(t, n), $.obj(r) && gi(r, n), e.keys = n.size ? Array.from(n) : null, e;
}
function vu(e) {
  const t = Ht(e);
  return $.und(t.default) && (t.default = jr(t)), t;
}
function gi(e, t) {
  Pe(e, (r, n) => r != null && t.add(n));
}
var yu = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function mi(e, t, r) {
  e.animation[r] = t[r] !== ho(t, r) ? lo(t[r], e.key) : void 0;
}
function xt(e, t, ...r) {
  var n, a, i, s;
  (a = (n = e.animation)[t]) == null || a.call(n, ...r), (s = (i = e.defaultProps)[t]) == null || s.call(i, ...r);
}
var _u = ["onStart", "onChange", "onRest"], xu = 1, $o = class {
  constructor(e, t) {
    this.id = xu++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({ default: !0, ...e });
  }
  /**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((e) => e.idle && !e.isDelayed && !e.isPaused);
  }
  get item() {
    return this._item;
  }
  set item(e) {
    this._item = e;
  }
  /** Get the current values of our springs */
  get() {
    const e = {};
    return this.each((t, r) => e[r] = t.get()), e;
  }
  /** Set the current values without animating. */
  set(e) {
    for (const t in e) {
      const r = e[t];
      $.und(r) || this.springs[t].set(r);
    }
  }
  /** Push an update onto the queue of each value. */
  update(e) {
    return e && this.queue.push(Ht(e)), this;
  }
  /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */
  start(e) {
    let { queue: t } = this;
    return e ? t = de(e).map(Ht) : this.queue = [], this._flush ? this._flush(this, t) : (Ao(this, t), Tn(this, t));
  }
  /** @internal */
  stop(e, t) {
    if (e !== !!e && (t = e), t) {
      const r = this.springs;
      W(de(t), (n) => r[n].stop(!!e));
    } else
      Wt(this._state, this._lastAsyncId), this.each((r) => r.stop(!!e));
    return this;
  }
  /** Freeze the active animation in time */
  pause(e) {
    if ($.und(e))
      this.start({ pause: !0 });
    else {
      const t = this.springs;
      W(de(e), (r) => t[r].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(e) {
    if ($.und(e))
      this.start({ pause: !1 });
    else {
      const t = this.springs;
      W(de(e), (r) => t[r].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(e) {
    Pe(this.springs, e);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart: e, onChange: t, onRest: r } = this._events, n = this._active.size > 0, a = this._changed.size > 0;
    (n && !this._started || a && !this._started) && (this._started = !0, Et(e, ([o, f]) => {
      f.value = this.get(), o(f, this, this._item);
    }));
    const i = !n && this._started, s = a || i && r.size ? this.get() : null;
    a && t.size && Et(t, ([o, f]) => {
      f.value = s, o(f, this, this._item);
    }), i && (this._started = !1, Et(r, ([o, f]) => {
      f.value = s, o(f, this, this._item);
    }));
  }
  /** @internal */
  eventObserved(e) {
    if (e.type == "change")
      this._changed.add(e.parent), e.idle || this._active.add(e.parent);
    else if (e.type == "idle")
      this._active.delete(e.parent);
    else
      return;
    H.onFrame(this._onFrame);
  }
};
function Tn(e, t) {
  return Promise.all(t.map((r) => To(e, r))).then(
    (r) => ra(e, r)
  );
}
async function To(e, t, r) {
  const { keys: n, to: a, from: i, loop: s, onRest: o, onResolve: f } = t, c = $.obj(t.default) && t.default;
  s && (t.loop = !1), a === !1 && (t.to = null), i === !1 && (t.from = null);
  const u = $.arr(a) || $.fun(a) ? a : void 0;
  u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : W(_u, (m) => {
    const p = t[m];
    if ($.fun(p)) {
      const w = e._events[m];
      t[m] = ({ finished: S, cancelled: T }) => {
        const A = w.get(p);
        A ? (S || (A.finished = !1), T && (A.cancelled = !0)) : w.set(p, {
          value: null,
          finished: S || !1,
          cancelled: T || !1
        });
      }, c && (c[m] = t[m]);
    }
  });
  const d = e._state;
  t.pause === !d.paused ? (d.paused = t.pause, Pt(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
  const l = (n || Object.keys(e.springs)).map(
    (m) => e.springs[m].start(t)
  ), v = t.cancel === !0 || ho(t, "cancel") === !0;
  (u || v && d.asyncId) && l.push(
    go(++e._lastAsyncId, {
      props: t,
      state: d,
      actions: {
        pause: gn,
        resume: gn,
        start(m, p) {
          v ? (Wt(d, e._lastAsyncId), p(ft(e))) : (m.onRest = o, p(
            vo(
              u,
              m,
              d,
              e
            )
          ));
        }
      }
    })
  ), d.paused && await new Promise((m) => {
    d.resumeQueue.add(m);
  });
  const g = ra(e, await Promise.all(l));
  if (s && g.finished && !(r && g.noop)) {
    const m = wo(t, s, a);
    if (m)
      return Ao(e, [m]), To(e, m, !0);
  }
  return f && H.batchedUpdates(() => f(g, e, e.item)), g;
}
function Sn(e, t) {
  const r = { ...e.springs };
  return t && W(de(t), (n) => {
    $.und(n.keys) && (n = Ht(n)), $.obj(n.to) || (n = { ...n, to: void 0 }), Co(r, n, (a) => Oo(a));
  }), So(e, r), r;
}
function So(e, t) {
  Pe(t, (r, n) => {
    e.springs[n] || (e.springs[n] = r, ht(r, e));
  });
}
function Oo(e, t) {
  const r = new mu();
  return r.key = e, t && ht(r, t), r;
}
function Co(e, t, r) {
  t.keys && W(t.keys, (n) => {
    (e[n] || (e[n] = r(n)))._prepareNode(t);
  });
}
function Ao(e, t) {
  W(t, (r) => {
    Co(e.springs, r, (n) => Oo(n, e));
  });
}
var Xt = ({
  children: e,
  ...t
}) => {
  const r = Ze(br), n = t.pause || !!r.pause, a = t.immediate || !!r.immediate;
  t = eu(() => ({ pause: n, immediate: a }), [n, a]);
  const { Provider: i } = br;
  return /* @__PURE__ */ st.createElement(i, { value: t }, e);
}, br = wu(Xt, {});
Xt.Provider = br.Provider;
Xt.Consumer = br.Consumer;
function wu(e, t) {
  return Object.assign(e, st.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e;
}
var Po = () => {
  const e = [], t = function(n) {
    Zc();
    const a = [];
    return W(e, (i, s) => {
      if ($.und(n))
        a.push(i.start());
      else {
        const o = r(n, i, s);
        o && a.push(i.start(o));
      }
    }), a;
  };
  t.current = e, t.add = function(n) {
    e.includes(n) || e.push(n);
  }, t.delete = function(n) {
    const a = e.indexOf(n);
    ~a && e.splice(a, 1);
  }, t.pause = function() {
    return W(e, (n) => n.pause(...arguments)), this;
  }, t.resume = function() {
    return W(e, (n) => n.resume(...arguments)), this;
  }, t.set = function(n) {
    W(e, (a, i) => {
      const s = $.fun(n) ? n(i, a) : n;
      s && a.set(s);
    });
  }, t.start = function(n) {
    const a = [];
    return W(e, (i, s) => {
      if ($.und(n))
        a.push(i.start());
      else {
        const o = this._getProps(n, i, s);
        o && a.push(i.start(o));
      }
    }), a;
  }, t.stop = function() {
    return W(e, (n) => n.stop(...arguments)), this;
  }, t.update = function(n) {
    return W(e, (a, i) => a.update(this._getProps(n, a, i))), this;
  };
  const r = function(n, a, i) {
    return $.fun(n) ? n(i, a) : n;
  };
  return t._getProps = r, t;
};
function $u(e, t, r) {
  const n = $.fun(t) && t;
  n && !r && (r = []);
  const a = _e(
    () => n || arguments.length == 3 ? Po() : void 0,
    []
  ), i = pe(0), s = Xn(), o = _e(
    () => ({
      ctrls: [],
      queue: [],
      flush(w, S) {
        const T = Sn(w, S);
        return i.current > 0 && !o.queue.length && !Object.keys(T).some((y) => !w.springs[y]) ? Tn(w, S) : new Promise((y) => {
          So(w, T), o.queue.push(() => {
            y(Tn(w, S));
          }), s();
        });
      }
    }),
    []
  ), f = pe([...o.ctrls]), c = [], u = vn(e) || 0;
  _e(() => {
    W(f.current.slice(e, u), (w) => {
      xn(w, a), w.stop(!0);
    }), f.current.length = e, d(u, e);
  }, [e]), _e(() => {
    d(0, Math.min(u, e));
  }, r);
  function d(w, S) {
    for (let T = w; T < S; T++) {
      const A = f.current[T] || (f.current[T] = new $o(null, o.flush)), y = n ? n(T, A) : t[T];
      y && (c[T] = vu(y));
    }
  }
  const l = f.current.map((w, S) => Sn(w, c[S])), v = Ze(Xt), g = vn(v), m = v !== g && bo(v);
  He(() => {
    i.current++, o.ctrls = f.current;
    const { queue: w } = o;
    w.length && (o.queue = [], W(w, (S) => S())), W(f.current, (S, T) => {
      a == null || a.add(S), m && S.start({ default: v });
      const A = c[T];
      A && (po(S, A.ref), S.ref ? S.queue.push(A) : S.start(A));
    });
  }), Zn(() => () => {
    W(o.ctrls, (w) => w.stop(!0));
  });
  const p = l.map((w) => ({ ...w }));
  return a ? [p, a] : p;
}
function Ir(e, t) {
  const r = $.fun(e), [[n], a] = $u(
    1,
    r ? e : [e],
    r ? [] : t
  );
  return r || arguments.length == 2 ? [n, a] : n;
}
function Gx(e, t, r) {
  const n = $.fun(t) && t, {
    reset: a,
    sort: i,
    trail: s = 0,
    expires: o = !0,
    exitBeforeEnter: f = !1,
    onDestroyed: c,
    ref: u,
    config: d
  } = n ? n() : t, l = _e(
    () => n || arguments.length == 3 ? Po() : void 0,
    []
  ), v = de(e), g = [], m = pe(null), p = a ? null : m.current;
  He(() => {
    m.current = g;
  }), Zn(() => (W(g, (C) => {
    l == null || l.add(C.ctrl), C.ctrl.ref = l;
  }), () => {
    W(m.current, (C) => {
      C.expired && clearTimeout(C.expirationId), xn(C.ctrl, l), C.ctrl.stop(!0);
    });
  }));
  const w = Su(v, n ? n() : t, p), S = a && m.current || [];
  He(
    () => W(S, ({ ctrl: C, item: k, key: j }) => {
      xn(C, l), he(c, k, j);
    })
  );
  const T = [];
  if (p && W(p, (C, k) => {
    C.expired ? (clearTimeout(C.expirationId), S.push(C)) : (k = T[k] = w.indexOf(C.key), ~k && (g[k] = C));
  }), W(v, (C, k) => {
    g[k] || (g[k] = {
      key: w[k],
      item: C,
      phase: "mount",
      ctrl: new $o()
    }, g[k].ctrl.item = C);
  }), T.length) {
    let C = -1;
    const { leave: k } = n ? n() : t;
    W(T, (j, q) => {
      const J = p[q];
      ~j ? (C = g.indexOf(J), g[C] = { ...J, item: v[j] }) : k && g.splice(++C, 0, J);
    });
  }
  $.fun(i) && g.sort((C, k) => i(C.item, k.item));
  let A = -s;
  const y = Xn(), Y = jr(t), X = /* @__PURE__ */ new Map(), K = pe(/* @__PURE__ */ new Map()), te = pe(!1);
  W(g, (C, k) => {
    const j = C.key, q = C.phase, J = n ? n() : t;
    let I, x;
    const R = he(J.delay || 0, j);
    if (q == "mount")
      I = J.enter, x = "enter";
    else {
      const U = w.indexOf(j) < 0;
      if (q != "leave")
        if (U)
          I = J.leave, x = "leave";
        else if (I = J.update)
          x = "update";
        else
          return;
      else if (!U)
        I = J.enter, x = "enter";
      else
        return;
    }
    if (I = he(I, C.item, k), I = $.obj(I) ? ea(I) : { to: I }, !I.config) {
      const U = d || Y.config;
      I.config = he(U, C.item, k, x);
    }
    A += s;
    const N = {
      ...Y,
      // we need to add our props.delay value you here.
      delay: R + A,
      ref: u,
      immediate: J.immediate,
      // This prevents implied resets.
      reset: !1,
      // Merge any phase-specific props.
      ...I
    };
    if (x == "enter" && $.und(N.from)) {
      const U = n ? n() : t, z = $.und(U.initial) || p ? U.from : U.initial;
      N.from = he(z, C.item, k);
    }
    const { onResolve: B } = N;
    N.onResolve = (U) => {
      he(B, U);
      const z = m.current, F = z.find((G) => G.key === j);
      if (F && !(U.cancelled && F.phase != "update") && F.ctrl.idle) {
        const G = z.every((_) => _.ctrl.idle);
        if (F.phase == "leave") {
          const _ = he(o, F.item);
          if (_ !== !1) {
            const O = _ === !0 ? 0 : _;
            if (F.expired = !0, !G && O > 0) {
              O <= 2147483647 && (F.expirationId = setTimeout(y, O));
              return;
            }
          }
        }
        G && z.some((_) => _.expired) && (K.current.delete(F), f && (te.current = !0), y());
      }
    };
    const L = Sn(C.ctrl, N);
    x === "leave" && f ? K.current.set(C, { phase: x, springs: L, payload: N }) : X.set(C, { phase: x, springs: L, payload: N });
  });
  const Q = Ze(Xt), E = vn(Q), se = Q !== E && bo(Q);
  He(() => {
    se && W(g, (C) => {
      C.ctrl.start({ default: Q });
    });
  }, [Q]), W(X, (C, k) => {
    if (K.current.size) {
      const j = g.findIndex((q) => q.key === k.key);
      g.splice(j, 1);
    }
  }), He(
    () => {
      W(
        K.current.size ? K.current : X,
        ({ phase: C, payload: k }, j) => {
          const { ctrl: q } = j;
          j.phase = C, l == null || l.add(q), se && C == "enter" && q.start({ default: Q }), k && (po(q, k.ref), (q.ref || l) && !te.current ? q.update(k) : (q.start(k), te.current && (te.current = !1)));
        }
      );
    },
    a ? void 0 : r
  );
  const V = (C) => /* @__PURE__ */ st.createElement(st.Fragment, null, g.map((k, j) => {
    const { springs: q } = X.get(k) || k.ctrl, J = C({ ...q }, k.item, k, j);
    return J && J.type ? /* @__PURE__ */ st.createElement(
      J.type,
      {
        ...J.props,
        key: $.str(k.key) || $.num(k.key) ? k.key : k.ctrl.id,
        ref: J.ref
      }
    ) : J;
  }));
  return l ? [V, l] : V;
}
var Tu = 1;
function Su(e, { key: t, keys: r = t }, n) {
  if (r === null) {
    const a = /* @__PURE__ */ new Set();
    return e.map((i) => {
      const s = n && n.find(
        (o) => o.item === i && o.phase !== "leave" && !a.has(o)
      );
      return s ? (a.add(s), s.key) : Tu++;
    });
  }
  return $.und(r) ? e : $.fun(r) ? e.map(r) : de(r);
}
var Ro = class extends na {
  constructor(e, t) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = Ft(...t);
    const r = this._get(), n = yn(r);
    Jn(this, n.create(r));
  }
  advance(e) {
    const t = this._get(), r = this.get();
    ke(t, r) || (Ce(this).setValue(t), this._onChange(t, this.idle)), !this.idle && vi(this._active) && Xr(this);
  }
  _get() {
    const e = $.arr(this.source) ? this.source.map(le) : de(le(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !vi(this._active) && (this.idle = !1, W(kr(this), (e) => {
      e.done = !1;
    }), Se.skipAnimation ? (H.batchedUpdates(() => this.advance()), Xr(this)) : Ar.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    W(de(this.source), (t) => {
      ve(t) && ht(t, this), $n(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    W(de(this.source), (e) => {
      ve(e) && Ut(e, this);
    }), this._active.clear(), Xr(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = de(this.source).reduce(
      (t, r) => Math.max(t, ($n(r) ? r.priority : 0) + 1),
      0
    ));
  }
};
function Ou(e) {
  return e.idle !== !1;
}
function vi(e) {
  return !e.size || Array.from(e).every(Ou);
}
function Xr(e) {
  e.idle || (e.idle = !0, W(kr(e), (t) => {
    t.done = !0;
  }), qt(e, {
    type: "idle",
    parent: e
  }));
}
var Cu = (e, ...t) => new Ro(e, t);
Se.assign({
  createStringInterpolator: oo,
  to: (e, t) => new Ro(e, t)
});
var Eo = /^--/;
function Au(e, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !Eo.test(e) && !(jt.hasOwnProperty(e) && jt[e]) ? t + "px" : ("" + t).trim();
}
var yi = {};
function Pu(e, t) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const r = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", {
    className: n,
    style: a,
    children: i,
    scrollTop: s,
    scrollLeft: o,
    viewBox: f,
    ...c
  } = t, u = Object.values(c), d = Object.keys(c).map(
    (l) => r || e.hasAttribute(l) ? l : yi[l] || (yi[l] = l.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (v) => "-" + v.toLowerCase()
    ))
  );
  i !== void 0 && (e.textContent = i);
  for (const l in a)
    if (a.hasOwnProperty(l)) {
      const v = Au(l, a[l]);
      Eo.test(l) ? e.style.setProperty(l, v) : e.style[l] = v;
    }
  d.forEach((l, v) => {
    e.setAttribute(l, u[v]);
  }), n !== void 0 && (e.className = n), s !== void 0 && (e.scrollTop = s), o !== void 0 && (e.scrollLeft = o), f !== void 0 && e.setAttribute("viewBox", f);
}
var jt = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  // SVG-related properties
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Ru = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Eu = ["Webkit", "Ms", "Moz", "O"];
jt = Object.keys(jt).reduce((e, t) => (Eu.forEach((r) => e[Ru(r, t)] = e[t]), e), jt);
var ku = /^(matrix|translate|scale|rotate|skew)/, Mu = /^(translate)/, ju = /^(rotate|skew)/, Zr = (e, t) => $.num(e) && e !== 0 ? e + t : e, ur = (e, t) => $.arr(e) ? e.every((r) => ur(r, t)) : $.num(e) ? e === t : parseFloat(e) === t, Iu = class extends Mr {
  constructor({ x: e, y: t, z: r, ...n }) {
    const a = [], i = [];
    (e || t || r) && (a.push([e || 0, t || 0, r || 0]), i.push((s) => [
      `translate3d(${s.map((o) => Zr(o, "px")).join(",")})`,
      // prettier-ignore
      ur(s, 0)
    ])), Pe(n, (s, o) => {
      if (o === "transform")
        a.push([s || ""]), i.push((f) => [f, f === ""]);
      else if (ku.test(o)) {
        if (delete n[o], $.und(s))
          return;
        const f = Mu.test(o) ? "px" : ju.test(o) ? "deg" : "";
        a.push(de(s)), i.push(
          o === "rotate3d" ? ([c, u, d, l]) => [
            `rotate3d(${c},${u},${d},${Zr(l, f)})`,
            ur(l, 0)
          ] : (c) => [
            `${o}(${c.map((u) => Zr(u, f)).join(",")})`,
            ur(c, o.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), a.length && (n.transform = new Fu(a, i)), super(n);
  }
}, Fu = class extends ao {
  constructor(e, t) {
    super(), this.inputs = e, this.transforms = t, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", t = !0;
    return W(this.inputs, (r, n) => {
      const a = le(r[0]), [i, s] = this.transforms[n](
        $.arr(a) ? a : r.map(le)
      );
      e += " " + i, t = t && s;
    }), t ? "none" : e;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(e) {
    e == 1 && W(
      this.inputs,
      (t) => W(
        t,
        (r) => ve(r) && ht(r, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && W(
      this.inputs,
      (t) => W(
        t,
        (r) => ve(r) && Ut(r, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), qt(this, e);
  }
}, Du = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
Se.assign({
  batchedUpdates: fc,
  createStringInterpolator: oo,
  colors: Rc
});
var qu = fu(Du, {
  applyAnimatedValues: Pu,
  createAnimatedStyle: (e) => new Iu(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: t, ...r }) => r
}), aa = qu.animated, On = { exports: {} }, nr = { exports: {} }, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _i;
function Uu() {
  if (_i) return re;
  _i = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, o = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, l = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function T(y) {
    if (typeof y == "object" && y !== null) {
      var Y = y.$$typeof;
      switch (Y) {
        case t:
          switch (y = y.type, y) {
            case f:
            case c:
            case n:
            case i:
            case a:
            case d:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case o:
                case u:
                case g:
                case v:
                case s:
                  return y;
                default:
                  return Y;
              }
          }
        case r:
          return Y;
      }
    }
  }
  function A(y) {
    return T(y) === c;
  }
  return re.AsyncMode = f, re.ConcurrentMode = c, re.ContextConsumer = o, re.ContextProvider = s, re.Element = t, re.ForwardRef = u, re.Fragment = n, re.Lazy = g, re.Memo = v, re.Portal = r, re.Profiler = i, re.StrictMode = a, re.Suspense = d, re.isAsyncMode = function(y) {
    return A(y) || T(y) === f;
  }, re.isConcurrentMode = A, re.isContextConsumer = function(y) {
    return T(y) === o;
  }, re.isContextProvider = function(y) {
    return T(y) === s;
  }, re.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, re.isForwardRef = function(y) {
    return T(y) === u;
  }, re.isFragment = function(y) {
    return T(y) === n;
  }, re.isLazy = function(y) {
    return T(y) === g;
  }, re.isMemo = function(y) {
    return T(y) === v;
  }, re.isPortal = function(y) {
    return T(y) === r;
  }, re.isProfiler = function(y) {
    return T(y) === i;
  }, re.isStrictMode = function(y) {
    return T(y) === a;
  }, re.isSuspense = function(y) {
    return T(y) === d;
  }, re.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === c || y === i || y === a || y === d || y === l || typeof y == "object" && y !== null && (y.$$typeof === g || y.$$typeof === v || y.$$typeof === s || y.$$typeof === o || y.$$typeof === u || y.$$typeof === p || y.$$typeof === w || y.$$typeof === S || y.$$typeof === m);
  }, re.typeOf = T, re;
}
var ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xi;
function Nu() {
  return xi || (xi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, o = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, l = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function T(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === n || h === c || h === i || h === a || h === d || h === l || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === v || h.$$typeof === s || h.$$typeof === o || h.$$typeof === u || h.$$typeof === p || h.$$typeof === w || h.$$typeof === S || h.$$typeof === m);
    }
    function A(h) {
      if (typeof h == "object" && h !== null) {
        var oe = h.$$typeof;
        switch (oe) {
          case t:
            var ee = h.type;
            switch (ee) {
              case f:
              case c:
              case n:
              case i:
              case a:
              case d:
                return ee;
              default:
                var ue = ee && ee.$$typeof;
                switch (ue) {
                  case o:
                  case u:
                  case g:
                  case v:
                  case s:
                    return ue;
                  default:
                    return oe;
                }
            }
          case r:
            return oe;
        }
      }
    }
    var y = f, Y = c, X = o, K = s, te = t, Q = u, E = n, se = g, V = v, C = r, k = i, j = a, q = d, J = !1;
    function I(h) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(h) || A(h) === f;
    }
    function x(h) {
      return A(h) === c;
    }
    function R(h) {
      return A(h) === o;
    }
    function N(h) {
      return A(h) === s;
    }
    function B(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function L(h) {
      return A(h) === u;
    }
    function U(h) {
      return A(h) === n;
    }
    function z(h) {
      return A(h) === g;
    }
    function F(h) {
      return A(h) === v;
    }
    function G(h) {
      return A(h) === r;
    }
    function _(h) {
      return A(h) === i;
    }
    function O(h) {
      return A(h) === a;
    }
    function D(h) {
      return A(h) === d;
    }
    ne.AsyncMode = y, ne.ConcurrentMode = Y, ne.ContextConsumer = X, ne.ContextProvider = K, ne.Element = te, ne.ForwardRef = Q, ne.Fragment = E, ne.Lazy = se, ne.Memo = V, ne.Portal = C, ne.Profiler = k, ne.StrictMode = j, ne.Suspense = q, ne.isAsyncMode = I, ne.isConcurrentMode = x, ne.isContextConsumer = R, ne.isContextProvider = N, ne.isElement = B, ne.isForwardRef = L, ne.isFragment = U, ne.isLazy = z, ne.isMemo = F, ne.isPortal = G, ne.isProfiler = _, ne.isStrictMode = O, ne.isSuspense = D, ne.isValidElementType = T, ne.typeOf = A;
  }()), ne;
}
var wi;
function ko() {
  return wi || (wi = 1, process.env.NODE_ENV === "production" ? nr.exports = Uu() : nr.exports = Nu()), nr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Jr, $i;
function Lu() {
  if ($i) return Jr;
  $i = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, o = 0; o < 10; o++)
        s["_" + String.fromCharCode(o)] = o;
      var f = Object.getOwnPropertyNames(s).map(function(u) {
        return s[u];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Jr = a() ? Object.assign : function(i, s) {
    for (var o, f = n(i), c, u = 1; u < arguments.length; u++) {
      o = Object(arguments[u]);
      for (var d in o)
        t.call(o, d) && (f[d] = o[d]);
      if (e) {
        c = e(o);
        for (var l = 0; l < c.length; l++)
          r.call(o, c[l]) && (f[c[l]] = o[c[l]]);
      }
    }
    return f;
  }, Jr;
}
var en, Ti;
function ia() {
  if (Ti) return en;
  Ti = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return en = e, en;
}
var tn, Si;
function Mo() {
  return Si || (Si = 1, tn = Function.call.bind(Object.prototype.hasOwnProperty)), tn;
}
var rn, Oi;
function zu() {
  if (Oi) return rn;
  Oi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ia(), r = {}, n = Mo();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(i, s, o, f, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in i)
        if (n(i, u)) {
          var d;
          try {
            if (typeof i[u] != "function") {
              var l = Error(
                (f || "React class") + ": " + o + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw l.name = "Invariant Violation", l;
            }
            d = i[u](s, u, f, o, null, t);
          } catch (g) {
            d = g;
          }
          if (d && !(d instanceof Error) && e(
            (f || "React class") + ": type specification of " + o + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var v = c ? c() : "";
            e(
              "Failed " + o + " type: " + d.message + (v ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, rn = a, rn;
}
var nn, Ci;
function Wu() {
  if (Ci) return nn;
  Ci = 1;
  var e = ko(), t = Lu(), r = ia(), n = Mo(), a = zu(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(o) {
    var f = "Warning: " + o;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return nn = function(o, f) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(x) {
      var R = x && (c && x[c] || x[u]);
      if (typeof R == "function")
        return R;
    }
    var l = "<<anonymous>>", v = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: S(),
      arrayOf: T,
      element: A(),
      elementType: y(),
      instanceOf: Y,
      node: Q(),
      objectOf: K,
      oneOf: X,
      oneOfType: te,
      shape: se,
      exact: V
    };
    function g(x, R) {
      return x === R ? x !== 0 || 1 / x === 1 / R : x !== x && R !== R;
    }
    function m(x, R) {
      this.message = x, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function p(x) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, N = 0;
      function B(U, z, F, G, _, O, D) {
        if (G = G || l, O = O || F, D !== r) {
          if (f) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var oe = G + ":" + F;
            !R[oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[oe] = !0, N++);
          }
        }
        return z[F] == null ? U ? z[F] === null ? new m("The " + _ + " `" + O + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new m("The " + _ + " `" + O + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : x(z, F, G, _, O);
      }
      var L = B.bind(null, !1);
      return L.isRequired = B.bind(null, !0), L;
    }
    function w(x) {
      function R(N, B, L, U, z, F) {
        var G = N[B], _ = j(G);
        if (_ !== x) {
          var O = q(G);
          return new m(
            "Invalid " + U + " `" + z + "` of type " + ("`" + O + "` supplied to `" + L + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return p(R);
    }
    function S() {
      return p(s);
    }
    function T(x) {
      function R(N, B, L, U, z) {
        if (typeof x != "function")
          return new m("Property `" + z + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var F = N[B];
        if (!Array.isArray(F)) {
          var G = j(F);
          return new m("Invalid " + U + " `" + z + "` of type " + ("`" + G + "` supplied to `" + L + "`, expected an array."));
        }
        for (var _ = 0; _ < F.length; _++) {
          var O = x(F, _, L, U, z + "[" + _ + "]", r);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return p(R);
    }
    function A() {
      function x(R, N, B, L, U) {
        var z = R[N];
        if (!o(z)) {
          var F = j(z);
          return new m("Invalid " + L + " `" + U + "` of type " + ("`" + F + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return p(x);
    }
    function y() {
      function x(R, N, B, L, U) {
        var z = R[N];
        if (!e.isValidElementType(z)) {
          var F = j(z);
          return new m("Invalid " + L + " `" + U + "` of type " + ("`" + F + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return p(x);
    }
    function Y(x) {
      function R(N, B, L, U, z) {
        if (!(N[B] instanceof x)) {
          var F = x.name || l, G = I(N[B]);
          return new m("Invalid " + U + " `" + z + "` of type " + ("`" + G + "` supplied to `" + L + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return p(R);
    }
    function X(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function R(N, B, L, U, z) {
        for (var F = N[B], G = 0; G < x.length; G++)
          if (g(F, x[G]))
            return null;
        var _ = JSON.stringify(x, function(D, h) {
          var oe = q(h);
          return oe === "symbol" ? String(h) : h;
        });
        return new m("Invalid " + U + " `" + z + "` of value `" + String(F) + "` " + ("supplied to `" + L + "`, expected one of " + _ + "."));
      }
      return p(R);
    }
    function K(x) {
      function R(N, B, L, U, z) {
        if (typeof x != "function")
          return new m("Property `" + z + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var F = N[B], G = j(F);
        if (G !== "object")
          return new m("Invalid " + U + " `" + z + "` of type " + ("`" + G + "` supplied to `" + L + "`, expected an object."));
        for (var _ in F)
          if (n(F, _)) {
            var O = x(F, _, L, U, z + "." + _, r);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return p(R);
    }
    function te(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var R = 0; R < x.length; R++) {
        var N = x[R];
        if (typeof N != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + J(N) + " at index " + R + "."
          ), s;
      }
      function B(L, U, z, F, G) {
        for (var _ = [], O = 0; O < x.length; O++) {
          var D = x[O], h = D(L, U, z, F, G, r);
          if (h == null)
            return null;
          h.data && n(h.data, "expectedType") && _.push(h.data.expectedType);
        }
        var oe = _.length > 0 ? ", expected one of type [" + _.join(", ") + "]" : "";
        return new m("Invalid " + F + " `" + G + "` supplied to " + ("`" + z + "`" + oe + "."));
      }
      return p(B);
    }
    function Q() {
      function x(R, N, B, L, U) {
        return C(R[N]) ? null : new m("Invalid " + L + " `" + U + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return p(x);
    }
    function E(x, R, N, B, L) {
      return new m(
        (x || "React class") + ": " + R + " type `" + N + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function se(x) {
      function R(N, B, L, U, z) {
        var F = N[B], G = j(F);
        if (G !== "object")
          return new m("Invalid " + U + " `" + z + "` of type `" + G + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var _ in x) {
          var O = x[_];
          if (typeof O != "function")
            return E(L, U, z, _, q(O));
          var D = O(F, _, L, U, z + "." + _, r);
          if (D)
            return D;
        }
        return null;
      }
      return p(R);
    }
    function V(x) {
      function R(N, B, L, U, z) {
        var F = N[B], G = j(F);
        if (G !== "object")
          return new m("Invalid " + U + " `" + z + "` of type `" + G + "` " + ("supplied to `" + L + "`, expected `object`."));
        var _ = t({}, N[B], x);
        for (var O in _) {
          var D = x[O];
          if (n(x, O) && typeof D != "function")
            return E(L, U, z, O, q(D));
          if (!D)
            return new m(
              "Invalid " + U + " `" + z + "` key `" + O + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify(N[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var h = D(F, O, L, U, z + "." + O, r);
          if (h)
            return h;
        }
        return null;
      }
      return p(R);
    }
    function C(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(C);
          if (x === null || o(x))
            return !0;
          var R = d(x);
          if (R) {
            var N = R.call(x), B;
            if (R !== x.entries) {
              for (; !(B = N.next()).done; )
                if (!C(B.value))
                  return !1;
            } else
              for (; !(B = N.next()).done; ) {
                var L = B.value;
                if (L && !C(L[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function k(x, R) {
      return x === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function j(x) {
      var R = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : k(R, x) ? "symbol" : R;
    }
    function q(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var R = j(x);
      if (R === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function J(x) {
      var R = q(x);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function I(x) {
      return !x.constructor || !x.constructor.name ? l : x.constructor.name;
    }
    return v.checkPropTypes = a, v.resetWarningCache = a.resetWarningCache, v.PropTypes = v, v;
  }, nn;
}
var an, Ai;
function Hu() {
  if (Ai) return an;
  Ai = 1;
  var e = ia();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, an = function() {
    function n(s, o, f, c, u, d) {
      if (d !== e) {
        var l = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw l.name = "Invariant Violation", l;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, an;
}
if (process.env.NODE_ENV !== "production") {
  var Yu = ko(), Vu = !0;
  On.exports = Wu()(Yu.isElement, Vu);
} else
  On.exports = Hu()();
var Bu = On.exports;
const b = /* @__PURE__ */ Oe(Bu);
function Gu() {
  this.__data__ = [], this.size = 0;
}
var Ku = Gu;
function Qu(e, t) {
  return e === t || e !== e && t !== t;
}
var Zt = Qu, Xu = Zt;
function Zu(e, t) {
  for (var r = e.length; r--; )
    if (Xu(e[r][0], t))
      return r;
  return -1;
}
var Fr = Zu, Ju = Fr, ed = Array.prototype, td = ed.splice;
function rd(e) {
  var t = this.__data__, r = Ju(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : td.call(t, r, 1), --this.size, !0;
}
var nd = rd, ad = Fr;
function id(e) {
  var t = this.__data__, r = ad(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var sd = id, od = Fr;
function fd(e) {
  return od(this.__data__, e) > -1;
}
var cd = fd, ud = Fr;
function dd(e, t) {
  var r = this.__data__, n = ud(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var ld = dd, hd = Ku, bd = nd, pd = sd, gd = cd, md = ld;
function bt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
bt.prototype.clear = hd;
bt.prototype.delete = bd;
bt.prototype.get = pd;
bt.prototype.has = gd;
bt.prototype.set = md;
var Dr = bt, vd = Dr;
function yd() {
  this.__data__ = new vd(), this.size = 0;
}
var _d = yd;
function xd(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var wd = xd;
function $d(e) {
  return this.__data__.get(e);
}
var Td = $d;
function Sd(e) {
  return this.__data__.has(e);
}
var Od = Sd, Cd = typeof tr == "object" && tr && tr.Object === Object && tr, jo = Cd, Ad = jo, Pd = typeof self == "object" && self && self.Object === Object && self, Rd = Ad || Pd || Function("return this")(), Re = Rd, Ed = Re, kd = Ed.Symbol, Jt = kd, Pi = Jt, Io = Object.prototype, Md = Io.hasOwnProperty, jd = Io.toString, wt = Pi ? Pi.toStringTag : void 0;
function Id(e) {
  var t = Md.call(e, wt), r = e[wt];
  try {
    e[wt] = void 0;
    var n = !0;
  } catch {
  }
  var a = jd.call(e);
  return n && (t ? e[wt] = r : delete e[wt]), a;
}
var Fd = Id, Dd = Object.prototype, qd = Dd.toString;
function Ud(e) {
  return qd.call(e);
}
var Nd = Ud, Ri = Jt, Ld = Fd, zd = Nd, Wd = "[object Null]", Hd = "[object Undefined]", Ei = Ri ? Ri.toStringTag : void 0;
function Yd(e) {
  return e == null ? e === void 0 ? Hd : Wd : Ei && Ei in Object(e) ? Ld(e) : zd(e);
}
var Je = Yd;
function Vd(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ne = Vd, Bd = Je, Gd = Ne, Kd = "[object AsyncFunction]", Qd = "[object Function]", Xd = "[object GeneratorFunction]", Zd = "[object Proxy]";
function Jd(e) {
  if (!Gd(e))
    return !1;
  var t = Bd(e);
  return t == Qd || t == Xd || t == Kd || t == Zd;
}
var qr = Jd;
const Fo = /* @__PURE__ */ Oe(qr);
var el = Re, tl = el["__core-js_shared__"], rl = tl, sn = rl, ki = function() {
  var e = /[^.]+$/.exec(sn && sn.keys && sn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function nl(e) {
  return !!ki && ki in e;
}
var al = nl, il = Function.prototype, sl = il.toString;
function ol(e) {
  if (e != null) {
    try {
      return sl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Do = ol, fl = qr, cl = al, ul = Ne, dl = Do, ll = /[\\^$.*+?()[\]{}|]/g, hl = /^\[object .+?Constructor\]$/, bl = Function.prototype, pl = Object.prototype, gl = bl.toString, ml = pl.hasOwnProperty, vl = RegExp(
  "^" + gl.call(ml).replace(ll, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yl(e) {
  if (!ul(e) || cl(e))
    return !1;
  var t = fl(e) ? vl : hl;
  return t.test(dl(e));
}
var _l = yl;
function xl(e, t) {
  return e == null ? void 0 : e[t];
}
var wl = xl, $l = _l, Tl = wl;
function Sl(e, t) {
  var r = Tl(e, t);
  return $l(r) ? r : void 0;
}
var et = Sl, Ol = et, Cl = Re, Al = Ol(Cl, "Map"), sa = Al, Pl = et, Rl = Pl(Object, "create"), Ur = Rl, Mi = Ur;
function El() {
  this.__data__ = Mi ? Mi(null) : {}, this.size = 0;
}
var kl = El;
function Ml(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var jl = Ml, Il = Ur, Fl = "__lodash_hash_undefined__", Dl = Object.prototype, ql = Dl.hasOwnProperty;
function Ul(e) {
  var t = this.__data__;
  if (Il) {
    var r = t[e];
    return r === Fl ? void 0 : r;
  }
  return ql.call(t, e) ? t[e] : void 0;
}
var Nl = Ul, Ll = Ur, zl = Object.prototype, Wl = zl.hasOwnProperty;
function Hl(e) {
  var t = this.__data__;
  return Ll ? t[e] !== void 0 : Wl.call(t, e);
}
var Yl = Hl, Vl = Ur, Bl = "__lodash_hash_undefined__";
function Gl(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Vl && t === void 0 ? Bl : t, this;
}
var Kl = Gl, Ql = kl, Xl = jl, Zl = Nl, Jl = Yl, eh = Kl;
function pt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
pt.prototype.clear = Ql;
pt.prototype.delete = Xl;
pt.prototype.get = Zl;
pt.prototype.has = Jl;
pt.prototype.set = eh;
var th = pt, ji = th, rh = Dr, nh = sa;
function ah() {
  this.size = 0, this.__data__ = {
    hash: new ji(),
    map: new (nh || rh)(),
    string: new ji()
  };
}
var ih = ah;
function sh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var oh = sh, fh = oh;
function ch(e, t) {
  var r = e.__data__;
  return fh(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Nr = ch, uh = Nr;
function dh(e) {
  var t = uh(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var lh = dh, hh = Nr;
function bh(e) {
  return hh(this, e).get(e);
}
var ph = bh, gh = Nr;
function mh(e) {
  return gh(this, e).has(e);
}
var vh = mh, yh = Nr;
function _h(e, t) {
  var r = yh(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var xh = _h, wh = ih, $h = lh, Th = ph, Sh = vh, Oh = xh;
function gt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
gt.prototype.clear = wh;
gt.prototype.delete = $h;
gt.prototype.get = Th;
gt.prototype.has = Sh;
gt.prototype.set = Oh;
var oa = gt, Ch = Dr, Ah = sa, Ph = oa, Rh = 200;
function Eh(e, t) {
  var r = this.__data__;
  if (r instanceof Ch) {
    var n = r.__data__;
    if (!Ah || n.length < Rh - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ph(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var kh = Eh, Mh = Dr, jh = _d, Ih = wd, Fh = Td, Dh = Od, qh = kh;
function mt(e) {
  var t = this.__data__ = new Mh(e);
  this.size = t.size;
}
mt.prototype.clear = jh;
mt.prototype.delete = Ih;
mt.prototype.get = Fh;
mt.prototype.has = Dh;
mt.prototype.set = qh;
var qo = mt, Uh = et, Nh = function() {
  try {
    var e = Uh(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Uo = Nh, Ii = Uo;
function Lh(e, t, r) {
  t == "__proto__" && Ii ? Ii(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var fa = Lh, zh = fa, Wh = Zt;
function Hh(e, t, r) {
  (r !== void 0 && !Wh(e[t], r) || r === void 0 && !(t in e)) && zh(e, t, r);
}
var No = Hh;
function Yh(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), s = n(t), o = s.length; o--; ) {
      var f = s[e ? o : ++a];
      if (r(i[f], f, i) === !1)
        break;
    }
    return t;
  };
}
var Vh = Yh, Bh = Vh, Gh = Bh(), Kh = Gh, pr = { exports: {} };
pr.exports;
(function(e, t) {
  var r = Re, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i ? r.Buffer : void 0, o = s ? s.allocUnsafe : void 0;
  function f(c, u) {
    if (u)
      return c.slice();
    var d = c.length, l = o ? o(d) : new c.constructor(d);
    return c.copy(l), l;
  }
  e.exports = f;
})(pr, pr.exports);
var Qh = pr.exports, Xh = Re, Zh = Xh.Uint8Array, Lo = Zh, Fi = Lo;
function Jh(e) {
  var t = new e.constructor(e.byteLength);
  return new Fi(t).set(new Fi(e)), t;
}
var e0 = Jh, t0 = e0;
function r0(e, t) {
  var r = t ? t0(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var n0 = r0;
function a0(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var i0 = a0, s0 = Ne, Di = Object.create, o0 = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!s0(t))
      return {};
    if (Di)
      return Di(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), f0 = o0;
function c0(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var zo = c0, u0 = zo, d0 = u0(Object.getPrototypeOf, Object), Wo = d0, l0 = Object.prototype;
function h0(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || l0;
  return e === r;
}
var ca = h0, b0 = f0, p0 = Wo, g0 = ca;
function m0(e) {
  return typeof e.constructor == "function" && !g0(e) ? b0(p0(e)) : {};
}
var v0 = m0;
function y0(e) {
  return e != null && typeof e == "object";
}
var Le = y0, _0 = Je, x0 = Le, w0 = "[object Arguments]";
function $0(e) {
  return x0(e) && _0(e) == w0;
}
var T0 = $0, qi = T0, S0 = Le, Ho = Object.prototype, O0 = Ho.hasOwnProperty, C0 = Ho.propertyIsEnumerable, A0 = qi(/* @__PURE__ */ function() {
  return arguments;
}()) ? qi : function(e) {
  return S0(e) && O0.call(e, "callee") && !C0.call(e, "callee");
}, Lr = A0, P0 = Array.isArray, Ee = P0, R0 = 9007199254740991;
function E0(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= R0;
}
var ua = E0, k0 = qr, M0 = ua;
function j0(e) {
  return e != null && M0(e.length) && !k0(e);
}
var zr = j0, I0 = zr, F0 = Le;
function D0(e) {
  return F0(e) && I0(e);
}
var Yo = D0, gr = { exports: {} };
function q0() {
  return !1;
}
var U0 = q0;
gr.exports;
(function(e, t) {
  var r = Re, n = U0, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s ? r.Buffer : void 0, f = o ? o.isBuffer : void 0, c = f || n;
  e.exports = c;
})(gr, gr.exports);
var da = gr.exports, N0 = Je, L0 = Wo, z0 = Le, W0 = "[object Object]", H0 = Function.prototype, Y0 = Object.prototype, Vo = H0.toString, V0 = Y0.hasOwnProperty, B0 = Vo.call(Object);
function G0(e) {
  if (!z0(e) || N0(e) != W0)
    return !1;
  var t = L0(e);
  if (t === null)
    return !0;
  var r = V0.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Vo.call(r) == B0;
}
var Bo = G0;
const K0 = /* @__PURE__ */ Oe(Bo);
var Q0 = Je, X0 = ua, Z0 = Le, J0 = "[object Arguments]", eb = "[object Array]", tb = "[object Boolean]", rb = "[object Date]", nb = "[object Error]", ab = "[object Function]", ib = "[object Map]", sb = "[object Number]", ob = "[object Object]", fb = "[object RegExp]", cb = "[object Set]", ub = "[object String]", db = "[object WeakMap]", lb = "[object ArrayBuffer]", hb = "[object DataView]", bb = "[object Float32Array]", pb = "[object Float64Array]", gb = "[object Int8Array]", mb = "[object Int16Array]", vb = "[object Int32Array]", yb = "[object Uint8Array]", _b = "[object Uint8ClampedArray]", xb = "[object Uint16Array]", wb = "[object Uint32Array]", fe = {};
fe[bb] = fe[pb] = fe[gb] = fe[mb] = fe[vb] = fe[yb] = fe[_b] = fe[xb] = fe[wb] = !0;
fe[J0] = fe[eb] = fe[lb] = fe[tb] = fe[hb] = fe[rb] = fe[nb] = fe[ab] = fe[ib] = fe[sb] = fe[ob] = fe[fb] = fe[cb] = fe[ub] = fe[db] = !1;
function $b(e) {
  return Z0(e) && X0(e.length) && !!fe[Q0(e)];
}
var Tb = $b;
function Sb(e) {
  return function(t) {
    return e(t);
  };
}
var Go = Sb, mr = { exports: {} };
mr.exports;
(function(e, t) {
  var r = jo, n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, s = i && r.process, o = function() {
    try {
      var f = a && a.require && a.require("util").types;
      return f || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(mr, mr.exports);
var Ob = mr.exports, Cb = Tb, Ab = Go, Ui = Ob, Ni = Ui && Ui.isTypedArray, Pb = Ni ? Ab(Ni) : Cb, la = Pb;
function Rb(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Ko = Rb, Eb = fa, kb = Zt, Mb = Object.prototype, jb = Mb.hasOwnProperty;
function Ib(e, t, r) {
  var n = e[t];
  (!(jb.call(e, t) && kb(n, r)) || r === void 0 && !(t in e)) && Eb(e, t, r);
}
var Qo = Ib, Fb = Qo, Db = fa;
function qb(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, s = t.length; ++i < s; ) {
    var o = t[i], f = n ? n(r[o], e[o], o, r, e) : void 0;
    f === void 0 && (f = e[o]), a ? Db(r, o, f) : Fb(r, o, f);
  }
  return r;
}
var Ub = qb;
function Nb(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Lb = Nb, zb = 9007199254740991, Wb = /^(?:0|[1-9]\d*)$/;
function Hb(e, t) {
  var r = typeof e;
  return t = t ?? zb, !!t && (r == "number" || r != "symbol" && Wb.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Wr = Hb, Yb = Lb, Vb = Lr, Bb = Ee, Gb = da, Kb = Wr, Qb = la, Xb = Object.prototype, Zb = Xb.hasOwnProperty;
function Jb(e, t) {
  var r = Bb(e), n = !r && Vb(e), a = !r && !n && Gb(e), i = !r && !n && !a && Qb(e), s = r || n || a || i, o = s ? Yb(e.length, String) : [], f = o.length;
  for (var c in e)
    (t || Zb.call(e, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Kb(c, f))) && o.push(c);
  return o;
}
var Xo = Jb;
function ep(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var tp = ep, rp = Ne, np = ca, ap = tp, ip = Object.prototype, sp = ip.hasOwnProperty;
function op(e) {
  if (!rp(e))
    return ap(e);
  var t = np(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !sp.call(e, n)) || r.push(n);
  return r;
}
var fp = op, cp = Xo, up = fp, dp = zr;
function lp(e) {
  return dp(e) ? cp(e, !0) : up(e);
}
var Zo = lp, hp = Ub, bp = Zo;
function pp(e) {
  return hp(e, bp(e));
}
var gp = pp, Li = No, mp = Qh, vp = n0, yp = i0, _p = v0, zi = Lr, Wi = Ee, xp = Yo, wp = da, $p = qr, Tp = Ne, Sp = Bo, Op = la, Hi = Ko, Cp = gp;
function Ap(e, t, r, n, a, i, s) {
  var o = Hi(e, r), f = Hi(t, r), c = s.get(f);
  if (c) {
    Li(e, r, c);
    return;
  }
  var u = i ? i(o, f, r + "", e, t, s) : void 0, d = u === void 0;
  if (d) {
    var l = Wi(f), v = !l && wp(f), g = !l && !v && Op(f);
    u = f, l || v || g ? Wi(o) ? u = o : xp(o) ? u = yp(o) : v ? (d = !1, u = mp(f, !0)) : g ? (d = !1, u = vp(f, !0)) : u = [] : Sp(f) || zi(f) ? (u = o, zi(o) ? u = Cp(o) : (!Tp(o) || $p(o)) && (u = _p(f))) : d = !1;
  }
  d && (s.set(f, u), a(u, f, n, i, s), s.delete(f)), Li(e, r, u);
}
var Pp = Ap, Rp = qo, Ep = No, kp = Kh, Mp = Pp, jp = Ne, Ip = Zo, Fp = Ko;
function Jo(e, t, r, n, a) {
  e !== t && kp(t, function(i, s) {
    if (a || (a = new Rp()), jp(i))
      Mp(e, t, s, r, Jo, n, a);
    else {
      var o = n ? n(Fp(e, s), i, s + "", e, t, a) : void 0;
      o === void 0 && (o = i), Ep(e, s, o);
    }
  }, Ip);
}
var Dp = Jo;
function qp(e) {
  return e;
}
var ef = qp;
function Up(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var Np = Up, Lp = Np, Yi = Math.max;
function zp(e, t, r) {
  return t = Yi(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, i = Yi(n.length - t, 0), s = Array(i); ++a < i; )
      s[a] = n[t + a];
    a = -1;
    for (var o = Array(t + 1); ++a < t; )
      o[a] = n[a];
    return o[t] = r(s), Lp(e, this, o);
  };
}
var tf = zp;
function Wp(e) {
  return function() {
    return e;
  };
}
var Hp = Wp, Yp = Hp, Vi = Uo, Vp = ef, Bp = Vi ? function(e, t) {
  return Vi(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Yp(t),
    writable: !0
  });
} : Vp, Gp = Bp, Kp = 800, Qp = 16, Xp = Date.now;
function Zp(e) {
  var t = 0, r = 0;
  return function() {
    var n = Xp(), a = Qp - (n - r);
    if (r = n, a > 0) {
      if (++t >= Kp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Jp = Zp, e1 = Gp, t1 = Jp, r1 = t1(e1), rf = r1, n1 = ef, a1 = tf, i1 = rf;
function s1(e, t) {
  return i1(a1(e, t, n1), e + "");
}
var nf = s1, o1 = Zt, f1 = zr, c1 = Wr, u1 = Ne;
function d1(e, t, r) {
  if (!u1(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? f1(r) && c1(t, r.length) : n == "string" && t in r) ? o1(r[t], e) : !1;
}
var l1 = d1, h1 = nf, b1 = l1;
function p1(e) {
  return h1(function(t, r) {
    var n = -1, a = r.length, i = a > 1 ? r[a - 1] : void 0, s = a > 2 ? r[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0, s && b1(r[0], r[1], s) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++n < a; ) {
      var o = r[n];
      o && e(t, o, n, i);
    }
    return t;
  });
}
var g1 = p1, m1 = Dp, v1 = g1, y1 = v1(function(e, t, r) {
  m1(e, t, r);
}), _1 = y1;
const x1 = /* @__PURE__ */ Oe(_1);
var w1 = Je, $1 = Le, T1 = "[object Symbol]";
function S1(e) {
  return typeof e == "symbol" || $1(e) && w1(e) == T1;
}
var ha = S1, O1 = Ee, C1 = ha, A1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, P1 = /^\w*$/;
function R1(e, t) {
  if (O1(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || C1(e) ? !0 : P1.test(e) || !A1.test(e) || t != null && e in Object(t);
}
var E1 = R1, af = oa, k1 = "Expected a function";
function ba(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(k1);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var s = e.apply(this, n);
    return r.cache = i.set(a, s) || i, s;
  };
  return r.cache = new (ba.Cache || af)(), r;
}
ba.Cache = af;
var M1 = ba, j1 = M1, I1 = 500;
function F1(e) {
  var t = j1(e, function(n) {
    return r.size === I1 && r.clear(), n;
  }), r = t.cache;
  return t;
}
var D1 = F1, q1 = D1, U1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, N1 = /\\(\\)?/g, L1 = q1(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(U1, function(r, n, a, i) {
    t.push(a ? i.replace(N1, "$1") : n || r);
  }), t;
}), z1 = L1;
function W1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var sf = W1, Bi = Jt, H1 = sf, Y1 = Ee, V1 = ha, Gi = Bi ? Bi.prototype : void 0, Ki = Gi ? Gi.toString : void 0;
function of(e) {
  if (typeof e == "string")
    return e;
  if (Y1(e))
    return H1(e, of) + "";
  if (V1(e))
    return Ki ? Ki.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var B1 = of, G1 = B1;
function K1(e) {
  return e == null ? "" : G1(e);
}
var Q1 = K1, X1 = Ee, Z1 = E1, J1 = z1, eg = Q1;
function tg(e, t) {
  return X1(e) ? e : Z1(e, t) ? [e] : J1(eg(e));
}
var Hr = tg, rg = ha;
function ng(e) {
  if (typeof e == "string" || rg(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var pa = ng, ag = Hr, ig = pa;
function sg(e, t) {
  t = ag(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[ig(t[r++])];
  return r && r == n ? e : void 0;
}
var ff = sg, og = ff;
function fg(e, t, r) {
  var n = e == null ? void 0 : og(e, t);
  return n === void 0 ? r : n;
}
var cg = fg;
const Yt = /* @__PURE__ */ Oe(cg);
var ug = Qo, dg = Hr, lg = Wr, Qi = Ne, hg = pa;
function bg(e, t, r, n) {
  if (!Qi(e))
    return e;
  t = dg(t, e);
  for (var a = -1, i = t.length, s = i - 1, o = e; o != null && ++a < i; ) {
    var f = hg(t[a]), c = r;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return e;
    if (a != s) {
      var u = o[f];
      c = n ? n(u, f, o) : void 0, c === void 0 && (c = Qi(u) ? u : lg(t[a + 1]) ? [] : {});
    }
    ug(o, f, c), o = o[f];
  }
  return e;
}
var cf = bg, pg = cf;
function gg(e, t, r) {
  return e == null ? e : pg(e, t, r);
}
var mg = gg;
const Rt = /* @__PURE__ */ Oe(mg);
function ga(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function uf(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function er() {
}
var Vt = 0.7, vr = 1 / Vt, ct = "\\s*([+-]?\\d+)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ae = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", vg = /^#([0-9a-f]{3,8})$/, yg = new RegExp(`^rgb\\(${ct},${ct},${ct}\\)$`), _g = new RegExp(`^rgb\\(${Ae},${Ae},${Ae}\\)$`), xg = new RegExp(`^rgba\\(${ct},${ct},${ct},${Bt}\\)$`), wg = new RegExp(`^rgba\\(${Ae},${Ae},${Ae},${Bt}\\)$`), $g = new RegExp(`^hsl\\(${Bt},${Ae},${Ae}\\)$`), Tg = new RegExp(`^hsla\\(${Bt},${Ae},${Ae},${Bt}\\)$`), Xi = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ga(er, ma, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Zi,
  // Deprecated! Use color.formatHex.
  formatHex: Zi,
  formatHex8: Sg,
  formatHsl: Og,
  formatRgb: Ji,
  toString: Ji
});
function Zi() {
  return this.rgb().formatHex();
}
function Sg() {
  return this.rgb().formatHex8();
}
function Og() {
  return df(this).formatHsl();
}
function Ji() {
  return this.rgb().formatRgb();
}
function ma(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = vg.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? es(t) : r === 3 ? new be(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ar(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ar(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = yg.exec(e)) ? new be(t[1], t[2], t[3], 1) : (t = _g.exec(e)) ? new be(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = xg.exec(e)) ? ar(t[1], t[2], t[3], t[4]) : (t = wg.exec(e)) ? ar(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = $g.exec(e)) ? ns(t[1], t[2] / 100, t[3] / 100, 1) : (t = Tg.exec(e)) ? ns(t[1], t[2] / 100, t[3] / 100, t[4]) : Xi.hasOwnProperty(e) ? es(Xi[e]) : e === "transparent" ? new be(NaN, NaN, NaN, 0) : null;
}
function es(e) {
  return new be(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ar(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new be(e, t, r, n);
}
function Cg(e) {
  return e instanceof er || (e = ma(e)), e ? (e = e.rgb(), new be(e.r, e.g, e.b, e.opacity)) : new be();
}
function yr(e, t, r, n) {
  return arguments.length === 1 ? Cg(e) : new be(e, t, r, n ?? 1);
}
function be(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
ga(be, yr, uf(er, {
  brighter(e) {
    return e = e == null ? vr : Math.pow(vr, e), new be(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vt : Math.pow(Vt, e), new be(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new be(Ve(this.r), Ve(this.g), Ve(this.b), _r(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ts,
  // Deprecated! Use color.formatHex.
  formatHex: ts,
  formatHex8: Ag,
  formatRgb: rs,
  toString: rs
}));
function ts() {
  return `#${Ye(this.r)}${Ye(this.g)}${Ye(this.b)}`;
}
function Ag() {
  return `#${Ye(this.r)}${Ye(this.g)}${Ye(this.b)}${Ye((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rs() {
  const e = _r(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ve(this.r)}, ${Ve(this.g)}, ${Ve(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function _r(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ve(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ye(e) {
  return e = Ve(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ns(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new $e(e, t, r, n);
}
function df(e) {
  if (e instanceof $e) return new $e(e.h, e.s, e.l, e.opacity);
  if (e instanceof er || (e = ma(e)), !e) return new $e();
  if (e instanceof $e) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), s = NaN, o = i - a, f = (i + a) / 2;
  return o ? (t === i ? s = (r - n) / o + (r < n) * 6 : r === i ? s = (n - t) / o + 2 : s = (t - r) / o + 4, o /= f < 0.5 ? i + a : 2 - i - a, s *= 60) : o = f > 0 && f < 1 ? 0 : s, new $e(s, o, f, e.opacity);
}
function Pg(e, t, r, n) {
  return arguments.length === 1 ? df(e) : new $e(e, t, r, n ?? 1);
}
function $e(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
ga($e, Pg, uf(er, {
  brighter(e) {
    return e = e == null ? vr : Math.pow(vr, e), new $e(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vt : Math.pow(Vt, e), new $e(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new be(
      on(e >= 240 ? e - 240 : e + 120, a, n),
      on(e, a, n),
      on(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new $e(as(this.h), ir(this.s), ir(this.l), _r(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = _r(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${as(this.h)}, ${ir(this.s) * 100}%, ${ir(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function as(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ir(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function on(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
function Rg(e, t, r, n, a) {
  var i = e * e, s = i * e;
  return ((1 - 3 * e + 3 * i - s) * t + (4 - 6 * i + 3 * s) * r + (1 + 3 * e + 3 * i - 3 * s) * n + s * a) / 6;
}
function Eg(e) {
  var t = e.length - 1;
  return function(r) {
    var n = r <= 0 ? r = 0 : r >= 1 ? (r = 1, t - 1) : Math.floor(r * t), a = e[n], i = e[n + 1], s = n > 0 ? e[n - 1] : 2 * a - i, o = n < t - 1 ? e[n + 2] : 2 * i - a;
    return Rg((r - n / t) * t, s, a, i, o);
  };
}
const va = (e) => () => e;
function lf(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function kg(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function Kx(e, t) {
  var r = t - e;
  return r ? lf(e, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : va(isNaN(e) ? t : e);
}
function Mg(e) {
  return (e = +e) == 1 ? hf : function(t, r) {
    return r - t ? kg(t, r, e) : va(isNaN(t) ? r : t);
  };
}
function hf(e, t) {
  var r = t - e;
  return r ? lf(e, r) : va(isNaN(e) ? t : e);
}
const Qx = function e(t) {
  var r = Mg(t);
  function n(a, i) {
    var s = r((a = yr(a)).r, (i = yr(i)).r), o = r(a.g, i.g), f = r(a.b, i.b), c = hf(a.opacity, i.opacity);
    return function(u) {
      return a.r = s(u), a.g = o(u), a.b = f(u), a.opacity = c(u), a + "";
    };
  }
  return n.gamma = e, n;
}(1);
function jg(e) {
  return function(t) {
    var r = t.length, n = new Array(r), a = new Array(r), i = new Array(r), s, o;
    for (s = 0; s < r; ++s)
      o = yr(t[s]), n[s] = o.r || 0, a[s] = o.g || 0, i[s] = o.b || 0;
    return n = e(n), a = e(a), i = e(i), o.opacity = 1, function(f) {
      return o.r = n(f), o.g = a(f), o.b = i(f), o + "";
    };
  };
}
var Ig = jg(Eg);
function Fg(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
var Cn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, fn = new RegExp(Cn.source, "g");
function Dg(e) {
  return function() {
    return e;
  };
}
function qg(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ug(e, t) {
  var r = Cn.lastIndex = fn.lastIndex = 0, n, a, i, s = -1, o = [], f = [];
  for (e = e + "", t = t + ""; (n = Cn.exec(e)) && (a = fn.exec(t)); )
    (i = a.index) > r && (i = t.slice(r, i), o[s] ? o[s] += i : o[++s] = i), (n = n[0]) === (a = a[0]) ? o[s] ? o[s] += a : o[++s] = a : (o[++s] = null, f.push({ i: s, x: Fg(n, a) })), r = fn.lastIndex;
  return r < t.length && (i = t.slice(r), o[s] ? o[s] += i : o[++s] = i), o.length < 2 ? f[0] ? qg(f[0].x) : Dg(t) : (t = f.length, function(c) {
    for (var u = 0, d; u < t; ++u) o[(d = f[u]).i] = d.x(c);
    return o.join("");
  });
}
var Ng = Je, Lg = Ee, zg = Le, Wg = "[object String]";
function Hg(e) {
  return typeof e == "string" || !Lg(e) && zg(e) && Ng(e) == Wg;
}
var Yg = Hg;
const Vg = /* @__PURE__ */ Oe(Yg);
function Bg(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var Gg = Bg;
const M = /* @__PURE__ */ Oe(Gg);
class is extends Map {
  constructor(t, r = Xg) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(ss(this, t));
  }
  has(t) {
    return super.has(ss(this, t));
  }
  set(t, r) {
    return super.set(Kg(this, t), r);
  }
  delete(t) {
    return super.delete(Qg(this, t));
  }
}
function ss({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function Kg({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function Qg({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function Xg(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function Zg(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
const os = Symbol("implicit");
function bf() {
  var e = new is(), t = [], r = [], n = os;
  function a(i) {
    let s = e.get(i);
    if (s === void 0) {
      if (n !== os) return n;
      e.set(i, s = t.push(i) - 1);
    }
    return r[s % r.length];
  }
  return a.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new is();
    for (const s of i)
      e.has(s) || e.set(s, t.push(s) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return bf(t, r).unknown(n);
  }, Zg.apply(a, arguments), a;
}
function ae(e) {
  for (var t = e.length / 6 | 0, r = new Array(t), n = 0; n < t; ) r[n] = "#" + e.slice(n * 6, ++n * 6);
  return r;
}
const Jg = ae("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), ie = (e) => Ig(e[e.length - 1]);
var ya = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(ae);
const Xx = ie(ya);
var _a = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(ae);
const Zx = ie(_a);
var xa = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(ae);
const Jx = ie(xa);
var wa = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(ae);
const e3 = ie(wa);
var $a = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(ae);
const t3 = ie($a);
var Ta = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(ae);
const r3 = ie(Ta);
var Sa = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(ae);
const n3 = ie(Sa);
var Oa = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(ae);
const a3 = ie(Oa);
var Ca = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(ae);
const i3 = ie(Ca);
var Aa = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(ae);
const s3 = ie(Aa);
var Pa = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(ae);
const o3 = ie(Pa);
var Ra = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(ae);
const f3 = ie(Ra);
var Ea = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(ae);
const c3 = ie(Ea);
var ka = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(ae);
const u3 = ie(ka);
var Ma = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(ae);
const d3 = ie(Ma);
var ja = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(ae);
const l3 = ie(ja);
var Ia = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(ae);
const h3 = ie(Ia);
var Fa = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(ae);
const b3 = ie(Fa);
var Da = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(ae);
const p3 = ie(Da);
var qa = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(ae);
const g3 = ie(qa);
var Ua = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(ae);
const m3 = ie(Ua);
var Na = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(ae);
const v3 = ie(Na);
var La = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(ae);
const y3 = ie(La);
var za = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(ae);
const _3 = ie(za);
var Wa = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(ae);
const x3 = ie(Wa);
var Ha = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(ae);
const w3 = ie(Ha);
var Ya = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(ae);
const $3 = ie(Ya);
var em = "__lodash_hash_undefined__";
function tm(e) {
  return this.__data__.set(e, em), this;
}
var rm = tm;
function nm(e) {
  return this.__data__.has(e);
}
var am = nm, im = oa, sm = rm, om = am;
function xr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new im(); ++t < r; )
    this.add(e[t]);
}
xr.prototype.add = xr.prototype.push = sm;
xr.prototype.has = om;
var pf = xr;
function fm(e, t, r, n) {
  for (var a = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (t(e[i], i, e))
      return i;
  return -1;
}
var cm = fm;
function um(e) {
  return e !== e;
}
var dm = um;
function lm(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; )
    if (e[n] === t)
      return n;
  return -1;
}
var hm = lm, bm = cm, pm = dm, gm = hm;
function mm(e, t, r) {
  return t === t ? gm(e, t, r) : bm(e, pm, r);
}
var vm = mm, ym = vm;
function _m(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && ym(e, t, 0) > -1;
}
var xm = _m;
function wm(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var $m = wm;
function Tm(e, t) {
  return e.has(t);
}
var gf = Tm, Sm = pf, Om = xm, Cm = $m, Am = sf, Pm = Go, Rm = gf, Em = 200;
function km(e, t, r, n) {
  var a = -1, i = Om, s = !0, o = e.length, f = [], c = t.length;
  if (!o)
    return f;
  r && (t = Am(t, Pm(r))), n ? (i = Cm, s = !1) : t.length >= Em && (i = Rm, s = !1, t = new Sm(t));
  e:
    for (; ++a < o; ) {
      var u = e[a], d = r == null ? u : r(u);
      if (u = n || u !== 0 ? u : 0, s && d === d) {
        for (var l = c; l--; )
          if (t[l] === d)
            continue e;
        f.push(u);
      } else i(t, d, n) || f.push(u);
    }
  return f;
}
var Mm = km, jm = Mm, Im = nf, Fm = Yo, Dm = Im(function(e, t) {
  return Fm(e) ? jm(e, t) : [];
}), qm = Dm;
const mf = /* @__PURE__ */ Oe(qm);
function Ue() {
}
function vf(e) {
  this._context = e;
}
vf.prototype = {
  areaStart: Ue,
  areaEnd: Ue,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Ys(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Um(e) {
  return new vf(e);
}
function yf(e) {
  this._context = e;
}
yf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        Ys(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Nm(e) {
  return new yf(e);
}
function _f(e, t) {
  this._basis = new Vs(e), this._beta = t;
}
_f.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var n = e[0], a = t[0], i = e[r] - n, s = t[r] - a, o = -1, f; ++o <= r; )
        f = o / r, this._basis.point(
          this._beta * e[o] + (1 - this._beta) * (n + f * i),
          this._beta * t[o] + (1 - this._beta) * (a + f * s)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const Lm = function e(t) {
  function r(n) {
    return t === 1 ? new Vs(n) : new _f(n, t);
  }
  return r.beta = function(n) {
    return e(+n);
  }, r;
}(0.85);
function Va(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Va.prototype = {
  areaStart: Ue,
  areaEnd: Ue,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        Bs(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const zm = function e(t) {
  function r(n) {
    return new Va(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function Ba(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Ba.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Bs(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Wm = function e(t) {
  function r(n) {
    return new Ba(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function xf(e, t) {
  this._context = e, this._alpha = t;
}
xf.prototype = {
  areaStart: Ue,
  areaEnd: Ue,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, n = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + n * n, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        Gs(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Hm = function e(t) {
  function r(n) {
    return t ? new xf(n, t) : new Va(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function wf(e, t) {
  this._context = e, this._alpha = t;
}
wf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, n = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + n * n, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Gs(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Ym = function e(t) {
  function r(n) {
    return t ? new wf(n, t) : new Ba(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function $f(e) {
  this._context = e;
}
$f.prototype = {
  areaStart: Ue,
  areaEnd: Ue,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function Vm(e) {
  return new $f(e);
}
function Bm(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function wr(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Gm(e) {
  return e = wr(Math.abs(e)), e ? e[1] : NaN;
}
function Km(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], s = 0, o = e[0], f = 0; a > 0 && o > 0 && (f + o + 1 > n && (o = Math.max(1, n - f)), i.push(r.substring(a -= o, a + o)), !((f += o + 1) > n)); )
      o = e[s = (s + 1) % e.length];
    return i.reverse().join(t);
  };
}
function Qm(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var Xm = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function An(e) {
  if (!(t = Xm.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Ga({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
An.prototype = Ga.prototype;
function Ga(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Ga.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Zm(e) {
  e: for (var t = e.length, r = 1, n = -1, a; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = a = r;
        break;
      case "0":
        n === 0 && (n = r), a = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(a + 1) : e;
}
var Tf;
function Jm(e, t) {
  var r = wr(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1], i = a - (Tf = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, s = n.length;
  return i === s ? n : i > s ? n + new Array(i - s + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + wr(e, Math.max(0, t + i - 1))[0];
}
function fs(e, t) {
  var r = wr(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const cs = {
  "%": function(e, t) {
    return (e * 100).toFixed(t);
  },
  b: function(e) {
    return Math.round(e).toString(2);
  },
  c: function(e) {
    return e + "";
  },
  d: Bm,
  e: function(e, t) {
    return e.toExponential(t);
  },
  f: function(e, t) {
    return e.toFixed(t);
  },
  g: function(e, t) {
    return e.toPrecision(t);
  },
  o: function(e) {
    return Math.round(e).toString(8);
  },
  p: function(e, t) {
    return fs(e * 100, t);
  },
  r: fs,
  s: Jm,
  X: function(e) {
    return Math.round(e).toString(16).toUpperCase();
  },
  x: function(e) {
    return Math.round(e).toString(16);
  }
};
function us(e) {
  return e;
}
var ds = Array.prototype.map, ls = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ev(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? us : Km(ds.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal + "", i = e.numerals === void 0 ? us : Qm(ds.call(e.numerals, String)), s = e.percent === void 0 ? "%" : e.percent + "", o = e.minus + "", f = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(d) {
    d = An(d);
    var l = d.fill, v = d.align, g = d.sign, m = d.symbol, p = d.zero, w = d.width, S = d.comma, T = d.precision, A = d.trim, y = d.type;
    y === "n" ? (S = !0, y = "g") : cs[y] || (T === void 0 && (T = 12), A = !0, y = "g"), (p || l === "0" && v === "=") && (p = !0, l = "0", v = "=");
    var Y = m === "$" ? r : m === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "", X = m === "$" ? n : /[%p]/.test(y) ? s : "", K = cs[y], te = /[defgprs%]/.test(y);
    T = T === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, T)) : Math.max(0, Math.min(20, T));
    function Q(E) {
      var se = Y, V = X, C, k, j;
      if (y === "c")
        V = K(E) + V, E = "";
      else {
        E = +E;
        var q = E < 0 || 1 / E < 0;
        if (E = isNaN(E) ? f : K(Math.abs(E), T), A && (E = Zm(E)), q && +E == 0 && g !== "+" && (q = !1), se = (q ? g === "(" ? g : o : g === "-" || g === "(" ? "" : g) + se, V = (y === "s" ? ls[8 + Tf / 3] : "") + V + (q && g === "(" ? ")" : ""), te) {
          for (C = -1, k = E.length; ++C < k; )
            if (j = E.charCodeAt(C), 48 > j || j > 57) {
              V = (j === 46 ? a + E.slice(C + 1) : E.slice(C)) + V, E = E.slice(0, C);
              break;
            }
        }
      }
      S && !p && (E = t(E, 1 / 0));
      var J = se.length + E.length + V.length, I = J < w ? new Array(w - J + 1).join(l) : "";
      switch (S && p && (E = t(I + E, I.length ? w - V.length : 1 / 0), I = ""), v) {
        case "<":
          E = se + E + V + I;
          break;
        case "=":
          E = se + I + E + V;
          break;
        case "^":
          E = I.slice(0, J = I.length >> 1) + se + E + V + I.slice(J);
          break;
        default:
          E = I + se + E + V;
          break;
      }
      return i(E);
    }
    return Q.toString = function() {
      return d + "";
    }, Q;
  }
  function u(d, l) {
    var v = c((d = An(d), d.type = "f", d)), g = Math.max(-8, Math.min(8, Math.floor(Gm(l) / 3))) * 3, m = Math.pow(10, -g), p = ls[8 + g / 3];
    return function(w) {
      return v(m * w) + p;
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var sr, Sf;
tv({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});
function tv(e) {
  return sr = ev(e), Sf = sr.format, sr.formatPrefix, sr;
}
var cn = /* @__PURE__ */ new Date(), un = /* @__PURE__ */ new Date();
function Me(e, t, r, n) {
  function a(i) {
    return e(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  return a.floor = function(i) {
    return e(i = /* @__PURE__ */ new Date(+i)), i;
  }, a.ceil = function(i) {
    return e(i = new Date(i - 1)), t(i, 1), e(i), i;
  }, a.round = function(i) {
    var s = a(i), o = a.ceil(i);
    return i - s < o - i ? s : o;
  }, a.offset = function(i, s) {
    return t(i = /* @__PURE__ */ new Date(+i), s == null ? 1 : Math.floor(s)), i;
  }, a.range = function(i, s, o) {
    var f = [], c;
    if (i = a.ceil(i), o = o == null ? 1 : Math.floor(o), !(i < s) || !(o > 0)) return f;
    do
      f.push(c = /* @__PURE__ */ new Date(+i)), t(i, o), e(i);
    while (c < i && i < s);
    return f;
  }, a.filter = function(i) {
    return Me(function(s) {
      if (s >= s) for (; e(s), !i(s); ) s.setTime(s - 1);
    }, function(s, o) {
      if (s >= s)
        if (o < 0) for (; ++o <= 0; )
          for (; t(s, -1), !i(s); )
            ;
        else for (; --o >= 0; )
          for (; t(s, 1), !i(s); )
            ;
    });
  }, r && (a.count = function(i, s) {
    return cn.setTime(+i), un.setTime(+s), e(cn), e(un), Math.floor(r(cn, un));
  }, a.every = function(i) {
    return i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? function(s) {
      return n(s) % i === 0;
    } : function(s) {
      return a.count(0, s) % i === 0;
    }) : a;
  }), a;
}
const rv = 1e3, Ka = rv * 60, nv = Ka * 60, Qa = nv * 24, Of = Qa * 7;
var Xa = Me(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ka) / Qa,
  (e) => e.getDate() - 1
);
Xa.range;
function tt(e) {
  return Me(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setDate(t.getDate() + r * 7);
  }, function(t, r) {
    return (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ka) / Of;
  });
}
var Cf = tt(0), $r = tt(1), av = tt(2), iv = tt(3), dt = tt(4), sv = tt(5), ov = tt(6);
Cf.range;
$r.range;
av.range;
iv.range;
dt.range;
sv.range;
ov.range;
var Ge = Me(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Ge.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Me(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setFullYear(t.getFullYear() + r * e);
  });
};
Ge.range;
var Za = Me(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Qa;
}, function(e) {
  return e.getUTCDate() - 1;
});
Za.range;
function rt(e) {
  return Me(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, function(t, r) {
    return (r - t) / Of;
  });
}
var Af = rt(0), Tr = rt(1), fv = rt(2), cv = rt(3), lt = rt(4), uv = rt(5), dv = rt(6);
Af.range;
Tr.range;
fv.range;
cv.range;
lt.range;
uv.range;
dv.range;
var Ke = Me(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
Ke.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Me(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCFullYear(t.getUTCFullYear() + r * e);
  });
};
Ke.range;
function dn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ln(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function $t(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function lv(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, s = e.shortDays, o = e.months, f = e.shortMonths, c = Tt(a), u = St(a), d = Tt(i), l = St(i), v = Tt(s), g = St(s), m = Tt(o), p = St(o), w = Tt(f), S = St(f), T = {
    a: q,
    A: J,
    b: I,
    B: x,
    c: null,
    d: vs,
    e: vs,
    f: Iv,
    g: Yv,
    G: Bv,
    H: kv,
    I: Mv,
    j: jv,
    L: Pf,
    m: Fv,
    M: Dv,
    p: R,
    q: N,
    Q: xs,
    s: ws,
    S: qv,
    u: Uv,
    U: Nv,
    V: Lv,
    w: zv,
    W: Wv,
    x: null,
    X: null,
    y: Hv,
    Y: Vv,
    Z: Gv,
    "%": _s
  }, A = {
    a: B,
    A: L,
    b: U,
    B: z,
    c: null,
    d: ys,
    e: ys,
    f: Zv,
    g: fy,
    G: uy,
    H: Kv,
    I: Qv,
    j: Xv,
    L: Ef,
    m: Jv,
    M: ey,
    p: F,
    q: G,
    Q: xs,
    s: ws,
    S: ty,
    u: ry,
    U: ny,
    V: ay,
    w: iy,
    W: sy,
    x: null,
    X: null,
    y: oy,
    Y: cy,
    Z: dy,
    "%": _s
  }, y = {
    a: Q,
    A: E,
    b: se,
    B: V,
    c: C,
    d: gs,
    e: gs,
    f: Av,
    g: ps,
    G: bs,
    H: ms,
    I: ms,
    j: Tv,
    L: Cv,
    m: $v,
    M: Sv,
    p: te,
    q: wv,
    Q: Rv,
    s: Ev,
    S: Ov,
    u: mv,
    U: vv,
    V: yv,
    w: gv,
    W: _v,
    x: k,
    X: j,
    y: ps,
    Y: bs,
    Z: xv,
    "%": Pv
  };
  T.x = Y(r, T), T.X = Y(n, T), T.c = Y(t, T), A.x = Y(r, A), A.X = Y(n, A), A.c = Y(t, A);
  function Y(_, O) {
    return function(D) {
      var h = [], oe = -1, ee = 0, ue = _.length, me, ze, ei;
      for (D instanceof Date || (D = /* @__PURE__ */ new Date(+D)); ++oe < ue; )
        _.charCodeAt(oe) === 37 && (h.push(_.slice(ee, oe)), (ze = hs[me = _.charAt(++oe)]) != null ? me = _.charAt(++oe) : ze = me === "e" ? " " : "0", (ei = O[me]) && (me = ei(D, ze)), h.push(me), ee = oe + 1);
      return h.push(_.slice(ee, oe)), h.join("");
    };
  }
  function X(_, O) {
    return function(D) {
      var h = $t(1900, void 0, 1), oe = K(h, _, D += "", 0), ee, ue;
      if (oe != D.length) return null;
      if ("Q" in h) return new Date(h.Q);
      if ("s" in h) return new Date(h.s * 1e3 + ("L" in h ? h.L : 0));
      if (O && !("Z" in h) && (h.Z = 0), "p" in h && (h.H = h.H % 12 + h.p * 12), h.m === void 0 && (h.m = "q" in h ? h.q : 0), "V" in h) {
        if (h.V < 1 || h.V > 53) return null;
        "w" in h || (h.w = 1), "Z" in h ? (ee = ln($t(h.y, 0, 1)), ue = ee.getUTCDay(), ee = ue > 4 || ue === 0 ? Tr.ceil(ee) : Tr(ee), ee = Za.offset(ee, (h.V - 1) * 7), h.y = ee.getUTCFullYear(), h.m = ee.getUTCMonth(), h.d = ee.getUTCDate() + (h.w + 6) % 7) : (ee = dn($t(h.y, 0, 1)), ue = ee.getDay(), ee = ue > 4 || ue === 0 ? $r.ceil(ee) : $r(ee), ee = Xa.offset(ee, (h.V - 1) * 7), h.y = ee.getFullYear(), h.m = ee.getMonth(), h.d = ee.getDate() + (h.w + 6) % 7);
      } else ("W" in h || "U" in h) && ("w" in h || (h.w = "u" in h ? h.u % 7 : "W" in h ? 1 : 0), ue = "Z" in h ? ln($t(h.y, 0, 1)).getUTCDay() : dn($t(h.y, 0, 1)).getDay(), h.m = 0, h.d = "W" in h ? (h.w + 6) % 7 + h.W * 7 - (ue + 5) % 7 : h.w + h.U * 7 - (ue + 6) % 7);
      return "Z" in h ? (h.H += h.Z / 100 | 0, h.M += h.Z % 100, ln(h)) : dn(h);
    };
  }
  function K(_, O, D, h) {
    for (var oe = 0, ee = O.length, ue = D.length, me, ze; oe < ee; ) {
      if (h >= ue) return -1;
      if (me = O.charCodeAt(oe++), me === 37) {
        if (me = O.charAt(oe++), ze = y[me in hs ? O.charAt(oe++) : me], !ze || (h = ze(_, D, h)) < 0) return -1;
      } else if (me != D.charCodeAt(h++))
        return -1;
    }
    return h;
  }
  function te(_, O, D) {
    var h = c.exec(O.slice(D));
    return h ? (_.p = u.get(h[0].toLowerCase()), D + h[0].length) : -1;
  }
  function Q(_, O, D) {
    var h = v.exec(O.slice(D));
    return h ? (_.w = g.get(h[0].toLowerCase()), D + h[0].length) : -1;
  }
  function E(_, O, D) {
    var h = d.exec(O.slice(D));
    return h ? (_.w = l.get(h[0].toLowerCase()), D + h[0].length) : -1;
  }
  function se(_, O, D) {
    var h = w.exec(O.slice(D));
    return h ? (_.m = S.get(h[0].toLowerCase()), D + h[0].length) : -1;
  }
  function V(_, O, D) {
    var h = m.exec(O.slice(D));
    return h ? (_.m = p.get(h[0].toLowerCase()), D + h[0].length) : -1;
  }
  function C(_, O, D) {
    return K(_, t, O, D);
  }
  function k(_, O, D) {
    return K(_, r, O, D);
  }
  function j(_, O, D) {
    return K(_, n, O, D);
  }
  function q(_) {
    return s[_.getDay()];
  }
  function J(_) {
    return i[_.getDay()];
  }
  function I(_) {
    return f[_.getMonth()];
  }
  function x(_) {
    return o[_.getMonth()];
  }
  function R(_) {
    return a[+(_.getHours() >= 12)];
  }
  function N(_) {
    return 1 + ~~(_.getMonth() / 3);
  }
  function B(_) {
    return s[_.getUTCDay()];
  }
  function L(_) {
    return i[_.getUTCDay()];
  }
  function U(_) {
    return f[_.getUTCMonth()];
  }
  function z(_) {
    return o[_.getUTCMonth()];
  }
  function F(_) {
    return a[+(_.getUTCHours() >= 12)];
  }
  function G(_) {
    return 1 + ~~(_.getUTCMonth() / 3);
  }
  return {
    format: function(_) {
      var O = Y(_ += "", T);
      return O.toString = function() {
        return _;
      }, O;
    },
    parse: function(_) {
      var O = X(_ += "", !1);
      return O.toString = function() {
        return _;
      }, O;
    },
    utcFormat: function(_) {
      var O = Y(_ += "", A);
      return O.toString = function() {
        return _;
      }, O;
    },
    utcParse: function(_) {
      var O = X(_ += "", !0);
      return O.toString = function() {
        return _;
      }, O;
    }
  };
}
var hs = { "-": "", _: " ", 0: "0" }, ce = /^\s*\d+/, hv = /^%/, bv = /[\\^$*+?|[\]().{}]/g;
function Z(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function pv(e) {
  return e.replace(bv, "\\$&");
}
function Tt(e) {
  return new RegExp("^(?:" + e.map(pv).join("|") + ")", "i");
}
function St(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function gv(e, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function mv(e, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function vv(e, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function yv(e, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function _v(e, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function bs(e, t, r) {
  var n = ce.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function ps(e, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function xv(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function wv(e, t, r) {
  var n = ce.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function $v(e, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function gs(e, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function Tv(e, t, r) {
  var n = ce.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function ms(e, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function Sv(e, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function Ov(e, t, r) {
  var n = ce.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function Cv(e, t, r) {
  var n = ce.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function Av(e, t, r) {
  var n = ce.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function Pv(e, t, r) {
  var n = hv.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function Rv(e, t, r) {
  var n = ce.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function Ev(e, t, r) {
  var n = ce.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function vs(e, t) {
  return Z(e.getDate(), t, 2);
}
function kv(e, t) {
  return Z(e.getHours(), t, 2);
}
function Mv(e, t) {
  return Z(e.getHours() % 12 || 12, t, 2);
}
function jv(e, t) {
  return Z(1 + Xa.count(Ge(e), e), t, 3);
}
function Pf(e, t) {
  return Z(e.getMilliseconds(), t, 3);
}
function Iv(e, t) {
  return Pf(e, t) + "000";
}
function Fv(e, t) {
  return Z(e.getMonth() + 1, t, 2);
}
function Dv(e, t) {
  return Z(e.getMinutes(), t, 2);
}
function qv(e, t) {
  return Z(e.getSeconds(), t, 2);
}
function Uv(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Nv(e, t) {
  return Z(Cf.count(Ge(e) - 1, e), t, 2);
}
function Rf(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? dt(e) : dt.ceil(e);
}
function Lv(e, t) {
  return e = Rf(e), Z(dt.count(Ge(e), e) + (Ge(e).getDay() === 4), t, 2);
}
function zv(e) {
  return e.getDay();
}
function Wv(e, t) {
  return Z($r.count(Ge(e) - 1, e), t, 2);
}
function Hv(e, t) {
  return Z(e.getFullYear() % 100, t, 2);
}
function Yv(e, t) {
  return e = Rf(e), Z(e.getFullYear() % 100, t, 2);
}
function Vv(e, t) {
  return Z(e.getFullYear() % 1e4, t, 4);
}
function Bv(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? dt(e) : dt.ceil(e), Z(e.getFullYear() % 1e4, t, 4);
}
function Gv(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Z(t / 60 | 0, "0", 2) + Z(t % 60, "0", 2);
}
function ys(e, t) {
  return Z(e.getUTCDate(), t, 2);
}
function Kv(e, t) {
  return Z(e.getUTCHours(), t, 2);
}
function Qv(e, t) {
  return Z(e.getUTCHours() % 12 || 12, t, 2);
}
function Xv(e, t) {
  return Z(1 + Za.count(Ke(e), e), t, 3);
}
function Ef(e, t) {
  return Z(e.getUTCMilliseconds(), t, 3);
}
function Zv(e, t) {
  return Ef(e, t) + "000";
}
function Jv(e, t) {
  return Z(e.getUTCMonth() + 1, t, 2);
}
function ey(e, t) {
  return Z(e.getUTCMinutes(), t, 2);
}
function ty(e, t) {
  return Z(e.getUTCSeconds(), t, 2);
}
function ry(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function ny(e, t) {
  return Z(Af.count(Ke(e) - 1, e), t, 2);
}
function kf(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? lt(e) : lt.ceil(e);
}
function ay(e, t) {
  return e = kf(e), Z(lt.count(Ke(e), e) + (Ke(e).getUTCDay() === 4), t, 2);
}
function iy(e) {
  return e.getUTCDay();
}
function sy(e, t) {
  return Z(Tr.count(Ke(e) - 1, e), t, 2);
}
function oy(e, t) {
  return Z(e.getUTCFullYear() % 100, t, 2);
}
function fy(e, t) {
  return e = kf(e), Z(e.getUTCFullYear() % 100, t, 2);
}
function cy(e, t) {
  return Z(e.getUTCFullYear() % 1e4, t, 4);
}
function uy(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? lt(e) : lt.ceil(e), Z(e.getUTCFullYear() % 1e4, t, 4);
}
function dy() {
  return "+0000";
}
function _s() {
  return "%";
}
function xs(e) {
  return +e;
}
function ws(e) {
  return Math.floor(+e / 1e3);
}
var it, Mf, ly, hy;
by({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function by(e) {
  return it = lv(e), Mf = it.format, ly = it.parse, it.utcFormat, hy = it.utcParse, it;
}
var py = ff, gy = cf, my = Hr;
function vy(e, t, r) {
  for (var n = -1, a = t.length, i = {}; ++n < a; ) {
    var s = t[n], o = py(e, s);
    r(o, s) && gy(i, my(s, e), o);
  }
  return i;
}
var yy = vy;
function _y(e, t) {
  return e != null && t in Object(e);
}
var xy = _y, wy = Hr, $y = Lr, Ty = Ee, Sy = Wr, Oy = ua, Cy = pa;
function Ay(e, t, r) {
  t = wy(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var s = Cy(t[n]);
    if (!(i = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && Oy(a) && Sy(s, a) && (Ty(e) || $y(e)));
}
var Py = Ay, Ry = xy, Ey = Py;
function ky(e, t) {
  return e != null && Ey(e, t, Ry);
}
var My = ky, jy = yy, Iy = My;
function Fy(e, t) {
  return jy(e, t, function(r, n) {
    return Iy(e, n);
  });
}
var Dy = Fy;
function qy(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var jf = qy, $s = Jt, Uy = Lr, Ny = Ee, Ts = $s ? $s.isConcatSpreadable : void 0;
function Ly(e) {
  return Ny(e) || Uy(e) || !!(Ts && e && e[Ts]);
}
var zy = Ly, Wy = jf, Hy = zy;
function If(e, t, r, n, a) {
  var i = -1, s = e.length;
  for (r || (r = Hy), a || (a = []); ++i < s; ) {
    var o = e[i];
    t > 0 && r(o) ? t > 1 ? If(o, t - 1, r, n, a) : Wy(a, o) : n || (a[a.length] = o);
  }
  return a;
}
var Yy = If, Vy = Yy;
function By(e) {
  var t = e == null ? 0 : e.length;
  return t ? Vy(e, 1) : [];
}
var Gy = By, Ky = Gy, Qy = tf, Xy = rf;
function Zy(e) {
  return Xy(Qy(e, void 0, Ky), e + "");
}
var Jy = Zy, e_ = Dy, t_ = Jy, r_ = t_(function(e, t) {
  return e == null ? {} : e_(e, t);
}), n_ = r_;
const a_ = /* @__PURE__ */ Oe(n_);
function i_(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var s_ = i_, o_ = pf, f_ = s_, c_ = gf, u_ = 1, d_ = 2;
function l_(e, t, r, n, a, i) {
  var s = r & u_, o = e.length, f = t.length;
  if (o != f && !(s && f > o))
    return !1;
  var c = i.get(e), u = i.get(t);
  if (c && u)
    return c == t && u == e;
  var d = -1, l = !0, v = r & d_ ? new o_() : void 0;
  for (i.set(e, t), i.set(t, e); ++d < o; ) {
    var g = e[d], m = t[d];
    if (n)
      var p = s ? n(m, g, d, t, e, i) : n(g, m, d, e, t, i);
    if (p !== void 0) {
      if (p)
        continue;
      l = !1;
      break;
    }
    if (v) {
      if (!f_(t, function(w, S) {
        if (!c_(v, S) && (g === w || a(g, w, r, n, i)))
          return v.push(S);
      })) {
        l = !1;
        break;
      }
    } else if (!(g === m || a(g, m, r, n, i))) {
      l = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), l;
}
var Ff = l_;
function h_(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var b_ = h_;
function p_(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var g_ = p_, Ss = Jt, Os = Lo, m_ = Zt, v_ = Ff, y_ = b_, __ = g_, x_ = 1, w_ = 2, $_ = "[object Boolean]", T_ = "[object Date]", S_ = "[object Error]", O_ = "[object Map]", C_ = "[object Number]", A_ = "[object RegExp]", P_ = "[object Set]", R_ = "[object String]", E_ = "[object Symbol]", k_ = "[object ArrayBuffer]", M_ = "[object DataView]", Cs = Ss ? Ss.prototype : void 0, hn = Cs ? Cs.valueOf : void 0;
function j_(e, t, r, n, a, i, s) {
  switch (r) {
    case M_:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case k_:
      return !(e.byteLength != t.byteLength || !i(new Os(e), new Os(t)));
    case $_:
    case T_:
    case C_:
      return m_(+e, +t);
    case S_:
      return e.name == t.name && e.message == t.message;
    case A_:
    case R_:
      return e == t + "";
    case O_:
      var o = y_;
    case P_:
      var f = n & x_;
      if (o || (o = __), e.size != t.size && !f)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      n |= w_, s.set(e, t);
      var u = v_(o(e), o(t), n, a, i, s);
      return s.delete(e), u;
    case E_:
      if (hn)
        return hn.call(e) == hn.call(t);
  }
  return !1;
}
var I_ = j_, F_ = jf, D_ = Ee;
function q_(e, t, r) {
  var n = t(e);
  return D_(e) ? n : F_(n, r(e));
}
var U_ = q_;
function N_(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (i[a++] = s);
  }
  return i;
}
var L_ = N_;
function z_() {
  return [];
}
var W_ = z_, H_ = L_, Y_ = W_, V_ = Object.prototype, B_ = V_.propertyIsEnumerable, As = Object.getOwnPropertySymbols, G_ = As ? function(e) {
  return e == null ? [] : (e = Object(e), H_(As(e), function(t) {
    return B_.call(e, t);
  }));
} : Y_, K_ = G_, Q_ = zo, X_ = Q_(Object.keys, Object), Z_ = X_, J_ = ca, e2 = Z_, t2 = Object.prototype, r2 = t2.hasOwnProperty;
function n2(e) {
  if (!J_(e))
    return e2(e);
  var t = [];
  for (var r in Object(e))
    r2.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var a2 = n2, i2 = Xo, s2 = a2, o2 = zr;
function f2(e) {
  return o2(e) ? i2(e) : s2(e);
}
var c2 = f2, u2 = U_, d2 = K_, l2 = c2;
function h2(e) {
  return u2(e, l2, d2);
}
var b2 = h2, Ps = b2, p2 = 1, g2 = Object.prototype, m2 = g2.hasOwnProperty;
function v2(e, t, r, n, a, i) {
  var s = r & p2, o = Ps(e), f = o.length, c = Ps(t), u = c.length;
  if (f != u && !s)
    return !1;
  for (var d = f; d--; ) {
    var l = o[d];
    if (!(s ? l in t : m2.call(t, l)))
      return !1;
  }
  var v = i.get(e), g = i.get(t);
  if (v && g)
    return v == t && g == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var p = s; ++d < f; ) {
    l = o[d];
    var w = e[l], S = t[l];
    if (n)
      var T = s ? n(S, w, l, t, e, i) : n(w, S, l, e, t, i);
    if (!(T === void 0 ? w === S || a(w, S, r, n, i) : T)) {
      m = !1;
      break;
    }
    p || (p = l == "constructor");
  }
  if (m && !p) {
    var A = e.constructor, y = t.constructor;
    A != y && "constructor" in e && "constructor" in t && !(typeof A == "function" && A instanceof A && typeof y == "function" && y instanceof y) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var y2 = v2, _2 = et, x2 = Re, w2 = _2(x2, "DataView"), $2 = w2, T2 = et, S2 = Re, O2 = T2(S2, "Promise"), C2 = O2, A2 = et, P2 = Re, R2 = A2(P2, "Set"), E2 = R2, k2 = et, M2 = Re, j2 = k2(M2, "WeakMap"), I2 = j2, Pn = $2, Rn = sa, En = C2, kn = E2, Mn = I2, Df = Je, vt = Do, Rs = "[object Map]", F2 = "[object Object]", Es = "[object Promise]", ks = "[object Set]", Ms = "[object WeakMap]", js = "[object DataView]", D2 = vt(Pn), q2 = vt(Rn), U2 = vt(En), N2 = vt(kn), L2 = vt(Mn), We = Df;
(Pn && We(new Pn(new ArrayBuffer(1))) != js || Rn && We(new Rn()) != Rs || En && We(En.resolve()) != Es || kn && We(new kn()) != ks || Mn && We(new Mn()) != Ms) && (We = function(e) {
  var t = Df(e), r = t == F2 ? e.constructor : void 0, n = r ? vt(r) : "";
  if (n)
    switch (n) {
      case D2:
        return js;
      case q2:
        return Rs;
      case U2:
        return Es;
      case N2:
        return ks;
      case L2:
        return Ms;
    }
  return t;
});
var z2 = We, bn = qo, W2 = Ff, H2 = I_, Y2 = y2, Is = z2, Fs = Ee, Ds = da, V2 = la, B2 = 1, qs = "[object Arguments]", Us = "[object Array]", or = "[object Object]", G2 = Object.prototype, Ns = G2.hasOwnProperty;
function K2(e, t, r, n, a, i) {
  var s = Fs(e), o = Fs(t), f = s ? Us : Is(e), c = o ? Us : Is(t);
  f = f == qs ? or : f, c = c == qs ? or : c;
  var u = f == or, d = c == or, l = f == c;
  if (l && Ds(e)) {
    if (!Ds(t))
      return !1;
    s = !0, u = !1;
  }
  if (l && !u)
    return i || (i = new bn()), s || V2(e) ? W2(e, t, r, n, a, i) : H2(e, t, f, r, n, a, i);
  if (!(r & B2)) {
    var v = u && Ns.call(e, "__wrapped__"), g = d && Ns.call(t, "__wrapped__");
    if (v || g) {
      var m = v ? e.value() : e, p = g ? t.value() : t;
      return i || (i = new bn()), a(m, p, r, n, i);
    }
  }
  return l ? (i || (i = new bn()), Y2(e, t, r, n, a, i)) : !1;
}
var Q2 = K2, X2 = Q2, Ls = Le;
function qf(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Ls(e) && !Ls(t) ? e !== e && t !== t : X2(e, t, r, n, qf, a);
}
var Z2 = qf, J2 = Z2;
function ex(e, t) {
  return J2(e, t);
}
var tx = ex;
const rx = /* @__PURE__ */ Oe(tx);
var nx = { background: "transparent", text: { fontFamily: "sans-serif", fontSize: 11, fill: "#333333", outlineWidth: 0, outlineColor: "transparent", outlineOpacity: 1 }, axis: { domain: { line: { stroke: "transparent", strokeWidth: 1 } }, ticks: { line: { stroke: "#777777", strokeWidth: 1 }, text: {} }, legend: { text: { fontSize: 12 } } }, grid: { line: { stroke: "#dddddd", strokeWidth: 1 } }, legends: { hidden: { symbol: { fill: "#333333", opacity: 0.6 }, text: { fill: "#333333", opacity: 0.6 } }, text: {}, ticks: { line: { stroke: "#777777", strokeWidth: 1 }, text: { fontSize: 10 } }, title: { text: {} } }, labels: { text: {} }, markers: { lineColor: "#000000", lineStrokeWidth: 1, text: {} }, dots: { text: {} }, tooltip: { container: { background: "white", color: "inherit", fontSize: "inherit", borderRadius: "2px", boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)", padding: "5px 9px" }, basic: { whiteSpace: "pre", display: "flex", alignItems: "center" }, chip: { marginRight: 7 }, table: {}, tableCell: { padding: "3px 5px" }, tableCellValue: { fontWeight: "bold" } }, crosshair: { line: { stroke: "#000000", strokeWidth: 1, strokeOpacity: 0.75, strokeDasharray: "6 6" } }, annotations: { text: { fontSize: 13, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, link: { stroke: "#000000", strokeWidth: 1, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, outline: { fill: "none", stroke: "#000000", strokeWidth: 2, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, symbol: { fill: "#000000", outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 } } };
function xe() {
  return xe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xe.apply(this, arguments);
}
function jn(e, t) {
  return jn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, jn(e, t);
}
function Yr(e, t) {
  if (e == null) return {};
  var r, n, a = {}, i = Object.keys(e);
  for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
  return a;
}
var ax = ["axis.ticks.text", "axis.legend.text", "legends.title.text", "legends.text", "legends.ticks.text", "legends.title.text", "labels.text", "dots.text", "markers.text", "annotations.text"], ix = function(e, t) {
  return xe({}, t, e);
}, sx = function(e, t) {
  var r = x1({}, e, t);
  return ax.forEach(function(n) {
    Rt(r, n, ix(Yt(r, n), r.text));
  }), r;
}, Uf = Or(), Nf = function(e) {
  var t = e.children, r = e.animate, n = r === void 0 || r, a = e.config, i = a === void 0 ? "default" : a, s = _e(function() {
    var o = Vg(i) ? ta[i] : i;
    return { animate: n, config: o };
  }, [n, i]);
  return P.jsx(Uf.Provider, { value: s, children: t });
}, Sr = { animate: b.bool, motionConfig: b.oneOfType([b.oneOf(Object.keys(ta)), b.shape({ mass: b.number, tension: b.number, friction: b.number, clamp: b.bool, precision: b.number, velocity: b.number, duration: b.number, easing: b.func })]) };
Nf.propTypes = { children: b.node.isRequired, animate: Sr.animate, config: Sr.motionConfig };
var Vr = function() {
  return Ze(Uf);
}, T3 = function(e) {
  var t = Vr(), r = t.animate, n = t.config, a = function(o) {
    var f = pe();
    return Xe(function() {
      f.current = o;
    }, [o]), f.current;
  }(e), i = _e(function() {
    return Ug(a, e);
  }, [a, e]), s = Ir({ from: { value: 0 }, to: { value: 1 }, reset: !0, config: n, immediate: !r }).value;
  return Cu(s, i);
}, ox = { nivo: ["#d76445", "#f47560", "#e8c1a0", "#97e3d5", "#61cdbb", "#00b0a7"], BrBG: M(ya), PRGn: M(_a), PiYG: M(xa), PuOr: M(wa), RdBu: M($a), RdGy: M(Ta), RdYlBu: M(Sa), RdYlGn: M(Oa), spectral: M(Ca), blues: M(Na), greens: M(La), greys: M(za), oranges: M(Ya), purples: M(Wa), reds: M(Ha), BuGn: M(Aa), BuPu: M(Pa), GnBu: M(Ra), OrRd: M(Ea), PuBuGn: M(ka), PuBu: M(Ma), PuRd: M(ja), RdPu: M(Ia), YlGnBu: M(Fa), YlGn: M(Da), YlOrBr: M(qa), YlOrRd: M(Ua) }, fx = Object.keys(ox);
M(ya), M(_a), M(xa), M(wa), M($a), M(Ta), M(Sa), M(Oa), M(Ca), M(Na), M(La), M(za), M(Ya), M(Wa), M(Ha), M(Aa), M(Pa), M(Ra), M(Ea), M(ka), M(Ma), M(ja), M(Ia), M(Fa), M(Da), M(qa), M(Ua);
b.oneOfType([b.oneOf(fx), b.func, b.arrayOf(b.string)]);
var In = { basis: vc, basisClosed: Um, basisOpen: Nm, bundle: Lm, cardinal: mc, cardinalClosed: zm, cardinalOpen: Wm, catmullRom: gc, catmullRomClosed: Hm, catmullRomOpen: Ym, linear: pc, linearClosed: Vm, monotoneX: bc, monotoneY: hc, natural: lc, step: dc, stepAfter: uc, stepBefore: cc }, Ja = Object.keys(In);
Ja.filter(function(e) {
  return e.endsWith("Closed");
});
mf(Ja, "bundle", "basisClosed", "basisOpen", "cardinalClosed", "cardinalOpen", "catmullRomClosed", "catmullRomOpen", "linearClosed");
mf(Ja, "bundle", "basisClosed", "basisOpen", "cardinalClosed", "cardinalOpen", "catmullRomClosed", "catmullRomOpen", "linearClosed");
var S3 = function(e) {
  if (!In[e]) throw new TypeError("'" + e + "', is not a valid curve interpolator identifier.");
  return In[e];
};
b.shape({ top: b.number, right: b.number, bottom: b.number, left: b.number }).isRequired;
var cx = ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
b.oneOf(cx);
bf(Jg);
var ux = { top: 0, right: 0, bottom: 0, left: 0 }, O3 = function(e, t, r) {
  return r === void 0 && (r = {}), _e(function() {
    var n = xe({}, ux, r);
    return { margin: n, innerWidth: e - n.left - n.right, innerHeight: t - n.top - n.bottom, outerWidth: e, outerHeight: t };
  }, [e, t, r.top, r.right, r.bottom, r.left]);
}, Lf = function() {
  var e = pe(null), t = It({ left: 0, top: 0, width: 0, height: 0 }), r = t[0], n = t[1], a = It(function() {
    return typeof ResizeObserver > "u" ? null : new ResizeObserver(function(i) {
      var s = i[0];
      return n(s.contentRect);
    });
  })[0];
  return Xe(function() {
    return e.current && a !== null && a.observe(e.current), function() {
      a !== null && a.disconnect();
    };
  }, []), [e, r];
}, dx = function(e) {
  return _e(function() {
    return sx(nx, e);
  }, [e]);
}, lx = function(e) {
  return typeof e == "function" ? e : typeof e == "string" ? e.indexOf("time:") === 0 ? Mf(e.slice("5")) : Sf(e) : function(t) {
    return "" + t;
  };
}, hx = function(e) {
  return _e(function() {
    return lx(e);
  }, [e]);
}, zf = Or(), bx = {}, Wf = function(e) {
  var t = e.theme, r = t === void 0 ? bx : t, n = e.children, a = dx(r);
  return P.jsx(zf.Provider, { value: a, children: n });
};
Wf.propTypes = { children: b.node.isRequired, theme: b.object };
var nt = function() {
  return Ze(zf);
}, px = ["outlineWidth", "outlineColor", "outlineOpacity"], gx = function(e) {
  return e.outlineWidth, e.outlineColor, e.outlineOpacity, Yr(e, px);
}, Hf = function(e) {
  var t = e.children, r = e.condition, n = e.wrapper;
  return r ? sc(n, {}, t) : t;
};
Hf.propTypes = { children: b.node.isRequired, condition: b.bool.isRequired, wrapper: b.element.isRequired };
var mx = { position: "relative" }, Yf = function(e) {
  var t = e.children, r = e.theme, n = e.renderWrapper, a = n === void 0 || n, i = e.isInteractive, s = i === void 0 || i, o = e.animate, f = e.motionConfig, c = pe(null);
  return P.jsx(Wf, { theme: r, children: P.jsx(Nf, { animate: o, config: f, children: P.jsx(Dx, { container: c, children: P.jsxs(Hf, { condition: a, wrapper: P.jsx("div", { style: mx, ref: c }), children: [t, s && P.jsx(Fx, {})] }) }) }) });
};
Yf.propTypes = { children: b.element.isRequired, isInteractive: b.bool, renderWrapper: b.bool, theme: b.object, animate: b.bool, motionConfig: b.oneOfType([b.string, Sr.motionConfig]) };
b.func.isRequired, b.bool, b.bool, b.object.isRequired, b.bool.isRequired, b.oneOfType([b.string, Sr.motionConfig]);
var vx = function(e) {
  var t = e.children, r = Lf(), n = r[0], a = r[1], i = a.width > 0 && a.height > 0;
  return P.jsx("div", { ref: n, style: { width: "100%", height: "100%" }, children: i && t({ width: a.width, height: a.height }) });
};
vx.propTypes = { children: b.func.isRequired };
var yx = ["id", "colors"], Vf = function(e) {
  var t = e.id, r = e.colors, n = Yr(e, yx);
  return P.jsx("linearGradient", xe({ id: t, x1: 0, x2: 0, y1: 0, y2: 1 }, n, { children: r.map(function(a) {
    var i = a.offset, s = a.color, o = a.opacity;
    return P.jsx("stop", { offset: i + "%", stopColor: s, stopOpacity: o !== void 0 ? o : 1 }, i);
  }) }));
};
Vf.propTypes = { id: b.string.isRequired, colors: b.arrayOf(b.shape({ offset: b.number.isRequired, color: b.string.isRequired, opacity: b.number })).isRequired, gradientTransform: b.string };
var Bf = { linearGradient: Vf }, Ot = { color: "#000000", background: "#ffffff", size: 4, padding: 4, stagger: !1 }, Fn = ge(function(e) {
  var t = e.id, r = e.background, n = r === void 0 ? Ot.background : r, a = e.color, i = a === void 0 ? Ot.color : a, s = e.size, o = s === void 0 ? Ot.size : s, f = e.padding, c = f === void 0 ? Ot.padding : f, u = e.stagger, d = u === void 0 ? Ot.stagger : u, l = o + c, v = o / 2, g = c / 2;
  return d === !0 && (l = 2 * o + 2 * c), P.jsxs("pattern", { id: t, width: l, height: l, patternUnits: "userSpaceOnUse", children: [P.jsx("rect", { width: l, height: l, fill: n }), P.jsx("circle", { cx: g + v, cy: g + v, r: v, fill: i }), d && P.jsx("circle", { cx: 1.5 * c + o + v, cy: 1.5 * c + o + v, r: v, fill: i })] });
});
Fn.displayName = "PatternDots", Fn.propTypes = { id: b.string.isRequired, color: b.string.isRequired, background: b.string.isRequired, size: b.number.isRequired, padding: b.number.isRequired, stagger: b.bool.isRequired };
var zs = function(e) {
  return e * Math.PI / 180;
}, C3 = { svg: { align: { left: "start", center: "middle", right: "end", start: "start", middle: "middle", end: "end" }, baseline: { top: "text-before-edge", center: "central", bottom: "alphabetic" } }, canvas: { align: { left: "left", center: "center", right: "right", start: "left", middle: "center", end: "right" }, baseline: { top: "top", center: "middle", bottom: "bottom" } } }, Ct = { spacing: 5, rotation: 0, background: "#000000", color: "#ffffff", lineWidth: 2 }, Dn = ge(function(e) {
  var t = e.id, r = e.spacing, n = r === void 0 ? Ct.spacing : r, a = e.rotation, i = a === void 0 ? Ct.rotation : a, s = e.background, o = s === void 0 ? Ct.background : s, f = e.color, c = f === void 0 ? Ct.color : f, u = e.lineWidth, d = u === void 0 ? Ct.lineWidth : u, l = Math.round(i) % 360, v = Math.abs(n);
  l > 180 ? l -= 360 : l > 90 ? l -= 180 : l < -180 ? l += 360 : l < -90 && (l += 180);
  var g, m = v, p = v;
  return l === 0 ? g = `
                M 0 0 L ` + m + ` 0
                M 0 ` + p + " L " + m + " " + p + `
            ` : l === 90 ? g = `
                M 0 0 L 0 ` + p + `
                M ` + m + " 0 L " + m + " " + p + `
            ` : (m = Math.abs(v / Math.sin(zs(l))), p = v / Math.sin(zs(90 - l)), g = l > 0 ? `
                    M 0 ` + -p + " L " + 2 * m + " " + p + `
                    M ` + -m + " " + -p + " L " + m + " " + p + `
                    M ` + -m + " 0 L " + m + " " + 2 * p + `
                ` : `
                    M ` + -m + " " + p + " L " + m + " " + -p + `
                    M ` + -m + " " + 2 * p + " L " + 2 * m + " " + -p + `
                    M 0 ` + 2 * p + " L " + 2 * m + ` 0
                `), P.jsxs("pattern", { id: t, width: m, height: p, patternUnits: "userSpaceOnUse", children: [P.jsx("rect", { width: m, height: p, fill: o, stroke: "rgba(255, 0, 0, 0.1)", strokeWidth: 0 }), P.jsx("path", { d: g, strokeWidth: d, stroke: c, strokeLinecap: "square" })] });
});
Dn.displayName = "PatternLines", Dn.propTypes = { id: b.string.isRequired, spacing: b.number.isRequired, rotation: b.number.isRequired, background: b.string.isRequired, color: b.string.isRequired, lineWidth: b.number.isRequired };
var At = { color: "#000000", background: "#ffffff", size: 4, padding: 4, stagger: !1 }, qn = ge(function(e) {
  var t = e.id, r = e.color, n = r === void 0 ? At.color : r, a = e.background, i = a === void 0 ? At.background : a, s = e.size, o = s === void 0 ? At.size : s, f = e.padding, c = f === void 0 ? At.padding : f, u = e.stagger, d = u === void 0 ? At.stagger : u, l = o + c, v = c / 2;
  return d === !0 && (l = 2 * o + 2 * c), P.jsxs("pattern", { id: t, width: l, height: l, patternUnits: "userSpaceOnUse", children: [P.jsx("rect", { width: l, height: l, fill: i }), P.jsx("rect", { x: v, y: v, width: o, height: o, fill: n }), d && P.jsx("rect", { x: 1.5 * c + o, y: 1.5 * c + o, width: o, height: o, fill: n })] });
});
qn.displayName = "PatternSquares", qn.propTypes = { id: b.string.isRequired, color: b.string.isRequired, background: b.string.isRequired, size: b.number.isRequired, padding: b.number.isRequired, stagger: b.bool.isRequired };
var Gf = { patternDots: Fn, patternLines: Dn, patternSquares: qn }, _x = ["type"], Un = xe({}, Bf, Gf), Kf = function(e) {
  var t = e.defs;
  return !t || t.length < 1 ? null : P.jsx("defs", { "aria-hidden": !0, children: t.map(function(r) {
    var n = r.type, a = Yr(r, _x);
    return Un[n] ? Hs(Un[n], xe({ key: a.id }, a)) : null;
  }) });
};
Kf.propTypes = { defs: b.arrayOf(b.shape({ type: b.oneOf(Object.keys(Un)).isRequired, id: b.string.isRequired })) };
var xx = ge(Kf), wx = function(e) {
  var t = e.width, r = e.height, n = e.margin, a = e.defs, i = e.children, s = e.role, o = e.ariaLabel, f = e.ariaLabelledBy, c = e.ariaDescribedBy, u = e.isFocusable, d = nt();
  return P.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: t, height: r, role: s, "aria-label": o, "aria-labelledby": f, "aria-describedby": c, focusable: u, tabIndex: u ? 0 : void 0, children: [P.jsx(xx, { defs: a }), P.jsx("rect", { width: t, height: r, fill: d.background }), P.jsx("g", { transform: "translate(" + n.left + "," + n.top + ")", children: i })] });
};
wx.propTypes = { width: b.number.isRequired, height: b.number.isRequired, margin: b.shape({ top: b.number.isRequired, left: b.number.isRequired }).isRequired, defs: b.array, children: b.oneOfType([b.arrayOf(b.node), b.node]).isRequired, role: b.string, isFocusable: b.bool, ariaLabel: b.string, ariaLabelledBy: b.string, ariaDescribedBy: b.string };
var Qf = function(e) {
  var t = e.size, r = e.color, n = e.borderWidth, a = e.borderColor;
  return P.jsx("circle", { r: t / 2, fill: r, stroke: a, strokeWidth: n, style: { pointerEvents: "none" } });
};
Qf.propTypes = { size: b.number.isRequired, color: b.string.isRequired, borderWidth: b.number.isRequired, borderColor: b.string.isRequired };
var $x = ge(Qf), Xf = function(e) {
  var t = e.x, r = e.y, n = e.symbol, a = n === void 0 ? $x : n, i = e.size, s = e.datum, o = e.color, f = e.borderWidth, c = e.borderColor, u = e.label, d = e.labelTextAnchor, l = d === void 0 ? "middle" : d, v = e.labelYOffset, g = v === void 0 ? -12 : v, m = nt(), p = Vr(), w = p.animate, S = p.config, T = Ir({ transform: "translate(" + t + ", " + r + ")", config: S, immediate: !w });
  return P.jsxs(aa.g, { transform: T.transform, style: { pointerEvents: "none" }, children: [Hs(a, { size: i, color: o, datum: s, borderWidth: f, borderColor: c }), u && P.jsx("text", { textAnchor: l, y: g, style: gx(m.dots.text), children: u })] });
};
Xf.propTypes = { x: b.number.isRequired, y: b.number.isRequired, datum: b.object.isRequired, size: b.number.isRequired, color: b.string.isRequired, borderWidth: b.number.isRequired, borderColor: b.string.isRequired, symbol: b.oneOfType([b.func, b.object]), label: b.oneOfType([b.string, b.number]), labelTextAnchor: b.oneOf(["start", "middle", "end"]), labelYOffset: b.number };
var A3 = ge(Xf), Zf = function(e) {
  var t = e.width, r = e.height, n = e.axis, a = e.scale, i = e.value, s = e.lineStyle, o = e.textStyle, f = e.legend, c = e.legendNode, u = e.legendPosition, d = u === void 0 ? "top-right" : u, l = e.legendOffsetX, v = l === void 0 ? 14 : l, g = e.legendOffsetY, m = g === void 0 ? 14 : g, p = e.legendOrientation, w = p === void 0 ? "horizontal" : p, S = nt(), T = 0, A = 0, y = 0, Y = 0;
  if (n === "y" ? (y = a(i), A = t) : (T = a(i), Y = r), f && !c) {
    var X = function(K) {
      var te = K.axis, Q = K.width, E = K.height, se = K.position, V = K.offsetX, C = K.offsetY, k = K.orientation, j = 0, q = 0, J = k === "vertical" ? -90 : 0, I = "start";
      if (te === "x") switch (se) {
        case "top-left":
          j = -V, q = C, I = "end";
          break;
        case "top":
          q = -C, I = k === "horizontal" ? "middle" : "start";
          break;
        case "top-right":
          j = V, q = C, I = k === "horizontal" ? "start" : "end";
          break;
        case "right":
          j = V, q = E / 2, I = k === "horizontal" ? "start" : "middle";
          break;
        case "bottom-right":
          j = V, q = E - C, I = "start";
          break;
        case "bottom":
          q = E + C, I = k === "horizontal" ? "middle" : "end";
          break;
        case "bottom-left":
          q = E - C, j = -V, I = k === "horizontal" ? "end" : "start";
          break;
        case "left":
          j = -V, q = E / 2, I = k === "horizontal" ? "end" : "middle";
      }
      else switch (se) {
        case "top-left":
          j = V, q = -C, I = "start";
          break;
        case "top":
          j = Q / 2, q = -C, I = k === "horizontal" ? "middle" : "start";
          break;
        case "top-right":
          j = Q - V, q = -C, I = k === "horizontal" ? "end" : "start";
          break;
        case "right":
          j = Q + V, I = k === "horizontal" ? "start" : "middle";
          break;
        case "bottom-right":
          j = Q - V, q = C, I = "end";
          break;
        case "bottom":
          j = Q / 2, q = C, I = k === "horizontal" ? "middle" : "end";
          break;
        case "bottom-left":
          j = V, q = C, I = k === "horizontal" ? "start" : "end";
          break;
        case "left":
          j = -V, I = k === "horizontal" ? "end" : "middle";
      }
      return { x: j, y: q, rotation: J, textAnchor: I };
    }({ axis: n, width: t, height: r, position: d, offsetX: v, offsetY: m, orientation: w });
    c = P.jsx("text", { transform: "translate(" + X.x + ", " + X.y + ") rotate(" + X.rotation + ")", textAnchor: X.textAnchor, dominantBaseline: "central", style: o, children: f });
  }
  return P.jsxs("g", { transform: "translate(" + T + ", " + y + ")", children: [P.jsx("line", { x1: 0, x2: A, y1: 0, y2: Y, stroke: S.markers.lineColor, strokeWidth: S.markers.lineStrokeWidth, style: s }), c] });
};
Zf.propTypes = { width: b.number.isRequired, height: b.number.isRequired, axis: b.oneOf(["x", "y"]).isRequired, scale: b.func.isRequired, value: b.oneOfType([b.number, b.string, b.instanceOf(Date)]).isRequired, lineStyle: b.object, textStyle: b.object, legend: b.string, legendPosition: b.oneOf(["top-left", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left"]), legendOffsetX: b.number.isRequired, legendOffsetY: b.number.isRequired, legendOrientation: b.oneOf(["horizontal", "vertical"]).isRequired };
var Tx = ge(Zf), Jf = function(e) {
  var t = e.markers, r = e.width, n = e.height, a = e.xScale, i = e.yScale;
  return t && t.length !== 0 ? t.map(function(s, o) {
    return P.jsx(Tx, xe({}, s, { width: r, height: n, scale: s.axis === "y" ? i : a }), o);
  }) : null;
};
Jf.propTypes = { width: b.number.isRequired, height: b.number.isRequired, xScale: b.func.isRequired, yScale: b.func.isRequired, markers: b.arrayOf(b.shape({ axis: b.oneOf(["x", "y"]).isRequired, value: b.oneOfType([b.number, b.string, b.instanceOf(Date)]).isRequired, lineStyle: b.object, textStyle: b.object })) };
var P3 = ge(Jf), Sx = ["theme", "renderWrapper", "animate", "motionConfig"], R3 = function(e) {
  return function(t) {
    var r, n;
    function a() {
      return t.apply(this, arguments) || this;
    }
    return n = t, (r = a).prototype = Object.create(n.prototype), r.prototype.constructor = r, jn(r, n), a.prototype.render = function() {
      var i = this.props, s = i.theme, o = i.renderWrapper, f = i.animate, c = i.motionConfig, u = Yr(i, Sx);
      return P.jsx(Yf, { theme: s, renderWrapper: o, isInteractive: u.isInteractive, animate: f, motionConfig: c, children: P.jsx(e, xe({}, u)) });
    }, a;
  }(oc);
}, E3 = function(e, t) {
  var r = Fo(e) ? e : function(n) {
    return Yt(n, e);
  };
  return r;
}, k3 = function(e, t, r, n) {
  var a = r - e, i = n - t;
  return a *= a, i *= i, Math.sqrt(a + i);
}, M3 = function(e, t, r, n, a, i) {
  return e <= a && a <= e + r && t <= i && i <= t + n;
}, j3 = function(e, t) {
  var r, n = "touches" in t ? t.touches[0] : t, a = n.clientX, i = n.clientY, s = e.getBoundingClientRect(), o = (r = e.getBBox !== void 0 ? e.getBBox() : { width: e.offsetWidth || 0, height: e.offsetHeight || 0 }).width === s.width ? 1 : r.width / s.width;
  return [(a - s.left) * o, (i - s.top) * o];
}, Ox = Object.keys(Bf), Cx = Object.keys(Gf), Ax = function(e, t, r) {
  if (e === "*") return !0;
  if (Fo(e)) return e(t);
  if (K0(e)) {
    var n = r ? Yt(t, r) : t;
    return rx(a_(n, Object.keys(e)), e);
  }
  return !1;
}, I3 = function(e, t, r, n) {
  var a = {}, i = a.dataKey, s = a.colorKey, o = s === void 0 ? "color" : s, f = a.targetKey, c = f === void 0 ? "fill" : f, u = [], d = {};
  return e.length && t.length && (u = [].concat(e), t.forEach(function(l) {
    for (var v = function() {
      var m = r[g], p = m.id, w = m.match;
      if (Ax(w, l, i)) {
        var S = e.find(function(Q) {
          return Q.id === p;
        });
        if (S) {
          if (Cx.includes(S.type)) if (S.background === "inherit" || S.color === "inherit") {
            var T = Yt(l, o), A = S.background, y = S.color, Y = p;
            S.background === "inherit" && (Y = Y + ".bg." + T, A = T), S.color === "inherit" && (Y = Y + ".fg." + T, y = T), Rt(l, c, "url(#" + Y + ")"), d[Y] || (u.push(xe({}, S, { id: Y, background: A, color: y })), d[Y] = 1);
          } else Rt(l, c, "url(#" + p + ")");
          else if (Ox.includes(S.type))
            if (S.colors.map(function(Q) {
              return Q.color;
            }).includes("inherit")) {
              var X = Yt(l, o), K = p, te = xe({}, S, { colors: S.colors.map(function(Q, E) {
                return Q.color !== "inherit" ? Q : (K = K + "." + E + "." + X, xe({}, Q, { color: Q.color === "inherit" ? X : Q.color }));
              }) });
              te.id = K, Rt(l, c, "url(#" + K + ")"), d[K] || (u.push(te), d[K] = 1);
            } else Rt(l, c, "url(#" + p + ")");
        }
        return "break";
      }
    }, g = 0; g < r.length && v() !== "break"; g++)
      ;
  })), u;
};
function Qe() {
  return Qe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qe.apply(this, arguments);
}
var Px = { pointerEvents: "none", position: "absolute", zIndex: 10, top: 0, left: 0 }, Ws = function(e, t) {
  return "translate(" + e + "px, " + t + "px)";
}, ec = ge(function(e) {
  var t, r = e.position, n = e.anchor, a = e.children, i = nt(), s = Vr(), o = s.animate, f = s.config, c = Lf(), u = c[0], d = c[1], l = pe(!1), v = void 0, g = !1, m = d.width > 0 && d.height > 0, p = Math.round(r[0]), w = Math.round(r[1]);
  m && (n === "top" ? (p -= d.width / 2, w -= d.height + 14) : n === "right" ? (p += 14, w -= d.height / 2) : n === "bottom" ? (p -= d.width / 2, w += 14) : n === "left" ? (p -= d.width + 14, w -= d.height / 2) : n === "center" && (p -= d.width / 2, w -= d.height / 2), v = { transform: Ws(p, w) }, l.current || (g = !0), l.current = [p, w]);
  var S = Ir({ to: v, config: f, immediate: !o || g }), T = Qe({}, Px, i.tooltip.wrapper, { transform: (t = S.transform) != null ? t : Ws(p, w), opacity: S.transform ? 1 : 0 });
  return P.jsx(aa.div, { ref: u, style: T, children: a });
});
ec.displayName = "TooltipWrapper";
var Rx = ge(function(e) {
  var t = e.size, r = t === void 0 ? 12 : t, n = e.color, a = e.style;
  return P.jsx("span", { style: Qe({ display: "block", width: r, height: r, background: n }, a === void 0 ? {} : a) });
}), F3 = ge(function(e) {
  var t, r = e.id, n = e.value, a = e.format, i = e.enableChip, s = i !== void 0 && i, o = e.color, f = e.renderContent, c = nt(), u = hx(a);
  if (typeof f == "function") t = f();
  else {
    var d = n;
    u !== void 0 && d !== void 0 && (d = u(d)), t = P.jsxs("div", { style: c.tooltip.basic, children: [s && P.jsx(Rx, { color: o, style: c.tooltip.chip }), d !== void 0 ? P.jsxs("span", { children: [r, ": ", P.jsx("strong", { children: "" + d })] }) : r] });
  }
  return P.jsx("div", { style: c.tooltip.container, children: t });
}), Ex = { width: "100%", borderCollapse: "collapse" }, tc = ge(function(e) {
  var t, r = e.title, n = e.rows, a = n === void 0 ? [] : n, i = e.renderContent, s = nt();
  return a.length ? (t = typeof i == "function" ? i() : P.jsxs("div", { children: [r && r, P.jsx("table", { style: Qe({}, Ex, s.tooltip.table), children: P.jsx("tbody", { children: a.map(function(o, f) {
    return P.jsx("tr", { children: o.map(function(c, u) {
      return P.jsx("td", { style: s.tooltip.tableCell, children: c }, u);
    }) }, f);
  }) }) })] }), P.jsx("div", { style: s.tooltip.container, children: t })) : null;
});
tc.displayName = "TableTooltip";
var Nn = ge(function(e) {
  var t = e.x0, r = e.x1, n = e.y0, a = e.y1, i = nt(), s = Vr(), o = s.animate, f = s.config, c = _e(function() {
    return Qe({}, i.crosshair.line, { pointerEvents: "none" });
  }, [i.crosshair.line]), u = Ir({ x1: t, x2: r, y1: n, y2: a, config: f, immediate: !o });
  return P.jsx(aa.line, Qe({}, u, { fill: "none", style: c }));
});
Nn.displayName = "CrosshairLine";
var kx = ge(function(e) {
  var t, r, n = e.width, a = e.height, i = e.type, s = e.x, o = e.y;
  return i === "cross" ? (t = { x0: s, x1: s, y0: 0, y1: a }, r = { x0: 0, x1: n, y0: o, y1: o }) : i === "top-left" ? (t = { x0: s, x1: s, y0: 0, y1: o }, r = { x0: 0, x1: s, y0: o, y1: o }) : i === "top" ? t = { x0: s, x1: s, y0: 0, y1: o } : i === "top-right" ? (t = { x0: s, x1: s, y0: 0, y1: o }, r = { x0: s, x1: n, y0: o, y1: o }) : i === "right" ? r = { x0: s, x1: n, y0: o, y1: o } : i === "bottom-right" ? (t = { x0: s, x1: s, y0: o, y1: a }, r = { x0: s, x1: n, y0: o, y1: o }) : i === "bottom" ? t = { x0: s, x1: s, y0: o, y1: a } : i === "bottom-left" ? (t = { x0: s, x1: s, y0: o, y1: a }, r = { x0: 0, x1: s, y0: o, y1: o }) : i === "left" ? r = { x0: 0, x1: s, y0: o, y1: o } : i === "x" ? t = { x0: s, x1: s, y0: 0, y1: a } : i === "y" && (r = { x0: 0, x1: n, y0: o, y1: o }), P.jsxs(P.Fragment, { children: [t && P.jsx(Nn, { x0: t.x0, x1: t.x1, y0: t.y0, y1: t.y1 }), r && P.jsx(Nn, { x0: r.x0, x1: r.x1, y0: r.y0, y1: r.y1 })] });
});
kx.displayName = "Crosshair";
var rc = Or({ showTooltipAt: function() {
}, showTooltipFromEvent: function() {
}, hideTooltip: function() {
} }), Ln = { isVisible: !1, position: [null, null], content: null, anchor: null }, nc = Or(Ln), Mx = function(e) {
  var t = It(Ln), r = t[0], n = t[1], a = fr(function(o, f, c) {
    var u = f[0], d = f[1];
    c === void 0 && (c = "top"), n({ isVisible: !0, position: [u, d], anchor: c, content: o });
  }, [n]), i = fr(function(o, f, c) {
    c === void 0 && (c = "top");
    var u = e.current.getBoundingClientRect(), d = e.current.offsetWidth, l = d === u.width ? 1 : d / u.width, v = "touches" in f ? f.touches[0] : f, g = v.clientX, m = v.clientY, p = (g - u.left) * l, w = (m - u.top) * l;
    c !== "left" && c !== "right" || (c = p < u.width / 2 ? "right" : "left"), n({ isVisible: !0, position: [p, w], anchor: c, content: o });
  }, [e, n]), s = fr(function() {
    n(Ln);
  }, [n]);
  return { actions: _e(function() {
    return { showTooltipAt: a, showTooltipFromEvent: i, hideTooltip: s };
  }, [a, i, s]), state: r };
}, D3 = function() {
  var e = Ze(rc);
  if (e === void 0) throw new Error("useTooltip must be used within a TooltipProvider");
  return e;
}, jx = function() {
  var e = Ze(nc);
  if (e === void 0) throw new Error("useTooltipState must be used within a TooltipProvider");
  return e;
}, Ix = function(e) {
  return e.isVisible;
}, Fx = function() {
  var e = jx();
  return Ix(e) ? P.jsx(ec, { position: e.position, anchor: e.anchor, children: e.content }) : null;
}, Dx = function(e) {
  var t = e.container, r = e.children, n = Mx(t), a = n.actions, i = n.state;
  return P.jsx(rc.Provider, { value: a, children: P.jsx(nc.Provider, { value: i, children: r }) });
};
const q3 = ({
  slice: e,
  config: t,
  postfix: r,
  minY: n,
  maxY: a
}) => {
  const i = xc(), { t: s } = wc("uiKit", { keyPrefix: "widgets" }), o = yc(e.points[0].data.xFormatted).format("DD.MM, HH:mm");
  return /* @__PURE__ */ P.jsx(
    tc,
    {
      rows: [
        [
          /* @__PURE__ */ P.jsx(je, { color: "text.text8", variant: "caption12", component: "span", children: o }, "date")
        ],
        e.points.map((f) => {
          const c = t && t.type === _c.Boolean, u = String(f.data.yFormatted), d = typeof (t == null ? void 0 : t.value_map) == "object" && t.value_map !== null ? t.value_map : {}, l = c && d ? d[u] : f.data.yFormatted;
          return [
            // TODO - "No data" in case of a data failure
            /* @__PURE__ */ P.jsxs(je, { color: i.palette.text.text4, component: "span", children: [
              /* @__PURE__ */ P.jsxs("div", { children: [
                /* @__PURE__ */ P.jsx(je, { variant: "text13", color: i.palette.text.text4, children: s("Current value", { value: l }) }),
                /* @__PURE__ */ P.jsx(je, { variant: "caption8", sx: { verticalAlign: "super" }, children: r })
              ] }),
              /* @__PURE__ */ P.jsxs("div", { children: [
                /* @__PURE__ */ P.jsx(je, { variant: "text13", color: i.palette.base.color6, children: s("Max value", { value: a }) }),
                /* @__PURE__ */ P.jsx(
                  je,
                  {
                    variant: "caption8",
                    sx: { verticalAlign: "super" },
                    color: i.palette.base.color6,
                    children: r
                  }
                )
              ] }),
              /* @__PURE__ */ P.jsxs("div", { children: [
                /* @__PURE__ */ P.jsx(je, { variant: "text13", color: i.palette.base.color23, children: s("Min value", { value: n }) }),
                /* @__PURE__ */ P.jsx(
                  je,
                  {
                    variant: "caption8",
                    sx: { verticalAlign: "super" },
                    color: i.palette.base.color23,
                    children: r
                  }
                )
              ] })
            ] }, "value")
          ];
        })
      ]
    }
  );
};
export {
  r3 as A,
  tc as C,
  er as Color,
  i3 as E,
  T3 as Fr,
  zs as Ht,
  I3 as In,
  vx as It,
  v3 as K,
  y3 as L,
  k3 as Mn,
  gx as Mt,
  _3 as N,
  n3 as O,
  b as Oe,
  R3 as On,
  hx as Ot,
  kx as P,
  $3 as Q,
  be as Rgb,
  P3 as Rn,
  j3 as Sn,
  q3 as Tooltip,
  Vr as Ur,
  x3 as W,
  w3 as X,
  Ug as _,
  Zx as _$1,
  E2 as _Set,
  pf as _SetCache,
  qo as _Stack,
  xm as _arrayIncludes,
  $m as _arrayIncludesWith,
  sf as _arrayMap,
  Yy as _baseFlatten,
  Kh as _baseFor,
  ff as _baseGet,
  Je as _baseGetTag,
  Z2 as _baseIsEqual,
  nf as _baseRest,
  Go as _baseUnary,
  gf as _cacheHas,
  l1 as _isIterateeCall,
  E1 as _isKey,
  Ob as _nodeUtilExports,
  g_ as _setToArray,
  ux as _t,
  pa as _toKey,
  s3 as ae,
  aa as animated,
  m3 as be,
  vr as brighter,
  f3 as ce,
  ma as color,
  ae as colors,
  va as constant,
  Vt as darker,
  l3 as de,
  ga as define,
  M as e,
  uf as extend,
  u3 as fe,
  Sf as format,
  Rx as g,
  p3 as ge,
  cg as get_1,
  wx as gn,
  My as hasIn_1,
  b3 as he,
  Kx as hue,
  ef as identity_1,
  Zg as initRange,
  Fg as interpolateNumber,
  zr as isArrayLike_1,
  Ee as isArray_1,
  Le as isObjectLike_1,
  Ne as isObject_1,
  ha as isSymbol_1,
  t3 as j,
  K0 as je,
  M3 as jn,
  e3 as k,
  D3 as k$1,
  Yt as ke,
  c2 as keys_1,
  Jg as l,
  o3 as le,
  S3 as lt,
  h3 as me,
  hf as nogamma,
  bf as ordinal,
  d3 as pe,
  E3 as qn,
  Qx as rgb,
  yr as rgb$1,
  Cg as rgbConvert,
  C3 as rn,
  Ca as scheme,
  Oa as scheme$1,
  qa as scheme$10,
  Da as scheme$11,
  Fa as scheme$12,
  Ia as scheme$13,
  ja as scheme$14,
  Ma as scheme$15,
  ka as scheme$16,
  Ea as scheme$17,
  Ra as scheme$18,
  Pa as scheme$19,
  Sa as scheme$2,
  Aa as scheme$20,
  Ha as scheme$21,
  Wa as scheme$22,
  Ya as scheme$23,
  za as scheme$24,
  La as scheme$25,
  Na as scheme$26,
  Ta as scheme$3,
  $a as scheme$4,
  wa as scheme$5,
  xa as scheme$6,
  _a as scheme$7,
  ya as scheme$8,
  Ua as scheme$9,
  c3 as se,
  Mf as timeFormat,
  ly as timeParse,
  Q1 as toString_1,
  Ir as useSpring,
  Gx as useTransition,
  hy as utcParse,
  Xx as v,
  A3 as vn,
  Jx as w,
  F3 as w$1,
  O3 as wt,
  g3 as ye,
  a3 as z,
  nt as zt
};
