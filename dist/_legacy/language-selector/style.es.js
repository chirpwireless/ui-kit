import e from "@mui/icons-material/Translate";
import { styled as o, Stack as r } from "@mui/material";
import { Select as a } from "../select/style.es.js";
const i = o(r)({
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  padding: "6px 8px"
}), l = o(e)({
  fontSize: "20px"
}), d = o(a)(({ theme: t }) => ({
  marginTop: 0,
  backgroundColor: "transparent",
  height: "32px",
  width: "100%",
  border: "none",
  padding: "4px 8px",
  "&.MuiInputBase-root": {
    ...t.typography.paragraphSecondary,
    color: t.palette.text.text8,
    ".MuiSelect-icon": {
      color: t.palette.text.text8
    },
    "&:hover": {
      backgroundColor: t.palette.background.background5,
      color: t.palette.text.text6,
      ".MuiTypography-root": {
        color: t.palette.text.text6
      }
    }
  },
  ".MuiSelect-select.MuiInputBase-input": {
    ...t.typography.paragraphSecondary,
    padding: 0,
    paddingLeft: "8px"
  }
}));
export {
  d as Select,
  i as Selector,
  l as TranslateIcon
};
