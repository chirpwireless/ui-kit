import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Stack as n, styled as r } from "@mui/material";
// src/components/Dropzone/style.ts
var i = r(n)(({ theme: n }) => {
	let r = t(n);
	return {
		padding: "24px",
		backgroundColor: n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white,
		borderRadius: "8px",
		justifyContent: "center",
		alignItems: "center",
		width: "50%",
		height: "168px",
		border: "1px solid",
		borderColor: r.borders.primary,
		cursor: "pointer",
		transition: "all 0.125s",
		"&:hover, &:focus-visible": { borderColor: r.borders.secondary }
	};
});
export { i as DragBox };
