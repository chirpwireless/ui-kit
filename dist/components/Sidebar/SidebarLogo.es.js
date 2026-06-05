import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { Stack as p } from "@mui/material";
import { SidebarToggle as s } from "./SidebarToggle.es.js";
import { SideBarToggledWrap as x, LogoCollapsedWrap as g, AppLogo as m, LogoWrap as a } from "./style.es.js";
const d = ({
  isSidebarCollapsed: t,
  isSidebarHovered: n,
  onToggle: o,
  logo: e,
  logoCollapsed: i,
  logoHref: l = "/"
}) => {
  const c = () => t ? n ? null : /* @__PURE__ */ r.jsx(g, { children: i ?? e }) : /* @__PURE__ */ r.jsx(m, { children: /* @__PURE__ */ r.jsx("a", { href: l, style: { display: "inline-flex", textDecoration: "none", color: "inherit" }, children: /* @__PURE__ */ r.jsx(a, { children: e }) }) });
  return /* @__PURE__ */ r.jsxs(
    p,
    {
      direction: "row",
      width: "100%",
      justifyContent: t ? "center" : "space-between",
      alignItems: "start",
      gap: 0,
      children: [
        c(),
        n ? /* @__PURE__ */ r.jsx(x, { children: /* @__PURE__ */ r.jsx(
          s,
          {
            isSidebarHovered: n,
            isSidebarCollapsed: t,
            onToggle: o
          }
        ) }) : null
      ]
    }
  );
};
export {
  d as SidebarLogo
};
