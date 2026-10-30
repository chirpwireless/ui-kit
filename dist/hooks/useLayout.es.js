import { useCallback as e, useState as t } from "react";
// src/hooks/useLayout.ts
var n = ({ defaultOpen: n = !0, defaultCollapsed: r = !1 } = {}) => {
	let [i, a] = t(n), [o, s] = t(r);
	return {
		isSidebarOpen: i,
		isSidebarCollapsed: o,
		openSidebar: e(() => a(!0), []),
		closeSidebar: e(() => a(!1), []),
		toggleSidebar: e(() => a((e) => !e), []),
		toggleSidebarCollapsed: e(() => s((e) => !e), [])
	};
};
export { n as useLayout };
