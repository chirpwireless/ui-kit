import { styled as t, Dialog as i, Box as p, Stack as r, IconButton as l } from "@mui/material";
import { CurrentTheme as s } from "../../styles/constants.es.js";
import { chirpPalette as a } from "../../theme/palette.es.js";
const g = t(i, {
  shouldForwardProp: (o) => o !== "customWidth"
})(({ theme: o, customWidth: n }) => {
  const e = a(o);
  return {
    "& .MuiDialog-container": {
      [o.breakpoints.down("sm")]: {
        alignItems: "flex-end"
      }
    },
    "& .MuiDialog-paper": {
      minWidth: n,
      maxWidth: n,
      borderRadius: "12px",
      backgroundColor: o.palette.mode === s.Dark ? e.neutral.black : e.neutral.white,
      border: "none",
      boxShadow: `0 8px 32px ${e.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
      [o.breakpoints.down("md")]: {
        margin: "0px",
        minWidth: "100%",
        maxHeight: "100dvh",
        overflowY: "auto",
        padding: "40px 20px",
        borderRadius: "12px 12px 0 0"
      }
    }
  };
}), m = t(p)(() => ({
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  justifyContent: "space-between"
})), b = t(r)(() => ({
  textAlign: "center",
  gap: 4
})), f = t(r)(({ theme: o }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  "& > button": {
    width: "100%"
  },
  [o.breakpoints.down("sm")]: {
    flexDirection: "column-reverse"
  }
})), d = t(l)(({ theme: o }) => ({
  position: "absolute",
  top: "12px",
  right: "12px",
  color: a(o).neutral.primary,
  "&:hover": {
    backgroundColor: "transparent"
  }
})), h = t(d)(() => ({
  right: "unset",
  left: "12px"
}));
export {
  f as Action,
  h as BackIconButton,
  d as CloseIconButton,
  g as StyledDialog,
  b as Title,
  m as Wrapper
};
