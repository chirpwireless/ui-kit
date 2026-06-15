import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { Box as i } from "@mui/material";
import { ToggleSidebarIcon as s } from "../../icons/ToggleSidebarIcon/index.es.js";
const p = ({ isSidebarHovered: t, isSidebarCollapsed: r, onToggle: e }) => /* @__PURE__ */ o.jsx(
  i,
  {
    sx: {
      cursor: "pointer",
      opacity: t ? 1 : 0,
      transition: "opacity 0.3s ease-in-out",
      height: 28,
      display: "flex",
      alignItems: "center"
    },
    onClick: e,
    children: /* @__PURE__ */ o.jsx(
      s,
      {
        style: {
          transform: r ? "rotate(0deg)" : "rotate(180deg)",
          transition: "transform 0.3s ease-in-out"
        }
      }
    )
  }
);
export {
  p as SidebarToggle
};
