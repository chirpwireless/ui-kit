import { jsxRuntimeExports as i } from "../../jsx-runtime-BgepH7Pb.js";
import { Avatar as n } from "@mui/material";
import { getUserInitials as s } from "../../helpers/userName.es.js";
const f = ({ avatar: t, userName: r, sx: o }) => t ? /* @__PURE__ */ i.jsx(n, { src: t, sx: o, alt: r }) : /* @__PURE__ */ i.jsx(n, { sx: o, children: r ? s(r) : "" });
export {
  f as Avatar
};
