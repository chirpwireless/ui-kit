import { chirpPalette as e } from "../../theme/palette.es.js";
import { SearchIcon as t } from "../../icons/SearchIcon/index.es.js";
import { Search as n } from "./style.es.js";
import { InputAdornment as r, useTheme as i } from "@mui/material";
import { jsx as a } from "react/jsx-runtime";
import { useTranslation as o } from "react-i18next";
// src/components/SearchInput/index.tsx
var s = ({ value: s, sx: c, placeholder: l, onChange: u, size: d = "medium" }) => {
	let f = i(), p = e(f), { t: m } = o("uiKit", { keyPrefix: "SearchInput" });
	return /* @__PURE__ */ a(n, {
		type: "text",
		sx: c,
		value: s,
		onChange: (e) => u(e.target.value),
		placeholder: l || m("Search by name"),
		variant: "outlined",
		size: d,
		slotProps: { input: { startAdornment: /* @__PURE__ */ a(r, {
			position: "start",
			sx: { color: s ? p.primaryColors.accent : f.palette.text.disabled },
			children: /* @__PURE__ */ a(t, {
				width: "16px",
				height: "16px"
			})
		}) } }
	});
};
export { s as SearchInput };
