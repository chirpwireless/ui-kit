import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { Menu as m, MenuItem as h, Typography as x } from "@mui/material";
import { useState as g, cloneElement as b } from "react";
import { CurrentTheme as C } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
const j = ({
  actions: c,
  children: i,
  transformOrigin: s = { vertical: "top", horizontal: "left" }
}) => {
  const [n, l] = g(null), d = (o) => {
    o.stopPropagation();
    const r = o.currentTarget.getBoundingClientRect();
    l({
      top: r.bottom,
      left: r.right
    });
    const p = i.props;
    p.onClick && p.onClick(o);
  }, a = () => {
    l(null);
  }, u = (o) => (r) => {
    r.stopPropagation(), o.onClick(), a();
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    b(i, {
      onClick: d
    }),
    /* @__PURE__ */ e.jsx(
      m,
      {
        open: !!n,
        onClose: a,
        anchorReference: "anchorPosition",
        anchorPosition: n ? { top: n.top, left: n.left } : void 0,
        transformOrigin: s,
        PaperProps: {
          sx: {
            backgroundColor: (o) => o.palette.mode === C.Dark ? t(o).neutral.grey1 : t(o).neutral.white,
            border: (o) => `1px solid ${t(o).borders.primary}`,
            borderRadius: "12px",
            boxShadow: (o) => `0 8px 24px ${t(o).shadow ?? "rgba(0, 0, 0, 0.14)"}`,
            backdropFilter: "blur(10px)",
            backgroundImage: "none"
          }
        },
        sx: {
          "& .MuiPaper-root": {
            minWidth: "160px"
          },
          "& .MuiMenuItem-root": {
            gap: "8px",
            padding: "8px 16px",
            "&:hover": {
              backgroundColor: "action.hover"
            }
          }
        },
        children: c.map((o, r) => /* @__PURE__ */ e.jsxs(
          h,
          {
            disabled: o.disabled,
            onClick: u(o),
            sx: {
              color: "neutral.primary",
              "&:hover": {
                backgroundColor: "action.hover"
              }
            },
            children: [
              o.icon,
              /* @__PURE__ */ e.jsx(x, { variant: "caption", color: "neutral.primary", children: o.label })
            ]
          },
          r
        ))
      }
    )
  ] });
};
export {
  j as ActionsMenu
};
