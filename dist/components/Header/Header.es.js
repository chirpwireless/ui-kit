import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { styled as a, Stack as n, IconButton as s } from "@mui/material";
import { ToggleSidebarIcon as d } from "../../icons/ToggleSidebarIcon/index.es.js";
import { HEADER_HEIGHT as c, CurrentTheme as p } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
const m = a("header")(({ theme: r }) => ({
  width: "100%",
  height: c,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 16px",
  backgroundColor: r.palette.mode === p.Dark ? t(r).neutral.black : t(r).neutral.white,
  borderBottom: `1px solid ${r.palette.borders.primary}`,
  color: t(r).neutral.primary
})), b = ({ logo: r, rightSlot: i, onMenuOpen: o, showMenuButton: l = !0 }) => /* @__PURE__ */ e.jsxs(m, { children: [
  /* @__PURE__ */ e.jsxs(n, { direction: "row", alignItems: "center", gap: 2, children: [
    l && o ? /* @__PURE__ */ e.jsx(s, { onClick: o, size: "small", edge: "start", color: "inherit", children: /* @__PURE__ */ e.jsx(d, {}) }) : null,
    r
  ] }),
  i
] });
export {
  b as Header
};
