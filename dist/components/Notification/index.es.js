import { jsxRuntimeExports as n } from "../../jsx-runtime-BgepH7Pb.js";
import { Snackbar as s } from "@mui/material";
const a = ({ open: t, message: o, actionComponent: r, sx: i }) => /* @__PURE__ */ n.jsx(
  s,
  {
    open: t,
    message: o,
    anchorOrigin: { vertical: "bottom", horizontal: "right" },
    sx: {
      position: "absolute",
      bottom: { xs: "2px" },
      right: { xs: "2px" },
      left: { xs: "2px" },
      zIndex: 100,
      ...i
    },
    action: r,
    slotProps: {
      content: {
        sx: {
          color: "neutral.white"
        }
      }
    }
  }
);
export {
  a as Notification
};
