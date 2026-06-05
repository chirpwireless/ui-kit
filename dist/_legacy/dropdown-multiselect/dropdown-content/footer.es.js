import { jsxRuntimeExports as r } from "../../../jsx-runtime-BgepH7Pb.js";
import { Stack as n } from "@mui/material";
import { Button as t } from "../../button/index.es.js";
import { Wrapper as e } from "./style.es.js";
const x = ({ selectedCount: o, onAccept: p, onClear: i }) => {
  const l = o ? `Apply (${o})` : "Apply";
  return /* @__PURE__ */ r.jsx(e, { p: 4, pt: 3, children: /* @__PURE__ */ r.jsxs(n, { direction: "row", children: [
    /* @__PURE__ */ r.jsx(t, { fullWidth: !0, onClick: i, children: "Clear all" }),
    /* @__PURE__ */ r.jsx(t, { fullWidth: !0, variant: "primary", onClick: p, children: l })
  ] }) });
};
export {
  x as DropdownFooter
};
