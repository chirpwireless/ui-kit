import { styled as o, TableCell as e } from "@mui/material";
import { Row as d } from "../../style.es.js";
const r = o(e)(({ theme: t }) => ({
  padding: "18px 12px 12px",
  border: "none",
  backgroundColor: t.palette.background.background7,
  color: t.palette.text.text8,
  whiteSpace: "nowrap",
  cursor: "auto",
  ...t.typography.body1,
  span: {
    svg: {
      stroke: t.palette.text.text8
    }
  },
  [t.breakpoints.down("lg")]: {
    padding: "8px 6px"
  },
  "&:first-of-type:before, &:last-of-type:after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "12px",
    background: "inherit"
  },
  "&:first-of-type": {
    paddingLeft: 0,
    "&:before": {
      left: "-12px"
    }
  },
  "&:last-of-type": {
    paddingRight: 0,
    "&:after": {
      right: "-12px"
    }
  }
}));
export {
  r as HeadCell,
  d as Row
};
