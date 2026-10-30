import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
import { styled as n } from "@mui/material";
import { MuiTelInput as r } from "mui-tel-input";
// src/components/PhoneField/styles.ts
var i = n(r)(({ theme: n }) => {
	let r = t(n);
	return {
		backgroundColor: n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white,
		borderRadius: "8px",
		border: "none",
		fontFamily: n?.typography.fontFamily,
		marginTop: "16px",
		"& svg": { height: "20px" },
		"& .MuiInputBase-root": {
			height: "auto",
			"&.MuiInput-root": {
				marginTop: "0",
				"&:before, &:after": {
					display: "none",
					borderBottom: "none"
				}
			}
		},
		".MuiFormLabel-root": { "&.Mui-focused": {} },
		".MuiFormControl-root.MuiTextField-root": { borderRadius: "8px" },
		".MuiSelect-select": {
			paddingTop: "12px",
			paddingLeft: "16px",
			paddingBottom: "10px",
			fontFamily: n?.typography.fontFamily,
			"&.MuiInputBase-input": {
				paddingTop: "12px",
				paddingLeft: "16px",
				paddingBottom: "10px"
			}
		},
		".MuiSelect-icon": { right: "16px" },
		".MuiInputBase-adornedEnd": { paddingRight: "20px" },
		".MuiAutocomplete-clearIndicator": { marginTop: "8px" },
		"input:-webkit-autofill": {
			borderTopLeftRadius: "8px",
			borderBottomLeftRadius: "8px",
			border: "none",
			borderRadius: "8px",
			boxShadow: `0 0 0 100px ${n.palette.mode === e.Dark ? r.neutral.grey1 : r.neutral.white} inset!important`,
			transitionDelay: "9999s",
			transitionProperty: "background-color, color"
		},
		input: {
			padding: "12px 16px 10px 16px",
			fontSize: "13px",
			lineHeight: "20px",
			fontFamily: n?.typography.fontFamily,
			color: r.neutral.primary
		},
		fieldset: {
			border: "none",
			top: 0
		},
		legend: {
			fontFamily: n?.typography.fontFamily,
			backgroundColor: "transparent",
			span: { padding: 0 }
		},
		label: {
			padding: 0,
			left: "-12px",
			backgroundColor: "transparent",
			color: r.neutral.primary,
			"&.MuiInputLabel-shrink": {
				fontSize: "14px",
				lineHeight: "20px",
				top: "-8px",
				left: "-12px"
			}
		}
	};
});
export { i as PhoneField };
