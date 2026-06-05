import { jsxRuntimeExports as t } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as p, Tooltip as i, alpha as n, Box as a } from "@mui/material";
const x = ({ children: r, ...e }) => {
  const o = p();
  return /* @__PURE__ */ t.jsx(
    i,
    {
      componentsProps: {
        tooltip: {
          sx: {
            padding: "8px 16px",
            ...o.typography.caption12,
            backgroundColor: o.palette.background.background14,
            color: o.palette.text.text6,
            borderRadius: "8px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4 10 0 #5C5C5C",
            borderColor: n(o.palette.border.border3, 0.1)
          }
        }
      },
      ...e,
      children: /* @__PURE__ */ t.jsx(a, { display: "inline-block", height: "min-content", width: "min-content", maxWidth: "100%", children: r })
    }
  );
};
export {
  x as Tooltip
};
