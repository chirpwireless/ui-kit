var o = 63710088e-1, k = {
  centimeters: o * 100,
  centimetres: o * 100,
  degrees: 360 / (2 * Math.PI),
  feet: o * 3.28084,
  inches: o * 39.37,
  kilometers: o / 1e3,
  kilometres: o / 1e3,
  meters: o,
  metres: o,
  miles: o / 1609.344,
  millimeters: o * 1e3,
  millimetres: o * 1e3,
  nauticalmiles: o / 1852,
  radians: 1,
  yards: o * 1.0936
};
function L(r, t, n = {}) {
  const e = { type: "Feature" };
  return (n.id === 0 || n.id) && (e.id = n.id), n.bbox && (e.bbox = n.bbox), e.properties = t || {}, e.geometry = r, e;
}
function G(r, t, n = {}) {
  if (!r)
    throw new Error("coordinates is required");
  if (!Array.isArray(r))
    throw new Error("coordinates must be an Array");
  if (r.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!M(r[0]) || !M(r[1]))
    throw new Error("coordinates must contain numbers");
  return L({
    type: "Point",
    coordinates: r
  }, t, n);
}
function S(r, t, n = {}) {
  for (const i of r) {
    if (i.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (i[i.length - 1].length !== i[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let l = 0; l < i[i.length - 1].length; l++)
      if (i[i.length - 1][l] !== i[0][l])
        throw new Error("First and last Position are not equivalent.");
  }
  return L({
    type: "Polygon",
    coordinates: r
  }, t, n);
}
function p(r, t = "kilometers") {
  const n = k[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return r * n;
}
function d(r, t = "kilometers") {
  const n = k[t];
  if (!n)
    throw new Error(t + " units is invalid");
  return r / n;
}
function q(r) {
  return r % (2 * Math.PI) * 180 / Math.PI;
}
function D(r) {
  return r % 360 * Math.PI / 180;
}
function M(r) {
  return !isNaN(r) && r !== null && !Array.isArray(r);
}
function C(r, t, n) {
  if (r !== null)
    for (var e, i, l, u, b, s, w, y = 0, f = 0, P, v = r.type, E = v === "FeatureCollection", R = v === "Feature", A = E ? r.features.length : 1, c = 0; c < A; c++) {
      w = E ? (
        // @ts-expect-error: Known type conflict
        r.features[c].geometry
      ) : R ? (
        // @ts-expect-error: Known type conflict
        r.geometry
      ) : r, P = w ? w.type === "GeometryCollection" : !1, b = P ? w.geometries.length : 1;
      for (var m = 0; m < b; m++) {
        var a = 0, g = 0;
        if (u = P ? w.geometries[m] : w, u !== null) {
          s = u.coordinates;
          var h = u.type;
          switch (y = n && (h === "Polygon" || h === "MultiPolygon") ? 1 : 0, h) {
            case null:
              break;
            case "Point":
              if (
                // @ts-expect-error: Known type conflict
                t(
                  s,
                  f,
                  c,
                  a,
                  g
                ) === !1
              )
                return !1;
              f++, a++;
              break;
            case "LineString":
            case "MultiPoint":
              for (e = 0; e < s.length; e++) {
                if (
                  // @ts-expect-error: Known type conflict
                  t(
                    s[e],
                    f,
                    c,
                    a,
                    g
                  ) === !1
                )
                  return !1;
                f++, h === "MultiPoint" && a++;
              }
              h === "LineString" && a++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (e = 0; e < s.length; e++) {
                for (i = 0; i < s[e].length - y; i++) {
                  if (
                    // @ts-expect-error: Known type conflict
                    t(
                      s[e][i],
                      f,
                      c,
                      a,
                      g
                    ) === !1
                  )
                    return !1;
                  f++;
                }
                h === "MultiLineString" && a++, h === "Polygon" && g++;
              }
              h === "Polygon" && a++;
              break;
            case "MultiPolygon":
              for (e = 0; e < s.length; e++) {
                for (g = 0, i = 0; i < s[e].length; i++) {
                  for (l = 0; l < s[e][i].length - y; l++) {
                    if (
                      // @ts-expect-error: Known type conflict
                      t(
                        s[e][i][l],
                        f,
                        c,
                        a,
                        g
                      ) === !1
                    )
                      return !1;
                    f++;
                  }
                  g++;
                }
                a++;
              }
              break;
            case "GeometryCollection":
              for (e = 0; e < u.geometries.length; e++)
                if (
                  // @ts-expect-error: Known type conflict
                  C(u.geometries[e], t, n) === !1
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
export {
  C as coordEach,
  D as degreesToRadians,
  M as isNumber,
  d as lengthToRadians,
  G as point,
  S as polygon,
  q as radiansToDegrees,
  p as radiansToLength
};
