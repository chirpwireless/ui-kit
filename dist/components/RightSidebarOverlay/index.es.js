import { Overlay as e } from "./style.es.js";
import { jsx as t } from "react/jsx-runtime";
// src/components/RightSidebarOverlay/index.tsx
var n = ({ children: n, gutters: r = !0, isOpen: i, onClose: a }) => /* @__PURE__ */ t(e, {
	className: "right-sidebar",
	anchor: "right",
	gutters: r,
	open: i,
	onClose: a,
	slotProps: { backdrop: { sx: {
		backdropFilter: "blur(5px)",
		background: "rgba(0, 0, 0, 0.12)"
	} } },
	children: n
});
export { n as RightSidebarOverlay };
