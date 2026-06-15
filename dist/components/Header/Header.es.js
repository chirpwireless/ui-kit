import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { styled as l, Stack as s, IconButton as d } from "@mui/material";
import { ToggleSidebarIcon as c } from "../../icons/ToggleSidebarIcon/index.es.js";
import { HEADER_HEIGHT as p, CurrentTheme as m } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
const g = (r) => r.palette.mode === m.Dark ? t(r).neutral.grey1 : t(r).neutral.white, u = l("header", {
  shouldForwardProp: (r) => r !== "transparent"
})(({ theme: r, transparent: o }) => ({
  width: "100%",
  minHeight: p,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 24px",
  backgroundColor: o ? "transparent" : g(r),
  borderBottom: o ? "none" : `1px solid ${t(r).borders.ternary}`,
  color: t(r).neutral.primary
})), H = ({ logo: r, rightSlot: o, onMenuOpen: n, showMenuButton: i = !0, transparent: a }) => /* @__PURE__ */ e.jsxs(u, { transparent: a, children: [
  /* @__PURE__ */ e.jsxs(s, { direction: "row", alignItems: "center", gap: 2, children: [
    i && n ? /* @__PURE__ */ e.jsx(d, { onClick: n, size: "small", edge: "start", color: "inherit", children: /* @__PURE__ */ e.jsx(c, {}) }) : null,
    r
  ] }),
  o
] });
export {
  H as Header
};
