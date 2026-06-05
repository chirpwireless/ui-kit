import { styled as o, TableRow as e, alpha as p, TableCell as r } from "@mui/material";
const a = o(e)(({ theme: t }) => ({
  position: "relative",
  "&.hoverable:hover": {
    cursor: "pointer",
    paddingLeft: "12px",
    backgroundColor: p(t.palette.base.color61, 0.1),
    borderRadius: "8px",
    "& .MuiTypography-root.MuiTypography-body1": {
      color: t.palette.base.color6
    }
  },
  "&:hover": {
    "td:first-of-type": {
      position: "relative"
    },
    "td:last-of-type": {
      paddingRight: 0,
      position: "relative"
    },
    "td:first-of-type:before, td:last-of-type:after": {
      content: '""',
      position: "absolute",
      top: "-1px",
      bottom: "-1px",
      width: "12px"
    },
    "td:first-of-type:before": {
      left: "-12px",
      borderTopLeftRadius: "12px",
      borderBottomLeftRadius: "12px"
    },
    "td:last-of-type:after": {
      right: "-12px",
      borderTopRightRadius: "12px",
      borderBottomRightRadius: "12px"
    }
  },
  "td:first-of-type": {
    paddingLeft: 0
  },
  "td:last-of-type": {
    paddingRight: 0
  }
})), d = o(r)(({ theme: t }) => ({
  height: t.spacing(5),
  padding: "12px",
  whiteSpace: "nowrap",
  borderBottom: `1px solid ${p(t.palette.border.border3, 0.1)}`,
  opacity: 1,
  color: `${t.palette.text.text4} !important`,
  ...t.typography.body1,
  [t.breakpoints.down("lg")]: {
    padding: "8px 6px"
  }
}));
export {
  d as Cell,
  a as Row
};
