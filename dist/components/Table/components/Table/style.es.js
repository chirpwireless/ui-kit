import { styled as r, Box as p, TableRow as e } from "@mui/material";
import { chirpPalette as d } from "../../../../theme/palette.es.js";
import { Cell as b } from "../../style.es.js";
const n = r(p)(({ theme: o }) => ({
  width: "100%",
  overflowX: "hidden",
  backgroundColor: "transparent",
  [o.breakpoints.between("md", "lg")]: {
    overflowX: "visible"
  },
  [o.breakpoints.down("lg")]: {
    overflowX: "visible",
    padding: "16px"
  },
  [o.breakpoints.down("md")]: {
    padding: "8px"
  }
})), a = r(e)(({ theme: o }) => ({
  td: {
    padding: "24px 0 12px",
    border: "none",
    letterSpacing: "0.06px",
    color: d(o).primaryColors.accent,
    width: "50px"
  },
  "&:first-of-type": {
    td: {
      paddingTop: "16px"
    }
  }
}));
export {
  b as Cell,
  a as GroupedRow,
  n as TableWrapper
};
