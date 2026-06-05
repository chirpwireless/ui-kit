import { styled as d, Box as s } from "@mui/material";
import { SIDEBAR_COLLAPSED_WIDTH as o, SIDEBAR_WIDTH as r, CLOSED_SIDEBAR_WIDTH as t, CurrentTheme as l } from "../../styles/constants.es.js";
const g = d(s, {
  shouldForwardProp: (n) => n !== "isOpen" && n !== "isSidebarCollapsed"
})(({ theme: n, isOpen: a, isSidebarCollapsed: i }) => ({
  backgroundColor: n.palette.mode === l.Dark ? n.palette.neutral.black : n.palette.neutral.white,
  display: "flex",
  flexFlow: "row nowrap",
  minHeight: "100%",
  transition: n.transitions.create(["width", "margin"], {
    easing: n.transitions.easing.sharp,
    duration: n.transitions.duration.leavingScreen
  }),
  width: "100%",
  flexGrow: 1,
  padding: 4,
  [n.breakpoints.between("md", "lg")]: {
    overflow: a ? "hidden" : "auto",
    padding: 0
  },
  [n.breakpoints.up("lg")]: {
    marginLeft: i ? o : t,
    width: `calc(100% - ${i ? o : t}px)`
  },
  [n.breakpoints.down("md")]: {
    overflow: a ? "hidden" : "auto",
    padding: 0
  },
  [n.breakpoints.down("lg")]: {
    flexDirection: "column"
  },
  ...a && {
    [n.breakpoints.up("md")]: {
      marginLeft: i ? o : r,
      width: `calc(100% - ${i ? o : r}px)`,
      transition: n.transitions.create(["width", "margin"], {
        easing: n.transitions.easing.sharp,
        duration: n.transitions.duration.enteringScreen
      })
    }
  }
})), w = d(s)({
  minHeight: "100vh",
  display: "flex",
  flexFlow: "column nowrap"
});
export {
  g as AppContainer,
  w as LayoutRoot
};
