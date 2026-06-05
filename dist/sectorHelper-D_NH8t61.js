import { isArray as i, map as o, parsePercent as c } from "./core-Dm3hJ1-b.js";
function s(n, e, t) {
  var r = n.get("borderRadius");
  if (r == null)
    return t ? {
      cornerRadius: 0
    } : null;
  i(r) || (r = [r, r, r, r]);
  var u = Math.abs(e.r || 0 - e.r0 || 0);
  return {
    cornerRadius: o(r, function(a) {
      return c(a, u);
    })
  };
}
export {
  s as getSectorCornerRadius
};
