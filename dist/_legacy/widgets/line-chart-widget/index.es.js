import { jsxRuntimeExports as t } from "../../../jsx-runtime-BgepH7Pb.js";
import { BaseWidget as x } from "../base-widget/index.es.js";
import { useTheme as g } from "@mui/material";
import "../../select-indicator/style.es.js";
import "../../avatar/styles.es.js";
import { Typography as j } from "../../typogrpahy/index.es.js";
import "../../link/index.es.js";
import "../../skeleton/index.es.js";
import "../../theme-switch/index.es.js";
import "../../button/style.es.js";
import "../../loader/style.es.js";
import "../../icon-button/style.es.js";
import "../../action-dialog/style.es.js";
import "../../alerts-count/index.es.js";
import "../../autocomplete/index.es.js";
import "../../text-field/style.es.js";
import "../../badge/index.es.js";
import "../../modal/style.es.js";
import "../../confirmation-dialog/style.es.js";
import "react-i18next";
import "../../dialog/index.es.js";
import "../../select/style.es.js";
import "../../search-input/style.es.js";
import { useMemo as b } from "react";
import "@mui/material/MenuItem";
import "../../image-preview/style.es.js";
import f from "@mui/material/Stack";
import "@mui/x-tree-view";
import "../../tree-select/style.es.js";
import "../../phone-field/styles.es.js";
import "../../tabs/style.es.js";
import "../../map/base-map.es.js";
import "../../../index-BaJfFTpt.js";
import "../../../mapbox-gl-BQVqFhjB.js";
import "../../../moment-DHYryOIn.js";
import "../../map/constance.es.js";
import "../../list-item/index.es.js";
import "../../checkbox/style.es.js";
import "../../table/components/skeleton-rows.es.js";
import "../../table/components/table-head/style.es.js";
import "../../table/style.es.js";
import "../../table/components/table-component/style.es.js";
/* empty css                                 */
import "../../range-picker/styles.es.js";
import "../../range-picker/constants.es.js";
import "../../range-picker/components/range-picker-menu.es.js";
import "../../toast/style.es.js";
import "../../toast-container/style.es.js";
import "../../switch/style.es.js";
import "../../charts/line-chart/index.es.js";
import "../../charts/donut-chart/index.es.js";
import "../../old-widgets/base-widget/styles.es.js";
import "../../old-widgets/list-widget/styles.es.js";
import "../../old-widgets/common/color-list-item/styles.es.js";
import "../../old-widgets/stacked-line-widget/styles.es.js";
import "../quantitative-list-widget/style.es.js";
import "../progress-widget/style.es.js";
import "../list-with-icons-widget/style.es.js";
import "@mui/material/styles";
import { LabelAndDotWrapper as u, Dot as y, Label as C, LegendContainer as D } from "../../../style-7NNmyytw.js";
import "../../charts/vertical-bar-chart/index.es.js";
import "../../charts/zoom-bar-chart/index.es.js";
import { StackedChart as L } from "../../charts/stacked-chart/index.es.js";
import "../../user-popup/style.es.js";
import "../../logout/style.es.js";
import "../../language-selector/style.es.js";
import "../../map/drawable-map/index.es.js";
import "../../color-picker/clickable-color-cell/style.es.js";
import "../../color-picker/style.es.js";
import "../../map/trip-map/index.es.js";
import "../../cards/base-card/styles.es.js";
import "../../cards/column-card/styles.es.js";
import "../../cards/card-with-image/styles.es.js";
import "../../../lodash-DMsYbvmB.js";
import "../../chirp-widgets/current-value/style.es.js";
import "../../chirp-widgets/widget-base/style.es.js";
import "../../chirp-widgets/flat-linear-graph/index.es.js";
import "../../chirp-widgets/widget-base/components/settings/value-boundaries-form/style.es.js";
import "../../widget-toggle/style.es.js";
import "../../filter-item/style.es.js";
import "../../chirp-widgets/progress-bar/style.es.js";
import "../../system-widget/style.es.js";
import "../../dropdown-multiselect/dropdown-button/style.es.js";
import "../../dropdown-multiselect/dropdown-content/style.es.js";
import "../../badge-select/style.es.js";
import "../../slider/style.es.js";
import "../../map/helpers/geocoding-client.es.js";
import "../../select-with-search/style.es.js";
const mr = (e) => {
  const a = g(), { chartData: o, selectedItems: i, colors: r, chartStyles: n, emptyFallbackMsg: s, xAxisData: l, ...c } = e, m = o.length > 0, h = b(() => i.map((p, d) => /* @__PURE__ */ t.jsxs(u, { children: [
    /* @__PURE__ */ t.jsx(y, { bgcolor: r[d % r.length] }),
    /* @__PURE__ */ t.jsx(C, { variant: "caption12", children: p.label })
  ] }, p.label)), [i, r]);
  return /* @__PURE__ */ t.jsx(
    x,
    {
      ...c,
      renderSubHeader: m ? /* @__PURE__ */ t.jsx(D, { children: h }) : null,
      renderMainContent: m ? /* @__PURE__ */ t.jsx(
        L,
        {
          colors: r,
          style: { width: "100%", height: "100%", ...n },
          data: o,
          xAxisData: l
        }
      ) : /* @__PURE__ */ t.jsx(f, { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ t.jsx(j, { variant: "subtitle1", color: a.palette.text.text8, children: s }) })
    }
  );
};
export {
  mr as LineChartWidget
};
