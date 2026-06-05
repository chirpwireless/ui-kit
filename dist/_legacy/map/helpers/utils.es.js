import { mapboxgl as E } from "../../../mapbox-gl-BQVqFhjB.js";
import { hooks as P } from "../../../moment-DHYryOIn.js";
import { specificMarkerIconWithDiffusion as k, mapMarkerStartSvgContainer as H, mapMarkerEndSvgContainer as S } from "../svg-containers.es.js";
import { mapMarkerSvgString as T } from "../mp-marker-string.es.js";
const O = (n, e, s) => e.some((a) => {
  const o = n.x - a.x, r = n.y - a.y;
  return Math.sqrt(o * o + r * r) < s;
}), N = (n) => {
  const e = n.getBounds();
  if (e)
    return {
      north: e.getNorth(),
      south: e.getSouth(),
      east: e.getEast(),
      west: e.getWest()
    };
}, A = (n, e) => {
  const [s, a] = n;
  return e ? s >= e.west && s <= e.east && a >= e.south && a <= e.north : !1;
}, L = {
  HIGH: 14,
  MEDIUM: 11,
  LOW: 8,
  NONE: 7.5
};
let h = [], M = [];
const C = () => {
  h.forEach((n) => n.remove()), M = [], h = [];
}, x = (n, e, s, a, o) => {
  if (C(), !o || !n || !e || o < L.NONE)
    return;
  let r = 15;
  o >= L.HIGH ? r = 20 : o >= L.MEDIUM ? r = 30 : o >= L.LOW && (r = 40);
  const c = N(n), t = e.filter((l) => A(l, c)), i = t.length;
  t.forEach((l, u) => {
    if (Math.round(u % Math.round(i / r)) === 0) {
      const p = n.project(l);
      if (!O(p, M, 50)) {
        const f = s ? s[u] : null, m = a ? a[u] : null, d = `
                <div>${m ? P(m).format("YYYY.MM.DD HH:mm") : "N/A"}</div>
                <div class="speed">${f !== null ? `${f.toFixed(2)} km/h` : "Speed N/A"}</div>
                `, v = new E.Popup({ closeButton: !1, className: "speed-popup" }).setLngLat(l).setHTML(d);
        v.addTo(n), h.push(v), M.push(p);
      }
    }
  });
}, y = ({
  geometry: n,
  popupNode: e,
  map: s,
  markersRef: a,
  theme: o,
  specificMarkerIcon: r,
  variant: c
}) => {
  const t = document.createElement("div");
  c === "base" ? t.innerHTML = r ? r(o.palette) : T(o.palette) : c === "single-point" && r && (t.innerHTML = r ? k(o.palette, r) : T(o.palette));
  const i = new E.Marker({ element: t }).setLngLat(
    n.coordinates
  );
  if (e) {
    const l = new E.Popup({
      closeButton: !1
    }).setDOMContent(e).trackPointer();
    i.setPopup(l);
    let u = !1, p;
    const f = () => {
      u = !0, clearTimeout(p), l.addTo(s.current);
    }, m = () => {
      u = !1, p = setTimeout(() => {
        u || l.remove();
      }, 100);
    };
    t.addEventListener("mouseenter", f), t.addEventListener("mouseleave", m), l.on("open", () => {
      const d = l.getElement();
      if (!d) return;
      const v = () => {
        u = !0, clearTimeout(p);
      }, g = () => {
        u = !1, m();
      };
      d.addEventListener("mouseenter", v), d.addEventListener("mouseleave", g), l.on("close", () => {
        d.removeEventListener("mouseenter", v), d.removeEventListener("mouseleave", g);
      });
    }), i.on("remove", () => {
      t.removeEventListener("mouseenter", f), t.removeEventListener("mouseleave", m);
    });
  }
  i.addTo(s.current), a.current.push(i);
}, W = ({
  geometry: n,
  map: e,
  markersRef: s,
  isLineMarkersNeeded: a,
  theme: o
}) => {
  n.coordinates && Array.isArray(n.coordinates) && n.coordinates.forEach((r, c) => {
    if (Array.isArray(r) && r.length === 2) {
      let t = null;
      if (c === 0 ? (t = document.createElement("div"), t.classList.add("start-end-line-marker"), t.innerHTML = H(o.palette)) : c === n.coordinates.length - 1 ? (t = document.createElement("div"), t.classList.add("start-end-line-marker"), t.innerHTML = S(o.palette)) : a && (t = document.createElement("div"), t.classList.add("common-line-marker")), t) {
        const i = new E.Marker(t).setLngLat(r);
        e.current && i.addTo(e.current), s.current.push(i);
      }
    }
  });
};
export {
  L as ZOOM_BREAKPOINTS,
  x as createPopupsForLineString,
  W as renderLineStringPoints,
  y as renderPoints
};
