import { jsxRuntimeExports as c } from "../../jsx-runtime-BgepH7Pb.js";
import f, { useRef as w, useLayoutEffect as ee, useEffect as H, useState as K, useCallback as $, useMemo as te } from "react";
import { Popover as re, Box as O, Stack as k } from "@mui/material";
import { hex2rgba as ne } from "../../helpers/colors.es.js";
import { SvgCloseIcon as oe } from "../../close-icon-EPoneKrB.js";
import { ClickableColorCell as q } from "./clickable-color-cell/clickable-color-cell.es.js";
import { HEX_REGEXP as ae, INITIAL_PREVIOUS_COLORS as le } from "./constants.es.js";
import { IconButton as ie } from "../icon-button/index.es.js";
import { Typography as ce } from "../typogrpahy/index.es.js";
import { Control as ue, Wrapper as se, StyledTextField as T } from "./style.es.js";
import { TextField as fe } from "../text-field/index.es.js";
import { useTranslation as de } from "react-i18next";
function R() {
  return (R = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
function Y(e, t) {
  if (e == null) return {};
  var r, n, a = {}, o = Object.keys(e);
  for (n = 0; n < o.length; n++) t.indexOf(r = o[n]) >= 0 || (a[r] = e[r]);
  return a;
}
function M(e) {
  var t = w(e), r = w(function(n) {
    t.current && t.current(n);
  });
  return t.current = e, r.current;
}
var j = function(e, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = 1), e > r ? r : e < t ? t : e;
}, I = function(e) {
  return "touches" in e;
}, D = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, F = function(e, t, r) {
  var n = e.getBoundingClientRect(), a = I(t) ? function(o, i) {
    for (var l = 0; l < o.length; l++) if (o[l].identifier === i) return o[l];
    return o[0];
  }(t.touches, r) : t;
  return { left: j((a.pageX - (n.left + D(e).pageXOffset)) / n.width), top: j((a.pageY - (n.top + D(e).pageYOffset)) / n.height) };
}, U = function(e) {
  !I(e) && e.preventDefault();
}, B = f.memo(function(e) {
  var t = e.onMove, r = e.onKey, n = e.onEnd, a = Y(e, ["onMove", "onKey", "onEnd"]), o = w(null), i = M(t), l = M(r), d = M(n), s = w(null), x = w(!1), b = te(function() {
    var v = function(h) {
      U(h), (I(h) ? h.touches.length > 0 : h.buttons > 0) && o.current ? i(F(o.current, h, s.current)) : (y(!1), d());
    }, g = function() {
      y(!1), d();
    };
    function y(h) {
      var u = x.current, C = D(o.current), N = h ? C.addEventListener : C.removeEventListener;
      N(u ? "touchmove" : "mousemove", v), N(u ? "touchend" : "mouseup", g);
    }
    return [function(h) {
      var u = h.nativeEvent, C = o.current;
      if (C && (U(u), !function(Q, Z) {
        return Z && !I(Q);
      }(u, x.current) && C)) {
        if (I(u)) {
          x.current = !0;
          var N = u.changedTouches || [];
          N.length && (s.current = N[0].identifier);
        }
        C.focus(), i(F(C, u, s.current)), y(!0);
      }
    }, function(h) {
      var u = h.which || h.keyCode;
      u < 37 || u > 40 || (h.preventDefault(), l({ left: u === 39 ? 0.05 : u === 37 ? -0.05 : 0, top: u === 40 ? 0.05 : u === 38 ? -0.05 : 0 }));
    }, function(h) {
      var u = h.which || h.keyCode;
      u >= 37 && u <= 40 && d();
    }, y];
  }, [l, i, d]), _ = b[0], m = b[1], E = b[2], S = b[3];
  return H(function() {
    return S;
  }, [S]), f.createElement("div", R({}, a, { onTouchStart: _, onMouseDown: _, className: "react-colorful__interactive", ref: o, onKeyDown: m, onKeyUp: E, tabIndex: 0, role: "slider" }));
}), P = function(e) {
  return e.filter(Boolean).join(" ");
}, X = function(e) {
  var t = e.color, r = e.left, n = e.top, a = n === void 0 ? 0.5 : n, o = P(["react-colorful__pointer", e.className]);
  return f.createElement("div", { className: o, style: { top: 100 * a + "%", left: 100 * r + "%" } }, f.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, p = function(e, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = Math.pow(10, t)), Math.round(r * e) / r;
}, he = function(e) {
  return me(V(e));
}, V = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? p(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? p(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, pe = function(e) {
  return ge(ve(e));
}, G = function(e) {
  var t = e.s, r = e.v, n = e.a, a = (200 - t) * r / 100;
  return { h: p(e.h), s: p(a > 0 && a < 200 ? t * r / 100 / (a <= 100 ? a : 200 - a) * 100 : 0), l: p(a / 2), a: p(n, 2) };
}, A = function(e) {
  var t = G(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, L = function(e) {
  var t = G(e);
  return "hsla(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")";
}, ve = function(e) {
  var t = e.h, r = e.s, n = e.v, a = e.a;
  t = t / 360 * 6, r /= 100, n /= 100;
  var o = Math.floor(t), i = n * (1 - r), l = n * (1 - (t - o) * r), d = n * (1 - (1 - t + o) * r), s = o % 6;
  return { r: p(255 * [n, l, i, i, d, n][s]), g: p(255 * [d, n, n, l, i, i][s]), b: p(255 * [i, i, d, n, n, l][s]), a: p(a, 2) };
}, z = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, ge = function(e) {
  var t = e.r, r = e.g, n = e.b, a = e.a, o = a < 1 ? z(p(255 * a)) : "";
  return "#" + z(t) + z(r) + z(n) + o;
}, me = function(e) {
  var t = e.r, r = e.g, n = e.b, a = e.a, o = Math.max(t, r, n), i = o - Math.min(t, r, n), l = i ? o === t ? (r - n) / i : o === r ? 2 + (n - t) / i : 4 + (t - r) / i : 0;
  return { h: p(60 * (l < 0 ? l + 6 : l)), s: p(o ? i / o * 100 : 0), v: p(o / 255 * 100), a };
}, xe = f.memo(function(e) {
  var t = e.hue, r = e.onChange, n = e.onChangeEnd, a = P(["react-colorful__hue", e.className]);
  return f.createElement("div", { className: a }, f.createElement(B, { onMove: function(o) {
    r({ h: 360 * o.left });
  }, onKey: function(o) {
    r({ h: j(t + 360 * o.left, 0, 360) });
  }, onEnd: n, "aria-label": "Hue", "aria-valuenow": p(t), "aria-valuemax": "360", "aria-valuemin": "0" }, f.createElement(X, { className: "react-colorful__hue-pointer", left: t / 360, color: A({ h: t, s: 100, v: 100, a: 1 }) })));
}), be = f.memo(function(e) {
  var t = e.hsva, r = e.onChange, n = e.onChangeEnd, a = { backgroundColor: A({ h: t.h, s: 100, v: 100, a: 1 }) };
  return f.createElement("div", { className: "react-colorful__saturation", style: a }, f.createElement(B, { onMove: function(o) {
    r({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    r({ s: j(t.s + 100 * o.left, 0, 100), v: j(t.v - 100 * o.top, 0, 100) });
  }, onEnd: n, "aria-label": "Color", "aria-valuetext": "Saturation " + p(t.s) + "%, Brightness " + p(t.v) + "%" }, f.createElement(X, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: A(t) })));
}), J = function(e, t) {
  if (e === t) return !0;
  for (var r in e) if (e[r] !== t[r]) return !1;
  return !0;
}, _e = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || J(V(e), V(t));
};
function Ce(e, t, r, n) {
  var a = M(r), o = M(n), i = K(function() {
    return e.toHsva(t);
  }), l = i[0], d = i[1], s = w({ color: t, hsva: l }), x = w(!1);
  H(function() {
    if (!e.equal(t, s.current.color)) {
      var m = e.toHsva(t);
      s.current = { hsva: m, color: t }, d(m), x.current = !1;
    }
  }, [t, e]), H(function() {
    var m;
    J(l, s.current.hsva) || e.equal(m = e.fromHsva(l), s.current.color) || (s.current = { hsva: l, color: m }, a(m), x.current = !0);
  }, [l, e, a]);
  var b = $(function(m) {
    d(function(E) {
      return Object.assign({}, E, m);
    });
  }, []), _ = $(function() {
    x.current && (x.current = !1, o(s.current.color));
  }, [o]);
  return [l, b, _];
}
var we = typeof window < "u" ? ee : H, Ee = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, W = /* @__PURE__ */ new Map(), je = function(e) {
  we(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !W.has(t)) {
      var r = t.createElement("style");
      r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, W.set(t, r);
      var n = Ee();
      n && r.setAttribute("nonce", n), t.head.appendChild(r);
    }
  }, []);
}, ye = function(e) {
  var t = e.className, r = e.hsva, n = e.onChange, a = e.onChangeEnd, o = { backgroundImage: "linear-gradient(90deg, " + L(Object.assign({}, r, { a: 0 })) + ", " + L(Object.assign({}, r, { a: 1 })) + ")" }, i = P(["react-colorful__alpha", t]), l = p(100 * r.a);
  return f.createElement("div", { className: i }, f.createElement("div", { className: "react-colorful__alpha-gradient", style: o }), f.createElement(B, { onMove: function(d) {
    n({ a: d.left });
  }, onKey: function(d) {
    n({ a: j(r.a + d.left) });
  }, onEnd: a, "aria-label": "Alpha", "aria-valuetext": l + "%", "aria-valuenow": l, "aria-valuemin": "0", "aria-valuemax": "100" }, f.createElement(X, { className: "react-colorful__alpha-pointer", left: r.a, color: L(r) })));
}, Ne = function(e) {
  var t = e.className, r = e.colorModel, n = e.color, a = n === void 0 ? r.defaultColor : n, o = e.onChange, i = e.onChangeEnd, l = Y(e, ["className", "colorModel", "color", "onChange", "onChangeEnd"]), d = w(null);
  je(d);
  var s = Ce(r, a, o, i), x = s[0], b = s[1], _ = s[2], m = P(["react-colorful", t]);
  return f.createElement("div", R({}, l, { ref: d, className: m }), f.createElement(be, { hsva: x, onChange: b, onChangeEnd: _ }), f.createElement(xe, { hue: x.h, onChange: b, onChangeEnd: _ }), f.createElement(ye, { hsva: x, onChange: b, onChangeEnd: _, className: "react-colorful__last-control" }));
}, ke = { defaultColor: "0001", toHsva: he, fromHsva: pe, equal: _e }, Me = function(e) {
  return f.createElement(Ne, R({}, e, { colorModel: ke }));
};
const Ve = ({
  previousColors: e = le,
  color: t,
  onChange: r,
  label: n,
  setError: a,
  isError: o
}) => {
  const { t: i } = de("uiKit"), l = w(null), [d, s] = K(!1), [x, b] = K(100), _ = (v) => {
    const { value: g } = v.target;
    if (!!isNaN(Number(g))) return;
    Number(g) > 100 ? b(100) : b(g ? Number(g) : "");
    const h = (Number(g) / 100 * 255 | 256).toString(16).slice(1);
    if (Number(g) === 0) return;
    let u = "";
    if (t.length === 7)
      u = `${t}${h}`, r(u);
    else {
      const C = t.slice(0, 7);
      u = `${C}${h}`, r(`${C}${h}`);
    }
    m(u);
  }, m = $(
    (v) => {
      if (!a) return;
      const g = ae.test(v);
      a(!g);
    },
    [a]
  ), E = (v) => {
    r(v), m(v);
    const g = ne(v);
    b(Math.round(g[3] * 100));
  }, S = (v) => {
    const { value: g } = v.target;
    r(g), m(g);
  };
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs(ue, { direction: "row", gap: 0.5, ref: l, alignItems: "flex-end", children: [
      /* @__PURE__ */ c.jsx(
        fe,
        {
          value: t,
          onChange: (v) => E(v.target.value),
          label: n,
          inputProps: {
            style: {
              textTransform: "uppercase"
            }
          },
          error: o,
          sx: { border: "none" }
        }
      ),
      /* @__PURE__ */ c.jsx(q, { color: t, size: "large", onClick: () => s(!0) })
    ] }),
    /* @__PURE__ */ c.jsx(
      re,
      {
        open: d,
        anchorEl: l.current,
        onClose: () => s(!1),
        sx: {
          transform: "translateX(44px)",
          ".MuiPaper-root": {
            borderRadius: "10px"
          }
        },
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        children: /* @__PURE__ */ c.jsxs(se, { children: [
          /* @__PURE__ */ c.jsx(O, { p: 3, children: /* @__PURE__ */ c.jsxs(k, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
            /* @__PURE__ */ c.jsx(ce, { fontWeight: 500, children: i("colorPicker.Color") }),
            /* @__PURE__ */ c.jsx(ie, { size: "small", onClick: () => s(!1), variant: "gray", children: /* @__PURE__ */ c.jsx(oe, {}) })
          ] }) }),
          /* @__PURE__ */ c.jsx(O, { position: "relative", children: /* @__PURE__ */ c.jsx(Me, { color: t, onChange: E }) }),
          /* @__PURE__ */ c.jsxs(k, { gap: 4, children: [
            /* @__PURE__ */ c.jsx(O, { p: 4, pb: 0, children: /* @__PURE__ */ c.jsxs(k, { direction: "row", gap: 2, children: [
              /* @__PURE__ */ c.jsx(T, { width: "66px", borderRadius: 2, justifyContent: "center", children: "Hex" }),
              /* @__PURE__ */ c.jsxs(k, { direction: "row", gap: "1px", width: "194px", borderRadius: 2, overflow: "hidden", children: [
                /* @__PURE__ */ c.jsx(T, { width: "136px", children: /* @__PURE__ */ c.jsx("input", { value: t, onChange: S }) }),
                /* @__PURE__ */ c.jsxs(T, { width: "58px", children: [
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      value: x,
                      onChange: _,
                      style: { width: "24px" }
                    }
                  ),
                  "%"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ c.jsx(O, { pl: 4, pr: "13px", pb: 4, children: /* @__PURE__ */ c.jsx(k, { direction: "row", gap: 2, flexWrap: "wrap", children: e.slice(0, 9).map((v, g) => /* @__PURE__ */ c.jsx(
              q,
              {
                color: v,
                size: "small",
                onClick: () => E(v)
              },
              `${v}-${g}`
            )) }) })
          ] })
        ] })
      }
    )
  ] });
};
export {
  Ve as ColorPicker
};
