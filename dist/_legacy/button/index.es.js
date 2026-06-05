import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { ButtonWrapper as l, LoaderWrapper as c, Backdrop as x } from "./style.es.js";
import { Loader as a } from "../loader/index.es.js";
import { useTheme as d } from "@mui/material";
const f = ({ children: t, isLoading: e, variant: o, disabled: p, ...s }) => {
  const m = d();
  return /* @__PURE__ */ r.jsxs(l, { ...s, variant: o, disabled: e || p, disableRipple: !0, children: [
    e && /* @__PURE__ */ r.jsx(c, { children: /* @__PURE__ */ r.jsx(a, { size: "small", color: m.palette.base.color1 }) }),
    e && /* @__PURE__ */ r.jsx(x, { variant: o }),
    t
  ] });
};
export {
  f as Button
};
