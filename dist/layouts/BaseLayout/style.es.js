import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Box as n, styled as r } from "@mui/material";
// src/layouts/BaseLayout/style.ts
var i = r(n, { shouldForwardProp: (e) => e !== "isOpen" && e !== "isSidebarCollapsed" })(({ theme: n, isOpen: r, isSidebarCollapsed: i }) => ({
	backgroundColor: n.palette.mode === e.Dark ? t(n).neutral.black : t(n).neutral.white,
	display: "flex",
	flexFlow: "row nowrap",
	minHeight: "100%",
	transition: n.transitions.create(["width", "margin"], {
		easing: n.transitions.easing.sharp,
		duration: n.transitions.duration.leavingScreen
	}),
	width: "100%",
	flexGrow: 1,
	padding: 4,
	[n.breakpoints.between("md", "lg")]: {
		overflow: r ? "hidden" : "auto",
		padding: 0
	},
	[n.breakpoints.up("lg")]: {
		marginLeft: i ? 36 : 69,
		width: `calc(100% - ${i ? 36 : 69}px)`
	},
	[n.breakpoints.down("md")]: {
		overflow: r ? "hidden" : "auto",
		padding: 0
	},
	[n.breakpoints.down("lg")]: { flexDirection: "column" },
	...r && { [n.breakpoints.up("md")]: {
		marginLeft: i ? 36 : 250,
		width: `calc(100% - ${i ? 36 : 250}px)`,
		transition: n.transitions.create(["width", "margin"], {
			easing: n.transitions.easing.sharp,
			duration: n.transitions.duration.enteringScreen
		})
	} }
})), a = r(n)({
	minHeight: "100vh",
	"@supports (min-height: 100dvh)": { minHeight: "100dvh" },
	display: "flex",
	flexFlow: "column nowrap"
});
export { i as AppContainer, a as LayoutRoot };
