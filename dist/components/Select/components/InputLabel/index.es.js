import { chirpPalette as e } from "../../../../theme/palette.es.js";
import { InputLabel as t, useTheme as n } from "@mui/material";
import { jsx as r } from "react/jsx-runtime";
// src/components/Select/components/InputLabel/index.tsx
var i = ({ labelId: i, label: a, className: o, sx: s }) => {
	let c = n();
	return /* @__PURE__ */ r(t, {
		id: i,
		shrink: !0,
		className: o,
		sx: {
			padding: 0,
			backgroundColor: "transparent",
			color: e(c).neutral.primary,
			...s
		},
		children: a
	});
};
export { i as InputLabel };
