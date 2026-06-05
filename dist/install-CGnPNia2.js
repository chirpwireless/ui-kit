import { __extends as T, ComponentModel as A, retrieve2 as B, ZRText as w, createTextStyle as S, windowOpen as k, getECData as R, getLayoutRect as E, Rect as V, ComponentView as O } from "./core-Dm3hJ1-b.js";
var D = (
  /** @class */
  function(r) {
    T(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.type = e.type, t.layoutMode = {
        type: "box",
        ignoreSize: !0
      }, t;
    }
    return e.type = "title", e.defaultOption = {
      // zlevel: 0,
      z: 6,
      show: !0,
      text: "",
      target: "blank",
      subtext: "",
      subtarget: "blank",
      left: 0,
      top: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#464646"
      },
      subtextStyle: {
        fontSize: 12,
        color: "#6E7079"
      }
    }, e;
  }(A)
), I = (
  /** @class */
  function(r) {
    T(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.type = e.type, t;
    }
    return e.prototype.render = function(t, W, p) {
      if (this.group.removeAll(), !!t.get("show")) {
        var g = this.group, d = t.getModel("textStyle"), v = t.getModel("subtextStyle"), a = t.get("textAlign"), i = B(t.get("textBaseline"), t.get("textVerticalAlign")), l = new w({
          style: S(d, {
            text: t.get("text"),
            fill: d.getTextColor()
          }, {
            disableBox: !0
          }),
          z2: 10
        }), C = l.getBoundingRect(), f = t.get("subtext"), c = new w({
          style: S(v, {
            text: f,
            fill: v.getTextColor(),
            y: C.height + t.get("itemGap"),
            verticalAlign: "top"
          }, {
            disableBox: !0
          }),
          z2: 10
        }), h = t.get("link"), x = t.get("sublink"), s = t.get("triggerEvent", !0);
        l.silent = !h && !s, c.silent = !x && !s, h && l.on("click", function() {
          k(h, "_" + t.get("target"));
        }), x && c.on("click", function() {
          k(x, "_" + t.get("subtarget"));
        }), R(l).eventData = R(c).eventData = s ? {
          componentType: "title",
          componentIndex: t.componentIndex
        } : null, g.add(l), f && g.add(c);
        var o = g.getBoundingRect(), y = t.getBoxLayoutParams();
        y.width = o.width, y.height = o.height;
        var n = E(y, {
          width: p.getWidth(),
          height: p.getHeight()
        }, t.get("padding"));
        a || (a = t.get("left") || t.get("right"), a === "middle" && (a = "center"), a === "right" ? n.x += n.width : a === "center" && (n.x += n.width / 2)), i || (i = t.get("top") || t.get("bottom"), i === "center" && (i = "middle"), i === "bottom" ? n.y += n.height : i === "middle" && (n.y += n.height / 2), i = i || "top"), g.x = n.x, g.y = n.y, g.markRedraw();
        var b = {
          align: a,
          verticalAlign: i
        };
        l.setStyle(b), c.setStyle(b), o = g.getBoundingRect();
        var u = n.margin, m = t.getItemStyle(["color", "opacity"]);
        m.fill = t.get("backgroundColor");
        var z = new V({
          shape: {
            x: o.x - u[3],
            y: o.y - u[0],
            width: o.width + u[1] + u[3],
            height: o.height + u[0] + u[2],
            r: t.get("borderRadius")
          },
          style: m,
          subPixelOptimize: !0,
          silent: !0
        });
        g.add(z);
      }
    }, e.type = "title", e;
  }(O)
);
function L(r) {
  r.registerComponentModel(D), r.registerComponentView(I);
}
export {
  L as install
};
