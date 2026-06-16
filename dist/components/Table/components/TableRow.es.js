import { jsxRuntimeExports as e } from "../../../jsx-runtime-BgepH7Pb.js";
import { flexRender as h } from "@tanstack/react-table";
import { Row as m, Cell as r } from "../style.es.js";
const p = ({
  row: i,
  table: o,
  sx: s,
  isExpanded: x = !1,
  disableHover: g = !1,
  onClick: n,
  renderExpandableBlock: l
}) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx(m, { sx: s, onClick: () => n == null ? void 0 : n(i), disableHover: g, children: i.getVisibleCells().map((t) => /* @__PURE__ */ e.jsx(
    r,
    {
      sx: {
        width: t.column.getSize()
      },
      children: h(t.column.columnDef.cell, t.getContext())
    },
    t.id
  )) }),
  x && l ? /* @__PURE__ */ e.jsx(m, { sx: { ...s, height: "max-content" }, children: /* @__PURE__ */ e.jsx(r, { colSpan: o.getVisibleFlatColumns().length, sx: { padding: 0 }, children: l(i.original) }) }) : null
] });
export {
  p as TableRow
};
