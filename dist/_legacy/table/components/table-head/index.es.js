import { jsxRuntimeExports as r } from "../../../../jsx-runtime-BgepH7Pb.js";
import { TableHead as b, TableSortLabel as j } from "@mui/material";
import { HeadCell as w } from "./style.es.js";
import { CaretDownIcon as H } from "../../../../assets/icons/CaretDownIcon/index.es.js";
import { CaretUpIcon as I } from "../../../../assets/icons/CaretUpIcon/index.es.js";
import { SortIcon as T } from "../../../../assets/icons/SortIcon/index.es.js";
import { Row as u } from "../../style.es.js";
const E = ({ columns: a, enableSorting: s, sortingState: i, headerSx: c }) => /* @__PURE__ */ r.jsx(b, { children: /* @__PURE__ */ r.jsx(u, { children: a.map(({ id: o, columnDef: l, getCanSort: p, getToggleSortingHandler: d, getSize: f }) => {
  const { size: x, header: t } = l, h = s && p(), e = i.find((C) => {
    var m;
    return ((m = C.id) == null ? void 0 : m.toLowerCase()) === (o == null ? void 0 : o.toLowerCase());
  });
  let n = T;
  return e && (n = e != null && e.desc ? H : I), /* @__PURE__ */ r.jsx(w, { sx: { width: f(), maxWidth: x, ...c }, children: h ? /* @__PURE__ */ r.jsx(j, { IconComponent: n, onClick: d(), children: t }) : t }, o);
}) }) });
export {
  E as TableHead
};
