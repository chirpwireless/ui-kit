import { chirpPalette as e } from "../../theme/palette.es.js";
import { StepIcon as t } from "../../icons/StepIcon/index.es.js";
import { mergeSx as n } from "../../helpers/merge-sx.es.js";
import { IconButton as r, Stack as i, useTheme as a } from "@mui/material";
import { jsx as o } from "react/jsx-runtime";
// src/components/Stepper/Stepper.tsx
var s = ({ activeStep: s, handleSetStep: c, steps: l, sx: u }) => {
	let d = a(), f = e(d), p = f.primaryColors.accentLight2 ?? f.primaryColors.accentLight;
	return l?.length ? /* @__PURE__ */ o(i, {
		direction: "row",
		sx: n({
			gap: "8px",
			height: "24px",
			alignItems: "center",
			justifyContent: "center",
			mb: "32px"
		}, u),
		children: l.map((e) => /* @__PURE__ */ o(r, {
			sx: {
				color: s === e ? f.primaryColors.accent : f.neutral.grey4,
				width: "6px",
				minWidth: "24px",
				height: "24px",
				borderRadius: "8px",
				padding: "0",
				cursor: c ? "pointer" : "default",
				"&:hover": c ? { backgroundColor: p } : void 0
			},
			onClick: () => c?.(e),
			children: /* @__PURE__ */ o(t, {})
		}, e))
	}) : null;
};
export { s as Stepper };
