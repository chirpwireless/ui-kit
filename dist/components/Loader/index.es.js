import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { Stack as t, CircularProgress as o } from "@mui/material";
const n = (r) => /* @__PURE__ */ e.jsx(
  t,
  {
    sx: {
      width: "100%",
      height: "100%",
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    children: /* @__PURE__ */ e.jsx(o, { size: r.size ?? 40, color: r.color ?? "primary", ...r })
  }
);
export {
  n as Loader
};
