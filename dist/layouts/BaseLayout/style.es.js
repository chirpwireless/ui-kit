import { styled as s, Box as l } from "@mui/material";
import { SIDEBAR_COLLAPSED_WIDTH as o, SIDEBAR_WIDTH as t, CLOSED_SIDEBAR_WIDTH as a, CurrentTheme as p } from "../../styles/constants.es.js";
import { chirpPalette as d } from "../../theme/palette.es.js";
const u = s(l, {
  shouldForwardProp: (n) => n !== "isOpen" && n !== "isSidebarCollapsed"
})(({ theme: n, isOpen: r, isSidebarCollapsed: i }) => ({
  backgroundColor: n.palette.mode === p.Dark ? d(n).neutral.black : d(n).neutral.white,
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
    overflow: r ? "hidden" : "auto",
    padding: 0
  },
  [n.breakpoints.up("lg")]: {
    marginLeft: i ? o : a,
    width: `calc(100% - ${i ? o : a}px)`
  },
  [n.breakpoints.down("md")]: {
    overflow: r ? "hidden" : "auto",
    padding: 0
  },
  [n.breakpoints.down("lg")]: {
    flexDirection: "column"
  },
  ...r && {
    [n.breakpoints.up("md")]: {
      marginLeft: i ? o : t,
      width: `calc(100% - ${i ? o : t}px)`,
      transition: n.transitions.create(["width", "margin"], {
        easing: n.transitions.easing.sharp,
        duration: n.transitions.duration.enteringScreen
      })
    }
  }
})), c = s(l)({
  minHeight: "100vh",
  // Use dynamic viewport height where supported so mobile browser chrome doesn't clip the layout.
  "@supports (min-height: 100dvh)": {
    minHeight: "100dvh"
  },
  display: "flex",
  flexFlow: "column nowrap"
});
export {
  u as AppContainer,
  c as LayoutRoot
};
