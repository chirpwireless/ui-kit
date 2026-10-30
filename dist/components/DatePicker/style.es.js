import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Stack as n, styled as r } from "@mui/material";
// src/components/DatePicker/style.ts
var i = r(n)(({ theme: n }) => {
	let r = t(n);
	return {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		height: "36px",
		padding: "8px 16px",
		marginTop: "16px",
		backgroundColor: n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white,
		border: `1px solid ${r.borders.primary}`,
		borderRadius: "8px",
		cursor: "pointer",
		boxSizing: "border-box",
		"&:hover": { borderColor: r.primaryColors.accent }
	};
});
export { i as Trigger };
