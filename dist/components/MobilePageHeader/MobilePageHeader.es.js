import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as s, Stack as t, Typography as o } from "@mui/material";
import { mergeSx as a } from "../../helpers/merge-sx.es.js";
import { chirpPalette as l } from "../../theme/palette.es.js";
const g = ({ children: i, text: n, subText: e, sx: m }) => {
  const p = s();
  return /* @__PURE__ */ r.jsxs(
    t,
    {
      direction: "row",
      sx: a(
        {
          alignItems: "center",
          gap: 4,
          justifyContent: "space-between",
          width: "auto",
          px: 5,
          minHeight: "64px",
          borderBottom: `1px solid ${l(p).borders.primary}`
        },
        m
      ),
      children: [
        /* @__PURE__ */ r.jsxs(
          t,
          {
            sx: {
              mb: 4,
              mt: 4
            },
            children: [
              /* @__PURE__ */ r.jsx(
                o,
                {
                  color: "neutral.primary",
                  variant: "h3",
                  sx: {
                    lineHeight: "28px",
                    mb: "4px"
                  },
                  children: n
                }
              ),
              e ? /* @__PURE__ */ r.jsx(o, { color: "neutral.grey4", variant: "body2", children: e }) : null
            ]
          }
        ),
        i
      ]
    }
  );
};
export {
  g as MobilePageHeader
};
