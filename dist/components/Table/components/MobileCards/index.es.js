import { jsxRuntimeExports as n } from "../../../../jsx-runtime-BgepH7Pb.js";
import { Skeleton as m, Typography as s } from "@mui/material";
import { flexRender as x } from "@tanstack/react-table";
import { Fragment as u } from "react";
import { EmptyBlock as p } from "../../../EmptyBlock/EmptyBlock.es.js";
import { CardsList as d, GroupLabel as h, Card as g, CardField as f } from "./style.es.js";
const j = 3, b = ({ row: l }) => /* @__PURE__ */ n.jsx(n.Fragment, { children: l.getVisibleCells().map((i) => {
  const t = i.column, e = t.columnDef.meta;
  if (e != null && e.mobileHidden) return null;
  const o = (e == null ? void 0 : e.mobileLabel) ?? t.columnDef.header;
  return /* @__PURE__ */ n.jsxs(f, { children: [
    o ? /* @__PURE__ */ n.jsx(s, { variant: "caption", color: "neutral.grey5", component: "div", children: o }) : null,
    /* @__PURE__ */ n.jsx(s, { variant: "body2", color: "neutral.primary", component: "div", sx: { textAlign: "right" }, children: x(i.column.columnDef.cell, i.getContext()) })
  ] }, i.id);
}) }), R = ({
  rows: l,
  isLoading: i,
  onRowClick: t,
  renderMobileCard: e,
  renderEmptyBlock: o
}) => {
  if (i)
    return /* @__PURE__ */ n.jsx(d, { children: Array.from({ length: j }, (r, c) => /* @__PURE__ */ n.jsx(m, { variant: "rounded", height: 96, sx: { borderRadius: "12px" } }, c)) });
  if (l.length === 0)
    return o ? o() : /* @__PURE__ */ n.jsx(p, {});
  const a = (r) => /* @__PURE__ */ n.jsx(
    g,
    {
      clickable: !!t,
      onClick: t ? () => t(r.original) : void 0,
      children: e ? e(r.original) : /* @__PURE__ */ n.jsx(b, { row: r })
    },
    `${r.id}_${r.index}`
  );
  return /* @__PURE__ */ n.jsx(d, { children: l.map(
    (r) => r.subRows.length ? /* @__PURE__ */ n.jsxs(u, { children: [
      /* @__PURE__ */ n.jsx(h, { children: /* @__PURE__ */ n.jsx(s, { variant: "caption", children: r.groupingValue }) }),
      r.subRows.map(a)
    ] }, `${r.id}_${r.index}`) : a(r)
  ) });
};
export {
  R as MobileCards
};
