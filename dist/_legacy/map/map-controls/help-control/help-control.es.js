var l = Object.defineProperty;
var m = (i, e, t) => e in i ? l(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var n = (i, e, t) => m(i, typeof e != "symbol" ? e + "" : e, t);
import { locationSvg as c, trackerSvg as h } from "./help-control-svg.es.js";
import { t as a } from "i18next";
class v {
  constructor(e) {
    n(this, "container");
    n(this, "map");
    n(this, "palette");
    n(this, "locationItem");
    n(this, "trackerItem");
    n(this, "handleMouseEnter");
    n(this, "handleMouseLeave");
    this.palette = e, this.handleMouseEnter = this.showMenu.bind(this), this.handleMouseLeave = this.hideMenu.bind(this);
  }
  showMenu() {
    if (this.container) {
      const e = this.container.querySelector(".help-menu");
      e && (e.style.display = "block");
    }
  }
  hideMenu() {
    if (this.container) {
      const e = this.container.querySelector(".help-menu");
      e && (e.style.display = "none");
    }
  }
  updatePalette(e) {
    this.palette = e, this.locationItem && (this.locationItem.innerHTML = c(this.palette), this.locationItem.insertAdjacentText("beforeend", a("uiKit:map.Your location"))), this.trackerItem && (this.trackerItem.innerHTML = h(this.palette), this.trackerItem.insertAdjacentText("beforeend", a("uiKit:map.GPS tracker")));
  }
  onAdd(e) {
    this.map = e, this.container = document.createElement("div"), this.container.className = "mapboxgl-ctrl mapboxgl-ctrl-group", this.container.style.position = "relative", this.container.style.cursor = "pointer";
    const t = document.createElement("button"), s = document.createElement("span");
    s.className = "help-control", t.appendChild(s), this.container.appendChild(t);
    const o = document.createElement("div");
    o.className = "help-menu", this.locationItem = document.createElement("div"), this.locationItem.className = "help-menu-item", this.locationItem.innerHTML = c(this.palette), this.locationItem.insertAdjacentText("beforeend", a("uiKit:map.Your location")), o.appendChild(this.locationItem);
    const r = document.createElement("div");
    return r.className = "help-menu-divider", o.appendChild(r), this.trackerItem = document.createElement("div"), this.trackerItem.className = "help-menu-item", this.trackerItem.innerHTML = h(this.palette), this.trackerItem.insertAdjacentText("beforeend", a("uiKit:map.GPS tracker")), o.appendChild(this.trackerItem), this.container.appendChild(o), t.addEventListener("mouseenter", this.handleMouseEnter), this.container.addEventListener("mouseleave", this.handleMouseLeave), this.container;
  }
  onRemove() {
    if (this.container) {
      const e = this.container.querySelector("button");
      e && e.removeEventListener("mouseenter", this.handleMouseEnter), this.container.removeEventListener("mouseleave", this.handleMouseLeave), this.container.parentNode && this.container.parentNode.removeChild(this.container);
    }
    this.map = void 0, this.container = void 0, this.locationItem = void 0, this.trackerItem = void 0;
  }
}
export {
  v as HelpControl
};
