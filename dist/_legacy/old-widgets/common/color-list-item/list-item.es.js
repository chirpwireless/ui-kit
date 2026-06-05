import { jsxRuntimeExports as t } from "../../../../jsx-runtime-BgepH7Pb.js";
import { Stack as e } from "@mui/material";
import { Marker as p } from "./styles.es.js";
import { Typography as n } from "../../../typogrpahy/index.es.js";
const j = ({ color: i, name: s, value: o, onClick: r }) => {
  const c = (a) => {
    a.stopPropagation(), r && r();
  };
  return /* @__PURE__ */ t.jsxs(
    e,
    {
      direction: "row",
      justifyContent: "space-between",
      sx: {
        cursor: r && "pointer"
      },
      onClick: c,
      children: [
        /* @__PURE__ */ t.jsxs(e, { direction: "row", gap: 1, alignItems: "center", children: [
          /* @__PURE__ */ t.jsx(p, { sx: { backgroundColor: i } }),
          /* @__PURE__ */ t.jsx(n, { variant: "caption12", color: "text.text1", children: s })
        ] }),
        o === null ? null : /* @__PURE__ */ t.jsx(n, { variant: "caption12", color: "text.text1", children: o })
      ]
    }
  );
};
export {
  j as ColorListItem
};
