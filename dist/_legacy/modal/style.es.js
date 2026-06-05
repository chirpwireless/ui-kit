import { styled as e, Box as n, alpha as o } from "@mui/material";
const a = e(n)(({ theme: t }) => ({
  background: `${o(t.palette.background.background4, 0.5)}`,
  backdropFilter: "blur(5px)",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999
})), i = e(n)(({ theme: t }) => ({
  background: t.palette.background.background7,
  borderRadius: "12px",
  padding: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  [t.breakpoints.up("md")]: {
    minWidth: "460px"
  }
}));
export {
  a as Container,
  i as Modal
};
