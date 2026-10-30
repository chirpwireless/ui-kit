import { chirpPalette as e } from "../../theme/palette.es.js";
import { Box as t, Tab as n, Tabs as r, styled as i } from "@mui/material";
// src/components/Tabs/style.ts
var a = i("span")(({ theme: t }) => {
	let n = e(t);
	return {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		minWidth: 16,
		height: 15,
		borderRadius: "3px",
		padding: "1px 4px",
		fontSize: "10px",
		lineHeight: "12px",
		fontWeight: 400,
		letterSpacing: "0.5px",
		backgroundColor: n.neutral.white,
		color: n.neutral.grey5,
		".Mui-selected &": {
			backgroundColor: n.neutral.white,
			color: n.primaryColors.accent
		}
	};
}), o = i(t)(({ theme: t }) => ({
	backgroundColor: t.palette.background.primary,
	borderRadius: "6px",
	gap: "4px",
	width: "fit-content",
	border: `1px solid ${e(t).borders.primary}`,
	boxSizing: "border-box",
	height: "36px",
	display: "flex",
	alignItems: "center",
	"& .MuiTabs-root": {
		padding: "0 4px",
		minHeight: "auto"
	},
	"& .MuiTab-root": {
		padding: "4px 12px",
		height: "26px",
		maxHeight: "26px"
	},
	[t.breakpoints.down("md")]: {
		overflow: "hidden",
		maxWidth: "100%",
		"& .MuiTab-root": {
			minWidth: "58px",
			width: "fit-content"
		}
	}
})), s = i(r)(({ theme: e }) => ({
	minWidth: "min-content",
	minHeight: "auto",
	".MuiTabs-flexContainer": {
		columnGap: "4px",
		justifyContent: "center",
		[e.breakpoints.down("sm")]: {
			overflowX: "auto",
			justifyContent: "space-evenly"
		}
	},
	".MuiTabs-indicator": { display: "none" }
})), c = i(n)(({ theme: t }) => {
	let n = e(t);
	return {
		minWidth: "auto",
		minHeight: "auto",
		height: "26px",
		maxHeight: "26px",
		padding: "4px 12px",
		borderRadius: "3px",
		fontFamily: t.typography.fontFamily,
		fontSize: "12px",
		fontWeight: 400,
		letterSpacing: "0.4px",
		color: n.neutral.grey5,
		backgroundColor: n.neutral.grey1,
		"&.Mui-selected": {
			color: n.neutral.white,
			backgroundColor: n.primaryColors.accent
		}
	};
});
export { c as Tab, a as TabBadge, s as Tabs, o as TabsContainer };
