import { CaretDownIcon as e } from "../../../../icons/CaretDownIcon/index.es.js";
import { CaretUpIcon as t } from "../../../../icons/CaretUpIcon/index.es.js";
import { SortIcon as n } from "../../../../icons/SortIcon/index.es.js";
import { HeadCell as r, Row as i } from "./style.es.js";
import { TableHead as a, TableSortLabel as o } from "@mui/material";
import { jsx as s } from "react/jsx-runtime";
// src/components/Table/components/TableHead/index.tsx
var c = ({ columns: c, enableSorting: l, sortingState: u }) => /* @__PURE__ */ s(a, { children: /* @__PURE__ */ s(i, { children: c.map(({ id: i, columnDef: a, getCanSort: c, getToggleSortingHandler: d }) => {
	let { meta: f, maxSize: p, header: m } = a, h = f, g = l && c(), _ = u.find((e) => e.id?.toLowerCase() === i?.toLowerCase()), v = n;
	return _ && (v = _?.desc ? e : t), /* @__PURE__ */ s(r, {
		sx: {
			width: h?.width,
			maxWidth: p,
			textAlign: h?.align
		},
		children: g ? /* @__PURE__ */ s(o, {
			IconComponent: v,
			onClick: d(),
			children: m
		}) : m
	}, i);
}) }) });
export { c as TableHead };
