import { CircularProgress as e, Stack as t } from "@mui/material";
import { jsx as n } from "react/jsx-runtime";
// src/components/Loader/index.tsx
var r = (r) => /* @__PURE__ */ n(t, {
	sx: {
		width: "100%",
		height: "100%",
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	children: /* @__PURE__ */ n(e, {
		size: r.size ?? 40,
		color: r.color ?? "primary",
		...r
	})
});
export { r as Loader };
