import { coordEach as u } from "./index-CpJvLLWC.js";
function e(n, f = {}) {
  if (n.bbox != null && f.recompute !== !0)
    return n.bbox;
  const i = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return u(n, (t) => {
    i[0] > t[0] && (i[0] = t[0]), i[1] > t[1] && (i[1] = t[1]), i[2] < t[0] && (i[2] = t[0]), i[3] < t[1] && (i[3] = t[1]);
  }), i;
}
var r = e;
export {
  r as index_default
};
