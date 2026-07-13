import { jsxRuntimeExports as n } from "../../../../jsx-runtime-BgepH7Pb.js";
import { Skeleton as a } from "@mui/material";
import { flexRender as u } from "@tanstack/react-table";
import { Fragment as c } from "react";
import { EmptyBlock as x } from "../../../EmptyBlock/EmptyBlock.es.js";
import { CardsList as d, GroupLabel as h, Card as f, CardField as p, FieldLabel as j, FieldValue as g } from "./style.es.js";
const b = 3, C = ({ row: s }) => /* @__PURE__ */ n.jsx(n.Fragment, { children: s.getVisibleCells().map((r) => {
  const l = r.column, i = l.columnDef.meta;
  if (i != null && i.mobileHidden) return null;
  const t = (i == null ? void 0 : i.mobileLabel) ?? l.columnDef.header;
  return /* @__PURE__ */ n.jsxs(p, { children: [
    t ? /* @__PURE__ */ n.jsx(j, { children: t }) : null,
    /* @__PURE__ */ n.jsx(g, { children: u(r.column.columnDef.cell, r.getContext()) })
  ] }, r.id);
}) }), E = ({
  rows: s,
  isLoading: r,
  onRowClick: l,
  renderMobileCard: i,
  renderEmptyBlock: t
}) => {
  if (r)
    return /* @__PURE__ */ n.jsx(d, { children: Array.from({ length: b }, (e, m) => /* @__PURE__ */ n.jsx(a, { variant: "rounded", height: 96, sx: { borderRadius: "12px" } }, m)) });
  if (s.length === 0)
    return t ? t() : /* @__PURE__ */ n.jsx(x, {});
  const o = (e) => /* @__PURE__ */ n.jsx(
    f,
    {
      clickable: !!l,
      onClick: l ? () => l(e.original) : void 0,
      children: i ? i(e.original) : /* @__PURE__ */ n.jsx(C, { row: e })
    },
    `${e.id}_${e.index}`
  );
  return /* @__PURE__ */ n.jsx(d, { children: s.map(
    (e) => e.subRows.length ? /* @__PURE__ */ n.jsxs(c, { children: [
      /* @__PURE__ */ n.jsx(h, { children: e.groupingValue }),
      e.subRows.map(o)
    ] }, `${e.id}_${e.index}`) : o(e)
  ) });
};
export {
  E as MobileCards
};
