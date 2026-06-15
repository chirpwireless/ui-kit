import { jsxRuntimeExports as a } from "../../jsx-runtime-BgepH7Pb.js";
import { useState as m, useRef as p, useEffect as x } from "react";
import { ScrollContainer as E } from "./styles.es.js";
const S = ({ children: o, sx: i, onScroll: e, scrollRef: c }) => {
  const [l, n] = m(!1), f = p(null), r = c || f;
  return x(() => {
    const s = () => {
      n(!0);
      const u = setTimeout(() => {
        n(!1);
      }, 500);
      return e == null || e(), () => clearTimeout(u);
    }, t = r.current;
    return t && t.addEventListener("scroll", s), () => {
      t && t.removeEventListener("scroll", s);
    };
  }, [e, r]), /* @__PURE__ */ a.jsx(E, { ref: r, isScrolling: l, sx: i, children: o });
};
export {
  S as DynamicScrollStack
};
