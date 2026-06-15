import { styled as e, Stack as p } from "@mui/material";
import { CurrentTheme as o } from "../../styles/constants.es.js";
import { chirpPalette as i } from "../../theme/palette.es.js";
const m = e(p)(({ theme: t }) => {
  const r = i(t);
  return {
    backgroundColor: t.palette.mode === o.Dark ? r.neutral.black : r.neutral.white,
    borderRadius: "12px",
    padding: "14px 12px 20px 20px",
    height: "124px",
    minWidth: "292px",
    justifyContent: "space-between",
    [t.breakpoints.down("sm")]: {
      minWidth: 0,
      width: "100%"
    }
  };
});
export {
  m as Wrapper
};
