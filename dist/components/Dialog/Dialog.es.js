import { styled as r, Dialog as n, dialogClasses as a, DialogContent as e, dialogContentClasses as i, IconButton as d } from "@mui/material";
import { CurrentTheme as p } from "../../styles/constants.es.js";
import { chirpPalette as s } from "../../theme/palette.es.js";
const x = r(n)(({ theme: t }) => {
  const o = s(t);
  return {
    backdropFilter: "blur(4px)",
    [`& .${a.paper}`]: {
      background: t.palette.mode === p.Dark ? o.neutral.grey1 : o.neutral.white,
      borderRadius: "12px",
      border: `1px solid ${o.borders.primary}`,
      boxShadow: `0 8px 32px ${o.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
      padding: "20px",
      minWidth: "unset",
      [`${t.breakpoints.down("md")}`]: {
        width: "100%",
        margin: "0 12px",
        maxWidth: "unset",
        maxHeight: "unset",
        alignItems: "center"
      }
    }
  };
}), b = r(e)(() => ({
  textTransform: "none",
  [`&.${i.root}`]: {
    margin: 0,
    padding: 0,
    width: "100%",
    boxSizing: "border-box"
  }
})), u = r(d)(() => ({
  marginTop: "-12px",
  marginRight: "-12px"
}));
export {
  u as CloseButton,
  x as Dialog,
  b as DialogContent
};
