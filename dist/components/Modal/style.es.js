import { styled as e, Box as i, Typography as a } from "@mui/material";
import { CurrentTheme as p } from "../../styles/constants.es.js";
import { chirpPalette as o } from "../../theme/palette.es.js";
const x = (t, r) => {
  const n = t.match(/^rgba?\(([^)]+)\)$/);
  if (!n) return t;
  const [l, c, d] = n[1].split(",").map((s) => s.trim());
  return `rgba(${l}, ${c}, ${d}, ${r})`;
}, g = e(i)(({ theme: t }) => {
  const r = o(t);
  return {
    background: x(
      t.palette.mode === p.Dark ? r.neutral.grey1 : r.neutral.white,
      0.5
    ),
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: t.zIndex.modal
  };
}), f = e(i)(({ theme: t }) => {
  const r = o(t);
  return {
    background: t.palette.mode === p.Dark ? r.neutral.grey1 : r.neutral.white,
    borderRadius: "12px",
    border: `1px solid ${r.borders.primary}`,
    boxShadow: `0 8px 32px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
    padding: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [t.breakpoints.up("md")]: {
      minWidth: "460px"
    }
  };
}), y = e(a)(({ theme: t }) => ({
  color: o(t).neutral.primary,
  fontSize: "16px",
  textAlign: "center"
})), k = e(a)(({ theme: t }) => ({
  color: o(t).neutral.grey4,
  fontSize: "12px",
  textAlign: "center"
}));
export {
  g as Container,
  k as Description,
  f as Modal,
  y as Title
};
