import { styled as o, Menu as i, List as n, ListItem as p, ListItemButton as d } from "@mui/material";
import { CurrentTheme as l } from "../../styles/constants.es.js";
import { chirpPalette as e } from "../../theme/palette.es.js";
const u = o(i)(({ theme: t }) => {
  const r = e(t), a = t.palette.mode === l.Dark ? r.neutral.grey1 : r.neutral.white;
  return {
    "& .MuiPaper-root": {
      marginTop: "8px",
      width: "576px",
      height: "auto",
      background: a,
      border: `1px solid ${r.borders.primary}`,
      boxShadow: `0 8px 32px ${r.shadow ?? "rgba(0, 0, 0, 0.14)"}`,
      opacity: 0.8,
      padding: "16px",
      ".MuiMenu-list": {
        borderRadius: "12px",
        backdropFilter: "blur(10px)",
        padding: 0
      },
      ".MuiMenuItem-root": {
        label: {
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        },
        "&:hover": {
          background: r.primaryColors.accentLight2
        }
      }
    },
    [t.breakpoints.down("md")]: {
      "& .MuiPaper-root": {
        width: "100%",
        maxWidth: "100%",
        padding: "16px 20px",
        left: "0 !important",
        right: "0 !important",
        zIndex: "901",
        opacity: 1,
        background: a
      }
    },
    [t.breakpoints.between("md", "lg")]: {
      "& .MuiPaper-root": {
        width: "100%",
        maxWidth: "100%",
        padding: "16px 20px",
        left: "0 !important",
        right: "0 !important",
        zIndex: "901",
        opacity: 1,
        background: a
      }
    }
  };
}), x = o(n)(({ theme: t }) => ({
  width: "100%",
  borderLeft: `1px solid ${e(t).borders.primary}`,
  padding: 0,
  [t.breakpoints.down("md")]: {
    border: "none"
  },
  [t.breakpoints.between("md", "lg")]: {
    border: "none"
  }
})), g = o(p)(({ theme: t }) => ({
  padding: "0",
  margin: "0",
  textTransform: "capitalize",
  borderBottom: `1px solid ${e(t).borders.primary}`,
  "&:last-of-type": {
    borderBottom: "none"
  }
})), m = o(d)(({ theme: t }) => {
  const r = e(t);
  return {
    padding: "16px 8px 16px 27px",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: t.typography.fontFamily,
    fontSize: "12px",
    lineHeight: "16px",
    "&:hover": {
      backgroundColor: r.primaryColors.accentLight2,
      color: r.neutral.primary
    },
    [t.breakpoints.down("md")]: {
      padding: "16px 0"
    },
    [t.breakpoints.between("md", "lg")]: {
      padding: "16px 0"
    }
  };
});
export {
  x as CalendarQuickSelect,
  m as CalendarQuickSelectButton,
  g as CalendarQuickSelectItem,
  u as RangePickerMenu
};
