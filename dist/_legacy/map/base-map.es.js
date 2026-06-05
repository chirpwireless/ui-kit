import { jsxRuntimeExports as v } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as M, Box as _ } from "@mui/material";
import { mapboxgl as s } from "../../mapbox-gl-BQVqFhjB.js";
import { useRef as m, useEffect as g } from "react";
import { getUiKitMapStyleId as B } from "../../map-utils-okvDFmNf.js";
import { useBreakpoints as G } from "../../hooks/use-breakpoints.es.js";
import { MapContainer as K } from "./style.es.js";
import { MapboxGeocoder as b, updateControlTexts as N } from "../../update-controls-text-rMjPeQYu.js";
import { HelpControl as w } from "./map-controls/help-control/help-control.es.js";
import { useTranslation as O } from "react-i18next";
s.accessToken = "pk.eyJ1IjoiY2hpcnAiLCJhIjoiY2xid2JvdWE2MHZ3eDNwbXM5OGpzcnFqNiJ9.YRfFt53eK_f6dWIfrhwWUg";
const A = ({
  coordinates: e,
  scrollZoom: x = !0,
  getMapStyleId: h = B,
  mapRef: r,
  onMapLoad: f,
  sx: k,
  children: T,
  controls: j = "full"
}) => {
  const { i18n: o } = O("uiKit", { keyPrefix: "map" }), p = m(null), u = m(null), a = m(null), { isMobile: y } = G(), { palette: l } = M(), C = (t) => {
    if (!r.current) return;
    const c = new s.LngLat(t.coords.longitude, t.coords.latitude);
    r.current.flyTo({ center: [c.lng, c.lat], essential: !0 });
  };
  return g(() => {
    if (!(!r || !r.current) && (r.current.setStyle(h(l.mode)), r.current && r.current._controls)) {
      const t = r.current._controls.find((c) => c instanceof w);
      t && t.updatePalette(l);
    }
  }, [o.language, r, h, l]), g(() => {
    if (r.current) return;
    r.current = new s.Map({
      container: p.current || "",
      style: h(l.mode),
      zoom: 6,
      minZoom: 1,
      projection: { name: "mercator" },
      scrollZoom: x,
      // refreshExpiredTiles: false,
      logoPosition: "bottom-right",
      maxBounds: [
        [-180, -72],
        [180, 72]
      ],
      center: e != null && e.lat && (e != null && e.lon) ? [e.lon, e.lat] : [19.56413004748697, 11.65120378622913],
      trackResize: !0,
      crossSourceCollisions: !1,
      cooperativeGestures: y
    }), r.current.on("load", f);
    const t = new s.NavigationControl({ showCompass: !1 });
    r.current.addControl(t, "bottom-right");
    const c = new w(l);
    if (r.current.addControl(c, "bottom-left"), r.current.setLanguage(o.language), r.current.getCanvas().style.cursor = "pointer", j === "full") {
      r.current.addControl(
        new s.FullscreenControl({ container: u.current ?? void 0 }),
        "bottom-right"
      ), a.current = new s.GeolocateControl({
        positionOptions: { enableHighAccuracy: !0 },
        showUserHeading: !1,
        fitBoundsOptions: { animate: !1 }
      }), r.current.addControl(a.current, "bottom-right"), r.current.addControl(
        new b({
          accessToken: s.accessToken || "",
          marker: !1,
          placeholder: o.t("uiKit:map.Search location"),
          collapsed: !0,
          render: (n) => {
            const d = n.text || "", z = n.place_name || "";
            return `
                      <div class="mapboxgl-ctrl-geocoder--suggestion">
                        <div class="custom-suggestion">
                          <div class="address">${d}&nbsp;${z}</div>
                          <div class="selected-icon"></div>
                        </div>
                      </div>
                    `;
          }
        }),
        "bottom-right"
      );
      const i = r.current._controls.find((n) => n instanceof b);
      i && i.setPlaceholder(o.t("uiKit:map.Search")), a.current.on("geolocate", C);
    }
    return () => {
      var i, n, d;
      (i = r.current) == null || i.off("load", f), (n = a.current) == null || n.off("geolocate", C), (d = r.current) == null || d.remove(), r.current = null;
    };
  }, []), g(() => {
    if (!u.current) return;
    const t = new ResizeObserver(() => {
      r.current !== null && r.current.resize();
    });
    return t.observe(u.current), () => t.disconnect();
  }, [r]), g(() => {
    const t = r.current;
    t && (t.setLanguage(o.language), N(o.t, t._controls));
  }, [o, r]), /* @__PURE__ */ v.jsxs(K, { sx: { ...k }, width: "100%", height: "100%", position: "relative", className: "wrapper", ref: u, children: [
    /* @__PURE__ */ v.jsx(_, { width: "100%", height: "100%", ref: p, className: "mapRef-container" }),
    T
  ] });
};
export {
  A as BaseMap
};
