import { jsxRuntimeExports as e } from "../../../jsx-runtime-BgepH7Pb.js";
import { Stack as r } from "@mui/material";
import { IconButton as s } from "../../icon-button/index.es.js";
import { SvgStar as f, SvgTrash as g } from "../../../trash-Cwz6c14Z.js";
import { Wrapper as h, Title as v, WidgetTypeName as y, StyledStarFilled as S } from "./styles.es.js";
import { useTranslation as u } from "react-i18next";
const z = ({
  title: a,
  type: n,
  isFavorite: l,
  wrapperSxProps: o,
  customHeader: i,
  onFavoriteClick: d,
  onDeleteClick: c,
  deleteDisabled: x = !1,
  makeFavouriteDisabled: m = !1,
  children: p
}) => {
  const { t } = u("uiKit", { keyPrefix: "widgets" }), j = t(n === "period" ? "Data for period" : "Online data");
  return /* @__PURE__ */ e.jsx(h, { sx: o, children: /* @__PURE__ */ e.jsxs(r, { gap: 2, children: [
    i || /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs(r, { direction: "row", justifyContent: "space-between", alignItems: "flex-start", children: [
      /* @__PURE__ */ e.jsxs(r, { gap: 1, children: [
        /* @__PURE__ */ e.jsx(v, { variant: "title12", children: a }),
        /* @__PURE__ */ e.jsx(y, { variant: "overline", children: j })
      ] }),
      /* @__PURE__ */ e.jsxs(r, { direction: "row", children: [
        /* @__PURE__ */ e.jsx(
          s,
          {
            disabled: m,
            size: "small",
            variant: "gray",
            onClick: d,
            children: l ? /* @__PURE__ */ e.jsx(S, {}) : /* @__PURE__ */ e.jsx(f, {})
          }
        ),
        /* @__PURE__ */ e.jsx(
          s,
          {
            disabled: x,
            size: "small",
            variant: "gray",
            onClick: c,
            children: /* @__PURE__ */ e.jsx(g, {})
          }
        )
      ] })
    ] }) }),
    p
  ] }) });
};
export {
  z as BaseWidget
};
