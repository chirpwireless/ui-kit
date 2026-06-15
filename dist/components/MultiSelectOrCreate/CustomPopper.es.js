import { jsxRuntimeExports as i } from "../../jsx-runtime-BgepH7Pb.js";
import { Popper as n } from "@mui/material";
const s = (r) => {
  const { anchorEl: t, ...e } = r, o = t && "clientWidth" in t ? t.clientWidth : void 0;
  return /* @__PURE__ */ i.jsx(
    n,
    {
      anchorEl: t,
      ...e,
      placement: "bottom-start",
      style: { zIndex: 1300, width: o, maxWidth: o }
    }
  );
};
export {
  s as CustomPopper
};
