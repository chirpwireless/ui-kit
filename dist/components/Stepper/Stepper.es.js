import { jsxRuntimeExports as c } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as p, Stack as u, IconButton as a } from "@mui/material";
import { mergeSx as g } from "../../helpers/merge-sx.es.js";
import { StepIcon as l } from "../../icons/StepIcon/index.es.js";
import { chirpPalette as h } from "../../theme/palette.es.js";
const y = ({ activeStep: n, handleSetStep: r, steps: o, sx: m }) => {
  const x = p(), i = h(x), e = i.primaryColors.accentLight2 ?? i.primaryColors.accentLight;
  return o != null && o.length ? /* @__PURE__ */ c.jsx(
    u,
    {
      direction: "row",
      sx: g(
        {
          gap: "8px",
          height: "24px",
          alignItems: "center",
          justifyContent: "center",
          mb: "32px"
        },
        m
      ),
      children: o.map((t) => /* @__PURE__ */ c.jsx(
        a,
        {
          sx: {
            color: n === t ? i.primaryColors.accent : i.neutral.grey4,
            width: "6px",
            minWidth: "24px",
            height: "24px",
            borderRadius: "8px",
            padding: "0",
            cursor: r ? "pointer" : "default",
            "&:hover": r ? { backgroundColor: e } : void 0
          },
          onClick: () => r == null ? void 0 : r(t),
          children: /* @__PURE__ */ c.jsx(l, {})
        },
        t
      ))
    }
  ) : null;
};
export {
  y as Stepper
};
