import { register as ue, findPointFromSeries as de, getValueLabel as fe, unregister as pe, install$2 as ve } from "./installCanvasRenderer-CM5Pdk-q.js";
import { registerAction as ce, noop as ut, __extends as k, bind as w, defaults as ge, clone as j, isMiddleOrRightButtonOnMouseUpDown as xt, stop as K, Eventful as me, isString as L, createHashMap as E, assert as dt, indexOf as ct, merge as wt, each as y, MULTIPLE_REFERRING as _e, SINGLE_REFERRING as ft, ComponentModel as Ut, ComponentView as $t, linearMap as C, asc as F, map as ye, getPixelPrecision as xe, unionAxisExtentFromData as we, ensureScaleRawExtentInfo as Me, env as D, toCamelCase as qt, isDom as Mt, isFunction as Q, normalizeEvent as Se, transformLocalCoord as Te, convertToColorString as J, isArray as G, getPaddingFromTooltipModel as jt, normalizeCssArray as be, retrieve2 as Ce, isObject as Kt, throwError as Ae, ZRText as Qt, getTooltipRenderMode as De, createOrUpdate as gt, clear as pt, Rect as U, getECData as B, findEventDispatcher as Re, createTooltipMarkup as St, trim as Ie, getAxisRawValue as Oe, TooltipMarkupStyleCreator as rt, normalizeTooltipFormatResult as Tt, buildTooltipMarkup as bt, encodeHTML as Le, format as ke, formatTpl as Pe, parsePercent$1 as tt, getLayoutRect as Jt, preParseFinder as ze, queryReferringComponents as Ze, Model as $, extend as Ct, use as vt, inheritDefaultOption as te, makeInner as Be, curry as At, Group as Dt, getLayoutParams as Ee, symbolBuildProxies as Ve, deprecateLog as He, createSymbol as Rt, enableHoverEmphasis as We, createTextStyle as Ne, getTransform as Ye, transformDirection as Xe, applyTransform as It, Point as Fe, Polygon as Ge, Polyline as Ue } from "./core-Dm3hJ1-b.js";
var Ot = "\0_ec_interaction_mutex";
function Lt(n, i) {
  return !!$e(n)[i];
}
function $e(n) {
  return n[Ot] || (n[Ot] = {});
}
ce({
  type: "takeGlobalCursor",
  event: "globalCursorTaken",
  update: "update"
}, ut);
var qe = (
  /** @class */
  function(n) {
    k(i, n);
    function i(t) {
      var e = n.call(this) || this;
      e._zr = t;
      var o = w(e._mousedownHandler, e), r = w(e._mousemoveHandler, e), a = w(e._mouseupHandler, e), s = w(e._mousewheelHandler, e), l = w(e._pinchHandler, e);
      return e.enable = function(h, u) {
        this.disable(), this._opt = ge(j(u) || {}, {
          zoomOnMouseWheel: !0,
          moveOnMouseMove: !0,
          // By default, wheel do not trigger move.
          moveOnMouseWheel: !1,
          preventDefaultMouseMove: !0
        }), h == null && (h = !0), (h === !0 || h === "move" || h === "pan") && (t.on("mousedown", o), t.on("mousemove", r), t.on("mouseup", a)), (h === !0 || h === "scale" || h === "zoom") && (t.on("mousewheel", s), t.on("pinch", l));
      }, e.disable = function() {
        t.off("mousedown", o), t.off("mousemove", r), t.off("mouseup", a), t.off("mousewheel", s), t.off("pinch", l);
      }, e;
    }
    return i.prototype.isDragging = function() {
      return this._dragging;
    }, i.prototype.isPinching = function() {
      return this._pinching;
    }, i.prototype.setPointerChecker = function(t) {
      this.pointerChecker = t;
    }, i.prototype.dispose = function() {
      this.disable();
    }, i.prototype._mousedownHandler = function(t) {
      if (!xt(t)) {
        for (var e = t.target; e; ) {
          if (e.draggable)
            return;
          e = e.__hostTarget || e.parent;
        }
        var o = t.offsetX, r = t.offsetY;
        this.pointerChecker && this.pointerChecker(t, o, r) && (this._x = o, this._y = r, this._dragging = !0);
      }
    }, i.prototype._mousemoveHandler = function(t) {
      if (!(!this._dragging || !q("moveOnMouseMove", t, this._opt) || t.gestureEvent === "pinch" || Lt(this._zr, "globalPan"))) {
        var e = t.offsetX, o = t.offsetY, r = this._x, a = this._y, s = e - r, l = o - a;
        this._x = e, this._y = o, this._opt.preventDefaultMouseMove && K(t.event), ee(this, "pan", "moveOnMouseMove", t, {
          dx: s,
          dy: l,
          oldX: r,
          oldY: a,
          newX: e,
          newY: o,
          isAvailableBehavior: null
        });
      }
    }, i.prototype._mouseupHandler = function(t) {
      xt(t) || (this._dragging = !1);
    }, i.prototype._mousewheelHandler = function(t) {
      var e = q("zoomOnMouseWheel", t, this._opt), o = q("moveOnMouseWheel", t, this._opt), r = t.wheelDelta, a = Math.abs(r), s = t.offsetX, l = t.offsetY;
      if (!(r === 0 || !e && !o)) {
        if (e) {
          var h = a > 3 ? 1.4 : a > 1 ? 1.2 : 1.1, u = r > 0 ? h : 1 / h;
          ot(this, "zoom", "zoomOnMouseWheel", t, {
            scale: u,
            originX: s,
            originY: l,
            isAvailableBehavior: null
          });
        }
        if (o) {
          var d = Math.abs(r), p = (r > 0 ? 1 : -1) * (d > 3 ? 0.4 : d > 1 ? 0.15 : 0.05);
          ot(this, "scrollMove", "moveOnMouseWheel", t, {
            scrollDelta: p,
            originX: s,
            originY: l,
            isAvailableBehavior: null
          });
        }
      }
    }, i.prototype._pinchHandler = function(t) {
      if (!Lt(this._zr, "globalPan")) {
        var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
        ot(this, "zoom", null, t, {
          scale: e,
          originX: t.pinchX,
          originY: t.pinchY,
          isAvailableBehavior: null
        });
      }
    }, i;
  }(me)
);
function ot(n, i, t, e, o) {
  n.pointerChecker && n.pointerChecker(e, o.originX, o.originY) && (K(e.event), ee(n, i, t, e, o));
}
function ee(n, i, t, e, o) {
  o.isAvailableBehavior = w(q, null, t, e), n.trigger(i, o);
}
function q(n, i, t) {
  var e = t[n];
  return !n || e && (!L(e) || i.event[e + "Key"]);
}
function it(n, i, t, e, o, r) {
  n = n || 0;
  var a = t[1] - t[0];
  if (o != null && (o = V(o, [0, a])), r != null && (r = Math.max(r, o ?? 0)), e === "all") {
    var s = Math.abs(i[1] - i[0]);
    s = V(s, [0, a]), o = r = V(s, [o, r]), e = 0;
  }
  i[0] = V(i[0], t), i[1] = V(i[1], t);
  var l = at(i, e);
  i[e] += n;
  var h = o || 0, u = t.slice();
  l.sign < 0 ? u[0] += h : u[1] -= h, i[e] = V(i[e], u);
  var d;
  return d = at(i, e), o != null && (d.sign !== l.sign || d.span < o) && (i[1 - e] = i[e] + l.sign * o), d = at(i, e), r != null && d.span > r && (i[1 - e] = i[e] + d.sign * r), i;
}
function at(n, i) {
  var t = n[i] - n[1 - i];
  return {
    span: Math.abs(t),
    sign: t > 0 ? -1 : t < 0 ? 1 : i ? -1 : 1
  };
}
function V(n, i) {
  return Math.min(i[1] != null ? i[1] : 1 / 0, Math.max(i[0] != null ? i[0] : -1 / 0, n));
}
var kt = ["x", "y", "radius", "angle", "single"], je = ["cartesian2d", "polar", "singleAxis"];
function Ke(n) {
  var i = n.get("coordinateSystem");
  return ct(je, i) >= 0;
}
function Z(n) {
  return process.env.NODE_ENV !== "production" && dt(n), n + "Axis";
}
function Qe(n, i) {
  var t = E(), e = [], o = E();
  n.eachComponent({
    mainType: "dataZoom",
    query: i
  }, function(u) {
    o.get(u.uid) || s(u);
  });
  var r;
  do
    r = !1, n.eachComponent("dataZoom", a);
  while (r);
  function a(u) {
    !o.get(u.uid) && l(u) && (s(u), r = !0);
  }
  function s(u) {
    o.set(u.uid, !0), e.push(u), h(u);
  }
  function l(u) {
    var d = !1;
    return u.eachTargetAxis(function(p, f) {
      var v = t.get(p);
      v && v[f] && (d = !0);
    }), d;
  }
  function h(u) {
    u.eachTargetAxis(function(d, p) {
      (t.get(d) || t.set(d, []))[p] = !0;
    });
  }
  return e;
}
function ie(n) {
  var i = n.ecModel, t = {
    infoList: [],
    infoMap: E()
  };
  return n.eachTargetAxis(function(e, o) {
    var r = i.getComponent(Z(e), o);
    if (r) {
      var a = r.getCoordSysModel();
      if (a) {
        var s = a.uid, l = t.infoMap.get(s);
        l || (l = {
          model: a,
          axisModels: []
        }, t.infoList.push(l), t.infoMap.set(s, l)), l.axisModels.push(r);
      }
    }
  }), t;
}
var nt = (
  /** @class */
  function() {
    function n() {
      this.indexList = [], this.indexMap = [];
    }
    return n.prototype.add = function(i) {
      this.indexMap[i] || (this.indexList.push(i), this.indexMap[i] = !0);
    }, n;
  }()
), et = (
  /** @class */
  function(n) {
    k(i, n);
    function i() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.type = i.type, t._autoThrottle = !0, t._noTarget = !0, t._rangePropMode = ["percent", "percent"], t;
    }
    return i.prototype.init = function(t, e, o) {
      var r = Pt(t);
      this.settledOption = r, this.mergeDefaultAndTheme(t, o), this._doInit(r);
    }, i.prototype.mergeOption = function(t) {
      var e = Pt(t);
      wt(this.option, t, !0), wt(this.settledOption, e, !0), this._doInit(e);
    }, i.prototype._doInit = function(t) {
      var e = this.option;
      this._setDefaultThrottle(t), this._updateRangeUse(t);
      var o = this.settledOption;
      y([["start", "startValue"], ["end", "endValue"]], function(r, a) {
        this._rangePropMode[a] === "value" && (e[r[0]] = o[r[0]] = null);
      }, this), this._resetTarget();
    }, i.prototype._resetTarget = function() {
      var t = this.get("orient", !0), e = this._targetAxisInfoMap = E(), o = this._fillSpecifiedTargetAxis(e);
      o ? this._orient = t || this._makeAutoOrientByTargetAxis() : (this._orient = t || "horizontal", this._fillAutoTargetAxisByOrient(e, this._orient)), this._noTarget = !0, e.each(function(r) {
        r.indexList.length && (this._noTarget = !1);
      }, this);
    }, i.prototype._fillSpecifiedTargetAxis = function(t) {
      var e = !1;
      return y(kt, function(o) {
        var r = this.getReferringComponents(Z(o), _e);
        if (r.specified) {
          e = !0;
          var a = new nt();
          y(r.models, function(s) {
            a.add(s.componentIndex);
          }), t.set(o, a);
        }
      }, this), e;
    }, i.prototype._fillAutoTargetAxisByOrient = function(t, e) {
      var o = this.ecModel, r = !0;
      if (r) {
        var a = e === "vertical" ? "y" : "x", s = o.findComponents({
          mainType: a + "Axis"
        });
        l(s, a);
      }
      if (r) {
        var s = o.findComponents({
          mainType: "singleAxis",
          filter: function(u) {
            return u.get("orient", !0) === e;
          }
        });
        l(s, "single");
      }
      function l(h, u) {
        var d = h[0];
        if (d) {
          var p = new nt();
          if (p.add(d.componentIndex), t.set(u, p), r = !1, u === "x" || u === "y") {
            var f = d.getReferringComponents("grid", ft).models[0];
            f && y(h, function(v) {
              d.componentIndex !== v.componentIndex && f === v.getReferringComponents("grid", ft).models[0] && p.add(v.componentIndex);
            });
          }
        }
      }
      r && y(kt, function(h) {
        if (r) {
          var u = o.findComponents({
            mainType: Z(h),
            filter: function(p) {
              return p.get("type", !0) === "category";
            }
          });
          if (u[0]) {
            var d = new nt();
            d.add(u[0].componentIndex), t.set(h, d), r = !1;
          }
        }
      }, this);
    }, i.prototype._makeAutoOrientByTargetAxis = function() {
      var t;
      return this.eachTargetAxis(function(e) {
        !t && (t = e);
      }, this), t === "y" ? "vertical" : "horizontal";
    }, i.prototype._setDefaultThrottle = function(t) {
      if (t.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
        var e = this.ecModel.option;
        this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20;
      }
    }, i.prototype._updateRangeUse = function(t) {
      var e = this._rangePropMode, o = this.get("rangeMode");
      y([["start", "startValue"], ["end", "endValue"]], function(r, a) {
        var s = t[r[0]] != null, l = t[r[1]] != null;
        s && !l ? e[a] = "percent" : !s && l ? e[a] = "value" : o ? e[a] = o[a] : s && (e[a] = "percent");
      });
    }, i.prototype.noTarget = function() {
      return this._noTarget;
    }, i.prototype.getFirstTargetAxisModel = function() {
      var t;
      return this.eachTargetAxis(function(e, o) {
        t == null && (t = this.ecModel.getComponent(Z(e), o));
      }, this), t;
    }, i.prototype.eachTargetAxis = function(t, e) {
      this._targetAxisInfoMap.each(function(o, r) {
        y(o.indexList, function(a) {
          t.call(e, r, a);
        });
      });
    }, i.prototype.getAxisProxy = function(t, e) {
      var o = this.getAxisModel(t, e);
      if (o)
        return o.__dzAxisProxy;
    }, i.prototype.getAxisModel = function(t, e) {
      process.env.NODE_ENV !== "production" && dt(t && e != null);
      var o = this._targetAxisInfoMap.get(t);
      if (o && o.indexMap[e])
        return this.ecModel.getComponent(Z(t), e);
    }, i.prototype.setRawRange = function(t) {
      var e = this.option, o = this.settledOption;
      y([["start", "startValue"], ["end", "endValue"]], function(r) {
        (t[r[0]] != null || t[r[1]] != null) && (e[r[0]] = o[r[0]] = t[r[0]], e[r[1]] = o[r[1]] = t[r[1]]);
      }, this), this._updateRangeUse(t);
    }, i.prototype.setCalculatedRange = function(t) {
      var e = this.option;
      y(["start", "startValue", "end", "endValue"], function(o) {
        e[o] = t[o];
      });
    }, i.prototype.getPercentRange = function() {
      var t = this.findRepresentativeAxisProxy();
      if (t)
        return t.getDataPercentWindow();
    }, i.prototype.getValueRange = function(t, e) {
      if (t == null && e == null) {
        var o = this.findRepresentativeAxisProxy();
        if (o)
          return o.getDataValueWindow();
      } else
        return this.getAxisProxy(t, e).getDataValueWindow();
    }, i.prototype.findRepresentativeAxisProxy = function(t) {
      if (t)
        return t.__dzAxisProxy;
      for (var e, o = this._targetAxisInfoMap.keys(), r = 0; r < o.length; r++)
        for (var a = o[r], s = this._targetAxisInfoMap.get(a), l = 0; l < s.indexList.length; l++) {
          var h = this.getAxisProxy(a, s.indexList[l]);
          if (h.hostedBy(this))
            return h;
          e || (e = h);
        }
      return e;
    }, i.prototype.getRangePropMode = function() {
      return this._rangePropMode.slice();
    }, i.prototype.getOrient = function() {
      return process.env.NODE_ENV !== "production" && dt(this._orient), this._orient;
    }, i.type = "dataZoom", i.dependencies = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "series", "toolbox"], i.defaultOption = {
      // zlevel: 0,
      z: 4,
      filterMode: "filter",
      start: 0,
      end: 100
    }, i;
  }(Ut)
);
function Pt(n) {
  var i = {};
  return y(["start", "end", "startValue", "endValue", "throttle"], function(t) {
    n.hasOwnProperty(t) && (i[t] = n[t]);
  }), i;
}
var re = (
  /** @class */
  function(n) {
    k(i, n);
    function i() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.type = i.type, t;
    }
    return i.prototype.render = function(t, e, o, r) {
      this.dataZoomModel = t, this.ecModel = e, this.api = o;
    }, i.type = "dataZoom", i;
  }($t)
), H = y, zt = F, Je = (
  /** @class */
  function() {
    function n(i, t, e, o) {
      this._dimName = i, this._axisIndex = t, this.ecModel = o, this._dataZoomModel = e;
    }
    return n.prototype.hostedBy = function(i) {
      return this._dataZoomModel === i;
    }, n.prototype.getDataValueWindow = function() {
      return this._valueWindow.slice();
    }, n.prototype.getDataPercentWindow = function() {
      return this._percentWindow.slice();
    }, n.prototype.getTargetSeriesModels = function() {
      var i = [];
      return this.ecModel.eachSeries(function(t) {
        if (Ke(t)) {
          var e = Z(this._dimName), o = t.getReferringComponents(e, ft).models[0];
          o && this._axisIndex === o.componentIndex && i.push(t);
        }
      }, this), i;
    }, n.prototype.getAxisModel = function() {
      return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex);
    }, n.prototype.getMinMaxSpan = function() {
      return j(this._minMaxSpan);
    }, n.prototype.calculateDataWindow = function(i) {
      var t = this._dataExtent, e = this.getAxisModel(), o = e.axis.scale, r = this._dataZoomModel.getRangePropMode(), a = [0, 100], s = [], l = [], h;
      H(["start", "end"], function(p, f) {
        var v = i[p], c = i[p + "Value"];
        r[f] === "percent" ? (v == null && (v = a[f]), c = o.parse(C(v, a, t))) : (h = !0, c = c == null ? t[f] : o.parse(c), v = C(c, t, a)), l[f] = c == null || isNaN(c) ? t[f] : c, s[f] = v == null || isNaN(v) ? a[f] : v;
      }), zt(l), zt(s);
      var u = this._minMaxSpan;
      h ? d(l, s, t, a, !1) : d(s, l, a, t, !0);
      function d(p, f, v, c, m) {
        var g = m ? "Span" : "ValueSpan";
        it(0, p, v, "all", u["min" + g], u["max" + g]);
        for (var _ = 0; _ < 2; _++)
          f[_] = C(p[_], v, c, !0), m && (f[_] = o.parse(f[_]));
      }
      return {
        valueWindow: l,
        percentWindow: s
      };
    }, n.prototype.reset = function(i) {
      if (i === this._dataZoomModel) {
        var t = this.getTargetSeriesModels();
        this._dataExtent = ti(this, this._dimName, t), this._updateMinMaxSpan();
        var e = this.calculateDataWindow(i.settledOption);
        this._valueWindow = e.valueWindow, this._percentWindow = e.percentWindow, this._setAxisModel();
      }
    }, n.prototype.filterData = function(i, t) {
      if (i !== this._dataZoomModel)
        return;
      var e = this._dimName, o = this.getTargetSeriesModels(), r = i.get("filterMode"), a = this._valueWindow;
      if (r === "none")
        return;
      H(o, function(l) {
        var h = l.getData(), u = h.mapDimensionsAll(e);
        if (u.length) {
          if (r === "weakFilter") {
            var d = h.getStore(), p = ye(u, function(f) {
              return h.getDimensionIndex(f);
            }, h);
            h.filterSelf(function(f) {
              for (var v, c, m, g = 0; g < u.length; g++) {
                var _ = d.get(p[g], f), x = !isNaN(_), M = _ < a[0], S = _ > a[1];
                if (x && !M && !S)
                  return !0;
                x && (m = !0), M && (v = !0), S && (c = !0);
              }
              return m && v && c;
            });
          } else
            H(u, function(f) {
              if (r === "empty")
                l.setData(h = h.map(f, function(c) {
                  return s(c) ? c : NaN;
                }));
              else {
                var v = {};
                v[f] = a, h.selectRange(v);
              }
            });
          H(u, function(f) {
            h.setApproximateExtent(a, f);
          });
        }
      });
      function s(l) {
        return l >= a[0] && l <= a[1];
      }
    }, n.prototype._updateMinMaxSpan = function() {
      var i = this._minMaxSpan = {}, t = this._dataZoomModel, e = this._dataExtent;
      H(["min", "max"], function(o) {
        var r = t.get(o + "Span"), a = t.get(o + "ValueSpan");
        a != null && (a = this.getAxisModel().axis.scale.parse(a)), a != null ? r = C(e[0] + a, e, [0, 100], !0) : r != null && (a = C(r, [0, 100], e, !0) - e[0]), i[o + "Span"] = r, i[o + "ValueSpan"] = a;
      }, this);
    }, n.prototype._setAxisModel = function() {
      var i = this.getAxisModel(), t = this._percentWindow, e = this._valueWindow;
      if (t) {
        var o = xe(e, [0, 500]);
        o = Math.min(o, 20);
        var r = i.axis.scale.rawExtentInfo;
        t[0] !== 0 && r.setDeterminedMinMax("min", +e[0].toFixed(o)), t[1] !== 100 && r.setDeterminedMinMax("max", +e[1].toFixed(o)), r.freeze();
      }
    }, n;
  }()
);
function ti(n, i, t) {
  var e = [1 / 0, -1 / 0];
  H(t, function(a) {
    we(e, a.getData(), i);
  });
  var o = n.getAxisModel(), r = Me(o.axis.scale, o, e).calculate();
  return [r.min, r.max];
}
var ei = {
  // `dataZoomProcessor` will only be performed in needed series. Consider if
  // there is a line series and a pie series, it is better not to update the
  // line series if only pie series is needed to be updated.
  getTargetSeries: function(n) {
    function i(o) {
      n.eachComponent("dataZoom", function(r) {
        r.eachTargetAxis(function(a, s) {
          var l = n.getComponent(Z(a), s);
          o(a, s, l, r);
        });
      });
    }
    i(function(o, r, a, s) {
      a.__dzAxisProxy = null;
    });
    var t = [];
    i(function(o, r, a, s) {
      a.__dzAxisProxy || (a.__dzAxisProxy = new Je(o, r, s, n), t.push(a.__dzAxisProxy));
    });
    var e = E();
    return y(t, function(o) {
      y(o.getTargetSeriesModels(), function(r) {
        e.set(r.uid, r);
      });
    }), e;
  },
  // Consider appendData, where filter should be performed. Because data process is
  // in block mode currently, it is not need to worry about that the overallProgress
  // execute every frame.
  overallReset: function(n, i) {
    n.eachComponent("dataZoom", function(t) {
      t.eachTargetAxis(function(e, o) {
        t.getAxisProxy(e, o).reset(t);
      }), t.eachTargetAxis(function(e, o) {
        t.getAxisProxy(e, o).filterData(t, i);
      });
    }), n.eachComponent("dataZoom", function(t) {
      var e = t.findRepresentativeAxisProxy();
      if (e) {
        var o = e.getDataPercentWindow(), r = e.getDataValueWindow();
        t.setCalculatedRange({
          start: o[0],
          end: o[1],
          startValue: r[0],
          endValue: r[1]
        });
      }
    });
  }
};
function ii(n) {
  n.registerAction("dataZoom", function(i, t) {
    var e = Qe(t, i);
    y(e, function(o) {
      o.setRawRange({
        start: i.start,
        end: i.end,
        startValue: i.startValue,
        endValue: i.endValue
      });
    });
  });
}
var Zt = !1;
function oe(n) {
  Zt || (Zt = !0, n.registerProcessor(n.PRIORITY.PROCESSOR.FILTER, ei), ii(n), n.registerSubTypeDefaulter("dataZoom", function() {
    return "slider";
  }));
}
var ri = (
  /** @class */
  function(n) {
    k(i, n);
    function i() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.type = i.type, t;
    }
    return i.type = "tooltip", i.dependencies = ["axisPointer"], i.defaultOption = {
      // zlevel: 0,
      z: 60,
      show: !0,
      // tooltip main content
      showContent: !0,
      // 'trigger' only works on coordinate system.
      // 'item' | 'axis' | 'none'
      trigger: "item",
      // 'click' | 'mousemove' | 'none'
      triggerOn: "mousemove|click",
      alwaysShowContent: !1,
      displayMode: "single",
      renderMode: "auto",
      // whether restraint content inside viewRect.
      // If renderMode: 'richText', default true.
      // If renderMode: 'html', defaut false (for backward compat).
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      // Animation transition time, unit is second
      transitionDuration: 0.4,
      enterable: !1,
      backgroundColor: "#fff",
      // box shadow
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      // tooltip border radius, unit is px, default is 4
      borderRadius: 4,
      // tooltip border width, unit is px, default is 0 (no border)
      borderWidth: 1,
      // Tooltip inside padding, default is 5 for all direction
      // Array is allowed to set up, right, bottom, left, same with css
      // The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
      padding: null,
      // Extra css text
      extraCssText: "",
      // axis indicator, trigger by axis
      axisPointer: {
        // default is line
        // legal values: 'line' | 'shadow' | 'cross'
        type: "line",
        // Valid when type is line, appoint tooltip line locate on which line. Optional
        // legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
        // default is 'auto', chose the axis which type is category.
        // for multiply y axis, cartesian coord chose x axis, polar chose angle axis
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: "#999",
          width: 1,
          type: "dashed",
          // TODO formatter
          textStyle: {}
        }
        // lineStyle and shadowStyle should not be specified here,
        // otherwise it will always override those styles on option.axisPointer.
      },
      textStyle: {
        color: "#666",
        fontSize: 14
      }
    }, i;
  }(Ut)
);
function ae(n) {
  var i = n.get("confine");
  return i != null ? !!i : n.get("renderMode") === "richText";
}
function ne(n) {
  if (D.domSupported) {
    for (var i = document.documentElement.style, t = 0, e = n.length; t < e; t++)
      if (n[t] in i)
        return n[t];
  }
}
var se = ne(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), oi = ne(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function le(n, i) {
  if (!n)
    return i;
  i = qt(i, !0);
  var t = n.indexOf(i);
  return n = t === -1 ? i : "-" + n.slice(0, t) + "-" + i, n.toLowerCase();
}
function ai(n, i) {
  var t = n.currentStyle || document.defaultView && document.defaultView.getComputedStyle(n);
  return t ? t[i] : null;
}
var ni = le(oi, "transition"), mt = le(se, "transform"), si = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (D.transform3dSupported ? "will-change:transform;" : "");
function li(n) {
  return n = n === "left" ? "right" : n === "right" ? "left" : n === "top" ? "bottom" : "top", n;
}
function hi(n, i, t) {
  if (!L(t) || t === "inside")
    return "";
  var e = n.get("backgroundColor"), o = n.get("borderWidth");
  i = J(i);
  var r = li(t), a = Math.max(Math.round(o) * 1.5, 6), s = "", l = mt + ":", h;
  ct(["left", "right"], r) > -1 ? (s += "top:50%", l += "translateY(-50%) rotate(" + (h = r === "left" ? -225 : -45) + "deg)") : (s += "left:50%", l += "translateX(-50%) rotate(" + (h = r === "top" ? 225 : 45) + "deg)");
  var u = h * Math.PI / 180, d = a + o, p = d * Math.abs(Math.cos(u)) + d * Math.abs(Math.sin(u)), f = Math.round(((p - Math.SQRT2 * o) / 2 + Math.SQRT2 * o - (p - d) / 2) * 100) / 100;
  s += ";" + r + ":-" + f + "px";
  var v = i + " solid " + o + "px;", c = ["position:absolute;width:" + a + "px;height:" + a + "px;z-index:-1;", s + ";" + l + ";", "border-bottom:" + v, "border-right:" + v, "background-color:" + e + ";"];
  return '<div style="' + c.join("") + '"></div>';
}
function ui(n, i) {
  var t = "cubic-bezier(0.23,1,0.32,1)", e = " " + n / 2 + "s " + t, o = "opacity" + e + ",visibility" + e;
  return i || (e = " " + n + "s " + t, o += D.transformSupported ? "," + mt + e : ",left" + e + ",top" + e), ni + ":" + o;
}
function Bt(n, i, t) {
  var e = n.toFixed(0) + "px", o = i.toFixed(0) + "px";
  if (!D.transformSupported)
    return t ? "top:" + o + ";left:" + e + ";" : [["top", o], ["left", e]];
  var r = D.transform3dSupported, a = "translate" + (r ? "3d" : "") + "(" + e + "," + o + (r ? ",0" : "") + ")";
  return t ? "top:0;left:0;" + mt + ":" + a + ";" : [["top", 0], ["left", 0], [se, a]];
}
function di(n) {
  var i = [], t = n.get("fontSize"), e = n.getTextColor();
  e && i.push("color:" + e), i.push("font:" + n.getFont());
  var o = Ce(n.get("lineHeight"), Math.round(t * 3 / 2));
  t && i.push("line-height:" + o + "px");
  var r = n.get("textShadowColor"), a = n.get("textShadowBlur") || 0, s = n.get("textShadowOffsetX") || 0, l = n.get("textShadowOffsetY") || 0;
  return r && a && i.push("text-shadow:" + s + "px " + l + "px " + a + "px " + r), y(["decoration", "align"], function(h) {
    var u = n.get(h);
    u && i.push("text-" + h + ":" + u);
  }), i.join(";");
}
function fi(n, i, t) {
  var e = [], o = n.get("transitionDuration"), r = n.get("backgroundColor"), a = n.get("shadowBlur"), s = n.get("shadowColor"), l = n.get("shadowOffsetX"), h = n.get("shadowOffsetY"), u = n.getModel("textStyle"), d = jt(n, "html"), p = l + "px " + h + "px " + a + "px " + s;
  return e.push("box-shadow:" + p), i && o && e.push(ui(o, t)), r && e.push("background-color:" + r), y(["width", "color", "radius"], function(f) {
    var v = "border-" + f, c = qt(v), m = n.get(c);
    m != null && e.push(v + ":" + m + (f === "color" ? "" : "px"));
  }), e.push(di(u)), d != null && e.push("padding:" + be(d).join("px ") + "px"), e.join(";") + ";";
}
function Et(n, i, t, e, o) {
  var r = i && i.painter;
  if (t) {
    var a = r && r.getViewportRoot();
    a && Te(n, a, t, e, o);
  } else {
    n[0] = e, n[1] = o;
    var s = r && r.getViewportRootOffset();
    s && (n[0] += s.offsetLeft, n[1] += s.offsetTop);
  }
  n[2] = n[0] / i.getWidth(), n[3] = n[1] / i.getHeight();
}
var pi = (
  /** @class */
  function() {
    function n(i, t) {
      if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, D.wxa)
        return null;
      var e = document.createElement("div");
      e.domBelongToZr = !0, this.el = e;
      var o = this._zr = i.getZr(), r = t.appendTo, a = r && (L(r) ? document.querySelector(r) : Mt(r) ? r : Q(r) && r(i.getDom()));
      Et(this._styleCoord, o, a, i.getWidth() / 2, i.getHeight() / 2), (a || i.getDom()).appendChild(e), this._api = i, this._container = a;
      var s = this;
      e.onmouseenter = function() {
        s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
      }, e.onmousemove = function(l) {
        if (l = l || window.event, !s._enterable) {
          var h = o.handler, u = o.painter.getViewportRoot();
          Se(u, l, !0), h.dispatch("mousemove", l);
        }
      }, e.onmouseleave = function() {
        s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
      };
    }
    return n.prototype.update = function(i) {
      if (!this._container) {
        var t = this._api.getDom(), e = ai(t, "position"), o = t.style;
        o.position !== "absolute" && e !== "absolute" && (o.position = "relative");
      }
      var r = i.get("alwaysShowContent");
      r && this._moveIfResized(), this._alwaysShowContent = r, this.el.className = i.get("className") || "";
    }, n.prototype.show = function(i, t) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var e = this.el, o = e.style, r = this._styleCoord;
      e.innerHTML ? o.cssText = si + fi(i, !this._firstShow, this._longHide) + Bt(r[0], r[1], !0) + ("border-color:" + J(t) + ";") + (i.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : o.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
    }, n.prototype.setContent = function(i, t, e, o, r) {
      var a = this.el;
      if (i == null) {
        a.innerHTML = "";
        return;
      }
      var s = "";
      if (L(r) && e.get("trigger") === "item" && !ae(e) && (s = hi(e, o, r)), L(i))
        a.innerHTML = i + s;
      else if (i) {
        a.innerHTML = "", G(i) || (i = [i]);
        for (var l = 0; l < i.length; l++)
          Mt(i[l]) && i[l].parentNode !== a && a.appendChild(i[l]);
        if (s && a.childNodes.length) {
          var h = document.createElement("div");
          h.innerHTML = s, a.appendChild(h);
        }
      }
    }, n.prototype.setEnterable = function(i) {
      this._enterable = i;
    }, n.prototype.getSize = function() {
      var i = this.el;
      return i ? [i.offsetWidth, i.offsetHeight] : [0, 0];
    }, n.prototype.moveTo = function(i, t) {
      if (this.el) {
        var e = this._styleCoord;
        if (Et(e, this._zr, this._container, i, t), e[0] != null && e[1] != null) {
          var o = this.el.style, r = Bt(e[0], e[1]);
          y(r, function(a) {
            o[a[0]] = a[1];
          });
        }
      }
    }, n.prototype._moveIfResized = function() {
      var i = this._styleCoord[2], t = this._styleCoord[3];
      this.moveTo(i * this._zr.getWidth(), t * this._zr.getHeight());
    }, n.prototype.hide = function() {
      var i = this, t = this.el.style;
      t.visibility = "hidden", t.opacity = "0", D.transform3dSupported && (t.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
        return i._longHide = !0;
      }, 500);
    }, n.prototype.hideLater = function(i) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (i ? (this._hideDelay = i, this._show = !1, this._hideTimeout = setTimeout(w(this.hide, this), i)) : this.hide());
    }, n.prototype.isShow = function() {
      return this._show;
    }, n.prototype.dispose = function() {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var i = this.el.parentNode;
      i && i.removeChild(this.el), this.el = this._container = null;
    }, n;
  }()
), vi = (
  /** @class */
  function() {
    function n(i) {
      this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = i.getZr(), Ht(this._styleCoord, this._zr, i.getWidth() / 2, i.getHeight() / 2);
    }
    return n.prototype.update = function(i) {
      var t = i.get("alwaysShowContent");
      t && this._moveIfResized(), this._alwaysShowContent = t;
    }, n.prototype.show = function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
    }, n.prototype.setContent = function(i, t, e, o, r) {
      var a = this;
      Kt(i) && Ae(process.env.NODE_ENV !== "production" ? "Passing DOM nodes as content is not supported in richText tooltip!" : ""), this.el && this._zr.remove(this.el);
      var s = e.getModel("textStyle");
      this.el = new Qt({
        style: {
          rich: t.richTextStyles,
          text: i,
          lineHeight: 22,
          borderWidth: 1,
          borderColor: o,
          textShadowColor: s.get("textShadowColor"),
          fill: e.get(["textStyle", "color"]),
          padding: jt(e, "richText"),
          verticalAlign: "top",
          align: "left"
        },
        z: e.get("z")
      }), y(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(h) {
        a.el.style[h] = e.get(h);
      }), y(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(h) {
        a.el.style[h] = s.get(h) || 0;
      }), this._zr.add(this.el);
      var l = this;
      this.el.on("mouseover", function() {
        l._enterable && (clearTimeout(l._hideTimeout), l._show = !0), l._inContent = !0;
      }), this.el.on("mouseout", function() {
        l._enterable && l._show && l.hideLater(l._hideDelay), l._inContent = !1;
      });
    }, n.prototype.setEnterable = function(i) {
      this._enterable = i;
    }, n.prototype.getSize = function() {
      var i = this.el, t = this.el.getBoundingRect(), e = Vt(i.style);
      return [t.width + e.left + e.right, t.height + e.top + e.bottom];
    }, n.prototype.moveTo = function(i, t) {
      var e = this.el;
      if (e) {
        var o = this._styleCoord;
        Ht(o, this._zr, i, t), i = o[0], t = o[1];
        var r = e.style, a = z(r.borderWidth || 0), s = Vt(r);
        e.x = i + a + s.left, e.y = t + a + s.top, e.markRedraw();
      }
    }, n.prototype._moveIfResized = function() {
      var i = this._styleCoord[2], t = this._styleCoord[3];
      this.moveTo(i * this._zr.getWidth(), t * this._zr.getHeight());
    }, n.prototype.hide = function() {
      this.el && this.el.hide(), this._show = !1;
    }, n.prototype.hideLater = function(i) {
      this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent && (i ? (this._hideDelay = i, this._show = !1, this._hideTimeout = setTimeout(w(this.hide, this), i)) : this.hide());
    }, n.prototype.isShow = function() {
      return this._show;
    }, n.prototype.dispose = function() {
      this._zr.remove(this.el);
    }, n;
  }()
);
function z(n) {
  return Math.max(0, n);
}
function Vt(n) {
  var i = z(n.shadowBlur || 0), t = z(n.shadowOffsetX || 0), e = z(n.shadowOffsetY || 0);
  return {
    left: z(i - t),
    right: z(i + t),
    top: z(i - e),
    bottom: z(i + e)
  };
}
function Ht(n, i, t, e) {
  n[0] = t, n[1] = e, n[2] = n[0] / i.getWidth(), n[3] = n[1] / i.getHeight();
}
var ci = new U({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
}), gi = (
  /** @class */
  function(n) {
    k(i, n);
    function i() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.type = i.type, t;
    }
    return i.prototype.init = function(t, e) {
      if (!(D.node || !e.getDom())) {
        var o = t.getComponent("tooltip"), r = this._renderMode = De(o.get("renderMode"));
        this._tooltipContent = r === "richText" ? new vi(e) : new pi(e, {
          appendTo: o.get("appendToBody", !0) ? "body" : o.get("appendTo", !0)
        });
      }
    }, i.prototype.render = function(t, e, o) {
      if (!(D.node || !o.getDom())) {
        this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = o;
        var r = this._tooltipContent;
        r.update(t), r.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && t.get("transitionDuration") ? gt(this, "_updatePosition", 50, "fixRate") : pt(this, "_updatePosition");
      }
    }, i.prototype._initGlobalListener = function() {
      var t = this._tooltipModel, e = t.get("triggerOn");
      ue("itemTooltip", this._api, w(function(o, r, a) {
        e !== "none" && (e.indexOf(o) >= 0 ? this._tryShow(r, a) : o === "leave" && this._hide(a));
      }, this));
    }, i.prototype._keepShow = function() {
      var t = this._tooltipModel, e = this._ecModel, o = this._api, r = t.get("triggerOn");
      if (this._lastX != null && this._lastY != null && r !== "none" && r !== "click") {
        var a = this;
        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
          !o.isDisposed() && a.manuallyShowTip(t, e, o, {
            x: a._lastX,
            y: a._lastY,
            dataByCoordSys: a._lastDataByCoordSys
          });
        });
      }
    }, i.prototype.manuallyShowTip = function(t, e, o, r) {
      if (!(r.from === this.uid || D.node || !o.getDom())) {
        var a = Wt(r, o);
        this._ticket = "";
        var s = r.dataByCoordSys, l = xi(r, e, o);
        if (l) {
          var h = l.el.getBoundingRect().clone();
          h.applyTransform(l.el.transform), this._tryShow({
            offsetX: h.x + h.width / 2,
            offsetY: h.y + h.height / 2,
            target: l.el,
            position: r.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, a);
        } else if (r.tooltip && r.x != null && r.y != null) {
          var u = ci;
          u.x = r.x, u.y = r.y, u.update(), B(u).tooltipConfig = {
            name: null,
            option: r.tooltip
          }, this._tryShow({
            offsetX: r.x,
            offsetY: r.y,
            target: u
          }, a);
        } else if (s)
          this._tryShow({
            offsetX: r.x,
            offsetY: r.y,
            position: r.position,
            dataByCoordSys: s,
            tooltipOption: r.tooltipOption
          }, a);
        else if (r.seriesIndex != null) {
          if (this._manuallyAxisShowTip(t, e, o, r))
            return;
          var d = de(r, e), p = d.point[0], f = d.point[1];
          p != null && f != null && this._tryShow({
            offsetX: p,
            offsetY: f,
            target: d.el,
            position: r.position,
            // When manully trigger, the mouse is not on the el, so we'd better to
            // position tooltip on the bottom of the el and display arrow is possible.
            positionDefault: "bottom"
          }, a);
        } else r.x != null && r.y != null && (o.dispatchAction({
          type: "updateAxisPointer",
          x: r.x,
          y: r.y
        }), this._tryShow({
          offsetX: r.x,
          offsetY: r.y,
          position: r.position,
          target: o.getZr().findHover(r.x, r.y).target
        }, a));
      }
    }, i.prototype.manuallyHideTip = function(t, e, o, r) {
      var a = this._tooltipContent;
      this._tooltipModel && a.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, r.from !== this.uid && this._hide(Wt(r, o));
    }, i.prototype._manuallyAxisShowTip = function(t, e, o, r) {
      var a = r.seriesIndex, s = r.dataIndex, l = e.getComponent("axisPointer").coordSysAxesInfo;
      if (!(a == null || s == null || l == null)) {
        var h = e.getSeriesByIndex(a);
        if (h) {
          var u = h.getData(), d = N([u.getItemModel(s), h, (h.coordinateSystem || {}).model], this._tooltipModel);
          if (d.get("trigger") === "axis")
            return o.dispatchAction({
              type: "updateAxisPointer",
              seriesIndex: a,
              dataIndex: s,
              position: r.position
            }), !0;
        }
      }
    }, i.prototype._tryShow = function(t, e) {
      var o = t.target, r = this._tooltipModel;
      if (r) {
        this._lastX = t.offsetX, this._lastY = t.offsetY;
        var a = t.dataByCoordSys;
        if (a && a.length)
          this._showAxisTooltip(a, t);
        else if (o) {
          var s = B(o);
          if (s.ssrType === "legend")
            return;
          this._lastDataByCoordSys = null;
          var l, h;
          Re(o, function(u) {
            if (B(u).dataIndex != null)
              return l = u, !0;
            if (B(u).tooltipConfig != null)
              return h = u, !0;
          }, !0), l ? this._showSeriesItemTooltip(t, l, e) : h ? this._showComponentItemTooltip(t, h, e) : this._hide(e);
        } else
          this._lastDataByCoordSys = null, this._hide(e);
      }
    }, i.prototype._showOrMove = function(t, e) {
      var o = t.get("showDelay");
      e = w(e, this), clearTimeout(this._showTimout), o > 0 ? this._showTimout = setTimeout(e, o) : e();
    }, i.prototype._showAxisTooltip = function(t, e) {
      var o = this._ecModel, r = this._tooltipModel, a = [e.offsetX, e.offsetY], s = N([e.tooltipOption], r), l = this._renderMode, h = [], u = St("section", {
        blocks: [],
        noHeader: !0
      }), d = [], p = new rt();
      y(t, function(_) {
        y(_.dataByAxis, function(x) {
          var M = o.getComponent(x.axisDim + "Axis", x.axisIndex), S = x.value;
          if (!(!M || S == null)) {
            var A = fe(S, M.axis, o, x.seriesDataIndices, x.valueLabelOpt), R = St("section", {
              header: A,
              noHeader: !Ie(A),
              sortBlocks: !0,
              blocks: []
            });
            u.blocks.push(R), y(x.seriesDataIndices, function(I) {
              var b = o.getSeriesByIndex(I.seriesIndex), O = I.dataIndexInside, T = b.getDataParams(O);
              if (!(T.dataIndex < 0)) {
                T.axisDim = x.axisDim, T.axisIndex = x.axisIndex, T.axisType = x.axisType, T.axisId = x.axisId, T.axisValue = Oe(M.axis, {
                  value: S
                }), T.axisValueLabel = A, T.marker = p.makeTooltipMarker("item", J(T.color), l);
                var P = Tt(b.formatTooltip(O, !0, null)), W = P.frag;
                if (W) {
                  var yt = N([b], r).get("valueFormatter");
                  R.blocks.push(yt ? Ct({
                    valueFormatter: yt
                  }, W) : W);
                }
                P.text && d.push(P.text), h.push(T);
              }
            });
          }
        });
      }), u.blocks.reverse(), d.reverse();
      var f = e.position, v = s.get("order"), c = bt(u, p, l, v, o.get("useUTC"), s.get("textStyle"));
      c && d.unshift(c);
      var m = l === "richText" ? `

` : "<br/>", g = d.join(m);
      this._showOrMove(s, function() {
        this._updateContentNotChangedOnAxis(t, h) ? this._updatePosition(s, f, a[0], a[1], this._tooltipContent, h) : this._showTooltipContent(s, g, h, Math.random() + "", a[0], a[1], f, null, p);
      });
    }, i.prototype._showSeriesItemTooltip = function(t, e, o) {
      var r = this._ecModel, a = B(e), s = a.seriesIndex, l = r.getSeriesByIndex(s), h = a.dataModel || l, u = a.dataIndex, d = a.dataType, p = h.getData(d), f = this._renderMode, v = t.positionDefault, c = N([p.getItemModel(u), h, l && (l.coordinateSystem || {}).model], this._tooltipModel, v ? {
        position: v
      } : null), m = c.get("trigger");
      if (!(m != null && m !== "item")) {
        var g = h.getDataParams(u, d), _ = new rt();
        g.marker = _.makeTooltipMarker("item", J(g.color), f);
        var x = Tt(h.formatTooltip(u, !1, d)), M = c.get("order"), S = c.get("valueFormatter"), A = x.frag, R = A ? bt(S ? Ct({
          valueFormatter: S
        }, A) : A, _, f, M, r.get("useUTC"), c.get("textStyle")) : x.text, I = "item_" + h.name + "_" + u;
        this._showOrMove(c, function() {
          this._showTooltipContent(c, R, g, I, t.offsetX, t.offsetY, t.position, t.target, _);
        }), o({
          type: "showTip",
          dataIndexInside: u,
          dataIndex: p.getRawIndex(u),
          seriesIndex: s,
          from: this.uid
        });
      }
    }, i.prototype._showComponentItemTooltip = function(t, e, o) {
      var r = this._renderMode === "html", a = B(e), s = a.tooltipConfig, l = s.option || {}, h = l.encodeHTMLContent;
      if (L(l)) {
        var u = l;
        l = {
          content: u,
          // Fixed formatter
          formatter: u
        }, h = !0;
      }
      h && r && l.content && (l = j(l), l.content = Le(l.content));
      var d = [l], p = this._ecModel.getComponent(a.componentMainType, a.componentIndex);
      p && d.push(p), d.push({
        formatter: l.content
      });
      var f = t.positionDefault, v = N(d, this._tooltipModel, f ? {
        position: f
      } : null), c = v.get("content"), m = Math.random() + "", g = new rt();
      this._showOrMove(v, function() {
        var _ = j(v.get("formatterParams") || {});
        this._showTooltipContent(v, c, _, m, t.offsetX, t.offsetY, t.position, e, g);
      }), o({
        type: "showTip",
        from: this.uid
      });
    }, i.prototype._showTooltipContent = function(t, e, o, r, a, s, l, h, u) {
      if (this._ticket = "", !(!t.get("showContent") || !t.get("show"))) {
        var d = this._tooltipContent;
        d.setEnterable(t.get("enterable"));
        var p = t.get("formatter");
        l = l || t.get("position");
        var f = e, v = this._getNearestPoint([a, s], o, t.get("trigger"), t.get("borderColor")), c = v.color;
        if (p)
          if (L(p)) {
            var m = t.ecModel.get("useUTC"), g = G(o) ? o[0] : o, _ = g && g.axisType && g.axisType.indexOf("time") >= 0;
            f = p, _ && (f = ke(g.axisValue, f, m)), f = Pe(f, o, !0);
          } else if (Q(p)) {
            var x = w(function(M, S) {
              M === this._ticket && (d.setContent(S, u, t, c, l), this._updatePosition(t, l, a, s, d, o, h));
            }, this);
            this._ticket = r, f = p(o, r, x);
          } else
            f = p;
        d.setContent(f, u, t, c, l), d.show(t, c), this._updatePosition(t, l, a, s, d, o, h);
      }
    }, i.prototype._getNearestPoint = function(t, e, o, r) {
      if (o === "axis" || G(e))
        return {
          color: r || (this._renderMode === "html" ? "#fff" : "none")
        };
      if (!G(e))
        return {
          color: r || e.color || e.borderColor
        };
    }, i.prototype._updatePosition = function(t, e, o, r, a, s, l) {
      var h = this._api.getWidth(), u = this._api.getHeight();
      e = e || t.get("position");
      var d = a.getSize(), p = t.get("align"), f = t.get("verticalAlign"), v = l && l.getBoundingRect().clone();
      if (l && v.applyTransform(l.transform), Q(e) && (e = e([o, r], s, a.el, v, {
        viewSize: [h, u],
        contentSize: d.slice()
      })), G(e))
        o = tt(e[0], h), r = tt(e[1], u);
      else if (Kt(e)) {
        var c = e;
        c.width = d[0], c.height = d[1];
        var m = Jt(c, {
          width: h,
          height: u
        });
        o = m.x, r = m.y, p = null, f = null;
      } else if (L(e) && l) {
        var g = yi(e, v, d, t.get("borderWidth"));
        o = g[0], r = g[1];
      } else {
        var g = mi(o, r, a, h, u, p ? null : 20, f ? null : 20);
        o = g[0], r = g[1];
      }
      if (p && (o -= Nt(p) ? d[0] / 2 : p === "right" ? d[0] : 0), f && (r -= Nt(f) ? d[1] / 2 : f === "bottom" ? d[1] : 0), ae(t)) {
        var g = _i(o, r, a, h, u);
        o = g[0], r = g[1];
      }
      a.moveTo(o, r);
    }, i.prototype._updateContentNotChangedOnAxis = function(t, e) {
      var o = this._lastDataByCoordSys, r = this._cbParamsList, a = !!o && o.length === t.length;
      return a && y(o, function(s, l) {
        var h = s.dataByAxis || [], u = t[l] || {}, d = u.dataByAxis || [];
        a = a && h.length === d.length, a && y(h, function(p, f) {
          var v = d[f] || {}, c = p.seriesDataIndices || [], m = v.seriesDataIndices || [];
          a = a && p.value === v.value && p.axisType === v.axisType && p.axisId === v.axisId && c.length === m.length, a && y(c, function(g, _) {
            var x = m[_];
            a = a && g.seriesIndex === x.seriesIndex && g.dataIndex === x.dataIndex;
          }), r && y(p.seriesDataIndices, function(g) {
            var _ = g.seriesIndex, x = e[_], M = r[_];
            x && M && M.data !== x.data && (a = !1);
          });
        });
      }), this._lastDataByCoordSys = t, this._cbParamsList = e, !!a;
    }, i.prototype._hide = function(t) {
      this._lastDataByCoordSys = null, t({
        type: "hideTip",
        from: this.uid
      });
    }, i.prototype.dispose = function(t, e) {
      D.node || !e.getDom() || (pt(this, "_updatePosition"), this._tooltipContent.dispose(), pe("itemTooltip", e));
    }, i.type = "tooltip", i;
  }($t)
);
function N(n, i, t) {
  var e = i.ecModel, o;
  t ? (o = new $(t, e, e), o = new $(i.option, o, e)) : o = i;
  for (var r = n.length - 1; r >= 0; r--) {
    var a = n[r];
    a && (a instanceof $ && (a = a.get("tooltip", !0)), L(a) && (a = {
      formatter: a
    }), a && (o = new $(a, o, e)));
  }
  return o;
}
function Wt(n, i) {
  return n.dispatchAction || w(i.dispatchAction, i);
}
function mi(n, i, t, e, o, r, a) {
  var s = t.getSize(), l = s[0], h = s[1];
  return r != null && (n + l + r + 2 > e ? n -= l + r : n += r), a != null && (i + h + a > o ? i -= h + a : i += a), [n, i];
}
function _i(n, i, t, e, o) {
  var r = t.getSize(), a = r[0], s = r[1];
  return n = Math.min(n + a, e) - a, i = Math.min(i + s, o) - s, n = Math.max(n, 0), i = Math.max(i, 0), [n, i];
}
function yi(n, i, t, e) {
  var o = t[0], r = t[1], a = Math.ceil(Math.SQRT2 * e) + 8, s = 0, l = 0, h = i.width, u = i.height;
  switch (n) {
    case "inside":
      s = i.x + h / 2 - o / 2, l = i.y + u / 2 - r / 2;
      break;
    case "top":
      s = i.x + h / 2 - o / 2, l = i.y - r - a;
      break;
    case "bottom":
      s = i.x + h / 2 - o / 2, l = i.y + u + a;
      break;
    case "left":
      s = i.x - o - a, l = i.y + u / 2 - r / 2;
      break;
    case "right":
      s = i.x + h + a, l = i.y + u / 2 - r / 2;
  }
  return [s, l];
}
function Nt(n) {
  return n === "center" || n === "middle";
}
function xi(n, i, t) {
  var e = ze(n).queryOptionMap, o = e.keys()[0];
  if (!(!o || o === "series")) {
    var r = Ze(i, o, e.get(o), {
      useDefault: !1,
      enableAll: !1,
      enableNone: !1
    }), a = r.models[0];
    if (a) {
      var s = t.getViewOfComponentModel(a), l;
      if (s.group.traverse(function(h) {
        var u = B(h).tooltipConfig;
        if (u && u.name === n.name)
          return l = h, !0;
      }), l)
        return {
          componentMainType: o,
          componentIndex: a.componentIndex,
          el: l
        };
    }
  }
}
function Ni(n) {
  vt(ve), n.registerComponentModel(ri), n.registerComponentView(gi), n.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, ut), n.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, ut);
}
var wi = (
  /** @class */
  function(n) {
    k(i, n);
    function i() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.type = i.type, t;
    }
    return i.type = "dataZoom.inside", i.defaultOption = te(et.defaultOption, {
      disabled: !1,
      zoomLock: !1,
      zoomOnMouseWheel: !0,
      moveOnMouseMove: !0,
      moveOnMouseWheel: !1,
      preventDefaultMouseMove: !0
    }), i;
  }(et)
), _t = Be();
function Mi(n, i, t) {
  _t(n).coordSysRecordMap.each(function(e) {
    var o = e.dataZoomInfoMap.get(i.uid);
    o && (o.getRange = t);
  });
}
function Si(n, i) {
  for (var t = _t(n).coordSysRecordMap, e = t.keys(), o = 0; o < e.length; o++) {
    var r = e[o], a = t.get(r), s = a.dataZoomInfoMap;
    if (s) {
      var l = i.uid, h = s.get(l);
      h && (s.removeKey(l), s.keys().length || he(t, a));
    }
  }
}
function he(n, i) {
  if (i) {
    n.removeKey(i.model.uid);
    var t = i.controller;
    t && t.dispose();
  }
}
function Ti(n, i) {
  var t = {
    model: i,
    containsPoint: At(Ci, i),
    dispatchAction: At(bi, n),
    dataZoomInfoMap: null,
    controller: null
  }, e = t.controller = new qe(n.getZr());
  return y(["pan", "zoom", "scrollMove"], function(o) {
    e.on(o, function(r) {
      var a = [];
      t.dataZoomInfoMap.each(function(s) {
        if (r.isAvailableBehavior(s.model.option)) {
          var l = (s.getRange || {})[o], h = l && l(s.dzReferCoordSysInfo, t.model.mainType, t.controller, r);
          !s.model.get("disabled", !0) && h && a.push({
            dataZoomId: s.model.id,
            start: h[0],
            end: h[1]
          });
        }
      }), a.length && t.dispatchAction(a);
    });
  }), t;
}
function bi(n, i) {
  n.isDisposed() || n.dispatchAction({
    type: "dataZoom",
    animation: {
      easing: "cubicOut",
      duration: 100
    },
    batch: i
  });
}
function Ci(n, i, t, e) {
  return n.coordinateSystem.containPoint([t, e]);
}
function Ai(n) {
  var i, t = "type_", e = {
    type_true: 2,
    type_move: 1,
    type_false: 0,
    type_undefined: -1
  }, o = !0;
  return n.each(function(r) {
    var a = r.model, s = a.get("disabled", !0) ? !1 : a.get("zoomLock", !0) ? "move" : !0;
    e[t + s] > e[t + i] && (i = s), o = o && a.get("preventDefaultMouseMove", !0);
  }), {
    controlType: i,
    opt: {
      // RoamController will enable all of these functionalities,
      // and the final behavior is determined by its event listener
      // provided by each inside zoom.
      zoomOnMouseWheel: !0,
      moveOnMouseMove: !0,
      moveOnMouseWheel: !0,
      preventDefaultMouseMove: !!o
    }
  };
}
function Di(n) {
  n.registerProcessor(n.PRIORITY.PROCESSOR.FILTER, function(i, t) {
    var e = _t(t), o = e.coordSysRecordMap || (e.coordSysRecordMap = E());
    o.each(function(r) {
      r.dataZoomInfoMap = null;
    }), i.eachComponent({
      mainType: "dataZoom",
      subType: "inside"
    }, function(r) {
      var a = ie(r);
      y(a.infoList, function(s) {
        var l = s.model.uid, h = o.get(l) || o.set(l, Ti(t, s.model)), u = h.dataZoomInfoMap || (h.dataZoomInfoMap = E());
        u.set(r.uid, {
          dzReferCoordSysInfo: s,
          model: r,
          getRange: null
        });
      });
    }), o.each(function(r) {
      var a = r.controller, s, l = r.dataZoomInfoMap;
      if (l) {
        var h = l.keys()[0];
        h != null && (s = l.get(h));
      }
      if (!s) {
        he(o, r);
        return;
      }
      var u = Ai(l);
      a.enable(u.controlType, u.opt), a.setPointerChecker(r.containsPoint), gt(r, "dispatchAction", s.model.get("throttle", !0), "fixRate");
    });
  });
}
var Ri = (
  /** @class */
  function(n) {
    k(i, n);
    function i() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.type = "dataZoom.inside", t;
    }
    return i.prototype.render = function(t, e, o) {
      if (n.prototype.render.apply(this, arguments), t.noTarget()) {
        this._clear();
        return;
      }
      this.range = t.getPercentRange(), Mi(o, t, {
        pan: w(st.pan, this),
        zoom: w(st.zoom, this),
        scrollMove: w(st.scrollMove, this)
      });
    }, i.prototype.dispose = function() {
      this._clear(), n.prototype.dispose.apply(this, arguments);
    }, i.prototype._clear = function() {
      Si(this.api, this.dataZoomModel), this.range = null;
    }, i.type = "dataZoom.inside", i;
  }(re)
), st = {
  zoom: function(n, i, t, e) {
    var o = this.range, r = o.slice(), a = n.axisModels[0];
    if (a) {
      var s = lt[i](null, [e.originX, e.originY], a, t, n), l = (s.signal > 0 ? s.pixelStart + s.pixelLength - s.pixel : s.pixel - s.pixelStart) / s.pixelLength * (r[1] - r[0]) + r[0], h = Math.max(1 / e.scale, 0);
      r[0] = (r[0] - l) * h + l, r[1] = (r[1] - l) * h + l;
      var u = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
      if (it(0, r, [0, 100], 0, u.minSpan, u.maxSpan), this.range = r, o[0] !== r[0] || o[1] !== r[1])
        return r;
    }
  },
  pan: Yt(function(n, i, t, e, o, r) {
    var a = lt[e]([r.oldX, r.oldY], [r.newX, r.newY], i, o, t);
    return a.signal * (n[1] - n[0]) * a.pixel / a.pixelLength;
  }),
  scrollMove: Yt(function(n, i, t, e, o, r) {
    var a = lt[e]([0, 0], [r.scrollDelta, r.scrollDelta], i, o, t);
    return a.signal * (n[1] - n[0]) * r.scrollDelta;
  })
};
function Yt(n) {
  return function(i, t, e, o) {
    var r = this.range, a = r.slice(), s = i.axisModels[0];
    if (s) {
      var l = n(a, s, i, t, e, o);
      if (it(l, a, [0, 100], "all"), this.range = a, r[0] !== a[0] || r[1] !== a[1])
        return a;
    }
  };
}
var lt = {
  grid: function(n, i, t, e, o) {
    var r = t.axis, a = {}, s = o.model.coordinateSystem.getRect();
    return n = n || [0, 0], r.dim === "x" ? (a.pixel = i[0] - n[0], a.pixelLength = s.width, a.pixelStart = s.x, a.signal = r.inverse ? 1 : -1) : (a.pixel = i[1] - n[1], a.pixelLength = s.height, a.pixelStart = s.y, a.signal = r.inverse ? -1 : 1), a;
  },
  polar: function(n, i, t, e, o) {
    var r = t.axis, a = {}, s = o.model.coordinateSystem, l = s.getRadiusAxis().getExtent(), h = s.getAngleAxis().getExtent();
    return n = n ? s.pointToCoord(n) : [0, 0], i = s.pointToCoord(i), t.mainType === "radiusAxis" ? (a.pixel = i[0] - n[0], a.pixelLength = l[1] - l[0], a.pixelStart = l[0], a.signal = r.inverse ? 1 : -1) : (a.pixel = i[1] - n[1], a.pixelLength = h[1] - h[0], a.pixelStart = h[0], a.signal = r.inverse ? -1 : 1), a;
  },
  singleAxis: function(n, i, t, e, o) {
    var r = t.axis, a = o.model.coordinateSystem.getRect(), s = {};
    return n = n || [0, 0], r.orient === "horizontal" ? (s.pixel = i[0] - n[0], s.pixelLength = a.width, s.pixelStart = a.x, s.signal = r.inverse ? 1 : -1) : (s.pixel = i[1] - n[1], s.pixelLength = a.height, s.pixelStart = a.y, s.signal = r.inverse ? -1 : 1), s;
  }
};
function Ii(n) {
  oe(n), n.registerComponentModel(wi), n.registerComponentView(Ri), Di(n);
}
var Oi = (
  /** @class */
  function(n) {
    k(i, n);
    function i() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.type = i.type, t;
    }
    return i.type = "dataZoom.slider", i.layoutMode = "box", i.defaultOption = te(et.defaultOption, {
      show: !0,
      // deault value can only be drived in view stage.
      right: "ph",
      top: "ph",
      width: "ph",
      height: "ph",
      left: null,
      bottom: null,
      borderColor: "#d2dbee",
      borderRadius: 3,
      backgroundColor: "rgba(47,69,84,0)",
      // dataBackgroundColor: '#ddd',
      dataBackground: {
        lineStyle: {
          color: "#d2dbee",
          width: 0.5
        },
        areaStyle: {
          color: "#d2dbee",
          opacity: 0.2
        }
      },
      selectedDataBackground: {
        lineStyle: {
          color: "#8fb0f7",
          width: 0.5
        },
        areaStyle: {
          color: "#8fb0f7",
          opacity: 0.2
        }
      },
      // Color of selected window.
      fillerColor: "rgba(135,175,274,0.2)",
      handleIcon: "path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z",
      // Percent of the slider height
      handleSize: "100%",
      handleStyle: {
        color: "#fff",
        borderColor: "#ACB8D1"
      },
      moveHandleSize: 7,
      moveHandleIcon: "path://M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z",
      moveHandleStyle: {
        color: "#D2DBEE",
        opacity: 0.7
      },
      showDetail: !0,
      showDataShadow: "auto",
      realtime: !0,
      zoomLock: !1,
      textStyle: {
        color: "#6E7079"
      },
      brushSelect: !0,
      brushStyle: {
        color: "rgba(135,175,274,0.15)"
      },
      emphasis: {
        handleLabel: {
          show: !0
        },
        handleStyle: {
          borderColor: "#8FB0F7"
        },
        moveHandleStyle: {
          color: "#8FB0F7"
        }
      }
    }), i;
  }(et)
), Y = U, Xt = 7, Li = 1, ht = 30, ki = 7, X = "horizontal", Ft = "vertical", Pi = 5, zi = ["line", "bar", "candlestick", "scatter"], Zi = {
  easing: "cubicOut",
  duration: 100,
  delay: 0
}, Bi = (
  /** @class */
  function(n) {
    k(i, n);
    function i() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.type = i.type, t._displayables = {}, t;
    }
    return i.prototype.init = function(t, e) {
      this.api = e, this._onBrush = w(this._onBrush, this), this._onBrushEnd = w(this._onBrushEnd, this);
    }, i.prototype.render = function(t, e, o, r) {
      if (n.prototype.render.apply(this, arguments), gt(this, "_dispatchZoomAction", t.get("throttle"), "fixRate"), this._orient = t.getOrient(), t.get("show") === !1) {
        this.group.removeAll();
        return;
      }
      if (t.noTarget()) {
        this._clear(), this.group.removeAll();
        return;
      }
      (!r || r.type !== "dataZoom" || r.from !== this.uid) && this._buildView(), this._updateView();
    }, i.prototype.dispose = function() {
      this._clear(), n.prototype.dispose.apply(this, arguments);
    }, i.prototype._clear = function() {
      pt(this, "_dispatchZoomAction");
      var t = this.api.getZr();
      t.off("mousemove", this._onBrush), t.off("mouseup", this._onBrushEnd);
    }, i.prototype._buildView = function() {
      var t = this.group;
      t.removeAll(), this._brushing = !1, this._displayables.brushRect = null, this._resetLocation(), this._resetInterval();
      var e = this._displayables.sliderGroup = new Dt();
      this._renderBackground(), this._renderHandle(), this._renderDataShadow(), t.add(e), this._positionGroup();
    }, i.prototype._resetLocation = function() {
      var t = this.dataZoomModel, e = this.api, o = t.get("brushSelect"), r = o ? ki : 0, a = this._findCoordRect(), s = {
        width: e.getWidth(),
        height: e.getHeight()
      }, l = this._orient === X ? {
        // Why using 'right', because right should be used in vertical,
        // and it is better to be consistent for dealing with position param merge.
        right: s.width - a.x - a.width,
        top: s.height - ht - Xt - r,
        width: a.width,
        height: ht
      } : {
        right: Xt,
        top: a.y,
        width: ht,
        height: a.height
      }, h = Ee(t.option);
      y(["right", "top", "width", "height"], function(d) {
        h[d] === "ph" && (h[d] = l[d]);
      });
      var u = Jt(h, s);
      this._location = {
        x: u.x,
        y: u.y
      }, this._size = [u.width, u.height], this._orient === Ft && this._size.reverse();
    }, i.prototype._positionGroup = function() {
      var t = this.group, e = this._location, o = this._orient, r = this.dataZoomModel.getFirstTargetAxisModel(), a = r && r.get("inverse"), s = this._displayables.sliderGroup, l = (this._dataShadowInfo || {}).otherAxisInverse;
      s.attr(o === X && !a ? {
        scaleY: l ? 1 : -1,
        scaleX: 1
      } : o === X && a ? {
        scaleY: l ? 1 : -1,
        scaleX: -1
      } : o === Ft && !a ? {
        scaleY: l ? -1 : 1,
        scaleX: 1,
        rotation: Math.PI / 2
      } : {
        scaleY: l ? -1 : 1,
        scaleX: -1,
        rotation: Math.PI / 2
      });
      var h = t.getBoundingRect([s]);
      t.x = e.x - h.x, t.y = e.y - h.y, t.markRedraw();
    }, i.prototype._getViewExtent = function() {
      return [0, this._size[0]];
    }, i.prototype._renderBackground = function() {
      var t = this.dataZoomModel, e = this._size, o = this._displayables.sliderGroup, r = t.get("brushSelect");
      o.add(new Y({
        silent: !0,
        shape: {
          x: 0,
          y: 0,
          width: e[0],
          height: e[1]
        },
        style: {
          fill: t.get("backgroundColor")
        },
        z2: -40
      }));
      var a = new Y({
        shape: {
          x: 0,
          y: 0,
          width: e[0],
          height: e[1]
        },
        style: {
          fill: "transparent"
        },
        z2: 0,
        onclick: w(this._onClickPanel, this)
      }), s = this.api.getZr();
      r ? (a.on("mousedown", this._onBrushStart, this), a.cursor = "crosshair", s.on("mousemove", this._onBrush), s.on("mouseup", this._onBrushEnd)) : (s.off("mousemove", this._onBrush), s.off("mouseup", this._onBrushEnd)), o.add(a);
    }, i.prototype._renderDataShadow = function() {
      var t = this._dataShadowInfo = this._prepareDataShadowInfo();
      if (this._displayables.dataShadowSegs = [], !t)
        return;
      var e = this._size, o = this._shadowSize || [], r = t.series, a = r.getRawData(), s = r.getShadowDim && r.getShadowDim(), l = s && a.getDimensionInfo(s) ? r.getShadowDim() : t.otherDim;
      if (l == null)
        return;
      var h = this._shadowPolygonPts, u = this._shadowPolylinePts;
      if (a !== this._shadowData || l !== this._shadowDim || e[0] !== o[0] || e[1] !== o[1]) {
        var d = a.getDataExtent(l), p = (d[1] - d[0]) * 0.3;
        d = [d[0] - p, d[1] + p];
        var f = [0, e[1]], v = [0, e[0]], c = [[e[0], 0], [0, 0]], m = [], g = v[1] / (a.count() - 1), _ = 0, x = Math.round(a.count() / e[0]), M;
        a.each([l], function(b, O) {
          if (x > 0 && O % x) {
            _ += g;
            return;
          }
          var T = b == null || isNaN(b) || b === "", P = T ? 0 : C(b, d, f, !0);
          T && !M && O ? (c.push([c[c.length - 1][0], 0]), m.push([m[m.length - 1][0], 0])) : !T && M && (c.push([_, 0]), m.push([_, 0])), c.push([_, P]), m.push([_, P]), _ += g, M = T;
        }), h = this._shadowPolygonPts = c, u = this._shadowPolylinePts = m;
      }
      this._shadowData = a, this._shadowDim = l, this._shadowSize = [e[0], e[1]];
      var S = this.dataZoomModel;
      function A(b) {
        var O = S.getModel(b ? "selectedDataBackground" : "dataBackground"), T = new Dt(), P = new Ge({
          shape: {
            points: h
          },
          segmentIgnoreThreshold: 1,
          style: O.getModel("areaStyle").getAreaStyle(),
          silent: !0,
          z2: -20
        }), W = new Ue({
          shape: {
            points: u
          },
          segmentIgnoreThreshold: 1,
          style: O.getModel("lineStyle").getLineStyle(),
          silent: !0,
          z2: -19
        });
        return T.add(P), T.add(W), T;
      }
      for (var R = 0; R < 3; R++) {
        var I = A(R === 1);
        this._displayables.sliderGroup.add(I), this._displayables.dataShadowSegs.push(I);
      }
    }, i.prototype._prepareDataShadowInfo = function() {
      var t = this.dataZoomModel, e = t.get("showDataShadow");
      if (e !== !1) {
        var o, r = this.ecModel;
        return t.eachTargetAxis(function(a, s) {
          var l = t.getAxisProxy(a, s).getTargetSeriesModels();
          y(l, function(h) {
            if (!o && !(e !== !0 && ct(zi, h.get("type")) < 0)) {
              var u = r.getComponent(Z(a), s).axis, d = Ei(a), p, f = h.coordinateSystem;
              d != null && f.getOtherAxis && (p = f.getOtherAxis(u).inverse), d = h.getData().mapDimension(d), o = {
                thisAxis: u,
                series: h,
                thisDim: a,
                otherDim: d,
                otherAxisInverse: p
              };
            }
          }, this);
        }, this), o;
      }
    }, i.prototype._renderHandle = function() {
      var t = this.group, e = this._displayables, o = e.handles = [null, null], r = e.handleLabels = [null, null], a = this._displayables.sliderGroup, s = this._size, l = this.dataZoomModel, h = this.api, u = l.get("borderRadius") || 0, d = l.get("brushSelect"), p = e.filler = new Y({
        silent: d,
        style: {
          fill: l.get("fillerColor")
        },
        textConfig: {
          position: "inside"
        }
      });
      a.add(p), a.add(new Y({
        silent: !0,
        subPixelOptimize: !0,
        shape: {
          x: 0,
          y: 0,
          width: s[0],
          height: s[1],
          r: u
        },
        style: {
          // deprecated option
          stroke: l.get("dataBackgroundColor") || l.get("borderColor"),
          lineWidth: Li,
          fill: "rgba(0,0,0,0)"
        }
      })), y([0, 1], function(x) {
        var M = l.get("handleIcon");
        !Ve[M] && M.indexOf("path://") < 0 && M.indexOf("image://") < 0 && (M = "path://" + M, process.env.NODE_ENV !== "production" && He("handleIcon now needs 'path://' prefix when using a path string"));
        var S = Rt(M, -1, 0, 2, 2, null, !0);
        S.attr({
          cursor: Gt(this._orient),
          draggable: !0,
          drift: w(this._onDragMove, this, x),
          ondragend: w(this._onDragEnd, this),
          onmouseover: w(this._showDataInfo, this, !0),
          onmouseout: w(this._showDataInfo, this, !1),
          z2: 5
        });
        var A = S.getBoundingRect(), R = l.get("handleSize");
        this._handleHeight = tt(R, this._size[1]), this._handleWidth = A.width / A.height * this._handleHeight, S.setStyle(l.getModel("handleStyle").getItemStyle()), S.style.strokeNoScale = !0, S.rectHover = !0, S.ensureState("emphasis").style = l.getModel(["emphasis", "handleStyle"]).getItemStyle(), We(S);
        var I = l.get("handleColor");
        I != null && (S.style.fill = I), a.add(o[x] = S);
        var b = l.getModel("textStyle"), O = l.get("handleLabel") || {}, T = O.show || !1;
        t.add(r[x] = new Qt({
          silent: !0,
          invisible: !T,
          style: Ne(b, {
            x: 0,
            y: 0,
            text: "",
            verticalAlign: "middle",
            align: "center",
            fill: b.getTextColor(),
            font: b.getFont()
          }),
          z2: 10
        }));
      }, this);
      var f = p;
      if (d) {
        var v = tt(l.get("moveHandleSize"), s[1]), c = e.moveHandle = new U({
          style: l.getModel("moveHandleStyle").getItemStyle(),
          silent: !0,
          shape: {
            r: [0, 0, 2, 2],
            y: s[1] - 0.5,
            height: v
          }
        }), m = v * 0.8, g = e.moveHandleIcon = Rt(l.get("moveHandleIcon"), -m / 2, -m / 2, m, m, "#fff", !0);
        g.silent = !0, g.y = s[1] + v / 2 - 0.5, c.ensureState("emphasis").style = l.getModel(["emphasis", "moveHandleStyle"]).getItemStyle();
        var _ = Math.min(s[1] / 2, Math.max(v, 10));
        f = e.moveZone = new U({
          invisible: !0,
          shape: {
            y: s[1] - _,
            height: v + _
          }
        }), f.on("mouseover", function() {
          h.enterEmphasis(c);
        }).on("mouseout", function() {
          h.leaveEmphasis(c);
        }), a.add(c), a.add(g), a.add(f);
      }
      f.attr({
        draggable: !0,
        cursor: Gt(this._orient),
        drift: w(this._onDragMove, this, "all"),
        ondragstart: w(this._showDataInfo, this, !0),
        ondragend: w(this._onDragEnd, this),
        onmouseover: w(this._showDataInfo, this, !0),
        onmouseout: w(this._showDataInfo, this, !1)
      });
    }, i.prototype._resetInterval = function() {
      var t = this._range = this.dataZoomModel.getPercentRange(), e = this._getViewExtent();
      this._handleEnds = [C(t[0], [0, 100], e, !0), C(t[1], [0, 100], e, !0)];
    }, i.prototype._updateInterval = function(t, e) {
      var o = this.dataZoomModel, r = this._handleEnds, a = this._getViewExtent(), s = o.findRepresentativeAxisProxy().getMinMaxSpan(), l = [0, 100];
      it(e, r, a, o.get("zoomLock") ? "all" : t, s.minSpan != null ? C(s.minSpan, l, a, !0) : null, s.maxSpan != null ? C(s.maxSpan, l, a, !0) : null);
      var h = this._range, u = this._range = F([C(r[0], a, l, !0), C(r[1], a, l, !0)]);
      return !h || h[0] !== u[0] || h[1] !== u[1];
    }, i.prototype._updateView = function(t) {
      var e = this._displayables, o = this._handleEnds, r = F(o.slice()), a = this._size;
      y([0, 1], function(f) {
        var v = e.handles[f], c = this._handleHeight;
        v.attr({
          scaleX: c / 2,
          scaleY: c / 2,
          // This is a trick, by adding an extra tiny offset to let the default handle's end point align to the drag window.
          // NOTE: It may affect some custom shapes a bit. But we prefer to have better result by default.
          x: o[f] + (f ? -1 : 1),
          y: a[1] / 2 - c / 2
        });
      }, this), e.filler.setShape({
        x: r[0],
        y: 0,
        width: r[1] - r[0],
        height: a[1]
      });
      var s = {
        x: r[0],
        width: r[1] - r[0]
      };
      e.moveHandle && (e.moveHandle.setShape(s), e.moveZone.setShape(s), e.moveZone.getBoundingRect(), e.moveHandleIcon && e.moveHandleIcon.attr("x", s.x + s.width / 2));
      for (var l = e.dataShadowSegs, h = [0, r[0], r[1], a[0]], u = 0; u < l.length; u++) {
        var d = l[u], p = d.getClipPath();
        p || (p = new U(), d.setClipPath(p)), p.setShape({
          x: h[u],
          y: 0,
          width: h[u + 1] - h[u],
          height: a[1]
        });
      }
      this._updateDataInfo(t);
    }, i.prototype._updateDataInfo = function(t) {
      var e = this.dataZoomModel, o = this._displayables, r = o.handleLabels, a = this._orient, s = ["", ""];
      if (e.get("showDetail")) {
        var l = e.findRepresentativeAxisProxy();
        if (l) {
          var h = l.getAxisModel().axis, u = this._range, d = t ? l.calculateDataWindow({
            start: u[0],
            end: u[1]
          }).valueWindow : l.getDataValueWindow();
          s = [this._formatLabel(d[0], h), this._formatLabel(d[1], h)];
        }
      }
      var p = F(this._handleEnds.slice());
      f.call(this, 0), f.call(this, 1);
      function f(v) {
        var c = Ye(o.handles[v].parent, this.group), m = Xe(v === 0 ? "right" : "left", c), g = this._handleWidth / 2 + Pi, _ = It([p[v] + (v === 0 ? -g : g), this._size[1] / 2], c);
        r[v].setStyle({
          x: _[0],
          y: _[1],
          verticalAlign: a === X ? "middle" : m,
          align: a === X ? m : "center",
          text: s[v]
        });
      }
    }, i.prototype._formatLabel = function(t, e) {
      var o = this.dataZoomModel, r = o.get("labelFormatter"), a = o.get("labelPrecision");
      (a == null || a === "auto") && (a = e.getPixelPrecision());
      var s = t == null || isNaN(t) ? "" : e.type === "category" || e.type === "time" ? e.scale.getLabel({
        value: Math.round(t)
      }) : t.toFixed(Math.min(a, 20));
      return Q(r) ? r(t, s) : L(r) ? r.replace("{value}", s) : s;
    }, i.prototype._showDataInfo = function(t) {
      var e = this.dataZoomModel.get("handleLabel") || {}, o = e.show || !1, r = this.dataZoomModel.getModel(["emphasis", "handleLabel"]), a = r.get("show") || !1, s = t || this._dragging ? a : o, l = this._displayables, h = l.handleLabels;
      h[0].attr("invisible", !s), h[1].attr("invisible", !s), l.moveHandle && this.api[s ? "enterEmphasis" : "leaveEmphasis"](l.moveHandle, 1);
    }, i.prototype._onDragMove = function(t, e, o, r) {
      this._dragging = !0, K(r.event);
      var a = this._displayables.sliderGroup.getLocalTransform(), s = It([e, o], a, !0), l = this._updateInterval(t, s[0]), h = this.dataZoomModel.get("realtime");
      this._updateView(!h), l && h && this._dispatchZoomAction(!0);
    }, i.prototype._onDragEnd = function() {
      this._dragging = !1, this._showDataInfo(!1);
      var t = this.dataZoomModel.get("realtime");
      !t && this._dispatchZoomAction(!1);
    }, i.prototype._onClickPanel = function(t) {
      var e = this._size, o = this._displayables.sliderGroup.transformCoordToLocal(t.offsetX, t.offsetY);
      if (!(o[0] < 0 || o[0] > e[0] || o[1] < 0 || o[1] > e[1])) {
        var r = this._handleEnds, a = (r[0] + r[1]) / 2, s = this._updateInterval("all", o[0] - a);
        this._updateView(), s && this._dispatchZoomAction(!1);
      }
    }, i.prototype._onBrushStart = function(t) {
      var e = t.offsetX, o = t.offsetY;
      this._brushStart = new Fe(e, o), this._brushing = !0, this._brushStartTime = +/* @__PURE__ */ new Date();
    }, i.prototype._onBrushEnd = function(t) {
      if (this._brushing) {
        var e = this._displayables.brushRect;
        if (this._brushing = !1, !!e) {
          e.attr("ignore", !0);
          var o = e.shape, r = +/* @__PURE__ */ new Date();
          if (!(r - this._brushStartTime < 200 && Math.abs(o.width) < 5)) {
            var a = this._getViewExtent(), s = [0, 100];
            this._range = F([C(o.x, a, s, !0), C(o.x + o.width, a, s, !0)]), this._handleEnds = [o.x, o.x + o.width], this._updateView(), this._dispatchZoomAction(!1);
          }
        }
      }
    }, i.prototype._onBrush = function(t) {
      this._brushing && (K(t.event), this._updateBrushRect(t.offsetX, t.offsetY));
    }, i.prototype._updateBrushRect = function(t, e) {
      var o = this._displayables, r = this.dataZoomModel, a = o.brushRect;
      a || (a = o.brushRect = new Y({
        silent: !0,
        style: r.getModel("brushStyle").getItemStyle()
      }), o.sliderGroup.add(a)), a.attr("ignore", !1);
      var s = this._brushStart, l = this._displayables.sliderGroup, h = l.transformCoordToLocal(t, e), u = l.transformCoordToLocal(s.x, s.y), d = this._size;
      h[0] = Math.max(Math.min(d[0], h[0]), 0), a.setShape({
        x: u[0],
        y: 0,
        width: h[0] - u[0],
        height: d[1]
      });
    }, i.prototype._dispatchZoomAction = function(t) {
      var e = this._range;
      this.api.dispatchAction({
        type: "dataZoom",
        from: this.uid,
        dataZoomId: this.dataZoomModel.id,
        animation: t ? Zi : null,
        start: e[0],
        end: e[1]
      });
    }, i.prototype._findCoordRect = function() {
      var t, e = ie(this.dataZoomModel).infoList;
      if (!t && e.length) {
        var o = e[0].model.coordinateSystem;
        t = o.getRect && o.getRect();
      }
      if (!t) {
        var r = this.api.getWidth(), a = this.api.getHeight();
        t = {
          x: r * 0.2,
          y: a * 0.2,
          width: r * 0.6,
          height: a * 0.6
        };
      }
      return t;
    }, i.type = "dataZoom.slider", i;
  }(re)
);
function Ei(n) {
  var i = {
    x: "y",
    y: "x",
    radius: "angle",
    angle: "radius"
  };
  return i[n];
}
function Gt(n) {
  return n === "vertical" ? "ns-resize" : "ew-resize";
}
function Vi(n) {
  n.registerComponentModel(Oi), n.registerComponentView(Bi), oe(n);
}
function Yi(n) {
  vt(Ii), vt(Vi);
}
export {
  Ni as install,
  Yi as install$1
};
