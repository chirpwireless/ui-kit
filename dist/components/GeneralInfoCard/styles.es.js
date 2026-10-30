import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Stack as n, styled as r } from "@mui/material";
// src/components/GeneralInfoCard/styles.ts
var i = r(n)(({ theme: n }) => {
	let r = t(n);
	return {
		backgroundColor: n.palette.mode === e.Dark ? r.neutral.black : r.neutral.white,
		borderRadius: "12px",
		padding: "14px 12px 20px 20px",
		height: "124px",
		minWidth: "292px",
		justifyContent: "space-between",
		[n.breakpoints.down("sm")]: {
			minWidth: 0,
			width: "100%"
		}
	};
});
export { i as Wrapper };
