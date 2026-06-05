import { styled as o, ListItem as e, Stack as p } from "@mui/material";
const i = o(e)(({ theme: t }) => ({
  padding: "12px 8px",
  fontSize: "12px",
  lineHeight: "18px",
  color: t.palette.text.text8,
  cursor: "pointer",
  "&:last-of-type": {
    borderBottom: "none",
    paddingBottom: "8px"
  },
  ".MuiStack-root": {
    "&:hover": {
      backgroundColor: t.palette.background.background5,
      color: t.palette.text.text6,
      ".MuiTypography-root": {
        color: t.palette.text.text6
      }
    }
  }
})), a = o(p)(() => ({
  flexDirection: "row",
  gap: "8px",
  padding: "4px 8px",
  alignItems: "center",
  width: "100%",
  borderRadius: "6px",
  height: "32px"
}));
export {
  i as ListItem,
  a as ListItemContent
};
