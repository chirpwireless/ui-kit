import { CurrentTheme as e } from "../../../styles/constants.es.js";
import { useTheme as t } from "@mui/material";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
// src/assets/icons/PlusIcon/index.tsx
var i = ({ color: i, width: a, height: o }) => {
	let { palette: s } = t(), c = i ?? (s.mode, e.Light, s.text.text1);
	return /* @__PURE__ */ r("svg", {
		width: a ?? "20",
		height: o ?? "20",
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		children: [/* @__PURE__ */ n("path", {
			d: "M6 12H18",
			stroke: c,
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ n("path", {
			d: "M12 18V6",
			stroke: c,
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
};
export { i as PlusIcon };
