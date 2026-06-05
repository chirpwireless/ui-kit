import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as s, FormControl as a } from "@mui/material";
import { BadgeSelect as g } from "./style.es.js";
const n = ({ disabled: i, value: r, endAdornment: m, MenuProps: t, ...x }) => {
  var e;
  const d = s(), c = {
    ...t,
    MenuListProps: {
      ...t == null ? void 0 : t.MenuListProps,
      sx: {
        padding: 0,
        ".MuiMenuItem-root": {
          ...d.typography.caption12,
          padding: "6px 12px",
          color: "text.text1",
          height: "28px"
        },
        ...(e = t == null ? void 0 : t.MenuListProps) == null ? void 0 : e.sx
      }
    }
  };
  return /* @__PURE__ */ o.jsx(a, { fullWidth: !0, children: /* @__PURE__ */ o.jsx(
    g,
    {
      ...x,
      value: r,
      disabled: i,
      MenuProps: c,
      endAdornment: m
    }
  ) });
};
export {
  n as BadgeSelect
};
