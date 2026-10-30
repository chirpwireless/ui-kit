import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Drawer as n, drawerClasses as r, styled as i } from "@mui/material";
// src/components/RightSidebarOverlay/style.ts
var a = i(n)(({ theme: n, gutters: i }) => {
	let a = t(n);
	return { [`& .${r.paper}`]: {
		background: n.palette.mode === e.Dark ? a.neutral.grey1 : a.neutral.white,
		width: "460px",
		borderLeft: `1px solid ${a.borders.primary}`,
		boxShadow: `-8px 0 32px ${a.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
		padding: i ? "24px" : 0,
		[n.breakpoints.down("lg")]: { width: "auto" },
		[n.breakpoints.down("md")]: {
			width: "100%",
			maxWidth: "100%",
			padding: i ? "16px" : 0
		}
	} };
});
export { a as Overlay };
