import { useState as o, useCallback as e } from "react";
const u = ({ defaultOpen: a = !0, defaultCollapsed: r = !1 } = {}) => {
  const [l, s] = o(a), [d, i] = o(r), n = e(() => s(!0), []), b = e(() => s(!1), []), c = e(() => s((t) => !t), []), S = e(() => i((t) => !t), []);
  return {
    isSidebarOpen: l,
    isSidebarCollapsed: d,
    openSidebar: n,
    closeSidebar: b,
    toggleSidebar: c,
    toggleSidebarCollapsed: S
  };
};
export {
  u as useLayout
};
