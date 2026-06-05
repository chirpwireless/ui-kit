import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as a, FormControl as f, InputAdornment as h } from "@mui/material";
import { InputLabel as d } from "../input-label/index.es.js";
import { Select as g } from "./style.es.js";
import { SvgCloseIcon as j } from "../../close-icon-EPoneKrB.js";
import { IconButton as u } from "../icon-button/index.es.js";
const C = ({
  label: c,
  labelId: x,
  disabled: r,
  value: i,
  onClear: e,
  endAdornment: n,
  MenuProps: t,
  ...m
}) => {
  var l;
  const s = a(), p = {
    ...t,
    MenuListProps: {
      ...t == null ? void 0 : t.MenuListProps,
      sx: {
        padding: 0,
        ...(l = t == null ? void 0 : t.MenuListProps) == null ? void 0 : l.sx
      }
    }
  };
  return /* @__PURE__ */ o.jsxs(f, { fullWidth: !0, children: [
    /* @__PURE__ */ o.jsx(
      d,
      {
        labelId: x,
        label: c,
        className: m.error ? "Mui-error" : void 0,
        sx: {
          opacity: r ? 0.3 : 1,
          "&.MuiInputLabel-shrink": {
            transform: "none",
            left: 0,
            color: s.palette.text.titleInput,
            ...s.typography.caption12
          }
        }
      }
    ),
    /* @__PURE__ */ o.jsx(
      g,
      {
        ...m,
        value: i,
        disabled: r,
        MenuProps: p,
        endAdornment: n || (e && i ? /* @__PURE__ */ o.jsx(h, { sx: { marginRight: "16px" }, position: "end", children: /* @__PURE__ */ o.jsx(u, { variant: "gray", onClick: e, children: /* @__PURE__ */ o.jsx(j, {}) }) }) : null)
      }
    )
  ] });
};
export {
  C as Select
};
