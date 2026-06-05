import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import * as s from "react";
import { Popper as p } from "@mui/material";
const f = ({ isOpened: e = !1, anchorEl: n, children: t }) => {
  const o = s.useRef(null);
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { ref: o, children: n }),
    /* @__PURE__ */ r.jsx(p, { open: e, anchorEl: o.current, children: t })
  ] });
};
export {
  f as Dropdown
};
