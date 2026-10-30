import { Stack as e, styled as t } from "@mui/material";
// src/components/MobileWrapper/index.ts
var n = t(e)(({ theme: e }) => ({
	width: "100%",
	overflow: "hidden",
	padding: "4px",
	[e.breakpoints.down("md")]: { height: "auto" },
	[e.breakpoints.between("md", "lg")]: { height: "auto" }
}));
export { n as MobileWrapper };
