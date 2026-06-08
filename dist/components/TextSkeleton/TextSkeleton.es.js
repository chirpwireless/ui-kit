import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as n, Box as p } from "@mui/material";
import { Skeleton as s } from "../Skeleton/Skeleton.es.js";
const d = ({ width: o, height: t, sx: r }) => {
  const i = n();
  return /* @__PURE__ */ e.jsx(
    p,
    {
      width: o ?? "120px",
      height: t ?? i.typography.body1.lineHeight,
      display: "inline-block",
      sx: { borderRadius: "8px", overflow: "hidden", ...r },
      children: /* @__PURE__ */ e.jsx(s, {})
    }
  );
};
export {
  d as TextSkeleton
};
