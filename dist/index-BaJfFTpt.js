import { isNumber as ft, coordEach as pt } from "./index-CpJvLLWC.js";
import { getDefaultExportFromCjs as $e } from "./_commonjsHelpers-TBt1UqMc.js";
import { requireFastDeepEqual as ht } from "./index-BuxT8eEA.js";
const v = {
  CANVAS: "mapboxgl-canvas",
  CONTROL_BASE: "mapboxgl-ctrl",
  CONTROL_PREFIX: "mapboxgl-ctrl-",
  CONTROL_BUTTON: "mapbox-gl-draw_ctrl-draw-btn",
  CONTROL_BUTTON_LINE: "mapbox-gl-draw_line",
  CONTROL_BUTTON_POLYGON: "mapbox-gl-draw_polygon",
  CONTROL_BUTTON_POINT: "mapbox-gl-draw_point",
  CONTROL_BUTTON_TRASH: "mapbox-gl-draw_trash",
  CONTROL_BUTTON_COMBINE_FEATURES: "mapbox-gl-draw_combine",
  CONTROL_BUTTON_UNCOMBINE_FEATURES: "mapbox-gl-draw_uncombine",
  CONTROL_GROUP: "mapboxgl-ctrl-group",
  ATTRIBUTION: "mapboxgl-ctrl-attrib",
  ACTIVE_BUTTON: "active",
  BOX_SELECT: "mapbox-gl-draw_boxselect"
}, P = {
  HOT: "mapbox-gl-draw-hot",
  COLD: "mapbox-gl-draw-cold"
}, I = {
  ADD: "add",
  MOVE: "move",
  DRAG: "drag",
  POINTER: "pointer",
  NONE: "none"
}, A = {
  POLYGON: "polygon",
  LINE: "line_string",
  POINT: "point"
}, f = {
  FEATURE: "Feature",
  POLYGON: "Polygon",
  LINE_STRING: "LineString",
  POINT: "Point",
  FEATURE_COLLECTION: "FeatureCollection",
  MULTI_PREFIX: "Multi",
  MULTI_POINT: "MultiPoint",
  MULTI_LINE_STRING: "MultiLineString",
  MULTI_POLYGON: "MultiPolygon"
}, m = {
  DRAW_LINE_STRING: "draw_line_string",
  DRAW_POLYGON: "draw_polygon",
  DRAW_POINT: "draw_point",
  SIMPLE_SELECT: "simple_select",
  DIRECT_SELECT: "direct_select"
}, N = {
  CREATE: "draw.create",
  DELETE: "draw.delete",
  UPDATE: "draw.update",
  SELECTION_CHANGE: "draw.selectionchange",
  MODE_CHANGE: "draw.modechange",
  ACTIONABLE: "draw.actionable",
  RENDER: "draw.render",
  COMBINE_FEATURES: "draw.combine",
  UNCOMBINE_FEATURES: "draw.uncombine"
}, X = {
  MOVE: "move",
  CHANGE_PROPERTIES: "change_properties",
  CHANGE_COORDINATES: "change_coordinates"
}, O = {
  FEATURE: "feature",
  MIDPOINT: "midpoint",
  VERTEX: "vertex"
}, _ = {
  ACTIVE: "true",
  INACTIVE: "false"
}, Je = [
  "scrollZoom",
  "boxZoom",
  "dragRotate",
  "dragPan",
  "keyboard",
  "doubleClickZoom",
  "touchZoomRotate"
], gt = -90, le = -85, mt = 90, de = 85, yt = -270, Et = 270, Ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LAT_MAX: mt,
  LAT_MIN: gt,
  LAT_RENDERED_MAX: de,
  LAT_RENDERED_MIN: le,
  LNG_MAX: Et,
  LNG_MIN: yt,
  activeStates: _,
  classes: v,
  cursors: I,
  events: N,
  geojsonTypes: f,
  interactions: Je,
  meta: O,
  modes: m,
  sources: P,
  types: A,
  updateActions: X
}, Symbol.toStringTag, { value: "Module" }));
function te(e) {
  return function(t) {
    const n = t.featureTarget;
    return !n || !n.properties ? !1 : n.properties.meta === e;
  };
}
function Ke(e) {
  return !e.originalEvent || !e.originalEvent.shiftKey ? !1 : e.originalEvent.button === 0;
}
function B(e) {
  return !e.featureTarget || !e.featureTarget.properties ? !1 : e.featureTarget.properties.active === _.ACTIVE && e.featureTarget.properties.meta === O.FEATURE;
}
function Ee(e) {
  return !e.featureTarget || !e.featureTarget.properties ? !1 : e.featureTarget.properties.active === _.INACTIVE && e.featureTarget.properties.meta === O.FEATURE;
}
function ne(e) {
  return e.featureTarget === void 0;
}
function Ce(e) {
  return !e.featureTarget || !e.featureTarget.properties ? !1 : e.featureTarget.properties.meta === O.FEATURE;
}
function q(e) {
  const t = e.featureTarget;
  return !t || !t.properties ? !1 : t.properties.meta === O.VERTEX;
}
function j(e) {
  return e.originalEvent ? e.originalEvent.shiftKey === !0 : !1;
}
function oe(e) {
  return e.key === "Escape" || e.keyCode === 27;
}
function re(e) {
  return e.key === "Enter" || e.keyCode === 13;
}
function fe(e) {
  return e.key === "Backspace" || e.keyCode === 8;
}
function pe(e) {
  return e.key === "Delete" || e.keyCode === 46;
}
function Xe(e) {
  return e.key === "1" || e.keyCode === 49;
}
function qe(e) {
  return e.key === "2" || e.keyCode === 50;
}
function He(e) {
  return e.key === "3" || e.keyCode === 51;
}
function We(e) {
  const t = e.key || String.fromCharCode(e.keyCode);
  return t >= "0" && t <= "9";
}
function Ct() {
  return !0;
}
const Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isActiveFeature: B,
  isBackspaceKey: fe,
  isDeleteKey: pe,
  isDigit1Key: Xe,
  isDigit2Key: qe,
  isDigit3Key: He,
  isDigitKey: We,
  isEnterKey: re,
  isEscapeKey: oe,
  isFeature: Ce,
  isInactiveFeature: Ee,
  isOfMetaType: te,
  isShiftDown: j,
  isShiftMousedown: Ke,
  isTrue: Ct,
  isVertex: q,
  noTarget: ne
}, Symbol.toStringTag, { value: "Module" }));
var Te = {}, ie = {};
ie.RADIUS = 6378137;
ie.FLATTENING = 1 / 298.257223563;
ie.POLAR_RADIUS = 63567523142e-4;
var Ae = ie;
Te.geometry = Ze;
Te.ring = he;
function Ze(e) {
  var t = 0, n;
  switch (e.type) {
    case "Polygon":
      return be(e.coordinates);
    case "MultiPolygon":
      for (n = 0; n < e.coordinates.length; n++)
        t += be(e.coordinates[n]);
      return t;
    case "Point":
    case "MultiPoint":
    case "LineString":
    case "MultiLineString":
      return 0;
    case "GeometryCollection":
      for (n = 0; n < e.geometries.length; n++)
        t += Ze(e.geometries[n]);
      return t;
  }
}
function be(e) {
  var t = 0;
  if (e && e.length > 0) {
    t += Math.abs(he(e[0]));
    for (var n = 1; n < e.length; n++)
      t -= Math.abs(he(e[n]));
  }
  return t;
}
function he(e) {
  var t, n, o, r, i, s, u, c = 0, d = e.length;
  if (d > 2) {
    for (u = 0; u < d; u++)
      u === d - 2 ? (r = d - 2, i = d - 1, s = 0) : u === d - 1 ? (r = d - 1, i = 0, s = 1) : (r = u, i = u + 1, s = u + 2), t = e[r], n = e[i], o = e[s], c += (ue(o[0]) - ue(t[0])) * Math.sin(ue(n[1]));
    c = c * Ae.RADIUS * Ae.RADIUS / 2;
  }
  return c;
}
function ue(e) {
  return e * Math.PI / 180;
}
const Pe = {
  Point: 0,
  LineString: 1,
  MultiLineString: 1,
  Polygon: 2
};
function It(e, t) {
  const n = Pe[e.geometry.type] - Pe[t.geometry.type];
  return n === 0 && e.geometry.type === f.POLYGON ? e.area - t.area : n;
}
function ze(e) {
  return e.map((t) => (t.geometry.type === f.POLYGON && (t.area = Te.geometry({
    type: f.FEATURE,
    property: {},
    geometry: t.geometry
  })), t)).sort(It).map((t) => (delete t.area, t));
}
function Qe(e, t = 0) {
  return [
    [e.point.x - t, e.point.y - t],
    [e.point.x + t, e.point.y + t]
  ];
}
function F(e) {
  if (this._items = {}, this._nums = {}, this._length = e ? e.length : 0, !!e)
    for (let t = 0, n = e.length; t < n; t++)
      this.add(e[t]), e[t] !== void 0 && (typeof e[t] == "string" ? this._items[e[t]] = t : this._nums[e[t]] = t);
}
F.prototype.add = function(e) {
  return this.has(e) ? this : (this._length++, typeof e == "string" ? this._items[e] = this._length : this._nums[e] = this._length, this);
};
F.prototype.delete = function(e) {
  return this.has(e) === !1 ? this : (this._length--, delete this._items[e], delete this._nums[e], this);
};
F.prototype.has = function(e) {
  return typeof e != "string" && typeof e != "number" ? !1 : this._items[e] !== void 0 || this._nums[e] !== void 0;
};
F.prototype.values = function() {
  const e = [];
  return Object.keys(this._items).forEach((t) => {
    e.push({ k: t, v: this._items[t] });
  }), Object.keys(this._nums).forEach((t) => {
    e.push({ k: JSON.parse(t), v: this._nums[t] });
  }), e.sort((t, n) => t.v - n.v).map((t) => t.k);
};
F.prototype.clear = function() {
  return this._length = 0, this._items = {}, this._nums = {}, this;
};
const St = [
  O.FEATURE,
  O.MIDPOINT,
  O.VERTEX
], $ = {
  click: _t,
  touch: Ot
};
function _t(e, t, n) {
  return je(e, t, n, n.options.clickBuffer);
}
function Ot(e, t, n) {
  return je(e, t, n, n.options.touchBuffer);
}
function je(e, t, n, o) {
  if (n.map === null) return [];
  const r = e ? Qe(e, o) : t, i = {};
  n.options.styles && (i.layers = n.options.styles.map((d) => d.id).filter((d) => n.map.getLayer(d) != null));
  const s = n.map.queryRenderedFeatures(r, i).filter((d) => St.indexOf(d.properties.meta) !== -1), u = new F(), c = [];
  return s.forEach((d) => {
    const g = d.properties.id;
    u.has(g) || (u.add(g), c.push(d));
  }), ze(c);
}
function Q(e, t) {
  const n = $.click(e, null, t), o = { mouse: I.NONE };
  return n[0] && (o.mouse = n[0].properties.active === _.ACTIVE ? I.MOVE : I.POINTER, o.feature = n[0].properties.meta), t.events.currentModeName().indexOf("draw") !== -1 && (o.mouse = I.ADD), t.ui.queueMapClasses(o), t.ui.updateMapClasses(), n[0];
}
function Ie(e, t) {
  const n = e.x - t.x, o = e.y - t.y;
  return Math.sqrt(n * n + o * o);
}
const Mt = 4, Nt = 12, Lt = 500;
function ge(e, t, n = {}) {
  const o = n.fineTolerance != null ? n.fineTolerance : Mt, r = n.grossTolerance != null ? n.grossTolerance : Nt, i = n.interval != null ? n.interval : Lt;
  e.point = e.point || t.point, e.time = e.time || t.time;
  const s = Ie(e.point, t.point);
  return s < o || s < r && t.time - e.time < i;
}
const vt = 25, At = 250;
function me(e, t, n = {}) {
  const o = n.tolerance != null ? n.tolerance : vt, r = n.interval != null ? n.interval : At;
  return e.point = e.point || t.point, e.time = e.time || t.time, Ie(e.point, t.point) < o && t.time - e.time < r;
}
const ye = function(e, t) {
  const n = {
    drag: [],
    click: [],
    mousemove: [],
    mousedown: [],
    mouseup: [],
    mouseout: [],
    keydown: [],
    keyup: [],
    touchstart: [],
    touchmove: [],
    touchend: [],
    tap: []
  }, o = {
    on(i, s, u) {
      if (n[i] === void 0)
        throw new Error(`Invalid event type: ${i}`);
      n[i].push({
        selector: s,
        fn: u
      });
    },
    render(i) {
      t.store.featureChanged(i);
    }
  }, r = function(i, s) {
    const u = n[i];
    let c = u.length;
    for (; c--; ) {
      const d = u[c];
      if (d.selector(s)) {
        d.fn.call(o, s) || t.store.render(), t.ui.updateMapClasses();
        break;
      }
    }
  };
  return e.start.call(o), {
    render: e.render,
    stop() {
      e.stop && e.stop();
    },
    trash() {
      e.trash && (e.trash(), t.store.render());
    },
    combineFeatures() {
      e.combineFeatures && e.combineFeatures();
    },
    uncombineFeatures() {
      e.uncombineFeatures && e.uncombineFeatures();
    },
    drag(i) {
      r("drag", i);
    },
    click(i) {
      r("click", i);
    },
    mousemove(i) {
      r("mousemove", i);
    },
    mousedown(i) {
      r("mousedown", i);
    },
    mouseup(i) {
      r("mouseup", i);
    },
    mouseout(i) {
      r("mouseout", i);
    },
    keydown(i) {
      r("keydown", i);
    },
    keyup(i) {
      r("keyup", i);
    },
    touchstart(i) {
      r("touchstart", i);
    },
    touchmove(i) {
      r("touchmove", i);
    },
    touchend(i) {
      r("touchend", i);
    },
    tap(i) {
      r("tap", i);
    }
  };
};
let bt = (e, t = 21) => (n = t) => {
  let o = "", r = n | 0;
  for (; r--; )
    o += e[Math.random() * e.length | 0];
  return o;
};
const Pt = bt("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 32);
function Se() {
  return Pt();
}
const L = function(e, t) {
  this.ctx = e, this.properties = t.properties || {}, this.coordinates = t.geometry.coordinates, this.id = t.id || Se(), this.type = t.geometry.type;
};
L.prototype.changed = function() {
  this.ctx.store.featureChanged(this.id);
};
L.prototype.incomingCoords = function(e) {
  this.setCoordinates(e);
};
L.prototype.setCoordinates = function(e) {
  this.coordinates = e, this.changed();
};
L.prototype.getCoordinates = function() {
  return JSON.parse(JSON.stringify(this.coordinates));
};
L.prototype.setProperty = function(e, t) {
  this.properties[e] = t;
};
L.prototype.toGeoJSON = function() {
  return JSON.parse(JSON.stringify({
    id: this.id,
    type: f.FEATURE,
    properties: this.properties,
    geometry: {
      coordinates: this.getCoordinates(),
      type: this.type
    }
  }));
};
L.prototype.internal = function(e) {
  const t = {
    id: this.id,
    meta: O.FEATURE,
    "meta:type": this.type,
    active: _.INACTIVE,
    mode: e
  };
  if (this.ctx.options.userProperties)
    for (const n in this.properties)
      t[`user_${n}`] = this.properties[n];
  return {
    type: f.FEATURE,
    properties: t,
    geometry: {
      coordinates: this.getCoordinates(),
      type: this.type
    }
  };
};
const G = function(e, t) {
  L.call(this, e, t);
};
G.prototype = Object.create(L.prototype);
G.prototype.isValid = function() {
  return typeof this.coordinates[0] == "number" && typeof this.coordinates[1] == "number";
};
G.prototype.updateCoordinate = function(e, t, n) {
  arguments.length === 3 ? this.coordinates = [t, n] : this.coordinates = [e, t], this.changed();
};
G.prototype.getCoordinate = function() {
  return this.getCoordinates();
};
const V = function(e, t) {
  L.call(this, e, t);
};
V.prototype = Object.create(L.prototype);
V.prototype.isValid = function() {
  return this.coordinates.length > 1;
};
V.prototype.addCoordinate = function(e, t, n) {
  this.changed();
  const o = parseInt(e, 10);
  this.coordinates.splice(o, 0, [t, n]);
};
V.prototype.getCoordinate = function(e) {
  const t = parseInt(e, 10);
  return JSON.parse(JSON.stringify(this.coordinates[t]));
};
V.prototype.removeCoordinate = function(e) {
  this.changed(), this.coordinates.splice(parseInt(e, 10), 1);
};
V.prototype.updateCoordinate = function(e, t, n) {
  const o = parseInt(e, 10);
  this.coordinates[o] = [t, n], this.changed();
};
const b = function(e, t) {
  L.call(this, e, t), this.coordinates = this.coordinates.map((n) => n.slice(0, -1));
};
b.prototype = Object.create(L.prototype);
b.prototype.isValid = function() {
  return this.coordinates.length === 0 ? !1 : this.coordinates.every((e) => e.length > 2);
};
b.prototype.incomingCoords = function(e) {
  this.coordinates = e.map((t) => t.slice(0, -1)), this.changed();
};
b.prototype.setCoordinates = function(e) {
  this.coordinates = e, this.changed();
};
b.prototype.addCoordinate = function(e, t, n) {
  this.changed();
  const o = e.split(".").map((i) => parseInt(i, 10));
  this.coordinates[o[0]].splice(o[1], 0, [t, n]);
};
b.prototype.removeCoordinate = function(e) {
  this.changed();
  const t = e.split(".").map((o) => parseInt(o, 10)), n = this.coordinates[t[0]];
  n && (n.splice(t[1], 1), n.length < 3 && this.coordinates.splice(t[0], 1));
};
b.prototype.getCoordinate = function(e) {
  const t = e.split(".").map((o) => parseInt(o, 10)), n = this.coordinates[t[0]];
  return JSON.parse(JSON.stringify(n[t[1]]));
};
b.prototype.getCoordinates = function() {
  return this.coordinates.map((e) => e.concat([e[0]]));
};
b.prototype.updateCoordinate = function(e, t, n) {
  this.changed();
  const o = e.split("."), r = parseInt(o[0], 10), i = parseInt(o[1], 10);
  this.coordinates[r] === void 0 && (this.coordinates[r] = []), this.coordinates[r][i] = [t, n];
};
const Ft = {
  MultiPoint: G,
  MultiLineString: V,
  MultiPolygon: b
}, se = (e, t, n, o, r) => {
  const i = n.split("."), s = parseInt(i[0], 10), u = i[1] ? i.slice(1).join(".") : null;
  return e[s][t](u, o, r);
}, M = function(e, t) {
  if (L.call(this, e, t), delete this.coordinates, this.model = Ft[t.geometry.type], this.model === void 0) throw new TypeError(`${t.geometry.type} is not a valid type`);
  this.features = this._coordinatesToFeatures(t.geometry.coordinates);
};
M.prototype = Object.create(L.prototype);
M.prototype._coordinatesToFeatures = function(e) {
  const t = this.model.bind(this);
  return e.map((n) => new t(this.ctx, {
    id: Se(),
    type: f.FEATURE,
    properties: {},
    geometry: {
      coordinates: n,
      type: this.type.replace("Multi", "")
    }
  }));
};
M.prototype.isValid = function() {
  return this.features.every((e) => e.isValid());
};
M.prototype.setCoordinates = function(e) {
  this.features = this._coordinatesToFeatures(e), this.changed();
};
M.prototype.getCoordinate = function(e) {
  return se(this.features, "getCoordinate", e);
};
M.prototype.getCoordinates = function() {
  return JSON.parse(JSON.stringify(this.features.map((e) => e.type === f.POLYGON ? e.getCoordinates() : e.coordinates)));
};
M.prototype.updateCoordinate = function(e, t, n) {
  se(this.features, "updateCoordinate", e, t, n), this.changed();
};
M.prototype.addCoordinate = function(e, t, n) {
  se(this.features, "addCoordinate", e, t, n), this.changed();
};
M.prototype.removeCoordinate = function(e) {
  se(this.features, "removeCoordinate", e), this.changed();
};
M.prototype.getFeatures = function() {
  return this.features;
};
function h(e) {
  this.map = e.map, this.drawConfig = JSON.parse(JSON.stringify(e.options || {})), this._ctx = e;
}
h.prototype.setSelected = function(e) {
  return this._ctx.store.setSelected(e);
};
h.prototype.setSelectedCoordinates = function(e) {
  this._ctx.store.setSelectedCoordinates(e), e.reduce((t, n) => (t[n.feature_id] === void 0 && (t[n.feature_id] = !0, this._ctx.store.get(n.feature_id).changed()), t), {});
};
h.prototype.getSelected = function() {
  return this._ctx.store.getSelected();
};
h.prototype.getSelectedIds = function() {
  return this._ctx.store.getSelectedIds();
};
h.prototype.isSelected = function(e) {
  return this._ctx.store.isSelected(e);
};
h.prototype.getFeature = function(e) {
  return this._ctx.store.get(e);
};
h.prototype.select = function(e) {
  return this._ctx.store.select(e);
};
h.prototype.deselect = function(e) {
  return this._ctx.store.deselect(e);
};
h.prototype.deleteFeature = function(e, t = {}) {
  return this._ctx.store.delete(e, t);
};
h.prototype.addFeature = function(e, t = {}) {
  return this._ctx.store.add(e, t);
};
h.prototype.clearSelectedFeatures = function() {
  return this._ctx.store.clearSelected();
};
h.prototype.clearSelectedCoordinates = function() {
  return this._ctx.store.clearSelectedCoordinates();
};
h.prototype.setActionableState = function(e = {}) {
  const t = {
    trash: e.trash || !1,
    combineFeatures: e.combineFeatures || !1,
    uncombineFeatures: e.uncombineFeatures || !1
  };
  return this._ctx.events.actionable(t);
};
h.prototype.changeMode = function(e, t = {}, n = {}) {
  return this._ctx.events.changeMode(e, t, n);
};
h.prototype.fire = function(e, t) {
  return this._ctx.events.fire(e, t);
};
h.prototype.updateUIClasses = function(e) {
  return this._ctx.ui.queueMapClasses(e);
};
h.prototype.activateUIButton = function(e) {
  return this._ctx.ui.setActiveButton(e);
};
h.prototype.featuresAt = function(e, t, n = "click") {
  if (n !== "click" && n !== "touch") throw new Error("invalid buffer type");
  return $[n](e, t, this._ctx);
};
h.prototype.newFeature = function(e) {
  const t = e.geometry.type;
  return t === f.POINT ? new G(this._ctx, e) : t === f.LINE_STRING ? new V(this._ctx, e) : t === f.POLYGON ? new b(this._ctx, e) : new M(this._ctx, e);
};
h.prototype.isInstanceOf = function(e, t) {
  if (e === f.POINT) return t instanceof G;
  if (e === f.LINE_STRING) return t instanceof V;
  if (e === f.POLYGON) return t instanceof b;
  if (e === "MultiFeature") return t instanceof M;
  throw new Error(`Unknown feature class: ${e}`);
};
h.prototype.doRender = function(e) {
  return this._ctx.store.featureChanged(e);
};
h.prototype.onSetup = function() {
};
h.prototype.onDrag = function() {
};
h.prototype.onClick = function() {
};
h.prototype.onMouseMove = function() {
};
h.prototype.onMouseDown = function() {
};
h.prototype.onMouseUp = function() {
};
h.prototype.onMouseOut = function() {
};
h.prototype.onKeyUp = function() {
};
h.prototype.onKeyDown = function() {
};
h.prototype.onTouchStart = function() {
};
h.prototype.onTouchMove = function() {
};
h.prototype.onTouchEnd = function() {
};
h.prototype.onTap = function() {
};
h.prototype.onStop = function() {
};
h.prototype.onTrash = function() {
};
h.prototype.onCombineFeature = function() {
};
h.prototype.onUncombineFeature = function() {
};
h.prototype.toDisplayFeatures = function() {
  throw new Error("You must overwrite toDisplayFeatures");
};
const et = {
  drag: "onDrag",
  click: "onClick",
  mousemove: "onMouseMove",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseout: "onMouseOut",
  keyup: "onKeyUp",
  keydown: "onKeyDown",
  touchstart: "onTouchStart",
  touchmove: "onTouchMove",
  touchend: "onTouchEnd",
  tap: "onTap"
}, wt = Object.keys(et);
function Rt(e) {
  const t = Object.keys(e);
  return function(n, o = {}) {
    let r = {};
    const i = t.reduce((u, c) => (u[c] = e[c], u), new h(n));
    function s(u) {
      return (c) => i[u](r, c);
    }
    return {
      start() {
        r = i.onSetup(o), wt.forEach((u) => {
          const c = et[u];
          let d = () => !1;
          e[c] && (d = () => !0), this.on(u, d, s(c));
        });
      },
      stop() {
        i.onStop(r);
      },
      trash() {
        i.onTrash(r);
      },
      combineFeatures() {
        i.onCombineFeatures(r);
      },
      uncombineFeatures() {
        i.onUncombineFeatures(r);
      },
      render(u, c) {
        i.toDisplayFeatures(r, u, c);
      }
    };
  };
}
function Dt(e) {
  const t = Object.keys(e.options.modes).reduce((a, l) => (a[l] = Rt(e.options.modes[l]), a), {});
  let n = {}, o = {};
  const r = {};
  let i = null, s = null;
  r.drag = function(a, l) {
    l({
      point: a.point,
      time: (/* @__PURE__ */ new Date()).getTime()
    }) ? (e.ui.queueMapClasses({ mouse: I.DRAG }), s.drag(a)) : a.originalEvent.stopPropagation();
  }, r.mousedrag = function(a) {
    r.drag(a, (l) => !ge(n, l));
  }, r.touchdrag = function(a) {
    r.drag(a, (l) => !me(o, l));
  }, r.mousemove = function(a) {
    if ((a.originalEvent.buttons !== void 0 ? a.originalEvent.buttons : a.originalEvent.which) === 1)
      return r.mousedrag(a);
    const p = Q(a, e);
    a.featureTarget = p, s.mousemove(a);
  }, r.mousedown = function(a) {
    n = {
      time: (/* @__PURE__ */ new Date()).getTime(),
      point: a.point
    };
    const l = Q(a, e);
    a.featureTarget = l, s.mousedown(a);
  }, r.mouseup = function(a) {
    const l = Q(a, e);
    a.featureTarget = l, ge(n, {
      point: a.point,
      time: (/* @__PURE__ */ new Date()).getTime()
    }) ? s.click(a) : s.mouseup(a);
  }, r.mouseout = function(a) {
    s.mouseout(a);
  }, r.touchstart = function(a) {
    if (!e.options.touchEnabled)
      return;
    o = {
      time: (/* @__PURE__ */ new Date()).getTime(),
      point: a.point
    };
    const l = $.touch(a, null, e)[0];
    a.featureTarget = l, s.touchstart(a);
  }, r.touchmove = function(a) {
    if (e.options.touchEnabled)
      return s.touchmove(a), r.touchdrag(a);
  }, r.touchend = function(a) {
    if (a.originalEvent.preventDefault(), !e.options.touchEnabled)
      return;
    const l = $.touch(a, null, e)[0];
    a.featureTarget = l, me(o, {
      time: (/* @__PURE__ */ new Date()).getTime(),
      point: a.point
    }) ? s.tap(a) : s.touchend(a);
  };
  const u = (a) => {
    const l = fe(a), p = pe(a), T = We(a);
    return !(l || p || T);
  };
  r.keydown = function(a) {
    (a.srcElement || a.target).classList.contains(v.CANVAS) && ((fe(a) || pe(a)) && e.options.controls.trash ? (a.preventDefault(), s.trash()) : u(a) ? s.keydown(a) : Xe(a) && e.options.controls.point ? c(m.DRAW_POINT) : qe(a) && e.options.controls.line_string ? c(m.DRAW_LINE_STRING) : He(a) && e.options.controls.polygon && c(m.DRAW_POLYGON));
  }, r.keyup = function(a) {
    u(a) && s.keyup(a);
  }, r.zoomend = function() {
    e.store.changeZoom();
  }, r.data = function(a) {
    if (a.dataType === "style") {
      const { setup: l, map: p, options: T, store: w } = e;
      T.styles.some((W) => p.getLayer(W.id)) || (l.addLayers(), w.setDirty(), w.render());
    }
  };
  function c(a, l, p = {}) {
    s.stop();
    const T = t[a];
    if (T === void 0)
      throw new Error(`${a} is not valid`);
    i = a;
    const w = T(e, l);
    s = ye(w, e), p.silent || e.map.fire(N.MODE_CHANGE, { mode: a }), e.store.setDirty(), e.store.render();
  }
  const d = {
    trash: !1,
    combineFeatures: !1,
    uncombineFeatures: !1
  };
  function g(a) {
    let l = !1;
    Object.keys(a).forEach((p) => {
      if (d[p] === void 0) throw new Error("Invalid action type");
      d[p] !== a[p] && (l = !0), d[p] = a[p];
    }), l && e.map.fire(N.ACTIONABLE, { actions: d });
  }
  return {
    start() {
      i = e.options.defaultMode, s = ye(t[i](e), e);
    },
    changeMode: c,
    actionable: g,
    currentModeName() {
      return i;
    },
    currentModeRender(a, l) {
      return s.render(a, l);
    },
    fire(a, l) {
      e.map && e.map.fire(a, l);
    },
    addEventListeners() {
      e.map.on("mousemove", r.mousemove), e.map.on("mousedown", r.mousedown), e.map.on("mouseup", r.mouseup), e.map.on("data", r.data), e.map.on("touchmove", r.touchmove), e.map.on("touchstart", r.touchstart), e.map.on("touchend", r.touchend), e.container.addEventListener("mouseout", r.mouseout), e.options.keybindings && (e.container.addEventListener("keydown", r.keydown), e.container.addEventListener("keyup", r.keyup));
    },
    removeEventListeners() {
      e.map.off("mousemove", r.mousemove), e.map.off("mousedown", r.mousedown), e.map.off("mouseup", r.mouseup), e.map.off("data", r.data), e.map.off("touchmove", r.touchmove), e.map.off("touchstart", r.touchstart), e.map.off("touchend", r.touchend), e.container.removeEventListener("mouseout", r.mouseout), e.options.keybindings && (e.container.removeEventListener("keydown", r.keydown), e.container.removeEventListener("keyup", r.keyup));
    },
    trash(a) {
      s.trash(a);
    },
    combineFeatures() {
      s.combineFeatures();
    },
    uncombineFeatures() {
      s.uncombineFeatures();
    },
    getMode() {
      return i;
    }
  };
}
function H(e) {
  return [].concat(e).filter((t) => t !== void 0);
}
function Ut() {
  const e = this;
  if (!(e.ctx.map && e.ctx.map.getSource(P.HOT) !== void 0)) return c();
  const n = e.ctx.events.currentModeName();
  e.ctx.ui.queueMapClasses({ mode: n });
  let o = [], r = [];
  e.isDirty ? r = e.getAllIds() : (o = e.getChangedIds().filter((d) => e.get(d) !== void 0), r = e.sources.hot.filter((d) => d.properties.id && o.indexOf(d.properties.id) === -1 && e.get(d.properties.id) !== void 0).map((d) => d.properties.id)), e.sources.hot = [];
  const i = e.sources.cold.length;
  e.sources.cold = e.isDirty ? [] : e.sources.cold.filter((d) => {
    const g = d.properties.id || d.properties.parent;
    return o.indexOf(g) === -1;
  });
  const s = i !== e.sources.cold.length || r.length > 0;
  o.forEach((d) => u(d, "hot")), r.forEach((d) => u(d, "cold"));
  function u(d, g) {
    const a = e.get(d).internal(n);
    e.ctx.events.currentModeRender(a, (l) => {
      l.properties.mode = n, e.sources[g].push(l);
    });
  }
  s && e.ctx.map.getSource(P.COLD).setData({
    type: f.FEATURE_COLLECTION,
    features: e.sources.cold
  }), e.ctx.map.getSource(P.HOT).setData({
    type: f.FEATURE_COLLECTION,
    features: e.sources.hot
  }), c();
  function c() {
    e.isDirty = !1, e.clearChangedIds();
  }
}
function C(e) {
  this._features = {}, this._featureIds = new F(), this._selectedFeatureIds = new F(), this._selectedCoordinates = [], this._changedFeatureIds = new F(), this._emitSelectionChange = !1, this._mapInitialConfig = {}, this.ctx = e, this.sources = {
    hot: [],
    cold: []
  };
  let t;
  this.render = () => {
    t || (t = requestAnimationFrame(() => {
      t = null, Ut.call(this), this._emitSelectionChange && (this.ctx.events.fire(N.SELECTION_CHANGE, {
        features: this.getSelected().map((n) => n.toGeoJSON()),
        points: this.getSelectedCoordinates().map((n) => ({
          type: f.FEATURE,
          properties: {},
          geometry: {
            type: f.POINT,
            coordinates: n.coordinates
          }
        }))
      }), this._emitSelectionChange = !1), this.ctx.events.fire(N.RENDER, {});
    }));
  }, this.isDirty = !1;
}
C.prototype.createRenderBatch = function() {
  const e = this.render;
  let t = 0;
  return this.render = function() {
    t++;
  }, () => {
    this.render = e, t > 0 && this.render();
  };
};
C.prototype.setDirty = function() {
  return this.isDirty = !0, this;
};
C.prototype.featureCreated = function(e, t = {}) {
  if (this._changedFeatureIds.add(e), (t.silent != null ? t.silent : this.ctx.options.suppressAPIEvents) !== !0) {
    const o = this.get(e);
    this.ctx.events.fire(N.CREATE, {
      features: [o.toGeoJSON()]
    });
  }
  return this;
};
C.prototype.featureChanged = function(e, t = {}) {
  return this._changedFeatureIds.add(e), (t.silent != null ? t.silent : this.ctx.options.suppressAPIEvents) !== !0 && this.ctx.events.fire(N.UPDATE, {
    action: t.action ? t.action : X.CHANGE_COORDINATES,
    features: [this.get(e).toGeoJSON()]
  }), this;
};
C.prototype.getChangedIds = function() {
  return this._changedFeatureIds.values();
};
C.prototype.clearChangedIds = function() {
  return this._changedFeatureIds.clear(), this;
};
C.prototype.getAllIds = function() {
  return this._featureIds.values();
};
C.prototype.add = function(e, t = {}) {
  return this._features[e.id] = e, this._featureIds.add(e.id), this.featureCreated(e.id, { silent: t.silent }), this;
};
C.prototype.delete = function(e, t = {}) {
  const n = [];
  return H(e).forEach((o) => {
    this._featureIds.has(o) && (this._featureIds.delete(o), this._selectedFeatureIds.delete(o), t.silent || n.indexOf(this._features[o]) === -1 && n.push(this._features[o].toGeoJSON()), delete this._features[o], this.isDirty = !0);
  }), n.length && this.ctx.events.fire(N.DELETE, { features: n }), tt(this, t), this;
};
C.prototype.get = function(e) {
  return this._features[e];
};
C.prototype.getAll = function() {
  return Object.keys(this._features).map((e) => this._features[e]);
};
C.prototype.select = function(e, t = {}) {
  return H(e).forEach((n) => {
    this._selectedFeatureIds.has(n) || (this._selectedFeatureIds.add(n), this._changedFeatureIds.add(n), t.silent || (this._emitSelectionChange = !0));
  }), this;
};
C.prototype.deselect = function(e, t = {}) {
  return H(e).forEach((n) => {
    this._selectedFeatureIds.has(n) && (this._selectedFeatureIds.delete(n), this._changedFeatureIds.add(n), t.silent || (this._emitSelectionChange = !0));
  }), tt(this, t), this;
};
C.prototype.clearSelected = function(e = {}) {
  return this.deselect(this._selectedFeatureIds.values(), { silent: e.silent }), this;
};
C.prototype.setSelected = function(e, t = {}) {
  return e = H(e), this.deselect(this._selectedFeatureIds.values().filter((n) => e.indexOf(n) === -1), { silent: t.silent }), this.select(e.filter((n) => !this._selectedFeatureIds.has(n)), { silent: t.silent }), this;
};
C.prototype.setSelectedCoordinates = function(e) {
  return this._selectedCoordinates = e, this._emitSelectionChange = !0, this;
};
C.prototype.clearSelectedCoordinates = function() {
  return this._selectedCoordinates = [], this._emitSelectionChange = !0, this;
};
C.prototype.getSelectedIds = function() {
  return this._selectedFeatureIds.values();
};
C.prototype.getSelected = function() {
  return this.getSelectedIds().map((e) => this.get(e));
};
C.prototype.getSelectedCoordinates = function() {
  return this._selectedCoordinates.map((t) => ({
    coordinates: this.get(t.feature_id).getCoordinate(t.coord_path)
  }));
};
C.prototype.isSelected = function(e) {
  return this._selectedFeatureIds.has(e);
};
C.prototype.setFeatureProperty = function(e, t, n, o = {}) {
  this.get(e).setProperty(t, n), this.featureChanged(e, {
    silent: o.silent,
    action: X.CHANGE_PROPERTIES
  });
};
function tt(e, t = {}) {
  const n = e._selectedCoordinates.filter((o) => e._selectedFeatureIds.has(o.feature_id));
  e._selectedCoordinates.length !== n.length && !t.silent && (e._emitSelectionChange = !0), e._selectedCoordinates = n;
}
C.prototype.storeMapConfig = function() {
  Je.forEach((e) => {
    this.ctx.map[e] && (this._mapInitialConfig[e] = this.ctx.map[e].isEnabled());
  });
};
C.prototype.restoreMapConfig = function() {
  Object.keys(this._mapInitialConfig).forEach((e) => {
    this._mapInitialConfig[e] ? this.ctx.map[e].enable() : this.ctx.map[e].disable();
  });
};
C.prototype.getInitialConfigValue = function(e) {
  return this._mapInitialConfig[e] !== void 0 ? this._mapInitialConfig[e] : !0;
};
const kt = ["mode", "feature", "mouse"];
function Vt(e) {
  const t = {};
  let n = null, o = {
    mode: null,
    // e.g. mode-direct_select
    feature: null,
    // e.g. feature-vertex
    mouse: null
    // e.g. mouse-move
  }, r = {
    mode: null,
    feature: null,
    mouse: null
  };
  function i() {
    s({ mode: null, feature: null, mouse: null }), u();
  }
  function s(l) {
    r = Object.assign(r, l);
  }
  function u() {
    if (!e.container) return;
    const l = [], p = [];
    kt.forEach((T) => {
      r[T] !== o[T] && (l.push(`${T}-${o[T]}`), r[T] !== null && p.push(`${T}-${r[T]}`));
    }), l.length > 0 && e.container.classList.remove(...l), p.length > 0 && e.container.classList.add(...p), o = Object.assign(o, r);
  }
  function c(l, p = {}) {
    const T = document.createElement("button");
    return T.className = `${v.CONTROL_BUTTON} ${p.className}`, T.setAttribute("title", p.title), p.container.appendChild(T), T.addEventListener("click", (w) => {
      if (w.preventDefault(), w.stopPropagation(), w.target === n) {
        d(), p.onDeactivate();
        return;
      }
      g(l), p.onActivate();
    }, !0), T;
  }
  function d() {
    n && (n.classList.remove(v.ACTIVE_BUTTON), n = null);
  }
  function g(l) {
    d();
    const p = t[l];
    p && p && l !== "trash" && (p.classList.add(v.ACTIVE_BUTTON), n = p);
  }
  function S() {
    const l = e.options.controls, p = document.createElement("div");
    return p.className = `${v.CONTROL_GROUP} ${v.CONTROL_BASE}`, l && (l[A.POINT] && (t[A.POINT] = c(A.POINT, {
      container: p,
      className: v.CONTROL_BUTTON_POINT,
      title: `Marker tool ${e.options.keybindings ? "(1)" : ""}`,
      onActivate: () => e.events.changeMode(m.DRAW_POINT),
      onDeactivate: () => e.events.trash()
    })), l[A.LINE] && (t[A.LINE] = c(A.LINE, {
      container: p,
      className: v.CONTROL_BUTTON_LINE,
      title: `LineString tool ${e.options.keybindings ? "(2)" : ""}`,
      onActivate: () => e.events.changeMode(m.DRAW_LINE_STRING),
      onDeactivate: () => e.events.trash()
    })), l[A.POLYGON] && (t[A.POLYGON] = c(A.POLYGON, {
      container: p,
      className: v.CONTROL_BUTTON_POLYGON,
      title: `Polygon tool ${e.options.keybindings ? "(3)" : ""}`,
      onActivate: () => e.events.changeMode(m.DRAW_POLYGON),
      onDeactivate: () => e.events.trash()
    })), l.trash && (t.trash = c("trash", {
      container: p,
      className: v.CONTROL_BUTTON_TRASH,
      title: "Delete",
      onActivate: () => {
        e.events.trash();
      }
    })), l.combine_features && (t.combine_features = c("combineFeatures", {
      container: p,
      className: v.CONTROL_BUTTON_COMBINE_FEATURES,
      title: "Combine",
      onActivate: () => {
        e.events.combineFeatures();
      }
    })), l.uncombine_features && (t.uncombine_features = c("uncombineFeatures", {
      container: p,
      className: v.CONTROL_BUTTON_UNCOMBINE_FEATURES,
      title: "Uncombine",
      onActivate: () => {
        e.events.uncombineFeatures();
      }
    }))), p;
  }
  function a() {
    Object.keys(t).forEach((l) => {
      const p = t[l];
      p.parentNode && p.parentNode.removeChild(p), delete t[l];
    });
  }
  return {
    setActiveButton: g,
    queueMapClasses: s,
    updateMapClasses: u,
    clearMapClasses: i,
    addButtons: S,
    removeButtons: a
  };
}
function xt(e) {
  let t = null, n = null;
  const o = {
    onRemove() {
      return e.map.off("load", o.connect), clearInterval(n), o.removeLayers(), e.store.restoreMapConfig(), e.ui.removeButtons(), e.events.removeEventListeners(), e.ui.clearMapClasses(), e.boxZoomInitial && e.map.boxZoom.enable(), e.map = null, e.container = null, e.store = null, t && t.parentNode && t.parentNode.removeChild(t), t = null, this;
    },
    connect() {
      e.map.off("load", o.connect), clearInterval(n), o.addLayers(), e.store.storeMapConfig(), e.events.addEventListeners();
    },
    onAdd(r) {
      if (e.map = r, e.events = Dt(e), e.ui = Vt(e), e.container = r.getContainer(), e.store = new C(e), t = e.ui.addButtons(), e.options.boxSelect) {
        e.boxZoomInitial = r.boxZoom.isEnabled(), r.boxZoom.disable();
        const i = r.dragPan.isEnabled();
        r.dragPan.disable(), r.dragPan.enable(), i || r.dragPan.disable();
      }
      return r.loaded() ? o.connect() : (r.on("load", o.connect), n = setInterval(() => {
        r.loaded() && o.connect();
      }, 16)), e.events.start(), t;
    },
    addLayers() {
      e.map.addSource(P.COLD, {
        data: {
          type: f.FEATURE_COLLECTION,
          features: []
        },
        type: "geojson"
      }), e.map.addSource(P.HOT, {
        data: {
          type: f.FEATURE_COLLECTION,
          features: []
        },
        type: "geojson"
      }), e.options.styles.forEach((r) => {
        e.map.addLayer(r);
      }), e.store.setDirty(!0), e.store.render();
    },
    // Check for layers and sources before attempting to remove
    // If user adds draw control and removes it before the map is loaded, layers and sources will be missing
    removeLayers() {
      e.options.styles.forEach((r) => {
        e.map.getLayer(r.id) && e.map.removeLayer(r.id);
      }), e.map.getSource(P.COLD) && e.map.removeSource(P.COLD), e.map.getSource(P.HOT) && e.map.removeSource(P.HOT);
    }
  };
  return e.setup = o, o;
}
const ce = "#3bb2d0", K = "#fbb03b", Fe = "#fff", nt = [
  // Polygons
  //   Solid fill
  //   Active state defines color
  {
    id: "gl-draw-polygon-fill",
    type: "fill",
    filter: [
      "all",
      ["==", "$type", "Polygon"]
    ],
    paint: {
      "fill-color": [
        "case",
        ["==", ["get", "active"], "true"],
        K,
        ce
      ],
      "fill-opacity": 0.1
    }
  },
  // Lines
  // Polygon
  //   Matches Lines AND Polygons
  //   Active state defines color
  {
    id: "gl-draw-lines",
    type: "line",
    filter: [
      "any",
      ["==", "$type", "LineString"],
      ["==", "$type", "Polygon"]
    ],
    layout: {
      "line-cap": "round",
      "line-join": "round"
    },
    paint: {
      "line-color": [
        "case",
        ["==", ["get", "active"], "true"],
        K,
        ce
      ],
      "line-dasharray": [
        "case",
        ["==", ["get", "active"], "true"],
        [0.2, 2],
        [2, 0]
      ],
      "line-width": 2
    }
  },
  // Points
  //   Circle with an outline
  //   Active state defines size and color
  {
    id: "gl-draw-point-outer",
    type: "circle",
    filter: [
      "all",
      ["==", "$type", "Point"],
      ["==", "meta", "feature"]
    ],
    paint: {
      "circle-radius": [
        "case",
        ["==", ["get", "active"], "true"],
        7,
        5
      ],
      "circle-color": Fe
    }
  },
  {
    id: "gl-draw-point-inner",
    type: "circle",
    filter: [
      "all",
      ["==", "$type", "Point"],
      ["==", "meta", "feature"]
    ],
    paint: {
      "circle-radius": [
        "case",
        ["==", ["get", "active"], "true"],
        5,
        3
      ],
      "circle-color": [
        "case",
        ["==", ["get", "active"], "true"],
        K,
        ce
      ]
    }
  },
  // Vertex
  //   Visible when editing polygons and lines
  //   Similar behaviour to Points
  //   Active state defines size
  {
    id: "gl-draw-vertex-outer",
    type: "circle",
    filter: [
      "all",
      ["==", "$type", "Point"],
      ["==", "meta", "vertex"],
      ["!=", "mode", "simple_select"]
    ],
    paint: {
      "circle-radius": [
        "case",
        ["==", ["get", "active"], "true"],
        7,
        5
      ],
      "circle-color": Fe
    }
  },
  {
    id: "gl-draw-vertex-inner",
    type: "circle",
    filter: [
      "all",
      ["==", "$type", "Point"],
      ["==", "meta", "vertex"],
      ["!=", "mode", "simple_select"]
    ],
    paint: {
      "circle-radius": [
        "case",
        ["==", ["get", "active"], "true"],
        5,
        3
      ],
      "circle-color": K
    }
  },
  // Midpoint
  //   Visible when editing polygons and lines
  //   Tapping or dragging them adds a new vertex to the feature
  {
    id: "gl-draw-midpoint",
    type: "circle",
    filter: [
      "all",
      ["==", "meta", "midpoint"]
    ],
    paint: {
      "circle-radius": 3,
      "circle-color": K
    }
  }
];
function x(e, t) {
  this.x = e, this.y = t;
}
x.prototype = {
  /**
   * Clone this point, returning a new point that can be modified
   * without affecting the old one.
   * @return {Point} the clone
   */
  clone() {
    return new x(this.x, this.y);
  },
  /**
   * Add this point's x & y coordinates to another point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  add(e) {
    return this.clone()._add(e);
  },
  /**
   * Subtract this point's x & y coordinates to from point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  sub(e) {
    return this.clone()._sub(e);
  },
  /**
   * Multiply this point's x & y coordinates by point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  multByPoint(e) {
    return this.clone()._multByPoint(e);
  },
  /**
   * Divide this point's x & y coordinates by point,
   * yielding a new point.
   * @param {Point} p the other point
   * @return {Point} output point
   */
  divByPoint(e) {
    return this.clone()._divByPoint(e);
  },
  /**
   * Multiply this point's x & y coordinates by a factor,
   * yielding a new point.
   * @param {number} k factor
   * @return {Point} output point
   */
  mult(e) {
    return this.clone()._mult(e);
  },
  /**
   * Divide this point's x & y coordinates by a factor,
   * yielding a new point.
   * @param {number} k factor
   * @return {Point} output point
   */
  div(e) {
    return this.clone()._div(e);
  },
  /**
   * Rotate this point around the 0, 0 origin by an angle a,
   * given in radians
   * @param {number} a angle to rotate around, in radians
   * @return {Point} output point
   */
  rotate(e) {
    return this.clone()._rotate(e);
  },
  /**
   * Rotate this point around p point by an angle a,
   * given in radians
   * @param {number} a angle to rotate around, in radians
   * @param {Point} p Point to rotate around
   * @return {Point} output point
   */
  rotateAround(e, t) {
    return this.clone()._rotateAround(e, t);
  },
  /**
   * Multiply this point by a 4x1 transformation matrix
   * @param {[number, number, number, number]} m transformation matrix
   * @return {Point} output point
   */
  matMult(e) {
    return this.clone()._matMult(e);
  },
  /**
   * Calculate this point but as a unit vector from 0, 0, meaning
   * that the distance from the resulting point to the 0, 0
   * coordinate will be equal to 1 and the angle from the resulting
   * point to the 0, 0 coordinate will be the same as before.
   * @return {Point} unit vector point
   */
  unit() {
    return this.clone()._unit();
  },
  /**
   * Compute a perpendicular point, where the new y coordinate
   * is the old x coordinate and the new x coordinate is the old y
   * coordinate multiplied by -1
   * @return {Point} perpendicular point
   */
  perp() {
    return this.clone()._perp();
  },
  /**
   * Return a version of this point with the x & y coordinates
   * rounded to integers.
   * @return {Point} rounded point
   */
  round() {
    return this.clone()._round();
  },
  /**
   * Return the magnitude of this point: this is the Euclidean
   * distance from the 0, 0 coordinate to this point's x and y
   * coordinates.
   * @return {number} magnitude
   */
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  /**
   * Judge whether this point is equal to another point, returning
   * true or false.
   * @param {Point} other the other point
   * @return {boolean} whether the points are equal
   */
  equals(e) {
    return this.x === e.x && this.y === e.y;
  },
  /**
   * Calculate the distance from this point to another point
   * @param {Point} p the other point
   * @return {number} distance
   */
  dist(e) {
    return Math.sqrt(this.distSqr(e));
  },
  /**
   * Calculate the distance from this point to another point,
   * without the square root step. Useful if you're comparing
   * relative distances.
   * @param {Point} p the other point
   * @return {number} distance
   */
  distSqr(e) {
    const t = e.x - this.x, n = e.y - this.y;
    return t * t + n * n;
  },
  /**
   * Get the angle from the 0, 0 coordinate to this point, in radians
   * coordinates.
   * @return {number} angle
   */
  angle() {
    return Math.atan2(this.y, this.x);
  },
  /**
   * Get the angle from this point to another point, in radians
   * @param {Point} b the other point
   * @return {number} angle
   */
  angleTo(e) {
    return Math.atan2(this.y - e.y, this.x - e.x);
  },
  /**
   * Get the angle between this point and another point, in radians
   * @param {Point} b the other point
   * @return {number} angle
   */
  angleWith(e) {
    return this.angleWithSep(e.x, e.y);
  },
  /**
   * Find the angle of the two vectors, solving the formula for
   * the cross product a x b = |a||b|sin(θ) for θ.
   * @param {number} x the x-coordinate
   * @param {number} y the y-coordinate
   * @return {number} the angle in radians
   */
  angleWithSep(e, t) {
    return Math.atan2(
      this.x * t - this.y * e,
      this.x * e + this.y * t
    );
  },
  /** @param {[number, number, number, number]} m */
  _matMult(e) {
    const t = e[0] * this.x + e[1] * this.y, n = e[2] * this.x + e[3] * this.y;
    return this.x = t, this.y = n, this;
  },
  /** @param {Point} p */
  _add(e) {
    return this.x += e.x, this.y += e.y, this;
  },
  /** @param {Point} p */
  _sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  },
  /** @param {number} k */
  _mult(e) {
    return this.x *= e, this.y *= e, this;
  },
  /** @param {number} k */
  _div(e) {
    return this.x /= e, this.y /= e, this;
  },
  /** @param {Point} p */
  _multByPoint(e) {
    return this.x *= e.x, this.y *= e.y, this;
  },
  /** @param {Point} p */
  _divByPoint(e) {
    return this.x /= e.x, this.y /= e.y, this;
  },
  _unit() {
    return this._div(this.mag()), this;
  },
  _perp() {
    const e = this.y;
    return this.y = this.x, this.x = -e, this;
  },
  /** @param {number} angle */
  _rotate(e) {
    const t = Math.cos(e), n = Math.sin(e), o = t * this.x - n * this.y, r = n * this.x + t * this.y;
    return this.x = o, this.y = r, this;
  },
  /**
   * @param {number} angle
   * @param {Point} p
   */
  _rotateAround(e, t) {
    const n = Math.cos(e), o = Math.sin(e), r = t.x + n * (this.x - t.x) - o * (this.y - t.y), i = t.y + o * (this.x - t.x) + n * (this.y - t.y);
    return this.x = r, this.y = i, this;
  },
  _round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  },
  constructor: x
};
x.convert = function(e) {
  if (e instanceof x)
    return (
      /** @type {Point} */
      e
    );
  if (Array.isArray(e))
    return new x(+e[0], +e[1]);
  if (e.x !== void 0 && e.y !== void 0)
    return new x(+e.x, +e.y);
  throw new Error("Expected [x, y] or {x, y} point format");
};
function _e(e, t) {
  const n = t.getBoundingClientRect();
  return new x(
    e.clientX - n.left - (t.clientLeft || 0),
    e.clientY - n.top - (t.clientTop || 0)
  );
}
function J(e, t, n, o) {
  return {
    type: f.FEATURE,
    properties: {
      meta: O.VERTEX,
      parent: e,
      coord_path: n,
      active: o ? _.ACTIVE : _.INACTIVE
    },
    geometry: {
      type: f.POINT,
      coordinates: t
    }
  };
}
function Gt(e) {
  if (!e)
    throw new Error("geojson is required");
  switch (e.type) {
    case "Feature":
      return ot(e);
    case "FeatureCollection":
      return Bt(e);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return Oe(e);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function ot(e) {
  const t = { type: "Feature" };
  return Object.keys(e).forEach((n) => {
    switch (n) {
      case "type":
      case "properties":
      case "geometry":
        return;
      default:
        t[n] = e[n];
    }
  }), t.properties = rt(e.properties), e.geometry == null ? t.geometry = null : t.geometry = Oe(e.geometry), t;
}
function rt(e) {
  const t = {};
  return e && Object.keys(e).forEach((n) => {
    const o = e[n];
    typeof o == "object" ? o === null ? t[n] = null : Array.isArray(o) ? t[n] = o.map((r) => r) : t[n] = rt(o) : t[n] = o;
  }), t;
}
function Bt(e) {
  const t = { type: "FeatureCollection" };
  return Object.keys(e).forEach((n) => {
    switch (n) {
      case "type":
      case "features":
        return;
      default:
        t[n] = e[n];
    }
  }), t.features = e.features.map((n) => ot(n)), t;
}
function Oe(e) {
  const t = { type: e.type };
  return e.bbox && (t.bbox = e.bbox), e.type === "GeometryCollection" ? (t.geometries = e.geometries.map((n) => Oe(n)), t) : (t.coordinates = it(e.coordinates), t);
}
function it(e) {
  const t = e;
  return typeof t[0] != "object" ? t.slice() : t.map((n) => it(n));
}
function we(e, t = {}) {
  return st(e, "mercator", t);
}
function $t(e, t = {}) {
  return st(e, "wgs84", t);
}
function st(e, t, n = {}) {
  n = n || {};
  var o = n.mutate;
  if (!e) throw new Error("geojson is required");
  return Array.isArray(e) && ft(e[0]) ? e = t === "mercator" ? Re(e) : De(e) : (o !== !0 && (e = Gt(e)), pt(e, function(r) {
    var i = t === "mercator" ? Re(r) : De(r);
    r[0] = i[0], r[1] = i[1];
  })), e;
}
function Re(e) {
  var t = Math.PI / 180, n = 6378137, o = 20037508342789244e-9, r = Math.abs(e[0]) <= 180 ? e[0] : e[0] - Jt(e[0]) * 360, i = [
    n * r * t,
    n * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * e[1] * t))
  ];
  return i[0] > o && (i[0] = o), i[0] < -20037508342789244e-9 && (i[0] = -20037508342789244e-9), i[1] > o && (i[1] = o), i[1] < -20037508342789244e-9 && (i[1] = -20037508342789244e-9), i;
}
function De(e) {
  var t = 180 / Math.PI, n = 6378137;
  return [
    e[0] * t / n,
    (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-e[1] / n))) * t
  ];
}
function Jt(e) {
  return e < 0 ? -1 : e > 0 ? 1 : 0;
}
function at(e, t, n) {
  const o = t.geometry.coordinates, r = n.geometry.coordinates;
  if (o[1] > de || o[1] < le || r[1] > de || r[1] < le)
    return null;
  const i = we(o), s = we(r), u = (S) => Number(S.toFixed(8)), c = (S, a) => (S + a) / 2, d = $t([
    c(i[0], s[0]),
    c(i[1], s[1])
  ]), g = [
    u(d[0]),
    u(d[1])
  ];
  return {
    type: f.FEATURE,
    properties: {
      meta: O.MIDPOINT,
      parent: e,
      lng: g[0],
      lat: g[1],
      coord_path: n.properties.coord_path
    },
    geometry: {
      type: f.POINT,
      coordinates: g
    }
  };
}
function ae(e, t = {}, n = null) {
  const { type: o, coordinates: r } = e.geometry, i = e.properties && e.properties.id;
  let s = [];
  o === f.POINT ? s.push(J(i, r, n, c(n))) : o === f.POLYGON ? r.forEach((g, S) => {
    u(g, n !== null ? `${n}.${S}` : String(S));
  }) : o === f.LINE_STRING ? u(r, n) : o.indexOf(f.MULTI_PREFIX) === 0 && d();
  function u(g, S) {
    let a = "", l = null;
    g.forEach((p, T) => {
      const w = S != null ? `${S}.${T}` : String(T), Y = J(i, p, w, c(w));
      if (t.midpoints && l) {
        const ve = at(i, l, Y);
        ve && s.push(ve);
      }
      l = Y;
      const W = JSON.stringify(p);
      a !== W && s.push(Y), T === 0 && (a = W);
    });
  }
  function c(g) {
    return t.selectedPaths ? t.selectedPaths.indexOf(g) !== -1 : !1;
  }
  function d() {
    const g = o.replace(f.MULTI_PREFIX, "");
    r.forEach((S, a) => {
      const l = {
        type: f.FEATURE,
        properties: e.properties,
        geometry: {
          type: g,
          coordinates: S
        }
      };
      s = s.concat(ae(l, t, a));
    });
  }
  return s;
}
const R = {
  enable(e) {
    setTimeout(() => {
      !e.map || !e.map.doubleClickZoom || !e._ctx || !e._ctx.store || !e._ctx.store.getInitialConfigValue || e._ctx.store.getInitialConfigValue("doubleClickZoom") && e.map.doubleClickZoom.enable();
    }, 0);
  },
  disable(e) {
    setTimeout(() => {
      !e.map || !e.map.doubleClickZoom || e.map.doubleClickZoom.disable();
    }, 0);
  }
}, {
  LAT_MIN: Z,
  LAT_MAX: z,
  LAT_RENDERED_MIN: Ue,
  LAT_RENDERED_MAX: ke,
  LNG_MIN: Ve,
  LNG_MAX: xe
} = Ye;
function Yt(e) {
  const t = {
    Point: 0,
    LineString: 1,
    Polygon: 2,
    MultiPoint: 1,
    MultiLineString: 2,
    MultiPolygon: 3
  }[e.geometry.type], n = [e.geometry.coordinates].flat(t), o = n.map((u) => u[0]), r = n.map((u) => u[1]), i = (u) => Math.min.apply(null, u), s = (u) => Math.max.apply(null, u);
  return [i(o), i(r), s(o), s(r)];
}
function Me(e, t) {
  let n = Z, o = z, r = Z, i = z, s = xe, u = Ve;
  e.forEach((d) => {
    const g = Yt(d), S = g[1], a = g[3], l = g[0], p = g[2];
    S > n && (n = S), a < o && (o = a), a > r && (r = a), S < i && (i = S), l < s && (s = l), p > u && (u = p);
  });
  const c = t;
  return n + c.lat > ke && (c.lat = ke - n), r + c.lat > z && (c.lat = z - r), o + c.lat < Ue && (c.lat = Ue - o), i + c.lat < Z && (c.lat = Z - i), s + c.lng <= Ve && (c.lng += Math.ceil(Math.abs(c.lng) / 360) * 360), u + c.lng >= xe && (c.lng -= Math.ceil(Math.abs(c.lng) / 360) * 360), c;
}
function Ne(e, t) {
  const n = Me(e.map((o) => o.toGeoJSON()), t);
  e.forEach((o) => {
    const r = o.getCoordinates(), i = (d) => {
      const g = {
        lng: d[0] + n.lng,
        lat: d[1] + n.lat
      };
      return [g.lng, g.lat];
    }, s = (d) => d.map((g) => i(g)), u = (d) => d.map((g) => s(g));
    let c;
    o.type === f.POINT ? c = i(r) : o.type === f.LINE_STRING || o.type === f.MULTI_POINT ? c = r.map(i) : o.type === f.POLYGON || o.type === f.MULTI_LINE_STRING ? c = r.map(s) : o.type === f.MULTI_POLYGON && (c = r.map(u)), o.incomingCoords(c);
  });
}
const y = {};
y.onSetup = function(e) {
  const t = {
    dragMoveLocation: null,
    boxSelectStartLocation: null,
    boxSelectElement: void 0,
    boxSelecting: !1,
    canBoxSelect: !1,
    dragMoving: !1,
    canDragMove: !1,
    initialDragPanState: this.map.dragPan.isEnabled(),
    initiallySelectedFeatureIds: e.featureIds || []
  };
  return this.setSelected(t.initiallySelectedFeatureIds.filter((n) => this.getFeature(n) !== void 0)), this.fireActionable(), this.setActionableState({
    combineFeatures: !0,
    uncombineFeatures: !0,
    trash: !0
  }), t;
};
y.fireUpdate = function() {
  this.fire(N.UPDATE, {
    action: X.MOVE,
    features: this.getSelected().map((e) => e.toGeoJSON())
  });
};
y.fireActionable = function() {
  const e = this.getSelected(), t = e.filter(
    (i) => this.isInstanceOf("MultiFeature", i)
  );
  let n = !1;
  if (e.length > 1) {
    n = !0;
    const i = e[0].type.replace("Multi", "");
    e.forEach((s) => {
      s.type.replace("Multi", "") !== i && (n = !1);
    });
  }
  const o = t.length > 0, r = e.length > 0;
  this.setActionableState({
    combineFeatures: n,
    uncombineFeatures: o,
    trash: r
  });
};
y.getUniqueIds = function(e) {
  return e.length ? e.map((n) => n.properties.id).filter((n) => n !== void 0).reduce((n, o) => (n.add(o), n), new F()).values() : [];
};
y.stopExtendedInteractions = function(e) {
  e.boxSelectElement && (e.boxSelectElement.parentNode && e.boxSelectElement.parentNode.removeChild(e.boxSelectElement), e.boxSelectElement = null), (e.canDragMove || e.canBoxSelect) && e.initialDragPanState === !0 && this.map.dragPan.enable(), e.boxSelecting = !1, e.canBoxSelect = !1, e.dragMoving = !1, e.canDragMove = !1;
};
y.onStop = function() {
  R.enable(this);
};
y.onMouseMove = function(e, t) {
  return Ce(t) && e.dragMoving && this.fireUpdate(), this.stopExtendedInteractions(e), !0;
};
y.onMouseOut = function(e) {
  return e.dragMoving ? this.fireUpdate() : !0;
};
y.onTap = y.onClick = function(e, t) {
  if (ne(t)) return this.clickAnywhere(e, t);
  if (te(O.VERTEX)(t)) return this.clickOnVertex(e, t);
  if (Ce(t)) return this.clickOnFeature(e, t);
};
y.clickAnywhere = function(e) {
  const t = this.getSelectedIds();
  t.length && (this.clearSelectedFeatures(), t.forEach((n) => this.doRender(n))), R.enable(this), this.stopExtendedInteractions(e);
};
y.clickOnVertex = function(e, t) {
  this.changeMode(m.DIRECT_SELECT, {
    featureId: t.featureTarget.properties.parent,
    coordPath: t.featureTarget.properties.coord_path,
    startPos: t.lngLat
  }), this.updateUIClasses({ mouse: I.MOVE });
};
y.startOnActiveFeature = function(e, t) {
  this.stopExtendedInteractions(e), this.map.dragPan.disable(), this.doRender(t.featureTarget.properties.id), e.canDragMove = !0, e.dragMoveLocation = t.lngLat;
};
y.clickOnFeature = function(e, t) {
  R.disable(this), this.stopExtendedInteractions(e);
  const n = j(t), o = this.getSelectedIds(), r = t.featureTarget.properties.id, i = this.isSelected(r);
  if (!n && i && this.getFeature(r).type !== f.POINT)
    return this.changeMode(m.DIRECT_SELECT, {
      featureId: r
    });
  i && n ? (this.deselect(r), this.updateUIClasses({ mouse: I.POINTER }), o.length === 1 && R.enable(this)) : !i && n ? (this.select(r), this.updateUIClasses({ mouse: I.MOVE })) : !i && !n && (o.forEach((s) => this.doRender(s)), this.setSelected(r), this.updateUIClasses({ mouse: I.MOVE })), this.doRender(r);
};
y.onMouseDown = function(e, t) {
  if (e.initialDragPanState = this.map.dragPan.isEnabled(), B(t)) return this.startOnActiveFeature(e, t);
  if (this.drawConfig.boxSelect && Ke(t)) return this.startBoxSelect(e, t);
};
y.startBoxSelect = function(e, t) {
  this.stopExtendedInteractions(e), this.map.dragPan.disable(), e.boxSelectStartLocation = _e(t.originalEvent, this.map.getContainer()), e.canBoxSelect = !0;
};
y.onTouchStart = function(e, t) {
  if (B(t)) return this.startOnActiveFeature(e, t);
};
y.onDrag = function(e, t) {
  if (e.canDragMove) return this.dragMove(e, t);
  if (this.drawConfig.boxSelect && e.canBoxSelect) return this.whileBoxSelect(e, t);
};
y.whileBoxSelect = function(e, t) {
  e.boxSelecting = !0, this.updateUIClasses({ mouse: I.ADD }), e.boxSelectElement || (e.boxSelectElement = document.createElement("div"), e.boxSelectElement.classList.add(v.BOX_SELECT), this.map.getContainer().appendChild(e.boxSelectElement));
  const n = _e(t.originalEvent, this.map.getContainer()), o = Math.min(e.boxSelectStartLocation.x, n.x), r = Math.max(e.boxSelectStartLocation.x, n.x), i = Math.min(e.boxSelectStartLocation.y, n.y), s = Math.max(e.boxSelectStartLocation.y, n.y), u = `translate(${o}px, ${i}px)`;
  e.boxSelectElement.style.transform = u, e.boxSelectElement.style.WebkitTransform = u, e.boxSelectElement.style.width = `${r - o}px`, e.boxSelectElement.style.height = `${s - i}px`;
};
y.dragMove = function(e, t) {
  e.dragMoving = !0, t.originalEvent.stopPropagation();
  const n = {
    lng: t.lngLat.lng - e.dragMoveLocation.lng,
    lat: t.lngLat.lat - e.dragMoveLocation.lat
  };
  Ne(this.getSelected(), n), e.dragMoveLocation = t.lngLat;
};
y.onTouchEnd = y.onMouseUp = function(e, t) {
  if (e.dragMoving)
    this.fireUpdate();
  else if (e.boxSelecting) {
    const n = [
      e.boxSelectStartLocation,
      _e(t.originalEvent, this.map.getContainer())
    ], o = this.featuresAt(null, n, "click"), r = this.getUniqueIds(o).filter((i) => !this.isSelected(i));
    r.length && (this.select(r), r.forEach((i) => this.doRender(i)), this.updateUIClasses({ mouse: I.MOVE }));
  }
  this.stopExtendedInteractions(e);
};
y.toDisplayFeatures = function(e, t, n) {
  t.properties.active = this.isSelected(t.properties.id) ? _.ACTIVE : _.INACTIVE, n(t), this.fireActionable(), !(t.properties.active !== _.ACTIVE || t.geometry.type === f.POINT) && ae(t).forEach(n);
};
y.onTrash = function() {
  this.deleteFeature(this.getSelectedIds()), this.fireActionable();
};
y.onCombineFeatures = function() {
  const e = this.getSelected();
  if (e.length === 0 || e.length < 2) return;
  const t = [], n = [], o = e[0].type.replace("Multi", "");
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (i.type.replace("Multi", "") !== o)
      return;
    i.type.includes("Multi") ? i.getCoordinates().forEach((s) => {
      t.push(s);
    }) : t.push(i.getCoordinates()), n.push(i.toGeoJSON());
  }
  if (n.length > 1) {
    const r = this.newFeature({
      type: f.FEATURE,
      properties: n[0].properties,
      geometry: {
        type: `Multi${o}`,
        coordinates: t
      }
    });
    this.addFeature(r), this.deleteFeature(this.getSelectedIds(), { silent: !0 }), this.setSelected([r.id]), this.fire(N.COMBINE_FEATURES, {
      createdFeatures: [r.toGeoJSON()],
      deletedFeatures: n
    });
  }
  this.fireActionable();
};
y.onUncombineFeatures = function() {
  const e = this.getSelected();
  if (e.length === 0) return;
  const t = [], n = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    this.isInstanceOf("MultiFeature", r) && (r.getFeatures().forEach((i) => {
      this.addFeature(i), i.properties = r.properties, t.push(i.toGeoJSON()), this.select([i.id]);
    }), this.deleteFeature(r.id, { silent: !0 }), n.push(r.toGeoJSON()));
  }
  t.length > 1 && this.fire(N.UNCOMBINE_FEATURES, {
    createdFeatures: t,
    deletedFeatures: n
  }), this.fireActionable();
};
const ut = te(O.VERTEX), ct = te(O.MIDPOINT), E = {};
E.fireUpdate = function() {
  this.fire(N.UPDATE, {
    action: X.CHANGE_COORDINATES,
    features: this.getSelected().map((e) => e.toGeoJSON())
  });
};
E.fireActionable = function(e) {
  this.setActionableState({
    combineFeatures: !1,
    uncombineFeatures: !1,
    trash: e.selectedCoordPaths.length > 0
  });
};
E.startDragging = function(e, t) {
  e.initialDragPanState == null && (e.initialDragPanState = this.map.dragPan.isEnabled()), this.map.dragPan.disable(), e.canDragMove = !0, e.dragMoveLocation = t.lngLat;
};
E.stopDragging = function(e) {
  e.canDragMove && e.initialDragPanState === !0 && this.map.dragPan.enable(), e.initialDragPanState = null, e.dragMoving = !1, e.canDragMove = !1, e.dragMoveLocation = null;
};
E.onVertex = function(e, t) {
  this.startDragging(e, t);
  const n = t.featureTarget.properties, o = e.selectedCoordPaths.indexOf(n.coord_path);
  !j(t) && o === -1 ? e.selectedCoordPaths = [n.coord_path] : j(t) && o === -1 && e.selectedCoordPaths.push(n.coord_path);
  const r = this.pathsToCoordinates(e.featureId, e.selectedCoordPaths);
  this.setSelectedCoordinates(r);
};
E.onMidpoint = function(e, t) {
  this.startDragging(e, t);
  const n = t.featureTarget.properties;
  e.feature.addCoordinate(n.coord_path, n.lng, n.lat), this.fireUpdate(), e.selectedCoordPaths = [n.coord_path];
};
E.pathsToCoordinates = function(e, t) {
  return t.map((n) => ({ feature_id: e, coord_path: n }));
};
E.onFeature = function(e, t) {
  e.selectedCoordPaths.length === 0 ? this.startDragging(e, t) : this.stopDragging(e);
};
E.dragFeature = function(e, t, n) {
  Ne(this.getSelected(), n), e.dragMoveLocation = t.lngLat;
};
E.dragVertex = function(e, t, n) {
  const o = e.selectedCoordPaths.map((s) => e.feature.getCoordinate(s)), r = o.map((s) => ({
    type: f.FEATURE,
    properties: {},
    geometry: {
      type: f.POINT,
      coordinates: s
    }
  })), i = Me(r, n);
  for (let s = 0; s < o.length; s++) {
    const u = o[s];
    e.feature.updateCoordinate(e.selectedCoordPaths[s], u[0] + i.lng, u[1] + i.lat);
  }
};
E.clickNoTarget = function() {
  this.changeMode(m.SIMPLE_SELECT);
};
E.clickInactive = function() {
  this.changeMode(m.SIMPLE_SELECT);
};
E.clickActiveFeature = function(e) {
  e.selectedCoordPaths = [], this.clearSelectedCoordinates(), e.feature.changed();
};
E.onSetup = function(e) {
  const t = e.featureId, n = this.getFeature(t);
  if (!n)
    throw new Error("You must provide a featureId to enter direct_select mode");
  if (n.type === f.POINT)
    throw new TypeError("direct_select mode doesn't handle point features");
  const o = {
    featureId: t,
    feature: n,
    dragMoveLocation: e.startPos || null,
    dragMoving: !1,
    canDragMove: !1,
    selectedCoordPaths: e.coordPath ? [e.coordPath] : []
  };
  return this.setSelectedCoordinates(this.pathsToCoordinates(t, o.selectedCoordPaths)), this.setSelected(t), R.disable(this), this.setActionableState({
    trash: !0
  }), o;
};
E.onStop = function() {
  R.enable(this), this.clearSelectedCoordinates();
};
E.toDisplayFeatures = function(e, t, n) {
  e.featureId === t.properties.id ? (t.properties.active = _.ACTIVE, n(t), ae(t, {
    map: this.map,
    midpoints: !0,
    selectedPaths: e.selectedCoordPaths
  }).forEach(n)) : (t.properties.active = _.INACTIVE, n(t)), this.fireActionable(e);
};
E.onTrash = function(e) {
  e.selectedCoordPaths.sort((t, n) => n.localeCompare(t, "en", { numeric: !0 })).forEach((t) => e.feature.removeCoordinate(t)), this.fireUpdate(), e.selectedCoordPaths = [], this.clearSelectedCoordinates(), this.fireActionable(e), e.feature.isValid() === !1 && (this.deleteFeature([e.featureId]), this.changeMode(m.SIMPLE_SELECT, {}));
};
E.onMouseMove = function(e, t) {
  const n = B(t), o = ut(t), r = ct(t), i = e.selectedCoordPaths.length === 0;
  return n && i ? this.updateUIClasses({ mouse: I.MOVE }) : o && !i ? this.updateUIClasses({ mouse: I.MOVE }) : this.updateUIClasses({ mouse: I.NONE }), (o || n || r) && e.dragMoving && this.fireUpdate(), this.stopDragging(e), !0;
};
E.onMouseOut = function(e) {
  return e.dragMoving && this.fireUpdate(), !0;
};
E.onTouchStart = E.onMouseDown = function(e, t) {
  if (ut(t)) return this.onVertex(e, t);
  if (B(t)) return this.onFeature(e, t);
  if (ct(t)) return this.onMidpoint(e, t);
};
E.onDrag = function(e, t) {
  if (e.canDragMove !== !0) return;
  e.dragMoving = !0, t.originalEvent.stopPropagation();
  const n = {
    lng: t.lngLat.lng - e.dragMoveLocation.lng,
    lat: t.lngLat.lat - e.dragMoveLocation.lat
  };
  e.selectedCoordPaths.length > 0 ? this.dragVertex(e, t, n) : this.dragFeature(e, t, n), e.dragMoveLocation = t.lngLat;
};
E.onClick = function(e, t) {
  if (ne(t)) return this.clickNoTarget(e, t);
  if (B(t)) return this.clickActiveFeature(e, t);
  if (Ee(t)) return this.clickInactive(e, t);
  this.stopDragging(e);
};
E.onTap = function(e, t) {
  if (ne(t)) return this.clickNoTarget(e, t);
  if (B(t)) return this.clickActiveFeature(e, t);
  if (Ee(t)) return this.clickInactive(e, t);
};
E.onTouchEnd = E.onMouseUp = function(e) {
  e.dragMoving && this.fireUpdate(), this.stopDragging(e);
};
const k = {};
k.onSetup = function() {
  const e = this.newFeature({
    type: f.FEATURE,
    properties: {},
    geometry: {
      type: f.POINT,
      coordinates: []
    }
  });
  return this.addFeature(e), this.clearSelectedFeatures(), this.updateUIClasses({ mouse: I.ADD }), this.activateUIButton(A.POINT), this.setActionableState({
    trash: !0
  }), { point: e };
};
k.stopDrawingAndRemove = function(e) {
  this.deleteFeature([e.point.id], { silent: !0 }), this.changeMode(m.SIMPLE_SELECT);
};
k.onTap = k.onClick = function(e, t) {
  this.updateUIClasses({ mouse: I.MOVE }), e.point.updateCoordinate("", t.lngLat.lng, t.lngLat.lat), this.fire(N.CREATE, {
    features: [e.point.toGeoJSON()]
  }), this.changeMode(m.SIMPLE_SELECT, { featureIds: [e.point.id] });
};
k.onStop = function(e) {
  this.activateUIButton(), e.point.getCoordinate().length || this.deleteFeature([e.point.id], { silent: !0 });
};
k.toDisplayFeatures = function(e, t, n) {
  const o = t.properties.id === e.point.id;
  if (t.properties.active = o ? _.ACTIVE : _.INACTIVE, !o) return n(t);
};
k.onTrash = k.stopDrawingAndRemove;
k.onKeyUp = function(e, t) {
  if (oe(t) || re(t))
    return this.stopDrawingAndRemove(e, t);
};
function ee(e, t) {
  return e.lngLat ? e.lngLat.lng === t[0] && e.lngLat.lat === t[1] : !1;
}
const D = {};
D.onSetup = function() {
  const e = this.newFeature({
    type: f.FEATURE,
    properties: {},
    geometry: {
      type: f.POLYGON,
      coordinates: [[]]
    }
  });
  return this.addFeature(e), this.clearSelectedFeatures(), R.disable(this), this.updateUIClasses({ mouse: I.ADD }), this.activateUIButton(A.POLYGON), this.setActionableState({
    trash: !0
  }), {
    polygon: e,
    currentVertexPosition: 0
  };
};
D.clickAnywhere = function(e, t) {
  if (e.currentVertexPosition > 0 && ee(t, e.polygon.coordinates[0][e.currentVertexPosition - 1]))
    return this.changeMode(m.SIMPLE_SELECT, { featureIds: [e.polygon.id] });
  this.updateUIClasses({ mouse: I.ADD }), e.polygon.updateCoordinate(`0.${e.currentVertexPosition}`, t.lngLat.lng, t.lngLat.lat), e.currentVertexPosition++, e.polygon.updateCoordinate(`0.${e.currentVertexPosition}`, t.lngLat.lng, t.lngLat.lat);
};
D.clickOnVertex = function(e) {
  return this.changeMode(m.SIMPLE_SELECT, { featureIds: [e.polygon.id] });
};
D.onMouseMove = function(e, t) {
  e.polygon.updateCoordinate(`0.${e.currentVertexPosition}`, t.lngLat.lng, t.lngLat.lat), q(t) && this.updateUIClasses({ mouse: I.POINTER });
};
D.onTap = D.onClick = function(e, t) {
  return q(t) ? this.clickOnVertex(e, t) : this.clickAnywhere(e, t);
};
D.onKeyUp = function(e, t) {
  oe(t) ? (this.deleteFeature([e.polygon.id], { silent: !0 }), this.changeMode(m.SIMPLE_SELECT)) : re(t) && this.changeMode(m.SIMPLE_SELECT, { featureIds: [e.polygon.id] });
};
D.onStop = function(e) {
  this.updateUIClasses({ mouse: I.NONE }), R.enable(this), this.activateUIButton(), this.getFeature(e.polygon.id) !== void 0 && (e.polygon.removeCoordinate(`0.${e.currentVertexPosition}`), e.polygon.isValid() ? this.fire(N.CREATE, {
    features: [e.polygon.toGeoJSON()]
  }) : (this.deleteFeature([e.polygon.id], { silent: !0 }), this.changeMode(m.SIMPLE_SELECT, {}, { silent: !0 })));
};
D.toDisplayFeatures = function(e, t, n) {
  const o = t.properties.id === e.polygon.id;
  if (t.properties.active = o ? _.ACTIVE : _.INACTIVE, !o) return n(t);
  if (t.geometry.coordinates.length === 0) return;
  const r = t.geometry.coordinates[0].length;
  if (!(r < 3)) {
    if (t.properties.meta = O.FEATURE, n(J(e.polygon.id, t.geometry.coordinates[0][0], "0.0", !1)), r > 3) {
      const i = t.geometry.coordinates[0].length - 3;
      n(J(e.polygon.id, t.geometry.coordinates[0][i], `0.${i}`, !1));
    }
    if (r <= 4) {
      const i = [
        [t.geometry.coordinates[0][0][0], t.geometry.coordinates[0][0][1]],
        [t.geometry.coordinates[0][1][0], t.geometry.coordinates[0][1][1]]
      ];
      if (n({
        type: f.FEATURE,
        properties: t.properties,
        geometry: {
          coordinates: i,
          type: f.LINE_STRING
        }
      }), r === 3)
        return;
    }
    return n(t);
  }
};
D.onTrash = function(e) {
  this.deleteFeature([e.polygon.id], { silent: !0 }), this.changeMode(m.SIMPLE_SELECT);
};
const U = {};
U.onSetup = function(e) {
  e = e || {};
  const t = e.featureId;
  let n, o, r = "forward";
  if (t) {
    if (n = this.getFeature(t), !n)
      throw new Error("Could not find a feature with the provided featureId");
    let i = e.from;
    if (i && i.type === "Feature" && i.geometry && i.geometry.type === "Point" && (i = i.geometry), i && i.type === "Point" && i.coordinates && i.coordinates.length === 2 && (i = i.coordinates), !i || !Array.isArray(i))
      throw new Error("Please use the `from` property to indicate which point to continue the line from");
    const s = n.coordinates.length - 1;
    if (n.coordinates[s][0] === i[0] && n.coordinates[s][1] === i[1])
      o = s + 1, n.addCoordinate(o, ...n.coordinates[s]);
    else if (n.coordinates[0][0] === i[0] && n.coordinates[0][1] === i[1])
      r = "backwards", o = 0, n.addCoordinate(o, ...n.coordinates[0]);
    else
      throw new Error("`from` should match the point at either the start or the end of the provided LineString");
  } else
    n = this.newFeature({
      type: f.FEATURE,
      properties: {},
      geometry: {
        type: f.LINE_STRING,
        coordinates: []
      }
    }), o = 0, this.addFeature(n);
  return this.clearSelectedFeatures(), R.disable(this), this.updateUIClasses({ mouse: I.ADD }), this.activateUIButton(A.LINE), this.setActionableState({
    trash: !0
  }), {
    line: n,
    currentVertexPosition: o,
    direction: r
  };
};
U.clickAnywhere = function(e, t) {
  if (e.currentVertexPosition > 0 && ee(t, e.line.coordinates[e.currentVertexPosition - 1]) || e.direction === "backwards" && ee(t, e.line.coordinates[e.currentVertexPosition + 1]))
    return this.changeMode(m.SIMPLE_SELECT, { featureIds: [e.line.id] });
  this.updateUIClasses({ mouse: I.ADD }), e.line.updateCoordinate(e.currentVertexPosition, t.lngLat.lng, t.lngLat.lat), e.direction === "forward" ? (e.currentVertexPosition++, e.line.updateCoordinate(e.currentVertexPosition, t.lngLat.lng, t.lngLat.lat)) : e.line.addCoordinate(0, t.lngLat.lng, t.lngLat.lat);
};
U.clickOnVertex = function(e) {
  return this.changeMode(m.SIMPLE_SELECT, { featureIds: [e.line.id] });
};
U.onMouseMove = function(e, t) {
  e.line.updateCoordinate(e.currentVertexPosition, t.lngLat.lng, t.lngLat.lat), q(t) && this.updateUIClasses({ mouse: I.POINTER });
};
U.onTap = U.onClick = function(e, t) {
  if (q(t)) return this.clickOnVertex(e, t);
  this.clickAnywhere(e, t);
};
U.onKeyUp = function(e, t) {
  re(t) ? this.changeMode(m.SIMPLE_SELECT, { featureIds: [e.line.id] }) : oe(t) && (this.deleteFeature([e.line.id], { silent: !0 }), this.changeMode(m.SIMPLE_SELECT));
};
U.onStop = function(e) {
  R.enable(this), this.activateUIButton(), this.getFeature(e.line.id) !== void 0 && (e.line.removeCoordinate(`${e.currentVertexPosition}`), e.line.isValid() ? this.fire(N.CREATE, {
    features: [e.line.toGeoJSON()]
  }) : (this.deleteFeature([e.line.id], { silent: !0 }), this.changeMode(m.SIMPLE_SELECT, {}, { silent: !0 })));
};
U.onTrash = function(e) {
  this.deleteFeature([e.line.id], { silent: !0 }), this.changeMode(m.SIMPLE_SELECT);
};
U.toDisplayFeatures = function(e, t, n) {
  const o = t.properties.id === e.line.id;
  if (t.properties.active = o ? _.ACTIVE : _.INACTIVE, !o) return n(t);
  t.geometry.coordinates.length < 2 || (t.properties.meta = O.FEATURE, n(J(
    e.line.id,
    t.geometry.coordinates[e.direction === "forward" ? t.geometry.coordinates.length - 2 : 1],
    `${e.direction === "forward" ? t.geometry.coordinates.length - 2 : 1}`,
    !1
  )), n(t));
};
const lt = {
  simple_select: y,
  direct_select: E,
  draw_point: k,
  draw_polygon: D,
  draw_line_string: U
}, Kt = {
  defaultMode: m.SIMPLE_SELECT,
  keybindings: !0,
  touchEnabled: !0,
  clickBuffer: 2,
  touchBuffer: 25,
  boxSelect: !0,
  displayControlsDefault: !0,
  styles: nt,
  modes: lt,
  controls: {},
  userProperties: !1,
  suppressAPIEvents: !0
}, Xt = {
  point: !0,
  line_string: !0,
  polygon: !0,
  trash: !0,
  combine_features: !0,
  uncombine_features: !0
}, qt = {
  point: !1,
  line_string: !1,
  polygon: !1,
  trash: !1,
  combine_features: !1,
  uncombine_features: !1
};
function Ge(e, t) {
  return e.map((n) => n.source ? n : Object.assign({}, n, {
    id: `${n.id}.${t}`,
    source: t === "hot" ? P.HOT : P.COLD
  }));
}
function Ht(e = {}) {
  let t = Object.assign({}, e);
  return e.controls || (t.controls = {}), e.displayControlsDefault === !1 ? t.controls = Object.assign({}, qt, e.controls) : t.controls = Object.assign({}, Xt, e.controls), t = Object.assign({}, Kt, t), t.styles = Ge(t.styles, "cold").concat(Ge(t.styles, "hot")), t;
}
var Wt = ht();
const Be = /* @__PURE__ */ $e(Wt);
var Zt = Qt, zt = {
  Point: "geometry",
  MultiPoint: "geometry",
  LineString: "geometry",
  MultiLineString: "geometry",
  Polygon: "geometry",
  MultiPolygon: "geometry",
  GeometryCollection: "geometry",
  Feature: "feature",
  FeatureCollection: "featurecollection"
};
function Qt(e) {
  if (!e || !e.type) return null;
  var t = zt[e.type];
  if (!t) return null;
  if (t === "geometry")
    return {
      type: "FeatureCollection",
      features: [{
        type: "Feature",
        properties: {},
        geometry: e
      }]
    };
  if (t === "feature")
    return {
      type: "FeatureCollection",
      features: [e]
    };
  if (t === "featurecollection")
    return e;
}
const jt = /* @__PURE__ */ $e(Zt);
function dt(e, t) {
  return e.length !== t.length ? !1 : JSON.stringify(e.map((n) => n).sort()) === JSON.stringify(t.map((n) => n).sort());
}
const en = {
  Polygon: b,
  LineString: V,
  Point: G,
  MultiPolygon: M,
  MultiLineString: M,
  MultiPoint: M
};
function tn(e, t) {
  t.modes = m;
  const n = e.options.suppressAPIEvents !== void 0 ? !!e.options.suppressAPIEvents : !0;
  return t.getFeatureIdsAt = function(o) {
    return $.click({ point: o }, null, e).map((i) => i.properties.id);
  }, t.getSelectedIds = function() {
    return e.store.getSelectedIds();
  }, t.getSelected = function() {
    return {
      type: f.FEATURE_COLLECTION,
      features: e.store.getSelectedIds().map((o) => e.store.get(o)).map((o) => o.toGeoJSON())
    };
  }, t.getSelectedPoints = function() {
    return {
      type: f.FEATURE_COLLECTION,
      features: e.store.getSelectedCoordinates().map((o) => ({
        type: f.FEATURE,
        properties: {},
        geometry: {
          type: f.POINT,
          coordinates: o.coordinates
        }
      }))
    };
  }, t.set = function(o) {
    if (o.type === void 0 || o.type !== f.FEATURE_COLLECTION || !Array.isArray(o.features))
      throw new Error("Invalid FeatureCollection");
    const r = e.store.createRenderBatch();
    let i = e.store.getAllIds().slice();
    const s = t.add(o), u = new F(s);
    return i = i.filter((c) => !u.has(c)), i.length && t.delete(i), r(), s;
  }, t.add = function(o) {
    const i = JSON.parse(JSON.stringify(jt(o))).features.map((s) => {
      if (s.id = s.id || Se(), s.geometry === null)
        throw new Error("Invalid geometry: null");
      if (e.store.get(s.id) === void 0 || e.store.get(s.id).type !== s.geometry.type) {
        const u = en[s.geometry.type];
        if (u === void 0)
          throw new Error(`Invalid geometry type: ${s.geometry.type}.`);
        const c = new u(e, s);
        e.store.add(c, { silent: n });
      } else {
        const u = e.store.get(s.id), c = u.properties;
        u.properties = s.properties, Be(c, s.properties) || e.store.featureChanged(u.id, { silent: n }), Be(u.getCoordinates(), s.geometry.coordinates) || u.incomingCoords(s.geometry.coordinates);
      }
      return s.id;
    });
    return e.store.render(), i;
  }, t.get = function(o) {
    const r = e.store.get(o);
    if (r)
      return r.toGeoJSON();
  }, t.getAll = function() {
    return {
      type: f.FEATURE_COLLECTION,
      features: e.store.getAll().map((o) => o.toGeoJSON())
    };
  }, t.delete = function(o) {
    return e.store.delete(o, { silent: n }), t.getMode() === m.DIRECT_SELECT && !e.store.getSelectedIds().length ? e.events.changeMode(m.SIMPLE_SELECT, void 0, { silent: n }) : e.store.render(), t;
  }, t.deleteAll = function() {
    return e.store.delete(e.store.getAllIds(), { silent: n }), t.getMode() === m.DIRECT_SELECT ? e.events.changeMode(m.SIMPLE_SELECT, void 0, { silent: n }) : e.store.render(), t;
  }, t.changeMode = function(o, r = {}) {
    return o === m.SIMPLE_SELECT && t.getMode() === m.SIMPLE_SELECT ? (dt(r.featureIds || [], e.store.getSelectedIds()) || (e.store.setSelected(r.featureIds, { silent: n }), e.store.render()), t) : (o === m.DIRECT_SELECT && t.getMode() === m.DIRECT_SELECT && r.featureId === e.store.getSelectedIds()[0] || e.events.changeMode(o, r, { silent: n }), t);
  }, t.getMode = function() {
    return e.events.getMode();
  }, t.trash = function() {
    return e.events.trash({ silent: n }), t;
  }, t.combineFeatures = function() {
    return e.events.combineFeatures({ silent: n }), t;
  }, t.uncombineFeatures = function() {
    return e.events.uncombineFeatures({ silent: n }), t;
  }, t.setFeatureProperty = function(o, r, i) {
    return e.store.setFeatureProperty(o, r, i, { silent: n }), t;
  }, t;
}
const nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonSelectors: Tt,
  ModeHandler: ye,
  StringSet: F,
  constrainFeatureMovement: Me,
  createMidPoint: at,
  createSupplementaryPoints: ae,
  createVertex: J,
  doubleClickZoom: R,
  euclideanDistance: Ie,
  featuresAt: $,
  getFeatureAtAndSetCursors: Q,
  isClick: ge,
  isEventAtCoordinates: ee,
  isTap: me,
  mapEventToBoundingBox: Qe,
  moveFeatures: Ne,
  sortFeatures: ze,
  stringSetsAreEqual: dt,
  theme: nt,
  toDenseArray: H
}, Symbol.toStringTag, { value: "Module" })), on = function(e, t) {
  e = Ht(e);
  const n = {
    options: e
  };
  t = tn(n, t), n.api = t;
  const o = xt(n);
  return t.onAdd = o.onAdd, t.onRemove = o.onRemove, t.types = A, t.options = e, t;
};
function Le(e) {
  on(e, this);
}
Le.modes = lt;
Le.constants = Ye;
Le.lib = nn;
export {
  Le as MapboxDraw
};
