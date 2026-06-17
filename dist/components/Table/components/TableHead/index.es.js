import { jsxRuntimeExports as n } from "../../../../jsx-runtime-BgepH7Pb.js";
import { TableHead as w, TableSortLabel as j } from "@mui/material";
import { CaretDownIcon as H } from "../../../../icons/CaretDownIcon/index.es.js";
import { CaretUpIcon as I } from "../../../../icons/CaretUpIcon/index.es.js";
import { SortIcon as T } from "../../../../icons/SortIcon/index.es.js";
import { Row as g, HeadCell as u } from "./style.es.js";
const A = ({ columns: s, enableSorting: c, sortingState: a }) => /* @__PURE__ */ n.jsx(w, { children: /* @__PURE__ */ n.jsx(g, { children: s.map(({ id: r, columnDef: l, getCanSort: p, getToggleSortingHandler: x }) => {
  const { meta: d, maxSize: f, header: t } = l, o = d, h = c && p(), e = a.find((C) => {
    var i;
    return ((i = C.id) == null ? void 0 : i.toLowerCase()) === (r == null ? void 0 : r.toLowerCase());
  });
  let m = T;
  return e && (m = e != null && e.desc ? H : I), /* @__PURE__ */ n.jsx(
    u,
    {
      sx: {
        width: o == null ? void 0 : o.width,
        maxWidth: f,
        textAlign: o == null ? void 0 : o.align
      },
      children: h ? /* @__PURE__ */ n.jsx(j, { IconComponent: m, onClick: x(), children: t }) : t
    },
    r
  );
}) }) });
export {
  A as TableHead
};
