import { jsxRuntimeExports as pe } from "../../../jsx-runtime-BgepH7Pb.js";
import { useRef as ge } from "react";
import { normalizeCssArray as he, Rect as q, __extends as N, isArray as ae, each as L, merge as de, isString as F, isNameSpecified as fe, createHashMap as oe, map as ve, Model as ye, isNumber as me, filter as xe, indexOf as Se, ComponentModel as be, Group as le, getLayoutRect as J, defaults as Ce, curry as w, getECData as X, parse as Ge, extend as Y, stringify as _e, ZRText as E, setLabelStyle as De, enableHoverEmphasis as Q, isFunction as M, createTextStyle as Le, setTooltipConfig as Ie, box as O, ComponentView as Pe, createOrUpdatePatternFromDecal as Re, createSymbol as we, hasOwn as Ae, getLayoutParams as ke, inheritDefaultOption as Te, mergeLayoutParam as Oe, createIcon as Be, bind as ze, clone as We, retrieve2 as Fe, updateProps as He, use as H, LinearGradient as ee, _default as Ne, echarts as $e } from "../../../core-Dm3hJ1-b.js";
import { useTheme as Ve } from "@mui/material";
import { install as Ee } from "../../../install-Cuv_PvPz.js";
import { install as Ke, install$1 as Ue } from "../../../installCanvasRenderer-CM5Pdk-q.js";
import { install as Ze, install$1 as je } from "../../../install-ChaFZB8d.js";
function qe(n, r) {
  var e = he(r.get("padding")), t = r.getItemStyle(["color", "opacity"]);
  return t.fill = r.get("backgroundColor"), n = new q({
    shape: {
      x: n.x - e[3],
      y: n.y - e[0],
      width: n.width + e[1] + e[3],
      height: n.height + e[0] + e[2],
      r: r.get("borderRadius")
    },
    style: t,
    silent: !0,
    z2: -1
  }), n;
}
var Je = function(n, r) {
  if (r === "all")
    return {
      type: "all",
      title: n.getLocaleModel().get(["legend", "selector", "all"])
    };
  if (r === "inverse")
    return {
      type: "inverse",
      title: n.getLocaleModel().get(["legend", "selector", "inverse"])
    };
}, K = (
  /** @class */
  function(n) {
    N(r, n);
    function r() {
      var e = n !== null && n.apply(this, arguments) || this;
      return e.type = r.type, e.layoutMode = {
        type: "box",
        // legend.width/height are maxWidth/maxHeight actually,
        // whereas real width/height is calculated by its content.
        // (Setting {left: 10, right: 10} does not make sense).
        // So consider the case:
        // `setOption({legend: {left: 10});`
        // then `setOption({legend: {right: 10});`
        // The previous `left` should be cleared by setting `ignoreSize`.
        ignoreSize: !0
      }, e;
    }
    return r.prototype.init = function(e, t, i) {
      this.mergeDefaultAndTheme(e, i), e.selected = e.selected || {}, this._updateSelector(e);
    }, r.prototype.mergeOption = function(e, t) {
      n.prototype.mergeOption.call(this, e, t), this._updateSelector(e);
    }, r.prototype._updateSelector = function(e) {
      var t = e.selector, i = this.ecModel;
      t === !0 && (t = e.selector = ["all", "inverse"]), ae(t) && L(t, function(a, l) {
        F(a) && (a = {
          type: a
        }), t[l] = de(a, Je(i, a.type));
      });
    }, r.prototype.optionUpdated = function() {
      this._updateData(this.ecModel);
      var e = this._data;
      if (e[0] && this.get("selectedMode") === "single") {
        for (var t = !1, i = 0; i < e.length; i++) {
          var a = e[i].get("name");
          if (this.isSelected(a)) {
            this.select(a), t = !0;
            break;
          }
        }
        !t && this.select(e[0].get("name"));
      }
    }, r.prototype._updateData = function(e) {
      var t = [], i = [];
      e.eachRawSeries(function(s) {
        var o = s.name;
        i.push(o);
        var c;
        if (s.legendVisualProvider) {
          var f = s.legendVisualProvider, p = f.getAllNames();
          e.isSeriesFiltered(s) || (i = i.concat(p)), p.length ? t = t.concat(p) : c = !0;
        } else
          c = !0;
        c && fe(s) && t.push(s.name);
      }), this._availableNames = i;
      var a = this.get("data") || t, l = oe(), g = ve(a, function(s) {
        return (F(s) || me(s)) && (s = {
          name: s
        }), l.get(s.name) ? null : (l.set(s.name, !0), new ye(s, this, this.ecModel));
      }, this);
      this._data = xe(g, function(s) {
        return !!s;
      });
    }, r.prototype.getData = function() {
      return this._data;
    }, r.prototype.select = function(e) {
      var t = this.option.selected, i = this.get("selectedMode");
      if (i === "single") {
        var a = this._data;
        L(a, function(l) {
          t[l.get("name")] = !1;
        });
      }
      t[e] = !0;
    }, r.prototype.unSelect = function(e) {
      this.get("selectedMode") !== "single" && (this.option.selected[e] = !1);
    }, r.prototype.toggleSelected = function(e) {
      var t = this.option.selected;
      t.hasOwnProperty(e) || (t[e] = !0), this[t[e] ? "unSelect" : "select"](e);
    }, r.prototype.allSelect = function() {
      var e = this._data, t = this.option.selected;
      L(e, function(i) {
        t[i.get("name", !0)] = !0;
      });
    }, r.prototype.inverseSelect = function() {
      var e = this._data, t = this.option.selected;
      L(e, function(i) {
        var a = i.get("name", !0);
        t.hasOwnProperty(a) || (t[a] = !0), t[a] = !t[a];
      });
    }, r.prototype.isSelected = function(e) {
      var t = this.option.selected;
      return !(t.hasOwnProperty(e) && !t[e]) && Se(this._availableNames, e) >= 0;
    }, r.prototype.getOrient = function() {
      return this.get("orient") === "vertical" ? {
        index: 1,
        name: "vertical"
      } : {
        index: 0,
        name: "horizontal"
      };
    }, r.type = "legend.plain", r.dependencies = ["series"], r.defaultOption = {
      // zlevel: 0,
      z: 4,
      show: !0,
      orient: "horizontal",
      left: "center",
      // right: 'center',
      top: 0,
      // bottom: null,
      align: "auto",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: !0,
      inactiveColor: "#ccc",
      inactiveBorderColor: "#ccc",
      inactiveBorderWidth: "auto",
      itemStyle: {
        color: "inherit",
        opacity: "inherit",
        borderColor: "inherit",
        borderWidth: "auto",
        borderCap: "inherit",
        borderJoin: "inherit",
        borderDashOffset: "inherit",
        borderMiterLimit: "inherit"
      },
      lineStyle: {
        width: "auto",
        color: "inherit",
        inactiveColor: "#ccc",
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit"
      },
      textStyle: {
        color: "#333"
      },
      selectedMode: !0,
      selector: !1,
      selectorLabel: {
        show: !0,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: "#666",
        borderWidth: 1,
        borderColor: "#666"
      },
      emphasis: {
        selectorLabel: {
          show: !0,
          color: "#eee",
          backgroundColor: "#666"
        }
      },
      selectorPosition: "auto",
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: {
        show: !1
      }
    }, r;
  }(be)
), R = w, U = L, W = le, se = (
  /** @class */
  function(n) {
    N(r, n);
    function r() {
      var e = n !== null && n.apply(this, arguments) || this;
      return e.type = r.type, e.newlineDisabled = !1, e;
    }
    return r.prototype.init = function() {
      this.group.add(this._contentGroup = new W()), this.group.add(this._selectorGroup = new W()), this._isFirstRender = !0;
    }, r.prototype.getContentGroup = function() {
      return this._contentGroup;
    }, r.prototype.getSelectorGroup = function() {
      return this._selectorGroup;
    }, r.prototype.render = function(e, t, i) {
      var a = this._isFirstRender;
      if (this._isFirstRender = !1, this.resetInner(), !!e.get("show", !0)) {
        var l = e.get("align"), g = e.get("orient");
        (!l || l === "auto") && (l = e.get("left") === "right" && g === "vertical" ? "right" : "left");
        var s = e.get("selector", !0), o = e.get("selectorPosition", !0);
        s && (!o || o === "auto") && (o = g === "horizontal" ? "end" : "start"), this.renderInner(l, e, t, i, s, g, o);
        var c = e.getBoxLayoutParams(), f = {
          width: i.getWidth(),
          height: i.getHeight()
        }, p = e.get("padding"), h = J(c, f, p), d = this.layoutInner(e, l, h, a, s, o), u = J(Ce({
          width: d.width,
          height: d.height
        }, c), f, p);
        this.group.x = u.x - d.x, this.group.y = u.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = qe(d, e));
      }
    }, r.prototype.resetInner = function() {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
    }, r.prototype.renderInner = function(e, t, i, a, l, g, s) {
      var o = this.getContentGroup(), c = oe(), f = t.get("selectedMode"), p = [];
      i.eachRawSeries(function(h) {
        !h.get("legendHoverLink") && p.push(h.id);
      }), U(t.getData(), function(h, d) {
        var u = h.get("name");
        if (!this.newlineDisabled && (u === "" || u === `
`)) {
          var m = new W();
          m.newline = !0, o.add(m);
          return;
        }
        var v = i.getSeriesByName(u)[0];
        if (!c.get(u)) {
          if (v) {
            var y = v.getData(), x = y.getVisual("legendLineStyle") || {}, _ = y.getVisual("legendIcon"), S = y.getVisual("style"), C = this._createItem(v, u, d, h, t, e, x, S, _, f, a);
            C.on("click", R(te, u, null, a, p)).on("mouseover", R(Z, v.name, null, a, p)).on("mouseout", R(j, v.name, null, a, p)), i.ssr && C.eachChild(function(b) {
              var G = X(b);
              G.seriesIndex = v.seriesIndex, G.dataIndex = d, G.ssrType = "legend";
            }), c.set(u, !0);
          } else
            i.eachRawSeries(function(b) {
              if (!c.get(u) && b.legendVisualProvider) {
                var G = b.legendVisualProvider;
                if (!G.containName(u))
                  return;
                var B = G.indexOfName(u), D = G.getItemVisual(B, "style"), A = G.getItemVisual(B, "legendIcon"), I = Ge(D.fill);
                I && I[3] === 0 && (I[3] = 0.2, D = Y(Y({}, D), {
                  fill: _e(I, "rgba")
                }));
                var P = this._createItem(b, u, d, h, t, e, {}, D, A, f, a);
                P.on("click", R(te, null, u, a, p)).on("mouseover", R(Z, null, u, a, p)).on("mouseout", R(j, null, u, a, p)), i.ssr && P.eachChild(function(z) {
                  var k = X(z);
                  k.seriesIndex = b.seriesIndex, k.dataIndex = d, k.ssrType = "legend";
                }), c.set(u, !0);
              }
            }, this);
          process.env.NODE_ENV !== "production" && (c.get(u) || console.warn(u + " series not exists. Legend data should be same with series name or data name."));
        }
      }, this), l && this._createSelector(l, t, a, g, s);
    }, r.prototype._createSelector = function(e, t, i, a, l) {
      var g = this.getSelectorGroup();
      U(e, function(o) {
        var c = o.type, f = new E({
          style: {
            x: 0,
            y: 0,
            align: "center",
            verticalAlign: "middle"
          },
          onclick: function() {
            i.dispatchAction({
              type: c === "all" ? "legendAllSelect" : "legendInverseSelect",
              legendId: t.id
            });
          }
        });
        g.add(f);
        var p = t.getModel("selectorLabel"), h = t.getModel(["emphasis", "selectorLabel"]);
        De(f, {
          normal: p,
          emphasis: h
        }, {
          defaultText: o.title
        }), Q(f);
      });
    }, r.prototype._createItem = function(e, t, i, a, l, g, s, o, c, f, p) {
      var h = e.visualDrawType, d = l.get("itemWidth"), u = l.get("itemHeight"), m = l.isSelected(t), v = a.get("symbolRotate"), y = a.get("symbolKeepAspect"), x = a.get("icon");
      c = x || c || "roundRect";
      var _ = Xe(c, a, s, o, h, m, p), S = new W(), C = a.getModel("textStyle");
      if (M(e.getLegendIcon) && (!x || x === "inherit"))
        S.add(e.getLegendIcon({
          itemWidth: d,
          itemHeight: u,
          icon: c,
          iconRotate: v,
          itemStyle: _.itemStyle,
          lineStyle: _.lineStyle,
          symbolKeepAspect: y
        }));
      else {
        var b = x === "inherit" && e.getData().getVisual("symbol") ? v === "inherit" ? e.getData().getVisual("symbolRotate") : v : 0;
        S.add(Ye({
          itemWidth: d,
          itemHeight: u,
          icon: c,
          iconRotate: b,
          itemStyle: _.itemStyle,
          symbolKeepAspect: y
        }));
      }
      var G = g === "left" ? d + 5 : -5, B = g, D = l.get("formatter"), A = t;
      F(D) && D ? A = D.replace("{name}", t ?? "") : M(D) && (A = D(t));
      var I = m ? C.getTextColor() : a.get("inactiveColor");
      S.add(new E({
        style: Le(C, {
          text: A,
          x: G,
          y: u / 2,
          fill: I,
          align: B,
          verticalAlign: "middle"
        }, {
          inheritColor: I
        })
      }));
      var P = new q({
        shape: S.getBoundingRect(),
        style: {
          // Cannot use 'invisible' because SVG SSR will miss the node
          fill: "transparent"
        }
      }), z = a.getModel("tooltip");
      return z.get("show") && Ie({
        el: P,
        componentModel: l,
        itemName: t,
        itemTooltipOption: z.option
      }), S.add(P), S.eachChild(function(k) {
        k.silent = !0;
      }), P.silent = !f, this.getContentGroup().add(S), Q(S), S.__legendDataIndex = i, S;
    }, r.prototype.layoutInner = function(e, t, i, a, l, g) {
      var s = this.getContentGroup(), o = this.getSelectorGroup();
      O(e.get("orient"), s, e.get("itemGap"), i.width, i.height);
      var c = s.getBoundingRect(), f = [-c.x, -c.y];
      if (o.markRedraw(), s.markRedraw(), l) {
        O(
          // Buttons in selectorGroup always layout horizontally
          "horizontal",
          o,
          e.get("selectorItemGap", !0)
        );
        var p = o.getBoundingRect(), h = [-p.x, -p.y], d = e.get("selectorButtonGap", !0), u = e.getOrient().index, m = u === 0 ? "width" : "height", v = u === 0 ? "height" : "width", y = u === 0 ? "y" : "x";
        g === "end" ? h[u] += c[m] + d : f[u] += p[m] + d, h[1 - u] += c[v] / 2 - p[v] / 2, o.x = h[0], o.y = h[1], s.x = f[0], s.y = f[1];
        var x = {
          x: 0,
          y: 0
        };
        return x[m] = c[m] + d + p[m], x[v] = Math.max(c[v], p[v]), x[y] = Math.min(0, p[y] + h[1 - u]), x;
      } else
        return s.x = f[0], s.y = f[1], this.group.getBoundingRect();
    }, r.prototype.remove = function() {
      this.getContentGroup().removeAll(), this._isFirstRender = !0;
    }, r.type = "legend.plain", r;
  }(Pe)
);
function Xe(n, r, e, t, i, a, l) {
  function g(m, v) {
    m.lineWidth === "auto" && (m.lineWidth = v.lineWidth > 0 ? 2 : 0), U(m, function(y, x) {
      m[x] === "inherit" && (m[x] = v[x]);
    });
  }
  var s = r.getModel("itemStyle"), o = s.getItemStyle(), c = n.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", f = s.getShallow("decal");
  o.decal = !f || f === "inherit" ? t.decal : Re(f, l), o.fill === "inherit" && (o.fill = t[i]), o.stroke === "inherit" && (o.stroke = t[c]), o.opacity === "inherit" && (o.opacity = (i === "fill" ? t : e).opacity), g(o, t);
  var p = r.getModel("lineStyle"), h = p.getLineStyle();
  if (g(h, e), o.fill === "auto" && (o.fill = t.fill), o.stroke === "auto" && (o.stroke = t.fill), h.stroke === "auto" && (h.stroke = t.fill), !a) {
    var d = r.get("inactiveBorderWidth"), u = o[c];
    o.lineWidth = d === "auto" ? t.lineWidth > 0 && u ? 2 : 0 : o.lineWidth, o.fill = r.get("inactiveColor"), o.stroke = r.get("inactiveBorderColor"), h.stroke = p.get("inactiveColor"), h.lineWidth = p.get("inactiveWidth");
  }
  return {
    itemStyle: o,
    lineStyle: h
  };
}
function Ye(n) {
  var r = n.icon || "roundRect", e = we(r, 0, 0, n.itemWidth, n.itemHeight, n.itemStyle.fill, n.symbolKeepAspect);
  return e.setStyle(n.itemStyle), e.rotation = (n.iconRotate || 0) * Math.PI / 180, e.setOrigin([n.itemWidth / 2, n.itemHeight / 2]), r.indexOf("empty") > -1 && (e.style.stroke = e.style.fill, e.style.fill = "#fff", e.style.lineWidth = 2), e;
}
function te(n, r, e, t) {
  j(n, r, e, t), e.dispatchAction({
    type: "legendToggleSelect",
    name: n ?? r
  }), Z(n, r, e, t);
}
function ce(n) {
  for (var r = n.getZr().storage.getDisplayList(), e, t = 0, i = r.length; t < i && !(e = r[t].states.emphasis); )
    t++;
  return e && e.hoverLayer;
}
function Z(n, r, e, t) {
  ce(e) || e.dispatchAction({
    type: "highlight",
    seriesName: n,
    name: r,
    excludeSeriesId: t
  });
}
function j(n, r, e, t) {
  ce(e) || e.dispatchAction({
    type: "downplay",
    seriesName: n,
    name: r,
    excludeSeriesId: t
  });
}
function Qe(n) {
  var r = n.findComponents({
    mainType: "legend"
  });
  r && r.length && n.filterSeries(function(e) {
    for (var t = 0; t < r.length; t++)
      if (!r[t].isSelected(e.name))
        return !1;
    return !0;
  });
}
function T(n, r, e) {
  var t = n === "allSelect" || n === "inverseSelect", i = {}, a = [];
  e.eachComponent({
    mainType: "legend",
    query: r
  }, function(g) {
    t ? g[n]() : g[n](r.name), re(g, i), a.push(g.componentIndex);
  });
  var l = {};
  return e.eachComponent("legend", function(g) {
    L(i, function(s, o) {
      g[s ? "select" : "unSelect"](o);
    }), re(g, l);
  }), t ? {
    selected: l,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: a
  } : {
    name: r.name,
    selected: l
  };
}
function re(n, r) {
  var e = r || {};
  return L(n.getData(), function(t) {
    var i = t.get("name");
    if (!(i === `
` || i === "")) {
      var a = n.isSelected(i);
      Ae(e, i) ? e[i] = e[i] && a : e[i] = a;
    }
  }), e;
}
function Me(n) {
  n.registerAction("legendToggleSelect", "legendselectchanged", w(T, "toggleSelected")), n.registerAction("legendAllSelect", "legendselectall", w(T, "allSelect")), n.registerAction("legendInverseSelect", "legendinverseselect", w(T, "inverseSelect")), n.registerAction("legendSelect", "legendselected", w(T, "select")), n.registerAction("legendUnSelect", "legendunselected", w(T, "unSelect"));
}
function ue(n) {
  n.registerComponentModel(K), n.registerComponentView(se), n.registerProcessor(n.PRIORITY.PROCESSOR.SERIES_FILTER, Qe), n.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), Me(n);
}
var et = (
  /** @class */
  function(n) {
    N(r, n);
    function r() {
      var e = n !== null && n.apply(this, arguments) || this;
      return e.type = r.type, e;
    }
    return r.prototype.setScrollDataIndex = function(e) {
      this.option.scrollDataIndex = e;
    }, r.prototype.init = function(e, t, i) {
      var a = ke(e);
      n.prototype.init.call(this, e, t, i), ne(this, e, a);
    }, r.prototype.mergeOption = function(e, t) {
      n.prototype.mergeOption.call(this, e, t), ne(this, this.option, e);
    }, r.type = "legend.scroll", r.defaultOption = Te(K.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: "#2f4554",
      pageIconInactiveColor: "#aaa",
      pageIconSize: 15,
      pageTextStyle: {
        color: "#333"
      },
      animationDurationUpdate: 800
    }), r;
  }(K)
);
function ne(n, r, e) {
  var t = n.getOrient(), i = [1, 1];
  i[t.index] = 0, Oe(r, e, {
    type: "box",
    ignoreSize: !!i
  });
}
var ie = le, $ = ["width", "height"], V = ["x", "y"], tt = (
  /** @class */
  function(n) {
    N(r, n);
    function r() {
      var e = n !== null && n.apply(this, arguments) || this;
      return e.type = r.type, e.newlineDisabled = !0, e._currentIndex = 0, e;
    }
    return r.prototype.init = function() {
      n.prototype.init.call(this), this.group.add(this._containerGroup = new ie()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new ie());
    }, r.prototype.resetInner = function() {
      n.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    }, r.prototype.renderInner = function(e, t, i, a, l, g, s) {
      var o = this;
      n.prototype.renderInner.call(this, e, t, i, a, l, g, s);
      var c = this._controllerGroup, f = t.get("pageIconSize", !0), p = ae(f) ? f : [f, f];
      d("pagePrev", 0);
      var h = t.getModel("pageTextStyle");
      c.add(new E({
        name: "pageText",
        style: {
          // Placeholder to calculate a proper layout.
          text: "xx/xx",
          fill: h.getTextColor(),
          font: h.getFont(),
          verticalAlign: "middle",
          align: "center"
        },
        silent: !0
      })), d("pageNext", 1);
      function d(u, m) {
        var v = u + "DataIndex", y = Be(t.get("pageIcons", !0)[t.getOrient().name][m], {
          // Buttons will be created in each render, so we do not need
          // to worry about avoiding using legendModel kept in scope.
          onclick: ze(o._pageGo, o, v, t, a)
        }, {
          x: -p[0] / 2,
          y: -p[1] / 2,
          width: p[0],
          height: p[1]
        });
        y.name = u, c.add(y);
      }
    }, r.prototype.layoutInner = function(e, t, i, a, l, g) {
      var s = this.getSelectorGroup(), o = e.getOrient().index, c = $[o], f = V[o], p = $[1 - o], h = V[1 - o];
      l && O(
        // Buttons in selectorGroup always layout horizontally
        "horizontal",
        s,
        e.get("selectorItemGap", !0)
      );
      var d = e.get("selectorButtonGap", !0), u = s.getBoundingRect(), m = [-u.x, -u.y], v = We(i);
      l && (v[c] = i[c] - u[c] - d);
      var y = this._layoutContentAndController(e, a, v, o, c, p, h, f);
      if (l) {
        if (g === "end")
          m[o] += y[c] + d;
        else {
          var x = u[c] + d;
          m[o] -= x, y[f] -= x;
        }
        y[c] += u[c] + d, m[1 - o] += y[h] + y[p] / 2 - u[p] / 2, y[p] = Math.max(y[p], u[p]), y[h] = Math.min(y[h], u[h] + m[1 - o]), s.x = m[0], s.y = m[1], s.markRedraw();
      }
      return y;
    }, r.prototype._layoutContentAndController = function(e, t, i, a, l, g, s, o) {
      var c = this.getContentGroup(), f = this._containerGroup, p = this._controllerGroup;
      O(e.get("orient"), c, e.get("itemGap"), a ? i.width : null, a ? null : i.height), O(
        // Buttons in controller are layout always horizontally.
        "horizontal",
        p,
        e.get("pageButtonItemGap", !0)
      );
      var h = c.getBoundingRect(), d = p.getBoundingRect(), u = this._showController = h[l] > i[l], m = [-h.x, -h.y];
      t || (m[a] = c[o]);
      var v = [0, 0], y = [-d.x, -d.y], x = Fe(e.get("pageButtonGap", !0), e.get("itemGap", !0));
      if (u) {
        var _ = e.get("pageButtonPosition", !0);
        _ === "end" ? y[a] += i[l] - d[l] : v[a] += d[l] + x;
      }
      y[1 - a] += h[g] / 2 - d[g] / 2, c.setPosition(m), f.setPosition(v), p.setPosition(y);
      var S = {
        x: 0,
        y: 0
      };
      if (S[l] = u ? i[l] : h[l], S[g] = Math.max(h[g], d[g]), S[s] = Math.min(0, d[s] + y[1 - a]), f.__rectSize = i[l], u) {
        var C = {
          x: 0,
          y: 0
        };
        C[l] = Math.max(i[l] - d[l] - x, 0), C[g] = S[g], f.setClipPath(new q({
          shape: C
        })), f.__rectSize = C[l];
      } else
        p.eachChild(function(G) {
          G.attr({
            invisible: !0,
            silent: !0
          });
        });
      var b = this._getPageInfo(e);
      return b.pageIndex != null && He(
        c,
        {
          x: b.contentPosition[0],
          y: b.contentPosition[1]
        },
        // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        u ? e : null
      ), this._updatePageInfoView(e, b), S;
    }, r.prototype._pageGo = function(e, t, i) {
      var a = this._getPageInfo(t)[e];
      a != null && i.dispatchAction({
        type: "legendScroll",
        scrollDataIndex: a,
        legendId: t.id
      });
    }, r.prototype._updatePageInfoView = function(e, t) {
      var i = this._controllerGroup;
      L(["pagePrev", "pageNext"], function(c) {
        var f = c + "DataIndex", p = t[f] != null, h = i.childOfName(c);
        h && (h.setStyle("fill", p ? e.get("pageIconColor", !0) : e.get("pageIconInactiveColor", !0)), h.cursor = p ? "pointer" : "default");
      });
      var a = i.childOfName("pageText"), l = e.get("pageFormatter"), g = t.pageIndex, s = g != null ? g + 1 : 0, o = t.pageCount;
      a && l && a.setStyle("text", F(l) ? l.replace("{current}", s == null ? "" : s + "").replace("{total}", o == null ? "" : o + "") : l({
        current: s,
        total: o
      }));
    }, r.prototype._getPageInfo = function(e) {
      var t = e.get("scrollDataIndex", !0), i = this.getContentGroup(), a = this._containerGroup.__rectSize, l = e.getOrient().index, g = $[l], s = V[l], o = this._findTargetItemIndex(t), c = i.children(), f = c[o], p = c.length, h = p ? 1 : 0, d = {
        contentPosition: [i.x, i.y],
        pageCount: h,
        pageIndex: h - 1,
        pagePrevDataIndex: null,
        pageNextDataIndex: null
      };
      if (!f)
        return d;
      var u = _(f);
      d.contentPosition[l] = -u.s;
      for (var m = o + 1, v = u, y = u, x = null; m <= p; ++m)
        x = _(c[m]), // Half of the last item is out of the window.
        (!x && y.e > v.s + a || x && !S(x, v.s)) && (y.i > v.i ? v = y : v = x, v && (d.pageNextDataIndex == null && (d.pageNextDataIndex = v.i), ++d.pageCount)), y = x;
      for (var m = o - 1, v = u, y = u, x = null; m >= -1; --m)
        x = _(c[m]), // If the the end item does not intersect with the window started
        // from the current item, a page can be settled.
        (!x || !S(y, x.s)) && v.i < y.i && (y = v, d.pagePrevDataIndex == null && (d.pagePrevDataIndex = v.i), ++d.pageCount, ++d.pageIndex), v = x;
      return d;
      function _(C) {
        if (C) {
          var b = C.getBoundingRect(), G = b[s] + C[s];
          return {
            s: G,
            e: G + b[g],
            i: C.__legendDataIndex
          };
        }
      }
      function S(C, b) {
        return C.e >= b && C.s <= b + a;
      }
    }, r.prototype._findTargetItemIndex = function(e) {
      if (!this._showController)
        return 0;
      var t, i = this.getContentGroup(), a;
      return i.eachChild(function(l, g) {
        var s = l.__legendDataIndex;
        a == null && s != null && (a = g), s === e && (t = g);
      }), t ?? a;
    }, r.type = "legend.scroll", r;
  }(se)
);
function rt(n) {
  n.registerAction("legendScroll", "legendscroll", function(r, e) {
    var t = r.scrollDataIndex;
    t != null && e.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: r
    }, function(i) {
      i.setScrollDataIndex(t);
    });
  });
}
function nt(n) {
  H(ue), n.registerComponentModel(et), n.registerComponentView(tt), rt(n);
}
function it(n) {
  H(ue), H(nt);
}
H([Ee, Ke, Ze, je, it, Ue]);
const gt = ({ categories: n, seriesData: r, legendItems: e, tooltipFormatter: t, style: i }) => {
  const a = Ve(), l = ge(null), g = {
    fontSize: a.typography.overline.fontSize,
    fontFamily: a.typography.overline.fontFamily,
    fontWeight: a.typography.overline.fontWeight,
    color: a.palette.text.text8
  }, s = {
    tooltip: {
      trigger: "item",
      axisPointer: { type: "none" },
      formatter: t,
      renderMode: "html",
      padding: 12,
      borderColor: "transparent",
      backgroundColor: a.palette.background.background14,
      shadowBlur: 8,
      borderRadius: 4
    },
    xAxis: {
      type: "category",
      data: n,
      axisLabel: { ...g },
      axisLine: { show: !1 },
      axisTick: { show: !1 }
    },
    yAxis: {
      type: "value",
      axisLabel: { ...g },
      axisLine: { show: !1 },
      axisTick: { show: !1 },
      splitLine: { show: !1 }
    },
    dataZoom: [
      {
        type: "slider",
        start: 0,
        end: 100,
        left: "15%",
        right: "15%"
      },
      { type: "inside", start: 0, end: 100 }
    ],
    grid: {
      left: 0,
      right: 6,
      top: 16,
      bottom: 60,
      containLabel: !0
    },
    series: e.map((o, c) => ({
      name: o.label,
      type: "bar",
      data: r[c],
      itemStyle: {
        color: new ee(0, 0, 0, 1, [
          {
            offset: 0,
            color: o.color
          },
          {
            offset: 1,
            color: `${o.color}00`
          }
        ]),
        borderRadius: [4, 4, 0, 0],
        decal: {
          symbol: "line",
          symbolSize: 7,
          dashGap: 0,
          color: a.palette.background.background7,
          rotation: -45
        }
      },
      emphasis: {
        itemStyle: {
          color: new ee(0, 0, 0, 1, [
            {
              offset: 0,
              color: o.color
            },
            {
              offset: 1,
              color: `${o.color}00`
            }
          ]),
          borderRadius: [4, 4, 0, 0],
          decal: {
            symbol: "line",
            symbolSize: 4,
            dashGap: 1,
            color: a.palette.background.background7,
            rotation: -Math.PI / 3
          }
        }
      }
    }))
  };
  return /* @__PURE__ */ pe.jsx(
    Ne,
    {
      ref: l,
      echarts: $e,
      option: s,
      style: i || { height: "400px", width: "100%" },
      lazyUpdate: !0,
      notMerge: !0
    }
  );
};
export {
  gt as default
};
