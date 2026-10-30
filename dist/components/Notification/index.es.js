import { Snackbar as e } from "@mui/material";
import { jsx as t } from "react/jsx-runtime";
// src/components/Notification/index.tsx
var n = ({ open: n, message: r, actionComponent: i, sx: a }) => /* @__PURE__ */ t(e, {
	open: n,
	message: r,
	anchorOrigin: {
		vertical: "bottom",
		horizontal: "right"
	},
	sx: {
		position: "absolute",
		bottom: { xs: "2px" },
		right: { xs: "2px" },
		left: { xs: "2px" },
		zIndex: 100,
		...a
	},
	action: i,
	slotProps: { content: { sx: { color: "neutral.white" } } }
});
export { n as Notification };
