import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as n, Tooltip as m, alpha as s, Box as a } from "@mui/material";
import { mergeSx as x } from "../../helpers/merge-sx.es.js";
import { chirpPalette as c } from "../../theme/palette.es.js";
const f = ({ children: t, tooltipProps: e, childrenProps: i, ...p }) => {
  const l = n(), o = c(l);
  return /* @__PURE__ */ r.jsx(
    m,
    {
      slotProps: {
        tooltip: {
          sx: {
            /* 10px as was set in Figma is too small */
            fontSize: "12px",
            backgroundColor: s(o.neutral.grey1, 0.9),
            color: o.neutral.primary,
            border: `1px solid ${o.borders.primary}`,
            borderRadius: "12px",
            backdropFilter: "blur(10px)",
            ...e
          }
        }
      },
      ...p,
      children: /* @__PURE__ */ r.jsx(
        a,
        {
          sx: x(
            {
              display: "inline-block",
              height: "min-content",
              width: "min-content",
              maxWidth: "100%"
            },
            i
          ),
          children: t
        }
      )
    }
  );
};
export {
  f as Tooltip
};
