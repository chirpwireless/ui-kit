var i = Object.defineProperty;
var l = (n, t, e) => t in n ? i(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var r = (n, t, e) => l(n, typeof t != "symbol" ? t + "" : t, e);
class h {
  constructor(t) {
    r(this, "context", null);
    this.gradientColors = t;
    const e = document.createElement("CANVAS");
    if (e.width = 101, e.height = 1, this.context = e.getContext("2d"), this.context === null) return;
    const o = this.context.createLinearGradient(0, 0, 101, 0);
    t.forEach(([c, a]) => {
      o.addColorStop(a, c);
    }), this.context.fillStyle = o, this.context.fillRect(0, 0, 101, 1);
  }
  getColor(t) {
    try {
      const o = this.context.getImageData(t, 0, 1, 1).data;
      return `rgb(${o[0]}, ${o[1]}, ${o[2]})`;
    } catch {
      return null;
    }
  }
  getGradientColors() {
    return `${this.gradientColors.map(([t, e]) => `${t} ${e * 100}%`).join(", ")})`;
  }
}
export {
  h as LinearGradientHelper
};
