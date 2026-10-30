import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Dialog as n, IconButton as r, dialogClasses as i, styled as a } from "@mui/material";
// src/components/Dialog/styles.ts
var o = a(r)(({ theme: e }) => ({
	position: "absolute",
	top: "12px",
	right: "12px",
	color: t(e).neutral.primary,
	"&:hover": { backgroundColor: "transparent" }
})), s = a(n)(({ theme: n }) => {
	let r = t(n);
	return {
		[n.breakpoints.down("sm")]: {
			width: "100%",
			margin: "auto"
		},
		[`.${i.paper}`]: {
			alignItems: "center",
			minWidth: "1200px",
			width: "100%",
			maxWidth: "1200px",
			overflow: "hidden",
			margin: "0px",
			padding: "20px",
			borderRadius: "12px",
			backgroundColor: n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white,
			border: `1px solid ${r.borders.primary}`,
			boxShadow: `0 8px 32px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`
		},
		"& .MuiDialog-container": { [n.breakpoints.down("sm")]: { alignItems: "stretch" } },
		"& .MuiDialog-paper": { [n.breakpoints.down("sm")]: {
			margin: "0px",
			minWidth: "100%",
			maxHeight: "100vh",
			height: "100vh",
			padding: "40px 16px 16px",
			borderRadius: "0",
			display: "flex",
			flexDirection: "column"
		} }
	};
});
export { s as DeviceDialog, o as DialogIconButton };
