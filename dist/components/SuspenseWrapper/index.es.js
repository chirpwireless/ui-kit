import { PageLoader as e } from "../PageLoader/PageLoader.es.js";
import "../PageLoader/index.es.js";
import { Suspense as t } from "react";
import { jsx as n } from "react/jsx-runtime";
// src/components/SuspenseWrapper/index.tsx
var r = ({ children: r }) => /* @__PURE__ */ n(t, {
	fallback: /* @__PURE__ */ n(e, {}),
	children: r
});
export { r as SuspenseWrapper };
