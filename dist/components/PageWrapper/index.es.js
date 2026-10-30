import { chirpPalette as e } from "../../theme/palette.es.js";
import { Box as t, styled as n } from "@mui/material";
// src/components/PageWrapper/index.ts
var r = n(t)(({ theme: t }) => ({
	width: "100%",
	backgroundColor: e(t).neutral.grey1,
	margin: 0,
	padding: "24px",
	borderRadius: "12px",
	border: "none",
	height: "100%",
	minHeight: "calc(100vh - 8px)",
	[t.breakpoints.down("sm")]: {
		borderRadius: 0,
		padding: "16px"
	},
	[t.breakpoints.down("lg")]: {
		height: "auto",
		overflow: "auto"
	}
}));
export { r as PageWrapper };
