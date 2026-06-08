import { styled as o, Dialog as p, dialogClasses as i, IconButton as l, Stack as n, alpha as a, Box as s } from "@mui/material";
import { CurrentTheme as d } from "../../styles/constants.es.js";
import { chirpPalette as e } from "../../theme/palette.es.js";
const m = o(p)(({ theme: t }) => {
  const r = e(t);
  return {
    [t.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "360px",
      margin: "auto"
    },
    [`& .${i.paper}`]: {
      alignItems: "center",
      width: "100%",
      minWidth: "360px",
      maxWidth: "450px",
      overflow: "hidden",
      margin: "0px",
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: t.palette.mode === d.Dark ? r.neutral.grey1 : r.neutral.white,
      border: `1px solid ${r.borders.primary}`,
      boxShadow: `0 8px 32px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`
    }
  };
}), h = o(l)(({ theme: t }) => ({
  position: "absolute",
  top: "12px",
  right: "12px",
  color: e(t).neutral.primary,
  "&:hover": {
    backgroundColor: "transparent"
  }
})), u = o(n)(({ theme: t }) => {
  const r = e(t);
  return {
    justifyContent: "center",
    alignItems: "center",
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    color: r.primaryColors.accent,
    backgroundImage: `linear-gradient(180deg,
    ${a(r.primaryColors.accent, 0.2)} 0%,
    ${a(r.primaryColors.accent, 0)} 100%)`
  };
}), b = o(n)(() => ({
  gap: "24px",
  padding: "24px",
  whiteSpace: "break-spaces",
  textAlign: "center"
})), C = o(s)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  position: "relative",
  left: "-12px"
}));
export {
  h as CloseIconButton,
  b as Content,
  m as Dialog,
  u as IconWrapper,
  C as LoaderWrapper
};
