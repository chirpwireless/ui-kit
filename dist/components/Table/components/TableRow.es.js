import { jsxRuntimeExports as e } from "../../../jsx-runtime-BgepH7Pb.js";
import { flexRender as h } from "@tanstack/react-table";
import { Row as m, Cell as r } from "../style.es.js";
const p = ({
  row: i,
  table: o,
  sx: l,
  isExpanded: x = !1,
  disableHover: g = !1,
  onClick: n,
  renderExpandableBlock: s
}) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx(m, { sx: l, onClick: () => n == null ? void 0 : n(i), disableHover: g, children: i.getVisibleCells().map((t) => /* @__PURE__ */ e.jsx(r, { width: t.column.getSize(), children: h(t.column.columnDef.cell, t.getContext()) }, t.id)) }),
  x && s ? /* @__PURE__ */ e.jsx(m, { sx: { ...l, height: "max-content" }, children: /* @__PURE__ */ e.jsx(r, { colSpan: o.getVisibleFlatColumns().length, sx: { padding: 0 }, children: s(i.original) }) }) : null
] });
export {
  p as TableRow
};
