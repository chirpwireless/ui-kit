import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Box as n, Dialog as r, IconButton as i, Stack as a, alpha as o, dialogClasses as s, styled as c } from "@mui/material";
// src/components/ConfirmationDialog/style.ts
var l = c(r)(({ theme: n }) => {
	let r = t(n);
	return {
		[n.breakpoints.down("sm")]: {
			width: "100%",
			maxWidth: "360px",
			margin: "auto"
		},
		[`& .${s.paper}`]: {
			alignItems: "center",
			width: "100%",
			minWidth: "360px",
			maxWidth: "450px",
			overflow: "hidden",
			margin: "0px",
			padding: "20px",
			borderRadius: "12px",
			backgroundColor: n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white,
			border: `1px solid ${r.borders.primary}`,
			boxShadow: `0 8px 32px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`
		}
	};
}), u = c(i)(({ theme: e }) => ({
	position: "absolute",
	top: "12px",
	right: "12px",
	color: t(e).neutral.primary,
	"&:hover": { backgroundColor: "transparent" }
})), d = c(a)(({ theme: e }) => {
	let n = t(e);
	return {
		justifyContent: "center",
		alignItems: "center",
		width: "72px",
		height: "72px",
		borderRadius: "50%",
		color: n.primaryColors.accent,
		backgroundImage: `linear-gradient(180deg,
    ${o(n.primaryColors.accent, .2)} 0%,
    ${o(n.primaryColors.accent, 0)} 100%)`
	};
}), f = c(a)(() => ({
	gap: "24px",
	padding: "24px",
	whiteSpace: "break-spaces",
	textAlign: "center"
})), p = c(n)(() => ({
	display: "flex",
	alignItems: "center",
	gap: "8px",
	position: "relative",
	left: "-12px"
}));
export { u as CloseIconButton, f as Content, l as Dialog, d as IconWrapper, p as LoaderWrapper };
