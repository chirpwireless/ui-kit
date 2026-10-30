import { SelectIcon as e } from "../../icons/SelectIcon/index.es.js";
import { InputLabel as t } from "./components/InputLabel/index.es.js";
import { Select as n } from "./style.es.js";
import { FormControl as r } from "@mui/material";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
// src/components/Select/Select.tsx
var o = ({ label: o, labelId: s, ...c }) => /* @__PURE__ */ a(r, {
	fullWidth: !0,
	children: [o ? /* @__PURE__ */ i(t, {
		labelId: s,
		label: o,
		className: c.error ? "Mui-error" : void 0,
		sx: { "&.MuiInputLabel-shrink": {
			fontSize: "14px",
			lineHeight: "20px",
			left: "-12px",
			top: "8px"
		} }
	}) : null, /* @__PURE__ */ i(n, {
		IconComponent: e,
		...c
	})]
});
export { o as Select };
