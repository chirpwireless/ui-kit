import { retrieveRawValue as Ot, isArray as F, round as Z, Sector as Me, Rect as Tt, initProps as ve, isFunction as lt, isString as it, __extends as P, ComponentModel as Pt, SINGLE_REFERRING as rt, mixin as De, AxisModelCommonMixin as Ee, defaults as B, merge as E, each as A, fetchLayoutMode as ke, getLayoutParams as Re, mergeLayoutParam as Be, OrdinalMeta as Oe, map as It, filter as He, invert as Ne, BoundingRect as $, applyTransform$1 as Y, Axis as Ve, retrieve3 as fe, retrieve as X, IntervalScale as ze, getScaleExtent as Ge, increaseInterval as vt, isValueNice as Ze, getPrecisionSafe as Ht, warn as Fe, getLayoutRect as We, estimateLabelUnionRect as $e, isObject as K, indexOf as U, createScaleByModel as Ye, getDataDimensionsOnAxis as Ue, keys as Xe, isIntervalOrLogScale as _t, niceScaleExtent as Nt, ifAxisCrossZero as Ke, remRadian as de, Group as at, ZRText as Mt, createTextStyle as Dt, setTooltipConfig as ce, getECData as pe, prepareLayoutList as je, hideOverlap as qe, extend as ut, Line as nt, subPixelOptimizeLine as ot, normalizeSymbolOffset as Je, createSymbol as Qe, Model as ge, retrieve2 as q, shouldShowAllLabels as ti, identity as ei, rotate as xe, mul as Vt, isRadianAroundZero as st, isNumber as ii, curry as N, clone as ye, ComponentView as Et, makeInner as ht, createHashMap as ri, groupTransition as ai, graphic as ni, createIcon as oi, bind as me, stop as si, createOrUpdate as li, clear as ui, updateProps as hi, getAxisRawValue as vi, create as fi, translate as di, applyTransform as ci, normalizeCssArray as pi, getBoundingRect as gi, env as kt, queryDataIndex as xi, use as zt, __extends$1 as yi, disableUserSelect as _e, REDRAW_BIT as At, Eventful as mi, devicePixelRatio as Ae, platformApi as _i, isGradientObject as Ai, getCanvasGradient as wi, isImagePatternObject as Li, createCanvasPattern as bi, brush as J, brushSingle as Si, requestAnimationFrame as Ci, logError as ft, getSize as Q } from "./core-Dm3hJ1-b.js";
function Zr(i, e) {
  var t = i.mapDimensionsAll("defaultedLabel"), r = t.length;
  if (r === 1) {
    var a = Ot(i, e, t[0]);
    return a != null ? a + "" : null;
  } else if (r) {
    for (var n = [], o = 0; o < t.length; o++)
      n.push(Ot(i, e, t[o]));
    return n.join(" ");
  }
}
function Fr(i, e) {
  var t = i.mapDimensionsAll("defaultedLabel");
  if (!F(e))
    return e + "";
  for (var r = [], a = 0; a < t.length; a++) {
    var n = i.getDimensionIndex(t[a]);
    n >= 0 && r.push(e[n]);
  }
  return r.join(" ");
}
function Ti(i, e, t, r, a) {
  var n = i.getArea(), o = n.x, s = n.y, l = n.width, u = n.height, v = t.get(["lineStyle", "width"]) || 0;
  o -= v / 2, s -= v / 2, l += v, u += v, l = Math.ceil(l), o !== Math.floor(o) && (o = Math.floor(o), l++);
  var h = new Tt({
    shape: {
      x: o,
      y: s,
      width: l,
      height: u
    }
  });
  if (e) {
    var f = i.getBaseAxis(), c = f.isHorizontal(), d = f.inverse;
    c ? (d && (h.shape.x += l), h.shape.width = 0) : (d || (h.shape.y += u), h.shape.height = 0);
    var g = lt(a) ? function(p) {
      a(p, h);
    } : null;
    ve(h, {
      shape: {
        width: l,
        height: u,
        x: o,
        y: s
      }
    }, t, null, r, g);
  }
  return h;
}
function Pi(i, e, t) {
  var r = i.getArea(), a = Z(r.r0, 1), n = Z(r.r, 1), o = new Me({
    shape: {
      cx: Z(i.cx, 1),
      cy: Z(i.cy, 1),
      r0: a,
      r: n,
      startAngle: r.startAngle,
      endAngle: r.endAngle,
      clockwise: r.clockwise
    }
  });
  if (e) {
    var s = i.getBaseAxis().dim === "angle";
    s ? o.shape.endAngle = r.startAngle : o.shape.r = a, ve(o, {
      shape: {
        endAngle: r.endAngle,
        r: n
      }
    }, t);
  }
  return o;
}
function Wr(i, e, t, r, a) {
  if (i) {
    if (i.type === "polar")
      return Pi(i, e, t);
    if (i.type === "cartesian2d")
      return Ti(i, e, t, r, a);
  } else return null;
  return null;
}
function $r(i, e) {
  return i.type === e;
}
var Ii = {
  average: function(i) {
    for (var e = 0, t = 0, r = 0; r < i.length; r++)
      isNaN(i[r]) || (e += i[r], t++);
    return t === 0 ? NaN : e / t;
  },
  sum: function(i) {
    for (var e = 0, t = 0; t < i.length; t++)
      e += i[t] || 0;
    return e;
  },
  max: function(i) {
    for (var e = -1 / 0, t = 0; t < i.length; t++)
      i[t] > e && (e = i[t]);
    return isFinite(e) ? e : NaN;
  },
  min: function(i) {
    for (var e = 1 / 0, t = 0; t < i.length; t++)
      i[t] < e && (e = i[t]);
    return isFinite(e) ? e : NaN;
  },
  // TODO
  // Median
  nearest: function(i) {
    return i[0];
  }
}, Mi = function(i) {
  return Math.round(i.length / 2);
};
function Yr(i) {
  return {
    seriesType: i,
    // FIXME:TS never used, so comment it
    // modifyOutputEnd: true,
    reset: function(e, t, r) {
      var a = e.getData(), n = e.get("sampling"), o = e.coordinateSystem, s = a.count();
      if (s > 10 && o.type === "cartesian2d" && n) {
        var l = o.getBaseAxis(), u = o.getOtherAxis(l), v = l.getExtent(), h = r.getDevicePixelRatio(), f = Math.abs(v[1] - v[0]) * (h || 1), c = Math.round(s / f);
        if (isFinite(c) && c > 1) {
          n === "lttb" ? e.setData(a.lttbDownSample(a.mapDimension(u.dim), 1 / c)) : n === "minmax" && e.setData(a.minmaxDownSample(a.mapDimension(u.dim), 1 / c));
          var d = void 0;
          it(n) ? d = Ii[n] : lt(n) && (d = n), d && e.setData(a.downSample(a.mapDimension(u.dim), 1 / c, d, Mi));
        }
      }
    }
  };
}
var Di = (
  /** @class */
  function(i) {
    P(e, i);
    function e() {
      return i !== null && i.apply(this, arguments) || this;
    }
    return e.type = "grid", e.dependencies = ["xAxis", "yAxis"], e.layoutMode = "box", e.defaultOption = {
      show: !1,
      // zlevel: 0,
      z: 0,
      left: "10%",
      top: 60,
      right: "10%",
      bottom: 70,
      // If grid size contain label
      containLabel: !1,
      // width: {totalWidth} - left - right,
      // height: {totalHeight} - top - bottom,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 1,
      borderColor: "#ccc"
    }, e;
  }(Pt)
), wt = (
  /** @class */
  function(i) {
    P(e, i);
    function e() {
      return i !== null && i.apply(this, arguments) || this;
    }
    return e.prototype.getCoordSysModel = function() {
      return this.getReferringComponents("grid", rt).models[0];
    }, e.type = "cartesian2dAxis", e;
  }(Pt)
);
De(wt, Ee);
var we = {
  show: !0,
  // zlevel: 0,
  z: 0,
  // Inverse the axis.
  inverse: !1,
  // Axis name displayed.
  name: "",
  // 'start' | 'middle' | 'end'
  nameLocation: "end",
  // By degree. By default auto rotate by nameLocation.
  nameRotate: null,
  nameTruncate: {
    maxWidth: null,
    ellipsis: "...",
    placeholder: "."
  },
  // Use global text style by default.
  nameTextStyle: {},
  // The gap between axisName and axisLine.
  nameGap: 15,
  // Default `false` to support tooltip.
  silent: !1,
  // Default `false` to avoid legacy user event listener fail.
  triggerEvent: !1,
  tooltip: {
    show: !1
  },
  axisPointer: {},
  axisLine: {
    show: !0,
    onZero: !0,
    onZeroAxisIndex: null,
    lineStyle: {
      color: "#6E7079",
      width: 1,
      type: "solid"
    },
    // The arrow at both ends the the axis.
    symbol: ["none", "none"],
    symbolSize: [10, 15]
  },
  axisTick: {
    show: !0,
    // Whether axisTick is inside the grid or outside the grid.
    inside: !1,
    // The length of axisTick.
    length: 5,
    lineStyle: {
      width: 1
    }
  },
  axisLabel: {
    show: !0,
    // Whether axisLabel is inside the grid or outside the grid.
    inside: !1,
    rotate: 0,
    // true | false | null/undefined (auto)
    showMinLabel: null,
    // true | false | null/undefined (auto)
    showMaxLabel: null,
    margin: 8,
    // formatter: null,
    fontSize: 12
  },
  splitLine: {
    show: !0,
    showMinLine: !0,
    showMaxLine: !0,
    lineStyle: {
      color: ["#E0E6F1"],
      width: 1,
      type: "solid"
    }
  },
  splitArea: {
    show: !1,
    areaStyle: {
      color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]
    }
  }
}, Ei = E({
  // The gap at both ends of the axis. For categoryAxis, boolean.
  boundaryGap: !0,
  // Set false to faster category collection.
  deduplication: null,
  // splitArea: {
  // show: false
  // },
  splitLine: {
    show: !1
  },
  axisTick: {
    // If tick is align with label when boundaryGap is true
    alignWithLabel: !1,
    interval: "auto"
  },
  axisLabel: {
    interval: "auto"
  }
}, we), Rt = E({
  boundaryGap: [0, 0],
  axisLine: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  axisTick: {
    // Not shown when other axis is categoryAxis in cartesian
    show: "auto"
  },
  // TODO
  // min/max: [30, datamin, 60] or [20, datamin] or [datamin, 60]
  splitNumber: 5,
  minorTick: {
    // Minor tick, not available for cateogry axis.
    show: !1,
    // Split number of minor ticks. The value should be in range of (0, 100)
    splitNumber: 5,
    // Length of minor tick
    length: 3,
    // Line style
    lineStyle: {
      // Default to be same with axisTick
    }
  },
  minorSplitLine: {
    show: !1,
    lineStyle: {
      color: "#F4F7FD",
      width: 1
    }
  }
}, we), ki = E({
  splitNumber: 6,
  axisLabel: {
    // To eliminate labels that are not nice
    showMinLabel: !1,
    showMaxLabel: !1,
    rich: {
      primary: {
        fontWeight: "bold"
      }
    }
  },
  splitLine: {
    show: !1
  }
}, Rt), Ri = B({
  logBase: 10
}, Rt);
const Bi = {
  category: Ei,
  value: Rt,
  time: ki,
  log: Ri
};
var Oi = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
};
function Gt(i, e, t, r) {
  A(Oi, function(a, n) {
    var o = E(E({}, Bi[n], !0), r, !0), s = (
      /** @class */
      function(l) {
        P(u, l);
        function u() {
          var v = l !== null && l.apply(this, arguments) || this;
          return v.type = e + "Axis." + n, v;
        }
        return u.prototype.mergeDefaultAndTheme = function(v, h) {
          var f = ke(this), c = f ? Re(v) : {}, d = h.getTheme();
          E(v, d.get(n + "Axis")), E(v, this.getDefaultOption()), v.type = Zt(v), f && Be(v, c, f);
        }, u.prototype.optionUpdated = function() {
          var v = this.option;
          v.type === "category" && (this.__ordinalMeta = Oe.createByAxisModel(this));
        }, u.prototype.getCategories = function(v) {
          var h = this.option;
          if (h.type === "category")
            return v ? h.data : this.__ordinalMeta.categories;
        }, u.prototype.getOrdinalMeta = function() {
          return this.__ordinalMeta;
        }, u.type = e + "Axis." + n, u.defaultOption = o, u;
      }(t)
    );
    i.registerComponentModel(s);
  }), i.registerSubTypeDefaulter(e + "Axis", Zt);
}
function Zt(i) {
  return i.type || (i.data ? "category" : "value");
}
var Hi = (
  /** @class */
  function() {
    function i(e) {
      this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = e || "";
    }
    return i.prototype.getAxis = function(e) {
      return this._axes[e];
    }, i.prototype.getAxes = function() {
      return It(this._dimList, function(e) {
        return this._axes[e];
      }, this);
    }, i.prototype.getAxesByScale = function(e) {
      return e = e.toLowerCase(), He(this.getAxes(), function(t) {
        return t.scale.type === e;
      });
    }, i.prototype.addAxis = function(e) {
      var t = e.dim;
      this._axes[t] = e, this._dimList.push(t);
    }, i;
  }()
), Lt = ["x", "y"];
function Ft(i) {
  return i.type === "interval" || i.type === "time";
}
var Ni = (
  /** @class */
  function(i) {
    P(e, i);
    function e() {
      var t = i !== null && i.apply(this, arguments) || this;
      return t.type = "cartesian2d", t.dimensions = Lt, t;
    }
    return e.prototype.calcAffineTransform = function() {
      this._transform = this._invTransform = null;
      var t = this.getAxis("x").scale, r = this.getAxis("y").scale;
      if (!(!Ft(t) || !Ft(r))) {
        var a = t.getExtent(), n = r.getExtent(), o = this.dataToPoint([a[0], n[0]]), s = this.dataToPoint([a[1], n[1]]), l = a[1] - a[0], u = n[1] - n[0];
        if (!(!l || !u)) {
          var v = (s[0] - o[0]) / l, h = (s[1] - o[1]) / u, f = o[0] - a[0] * v, c = o[1] - n[0] * h, d = this._transform = [v, 0, 0, h, f, c];
          this._invTransform = Ne([], d);
        }
      }
    }, e.prototype.getBaseAxis = function() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    }, e.prototype.containPoint = function(t) {
      var r = this.getAxis("x"), a = this.getAxis("y");
      return r.contain(r.toLocalCoord(t[0])) && a.contain(a.toLocalCoord(t[1]));
    }, e.prototype.containData = function(t) {
      return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);
    }, e.prototype.containZone = function(t, r) {
      var a = this.dataToPoint(t), n = this.dataToPoint(r), o = this.getArea(), s = new $(a[0], a[1], n[0] - a[0], n[1] - a[1]);
      return o.intersect(s);
    }, e.prototype.dataToPoint = function(t, r, a) {
      a = a || [];
      var n = t[0], o = t[1];
      if (this._transform && n != null && isFinite(n) && o != null && isFinite(o))
        return Y(a, t, this._transform);
      var s = this.getAxis("x"), l = this.getAxis("y");
      return a[0] = s.toGlobalCoord(s.dataToCoord(n, r)), a[1] = l.toGlobalCoord(l.dataToCoord(o, r)), a;
    }, e.prototype.clampData = function(t, r) {
      var a = this.getAxis("x").scale, n = this.getAxis("y").scale, o = a.getExtent(), s = n.getExtent(), l = a.parse(t[0]), u = n.parse(t[1]);
      return r = r || [], r[0] = Math.min(Math.max(Math.min(o[0], o[1]), l), Math.max(o[0], o[1])), r[1] = Math.min(Math.max(Math.min(s[0], s[1]), u), Math.max(s[0], s[1])), r;
    }, e.prototype.pointToData = function(t, r) {
      var a = [];
      if (this._invTransform)
        return Y(a, t, this._invTransform);
      var n = this.getAxis("x"), o = this.getAxis("y");
      return a[0] = n.coordToData(n.toLocalCoord(t[0]), r), a[1] = o.coordToData(o.toLocalCoord(t[1]), r), a;
    }, e.prototype.getOtherAxis = function(t) {
      return this.getAxis(t.dim === "x" ? "y" : "x");
    }, e.prototype.getArea = function(t) {
      t = t || 0;
      var r = this.getAxis("x").getGlobalExtent(), a = this.getAxis("y").getGlobalExtent(), n = Math.min(r[0], r[1]) - t, o = Math.min(a[0], a[1]) - t, s = Math.max(r[0], r[1]) - n + t, l = Math.max(a[0], a[1]) - o + t;
      return new $(n, o, s, l);
    }, e;
  }(Hi)
), Vi = (
  /** @class */
  function(i) {
    P(e, i);
    function e(t, r, a, n, o) {
      var s = i.call(this, t, r, a) || this;
      return s.index = 0, s.type = n || "value", s.position = o || "bottom", s;
    }
    return e.prototype.isHorizontal = function() {
      var t = this.position;
      return t === "top" || t === "bottom";
    }, e.prototype.getGlobalExtent = function(t) {
      var r = this.getExtent();
      return r[0] = this.toGlobalCoord(r[0]), r[1] = this.toGlobalCoord(r[1]), t && r[0] > r[1] && r.reverse(), r;
    }, e.prototype.pointToData = function(t, r) {
      return this.coordToData(this.toLocalCoord(t[this.dim === "x" ? 0 : 1]), r);
    }, e.prototype.setCategorySortInfo = function(t) {
      if (this.type !== "category")
        return !1;
      this.model.option.categorySortInfo = t, this.scale.setSortInfo(t);
    }, e;
  }(Ve)
);
function bt(i, e, t) {
  t = t || {};
  var r = i.coordinateSystem, a = e.axis, n = {}, o = a.getAxesOnZeroOf()[0], s = a.position, l = o ? "onZero" : s, u = a.dim, v = r.getRect(), h = [v.x, v.x + v.width, v.y, v.y + v.height], f = {
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
    onZero: 2
  }, c = e.get("offset") || 0, d = u === "x" ? [h[2] - c, h[3] + c] : [h[0] - c, h[1] + c];
  if (o) {
    var g = o.toGlobalCoord(o.dataToCoord(0));
    d[f.onZero] = Math.max(Math.min(g, d[1]), d[0]);
  }
  n.position = [u === "y" ? d[f[l]] : h[0], u === "x" ? d[f[l]] : h[3]], n.rotation = Math.PI / 2 * (u === "x" ? 0 : 1);
  var p = {
    top: -1,
    bottom: 1,
    left: -1,
    right: 1
  };
  n.labelDirection = n.tickDirection = n.nameDirection = p[s], n.labelOffset = o ? d[f[s]] - d[f.onZero] : 0, e.get(["axisTick", "inside"]) && (n.tickDirection = -n.tickDirection), X(t.labelInside, e.get(["axisLabel", "inside"])) && (n.labelDirection = -n.labelDirection);
  var x = e.get(["axisLabel", "rotate"]);
  return n.labelRotate = l === "top" ? -x : x, n.z2 = 1, n;
}
function Wt(i) {
  return i.get("coordinateSystem") === "cartesian2d";
}
function $t(i) {
  var e = {
    xAxisModel: null,
    yAxisModel: null
  };
  return A(e, function(t, r) {
    var a = r.replace(/Model$/, ""), n = i.getReferringComponents(a, rt).models[0];
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error(a + ' "' + fe(i.get(a + "Index"), i.get(a + "Id"), 0) + '" not found');
    e[r] = n;
  }), e;
}
var dt = Math.log;
function zi(i, e, t) {
  var r = ze.prototype, a = r.getTicks.call(t), n = r.getTicks.call(t, !0), o = a.length - 1, s = r.getInterval.call(t), l = Ge(i, e), u = l.extent, v = l.fixMin, h = l.fixMax;
  if (i.type === "log") {
    var f = dt(i.base);
    u = [dt(u[0]) / f, dt(u[1]) / f];
  }
  i.setExtent(u[0], u[1]), i.calcNiceExtent({
    splitNumber: o,
    fixMin: v,
    fixMax: h
  });
  var c = r.getExtent.call(i);
  v && (u[0] = c[0]), h && (u[1] = c[1]);
  var d = r.getInterval.call(i), g = u[0], p = u[1];
  if (v && h)
    d = (p - g) / o;
  else if (v)
    for (p = u[0] + d * o; p < u[1] && isFinite(p) && isFinite(u[1]); )
      d = vt(d), p = u[0] + d * o;
  else if (h)
    for (g = u[1] - d * o; g > u[0] && isFinite(g) && isFinite(u[0]); )
      d = vt(d), g = u[1] - d * o;
  else {
    var x = i.getTicks().length - 1;
    x > o && (d = vt(d));
    var m = d * o;
    p = Math.ceil(u[1] / d) * d, g = Z(p - m), g < 0 && u[0] >= 0 ? (g = 0, p = Z(m)) : p > 0 && u[1] <= 0 && (p = 0, g = -Z(m));
  }
  var y = (a[0].value - n[0].value) / s, _ = (a[o].value - n[o].value) / s;
  if (r.setExtent.call(i, g + d * y, p + d * _), r.setInterval.call(i, d), (y || _) && r.setNiceExtent.call(i, g + d, p - d), process.env.NODE_ENV !== "production") {
    var w = r.getTicks.call(i);
    w[1] && (!Ze(d) || Ht(w[1].value) > Ht(d)) && Fe(
      // eslint-disable-next-line
      "The ticks may be not readable when set min: " + e.get("min") + ", max: " + e.get("max") + " and alignTicks: true"
    );
  }
}
var Gi = (
  /** @class */
  function() {
    function i(e, t, r) {
      this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = Lt, this._initCartesian(e, t, r), this.model = e;
    }
    return i.prototype.getRect = function() {
      return this._rect;
    }, i.prototype.update = function(e, t) {
      var r = this._axesMap;
      this._updateScale(e, this.model);
      function a(o) {
        var s, l = Xe(o), u = l.length;
        if (u) {
          for (var v = [], h = u - 1; h >= 0; h--) {
            var f = +l[h], c = o[f], d = c.model, g = c.scale;
            // Only value and log axis without interval support alignTicks.
            _t(g) && d.get("alignTicks") && d.get("interval") == null ? v.push(c) : (Nt(g, d), _t(g) && (s = c));
          }
          v.length && (s || (s = v.pop(), Nt(s.scale, s.model)), A(v, function(p) {
            zi(p.scale, p.model, s.scale);
          }));
        }
      }
      a(r.x), a(r.y);
      var n = {};
      A(r.x, function(o) {
        Yt(r, "y", o, n);
      }), A(r.y, function(o) {
        Yt(r, "x", o, n);
      }), this.resize(this.model, t);
    }, i.prototype.resize = function(e, t, r) {
      var a = e.getBoxLayoutParams(), n = !r && e.get("containLabel"), o = We(a, {
        width: t.getWidth(),
        height: t.getHeight()
      });
      this._rect = o;
      var s = this._axesList;
      l(), n && (A(s, function(u) {
        if (!u.model.get(["axisLabel", "inside"])) {
          var v = $e(u);
          if (v) {
            var h = u.isHorizontal() ? "height" : "width", f = u.model.get(["axisLabel", "margin"]);
            o[h] -= v[h] + f, u.position === "top" ? o.y += v.height + f : u.position === "left" && (o.x += v.width + f);
          }
        }
      }), l()), A(this._coordsList, function(u) {
        u.calcAffineTransform();
      });
      function l() {
        A(s, function(u) {
          var v = u.isHorizontal(), h = v ? [0, o.width] : [0, o.height], f = u.inverse ? 1 : 0;
          u.setExtent(h[f], h[1 - f]), Zi(u, v ? o.x : o.y);
        });
      }
    }, i.prototype.getAxis = function(e, t) {
      var r = this._axesMap[e];
      if (r != null)
        return r[t || 0];
    }, i.prototype.getAxes = function() {
      return this._axesList.slice();
    }, i.prototype.getCartesian = function(e, t) {
      if (e != null && t != null) {
        var r = "x" + e + "y" + t;
        return this._coordsMap[r];
      }
      K(e) && (t = e.yAxisIndex, e = e.xAxisIndex);
      for (var a = 0, n = this._coordsList; a < n.length; a++)
        if (n[a].getAxis("x").index === e || n[a].getAxis("y").index === t)
          return n[a];
    }, i.prototype.getCartesians = function() {
      return this._coordsList.slice();
    }, i.prototype.convertToPixel = function(e, t, r) {
      var a = this._findConvertTarget(t);
      return a.cartesian ? a.cartesian.dataToPoint(r) : a.axis ? a.axis.toGlobalCoord(a.axis.dataToCoord(r)) : null;
    }, i.prototype.convertFromPixel = function(e, t, r) {
      var a = this._findConvertTarget(t);
      return a.cartesian ? a.cartesian.pointToData(r) : a.axis ? a.axis.coordToData(a.axis.toLocalCoord(r)) : null;
    }, i.prototype._findConvertTarget = function(e) {
      var t = e.seriesModel, r = e.xAxisModel || t && t.getReferringComponents("xAxis", rt).models[0], a = e.yAxisModel || t && t.getReferringComponents("yAxis", rt).models[0], n = e.gridModel, o = this._coordsList, s, l;
      if (t)
        s = t.coordinateSystem, U(o, s) < 0 && (s = null);
      else if (r && a)
        s = this.getCartesian(r.componentIndex, a.componentIndex);
      else if (r)
        l = this.getAxis("x", r.componentIndex);
      else if (a)
        l = this.getAxis("y", a.componentIndex);
      else if (n) {
        var u = n.coordinateSystem;
        u === this && (s = this._coordsList[0]);
      }
      return {
        cartesian: s,
        axis: l
      };
    }, i.prototype.containPoint = function(e) {
      var t = this._coordsList[0];
      if (t)
        return t.containPoint(e);
    }, i.prototype._initCartesian = function(e, t, r) {
      var a = this, n = this, o = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      }, s = {
        x: {},
        y: {}
      }, l = {
        x: 0,
        y: 0
      };
      if (t.eachComponent("xAxis", u("x"), this), t.eachComponent("yAxis", u("y"), this), !l.x || !l.y) {
        this._axesMap = {}, this._axesList = [];
        return;
      }
      this._axesMap = s, A(s.x, function(v, h) {
        A(s.y, function(f, c) {
          var d = "x" + h + "y" + c, g = new Ni(d);
          g.master = a, g.model = e, a._coordsMap[d] = g, a._coordsList.push(g), g.addAxis(v), g.addAxis(f);
        });
      });
      function u(v) {
        return function(h, f) {
          if (ct(h, e)) {
            var c = h.get("position");
            v === "x" ? c !== "top" && c !== "bottom" && (c = o.bottom ? "top" : "bottom") : c !== "left" && c !== "right" && (c = o.left ? "right" : "left"), o[c] = !0;
            var d = new Vi(v, Ye(h), [0, 0], h.get("type"), c), g = d.type === "category";
            d.onBand = g && h.get("boundaryGap"), d.inverse = h.get("inverse"), h.axis = d, d.model = h, d.grid = n, d.index = f, n._axesList.push(d), s[v][f] = d, l[v]++;
          }
        };
      }
    }, i.prototype._updateScale = function(e, t) {
      A(this._axesList, function(a) {
        if (a.scale.setExtent(1 / 0, -1 / 0), a.type === "category") {
          var n = a.model.get("categorySortInfo");
          a.scale.setSortInfo(n);
        }
      }), e.eachSeries(function(a) {
        if (Wt(a)) {
          var n = $t(a), o = n.xAxisModel, s = n.yAxisModel;
          if (!ct(o, t) || !ct(s, t))
            return;
          var l = this.getCartesian(o.componentIndex, s.componentIndex), u = a.getData(), v = l.getAxis("x"), h = l.getAxis("y");
          r(u, v), r(u, h);
        }
      }, this);
      function r(a, n) {
        A(Ue(a, n.dim), function(o) {
          n.scale.unionExtentFromData(a, o);
        });
      }
    }, i.prototype.getTooltipAxes = function(e) {
      var t = [], r = [];
      return A(this.getCartesians(), function(a) {
        var n = e != null && e !== "auto" ? a.getAxis(e) : a.getBaseAxis(), o = a.getOtherAxis(n);
        U(t, n) < 0 && t.push(n), U(r, o) < 0 && r.push(o);
      }), {
        baseAxes: t,
        otherAxes: r
      };
    }, i.create = function(e, t) {
      var r = [];
      return e.eachComponent("grid", function(a, n) {
        var o = new i(a, e, t);
        o.name = "grid_" + n, o.resize(a, t, !0), a.coordinateSystem = o, r.push(o);
      }), e.eachSeries(function(a) {
        if (Wt(a)) {
          var n = $t(a), o = n.xAxisModel, s = n.yAxisModel, l = o.getCoordSysModel();
          if (process.env.NODE_ENV !== "production") {
            if (!l)
              throw new Error('Grid "' + fe(o.get("gridIndex"), o.get("gridId"), 0) + '" not found');
            if (o.getCoordSysModel() !== s.getCoordSysModel())
              throw new Error("xAxis and yAxis must use the same grid");
          }
          var u = l.coordinateSystem;
          a.coordinateSystem = u.getCartesian(o.componentIndex, s.componentIndex);
        }
      }), r;
    }, i.dimensions = Lt, i;
  }()
);
function ct(i, e) {
  return i.getCoordSysModel() === e;
}
function Yt(i, e, t, r) {
  t.getAxesOnZeroOf = function() {
    return n ? [n] : [];
  };
  var a = i[e], n, o = t.model, s = o.get(["axisLine", "onZero"]), l = o.get(["axisLine", "onZeroAxisIndex"]);
  if (!s)
    return;
  if (l != null)
    Ut(a[l]) && (n = a[l]);
  else
    for (var u in a)
      if (a.hasOwnProperty(u) && Ut(a[u]) && !r[v(a[u])]) {
        n = a[u];
        break;
      }
  n && (r[v(n)] = !0);
  function v(h) {
    return h.dim + "_" + h.index;
  }
}
function Ut(i) {
  return i && i.type !== "category" && i.type !== "time" && Ke(i);
}
function Zi(i, e) {
  var t = i.getExtent(), r = t[0] + t[1];
  i.toGlobalCoord = i.dim === "x" ? function(a) {
    return a + e;
  } : function(a) {
    return r - a + e;
  }, i.toLocalCoord = i.dim === "x" ? function(a) {
    return a - e;
  } : function(a) {
    return r - a + e;
  };
}
var H = Math.PI, V = (
  /** @class */
  function() {
    function i(e, t) {
      this.group = new at(), this.opt = t, this.axisModel = e, B(t, {
        labelOffset: 0,
        nameDirection: 1,
        tickDirection: 1,
        labelDirection: 1,
        silent: !0,
        handleAutoShown: function() {
          return !0;
        }
      });
      var r = new at({
        x: t.position[0],
        y: t.position[1],
        rotation: t.rotation
      });
      r.updateTransform(), this._transformGroup = r;
    }
    return i.prototype.hasBuilder = function(e) {
      return !!Xt[e];
    }, i.prototype.add = function(e) {
      Xt[e](this.opt, this.axisModel, this.group, this._transformGroup);
    }, i.prototype.getGroup = function() {
      return this.group;
    }, i.innerTextLayout = function(e, t, r) {
      var a = de(t - e), n, o;
      return st(a) ? (o = r > 0 ? "top" : "bottom", n = "center") : st(a - H) ? (o = r > 0 ? "bottom" : "top", n = "center") : (o = "middle", a > 0 && a < H ? n = r > 0 ? "right" : "left" : n = r > 0 ? "left" : "right"), {
        rotation: a,
        textAlign: n,
        textVerticalAlign: o
      };
    }, i.makeAxisEventDataBase = function(e) {
      var t = {
        componentType: e.mainType,
        componentIndex: e.componentIndex
      };
      return t[e.mainType + "Index"] = e.componentIndex, t;
    }, i.isLabelSilent = function(e) {
      var t = e.get("tooltip");
      return e.get("silent") || !(e.get("triggerEvent") || t && t.show);
    }, i;
  }()
), Xt = {
  axisLine: function(i, e, t, r) {
    var a = e.get(["axisLine", "show"]);
    if (a === "auto" && i.handleAutoShown && (a = i.handleAutoShown("axisLine")), !!a) {
      var n = e.axis.getExtent(), o = r.transform, s = [n[0], 0], l = [n[1], 0], u = s[0] > l[0];
      o && (Y(s, s, o), Y(l, l, o));
      var v = ut({
        lineCap: "round"
      }, e.getModel(["axisLine", "lineStyle"]).getLineStyle()), h = new nt({
        shape: {
          x1: s[0],
          y1: s[1],
          x2: l[0],
          y2: l[1]
        },
        style: v,
        strokeContainThreshold: i.strokeContainThreshold || 5,
        silent: !0,
        z2: 1
      });
      ot(h.shape, h.style.lineWidth), h.anid = "line", t.add(h);
      var f = e.get(["axisLine", "symbol"]);
      if (f != null) {
        var c = e.get(["axisLine", "symbolSize"]);
        it(f) && (f = [f, f]), (it(c) || ii(c)) && (c = [c, c]);
        var d = Je(e.get(["axisLine", "symbolOffset"]) || 0, c), g = c[0], p = c[1];
        A([{
          rotate: i.rotation + Math.PI / 2,
          offset: d[0],
          r: 0
        }, {
          rotate: i.rotation - Math.PI / 2,
          offset: d[1],
          r: Math.sqrt((s[0] - l[0]) * (s[0] - l[0]) + (s[1] - l[1]) * (s[1] - l[1]))
        }], function(x, m) {
          if (f[m] !== "none" && f[m] != null) {
            var y = Qe(f[m], -g / 2, -p / 2, g, p, v.stroke, !0), _ = x.r + x.offset, w = u ? l : s;
            y.attr({
              rotation: x.rotate,
              x: w[0] + _ * Math.cos(i.rotation),
              y: w[1] - _ * Math.sin(i.rotation),
              silent: !0,
              z2: 11
            }), t.add(y);
          }
        });
      }
    }
  },
  axisTickLabel: function(i, e, t, r) {
    var a = $i(t, r, e, i), n = Ui(t, r, e, i);
    if (Wi(e, n, a), Yi(t, r, e, i.tickDirection), e.get(["axisLabel", "hideOverlap"])) {
      var o = je(It(n, function(s) {
        return {
          label: s,
          priority: s.z2,
          defaultAttr: {
            ignore: s.ignore
          }
        };
      }));
      qe(o);
    }
  },
  axisName: function(i, e, t, r) {
    var a = X(i.axisName, e.get("name"));
    if (a) {
      var n = e.get("nameLocation"), o = i.nameDirection, s = e.getModel("nameTextStyle"), l = e.get("nameGap") || 0, u = e.axis.getExtent(), v = u[0] > u[1] ? -1 : 1, h = [
        n === "start" ? u[0] - v * l : n === "end" ? u[1] + v * l : (u[0] + u[1]) / 2,
        // Reuse labelOffset.
        jt(n) ? i.labelOffset + o * l : 0
      ], f, c = e.get("nameRotate");
      c != null && (c = c * H / 180);
      var d;
      jt(n) ? f = V.innerTextLayout(
        i.rotation,
        c ?? i.rotation,
        // Adapt to axis.
        o
      ) : (f = Fi(i.rotation, n, c || 0, u), d = i.axisNameAvailableWidth, d != null && (d = Math.abs(d / Math.sin(f.rotation)), !isFinite(d) && (d = null)));
      var g = s.getFont(), p = e.get("nameTruncate", !0) || {}, x = p.ellipsis, m = X(i.nameTruncateMaxWidth, p.maxWidth, d), y = new Mt({
        x: h[0],
        y: h[1],
        rotation: f.rotation,
        silent: V.isLabelSilent(e),
        style: Dt(s, {
          text: a,
          font: g,
          overflow: "truncate",
          width: m,
          ellipsis: x,
          fill: s.getTextColor() || e.get(["axisLine", "lineStyle", "color"]),
          align: s.get("align") || f.textAlign,
          verticalAlign: s.get("verticalAlign") || f.textVerticalAlign
        }),
        z2: 1
      });
      if (ce({
        el: y,
        componentModel: e,
        itemName: a
      }), y.__fullText = a, y.anid = "name", e.get("triggerEvent")) {
        var _ = V.makeAxisEventDataBase(e);
        _.targetType = "axisName", _.name = a, pe(y).eventData = _;
      }
      r.add(y), y.updateTransform(), t.add(y), y.decomposeTransform();
    }
  }
};
function Fi(i, e, t, r) {
  var a = de(t - i), n, o, s = r[0] > r[1], l = e === "start" && !s || e !== "start" && s;
  return st(a - H / 2) ? (o = l ? "bottom" : "top", n = "center") : st(a - H * 1.5) ? (o = l ? "top" : "bottom", n = "center") : (o = "middle", a < H * 1.5 && a > H / 2 ? n = l ? "left" : "right" : n = l ? "right" : "left"), {
    rotation: a,
    textAlign: n,
    textVerticalAlign: o
  };
}
function Wi(i, e, t) {
  if (!ti(i.axis)) {
    var r = i.get(["axisLabel", "showMinLabel"]), a = i.get(["axisLabel", "showMaxLabel"]);
    e = e || [], t = t || [];
    var n = e[0], o = e[1], s = e[e.length - 1], l = e[e.length - 2], u = t[0], v = t[1], h = t[t.length - 1], f = t[t.length - 2];
    r === !1 ? (D(n), D(u)) : Kt(n, o) && (r ? (D(o), D(v)) : (D(n), D(u))), a === !1 ? (D(s), D(h)) : Kt(l, s) && (a ? (D(l), D(f)) : (D(s), D(h)));
  }
}
function D(i) {
  i && (i.ignore = !0);
}
function Kt(i, e) {
  var t = i && i.getBoundingRect().clone(), r = e && e.getBoundingRect().clone();
  if (!(!t || !r)) {
    var a = ei([]);
    return xe(a, a, -i.rotation), t.applyTransform(Vt([], a, i.getLocalTransform())), r.applyTransform(Vt([], a, e.getLocalTransform())), t.intersect(r);
  }
}
function jt(i) {
  return i === "middle" || i === "center";
}
function Le(i, e, t, r, a) {
  for (var n = [], o = [], s = [], l = 0; l < i.length; l++) {
    var u = i[l].coord;
    o[0] = u, o[1] = 0, s[0] = u, s[1] = t, e && (Y(o, o, e), Y(s, s, e));
    var v = new nt({
      shape: {
        x1: o[0],
        y1: o[1],
        x2: s[0],
        y2: s[1]
      },
      style: r,
      z2: 2,
      autoBatch: !0,
      silent: !0
    });
    ot(v.shape, v.style.lineWidth), v.anid = a + "_" + i[l].tickValue, n.push(v);
  }
  return n;
}
function $i(i, e, t, r) {
  var a = t.axis, n = t.getModel("axisTick"), o = n.get("show");
  if (o === "auto" && r.handleAutoShown && (o = r.handleAutoShown("axisTick")), !(!o || a.scale.isBlank())) {
    for (var s = n.getModel("lineStyle"), l = r.tickDirection * n.get("length"), u = a.getTicksCoords(), v = Le(u, e.transform, l, B(s.getLineStyle(), {
      stroke: t.get(["axisLine", "lineStyle", "color"])
    }), "ticks"), h = 0; h < v.length; h++)
      i.add(v[h]);
    return v;
  }
}
function Yi(i, e, t, r) {
  var a = t.axis, n = t.getModel("minorTick");
  if (!(!n.get("show") || a.scale.isBlank())) {
    var o = a.getMinorTicksCoords();
    if (o.length)
      for (var s = n.getModel("lineStyle"), l = r * n.get("length"), u = B(s.getLineStyle(), B(t.getModel("axisTick").getLineStyle(), {
        stroke: t.get(["axisLine", "lineStyle", "color"])
      })), v = 0; v < o.length; v++)
        for (var h = Le(o[v], e.transform, l, u, "minorticks_" + v), f = 0; f < h.length; f++)
          i.add(h[f]);
  }
}
function Ui(i, e, t, r) {
  var a = t.axis, n = X(r.axisLabelShow, t.get(["axisLabel", "show"]));
  if (!(!n || a.scale.isBlank())) {
    var o = t.getModel("axisLabel"), s = o.get("margin"), l = a.getViewLabels(), u = (X(r.labelRotate, o.get("rotate")) || 0) * H / 180, v = V.innerTextLayout(r.rotation, u, r.labelDirection), h = t.getCategories && t.getCategories(!0), f = [], c = V.isLabelSilent(t), d = t.get("triggerEvent");
    return A(l, function(g, p) {
      var x = a.scale.type === "ordinal" ? a.scale.getRawOrdinalNumber(g.tickValue) : g.tickValue, m = g.formattedLabel, y = g.rawLabel, _ = o;
      if (h && h[x]) {
        var w = h[x];
        K(w) && w.textStyle && (_ = new ge(w.textStyle, o, t.ecModel));
      }
      var S = _.getTextColor() || t.get(["axisLine", "lineStyle", "color"]), L = a.dataToCoord(x), b = _.getShallow("align", !0) || v.textAlign, I = q(_.getShallow("alignMinLabel", !0), b), C = q(_.getShallow("alignMaxLabel", !0), b), T = _.getShallow("verticalAlign", !0) || _.getShallow("baseline", !0) || v.textVerticalAlign, k = q(_.getShallow("verticalAlignMinLabel", !0), T), W = q(_.getShallow("verticalAlignMaxLabel", !0), T), M = new Mt({
        x: L,
        y: r.labelOffset + r.labelDirection * s,
        rotation: v.rotation,
        silent: c,
        z2: 10 + (g.level || 0),
        style: Dt(_, {
          text: m,
          align: p === 0 ? I : p === l.length - 1 ? C : b,
          verticalAlign: p === 0 ? k : p === l.length - 1 ? W : T,
          fill: lt(S) ? S(
            // (1) In category axis with data zoom, tick is not the original
            // index of axis.data. So tick should not be exposed to user
            // in category axis.
            // (2) Compatible with previous version, which always use formatted label as
            // input. But in interval scale the formatted label is like '223,445', which
            // maked user replace ','. So we modify it to return original val but remain
            // it as 'string' to avoid error in replacing.
            a.type === "category" ? y : a.type === "value" ? x + "" : x,
            p
          ) : S
        })
      });
      if (M.anid = "label_" + x, ce({
        el: M,
        componentModel: t,
        itemName: m,
        formatterParamsExtra: {
          isTruncated: function() {
            return M.isTruncated;
          },
          value: y,
          tickIndex: p
        }
      }), d) {
        var O = V.makeAxisEventDataBase(t);
        O.targetType = "axisLabel", O.value = y, O.tickIndex = p, a.type === "category" && (O.dataIndex = x), pe(M).eventData = O;
      }
      e.add(M), M.updateTransform(), f.push(M), i.add(M), M.decomposeTransform();
    }), f;
  }
}
function Xi(i, e) {
  var t = {
    /**
     * key: makeKey(axis.model)
     * value: {
     *      axis,
     *      coordSys,
     *      axisPointerModel,
     *      triggerTooltip,
     *      triggerEmphasis,
     *      involveSeries,
     *      snap,
     *      seriesModels,
     *      seriesDataCount
     * }
     */
    axesInfo: {},
    seriesInvolved: !1,
    /**
     * key: makeKey(coordSys.model)
     * value: Object: key makeKey(axis.model), value: axisInfo
     */
    coordSysAxesInfo: {},
    coordSysMap: {}
  };
  return Ki(t, i, e), t.seriesInvolved && qi(t, i), t;
}
function Ki(i, e, t) {
  var r = e.getComponent("tooltip"), a = e.getComponent("axisPointer"), n = a.get("link", !0) || [], o = [];
  A(t.getCoordinateSystems(), function(s) {
    if (!s.axisPointerEnabled)
      return;
    var l = j(s.model), u = i.coordSysAxesInfo[l] = {};
    i.coordSysMap[l] = s;
    var v = s.model, h = v.getModel("tooltip", r);
    if (A(s.getAxes(), N(g, !1, null)), s.getTooltipAxes && r && h.get("show")) {
      var f = h.get("trigger") === "axis", c = h.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
      (f || c) && A(d.baseAxes, N(g, c ? "cross" : !0, f)), c && A(d.otherAxes, N(g, "cross", !1));
    }
    function g(p, x, m) {
      var y = m.model.getModel("axisPointer", a), _ = y.get("show");
      if (!(!_ || _ === "auto" && !p && !St(y))) {
        x == null && (x = y.get("triggerTooltip")), y = p ? ji(m, h, a, e, p, x) : y;
        var w = y.get("snap"), S = y.get("triggerEmphasis"), L = j(m.model), b = x || w || m.type === "category", I = i.axesInfo[L] = {
          key: L,
          axis: m,
          coordSys: s,
          axisPointerModel: y,
          triggerTooltip: x,
          triggerEmphasis: S,
          involveSeries: b,
          snap: w,
          useHandle: St(y),
          seriesModels: [],
          linkGroup: null
        };
        u[L] = I, i.seriesInvolved = i.seriesInvolved || b;
        var C = Ji(n, m);
        if (C != null) {
          var T = o[C] || (o[C] = {
            axesInfo: {}
          });
          T.axesInfo[L] = I, T.mapper = n[C].mapper, I.linkGroup = T;
        }
      }
    }
  });
}
function ji(i, e, t, r, a, n) {
  var o = e.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], l = {};
  A(s, function(f) {
    l[f] = ye(o.get(f));
  }), l.snap = i.type !== "category" && !!n, o.get("type") === "cross" && (l.type = "line");
  var u = l.label || (l.label = {});
  if (u.show == null && (u.show = !1), a === "cross") {
    var v = o.get(["label", "show"]);
    if (u.show = v ?? !0, !n) {
      var h = l.lineStyle = o.get("crossStyle");
      h && B(u, h.textStyle);
    }
  }
  return i.model.getModel("axisPointer", new ge(l, t, r));
}
function qi(i, e) {
  e.eachSeries(function(t) {
    var r = t.coordinateSystem, a = t.get(["tooltip", "trigger"], !0), n = t.get(["tooltip", "show"], !0);
    !r || a === "none" || a === !1 || a === "item" || n === !1 || t.get(["axisPointer", "show"], !0) === !1 || A(i.coordSysAxesInfo[j(r.model)], function(o) {
      var s = o.axis;
      r.getAxis(s.dim) === s && (o.seriesModels.push(t), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += t.getData().count());
    });
  });
}
function Ji(i, e) {
  for (var t = e.model, r = e.dim, a = 0; a < i.length; a++) {
    var n = i[a] || {};
    if (pt(n[r + "AxisId"], t.id) || pt(n[r + "AxisIndex"], t.componentIndex) || pt(n[r + "AxisName"], t.name))
      return a;
  }
}
function pt(i, e) {
  return i === "all" || F(i) && U(i, e) >= 0 || i === e;
}
function Qi(i) {
  var e = Bt(i);
  if (e) {
    var t = e.axisPointerModel, r = e.axis.scale, a = t.option, n = t.get("status"), o = t.get("value");
    o != null && (o = r.parse(o));
    var s = St(t);
    n == null && (a.status = s ? "show" : "hide");
    var l = r.getExtent().slice();
    l[0] > l[1] && l.reverse(), // Pick a value on axis when initializing.
    (o == null || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), a.value = o, s && (a.status = e.axis.scale.isBlank() ? "hide" : "show");
  }
}
function Bt(i) {
  var e = (i.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return e && e.axesInfo[j(i)];
}
function tr(i) {
  var e = Bt(i);
  return e && e.axisPointerModel;
}
function St(i) {
  return !!i.get(["handle", "show"]);
}
function j(i) {
  return i.type + "||" + i.id;
}
var gt = {}, be = (
  /** @class */
  function(i) {
    P(e, i);
    function e() {
      var t = i !== null && i.apply(this, arguments) || this;
      return t.type = e.type, t;
    }
    return e.prototype.render = function(t, r, a, n) {
      this.axisPointerClass && Qi(t), i.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(t, a, !0);
    }, e.prototype.updateAxisPointer = function(t, r, a, n) {
      this._doUpdateAxisPointerClass(t, a, !1);
    }, e.prototype.remove = function(t, r) {
      var a = this._axisPointer;
      a && a.remove(r);
    }, e.prototype.dispose = function(t, r) {
      this._disposeAxisPointer(r), i.prototype.dispose.apply(this, arguments);
    }, e.prototype._doUpdateAxisPointerClass = function(t, r, a) {
      var n = e.getAxisPointerClass(this.axisPointerClass);
      if (n) {
        var o = tr(t);
        o ? (this._axisPointer || (this._axisPointer = new n())).render(t, o, r, a) : this._disposeAxisPointer(r);
      }
    }, e.prototype._disposeAxisPointer = function(t) {
      this._axisPointer && this._axisPointer.dispose(t), this._axisPointer = null;
    }, e.registerAxisPointerClass = function(t, r) {
      if (process.env.NODE_ENV !== "production" && gt[t])
        throw new Error("axisPointer " + t + " exists");
      gt[t] = r;
    }, e.getAxisPointerClass = function(t) {
      return t && gt[t];
    }, e.type = "axis", e;
  }(Et)
), Ct = ht();
function er(i, e, t, r) {
  var a = t.axis;
  if (!a.scale.isBlank()) {
    var n = t.getModel("splitArea"), o = n.getModel("areaStyle"), s = o.get("color"), l = r.coordinateSystem.getRect(), u = a.getTicksCoords({
      tickModel: n,
      clamp: !0
    });
    if (u.length) {
      var v = s.length, h = Ct(i).splitAreaColors, f = ri(), c = 0;
      if (h)
        for (var d = 0; d < u.length; d++) {
          var g = h.get(u[d].tickValue);
          if (g != null) {
            c = (g + (v - 1) * d) % v;
            break;
          }
        }
      var p = a.toGlobalCoord(u[0].coord), x = o.getAreaStyle();
      s = F(s) ? s : [s];
      for (var d = 1; d < u.length; d++) {
        var m = a.toGlobalCoord(u[d].coord), y = void 0, _ = void 0, w = void 0, S = void 0;
        a.isHorizontal() ? (y = p, _ = l.y, w = m - y, S = l.height, p = y + w) : (y = l.x, _ = p, w = l.width, S = m - _, p = _ + S);
        var L = u[d - 1].tickValue;
        L != null && f.set(L, c), e.add(new Tt({
          anid: L != null ? "area_" + L : null,
          shape: {
            x: y,
            y: _,
            width: w,
            height: S
          },
          style: B({
            fill: s[c]
          }, x),
          autoBatch: !0,
          silent: !0
        })), c = (c + 1) % v;
      }
      Ct(i).splitAreaColors = f;
    }
  }
}
function ir(i) {
  Ct(i).splitAreaColors = null;
}
var rr = ["axisLine", "axisTickLabel", "axisName"], ar = ["splitArea", "splitLine", "minorSplitLine"], Se = (
  /** @class */
  function(i) {
    P(e, i);
    function e() {
      var t = i !== null && i.apply(this, arguments) || this;
      return t.type = e.type, t.axisPointerClass = "CartesianAxisPointer", t;
    }
    return e.prototype.render = function(t, r, a, n) {
      this.group.removeAll();
      var o = this._axisGroup;
      if (this._axisGroup = new at(), this.group.add(this._axisGroup), !!t.get("show")) {
        var s = t.getCoordSysModel(), l = bt(s, t), u = new V(t, ut({
          handleAutoShown: function(h) {
            for (var f = s.coordinateSystem.getCartesians(), c = 0; c < f.length; c++)
              if (_t(f[c].getOtherAxis(t.axis).scale))
                return !0;
            return !1;
          }
        }, l));
        A(rr, u.add, u), this._axisGroup.add(u.getGroup()), A(ar, function(h) {
          t.get([h, "show"]) && nr[h](this, this._axisGroup, t, s);
        }, this);
        var v = n && n.type === "changeAxisOrder" && n.isInitSort;
        v || ai(o, this._axisGroup, t), i.prototype.render.call(this, t, r, a, n);
      }
    }, e.prototype.remove = function() {
      ir(this);
    }, e.type = "cartesianAxis", e;
  }(be)
), nr = {
  splitLine: function(i, e, t, r) {
    var a = t.axis;
    if (!a.scale.isBlank()) {
      var n = t.getModel("splitLine"), o = n.getModel("lineStyle"), s = o.get("color"), l = n.get("showMinLine") !== !1, u = n.get("showMaxLine") !== !1;
      s = F(s) ? s : [s];
      for (var v = r.coordinateSystem.getRect(), h = a.isHorizontal(), f = 0, c = a.getTicksCoords({
        tickModel: n
      }), d = [], g = [], p = o.getLineStyle(), x = 0; x < c.length; x++) {
        var m = a.toGlobalCoord(c[x].coord);
        if (!(x === 0 && !l || x === c.length - 1 && !u)) {
          var y = c[x].tickValue;
          h ? (d[0] = m, d[1] = v.y, g[0] = m, g[1] = v.y + v.height) : (d[0] = v.x, d[1] = m, g[0] = v.x + v.width, g[1] = m);
          var _ = f++ % s.length, w = new nt({
            anid: y != null ? "line_" + y : null,
            autoBatch: !0,
            shape: {
              x1: d[0],
              y1: d[1],
              x2: g[0],
              y2: g[1]
            },
            style: B({
              stroke: s[_]
            }, p),
            silent: !0
          });
          ot(w.shape, p.lineWidth), e.add(w);
        }
      }
    }
  },
  minorSplitLine: function(i, e, t, r) {
    var a = t.axis, n = t.getModel("minorSplitLine"), o = n.getModel("lineStyle"), s = r.coordinateSystem.getRect(), l = a.isHorizontal(), u = a.getMinorTicksCoords();
    if (u.length)
      for (var v = [], h = [], f = o.getLineStyle(), c = 0; c < u.length; c++)
        for (var d = 0; d < u[c].length; d++) {
          var g = a.toGlobalCoord(u[c][d].coord);
          l ? (v[0] = g, v[1] = s.y, h[0] = g, h[1] = s.y + s.height) : (v[0] = s.x, v[1] = g, h[0] = s.x + s.width, h[1] = g);
          var p = new nt({
            anid: "minor_line_" + u[c][d].tickValue,
            autoBatch: !0,
            shape: {
              x1: v[0],
              y1: v[1],
              x2: h[0],
              y2: h[1]
            },
            style: f,
            silent: !0
          });
          ot(p.shape, f.lineWidth), e.add(p);
        }
  },
  splitArea: function(i, e, t, r) {
    er(i, e, t, r);
  }
}, Ce = (
  /** @class */
  function(i) {
    P(e, i);
    function e() {
      var t = i !== null && i.apply(this, arguments) || this;
      return t.type = e.type, t;
    }
    return e.type = "xAxis", e;
  }(Se)
), or = (
  /** @class */
  function(i) {
    P(e, i);
    function e() {
      var t = i !== null && i.apply(this, arguments) || this;
      return t.type = Ce.type, t;
    }
    return e.type = "yAxis", e;
  }(Se)
), sr = (
  /** @class */
  function(i) {
    P(e, i);
    function e() {
      var t = i !== null && i.apply(this, arguments) || this;
      return t.type = "grid", t;
    }
    return e.prototype.render = function(t, r) {
      this.group.removeAll(), t.get("show") && this.group.add(new Tt({
        shape: t.coordinateSystem.getRect(),
        style: B({
          fill: t.get("backgroundColor")
        }, t.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }, e.type = "grid", e;
  }(Et)
), qt = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function lr(i) {
  i.registerComponentView(sr), i.registerComponentModel(Di), i.registerCoordinateSystem("cartesian2d", Gi), Gt(i, "x", wt, qt), Gt(i, "y", wt, qt), i.registerComponentView(Ce), i.registerComponentView(or), i.registerPreprocessor(function(e) {
    e.xAxis && e.yAxis && !e.grid && (e.grid = {});
  });
}
var G = ht(), Jt = ye, xt = me, ur = (
  /** @class */
  function() {
    function i() {
      this._dragging = !1, this.animationThreshold = 15;
    }
    return i.prototype.render = function(e, t, r, a) {
      var n = t.get("value"), o = t.get("status");
      if (this._axisModel = e, this._axisPointerModel = t, this._api = r, !(!a && this._lastValue === n && this._lastStatus === o)) {
        this._lastValue = n, this._lastStatus = o;
        var s = this._group, l = this._handle;
        if (!o || o === "hide") {
          s && s.hide(), l && l.hide();
          return;
        }
        s && s.show(), l && l.show();
        var u = {};
        this.makeElOption(u, n, e, t, r);
        var v = u.graphicKey;
        v !== this._lastGraphicKey && this.clear(r), this._lastGraphicKey = v;
        var h = this._moveAnimation = this.determineAnimation(e, t);
        if (!s)
          s = this._group = new at(), this.createPointerEl(s, u, e, t), this.createLabelEl(s, u, e, t), r.getZr().add(s);
        else {
          var f = N(Qt, t, h);
          this.updatePointerEl(s, u, f), this.updateLabelEl(s, u, f, t);
        }
        ee(s, t, !0), this._renderHandle(n);
      }
    }, i.prototype.remove = function(e) {
      this.clear(e);
    }, i.prototype.dispose = function(e) {
      this.clear(e);
    }, i.prototype.determineAnimation = function(e, t) {
      var r = t.get("animation"), a = e.axis, n = a.type === "category", o = t.get("snap");
      if (!o && !n)
        return !1;
      if (r === "auto" || r == null) {
        var s = this.animationThreshold;
        if (n && a.getBandWidth() > s)
          return !0;
        if (o) {
          var l = Bt(e).seriesDataCount, u = a.getExtent();
          return Math.abs(u[0] - u[1]) / l > s;
        }
        return !1;
      }
      return r === !0;
    }, i.prototype.makeElOption = function(e, t, r, a, n) {
    }, i.prototype.createPointerEl = function(e, t, r, a) {
      var n = t.pointer;
      if (n) {
        var o = G(e).pointerEl = new ni[n.type](Jt(t.pointer));
        e.add(o);
      }
    }, i.prototype.createLabelEl = function(e, t, r, a) {
      if (t.label) {
        var n = G(e).labelEl = new Mt(Jt(t.label));
        e.add(n), te(n, a);
      }
    }, i.prototype.updatePointerEl = function(e, t, r) {
      var a = G(e).pointerEl;
      a && t.pointer && (a.setStyle(t.pointer.style), r(a, {
        shape: t.pointer.shape
      }));
    }, i.prototype.updateLabelEl = function(e, t, r, a) {
      var n = G(e).labelEl;
      n && (n.setStyle(t.label.style), r(n, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        // TODOTODO
        // shape: elOption.label.shape,
        x: t.label.x,
        y: t.label.y
      }), te(n, a));
    }, i.prototype._renderHandle = function(e) {
      if (!(this._dragging || !this.updateHandleTransform)) {
        var t = this._axisPointerModel, r = this._api.getZr(), a = this._handle, n = t.getModel("handle"), o = t.get("status");
        if (!n.get("show") || !o || o === "hide") {
          a && r.remove(a), this._handle = null;
          return;
        }
        var s;
        this._handle || (s = !0, a = this._handle = oi(n.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(u) {
            si(u.event);
          },
          onmousedown: xt(this._onHandleDragMove, this, 0, 0),
          drift: xt(this._onHandleDragMove, this),
          ondragend: xt(this._onHandleDragEnd, this)
        }), r.add(a)), ee(a, t, !1), a.setStyle(n.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
        var l = n.get("size");
        F(l) || (l = [l, l]), a.scaleX = l[0] / 2, a.scaleY = l[1] / 2, li(this, "_doDispatchAxisPointer", n.get("throttle") || 0, "fixRate"), this._moveHandleToValue(e, s);
      }
    }, i.prototype._moveHandleToValue = function(e, t) {
      Qt(this._axisPointerModel, !t && this._moveAnimation, this._handle, yt(this.getHandleTransform(e, this._axisModel, this._axisPointerModel)));
    }, i.prototype._onHandleDragMove = function(e, t) {
      var r = this._handle;
      if (r) {
        this._dragging = !0;
        var a = this.updateHandleTransform(yt(r), [e, t], this._axisModel, this._axisPointerModel);
        this._payloadInfo = a, r.stopAnimation(), r.attr(yt(a)), G(r).lastProp = null, this._doDispatchAxisPointer();
      }
    }, i.prototype._doDispatchAxisPointer = function() {
      var e = this._handle;
      if (e) {
        var t = this._payloadInfo, r = this._axisModel;
        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: t.cursorPoint[0],
          y: t.cursorPoint[1],
          tooltipOption: t.tooltipOption,
          axesInfo: [{
            axisDim: r.axis.dim,
            axisIndex: r.componentIndex
          }]
        });
      }
    }, i.prototype._onHandleDragEnd = function() {
      this._dragging = !1;
      var e = this._handle;
      if (e) {
        var t = this._axisPointerModel.get("value");
        this._moveHandleToValue(t), this._api.dispatchAction({
          type: "hideTip"
        });
      }
    }, i.prototype.clear = function(e) {
      this._lastValue = null, this._lastStatus = null;
      var t = e.getZr(), r = this._group, a = this._handle;
      t && r && (this._lastGraphicKey = null, r && t.remove(r), a && t.remove(a), this._group = null, this._handle = null, this._payloadInfo = null), ui(this, "_doDispatchAxisPointer");
    }, i.prototype.doClear = function() {
    }, i.prototype.buildLabel = function(e, t, r) {
      return r = r || 0, {
        x: e[r],
        y: e[1 - r],
        width: t[r],
        height: t[1 - r]
      };
    }, i;
  }()
);
function Qt(i, e, t, r) {
  Te(G(t).lastProp, r) || (G(t).lastProp = r, e ? hi(t, r, i) : (t.stopAnimation(), t.attr(r)));
}
function Te(i, e) {
  if (K(i) && K(e)) {
    var t = !0;
    return A(e, function(r, a) {
      t = t && Te(i[a], r);
    }), !!t;
  } else
    return i === e;
}
function te(i, e) {
  i[e.get(["label", "show"]) ? "show" : "hide"]();
}
function yt(i) {
  return {
    x: i.x || 0,
    y: i.y || 0,
    rotation: i.rotation || 0
  };
}
function ee(i, e, t) {
  var r = e.get("z"), a = e.get("zlevel");
  i && i.traverse(function(n) {
    n.type !== "group" && (r != null && (n.z = r), a != null && (n.zlevel = a), n.silent = t);
  });
}
function hr(i) {
  var e = i.get("type"), t = i.getModel(e + "Style"), r;
  return e === "line" ? (r = t.getLineStyle(), r.fill = null) : e === "shadow" && (r = t.getAreaStyle(), r.stroke = null), r;
}
function vr(i, e, t, r, a) {
  var n = t.get("value"), o = dr(n, e.axis, e.ecModel, t.get("seriesDataIndices"), {
    precision: t.get(["label", "precision"]),
    formatter: t.get(["label", "formatter"])
  }), s = t.getModel("label"), l = pi(s.get("padding") || 0), u = s.getFont(), v = gi(o, u), h = a.position, f = v.width + l[1] + l[3], c = v.height + l[0] + l[2], d = a.align;
  d === "right" && (h[0] -= f), d === "center" && (h[0] -= f / 2);
  var g = a.verticalAlign;
  g === "bottom" && (h[1] -= c), g === "middle" && (h[1] -= c / 2), fr(h, f, c, r);
  var p = s.get("backgroundColor");
  (!p || p === "auto") && (p = e.get(["axisLine", "lineStyle", "color"])), i.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: h[0],
    y: h[1],
    style: Dt(s, {
      text: o,
      font: u,
      fill: s.getTextColor(),
      padding: l,
      backgroundColor: p
    }),
    // Label should be over axisPointer.
    z2: 10
  };
}
function fr(i, e, t, r) {
  var a = r.getWidth(), n = r.getHeight();
  i[0] = Math.min(i[0] + e, a) - e, i[1] = Math.min(i[1] + t, n) - t, i[0] = Math.max(i[0], 0), i[1] = Math.max(i[1], 0);
}
function dr(i, e, t, r, a) {
  i = e.scale.parse(i);
  var n = e.scale.getLabel({
    value: i
  }, {
    // If `precision` is set, width can be fixed (like '12.00500'), which
    // helps to debounce when when moving label.
    precision: a.precision
  }), o = a.formatter;
  if (o) {
    var s = {
      value: vi(e, {
        value: i
      }),
      axisDimension: e.dim,
      axisIndex: e.index,
      seriesData: []
    };
    A(r, function(l) {
      var u = t.getSeriesByIndex(l.seriesIndex), v = l.dataIndexInside, h = u && u.getDataParams(v);
      h && s.seriesData.push(h);
    }), it(o) ? n = o.replace("{value}", n) : lt(o) && (n = o(s));
  }
  return n;
}
function Pe(i, e, t) {
  var r = fi();
  return xe(r, r, t.rotation), di(r, r, t.position), ci([i.dataToCoord(e), (t.labelOffset || 0) + (t.labelDirection || 1) * (t.labelMargin || 0)], r);
}
function cr(i, e, t, r, a, n) {
  var o = V.innerTextLayout(t.rotation, 0, t.labelDirection);
  t.labelMargin = a.get(["label", "margin"]), vr(e, r, a, n, {
    position: Pe(r.axis, i, t),
    align: o.textAlign,
    verticalAlign: o.textVerticalAlign
  });
}
function pr(i, e, t) {
  return t = t || 0, {
    x1: i[t],
    y1: i[1 - t],
    x2: e[t],
    y2: e[1 - t]
  };
}
function gr(i, e, t) {
  return t = t || 0, {
    x: i[t],
    y: i[1 - t],
    width: e[t],
    height: e[1 - t]
  };
}
var xr = (
  /** @class */
  function(i) {
    P(e, i);
    function e() {
      return i !== null && i.apply(this, arguments) || this;
    }
    return e.prototype.makeElOption = function(t, r, a, n, o) {
      var s = a.axis, l = s.grid, u = n.get("type"), v = ie(l, s).getOtherAxis(s).getGlobalExtent(), h = s.toGlobalCoord(s.dataToCoord(r, !0));
      if (u && u !== "none") {
        var f = hr(n), c = yr[u](s, h, v);
        c.style = f, t.graphicKey = c.type, t.pointer = c;
      }
      var d = bt(l.model, a);
      cr(
        // @ts-ignore
        r,
        t,
        d,
        a,
        n,
        o
      );
    }, e.prototype.getHandleTransform = function(t, r, a) {
      var n = bt(r.axis.grid.model, r, {
        labelInside: !1
      });
      n.labelMargin = a.get(["handle", "margin"]);
      var o = Pe(r.axis, t, n);
      return {
        x: o[0],
        y: o[1],
        rotation: n.rotation + (n.labelDirection < 0 ? Math.PI : 0)
      };
    }, e.prototype.updateHandleTransform = function(t, r, a, n) {
      var o = a.axis, s = o.grid, l = o.getGlobalExtent(!0), u = ie(s, o).getOtherAxis(o).getGlobalExtent(), v = o.dim === "x" ? 0 : 1, h = [t.x, t.y];
      h[v] += r[v], h[v] = Math.min(l[1], h[v]), h[v] = Math.max(l[0], h[v]);
      var f = (u[1] + u[0]) / 2, c = [f, f];
      c[v] = h[v];
      var d = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        x: h[0],
        y: h[1],
        rotation: t.rotation,
        cursorPoint: c,
        tooltipOption: d[v]
      };
    }, e;
  }(ur)
);
function ie(i, e) {
  var t = {};
  return t[e.dim + "AxisIndex"] = e.index, i.getCartesian(t);
}
var yr = {
  line: function(i, e, t) {
    var r = pr([e, t[0]], [e, t[1]], re(i));
    return {
      type: "Line",
      subPixelOptimize: !0,
      shape: r
    };
  },
  shadow: function(i, e, t) {
    var r = Math.max(1, i.getBandWidth()), a = t[1] - t[0];
    return {
      type: "Rect",
      shape: gr([e - r / 2, t[0]], [r, a], re(i))
    };
  }
};
function re(i) {
  return i.dim === "x" ? 0 : 1;
}
var mr = (
  /** @class */
  function(i) {
    P(e, i);
    function e() {
      var t = i !== null && i.apply(this, arguments) || this;
      return t.type = e.type, t;
    }
    return e.type = "axisPointer", e.defaultOption = {
      // 'auto' means that show when triggered by tooltip or handle.
      show: "auto",
      // zlevel: 0,
      z: 50,
      type: "line",
      // axispointer triggered by tootip determine snap automatically,
      // see `modelHelper`.
      snap: !1,
      triggerTooltip: !0,
      triggerEmphasis: !0,
      value: null,
      status: null,
      link: [],
      // Do not set 'auto' here, otherwise global animation: false
      // will not effect at this axispointer.
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: {
        color: "#B9BEC9",
        width: 1,
        type: "dashed"
      },
      shadowStyle: {
        color: "rgba(210,219,238,0.2)"
      },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: "#fff",
        padding: [5, 7, 5, 7],
        backgroundColor: "auto",
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3
      },
      handle: {
        show: !1,
        // eslint-disable-next-line
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        // handle margin is from symbol center to axis, which is stable when circular move.
        margin: 50,
        // color: '#1b8bbd'
        // color: '#2f4554'
        color: "#333",
        shadowBlur: 3,
        shadowColor: "#aaa",
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        // For mobile performance
        throttle: 40
      }
    }, e;
  }(Pt)
), R = ht(), _r = A;
function Ar(i, e, t) {
  if (!kt.node) {
    var r = e.getZr();
    R(r).records || (R(r).records = {}), wr(r, e);
    var a = R(r).records[i] || (R(r).records[i] = {});
    a.handler = t;
  }
}
function wr(i, e) {
  if (R(i).initialized)
    return;
  R(i).initialized = !0, t("click", N(ae, "click")), t("mousemove", N(ae, "mousemove")), t("globalout", br);
  function t(r, a) {
    i.on(r, function(n) {
      var o = Sr(e);
      _r(R(i).records, function(s) {
        s && a(s, n, o.dispatchAction);
      }), Lr(o.pendings, e);
    });
  }
}
function Lr(i, e) {
  var t = i.showTip.length, r = i.hideTip.length, a;
  t ? a = i.showTip[t - 1] : r && (a = i.hideTip[r - 1]), a && (a.dispatchAction = null, e.dispatchAction(a));
}
function br(i, e, t) {
  i.handler("leave", null, t);
}
function ae(i, e, t, r) {
  e.handler(i, t, r);
}
function Sr(i) {
  var e = {
    showTip: [],
    hideTip: []
  }, t = function(r) {
    var a = e[r.type];
    a ? a.push(r) : (r.dispatchAction = t, i.dispatchAction(r));
  };
  return {
    dispatchAction: t,
    pendings: e
  };
}
function ne(i, e) {
  if (!kt.node) {
    var t = e.getZr(), r = (R(t).records || {})[i];
    r && (R(t).records[i] = null);
  }
}
var Cr = (
  /** @class */
  function(i) {
    P(e, i);
    function e() {
      var t = i !== null && i.apply(this, arguments) || this;
      return t.type = e.type, t;
    }
    return e.prototype.render = function(t, r, a) {
      var n = r.getComponent("tooltip"), o = t.get("triggerOn") || n && n.get("triggerOn") || "mousemove|click";
      Ar("axisPointer", a, function(s, l, u) {
        o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && u({
          type: "updateAxisPointer",
          currTrigger: s,
          x: l && l.offsetX,
          y: l && l.offsetY
        });
      });
    }, e.prototype.remove = function(t, r) {
      ne("axisPointer", r);
    }, e.prototype.dispose = function(t, r) {
      ne("axisPointer", r);
    }, e.type = "axisPointer", e;
  }(Et)
);
function Tr(i, e) {
  var t = [], r = i.seriesIndex, a;
  if (r == null || !(a = e.getSeriesByIndex(r)))
    return {
      point: []
    };
  var n = a.getData(), o = xi(n, i);
  if (o == null || o < 0 || F(o))
    return {
      point: []
    };
  var s = n.getItemGraphicEl(o), l = a.coordinateSystem;
  if (a.getTooltipPosition)
    t = a.getTooltipPosition(o) || [];
  else if (l && l.dataToPoint)
    if (i.isStacked) {
      var u = l.getBaseAxis(), v = l.getOtherAxis(u), h = v.dim, f = u.dim, c = h === "x" || h === "radius" ? 1 : 0, d = n.mapDimension(f), g = [];
      g[c] = n.get(d, o), g[1 - c] = n.get(n.getCalculationInfo("stackResultDimension"), o), t = l.dataToPoint(g) || [];
    } else
      t = l.dataToPoint(n.getValues(It(l.dimensions, function(x) {
        return n.mapDimension(x);
      }), o)) || [];
  else if (s) {
    var p = s.getBoundingRect().clone();
    p.applyTransform(s.transform), t = [p.x + p.width / 2, p.y + p.height / 2];
  }
  return {
    point: t,
    el: s
  };
}
var oe = ht();
function Pr(i, e, t) {
  var r = i.currTrigger, a = [i.x, i.y], n = i, o = i.dispatchAction || me(t.dispatchAction, t), s = e.getComponent("axisPointer").coordSysAxesInfo;
  if (s) {
    et(a) && (a = Tr({
      seriesIndex: n.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: n.dataIndex
    }, e).point);
    var l = et(a), u = n.axesInfo, v = s.axesInfo, h = r === "leave" || et(a), f = {}, c = {}, d = {
      list: [],
      map: {}
    }, g = {
      showPointer: N(Mr, c),
      showTooltip: N(Dr, d)
    };
    A(s.coordSysMap, function(x, m) {
      var y = l || x.containPoint(a);
      A(s.coordSysAxesInfo[m], function(_, w) {
        var S = _.axis, L = Br(u, _);
        if (!h && y && (!u || L)) {
          var b = L && L.value;
          b == null && !l && (b = S.pointToData(a)), b != null && se(_, b, g, !1, f);
        }
      });
    });
    var p = {};
    return A(v, function(x, m) {
      var y = x.linkGroup;
      y && !c[m] && A(y.axesInfo, function(_, w) {
        var S = c[w];
        if (_ !== x && S) {
          var L = S.value;
          y.mapper && (L = x.axis.scale.parse(y.mapper(L, le(_), le(x)))), p[x.key] = L;
        }
      });
    }), A(p, function(x, m) {
      se(v[m], x, g, !0, f);
    }), Er(c, v, f), kr(d, a, i, o), Rr(v, o, t), f;
  }
}
function se(i, e, t, r, a) {
  var n = i.axis;
  if (!(n.scale.isBlank() || !n.containData(e))) {
    if (!i.involveSeries) {
      t.showPointer(i, e);
      return;
    }
    var o = Ir(e, i), s = o.payloadBatch, l = o.snapToValue;
    s[0] && a.seriesIndex == null && ut(a, s[0]), !r && i.snap && n.containData(l) && l != null && (e = l), t.showPointer(i, e, s), t.showTooltip(i, o, l);
  }
}
function Ir(i, e) {
  var t = e.axis, r = t.dim, a = i, n = [], o = Number.MAX_VALUE, s = -1;
  return A(e.seriesModels, function(l, u) {
    var v = l.getData().mapDimensionsAll(r), h, f;
    if (l.getAxisTooltipData) {
      var c = l.getAxisTooltipData(v, i, t);
      f = c.dataIndices, h = c.nestestValue;
    } else {
      if (f = l.getData().indicesOfNearest(
        v[0],
        i,
        // Add a threshold to avoid find the wrong dataIndex
        // when data length is not same.
        // false,
        t.type === "category" ? 0.5 : null
      ), !f.length)
        return;
      h = l.getData().get(v[0], f[0]);
    }
    if (!(h == null || !isFinite(h))) {
      var d = i - h, g = Math.abs(d);
      g <= o && ((g < o || d >= 0 && s < 0) && (o = g, s = d, a = h, n.length = 0), A(f, function(p) {
        n.push({
          seriesIndex: l.seriesIndex,
          dataIndexInside: p,
          dataIndex: l.getData().getRawIndex(p)
        });
      }));
    }
  }), {
    payloadBatch: n,
    snapToValue: a
  };
}
function Mr(i, e, t, r) {
  i[e.key] = {
    value: t,
    payloadBatch: r
  };
}
function Dr(i, e, t, r) {
  var a = t.payloadBatch, n = e.axis, o = n.model, s = e.axisPointerModel;
  if (!(!e.triggerTooltip || !a.length)) {
    var l = e.coordSys.model, u = j(l), v = i.map[u];
    v || (v = i.map[u] = {
      coordSysId: l.id,
      coordSysIndex: l.componentIndex,
      coordSysType: l.type,
      coordSysMainType: l.mainType,
      dataByAxis: []
    }, i.list.push(v)), v.dataByAxis.push({
      axisDim: n.dim,
      axisIndex: o.componentIndex,
      axisType: o.type,
      axisId: o.id,
      value: r,
      // Caustion: viewHelper.getValueLabel is actually on "view stage", which
      // depends that all models have been updated. So it should not be performed
      // here. Considering axisPointerModel used here is volatile, which is hard
      // to be retrieve in TooltipView, we prepare parameters here.
      valueLabelOpt: {
        precision: s.get(["label", "precision"]),
        formatter: s.get(["label", "formatter"])
      },
      seriesDataIndices: a.slice()
    });
  }
}
function Er(i, e, t) {
  var r = t.axesInfo = [];
  A(e, function(a, n) {
    var o = a.axisPointerModel.option, s = i[n];
    s ? (!a.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !a.useHandle && (o.status = "hide"), o.status === "show" && r.push({
      axisDim: a.axis.dim,
      axisIndex: a.axis.model.componentIndex,
      value: o.value
    });
  });
}
function kr(i, e, t, r) {
  if (et(e) || !i.list.length) {
    r({
      type: "hideTip"
    });
    return;
  }
  var a = ((i.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  r({
    type: "showTip",
    escapeConnect: !0,
    x: e[0],
    y: e[1],
    tooltipOption: t.tooltipOption,
    position: t.position,
    dataIndexInside: a.dataIndexInside,
    dataIndex: a.dataIndex,
    seriesIndex: a.seriesIndex,
    dataByCoordSys: i.list
  });
}
function Rr(i, e, t) {
  var r = t.getZr(), a = "axisPointerLastHighlights", n = oe(r)[a] || {}, o = oe(r)[a] = {};
  A(i, function(u, v) {
    var h = u.axisPointerModel.option;
    h.status === "show" && u.triggerEmphasis && A(h.seriesDataIndices, function(f) {
      var c = f.seriesIndex + " | " + f.dataIndex;
      o[c] = f;
    });
  });
  var s = [], l = [];
  A(n, function(u, v) {
    !o[v] && l.push(u);
  }), A(o, function(u, v) {
    !n[v] && s.push(u);
  }), l.length && t.dispatchAction({
    type: "downplay",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: l
  }), s.length && t.dispatchAction({
    type: "highlight",
    escapeConnect: !0,
    // Not blur others when highlight in axisPointer.
    notBlur: !0,
    batch: s
  });
}
function Br(i, e) {
  for (var t = 0; t < (i || []).length; t++) {
    var r = i[t];
    if (e.axis.dim === r.axisDim && e.axis.model.componentIndex === r.axisIndex)
      return r;
  }
}
function le(i) {
  var e = i.axis.model, t = {}, r = t.axisDim = i.axis.dim;
  return t.axisIndex = t[r + "AxisIndex"] = e.componentIndex, t.axisName = t[r + "AxisName"] = e.name, t.axisId = t[r + "AxisId"] = e.id, t;
}
function et(i) {
  return !i || i[0] == null || isNaN(i[0]) || i[1] == null || isNaN(i[1]);
}
function Or(i) {
  be.registerAxisPointerClass("CartesianAxisPointer", xr), i.registerComponentModel(mr), i.registerComponentView(Cr), i.registerPreprocessor(function(e) {
    if (e) {
      (!e.axisPointer || e.axisPointer.length === 0) && (e.axisPointer = {});
      var t = e.axisPointer.link;
      t && !F(t) && (e.axisPointer.link = [t]);
    }
  }), i.registerProcessor(i.PRIORITY.PROCESSOR.STATISTIC, function(e, t) {
    e.getComponent("axisPointer").coordSysAxesInfo = Xi(e, t);
  }), i.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, Pr);
}
function Ur(i) {
  zt(lr), zt(Or);
}
function ue(i, e, t) {
  var r = _i.createCanvas(), a = e.getWidth(), n = e.getHeight(), o = r.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = a + "px", o.height = n + "px", r.setAttribute("data-zr-dom-id", i)), r.width = a * t, r.height = n * t, r;
}
var mt = function(i) {
  yi(e, i);
  function e(t, r, a) {
    var n = i.call(this) || this;
    n.motionBlur = !1, n.lastFrameAlpha = 0.7, n.dpr = 1, n.virtual = !1, n.config = {}, n.incremental = !1, n.zlevel = 0, n.maxRepaintRectCount = 5, n.__dirty = !0, n.__firstTimePaint = !0, n.__used = !1, n.__drawIndex = 0, n.__startIndex = 0, n.__endIndex = 0, n.__prevStartIndex = null, n.__prevEndIndex = null;
    var o;
    a = a || Ae, typeof t == "string" ? o = ue(t, r, a) : K(t) && (o = t, t = o.id), n.id = t, n.dom = o;
    var s = o.style;
    return s && (_e(o), o.onselectstart = function() {
      return !1;
    }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), n.painter = r, n.dpr = a, n;
  }
  return e.prototype.getElementCount = function() {
    return this.__endIndex - this.__startIndex;
  }, e.prototype.afterBrush = function() {
    this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex;
  }, e.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, e.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, e.prototype.createBackBuffer = function() {
    var t = this.dpr;
    this.domBack = ue("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), t !== 1 && this.ctxBack.scale(t, t);
  }, e.prototype.createRepaintRects = function(t, r, a, n) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, l = !1, u = new $(0, 0, 0, 0);
    function v(m) {
      if (!(!m.isFinite() || m.isZero()))
        if (o.length === 0) {
          var y = new $(0, 0, 0, 0);
          y.copy(m), o.push(y);
        } else {
          for (var _ = !1, w = 1 / 0, S = 0, L = 0; L < o.length; ++L) {
            var b = o[L];
            if (b.intersect(m)) {
              var I = new $(0, 0, 0, 0);
              I.copy(b), I.union(m), o[L] = I, _ = !0;
              break;
            } else if (l) {
              u.copy(m), u.union(b);
              var C = m.width * m.height, T = b.width * b.height, k = u.width * u.height, W = k - C - T;
              W < w && (w = W, S = L);
            }
          }
          if (l && (o[S].union(m), _ = !0), !_) {
            var y = new $(0, 0, 0, 0);
            y.copy(m), o.push(y);
          }
          l || (l = o.length >= s);
        }
    }
    for (var h = this.__startIndex; h < this.__endIndex; ++h) {
      var f = t[h];
      if (f) {
        var c = f.shouldBePainted(a, n, !0, !0), d = f.__isRendered && (f.__dirty & At || !c) ? f.getPrevPaintRect() : null;
        d && v(d);
        var g = c && (f.__dirty & At || !f.__isRendered) ? f.getPaintRect() : null;
        g && v(g);
      }
    }
    for (var h = this.__prevStartIndex; h < this.__prevEndIndex; ++h) {
      var f = r[h], c = f && f.shouldBePainted(a, n, !0, !0);
      if (f && (!c || !f.__zr) && f.__isRendered) {
        var d = f.getPrevPaintRect();
        d && v(d);
      }
    }
    var p;
    do {
      p = !1;
      for (var h = 0; h < o.length; ) {
        if (o[h].isZero()) {
          o.splice(h, 1);
          continue;
        }
        for (var x = h + 1; x < o.length; )
          o[h].intersect(o[x]) ? (p = !0, o[h].union(o[x]), o.splice(x, 1)) : x++;
        h++;
      }
    } while (p);
    return this._paintRects = o, o;
  }, e.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  }, e.prototype.resize = function(t, r) {
    var a = this.dpr, n = this.dom, o = n.style, s = this.domBack;
    o && (o.width = t + "px", o.height = r + "px"), n.width = t * a, n.height = r * a, s && (s.width = t * a, s.height = r * a, a !== 1 && this.ctxBack.scale(a, a));
  }, e.prototype.clear = function(t, r, a) {
    var n = this.dom, o = this.ctx, s = n.width, l = n.height;
    r = r || this.clearColor;
    var u = this.motionBlur && !t, v = this.lastFrameAlpha, h = this.dpr, f = this;
    u && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, s / h, l / h));
    var c = this.domBack;
    function d(g, p, x, m) {
      if (o.clearRect(g, p, x, m), r && r !== "transparent") {
        var y = void 0;
        if (Ai(r)) {
          var _ = r.global || r.__width === x && r.__height === m;
          y = _ && r.__canvasGradient || wi(o, r, {
            x: 0,
            y: 0,
            width: x,
            height: m
          }), r.__canvasGradient = y, r.__width = x, r.__height = m;
        } else Li(r) && (r.scaleX = r.scaleX || h, r.scaleY = r.scaleY || h, y = bi(o, r, {
          dirty: function() {
            f.setUnpainted(), f.painter.refresh();
          }
        }));
        o.save(), o.fillStyle = y || r, o.fillRect(g, p, x, m), o.restore();
      }
      u && (o.save(), o.globalAlpha = v, o.drawImage(c, g, p, x, m), o.restore());
    }
    !a || u ? d(0, 0, s, l) : a.length && A(a, function(g) {
      d(g.x * h, g.y * h, g.width * h, g.height * h);
    });
  }, e;
}(mi), he = 1e5, z = 314159, tt = 0.01, Hr = 1e-3;
function Nr(i) {
  return i ? i.__builtin__ ? !0 : !(typeof i.resize != "function" || typeof i.refresh != "function") : !1;
}
function Vr(i, e) {
  var t = document.createElement("div");
  return t.style.cssText = [
    "position:relative",
    "width:" + i + "px",
    "height:" + e + "px",
    "padding:0",
    "margin:0",
    "border-width:0"
  ].join(";") + ";", t;
}
var zr = function() {
  function i(e, t, r, a) {
    this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
    var n = !e.nodeName || e.nodeName.toUpperCase() === "CANVAS";
    this._opts = r = ut({}, r || {}), this.dpr = r.devicePixelRatio || Ae, this._singleCanvas = n, this.root = e;
    var o = e.style;
    o && (_e(e), e.innerHTML = ""), this.storage = t;
    var s = this._zlevelList;
    this._prevDisplayList = [];
    var l = this._layers;
    if (n) {
      var v = e, h = v.width, f = v.height;
      r.width != null && (h = r.width), r.height != null && (f = r.height), this.dpr = r.devicePixelRatio || 1, v.width = h * this.dpr, v.height = f * this.dpr, this._width = h, this._height = f;
      var c = new mt(v, this, this.dpr);
      c.__builtin__ = !0, c.initContext(), l[z] = c, c.zlevel = z, s.push(z), this._domRoot = e;
    } else {
      this._width = Q(e, 0, r), this._height = Q(e, 1, r);
      var u = this._domRoot = Vr(this._width, this._height);
      e.appendChild(u);
    }
  }
  return i.prototype.getType = function() {
    return "canvas";
  }, i.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  }, i.prototype.getViewportRoot = function() {
    return this._domRoot;
  }, i.prototype.getViewportRootOffset = function() {
    var e = this.getViewportRoot();
    if (e)
      return {
        offsetLeft: e.offsetLeft || 0,
        offsetTop: e.offsetTop || 0
      };
  }, i.prototype.refresh = function(e) {
    var t = this.storage.getDisplayList(!0), r = this._prevDisplayList, a = this._zlevelList;
    this._redrawId = Math.random(), this._paintList(t, r, e, this._redrawId);
    for (var n = 0; n < a.length; n++) {
      var o = a[n], s = this._layers[o];
      if (!s.__builtin__ && s.refresh) {
        var l = n === 0 ? this._backgroundColor : null;
        s.refresh(l);
      }
    }
    return this._opts.useDirtyRect && (this._prevDisplayList = t.slice()), this;
  }, i.prototype.refreshHover = function() {
    this._paintHoverList(this.storage.getDisplayList(!1));
  }, i.prototype._paintHoverList = function(e) {
    var t = e.length, r = this._hoverlayer;
    if (r && r.clear(), !!t) {
      for (var a = {
        inHover: !0,
        viewWidth: this._width,
        viewHeight: this._height
      }, n, o = 0; o < t; o++) {
        var s = e[o];
        s.__inHover && (r || (r = this._hoverlayer = this.getLayer(he)), n || (n = r.ctx, n.save()), J(n, s, a, o === t - 1));
      }
      n && n.restore();
    }
  }, i.prototype.getHoverLayer = function() {
    return this.getLayer(he);
  }, i.prototype.paintOne = function(e, t) {
    Si(e, t);
  }, i.prototype._paintList = function(e, t, r, a) {
    if (this._redrawId === a) {
      r = r || !1, this._updateLayerStatus(e);
      var n = this._doPaintList(e, t, r), o = n.finished, s = n.needsRefreshHover;
      if (this._needsManuallyCompositing && this._compositeManually(), s && this._paintHoverList(e), o)
        this.eachLayer(function(u) {
          u.afterBrush && u.afterBrush();
        });
      else {
        var l = this;
        Ci(function() {
          l._paintList(e, t, r, a);
        });
      }
    }
  }, i.prototype._compositeManually = function() {
    var e = this.getLayer(z).ctx, t = this._domRoot.width, r = this._domRoot.height;
    e.clearRect(0, 0, t, r), this.eachBuiltinLayer(function(a) {
      a.virtual && e.drawImage(a.dom, 0, 0, t, r);
    });
  }, i.prototype._doPaintList = function(e, t, r) {
    for (var a = this, n = [], o = this._opts.useDirtyRect, s = 0; s < this._zlevelList.length; s++) {
      var l = this._zlevelList[s], u = this._layers[l];
      u.__builtin__ && u !== this._hoverlayer && (u.__dirty || r) && n.push(u);
    }
    for (var v = !0, h = !1, f = function(g) {
      var p = n[g], x = p.ctx, m = o && p.createRepaintRects(e, t, c._width, c._height), y = r ? p.__startIndex : p.__drawIndex, _ = !r && p.incremental && Date.now, w = _ && Date.now(), S = p.zlevel === c._zlevelList[0] ? c._backgroundColor : null;
      if (p.__startIndex === p.__endIndex)
        p.clear(!1, S, m);
      else if (y === p.__startIndex) {
        var L = e[y];
        (!L.incremental || !L.notClear || r) && p.clear(!1, S, m);
      }
      y === -1 && (console.error("For some unknown reason. drawIndex is -1"), y = p.__startIndex);
      var b, I = function(W) {
        var M = {
          inHover: !1,
          allClipped: !1,
          prevEl: null,
          viewWidth: a._width,
          viewHeight: a._height
        };
        for (b = y; b < p.__endIndex; b++) {
          var O = e[b];
          if (O.__inHover && (h = !0), a._doPaintEl(O, p, o, W, M, b === p.__endIndex - 1), _) {
            var Ie = Date.now() - w;
            if (Ie > 15)
              break;
          }
        }
        M.prevElClipPaths && x.restore();
      };
      if (m)
        if (m.length === 0)
          b = p.__endIndex;
        else
          for (var C = c.dpr, T = 0; T < m.length; ++T) {
            var k = m[T];
            x.save(), x.beginPath(), x.rect(k.x * C, k.y * C, k.width * C, k.height * C), x.clip(), I(k), x.restore();
          }
      else
        x.save(), I(), x.restore();
      p.__drawIndex = b, p.__drawIndex < p.__endIndex && (v = !1);
    }, c = this, d = 0; d < n.length; d++)
      f(d);
    return kt.wxa && A(this._layers, function(g) {
      g && g.ctx && g.ctx.draw && g.ctx.draw();
    }), {
      finished: v,
      needsRefreshHover: h
    };
  }, i.prototype._doPaintEl = function(e, t, r, a, n, o) {
    var s = t.ctx;
    if (r) {
      var l = e.getPaintRect();
      (!a || l && l.intersect(a)) && (J(s, e, n, o), e.setPrevPaintRect(l));
    } else
      J(s, e, n, o);
  }, i.prototype.getLayer = function(e, t) {
    this._singleCanvas && !this._needsManuallyCompositing && (e = z);
    var r = this._layers[e];
    return r || (r = new mt("zr_" + e, this, this.dpr), r.zlevel = e, r.__builtin__ = !0, this._layerConfig[e] ? E(r, this._layerConfig[e], !0) : this._layerConfig[e - tt] && E(r, this._layerConfig[e - tt], !0), t && (r.virtual = t), this.insertLayer(e, r), r.initContext()), r;
  }, i.prototype.insertLayer = function(e, t) {
    var r = this._layers, a = this._zlevelList, n = a.length, o = this._domRoot, s = null, l = -1;
    if (r[e]) {
      process.env.NODE_ENV !== "production" && ft("ZLevel " + e + " has been used already");
      return;
    }
    if (!Nr(t)) {
      process.env.NODE_ENV !== "production" && ft("Layer of zlevel " + e + " is not valid");
      return;
    }
    if (n > 0 && e > a[0]) {
      for (l = 0; l < n - 1 && !(a[l] < e && a[l + 1] > e); l++)
        ;
      s = r[a[l]];
    }
    if (a.splice(l + 1, 0, e), r[e] = t, !t.virtual)
      if (s) {
        var u = s.dom;
        u.nextSibling ? o.insertBefore(t.dom, u.nextSibling) : o.appendChild(t.dom);
      } else
        o.firstChild ? o.insertBefore(t.dom, o.firstChild) : o.appendChild(t.dom);
    t.painter || (t.painter = this);
  }, i.prototype.eachLayer = function(e, t) {
    for (var r = this._zlevelList, a = 0; a < r.length; a++) {
      var n = r[a];
      e.call(t, this._layers[n], n);
    }
  }, i.prototype.eachBuiltinLayer = function(e, t) {
    for (var r = this._zlevelList, a = 0; a < r.length; a++) {
      var n = r[a], o = this._layers[n];
      o.__builtin__ && e.call(t, o, n);
    }
  }, i.prototype.eachOtherLayer = function(e, t) {
    for (var r = this._zlevelList, a = 0; a < r.length; a++) {
      var n = r[a], o = this._layers[n];
      o.__builtin__ || e.call(t, o, n);
    }
  }, i.prototype.getLayers = function() {
    return this._layers;
  }, i.prototype._updateLayerStatus = function(e) {
    this.eachBuiltinLayer(function(h, f) {
      h.__dirty = h.__used = !1;
    });
    function t(h) {
      n && (n.__endIndex !== h && (n.__dirty = !0), n.__endIndex = h);
    }
    if (this._singleCanvas)
      for (var r = 1; r < e.length; r++) {
        var a = e[r];
        if (a.zlevel !== e[r - 1].zlevel || a.incremental) {
          this._needsManuallyCompositing = !0;
          break;
        }
      }
    var n = null, o = 0, s, l;
    for (l = 0; l < e.length; l++) {
      var a = e[l], u = a.zlevel, v = void 0;
      s !== u && (s = u, o = 0), a.incremental ? (v = this.getLayer(u + Hr, this._needsManuallyCompositing), v.incremental = !0, o = 1) : v = this.getLayer(u + (o > 0 ? tt : 0), this._needsManuallyCompositing), v.__builtin__ || ft("ZLevel " + u + " has been used by unkown layer " + v.id), v !== n && (v.__used = !0, v.__startIndex !== l && (v.__dirty = !0), v.__startIndex = l, v.incremental ? v.__drawIndex = -1 : v.__drawIndex = l, t(l), n = v), a.__dirty & At && !a.__inHover && (v.__dirty = !0, v.incremental && v.__drawIndex < 0 && (v.__drawIndex = l));
    }
    t(l), this.eachBuiltinLayer(function(h, f) {
      !h.__used && h.getElementCount() > 0 && (h.__dirty = !0, h.__startIndex = h.__endIndex = h.__drawIndex = 0), h.__dirty && h.__drawIndex < 0 && (h.__drawIndex = h.__startIndex);
    });
  }, i.prototype.clear = function() {
    return this.eachBuiltinLayer(this._clearLayer), this;
  }, i.prototype._clearLayer = function(e) {
    e.clear();
  }, i.prototype.setBackgroundColor = function(e) {
    this._backgroundColor = e, A(this._layers, function(t) {
      t.setUnpainted();
    });
  }, i.prototype.configLayer = function(e, t) {
    if (t) {
      var r = this._layerConfig;
      r[e] ? E(r[e], t, !0) : r[e] = t;
      for (var a = 0; a < this._zlevelList.length; a++) {
        var n = this._zlevelList[a];
        if (n === e || n === e + tt) {
          var o = this._layers[n];
          E(o, r[e], !0);
        }
      }
    }
  }, i.prototype.delLayer = function(e) {
    var t = this._layers, r = this._zlevelList, a = t[e];
    a && (a.dom.parentNode.removeChild(a.dom), delete t[e], r.splice(U(r, e), 1));
  }, i.prototype.resize = function(e, t) {
    if (this._domRoot.style) {
      var r = this._domRoot;
      r.style.display = "none";
      var a = this._opts, n = this.root;
      if (e != null && (a.width = e), t != null && (a.height = t), e = Q(n, 0, a), t = Q(n, 1, a), r.style.display = "", this._width !== e || t !== this._height) {
        r.style.width = e + "px", r.style.height = t + "px";
        for (var o in this._layers)
          this._layers.hasOwnProperty(o) && this._layers[o].resize(e, t);
        this.refresh(!0);
      }
      this._width = e, this._height = t;
    } else {
      if (e == null || t == null)
        return;
      this._width = e, this._height = t, this.getLayer(z).resize(e, t);
    }
    return this;
  }, i.prototype.clearLayer = function(e) {
    var t = this._layers[e];
    t && t.clear();
  }, i.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
  }, i.prototype.getRenderedCanvas = function(e) {
    if (e = e || {}, this._singleCanvas && !this._compositeManually)
      return this._layers[z].dom;
    var t = new mt("image", this, e.pixelRatio || this.dpr);
    t.initContext(), t.clear(!1, e.backgroundColor || this._backgroundColor);
    var r = t.ctx;
    if (e.pixelRatio <= this.dpr) {
      this.refresh();
      var a = t.dom.width, n = t.dom.height;
      this.eachLayer(function(h) {
        h.__builtin__ ? r.drawImage(h.dom, 0, 0, a, n) : h.renderToCanvas && (r.save(), h.renderToCanvas(r), r.restore());
      });
    } else
      for (var o = {
        inHover: !1,
        viewWidth: this._width,
        viewHeight: this._height
      }, s = this.storage.getDisplayList(!0), l = 0, u = s.length; l < u; l++) {
        var v = s[l];
        J(r, v, o, l === u - 1);
      }
    return t.dom;
  }, i.prototype.getWidth = function() {
    return this._width;
  }, i.prototype.getHeight = function() {
    return this._height;
  }, i;
}();
function Xr(i) {
  i.registerPainter("canvas", zr);
}
export {
  Wr as createClipPath,
  Ti as createGridClipPath,
  Pi as createPolarClipPath,
  Yr as dataSample,
  Tr as findPointFromSeries,
  Fr as getDefaultInterpolatedLabel,
  Zr as getDefaultLabel,
  dr as getValueLabel,
  Ur as install,
  Xr as install$1,
  Or as install$2,
  $r as isCoordinateSystemType,
  Ar as register,
  ne as unregister
};
