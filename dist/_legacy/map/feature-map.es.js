import { jsxRuntimeExports as G } from "../../jsx-runtime-BgepH7Pb.js";
import { useRef as d, useState as N, useCallback as I, useEffect as L } from "react";
import { BaseMap as U } from "./base-map.es.js";
import { index_default as _ } from "../../index-Be2wAbtn.js";
import { MapboxDraw as P } from "../../index-BaJfFTpt.js";
import { useTheme as q, debounce as v } from "@mui/material";
import { renderPoints as z, renderLineStringPoints as H } from "./helpers/utils.es.js";
import { typedGeodesicDraw as J, customDrawStyles as K } from "./constance.es.js";
const g = ({
  data: p,
  isFirstFocusOnly: y,
  centeringCoordinates: r,
  // Координаты, по которым происходит центрирование
  isLineMarkersNeeded: b = !0,
  // Флаг на отображение точек между стартовой и конечной на LineString
  variant: w = "base",
  ...j
}) => {
  const l = q(), t = d(null), c = d([]), m = d(null), [x, M] = N(!1), k = () => {
    t.current && (c.current.forEach((e) => e.remove()), c.current = [], m.current && m.current.deleteAll());
  }, f = I(
    (e) => {
      var S, h, i, R, B, F, T, E;
      if (!t.current) return;
      k();
      let u = null;
      if (!e) {
        (h = (S = t.current) == null ? void 0 : S.getSource("mapbox-gl-draw-cold")) == null || h.setData({
          type: "FeatureCollection",
          features: []
        });
        return;
      }
      if (e.type === "FeatureCollection") {
        for (const o of e.features) {
          const s = o.geometry, a = (i = o == null ? void 0 : o.properties) == null ? void 0 : i.popupNode, n = (R = o == null ? void 0 : o.properties) == null ? void 0 : R.specificMarkerIcon;
          s.type === "Point" ? (e.features.length === 1 && (u = s.coordinates), z({
            geometry: s,
            popupNode: a,
            map: t,
            markersRef: c,
            theme: l,
            specificMarkerIcon: n,
            variant: w
          })) : s.type === "LineString" && H({
            geometry: s,
            map: t,
            markersRef: c,
            isLineMarkersNeeded: b,
            theme: l
          });
        }
        (F = (B = t.current) == null ? void 0 : B.getSource("mapbox-gl-draw-cold")) == null || F.setData({
          type: "FeatureCollection",
          features: e.features
        });
      } else
        (E = (T = t.current) == null ? void 0 : T.getSource("mapbox-gl-draw-cold")) == null || E.setData(e);
      if ((u == null ? void 0 : u.length) === 2)
        t.current.flyTo({ center: u, essential: !0 });
      else if (!x) {
        M(!0);
        const o = _(e), [s, a, n, A] = o;
        t.current.fitBounds([s, a, n, A], { padding: 50, duration: 100, essential: !0 });
      }
    },
    [b, x, l, w]
  ), D = I(() => {
    if (!t.current) return;
    let e = P.modes;
    e = J.enable(e);
    const u = new P({
      displayControlsDefault: !1,
      modes: {
        ...e
      },
      styles: K(l.palette)
    });
    m.current = u, t.current.addControl(u), f(p);
  }, [f, p, l.palette]);
  return L(() => {
    const e = t.current;
    if (!e) return;
    e != null && e.isStyleLoaded() && f(p);
    const u = v(() => {
      f(p);
    }, 100);
    return e.on("style.load", u), () => {
      !y && M(!1), u.clear(), e.off("style.load", u);
    };
  }, [f, p, l, y]), L(() => {
    t.current && (r != null && r.lat) && (r != null && r.lon) && t.current.flyTo({ center: [r == null ? void 0 : r.lon, r == null ? void 0 : r.lat], essential: !0 });
  }, [r]), /* @__PURE__ */ G.jsx(U, { ...j, mapRef: t, onMapLoad: D });
};
export {
  g as FeatureMap
};
