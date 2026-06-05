import { styled as t, Stack as e, alpha as r, List as n, ListItem as d } from "@mui/material";
import { Unstable_Popup as p } from "@mui/base/Unstable_Popup";
const s = t(p)(() => ({
  zIndex: 1,
  borderRadius: "12px"
})), l = t(e)(({ theme: o }) => ({
  minWidth: "220px",
  alignItems: "center",
  borderRadius: "12px",
  padding: 0,
  border: `1px solid ${r(o.palette.border.border3, 0.1)}`,
  backgroundColor: o.palette.background.background1,
  overflow: "hidden",
  maxWidth: "220px"
})), x = t(n)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 0
})), c = t(d)(({ theme: o }) => ({
  padding: "12px 8px",
  // borderBottom: `1px solid ${theme.palette.border.border3}`,
  color: o.palette.text.text8,
  cursor: "pointer",
  "&:last-of-type": {
    borderBottom: "none",
    paddingBottom: "8px"
  },
  "&:hover": {
    backgroundColor: "none"
  }
})), m = t(e)(() => ({
  alignItems: "flex-start",
  flexDirection: "row",
  gap: "8px",
  padding: "0 12px"
}));
export {
  x as List,
  c as ListItem,
  m as ListItemContent,
  s as Popup,
  l as PopupBody
};
