import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as i, Box as n } from "@mui/material";
import { Skeleton as p } from "../skeleton/index.es.js";
const m = ({ height: o, sx: t }) => {
  const r = i();
  return /* @__PURE__ */ e.jsx(
    n,
    {
      width: "120px",
      height: o ?? r.typography.body1.lineHeight,
      display: "inline-block",
      sx: { borderRadius: "8px", overflow: "hidden", ...t },
      children: /* @__PURE__ */ e.jsx(p, {})
    }
  );
};
export {
  m as TextSkeleton
};
