import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { LoaderContainer as m, LoaderSpan as s, LoaderElement as d, LoaderText as l } from "./style.es.js";
const j = ({ text: o, color: n, size: e = "small" }) => /* @__PURE__ */ r.jsxs(m, { text: o, children: [
  /* @__PURE__ */ r.jsx(s, { size: e, children: [...Array(8)].map((p, a) => /* @__PURE__ */ r.jsx(d, { index: a, size: e, color: n }, a)) }),
  o && /* @__PURE__ */ r.jsx(l, { children: o })
] });
export {
  j as Loader
};
