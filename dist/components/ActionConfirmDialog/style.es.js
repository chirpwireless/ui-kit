import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Dialog as n, Stack as r, dialogClasses as i, styled as a } from "@mui/material";
// src/components/ActionConfirmDialog/style.ts
var o = a(n)(({ theme: n }) => {
	let r = t(n);
	return {
		[n.breakpoints.down("sm")]: {
			width: "100%",
			margin: "auto"
		},
		[`.${i.paper}`]: {
			alignItems: "center",
			minWidth: "360px",
			width: "100%",
			maxWidth: "360px",
			overflow: "hidden",
			margin: "0px",
			padding: "36px 20px 30px",
			borderRadius: "12px",
			backgroundColor: n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white,
			border: `1px solid ${r.borders.primary}`,
			boxShadow: `0 8px 32px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`
		},
		"& .MuiDialog-container": { [n.breakpoints.down("sm")]: { alignItems: "flex-end" } },
		"& .MuiDialog-paper": { [n.breakpoints.down("sm")]: {
			margin: "0px",
			minWidth: "100%",
			padding: "40px 20px",
			borderRadius: "12px 12px 0 0"
		} }
	};
}), s = a("button")(({ theme: e }) => {
	let n = t(e);
	return {
		position: "absolute",
		top: 0,
		right: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		border: "none",
		background: "transparent",
		cursor: "pointer",
		color: n.neutral.grey4,
		"&:hover": { color: n.neutral.primary }
	};
}), c = a(r)(() => ({
	position: "relative",
	flexDirection: "column",
	gap: "24px",
	justifyContent: "space-between",
	alignItems: "center",
	textAlign: "center",
	width: "100%"
})), l = a(r)(({ theme: e, direction: t = "row" }) => ({
	flexDirection: t,
	gap: 12,
	width: "100%",
	[e.breakpoints.down("sm")]: { flexDirection: "column-reverse" }
}));
export { l as ButtonGroup, s as CloseButton, o as Dialog, c as Wrapper };
