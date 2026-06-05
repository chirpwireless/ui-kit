import { styled as t, TableContainer as o, TableRow as p } from "@mui/material";
import { Cell as a } from "../../style.es.js";
const l = t(o)(({ theme: e }) => ({
  width: "100%",
  // overflowX: 'hidden',
  backgroundColor: "transparent",
  td: {
    color: e.palette.text.text4,
    padding: "18px 12px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "&:first-of-type": {
      paddingLeft: "0"
    }
  },
  [e.breakpoints.between("md", "lg")]: {
    overflowX: "visible"
  },
  [e.breakpoints.down("lg")]: {
    overflowX: "visible"
  }
})), d = t(p)(({ theme: e }) => ({
  td: {
    padding: "24px 0 12px",
    border: "none",
    letterSpacing: "0.06px",
    color: e.palette.text.text4,
    width: "50px"
  },
  "&:first-of-type": {
    td: {
      paddingTop: 0
    }
  }
}));
export {
  a as Cell,
  d as GroupedRow,
  l as TableWrapper
};
