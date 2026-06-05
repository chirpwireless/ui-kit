import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { styled as a, Stack as i, IconButton as n } from "@mui/material";
import { ToggleSidebarIcon as s } from "../../icons/ToggleSidebarIcon/index.es.js";
import { HEADER_HEIGHT as d, CurrentTheme as p } from "../../styles/constants.es.js";
const c = a("header")(({ theme: e }) => ({
  width: "100%",
  height: d,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 16px",
  backgroundColor: e.palette.mode === p.Dark ? e.palette.neutral.black : e.palette.neutral.white,
  borderBottom: `1px solid ${e.palette.borders.primary}`,
  color: e.palette.neutral.primary
})), b = ({ logo: e, rightSlot: o, onMenuOpen: t, showMenuButton: l = !0 }) => /* @__PURE__ */ r.jsxs(c, { children: [
  /* @__PURE__ */ r.jsxs(i, { direction: "row", alignItems: "center", gap: 2, children: [
    l && t ? /* @__PURE__ */ r.jsx(n, { onClick: t, size: "small", edge: "start", color: "inherit", children: /* @__PURE__ */ r.jsx(s, {}) }) : null,
    e
  ] }),
  o
] });
export {
  b as Header
};
