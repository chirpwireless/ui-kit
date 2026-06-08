import { jsxRuntimeExports as e } from "../../../jsx-runtime-BgepH7Pb.js";
import { flexRender as h } from "@tanstack/react-table";
import { Row as n, Cell as f } from "../style.es.js";
import { TableCell as g } from "./table-cell.es.js";
const R = ({
  row: t,
  table: a,
  sx: l,
  isExpanded: x = !1,
  onClick: r,
  onDoubleClick: m,
  renderExpandableBlock: i
}) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx(
    n,
    {
      sx: l,
      className: m ? "hoverable" : "",
      onClick: () => r == null ? void 0 : r(t),
      onDoubleClick: () => m == null ? void 0 : m(t),
      children: t.getVisibleCells().map((s) => /* @__PURE__ */ e.jsx(g, { children: h(s.column.columnDef.cell, s.getContext()) }, s.id))
    }
  ),
  x && i ? /* @__PURE__ */ e.jsx(n, { sx: { ...l, height: "max-content" }, children: /* @__PURE__ */ e.jsx(f, { colSpan: a.getVisibleFlatColumns().length, children: i(t.original) }) }) : null
] });
export {
  R as TableRow
};
