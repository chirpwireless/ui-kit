import { jsxRuntimeExports as e } from "../../../jsx-runtime-BgepH7Pb.js";
import { TableBody as l, Skeleton as n } from "@mui/material";
import { Row as s, Cell as p } from "../style.es.js";
const x = new Array(10).fill(null).map((r, o) => `row-${o + 1}`), h = ({ columns: r }) => /* @__PURE__ */ e.jsx(l, { children: x.map((o) => /* @__PURE__ */ e.jsx(s, { children: r.map(({ id: m, columnDef: i }) => {
  var t;
  return /* @__PURE__ */ e.jsx(p, { sx: { width: (t = i.meta) == null ? void 0 : t.width }, children: /* @__PURE__ */ e.jsx(n, { sx: { minHeight: "28px", borderRadius: "6px" } }) }, `${o}-column-${m}`);
}) }, o)) });
export {
  h as SkeletonRows
};
