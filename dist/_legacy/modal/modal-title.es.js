import { jsxRuntimeExports as t } from "../../jsx-runtime-BgepH7Pb.js";
import { Stack as c, Typography as x } from "@mui/material";
const l = ({ title: i, subTitle: r, subTitleWidth: o, margin: n, size: e = "mini" }) => /* @__PURE__ */ t.jsxs(c, { gap: i && r ? "8px" : "0px", sx: { margin: n }, children: [
  /* @__PURE__ */ t.jsx(x, { variant: e === "big" ? "h3" : "title16", textAlign: "center", color: "text.text1", children: i }),
  /* @__PURE__ */ t.jsx(
    x,
    {
      variant: e === "big" ? "subtitle1" : "caption12",
      textAlign: "center",
      color: "text.text8",
      width: o,
      children: r
    }
  )
] });
export {
  l as ModalTitle
};
