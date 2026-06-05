import { jsxRuntimeExports as t } from "../../jsx-runtime-BgepH7Pb.js";
import { styled as l, Stack as s, IconButton as d } from "@mui/material";
import { ToggleSidebarIcon as c } from "../../icons/ToggleSidebarIcon/index.es.js";
import { HEADER_HEIGHT as p, CurrentTheme as m } from "../../styles/constants.es.js";
import { chirpPalette as e } from "../../theme/palette.es.js";
const g = (r) => r.palette.mode === m.Dark ? e(r).neutral.black : e(r).neutral.white, u = l("header", {
  shouldForwardProp: (r) => r !== "transparent"
})(({ theme: r, transparent: o }) => ({
  width: "100%",
  height: p,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 16px",
  backgroundColor: o ? "transparent" : g(r),
  borderBottom: o ? "none" : `1px solid ${r.palette.borders.primary}`,
  color: e(r).neutral.primary
})), k = ({ logo: r, rightSlot: o, onMenuOpen: i, showMenuButton: n = !0, transparent: a }) => /* @__PURE__ */ t.jsxs(u, { transparent: a, children: [
  /* @__PURE__ */ t.jsxs(s, { direction: "row", alignItems: "center", gap: 2, children: [
    n && i ? /* @__PURE__ */ t.jsx(d, { onClick: i, size: "small", edge: "start", color: "inherit", children: /* @__PURE__ */ t.jsx(c, {}) }) : null,
    r
  ] }),
  o
] });
export {
  k as Header
};
