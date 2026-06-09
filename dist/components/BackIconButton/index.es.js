import { styled as t, IconButton as e } from "@mui/material";
import { chirpPalette as a } from "../../theme/palette.es.js";
const p = t(e)(({ theme: r }) => {
  const o = a(r);
  return {
    position: "absolute",
    left: "16px",
    top: "16px",
    color: o.neutral.grey4,
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: o.primaryColors.accentLight2 ?? o.primaryColors.accentLight,
      color: o.neutral.primary
    }
  };
});
export {
  p as BackIconButton
};
