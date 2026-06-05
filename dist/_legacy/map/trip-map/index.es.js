import { jsxRuntimeExports as me } from "../../../jsx-runtime-BgepH7Pb.js";
import { mapboxgl as re } from "../../../mapbox-gl-BQVqFhjB.js";
import { useState as Q, useRef as x, useCallback as S, useEffect as v } from "react";
import { BaseMap as ie } from "../base-map.es.js";
import { index_default as pe } from "../../../index-Be2wAbtn.js";
import { getCoord as V, index_default as ge } from "../../../map-utils-okvDFmNf.js";
import { degreesToRadians as P, radiansToDegrees as he, point as C } from "../../../index-CpJvLLWC.js";
import { MapboxDraw as ee } from "../../../index-BaJfFTpt.js";
import { mapMarkerArrowSvgString as ye } from "../mp-marker-string.es.js";
import { typedGeodesicDraw as de, customDrawStyles as Me } from "../constance.es.js";
import { useTheme as we, debounce as Le } from "@mui/material";
import { ZOOM_BREAKPOINTS as i, renderLineStringPoints as xe, createPopupsForLineString as te } from "../helpers/utils.es.js";
function ne(r, o, p = {}) {
  if (p.final === !0)
    return Se(r, o);
  const y = V(r), b = V(o), E = P(y[0]), F = P(b[0]), k = P(y[1]), g = P(b[1]), R = Math.sin(F - E) * Math.cos(g), O = Math.cos(k) * Math.sin(g) - Math.sin(k) * Math.cos(g) * Math.cos(F - E);
  return he(Math.atan2(R, O));
}
function Se(r, o) {
  let p = ne(o, r);
  return p = (p + 180) % 360, p;
}
var ve = ne;
re.accessToken = "pk.eyJ1IjoiY2hpcnAiLCJhIjoiY2xid2JvdWE2MHZ3eDNwbXM5OGpzcnFqNiJ9.YRfFt53eK_f6dWIfrhwWUg";
const Ae = ({
  data: r,
  centeringCoordinates: o,
  // Координаты, по которым происходит центрирование
  isLineMarkersNeeded: p = !0,
  // Флаг на отображение точек между стартовой и конечной на LineString
  animateLineId: y,
  isPaused: b,
  animationDuration: E = 3e3,
  setAnimateLineId: F,
  ...k
}) => {
  const g = we(), [R, O] = Q(null), [oe, z] = Q(i.MEDIUM), c = x(null), h = x(void 0), U = x([]), n = x(null), d = x(null), W = x(null), se = (e) => {
    if (!n.current) return;
    h.current = document.createElement("div"), h.current.innerHTML = ye(g.palette), h.current.style.width = "20px", h.current.style.height = "16px", h.current.style.transformOrigin = "center";
    let t = ee.modes;
    t = de.enable(t);
    const s = new ee({
      displayControlsDefault: !1,
      modes: {
        ...t
      },
      styles: Me(g.palette)
    });
    W.current = s, n.current.addControl(s), H(e);
  }, A = S(() => {
    var e;
    O(null), (e = d.current) == null || e.remove(), c.current = !1, F(void 0);
  }, [F]), G = S(() => {
    n.current && (U.current.forEach((e) => e.remove()), U.current = [], A(), W.current && W.current.deleteAll());
  }, [A]), H = S(
    (e) => {
      var Z, I, N, a, M, w;
      if (!n.current) return;
      if (G(), !e) {
        (I = (Z = n.current) == null ? void 0 : Z.getSource("mapbox-gl-draw-cold")) == null || I.setData({
          type: "FeatureCollection",
          features: []
        });
        return;
      }
      if (e.type === "FeatureCollection") {
        for (const j of e.features) {
          const _ = j.geometry;
          _.type === "LineString" && xe({
            geometry: _,
            map: n,
            markersRef: U,
            isLineMarkersNeeded: p,
            theme: g
          });
        }
        (a = (N = n.current) == null ? void 0 : N.getSource("mapbox-gl-draw-cold")) == null || a.setData({
          type: "FeatureCollection",
          features: e.features
        });
      } else
        (w = (M = n.current) == null ? void 0 : M.getSource("mapbox-gl-draw-cold")) == null || w.setData(e);
      const t = pe(e, { recompute: !0 }), [s, f, l, u] = t;
      n.current.fitBounds([s, f, l, u], { padding: 50 });
    },
    [G, p, g]
  ), T = S(
    (e, t) => {
      var K, X;
      if (!e.length) return;
      const s = performance.now(), f = e.map(
        (m, L) => L === 0 ? 0 : ge(C(e[L - 1]), C(m))
      ), l = f.reduce((m, L) => m + L, 0), u = f.reduce((m, L, ae) => (m.push((m[ae - 1] || 0) + L), m), []);
      if (c.current === !0) {
        c.current = {
          elapsedTime: s - t,
          coordinates: e
        };
        return;
      }
      if (c.current === !1)
        return;
      const Z = s - t, I = Math.min(Z / E, 1), N = I * l;
      let a = u.findIndex((m) => m >= N);
      a === -1 && (a = e.length - 1);
      const [M, w] = e[a - 1] || e[0], [j, _] = e[a] || e[e.length - 1], $ = u[a - 1] || 0, ce = u[a] || l, q = (N - $) / (ce - $), ue = M + (j - M) * q, le = w + (_ - w) * q;
      (K = d.current) == null || K.setLngLat([ue, le]);
      const fe = ve([M, w], [j, _]) + 60, Y = (X = h.current) == null ? void 0 : X.querySelector("svg");
      Y && (Y.style.transform = `rotate(${fe}deg)`), I < 1 ? requestAnimationFrame(() => T(e, t)) : A();
    },
    [E, A]
  ), B = S(
    (e) => {
      var t;
      if (!(!n.current || !r || R === e && R || e == null))
        if ((t = d.current) == null || t.remove(), c.current = !1, r.type === "FeatureCollection") {
          const s = r.features.find(
            (l) => {
              var u;
              return l.geometry.type === "LineString" && ((u = l.properties) == null ? void 0 : u.lineId) === e;
            }
          );
          if (!s) {
            console.warn(`No LineString found in data with lineId ${e} for animation.`), O(null);
            return;
          }
          O(e);
          const f = s.geometry.type === "LineString" ? s.geometry.coordinates : [];
          d.current && d.current.remove(), d.current = new re.Marker({
            element: h.current,
            anchor: "center"
          }).setLngLat(f[0]).addTo(n.current), c.current = null, T(f, performance.now());
        } else
          console.warn("Data is not a valid FeatureCollection with a LineString for animation.");
    },
    [r, R, T]
  ), D = S(() => {
    var t;
    r || te();
    const e = (t = n.current) == null ? void 0 : t.getZoom();
    r && r.type === "FeatureCollection" && r.features.forEach((s) => {
      if (s.geometry.type === "LineString") {
        const { coordinates: f } = s.geometry, { speeds: l, time: u } = s.properties;
        l && u && te(n.current, f, l, u, e);
      }
    });
  }, [r]), J = () => {
    var t;
    const e = (t = n.current) == null ? void 0 : t.getZoom();
    e && (e < i.NONE ? z(i.NONE) : e < i.LOW ? z(i.LOW) : e < i.MEDIUM ? z(i.MEDIUM) : e < i.HIGH && z(i.HIGH));
  };
  return v(() => {
    const e = n.current;
    if (!e) return;
    e != null && e.isStyleLoaded() && H(r);
    const t = Le(() => {
      H(r);
    }, 100);
    return e.on("style.load", t), () => {
      t.clear(), e.off("style.load", t), e && e.stop();
    };
  }, [H, r]), v(() => {
    y && B && B(y);
  }, [y, B]), v(() => D(), [oe, r, D]), v(() => {
    b ? c.current = !0 : typeof c.current != "boolean" && c.current && T(c.current.coordinates, performance.now() - c.current.elapsedTime);
  }, [b, r, T]), v(() => {
    n.current && (o != null && o.lat) && (o != null && o.lon) && n.current.flyTo({ center: [o == null ? void 0 : o.lon, o == null ? void 0 : o.lat], essential: !0 });
  }, [o]), v(() => {
    const e = n.current;
    if (e)
      return e.on("zoom", J), e.on("move", D), () => {
        e == null || e.off("zoom", J), e == null || e.off("move", D);
      };
  }, [r, D]), /* @__PURE__ */ me.jsx(ie, { ...k, mapRef: n, onMapLoad: () => se(r) });
};
export {
  Ae as TripMap
};
