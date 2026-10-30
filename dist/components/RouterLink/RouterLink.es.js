import { styled as e } from "@mui/material";
import { jsx as t } from "react/jsx-runtime";
import { Link as n } from "react-router-dom";
// src/components/RouterLink/RouterLink.tsx
var r = e(n)(({ theme: e }) => ({
	color: e.palette.primary.main,
	textDecoration: "none",
	"&:hover": { textDecoration: "underline" }
})), i = ({ href: e, to: n, ...i }) => /* @__PURE__ */ t(r, {
	to: n || e || "",
	...i
});
export { i as RouterLink };
