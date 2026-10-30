import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Stack as n, styled as r } from "@mui/material";
// src/components/SimpleCard/index.ts
var i = r(n)(({ theme: n }) => {
	let r = t(n);
	return {
		backgroundColor: n.palette.mode === e.Dark ? r.neutral.black : r.neutral.white,
		border: "none",
		borderRadius: "12px",
		padding: "24px",
		overflowX: "hidden",
		overflowY: "auto",
		"::-webkit-scrollbar": { display: "none" }
	};
}), a = r(n)(({ theme: n }) => {
	let r = t(n);
	return {
		backgroundColor: n.palette.mode === e.Dark ? r.neutral.black : r.neutral.white,
		border: "none",
		borderRadius: "8px",
		padding: "11px",
		alignItems: "center",
		justifyContent: "center"
	};
});
export { i as SimpleCard, a as SimpleSmallCard };
