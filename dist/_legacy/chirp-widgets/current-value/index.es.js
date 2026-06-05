import { jsxRuntimeExports as r } from "../../../jsx-runtime-BgepH7Pb.js";
import { Wrapper as n, NoDataText as s, Postfix as x } from "./style.es.js";
import { useTranslation as d } from "react-i18next";
const c = ({ value: t, postfix: i, color: e }) => {
  const { t: o } = d("uiKit", { keyPrefix: "widgets" });
  return t === void 0 || t === "" ? /* @__PURE__ */ r.jsx(n, { color: e, children: /* @__PURE__ */ r.jsx(s, { children: o("No data") }) }) : /* @__PURE__ */ r.jsxs(n, { color: e, children: [
    String(t),
    !!i && /* @__PURE__ */ r.jsx(x, { children: i })
  ] });
};
export {
  c as CurrentValue
};
