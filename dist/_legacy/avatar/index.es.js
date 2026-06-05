import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as p } from "@mui/material";
import { getStringAvatar as s } from "../../helpers/get-string-avatar.es.js";
import { SvgUserBoard as n } from "../../user-board-cr8FfPSq.js";
import { StyledAvatar as m } from "./styles.es.js";
import { Typography as a } from "../typogrpahy/index.es.js";
const d = ({ avatarUrl: o, sx: t, userName: e }) => {
  const i = p();
  return o ? /* @__PURE__ */ r.jsx(m, { src: o, sx: t }) : /* @__PURE__ */ r.jsx(m, { sx: t, children: e ? /* @__PURE__ */ r.jsx(a, { variant: "h2", color: i.palette.base.color1, children: s(e) }) : /* @__PURE__ */ r.jsx(n, {}) });
};
export {
  d as Avatar
};
