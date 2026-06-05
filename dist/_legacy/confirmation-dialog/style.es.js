import { styled as t, Dialog as e, alpha as a, dialogClasses as p, IconButton as r, Stack as n } from "@mui/material";
const d = t(e)(({ theme: o }) => ({
  [o.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "360px",
    margin: "auto"
  },
  [`& .${p.paper}`]: {
    alignItems: "center",
    width: "360px",
    minWidth: "360px",
    overflow: "hidden",
    margin: "0px",
    padding: "20px 20px 30px",
    borderRadius: "12px",
    backgroundColor: o.palette.background.background7
  },
  ".MuiBackdrop-root": {
    backdropFilter: "blur(20px)",
    backgroundColor: o.palette.mode === "dark" ? a(o.palette.darkening.darkening, 0.4) : a(o.palette.darkening.darkening, 0.2)
  }
})), g = t(r)(() => ({
  position: "absolute",
  top: "12px",
  right: "12px",
  "&:hover": {
    backgroundColor: "transparent"
  }
})), l = t(n)(({ theme: o }) => ({
  justifyContent: "center",
  alignItems: "center",
  width: "72px",
  height: "72px",
  borderRadius: "50%",
  color: o.palette.base.color6,
  backgroundImage: `linear-gradient(180deg,
    ${a(o.palette.base.color6, 0.2)} 0%,
    ${a(o.palette.base.color6, 0)} 100%)`,
  svg: {
    width: "36px",
    height: "36px"
  }
})), c = t(n)(() => ({
  gap: "8px",
  paddingTop: "32px",
  paddingBottom: "32px",
  whiteSpace: "break-spaces",
  textAlign: "center",
  width: "100%"
})), s = t(n)(() => ({
  flexDirection: "row",
  gap: "8px",
  width: "100%",
  button: {
    padding: "12px 16px",
    lineHeight: 1
  }
}));
export {
  s as ButtonGroup,
  g as CloseIconButton,
  c as Content,
  d as Dialog,
  l as IconWrapper
};
