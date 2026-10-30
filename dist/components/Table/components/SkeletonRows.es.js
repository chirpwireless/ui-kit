import { Cell as e, Row as t } from "../style.es.js";
import { Skeleton as n, TableBody as r } from "@mui/material";
import { jsx as i } from "react/jsx-runtime";
// src/components/Table/components/SkeletonRows.tsx
var a = Array(10).fill(null).map((e, t) => `row-${t + 1}`), o = ({ columns: o }) => /* @__PURE__ */ i(r, { children: a.map((r) => /* @__PURE__ */ i(t, { children: o.map(({ id: t, columnDef: a }) => /* @__PURE__ */ i(e, {
	sx: { width: a.meta?.width },
	children: /* @__PURE__ */ i(n, { sx: {
		minHeight: "28px",
		borderRadius: "6px"
	} })
}, `${r}-column-${t}`)) }, r)) });
export { o as SkeletonRows };
