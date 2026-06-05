import { styled as e, List as r, ListItem as o, ListItemButton as a } from "@mui/material";
const p = e("div")(({ theme: t }) => ({
  ".react-datepicker": {
    backgroundColor: "transparent",
    border: "none",
    ".react-datepicker__header": {
      paddingTop: 0,
      display: "flex",
      flexDirection: "column",
      backgroundColor: "transparent",
      gap: "12px",
      border: "none",
      ".react-datepicker__current-month": {
        ...t.typography.caption12,
        color: t.palette.text.text3
      },
      "button.react-datepicker__navigation": {}
    },
    ".react-datepicker__day-names": {
      display: "flex",
      margin: 0,
      justifyContent: "space-around",
      ".react-datepicker__day-name": {
        ...t.typography.caption12,
        color: t.palette.text.text8
      }
    },
    ".react-datepicker__month": {
      margin: "0"
    },
    ".react-datepicker__day": {
      width: "36px",
      height: "28px",
      margin: "2px 1px",
      borderRadius: "3px",
      backgroundColor: t.palette.background.background1,
      color: t.palette.text.text7,
      border: "1px solid",
      borderColor: t.palette.background.background1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...t.typography.caption12,
      "&:hover:not(&--disabled)": {
        borderColor: t.palette.base.color6
      },
      "&:first-of-type": {
        marginLeft: "0"
      },
      "&--in-range": {
        backgroundColor: t.palette.base.color61,
        borderColor: "transparent"
      },
      "&--outside-month": {
        visibility: "hidden"
      },
      "&--disabled": {
        opacity: ".3"
      }
    },
    ".react-datepicker__day--selected": {
      backgroundColor: t.palette.base.color6,
      color: t.palette.base.color1
    }
  }
})), i = e(r)(({ theme: t }) => ({
  width: "100%",
  borderLeft: `1px solid ${t.palette.borders.primary}`,
  padding: 0,
  [t.breakpoints.down("md")]: {
    border: "none"
  },
  [t.breakpoints.between("md", "lg")]: {
    border: "none"
  }
})), d = e(o)(({ theme: t }) => ({
  padding: "0",
  margin: "0",
  textTransform: "capitalize",
  borderBottom: `1px solid ${t.palette.borders.primary}`,
  ".MuiButtonBase-root.MuiListItemButton-root:hover": {
    color: t.palette.text.text4
  },
  "&:last-of-type": {
    borderBottom: "none"
  }
})), l = e(a)(({ theme: t }) => ({
  padding: "16px 8px 16px 27px",
  display: "flex",
  justifyContent: "space-between",
  fontFamily: t.typography.fontFamily,
  fontSize: "12px",
  lineHeight: "16px",
  "&:hover": {
    backgroundColor: "transparent",
    color: t.palette.lightShades.primary
  },
  [t.breakpoints.down("md")]: {
    padding: "16px 0"
  },
  [t.breakpoints.between("md", "lg")]: {
    padding: "16px 0"
  }
}));
export {
  i as CalendarQuickSelect,
  l as CalendarQuickSelectButton,
  d as CalendarQuickSelectItem,
  p as DatePickerWrapper
};
