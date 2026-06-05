import { coordEach as h, point as f, degreesToRadians as i, radiansToLength as v } from "./index-CpJvLLWC.js";
import { CurrentTheme as p } from "./styles/constants.es.js";
function d(e, t = {}) {
  let n = 0, r = 0, o = 0;
  return h(
    e,
    function(s) {
      n += s[0], r += s[1], o++;
    },
    !0
  ), f([n / o, r / o], t.properties);
}
var l = d;
function g(e) {
  if (!e)
    throw new Error("coord is required");
  if (!Array.isArray(e)) {
    if (e.type === "Feature" && e.geometry !== null && e.geometry.type === "Point")
      return [...e.geometry.coordinates];
    if (e.type === "Point")
      return [...e.coordinates];
  }
  if (Array.isArray(e) && e.length >= 2 && !Array.isArray(e[0]) && !Array.isArray(e[1]))
    return [...e];
  throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function M(e, t, n = {}) {
  var r = g(e), o = g(t), s = i(o[1] - r[1]), u = i(o[0] - r[0]), a = i(r[1]), c = i(o[1]), y = Math.pow(Math.sin(s / 2), 2) + Math.pow(Math.sin(u / 2), 2) * Math.cos(a) * Math.cos(c);
  return v(
    2 * Math.atan2(Math.sqrt(y), Math.sqrt(1 - y)),
    n.units
  );
}
var m = M;
const P = (e, t, n) => {
  e.getSource(t) || e.addSource(t, n);
}, w = (e, t, n, r) => {
  e.getLayer(t) || e.addLayer(n, r);
}, x = (e, t) => {
  e.on("mouseenter", t, () => {
    e.getCanvas().style.cursor = "pointer";
  }), e.on("mouseleave", t, () => {
    e.getCanvas().style.cursor = "";
  });
}, L = (e) => {
  const t = Math.min(...e.map((r) => r.lon)), n = Math.min(...e.map((r) => r.lat));
  return [t, n];
}, S = (e) => {
  const t = Math.max(...e.map((r) => r.lon)), n = Math.max(...e.map((r) => r.lat));
  return [t, n];
}, k = (e) => [L(e), S(e)], F = (e) => e >= 0 && e <= 7 ? 0 : e >= 8 && e <= 9 ? 2 : 3, b = (e) => `mapbox://styles/chirp/${e === p.Dark ? "cm0arv5hz00n901pl5akl2mff" : "cm0aruft100n701pdhk5ocz34"}`, E = (e, t) => {
  e.getLayer(t) && e.removeLayer(t);
}, q = (e, t) => {
  e.getSource(t) && e.removeSource(t);
}, T = (e) => {
  var n;
  const t = l(e).geometry.coordinates;
  if (e.type === "Feature" && e.geometry.type === "Polygon") {
    const r = (n = e.geometry) == null ? void 0 : n.coordinates[0], o = r.map((a) => m(t, a, { units: "kilometers" })), s = o.reduce((a, c) => a + c, 0) / o.length;
    return o.every((a) => Math.abs(a - s) < s / 10) && r.length === 65;
  }
  return !1;
}, $ = (e) => {
  const t = l(e).geometry.coordinates;
  if (e.type === "Feature" && e.geometry.type === "Polygon") {
    const n = e.geometry.coordinates[0][0], r = m(t, n, { units: "kilometers" });
    return { center: t, radius: r };
  }
};
export {
  w as addLayer,
  P as addSource,
  k as calcBoundsFromCoordinates,
  T as checkCirclePolygon,
  $ as getCircleGeometryFromPolygon,
  g as getCoord,
  F as getCoverageZoomLvl,
  S as getNECoordinates,
  L as getSWCoordinates,
  b as getUiKitMapStyleId,
  m as index_default,
  E as removeMapLayer,
  q as removeMapSource,
  x as setPointerOnHover
};
