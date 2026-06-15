import { styled as o, Dialog as i, Stack as n, IconButton as p } from "@mui/material";
import { CurrentTheme as e } from "../../styles/constants.es.js";
import { chirpPalette as a } from "../../theme/palette.es.js";
const u = o(i)(({ theme: r }) => {
  const t = a(r);
  return {
    backdropFilter: "blur(4px)",
    ".MuiPaper-root": {
      width: "360px",
      minWidth: "360px",
      padding: "40px",
      borderRadius: "12px",
      background: r.palette.mode === e.Dark ? t.neutral.grey1 : t.neutral.white,
      border: `1px solid ${t.borders.primary}`,
      boxShadow: `0 8px 32px ${t.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
      [r.breakpoints.down("sm")]: {
        width: "100%",
        minWidth: "auto",
        margin: "8px",
        padding: "20px"
      }
    },
    "& .MuiDialog-container": {
      [r.breakpoints.down("sm")]: {
        alignItems: "flex-end"
      }
    }
  };
}), c = o(n)(({ theme: r }) => {
  const t = a(r);
  return {
    alignItems: "center",
    maxWidth: "360px",
    width: "100%",
    background: r.palette.mode === e.Dark ? t.neutral.grey1 : t.neutral.white,
    [r.breakpoints.down("sm")]: {
      margin: "auto"
    }
  };
}), g = o(n)(() => ({
  justifyContent: "center",
  alignItems: "center",
  width: "72px",
  height: "72px",
  borderRadius: "50%"
})), x = o(p)(({ theme: r }) => ({
  position: "absolute",
  top: "12px",
  right: "12px",
  color: a(r).neutral.primary,
  "&:hover": {
    backgroundColor: "transparent"
  }
}));
export {
  c as Card,
  x as CloseIconButton,
  u as Dialog,
  g as IconWrapper
};
