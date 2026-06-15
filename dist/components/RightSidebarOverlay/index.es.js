import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { Overlay as s } from "./style.es.js";
const b = ({ children: r, gutters: o = !0, isOpen: t, onClose: a }) => /* @__PURE__ */ e.jsx(
  s,
  {
    className: "right-sidebar",
    anchor: "right",
    gutters: o,
    open: t,
    onClose: a,
    slotProps: { backdrop: { sx: { backdropFilter: "blur(5px)", background: "rgba(0, 0, 0, 0.12)" } } },
    children: r
  }
);
export {
  b as RightSidebarOverlay
};
