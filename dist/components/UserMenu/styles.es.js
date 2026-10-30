import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { IconButton as n, Menu as r, MenuItem as i, Stack as a, alpha as o, styled as s } from "@mui/material";
// src/components/UserMenu/styles.ts
var c = 340, l = s(a)({
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	padding: 0,
	marginTop: 24,
	gap: 8
}), u = s(n)(({ theme: e }) => ({
	color: t(e).neutral.primary,
	flexShrink: 0,
	transition: "all 0.25s",
	padding: 0,
	overflow: "hidden",
	justifyContent: "flex-start",
	borderRadius: 0,
	textAlign: "left",
	whiteSpace: "normal",
	wordBreak: "break-all",
	maxWidth: "calc(100% - 70px)",
	"&:hover": { background: "none" },
	"&.notifications": {
		whiteSpace: "nowrap",
		padding: "0 6px",
		marginRight: 10
	}
})), d = s(a)({
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	height: 40,
	minWidth: 32
}), f = s(r)(({ theme: n }) => ({
	padding: 0,
	".MuiList-root": {
		paddingTop: 0,
		paddingBottom: 0,
		backgroundColor: n.palette.mode === e.Dark ? t(n).neutral.grey1 : t(n).neutral.white,
		".MuiDivider-root": {
			marginTop: 0,
			marginBottom: 0
		}
	},
	"& .MuiPaper-root": {
		width: "max-content",
		maxWidth: c,
		minWidth: 250,
		left: "0 !important",
		right: "auto !important",
		borderRadius: 12,
		marginTop: 8,
		backgroundColor: n.palette.mode === e.Dark ? t(n).neutral.grey1 : t(n).neutral.white,
		boxShadow: `0 8px 24px ${t(n).shadow ?? "rgba(0, 0, 0, 0.14)"}`,
		border: `1px solid ${o(n.palette.borders.primary, n.palette.mode === e.Dark ? .1 : .6)}`,
		backdropFilter: "blur(10px)",
		backgroundImage: "none",
		[n.breakpoints.down("md")]: {
			width: "100% !important",
			maxWidth: "100% !important",
			minWidth: "100% !important",
			left: "0 !important",
			right: "0 !important",
			position: "fixed"
		}
	}
})), p = s(i)(({ theme: n }) => ({
	padding: 12,
	border: "none",
	fontSize: 12,
	lineHeight: "18px",
	color: t(n).neutral.primary,
	cursor: "pointer",
	minWidth: "calc(250px - 2px)",
	maxWidth: "100%",
	whiteSpace: "normal",
	overflowWrap: "anywhere",
	"&:first-of-type": { borderTop: "none" },
	"&:hover": { backgroundColor: n.palette.mode === e.Dark ? t(n).neutral.grey1 : t(n).neutral.white }
})), m = s(a)({
	cursor: "pointer",
	flexDirection: "row",
	gap: 8,
	width: "100%"
});
export { d as AlertsIcon, l as AvatarContainer, u as IconButton, f as Menu, p as MenuItem, m as UserMenuWrap };
