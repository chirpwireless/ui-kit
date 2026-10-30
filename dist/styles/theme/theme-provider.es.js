import { getTheme as e } from "./index.es.js";
import { ThemeProvider as t } from "@mui/material";
import { jsx as n } from "react/jsx-runtime";
// src/styles/theme/theme-provider.tsx
var r = ({ mode: r, customPalette: i, ...a }) => /* @__PURE__ */ n(t, {
	theme: e(r, i),
	...a
});
export { r as ThemeProvider };
