import { jsxRuntimeExports as b } from "./jsx-runtime-BgepH7Pb.js";
import { curveLinear as w, stepBefore as P, stepAfter as X, curveStep as Y, curveNatural as q, monotoneY as z, monotoneX as B, curveCatmullRom as k, curveCardinal as Z, curveBasis as F } from "./step-BK7X2HW7.js";
function c(u) {
  return function() {
    return u;
  };
}
const A = Math.PI, E = 2 * A, M = 1e-6, G = E - M;
function L(u) {
  this._ += u[0];
  for (let n = 1, e = u.length; n < e; ++n)
    this._ += arguments[n] + u[n];
}
function I(u) {
  let n = Math.floor(u);
  if (!(n >= 0)) throw new Error(`invalid digits: ${u}`);
  if (n > 15) return L;
  const e = 10 ** n;
  return function(i) {
    this._ += i[0];
    for (let s = 1, f = i.length; s < f; ++s)
      this._ += Math.round(arguments[s] * e) / e + i[s];
  };
}
class N {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? L : I(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, i, s) {
    this._append`Q${+n},${+e},${this._x1 = +i},${this._y1 = +s}`;
  }
  bezierCurveTo(n, e, i, s, f, h) {
    this._append`C${+n},${+e},${+i},${+s},${this._x1 = +f},${this._y1 = +h}`;
  }
  arcTo(n, e, i, s, f) {
    if (n = +n, e = +e, i = +i, s = +s, f = +f, f < 0) throw new Error(`negative radius: ${f}`);
    let h = this._x1, l = this._y1, o = i - n, r = s - e, p = h - n, t = l - e, a = p * p + t * t;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (a > M) if (!(Math.abs(t * o - r * p) > M) || !f)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let d = i - h, g = s - l, $ = o * o + r * r, m = d * d + g * g, _ = Math.sqrt($), y = Math.sqrt(a), x = f * Math.tan((A - Math.acos(($ + a - m) / (2 * _ * y))) / 2), v = x / y, j = x / _;
      Math.abs(v - 1) > M && this._append`L${n + v * p},${e + v * t}`, this._append`A${f},${f},0,0,${+(t * d > p * g)},${this._x1 = n + j * o},${this._y1 = e + j * r}`;
    }
  }
  arc(n, e, i, s, f, h) {
    if (n = +n, e = +e, i = +i, h = !!h, i < 0) throw new Error(`negative radius: ${i}`);
    let l = i * Math.cos(s), o = i * Math.sin(s), r = n + l, p = e + o, t = 1 ^ h, a = h ? s - f : f - s;
    this._x1 === null ? this._append`M${r},${p}` : (Math.abs(this._x1 - r) > M || Math.abs(this._y1 - p) > M) && this._append`L${r},${p}`, i && (a < 0 && (a = a % E + E), a > G ? this._append`A${i},${i},0,1,${t},${n - l},${e - o}A${i},${i},0,1,${t},${this._x1 = r},${this._y1 = p}` : a > M && this._append`A${i},${i},0,${+(a >= A)},${t},${this._x1 = n + i * Math.cos(f)},${this._y1 = e + i * Math.sin(f)}`);
  }
  rect(n, e, i, s) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${i = +i}v${+s}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function C(u) {
  let n = 3;
  return u.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const i = Math.floor(e);
      if (!(i >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = i;
    }
    return u;
  }, () => new N(n);
}
function R(u) {
  return typeof u == "object" && "length" in u ? u : Array.from(u);
}
function S(u) {
  return u[0];
}
function T(u) {
  return u[1];
}
function O(u, n) {
  var e = c(!0), i = null, s = w, f = null, h = C(l);
  u = typeof u == "function" ? u : u === void 0 ? S : c(u), n = typeof n == "function" ? n : n === void 0 ? T : c(n);
  function l(o) {
    var r, p = (o = R(o)).length, t, a = !1, d;
    for (i == null && (f = s(d = h())), r = 0; r <= p; ++r)
      !(r < p && e(t = o[r], r, o)) === a && ((a = !a) ? f.lineStart() : f.lineEnd()), a && f.point(+u(t, r, o), +n(t, r, o));
    if (d) return f = null, d + "" || null;
  }
  return l.x = function(o) {
    return arguments.length ? (u = typeof o == "function" ? o : c(+o), l) : u;
  }, l.y = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : c(+o), l) : n;
  }, l.defined = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : c(!!o), l) : e;
  }, l.curve = function(o) {
    return arguments.length ? (s = o, i != null && (f = s(i)), l) : s;
  }, l.context = function(o) {
    return arguments.length ? (o == null ? i = f = null : f = s(i = o), l) : i;
  }, l;
}
function Q(u, n, e) {
  var i = null, s = c(!0), f = null, h = w, l = null, o = C(r);
  u = typeof u == "function" ? u : u === void 0 ? S : c(+u), n = typeof n == "function" ? n : c(n === void 0 ? 0 : +n), e = typeof e == "function" ? e : e === void 0 ? T : c(+e);
  function r(t) {
    var a, d, g, $ = (t = R(t)).length, m, _ = !1, y, x = new Array($), v = new Array($);
    for (f == null && (l = h(y = o())), a = 0; a <= $; ++a) {
      if (!(a < $ && s(m = t[a], a, t)) === _)
        if (_ = !_)
          d = a, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), g = a - 1; g >= d; --g)
            l.point(x[g], v[g]);
          l.lineEnd(), l.areaEnd();
        }
      _ && (x[a] = +u(m, a, t), v[a] = +n(m, a, t), l.point(i ? +i(m, a, t) : x[a], e ? +e(m, a, t) : v[a]));
    }
    if (y) return l = null, y + "" || null;
  }
  function p() {
    return O().defined(s).curve(h).context(f);
  }
  return r.x = function(t) {
    return arguments.length ? (u = typeof t == "function" ? t : c(+t), i = null, r) : u;
  }, r.x0 = function(t) {
    return arguments.length ? (u = typeof t == "function" ? t : c(+t), r) : u;
  }, r.x1 = function(t) {
    return arguments.length ? (i = t == null ? null : typeof t == "function" ? t : c(+t), r) : i;
  }, r.y = function(t) {
    return arguments.length ? (n = typeof t == "function" ? t : c(+t), e = null, r) : n;
  }, r.y0 = function(t) {
    return arguments.length ? (n = typeof t == "function" ? t : c(+t), r) : n;
  }, r.y1 = function(t) {
    return arguments.length ? (e = t == null ? null : typeof t == "function" ? t : c(+t), r) : e;
  }, r.lineX0 = r.lineY0 = function() {
    return p().x(u).y(n);
  }, r.lineY1 = function() {
    return p().x(u).y(e);
  }, r.lineX1 = function() {
    return p().x(i).y(n);
  }, r.defined = function(t) {
    return arguments.length ? (s = typeof t == "function" ? t : c(!!t), r) : s;
  }, r.curve = function(t) {
    return arguments.length ? (h = t, f != null && (l = h(f)), r) : h;
  }, r.context = function(t) {
    return arguments.length ? (t == null ? f = l = null : l = h(f = t), r) : f;
  }, r;
}
const D = {
  basis: F,
  cardinal: Z,
  catmullRom: k,
  linear: w,
  monotoneX: B,
  monotoneY: z,
  natural: q,
  step: Y,
  stepAfter: X,
  stepBefore: P
}, K = ({ series: u, xScale: n, yScale: e, innerHeight: i, curve: s, colors: f }) => {
  const h = Q().x((l) => n(l.data.x)).y0((l) => {
    const o = typeof l.data.y == "number" ? l.data.y : 0;
    return Math.min(i, e(o));
  }).y1((l) => {
    const o = typeof l.data.y == "number" ? l.data.y : 0;
    return Math.max(i, e(o));
  }).curve(D[s]);
  return /* @__PURE__ */ b.jsx(b.Fragment, { children: u.map(({ id: l, data: o }) => /* @__PURE__ */ b.jsxs("g", { children: [
    /* @__PURE__ */ b.jsx("path", { d: h(o) ?? void 0, fill: `url(#flat-area-gradient-${f[0]})` }),
    /* @__PURE__ */ b.jsx(
      "path",
      {
        d: h(o) ?? void 0,
        fill: `url(#flat-lines-pattern-${f[0]})`,
        fillOpacity: 0.4
      }
    ),
    /* @__PURE__ */ b.jsx("path", { d: h(o) ?? void 0, fill: "url(#flat-area-gradient-shadow)" })
  ] }, l)) });
};
export {
  K as AreaLayer,
  O as H,
  Q as area
};
