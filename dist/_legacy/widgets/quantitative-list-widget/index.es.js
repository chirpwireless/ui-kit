import { jsxRuntimeExports as t } from "../../../jsx-runtime-BgepH7Pb.js";
import { useTheme as m, Stack as n, alpha as g } from "@mui/material";
import { BaseWidget as u } from "../base-widget/index.es.js";
import { ListItem as h, Circle as b, QuantityBox as j } from "./style.es.js";
import { Typography as C } from "../../typogrpahy/index.es.js";
const B = (a) => {
  const { data: r, onItemClick: e, listContainerSx: i, listItemSx: l, ...c } = a, { palette: s } = m(), x = /* @__PURE__ */ t.jsx(n, { gap: "12px", sx: { ...i }, children: r.map((o, p) => /* @__PURE__ */ t.jsxs(
    h,
    {
      onClick: (d) => {
        d.stopPropagation(), e && e(o.status);
      },
      sx: {
        ...l,
        borderBottom: p === r.length - 1 ? "none" : `1px solid ${s.border.border3}`
      },
      children: [
        /* @__PURE__ */ t.jsxs(n, { direction: "row", gap: "8px", alignItems: "center", children: [
          /* @__PURE__ */ t.jsx(b, { sx: { backgroundColor: o.color } }),
          /* @__PURE__ */ t.jsx(C, { variant: "body1", color: s.text.text1, children: o.label })
        ] }),
        /* @__PURE__ */ t.jsx(j, { sx: { backgroundColor: g(o.color, 0.2), color: o.color }, children: o.value })
      ]
    },
    o.status
  )) });
  return /* @__PURE__ */ t.jsx(u, { ...c, renderMainContent: x });
};
export {
  B as QuantitativeListWidget
};
