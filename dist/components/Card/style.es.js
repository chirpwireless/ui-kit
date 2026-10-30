import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Box as n, Typography as r, styled as i } from "@mui/material";
// src/components/Card/style.ts
var a = i(n, { shouldForwardProp: (e) => e !== "fullContent" && e !== "isClickable" })(({ theme: n, fullContent: r, isClickable: i }) => {
	let a = t(n), { breakpoints: o } = n;
	return {
		background: n.palette.mode === e.Dark ? a.neutral.grey1 : a.neutral.white,
		border: `1px solid ${a.borders.primary}`,
		padding: r ? 0 : "20px",
		borderRadius: "12px",
		height: "100%",
		maxWidth: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		overflow: "hidden",
		...i && { "&:hover": {
			background: a.primaryColors.accentLight2 ?? a.primaryColors.accentLight,
			border: `1px solid ${a.primaryColors.accent}`,
			boxShadow: `0 8px 32px ${a.shadow}`
		} },
		[o.between("md", "lg")]: {
			overflow: "auto",
			"&.non-scrollable": { overflow: "hidden" }
		},
		[o.down("md")]: {
			padding: r ? 0 : "24px 12px",
			overflow: "auto",
			"&.non-scrollable": { overflow: "hidden" }
		}
	};
}), o = i(r, { shouldForwardProp: (e) => e !== "size" })(({ theme: e, size: n }) => ({
	...n === "large" && {
		fontSize: "20px",
		lineHeight: "24px",
		color: t(e).neutral.primary
	},
	...n === "small" && {
		fontSize: "12px",
		lineHeight: "20px",
		color: t(e).neutral.primary
	}
}));
export { a as Card, o as Title };
