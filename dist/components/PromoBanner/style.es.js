import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Box as n, styled as r } from "@mui/material";
// src/components/PromoBanner/style.ts
var i = 112, a = r(n)(({ theme: n }) => {
	let r = t(n);
	return {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "16px",
		padding: "16px",
		borderRadius: "12px",
		overflow: "hidden",
		background: n.palette.mode === e.Dark ? r.neutral.black : r.neutral.white,
		[n.breakpoints.down("sm")]: {
			flexDirection: "column",
			alignItems: "flex-start"
		}
	};
}), o = r(n)(() => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	width: `${i}px`,
	height: `${i}px`,
	borderRadius: "8px",
	overflow: "hidden"
}));
export { a as Banner, o as Media };
