import { jsxRuntimeExports as e } from "../../../jsx-runtime-BgepH7Pb.js";
import { Cell as c } from "../style.es.js";
import { useRef as f, useState as m } from "react";
import { Tooltip as a } from "../../tooltip/index.es.js";
const w = ({ sx: l, children: o }) => {
  const r = f(null), [s, i] = m(!1), n = () => {
    const t = r.current;
    if (t) {
      const p = t.scrollWidth > t.clientWidth;
      i(p);
    }
  };
  return /* @__PURE__ */ e.jsx(c, { sx: l, children: /* @__PURE__ */ e.jsx(
    a,
    {
      ref: r,
      onMouseEnter: n,
      sx: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      placement: "top",
      title: s ? o : "",
      disableInteractive: !0,
      children: /* @__PURE__ */ e.jsx(e.Fragment, { children: o })
    }
  ) });
};
export {
  w as TableCell
};
