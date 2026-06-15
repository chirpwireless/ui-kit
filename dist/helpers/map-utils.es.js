import { CurrentTheme as G } from "../styles/constants.es.js";
var s = 63710088e-1, N = {
  centimeters: s * 100,
  centimetres: s * 100,
  degrees: 360 / (2 * Math.PI),
  feet: s * 3.28084,
  inches: s * 39.37,
  kilometers: s / 1e3,
  kilometres: s / 1e3,
  meters: s,
  metres: s,
  miles: s / 1609.344,
  millimeters: s * 1e3,
  millimetres: s * 1e3,
  nauticalmiles: s / 1852,
  radians: 1,
  yards: s * 1.0936
};
function q(r, t, n = {}) {
  const e = { type: "Feature" };
  return (n.id === 0 || n.id) && (e.id = n.id), n.bbox && (e.bbox = n.bbox), e.properties = t || {}, e.geometry = r, e;
}
function D(r, t, n = {}) {
  if (!r)
    throw new Error("coordinates is required");
  if (!Array.isArray(r))
    throw new Error("coordinates must be an Array");
  if (r.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!L(r[0]) || !L(r[1]))
    throw new Error("coordinates must contain numbers");
  return q({
    type: "Point",
    coordinates: r
  }, t, n);
}
function $(r, t = "kilometers") {
  const n = N[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return r * n;
}
function v(r) {
  return r % 360 * Math.PI / 180;
}
function L(r) {
  return !isNaN(r) && r !== null && !Array.isArray(r);
}
function S(r, t, n) {
  if (r !== null)
    for (var e, o, a, f, l, i, u, M = 0, y = 0, w, P = r.type, b = P === "FeatureCollection", d = P === "Feature", E = b ? r.features.length : 1, g = 0; g < E; g++) {
      u = b ? (
        // @ts-expect-error: Known type conflict
        r.features[g].geometry
      ) : d ? (
        // @ts-expect-error: Known type conflict
        r.geometry
      ) : r, w = u ? u.type === "GeometryCollection" : !1, l = w ? u.geometries.length : 1;
      for (var p = 0; p < l; p++) {
        var c = 0, m = 0;
        if (f = w ? u.geometries[p] : u, f !== null) {
          i = f.coordinates;
          var h = f.type;
          switch (M = h === "Polygon" || h === "MultiPolygon" ? 1 : 0, h) {
            case null:
              break;
            case "Point":
              if (
                // @ts-expect-error: Known type conflict
                t(
                  i,
                  y,
                  g,
                  c,
                  m
                ) === !1
              )
                return !1;
              y++, c++;
              break;
            case "LineString":
            case "MultiPoint":
              for (e = 0; e < i.length; e++) {
                if (
                  // @ts-expect-error: Known type conflict
                  t(
                    i[e],
                    y,
                    g,
                    c,
                    m
                  ) === !1
                )
                  return !1;
                y++, h === "MultiPoint" && c++;
              }
              h === "LineString" && c++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (e = 0; e < i.length; e++) {
                for (o = 0; o < i[e].length - M; o++) {
                  if (
                    // @ts-expect-error: Known type conflict
                    t(
                      i[e][o],
                      y,
                      g,
                      c,
                      m
                    ) === !1
                  )
                    return !1;
                  y++;
                }
                h === "MultiLineString" && c++, h === "Polygon" && m++;
              }
              h === "Polygon" && c++;
              break;
            case "MultiPolygon":
              for (e = 0; e < i.length; e++) {
                for (m = 0, o = 0; o < i[e].length; o++) {
                  for (a = 0; a < i[e][o].length - M; a++) {
                    if (
                      // @ts-expect-error: Known type conflict
                      t(
                        i[e][o][a],
                        y,
                        g,
                        c,
                        m
                      ) === !1
                    )
                      return !1;
                    y++;
                  }
                  m++;
                }
                c++;
              }
              break;
            case "GeometryCollection":
              for (e = 0; e < f.geometries.length; e++)
                if (
                  // @ts-expect-error: Known type conflict
                  S(f.geometries[e], t) === !1
                )
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function O(r, t = {}) {
  let n = 0, e = 0, o = 0;
  return S(
    r,
    function(a) {
      n += a[0], e += a[1], o++;
    }
  ), D([n / o, e / o], t.properties);
}
var k = O;
function C(r) {
  if (!r)
    throw new Error("coord is required");
  if (!Array.isArray(r)) {
    if (r.type === "Feature" && r.geometry !== null && r.geometry.type === "Point")
      return [...r.geometry.coordinates];
    if (r.type === "Point")
      return [...r.coordinates];
  }
  if (Array.isArray(r) && r.length >= 2 && !Array.isArray(r[0]) && !Array.isArray(r[1]))
    return [...r];
  throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function R(r, t, n = {}) {
  var e = C(r), o = C(t), a = v(o[1] - e[1]), f = v(o[0] - e[0]), l = v(e[1]), i = v(o[1]), u = Math.pow(Math.sin(a / 2), 2) + Math.pow(Math.sin(f / 2), 2) * Math.cos(l) * Math.cos(i);
  return $(
    2 * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u)),
    n.units
  );
}
var A = R;
const B = (r, t, n) => {
  r.getSource(t) || r.addSource(t, n);
}, F = (r, t, n, e) => {
  r.getLayer(t) || r.addLayer(n, e);
}, H = (r, t) => {
  r.on("mouseenter", t, () => {
    r.getCanvas().style.cursor = "pointer";
  }), r.on("mouseleave", t, () => {
    r.getCanvas().style.cursor = "";
  });
}, U = (r) => {
  const t = Math.min(...r.map((e) => e.lon)), n = Math.min(...r.map((e) => e.lat));
  return [t, n];
}, W = (r) => {
  const t = Math.max(...r.map((e) => e.lon)), n = Math.max(...r.map((e) => e.lat));
  return [t, n];
}, J = (r) => [U(r), W(r)], K = (r) => r >= 0 && r <= 7 ? 0 : r >= 8 && r <= 9 ? 2 : 3, Z = (r) => `mapbox://styles/chirp/${r === G.Dark ? "cm0arv5hz00n901pl5akl2mff" : "cm0aruft100n701pdhk5ocz34"}`, Q = (r, t) => {
  r.getLayer(t) && r.removeLayer(t);
}, V = (r, t) => {
  r.getSource(t) && r.removeSource(t);
}, X = (r) => {
  var n;
  const t = k(r).geometry.coordinates;
  if (r.type === "Feature" && r.geometry.type === "Polygon") {
    const e = (n = r.geometry) == null ? void 0 : n.coordinates[0], o = e.map((l) => A(t, l, { units: "kilometers" })), a = o.reduce((l, i) => l + i, 0) / o.length;
    return o.every((l) => Math.abs(l - a) < a / 10) && e.length === 65;
  }
  return !1;
}, Y = (r) => {
  const t = k(r).geometry.coordinates;
  if (r.type === "Feature" && r.geometry.type === "Polygon") {
    const n = r.geometry.coordinates[0][0], e = A(t, n, { units: "kilometers" });
    return { center: t, radius: e };
  }
};
export {
  F as addLayer,
  B as addSource,
  J as calcBoundsFromCoordinates,
  X as checkCirclePolygon,
  Y as getCircleGeometryFromPolygon,
  K as getCoverageZoomLvl,
  W as getNECoordinates,
  U as getSWCoordinates,
  Z as getUiKitMapStyleId,
  Q as removeMapLayer,
  V as removeMapSource,
  H as setPointerOnHover
};
