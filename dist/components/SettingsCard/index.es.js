import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Box as n, Stack as r, alpha as i, styled as a } from "@mui/material";
// src/components/SettingsCard/index.ts
var o = a(n)(({ theme: e }) => ({
	width: "100%",
	border: `1px solid ${t(e).borders.primary}`,
	padding: "40px",
	borderRadius: "12px",
	height: "100%",
	maxWidth: "100%",
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	overflow: "auto",
	[e.breakpoints.down("lg")]: {
		marginTop: "8px",
		"&.non-scrollable": { overflow: "hidden" }
	},
	[e.breakpoints.down("md")]: { padding: "24px 16px" }
})), s = a(r)(({ theme: n }) => {
	let r = t(n);
	return {
		background: `linear-gradient(180deg, ${n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white} 0%, ${i(n.palette.primary.main, .1)} 100%)`,
		width: "100%",
		padding: "24px",
		borderRadius: "12px",
		boxShadow: `inset 0px 0px 0px 1px ${r.borders.primary}`,
		border: `1px solid ${r.borders.primary}`,
		[n.breakpoints.down("sm")]: { padding: "12px" }
	};
});
export { o as SettingsCard, s as SettingsContainer };
