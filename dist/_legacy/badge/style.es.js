import { styled as e, Box as o } from "@mui/material";
const n = e(o)(({ theme: t }) => ({
  borderRadius: "12px",
  padding: "4px 12px",
  background: t.palette.info.main,
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "center",
  width: "min-content",
  color: t.palette.text.text1,
  "&.primary": {
    background: t.palette.info.main
  },
  "&.danger": {
    background: t.palette.base.color7
  },
  "&.success": {
    background: t.palette.base.color9
  }
})), r = e(o)(({ theme: t }) => ({
  borderRadius: "12px",
  padding: "4px 12px",
  background: t.palette.info.main,
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "center",
  width: "min-content",
  color: t.palette.text.text1,
  float: "left",
  margin: "2px",
  "&.primary": {
    background: t.palette.info.main
  },
  "&.danger": {
    background: t.palette.base.color7
  },
  "&.success": {
    background: t.palette.base.color9
  }
}));
export {
  n as Badge,
  r as SimpleBadge
};
