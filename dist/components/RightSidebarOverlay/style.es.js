import { styled as t, Drawer as d, drawerClasses as e } from "@mui/material";
import { CurrentTheme as p } from "../../styles/constants.es.js";
import { chirpPalette as i } from "../../theme/palette.es.js";
const w = t(d)(({ theme: r, gutters: o }) => {
  const a = i(r);
  return {
    [`& .${e.paper}`]: {
      background: r.palette.mode === p.Dark ? a.neutral.grey1 : a.neutral.white,
      width: "460px",
      borderLeft: `1px solid ${a.borders.primary}`,
      boxShadow: `-8px 0 32px ${a.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
      padding: o ? "24px" : 0,
      [r.breakpoints.down("lg")]: {
        width: "auto"
      },
      [r.breakpoints.down("md")]: {
        width: "100%",
        maxWidth: "100%",
        padding: o ? "16px" : 0
      }
    }
  };
});
export {
  w as Overlay
};
