import { jsxRuntimeExports as e } from "../../../jsx-runtime-BgepH7Pb.js";
import { flexRender as h } from "@tanstack/react-table";
import { Row as r, Cell as m } from "../style.es.js";
const j = ({
  row: i,
  table: o,
  sx: s,
  isExpanded: x = !1,
  disableHover: a = !1,
  virtualIndex: d,
  measureRef: g,
  onClick: n,
  renderExpandableBlock: l
}) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  /* @__PURE__ */ e.jsx(
    r,
    {
      ref: g,
      "data-index": d,
      sx: s,
      onClick: () => n == null ? void 0 : n(i),
      disableHover: a,
      children: i.getVisibleCells().map((t) => /* @__PURE__ */ e.jsx(
        m,
        {
          sx: {
            width: t.column.getSize()
          },
          children: h(t.column.columnDef.cell, t.getContext())
        },
        t.id
      ))
    }
  ),
  x && l ? /* @__PURE__ */ e.jsx(r, { sx: { ...s, height: "max-content" }, children: /* @__PURE__ */ e.jsx(m, { colSpan: o.getVisibleFlatColumns().length, sx: { padding: 0 }, children: l(i.original) }) }) : null
] });
export {
  j as TableRow
};
