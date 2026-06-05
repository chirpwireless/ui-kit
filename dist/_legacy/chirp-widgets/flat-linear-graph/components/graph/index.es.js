import { jsxRuntimeExports as j } from "../../../../../jsx-runtime-BgepH7Pb.js";
import { useTheme as ma, rgbToHex as Dt } from "@mui/material";
import * as Ui from "react";
import { useMemo as le, memo as me, createElement as ke, useCallback as K, useState as fn, useRef as tr, useEffect as Ai, Fragment as ga, forwardRef as Fi } from "react";
import { Rgb as Di, rgbConvert as ba, define as ya, extend as va, darker as Wr, brighter as Yr, Color as pa, constant as xa, interpolateNumber as Rt, rgb as Or, _ as Ma, color as Pr, nogamma as st, hue as wa, ordinal as Bn, initRange as An, colors as ye, rgb$1 as ji, l as Ta, scheme as _a, scheme$1 as Ca, scheme$2 as ka, scheme$3 as Sa, scheme$4 as $a, scheme$5 as Ua, scheme$6 as Aa, scheme$7 as Fa, scheme$8 as Da, scheme$9 as ja, scheme$10 as Ea, scheme$11 as Wa, scheme$12 as Ya, scheme$13 as Oa, scheme$14 as Pa, scheme$15 as La, scheme$16 as Ha, scheme$17 as Ia, scheme$18 as Ba, scheme$19 as za, scheme$20 as Na, scheme$21 as Ra, scheme$22 as Xa, scheme$23 as Ga, scheme$24 as qa, scheme$25 as Va, scheme$26 as Ka, E as Za, z as Qa, O as Ja, A as eu, j as nu, k as tu, w as ru, _$1 as iu, v as ou, be as au, ye as uu, ge as su, he as lu, me as cu, de as fu, pe as hu, fe as du, se as mu, ce as gu, le as bu, ae as yu, X as vu, W as pu, Q as xu, N as Mu, L as wu, K as Tu, Oe as Ee, je as Ei, ke as ct, _setToArray as Wi, _Set as _u, _SetCache as Cu, _arrayIncludes as ku, _arrayIncludesWith as Su, _cacheHas as $u, _Stack as Uu, _baseIsEqual as Yi, isObject_1 as Au, keys_1 as Oi, _isKey as Pi, _toKey as Li, get_1 as Fu, hasIn_1 as Du, _baseGet as Hi, identity_1 as Ii, isArray_1 as Bi, _baseFor as ju, isArrayLike_1 as zi, isSymbol_1 as Eu, _arrayMap as Wu, _baseUnary as Ni, _baseRest as Yu, _isIterateeCall as Ou, _baseFlatten as Pu, isObjectLike_1 as Lu, _baseGetTag as Hu, _nodeUtilExports as Iu, e as Xt, utcParse as Bu, timeParse as zu, zt as Be, animated as qe, Mt as Ri, Ur as rr, useTransition as Xi, useSpring as Gi, timeFormat as Nu, format as Ru, rn as Xu, Ht as Lr, toString_1 as Gu, _t as qu, Sn as qi, Mn as Vu, k$1 as wt, It as Vi, On as Ki, w$1 as Ku, C as Zu, g as Qu, Fr as Zi, qn as Ju, vn as es, wt as Qi, Rn as ns, In as ts, P as Hr, gn as rs, jn as is, Ot as Ir, lt as Ji, Tooltip as os } from "../../../../../index-Cx_BaYQ4.js";
import { getDefaultExportFromCjs as Xn } from "../../../../../_commonjsHelpers-TBt1UqMc.js";
import { area as as, H as us, AreaLayer as ss } from "../../../../../index-mGDRdw-u.js";
import { Timequants as tt } from "../../../types.es.js";
import { CustomLine as ls } from "../custom-line/index.es.js";
import { Skeleton as cs } from "../skeleton/Skeleton.es.js";
import { createFlatChartTheme as fs, DEFAULT_DEFS as hs, DEFAULT_COLORS as ds } from "./chart-theme.es.js";
import { getFlatChartDefs as ms } from "./helpers.es.js";
import { Wrapper as gs } from "./style.es.js";
import { CustomRangeLayer as bs } from "./сustom-range-layer.es.js";
const ys = Math.PI / 180, vs = 180 / Math.PI;
var eo = -0.14861, ir = 1.78277, or = -0.29227, Tt = -0.90649, zn = 1.97294, Br = zn * Tt, zr = zn * ir, Nr = ir * or - Tt * eo;
function ps(e) {
  if (e instanceof cn) return new cn(e.h, e.s, e.l, e.opacity);
  e instanceof Di || (e = ba(e));
  var n = e.r / 255, t = e.g / 255, r = e.b / 255, i = (Nr * r + Br * n - zr * t) / (Nr + Br - zr), o = r - i, a = (zn * (t - i) - or * o) / Tt, u = Math.sqrt(a * a + o * o) / (zn * i * (1 - i)), s = u ? Math.atan2(a, o) * vs - 120 : NaN;
  return new cn(s < 0 ? s + 360 : s, u, i, e.opacity);
}
function Se(e, n, t, r) {
  return arguments.length === 1 ? ps(e) : new cn(e, n, t, r ?? 1);
}
function cn(e, n, t, r) {
  this.h = +e, this.s = +n, this.l = +t, this.opacity = +r;
}
ya(cn, Se, va(pa, {
  brighter(e) {
    return e = e == null ? Yr : Math.pow(Yr, e), new cn(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Wr : Math.pow(Wr, e), new cn(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = isNaN(this.h) ? 0 : (this.h + 120) * ys, n = +this.l, t = isNaN(this.s) ? 0 : this.s * n * (1 - n), r = Math.cos(e), i = Math.sin(e);
    return new Di(
      255 * (n + t * (eo * r + ir * i)),
      255 * (n + t * (or * r + Tt * i)),
      255 * (n + t * (zn * r)),
      this.opacity
    );
  }
}));
function xs(e, n) {
  n || (n = []);
  var t = e ? Math.min(n.length, e.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < t; ++i) r[i] = e[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Ms(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ws(e, n) {
  var t = n ? n.length : 0, r = e ? Math.min(t, e.length) : 0, i = new Array(r), o = new Array(t), a;
  for (a = 0; a < r; ++a) i[a] = ar(e[a], n[a]);
  for (; a < t; ++a) o[a] = n[a];
  return function(u) {
    for (a = 0; a < r; ++a) o[a] = i[a](u);
    return o;
  };
}
function Ts(e, n) {
  var t = /* @__PURE__ */ new Date();
  return e = +e, n = +n, function(r) {
    return t.setTime(e * (1 - r) + n * r), t;
  };
}
function _s(e, n) {
  var t = {}, r = {}, i;
  (e === null || typeof e != "object") && (e = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in e ? t[i] = ar(e[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in t) r[i] = t[i](o);
    return r;
  };
}
function ar(e, n) {
  var t = typeof n, r;
  return n == null || t === "boolean" ? xa(n) : (t === "number" ? Rt : t === "string" ? (r = Pr(n)) ? (n = r, Or) : Ma : n instanceof Pr ? Or : n instanceof Date ? Ts : Ms(n) ? xs : Array.isArray(n) ? ws : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? _s : Rt)(e, n);
}
function Cs(e, n) {
  return e = +e, n = +n, function(t) {
    return Math.round(e * (1 - t) + n * t);
  };
}
function no(e) {
  return function n(t) {
    t = +t;
    function r(i, o) {
      var a = e((i = Se(i)).h, (o = Se(o)).h), u = st(i.s, o.s), s = st(i.l, o.l), l = st(i.opacity, o.opacity);
      return function(h) {
        return i.h = a(h), i.s = u(h), i.l = s(Math.pow(h, t)), i.opacity = l(h), i + "";
      };
    }
    return r.gamma = n, r;
  }(1);
}
no(wa);
var ur = no(st);
function lt(e, n) {
  return e == null || n == null ? NaN : e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
}
function ks(e, n) {
  return e == null || n == null ? NaN : n < e ? -1 : n > e ? 1 : n >= e ? 0 : NaN;
}
function sr(e) {
  let n, t, r;
  e.length !== 2 ? (n = lt, t = (u, s) => lt(e(u), s), r = (u, s) => e(u) - s) : (n = e === lt || e === ks ? e : Ss, t = e, r = e);
  function i(u, s, l = 0, h = u.length) {
    if (l < h) {
      if (n(s, s) !== 0) return h;
      do {
        const c = l + h >>> 1;
        t(u[c], s) < 0 ? l = c + 1 : h = c;
      } while (l < h);
    }
    return l;
  }
  function o(u, s, l = 0, h = u.length) {
    if (l < h) {
      if (n(s, s) !== 0) return h;
      do {
        const c = l + h >>> 1;
        t(u[c], s) <= 0 ? l = c + 1 : h = c;
      } while (l < h);
    }
    return l;
  }
  function a(u, s, l = 0, h = u.length) {
    const c = i(u, s, l, h - 1);
    return c > l && r(u[c - 1], s) > -r(u[c], s) ? c - 1 : c;
  }
  return { left: i, center: a, right: o };
}
function Ss() {
  return 0;
}
function $s(e) {
  return e === null ? NaN : +e;
}
const Us = sr(lt), As = Us.right;
sr($s).center;
const Fs = Math.sqrt(50), Ds = Math.sqrt(10), js = Math.sqrt(2);
function ft(e, n, t) {
  const r = (n - e) / Math.max(0, t), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Fs ? 10 : o >= Ds ? 5 : o >= js ? 2 : 1;
  let u, s, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, u = Math.round(e * l), s = Math.round(n * l), u / l < e && ++u, s / l > n && --s, l = -l) : (l = Math.pow(10, i) * a, u = Math.round(e / l), s = Math.round(n / l), u * l < e && ++u, s * l > n && --s), s < u && 0.5 <= t && t < 2 ? ft(e, n, t * 2) : [u, s, l];
}
function Gt(e, n, t) {
  if (n = +n, e = +e, t = +t, !(t > 0)) return [];
  if (e === n) return [e];
  const r = n < e, [i, o, a] = r ? ft(n, e, t) : ft(e, n, t);
  if (!(o >= i)) return [];
  const u = o - i + 1, s = new Array(u);
  if (r)
    if (a < 0) for (let l = 0; l < u; ++l) s[l] = (o - l) / -a;
    else for (let l = 0; l < u; ++l) s[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < u; ++l) s[l] = (i + l) / -a;
  else for (let l = 0; l < u; ++l) s[l] = (i + l) * a;
  return s;
}
function qt(e, n, t) {
  return n = +n, e = +e, t = +t, ft(e, n, t)[2];
}
function Vt(e, n, t) {
  n = +n, e = +e, t = +t;
  const r = n < e, i = r ? qt(n, e, t) : qt(e, n, t);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Es(e, n, t) {
  e = +e, n = +n, t = (i = arguments.length) < 2 ? (n = e, e = 0, 1) : i < 3 ? 1 : +t;
  for (var r = -1, i = Math.max(0, Math.ceil((n - e) / t)) | 0, o = new Array(i); ++r < i; )
    o[r] = e + r * t;
  return o;
}
function lr() {
  var e = Bn().unknown(void 0), n = e.domain, t = e.range, r = 0, i = 1, o, a, u = !1, s = 0, l = 0, h = 0.5;
  delete e.unknown;
  function c() {
    var f = n().length, d = i < r, g = d ? i : r, m = d ? r : i;
    o = (m - g) / Math.max(1, f - s + l * 2), u && (o = Math.floor(o)), g += (m - g - o * (f - s)) * h, a = o * (1 - s), u && (g = Math.round(g), a = Math.round(a));
    var b = Es(f).map(function(y) {
      return g + o * y;
    });
    return t(d ? b.reverse() : b);
  }
  return e.domain = function(f) {
    return arguments.length ? (n(f), c()) : n();
  }, e.range = function(f) {
    return arguments.length ? ([r, i] = f, r = +r, i = +i, c()) : [r, i];
  }, e.rangeRound = function(f) {
    return [r, i] = f, r = +r, i = +i, u = !0, c();
  }, e.bandwidth = function() {
    return a;
  }, e.step = function() {
    return o;
  }, e.round = function(f) {
    return arguments.length ? (u = !!f, c()) : u;
  }, e.padding = function(f) {
    return arguments.length ? (s = Math.min(1, l = +f), c()) : s;
  }, e.paddingInner = function(f) {
    return arguments.length ? (s = Math.min(1, f), c()) : s;
  }, e.paddingOuter = function(f) {
    return arguments.length ? (l = +f, c()) : l;
  }, e.align = function(f) {
    return arguments.length ? (h = Math.max(0, Math.min(1, f)), c()) : h;
  }, e.copy = function() {
    return lr(n(), [r, i]).round(u).paddingInner(s).paddingOuter(l).align(h);
  }, An.apply(c(), arguments);
}
function to(e) {
  var n = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return to(n());
  }, e;
}
function Ws() {
  return to(lr.apply(null, arguments).paddingInner(1));
}
function Ys(e) {
  return function() {
    return e;
  };
}
function Os(e) {
  return +e;
}
var Rr = [0, 1];
function _n(e) {
  return e;
}
function Kt(e, n) {
  return (n -= e = +e) ? function(t) {
    return (t - e) / n;
  } : Ys(isNaN(n) ? NaN : 0.5);
}
function Ps(e, n) {
  var t;
  return e > n && (t = e, e = n, n = t), function(r) {
    return Math.max(e, Math.min(n, r));
  };
}
function Ls(e, n, t) {
  var r = e[0], i = e[1], o = n[0], a = n[1];
  return i < r ? (r = Kt(i, r), o = t(a, o)) : (r = Kt(r, i), o = t(o, a)), function(u) {
    return o(r(u));
  };
}
function Hs(e, n, t) {
  var r = Math.min(e.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Kt(e[a], e[a + 1]), o[a] = t(n[a], n[a + 1]);
  return function(u) {
    var s = As(e, u, 1, r) - 1;
    return o[s](i[s](u));
  };
}
function _t(e, n) {
  return n.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function cr() {
  var e = Rr, n = Rr, t = ar, r, i, o, a = _n, u, s, l;
  function h() {
    var f = Math.min(e.length, n.length);
    return a !== _n && (a = Ps(e[0], e[f - 1])), u = f > 2 ? Hs : Ls, s = l = null, c;
  }
  function c(f) {
    return f == null || isNaN(f = +f) ? o : (s || (s = u(e.map(r), n, t)))(r(a(f)));
  }
  return c.invert = function(f) {
    return a(i((l || (l = u(n, e.map(r), Rt)))(f)));
  }, c.domain = function(f) {
    return arguments.length ? (e = Array.from(f, Os), h()) : e.slice();
  }, c.range = function(f) {
    return arguments.length ? (n = Array.from(f), h()) : n.slice();
  }, c.rangeRound = function(f) {
    return n = Array.from(f), t = Cs, h();
  }, c.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : _n, h()) : a !== _n;
  }, c.interpolate = function(f) {
    return arguments.length ? (t = f, h()) : t;
  }, c.unknown = function(f) {
    return arguments.length ? (o = f, c) : o;
  }, function(f, d) {
    return r = f, i = d, h();
  };
}
function ro() {
  return cr()(_n, _n);
}
function Is(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function ht(e, n) {
  if (!isFinite(e) || e === 0) return null;
  var t = (e = n ? e.toExponential(n - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, t);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +e.slice(t + 1)
  ];
}
function kn(e) {
  return e = ht(Math.abs(e)), e ? e[1] : NaN;
}
function Bs(e, n) {
  return function(t, r) {
    for (var i = t.length, o = [], a = 0, u = e[0], s = 0; i > 0 && u > 0 && (s + u + 1 > r && (u = Math.max(1, r - s)), o.push(t.substring(i -= u, i + u)), !((s += u + 1) > r)); )
      u = e[a = (a + 1) % e.length];
    return o.reverse().join(n);
  };
}
function zs(e) {
  return function(n) {
    return n.replace(/[0-9]/g, function(t) {
      return e[+t];
    });
  };
}
var Ns = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Nn(e) {
  if (!(n = Ns.exec(e))) throw new Error("invalid format: " + e);
  var n;
  return new fr({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Nn.prototype = fr.prototype;
function fr(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
fr.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Rs(e) {
  e: for (var n = e.length, t = 1, r = -1, i; t < n; ++t)
    switch (e[t]) {
      case ".":
        r = i = t;
        break;
      case "0":
        r === 0 && (r = t), i = t;
        break;
      default:
        if (!+e[t]) break e;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var dt;
function Xs(e, n) {
  var t = ht(e, n);
  if (!t) return dt = void 0, e.toPrecision(n);
  var r = t[0], i = t[1], o = i - (dt = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + ht(e, Math.max(0, n + o - 1))[0];
}
function Xr(e, n) {
  var t = ht(e, n);
  if (!t) return e + "";
  var r = t[0], i = t[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Gr = {
  "%": (e, n) => (e * 100).toFixed(n),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Is,
  e: (e, n) => e.toExponential(n),
  f: (e, n) => e.toFixed(n),
  g: (e, n) => e.toPrecision(n),
  o: (e) => Math.round(e).toString(8),
  p: (e, n) => Xr(e * 100, n),
  r: Xr,
  s: Xs,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function qr(e) {
  return e;
}
var Vr = Array.prototype.map, Kr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Gs(e) {
  var n = e.grouping === void 0 || e.thousands === void 0 ? qr : Bs(Vr.call(e.grouping, Number), e.thousands + ""), t = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? qr : zs(Vr.call(e.numerals, String)), a = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function l(c, f) {
    c = Nn(c);
    var d = c.fill, g = c.align, m = c.sign, b = c.symbol, y = c.zero, w = c.width, S = c.comma, _ = c.precision, A = c.trim, v = c.type;
    v === "n" ? (S = !0, v = "g") : Gr[v] || (_ === void 0 && (_ = 12), A = !0, v = "g"), (y || d === "0" && g === "=") && (y = !0, d = "0", g = "=");
    var D = (f && f.prefix !== void 0 ? f.prefix : "") + (b === "$" ? t : b === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : ""), U = (b === "$" ? r : /[%p]/.test(v) ? a : "") + (f && f.suffix !== void 0 ? f.suffix : ""), x = Gr[v], C = /[defgprs%]/.test(v);
    _ = _ === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
    function k(T) {
      var $ = D, E = U, O, W, H;
      if (v === "c")
        E = x(T) + E, T = "";
      else {
        T = +T;
        var I = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? s : x(Math.abs(T), _), A && (T = Rs(T)), I && +T == 0 && m !== "+" && (I = !1), $ = (I ? m === "(" ? m : u : m === "-" || m === "(" ? "" : m) + $, E = (v === "s" && !isNaN(T) && dt !== void 0 ? Kr[8 + dt / 3] : "") + E + (I && m === "(" ? ")" : ""), C) {
          for (O = -1, W = T.length; ++O < W; )
            if (H = T.charCodeAt(O), 48 > H || H > 57) {
              E = (H === 46 ? i + T.slice(O + 1) : T.slice(O)) + E, T = T.slice(0, O);
              break;
            }
        }
      }
      S && !y && (T = n(T, 1 / 0));
      var Y = $.length + T.length + E.length, B = Y < w ? new Array(w - Y + 1).join(d) : "";
      switch (S && y && (T = n(B + T, B.length ? w - E.length : 1 / 0), B = ""), g) {
        case "<":
          T = $ + T + E + B;
          break;
        case "=":
          T = $ + B + T + E;
          break;
        case "^":
          T = B.slice(0, Y = B.length >> 1) + $ + T + E + B.slice(Y);
          break;
        default:
          T = B + $ + T + E;
          break;
      }
      return o(T);
    }
    return k.toString = function() {
      return c + "";
    }, k;
  }
  function h(c, f) {
    var d = Math.max(-8, Math.min(8, Math.floor(kn(f) / 3))) * 3, g = Math.pow(10, -d), m = l((c = Nn(c), c.type = "f", c), { suffix: Kr[8 + d / 3] });
    return function(b) {
      return m(g * b);
    };
  }
  return {
    format: l,
    formatPrefix: h
  };
}
var rt, hr, io;
qs({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function qs(e) {
  return rt = Gs(e), hr = rt.format, io = rt.formatPrefix, rt;
}
function Vs(e) {
  return Math.max(0, -kn(Math.abs(e)));
}
function Ks(e, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(kn(n) / 3))) * 3 - kn(Math.abs(e)));
}
function Zs(e, n) {
  return e = Math.abs(e), n = Math.abs(n) - e, Math.max(0, kn(n) - kn(e)) + 1;
}
function Qs(e, n, t, r) {
  var i = Vt(e, n, t), o;
  switch (r = Nn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(e), Math.abs(n));
      return r.precision == null && !isNaN(o = Ks(i, a)) && (r.precision = o), io(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Zs(i, Math.max(Math.abs(e), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Vs(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return hr(r);
}
function oo(e) {
  var n = e.domain;
  return e.ticks = function(t) {
    var r = n();
    return Gt(r[0], r[r.length - 1], t ?? 10);
  }, e.tickFormat = function(t, r) {
    var i = n();
    return Qs(i[0], i[i.length - 1], t ?? 10, r);
  }, e.nice = function(t) {
    t == null && (t = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], u = r[o], s, l, h = 10;
    for (u < a && (l = a, a = u, u = l, l = i, i = o, o = l); h-- > 0; ) {
      if (l = qt(a, u, t), l === s)
        return r[i] = a, r[o] = u, n(r);
      if (l > 0)
        a = Math.floor(a / l) * l, u = Math.ceil(u / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, u = Math.floor(u * l) / l;
      else
        break;
      s = l;
    }
    return e;
  }, e;
}
function ao() {
  var e = ro();
  return e.copy = function() {
    return _t(e, ao());
  }, An.apply(e, arguments), oo(e);
}
function uo(e, n) {
  e = e.slice();
  var t = 0, r = e.length - 1, i = e[t], o = e[r], a;
  return o < i && (a = t, t = r, r = a, a = i, i = o, o = a), e[t] = n.floor(i), e[r] = n.ceil(o), e;
}
function Zr(e) {
  return Math.log(e);
}
function Qr(e) {
  return Math.exp(e);
}
function Js(e) {
  return -Math.log(-e);
}
function el(e) {
  return -Math.exp(-e);
}
function nl(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function tl(e) {
  return e === 10 ? nl : e === Math.E ? Math.exp : (n) => Math.pow(e, n);
}
function rl(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (n) => Math.log(n) / e);
}
function Jr(e) {
  return (n, t) => -e(-n, t);
}
function il(e) {
  const n = e(Zr, Qr), t = n.domain;
  let r = 10, i, o;
  function a() {
    return i = rl(r), o = tl(r), t()[0] < 0 ? (i = Jr(i), o = Jr(o), e(Js, el)) : e(Zr, Qr), n;
  }
  return n.base = function(u) {
    return arguments.length ? (r = +u, a()) : r;
  }, n.domain = function(u) {
    return arguments.length ? (t(u), a()) : t();
  }, n.ticks = (u) => {
    const s = t();
    let l = s[0], h = s[s.length - 1];
    const c = h < l;
    c && ([l, h] = [h, l]);
    let f = i(l), d = i(h), g, m;
    const b = u == null ? 10 : +u;
    let y = [];
    if (!(r % 1) && d - f < b) {
      if (f = Math.floor(f), d = Math.ceil(d), l > 0) {
        for (; f <= d; ++f)
          for (g = 1; g < r; ++g)
            if (m = f < 0 ? g / o(-f) : g * o(f), !(m < l)) {
              if (m > h) break;
              y.push(m);
            }
      } else for (; f <= d; ++f)
        for (g = r - 1; g >= 1; --g)
          if (m = f > 0 ? g / o(-f) : g * o(f), !(m < l)) {
            if (m > h) break;
            y.push(m);
          }
      y.length * 2 < b && (y = Gt(l, h, b));
    } else
      y = Gt(f, d, Math.min(d - f, b)).map(o);
    return c ? y.reverse() : y;
  }, n.tickFormat = (u, s) => {
    if (u == null && (u = 10), s == null && (s = r === 10 ? "s" : ","), typeof s != "function" && (!(r % 1) && (s = Nn(s)).precision == null && (s.trim = !0), s = hr(s)), u === 1 / 0) return s;
    const l = Math.max(1, r * u / n.ticks().length);
    return (h) => {
      let c = h / o(Math.round(i(h)));
      return c * r < r - 0.5 && (c *= r), c <= l ? s(h) : "";
    };
  }, n.nice = () => t(uo(t(), {
    floor: (u) => o(Math.floor(i(u))),
    ceil: (u) => o(Math.ceil(i(u)))
  })), n;
}
function so() {
  const e = il(cr()).domain([1, 10]);
  return e.copy = () => _t(e, so()).base(e.base()), An.apply(e, arguments), e;
}
function ei(e) {
  return function(n) {
    return Math.sign(n) * Math.log1p(Math.abs(n / e));
  };
}
function ni(e) {
  return function(n) {
    return Math.sign(n) * Math.expm1(Math.abs(n)) * e;
  };
}
function ol(e) {
  var n = 1, t = e(ei(n), ni(n));
  return t.constant = function(r) {
    return arguments.length ? e(ei(n = +r), ni(n)) : n;
  }, oo(t);
}
function lo() {
  var e = ol(cr());
  return e.copy = function() {
    return _t(e, lo()).constant(e.constant());
  }, An.apply(e, arguments);
}
const jt = /* @__PURE__ */ new Date(), Et = /* @__PURE__ */ new Date();
function ae(e, n, t, r) {
  function i(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return i.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), i.ceil = (o) => (e(o = new Date(o - 1)), n(o, 1), e(o), o), i.round = (o) => {
    const a = i(o), u = i.ceil(o);
    return o - a < u - o ? a : u;
  }, i.offset = (o, a) => (n(o = /* @__PURE__ */ new Date(+o), a == null ? 1 : Math.floor(a)), o), i.range = (o, a, u) => {
    const s = [];
    if (o = i.ceil(o), u = u == null ? 1 : Math.floor(u), !(o < a) || !(u > 0)) return s;
    let l;
    do
      s.push(l = /* @__PURE__ */ new Date(+o)), n(o, u), e(o);
    while (l < o && o < a);
    return s;
  }, i.filter = (o) => ae((a) => {
    if (a >= a) for (; e(a), !o(a); ) a.setTime(a - 1);
  }, (a, u) => {
    if (a >= a)
      if (u < 0) for (; ++u <= 0; )
        for (; n(a, -1), !o(a); )
          ;
      else for (; --u >= 0; )
        for (; n(a, 1), !o(a); )
          ;
  }), t && (i.count = (o, a) => (jt.setTime(+o), Et.setTime(+a), e(jt), e(Et), Math.floor(t(jt, Et))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? (a) => r(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const mt = ae(() => {
}, (e, n) => {
  e.setTime(+e + n);
}, (e, n) => n - e);
mt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ae((n) => {
  n.setTime(Math.floor(n / e) * e);
}, (n, t) => {
  n.setTime(+n + t * e);
}, (n, t) => (t - n) / e) : mt);
mt.range;
const Ye = 1e3, xe = Ye * 60, Oe = xe * 60, Le = Oe * 24, dr = Le * 7, ti = Le * 30, Wt = Le * 365, un = ae((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, n) => {
  e.setTime(+e + n * Ye);
}, (e, n) => (n - e) / Ye, (e) => e.getUTCSeconds());
un.range;
const mr = ae((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ye);
}, (e, n) => {
  e.setTime(+e + n * xe);
}, (e, n) => (n - e) / xe, (e) => e.getMinutes());
mr.range;
const gr = ae((e) => {
  e.setUTCSeconds(0, 0);
}, (e, n) => {
  e.setTime(+e + n * xe);
}, (e, n) => (n - e) / xe, (e) => e.getUTCMinutes());
gr.range;
const br = ae((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ye - e.getMinutes() * xe);
}, (e, n) => {
  e.setTime(+e + n * Oe);
}, (e, n) => (n - e) / Oe, (e) => e.getHours());
br.range;
const yr = ae((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, n) => {
  e.setTime(+e + n * Oe);
}, (e, n) => (n - e) / Oe, (e) => e.getUTCHours());
yr.range;
const Gn = ae(
  (e) => e.setHours(0, 0, 0, 0),
  (e, n) => e.setDate(e.getDate() + n),
  (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * xe) / Le,
  (e) => e.getDate() - 1
);
Gn.range;
const Ct = ae((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCDate(e.getUTCDate() + n);
}, (e, n) => (n - e) / Le, (e) => e.getUTCDate() - 1);
Ct.range;
const co = ae((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCDate(e.getUTCDate() + n);
}, (e, n) => (n - e) / Le, (e) => Math.floor(e / Le));
co.range;
function hn(e) {
  return ae((n) => {
    n.setDate(n.getDate() - (n.getDay() + 7 - e) % 7), n.setHours(0, 0, 0, 0);
  }, (n, t) => {
    n.setDate(n.getDate() + t * 7);
  }, (n, t) => (t - n - (t.getTimezoneOffset() - n.getTimezoneOffset()) * xe) / dr);
}
const kt = hn(0), gt = hn(1), al = hn(2), ul = hn(3), Sn = hn(4), sl = hn(5), ll = hn(6);
kt.range;
gt.range;
al.range;
ul.range;
Sn.range;
sl.range;
ll.range;
function dn(e) {
  return ae((n) => {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - e) % 7), n.setUTCHours(0, 0, 0, 0);
  }, (n, t) => {
    n.setUTCDate(n.getUTCDate() + t * 7);
  }, (n, t) => (t - n) / dr);
}
const St = dn(0), bt = dn(1), cl = dn(2), fl = dn(3), $n = dn(4), hl = dn(5), dl = dn(6);
St.range;
bt.range;
cl.range;
fl.range;
$n.range;
hl.range;
dl.range;
const vr = ae((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setMonth(e.getMonth() + n);
}, (e, n) => n.getMonth() - e.getMonth() + (n.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
vr.range;
const pr = ae((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCMonth(e.getUTCMonth() + n);
}, (e, n) => n.getUTCMonth() - e.getUTCMonth() + (n.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
pr.range;
const He = ae((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n);
}, (e, n) => n.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
He.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ae((n) => {
  n.setFullYear(Math.floor(n.getFullYear() / e) * e), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
}, (n, t) => {
  n.setFullYear(n.getFullYear() + t * e);
});
He.range;
const Ie = ae((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n);
}, (e, n) => n.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Ie.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ae((n) => {
  n.setUTCFullYear(Math.floor(n.getUTCFullYear() / e) * e), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
}, (n, t) => {
  n.setUTCFullYear(n.getUTCFullYear() + t * e);
});
Ie.range;
function fo(e, n, t, r, i, o) {
  const a = [
    [un, 1, Ye],
    [un, 5, 5 * Ye],
    [un, 15, 15 * Ye],
    [un, 30, 30 * Ye],
    [o, 1, xe],
    [o, 5, 5 * xe],
    [o, 15, 15 * xe],
    [o, 30, 30 * xe],
    [i, 1, Oe],
    [i, 3, 3 * Oe],
    [i, 6, 6 * Oe],
    [i, 12, 12 * Oe],
    [r, 1, Le],
    [r, 2, 2 * Le],
    [t, 1, dr],
    [n, 1, ti],
    [n, 3, 3 * ti],
    [e, 1, Wt]
  ];
  function u(l, h, c) {
    const f = h < l;
    f && ([l, h] = [h, l]);
    const d = c && typeof c.range == "function" ? c : s(l, h, c), g = d ? d.range(l, +h + 1) : [];
    return f ? g.reverse() : g;
  }
  function s(l, h, c) {
    const f = Math.abs(h - l) / c, d = sr(([, , b]) => b).right(a, f);
    if (d === a.length) return e.every(Vt(l / Wt, h / Wt, c));
    if (d === 0) return mt.every(Math.max(Vt(l, h, c), 1));
    const [g, m] = a[f / a[d - 1][2] < a[d][2] / f ? d - 1 : d];
    return g.every(m);
  }
  return [u, s];
}
const [ml, gl] = fo(Ie, pr, St, co, yr, gr), [bl, yl] = fo(He, vr, kt, Gn, br, mr);
function Yt(e) {
  if (0 <= e.y && e.y < 100) {
    var n = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return n.setFullYear(e.y), n;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ot(e) {
  if (0 <= e.y && e.y < 100) {
    var n = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return n.setUTCFullYear(e.y), n;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Pn(e, n, t) {
  return { y: e, m: n, d: t, H: 0, M: 0, S: 0, L: 0 };
}
function vl(e) {
  var n = e.dateTime, t = e.date, r = e.time, i = e.periods, o = e.days, a = e.shortDays, u = e.months, s = e.shortMonths, l = Ln(i), h = Hn(i), c = Ln(o), f = Hn(o), d = Ln(a), g = Hn(a), m = Ln(u), b = Hn(u), y = Ln(s), w = Hn(s), S = {
    a: H,
    A: I,
    b: Y,
    B,
    c: null,
    d: si,
    e: si,
    f: Il,
    g: Zl,
    G: Jl,
    H: Pl,
    I: Ll,
    j: Hl,
    L: ho,
    m: Bl,
    M: zl,
    p: X,
    q: Q,
    Q: fi,
    s: hi,
    S: Nl,
    u: Rl,
    U: Xl,
    V: Gl,
    w: ql,
    W: Vl,
    x: null,
    X: null,
    y: Kl,
    Y: Ql,
    Z: ec,
    "%": ci
  }, _ = {
    a: ne,
    A: J,
    b: ie,
    B: V,
    c: null,
    d: li,
    e: li,
    f: ic,
    g: mc,
    G: bc,
    H: nc,
    I: tc,
    j: rc,
    L: go,
    m: oc,
    M: ac,
    p: oe,
    q: L,
    Q: fi,
    s: hi,
    S: uc,
    u: sc,
    U: lc,
    V: cc,
    w: fc,
    W: hc,
    x: null,
    X: null,
    y: dc,
    Y: gc,
    Z: yc,
    "%": ci
  }, A = {
    a: C,
    A: k,
    b: T,
    B: $,
    c: E,
    d: ai,
    e: ai,
    f: El,
    g: oi,
    G: ii,
    H: ui,
    I: ui,
    j: Al,
    L: jl,
    m: Ul,
    M: Fl,
    p: x,
    q: $l,
    Q: Yl,
    s: Ol,
    S: Dl,
    u: Tl,
    U: _l,
    V: Cl,
    w: wl,
    W: kl,
    x: O,
    X: W,
    y: oi,
    Y: ii,
    Z: Sl,
    "%": Wl
  };
  S.x = v(t, S), S.X = v(r, S), S.c = v(n, S), _.x = v(t, _), _.X = v(r, _), _.c = v(n, _);
  function v(p, F) {
    return function(P) {
      var M = [], R = -1, N = 0, Z = p.length, G, te, fe;
      for (P instanceof Date || (P = /* @__PURE__ */ new Date(+P)); ++R < Z; )
        p.charCodeAt(R) === 37 && (M.push(p.slice(N, R)), (te = ri[G = p.charAt(++R)]) != null ? G = p.charAt(++R) : te = G === "e" ? " " : "0", (fe = F[G]) && (G = fe(P, te)), M.push(G), N = R + 1);
      return M.push(p.slice(N, R)), M.join("");
    };
  }
  function D(p, F) {
    return function(P) {
      var M = Pn(1900, void 0, 1), R = U(M, p, P += "", 0), N, Z;
      if (R != P.length) return null;
      if ("Q" in M) return new Date(M.Q);
      if ("s" in M) return new Date(M.s * 1e3 + ("L" in M ? M.L : 0));
      if (F && !("Z" in M) && (M.Z = 0), "p" in M && (M.H = M.H % 12 + M.p * 12), M.m === void 0 && (M.m = "q" in M ? M.q : 0), "V" in M) {
        if (M.V < 1 || M.V > 53) return null;
        "w" in M || (M.w = 1), "Z" in M ? (N = Ot(Pn(M.y, 0, 1)), Z = N.getUTCDay(), N = Z > 4 || Z === 0 ? bt.ceil(N) : bt(N), N = Ct.offset(N, (M.V - 1) * 7), M.y = N.getUTCFullYear(), M.m = N.getUTCMonth(), M.d = N.getUTCDate() + (M.w + 6) % 7) : (N = Yt(Pn(M.y, 0, 1)), Z = N.getDay(), N = Z > 4 || Z === 0 ? gt.ceil(N) : gt(N), N = Gn.offset(N, (M.V - 1) * 7), M.y = N.getFullYear(), M.m = N.getMonth(), M.d = N.getDate() + (M.w + 6) % 7);
      } else ("W" in M || "U" in M) && ("w" in M || (M.w = "u" in M ? M.u % 7 : "W" in M ? 1 : 0), Z = "Z" in M ? Ot(Pn(M.y, 0, 1)).getUTCDay() : Yt(Pn(M.y, 0, 1)).getDay(), M.m = 0, M.d = "W" in M ? (M.w + 6) % 7 + M.W * 7 - (Z + 5) % 7 : M.w + M.U * 7 - (Z + 6) % 7);
      return "Z" in M ? (M.H += M.Z / 100 | 0, M.M += M.Z % 100, Ot(M)) : Yt(M);
    };
  }
  function U(p, F, P, M) {
    for (var R = 0, N = F.length, Z = P.length, G, te; R < N; ) {
      if (M >= Z) return -1;
      if (G = F.charCodeAt(R++), G === 37) {
        if (G = F.charAt(R++), te = A[G in ri ? F.charAt(R++) : G], !te || (M = te(p, P, M)) < 0) return -1;
      } else if (G != P.charCodeAt(M++))
        return -1;
    }
    return M;
  }
  function x(p, F, P) {
    var M = l.exec(F.slice(P));
    return M ? (p.p = h.get(M[0].toLowerCase()), P + M[0].length) : -1;
  }
  function C(p, F, P) {
    var M = d.exec(F.slice(P));
    return M ? (p.w = g.get(M[0].toLowerCase()), P + M[0].length) : -1;
  }
  function k(p, F, P) {
    var M = c.exec(F.slice(P));
    return M ? (p.w = f.get(M[0].toLowerCase()), P + M[0].length) : -1;
  }
  function T(p, F, P) {
    var M = y.exec(F.slice(P));
    return M ? (p.m = w.get(M[0].toLowerCase()), P + M[0].length) : -1;
  }
  function $(p, F, P) {
    var M = m.exec(F.slice(P));
    return M ? (p.m = b.get(M[0].toLowerCase()), P + M[0].length) : -1;
  }
  function E(p, F, P) {
    return U(p, n, F, P);
  }
  function O(p, F, P) {
    return U(p, t, F, P);
  }
  function W(p, F, P) {
    return U(p, r, F, P);
  }
  function H(p) {
    return a[p.getDay()];
  }
  function I(p) {
    return o[p.getDay()];
  }
  function Y(p) {
    return s[p.getMonth()];
  }
  function B(p) {
    return u[p.getMonth()];
  }
  function X(p) {
    return i[+(p.getHours() >= 12)];
  }
  function Q(p) {
    return 1 + ~~(p.getMonth() / 3);
  }
  function ne(p) {
    return a[p.getUTCDay()];
  }
  function J(p) {
    return o[p.getUTCDay()];
  }
  function ie(p) {
    return s[p.getUTCMonth()];
  }
  function V(p) {
    return u[p.getUTCMonth()];
  }
  function oe(p) {
    return i[+(p.getUTCHours() >= 12)];
  }
  function L(p) {
    return 1 + ~~(p.getUTCMonth() / 3);
  }
  return {
    format: function(p) {
      var F = v(p += "", S);
      return F.toString = function() {
        return p;
      }, F;
    },
    parse: function(p) {
      var F = D(p += "", !1);
      return F.toString = function() {
        return p;
      }, F;
    },
    utcFormat: function(p) {
      var F = v(p += "", _);
      return F.toString = function() {
        return p;
      }, F;
    },
    utcParse: function(p) {
      var F = D(p += "", !0);
      return F.toString = function() {
        return p;
      }, F;
    }
  };
}
var ri = { "-": "", _: " ", 0: "0" }, se = /^\s*\d+/, pl = /^%/, xl = /[\\^$*+?|[\]().{}]/g;
function q(e, n, t) {
  var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", o = i.length;
  return r + (o < t ? new Array(t - o + 1).join(n) + i : i);
}
function Ml(e) {
  return e.replace(xl, "\\$&");
}
function Ln(e) {
  return new RegExp("^(?:" + e.map(Ml).join("|") + ")", "i");
}
function Hn(e) {
  return new Map(e.map((n, t) => [n.toLowerCase(), t]));
}
function wl(e, n, t) {
  var r = se.exec(n.slice(t, t + 1));
  return r ? (e.w = +r[0], t + r[0].length) : -1;
}
function Tl(e, n, t) {
  var r = se.exec(n.slice(t, t + 1));
  return r ? (e.u = +r[0], t + r[0].length) : -1;
}
function _l(e, n, t) {
  var r = se.exec(n.slice(t, t + 2));
  return r ? (e.U = +r[0], t + r[0].length) : -1;
}
function Cl(e, n, t) {
  var r = se.exec(n.slice(t, t + 2));
  return r ? (e.V = +r[0], t + r[0].length) : -1;
}
function kl(e, n, t) {
  var r = se.exec(n.slice(t, t + 2));
  return r ? (e.W = +r[0], t + r[0].length) : -1;
}
function ii(e, n, t) {
  var r = se.exec(n.slice(t, t + 4));
  return r ? (e.y = +r[0], t + r[0].length) : -1;
}
function oi(e, n, t) {
  var r = se.exec(n.slice(t, t + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), t + r[0].length) : -1;
}
function Sl(e, n, t) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(t, t + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), t + r[0].length) : -1;
}
function $l(e, n, t) {
  var r = se.exec(n.slice(t, t + 1));
  return r ? (e.q = r[0] * 3 - 3, t + r[0].length) : -1;
}
function Ul(e, n, t) {
  var r = se.exec(n.slice(t, t + 2));
  return r ? (e.m = r[0] - 1, t + r[0].length) : -1;
}
function ai(e, n, t) {
  var r = se.exec(n.slice(t, t + 2));
  return r ? (e.d = +r[0], t + r[0].length) : -1;
}
function Al(e, n, t) {
  var r = se.exec(n.slice(t, t + 3));
  return r ? (e.m = 0, e.d = +r[0], t + r[0].length) : -1;
}
function ui(e, n, t) {
  var r = se.exec(n.slice(t, t + 2));
  return r ? (e.H = +r[0], t + r[0].length) : -1;
}
function Fl(e, n, t) {
  var r = se.exec(n.slice(t, t + 2));
  return r ? (e.M = +r[0], t + r[0].length) : -1;
}
function Dl(e, n, t) {
  var r = se.exec(n.slice(t, t + 2));
  return r ? (e.S = +r[0], t + r[0].length) : -1;
}
function jl(e, n, t) {
  var r = se.exec(n.slice(t, t + 3));
  return r ? (e.L = +r[0], t + r[0].length) : -1;
}
function El(e, n, t) {
  var r = se.exec(n.slice(t, t + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), t + r[0].length) : -1;
}
function Wl(e, n, t) {
  var r = pl.exec(n.slice(t, t + 1));
  return r ? t + r[0].length : -1;
}
function Yl(e, n, t) {
  var r = se.exec(n.slice(t));
  return r ? (e.Q = +r[0], t + r[0].length) : -1;
}
function Ol(e, n, t) {
  var r = se.exec(n.slice(t));
  return r ? (e.s = +r[0], t + r[0].length) : -1;
}
function si(e, n) {
  return q(e.getDate(), n, 2);
}
function Pl(e, n) {
  return q(e.getHours(), n, 2);
}
function Ll(e, n) {
  return q(e.getHours() % 12 || 12, n, 2);
}
function Hl(e, n) {
  return q(1 + Gn.count(He(e), e), n, 3);
}
function ho(e, n) {
  return q(e.getMilliseconds(), n, 3);
}
function Il(e, n) {
  return ho(e, n) + "000";
}
function Bl(e, n) {
  return q(e.getMonth() + 1, n, 2);
}
function zl(e, n) {
  return q(e.getMinutes(), n, 2);
}
function Nl(e, n) {
  return q(e.getSeconds(), n, 2);
}
function Rl(e) {
  var n = e.getDay();
  return n === 0 ? 7 : n;
}
function Xl(e, n) {
  return q(kt.count(He(e) - 1, e), n, 2);
}
function mo(e) {
  var n = e.getDay();
  return n >= 4 || n === 0 ? Sn(e) : Sn.ceil(e);
}
function Gl(e, n) {
  return e = mo(e), q(Sn.count(He(e), e) + (He(e).getDay() === 4), n, 2);
}
function ql(e) {
  return e.getDay();
}
function Vl(e, n) {
  return q(gt.count(He(e) - 1, e), n, 2);
}
function Kl(e, n) {
  return q(e.getFullYear() % 100, n, 2);
}
function Zl(e, n) {
  return e = mo(e), q(e.getFullYear() % 100, n, 2);
}
function Ql(e, n) {
  return q(e.getFullYear() % 1e4, n, 4);
}
function Jl(e, n) {
  var t = e.getDay();
  return e = t >= 4 || t === 0 ? Sn(e) : Sn.ceil(e), q(e.getFullYear() % 1e4, n, 4);
}
function ec(e) {
  var n = e.getTimezoneOffset();
  return (n > 0 ? "-" : (n *= -1, "+")) + q(n / 60 | 0, "0", 2) + q(n % 60, "0", 2);
}
function li(e, n) {
  return q(e.getUTCDate(), n, 2);
}
function nc(e, n) {
  return q(e.getUTCHours(), n, 2);
}
function tc(e, n) {
  return q(e.getUTCHours() % 12 || 12, n, 2);
}
function rc(e, n) {
  return q(1 + Ct.count(Ie(e), e), n, 3);
}
function go(e, n) {
  return q(e.getUTCMilliseconds(), n, 3);
}
function ic(e, n) {
  return go(e, n) + "000";
}
function oc(e, n) {
  return q(e.getUTCMonth() + 1, n, 2);
}
function ac(e, n) {
  return q(e.getUTCMinutes(), n, 2);
}
function uc(e, n) {
  return q(e.getUTCSeconds(), n, 2);
}
function sc(e) {
  var n = e.getUTCDay();
  return n === 0 ? 7 : n;
}
function lc(e, n) {
  return q(St.count(Ie(e) - 1, e), n, 2);
}
function bo(e) {
  var n = e.getUTCDay();
  return n >= 4 || n === 0 ? $n(e) : $n.ceil(e);
}
function cc(e, n) {
  return e = bo(e), q($n.count(Ie(e), e) + (Ie(e).getUTCDay() === 4), n, 2);
}
function fc(e) {
  return e.getUTCDay();
}
function hc(e, n) {
  return q(bt.count(Ie(e) - 1, e), n, 2);
}
function dc(e, n) {
  return q(e.getUTCFullYear() % 100, n, 2);
}
function mc(e, n) {
  return e = bo(e), q(e.getUTCFullYear() % 100, n, 2);
}
function gc(e, n) {
  return q(e.getUTCFullYear() % 1e4, n, 4);
}
function bc(e, n) {
  var t = e.getUTCDay();
  return e = t >= 4 || t === 0 ? $n(e) : $n.ceil(e), q(e.getUTCFullYear() % 1e4, n, 4);
}
function yc() {
  return "+0000";
}
function ci() {
  return "%";
}
function fi(e) {
  return +e;
}
function hi(e) {
  return Math.floor(+e / 1e3);
}
var xn, yo, vo;
vc({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function vc(e) {
  return xn = vl(e), yo = xn.format, xn.parse, vo = xn.utcFormat, xn.utcParse, xn;
}
function pc(e) {
  return new Date(e);
}
function xc(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function xr(e, n, t, r, i, o, a, u, s, l) {
  var h = ro(), c = h.invert, f = h.domain, d = l(".%L"), g = l(":%S"), m = l("%I:%M"), b = l("%I %p"), y = l("%a %d"), w = l("%b %d"), S = l("%B"), _ = l("%Y");
  function A(v) {
    return (s(v) < v ? d : u(v) < v ? g : a(v) < v ? m : o(v) < v ? b : r(v) < v ? i(v) < v ? y : w : t(v) < v ? S : _)(v);
  }
  return h.invert = function(v) {
    return new Date(c(v));
  }, h.domain = function(v) {
    return arguments.length ? f(Array.from(v, xc)) : f().map(pc);
  }, h.ticks = function(v) {
    var D = f();
    return e(D[0], D[D.length - 1], v ?? 10);
  }, h.tickFormat = function(v, D) {
    return D == null ? A : l(D);
  }, h.nice = function(v) {
    var D = f();
    return (!v || typeof v.range != "function") && (v = n(D[0], D[D.length - 1], v ?? 10)), v ? f(uo(D, v)) : h;
  }, h.copy = function() {
    return _t(h, xr(e, n, t, r, i, o, a, u, s, l));
  }, h;
}
function Mc() {
  return An.apply(xr(bl, yl, He, vr, kt, Gn, br, mr, un, yo).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function wc() {
  return An.apply(xr(ml, gl, Ie, pr, St, Ct, yr, gr, un, vo).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
const Tc = ye("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), _c = ye("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Cc = ye("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), kc = ye("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Sc = ye("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), $c = ye("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Uc = ye("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Ac = ye("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Fc = ye("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function Dc(e) {
  return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - e * (35.34 - e * (2381.73 - e * (6402.7 - e * (7024.72 - e * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + e * (170.73 + e * (52.82 - e * (131.46 - e * (176.58 - e * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + e * (442.36 - e * (2482.43 - e * (6167.24 - e * (6614.94 - e * 2475.67))))))) + ")";
}
const jc = ur(Se(300, 0.5, 0), Se(-240, 0.5, 1));
var Ec = ur(Se(-100, 0.75, 0.35), Se(80, 1.5, 0.8)), Wc = ur(Se(260, 0.75, 0.35), Se(80, 1.5, 0.8)), it = Se();
function Yc(e) {
  (e < 0 || e > 1) && (e -= Math.floor(e));
  var n = Math.abs(e - 0.5);
  return it.h = 360 * e - 100, it.s = 1.5 - 1.5 * n, it.l = 0.8 - 0.9 * n, it + "";
}
var ot = ji(), Oc = Math.PI / 3, Pc = Math.PI * 2 / 3;
function Lc(e) {
  var n;
  return e = (0.5 - e) * Math.PI, ot.r = 255 * (n = Math.sin(e)) * n, ot.g = 255 * (n = Math.sin(e + Oc)) * n, ot.b = 255 * (n = Math.sin(e + Pc)) * n, ot + "";
}
function Hc(e) {
  return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + e * (1172.33 - e * (10793.56 - e * (33300.12 - e * (38394.49 - e * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + e * (557.33 + e * (1225.33 - e * (3574.96 - e * (1073.77 + e * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + e * (3211.1 - e * (15327.97 - e * (27814 - e * (22569.18 - e * 6838.66))))))) + ")";
}
function $t(e) {
  var n = e.length;
  return function(t) {
    return e[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}
const Ic = $t(ye("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var Bc = $t(ye("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), zc = $t(ye("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Nc = $t(ye("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function yt() {
  return yt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, yt.apply(this, arguments);
}
function di(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function Rc(e, n) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t) return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = function(i, o) {
    if (i) {
      if (typeof i == "string") return di(i, o);
      var a = Object.prototype.toString.call(i).slice(8, -1);
      return a === "Object" && i.constructor && (a = i.constructor.name), a === "Map" || a === "Set" ? Array.from(i) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? di(i, o) : void 0;
    }
  }(e)) || n) {
    t && (e = t);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var po = { nivo: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb", "#97e3d5"], category10: Tc, accent: _c, dark2: Cc, paired: kc, pastel1: Sc, pastel2: $c, set1: Uc, set2: Ac, set3: Ta, tableau10: Fc }, Xc = Object.keys(po), xo = { brown_blueGreen: Da, purpleRed_green: Fa, pink_yellowGreen: Aa, purple_orange: Ua, red_blue: $a, red_grey: Sa, red_yellow_blue: ka, red_yellow_green: Ca, spectral: _a }, Gc = Object.keys(xo), qc = { brown_blueGreen: ou, purpleRed_green: iu, pink_yellowGreen: ru, purple_orange: tu, red_blue: nu, red_grey: eu, red_yellow_blue: Ja, red_yellow_green: Qa, spectral: Za }, Mo = { blues: Ka, greens: Va, greys: qa, oranges: Ga, purples: Xa, reds: Ra, blue_green: Na, blue_purple: za, green_blue: Ba, orange_red: Ia, purple_blue_green: Ha, purple_blue: La, purple_red: Pa, red_purple: Oa, yellow_green_blue: Ya, yellow_green: Wa, yellow_orange_brown: Ea, yellow_orange_red: ja }, Vc = Object.keys(Mo), Kc = { blues: Tu, greens: wu, greys: Mu, oranges: xu, purples: pu, reds: vu, turbo: Hc, viridis: Ic, inferno: zc, magma: Bc, plasma: Nc, cividis: Dc, warm: Ec, cool: Wc, cubehelixDefault: jc, blue_green: yu, blue_purple: bu, green_blue: gu, orange_red: mu, purple_blue_green: du, purple_blue: hu, purple_red: fu, red_purple: cu, yellow_green_blue: lu, yellow_green: su, yellow_orange_brown: uu, yellow_orange_red: au }, Pt = yt({}, po, xo, Mo), Zc = function(e) {
  return Xc.includes(e);
}, Qc = function(e) {
  return Gc.includes(e);
}, Jc = function(e) {
  return Vc.includes(e);
}, ef = { rainbow: Yc, sinebow: Lc };
yt({}, qc, Kc, ef);
var nf = function(e, n) {
  if (typeof e == "function") return e;
  if (Ei(e)) {
    if (function(s) {
      return s.theme !== void 0;
    }(e)) {
      if (n === void 0) throw new Error("Unable to use color from theme as no theme was provided");
      var t = ct(n, e.theme);
      if (t === void 0) throw new Error("Color from theme is undefined at path: '" + e.theme + "'");
      return function() {
        return t;
      };
    }
    if (function(s) {
      return s.from !== void 0;
    }(e)) {
      var r = function(s) {
        return ct(s, e.from);
      };
      if (Array.isArray(e.modifiers)) {
        for (var i, o = [], a = function() {
          var s = i.value, l = s[0], h = s[1];
          if (l === "brighter") o.push(function(c) {
            return c.brighter(h);
          });
          else if (l === "darker") o.push(function(c) {
            return c.darker(h);
          });
          else {
            if (l !== "opacity") throw new Error("Invalid color modifier: '" + l + "', must be one of: 'brighter', 'darker', 'opacity'");
            o.push(function(c) {
              return c.opacity = h, c;
            });
          }
        }, u = Rc(e.modifiers); !(i = u()).done; ) a();
        return o.length === 0 ? r : function(s) {
          return o.reduce(function(l, h) {
            return h(l);
          }, ji(r(s))).toString();
        };
      }
      return r;
    }
    throw new Error("Invalid color spec, you should either specify 'theme' or 'from' when using a config object");
  }
  return function() {
    return e;
  };
}, vt = function(e, n) {
  return le(function() {
    return nf(e, n);
  }, [e, n]);
};
Ee.oneOfType([Ee.string, Ee.func, Ee.shape({ theme: Ee.string.isRequired }), Ee.shape({ from: Ee.string.isRequired, modifiers: Ee.arrayOf(Ee.array) })]);
var tf = function(e, n) {
  if (typeof e == "function") return e;
  var t = function(c) {
    return ct(c, n);
  };
  if (Array.isArray(e)) {
    var r = Bn(e), i = function(c) {
      return r(t(c));
    };
    return i.scale = r, i;
  }
  if (Ei(e)) {
    if (function(c) {
      return c.datum !== void 0;
    }(e)) return function(c) {
      return ct(c, e.datum);
    };
    if (function(c) {
      return c.scheme !== void 0;
    }(e)) {
      if (Zc(e.scheme)) {
        var o = Bn(Pt[e.scheme]), a = function(c) {
          return o(t(c));
        };
        return a.scale = o, a;
      }
      if (Qc(e.scheme)) {
        if (e.size !== void 0 && (e.size < 3 || e.size > 11)) throw new Error("Invalid size '" + e.size + "' for diverging color scheme '" + e.scheme + "', must be between 3~11");
        var u = Bn(Pt[e.scheme][e.size || 11]), s = function(c) {
          return u(t(c));
        };
        return s.scale = u, s;
      }
      if (Jc(e.scheme)) {
        if (e.size !== void 0 && (e.size < 3 || e.size > 9)) throw new Error("Invalid size '" + e.size + "' for sequential color scheme '" + e.scheme + "', must be between 3~9");
        var l = Bn(Pt[e.scheme][e.size || 9]), h = function(c) {
          return l(t(c));
        };
        return h.scale = l, h;
      }
    }
    throw new Error("Invalid colors, when using an object, you should either pass a 'datum' or a 'scheme' property");
  }
  return function() {
    return e;
  };
}, rf = function(e, n) {
  return le(function() {
    return tf(e, n);
  }, [e, n]);
};
function of() {
}
var af = of, Lt = _u, uf = af, sf = Wi, lf = 1 / 0, cf = Lt && 1 / sf(new Lt([, -0]))[1] == lf ? function(e) {
  return new Lt(e);
} : uf, ff = cf, hf = Cu, df = ku, mf = Su, gf = $u, bf = ff, yf = Wi, vf = 200;
function pf(e, n, t) {
  var r = -1, i = df, o = e.length, a = !0, u = [], s = u;
  if (t)
    a = !1, i = mf;
  else if (o >= vf) {
    var l = n ? null : bf(e);
    if (l)
      return yf(l);
    a = !1, i = gf, s = new hf();
  } else
    s = n ? [] : u;
  e:
    for (; ++r < o; ) {
      var h = e[r], c = n ? n(h) : h;
      if (h = t || h !== 0 ? h : 0, a && c === c) {
        for (var f = s.length; f--; )
          if (s[f] === c)
            continue e;
        n && s.push(c), u.push(h);
      } else i(s, c, t) || (s !== u && s.push(c), u.push(h));
    }
  return u;
}
var wo = pf, xf = wo;
function Mf(e) {
  return e && e.length ? xf(e) : [];
}
var wf = Mf;
const mi = /* @__PURE__ */ Xn(wf);
var Tf = Uu, _f = Yi, Cf = 1, kf = 2;
function Sf(e, n, t, r) {
  var i = t.length, o = i, a = !r;
  if (e == null)
    return !o;
  for (e = Object(e); i--; ) {
    var u = t[i];
    if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e))
      return !1;
  }
  for (; ++i < o; ) {
    u = t[i];
    var s = u[0], l = e[s], h = u[1];
    if (a && u[2]) {
      if (l === void 0 && !(s in e))
        return !1;
    } else {
      var c = new Tf();
      if (r)
        var f = r(l, h, s, e, n, c);
      if (!(f === void 0 ? _f(h, l, Cf | kf, r, c) : f))
        return !1;
    }
  }
  return !0;
}
var $f = Sf, Uf = Au;
function Af(e) {
  return e === e && !Uf(e);
}
var To = Af, Ff = To, Df = Oi;
function jf(e) {
  for (var n = Df(e), t = n.length; t--; ) {
    var r = n[t], i = e[r];
    n[t] = [r, i, Ff(i)];
  }
  return n;
}
var Ef = jf;
function Wf(e, n) {
  return function(t) {
    return t == null ? !1 : t[e] === n && (n !== void 0 || e in Object(t));
  };
}
var _o = Wf, Yf = $f, Of = Ef, Pf = _o;
function Lf(e) {
  var n = Of(e);
  return n.length == 1 && n[0][2] ? Pf(n[0][0], n[0][1]) : function(t) {
    return t === e || Yf(t, e, n);
  };
}
var Hf = Lf, If = Yi, Bf = Fu, zf = Du, Nf = Pi, Rf = To, Xf = _o, Gf = Li, qf = 1, Vf = 2;
function Kf(e, n) {
  return Nf(e) && Rf(n) ? Xf(Gf(e), n) : function(t) {
    var r = Bf(t, e);
    return r === void 0 && r === n ? zf(t, e) : If(n, r, qf | Vf);
  };
}
var Zf = Kf;
function Qf(e) {
  return function(n) {
    return n == null ? void 0 : n[e];
  };
}
var Jf = Qf, eh = Hi;
function nh(e) {
  return function(n) {
    return eh(n, e);
  };
}
var th = nh, rh = Jf, ih = th, oh = Pi, ah = Li;
function uh(e) {
  return oh(e) ? rh(ah(e)) : ih(e);
}
var sh = uh, lh = Hf, ch = Zf, fh = Ii, hh = Bi, dh = sh;
function mh(e) {
  return typeof e == "function" ? e : e == null ? fh : typeof e == "object" ? hh(e) ? ch(e[0], e[1]) : lh(e) : dh(e);
}
var Co = mh, gh = Co, bh = wo;
function yh(e, n) {
  return e && e.length ? bh(e, gh(n)) : [];
}
var vh = yh;
const ph = /* @__PURE__ */ Xn(vh);
var xh = ju, Mh = Oi;
function wh(e, n) {
  return e && xh(e, n, Mh);
}
var Th = wh, _h = zi;
function Ch(e, n) {
  return function(t, r) {
    if (t == null)
      return t;
    if (!_h(t))
      return e(t, r);
    for (var i = t.length, o = n ? i : -1, a = Object(t); (n ? o-- : ++o < i) && r(a[o], o, a) !== !1; )
      ;
    return t;
  };
}
var kh = Ch, Sh = Th, $h = kh, Uh = $h(Sh), Ah = Uh, Fh = Ah, Dh = zi;
function jh(e, n) {
  var t = -1, r = Dh(e) ? Array(e.length) : [];
  return Fh(e, function(i, o, a) {
    r[++t] = n(i, o, a);
  }), r;
}
var Eh = jh;
function Wh(e, n) {
  var t = e.length;
  for (e.sort(n); t--; )
    e[t] = e[t].value;
  return e;
}
var Yh = Wh, gi = Eu;
function Oh(e, n) {
  if (e !== n) {
    var t = e !== void 0, r = e === null, i = e === e, o = gi(e), a = n !== void 0, u = n === null, s = n === n, l = gi(n);
    if (!u && !l && !o && e > n || o && a && s && !u && !l || r && a && s || !t && s || !i)
      return 1;
    if (!r && !o && !l && e < n || l && t && i && !r && !o || u && t && i || !a && i || !s)
      return -1;
  }
  return 0;
}
var Ph = Oh, Lh = Ph;
function Hh(e, n, t) {
  for (var r = -1, i = e.criteria, o = n.criteria, a = i.length, u = t.length; ++r < a; ) {
    var s = Lh(i[r], o[r]);
    if (s) {
      if (r >= u)
        return s;
      var l = t[r];
      return s * (l == "desc" ? -1 : 1);
    }
  }
  return e.index - n.index;
}
var Ih = Hh, Ht = Wu, Bh = Hi, zh = Co, Nh = Eh, Rh = Yh, Xh = Ni, Gh = Ih, qh = Ii, Vh = Bi;
function Kh(e, n, t) {
  n.length ? n = Ht(n, function(o) {
    return Vh(o) ? function(a) {
      return Bh(a, o.length === 1 ? o[0] : o);
    } : o;
  }) : n = [qh];
  var r = -1;
  n = Ht(n, Xh(zh));
  var i = Nh(e, function(o, a, u) {
    var s = Ht(n, function(l) {
      return l(o);
    });
    return { criteria: s, index: ++r, value: o };
  });
  return Rh(i, function(o, a) {
    return Gh(o, a, t);
  });
}
var Zh = Kh, Qh = Pu, Jh = Zh, ed = Yu, bi = Ou, nd = ed(function(e, n) {
  if (e == null)
    return [];
  var t = n.length;
  return t > 1 && bi(e, n[0], n[1]) ? n = [] : t > 2 && bi(n[0], n[1], n[2]) && (n = [n[0]]), Jh(e, Qh(n, 1), []);
}), td = nd;
const rd = /* @__PURE__ */ Xn(td);
var id = Hu, od = Lu, ad = "[object Date]";
function ud(e) {
  return od(e) && id(e) == ad;
}
var sd = ud, ld = sd, cd = Ni, yi = Iu, vi = yi && yi.isDate, fd = vi ? cd(vi) : ld, hd = fd;
const dd = /* @__PURE__ */ Xn(hd);
var It = /* @__PURE__ */ new Date(), Bt = /* @__PURE__ */ new Date();
function ue(e, n, t, r) {
  function i(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return i.floor = function(o) {
    return e(o = /* @__PURE__ */ new Date(+o)), o;
  }, i.ceil = function(o) {
    return e(o = new Date(o - 1)), n(o, 1), e(o), o;
  }, i.round = function(o) {
    var a = i(o), u = i.ceil(o);
    return o - a < u - o ? a : u;
  }, i.offset = function(o, a) {
    return n(o = /* @__PURE__ */ new Date(+o), a == null ? 1 : Math.floor(a)), o;
  }, i.range = function(o, a, u) {
    var s = [], l;
    if (o = i.ceil(o), u = u == null ? 1 : Math.floor(u), !(o < a) || !(u > 0)) return s;
    do
      s.push(l = /* @__PURE__ */ new Date(+o)), n(o, u), e(o);
    while (l < o && o < a);
    return s;
  }, i.filter = function(o) {
    return ue(function(a) {
      if (a >= a) for (; e(a), !o(a); ) a.setTime(a - 1);
    }, function(a, u) {
      if (a >= a)
        if (u < 0) for (; ++u <= 0; )
          for (; n(a, -1), !o(a); )
            ;
        else for (; --u >= 0; )
          for (; n(a, 1), !o(a); )
            ;
    });
  }, t && (i.count = function(o, a) {
    return It.setTime(+o), Bt.setTime(+a), e(It), e(Bt), Math.floor(t(It, Bt));
  }, i.every = function(o) {
    return o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? function(a) {
      return r(a) % o === 0;
    } : function(a) {
      return i.count(0, a) % o === 0;
    }) : i;
  }), i;
}
var Rn = ue(function() {
}, function(e, n) {
  e.setTime(+e + n);
}, function(e, n) {
  return n - e;
});
Rn.every = function(e) {
  return e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ue(function(n) {
    n.setTime(Math.floor(n / e) * e);
  }, function(n, t) {
    n.setTime(+n + t * e);
  }, function(n, t) {
    return (t - n) / e;
  }) : Rn;
};
Rn.range;
var pt = 1e3, Un = 6e4, xt = 36e5, ko = 6048e5, Zt = ue(function(e) {
  e.setTime(e - e.getMilliseconds());
}, function(e, n) {
  e.setTime(+e + n * pt);
}, function(e, n) {
  return (n - e) / pt;
}, function(e) {
  return e.getUTCSeconds();
});
Zt.range;
var So = ue(function(e) {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * pt);
}, function(e, n) {
  e.setTime(+e + n * Un);
}, function(e, n) {
  return (n - e) / Un;
}, function(e) {
  return e.getMinutes();
});
So.range;
var $o = ue(function(e) {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * pt - e.getMinutes() * Un);
}, function(e, n) {
  e.setTime(+e + n * xt);
}, function(e, n) {
  return (n - e) / xt;
}, function(e) {
  return e.getHours();
});
$o.range;
function mn(e) {
  return ue(function(n) {
    n.setDate(n.getDate() - (n.getDay() + 7 - e) % 7), n.setHours(0, 0, 0, 0);
  }, function(n, t) {
    n.setDate(n.getDate() + t * 7);
  }, function(n, t) {
    return (t - n - (t.getTimezoneOffset() - n.getTimezoneOffset()) * Un) / ko;
  });
}
var Qt = mn(0), Uo = mn(1), Ao = mn(2), Fo = mn(3), Do = mn(4), jo = mn(5), Eo = mn(6);
Qt.range;
Uo.range;
Ao.range;
Fo.range;
Do.range;
jo.range;
Eo.range;
var Wo = ue(function(e) {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, function(e, n) {
  e.setMonth(e.getMonth() + n);
}, function(e, n) {
  return n.getMonth() - e.getMonth() + (n.getFullYear() - e.getFullYear()) * 12;
}, function(e) {
  return e.getMonth();
});
Wo.range;
var Mr = ue(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, n) {
  e.setFullYear(e.getFullYear() + n);
}, function(e, n) {
  return n.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Mr.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ue(function(n) {
    n.setFullYear(Math.floor(n.getFullYear() / e) * e), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
  }, function(n, t) {
    n.setFullYear(n.getFullYear() + t * e);
  });
};
Mr.range;
var Yo = ue(function(e) {
  e.setUTCSeconds(0, 0);
}, function(e, n) {
  e.setTime(+e + n * Un);
}, function(e, n) {
  return (n - e) / Un;
}, function(e) {
  return e.getUTCMinutes();
});
Yo.range;
var Oo = ue(function(e) {
  e.setUTCMinutes(0, 0, 0);
}, function(e, n) {
  e.setTime(+e + n * xt);
}, function(e, n) {
  return (n - e) / xt;
}, function(e) {
  return e.getUTCHours();
});
Oo.range;
function gn(e) {
  return ue(function(n) {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - e) % 7), n.setUTCHours(0, 0, 0, 0);
  }, function(n, t) {
    n.setUTCDate(n.getUTCDate() + t * 7);
  }, function(n, t) {
    return (t - n) / ko;
  });
}
var Jt = gn(0), Po = gn(1), Lo = gn(2), Ho = gn(3), Io = gn(4), Bo = gn(5), zo = gn(6);
Jt.range;
Po.range;
Lo.range;
Ho.range;
Io.range;
Bo.range;
zo.range;
var No = ue(function(e) {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, function(e, n) {
  e.setUTCMonth(e.getUTCMonth() + n);
}, function(e, n) {
  return n.getUTCMonth() - e.getUTCMonth() + (n.getUTCFullYear() - e.getUTCFullYear()) * 12;
}, function(e) {
  return e.getUTCMonth();
});
No.range;
var wr = ue(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, n) {
  e.setUTCFullYear(e.getUTCFullYear() + n);
}, function(e, n) {
  return n.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
wr.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ue(function(n) {
    n.setUTCFullYear(Math.floor(n.getUTCFullYear() / e) * e), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  }, function(n, t) {
    n.setUTCFullYear(n.getUTCFullYear() + t * e);
  });
};
wr.range;
function an() {
  return an = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, an.apply(this, arguments);
}
var Mn = [function(e) {
  return e.setMilliseconds(0);
}, function(e) {
  return e.setSeconds(0);
}, function(e) {
  return e.setMinutes(0);
}, function(e) {
  return e.setHours(0);
}, function(e) {
  return e.setDate(1);
}, function(e) {
  return e.setMonth(0);
}], md = { millisecond: [], second: Mn.slice(0, 1), minute: Mn.slice(0, 2), hour: Mn.slice(0, 3), day: Mn.slice(0, 4), month: Mn.slice(0, 5), year: Mn.slice(0, 6) }, gd = function(e) {
  return function(n) {
    return md[e].forEach(function(t) {
      t(n);
    }), n;
  };
}, Ro = function(e) {
  var n = e.format, t = n === void 0 ? "native" : n, r = e.precision, i = r === void 0 ? "millisecond" : r, o = e.useUTC, a = o === void 0 || o, u = gd(i);
  return function(s) {
    if (s === void 0) return s;
    if (t === "native" || s instanceof Date) return u(s);
    var l = a ? Bu(t) : zu(t);
    return u(l(s));
  };
}, bd = function(e, n, t, r) {
  var i, o, a, u, s = e.min, l = s === void 0 ? 0 : s, h = e.max, c = h === void 0 ? "auto" : h, f = e.stacked, d = f !== void 0 && f, g = e.reverse, m = g !== void 0 && g, b = e.clamp, y = b !== void 0 && b, w = e.nice, S = w !== void 0 && w;
  l === "auto" ? i = d === !0 ? (o = n.minStacked) != null ? o : 0 : n.min : i = l, c === "auto" ? a = d === !0 ? (u = n.maxStacked) != null ? u : 0 : n.max : a = c;
  var _ = ao().rangeRound(r === "x" ? [0, t] : [t, 0]).domain(m ? [a, i] : [i, a]).clamp(y);
  return S === !0 ? _.nice() : typeof S == "number" && _.nice(S), yd(_, d);
}, yd = function(e, n) {
  n === void 0 && (n = !1);
  var t = e;
  return t.type = "linear", t.stacked = n, t;
}, vd = function(e, n, t) {
  var r = Ws().range([0, t]).domain(n.all);
  return r.type = "point", r;
}, pd = function(e, n, t, r) {
  var i = e.round, o = i === void 0 || i, a = lr().range(r === "x" ? [0, t] : [t, 0]).domain(n.all).round(o);
  return xd(a);
}, xd = function(e) {
  var n = e;
  return n.type = "band", n;
}, Md = function(e, n, t) {
  var r, i, o = e.format, a = o === void 0 ? "native" : o, u = e.precision, s = u === void 0 ? "millisecond" : u, l = e.min, h = l === void 0 ? "auto" : l, c = e.max, f = c === void 0 ? "auto" : c, d = e.useUTC, g = d === void 0 || d, m = e.nice, b = m !== void 0 && m, y = Ro({ format: a, precision: s, useUTC: g });
  r = h === "auto" ? y(n.min) : a !== "native" ? y(h) : h, i = f === "auto" ? y(n.max) : a !== "native" ? y(f) : f;
  var w = g ? wc() : Mc();
  w.range([0, t]), r && i && w.domain([r, i]), b === !0 ? w.nice() : typeof b != "object" && typeof b != "number" || w.nice(b);
  var S = w;
  return S.type = "time", S.useUTC = g, S;
}, wd = function(e, n, t, r) {
  var i, o = e.base, a = o === void 0 ? 10 : o, u = e.min, s = u === void 0 ? "auto" : u, l = e.max, h = l === void 0 ? "auto" : l;
  if (n.all.some(function(m) {
    return m === 0;
  })) throw new Error("a log scale domain must not include or cross zero");
  var c, f, d = !1;
  if (n.all.filter(function(m) {
    return m != null;
  }).forEach(function(m) {
    d || (i === void 0 ? i = Math.sign(m) : Math.sign(m) !== i && (d = !0));
  }), d) throw new Error("a log scale domain must be strictly-positive or strictly-negative");
  c = s === "auto" ? n.min : s, f = h === "auto" ? n.max : h;
  var g = so().domain([c, f]).rangeRound(r === "x" ? [0, t] : [t, 0]).base(a).nice();
  return g.type = "log", g;
}, Td = function(e, n, t, r) {
  var i, o, a = e.constant, u = a === void 0 ? 1 : a, s = e.min, l = s === void 0 ? "auto" : s, h = e.max, c = h === void 0 ? "auto" : h, f = e.reverse, d = f !== void 0 && f;
  i = l === "auto" ? n.min : l, o = c === "auto" ? n.max : c;
  var g = lo().constant(u).rangeRound(r === "x" ? [0, t] : [t, 0]).nice();
  d === !0 ? g.domain([o, i]) : g.domain([i, o]);
  var m = g;
  return m.type = "symlog", m;
}, _d = function(e) {
  return e === "x" ? "y" : "x";
}, Cd = function(e, n) {
  return e === n;
}, kd = function(e, n) {
  return e.getTime() === n.getTime();
};
function pi(e, n, t, r) {
  switch (e.type) {
    case "linear":
      return bd(e, n, t, r);
    case "point":
      return vd(e, n, t);
    case "band":
      return pd(e, n, t, r);
    case "time":
      return Md(e, n, t);
    case "log":
      return wd(e, n, t, r);
    case "symlog":
      return Td(e, n, t, r);
    default:
      throw new Error("invalid scale spec");
  }
}
var xi = function(e, n, t) {
  var r;
  if ("stacked" in t && t.stacked) {
    var i = e.data[n === "x" ? "xStacked" : "yStacked"];
    return i == null ? null : t(i);
  }
  return (r = t(e.data[n])) != null ? r : null;
}, Sd = function(e, n, t, r, i) {
  var o = e.map(function(h) {
    return function(c) {
      return an({}, c, { data: c.data.map(function(f) {
        return { data: an({}, f) };
      }) });
    }(h);
  }), a = $d(o, n, t);
  "stacked" in n && n.stacked === !0 && Ud(a, o), "stacked" in t && t.stacked === !0 && Ad(a, o);
  var u = pi(n, a.x, r, "x"), s = pi(t, a.y, i, "y"), l = o.map(function(h) {
    return an({}, h, { data: h.data.map(function(c) {
      return an({}, c, { position: { x: xi(c, "x", u), y: xi(c, "y", s) } });
    }) });
  });
  return an({}, a, { series: l, xScale: u, yScale: s });
}, $d = function(e, n, t) {
  return { x: Mi(e, "x", n), y: Mi(e, "y", t) };
}, Mi = function(e, n, t, r) {
  var i = {}, o = i.getValue, a = o === void 0 ? function(g) {
    return g.data[n];
  } : o, u = i.setValue, s = u === void 0 ? function(g, m) {
    g.data[n] = m;
  } : u;
  if (t.type === "linear") e.forEach(function(g) {
    g.data.forEach(function(m) {
      var b = a(m);
      b && s(m, parseFloat(String(b)));
    });
  });
  else if (t.type === "time" && t.format !== "native") {
    var l = Ro(t);
    e.forEach(function(g) {
      g.data.forEach(function(m) {
        var b = a(m);
        b && s(m, l(b));
      });
    });
  }
  var h = [];
  switch (e.forEach(function(g) {
    g.data.forEach(function(m) {
      h.push(a(m));
    });
  }), t.type) {
    case "linear":
      var c = rd(mi(h).filter(function(g) {
        return g !== null;
      }), function(g) {
        return g;
      });
      return { all: c, min: Math.min.apply(Math, c), max: Math.max.apply(Math, c) };
    case "time":
      var f = ph(h, function(g) {
        return g.getTime();
      }).slice(0).sort(function(g, m) {
        return m.getTime() - g.getTime();
      }).reverse();
      return { all: f, min: f[0], max: Xt(f) };
    default:
      var d = mi(h);
      return { all: d, min: d[0], max: Xt(d) };
  }
}, Xo = function(e, n, t) {
  var r = _d(e), i = [];
  n[r].all.forEach(function(o) {
    var a = dd(o) ? kd : Cd, u = [];
    t.forEach(function(s) {
      var l = s.data.find(function(d) {
        return a(d.data[r], o);
      }), h = null, c = null;
      if (l !== void 0) {
        if ((h = l.data[e]) !== null) {
          var f = Xt(u);
          f === void 0 ? c = h : f !== null && (c = f + h);
        }
        l.data[e === "x" ? "xStacked" : "yStacked"] = c;
      }
      u.push(c), c !== null && i.push(c);
    });
  }), n[e].minStacked = Math.min.apply(Math, i), n[e].maxStacked = Math.max.apply(Math, i);
}, Ud = function(e, n) {
  return Xo("x", e, n);
}, Ad = function(e, n) {
  return Xo("y", e, n);
}, Go = function(e) {
  var n = e.bandwidth();
  if (n === 0) return e;
  var t = n / 2;
  return e.round() && (t = Math.round(t)), function(r) {
    var i;
    return ((i = e(r)) != null ? i : 0) + t;
  };
}, qo = { millisecond: [Rn, Rn], second: [Zt, Zt], minute: [So, Yo], hour: [$o, Oo], day: [ue(function(e) {
  return e.setHours(0, 0, 0, 0);
}, function(e, n) {
  return e.setDate(e.getDate() + n);
}, function(e, n) {
  return (n.getTime() - e.getTime()) / 864e5;
}, function(e) {
  return Math.floor(e.getTime() / 864e5);
}), ue(function(e) {
  return e.setUTCHours(0, 0, 0, 0);
}, function(e, n) {
  return e.setUTCDate(e.getUTCDate() + n);
}, function(e, n) {
  return (n.getTime() - e.getTime()) / 864e5;
}, function(e) {
  return Math.floor(e.getTime() / 864e5);
})], week: [Qt, Jt], sunday: [Qt, Jt], monday: [Uo, Po], tuesday: [Ao, Lo], wednesday: [Fo, Ho], thursday: [Do, Io], friday: [jo, Bo], saturday: [Eo, zo], month: [Wo, No], year: [Mr, wr] }, Fd = Object.keys(qo), Dd = new RegExp("^every\\s*(\\d+)?\\s*(" + Fd.join("|") + ")s?$", "i"), Vo = function(e, n) {
  if (Array.isArray(n)) return n;
  if (typeof n == "string" && "useUTC" in e) {
    var t = n.match(Dd);
    if (t) {
      var r = t[1], i = t[2], o = qo[i][e.useUTC ? 1 : 0];
      if (i === "day") {
        var a, u, s = e.domain(), l = s[0], h = s[1], c = new Date(h);
        return c.setDate(c.getDate() + 1), (a = (u = o.every(Number(r ?? 1))) == null ? void 0 : u.range(l, c)) != null ? a : [];
      }
      if (r === void 0) return e.ticks(o);
      var f = o.every(Number(r));
      if (f) return e.ticks(f);
    }
    throw new Error("Invalid tickValues: " + n);
  }
  if ("ticks" in e) {
    if (n === void 0) return e.ticks();
    if (typeof (d = n) == "number" && isFinite(d) && Math.floor(d) === d) return e.ticks(n);
  }
  var d;
  return e.domain();
};
function Me() {
  return Me = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Me.apply(this, arguments);
}
var Ko = function(e) {
  var n, t = e.axis, r = e.scale, i = e.ticksPosition, o = e.tickValues, a = e.tickSize, u = e.tickPadding, s = e.tickRotation, l = e.truncateTickAt, h = e.engine, c = h === void 0 ? "svg" : h, f = Vo(r, o), d = Xu[c], g = "bandwidth" in r ? Go(r) : r, m = { lineX: 0, lineY: 0 }, b = { textX: 0, textY: 0 }, y = typeof document == "object" && document.dir === "rtl", w = d.align.center, S = d.baseline.center;
  return t === "x" ? (n = function(_) {
    var A;
    return { x: (A = g(_)) != null ? A : 0, y: 0 };
  }, m.lineY = a * (i === "after" ? 1 : -1), b.textY = (a + u) * (i === "after" ? 1 : -1), S = i === "after" ? d.baseline.top : d.baseline.bottom, s === 0 ? w = d.align.center : i === "after" && s < 0 || i === "before" && s > 0 ? (w = d.align[y ? "left" : "right"], S = d.baseline.center) : (i === "after" && s > 0 || i === "before" && s < 0) && (w = d.align[y ? "right" : "left"], S = d.baseline.center)) : (n = function(_) {
    var A;
    return { x: 0, y: (A = g(_)) != null ? A : 0 };
  }, m.lineX = a * (i === "after" ? 1 : -1), b.textX = (a + u) * (i === "after" ? 1 : -1), w = i === "after" ? d.align.left : d.align.right), { ticks: f.map(function(_) {
    var A = typeof _ == "string" ? function(v) {
      var D = String(v).length;
      return l && l > 0 && D > l ? "" + String(v).slice(0, l).concat("...") : "" + v;
    }(_) : _;
    return Me({ key: _ instanceof Date ? "" + _.valueOf() : "" + _, value: A }, n(_), m, b);
  }), textAlign: w, textBaseline: S };
}, Zo = function(e, n) {
  if (e === void 0 || typeof e == "function") return e;
  if (n.type === "time") {
    var t = Nu(e);
    return function(r) {
      return t(r instanceof Date ? r : new Date(r));
    };
  }
  return Ru(e);
}, er = function(e) {
  var n, t = e.width, r = e.height, i = e.scale, o = e.axis, a = e.values, u = (n = a, (Array.isArray(n) ? a : void 0) || Vo(i, a)), s = "bandwidth" in i ? Go(i) : i, l = o === "x" ? u.map(function(h) {
    var c, f;
    return { key: h instanceof Date ? "" + h.valueOf() : "" + h, x1: (c = s(h)) != null ? c : 0, x2: (f = s(h)) != null ? f : 0, y1: 0, y2: r };
  }) : u.map(function(h) {
    var c, f;
    return { key: h instanceof Date ? "" + h.valueOf() : "" + h, x1: 0, x2: t, y1: (c = s(h)) != null ? c : 0, y2: (f = s(h)) != null ? f : 0 };
  });
  return l;
}, jd = me(function(e) {
  var n, t = e.value, r = e.format, i = e.lineX, o = e.lineY, a = e.onClick, u = e.textBaseline, s = e.textAnchor, l = e.animatedProps, h = Be(), c = h.axis.ticks.line, f = h.axis.ticks.text, d = (n = r == null ? void 0 : r(t)) != null ? n : t, g = le(function() {
    var m = { opacity: l.opacity };
    return a ? { style: Me({}, m, { cursor: "pointer" }), onClick: function(b) {
      return a(b, d);
    } } : { style: m };
  }, [l.opacity, a, d]);
  return j.jsxs(qe.g, Me({ transform: l.transform }, g, { children: [j.jsx("line", { x1: 0, x2: i, y1: 0, y2: o, style: c }), f.outlineWidth > 0 && j.jsx(qe.text, { dominantBaseline: u, textAnchor: s, transform: l.textTransform, style: f, strokeWidth: 2 * f.outlineWidth, stroke: f.outlineColor, strokeLinejoin: "round", children: "" + d }), j.jsx(qe.text, { dominantBaseline: u, textAnchor: s, transform: l.textTransform, style: Ri(f), children: "" + d })] }));
}), Ed = function(e) {
  var n = e.axis, t = e.scale, r = e.x, i = r === void 0 ? 0 : r, o = e.y, a = o === void 0 ? 0 : o, u = e.length, s = e.ticksPosition, l = e.tickValues, h = e.tickSize, c = h === void 0 ? 5 : h, f = e.tickPadding, d = f === void 0 ? 5 : f, g = e.tickRotation, m = g === void 0 ? 0 : g, b = e.format, y = e.renderTick, w = y === void 0 ? jd : y, S = e.truncateTickAt, _ = e.legend, A = e.legendPosition, v = A === void 0 ? "end" : A, D = e.legendOffset, U = D === void 0 ? 0 : D, x = e.onClick, C = e.ariaHidden, k = Be(), T = k.axis.legend.text, $ = le(function() {
    return Zo(b, t);
  }, [b, t]), E = Ko({ axis: n, scale: t, ticksPosition: s, tickValues: l, tickSize: c, tickPadding: d, tickRotation: m, truncateTickAt: S }), O = E.ticks, W = E.textAlign, H = E.textBaseline, I = null;
  if (_ !== void 0) {
    var Y, B = 0, X = 0, Q = 0;
    n === "y" ? (Q = -90, B = U, v === "start" ? (Y = "start", X = u) : v === "middle" ? (Y = "middle", X = u / 2) : v === "end" && (Y = "end")) : (X = U, v === "start" ? Y = "start" : v === "middle" ? (Y = "middle", B = u / 2) : v === "end" && (Y = "end", B = u)), I = j.jsxs(j.Fragment, { children: [T.outlineWidth > 0 && j.jsx("text", { transform: "translate(" + B + ", " + X + ") rotate(" + Q + ")", textAnchor: Y, style: Me({ dominantBaseline: "central" }, T), strokeWidth: 2 * T.outlineWidth, stroke: T.outlineColor, strokeLinejoin: "round", children: _ }), j.jsx("text", { transform: "translate(" + B + ", " + X + ") rotate(" + Q + ")", textAnchor: Y, style: Me({ dominantBaseline: "central" }, T), children: _ })] });
  }
  var ne = rr(), J = ne.animate, ie = ne.config, V = Gi({ transform: "translate(" + i + "," + a + ")", lineX2: n === "x" ? u : 0, lineY2: n === "x" ? 0 : u, config: ie, immediate: !J }), oe = K(function(F) {
    return { opacity: 1, transform: "translate(" + F.x + "," + F.y + ")", textTransform: "translate(" + F.textX + "," + F.textY + ") rotate(" + m + ")" };
  }, [m]), L = K(function(F) {
    return { opacity: 0, transform: "translate(" + F.x + "," + F.y + ")", textTransform: "translate(" + F.textX + "," + F.textY + ") rotate(" + m + ")" };
  }, [m]), p = Xi(O, { keys: function(F) {
    return F.key;
  }, initial: oe, from: L, enter: oe, update: oe, leave: { opacity: 0 }, config: ie, immediate: !J });
  return j.jsxs(qe.g, { transform: V.transform, "aria-hidden": C, children: [p(function(F, P, M, R) {
    return Ui.createElement(w, Me({ tickIndex: R, format: $, rotate: m, textBaseline: H, textAnchor: W, truncateTickAt: S, animatedProps: F }, P, x ? { onClick: x } : {}));
  }), j.jsx(qe.line, { style: k.axis.domain.line, x1: 0, x2: V.lineX2, y1: 0, y2: V.lineY2 }), I] });
}, Wd = me(Ed), Qo = ["top", "right", "bottom", "left"], Yd = me(function(e) {
  var n = e.xScale, t = e.yScale, r = e.width, i = e.height, o = { top: e.top, right: e.right, bottom: e.bottom, left: e.left };
  return j.jsx(j.Fragment, { children: Qo.map(function(a) {
    var u = o[a];
    if (!u) return null;
    var s = a === "top" || a === "bottom";
    return j.jsx(Wd, Me({}, u, { axis: s ? "x" : "y", x: a === "right" ? r : 0, y: a === "bottom" ? i : 0, scale: s ? n : t, length: s ? r : i, ticksPosition: a === "top" || a === "left" ? "before" : "after", truncateTickAt: u.truncateTickAt }), a);
  }) });
}), Od = me(function(e) {
  var n = e.animatedProps, t = Be();
  return j.jsx(qe.line, Me({}, n, t.grid.line));
}), wi = me(function(e) {
  var n = e.lines, t = rr(), r = t.animate, i = t.config, o = Xi(n, { keys: function(a) {
    return a.key;
  }, initial: function(a) {
    return { opacity: 1, x1: a.x1, x2: a.x2, y1: a.y1, y2: a.y2 };
  }, from: function(a) {
    return { opacity: 0, x1: a.x1, x2: a.x2, y1: a.y1, y2: a.y2 };
  }, enter: function(a) {
    return { opacity: 1, x1: a.x1, x2: a.x2, y1: a.y1, y2: a.y2 };
  }, update: function(a) {
    return { opacity: 1, x1: a.x1, x2: a.x2, y1: a.y1, y2: a.y2 };
  }, leave: { opacity: 0 }, config: i, immediate: !r });
  return j.jsx("g", { children: o(function(a, u) {
    return ke(Od, Me({}, u, { key: u.key, animatedProps: a }));
  }) });
}), Pd = me(function(e) {
  var n = e.width, t = e.height, r = e.xScale, i = e.yScale, o = e.xValues, a = e.yValues, u = le(function() {
    return !!r && er({ width: n, height: t, scale: r, axis: "x", values: o });
  }, [r, o, n, t]), s = le(function() {
    return !!i && er({ width: n, height: t, scale: i, axis: "y", values: a });
  }, [t, n, i, a]);
  return j.jsxs(j.Fragment, { children: [u && j.jsx(wi, { lines: u }), s && j.jsx(wi, { lines: s })] });
}), Ld = function(e, n) {
  var t, r = n.axis, i = n.scale, o = n.x, a = o === void 0 ? 0 : o, u = n.y, s = u === void 0 ? 0 : u, l = n.length, h = n.ticksPosition, c = n.tickValues, f = n.tickSize, d = f === void 0 ? 5 : f, g = n.tickPadding, m = g === void 0 ? 5 : g, b = n.tickRotation, y = b === void 0 ? 0 : b, w = n.format, S = n.legend, _ = n.legendPosition, A = _ === void 0 ? "end" : _, v = n.legendOffset, D = v === void 0 ? 0 : v, U = n.theme, x = Ko({ axis: r, scale: i, ticksPosition: h, tickValues: c, tickSize: d, tickPadding: m, tickRotation: y, engine: "canvas" }), C = x.ticks, k = x.textAlign, T = x.textBaseline;
  e.save(), e.translate(a, s), e.textAlign = k, e.textBaseline = T;
  var $ = U.axis.ticks.text;
  e.font = ($.fontWeight ? $.fontWeight + " " : "") + $.fontSize + "px " + $.fontFamily, ((t = U.axis.domain.line.strokeWidth) != null ? t : 0) > 0 && (e.lineWidth = Number(U.axis.domain.line.strokeWidth), e.lineCap = "square", U.axis.domain.line.stroke && (e.strokeStyle = U.axis.domain.line.stroke), e.beginPath(), e.moveTo(0, 0), e.lineTo(r === "x" ? l : 0, r === "x" ? 0 : l), e.stroke());
  var E = typeof w == "function" ? w : function(Y) {
    return "" + Y;
  };
  if (C.forEach(function(Y) {
    var B;
    ((B = U.axis.ticks.line.strokeWidth) != null ? B : 0) > 0 && (e.lineWidth = Number(U.axis.ticks.line.strokeWidth), e.lineCap = "square", U.axis.ticks.line.stroke && (e.strokeStyle = U.axis.ticks.line.stroke), e.beginPath(), e.moveTo(Y.x, Y.y), e.lineTo(Y.x + Y.lineX, Y.y + Y.lineY), e.stroke());
    var X = E(Y.value);
    e.save(), e.translate(Y.x + Y.textX, Y.y + Y.textY), e.rotate(Lr(y)), $.outlineWidth > 0 && (e.strokeStyle = $.outlineColor, e.lineWidth = 2 * $.outlineWidth, e.lineJoin = "round", e.strokeText("" + X, 0, 0)), U.axis.ticks.text.fill && (e.fillStyle = $.fill), e.fillText("" + X, 0, 0), e.restore();
  }), S !== void 0) {
    var O = 0, W = 0, H = 0, I = "center";
    r === "y" ? (H = -90, O = D, A === "start" ? (I = "start", W = l) : A === "middle" ? (I = "center", W = l / 2) : A === "end" && (I = "end")) : (W = D, A === "start" ? I = "start" : A === "middle" ? (I = "center", O = l / 2) : A === "end" && (I = "end", O = l)), e.translate(O, W), e.rotate(Lr(H)), e.font = (U.axis.legend.text.fontWeight ? U.axis.legend.text.fontWeight + " " : "") + U.axis.legend.text.fontSize + "px " + U.axis.legend.text.fontFamily, U.axis.legend.text.fill && (e.fillStyle = U.axis.legend.text.fill), e.textAlign = I, e.textBaseline = "middle", e.fillText(S, 0, 0);
  }
  e.restore();
}, Hd = function(e, n) {
  var t = n.xScale, r = n.yScale, i = n.width, o = n.height, a = n.top, u = n.right, s = n.bottom, l = n.left, h = n.theme, c = { top: a, right: u, bottom: s, left: l };
  Qo.forEach(function(f) {
    var d = c[f];
    if (!d) return null;
    var g = f === "top" || f === "bottom", m = f === "top" || f === "left" ? "before" : "after", b = g ? t : r, y = Zo(d.format, b);
    Ld(e, Me({}, d, { axis: g ? "x" : "y", x: f === "right" ? i : 0, y: f === "bottom" ? o : 0, scale: b, format: y, length: g ? i : o, ticksPosition: m, theme: h }));
  });
}, Ti = function(e, n) {
  var t = n.width, r = n.height, i = n.scale, o = n.axis, a = n.values;
  er({ width: t, height: r, scale: i, axis: o, values: a }).forEach(function(u) {
    e.beginPath(), e.moveTo(u.x1, u.y1), e.lineTo(u.x2, u.y2), e.stroke();
  });
}, Id = function(e) {
  var n = e.x, t = e.y, r = e.size, i = e.fill, o = e.opacity, a = o === void 0 ? 1 : o, u = e.borderWidth, s = u === void 0 ? 0 : u, l = e.borderColor;
  return j.jsx("circle", { r: r / 2, cx: n + r / 2, cy: t + r / 2, fill: i, opacity: a, strokeWidth: s, stroke: l === void 0 ? "transparent" : l, style: { pointerEvents: "none" } });
}, Bd = function(e) {
  var n = e.x, t = e.y, r = e.size, i = e.fill, o = e.opacity, a = o === void 0 ? 1 : o, u = e.borderWidth, s = u === void 0 ? 0 : u, l = e.borderColor;
  return j.jsx("g", { transform: "translate(" + n + "," + t + ")", children: j.jsx("path", { d: `
                    M` + r / 2 + ` 0
                    L` + 0.8 * r + " " + r / 2 + `
                    L` + r / 2 + " " + r + `
                    L` + 0.2 * r + " " + r / 2 + `
                    L` + r / 2 + ` 0
                `, fill: i, opacity: a, strokeWidth: s, stroke: l === void 0 ? "transparent" : l, style: { pointerEvents: "none" } }) });
}, zd = function(e) {
  var n = e.x, t = e.y, r = e.size, i = e.fill, o = e.opacity, a = o === void 0 ? 1 : o, u = e.borderWidth, s = u === void 0 ? 0 : u, l = e.borderColor;
  return j.jsx("rect", { x: n, y: t, fill: i, opacity: a, strokeWidth: s, stroke: l === void 0 ? "transparent" : l, width: r, height: r, style: { pointerEvents: "none" } });
}, Nd = function(e) {
  var n = e.x, t = e.y, r = e.size, i = e.fill, o = e.opacity, a = o === void 0 ? 1 : o, u = e.borderWidth, s = u === void 0 ? 0 : u, l = e.borderColor;
  return j.jsx("g", { transform: "translate(" + n + "," + t + ")", children: j.jsx("path", { d: `
                M` + r / 2 + ` 0
                L` + r + " " + r + `
                L0 ` + r + `
                L` + r / 2 + ` 0
            `, fill: i, opacity: a, strokeWidth: s, stroke: l === void 0 ? "transparent" : l, style: { pointerEvents: "none" } }) });
};
function sn() {
  return sn = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, sn.apply(this, arguments);
}
var Rd = { top: 0, right: 0, bottom: 0, left: 0 }, Tr = function(e) {
  var n, t = e.direction, r = e.itemsSpacing, i = e.padding, o = e.itemCount, a = e.itemWidth, u = e.itemHeight;
  if (typeof i != "number" && (typeof (n = i) != "object" || Array.isArray(n) || n === null)) throw new Error("Invalid property padding, must be one of: number, object");
  var s = typeof i == "number" ? { top: i, right: i, bottom: i, left: i } : sn({}, Rd, i), l = s.left + s.right, h = s.top + s.bottom, c = a + l, f = u + h, d = (o - 1) * r;
  return t === "row" ? c = a * o + d + l : t === "column" && (f = u * o + d + h), { width: c, height: f, padding: s };
}, Jo = function(e) {
  var n = e.anchor, t = e.translateX, r = e.translateY, i = e.containerWidth, o = e.containerHeight, a = e.width, u = e.height, s = t, l = r;
  switch (n) {
    case "top":
      s += (i - a) / 2;
      break;
    case "top-right":
      s += i - a;
      break;
    case "right":
      s += i - a, l += (o - u) / 2;
      break;
    case "bottom-right":
      s += i - a, l += o - u;
      break;
    case "bottom":
      s += (i - a) / 2, l += o - u;
      break;
    case "bottom-left":
      l += o - u;
      break;
    case "left":
      l += (o - u) / 2;
      break;
    case "center":
      s += (i - a) / 2, l += (o - u) / 2;
  }
  return { x: s, y: l };
}, ea = function(e) {
  var n, t, r, i, o, a, u = e.direction, s = e.justify, l = e.symbolSize, h = e.symbolSpacing, c = e.width, f = e.height;
  switch (u) {
    case "left-to-right":
      n = 0, t = (f - l) / 2, i = f / 2, a = "central", s ? (r = c, o = "end") : (r = l + h, o = "start");
      break;
    case "right-to-left":
      n = c - l, t = (f - l) / 2, i = f / 2, a = "central", s ? (r = 0, o = "start") : (r = c - l - h, o = "end");
      break;
    case "top-to-bottom":
      n = (c - l) / 2, t = 0, r = c / 2, o = "middle", s ? (i = f, a = "alphabetic") : (i = l + h, a = "text-before-edge");
      break;
    case "bottom-to-top":
      n = (c - l) / 2, t = f - l, r = c / 2, o = "middle", s ? (i = 0, a = "text-before-edge") : (i = f - l - h, a = "alphabetic");
  }
  return { symbolX: n, symbolY: t, labelX: r, labelY: i, labelAnchor: o, labelAlignment: a };
}, Xd = { circle: Id, diamond: Bd, square: zd, triangle: Nd }, Gd = function(e) {
  var n, t, r, i, o, a, u, s, l, h, c, f = e.x, d = e.y, g = e.width, m = e.height, b = e.data, y = e.direction, w = y === void 0 ? "left-to-right" : y, S = e.justify, _ = S !== void 0 && S, A = e.textColor, v = e.background, D = v === void 0 ? "transparent" : v, U = e.opacity, x = U === void 0 ? 1 : U, C = e.symbolShape, k = C === void 0 ? "square" : C, T = e.symbolSize, $ = T === void 0 ? 16 : T, E = e.symbolSpacing, O = E === void 0 ? 8 : E, W = e.symbolBorderWidth, H = W === void 0 ? 0 : W, I = e.symbolBorderColor, Y = I === void 0 ? "transparent" : I, B = e.onClick, X = e.onMouseEnter, Q = e.onMouseLeave, ne = e.toggleSerie, J = e.effects, ie = fn({}), V = ie[0], oe = ie[1], L = Be(), p = K(function(ge) {
    if (J) {
      var we = J.filter(function(ve) {
        return ve.on === "hover";
      }).reduce(function(ve, ze) {
        return sn({}, ve, ze.style);
      }, {});
      oe(we);
    }
    X == null || X(b, ge);
  }, [X, b, J]), F = K(function(ge) {
    if (J) {
      var we = J.filter(function(ve) {
        return ve.on !== "hover";
      }).reduce(function(ve, ze) {
        return sn({}, ve, ze.style);
      }, {});
      oe(we);
    }
    Q == null || Q(b, ge);
  }, [Q, b, J]), P = ea({ direction: w, justify: _, symbolSize: (n = V.symbolSize) != null ? n : $, symbolSpacing: O, width: g, height: m }), M = P.symbolX, R = P.symbolY, N = P.labelX, Z = P.labelY, G = P.labelAnchor, te = P.labelAlignment, fe = [B, X, Q, ne].some(function(ge) {
    return ge !== void 0;
  }), Ve = typeof k == "function" ? k : Xd[k];
  return j.jsxs("g", { transform: "translate(" + f + "," + d + ")", style: { opacity: (t = V.itemOpacity) != null ? t : x }, children: [j.jsx("rect", { width: g, height: m, fill: (r = V.itemBackground) != null ? r : D, style: { cursor: fe ? "pointer" : "auto" }, onClick: function(ge) {
    B == null || B(b, ge), ne == null || ne(b.id);
  }, onMouseEnter: p, onMouseLeave: F }), Ui.createElement(Ve, sn({ id: b.id, x: M, y: R, size: (i = V.symbolSize) != null ? i : $, fill: (o = (a = b.fill) != null ? a : b.color) != null ? o : "black", borderWidth: (u = V.symbolBorderWidth) != null ? u : H, borderColor: (s = V.symbolBorderColor) != null ? s : Y }, b.hidden ? L.legends.hidden.symbol : void 0)), j.jsx("text", { textAnchor: G, style: sn({}, Ri(L.legends.text), { fill: (l = (h = (c = V.itemTextColor) != null ? c : A) != null ? h : L.legends.text.fill) != null ? l : "black", dominantBaseline: te, pointerEvents: "none", userSelect: "none" }, b.hidden ? L.legends.hidden.text : void 0), x: N, y: Z, children: b.label })] });
}, qd = function(e) {
  var n = e.data, t = e.x, r = e.y, i = e.direction, o = e.padding, a = o === void 0 ? 0 : o, u = e.justify, s = e.effects, l = e.itemWidth, h = e.itemHeight, c = e.itemDirection, f = c === void 0 ? "left-to-right" : c, d = e.itemsSpacing, g = d === void 0 ? 0 : d, m = e.itemTextColor, b = e.itemBackground, y = b === void 0 ? "transparent" : b, w = e.itemOpacity, S = w === void 0 ? 1 : w, _ = e.symbolShape, A = e.symbolSize, v = e.symbolSpacing, D = e.symbolBorderWidth, U = e.symbolBorderColor, x = e.onClick, C = e.onMouseEnter, k = e.onMouseLeave, T = e.toggleSerie, $ = Tr({ itemCount: n.length, itemWidth: l, itemHeight: h, itemsSpacing: g, direction: i, padding: a }).padding, E = i === "row" ? l + g : 0, O = i === "column" ? h + g : 0;
  return j.jsx("g", { transform: "translate(" + t + "," + r + ")", children: n.map(function(W, H) {
    return j.jsx(Gd, { data: W, x: H * E + $.left, y: H * O + $.top, width: l, height: h, direction: f, justify: u, effects: s, textColor: m, background: y, opacity: S, symbolShape: _, symbolSize: A, symbolSpacing: v, symbolBorderWidth: D, symbolBorderColor: U, onClick: x, onMouseEnter: C, onMouseLeave: k, toggleSerie: T }, H);
  }) });
}, Vd = function(e) {
  var n = e.data, t = e.containerWidth, r = e.containerHeight, i = e.translateX, o = i === void 0 ? 0 : i, a = e.translateY, u = a === void 0 ? 0 : a, s = e.anchor, l = e.direction, h = e.padding, c = h === void 0 ? 0 : h, f = e.justify, d = e.itemsSpacing, g = d === void 0 ? 0 : d, m = e.itemWidth, b = e.itemHeight, y = e.itemDirection, w = e.itemTextColor, S = e.itemBackground, _ = e.itemOpacity, A = e.symbolShape, v = e.symbolSize, D = e.symbolSpacing, U = e.symbolBorderWidth, x = e.symbolBorderColor, C = e.onClick, k = e.onMouseEnter, T = e.onMouseLeave, $ = e.toggleSerie, E = e.effects, O = Tr({ itemCount: n.length, itemsSpacing: g, itemWidth: m, itemHeight: b, direction: l, padding: c }), W = O.width, H = O.height, I = Jo({ anchor: s, translateX: o, translateY: u, containerWidth: t, containerHeight: r, width: W, height: H }), Y = I.x, B = I.y;
  return j.jsx(qd, { data: n, x: Y, y: B, direction: l, padding: c, justify: f, effects: E, itemsSpacing: g, itemWidth: m, itemHeight: b, itemDirection: y, itemTextColor: w, itemBackground: S, itemOpacity: _, symbolShape: A, symbolSize: v, symbolSpacing: D, symbolBorderWidth: U, symbolBorderColor: x, onClick: C, onMouseEnter: k, onMouseLeave: T, toggleSerie: typeof $ == "boolean" ? void 0 : $ });
}, Kd = { start: "left", middle: "center", end: "right" }, Zd = function(e, n) {
  var t = n.data, r = n.containerWidth, i = n.containerHeight, o = n.translateX, a = o === void 0 ? 0 : o, u = n.translateY, s = u === void 0 ? 0 : u, l = n.anchor, h = n.direction, c = n.padding, f = c === void 0 ? 0 : c, d = n.justify, g = d !== void 0 && d, m = n.itemsSpacing, b = m === void 0 ? 0 : m, y = n.itemWidth, w = n.itemHeight, S = n.itemDirection, _ = S === void 0 ? "left-to-right" : S, A = n.itemTextColor, v = n.symbolSize, D = v === void 0 ? 16 : v, U = n.symbolSpacing, x = U === void 0 ? 8 : U, C = n.theme, k = Tr({ itemCount: t.length, itemWidth: y, itemHeight: w, itemsSpacing: b, direction: h, padding: f }), T = k.width, $ = k.height, E = k.padding, O = Jo({ anchor: l, translateX: a, translateY: s, containerWidth: r, containerHeight: i, width: T, height: $ }), W = O.x, H = O.y, I = h === "row" ? y + b : 0, Y = h === "column" ? w + b : 0;
  e.save(), e.translate(W, H), e.font = C.legends.text.fontSize + "px " + (C.legends.text.fontFamily || "sans-serif"), t.forEach(function(B, X) {
    var Q, ne, J = X * I + E.left, ie = X * Y + E.top, V = ea({ direction: _, justify: g, symbolSize: D, symbolSpacing: x, width: y, height: w }), oe = V.symbolX, L = V.symbolY, p = V.labelX, F = V.labelY, P = V.labelAnchor, M = V.labelAlignment;
    e.fillStyle = (Q = B.color) != null ? Q : "black", e.fillRect(J + oe, ie + L, D, D), e.textAlign = Kd[P], M === "central" && (e.textBaseline = "middle"), e.fillStyle = (ne = A ?? C.legends.text.fill) != null ? ne : "black", e.fillText(String(B.label), J + p, ie + F);
  }), e.restore();
}, Qd = Gu, Jd = 0;
function e0(e) {
  var n = ++Jd;
  return Qd(e) + n;
}
var n0 = e0;
const t0 = /* @__PURE__ */ Xn(n0), Pe = 11102230246251565e-32, ce = 134217729, r0 = (3 + 8 * Pe) * Pe;
function zt(e, n, t, r, i) {
  let o, a, u, s, l = n[0], h = r[0], c = 0, f = 0;
  h > l == h > -l ? (o = l, l = n[++c]) : (o = h, h = r[++f]);
  let d = 0;
  if (c < e && f < t)
    for (h > l == h > -l ? (a = l + o, u = o - (a - l), l = n[++c]) : (a = h + o, u = o - (a - h), h = r[++f]), o = a, u !== 0 && (i[d++] = u); c < e && f < t; )
      h > l == h > -l ? (a = o + l, s = a - o, u = o - (a - s) + (l - s), l = n[++c]) : (a = o + h, s = a - o, u = o - (a - s) + (h - s), h = r[++f]), o = a, u !== 0 && (i[d++] = u);
  for (; c < e; )
    a = o + l, s = a - o, u = o - (a - s) + (l - s), l = n[++c], o = a, u !== 0 && (i[d++] = u);
  for (; f < t; )
    a = o + h, s = a - o, u = o - (a - s) + (h - s), h = r[++f], o = a, u !== 0 && (i[d++] = u);
  return (o !== 0 || d === 0) && (i[d++] = o), d;
}
function i0(e, n) {
  let t = n[0];
  for (let r = 1; r < e; r++) t += n[r];
  return t;
}
function qn(e) {
  return new Float64Array(e);
}
const o0 = (3 + 16 * Pe) * Pe, a0 = (2 + 12 * Pe) * Pe, u0 = (9 + 64 * Pe) * Pe * Pe, wn = qn(4), _i = qn(8), Ci = qn(12), ki = qn(16), he = qn(4);
function s0(e, n, t, r, i, o, a) {
  let u, s, l, h, c, f, d, g, m, b, y, w, S, _, A, v, D, U;
  const x = e - i, C = t - i, k = n - o, T = r - o;
  _ = x * T, f = ce * x, d = f - (f - x), g = x - d, f = ce * T, m = f - (f - T), b = T - m, A = g * b - (_ - d * m - g * m - d * b), v = k * C, f = ce * k, d = f - (f - k), g = k - d, f = ce * C, m = f - (f - C), b = C - m, D = g * b - (v - d * m - g * m - d * b), y = A - D, c = A - y, wn[0] = A - (y + c) + (c - D), w = _ + y, c = w - _, S = _ - (w - c) + (y - c), y = S - v, c = S - y, wn[1] = S - (y + c) + (c - v), U = w + y, c = U - w, wn[2] = w - (U - c) + (y - c), wn[3] = U;
  let $ = i0(4, wn), E = a0 * a;
  if ($ >= E || -$ >= E || (c = e - x, u = e - (x + c) + (c - i), c = t - C, l = t - (C + c) + (c - i), c = n - k, s = n - (k + c) + (c - o), c = r - T, h = r - (T + c) + (c - o), u === 0 && s === 0 && l === 0 && h === 0) || (E = u0 * a + r0 * Math.abs($), $ += x * h + T * u - (k * l + C * s), $ >= E || -$ >= E)) return $;
  _ = u * T, f = ce * u, d = f - (f - u), g = u - d, f = ce * T, m = f - (f - T), b = T - m, A = g * b - (_ - d * m - g * m - d * b), v = s * C, f = ce * s, d = f - (f - s), g = s - d, f = ce * C, m = f - (f - C), b = C - m, D = g * b - (v - d * m - g * m - d * b), y = A - D, c = A - y, he[0] = A - (y + c) + (c - D), w = _ + y, c = w - _, S = _ - (w - c) + (y - c), y = S - v, c = S - y, he[1] = S - (y + c) + (c - v), U = w + y, c = U - w, he[2] = w - (U - c) + (y - c), he[3] = U;
  const O = zt(4, wn, 4, he, _i);
  _ = x * h, f = ce * x, d = f - (f - x), g = x - d, f = ce * h, m = f - (f - h), b = h - m, A = g * b - (_ - d * m - g * m - d * b), v = k * l, f = ce * k, d = f - (f - k), g = k - d, f = ce * l, m = f - (f - l), b = l - m, D = g * b - (v - d * m - g * m - d * b), y = A - D, c = A - y, he[0] = A - (y + c) + (c - D), w = _ + y, c = w - _, S = _ - (w - c) + (y - c), y = S - v, c = S - y, he[1] = S - (y + c) + (c - v), U = w + y, c = U - w, he[2] = w - (U - c) + (y - c), he[3] = U;
  const W = zt(O, _i, 4, he, Ci);
  _ = u * h, f = ce * u, d = f - (f - u), g = u - d, f = ce * h, m = f - (f - h), b = h - m, A = g * b - (_ - d * m - g * m - d * b), v = s * l, f = ce * s, d = f - (f - s), g = s - d, f = ce * l, m = f - (f - l), b = l - m, D = g * b - (v - d * m - g * m - d * b), y = A - D, c = A - y, he[0] = A - (y + c) + (c - D), w = _ + y, c = w - _, S = _ - (w - c) + (y - c), y = S - v, c = S - y, he[1] = S - (y + c) + (c - v), U = w + y, c = U - w, he[2] = w - (U - c) + (y - c), he[3] = U;
  const H = zt(W, Ci, 4, he, ki);
  return ki[H - 1];
}
function at(e, n, t, r, i, o) {
  const a = (n - o) * (t - i), u = (e - i) * (r - o), s = a - u, l = Math.abs(a + u);
  return Math.abs(s) >= o0 * l ? s : -s0(e, n, t, r, i, o, l);
}
const Si = Math.pow(2, -52), ut = new Uint32Array(512);
class Mt {
  /**
   * Constructs a delaunay triangulation object given an array of points (`[x, y]` by default).
   * `getX` and `getY` are optional functions of the form `(point) => value` for custom point formats.
   *
   * @template P
   * @param {P[]} points
   * @param {(p: P) => number} [getX]
   * @param {(p: P) => number} [getY]
   */
  // @ts-expect-error TS2322
  static from(n, t = d0, r = m0) {
    const i = n.length, o = new Float64Array(i * 2);
    for (let a = 0; a < i; a++) {
      const u = n[a];
      o[2 * a] = t(u), o[2 * a + 1] = r(u);
    }
    return new Mt(o);
  }
  /**
   * Constructs a delaunay triangulation object given an array of point coordinates of the form:
   * `[x0, y0, x1, y1, ...]` (use a typed array for best performance). Duplicate points are skipped.
   *
   * @param {T} coords
   */
  constructor(n) {
    const t = n.length >> 1;
    if (t > 0 && typeof n[0] != "number") throw new Error("Expected coords to contain numbers.");
    this.coords = n;
    const r = Math.max(2 * t - 5, 0);
    this._triangles = new Uint32Array(r * 3), this._halfedges = new Int32Array(r * 3), this._hashSize = Math.ceil(Math.sqrt(t)), this._hullPrev = new Uint32Array(t), this._hullNext = new Uint32Array(t), this._hullTri = new Uint32Array(t), this._hullHash = new Int32Array(this._hashSize), this._ids = new Uint32Array(t), this._dists = new Float64Array(t), this.trianglesLen = 0, this._cx = 0, this._cy = 0, this._hullStart = 0, this.hull = this._triangles, this.triangles = this._triangles, this.halfedges = this._halfedges, this.update();
  }
  /**
   * Updates the triangulation if you modified `delaunay.coords` values in place, avoiding expensive memory allocations.
   * Useful for iterative relaxation algorithms such as Lloyd's.
   */
  update() {
    const { coords: n, _hullPrev: t, _hullNext: r, _hullTri: i, _hullHash: o } = this, a = n.length >> 1;
    let u = 1 / 0, s = 1 / 0, l = -1 / 0, h = -1 / 0;
    for (let x = 0; x < a; x++) {
      const C = n[2 * x], k = n[2 * x + 1];
      C < u && (u = C), k < s && (s = k), C > l && (l = C), k > h && (h = k), this._ids[x] = x;
    }
    const c = (u + l) / 2, f = (s + h) / 2;
    let d = 0, g = 0, m = 0;
    for (let x = 0, C = 1 / 0; x < a; x++) {
      const k = Nt(c, f, n[2 * x], n[2 * x + 1]);
      k < C && (d = x, C = k);
    }
    const b = n[2 * d], y = n[2 * d + 1];
    for (let x = 0, C = 1 / 0; x < a; x++) {
      if (x === d) continue;
      const k = Nt(b, y, n[2 * x], n[2 * x + 1]);
      k < C && k > 0 && (g = x, C = k);
    }
    let w = n[2 * g], S = n[2 * g + 1], _ = 1 / 0;
    for (let x = 0; x < a; x++) {
      if (x === d || x === g) continue;
      const C = f0(b, y, w, S, n[2 * x], n[2 * x + 1]);
      C < _ && (m = x, _ = C);
    }
    let A = n[2 * m], v = n[2 * m + 1];
    if (_ === 1 / 0) {
      for (let k = 0; k < a; k++)
        this._dists[k] = n[2 * k] - n[0] || n[2 * k + 1] - n[1];
      Cn(this._ids, this._dists, 0, a - 1);
      const x = new Uint32Array(a);
      let C = 0;
      for (let k = 0, T = -1 / 0; k < a; k++) {
        const $ = this._ids[k], E = this._dists[$];
        E > T && (x[C++] = $, T = E);
      }
      this.hull = x.subarray(0, C), this.triangles = new Uint32Array(0), this.halfedges = new Int32Array(0);
      return;
    }
    if (at(b, y, w, S, A, v) < 0) {
      const x = g, C = w, k = S;
      g = m, w = A, S = v, m = x, A = C, v = k;
    }
    const D = h0(b, y, w, S, A, v);
    this._cx = D.x, this._cy = D.y;
    for (let x = 0; x < a; x++)
      this._dists[x] = Nt(n[2 * x], n[2 * x + 1], D.x, D.y);
    Cn(this._ids, this._dists, 0, a - 1), this._hullStart = d;
    let U = 3;
    r[d] = t[m] = g, r[g] = t[d] = m, r[m] = t[g] = d, i[d] = 0, i[g] = 1, i[m] = 2, o.fill(-1), o[this._hashKey(b, y)] = d, o[this._hashKey(w, S)] = g, o[this._hashKey(A, v)] = m, this.trianglesLen = 0, this._addTriangle(d, g, m, -1, -1, -1);
    for (let x = 0, C = 0, k = 0; x < this._ids.length; x++) {
      const T = this._ids[x], $ = n[2 * T], E = n[2 * T + 1];
      if (x > 0 && Math.abs($ - C) <= Si && Math.abs(E - k) <= Si || (C = $, k = E, T === d || T === g || T === m)) continue;
      let O = 0;
      for (let B = 0, X = this._hashKey($, E); B < this._hashSize && (O = o[(X + B) % this._hashSize], !(O !== -1 && O !== r[O])); B++)
        ;
      O = t[O];
      let W = O, H;
      for (; H = r[W], at($, E, n[2 * W], n[2 * W + 1], n[2 * H], n[2 * H + 1]) >= 0; )
        if (W = H, W === O) {
          W = -1;
          break;
        }
      if (W === -1) continue;
      let I = this._addTriangle(W, T, r[W], -1, -1, i[W]);
      i[T] = this._legalize(I + 2), i[W] = I, U++;
      let Y = r[W];
      for (; H = r[Y], at($, E, n[2 * Y], n[2 * Y + 1], n[2 * H], n[2 * H + 1]) < 0; )
        I = this._addTriangle(Y, T, H, i[T], -1, i[Y]), i[T] = this._legalize(I + 2), r[Y] = Y, U--, Y = H;
      if (W === O)
        for (; H = t[W], at($, E, n[2 * H], n[2 * H + 1], n[2 * W], n[2 * W + 1]) < 0; )
          I = this._addTriangle(H, T, W, -1, i[W], i[H]), this._legalize(I + 2), i[H] = I, r[W] = W, U--, W = H;
      this._hullStart = t[T] = W, r[W] = t[Y] = T, r[T] = Y, o[this._hashKey($, E)] = T, o[this._hashKey(n[2 * W], n[2 * W + 1])] = W;
    }
    this.hull = new Uint32Array(U);
    for (let x = 0, C = this._hullStart; x < U; x++)
      this.hull[x] = C, C = r[C];
    this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  /**
   * Calculate an angle-based key for the edge hash used for advancing convex hull.
   *
   * @param {number} x
   * @param {number} y
   * @private
   */
  _hashKey(n, t) {
    return Math.floor(l0(n - this._cx, t - this._cy) * this._hashSize) % this._hashSize;
  }
  /**
   * Flip an edge in a pair of triangles if it doesn't satisfy the Delaunay condition.
   *
   * @param {number} a
   * @private
   */
  _legalize(n) {
    const { _triangles: t, _halfedges: r, coords: i } = this;
    let o = 0, a = 0;
    for (; ; ) {
      const u = r[n], s = n - n % 3;
      if (a = s + (n + 2) % 3, u === -1) {
        if (o === 0) break;
        n = ut[--o];
        continue;
      }
      const l = u - u % 3, h = s + (n + 1) % 3, c = l + (u + 2) % 3, f = t[a], d = t[n], g = t[h], m = t[c];
      if (c0(
        i[2 * f],
        i[2 * f + 1],
        i[2 * d],
        i[2 * d + 1],
        i[2 * g],
        i[2 * g + 1],
        i[2 * m],
        i[2 * m + 1]
      )) {
        t[n] = m, t[u] = f;
        const y = r[c];
        if (y === -1) {
          let S = this._hullStart;
          do {
            if (this._hullTri[S] === c) {
              this._hullTri[S] = n;
              break;
            }
            S = this._hullPrev[S];
          } while (S !== this._hullStart);
        }
        this._link(n, y), this._link(u, r[a]), this._link(a, c);
        const w = l + (u + 1) % 3;
        o < ut.length && (ut[o++] = w);
      } else {
        if (o === 0) break;
        n = ut[--o];
      }
    }
    return a;
  }
  /**
   * Link two half-edges to each other.
   * @param {number} a
   * @param {number} b
   * @private
   */
  _link(n, t) {
    this._halfedges[n] = t, t !== -1 && (this._halfedges[t] = n);
  }
  /**
   * Add a new triangle given vertex indices and adjacent half-edge ids.
   *
   * @param {number} i0
   * @param {number} i1
   * @param {number} i2
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @private
   */
  _addTriangle(n, t, r, i, o, a) {
    const u = this.trianglesLen;
    return this._triangles[u] = n, this._triangles[u + 1] = t, this._triangles[u + 2] = r, this._link(u, i), this._link(u + 1, o), this._link(u + 2, a), this.trianglesLen += 3, u;
  }
}
function l0(e, n) {
  const t = e / (Math.abs(e) + Math.abs(n));
  return (n > 0 ? 3 - t : 1 + t) / 4;
}
function Nt(e, n, t, r) {
  const i = e - t, o = n - r;
  return i * i + o * o;
}
function c0(e, n, t, r, i, o, a, u) {
  const s = e - a, l = n - u, h = t - a, c = r - u, f = i - a, d = o - u, g = s * s + l * l, m = h * h + c * c, b = f * f + d * d;
  return s * (c * b - m * d) - l * (h * b - m * f) + g * (h * d - c * f) < 0;
}
function f0(e, n, t, r, i, o) {
  const a = t - e, u = r - n, s = i - e, l = o - n, h = a * a + u * u, c = s * s + l * l, f = 0.5 / (a * l - u * s), d = (l * h - u * c) * f, g = (a * c - s * h) * f;
  return d * d + g * g;
}
function h0(e, n, t, r, i, o) {
  const a = t - e, u = r - n, s = i - e, l = o - n, h = a * a + u * u, c = s * s + l * l, f = 0.5 / (a * l - u * s), d = e + (l * h - u * c) * f, g = n + (a * c - s * h) * f;
  return { x: d, y: g };
}
function Cn(e, n, t, r) {
  if (r - t <= 20)
    for (let i = t + 1; i <= r; i++) {
      const o = e[i], a = n[o];
      let u = i - 1;
      for (; u >= t && n[e[u]] > a; ) e[u + 1] = e[u--];
      e[u + 1] = o;
    }
  else {
    const i = t + r >> 1;
    let o = t + 1, a = r;
    In(e, i, o), n[e[t]] > n[e[r]] && In(e, t, r), n[e[o]] > n[e[r]] && In(e, o, r), n[e[t]] > n[e[o]] && In(e, t, o);
    const u = e[o], s = n[u];
    for (; ; ) {
      do
        o++;
      while (n[e[o]] < s);
      do
        a--;
      while (n[e[a]] > s);
      if (a < o) break;
      In(e, o, a);
    }
    e[t + 1] = e[a], e[a] = u, r - o + 1 >= a - t ? (Cn(e, n, o, r), Cn(e, n, t, a - 1)) : (Cn(e, n, t, a - 1), Cn(e, n, o, r));
  }
}
function In(e, n, t) {
  const r = e[n];
  e[n] = e[t], e[t] = r;
}
function d0(e) {
  return e[0];
}
function m0(e) {
  return e[1];
}
const $i = 1e-6;
class ln {
  constructor() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "";
  }
  moveTo(n, t) {
    this._ += `M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +t}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  }
  lineTo(n, t) {
    this._ += `L${this._x1 = +n},${this._y1 = +t}`;
  }
  arc(n, t, r) {
    n = +n, t = +t, r = +r;
    const i = n + r, o = t;
    if (r < 0) throw new Error("negative radius");
    this._x1 === null ? this._ += `M${i},${o}` : (Math.abs(this._x1 - i) > $i || Math.abs(this._y1 - o) > $i) && (this._ += "L" + i + "," + o), r && (this._ += `A${r},${r},0,1,1,${n - r},${t}A${r},${r},0,1,1,${this._x1 = i},${this._y1 = o}`);
  }
  rect(n, t, r, i) {
    this._ += `M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +t}h${+r}v${+i}h${-r}Z`;
  }
  value() {
    return this._ || null;
  }
}
class nr {
  constructor() {
    this._ = [];
  }
  moveTo(n, t) {
    this._.push([n, t]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(n, t) {
    this._.push([n, t]);
  }
  value() {
    return this._.length ? this._ : null;
  }
}
class g0 {
  constructor(n, [t, r, i, o] = [0, 0, 960, 500]) {
    if (!((i = +i) >= (t = +t)) || !((o = +o) >= (r = +r))) throw new Error("invalid bounds");
    this.delaunay = n, this._circumcenters = new Float64Array(n.points.length * 2), this.vectors = new Float64Array(n.points.length * 2), this.xmax = i, this.xmin = t, this.ymax = o, this.ymin = r, this._init();
  }
  update() {
    return this.delaunay.update(), this._init(), this;
  }
  _init() {
    const { delaunay: { points: n, hull: t, triangles: r }, vectors: i } = this;
    let o, a;
    const u = this.circumcenters = this._circumcenters.subarray(0, r.length / 3 * 2);
    for (let m = 0, b = 0, y = r.length, w, S; m < y; m += 3, b += 2) {
      const _ = r[m] * 2, A = r[m + 1] * 2, v = r[m + 2] * 2, D = n[_], U = n[_ + 1], x = n[A], C = n[A + 1], k = n[v], T = n[v + 1], $ = x - D, E = C - U, O = k - D, W = T - U, H = ($ * W - E * O) * 2;
      if (Math.abs(H) < 1e-9) {
        if (o === void 0) {
          o = a = 0;
          for (const Y of t) o += n[Y * 2], a += n[Y * 2 + 1];
          o /= t.length, a /= t.length;
        }
        const I = 1e9 * Math.sign((o - D) * W - (a - U) * O);
        w = (D + k) / 2 - I * W, S = (U + T) / 2 + I * O;
      } else {
        const I = 1 / H, Y = $ * $ + E * E, B = O * O + W * W;
        w = D + (W * Y - E * B) * I, S = U + ($ * B - O * Y) * I;
      }
      u[b] = w, u[b + 1] = S;
    }
    let s = t[t.length - 1], l, h = s * 4, c, f = n[2 * s], d, g = n[2 * s + 1];
    i.fill(0);
    for (let m = 0; m < t.length; ++m)
      s = t[m], l = h, c = f, d = g, h = s * 4, f = n[2 * s], g = n[2 * s + 1], i[l + 2] = i[h] = d - g, i[l + 3] = i[h + 1] = f - c;
  }
  render(n) {
    const t = n == null ? n = new ln() : void 0, { delaunay: { halfedges: r, inedges: i, hull: o }, circumcenters: a, vectors: u } = this;
    if (o.length <= 1) return null;
    for (let h = 0, c = r.length; h < c; ++h) {
      const f = r[h];
      if (f < h) continue;
      const d = Math.floor(h / 3) * 2, g = Math.floor(f / 3) * 2, m = a[d], b = a[d + 1], y = a[g], w = a[g + 1];
      this._renderSegment(m, b, y, w, n);
    }
    let s, l = o[o.length - 1];
    for (let h = 0; h < o.length; ++h) {
      s = l, l = o[h];
      const c = Math.floor(i[l] / 3) * 2, f = a[c], d = a[c + 1], g = s * 4, m = this._project(f, d, u[g + 2], u[g + 3]);
      m && this._renderSegment(f, d, m[0], m[1], n);
    }
    return t && t.value();
  }
  renderBounds(n) {
    const t = n == null ? n = new ln() : void 0;
    return n.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin), t && t.value();
  }
  renderCell(n, t) {
    const r = t == null ? t = new ln() : void 0, i = this._clip(n);
    if (i === null || !i.length) return;
    t.moveTo(i[0], i[1]);
    let o = i.length;
    for (; i[0] === i[o - 2] && i[1] === i[o - 1] && o > 1; ) o -= 2;
    for (let a = 2; a < o; a += 2)
      (i[a] !== i[a - 2] || i[a + 1] !== i[a - 1]) && t.lineTo(i[a], i[a + 1]);
    return t.closePath(), r && r.value();
  }
  *cellPolygons() {
    const { delaunay: { points: n } } = this;
    for (let t = 0, r = n.length / 2; t < r; ++t) {
      const i = this.cellPolygon(t);
      i && (i.index = t, yield i);
    }
  }
  cellPolygon(n) {
    const t = new nr();
    return this.renderCell(n, t), t.value();
  }
  _renderSegment(n, t, r, i, o) {
    let a;
    const u = this._regioncode(n, t), s = this._regioncode(r, i);
    u === 0 && s === 0 ? (o.moveTo(n, t), o.lineTo(r, i)) : (a = this._clipSegment(n, t, r, i, u, s)) && (o.moveTo(a[0], a[1]), o.lineTo(a[2], a[3]));
  }
  contains(n, t, r) {
    return t = +t, t !== t || (r = +r, r !== r) ? !1 : this.delaunay._step(n, t, r) === n;
  }
  *neighbors(n) {
    const t = this._clip(n);
    if (t) for (const r of this.delaunay.neighbors(n)) {
      const i = this._clip(r);
      if (i) {
        e: for (let o = 0, a = t.length; o < a; o += 2)
          for (let u = 0, s = i.length; u < s; u += 2)
            if (t[o] === i[u] && t[o + 1] === i[u + 1] && t[(o + 2) % a] === i[(u + s - 2) % s] && t[(o + 3) % a] === i[(u + s - 1) % s]) {
              yield r;
              break e;
            }
      }
    }
  }
  _cell(n) {
    const { circumcenters: t, delaunay: { inedges: r, halfedges: i, triangles: o } } = this, a = r[n];
    if (a === -1) return null;
    const u = [];
    let s = a;
    do {
      const l = Math.floor(s / 3);
      if (u.push(t[l * 2], t[l * 2 + 1]), s = s % 3 === 2 ? s - 2 : s + 1, o[s] !== n) break;
      s = i[s];
    } while (s !== a && s !== -1);
    return u;
  }
  _clip(n) {
    if (n === 0 && this.delaunay.hull.length === 1)
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    const t = this._cell(n);
    if (t === null) return null;
    const { vectors: r } = this, i = n * 4;
    return this._simplify(r[i] || r[i + 1] ? this._clipInfinite(n, t, r[i], r[i + 1], r[i + 2], r[i + 3]) : this._clipFinite(n, t));
  }
  _clipFinite(n, t) {
    const r = t.length;
    let i = null, o, a, u = t[r - 2], s = t[r - 1], l, h = this._regioncode(u, s), c, f = 0;
    for (let d = 0; d < r; d += 2)
      if (o = u, a = s, u = t[d], s = t[d + 1], l = h, h = this._regioncode(u, s), l === 0 && h === 0)
        c = f, f = 0, i ? i.push(u, s) : i = [u, s];
      else {
        let g, m, b, y, w;
        if (l === 0) {
          if ((g = this._clipSegment(o, a, u, s, l, h)) === null) continue;
          [m, b, y, w] = g;
        } else {
          if ((g = this._clipSegment(u, s, o, a, h, l)) === null) continue;
          [y, w, m, b] = g, c = f, f = this._edgecode(m, b), c && f && this._edge(n, c, f, i, i.length), i ? i.push(m, b) : i = [m, b];
        }
        c = f, f = this._edgecode(y, w), c && f && this._edge(n, c, f, i, i.length), i ? i.push(y, w) : i = [y, w];
      }
    if (i)
      c = f, f = this._edgecode(i[0], i[1]), c && f && this._edge(n, c, f, i, i.length);
    else if (this.contains(n, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2))
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    return i;
  }
  _clipSegment(n, t, r, i, o, a) {
    const u = o < a;
    for (u && ([n, t, r, i, o, a] = [r, i, n, t, a, o]); ; ) {
      if (o === 0 && a === 0) return u ? [r, i, n, t] : [n, t, r, i];
      if (o & a) return null;
      let s, l, h = o || a;
      h & 8 ? (s = n + (r - n) * (this.ymax - t) / (i - t), l = this.ymax) : h & 4 ? (s = n + (r - n) * (this.ymin - t) / (i - t), l = this.ymin) : h & 2 ? (l = t + (i - t) * (this.xmax - n) / (r - n), s = this.xmax) : (l = t + (i - t) * (this.xmin - n) / (r - n), s = this.xmin), o ? (n = s, t = l, o = this._regioncode(n, t)) : (r = s, i = l, a = this._regioncode(r, i));
    }
  }
  _clipInfinite(n, t, r, i, o, a) {
    let u = Array.from(t), s;
    if ((s = this._project(u[0], u[1], r, i)) && u.unshift(s[0], s[1]), (s = this._project(u[u.length - 2], u[u.length - 1], o, a)) && u.push(s[0], s[1]), u = this._clipFinite(n, u))
      for (let l = 0, h = u.length, c, f = this._edgecode(u[h - 2], u[h - 1]); l < h; l += 2)
        c = f, f = this._edgecode(u[l], u[l + 1]), c && f && (l = this._edge(n, c, f, u, l), h = u.length);
    else this.contains(n, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2) && (u = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax]);
    return u;
  }
  _edge(n, t, r, i, o) {
    for (; t !== r; ) {
      let a, u;
      switch (t) {
        case 5:
          t = 4;
          continue;
        case 4:
          t = 6, a = this.xmax, u = this.ymin;
          break;
        case 6:
          t = 2;
          continue;
        case 2:
          t = 10, a = this.xmax, u = this.ymax;
          break;
        case 10:
          t = 8;
          continue;
        case 8:
          t = 9, a = this.xmin, u = this.ymax;
          break;
        case 9:
          t = 1;
          continue;
        case 1:
          t = 5, a = this.xmin, u = this.ymin;
          break;
      }
      (i[o] !== a || i[o + 1] !== u) && this.contains(n, a, u) && (i.splice(o, 0, a, u), o += 2);
    }
    return o;
  }
  _project(n, t, r, i) {
    let o = 1 / 0, a, u, s;
    if (i < 0) {
      if (t <= this.ymin) return null;
      (a = (this.ymin - t) / i) < o && (s = this.ymin, u = n + (o = a) * r);
    } else if (i > 0) {
      if (t >= this.ymax) return null;
      (a = (this.ymax - t) / i) < o && (s = this.ymax, u = n + (o = a) * r);
    }
    if (r > 0) {
      if (n >= this.xmax) return null;
      (a = (this.xmax - n) / r) < o && (u = this.xmax, s = t + (o = a) * i);
    } else if (r < 0) {
      if (n <= this.xmin) return null;
      (a = (this.xmin - n) / r) < o && (u = this.xmin, s = t + (o = a) * i);
    }
    return [u, s];
  }
  _edgecode(n, t) {
    return (n === this.xmin ? 1 : n === this.xmax ? 2 : 0) | (t === this.ymin ? 4 : t === this.ymax ? 8 : 0);
  }
  _regioncode(n, t) {
    return (n < this.xmin ? 1 : n > this.xmax ? 2 : 0) | (t < this.ymin ? 4 : t > this.ymax ? 8 : 0);
  }
  _simplify(n) {
    if (n && n.length > 4) {
      for (let t = 0; t < n.length; t += 2) {
        const r = (t + 2) % n.length, i = (t + 4) % n.length;
        (n[t] === n[r] && n[r] === n[i] || n[t + 1] === n[r + 1] && n[r + 1] === n[i + 1]) && (n.splice(r, 2), t -= 2);
      }
      n.length || (n = null);
    }
    return n;
  }
}
const b0 = 2 * Math.PI, Tn = Math.pow;
function y0(e) {
  return e[0];
}
function v0(e) {
  return e[1];
}
function p0(e) {
  const { triangles: n, coords: t } = e;
  for (let r = 0; r < n.length; r += 3) {
    const i = 2 * n[r], o = 2 * n[r + 1], a = 2 * n[r + 2];
    if ((t[a] - t[i]) * (t[o + 1] - t[i + 1]) - (t[o] - t[i]) * (t[a + 1] - t[i + 1]) > 1e-10) return !1;
  }
  return !0;
}
function x0(e, n, t) {
  return [e + Math.sin(e + n) * t, n + Math.cos(e - n) * t];
}
class _r {
  static from(n, t = y0, r = v0, i) {
    return new _r("length" in n ? M0(n, t, r, i) : Float64Array.from(w0(n, t, r, i)));
  }
  constructor(n) {
    this._delaunator = new Mt(n), this.inedges = new Int32Array(n.length / 2), this._hullIndex = new Int32Array(n.length / 2), this.points = this._delaunator.coords, this._init();
  }
  update() {
    return this._delaunator.update(), this._init(), this;
  }
  _init() {
    const n = this._delaunator, t = this.points;
    if (n.hull && n.hull.length > 2 && p0(n)) {
      this.collinear = Int32Array.from({ length: t.length / 2 }, (f, d) => d).sort((f, d) => t[2 * f] - t[2 * d] || t[2 * f + 1] - t[2 * d + 1]);
      const s = this.collinear[0], l = this.collinear[this.collinear.length - 1], h = [t[2 * s], t[2 * s + 1], t[2 * l], t[2 * l + 1]], c = 1e-8 * Math.hypot(h[3] - h[1], h[2] - h[0]);
      for (let f = 0, d = t.length / 2; f < d; ++f) {
        const g = x0(t[2 * f], t[2 * f + 1], c);
        t[2 * f] = g[0], t[2 * f + 1] = g[1];
      }
      this._delaunator = new Mt(t);
    } else
      delete this.collinear;
    const r = this.halfedges = this._delaunator.halfedges, i = this.hull = this._delaunator.hull, o = this.triangles = this._delaunator.triangles, a = this.inedges.fill(-1), u = this._hullIndex.fill(-1);
    for (let s = 0, l = r.length; s < l; ++s) {
      const h = o[s % 3 === 2 ? s - 2 : s + 1];
      (r[s] === -1 || a[h] === -1) && (a[h] = s);
    }
    for (let s = 0, l = i.length; s < l; ++s)
      u[i[s]] = s;
    i.length <= 2 && i.length > 0 && (this.triangles = new Int32Array(3).fill(-1), this.halfedges = new Int32Array(3).fill(-1), this.triangles[0] = i[0], a[i[0]] = 1, i.length === 2 && (a[i[1]] = 0, this.triangles[1] = i[1], this.triangles[2] = i[1]));
  }
  voronoi(n) {
    return new g0(this, n);
  }
  *neighbors(n) {
    const { inedges: t, hull: r, _hullIndex: i, halfedges: o, triangles: a, collinear: u } = this;
    if (u) {
      const c = u.indexOf(n);
      c > 0 && (yield u[c - 1]), c < u.length - 1 && (yield u[c + 1]);
      return;
    }
    const s = t[n];
    if (s === -1) return;
    let l = s, h = -1;
    do {
      if (yield h = a[l], l = l % 3 === 2 ? l - 2 : l + 1, a[l] !== n) return;
      if (l = o[l], l === -1) {
        const c = r[(i[n] + 1) % r.length];
        c !== h && (yield c);
        return;
      }
    } while (l !== s);
  }
  find(n, t, r = 0) {
    if (n = +n, n !== n || (t = +t, t !== t)) return -1;
    const i = r;
    let o;
    for (; (o = this._step(r, n, t)) >= 0 && o !== r && o !== i; ) r = o;
    return o;
  }
  _step(n, t, r) {
    const { inedges: i, hull: o, _hullIndex: a, halfedges: u, triangles: s, points: l } = this;
    if (i[n] === -1 || !l.length) return (n + 1) % (l.length >> 1);
    let h = n, c = Tn(t - l[n * 2], 2) + Tn(r - l[n * 2 + 1], 2);
    const f = i[n];
    let d = f;
    do {
      let g = s[d];
      const m = Tn(t - l[g * 2], 2) + Tn(r - l[g * 2 + 1], 2);
      if (m < c && (c = m, h = g), d = d % 3 === 2 ? d - 2 : d + 1, s[d] !== n) break;
      if (d = u[d], d === -1) {
        if (d = o[(a[n] + 1) % o.length], d !== g && Tn(t - l[d * 2], 2) + Tn(r - l[d * 2 + 1], 2) < c)
          return d;
        break;
      }
    } while (d !== f);
    return h;
  }
  render(n) {
    const t = n == null ? n = new ln() : void 0, { points: r, halfedges: i, triangles: o } = this;
    for (let a = 0, u = i.length; a < u; ++a) {
      const s = i[a];
      if (s < a) continue;
      const l = o[a] * 2, h = o[s] * 2;
      n.moveTo(r[l], r[l + 1]), n.lineTo(r[h], r[h + 1]);
    }
    return this.renderHull(n), t && t.value();
  }
  renderPoints(n, t) {
    t === void 0 && (!n || typeof n.moveTo != "function") && (t = n, n = null), t = t == null ? 2 : +t;
    const r = n == null ? n = new ln() : void 0, { points: i } = this;
    for (let o = 0, a = i.length; o < a; o += 2) {
      const u = i[o], s = i[o + 1];
      n.moveTo(u + t, s), n.arc(u, s, t, 0, b0);
    }
    return r && r.value();
  }
  renderHull(n) {
    const t = n == null ? n = new ln() : void 0, { hull: r, points: i } = this, o = r[0] * 2, a = r.length;
    n.moveTo(i[o], i[o + 1]);
    for (let u = 1; u < a; ++u) {
      const s = 2 * r[u];
      n.lineTo(i[s], i[s + 1]);
    }
    return n.closePath(), t && t.value();
  }
  hullPolygon() {
    const n = new nr();
    return this.renderHull(n), n.value();
  }
  renderTriangle(n, t) {
    const r = t == null ? t = new ln() : void 0, { points: i, triangles: o } = this, a = o[n *= 3] * 2, u = o[n + 1] * 2, s = o[n + 2] * 2;
    return t.moveTo(i[a], i[a + 1]), t.lineTo(i[u], i[u + 1]), t.lineTo(i[s], i[s + 1]), t.closePath(), r && r.value();
  }
  *trianglePolygons() {
    const { triangles: n } = this;
    for (let t = 0, r = n.length / 3; t < r; ++t)
      yield this.trianglePolygon(t);
  }
  trianglePolygon(n) {
    const t = new nr();
    return this.renderTriangle(n, t), t.value();
  }
}
function M0(e, n, t, r) {
  const i = e.length, o = new Float64Array(i * 2);
  for (let a = 0; a < i; ++a) {
    const u = e[a];
    o[a * 2] = n.call(r, u, a, e), o[a * 2 + 1] = t.call(r, u, a, e);
  }
  return o;
}
function* w0(e, n, t, r) {
  let i = 0;
  for (const o of e)
    yield n.call(r, o, i, e), yield t.call(r, o, i, e), ++i;
}
var Cr = function(e) {
  return [e.x, e.y];
}, Vn = qu, na = "cursor", ta = "top", T0 = function(e) {
  var n = e.points, t = e.getNodePosition, r = t === void 0 ? Cr : t, i = e.margin, o = i === void 0 ? Vn : i;
  return n.map(function(a) {
    var u = r(a), s = u[0], l = u[1];
    return [s + o.left, l + o.top];
  });
}, _0 = function(e) {
  var n = e.points, t = e.width, r = e.height, i = e.margin, o = i === void 0 ? Vn : i, a = e.debug, u = _r.from(n), s = a ? u.voronoi([0, 0, o.left + t + o.right, o.top + r + o.bottom]) : void 0;
  return { points: n, delaunay: u, voronoi: s };
}, ra = function(e) {
  var n = e.points, t = e.getNodePosition, r = t === void 0 ? Cr : t, i = e.width, o = e.height, a = e.margin, u = a === void 0 ? Vn : a, s = e.debug;
  return le(function() {
    return _0({ points: T0({ points: n, margin: u, getNodePosition: r }), width: i, height: o, margin: u, debug: s });
  }, [n, i, o, u, s]);
}, C0 = function(e) {
  var n = e.elementRef, t = e.nodes, r = e.getNodePosition, i = r === void 0 ? Cr : r, o = e.delaunay, a = e.setCurrent, u = e.margin, s = u === void 0 ? Vn : u, l = e.detectionRadius, h = l === void 0 ? 1 / 0 : l, c = e.isInteractive, f = c === void 0 || c, d = e.onMouseEnter, g = e.onMouseMove, m = e.onMouseLeave, b = e.onClick, y = e.onTouchStart, w = e.onTouchMove, S = e.onTouchEnd, _ = e.enableTouchCrosshair, A = _ !== void 0 && _, v = e.tooltip, D = e.tooltipPosition, U = D === void 0 ? na : D, x = e.tooltipAnchor, C = x === void 0 ? ta : x, k = fn(null), T = k[0], $ = k[1], E = tr(null);
  Ai(function() {
    E.current = T;
  }, [E, T]);
  var O = K(function(L) {
    if (!n.current) return null;
    var p = qi(n.current, L), F = p[0], P = p[1], M = o.find(F, P), R = M !== void 0 ? t[M] : null;
    if (R && h !== 1 / 0) {
      var N = i(R), Z = N[0], G = N[1];
      Vu(F, P, Z + s.left, G + s.top) > h && (M = null, R = null);
    }
    return M === null || R === null ? null : [M, R];
  }, [n, o, t, i, s, h]), W = wt(), H = W.showTooltipAt, I = W.showTooltipFromEvent, Y = W.hideTooltip, B = le(function() {
    if (v) return U === "cursor" ? function(L, p) {
      I(v(L), p, C);
    } : function(L) {
      var p = i(L), F = p[0], P = p[1];
      H(v(L), [F + s.left, P + s.top], C);
    };
  }, [H, I, v, U, C, i, s]), X = K(function(L) {
    var p = O(L);
    if ($(p), a == null || a(p ? p[1] : null), p) {
      var F = p[1];
      B == null || B(F, L), d == null || d(p[1], L);
    }
  }, [O, $, a, B, d]), Q = K(function(L) {
    var p = O(L);
    if ($(p), p) {
      var F = p[0], P = p[1];
      if (a == null || a(P), B == null || B(P, L), E.current) {
        var M = E.current, R = M[0], N = M[1];
        F !== R ? m == null || m(N, L) : g == null || g(P, L);
      } else d == null || d(P, L);
    } else a == null || a(null), Y == null || Y(), E.current && (m == null || m(E.current[1], L));
  }, [O, $, E, d, g, m, B, Y]), ne = K(function(L) {
    $(null), a == null || a(null), Y(), m && E.current && m(E.current[1], L);
  }, [$, a, E, Y, m]), J = K(function(L) {
    var p = O(L);
    $(p), p && (b == null || b(p[1], L));
  }, [O, $, b]), ie = K(function(L) {
    var p = O(L);
    A && ($(p), a == null || a(p ? p[1] : null)), p && (y == null || y(p[1], L));
  }, [O, $, a, A, y]), V = K(function(L) {
    var p = O(L);
    A && ($(p), a == null || a(p ? p[1] : null)), p && (w == null || w(p[1], L));
  }, [O, $, a, A, w]), oe = K(function(L) {
    A && ($(null), a == null || a(null)), S && E.current && S(E.current[1], L);
  }, [A, $, a, S, E]);
  return { current: T, handleMouseEnter: f ? X : void 0, handleMouseMove: f ? Q : void 0, handleMouseLeave: f ? ne : void 0, handleClick: f ? J : void 0, handleTouchStart: f ? ie : void 0, handleTouchMove: f ? V : void 0, handleTouchEnd: f ? oe : void 0 };
}, k0 = function(e) {
  var n = e.nodes, t = e.width, r = e.height, i = e.margin, o = i === void 0 ? Vn : i, a = e.getNodePosition, u = e.setCurrent, s = e.onMouseEnter, l = e.onMouseMove, h = e.onMouseLeave, c = e.onClick, f = e.onTouchStart, d = e.onTouchMove, g = e.onTouchEnd, m = e.enableTouchCrosshair, b = m !== void 0 && m, y = e.detectionRadius, w = y === void 0 ? 1 / 0 : y, S = e.tooltip, _ = e.tooltipPosition, A = _ === void 0 ? na : _, v = e.tooltipAnchor, D = v === void 0 ? ta : v, U = e.debug, x = tr(null), C = ra({ points: n, getNodePosition: a, width: t, height: r, margin: o, debug: U }), k = C.delaunay, T = C.voronoi, $ = C0({ elementRef: x, nodes: n, delaunay: k, margin: o, detectionRadius: w, setCurrent: u, onMouseEnter: s, onMouseMove: l, onMouseLeave: h, onClick: c, onTouchStart: f, onTouchMove: d, onTouchEnd: g, enableTouchCrosshair: b, tooltip: S, tooltipPosition: A, tooltipAnchor: D }), E = $.current, O = $.handleMouseEnter, W = $.handleMouseMove, H = $.handleMouseLeave, I = $.handleClick, Y = $.handleTouchStart, B = $.handleTouchMove, X = $.handleTouchEnd, Q = le(function() {
    if (U && T) return T.render();
  }, [U, T]);
  return j.jsxs("g", { ref: x, transform: "translate(" + -o.left + "," + -o.top + ")", children: [U && T && j.jsxs(j.Fragment, { children: [j.jsx("path", { d: Q, stroke: "red", strokeWidth: 1, opacity: 0.75 }), w < 1 / 0 && j.jsx("path", { stroke: "red", strokeWidth: 0.35, fill: "none", d: k.renderPoints(void 0, w) }), E && j.jsx("path", { fill: "pink", opacity: 0.35, d: T.renderCell(E[0]) })] }), j.jsx("rect", { "data-ref": "mesh-interceptor", width: o.left + t + o.right, height: o.top + r + o.bottom, fill: "red", opacity: 0, style: { cursor: "auto" }, onMouseEnter: O, onMouseMove: W, onMouseLeave: H, onTouchStart: Y, onTouchMove: B, onTouchEnd: X, onClick: I })] });
}, S0 = function(e, n) {
  e.save(), e.globalAlpha = 0.75, e.beginPath(), n.render(e), e.strokeStyle = "red", e.lineWidth = 1, e.stroke(), e.restore();
}, $0 = function(e, n, t) {
  e.save(), e.globalAlpha = 0.35, e.beginPath(), n.renderCell(t, e), e.fillStyle = "pink", e.fill(), e.restore();
};
function de() {
  return de = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, de.apply(this, arguments);
}
var kr = me(function(e) {
  var n = e.point;
  return j.jsx(Ku, { id: j.jsxs("span", { children: ["x: ", j.jsx("strong", { children: n.data.xFormatted }), ", y:", " ", j.jsx("strong", { children: n.data.yFormatted })] }), enableChip: !0, color: n.serieColor });
}), ia = me(function(e) {
  var n = e.slice, t = e.axis, r = Be(), i = t === "x" ? "y" : "x";
  return j.jsx(Zu, { rows: n.points.map(function(o) {
    return [j.jsx(Qu, { color: o.serieColor, style: r.tooltip.chip }, "chip"), o.serieId, j.jsx("span", { style: r.tooltip.tableCellValue, children: o.data[i + "Formatted"] }, "value")];
  }) });
}), oa = { curve: "linear", xScale: { type: "point" }, yScale: { type: "linear", min: 0, max: "auto" }, layers: ["grid", "markers", "axes", "areas", "crosshair", "lines", "points", "slices", "mesh", "legends"], axisBottom: {}, axisLeft: {}, enableGridX: !0, enableGridY: !0, enablePoints: !0, pointSize: 6, pointColor: { from: "color" }, pointBorderWidth: 0, pointBorderColor: { theme: "background" }, enablePointLabel: !1, pointLabel: "yFormatted", colors: { scheme: "nivo" }, enableArea: !1, areaBaselineValue: 0, areaOpacity: 0.2, areaBlendMode: "normal", lineWidth: 2, legends: [], isInteractive: !0, tooltip: kr, enableSlices: !1, debugSlices: !1, sliceTooltip: ia, debugMesh: !1, enableCrosshair: !0, crosshairType: "bottom-left" }, We = de({}, oa, { enablePointLabel: !1, useMesh: !1, enableTouchCrosshair: !1, animate: !0, motionConfig: "gentle", defs: [], fill: [], role: "img", initialHiddenIds: [] });
de({}, oa, { pixelRatio: typeof window < "u" && window.devicePixelRatio || 1 });
var U0 = function(e) {
  var n = e.curve;
  return le(function() {
    return us().defined(function(t) {
      return t.x !== null && t.y !== null;
    }).x(function(t) {
      return t.x;
    }).y(function(t) {
      return t.y;
    }).curve(Ji(n));
  }, [n]);
}, A0 = function(e) {
  var n = e.curve, t = e.yScale, r = e.areaBaselineValue;
  return le(function() {
    return as().defined(function(i) {
      return i.x !== null && i.y !== null;
    }).x(function(i) {
      return i.x;
    }).y1(function(i) {
      return i.y;
    }).curve(Ji(n)).y0(t(r));
  }, [n, t, r]);
}, F0 = function(e) {
  var n = e.componentId, t = e.enableSlices, r = e.points, i = e.width, o = e.height;
  return le(function() {
    if (t === !1) return [];
    if (t === "x") {
      var a = /* @__PURE__ */ new Map();
      return r.forEach(function(s) {
        s.data.x !== null && s.data.y !== null && (a.has(s.x) ? a.get(s.x).push(s) : a.set(s.x, [s]));
      }), Array.from(a.entries()).sort(function(s, l) {
        return s[0] - l[0];
      }).map(function(s, l, h) {
        var c, f, d = s[0], g = s[1], m = h[l - 1], b = h[l + 1];
        return c = m ? d - (d - m[0]) / 2 : d, f = b ? d - c + (b[0] - d) / 2 : i - c, { id: "slice:" + n + ":" + d, x0: c, x: d, y0: 0, y: 0, width: f, height: o, points: g.reverse() };
      });
    }
    if (t === "y") {
      var u = /* @__PURE__ */ new Map();
      return r.forEach(function(s) {
        s.data.x !== null && s.data.y !== null && (u.has(s.y) ? u.get(s.y).push(s) : u.set(s.y, [s]));
      }), Array.from(u.entries()).sort(function(s, l) {
        return s[0] - l[0];
      }).map(function(s, l, h) {
        var c, f, d = s[0], g = s[1], m = h[l - 1], b = h[l + 1];
        return c = m ? d - (d - m[0]) / 2 : d, f = b ? d - c + (b[0] - d) / 2 : o - c, { id: d, x0: 0, x: 0, y0: c, y: d, width: i, height: f, points: g.reverse() };
      });
    }
  }, [n, t, o, r, i]);
}, D0 = "line", aa = function(e) {
  var n = e.data, t = e.xScale, r = t === void 0 ? We.xScale : t, i = e.xFormat, o = e.yScale, a = o === void 0 ? We.yScale : o, u = e.yFormat, s = e.width, l = e.height, h = e.colors, c = h === void 0 ? We.colors : h, f = e.curve, d = f === void 0 ? We.curve : f, g = e.areaBaselineValue, m = g === void 0 ? We.areaBaselineValue : g, b = e.pointColor, y = b === void 0 ? We.pointColor : b, w = e.pointBorderColor, S = w === void 0 ? We.pointBorderColor : w, _ = e.enableSlices, A = _ === void 0 ? We.enableSlicesTooltip : _, v = e.initialHiddenIds, D = v === void 0 ? We.initialHiddenIds : v, U = fn(t0(D0))[0], x = Ir(i), C = Ir(u), k = rf(c, "id"), T = Be(), $ = vt(y, T), E = vt(S, T), O = fn(D ?? []), W = O[0], H = O[1], I = le(function() {
    return Sd(n.filter(function(L) {
      return W.indexOf(L.id) === -1;
    }), r, a, s, l);
  }, [n, W, r, a, s, l]), Y = I.xScale, B = I.yScale, X = I.series, Q = le(function() {
    var L = n.map(function(F) {
      return { id: F.id, label: F.id, color: k(F) };
    }), p = L.map(function(F) {
      return de({}, X.find(function(P) {
        return P.id === F.id;
      }), { color: F.color });
    }).filter(function(F) {
      return !!F.id;
    });
    return { legendData: L.map(function(F) {
      return de({}, F, { hidden: !p.find(function(P) {
        return P.id === F.id;
      }) });
    }).reverse(), series: p };
  }, [n, X, k]), ne = Q.legendData, J = Q.series, ie = K(function(L) {
    H(function(p) {
      return p.indexOf(L) > -1 ? p.filter(function(F) {
        return F !== L;
      }) : [].concat(p, [L]);
    });
  }, []), V = function(L) {
    var p = L.series, F = L.getPointColor, P = L.getPointBorderColor, M = L.formatX, R = L.formatY;
    return le(function() {
      return p.reduce(function(N, Z) {
        return [].concat(N, Z.data.filter(function(G) {
          return G.position.x !== null && G.position.y !== null;
        }).map(function(G, te) {
          var fe = { id: Z.id + "." + te, index: N.length + te, serieId: Z.id, serieColor: Z.color, x: G.position.x, y: G.position.y };
          return fe.color = F(Z), fe.borderColor = P(fe), fe.data = de({}, G.data, { xFormatted: M(G.data.x), yFormatted: R(G.data.y) }), fe;
        }));
      }, []);
    }, [p, F, P, M, R]);
  }({ series: J, getPointColor: $, getPointBorderColor: E, formatX: x, formatY: C }), oe = F0({ componentId: U, enableSlices: A, points: V, width: s, height: l });
  return { legendData: ne, toggleSerie: ie, lineGenerator: U0({ curve: d }), areaGenerator: A0({ curve: d, yScale: B, areaBaselineValue: m }), getColor: k, series: J, xScale: Y, yScale: B, slices: oe, points: V };
}, j0 = function(e) {
  var n = e.areaBlendMode, t = e.areaOpacity, r = e.color, i = e.fill, o = e.path, a = rr(), u = a.animate, s = a.config, l = Zi(o), h = Gi({ color: r, config: s, immediate: !u });
  return j.jsx(qe.path, { d: l, fill: i || h.color, fillOpacity: t, strokeWidth: 0, style: { mixBlendMode: n } });
}, E0 = me(function(e) {
  var n = e.areaGenerator, t = e.areaOpacity, r = e.areaBlendMode, i = e.lines.slice(0).reverse();
  return j.jsx("g", { children: i.map(function(o) {
    return j.jsx(j0, de({ path: n(o.data.map(function(a) {
      return a.position;
    })) }, de({ areaOpacity: t, areaBlendMode: r }, o)), o.id);
  }) });
}), W0 = me(function(e) {
  var n = e.lineGenerator, t = e.points, r = e.color, i = e.thickness, o = le(function() {
    return n(t);
  }, [n, t]), a = Zi(o);
  return j.jsx(qe.path, { d: a, fill: "none", strokeWidth: i, stroke: r });
}), Y0 = me(function(e) {
  var n = e.lines, t = e.lineGenerator, r = e.lineWidth;
  return n.slice(0).reverse().map(function(i) {
    var o = i.id, a = i.data, u = i.color;
    return j.jsx(W0, { id: o, points: a.map(function(s) {
      return s.position;
    }), lineGenerator: t, color: u, thickness: r }, o);
  });
}), O0 = me(function(e) {
  var n = e.slice, t = e.slices, r = e.axis, i = e.debug, o = e.tooltip, a = e.isCurrent, u = e.setCurrent, s = e.onMouseEnter, l = e.onMouseMove, h = e.onMouseLeave, c = e.onClick, f = e.onTouchStart, d = e.onTouchMove, g = e.onTouchEnd, m = wt(), b = m.showTooltipFromEvent, y = m.hideTooltip, w = K(function(x) {
    b(ke(o, { slice: n, axis: r }), x, "right"), u(n), s && s(n, x);
  }, [b, o, n, r, u, s]), S = K(function(x) {
    b(ke(o, { slice: n, axis: r }), x, "right"), l && l(n, x);
  }, [b, o, n, r, l]), _ = K(function(x) {
    y(), u(null), h && h(n, x);
  }, [y, u, h, n]), A = K(function(x) {
    c && c(n, x);
  }, [n, c]), v = K(function(x) {
    b(ke(o, { slice: n, axis: r }), x, "right"), u(n), f && f(n, x);
  }, [r, f, u, b, n, o]), D = K(function(x) {
    var C = x.touches[0], k = document.elementFromPoint(C.clientX, C.clientY), T = k == null ? void 0 : k.getAttribute("data-ref");
    if (T) {
      var $ = t.find(function(E) {
        return E.id === T;
      });
      $ && (b(ke(o, { slice: $, axis: r }), x, "right"), u($));
    }
    d && d(n, x);
  }, [r, d, u, b, n, t, o]), U = K(function(x) {
    y(), u(null), g && g(n, x);
  }, [y, u, g, n]);
  return j.jsx("rect", { x: n.x0, y: n.y0, width: n.width, height: n.height, stroke: "red", strokeWidth: i ? 1 : 0, strokeOpacity: 0.75, fill: "red", fillOpacity: a && i ? 0.35 : 0, onMouseEnter: w, onMouseMove: S, onMouseLeave: _, onClick: A, onTouchStart: v, onTouchMove: D, onTouchEnd: U, "data-ref": n.id });
}), P0 = me(function(e) {
  var n = e.slices, t = e.axis, r = e.debug, i = e.height, o = e.tooltip, a = e.current, u = e.setCurrent, s = e.onMouseEnter, l = e.onMouseMove, h = e.onMouseLeave, c = e.onClick, f = e.onTouchStart, d = e.onTouchMove, g = e.onTouchEnd;
  return n.map(function(m) {
    return j.jsx(O0, { slice: m, slices: n, axis: t, debug: r, height: i, tooltip: o, setCurrent: u, isCurrent: a !== null && a.id === m.id, onMouseEnter: s, onMouseMove: l, onMouseLeave: h, onClick: c, onTouchStart: f, onTouchMove: d, onTouchEnd: g }, m.id);
  });
}), L0 = me(function(e) {
  var n = e.points, t = e.symbol, r = e.size, i = e.borderWidth, o = e.enableLabel, a = e.label, u = e.labelYOffset, s = Be(), l = Ju(a), h = n.slice(0).reverse().map(function(c) {
    return { id: c.id, x: c.x, y: c.y, datum: c.data, fill: c.color, stroke: c.borderColor, label: o ? l(c) : null };
  });
  return j.jsx("g", { children: h.map(function(c) {
    return j.jsx(es, { x: c.x, y: c.y, datum: c.datum, symbol: t, size: r, color: c.fill, borderWidth: i, borderColor: c.stroke, label: c.label, labelYOffset: u, theme: s }, c.id);
  }) });
}), H0 = me(function(e) {
  var n = e.points, t = e.width, r = e.height, i = e.margin, o = e.setCurrent, a = e.onMouseEnter, u = e.onMouseMove, s = e.onMouseLeave, l = e.onClick, h = e.onTouchStart, c = e.onTouchMove, f = e.onTouchEnd, d = e.tooltip, g = e.debug, m = e.enableTouchCrosshair, b = wt(), y = b.showTooltipAt, w = b.hideTooltip, S = K(function(C, k) {
    y(ke(d, { point: C }), [C.x + i.left, C.y + i.top], "top"), a && a(C, k);
  }, [y, d, a, i]), _ = K(function(C, k) {
    y(ke(d, { point: C }), [C.x + i.left, C.y + i.top], "top"), u && u(C, k);
  }, [y, d, i.left, i.top, u]), A = K(function(C, k) {
    w(), s && s(C, k);
  }, [w, s]), v = K(function(C, k) {
    l && l(C, k);
  }, [l]), D = K(function(C, k) {
    y(ke(d, { point: C }), [C.x + i.left, C.y + i.top], "top"), h && h(C, k);
  }, [i.left, i.top, h, y, d]), U = K(function(C, k) {
    y(ke(d, { point: C }), [C.x + i.left, C.y + i.top], "top"), c && c(C, k);
  }, [i.left, i.top, c, y, d]), x = K(function(C, k) {
    w(), f && f(C, k);
  }, [f, w]);
  return j.jsx(k0, { nodes: n, width: t, height: r, setCurrent: o, onMouseEnter: S, onMouseMove: _, onMouseLeave: A, onClick: v, onTouchStart: D, onTouchMove: U, onTouchEnd: x, enableTouchCrosshair: m, debug: g });
}), I0 = Ki(function(e) {
  var n = e.data, t = e.xScale, r = t === void 0 ? { type: "point" } : t, i = e.xFormat, o = e.yScale, a = o === void 0 ? { type: "linear", min: 0, max: "auto" } : o, u = e.yFormat, s = e.layers, l = s === void 0 ? ["grid", "markers", "axes", "areas", "crosshair", "lines", "points", "slices", "mesh", "legends"] : s, h = e.curve, c = h === void 0 ? "linear" : h, f = e.areaBaselineValue, d = f === void 0 ? 0 : f, g = e.colors, m = g === void 0 ? { scheme: "nivo" } : g, b = e.margin, y = e.width, w = e.height, S = e.axisTop, _ = e.axisRight, A = e.axisBottom, v = A === void 0 ? {} : A, D = e.axisLeft, U = D === void 0 ? {} : D, x = e.enableGridX, C = x === void 0 || x, k = e.enableGridY, T = k === void 0 || k, $ = e.gridXValues, E = e.gridYValues, O = e.lineWidth, W = O === void 0 ? 2 : O, H = e.enableArea, I = H !== void 0 && H, Y = e.areaOpacity, B = Y === void 0 ? 0.2 : Y, X = e.areaBlendMode, Q = X === void 0 ? "normal" : X, ne = e.enablePoints, J = ne === void 0 || ne, ie = e.pointSymbol, V = e.pointSize, oe = V === void 0 ? 6 : V, L = e.pointColor, p = L === void 0 ? { from: "color" } : L, F = e.pointBorderWidth, P = F === void 0 ? 0 : F, M = e.pointBorderColor, R = M === void 0 ? { theme: "background" } : M, N = e.enablePointLabel, Z = N !== void 0 && N, G = e.pointLabel, te = G === void 0 ? "data.yFormatted" : G, fe = e.pointLabelYOffset, Ve = e.defs, ge = Ve === void 0 ? [] : Ve, we = e.fill, ve = we === void 0 ? [] : we, ze = e.markers, Fn = e.legends, Ke = Fn === void 0 ? [] : Fn, Te = e.isInteractive, be = Te === void 0 || Te, pe = e.useMesh, Ze = pe !== void 0 && pe, Ne = e.debugMesh, $e = Ne !== void 0 && Ne, Dn = e.onMouseEnter, Ue = e.onMouseMove, Re = e.onMouseLeave, Ae = e.onClick, Qe = e.onTouchStart, bn = e.onTouchMove, _e = e.onTouchEnd, Je = e.tooltip, yn = Je === void 0 ? kr : Je, Xe = e.enableSlices, Ge = Xe !== void 0 && Xe, jn = e.debugSlices, Kn = jn !== void 0 && jn, en = e.sliceTooltip, Zn = en === void 0 ? ia : en, En = e.enableCrosshair, vn = En === void 0 || En, Wn = e.crosshairType, Ut = Wn === void 0 ? "bottom-left" : Wn, Qn = e.enableTouchCrosshair, z = Qn !== void 0 && Qn, ee = e.role, Fe = ee === void 0 ? "img" : ee, nn = e.initialHiddenIds, re = nn === void 0 ? [] : nn, tn = Qi(y, w, b), Sr = tn.margin, De = tn.innerWidth, Ce = tn.innerHeight, ua = tn.outerWidth, sa = tn.outerHeight, je = aa({ data: n, xScale: r, xFormat: i, yScale: a, yFormat: u, width: De, height: Ce, colors: m, curve: c, areaBaselineValue: d, pointColor: p, pointBorderColor: R, enableSlices: Ge, initialHiddenIds: re }), la = je.legendData, ca = je.toggleSerie, $r = je.lineGenerator, Ur = je.areaGenerator, Jn = je.series, et = je.xScale, nt = je.yScale, Ar = je.slices, At = je.points, pn = Be(), fa = vt(p, pn), ha = vt(R, pn), Fr = fn(null), Yn = Fr[0], Dr = Fr[1], jr = fn(null), On = jr[0], Er = jr[1], rn = { grid: j.jsx(Pd, { theme: pn, width: De, height: Ce, xScale: C ? et : null, yScale: T ? nt : null, xValues: $, yValues: E }, "grid"), markers: j.jsx(ns, { markers: ze, width: De, height: Ce, xScale: et, yScale: nt, theme: pn }, "markers"), axes: j.jsx(Yd, { xScale: et, yScale: nt, width: De, height: Ce, theme: pn, top: S, right: _, bottom: v, left: U }, "axes"), areas: null, lines: j.jsx(Y0, { lines: Jn, lineGenerator: $r, lineWidth: W }, "lines"), slices: null, points: null, crosshair: null, mesh: null, legends: Ke.map(function(on, Ft) {
    return j.jsx(Vd, de({}, on, { containerWidth: De, containerHeight: Ce, data: on.data || la, theme: pn, toggleSerie: on.toggleSerie ? ca : void 0 }), "legend." + Ft);
  }) }, da = ts(ge, Jn, ve);
  return I && (rn.areas = j.jsx(E0, { areaGenerator: Ur, areaOpacity: B, areaBlendMode: Q, lines: Jn }, "areas")), be && Ge !== !1 && (rn.slices = j.jsx(P0, { slices: Ar, axis: Ge, debug: Kn, height: Ce, tooltip: Zn, current: On, setCurrent: Er, onMouseEnter: Dn, onMouseMove: Ue, onMouseLeave: Re, onClick: Ae, onTouchStart: Qe, onTouchMove: bn, onTouchEnd: _e }, "slices")), J && (rn.points = j.jsx(L0, { points: At, symbol: ie, size: oe, color: fa, borderWidth: P, borderColor: ha, enableLabel: Z, label: te, labelYOffset: fe }, "points")), be && vn && (Yn !== null && (rn.crosshair = j.jsx(Hr, { width: De, height: Ce, x: Yn.x, y: Yn.y, type: Ut }, "crosshair")), On !== null && (rn.crosshair = j.jsx(Hr, { width: De, height: Ce, x: On.x, y: On.y, type: Ge }, "crosshair"))), be && Ze && Ge === !1 && (rn.mesh = j.jsx(H0, { points: At, width: De, height: Ce, margin: Sr, current: Yn, setCurrent: Dr, onMouseEnter: Dn, onMouseMove: Ue, onMouseLeave: Re, onClick: Ae, onTouchStart: Qe, onTouchMove: bn, onTouchEnd: _e, tooltip: yn, enableTouchCrosshair: z, debug: $e }, "mesh")), j.jsx(rs, { defs: da, width: ua, height: sa, margin: Sr, role: Fe, children: l.map(function(on, Ft) {
    return typeof on == "function" ? j.jsx(ga, { children: on(de({}, e, { innerWidth: De, innerHeight: Ce, series: Jn, slices: Ar, points: At, xScale: et, yScale: nt, lineGenerator: $r, areaGenerator: Ur, currentPoint: Yn, setCurrentPoint: Dr, currentSlice: On, setCurrentSlice: Er })) }, Ft) : rn[on];
  }) });
}), B0 = function(e) {
  return j.jsx(Vi, { children: function(n) {
    var t = n.width, r = n.height;
    return j.jsx(I0, de({ width: t, height: r }, e));
  } });
}, z0 = Ki(function(e) {
  var n = tr(null), t = e.width, r = e.height, i = e.margin, o = e.pixelRatio, a = o === void 0 ? typeof window < "u" && window.devicePixelRatio || 1 : o, u = e.data, s = e.xScale, l = s === void 0 ? { type: "point" } : s, h = e.xFormat, c = e.yScale, f = c === void 0 ? { type: "linear", min: 0, max: "auto" } : c, d = e.yFormat, g = e.curve, m = g === void 0 ? "linear" : g, b = e.layers, y = b === void 0 ? ["grid", "markers", "axes", "areas", "crosshair", "lines", "points", "slices", "mesh", "legends"] : b, w = e.colors, S = w === void 0 ? { scheme: "nivo" } : w, _ = e.lineWidth, A = _ === void 0 ? 2 : _, v = e.enableArea, D = v !== void 0 && v, U = e.areaBaselineValue, x = U === void 0 ? 0 : U, C = e.areaOpacity, k = C === void 0 ? 0.2 : C, T = e.enablePoints, $ = T === void 0 || T, E = e.pointSize, O = E === void 0 ? 6 : E, W = e.pointColor, H = W === void 0 ? { from: "color" } : W, I = e.pointBorderWidth, Y = I === void 0 ? 0 : I, B = e.pointBorderColor, X = B === void 0 ? { theme: "background" } : B, Q = e.enableGridX, ne = Q === void 0 || Q, J = e.gridXValues, ie = e.enableGridY, V = ie === void 0 || ie, oe = e.gridYValues, L = e.axisTop, p = e.axisRight, F = e.axisBottom, P = F === void 0 ? {} : F, M = e.axisLeft, R = M === void 0 ? {} : M, N = e.legends, Z = N === void 0 ? [] : N, G = e.isInteractive, te = G === void 0 || G, fe = e.debugMesh, Ve = fe !== void 0 && fe, ge = e.onMouseLeave, we = e.onClick, ve = e.tooltip, ze = ve === void 0 ? kr : ve, Fn = e.canvasRef, Ke = Qi(t, r, i), Te = Ke.margin, be = Ke.innerWidth, pe = Ke.innerHeight, Ze = Ke.outerWidth, Ne = Ke.outerHeight, $e = Be(), Dn = fn(null), Ue = Dn[0], Re = Dn[1], Ae = aa({ data: u, xScale: l, xFormat: h, yScale: f, yFormat: d, width: be, height: pe, colors: S, curve: m, areaBaselineValue: x, pointColor: H, pointBorderColor: X }), Qe = Ae.lineGenerator, bn = Ae.areaGenerator, _e = Ae.series, Je = Ae.xScale, yn = Ae.yScale, Xe = Ae.points, Ge = ra({ points: Xe, width: be, height: pe, debug: Ve }), jn = Ge.delaunay, Kn = Ge.voronoi;
  Ai(function() {
    Fn && (Fn.current = n.current), n.current.width = Ze * a, n.current.height = Ne * a;
    var z = n.current.getContext("2d");
    z.scale(a, a), z.fillStyle = $e.background, z.fillRect(0, 0, Ze, Ne), z.translate(Te.left, Te.top), y.forEach(function(ee) {
      if (typeof ee == "function" && ee({ ctx: z, innerWidth: be, innerHeight: pe, series: _e, points: Xe, xScale: Je, yScale: yn, lineWidth: A, lineGenerator: Qe, areaGenerator: bn, currentPoint: Ue, setCurrentPoint: Re }), ee === "grid" && $e.grid.line.strokeWidth > 0 && (z.lineWidth = $e.grid.line.strokeWidth, z.strokeStyle = $e.grid.line.stroke, ne && Ti(z, { width: be, height: pe, scale: Je, axis: "x", values: J }), V && Ti(z, { width: be, height: pe, scale: yn, axis: "y", values: oe })), ee === "axes" && Hd(z, { xScale: Je, yScale: yn, width: be, height: pe, top: L, right: p, bottom: P, left: R, theme: $e }), ee === "areas" && D === !0) {
        z.save(), z.globalAlpha = k, bn.context(z);
        for (var Fe = _e.length - 1; Fe >= 0; Fe--) z.fillStyle = _e[Fe].color, z.beginPath(), bn(_e[Fe].data.map(function(re) {
          return re.position;
        })), z.fill();
        z.restore();
      }
      if (ee === "lines" && (Qe.context(z), _e.forEach(function(re) {
        z.strokeStyle = re.color, z.lineWidth = A, z.beginPath(), Qe(re.data.map(function(tn) {
          return tn.position;
        })), z.stroke();
      })), ee === "points" && $ === !0 && O > 0 && Xe.forEach(function(re) {
        z.fillStyle = re.color, z.beginPath(), z.arc(re.x, re.y, O / 2, 0, 2 * Math.PI), z.fill(), Y > 0 && (z.strokeStyle = re.borderColor, z.lineWidth = Y, z.stroke());
      }), ee === "mesh" && Ve === !0 && (S0(z, Kn), Ue && $0(z, Kn, Ue.index)), ee === "legends") {
        var nn = _e.map(function(re) {
          return { id: re.id, label: re.id, color: re.color };
        }).reverse();
        Z.forEach(function(re) {
          Zd(z, de({}, re, { data: re.data || nn, containerWidth: be, containerHeight: pe, theme: $e }));
        });
      }
    });
  }, [n, Ze, Ne, y, $e, Qe, _e, Je, yn, ne, J, V, oe, L, p, P, R, Z, Xe, $, O, Ue]);
  var en = K(function(z) {
    var ee = qi(n.current, z), Fe = ee[0], nn = ee[1];
    if (!is(Te.left, Te.top, be, pe, Fe, nn)) return null;
    var re = jn.find(Fe - Te.left, nn - Te.top);
    return Xe[re];
  }, [n, Te, be, pe, jn]), Zn = wt(), En = Zn.showTooltipFromEvent, vn = Zn.hideTooltip, Wn = K(function(z) {
    var ee = en(z);
    Re(ee), ee ? En(ke(ze, { point: ee }), z) : vn();
  }, [en, Re, En, vn, ze]), Ut = K(function(z) {
    vn(), Re(null), Ue && ge && ge(Ue, z);
  }, [vn, Re, ge]), Qn = K(function(z) {
    if (we) {
      var ee = en(z);
      ee && we(ee, z);
    }
  }, [en, we]);
  return j.jsx("canvas", { ref: n, width: Ze * a, height: Ne * a, style: { width: Ze, height: Ne, cursor: te ? "auto" : "normal" }, onMouseEnter: te ? Wn : void 0, onMouseMove: te ? Wn : void 0, onMouseLeave: te ? Ut : void 0, onClick: te ? Qn : void 0 });
}), N0 = Fi(function(e, n) {
  return j.jsx(z0, de({}, e, { canvasRef: n }));
});
Fi(function(e, n) {
  return j.jsx(Vi, { children: function(t) {
    var r = t.width, i = t.height;
    return j.jsx(N0, de({ width: r, height: i }, e, { ref: n }));
  } });
});
const R0 = (e, n) => {
  if (n > 16)
    return 8;
  if (n > 28)
    return 6;
  switch (e) {
    case tt.hour:
      return n > 12 ? 12 : "every hour";
    case tt.day:
      return "every day";
    case tt.week:
      return "every week";
    case tt.month:
      return "every month";
    default:
      return 6;
  }
}, o1 = ({
  chartData: e,
  calculatedValues: n,
  curve: t = "linear",
  color: r,
  config: i,
  withAxis: o,
  isLoading: a = !1,
  isInteractive: u,
  timeFormat: s,
  timequant: l,
  postfix: h
}) => {
  var w, S;
  const c = ma(), f = le(() => {
    const { min: _, max: A } = n;
    return A !== null && _ !== null ? _ - (A - _) : "auto";
  }, [n]), d = ms(Dt(r), Dt(c.palette.darkShades.ternary), c.palette), g = R0(l, ((S = (w = e == null ? void 0 : e[0]) == null ? void 0 : w.data) == null ? void 0 : S.length) ?? 0), { min: m, max: b, avg: y } = n;
  return a ? /* @__PURE__ */ j.jsx(cs, {}) : e ? /* @__PURE__ */ j.jsx(gs, { children: /* @__PURE__ */ j.jsx(
    B0,
    {
      margin: { top: 4, bottom: 20, left: 32, right: 4 },
      isInteractive: u,
      areaOpacity: 1,
      axisBottom: o && u ? {
        tickSize: 0,
        tickPadding: 4,
        tickValues: g,
        format: s
      } : null,
      axisLeft: o && u ? {
        tickSize: 0,
        tickPadding: 4,
        tickValues: 6
      } : null,
      colors: r ? [Dt(r)] : ds,
      fill: [{ match: "*", id: "transparent" }],
      data: e,
      defs: [...d, ...hs],
      enableArea: !0,
      enableSlices: "x",
      curve: t,
      yScale: { type: "linear", min: f },
      layers: [
        "areas",
        ({ innerHeight: _, series: A, curve: v, colors: D, xScale: U, yScale: x, ...C }) => /* @__PURE__ */ j.jsx(
          ss,
          {
            series: A,
            xScale: U,
            yScale: x,
            innerHeight: _,
            curve: v,
            colors: D,
            ...C
          }
        ),
        ({ data: _, series: A, lineGenerator: v, xScale: D, yScale: U }) => /* @__PURE__ */ j.jsx(
          ls,
          {
            chartData: _,
            lineGenerator: v,
            series: A,
            maxY: b,
            minY: m,
            xScale: D,
            yScale: U
          }
        ),
        ({ data: _, innerWidth: A, innerHeight: v, lineGenerator: D, points: U, series: x, xScale: C, yScale: k }) => /* @__PURE__ */ j.jsx(
          bs,
          {
            chartData: _,
            innerWidth: A,
            innerHeight: v,
            lineGenerator: D,
            points: U,
            series: x,
            xScale: C,
            yScale: k,
            minY: (i == null ? void 0 : i.valueFrom) ?? null,
            maxY: (i == null ? void 0 : i.valueTo) ?? null,
            avgY: y
          }
        ),
        "crosshair",
        "axes",
        "slices"
      ],
      sliceTooltip: (_) => /* @__PURE__ */ j.jsx(os, { ..._, config: i, postfix: h, minY: m, maxY: b }),
      theme: fs(c),
      xScale: { type: "time" }
    }
  ) }) : null;
};
export {
  o1 as default
};
