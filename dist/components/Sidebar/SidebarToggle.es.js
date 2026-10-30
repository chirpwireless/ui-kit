import { DoubleChevronRight as e } from "../../icons/DoubleChevronRight/index.es.js";
import { Box as t } from "@mui/material";
import { jsx as n } from "react/jsx-runtime";
// src/components/Sidebar/SidebarToggle.tsx
var r = ({ isSidebarHovered: r, isSidebarCollapsed: i, onToggle: a }) => /* @__PURE__ */ n(t, {
	sx: {
		cursor: "pointer",
		opacity: +!!r,
		transition: "opacity 0.3s ease-in-out",
		height: 28,
		display: "flex",
		alignItems: "center"
	},
	onClick: a,
	children: /* @__PURE__ */ n(e, { sx: {
		transform: i ? "rotate(0deg)" : "rotate(180deg)",
		transition: "transform 0.3s ease-in-out"
	} })
});
export { r as SidebarToggle };
