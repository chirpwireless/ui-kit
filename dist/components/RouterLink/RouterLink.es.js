import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { styled as n } from "@mui/material";
import { Link as i } from "react-router-dom";
const m = n(i)(({ theme: t }) => ({
  color: t.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline"
  }
})), a = ({ href: t, to: o, ...r }) => /* @__PURE__ */ e.jsx(m, { to: o || t || "", ...r });
export {
  a as RouterLink
};
