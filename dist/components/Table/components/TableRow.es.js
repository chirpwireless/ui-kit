import { Cell as e, Row as t } from "../style.es.js";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
import { flexRender as a } from "@tanstack/react-table";
// src/components/Table/components/TableRow.tsx
var o = ({ row: o, table: s, sx: c, isExpanded: l = !1, disableHover: u = !1, virtualIndex: d, measureRef: f, onClick: p, renderExpandableBlock: m }) => /* @__PURE__ */ i(n, { children: [/* @__PURE__ */ r(t, {
	ref: f,
	"data-index": d,
	sx: c,
	onClick: () => p?.(o),
	disableHover: u,
	children: o.getVisibleCells().map((t) => /* @__PURE__ */ r(e, {
		sx: { width: t.column.getSize() },
		children: a(t.column.columnDef.cell, t.getContext())
	}, t.id))
}), l && m ? /* @__PURE__ */ r(t, {
	sx: {
		...c,
		height: "max-content"
	},
	children: /* @__PURE__ */ r(e, {
		colSpan: s.getVisibleFlatColumns().length,
		sx: { padding: 0 },
		children: m(o.original)
	})
}) : null] });
export { o as TableRow };
