import { jsxRuntimeExports as j } from "../../../jsx-runtime-BgepH7Pb.js";
import { mapboxgl as E } from "../../../mapbox-gl-BQVqFhjB.js";
import { memo as N, useRef as T, useState as q, useCallback as F, useEffect as G } from "react";
import { BaseMap as z } from "../base-map.es.js";
import { index_default as K } from "../../../index-Be2wAbtn.js";
import { degreesToRadians as _, lengthToRadians as O, point as I, radiansToDegrees as J, polygon as U } from "../../../index-CpJvLLWC.js";
import { getCoord as X, checkCirclePolygon as Z, getCircleGeometryFromPolygon as $ } from "../../../map-utils-okvDFmNf.js";
import { MapboxDraw as H } from "../../../index-BaJfFTpt.js";
import { MapDrawModeTabs as Q } from "./map-draw-tabs.es.js";
import { typedGeodesicDraw as k, customDrawStyles as V } from "../constance.es.js";
import { mapMarkerStartSvgContainer as ee, mapMarkerEndSvgContainer as re } from "../svg-containers.es.js";
import { useTheme as te } from "@mui/material";
import { customDrawLineStringMode as ne } from "./custom-modes/custom-draw-line-string-mode.es.js";
import { customDrawPolygonMode as oe } from "./custom-modes/custom-draw-polygon-mode.es.js";
function ae(u, o, m, s = {}) {
  const l = X(u), r = _(l[0]), c = _(l[1]), L = _(m), p = O(o, s.units), v = Math.asin(
    Math.sin(c) * Math.cos(p) + Math.cos(c) * Math.sin(p) * Math.cos(L)
  ), h = r + Math.atan2(
    Math.sin(L) * Math.sin(p) * Math.cos(c),
    Math.cos(p) - Math.sin(c) * Math.sin(v)
  ), f = J(h), t = J(v);
  return l[2] !== void 0 ? I([f, t, l[2]], s.properties) : I([f, t], s.properties);
}
function se(u, o, m = {}) {
  const s = m.steps || 64, l = m.properties ? m.properties : !Array.isArray(u) && u.type === "Feature" && u.properties ? u.properties : {}, r = [];
  for (let c = 0; c < s; c++)
    r.push(
      ae(u, o, c * -360 / s, m).geometry.coordinates
    );
  return r.push(r[0]), U([r], l);
}
var ce = se;
E.accessToken = "pk.eyJ1IjoiY2hpcnAiLCJhIjoiY2xid2JvdWE2MHZ3eDNwbXM5OGpzcnFqNiJ9.YRfFt53eK_f6dWIfrhwWUg";
const De = N((u) => {
  var D, P;
  const {
    data: o,
    isSingleDraw: m = !0,
    onChange: s = () => {
    },
    withStartEndLineIndicators: l,
    drawMode: r,
    shouldFinishDrawing: c,
    defaultSelectedTab: L,
    onDrawingFinished: p,
    ...v
  } = u, h = te(), f = T([]), t = T(null), e = T(null), [ie, S] = q(""), b = (n) => {
    if (t.current) {
      if (n.properties && "circleRadius" in n.properties) {
        const a = k.getCircleCenter(n), i = k.getCircleRadius(n), d = ce(a, i, { units: "kilometres", steps: 64 });
        s(d);
      } else
        s(n);
      S("");
    }
  }, W = (n) => {
    if (!t.current) return;
    let a = H.modes;
    a = {
      ...k.enable(a),
      draw_line_string: ne,
      draw_polygon: oe
    };
    const i = new H({
      displayControlsDefault: !1,
      modes: {
        ...a
      },
      styles: V(h.palette)
    });
    e.current = i, t.current.addControl(i, "top-left"), t.current.on("draw.create", (d) => {
      const g = d.features;
      b(g[0]);
    }), t.current.on("draw.update", (d) => {
      const g = d.features;
      b(g[0]);
    }), t.current.on("draw.delete", (d) => {
      const g = d.features;
      b(g[0]);
    }), n && e.current.changeMode(n), M(), L && A(L);
  }, M = F(() => {
    if (!t.current || !e.current) return;
    if (e.current.deleteAll(), r && (f.current.forEach((w) => w.remove()), e.current.deleteAll(), e.current.changeMode(r)), !o) {
      r && e.current.changeMode(r);
      return;
    }
    const n = Z(o);
    if (n) {
      const w = $(o);
      if (w) {
        const { center: x, radius: y } = w;
        if (n) {
          const C = k.createCircle(x, y);
          e.current.add(C);
        }
      }
    } else {
      if (o.type === "Feature" && l && o.geometry.type === "LineString") {
        const [w, x] = [
          o.geometry.coordinates[0],
          o.geometry.coordinates[o.geometry.coordinates.length - 1]
        ];
        f.current.forEach((B) => B.remove());
        const y = document.createElement("div");
        y.classList.add("start-end-line-marker"), y.innerHTML = ee(h.palette);
        const C = document.createElement("div");
        C.classList.add("start-end-line-marker"), C.innerHTML = re(h.palette), new E.Marker(y).setLngLat(w).addTo(t.current), new E.Marker(C).setLngLat(x).addTo(t.current), f.current = [y, C];
      }
      e.current.add(o);
    }
    const a = K(o, { recompute: !0 }), [i, d, g, Y] = a;
    t.current.fitBounds([i, d, g, Y], { padding: 50 });
  }, [r, h.palette, l, o]), R = F(() => {
    var a;
    if (!e.current || !t.current) return;
    const n = e.current.getMode();
    if (n === "draw_line_string" || n === "draw_polygon") {
      r ? e.current.changeMode(r) : e.current.changeMode("simple_select");
      const i = e.current.getAll().features;
      i.length > 1 ? (s(i[0]), r && M()) : (f.current.forEach((d) => d.remove()), (a = e.current) == null || a.deleteAll(), r && e.current.changeMode(r));
    }
  }, [M, r, s]);
  G(() => {
    !t.current || !e.current || (t.current.isStyleLoaded() ? M() : t.current.on("style.load", () => {
      M();
    }));
  }, [M]), G(() => {
    c && (R(), p == null || p());
  }, [R, c, p]);
  const A = (n) => {
    var a;
    !t.current || !e.current || (m && ((a = e.current) == null || a.deleteAll()), f.current.forEach((i) => i.remove()), S(n), e.current.changeMode(n));
  };
  return /* @__PURE__ */ j.jsx(z, { ...v, mapRef: t, onMapLoad: () => W(r), children: r ? null : /* @__PURE__ */ j.jsx(Q, { activeMode: (P = (D = e == null ? void 0 : e.current) == null ? void 0 : D.getMode) == null ? void 0 : P.call(D), onChangeMode: A }) });
});
export {
  De as DrawableMap
};
