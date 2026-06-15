import { styled as e, Dialog as i, dialogClasses as a, Stack as o } from "@mui/material";
import { CurrentTheme as p } from "../../styles/constants.es.js";
import { chirpPalette as n } from "../../theme/palette.es.js";
const c = e(i)(({ theme: r }) => {
  const t = n(r);
  return {
    [r.breakpoints.down("sm")]: {
      width: "100%",
      margin: "auto"
    },
    [`.${a.paper}`]: {
      alignItems: "center",
      minWidth: "360px",
      width: "100%",
      maxWidth: "360px",
      overflow: "hidden",
      margin: "0px",
      padding: "36px 20px 30px",
      borderRadius: "12px",
      backgroundColor: r.palette.mode === p.Dark ? t.neutral.grey1 : t.neutral.white,
      border: `1px solid ${t.borders.primary}`,
      boxShadow: `0 8px 32px ${t.shadow ?? "rgba(0, 0, 0, 0.14)"}`
    },
    "& .MuiDialog-container": {
      [r.breakpoints.down("sm")]: {
        alignItems: "flex-end"
      }
    },
    "& .MuiDialog-paper": {
      [r.breakpoints.down("sm")]: {
        margin: "0px",
        minWidth: "100%",
        padding: "40px 20px",
        borderRadius: "12px 12px 0 0"
      }
    }
  };
}), g = e("button")(({ theme: r }) => {
  const t = n(r);
  return {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: t.neutral.grey4,
    "&:hover": { color: t.neutral.primary }
  };
}), x = e(o)(() => ({
  position: "relative",
  flexDirection: "column",
  gap: "24px",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  width: "100%"
})), u = e(o)(({ theme: r, direction: t = "row" }) => ({
  flexDirection: t,
  gap: 12,
  width: "100%",
  [r.breakpoints.down("sm")]: {
    flexDirection: "column-reverse"
  }
}));
export {
  u as ButtonGroup,
  g as CloseButton,
  c as Dialog,
  x as Wrapper
};
