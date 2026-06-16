import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { Stack as c } from "@mui/material";
import { SidebarToggle as s } from "./SidebarToggle.es.js";
import { SideBarToggledWrap as g, LogoCollapsedWrap as m, AppLogo as x, LogoWrap as l } from "./style.es.js";
const h = ({
  isSidebarCollapsed: t,
  isSidebarHovered: o,
  onToggle: e,
  logo: n,
  logoCollapsed: i
}) => {
  const p = () => t ? o ? null : /* @__PURE__ */ r.jsx(m, { children: i ?? n }) : /* @__PURE__ */ r.jsx(x, { children: /* @__PURE__ */ r.jsx(l, { children: n }) });
  return /* @__PURE__ */ r.jsxs(
    c,
    {
      direction: "row",
      sx: {
        width: "100%",
        justifyContent: t ? "center" : "space-between",
        alignItems: "start",
        gap: 0
      },
      children: [
        p(),
        o ? /* @__PURE__ */ r.jsx(g, { children: /* @__PURE__ */ r.jsx(
          s,
          {
            isSidebarHovered: o,
            isSidebarCollapsed: t,
            onToggle: e
          }
        ) }) : null
      ]
    }
  );
};
export {
  h as SidebarLogo
};
