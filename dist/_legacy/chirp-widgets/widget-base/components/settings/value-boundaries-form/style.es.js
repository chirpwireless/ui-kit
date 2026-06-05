import { styled as t, Box as o, Input as i } from "@mui/material";
import { TextField as p } from "../../../../../text-field/index.es.js";
const d = t(o)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px"
})), r = t(i)(({ theme: e }) => ({
  fontSize: "12px",
  input: {
    padding: 0,
    "&:not(:disabled)": {
      cursor: "pointer",
      color: e.palette.base.color6
    }
  }
})), x = t(p)(() => ({
  label: {
    maxWidth: "none"
  },
  input: {
    padding: "4px 12px",
    height: "auto"
  }
}));
export {
  d as Form,
  r as ResetInput,
  x as TextField
};
