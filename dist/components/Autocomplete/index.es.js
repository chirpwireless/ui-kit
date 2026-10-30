import { SelectIcon as e } from "../../icons/SelectIcon/index.es.js";
import { Autocomplete as t, styled as n } from "@mui/material";
import { jsx as r } from "react/jsx-runtime";
// src/components/Autocomplete/index.tsx
var i = n(t)(({ theme: e }) => ({
	borderRadius: "8px",
	border: "none",
	fontFamily: e?.typography.fontFamily,
	".MuiInputBase-root": {
		height: "36px",
		minHeight: "36px",
		padding: 0,
		"&.MuiOutlinedInput-root.MuiAutocomplete-inputRoot": { paddingRight: "65px" },
		"input.MuiInputBase-input": { padding: "8px 16px" },
		".MuiAutocomplete-endAdornment": {
			minHeight: "36px",
			right: "23px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			gap: "4px",
			button: {
				height: "20px",
				width: "20px",
				padding: 0
			}
		},
		".MuiAutocomplete-clearIndicator": {
			marginTop: 0,
			".MuiSvgIcon-root": {
				width: "18px",
				height: "18px"
			}
		},
		".MuiAutocomplete-popupIndicator": {
			marginTop: 0,
			".MuiSvgIcon-root": {
				width: "18px",
				height: "18px"
			}
		}
	}
})), a = (t) => /* @__PURE__ */ r(i, {
	...t,
	popupIcon: t.popupIcon ?? /* @__PURE__ */ r(e, {})
});
export { a as Autocomplete };
