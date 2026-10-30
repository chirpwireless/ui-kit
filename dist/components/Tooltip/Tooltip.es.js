import { chirpPalette as e } from "../../theme/palette.es.js";
import { mergeSx as t } from "../../helpers/merge-sx.es.js";
import { Box as n, Tooltip as r, alpha as i, useTheme as a } from "@mui/material";
import { jsx as o } from "react/jsx-runtime";
// src/components/Tooltip/Tooltip.tsx
var s = ({ children: s, tooltipProps: c, childrenProps: l, ...u }) => {
	let d = a(), f = e(d);
	return /* @__PURE__ */ o(r, {
		slotProps: { tooltip: { sx: {
			fontSize: "12px",
			backgroundColor: i(f.neutral.grey1, .9),
			color: f.neutral.primary,
			border: `1px solid ${f.borders.primary}`,
			borderRadius: "12px",
			backdropFilter: "blur(10px)",
			...c
		} } },
		...u,
		children: /* @__PURE__ */ o(n, {
			sx: t({
				display: "inline-block",
				height: "min-content",
				width: "min-content",
				maxWidth: "100%"
			}, l),
			children: s
		})
	});
};
export { s as Tooltip };
