import { jsxRuntimeExports as r } from "../../../jsx-runtime-BgepH7Pb.js";
import { TitleTypography as m } from "./styles.es.js";
import { BaseCard as s } from "../base-card/index.es.js";
import { Stack as t, Box as d } from "@mui/material";
import { ImagePreview as l } from "../../image-preview/index.es.js";
import { Typography as c } from "../../typogrpahy/index.es.js";
import { useTranslation as f } from "react-i18next";
const C = ({
  title: e,
  subTitle: i,
  image: o,
  contentChildren: p,
  containerSx: a,
  headerSx: x,
  contentSx: h
}) => {
  const { t: n } = f("uiKit");
  return /* @__PURE__ */ r.jsx(
    s,
    {
      containerSx: a,
      headerSx: { ...x, minHeight: "56px", width: "100%" },
      contentSx: h,
      headerChildren: /* @__PURE__ */ r.jsxs(t, { flexDirection: "row", gap: "16px", alignItems: "center", children: [
        /* @__PURE__ */ r.jsx(d, { children: /* @__PURE__ */ r.jsx(
          l,
          {
            previewUrl: o ?? "",
            title: n("Photo"),
            borderRadius: "8px",
            width: "48px",
            height: "48px"
          }
        ) }),
        /* @__PURE__ */ r.jsxs(t, { sx: { overflow: "hidden", whiteSpace: "nowrap", width: "100%" }, children: [
          /* @__PURE__ */ r.jsx(m, { variant: "title16", children: e }),
          /* @__PURE__ */ r.jsx(c, { variant: "title12", color: "text.text8", children: i })
        ] })
      ] }),
      contentChildren: p
    }
  );
};
export {
  C as CardWithImage
};
