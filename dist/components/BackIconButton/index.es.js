import { chirpPalette as e } from "../../theme/palette.es.js";
import { IconButton as t, styled as n } from "@mui/material";
// src/components/BackIconButton/index.ts
var r = n(t)(({ theme: t }) => {
	let n = e(t);
	return {
		position: "absolute",
		left: "16px",
		top: "16px",
		color: n.neutral.grey4,
		borderRadius: "8px",
		"&:hover": {
			backgroundColor: n.primaryColors.accentLight2 ?? n.primaryColors.accentLight,
			color: n.neutral.primary
		}
	};
});
export { r as BackIconButton };
