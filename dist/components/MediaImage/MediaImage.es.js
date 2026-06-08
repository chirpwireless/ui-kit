import { jsxRuntimeExports as i } from "../../jsx-runtime-BgepH7Pb.js";
import { Skeleton as h } from "@mui/material";
import { useState as f, useTransition as L } from "react";
import { Wrapper as t } from "./style.es.js";
const H = ({ src: o, alt: g, fallback: n, skeletonProps: a, style: j, ...e }) => {
  const [s, r] = f(!0), [c, d] = f(!1), [v, m] = L(), x = s || v, u = {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    ...a == null ? void 0 : a.sx
  }, y = () => {
    m(() => {
      r(!1), d(!1);
    });
  }, E = () => {
    m(() => {
      r(!1), d(!0);
    });
  };
  return c && n ? /* @__PURE__ */ i.jsx(t, { children: n }) : c ? /* @__PURE__ */ i.jsx(t, { children: /* @__PURE__ */ i.jsx(
    h,
    {
      variant: (a == null ? void 0 : a.variant) || "rectangular",
      animation: "pulse",
      sx: {
        ...u,
        opacity: 0.5
      }
    }
  ) }) : /* @__PURE__ */ i.jsxs(t, { children: [
    x && /* @__PURE__ */ i.jsx(
      h,
      {
        variant: (a == null ? void 0 : a.variant) || "rectangular",
        animation: (a == null ? void 0 : a.animation) !== void 0 ? a.animation : "wave",
        sx: {
          ...u,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1
        }
      }
    ),
    /* @__PURE__ */ i.jsx(
      "img",
      {
        src: o,
        alt: g,
        onLoad: y,
        onError: E,
        style: {
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          opacity: x ? 0 : 1,
          transition: "opacity 0.3s ease",
          ...j
        },
        ...e
      }
    )
  ] });
};
export {
  H as MediaImage
};
