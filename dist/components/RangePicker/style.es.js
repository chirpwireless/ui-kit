import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { List as n, ListItem as r, ListItemButton as i, Menu as a, styled as o } from "@mui/material";
// src/components/RangePicker/style.ts
var s = o(a)(({ theme: n }) => {
	let r = t(n), i = n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white;
	return {
		"& .MuiPaper-root": {
			marginTop: "8px",
			width: "576px",
			height: "auto",
			background: i,
			border: `1px solid ${r.borders.primary}`,
			boxShadow: `0 8px 32px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
			opacity: .8,
			padding: "16px",
			".MuiMenu-list": {
				borderRadius: "12px",
				backdropFilter: "blur(10px)",
				padding: 0
			},
			".MuiMenuItem-root": {
				label: {
					display: "flex",
					justifyContent: "space-between",
					width: "100%"
				},
				"&:hover": { background: r.primaryColors.accentLight2 }
			}
		},
		[n.breakpoints.down("md")]: { "& .MuiPaper-root": {
			width: "100%",
			maxWidth: "100%",
			padding: "16px 20px",
			left: "0 !important",
			right: "0 !important",
			zIndex: "901",
			opacity: 1,
			background: i
		} },
		[n.breakpoints.between("md", "lg")]: { "& .MuiPaper-root": {
			width: "100%",
			maxWidth: "100%",
			padding: "16px 20px",
			left: "0 !important",
			right: "0 !important",
			zIndex: "901",
			opacity: 1,
			background: i
		} }
	};
}), c = o(n)(({ theme: e }) => ({
	width: "100%",
	borderLeft: `1px solid ${t(e).borders.primary}`,
	padding: 0,
	[e.breakpoints.down("md")]: { border: "none" },
	[e.breakpoints.between("md", "lg")]: { border: "none" }
})), l = o(r)(({ theme: e }) => ({
	padding: "0",
	margin: "0",
	textTransform: "capitalize",
	borderBottom: `1px solid ${t(e).borders.primary}`,
	"&:last-of-type": { borderBottom: "none" }
})), u = o(i)(({ theme: e }) => {
	let n = t(e);
	return {
		padding: "16px 8px 16px 27px",
		display: "flex",
		justifyContent: "space-between",
		fontFamily: e.typography.fontFamily,
		fontSize: "12px",
		lineHeight: "16px",
		"&:hover": {
			backgroundColor: n.primaryColors.accentLight2,
			color: n.neutral.primary
		},
		[e.breakpoints.down("md")]: { padding: "16px 0" },
		[e.breakpoints.between("md", "lg")]: { padding: "16px 0" }
	};
});
export { c as CalendarQuickSelect, u as CalendarQuickSelectButton, l as CalendarQuickSelectItem, s as RangePickerMenu };
