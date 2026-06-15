import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as n, Tooltip as s, alpha as a, Box as m } from "@mui/material";
import { chirpPalette as x } from "../../theme/palette.es.js";
const u = ({ children: t, tooltipProps: e, childrenProps: i, ...p }) => {
  const l = n(), o = x(l);
  return /* @__PURE__ */ r.jsx(
    s,
    {
      slotProps: {
        tooltip: {
          sx: {
            /* 10px as was set in Figma is too small */
            fontSize: "12px",
            backgroundColor: a(o.neutral.grey1, 0.9),
            color: o.neutral.primary,
            border: `1px solid ${o.borders.primary}`,
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
            ...e
          }
        }
      },
      ...p,
      children: /* @__PURE__ */ r.jsx(m, { display: "inline-block", height: "min-content", width: "min-content", maxWidth: "100%", sx: i, children: t })
    }
  );
};
export {
  u as Tooltip
};
