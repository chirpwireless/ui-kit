import { chirpPalette as e } from "../../theme/palette.es.js";
import { mergeSx as t } from "../../helpers/merge-sx.es.js";
import { Stack as n, Typography as r, useTheme as i } from "@mui/material";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
// src/components/MobilePageHeader/MobilePageHeader.tsx
var s = ({ children: s, text: c, subText: l, sx: u }) => {
	let d = i();
	return /* @__PURE__ */ o(n, {
		direction: "row",
		sx: t({
			alignItems: "center",
			gap: 4,
			justifyContent: "space-between",
			width: "auto",
			px: 5,
			minHeight: "64px",
			borderBottom: `1px solid ${e(d).borders.primary}`
		}, u),
		children: [/* @__PURE__ */ o(n, {
			sx: {
				mb: 4,
				mt: 4
			},
			children: [/* @__PURE__ */ a(r, {
				color: "neutral.primary",
				variant: "h3",
				sx: {
					lineHeight: "28px",
					mb: "4px"
				},
				children: c
			}), l ? /* @__PURE__ */ a(r, {
				color: "neutral.grey4",
				variant: "body2",
				children: l
			}) : null]
		}), s]
	});
};
export { s as MobilePageHeader };
