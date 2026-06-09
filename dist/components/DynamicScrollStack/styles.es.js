import { styled as o, Stack as t } from "@mui/material";
const n = o(t, {
  shouldForwardProp: (r) => r !== "isScrolling"
})(({ isScrolling: r }) => ({
  overflowX: "hidden",
  overflowY: "auto",
  "&::-webkit-scrollbar-track": {
    backgroundColor: r ? "inherit" : "transparent !important"
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: r ? "inherit" : "transparent !important",
    transition: "background-color 0.2s"
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: r ? "inherit" : "transparent !important"
  }
}));
export {
  n as ScrollContainer
};
