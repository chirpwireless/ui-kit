import { styled as r, Box as a } from "@mui/material";
import { chirpPalette as i } from "../../theme/palette.es.js";
const p = r(a)(({ theme: o }) => ({
  width: "100%",
  backgroundColor: i(o).neutral.grey1,
  margin: 0,
  padding: "24px",
  borderRadius: "12px",
  border: "none",
  height: "100%",
  minHeight: "calc(100vh - 8px)",
  [o.breakpoints.down("sm")]: {
    borderRadius: 0,
    padding: "16px"
  },
  [o.breakpoints.down("lg")]: {
    height: "auto",
    overflow: "auto"
  }
}));
export {
  p as PageWrapper
};
