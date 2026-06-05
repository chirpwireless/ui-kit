import { styled as t, Menu as o, alpha as a } from "@mui/material";
const p = t(o)(({ theme: r }) => ({
  "& .MuiPaper-root": {
    marginTop: "8px",
    width: "576px",
    height: "auto",
    borderRadius: "8px",
    border: "1px solid",
    borderColor: `${a(r.palette.border.border3, 0.1)} !important`,
    background: `${r.palette.background.background7} !important`,
    padding: "16px",
    ".MuiMenu-list": {
      borderRadius: "12px",
      backdropFilter: "blur(20px)",
      padding: 0
    },
    ".MuiMenuItem-root": {
      label: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
      }
      // '&:hover': {
      // background: theme.palette.background.primary,
      // },
    }
  },
  [r.breakpoints.down("md")]: {
    "& .MuiPaper-root": {
      width: "100%",
      maxWidth: "100%",
      padding: "16px 20px",
      left: "0 !important",
      right: "0 !important",
      zIndex: "901",
      opacity: 1,
      background: r.palette.background.background2
    }
  },
  [r.breakpoints.between("md", "lg")]: {
    "& .MuiPaper-root": {
      width: "100%",
      maxWidth: "100%",
      padding: "16px 20px",
      left: "0 !important",
      right: "0 !important",
      zIndex: "901",
      opacity: 1,
      background: r.palette.background.background2
    }
  }
}));
export {
  p as RangePickerMenu
};
