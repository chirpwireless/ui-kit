import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Dialog as n, IconButton as r, Stack as i, styled as a } from "@mui/material";
// src/components/ActionDialog/style.ts
var o = a(n)(({ theme: n }) => {
	let r = t(n);
	return {
		backdropFilter: "blur(4px)",
		".MuiPaper-root": {
			width: "360px",
			minWidth: "360px",
			padding: "40px",
			borderRadius: "12px",
			background: n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white,
			border: `1px solid ${r.borders.primary}`,
			boxShadow: `0 8px 32px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
			[n.breakpoints.down("sm")]: {
				width: "100%",
				minWidth: "auto",
				margin: "8px",
				padding: "20px"
			}
		},
		"& .MuiDialog-container": { [n.breakpoints.down("sm")]: { alignItems: "flex-end" } }
	};
}), s = a(i)(({ theme: n }) => {
	let r = t(n);
	return {
		alignItems: "center",
		maxWidth: "360px",
		width: "100%",
		background: n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white,
		[n.breakpoints.down("sm")]: { margin: "auto" }
	};
}), c = a(i)(() => ({
	justifyContent: "center",
	alignItems: "center",
	width: "72px",
	height: "72px",
	borderRadius: "50%"
})), l = a(r)(({ theme: e }) => ({
	position: "absolute",
	top: "12px",
	right: "12px",
	color: t(e).neutral.primary,
	"&:hover": { backgroundColor: "transparent" }
}));
export { s as Card, l as CloseIconButton, o as Dialog, c as IconWrapper };
