import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as l } from "@mui/material";
import { ButtonWrapper as c, Backdrop as x, LoaderWrapper as a } from "./style.es.js";
import { Loader as d } from "../loader/index.es.js";
const f = ({ children: t, isLoading: e, variant: o, disabled: p, ...s }) => {
  const m = l();
  return /* @__PURE__ */ r.jsxs(c, { ...s, variant: o, disabled: e || p, disableRipple: !0, children: [
    e && /* @__PURE__ */ r.jsx(x, { variant: o }),
    e && /* @__PURE__ */ r.jsx(a, { children: /* @__PURE__ */ r.jsx(d, { size: "small", color: m.palette.base.color1 }) }),
    t
  ] });
};
export {
  f as IconButton
};
