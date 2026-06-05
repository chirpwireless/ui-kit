import { jsxRuntimeExports as o } from "../../../jsx-runtime-BgepH7Pb.js";
import "@mui/material";
import { PinIcon as x } from "../../../assets/icons/PinIcon/index.es.js";
import { IconButton as a } from "../../icon-button/index.es.js";
const c = ({
  attributeName: r,
  isAccent: t = !1,
  disabled: e = !1,
  switchView: i
}) => {
  const n = () => {
    i(r);
  };
  return /* @__PURE__ */ o.jsx(
    a,
    {
      variant: "gray",
      sx: {
        height: "20px",
        padding: 0,
        color: t ? "base.color6" : "text.text8",
        "&:hover": {
          color: t ? "base.hover" : "text.text4",
          bgcolor: "transparent"
        },
        svg: {
          width: "16px",
          height: "16px"
        }
      },
      disabled: e,
      onClick: n,
      children: /* @__PURE__ */ o.jsx(x, { outlined: !t })
    }
  );
};
export {
  c as SwitchViewButton
};
