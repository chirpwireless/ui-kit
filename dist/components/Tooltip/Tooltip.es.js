import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as l, Tooltip as s, alpha as m, Box as a } from "@mui/material";
import { chirpPalette as x } from "../../theme/palette.es.js";
const u = ({ children: t, tooltipProps: e, childrenProps: i, ...p }) => {
  const n = l(), o = x(n);
  return /* @__PURE__ */ r.jsx(
    s,
    {
      componentsProps: {
        tooltip: {
          sx: {
            /* 10px as was set in Figma is too small */
            fontSize: "12px",
            backgroundColor: m(o.neutral.grey1, 0.9),
            color: o.neutral.primary,
            border: `1px solid ${o.borders.primary}`,
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
            ...e
          }
        }
      },
      ...p,
      children: /* @__PURE__ */ r.jsx(a, { display: "inline-block", height: "min-content", width: "min-content", maxWidth: "100%", sx: i, children: t })
    }
  );
};
export {
  u as Tooltip
};
