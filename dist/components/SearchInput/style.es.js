import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { TextField as n, styled as r } from "@mui/material";
// src/components/SearchInput/style.ts
var i = r(n)(({ theme: n, size: r }) => {
	let i = t(n);
	return {
		width: "400px",
		"&.MuiTextField-root": { padding: 0 },
		"& .MuiOutlinedInput-root": {
			height: r === "small" ? "32px" : "36px",
			minHeight: r === "small" ? "32px" : "36px",
			boxSizing: "border-box",
			borderRadius: "8px",
			backgroundColor: n.palette.mode === e.Dark ? i.neutral.grey1 : i.neutral.white,
			"& fieldset": {
				borderColor: i.borders.primary,
				top: 0,
				"& legend": { display: "none" }
			},
			"&:hover fieldset": { borderColor: i.primaryColors.accent },
			"&.Mui-focused fieldset": {
				borderColor: i.primaryColors.accent,
				borderWidth: "1px"
			}
		},
		"& .MuiOutlinedInput-input": {
			fontSize: "14px",
			padding: "7px 8px 7px 0",
			color: i.neutral.primary,
			"&::placeholder": {
				color: i.neutral.grey4,
				opacity: 1
			}
		},
		"& .MuiInputAdornment-root": { marginRight: "4px" }
	};
});
export { i as Search };
