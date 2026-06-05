import { jsxRuntimeExports as n } from "../../../../jsx-runtime-BgepH7Pb.js";
import { Typography as r } from "@mui/material";
import { useTranslation as s } from "react-i18next";
const c = ({ value: i, postfix: t, label: o, color: a }) => {
  const e = Math.round(i * 10) / 10, { t: p } = s("uiKit", { keyPrefix: "widgets" });
  return isNaN(e) ? null : /* @__PURE__ */ n.jsxs(r, { fontWeight: 500, fontSize: "16px", lineHeight: "28px", textTransform: "capitalize", color: a, children: [
    p(o),
    " ",
    e,
    t && /* @__PURE__ */ n.jsx(r, { component: "span", sx: { paddingLeft: "2px", fontSize: "10px", verticalAlign: "super" }, children: t })
  ] });
};
export {
  c as CalculatedValue
};
