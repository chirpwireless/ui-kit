import { jsxRuntimeExports as t } from "../../jsx-runtime-BgepH7Pb.js";
import v, { useRef as y } from "react";
import { Box as I, MenuItem as S, Popover as R } from "@mui/material";
import { SimpleTreeView as T } from "@mui/x-tree-view";
import { Select as b } from "../select/index.es.js";
import { TreeItem as A } from "./style.es.js";
import { SelectIndicator as O } from "../select-indicator/index.es.js";
const H = ({
  options: h,
  onChange: l,
  width: x = "100%",
  selectProps: s,
  disabled: u,
  treeViewMaxHeight: c,
  selectedNode: r
}) => {
  var f;
  const [j, a] = v.useState(!1), p = y(null), g = (m, n) => {
    n || (l && l(m), a(!1));
  }, o = (m, n = 0) => m.map((i) => /* @__PURE__ */ t.jsx(
    A,
    {
      itemId: i.id,
      label: i.label,
      level: n,
      onClick: () => g(i, Array.isArray(i.children)),
      children: Array.isArray(i.children) ? o(i.children, n + 1) : null
    },
    i.id
  ));
  return /* @__PURE__ */ t.jsxs(I, { sx: { width: x }, children: [
    /* @__PURE__ */ t.jsx("div", { ref: p, children: /* @__PURE__ */ t.jsx(
      b,
      {
        ...s,
        value: (r == null ? void 0 : r.id) || "",
        displayEmpty: !0,
        open: !1,
        disabled: u,
        onOpen: () => a(!0),
        children: /* @__PURE__ */ t.jsx(S, { value: r == null ? void 0 : r.id, children: r == null ? void 0 : r.label })
      }
    ) }),
    /* @__PURE__ */ t.jsx(
      R,
      {
        id: "simple-popover",
        open: j,
        onClose: () => a(!1),
        anchorEl: p.current,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        children: /* @__PURE__ */ t.jsx(
          T,
          {
            sx: {
              width: (f = p.current) == null ? void 0 : f.getBoundingClientRect().width,
              maxHeight: c,
              paddingTop: "8px !important",
              paddingBottom: "8px !important"
            },
            selectedItems: (r == null ? void 0 : r.id) || "",
            slots: {
              expandIcon: O
            },
            children: o(h)
          }
        )
      }
    )
  ] });
};
export {
  H as TreeSelect
};
