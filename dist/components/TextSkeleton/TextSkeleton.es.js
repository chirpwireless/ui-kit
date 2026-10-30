import { Skeleton as e } from "../Skeleton/Skeleton.es.js";
import { Box as t, useTheme as n } from "@mui/material";
import { jsx as r } from "react/jsx-runtime";
// src/components/TextSkeleton/TextSkeleton.tsx
var i = ({ width: i, height: a, sx: o }) => {
	let s = n();
	return /* @__PURE__ */ r(t, {
		sx: {
			width: i ?? "120px",
			height: a ?? s.typography.body1.lineHeight,
			display: "inline-block",
			borderRadius: "8px",
			overflow: "hidden",
			...o
		},
		children: /* @__PURE__ */ r(e, {})
	});
};
export { i as TextSkeleton };
