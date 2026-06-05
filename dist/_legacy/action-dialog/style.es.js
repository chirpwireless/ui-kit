import { styled as o, Dialog as d, alpha as r, Stack as t } from "@mui/material";
const e = o(d)(({ theme: a }) => ({
  backdropFilter: "blur(4px)",
  ".MuiPaper-root": {
    width: "360px",
    minWidth: "360px",
    padding: "20px 20px 30px",
    borderRadius: "12px",
    background: a.palette.background.background7,
    [a.breakpoints.down("sm")]: {
      width: "100%",
      minWidth: "auto",
      margin: "8px",
      padding: "20px 20px 30px"
    }
  },
  ".MuiBackdrop-root": {
    backdropFilter: "blur(20px)",
    backgroundColor: a.palette.mode === "dark" ? r(a.palette.darkening.darkening, 0.4) : r(a.palette.darkening.darkening, 0.2)
  }
})), p = o(t)(({ theme: a }) => ({
  alignItems: "center",
  maxWidth: "360px",
  width: "100%",
  background: a.palette.background.background7
})), i = o(t)(({ theme: a }) => ({
  justifyContent: "center",
  alignItems: "center",
  width: "72px",
  height: "72px",
  borderRadius: "50%",
  backgroundImage: `linear-gradient(180deg, ${r(a.palette.base.color6, 0.2)} 0%, ${r(
    a.palette.base.color6,
    0
  )} 100%)`,
  color: a.palette.base.color6
}));
export {
  p as Card,
  e as Dialog,
  i as IconWrapper
};
