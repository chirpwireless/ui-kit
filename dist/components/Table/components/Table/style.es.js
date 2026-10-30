import { chirpPalette as e } from "../../../../theme/palette.es.js";
import { Cell as t } from "../../style.es.js";
import { Box as n, TableRow as r, styled as i } from "@mui/material";
// src/components/Table/components/Table/style.ts
var a = i(n)(({ theme: e }) => ({
	width: "100%",
	overflowX: "hidden",
	backgroundColor: "transparent",
	[e.breakpoints.between("md", "lg")]: { overflowX: "visible" },
	[e.breakpoints.down("lg")]: {
		overflowX: "visible",
		padding: "16px"
	},
	[e.breakpoints.down("md")]: { padding: "8px" }
})), o = i(r)(({ theme: t }) => ({
	td: {
		padding: "24px 0 12px",
		border: "none",
		letterSpacing: "0.06px",
		color: e(t).primaryColors.accent,
		width: "50px"
	},
	"&:first-of-type": { td: { paddingTop: "16px" } }
}));
export { t as Cell, o as GroupedRow, a as TableWrapper };
