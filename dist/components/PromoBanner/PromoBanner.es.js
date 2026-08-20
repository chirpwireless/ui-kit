import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { Stack as s, Typography as m } from "@mui/material";
import { memo as j } from "react";
import { ShareIcon as I } from "../../icons/ShareIcon/index.es.js";
import { Button as g } from "../Button/Button.es.js";
import { MediaImage as y } from "../MediaImage/MediaImage.es.js";
import { Reference as k } from "../Reference/index.es.js";
import { Banner as B, Media as w } from "./style.es.js";
const l = 18, z = j(
  ({ title: n, subtitle: e, imageSrc: t, imageAlt: c, imageSlot: d, linkLabel: p, linkHref: x, isExternalLink: o, linkIcon: h, sx: f }) => {
    const a = d ?? (t ? /* @__PURE__ */ r.jsx(y, { src: t, alt: c ?? n }) : null), i = h ?? (o ? /* @__PURE__ */ r.jsx(I, { width: l, height: l }) : null), u = o ? { target: "_blank", rel: "noreferrer" } : {};
    return /* @__PURE__ */ r.jsxs(B, { sx: f, children: [
      a ? /* @__PURE__ */ r.jsx(w, { children: a }) : null,
      /* @__PURE__ */ r.jsxs(s, { sx: { flex: "1 0 0", minWidth: 0, gap: "8px", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ r.jsxs(s, { sx: { gap: "4px", width: "100%", wordBreak: "break-word" }, children: [
          /* @__PURE__ */ r.jsx(m, { variant: "h3", sx: { color: "neutral.primary" }, children: n }),
          e ? /* @__PURE__ */ r.jsx(m, { variant: "body1", sx: { color: "neutral.grey5" }, children: e }) : null
        ] }),
        /* @__PURE__ */ r.jsxs(
          g,
          {
            variant: "tertiary",
            size: "medium",
            hasIcon: !!i,
            component: k,
            href: x,
            isExternalLink: o,
            ...u,
            children: [
              i,
              p
            ]
          }
        )
      ] })
    ] });
  }
);
export {
  z as PromoBanner
};
