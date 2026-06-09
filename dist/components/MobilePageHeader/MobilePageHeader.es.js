import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as p, Stack as t, Typography as o } from "@mui/material";
import { chirpPalette as l } from "../../theme/palette.es.js";
const d = ({ children: i, text: n, subText: e, sx: a }) => {
  const m = p();
  return /* @__PURE__ */ r.jsxs(
    t,
    {
      direction: "row",
      alignItems: "center",
      gap: 4,
      justifyContent: "space-between",
      width: "auto",
      px: 5,
      minHeight: "64px",
      borderBottom: `1px solid ${l(m).borders.primary}`,
      sx: a,
      children: [
        /* @__PURE__ */ r.jsxs(t, { mb: 4, mt: 4, children: [
          /* @__PURE__ */ r.jsx(o, { color: "neutral.primary", lineHeight: "28px", variant: "h3", mb: "4px", children: n }),
          e ? /* @__PURE__ */ r.jsx(o, { color: "neutral.grey4", variant: "body2", children: e }) : null
        ] }),
        i
      ]
    }
  );
};
export {
  d as MobilePageHeader
};
