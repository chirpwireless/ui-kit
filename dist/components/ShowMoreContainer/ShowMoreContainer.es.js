import { jsxRuntimeExports as s } from "../../jsx-runtime-BgepH7Pb.js";
import { ExpandMore as g } from "@mui/icons-material";
import { useState as i, useRef as j, useEffect as R } from "react";
import { Wrapper as b, BoxWrapper as C, Mark as k, Arrow as B } from "./style.es.js";
const M = ({ height: e, children: c }) => {
  const [l, a] = i(!1), [p, u] = i(!0), [f, m] = i(e), r = j(null), x = (t) => {
    t.stopPropagation(), t.preventDefault(), a((o) => !o);
  };
  return R(() => {
    var t;
    if (r.current) {
      const { bottom: o } = r.current.getBoundingClientRect(), n = (t = r.current.parentElement) == null ? void 0 : t.getBoundingClientRect();
      if (n) {
        const d = o - n.top <= e;
        m(o - n.top), u(d);
      }
    }
  }, [e]), /* @__PURE__ */ s.jsxs(b, { children: [
    /* @__PURE__ */ s.jsxs(C, { open: l, height: e, heightFull: f, children: [
      c,
      /* @__PURE__ */ s.jsx(k, { className: "last-badge", height: e, ref: r })
    ] }),
    !p && /* @__PURE__ */ s.jsx(B, { open: l, onClick: (t) => x(t), children: /* @__PURE__ */ s.jsx(g, { sx: { width: "16px" } }) })
  ] });
};
export {
  M as ShowMoreContainer
};
