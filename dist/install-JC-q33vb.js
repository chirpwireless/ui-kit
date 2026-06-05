import { __extends as q, createSeriesData as zt, Group as K, createSymbol as rt, SeriesModel as Rt, enterEmphasis as Mt, leaveEmphasis as Ft, updateProps as j, saveOldStyle as Ht, initProps as Lt, getLabelStatesModels as ot, normalizeSymbolOffset as Ut, ZRImage as Bt, extend as ut, setLabelStyle as Et, toggleHoverEmphasis as it, getECData as $, removeElement as vt, normalizeSymbolSize as Wt, traverseElements as Xt, isObject as Zt, map as lt, isDimensionStacked as Q, isNumber as kt, createFloat32Array as Z, PathProxy as qt, cubicRootAt as ht, cubicAt as ft, Path as Nt, bind as Jt, convertToColorString as ct, defaults as mt, setStatesStylesFromModel as pt, queryDataIndex as gt, ChartView as x, setStatesFlag as yt, isFunction as tt, ZRText as $t, interpolateRawValues as jt, labelInner as Qt, each as wt, LinearGradient as Kt, SPECIAL_STATES as bt, lerp as Yt, createRenderPlanner as xt } from "./core-Dm3hJ1-b.js";
import { getDefaultLabel as Tt, isCoordinateSystemType as te, createGridClipPath as ee, createPolarClipPath as ae, getDefaultInterpolatedLabel as re, dataSample as ie } from "./installCanvasRenderer-CM5Pdk-q.js";
var ne = (
  /** @class */
  function(l) {
    q(e, l);
    function e() {
      var t = l !== null && l.apply(this, arguments) || this;
      return t.type = e.type, t.hasSymbolVisual = !0, t;
    }
    return e.prototype.getInitialData = function(t) {
      if (process.env.NODE_ENV !== "production") {
        var a = t.coordinateSystem;
        if (a !== "polar" && a !== "cartesian2d")
          throw new Error("Line not support coordinateSystem besides cartesian and polar");
      }
      return zt(null, this, {
        useEncodeDefaulter: !0
      });
    }, e.prototype.getLegendIcon = function(t) {
      var a = new K(), o = rt("line", 0, t.itemHeight / 2, t.itemWidth, 0, t.lineStyle.stroke, !1);
      a.add(o), o.setStyle(t.lineStyle);
      var r = this.getData().getVisual("symbol"), i = this.getData().getVisual("symbolRotate"), n = r === "none" ? "circle" : r, u = t.itemHeight * 0.8, s = rt(n, (t.itemWidth - u) / 2, (t.itemHeight - u) / 2, u, u, t.itemStyle.fill);
      a.add(s), s.setStyle(t.itemStyle);
      var h = t.iconRotate === "inherit" ? i : t.iconRotate || 0;
      return s.rotation = h * Math.PI / 180, s.setOrigin([t.itemWidth / 2, t.itemHeight / 2]), n.indexOf("empty") > -1 && (s.style.stroke = s.style.fill, s.style.fill = "#fff", s.style.lineWidth = 2), a;
    }, e.type = "series.line", e.dependencies = ["grid", "polar"], e.defaultOption = {
      // zlevel: 0,
      z: 3,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      clip: !0,
      label: {
        position: "top"
      },
      // itemStyle: {
      // },
      endLabel: {
        show: !1,
        valueAnimation: !0,
        distance: 8
      },
      lineStyle: {
        width: 2,
        type: "solid"
      },
      emphasis: {
        scale: !0
      },
      // areaStyle: {
      // origin of areaStyle. Valid values:
      // `'auto'/null/undefined`: from axisLine to data
      // `'start'`: from min to data
      // `'end'`: from data to max
      // origin: 'auto'
      // },
      // false, 'start', 'end', 'middle'
      step: !1,
      // Disabled if step is true
      smooth: !1,
      smoothMonotone: null,
      symbol: "emptyCircle",
      symbolSize: 4,
      symbolRotate: null,
      showSymbol: !0,
      // `false`: follow the label interval strategy.
      // `true`: show all symbols.
      // `'auto'`: If possible, show all symbols, otherwise
      //           follow the label interval strategy.
      showAllSymbol: "auto",
      // Whether to connect break point.
      connectNulls: !1,
      // Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
      sampling: "none",
      animationEasing: "linear",
      // Disable progressive
      progressive: 0,
      hoverLayerThreshold: 1 / 0,
      universalTransition: {
        divideShape: "clone"
      },
      triggerLineEvent: !1
    }, e;
  }(Rt)
), st = (
  /** @class */
  function(l) {
    q(e, l);
    function e(t, a, o, r) {
      var i = l.call(this) || this;
      return i.updateData(t, a, o, r), i;
    }
    return e.prototype._createSymbol = function(t, a, o, r, i) {
      this.removeAll();
      var n = rt(t, -1, -1, 2, 2, null, i);
      n.attr({
        z2: 100,
        culling: !0,
        scaleX: r[0] / 2,
        scaleY: r[1] / 2
      }), n.drift = oe, this._symbolType = t, this.add(n);
    }, e.prototype.stopSymbolAnimation = function(t) {
      this.childAt(0).stopAnimation(null, t);
    }, e.prototype.getSymbolType = function() {
      return this._symbolType;
    }, e.prototype.getSymbolPath = function() {
      return this.childAt(0);
    }, e.prototype.highlight = function() {
      Mt(this.childAt(0));
    }, e.prototype.downplay = function() {
      Ft(this.childAt(0));
    }, e.prototype.setZ = function(t, a) {
      var o = this.childAt(0);
      o.zlevel = t, o.z = a;
    }, e.prototype.setDraggable = function(t, a) {
      var o = this.childAt(0);
      o.draggable = t, o.cursor = !a && t ? "move" : o.cursor;
    }, e.prototype.updateData = function(t, a, o, r) {
      this.silent = !1;
      var i = t.getItemVisual(a, "symbol") || "circle", n = t.hostModel, u = e.getSymbolSize(t, a), s = i !== this._symbolType, h = r && r.disableAnimation;
      if (s) {
        var v = t.getItemVisual(a, "symbolKeepAspect");
        this._createSymbol(i, t, a, u, v);
      } else {
        var c = this.childAt(0);
        c.silent = !1;
        var f = {
          scaleX: u[0] / 2,
          scaleY: u[1] / 2
        };
        h ? c.attr(f) : j(c, f, n, a), Ht(c);
      }
      if (this._updateCommon(t, a, u, o, r), s) {
        var c = this.childAt(0);
        if (!h) {
          var f = {
            scaleX: this._sizeX,
            scaleY: this._sizeY,
            style: {
              // Always fadeIn. Because it has fadeOut animation when symbol is removed..
              opacity: c.style.opacity
            }
          };
          c.scaleX = c.scaleY = 0, c.style.opacity = 0, Lt(c, f, n, a);
        }
      }
      h && this.childAt(0).stopAnimation("leave");
    }, e.prototype._updateCommon = function(t, a, o, r, i) {
      var n = this.childAt(0), u = t.hostModel, s, h, v, c, f, p, m, d, g;
      if (r && (s = r.emphasisItemStyle, h = r.blurItemStyle, v = r.selectItemStyle, c = r.focus, f = r.blurScope, m = r.labelStatesModels, d = r.hoverScale, g = r.cursorStyle, p = r.emphasisDisabled), !r || t.hasItemOption) {
        var y = r && r.itemModel ? r.itemModel : t.getItemModel(a), b = y.getModel("emphasis");
        s = b.getModel("itemStyle").getItemStyle(), v = y.getModel(["select", "itemStyle"]).getItemStyle(), h = y.getModel(["blur", "itemStyle"]).getItemStyle(), c = b.get("focus"), f = b.get("blurScope"), p = b.get("disabled"), m = ot(y), d = b.getShallow("scale"), g = y.getShallow("cursor");
      }
      var P = t.getItemVisual(a, "symbolRotate");
      n.attr("rotation", (P || 0) * Math.PI / 180 || 0);
      var D = Ut(t.getItemVisual(a, "symbolOffset"), o);
      D && (n.x = D[0], n.y = D[1]), g && n.attr("cursor", g);
      var _ = t.getItemVisual(a, "style"), S = _.fill;
      if (n instanceof Bt) {
        var k = n.style;
        n.useStyle(ut({
          // TODO other properties like x, y ?
          image: k.image,
          x: k.x,
          y: k.y,
          width: k.width,
          height: k.height
        }, _));
      } else
        n.__isEmptyBrush ? n.useStyle(ut({}, _)) : n.useStyle(_), n.style.decal = null, n.setColor(S, i && i.symbolInnerColor), n.style.strokeNoScale = !0;
      var L = t.getItemVisual(a, "liftZ"), I = this._z2;
      L != null ? I == null && (this._z2 = n.z2, n.z2 += L) : I != null && (n.z2 = I, this._z2 = null);
      var E = i && i.useNameLabel;
      Et(n, m, {
        labelFetcher: u,
        labelDataIndex: a,
        defaultText: A,
        inheritColor: S,
        defaultOpacity: _.opacity
      });
      function A(O) {
        return E ? t.getName(O) : Tt(t, O);
      }
      this._sizeX = o[0] / 2, this._sizeY = o[1] / 2;
      var N = n.ensureState("emphasis");
      N.style = s, n.ensureState("select").style = v, n.ensureState("blur").style = h;
      var V = d == null || d === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(d) && d > 0 ? +d : 1;
      N.scaleX = this._sizeX * V, N.scaleY = this._sizeY * V, this.setSymbolScale(1), it(this, c, f, p);
    }, e.prototype.setSymbolScale = function(t) {
      this.scaleX = this.scaleY = t;
    }, e.prototype.fadeOut = function(t, a, o) {
      var r = this.childAt(0), i = $(this).dataIndex, n = o && o.animation;
      if (this.silent = r.silent = !0, o && o.fadeLabel) {
        var u = r.getTextContent();
        u && vt(u, {
          style: {
            opacity: 0
          }
        }, a, {
          dataIndex: i,
          removeOpt: n,
          cb: function() {
            r.removeTextContent();
          }
        });
      } else
        r.removeTextContent();
      vt(r, {
        style: {
          opacity: 0
        },
        scaleX: 0,
        scaleY: 0
      }, a, {
        dataIndex: i,
        cb: t,
        removeOpt: n
      });
    }, e.getSymbolSize = function(t, a) {
      return Wt(t.getItemVisual(a, "symbolSize"));
    }, e;
  }(K)
);
function oe(l, e) {
  this.parent.drift(l, e);
}
function et(l, e, t, a) {
  return e && !isNaN(e[0]) && !isNaN(e[1]) && !(a.isIgnore && a.isIgnore(t)) && !(a.clipShape && !a.clipShape.contain(e[0], e[1])) && l.getItemVisual(t, "symbol") !== "none";
}
function dt(l) {
  return l != null && !Zt(l) && (l = {
    isIgnore: l
  }), l || {};
}
function St(l) {
  var e = l.hostModel, t = e.getModel("emphasis");
  return {
    emphasisItemStyle: t.getModel("itemStyle").getItemStyle(),
    blurItemStyle: e.getModel(["blur", "itemStyle"]).getItemStyle(),
    selectItemStyle: e.getModel(["select", "itemStyle"]).getItemStyle(),
    focus: t.get("focus"),
    blurScope: t.get("blurScope"),
    emphasisDisabled: t.get("disabled"),
    hoverScale: t.get("scale"),
    labelStatesModels: ot(e),
    cursorStyle: e.get("cursor")
  };
}
var le = (
  /** @class */
  function() {
    function l(e) {
      this.group = new K(), this._SymbolCtor = e || st;
    }
    return l.prototype.updateData = function(e, t) {
      this._progressiveEls = null, t = dt(t);
      var a = this.group, o = e.hostModel, r = this._data, i = this._SymbolCtor, n = t.disableAnimation, u = St(e), s = {
        disableAnimation: n
      }, h = t.getSymbolPoint || function(v) {
        return e.getItemLayout(v);
      };
      r || a.removeAll(), e.diff(r).add(function(v) {
        var c = h(v);
        if (et(e, c, v, t)) {
          var f = new i(e, v, u, s);
          f.setPosition(c), e.setItemGraphicEl(v, f), a.add(f);
        }
      }).update(function(v, c) {
        var f = r.getItemGraphicEl(c), p = h(v);
        if (!et(e, p, v, t)) {
          a.remove(f);
          return;
        }
        var m = e.getItemVisual(v, "symbol") || "circle", d = f && f.getSymbolType && f.getSymbolType();
        if (!f || d && d !== m)
          a.remove(f), f = new i(e, v, u, s), f.setPosition(p);
        else {
          f.updateData(e, v, u, s);
          var g = {
            x: p[0],
            y: p[1]
          };
          n ? f.attr(g) : j(f, g, o);
        }
        a.add(f), e.setItemGraphicEl(v, f);
      }).remove(function(v) {
        var c = r.getItemGraphicEl(v);
        c && c.fadeOut(function() {
          a.remove(c);
        }, o);
      }).execute(), this._getSymbolPoint = h, this._data = e;
    }, l.prototype.updateLayout = function() {
      var e = this, t = this._data;
      t && t.eachItemGraphicEl(function(a, o) {
        var r = e._getSymbolPoint(o);
        a.setPosition(r), a.markRedraw();
      });
    }, l.prototype.incrementalPrepareUpdate = function(e) {
      this._seriesScope = St(e), this._data = null, this.group.removeAll();
    }, l.prototype.incrementalUpdate = function(e, t, a) {
      this._progressiveEls = [], a = dt(a);
      function o(u) {
        u.isGroup || (u.incremental = !0, u.ensureState("emphasis").hoverLayer = !0);
      }
      for (var r = e.start; r < e.end; r++) {
        var i = t.getItemLayout(r);
        if (et(t, i, r, a)) {
          var n = new this._SymbolCtor(t, r, this._seriesScope);
          n.traverse(o), n.setPosition(i), this.group.add(n), t.setItemGraphicEl(r, n), this._progressiveEls.push(n);
        }
      }
    }, l.prototype.eachRendered = function(e) {
      Xt(this._progressiveEls || this.group, e);
    }, l.prototype.remove = function(e) {
      var t = this.group, a = this._data;
      a && e ? a.eachItemGraphicEl(function(o) {
        o.fadeOut(function() {
          t.remove(o);
        }, a.hostModel);
      }) : t.removeAll();
    }, l;
  }()
);
function Ot(l, e, t) {
  var a = l.getBaseAxis(), o = l.getOtherAxis(a), r = se(o, t), i = a.dim, n = o.dim, u = e.mapDimension(n), s = e.mapDimension(i), h = n === "x" || n === "radius" ? 1 : 0, v = lt(l.dimensions, function(p) {
    return e.mapDimension(p);
  }), c = !1, f = e.getCalculationInfo("stackResultDimension");
  return Q(
    e,
    v[0]
    /* , dims[1] */
  ) && (c = !0, v[0] = f), Q(
    e,
    v[1]
    /* , dims[0] */
  ) && (c = !0, v[1] = f), {
    dataDimsForPoint: v,
    valueStart: r,
    valueAxisDim: n,
    baseAxisDim: i,
    stacked: !!c,
    valueDim: u,
    baseDim: s,
    baseDataOffset: h,
    stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
  };
}
function se(l, e) {
  var t = 0, a = l.scale.getExtent();
  return e === "start" ? t = a[0] : e === "end" ? t = a[1] : kt(e) && !isNaN(e) ? t = e : a[0] > 0 ? t = a[0] : a[1] < 0 && (t = a[1]), t;
}
function Ct(l, e, t, a) {
  var o = NaN;
  l.stacked && (o = t.get(t.getCalculationInfo("stackedOverDimension"), a)), isNaN(o) && (o = l.valueStart);
  var r = l.baseDataOffset, i = [];
  return i[r] = t.get(l.baseDim, a), i[1 - r] = o, e.dataToPoint(i);
}
function ue(l, e) {
  var t = [];
  return e.diff(l).add(function(a) {
    t.push({
      cmd: "+",
      idx: a
    });
  }).update(function(a, o) {
    t.push({
      cmd: "=",
      idx: o,
      idx1: a
    });
  }).remove(function(a) {
    t.push({
      cmd: "-",
      idx: a
    });
  }).execute(), t;
}
function ve(l, e, t, a, o, r, i, n) {
  for (var u = ue(l, e), s = [], h = [], v = [], c = [], f = [], p = [], m = [], d = Ot(o, e, i), g = l.getLayout("points") || [], y = e.getLayout("points") || [], b = 0; b < u.length; b++) {
    var P = u[b], D = !0, _ = void 0, S = void 0;
    switch (P.cmd) {
      case "=":
        _ = P.idx * 2, S = P.idx1 * 2;
        var k = g[_], L = g[_ + 1], I = y[S], E = y[S + 1];
        (isNaN(k) || isNaN(L)) && (k = I, L = E), s.push(k, L), h.push(I, E), v.push(t[_], t[_ + 1]), c.push(a[S], a[S + 1]), m.push(e.getRawIndex(P.idx1));
        break;
      case "+":
        var A = P.idx, N = d.dataDimsForPoint, V = o.dataToPoint([e.get(N[0], A), e.get(N[1], A)]);
        S = A * 2, s.push(V[0], V[1]), h.push(y[S], y[S + 1]);
        var O = Ct(d, o, e, A);
        v.push(O[0], O[1]), c.push(a[S], a[S + 1]), m.push(e.getRawIndex(A));
        break;
      case "-":
        D = !1;
    }
    D && (f.push(P), p.push(p.length));
  }
  p.sort(function(G, Y) {
    return m[G] - m[Y];
  });
  for (var C = s.length, M = Z(C), w = Z(C), T = Z(C), F = Z(C), H = [], b = 0; b < p.length; b++) {
    var J = p[b], z = b * 2, R = J * 2;
    M[z] = s[R], M[z + 1] = s[R + 1], w[z] = h[R], w[z + 1] = h[R + 1], T[z] = v[R], T[z + 1] = v[R + 1], F[z] = c[R], F[z + 1] = c[R + 1], H[b] = f[J];
  }
  return {
    current: M,
    next: w,
    stackedOnCurrent: T,
    stackedOnNext: F,
    status: H
  };
}
var U = Math.min, B = Math.max;
function X(l, e) {
  return isNaN(l) || isNaN(e);
}
function nt(l, e, t, a, o, r, i, n, u) {
  for (var s, h, v, c, f, p, m = t, d = 0; d < a; d++) {
    var g = e[m * 2], y = e[m * 2 + 1];
    if (m >= o || m < 0)
      break;
    if (X(g, y)) {
      if (u) {
        m += r;
        continue;
      }
      break;
    }
    if (m === t)
      l[r > 0 ? "moveTo" : "lineTo"](g, y), v = g, c = y;
    else {
      var b = g - s, P = y - h;
      if (b * b + P * P < 0.5) {
        m += r;
        continue;
      }
      if (i > 0) {
        for (var D = m + r, _ = e[D * 2], S = e[D * 2 + 1]; _ === g && S === y && d < a; )
          d++, D += r, m += r, _ = e[D * 2], S = e[D * 2 + 1], g = e[m * 2], y = e[m * 2 + 1], b = g - s, P = y - h;
        var k = d + 1;
        if (u)
          for (; X(_, S) && k < a; )
            k++, D += r, _ = e[D * 2], S = e[D * 2 + 1];
        var L = 0.5, I = 0, E = 0, A = void 0, N = void 0;
        if (k >= a || X(_, S))
          f = g, p = y;
        else {
          I = _ - s, E = S - h;
          var V = g - s, O = _ - g, C = y - h, M = S - y, w = void 0, T = void 0;
          if (n === "x") {
            w = Math.abs(V), T = Math.abs(O);
            var F = I > 0 ? 1 : -1;
            f = g - F * w * i, p = y, A = g + F * T * i, N = y;
          } else if (n === "y") {
            w = Math.abs(C), T = Math.abs(M);
            var H = E > 0 ? 1 : -1;
            f = g, p = y - H * w * i, A = g, N = y + H * T * i;
          } else
            w = Math.sqrt(V * V + C * C), T = Math.sqrt(O * O + M * M), L = T / (T + w), f = g - I * i * (1 - L), p = y - E * i * (1 - L), A = g + I * i * L, N = y + E * i * L, A = U(A, B(_, g)), N = U(N, B(S, y)), A = B(A, U(_, g)), N = B(N, U(S, y)), I = A - g, E = N - y, f = g - I * w / T, p = y - E * w / T, f = U(f, B(s, g)), p = U(p, B(h, y)), f = B(f, U(s, g)), p = B(p, U(h, y)), I = g - f, E = y - p, A = g + I * T / w, N = y + E * T / w;
        }
        l.bezierCurveTo(v, c, f, p, g, y), v = A, c = N;
      } else
        l.lineTo(g, y);
    }
    s = g, h = y, m += r;
  }
  return d;
}
var Vt = (
  /** @class */
  /* @__PURE__ */ function() {
    function l() {
      this.smooth = 0, this.smoothConstraint = !0;
    }
    return l;
  }()
), he = (
  /** @class */
  function(l) {
    q(e, l);
    function e(t) {
      var a = l.call(this, t) || this;
      return a.type = "ec-polyline", a;
    }
    return e.prototype.getDefaultStyle = function() {
      return {
        stroke: "#000",
        fill: null
      };
    }, e.prototype.getDefaultShape = function() {
      return new Vt();
    }, e.prototype.buildPath = function(t, a) {
      var o = a.points, r = 0, i = o.length / 2;
      if (a.connectNulls) {
        for (; i > 0 && X(o[i * 2 - 2], o[i * 2 - 1]); i--)
          ;
        for (; r < i && X(o[r * 2], o[r * 2 + 1]); r++)
          ;
      }
      for (; r < i; )
        r += nt(t, o, r, i, i, 1, a.smooth, a.smoothMonotone, a.connectNulls) + 1;
    }, e.prototype.getPointOn = function(t, a) {
      this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
      for (var o = this.path, r = o.data, i = qt.CMD, n, u, s = a === "x", h = [], v = 0; v < r.length; ) {
        var c = r[v++], f = void 0, p = void 0, m = void 0, d = void 0, g = void 0, y = void 0, b = void 0;
        switch (c) {
          case i.M:
            n = r[v++], u = r[v++];
            break;
          case i.L:
            if (f = r[v++], p = r[v++], b = s ? (t - n) / (f - n) : (t - u) / (p - u), b <= 1 && b >= 0) {
              var P = s ? (p - u) * b + u : (f - n) * b + n;
              return s ? [t, P] : [P, t];
            }
            n = f, u = p;
            break;
          case i.C:
            f = r[v++], p = r[v++], m = r[v++], d = r[v++], g = r[v++], y = r[v++];
            var D = s ? ht(n, f, m, g, t, h) : ht(u, p, d, y, t, h);
            if (D > 0)
              for (var _ = 0; _ < D; _++) {
                var S = h[_];
                if (S <= 1 && S >= 0) {
                  var P = s ? ft(u, p, d, y, S) : ft(n, f, m, g, S);
                  return s ? [t, P] : [P, t];
                }
              }
            n = g, u = y;
            break;
        }
      }
    }, e;
  }(Nt)
), fe = (
  /** @class */
  function(l) {
    q(e, l);
    function e() {
      return l !== null && l.apply(this, arguments) || this;
    }
    return e;
  }(Vt)
), ce = (
  /** @class */
  function(l) {
    q(e, l);
    function e(t) {
      var a = l.call(this, t) || this;
      return a.type = "ec-polygon", a;
    }
    return e.prototype.getDefaultShape = function() {
      return new fe();
    }, e.prototype.buildPath = function(t, a) {
      var o = a.points, r = a.stackedOnPoints, i = 0, n = o.length / 2, u = a.smoothMonotone;
      if (a.connectNulls) {
        for (; n > 0 && X(o[n * 2 - 2], o[n * 2 - 1]); n--)
          ;
        for (; i < n && X(o[i * 2], o[i * 2 + 1]); i++)
          ;
      }
      for (; i < n; ) {
        var s = nt(t, o, i, n, n, 1, a.smooth, u, a.connectNulls);
        nt(t, r, i + s - 1, s, n, -1, a.stackedOnSmooth, u, a.connectNulls), i += s + 1, t.closePath();
      }
    }, e;
  }(Nt)
);
function _t(l, e) {
  if (l.length === e.length) {
    for (var t = 0; t < l.length; t++)
      if (l[t] !== e[t])
        return;
    return !0;
  }
}
function Dt(l) {
  for (var e = 1 / 0, t = 1 / 0, a = -1 / 0, o = -1 / 0, r = 0; r < l.length; ) {
    var i = l[r++], n = l[r++];
    isNaN(i) || (e = Math.min(i, e), a = Math.max(i, a)), isNaN(n) || (t = Math.min(n, t), o = Math.max(n, o));
  }
  return [[e, t], [a, o]];
}
function Pt(l, e) {
  var t = Dt(l), a = t[0], o = t[1], r = Dt(e), i = r[0], n = r[1];
  return Math.max(Math.abs(a[0] - i[0]), Math.abs(a[1] - i[1]), Math.abs(o[0] - n[0]), Math.abs(o[1] - n[1]));
}
function It(l) {
  return kt(l) ? l : l ? 0.5 : 0;
}
function me(l, e, t) {
  if (!t.valueDim)
    return [];
  for (var a = e.count(), o = Z(a * 2), r = 0; r < a; r++) {
    var i = Ct(t, l, e, r);
    o[r * 2] = i[0], o[r * 2 + 1] = i[1];
  }
  return o;
}
function W(l, e, t, a, o) {
  var r = t.getBaseAxis(), i = r.dim === "x" || r.dim === "radius" ? 0 : 1, n = [], u = 0, s = [], h = [], v = [], c = [];
  if (o) {
    for (u = 0; u < l.length; u += 2) {
      var f = e || l;
      !isNaN(f[u]) && !isNaN(f[u + 1]) && c.push(l[u], l[u + 1]);
    }
    l = c;
  }
  for (u = 0; u < l.length - 2; u += 2)
    switch (v[0] = l[u + 2], v[1] = l[u + 3], h[0] = l[u], h[1] = l[u + 1], n.push(h[0], h[1]), a) {
      case "end":
        s[i] = v[i], s[1 - i] = h[1 - i], n.push(s[0], s[1]);
        break;
      case "middle":
        var p = (h[i] + v[i]) / 2, m = [];
        s[i] = m[i] = p, s[1 - i] = h[1 - i], m[1 - i] = v[1 - i], n.push(s[0], s[1]), n.push(m[0], m[1]);
        break;
      default:
        s[i] = h[i], s[1 - i] = v[1 - i], n.push(s[0], s[1]);
    }
  return n.push(l[u++], l[u++]), n;
}
function pe(l, e) {
  var t = [], a = l.length, o, r;
  function i(h, v, c) {
    var f = h.coord, p = (c - f) / (v.coord - f), m = Yt(p, [h.color, v.color]);
    return {
      coord: c,
      color: m
    };
  }
  for (var n = 0; n < a; n++) {
    var u = l[n], s = u.coord;
    if (s < 0)
      o = u;
    else if (s > e) {
      r ? t.push(i(r, u, e)) : o && t.push(i(o, u, 0), i(o, u, e));
      break;
    } else
      o && (t.push(i(o, u, 0)), o = null), t.push(u), r = u;
  }
  return t;
}
function ge(l, e, t) {
  var a = l.getVisual("visualMeta");
  if (!(!a || !a.length || !l.count())) {
    if (e.type !== "cartesian2d") {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style is only supported on cartesian2d.");
      return;
    }
    for (var o, r, i = a.length - 1; i >= 0; i--) {
      var n = l.getDimensionInfo(a[i].dimension);
      if (o = n && n.coordDim, o === "x" || o === "y") {
        r = a[i];
        break;
      }
    }
    if (!r) {
      process.env.NODE_ENV !== "production" && console.warn("Visual map on line style only support x or y dimension.");
      return;
    }
    var u = e.getAxis(o), s = lt(r.stops, function(b) {
      return {
        coord: u.toGlobalCoord(u.dataToCoord(b.value)),
        color: b.color
      };
    }), h = s.length, v = r.outerColors.slice();
    h && s[0].coord > s[h - 1].coord && (s.reverse(), v.reverse());
    var c = pe(s, o === "x" ? t.getWidth() : t.getHeight()), f = c.length;
    if (!f && h)
      return s[0].coord < 0 ? v[1] ? v[1] : s[h - 1].color : v[0] ? v[0] : s[0].color;
    var p = 10, m = c[0].coord - p, d = c[f - 1].coord + p, g = d - m;
    if (g < 1e-3)
      return "transparent";
    wt(c, function(b) {
      b.offset = (b.coord - m) / g;
    }), c.push({
      // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
      offset: f ? c[f - 1].offset : 0.5,
      color: v[1] || "transparent"
    }), c.unshift({
      offset: f ? c[0].offset : 0.5,
      color: v[0] || "transparent"
    });
    var y = new Kt(0, 0, 0, 0, c, !0);
    return y[o] = m, y[o + "2"] = d, y;
  }
}
function ye(l, e, t) {
  var a = l.get("showAllSymbol"), o = a === "auto";
  if (!(a && !o)) {
    var r = t.getAxesByScale("ordinal")[0];
    if (r && !(o && be(r, e))) {
      var i = e.mapDimension(r.dim), n = {};
      return wt(r.getViewLabels(), function(u) {
        var s = r.scale.getRawOrdinalNumber(u.tickValue);
        n[s] = 1;
      }), function(u) {
        return !n.hasOwnProperty(e.get(i, u));
      };
    }
  }
}
function be(l, e) {
  var t = l.getExtent(), a = Math.abs(t[1] - t[0]) / l.scale.count();
  isNaN(a) && (a = 0);
  for (var o = e.count(), r = Math.max(1, Math.round(o / 5)), i = 0; i < o; i += r)
    if (st.getSymbolSize(
      e,
      i
      // Only for cartesian, where `isHorizontal` exists.
    )[l.isHorizontal() ? 1 : 0] * 1.5 > a)
      return !1;
  return !0;
}
function de(l, e) {
  return isNaN(l) || isNaN(e);
}
function Se(l) {
  for (var e = l.length / 2; e > 0 && de(l[e * 2 - 2], l[e * 2 - 1]); e--)
    ;
  return e - 1;
}
function At(l, e) {
  return [l[e * 2], l[e * 2 + 1]];
}
function _e(l, e, t) {
  for (var a = l.length / 2, o = t === "x" ? 0 : 1, r, i, n = 0, u = -1, s = 0; s < a; s++)
    if (i = l[s * 2 + o], !(isNaN(i) || isNaN(l[s * 2 + 1 - o]))) {
      if (s === 0) {
        r = i;
        continue;
      }
      if (r <= e && i >= e || r >= e && i <= e) {
        u = s;
        break;
      }
      n = s, r = i;
    }
  return {
    range: [n, u],
    t: (e - r) / (i - r)
  };
}
function Gt(l) {
  if (l.get(["endLabel", "show"]))
    return !0;
  for (var e = 0; e < bt.length; e++)
    if (l.get([bt[e], "endLabel", "show"]))
      return !0;
  return !1;
}
function at(l, e, t, a) {
  if (te(e, "cartesian2d")) {
    var o = a.getModel("endLabel"), r = o.get("valueAnimation"), i = a.getData(), n = {
      lastFrameIndex: 0
    }, u = Gt(a) ? function(f, p) {
      l._endLabelOnDuring(f, p, i, n, r, o, e);
    } : null, s = e.getBaseAxis().isHorizontal(), h = ee(e, t, a, function() {
      var f = l._endLabel;
      f && t && n.originalX != null && f.attr({
        x: n.originalX,
        y: n.originalY
      });
    }, u);
    if (!a.get("clip", !0)) {
      var v = h.shape, c = Math.max(v.width, v.height);
      s ? (v.y -= c, v.height += c * 2) : (v.x -= c, v.width += c * 2);
    }
    return u && u(1, h), h;
  } else
    return process.env.NODE_ENV !== "production" && a.get(["endLabel", "show"]) && console.warn("endLabel is not supported for lines in polar systems."), ae(e, t, a);
}
function De(l, e) {
  var t = e.getBaseAxis(), a = t.isHorizontal(), o = t.inverse, r = a ? o ? "right" : "left" : "center", i = a ? "middle" : o ? "top" : "bottom";
  return {
    normal: {
      align: l.get("align") || r,
      verticalAlign: l.get("verticalAlign") || i
    }
  };
}
var Pe = (
  /** @class */
  function(l) {
    q(e, l);
    function e() {
      return l !== null && l.apply(this, arguments) || this;
    }
    return e.prototype.init = function() {
      var t = new K(), a = new le();
      this.group.add(a.group), this._symbolDraw = a, this._lineGroup = t, this._changePolyState = Jt(this._changePolyState, this);
    }, e.prototype.render = function(t, a, o) {
      var r = t.coordinateSystem, i = this.group, n = t.getData(), u = t.getModel("lineStyle"), s = t.getModel("areaStyle"), h = n.getLayout("points") || [], v = r.type === "polar", c = this._coordSys, f = this._symbolDraw, p = this._polyline, m = this._polygon, d = this._lineGroup, g = !a.ssr && t.get("animation"), y = !s.isEmpty(), b = s.get("origin"), P = Ot(r, n, b), D = y && me(r, n, P), _ = t.get("showSymbol"), S = t.get("connectNulls"), k = _ && !v && ye(t, n, r), L = this._data;
      L && L.eachItemGraphicEl(function(G, Y) {
        G.__temp && (i.remove(G), L.setItemGraphicEl(Y, null));
      }), _ || f.remove(), i.add(d);
      var I = v ? !1 : t.get("step"), E;
      r && r.getArea && t.get("clip", !0) && (E = r.getArea(), E.width != null ? (E.x -= 0.1, E.y -= 0.1, E.width += 0.2, E.height += 0.2) : E.r0 && (E.r0 -= 0.5, E.r += 0.5)), this._clipShapeForSymbol = E;
      var A = ge(n, r, o) || n.getVisual("style")[n.getVisual("drawType")];
      if (!(p && c.type === r.type && I === this._step))
        _ && f.updateData(n, {
          isIgnore: k,
          clipShape: E,
          disableAnimation: !0,
          getSymbolPoint: function(G) {
            return [h[G * 2], h[G * 2 + 1]];
          }
        }), g && this._initSymbolLabelAnimation(n, r, E), I && (D && (D = W(D, h, r, I, S)), h = W(h, null, r, I, S)), p = this._newPolyline(h), y ? m = this._newPolygon(h, D) : m && (d.remove(m), m = this._polygon = null), v || this._initOrUpdateEndLabel(t, r, ct(A)), d.setClipPath(at(this, r, !0, t));
      else {
        y && !m ? m = this._newPolygon(h, D) : m && !y && (d.remove(m), m = this._polygon = null), v || this._initOrUpdateEndLabel(t, r, ct(A));
        var N = d.getClipPath();
        if (N) {
          var V = at(this, r, !1, t);
          Lt(N, {
            shape: V.shape
          }, t);
        } else
          d.setClipPath(at(this, r, !0, t));
        _ && f.updateData(n, {
          isIgnore: k,
          clipShape: E,
          disableAnimation: !0,
          getSymbolPoint: function(G) {
            return [h[G * 2], h[G * 2 + 1]];
          }
        }), (!_t(this._stackedOnPoints, D) || !_t(this._points, h)) && (g ? this._doUpdateAnimation(n, D, r, o, I, b, S) : (I && (D && (D = W(D, h, r, I, S)), h = W(h, null, r, I, S)), p.setShape({
          points: h
        }), m && m.setShape({
          points: h,
          stackedOnPoints: D
        })));
      }
      var O = t.getModel("emphasis"), C = O.get("focus"), M = O.get("blurScope"), w = O.get("disabled");
      if (p.useStyle(mt(
        // Use color in lineStyle first
        u.getLineStyle(),
        {
          fill: "none",
          stroke: A,
          lineJoin: "bevel"
        }
      )), pt(p, t, "lineStyle"), p.style.lineWidth > 0 && t.get(["emphasis", "lineStyle", "width"]) === "bolder") {
        var T = p.getState("emphasis").style;
        T.lineWidth = +p.style.lineWidth + 1;
      }
      $(p).seriesIndex = t.seriesIndex, it(p, C, M, w);
      var F = It(t.get("smooth")), H = t.get("smoothMonotone");
      if (p.setShape({
        smooth: F,
        smoothMonotone: H,
        connectNulls: S
      }), m) {
        var J = n.getCalculationInfo("stackedOnSeries"), z = 0;
        m.useStyle(mt(s.getAreaStyle(), {
          fill: A,
          opacity: 0.7,
          lineJoin: "bevel",
          decal: n.getVisual("style").decal
        })), J && (z = It(J.get("smooth"))), m.setShape({
          smooth: F,
          stackedOnSmooth: z,
          smoothMonotone: H,
          connectNulls: S
        }), pt(m, t, "areaStyle"), $(m).seriesIndex = t.seriesIndex, it(m, C, M, w);
      }
      var R = this._changePolyState;
      n.eachItemGraphicEl(function(G) {
        G && (G.onHoverStateChange = R);
      }), this._polyline.onHoverStateChange = R, this._data = n, this._coordSys = r, this._stackedOnPoints = D, this._points = h, this._step = I, this._valueOrigin = b, t.get("triggerLineEvent") && (this.packEventData(t, p), m && this.packEventData(t, m));
    }, e.prototype.packEventData = function(t, a) {
      $(a).eventData = {
        componentType: "series",
        componentSubType: "line",
        componentIndex: t.componentIndex,
        seriesIndex: t.seriesIndex,
        seriesName: t.name,
        seriesType: "line"
      };
    }, e.prototype.highlight = function(t, a, o, r) {
      var i = t.getData(), n = gt(i, r);
      if (this._changePolyState("emphasis"), !(n instanceof Array) && n != null && n >= 0) {
        var u = i.getLayout("points"), s = i.getItemGraphicEl(n);
        if (!s) {
          var h = u[n * 2], v = u[n * 2 + 1];
          if (isNaN(h) || isNaN(v) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(h, v))
            return;
          var c = t.get("zlevel") || 0, f = t.get("z") || 0;
          s = new st(i, n), s.x = h, s.y = v, s.setZ(c, f);
          var p = s.getSymbolPath().getTextContent();
          p && (p.zlevel = c, p.z = f, p.z2 = this._polyline.z2 + 1), s.__temp = !0, i.setItemGraphicEl(n, s), s.stopSymbolAnimation(!0), this.group.add(s);
        }
        s.highlight();
      } else
        x.prototype.highlight.call(this, t, a, o, r);
    }, e.prototype.downplay = function(t, a, o, r) {
      var i = t.getData(), n = gt(i, r);
      if (this._changePolyState("normal"), n != null && n >= 0) {
        var u = i.getItemGraphicEl(n);
        u && (u.__temp ? (i.setItemGraphicEl(n, null), this.group.remove(u)) : u.downplay());
      } else
        x.prototype.downplay.call(this, t, a, o, r);
    }, e.prototype._changePolyState = function(t) {
      var a = this._polygon;
      yt(this._polyline, t), a && yt(a, t);
    }, e.prototype._newPolyline = function(t) {
      var a = this._polyline;
      return a && this._lineGroup.remove(a), a = new he({
        shape: {
          points: t
        },
        segmentIgnoreThreshold: 2,
        z2: 10
      }), this._lineGroup.add(a), this._polyline = a, a;
    }, e.prototype._newPolygon = function(t, a) {
      var o = this._polygon;
      return o && this._lineGroup.remove(o), o = new ce({
        shape: {
          points: t,
          stackedOnPoints: a
        },
        segmentIgnoreThreshold: 2
      }), this._lineGroup.add(o), this._polygon = o, o;
    }, e.prototype._initSymbolLabelAnimation = function(t, a, o) {
      var r, i, n = a.getBaseAxis(), u = n.inverse;
      a.type === "cartesian2d" ? (r = n.isHorizontal(), i = !1) : a.type === "polar" && (r = n.dim === "angle", i = !0);
      var s = t.hostModel, h = s.get("animationDuration");
      tt(h) && (h = h(null));
      var v = s.get("animationDelay") || 0, c = tt(v) ? v(null) : v;
      t.eachItemGraphicEl(function(f, p) {
        var m = f;
        if (m) {
          var d = [f.x, f.y], g = void 0, y = void 0, b = void 0;
          if (o)
            if (i) {
              var P = o, D = a.pointToCoord(d);
              r ? (g = P.startAngle, y = P.endAngle, b = -D[1] / 180 * Math.PI) : (g = P.r0, y = P.r, b = D[0]);
            } else {
              var _ = o;
              r ? (g = _.x, y = _.x + _.width, b = f.x) : (g = _.y + _.height, y = _.y, b = f.y);
            }
          var S = y === g ? 0 : (b - g) / (y - g);
          u && (S = 1 - S);
          var k = tt(v) ? v(p) : h * S + c, L = m.getSymbolPath(), I = L.getTextContent();
          m.attr({
            scaleX: 0,
            scaleY: 0
          }), m.animateTo({
            scaleX: 1,
            scaleY: 1
          }, {
            duration: 200,
            setToFinal: !0,
            delay: k
          }), I && I.animateFrom({
            style: {
              opacity: 0
            }
          }, {
            duration: 300,
            delay: k
          }), L.disableLabelAnimation = !0;
        }
      });
    }, e.prototype._initOrUpdateEndLabel = function(t, a, o) {
      var r = t.getModel("endLabel");
      if (Gt(t)) {
        var i = t.getData(), n = this._polyline, u = i.getLayout("points");
        if (!u) {
          n.removeTextContent(), this._endLabel = null;
          return;
        }
        var s = this._endLabel;
        s || (s = this._endLabel = new $t({
          z2: 200
          // should be higher than item symbol
        }), s.ignoreClip = !0, n.setTextContent(this._endLabel), n.disableLabelAnimation = !0);
        var h = Se(u);
        h >= 0 && (Et(n, ot(t, "endLabel"), {
          inheritColor: o,
          labelFetcher: t,
          labelDataIndex: h,
          defaultText: function(v, c, f) {
            return f != null ? re(i, f) : Tt(i, v);
          },
          enableTextSetter: !0
        }, De(r, a)), n.textConfig.position = null);
      } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
    }, e.prototype._endLabelOnDuring = function(t, a, o, r, i, n, u) {
      var s = this._endLabel, h = this._polyline;
      if (s) {
        t < 1 && r.originalX == null && (r.originalX = s.x, r.originalY = s.y);
        var v = o.getLayout("points"), c = o.hostModel, f = c.get("connectNulls"), p = n.get("precision"), m = n.get("distance") || 0, d = u.getBaseAxis(), g = d.isHorizontal(), y = d.inverse, b = a.shape, P = y ? g ? b.x : b.y + b.height : g ? b.x + b.width : b.y, D = (g ? m : 0) * (y ? -1 : 1), _ = (g ? 0 : -m) * (y ? -1 : 1), S = g ? "x" : "y", k = _e(v, P, S), L = k.range, I = L[1] - L[0], E = void 0;
        if (I >= 1) {
          if (I > 1 && !f) {
            var A = At(v, L[0]);
            s.attr({
              x: A[0] + D,
              y: A[1] + _
            }), i && (E = c.getRawValue(L[0]));
          } else {
            var A = h.getPointOn(P, S);
            A && s.attr({
              x: A[0] + D,
              y: A[1] + _
            });
            var N = c.getRawValue(L[0]), V = c.getRawValue(L[1]);
            i && (E = jt(o, p, N, V, k.t));
          }
          r.lastFrameIndex = L[0];
        } else {
          var O = t === 1 || r.lastFrameIndex > 0 ? L[0] : 0, A = At(v, O);
          i && (E = c.getRawValue(O)), s.attr({
            x: A[0] + D,
            y: A[1] + _
          });
        }
        if (i) {
          var C = Qt(s);
          typeof C.setLabelText == "function" && C.setLabelText(E);
        }
      }
    }, e.prototype._doUpdateAnimation = function(t, a, o, r, i, n, u) {
      var s = this._polyline, h = this._polygon, v = t.hostModel, c = ve(this._data, t, this._stackedOnPoints, a, this._coordSys, o, this._valueOrigin), f = c.current, p = c.stackedOnCurrent, m = c.next, d = c.stackedOnNext;
      if (i && (p = W(c.stackedOnCurrent, c.current, o, i, u), f = W(c.current, null, o, i, u), d = W(c.stackedOnNext, c.next, o, i, u), m = W(c.next, null, o, i, u)), Pt(f, m) > 3e3 || h && Pt(p, d) > 3e3) {
        s.stopAnimation(), s.setShape({
          points: m
        }), h && (h.stopAnimation(), h.setShape({
          points: m,
          stackedOnPoints: d
        }));
        return;
      }
      s.shape.__points = c.current, s.shape.points = f;
      var g = {
        shape: {
          points: m
        }
      };
      c.current !== f && (g.shape.__points = c.next), s.stopAnimation(), j(s, g, v), h && (h.setShape({
        // Reuse the points with polyline.
        points: f,
        stackedOnPoints: p
      }), h.stopAnimation(), j(h, {
        shape: {
          stackedOnPoints: d
        }
      }, v), s.shape.points !== h.shape.points && (h.shape.points = s.shape.points));
      for (var y = [], b = c.status, P = 0; P < b.length; P++) {
        var D = b[P].cmd;
        if (D === "=") {
          var _ = t.getItemGraphicEl(b[P].idx1);
          _ && y.push({
            el: _,
            ptIdx: P
            // Index of points
          });
        }
      }
      s.animators && s.animators.length && s.animators[0].during(function() {
        h && h.dirtyShape();
        for (var S = s.shape.__points, k = 0; k < y.length; k++) {
          var L = y[k].el, I = y[k].ptIdx * 2;
          L.x = S[I], L.y = S[I + 1], L.markRedraw();
        }
      });
    }, e.prototype.remove = function(t) {
      var a = this.group, o = this._data;
      this._lineGroup.removeAll(), this._symbolDraw.remove(!0), o && o.eachItemGraphicEl(function(r, i) {
        r.__temp && (a.remove(r), o.setItemGraphicEl(i, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    }, e.type = "line", e;
  }(x)
);
function Ie(l, e) {
  return {
    seriesType: l,
    plan: xt(),
    reset: function(t) {
      var a = t.getData(), o = t.coordinateSystem;
      if (t.pipelineContext, !!o) {
        var r = lt(o.dimensions, function(v) {
          return a.mapDimension(v);
        }).slice(0, 2), i = r.length, n = a.getCalculationInfo("stackResultDimension");
        Q(a, r[0]) && (r[0] = n), Q(a, r[1]) && (r[1] = n);
        var u = a.getStore(), s = a.getDimensionIndex(r[0]), h = a.getDimensionIndex(r[1]);
        return i && {
          progress: function(v, c) {
            for (var f = v.end - v.start, p = Z(f * i), m = [], d = [], g = v.start, y = 0; g < v.end; g++) {
              var b = void 0;
              if (i === 1) {
                var P = u.get(s, g);
                b = o.dataToPoint(P, null, d);
              } else
                m[0] = u.get(s, g), m[1] = u.get(h, g), b = o.dataToPoint(m, null, d);
              p[y++] = b[0], p[y++] = b[1];
            }
            c.setLayout("points", p);
          }
        };
      }
    }
  };
}
function Ee(l) {
  l.registerChartView(Pe), l.registerSeriesModel(ne), l.registerLayout(Ie("line")), l.registerVisual({
    seriesType: "line",
    reset: function(e) {
      var t = e.getData(), a = e.getModel("lineStyle").getLineStyle();
      a && !a.stroke && (a.stroke = t.getVisual("style").fill), t.setVisual("legendLineStyle", a);
    }
  }), l.registerProcessor(l.PRIORITY.PROCESSOR.STATISTIC, ie("line"));
}
export {
  Ee as install
};
