import { jsxRuntimeExports as Pe } from "../../../jsx-runtime-BgepH7Pb.js";
import { Point as B, DISPLAY_STATES as ot, retrieve2 as fe, Polyline as Pt, defaults as nr, SPECIAL_STATES as st, dist as lt, lerp$1 as Ze, normalizeArcAngles as or, makeInner as It, linearMap as sr, getLayoutRect as lr, isArray as Oe, parsePercent$1 as ee, each as xe, isNumber as $e, shiftLayoutOnY as fr, __extends as Je, Sector as Ct, extend as H, removeElementWithFadeOut as vr, ChartView as ur, ZRText as hr, initProps as Ue, updateProps as ft, saveOldStyle as cr, setStatesStylesFromModel as dr, toggleHoverEmphasis as gr, setLabelStyle as pr, getLabelStatesModels as mr, retrieve3 as yr, prepareSeriesDataSchema as Lr, SeriesData as Sr, bind as vt, curry as Vt, makeSeriesEncodeForNameBased as xr, getPercentSeats as br, defaultEmphasis as wr, SeriesModel as Ar, createLegacyDataSelectAction as Tr, isAroundZero as oe, ZRImage as Ot, normalizeColor as we, getLineDash as Mr, DEFAULT_PATH_STYLE as ut, map as te, keys as re, encodeHTML as _r, CompoundPath as Dr, isString as Me, createCubicEasingFunc as Nr, copyTransform as Pr, getSRTTransformString as Et, filter as Ir, getPathPrecision as kt, PathProxy as Cr, liftColor as Vr, Path as Or, TSpan as Er, getIdURL as Re, DEFAULT_FONT as kr, adjustTextY as Rr, getLineHeight as Gr, TEXT_ALIGN_TO_ANCHOR as Br, hasSeparateFont as Zr, parseFontSize as Ur, DEFAULT_FONT_FAMILY as zr, isLinearGradient as jr, isRadialGradient as Fr, logError as Rt, round4 as Hr, isImagePattern as qr, assert as ht, createOrUpdateImage as Xr, clone as Yr, getMatrixStr as Kr, isGradient as Gt, isPattern as Qe, getElementSSRData as $r, isFunction as Jr, hasShadow as Qr, getShadowKey as Wr, isObject as ea, getSize as ct, encodeBase64 as ta, noop as ra, _default as aa, echarts as ia, use as na } from "../../../core-Dm3hJ1-b.js";
import * as F from "react";
import { memo as oa } from "react";
import { useTheme as sa, Box as la } from "@mui/material";
import { Text as fa } from "./style.es.js";
import { getSectorCornerRadius as Ie } from "../../../sectorHelper-D_NH8t61.js";
import { install as va } from "../../../install-CGnPNia2.js";
function Bt(e, t, a, r, i, n, o, l) {
  var s = i - e, f = n - t, v = a - e, d = r - t, c = Math.sqrt(v * v + d * d);
  v /= c, d /= c;
  var u = s * v + f * d, h = u / c;
  h *= c;
  var g = o[0] = e + h * v, p = o[1] = t + h * d;
  return Math.sqrt((g - i) * (g - i) + (p - n) * (p - n));
}
var se = new B(), P = new B(), G = new B(), le = new B(), J = new B(), Ee = [], j = new B();
function ua(e, t) {
  if (t <= 180 && t > 0) {
    t = t / 180 * Math.PI, se.fromArray(e[0]), P.fromArray(e[1]), G.fromArray(e[2]), B.sub(le, se, P), B.sub(J, G, P);
    var a = le.len(), r = J.len();
    if (!(a < 1e-3 || r < 1e-3)) {
      le.scale(1 / a), J.scale(1 / r);
      var i = le.dot(J), n = Math.cos(t);
      if (n < i) {
        var o = Bt(P.x, P.y, G.x, G.y, se.x, se.y, Ee);
        j.fromArray(Ee), j.scaleAndAdd(J, o / Math.tan(Math.PI - t));
        var l = G.x !== P.x ? (j.x - P.x) / (G.x - P.x) : (j.y - P.y) / (G.y - P.y);
        if (isNaN(l))
          return;
        l < 0 ? B.copy(j, P) : l > 1 && B.copy(j, G), j.toArray(e[1]);
      }
    }
  }
}
function ha(e, t, a) {
  if (a <= 180 && a > 0) {
    a = a / 180 * Math.PI, se.fromArray(e[0]), P.fromArray(e[1]), G.fromArray(e[2]), B.sub(le, P, se), B.sub(J, G, P);
    var r = le.len(), i = J.len();
    if (!(r < 1e-3 || i < 1e-3)) {
      le.scale(1 / r), J.scale(1 / i);
      var n = le.dot(t), o = Math.cos(a);
      if (n < o) {
        var l = Bt(P.x, P.y, G.x, G.y, se.x, se.y, Ee);
        j.fromArray(Ee);
        var s = Math.PI / 2, f = Math.acos(J.dot(t)), v = s + f - a;
        if (v >= s)
          B.copy(j, G);
        else {
          j.scaleAndAdd(J, l / Math.tan(Math.PI / 2 - v));
          var d = G.x !== P.x ? (j.x - P.x) / (G.x - P.x) : (j.y - P.y) / (G.y - P.y);
          if (isNaN(d))
            return;
          d < 0 ? B.copy(j, P) : d > 1 && B.copy(j, G);
        }
        j.toArray(e[1]);
      }
    }
  }
}
function ze(e, t, a, r) {
  var i = a === "normal", n = i ? e : e.ensureState(a);
  n.ignore = t;
  var o = r.get("smooth");
  o && o === !0 && (o = 0.3), n.shape = n.shape || {}, o > 0 && (n.shape.smooth = o);
  var l = r.getModel("lineStyle").getLineStyle();
  i ? e.useStyle(l) : n.style = l;
}
function ca(e, t) {
  var a = t.smooth, r = t.points;
  if (r)
    if (e.moveTo(r[0][0], r[0][1]), a > 0 && r.length >= 3) {
      var i = lt(r[0], r[1]), n = lt(r[1], r[2]);
      if (!i || !n) {
        e.lineTo(r[1][0], r[1][1]), e.lineTo(r[2][0], r[2][1]);
        return;
      }
      var o = Math.min(i, n) * a, l = Ze([], r[1], r[0], o / i), s = Ze([], r[1], r[2], o / n), f = Ze([], l, s, 0.5);
      e.bezierCurveTo(l[0], l[1], l[0], l[1], f[0], f[1]), e.bezierCurveTo(s[0], s[1], s[0], s[1], r[2][0], r[2][1]);
    } else
      for (var v = 1; v < r.length; v++)
        e.lineTo(r[v][0], r[v][1]);
}
function da(e, t, a) {
  var r = e.getTextGuideLine(), i = e.getTextContent();
  if (!i) {
    r && e.removeTextGuideLine();
    return;
  }
  for (var n = t.normal, o = n.get("show"), l = i.ignore, s = 0; s < ot.length; s++) {
    var f = ot[s], v = t[f], d = f === "normal";
    if (v) {
      var c = v.get("show"), u = d ? l : fe(i.states[f] && i.states[f].ignore, l);
      if (u || !fe(c, o)) {
        var h = d ? r : r && r.states[f];
        h && (h.ignore = !0), r && ze(r, !0, f, v);
        continue;
      }
      r || (r = new Pt(), e.setTextGuideLine(r), !d && (l || !o) && ze(r, !0, "normal", t.normal), e.stateProxy && (r.stateProxy = e.stateProxy)), ze(r, !1, f, v);
    }
  }
  if (r) {
    nr(r.style, a), r.style.fill = null;
    var g = n.get("showAbove"), p = e.textGuideLineConfig = e.textGuideLineConfig || {};
    p.showAbove = g || !1, r.buildPath = ca;
  }
}
function ga(e, t) {
  t = t || "labelLine";
  for (var a = {
    normal: e.getModel(t)
  }, r = 0; r < st.length; r++) {
    var i = st[r];
    a[i] = e.getModel([i, t]);
  }
  return a;
}
var dt = Math.PI * 2, Ce = Math.PI / 180;
function Zt(e, t) {
  return lr(e.getBoxLayoutParams(), {
    width: t.getWidth(),
    height: t.getHeight()
  });
}
function Ut(e, t) {
  var a = Zt(e, t), r = e.get("center"), i = e.get("radius");
  Oe(i) || (i = [0, i]);
  var n = ee(a.width, t.getWidth()), o = ee(a.height, t.getHeight()), l = Math.min(n, o), s = ee(i[0], l / 2), f = ee(i[1], l / 2), v, d, c = e.coordinateSystem;
  if (c) {
    var u = c.dataToPoint(r);
    v = u[0] || 0, d = u[1] || 0;
  } else
    Oe(r) || (r = [r, r]), v = ee(r[0], n) + a.x, d = ee(r[1], o) + a.y;
  return {
    cx: v,
    cy: d,
    r0: s,
    r: f
  };
}
function pa(e, t, a) {
  t.eachSeriesByType(e, function(r) {
    var i = r.getData(), n = i.mapDimension("value"), o = Zt(r, a), l = Ut(r, a), s = l.cx, f = l.cy, v = l.r, d = l.r0, c = -r.get("startAngle") * Ce, u = r.get("endAngle"), h = r.get("padAngle") * Ce;
    u = u === "auto" ? c - dt : -u * Ce;
    var g = r.get("minAngle") * Ce, p = g + h, m = 0;
    i.each(n, function(I) {
      !isNaN(I) && m++;
    });
    var L = i.getSum(n), y = Math.PI / (L || m) * 2, S = r.get("clockwise"), M = r.get("roseType"), _ = r.get("stillShowZeroSum"), b = i.getDataExtent(n);
    b[0] = 0;
    var x = S ? 1 : -1, T = [c, u], w = x * h / 2;
    or(T, !S), c = T[0], u = T[1];
    var k = zt(r);
    k.startAngle = c, k.endAngle = u, k.clockwise = S;
    var V = Math.abs(u - c), A = V, Z = 0, U = c;
    if (i.setLayout({
      viewRect: o,
      r: v
    }), i.each(n, function(I, R) {
      var D;
      if (isNaN(I)) {
        i.setItemLayout(R, {
          angle: NaN,
          startAngle: NaN,
          endAngle: NaN,
          clockwise: S,
          cx: s,
          cy: f,
          r0: d,
          r: M ? NaN : v
        });
        return;
      }
      M !== "area" ? D = L === 0 && _ ? y : I * y : D = V / m, D < p ? (D = p, A -= p) : Z += I;
      var O = U + x * D, C = 0, N = 0;
      h > D ? (C = U + x * D / 2, N = C) : (C = U + w, N = O - w), i.setItemLayout(R, {
        angle: D,
        startAngle: C,
        endAngle: N,
        clockwise: S,
        cx: s,
        cy: f,
        r0: d,
        r: M ? sr(I, b, [d, v]) : v
      }), U = O;
    }), A < dt && m)
      if (A <= 1e-3) {
        var z = V / m;
        i.each(n, function(I, R) {
          if (!isNaN(I)) {
            var D = i.getItemLayout(R);
            D.angle = z;
            var O = 0, C = 0;
            z < h ? (O = c + x * (R + 1 / 2) * z, C = O) : (O = c + x * R * z + w, C = c + x * (R + 1) * z - w), D.startAngle = O, D.endAngle = C;
          }
        });
      } else
        y = A / Z, U = c, i.each(n, function(I, R) {
          if (!isNaN(I)) {
            var D = i.getItemLayout(R), O = D.angle === p ? p : I * y, C = 0, N = 0;
            O < h ? (C = U + x * O / 2, N = C) : (C = U + w, N = U + x * O - w), D.startAngle = C, D.endAngle = N, U += x * O;
          }
        });
  });
}
var zt = It();
function ma(e) {
  return {
    seriesType: e,
    reset: function(t, a) {
      var r = a.findComponents({
        mainType: "legend"
      });
      if (!(!r || !r.length)) {
        var i = t.getData();
        i.filterSelf(function(n) {
          for (var o = i.getName(n), l = 0; l < r.length; l++)
            if (!r[l].isSelected(o))
              return !1;
          return !0;
        });
      }
    }
  };
}
var ya = Math.PI / 180;
function gt(e, t, a, r, i, n, o, l, s, f) {
  if (e.length < 2)
    return;
  function v(g) {
    for (var p = g.rB, m = p * p, L = 0; L < g.list.length; L++) {
      var y = g.list[L], S = Math.abs(y.label.y - a), M = r + y.len, _ = M * M, b = Math.sqrt(Math.abs((1 - S * S / m) * _)), x = t + (b + y.len2) * i, T = x - y.label.x, w = y.targetTextWidth - T * i;
      jt(y, w, !0), y.label.x = x;
    }
  }
  function d(g) {
    for (var p = {
      list: [],
      maxY: 0
    }, m = {
      list: [],
      maxY: 0
    }, L = 0; L < g.length; L++)
      if (g[L].labelAlignTo === "none") {
        var y = g[L], S = y.label.y > a ? m : p, M = Math.abs(y.label.y - a);
        if (M >= S.maxY) {
          var _ = y.label.x - t - y.len2 * i, b = r + y.len, x = Math.abs(_) < b ? Math.sqrt(M * M / (1 - _ * _ / b / b)) : b;
          S.rB = x, S.maxY = M;
        }
        S.list.push(y);
      }
    v(p), v(m);
  }
  for (var c = e.length, u = 0; u < c; u++)
    if (e[u].position === "outer" && e[u].labelAlignTo === "labelLine") {
      var h = e[u].label.x - f;
      e[u].linePoints[1][0] += h, e[u].label.x = f;
    }
  fr(e, s, s + o) && d(e);
}
function La(e, t, a, r, i, n, o, l) {
  for (var s = [], f = [], v = Number.MAX_VALUE, d = -Number.MAX_VALUE, c = 0; c < e.length; c++) {
    var u = e[c].label;
    je(e[c]) || (u.x < t ? (v = Math.min(v, u.x), s.push(e[c])) : (d = Math.max(d, u.x), f.push(e[c])));
  }
  for (var c = 0; c < e.length; c++) {
    var h = e[c];
    if (!je(h) && h.linePoints) {
      if (h.labelStyleWidth != null)
        continue;
      var u = h.label, g = h.linePoints, p = void 0;
      h.labelAlignTo === "edge" ? u.x < t ? p = g[2][0] - h.labelDistance - o - h.edgeDistance : p = o + i - h.edgeDistance - g[2][0] - h.labelDistance : h.labelAlignTo === "labelLine" ? u.x < t ? p = v - o - h.bleedMargin : p = o + i - d - h.bleedMargin : u.x < t ? p = u.x - o - h.bleedMargin : p = o + i - u.x - h.bleedMargin, h.targetTextWidth = p, jt(h, p);
    }
  }
  gt(f, t, a, r, 1, i, n, o, l, d), gt(s, t, a, r, -1, i, n, o, l, v);
  for (var c = 0; c < e.length; c++) {
    var h = e[c];
    if (!je(h) && h.linePoints) {
      var u = h.label, g = h.linePoints, m = h.labelAlignTo === "edge", L = u.style.padding, y = L ? L[1] + L[3] : 0, S = u.style.backgroundColor ? 0 : y, M = h.rect.width + S, _ = g[1][0] - g[2][0];
      m ? u.x < t ? g[2][0] = o + h.edgeDistance + M + h.labelDistance : g[2][0] = o + i - h.edgeDistance - M - h.labelDistance : (u.x < t ? g[2][0] = u.x + h.labelDistance : g[2][0] = u.x - h.labelDistance, g[1][0] = g[2][0] + _), g[1][1] = g[2][1] = u.y;
    }
  }
}
function jt(e, t, a) {
  if (a === void 0 && (a = !1), e.labelStyleWidth == null) {
    var r = e.label, i = r.style, n = e.rect, o = i.backgroundColor, l = i.padding, s = l ? l[1] + l[3] : 0, f = i.overflow, v = n.width + (o ? 0 : s);
    if (t < v || a) {
      var d = n.height;
      if (f && f.match("break")) {
        r.setStyle("backgroundColor", null), r.setStyle("width", t - s);
        var c = r.getBoundingRect();
        r.setStyle("width", Math.ceil(c.width)), r.setStyle("backgroundColor", o);
      } else {
        var u = t - s, h = t < v ? u : (
          // Current available width is enough, but the text may have
          // already been wrapped with a smaller available width.
          a ? u > e.unconstrainedWidth ? null : u : null
        );
        r.setStyle("width", h);
      }
      var g = r.getBoundingRect();
      n.width = g.width;
      var p = (r.style.margin || 0) + 2.1;
      n.height = g.height + p, n.y -= (n.height - d) / 2;
    }
  }
}
function je(e) {
  return e.position === "center";
}
function Sa(e) {
  var t = e.getData(), a = [], r, i, n = !1, o = (e.get("minShowLabelAngle") || 0) * ya, l = t.getLayout("viewRect"), s = t.getLayout("r"), f = l.width, v = l.x, d = l.y, c = l.height;
  function u(_) {
    _.ignore = !0;
  }
  function h(_) {
    if (!_.ignore)
      return !0;
    for (var b in _.states)
      if (_.states[b].ignore === !1)
        return !0;
    return !1;
  }
  t.each(function(_) {
    var b = t.getItemGraphicEl(_), x = b.shape, T = b.getTextContent(), w = b.getTextGuideLine(), k = t.getItemModel(_), V = k.getModel("label"), A = V.get("position") || k.get(["emphasis", "label", "position"]), Z = V.get("distanceToLabelLine"), U = V.get("alignTo"), z = ee(V.get("edgeDistance"), f), I = V.get("bleedMargin"), R = k.getModel("labelLine"), D = R.get("length");
    D = ee(D, f);
    var O = R.get("length2");
    if (O = ee(O, f), Math.abs(x.endAngle - x.startAngle) < o) {
      xe(T.states, u), T.ignore = !0, w && (xe(w.states, u), w.ignore = !0);
      return;
    }
    if (h(T)) {
      var C = (x.startAngle + x.endAngle) / 2, N = Math.cos(C), K = Math.sin(C), Q, ve, _e, ge;
      r = x.cx, i = x.cy;
      var q = A === "inside" || A === "inner";
      if (A === "center")
        Q = x.cx, ve = x.cy, ge = "center";
      else {
        var ae = (q ? (x.r + x.r0) / 2 * N : x.r * N) + r, pe = (q ? (x.r + x.r0) / 2 * K : x.r * K) + i;
        if (Q = ae + N * 3, ve = pe + K * 3, !q) {
          var ue = ae + N * (D + s - x.r), De = pe + K * (D + s - x.r), me = ue + (N < 0 ? -1 : 1) * O, ye = De;
          U === "edge" ? Q = N < 0 ? v + z : v + f - z : Q = me + (N < 0 ? -Z : Z), ve = ye, _e = [[ae, pe], [ue, De], [me, ye]];
        }
        ge = q ? "center" : U === "edge" ? N > 0 ? "right" : "left" : N > 0 ? "left" : "right";
      }
      var ie = Math.PI, X = 0, W = V.get("rotate");
      if ($e(W))
        X = W * (ie / 180);
      else if (A === "center")
        X = 0;
      else if (W === "radial" || W === !0) {
        var Le = N < 0 ? -C + ie : -C;
        X = Le;
      } else if (W === "tangential" && A !== "outside" && A !== "outer") {
        var Y = Math.atan2(N, K);
        Y < 0 && (Y = ie * 2 + Y);
        var Ne = K > 0;
        Ne && (Y = ie + Y), X = Y - ie;
      }
      if (n = !!X, T.x = Q, T.y = ve, T.rotation = X, T.setStyle({
        verticalAlign: "middle"
      }), q) {
        T.setStyle({
          align: ge
        });
        var Be = T.states.select;
        Be && (Be.x += T.x, Be.y += T.y);
      } else {
        var ne = T.getBoundingRect().clone();
        ne.applyTransform(T.getComputedTransform());
        var nt = (T.style.margin || 0) + 2.1;
        ne.y -= nt / 2, ne.height += nt, a.push({
          label: T,
          labelLine: w,
          position: A,
          len: D,
          len2: O,
          minTurnAngle: R.get("minTurnAngle"),
          maxSurfaceAngle: R.get("maxSurfaceAngle"),
          surfaceNormal: new B(N, K),
          linePoints: _e,
          textAlign: ge,
          labelDistance: Z,
          labelAlignTo: U,
          edgeDistance: z,
          bleedMargin: I,
          rect: ne,
          unconstrainedWidth: ne.width,
          labelStyleWidth: T.style.width
        });
      }
      b.setTextConfig({
        inside: q
      });
    }
  }), !n && e.get("avoidLabelOverlap") && La(a, r, i, s, f, c, v, d);
  for (var g = 0; g < a.length; g++) {
    var p = a[g], m = p.label, L = p.labelLine, y = isNaN(m.x) || isNaN(m.y);
    if (m) {
      m.setStyle({
        align: p.textAlign
      }), y && (xe(m.states, u), m.ignore = !0);
      var S = m.states.select;
      S && (S.x += m.x, S.y += m.y);
    }
    if (L) {
      var M = p.linePoints;
      y || !M ? (xe(L.states, u), L.ignore = !0) : (ua(M, p.minTurnAngle), ha(M, p.surfaceNormal, p.maxSurfaceAngle), L.setShape({
        points: M
      }), m.__hostTarget.textGuideLineConfig = {
        anchor: new B(M[0][0], M[0][1])
      });
    }
  }
}
var xa = (
  /** @class */
  function(e) {
    Je(t, e);
    function t(a, r, i) {
      var n = e.call(this) || this;
      n.z2 = 2;
      var o = new hr();
      return n.setTextContent(o), n.updateData(a, r, i, !0), n;
    }
    return t.prototype.updateData = function(a, r, i, n) {
      var o = this, l = a.hostModel, s = a.getItemModel(r), f = s.getModel("emphasis"), v = a.getItemLayout(r), d = H(Ie(s.getModel("itemStyle"), v, !0), v);
      if (isNaN(d.startAngle)) {
        o.setShape(d);
        return;
      }
      if (n) {
        o.setShape(d);
        var c = l.getShallow("animationType");
        l.ecModel.ssr ? (Ue(o, {
          scaleX: 0,
          scaleY: 0
        }, l, {
          dataIndex: r,
          isFrom: !0
        }), o.originX = d.cx, o.originY = d.cy) : c === "scale" ? (o.shape.r = v.r0, Ue(o, {
          shape: {
            r: v.r
          }
        }, l, r)) : i != null ? (o.setShape({
          startAngle: i,
          endAngle: i
        }), Ue(o, {
          shape: {
            startAngle: v.startAngle,
            endAngle: v.endAngle
          }
        }, l, r)) : (o.shape.endAngle = v.startAngle, ft(o, {
          shape: {
            endAngle: v.endAngle
          }
        }, l, r));
      } else
        cr(o), ft(o, {
          shape: d
        }, l, r);
      o.useStyle(a.getItemVisual(r, "style")), dr(o, s);
      var u = (v.startAngle + v.endAngle) / 2, h = l.get("selectedOffset"), g = Math.cos(u) * h, p = Math.sin(u) * h, m = s.getShallow("cursor");
      m && o.attr("cursor", m), this._updateLabel(l, a, r), o.ensureState("emphasis").shape = H({
        r: v.r + (f.get("scale") && f.get("scaleSize") || 0)
      }, Ie(f.getModel("itemStyle"), v)), H(o.ensureState("select"), {
        x: g,
        y: p,
        shape: Ie(s.getModel(["select", "itemStyle"]), v)
      }), H(o.ensureState("blur"), {
        shape: Ie(s.getModel(["blur", "itemStyle"]), v)
      });
      var L = o.getTextGuideLine(), y = o.getTextContent();
      L && H(L.ensureState("select"), {
        x: g,
        y: p
      }), H(y.ensureState("select"), {
        x: g,
        y: p
      }), gr(this, f.get("focus"), f.get("blurScope"), f.get("disabled"));
    }, t.prototype._updateLabel = function(a, r, i) {
      var n = this, o = r.getItemModel(i), l = o.getModel("labelLine"), s = r.getItemVisual(i, "style"), f = s && s.fill, v = s && s.opacity;
      pr(n, mr(o), {
        labelFetcher: r.hostModel,
        labelDataIndex: i,
        inheritColor: f,
        defaultOpacity: v,
        defaultText: a.getFormattedLabel(i, "normal") || r.getName(i)
      });
      var d = n.getTextContent();
      n.setTextConfig({
        // reset position, rotation
        position: null,
        rotation: null
      }), d.attr({
        z2: 10
      });
      var c = a.get(["label", "position"]);
      if (c !== "outside" && c !== "outer")
        n.removeTextGuideLine();
      else {
        var u = this.getTextGuideLine();
        u || (u = new Pt(), this.setTextGuideLine(u)), da(this, ga(o), {
          stroke: f,
          opacity: yr(l.get(["lineStyle", "opacity"]), v, 1)
        });
      }
    }, t;
  }(Ct)
), ba = (
  /** @class */
  function(e) {
    Je(t, e);
    function t() {
      var a = e !== null && e.apply(this, arguments) || this;
      return a.ignoreLabelLineUpdate = !0, a;
    }
    return t.prototype.render = function(a, r, i, n) {
      var o = a.getData(), l = this._data, s = this.group, f;
      if (!l && o.count() > 0) {
        for (var v = o.getItemLayout(0), d = 1; isNaN(v && v.startAngle) && d < o.count(); ++d)
          v = o.getItemLayout(d);
        v && (f = v.startAngle);
      }
      if (this._emptyCircleSector && s.remove(this._emptyCircleSector), o.count() === 0 && a.get("showEmptyCircle")) {
        var c = zt(a), u = new Ct({
          shape: H(Ut(a, i), c)
        });
        u.useStyle(a.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = u, s.add(u);
      }
      o.diff(l).add(function(h) {
        var g = new xa(o, h, f);
        o.setItemGraphicEl(h, g), s.add(g);
      }).update(function(h, g) {
        var p = l.getItemGraphicEl(g);
        p.updateData(o, h, f), p.off("click"), s.add(p), o.setItemGraphicEl(h, p);
      }).remove(function(h) {
        var g = l.getItemGraphicEl(h);
        vr(g, a, h);
      }).execute(), Sa(a), a.get("animationTypeUpdate") !== "expansion" && (this._data = o);
    }, t.prototype.dispose = function() {
    }, t.prototype.containPoint = function(a, r) {
      var i = r.getData(), n = i.getItemLayout(0);
      if (n) {
        var o = a[0] - n.cx, l = a[1] - n.cy, s = Math.sqrt(o * o + l * l);
        return s <= n.r && s >= n.r0;
      }
    }, t.type = "pie", t;
  }(ur)
);
function wa(e, t, a) {
  t = Oe(t) && {
    coordDimensions: t
  } || H({
    encodeDefine: e.getEncode()
  }, t);
  var r = e.getSource(), i = Lr(r, t).dimensions, n = new Sr(i, e);
  return n.initData(r, a), n;
}
var Aa = (
  /** @class */
  function() {
    function e(t, a) {
      this._getDataWithEncodedVisual = t, this._getRawData = a;
    }
    return e.prototype.getAllNames = function() {
      var t = this._getRawData();
      return t.mapArray(t.getName);
    }, e.prototype.containName = function(t) {
      var a = this._getRawData();
      return a.indexOfName(t) >= 0;
    }, e.prototype.indexOfName = function(t) {
      var a = this._getDataWithEncodedVisual();
      return a.indexOfName(t);
    }, e.prototype.getItemVisual = function(t, a) {
      var r = this._getDataWithEncodedVisual();
      return r.getItemVisual(t, a);
    }, e;
  }()
), Ta = It(), Ma = (
  /** @class */
  function(e) {
    Je(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.init = function(a) {
      e.prototype.init.apply(this, arguments), this.legendVisualProvider = new Aa(vt(this.getData, this), vt(this.getRawData, this)), this._defaultLabelLine(a);
    }, t.prototype.mergeOption = function() {
      e.prototype.mergeOption.apply(this, arguments);
    }, t.prototype.getInitialData = function() {
      return wa(this, {
        coordDimensions: ["value"],
        encodeDefaulter: Vt(xr, this)
      });
    }, t.prototype.getDataParams = function(a) {
      var r = this.getData(), i = Ta(r), n = i.seats;
      if (!n) {
        var o = [];
        r.each(r.mapDimension("value"), function(s) {
          o.push(s);
        }), n = i.seats = br(o, r.hostModel.get("percentPrecision"));
      }
      var l = e.prototype.getDataParams.call(this, a);
      return l.percent = n[a] || 0, l.$vars.push("percent"), l;
    }, t.prototype._defaultLabelLine = function(a) {
      wr(a, "labelLine", ["show"]);
      var r = a.labelLine, i = a.emphasis.labelLine;
      r.show = r.show && a.label.show, i.show = i.show && a.emphasis.label.show;
    }, t.type = "series.pie", t.defaultOption = {
      // zlevel: 0,
      z: 2,
      legendHoverLink: !0,
      colorBy: "data",
      // 默认全局居中
      center: ["50%", "50%"],
      radius: [0, "75%"],
      // 默认顺时针
      clockwise: !0,
      startAngle: 90,
      endAngle: "auto",
      padAngle: 0,
      // 最小角度改为0
      minAngle: 0,
      // If the angle of a sector less than `minShowLabelAngle`,
      // the label will not be displayed.
      minShowLabelAngle: 0,
      // 选中时扇区偏移量
      selectedOffset: 10,
      // 选择模式，默认关闭，可选single，multiple
      // selectedMode: false,
      // 南丁格尔玫瑰图模式，'radius'（半径） | 'area'（面积）
      // roseType: null,
      percentPrecision: 2,
      // If still show when all data zero.
      stillShowZeroSum: !0,
      // cursor: null,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: null,
      height: null,
      label: {
        // color: 'inherit',
        // If rotate around circle
        rotate: 0,
        show: !0,
        overflow: "truncate",
        // 'outer', 'inside', 'center'
        position: "outer",
        // 'none', 'labelLine', 'edge'. Works only when position is 'outer'
        alignTo: "none",
        // Closest distance between label and chart edge.
        // Works only position is 'outer' and alignTo is 'edge'.
        edgeDistance: "25%",
        // Works only position is 'outer' and alignTo is not 'edge'.
        bleedMargin: 10,
        // Distance between text and label line.
        distanceToLabelLine: 5
        // formatter: 标签文本格式器，同 tooltip.formatter，不支持异步回调
        // 默认使用全局文本样式，详见 textStyle
        // distance: 当position为inner时有效，为label位置到圆心的距离与圆半径(环状图为内外半径和)的比例系数
      },
      // Enabled when label.normal.position is 'outer'
      labelLine: {
        show: !0,
        // 引导线两段中的第一段长度
        length: 15,
        // 引导线两段中的第二段长度
        length2: 15,
        smooth: !1,
        minTurnAngle: 90,
        maxSurfaceAngle: 90,
        lineStyle: {
          // color: 各异,
          width: 1,
          type: "solid"
        }
      },
      itemStyle: {
        borderWidth: 1,
        borderJoin: "round"
      },
      showEmptyCircle: !0,
      emptyCircleStyle: {
        color: "lightgray",
        opacity: 1
      },
      labelLayout: {
        // Hide the overlapped label.
        hideOverlap: !0
      },
      emphasis: {
        scale: !0,
        scaleSize: 5
      },
      // If use strategy to avoid label overlapping
      avoidLabelOverlap: !0,
      // Animation type. Valid values: expansion, scale
      animationType: "expansion",
      animationDuration: 1e3,
      // Animation type when update. Valid values: transition, expansion
      animationTypeUpdate: "transition",
      animationEasingUpdate: "cubicInOut",
      animationDurationUpdate: 500,
      animationEasing: "cubicInOut"
    }, t;
  }(Ar)
);
function _a(e) {
  return {
    seriesType: e,
    reset: function(t, a) {
      var r = t.getData();
      r.filterSelf(function(i) {
        var n = r.mapDimension("value"), o = r.get(n, i);
        return !($e(o) && !isNaN(o) && o < 0);
      });
    }
  };
}
function Da(e) {
  e.registerChartView(ba), e.registerSeriesModel(Ma), Tr("pie", e.registerAction), e.registerLayout(Vt(pa, "pie")), e.registerProcessor(ma("pie")), e.registerProcessor(_a("pie"));
}
var Fe = Math.sin, He = Math.cos, Ft = Math.PI, he = Math.PI * 2, Na = 180 / Ft, Ht = function() {
  function e() {
  }
  return e.prototype.reset = function(t) {
    this._start = !0, this._d = [], this._str = "", this._p = Math.pow(10, t || 4);
  }, e.prototype.moveTo = function(t, a) {
    this._add("M", t, a);
  }, e.prototype.lineTo = function(t, a) {
    this._add("L", t, a);
  }, e.prototype.bezierCurveTo = function(t, a, r, i, n, o) {
    this._add("C", t, a, r, i, n, o);
  }, e.prototype.quadraticCurveTo = function(t, a, r, i) {
    this._add("Q", t, a, r, i);
  }, e.prototype.arc = function(t, a, r, i, n, o) {
    this.ellipse(t, a, r, r, 0, i, n, o);
  }, e.prototype.ellipse = function(t, a, r, i, n, o, l, s) {
    var f = l - o, v = !s, d = Math.abs(f), c = oe(d - he) || (v ? f >= he : -f >= he), u = f > 0 ? f % he : f % he + he, h = !1;
    c ? h = !0 : oe(d) ? h = !1 : h = u >= Ft == !!v;
    var g = t + r * He(o), p = a + i * Fe(o);
    this._start && this._add("M", g, p);
    var m = Math.round(n * Na);
    if (c) {
      var L = 1 / this._p, y = (v ? 1 : -1) * (he - L);
      this._add("A", r, i, m, 1, +v, t + r * He(o + y), a + i * Fe(o + y)), L > 0.01 && this._add("A", r, i, m, 0, +v, g, p);
    } else {
      var S = t + r * He(l), M = a + i * Fe(l);
      this._add("A", r, i, m, +h, +v, S, M);
    }
  }, e.prototype.rect = function(t, a, r, i) {
    this._add("M", t, a), this._add("l", r, 0), this._add("l", 0, i), this._add("l", -r, 0), this._add("Z");
  }, e.prototype.closePath = function() {
    this._d.length > 0 && this._add("Z");
  }, e.prototype._add = function(t, a, r, i, n, o, l, s, f) {
    for (var v = [], d = this._p, c = 1; c < arguments.length; c++) {
      var u = arguments[c];
      if (isNaN(u)) {
        this._invalid = !0;
        return;
      }
      v.push(Math.round(u * d) / d);
    }
    this._d.push(t + v.join(" ")), this._start = t === "Z";
  }, e.prototype.generateStr = function() {
    this._str = this._invalid ? "" : this._d.join(""), this._d = [];
  }, e.prototype.getStr = function() {
    return this._str;
  }, e;
}(), We = "none", Pa = Math.round;
function Ia(e) {
  var t = e.fill;
  return t != null && t !== We;
}
function Ca(e) {
  var t = e.stroke;
  return t != null && t !== We;
}
var Xe = ["lineCap", "miterLimit", "lineJoin"], Va = te(Xe, function(e) {
  return "stroke-" + e.toLowerCase();
});
function Oa(e, t, a, r) {
  var i = t.opacity == null ? 1 : t.opacity;
  if (a instanceof Ot) {
    e("opacity", i);
    return;
  }
  if (Ia(t)) {
    var n = we(t.fill);
    e("fill", n.color);
    var o = t.fillOpacity != null ? t.fillOpacity * n.opacity * i : n.opacity * i;
    o < 1 && e("fill-opacity", o);
  } else
    e("fill", We);
  if (Ca(t)) {
    var l = we(t.stroke);
    e("stroke", l.color);
    var s = t.strokeNoScale ? a.getLineScale() : 1, f = s ? (t.lineWidth || 0) / s : 0, v = t.strokeOpacity != null ? t.strokeOpacity * l.opacity * i : l.opacity * i, d = t.strokeFirst;
    if (f !== 1 && e("stroke-width", f), d && e("paint-order", d ? "stroke" : "fill"), v < 1 && e("stroke-opacity", v), t.lineDash) {
      var c = Mr(a), u = c[0], h = c[1];
      u && (h = Pa(h || 0), e("stroke-dasharray", u.join(",")), (h || r) && e("stroke-dashoffset", h));
    }
    for (var g = 0; g < Xe.length; g++) {
      var p = Xe[g];
      if (t[p] !== ut[p]) {
        var m = t[p] || ut[p];
        m && e(Va[g], m);
      }
    }
  }
}
var qt = "http://www.w3.org/2000/svg", Xt = "http://www.w3.org/1999/xlink", Ea = "http://www.w3.org/2000/xmlns/", ka = "http://www.w3.org/XML/1998/namespace", pt = "ecmeta_";
function Yt(e) {
  return document.createElementNS(qt, e);
}
function E(e, t, a, r, i) {
  return {
    tag: e,
    attrs: a || {},
    children: r,
    text: i,
    key: t
  };
}
function Ra(e, t) {
  var a = [];
  if (t)
    for (var r in t) {
      var i = t[r], n = r;
      i !== !1 && (i !== !0 && i != null && (n += '="' + i + '"'), a.push(n));
    }
  return "<" + e + " " + a.join(" ") + ">";
}
function Ga(e) {
  return "</" + e + ">";
}
function et(e, t) {
  t = t || {};
  var a = t.newline ? `
` : "";
  function r(i) {
    var n = i.children, o = i.tag, l = i.attrs, s = i.text;
    return Ra(o, l) + (o !== "style" ? _r(s) : s || "") + (n ? "" + a + te(n, function(f) {
      return r(f);
    }).join(a) + a : "") + Ga(o);
  }
  return r(e);
}
function Ba(e, t, a) {
  a = a || {};
  var r = a.newline ? `
` : "", i = " {" + r, n = r + "}", o = te(re(e), function(s) {
    return s + i + te(re(e[s]), function(f) {
      return f + ":" + e[s][f] + ";";
    }).join(r) + n;
  }).join(r), l = te(re(t), function(s) {
    return "@keyframes " + s + i + te(re(t[s]), function(f) {
      return f + i + te(re(t[s][f]), function(v) {
        var d = t[s][f][v];
        return v === "d" && (d = 'path("' + d + '")'), v + ":" + d + ";";
      }).join(r) + n;
    }).join(r) + n;
  }).join(r);
  return !o && !l ? "" : ["<![CDATA[", o, l, "]]>"].join(r);
}
function Ye(e) {
  return {
    zrId: e,
    shadowCache: {},
    patternCache: {},
    gradientCache: {},
    clipPathCache: {},
    defs: {},
    cssNodes: {},
    cssAnims: {},
    cssStyleCache: {},
    cssAnimIdx: 0,
    shadowIdx: 0,
    gradientIdx: 0,
    patternIdx: 0,
    clipPathIdx: 0
  };
}
function mt(e, t, a, r) {
  return E("svg", "root", {
    width: e,
    height: t,
    xmlns: qt,
    "xmlns:xlink": Xt,
    version: "1.1",
    baseProfile: "full",
    viewBox: r ? "0 0 " + e + " " + t : !1
  }, a);
}
var Za = 0;
function Kt() {
  return Za++;
}
var yt = {
  cubicIn: "0.32,0,0.67,0",
  cubicOut: "0.33,1,0.68,1",
  cubicInOut: "0.65,0,0.35,1",
  quadraticIn: "0.11,0,0.5,0",
  quadraticOut: "0.5,1,0.89,1",
  quadraticInOut: "0.45,0,0.55,1",
  quarticIn: "0.5,0,0.75,0",
  quarticOut: "0.25,1,0.5,1",
  quarticInOut: "0.76,0,0.24,1",
  quinticIn: "0.64,0,0.78,0",
  quinticOut: "0.22,1,0.36,1",
  quinticInOut: "0.83,0,0.17,1",
  sinusoidalIn: "0.12,0,0.39,0",
  sinusoidalOut: "0.61,1,0.88,1",
  sinusoidalInOut: "0.37,0,0.63,1",
  exponentialIn: "0.7,0,0.84,0",
  exponentialOut: "0.16,1,0.3,1",
  exponentialInOut: "0.87,0,0.13,1",
  circularIn: "0.55,0,1,0.45",
  circularOut: "0,0.55,0.45,1",
  circularInOut: "0.85,0,0.15,1"
}, ce = "transform-origin";
function Ua(e, t, a) {
  var r = H({}, e.shape);
  H(r, t), e.buildPath(a, r);
  var i = new Ht();
  return i.reset(kt(e)), a.rebuildPath(i, 1), i.generateStr(), i.getStr();
}
function za(e, t) {
  var a = t.originX, r = t.originY;
  (a || r) && (e[ce] = a + "px " + r + "px");
}
var ja = {
  fill: "fill",
  opacity: "opacity",
  lineWidth: "stroke-width",
  lineDashOffset: "stroke-dashoffset"
};
function $t(e, t) {
  var a = t.zrId + "-ani-" + t.cssAnimIdx++;
  return t.cssAnims[a] = e, a;
}
function Fa(e, t, a) {
  var r = e.shape.paths, i = {}, n, o;
  if (xe(r, function(s) {
    var f = Ye(a.zrId);
    f.animation = !0, Ge(s, {}, f, !0);
    var v = f.cssAnims, d = f.cssNodes, c = re(v), u = c.length;
    if (u) {
      o = c[u - 1];
      var h = v[o];
      for (var g in h) {
        var p = h[g];
        i[g] = i[g] || { d: "" }, i[g].d += p.d || "";
      }
      for (var m in d) {
        var L = d[m].animation;
        L.indexOf(o) >= 0 && (n = L);
      }
    }
  }), !!n) {
    t.d = !1;
    var l = $t(i, a);
    return n.replace(o, l);
  }
}
function Lt(e) {
  return Me(e) ? yt[e] ? "cubic-bezier(" + yt[e] + ")" : Nr(e) ? e : "" : "";
}
function Ge(e, t, a, r) {
  var i = e.animators, n = i.length, o = [];
  if (e instanceof Dr) {
    var l = Fa(e, t, a);
    if (l)
      o.push(l);
    else if (!n)
      return;
  } else if (!n)
    return;
  for (var s = {}, f = 0; f < n; f++) {
    var v = i[f], d = [v.getMaxTime() / 1e3 + "s"], c = Lt(v.getClip().easing), u = v.getDelay();
    c ? d.push(c) : d.push("linear"), u && d.push(u / 1e3 + "s"), v.getLoop() && d.push("infinite");
    var h = d.join(" ");
    s[h] = s[h] || [h, []], s[h][1].push(v);
  }
  function g(L) {
    var y = L[1], S = y.length, M = {}, _ = {}, b = {}, x = "animation-timing-function";
    function T(q, ae, pe) {
      for (var ue = q.getTracks(), De = q.getMaxTime(), me = 0; me < ue.length; me++) {
        var ye = ue[me];
        if (ye.needsAnimate()) {
          var ie = ye.keyframes, X = ye.propName;
          if (pe && (X = pe(X)), X)
            for (var W = 0; W < ie.length; W++) {
              var Le = ie[W], Y = Math.round(Le.time / De * 100) + "%", Ne = Lt(Le.easing), ne = Le.rawValue;
              (Me(ne) || $e(ne)) && (ae[Y] = ae[Y] || {}, ae[Y][X] = Le.rawValue, Ne && (ae[Y][x] = Ne));
            }
        }
      }
    }
    for (var w = 0; w < S; w++) {
      var k = y[w], V = k.targetName;
      V ? V === "shape" && T(k, _) : !r && T(k, M);
    }
    for (var A in M) {
      var Z = {};
      Pr(Z, e), H(Z, M[A]);
      var U = Et(Z), z = M[A][x];
      b[A] = U ? {
        transform: U
      } : {}, za(b[A], Z), z && (b[A][x] = z);
    }
    var I, R = !0;
    for (var A in _) {
      b[A] = b[A] || {};
      var D = !I, z = _[A][x];
      D && (I = new Cr());
      var O = I.len();
      I.reset(), b[A].d = Ua(e, _[A], I);
      var C = I.len();
      if (!D && O !== C) {
        R = !1;
        break;
      }
      z && (b[A][x] = z);
    }
    if (!R)
      for (var A in b)
        delete b[A].d;
    if (!r)
      for (var w = 0; w < S; w++) {
        var k = y[w], V = k.targetName;
        V === "style" && T(k, b, function(ue) {
          return ja[ue];
        });
      }
    for (var N = re(b), K = !0, Q, w = 1; w < N.length; w++) {
      var ve = N[w - 1], _e = N[w];
      if (b[ve][ce] !== b[_e][ce]) {
        K = !1;
        break;
      }
      Q = b[ve][ce];
    }
    if (K && Q) {
      for (var A in b)
        b[A][ce] && delete b[A][ce];
      t[ce] = Q;
    }
    if (Ir(N, function(q) {
      return re(b[q]).length > 0;
    }).length) {
      var ge = $t(b, a);
      return ge + " " + L[0] + " both";
    }
  }
  for (var p in s) {
    var l = g(s[p]);
    l && o.push(l);
  }
  if (o.length) {
    var m = a.zrId + "-cls-" + Kt();
    a.cssNodes["." + m] = {
      animation: o.join(",")
    }, t.class = m;
  }
}
function Ha(e, t, a) {
  if (!e.ignore)
    if (e.isSilent()) {
      var r = {
        "pointer-events": "none"
      };
      St(r, t, a);
    } else {
      var i = e.states.emphasis && e.states.emphasis.style ? e.states.emphasis.style : {}, n = i.fill;
      if (!n) {
        var o = e.style && e.style.fill, l = e.states.select && e.states.select.style && e.states.select.style.fill, s = e.currentStates.indexOf("select") >= 0 && l || o;
        s && (n = Vr(s));
      }
      var f = i.lineWidth;
      if (f) {
        var v = !i.strokeNoScale && e.transform ? e.transform[0] : 1;
        f = f / v;
      }
      var r = {
        cursor: "pointer"
      };
      n && (r.fill = n), i.stroke && (r.stroke = i.stroke), f && (r["stroke-width"] = f), St(r, t, a);
    }
}
function St(e, t, a, r) {
  var i = JSON.stringify(e), n = a.cssStyleCache[i];
  n || (n = a.zrId + "-cls-" + Kt(), a.cssStyleCache[i] = n, a.cssNodes["." + n + ":hover"] = e), t.class = t.class ? t.class + " " + n : n;
}
var Ae = Math.round;
function Jt(e) {
  return e && Me(e.src);
}
function Qt(e) {
  return e && Jr(e.toDataURL);
}
function tt(e, t, a, r) {
  Oa(function(i, n) {
    var o = i === "fill" || i === "stroke";
    o && Gt(n) ? er(t, e, i, r) : o && Qe(n) ? tr(a, e, i, r) : e[i] = n, o && r.ssr && n === "none" && (e["pointer-events"] = "visible");
  }, t, a, !1), Qa(a, e, r);
}
function rt(e, t) {
  var a = $r(t);
  a && (a.each(function(r, i) {
    r != null && (e[(pt + i).toLowerCase()] = r + "");
  }), t.isSilent() && (e[pt + "silent"] = "true"));
}
function xt(e) {
  return oe(e[0] - 1) && oe(e[1]) && oe(e[2]) && oe(e[3] - 1);
}
function qa(e) {
  return oe(e[4]) && oe(e[5]);
}
function at(e, t, a) {
  if (t && !(qa(t) && xt(t))) {
    var r = 1e4;
    e.transform = xt(t) ? "translate(" + Ae(t[4] * r) / r + " " + Ae(t[5] * r) / r + ")" : Kr(t);
  }
}
function bt(e, t, a) {
  for (var r = e.points, i = [], n = 0; n < r.length; n++)
    i.push(Ae(r[n][0] * a) / a), i.push(Ae(r[n][1] * a) / a);
  t.points = i.join(" ");
}
function wt(e) {
  return !e.smooth;
}
function Xa(e) {
  var t = te(e, function(a) {
    return typeof a == "string" ? [a, a] : a;
  });
  return function(a, r, i) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n], l = a[o[0]];
      l != null && (r[o[1]] = Ae(l * i) / i);
    }
  };
}
var Ya = {
  circle: [Xa(["cx", "cy", "r"])],
  polyline: [bt, wt],
  polygon: [bt, wt]
};
function Ka(e) {
  for (var t = e.animators, a = 0; a < t.length; a++)
    if (t[a].targetName === "shape")
      return !0;
  return !1;
}
function Wt(e, t) {
  var a = e.style, r = e.shape, i = Ya[e.type], n = {}, o = t.animation, l = "path", s = e.style.strokePercent, f = t.compress && kt(e) || 4;
  if (i && !t.willUpdate && !(i[1] && !i[1](r)) && !(o && Ka(e)) && !(s < 1)) {
    l = e.type;
    var v = Math.pow(10, f);
    i[0](r, n, v);
  } else {
    var d = !e.path || e.shapeChanged();
    e.path || e.createPathProxy();
    var c = e.path;
    d && (c.beginPath(), e.buildPath(c, e.shape), e.pathUpdated());
    var u = c.getVersion(), h = e, g = h.__svgPathBuilder;
    (h.__svgPathVersion !== u || !g || s !== h.__svgPathStrokePercent) && (g || (g = h.__svgPathBuilder = new Ht()), g.reset(f), c.rebuildPath(g, s), g.generateStr(), h.__svgPathVersion = u, h.__svgPathStrokePercent = s), n.d = g.getStr();
  }
  return at(n, e.transform), tt(n, a, e, t), rt(n, e), t.animation && Ge(e, n, t), t.emphasis && Ha(e, n, t), E(l, e.id + "", n);
}
function $a(e, t) {
  var a = e.style, r = a.image;
  if (r && !Me(r) && (Jt(r) ? r = r.src : Qt(r) && (r = r.toDataURL())), !!r) {
    var i = a.x || 0, n = a.y || 0, o = a.width, l = a.height, s = {
      href: r,
      width: o,
      height: l
    };
    return i && (s.x = i), n && (s.y = n), at(s, e.transform), tt(s, a, e, t), rt(s, e), t.animation && Ge(e, s, t), E("image", e.id + "", s);
  }
}
function Ja(e, t) {
  var a = e.style, r = a.text;
  if (r != null && (r += ""), !(!r || isNaN(a.x) || isNaN(a.y))) {
    var i = a.font || kr, n = a.x || 0, o = Rr(a.y || 0, Gr(i), a.textBaseline), l = Br[a.textAlign] || a.textAlign, s = {
      "dominant-baseline": "central",
      "text-anchor": l
    };
    if (Zr(a)) {
      var f = "", v = a.fontStyle, d = Ur(a.fontSize);
      if (!parseFloat(d))
        return;
      var c = a.fontFamily || zr, u = a.fontWeight;
      f += "font-size:" + d + ";font-family:" + c + ";", v && v !== "normal" && (f += "font-style:" + v + ";"), u && u !== "normal" && (f += "font-weight:" + u + ";"), s.style = f;
    } else
      s.style = "font: " + i;
    return r.match(/\s/) && (s["xml:space"] = "preserve"), n && (s.x = n), o && (s.y = o), at(s, e.transform), tt(s, a, e, t), rt(s, e), t.animation && Ge(e, s, t), E("text", e.id + "", s, void 0, r);
  }
}
function At(e, t) {
  if (e instanceof Or)
    return Wt(e, t);
  if (e instanceof Ot)
    return $a(e, t);
  if (e instanceof Er)
    return Ja(e, t);
}
function Qa(e, t, a) {
  var r = e.style;
  if (Qr(r)) {
    var i = Wr(e), n = a.shadowCache, o = n[i];
    if (!o) {
      var l = e.getGlobalScale(), s = l[0], f = l[1];
      if (!s || !f)
        return;
      var v = r.shadowOffsetX || 0, d = r.shadowOffsetY || 0, c = r.shadowBlur, u = we(r.shadowColor), h = u.opacity, g = u.color, p = c / 2 / s, m = c / 2 / f, L = p + " " + m;
      o = a.zrId + "-s" + a.shadowIdx++, a.defs[o] = E("filter", o, {
        id: o,
        x: "-100%",
        y: "-100%",
        width: "300%",
        height: "300%"
      }, [
        E("feDropShadow", "", {
          dx: v / s,
          dy: d / f,
          stdDeviation: L,
          "flood-color": g,
          "flood-opacity": h
        })
      ]), n[i] = o;
    }
    t.filter = Re(o);
  }
}
function er(e, t, a, r) {
  var i = e[a], n, o = {
    gradientUnits: i.global ? "userSpaceOnUse" : "objectBoundingBox"
  };
  if (jr(i))
    n = "linearGradient", o.x1 = i.x, o.y1 = i.y, o.x2 = i.x2, o.y2 = i.y2;
  else if (Fr(i))
    n = "radialGradient", o.cx = fe(i.x, 0.5), o.cy = fe(i.y, 0.5), o.r = fe(i.r, 0.5);
  else {
    process.env.NODE_ENV !== "production" && Rt("Illegal gradient type.");
    return;
  }
  for (var l = i.colorStops, s = [], f = 0, v = l.length; f < v; ++f) {
    var d = Hr(l[f].offset) * 100 + "%", c = l[f].color, u = we(c), h = u.color, g = u.opacity, p = {
      offset: d
    };
    p["stop-color"] = h, g < 1 && (p["stop-opacity"] = g), s.push(E("stop", f + "", p));
  }
  var m = E(n, "", o, s), L = et(m), y = r.gradientCache, S = y[L];
  S || (S = r.zrId + "-g" + r.gradientIdx++, y[L] = S, o.id = S, r.defs[S] = E(n, S, o, s)), t[a] = Re(S);
}
function tr(e, t, a, r) {
  var i = e.style[a], n = e.getBoundingRect(), o = {}, l = i.repeat, s = l === "no-repeat", f = l === "repeat-x", v = l === "repeat-y", d;
  if (qr(i)) {
    var c = i.imageWidth, u = i.imageHeight, h = void 0, g = i.image;
    if (Me(g) ? h = g : Jt(g) ? h = g.src : Qt(g) && (h = g.toDataURL()), typeof Image > "u") {
      var p = "Image width/height must been given explictly in svg-ssr renderer.";
      ht(c, p), ht(u, p);
    } else if (c == null || u == null) {
      var m = function(w, k) {
        if (w) {
          var V = w.elm, A = c || k.width, Z = u || k.height;
          w.tag === "pattern" && (f ? (Z = 1, A /= n.width) : v && (A = 1, Z /= n.height)), w.attrs.width = A, w.attrs.height = Z, V && (V.setAttribute("width", A), V.setAttribute("height", Z));
        }
      }, L = Xr(h, null, e, function(w) {
        s || m(_, w), m(d, w);
      });
      L && L.width && L.height && (c = c || L.width, u = u || L.height);
    }
    d = E("image", "img", {
      href: h,
      width: c,
      height: u
    }), o.width = c, o.height = u;
  } else i.svgElement && (d = Yr(i.svgElement), o.width = i.svgWidth, o.height = i.svgHeight);
  if (d) {
    var y, S;
    s ? y = S = 1 : f ? (S = 1, y = o.width / n.width) : v ? (y = 1, S = o.height / n.height) : o.patternUnits = "userSpaceOnUse", y != null && !isNaN(y) && (o.width = y), S != null && !isNaN(S) && (o.height = S);
    var M = Et(i);
    M && (o.patternTransform = M);
    var _ = E("pattern", "", o, [d]), b = et(_), x = r.patternCache, T = x[b];
    T || (T = r.zrId + "-p" + r.patternIdx++, x[b] = T, o.id = T, _ = r.defs[T] = E("pattern", T, o, [d])), t[a] = Re(T);
  }
}
function Wa(e, t, a) {
  var r = a.clipPathCache, i = a.defs, n = r[e.id];
  if (!n) {
    n = a.zrId + "-c" + a.clipPathIdx++;
    var o = {
      id: n
    };
    r[e.id] = n, i[n] = E("clipPath", n, o, [Wt(e, a)]);
  }
  t["clip-path"] = Re(n);
}
function Tt(e) {
  return document.createTextNode(e);
}
function de(e, t, a) {
  e.insertBefore(t, a);
}
function Mt(e, t) {
  e.removeChild(t);
}
function _t(e, t) {
  e.appendChild(t);
}
function rr(e) {
  return e.parentNode;
}
function ar(e) {
  return e.nextSibling;
}
function qe(e, t) {
  e.textContent = t;
}
var Dt = 58, ei = 120, ti = E("", "");
function Ke(e) {
  return e === void 0;
}
function $(e) {
  return e !== void 0;
}
function ri(e, t, a) {
  for (var r = {}, i = t; i <= a; ++i) {
    var n = e[i].key;
    n !== void 0 && (process.env.NODE_ENV !== "production" && r[n] != null && console.error("Duplicate key " + n), r[n] = i);
  }
  return r;
}
function be(e, t) {
  var a = e.key === t.key, r = e.tag === t.tag;
  return r && a;
}
function Te(e) {
  var t, a = e.children, r = e.tag;
  if ($(r)) {
    var i = e.elm = Yt(r);
    if (it(ti, e), Oe(a))
      for (t = 0; t < a.length; ++t) {
        var n = a[t];
        n != null && _t(i, Te(n));
      }
    else $(e.text) && !ea(e.text) && _t(i, Tt(e.text));
  } else
    e.elm = Tt(e.text);
  return e.elm;
}
function ir(e, t, a, r, i) {
  for (; r <= i; ++r) {
    var n = a[r];
    n != null && de(e, Te(n), t);
  }
}
function ke(e, t, a, r) {
  for (; a <= r; ++a) {
    var i = t[a];
    if (i != null)
      if ($(i.tag)) {
        var n = rr(i.elm);
        Mt(n, i.elm);
      } else
        Mt(e, i.elm);
  }
}
function it(e, t) {
  var a, r = t.elm, i = e && e.attrs || {}, n = t.attrs || {};
  if (i !== n) {
    for (a in n) {
      var o = n[a], l = i[a];
      l !== o && (o === !0 ? r.setAttribute(a, "") : o === !1 ? r.removeAttribute(a) : a === "style" ? r.style.cssText = o : a.charCodeAt(0) !== ei ? r.setAttribute(a, o) : a === "xmlns:xlink" || a === "xmlns" ? r.setAttributeNS(Ea, a, o) : a.charCodeAt(3) === Dt ? r.setAttributeNS(ka, a, o) : a.charCodeAt(5) === Dt ? r.setAttributeNS(Xt, a, o) : r.setAttribute(a, o));
    }
    for (a in i)
      a in n || r.removeAttribute(a);
  }
}
function ai(e, t, a) {
  for (var r = 0, i = 0, n = t.length - 1, o = t[0], l = t[n], s = a.length - 1, f = a[0], v = a[s], d, c, u, h; r <= n && i <= s; )
    o == null ? o = t[++r] : l == null ? l = t[--n] : f == null ? f = a[++i] : v == null ? v = a[--s] : be(o, f) ? (Se(o, f), o = t[++r], f = a[++i]) : be(l, v) ? (Se(l, v), l = t[--n], v = a[--s]) : be(o, v) ? (Se(o, v), de(e, o.elm, ar(l.elm)), o = t[++r], v = a[--s]) : be(l, f) ? (Se(l, f), de(e, l.elm, o.elm), l = t[--n], f = a[++i]) : (Ke(d) && (d = ri(t, r, n)), c = d[f.key], Ke(c) ? de(e, Te(f), o.elm) : (u = t[c], u.tag !== f.tag ? de(e, Te(f), o.elm) : (Se(u, f), t[c] = void 0, de(e, u.elm, o.elm))), f = a[++i]);
  (r <= n || i <= s) && (r > n ? (h = a[s + 1] == null ? null : a[s + 1].elm, ir(e, h, a, i, s)) : ke(e, t, r, n));
}
function Se(e, t) {
  var a = t.elm = e.elm, r = e.children, i = t.children;
  e !== t && (it(e, t), Ke(t.text) ? $(r) && $(i) ? r !== i && ai(a, r, i) : $(i) ? ($(e.text) && qe(a, ""), ir(a, null, i, 0, i.length - 1)) : $(r) ? ke(a, r, 0, r.length - 1) : $(e.text) && qe(a, "") : e.text !== t.text && ($(r) && ke(a, r, 0, r.length - 1), qe(a, t.text)));
}
function ii(e, t) {
  if (be(e, t))
    Se(e, t);
  else {
    var a = e.elm, r = rr(a);
    Te(t), r !== null && (de(r, t.elm, ar(a)), ke(r, [e], 0, 0));
  }
  return t;
}
var ni = 0, oi = function() {
  function e(t, a, r) {
    if (this.type = "svg", this.refreshHover = Nt("refreshHover"), this.configLayer = Nt("configLayer"), this.storage = a, this._opts = r = H({}, r), this.root = t, this._id = "zr" + ni++, this._oldVNode = mt(r.width, r.height), t && !r.ssr) {
      var i = this._viewport = document.createElement("div");
      i.style.cssText = "position:relative;overflow:hidden";
      var n = this._svgDom = this._oldVNode.elm = Yt("svg");
      it(null, this._oldVNode), i.appendChild(n), t.appendChild(i);
    }
    this.resize(r.width, r.height);
  }
  return e.prototype.getType = function() {
    return this.type;
  }, e.prototype.getViewportRoot = function() {
    return this._viewport;
  }, e.prototype.getViewportRootOffset = function() {
    var t = this.getViewportRoot();
    if (t)
      return {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      };
  }, e.prototype.getSvgDom = function() {
    return this._svgDom;
  }, e.prototype.refresh = function() {
    if (this.root) {
      var t = this.renderToVNode({
        willUpdate: !0
      });
      t.attrs.style = "position:absolute;left:0;top:0;user-select:none", ii(this._oldVNode, t), this._oldVNode = t;
    }
  }, e.prototype.renderOneToVNode = function(t) {
    return At(t, Ye(this._id));
  }, e.prototype.renderToVNode = function(t) {
    t = t || {};
    var a = this.storage.getDisplayList(!0), r = this._width, i = this._height, n = Ye(this._id);
    n.animation = t.animation, n.willUpdate = t.willUpdate, n.compress = t.compress, n.emphasis = t.emphasis, n.ssr = this._opts.ssr;
    var o = [], l = this._bgVNode = si(r, i, this._backgroundColor, n);
    l && o.push(l);
    var s = t.compress ? null : this._mainVNode = E("g", "main", {}, []);
    this._paintList(a, n, s ? s.children : o), s && o.push(s);
    var f = te(re(n.defs), function(c) {
      return n.defs[c];
    });
    if (f.length && o.push(E("defs", "defs", {}, f)), t.animation) {
      var v = Ba(n.cssNodes, n.cssAnims, { newline: !0 });
      if (v) {
        var d = E("style", "stl", {}, [], v);
        o.push(d);
      }
    }
    return mt(r, i, o, t.useViewBox);
  }, e.prototype.renderToString = function(t) {
    return t = t || {}, et(this.renderToVNode({
      animation: fe(t.cssAnimation, !0),
      emphasis: fe(t.cssEmphasis, !0),
      willUpdate: !1,
      compress: !0,
      useViewBox: fe(t.useViewBox, !0)
    }), { newline: !0 });
  }, e.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t;
  }, e.prototype.getSvgRoot = function() {
    return this._mainVNode && this._mainVNode.elm;
  }, e.prototype._paintList = function(t, a, r) {
    for (var i = t.length, n = [], o = 0, l, s, f = 0, v = 0; v < i; v++) {
      var d = t[v];
      if (!d.invisible) {
        var c = d.__clipPaths, u = c && c.length || 0, h = s && s.length || 0, g = void 0;
        for (g = Math.max(u - 1, h - 1); g >= 0 && !(c && s && c[g] === s[g]); g--)
          ;
        for (var p = h - 1; p > g; p--)
          o--, l = n[o - 1];
        for (var m = g + 1; m < u; m++) {
          var L = {};
          Wa(c[m], L, a);
          var y = E("g", "clip-g-" + f++, L, []);
          (l ? l.children : r).push(y), n[o++] = y, l = y;
        }
        s = c;
        var S = At(d, a);
        S && (l ? l.children : r).push(S);
      }
    }
  }, e.prototype.resize = function(t, a) {
    var r = this._opts, i = this.root, n = this._viewport;
    if (t != null && (r.width = t), a != null && (r.height = a), i && n && (n.style.display = "none", t = ct(i, 0, r), a = ct(i, 1, r), n.style.display = ""), this._width !== t || this._height !== a) {
      if (this._width = t, this._height = a, n) {
        var o = n.style;
        o.width = t + "px", o.height = a + "px";
      }
      if (Qe(this._backgroundColor))
        this.refresh();
      else {
        var l = this._svgDom;
        l && (l.setAttribute("width", t), l.setAttribute("height", a));
        var s = this._bgVNode && this._bgVNode.elm;
        s && (s.setAttribute("width", t), s.setAttribute("height", a));
      }
    }
  }, e.prototype.getWidth = function() {
    return this._width;
  }, e.prototype.getHeight = function() {
    return this._height;
  }, e.prototype.dispose = function() {
    this.root && (this.root.innerHTML = ""), this._svgDom = this._viewport = this.storage = this._oldVNode = this._bgVNode = this._mainVNode = null;
  }, e.prototype.clear = function() {
    this._svgDom && (this._svgDom.innerHTML = null), this._oldVNode = null;
  }, e.prototype.toDataURL = function(t) {
    var a = this.renderToString(), r = "data:image/svg+xml;";
    return t ? (a = ta(a), a && r + "base64," + a) : r + "charset=UTF-8," + encodeURIComponent(a);
  }, e;
}();
function Nt(e) {
  return function() {
    process.env.NODE_ENV !== "production" && Rt('In SVG mode painter not support method "' + e + '"');
  };
}
function si(e, t, a, r) {
  var i;
  if (a && a !== "none")
    if (i = E("rect", "bg", {
      width: e,
      height: t,
      x: "0",
      y: "0"
    }), Gt(a))
      er({ fill: a }, i.attrs, "fill", r);
    else if (Qe(a))
      tr({
        style: {
          fill: a
        },
        dirty: ra,
        getBoundingRect: function() {
          return { width: e, height: t };
        }
      }, i.attrs, "fill", r);
    else {
      var n = we(a), o = n.color, l = n.opacity;
      i.attrs.fill = o, l < 1 && (i.attrs["fill-opacity"] = l);
    }
  return i;
}
function li(e) {
  e.registerPainter("svg", oi);
}
const fi = (e) => /* @__PURE__ */ F.createElement("svg", { width: 94, height: 94, viewBox: "0 0 94 93", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ F.createElement("g", { filter: "url(#filter0_d_2676_87083)" }, /* @__PURE__ */ F.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M88 46.5C88 69.1437 69.6437 87.5 47 87.5C24.3563 87.5 6 69.1437 6 46.5C6 23.8563 24.3563 5.5 47 5.5C69.6437 5.5 88 23.8563 88 46.5ZM46.75 13.5V9.5H47.25V13.5H46.75ZM46.75 79.5V83.5H47.25V79.5H46.75ZM14 46.75H10V46.25H14V46.75ZM80 46.75H84V46.25H80V46.75ZM55.2994 14.5597L56.3347 10.696L56.8177 10.8254L55.7824 14.6891L55.2994 14.5597ZM38.2174 78.3108L37.1821 82.1745L37.665 82.304L38.7003 78.4403L38.2174 78.3108ZM15.0597 38.2006L11.196 37.1653L11.3254 36.6823L15.1891 37.7176L15.0597 38.2006ZM78.8108 55.2826L82.6745 56.3179L82.804 55.835L78.9403 54.7997L78.8108 55.2826ZM63.2835 17.7962L65.2835 14.3321L65.7165 14.5821L63.7165 18.0462L63.2835 17.7962ZM30.2835 74.9538L28.2835 78.4179L28.7165 78.6679L30.7165 75.2038L30.2835 74.9538ZM18.2961 30.2165L14.832 28.2165L15.082 27.7835L18.5461 29.7835L18.2961 30.2165ZM75.4538 63.2165L78.9179 65.2165L79.1679 64.7835L75.7038 62.7835L75.4538 63.2165ZM70.1579 22.9887L72.9863 20.1603L73.3399 20.5138L70.5114 23.3423L70.1579 22.9887ZM23.4888 69.6577L20.6604 72.4862L21.014 72.8397L23.8424 70.0113L23.4888 69.6577ZM23.4886 23.3421L20.6601 20.5137L21.0137 20.1601L23.8421 22.9886L23.4886 23.3421ZM70.1576 70.0112L72.986 72.8396L73.3396 72.486L70.5112 69.6576L70.1576 70.0112ZM75.4539 29.7835L78.918 27.7835L79.168 28.2165L75.7039 30.2165L75.4539 29.7835ZM18.2962 62.7835L14.8321 64.7835L15.0821 65.2165L18.5462 63.2165L18.2962 62.7835ZM30.2835 18.0461L28.2835 14.582L28.7165 14.332L30.7165 17.7961L30.2835 18.0461ZM63.2835 75.2038L65.2835 78.6679L65.7165 78.4179L63.7165 74.9538L63.2835 75.2038ZM78.8109 37.7175L82.6746 36.6822L82.804 37.1652L78.9403 38.2004L78.8109 37.7175ZM15.0597 54.7995L11.196 55.8348L11.3255 56.3178L15.1892 55.2825L15.0597 54.7995ZM38.2176 14.6891L37.1823 10.8254L37.6653 10.696L38.7006 14.5597L38.2176 14.6891ZM55.2997 78.4403L56.335 82.304L56.8179 82.1745L55.7826 78.3108L55.2997 78.4403Z", fill: "currentColor" })), /* @__PURE__ */ F.createElement("defs", null, /* @__PURE__ */ F.createElement("filter", { id: "filter0_d_2676_87083", x: 0.5, y: 0, width: 93, height: 93, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, /* @__PURE__ */ F.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), /* @__PURE__ */ F.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }), /* @__PURE__ */ F.createElement("feOffset", null), /* @__PURE__ */ F.createElement("feGaussianBlur", { stdDeviation: 2.75 }), /* @__PURE__ */ F.createElement("feComposite", { in2: "hardAlpha", operator: "out" }), /* @__PURE__ */ F.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" }), /* @__PURE__ */ F.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_2676_87083" }), /* @__PURE__ */ F.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_2676_87083", result: "shape" }))));
na([va, Da, li]);
const Ve = "88px", mi = oa(({ colors: e, centerText: t, data: a }) => {
  const r = sa(), i = {
    series: [
      {
        type: "pie",
        radius: ["0%", "100%"],
        avoidLabelOverlap: !1,
        cursor: "default",
        color: e,
        label: {
          show: !1,
          position: "center"
        },
        labelLine: {
          show: !1
        },
        emphasis: { focus: "none", scale: !1 },
        data: a
      }
    ]
  };
  return /* @__PURE__ */ Pe.jsxs(la, { position: "relative", sx: { width: Ve, height: Ve }, children: [
    /* @__PURE__ */ Pe.jsx(
      fa,
      {
        variant: "subtitle1",
        sx: {
          color: e != null && e.length ? e[0] : "text.text1"
        },
        children: t
      }
    ),
    /* @__PURE__ */ Pe.jsx(
      fi,
      {
        style: {
          color: r.palette.background.background1,
          position: "absolute",
          zIndex: 3,
          top: "-3px",
          left: "-3px"
        }
      }
    ),
    /* @__PURE__ */ Pe.jsx(
      aa,
      {
        lazyUpdate: !0,
        echarts: ia,
        option: i,
        style: { width: Ve, height: Ve }
      }
    )
  ] });
});
export {
  mi as default
};
