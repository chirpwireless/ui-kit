import { styled as t, Stack as r, Box as e } from "@mui/material";
import "./jsx-runtime-BgepH7Pb.js";
import "./_legacy/select-indicator/style.es.js";
import "./_legacy/avatar/styles.es.js";
import { Typography as p } from "./_legacy/typogrpahy/index.es.js";
import "./_legacy/link/index.es.js";
import "./_legacy/skeleton/index.es.js";
import "./_legacy/theme-switch/index.es.js";
import "./_legacy/button/style.es.js";
import "./_legacy/loader/style.es.js";
import "./_legacy/icon-button/style.es.js";
import "./_legacy/action-dialog/style.es.js";
import "./_legacy/alerts-count/index.es.js";
import "./_legacy/autocomplete/index.es.js";
import "./_legacy/text-field/style.es.js";
import "./_legacy/badge/index.es.js";
import "./_legacy/modal/style.es.js";
import "./_legacy/confirmation-dialog/style.es.js";
import "react-i18next";
import "./_legacy/dialog/index.es.js";
import "./_legacy/select/style.es.js";
import "./_legacy/search-input/style.es.js";
import "react";
import "@mui/material/MenuItem";
import "./_legacy/image-preview/style.es.js";
import "@mui/material/Stack";
import "@mui/x-tree-view";
import "./_legacy/tree-select/style.es.js";
import "./_legacy/phone-field/styles.es.js";
import "./_legacy/tabs/style.es.js";
import "./_legacy/map/base-map.es.js";
import "./index-BaJfFTpt.js";
import "./mapbox-gl-BQVqFhjB.js";
import "./moment-DHYryOIn.js";
import "./_legacy/map/constance.es.js";
import "./_legacy/list-item/index.es.js";
import "./_legacy/checkbox/style.es.js";
import "./_legacy/table/components/skeleton-rows.es.js";
import "./_legacy/table/components/table-head/style.es.js";
import "@tanstack/react-table";
import "./_legacy/table/style.es.js";
import "./_legacy/table/components/table-component/style.es.js";
import "@tanstack/react-virtual";
/* empty css                          */
import "./_legacy/range-picker/styles.es.js";
import "./_legacy/range-picker/constants.es.js";
import "./_legacy/range-picker/components/range-picker-menu.es.js";
import "./_legacy/toast/style.es.js";
import "./_legacy/toast-container/style.es.js";
import "./_legacy/switch/style.es.js";
import "./_legacy/charts/line-chart/index.es.js";
import "./_legacy/charts/donut-chart/index.es.js";
import "./_legacy/old-widgets/base-widget/styles.es.js";
import "./_legacy/old-widgets/list-widget/styles.es.js";
import "./_legacy/old-widgets/common/color-list-item/styles.es.js";
import "./_legacy/old-widgets/stacked-line-widget/styles.es.js";
import "./_legacy/widgets/base-widget/style.es.js";
import "./_legacy/widgets/quantitative-list-widget/style.es.js";
import "./_legacy/widgets/progress-widget/style.es.js";
import "./_legacy/widgets/list-with-icons-widget/style.es.js";
import "@mui/material/styles";
import "./_legacy/charts/vertical-bar-chart/index.es.js";
import "./_legacy/charts/zoom-bar-chart/index.es.js";
import "./_legacy/charts/stacked-chart/index.es.js";
import "./_legacy/user-popup/style.es.js";
import "./_legacy/logout/style.es.js";
import "./_legacy/language-selector/style.es.js";
import "./_legacy/map/drawable-map/index.es.js";
import "./_legacy/color-picker/clickable-color-cell/style.es.js";
import "./_legacy/color-picker/style.es.js";
import "./_legacy/map/trip-map/index.es.js";
import "./_legacy/cards/base-card/styles.es.js";
import "./_legacy/cards/column-card/styles.es.js";
import "./_legacy/cards/card-with-image/styles.es.js";
import "./lodash-DMsYbvmB.js";
import "./_legacy/chirp-widgets/current-value/style.es.js";
import "./_legacy/chirp-widgets/widget-base/style.es.js";
import "./_legacy/chirp-widgets/flat-linear-graph/index.es.js";
import "./_legacy/chirp-widgets/widget-base/components/settings/value-boundaries-form/style.es.js";
import "./_legacy/widget-toggle/style.es.js";
import "./_legacy/filter-item/style.es.js";
import "./_legacy/chirp-widgets/progress-bar/style.es.js";
import "./_legacy/system-widget/style.es.js";
import "./_legacy/dropdown-multiselect/dropdown-button/style.es.js";
import "./_legacy/dropdown-multiselect/dropdown-content/style.es.js";
import "./_legacy/badge-select/style.es.js";
import "./_legacy/slider/style.es.js";
import "./_legacy/map/helpers/geocoding-client.es.js";
import "./_legacy/select-with-search/style.es.js";
const Et = t(r)(() => ({
  flexDirection: "row",
  gap: "16px",
  maxWidth: "359px",
  flexWrap: "wrap",
  rowGap: "8px",
  minHeight: "40px",
  alignItems: "flex-start"
})), Ft = t(r)(() => ({
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
  whiteSpace: "nowrap"
})), Jt = t(r)(() => ({
  width: "4px",
  height: "4px",
  borderRadius: "50%"
})), Kt = t(p)(({ theme: o }) => ({
  color: o.palette.text.textInput80
})), Mt = t(r)(() => ({
  flexDirection: "row",
  gap: "16px",
  maxWidth: "359px",
  flexWrap: "wrap",
  rowGap: "8px",
  minHeight: "40px",
  alignItems: "flex-start"
})), Nt = t(r)(() => ({
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
  whiteSpace: "nowrap"
})), Ot = t(r)(() => ({
  width: "4px",
  height: "4px",
  borderRadius: "50%"
})), Qt = t(p)(({ theme: o }) => ({
  color: o.palette.text.textInput80
})), Ut = t("label")`
    display: flex;
    width: max-content;
    cursor: pointer;
    align-items: center;
`, Vt = t("input")`
    position: absolute;
    width: 0;
    height: 0;
    border: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
`, Xt = t("span")(({ theme: o }) => ({
  width: "32px",
  height: "18px",
  position: "relative",
  borderRadius: "20px",
  border: "1px solid",
  borderColor: o.palette.base.color6
})), Zt = t(e)(({ checked: o, theme: i }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  height: "12px",
  width: "12px",
  left: o ? "15px" : "3px",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: i.palette.base.color6,
  borderColor: i.palette.base.color6,
  borderRadius: "17px",
  transition: "0.4s"
})), _t = t(p)(({ theme: o }) => ({
  marginRight: "12px",
  userSelect: "none",
  fontSize: "12px",
  color: o.palette.text.text7
}));
export {
  Xt as Checkmark,
  Zt as CheckmarkPin,
  Jt as Dot,
  Ot as Dot$1,
  Vt as HiddenInput,
  Kt as Label,
  Qt as Label$1,
  _t as Label$2,
  Ft as LabelAndDotWrapper,
  Nt as LabelAndDotWrapper$1,
  Et as LegendContainer,
  Mt as LegendContainer$1,
  Ut as Toggle
};
