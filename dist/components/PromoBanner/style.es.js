import { styled as n, Box as o } from "@mui/material";
import { CurrentTheme as i } from "../../styles/constants.es.js";
import { chirpPalette as a } from "../../theme/palette.es.js";
const r = 112, s = n(o)(({ theme: e }) => {
  const t = a(e);
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    borderRadius: "12px",
    overflow: "hidden",
    // PageWrapper is grey1 in both modes, so the card surface takes the opposite end of the neutral scale
    background: e.palette.mode === i.Dark ? t.neutral.black : t.neutral.white,
    [e.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start"
    }
  };
}), x = n(o)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: `${r}px`,
  height: `${r}px`,
  borderRadius: "8px",
  overflow: "hidden"
}));
export {
  s as Banner,
  x as Media
};
