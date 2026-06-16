import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { Container as t, Modal as e, Title as n, Description as l } from "./style.es.js";
const d = ({ title: o, description: s, actionComponent: x, icon: i }) => /* @__PURE__ */ r.jsx(t, { children: /* @__PURE__ */ r.jsxs(e, { children: [
  i,
  /* @__PURE__ */ r.jsx(
    n,
    {
      sx: {
        mt: "24px",
        mb: "12px"
      },
      children: o
    }
  ),
  /* @__PURE__ */ r.jsx(
    l,
    {
      sx: {
        mb: "24px"
      },
      children: s
    }
  ),
  x
] }) });
export {
  d as Modal
};
