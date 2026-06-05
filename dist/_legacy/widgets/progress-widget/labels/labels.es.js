import { jsxRuntimeExports as e } from "../../../../jsx-runtime-BgepH7Pb.js";
import { useTheme as a, Stack as l, Box as t } from "@mui/material";
import { Typography as x } from "../../../typogrpahy/index.es.js";
const c = ({ data: o }) => {
  const p = a();
  return /* @__PURE__ */ e.jsx(l, { direction: "row", gap: "16px", children: o.map((r) => /* @__PURE__ */ e.jsxs(t, { display: "flex", alignItems: "center", gap: "8px", children: [
    /* @__PURE__ */ e.jsx(t, { width: "4px", height: "4px", borderRadius: "50%", bgcolor: r.color }),
    /* @__PURE__ */ e.jsx(x, { variant: "caption12", color: p.palette.text.textInput80, children: r.label })
  ] }, r.label)) });
};
export {
  c as Labels
};
