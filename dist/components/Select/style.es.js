import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { Select as n, styled as r } from "@mui/material";
// src/components/Select/style.ts
var i = r(n)(({ theme: n, size: r }) => {
	let i = t(n);
	return {
		backgroundColor: n.palette.mode === e.Dark ? i.neutral.grey1 : i.neutral.white,
		borderRadius: "8px",
		border: "none",
		fontFamily: n.typography.fontFamily,
		marginTop: "16px",
		boxSizing: "border-box",
		"&.MuiInputBase-root": {
			height: "36px",
			minHeight: "36px",
			boxSizing: "border-box",
			border: `1px solid ${i.borders.primary}`,
			gap: "8px",
			...r === "small" && {
				height: "32px",
				minHeight: "32px"
			},
			"&:hover:not(.Mui-disabled)": { borderColor: i.primaryColors.accent },
			"&.Mui-focused": { borderColor: i.primaryColors.accent },
			"&.Mui-error": { borderColor: i.alerts.alert }
		},
		".MuiSelect-select": {
			padding: "8px 44px 8px 16px",
			fontFamily: n.typography.fontFamily,
			display: "block",
			alignItems: "center",
			minHeight: "unset",
			height: "20px",
			boxSizing: "border-box",
			fontSize: "14px",
			lineHeight: "20px",
			letterSpacing: "0.2px",
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			...r === "small" && { padding: "6px 44px 6px 12px" },
			"&.MuiInputBase-input": {
				padding: "0px 44px 8px 16px",
				fontSize: "14px",
				lineHeight: "20px",
				letterSpacing: "0.2px",
				minHeight: "unset",
				height: "20px",
				boxSizing: "border-box",
				...r === "small" && { padding: "0px 44px 6px 12px" }
			}
		},
		".MuiSelect-icon": {
			right: "16px",
			top: "calc(50% - 10px)",
			width: "20px",
			height: "20px"
		},
		".MuiInputBase-adornedEnd": { paddingRight: "20px" },
		input: {
			padding: "8px 16px",
			fontSize: "14px",
			lineHeight: "20px",
			letterSpacing: "0.2px",
			fontFamily: n.typography.fontFamily,
			boxSizing: "border-box"
		},
		".MuiOutlinedInput-notchedOutline": {
			border: "none",
			display: "none"
		},
		label: {
			padding: 0,
			left: "-12px",
			backgroundColor: "transparent",
			color: i.neutral.primary,
			"&.MuiInputLabel-shrink": {
				fontSize: "14px",
				lineHeight: "20px",
				top: "4px",
				left: "-12px"
			},
			"&.Mui-focused": { color: i.primaryColors.accent },
			"&.Mui-error": { color: i.alerts.alert }
		}
	};
});
export { i as Select };
