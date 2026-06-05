import { jsxRuntimeExports as t } from "../../../jsx-runtime-BgepH7Pb.js";
import { useState as s, useEffect as D } from "react";
import { BaseWidget as v } from "../base-widget/index.es.js";
import { useTheme as B, Box as c, Stack as n } from "@mui/material";
import "../../select-indicator/style.es.js";
import "../../avatar/styles.es.js";
import { Typography as l } from "../../typogrpahy/index.es.js";
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
import "@mui/material/MenuItem";
import "../../image-preview/style.es.js";
import "@mui/material/Stack";
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
import "../list-widget/styles.es.js";
import "../base-widget/styles.es.js";
import "../common/color-list-item/styles.es.js";
import "../stacked-line-widget/styles.es.js";
import "../../widgets/base-widget/style.es.js";
import "../../widgets/quantitative-list-widget/style.es.js";
import "../../widgets/progress-widget/style.es.js";
import "../../widgets/list-with-icons-widget/style.es.js";
import "@mui/material/styles";
import "../../../style-7NNmyytw.js";
import { VerticalBarChart as w } from "../../charts/vertical-bar-chart/index.es.js";
import "../../charts/zoom-bar-chart/index.es.js";
import "../../charts/stacked-chart/index.es.js";
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
const cr = (h) => {
  const x = B(), { collection: r, valueKey: i, maxItems: E = 10, chartStyles: m, nameKey: e, unit: d, listLabel: u, ...f } = h, [j, g] = s([]), [y, b] = s([]);
  return D(() => {
    if (!(r != null && r.length)) return;
    const o = [], a = [];
    r.sort((p, C) => Number(C[i]) - Number(p[i])).forEach((p) => {
      o.push(p[i]), a.push(p[e]);
    }), g(o), b(a);
  }, [r, e, i]), /* @__PURE__ */ t.jsx(v, { ...f, children: /* @__PURE__ */ t.jsx(c, { children: /* @__PURE__ */ t.jsxs(n, { direction: "row", gap: 4, justifyContent: "space-between", children: [
    /* @__PURE__ */ t.jsxs(n, { gap: 1, children: [
      /* @__PURE__ */ t.jsx(l, { color: "text.text8", variant: "overline", children: u }),
      y.map((o) => /* @__PURE__ */ t.jsx(l, { color: "text.text1", variant: "caption12", children: o }, o))
    ] }),
    /* @__PURE__ */ t.jsx(
      c,
      {
        sx: {
          ...m,
          width: "auto",
          aspectRatio: "2/1"
        },
        children: /* @__PURE__ */ t.jsx(
          w,
          {
            unit: d,
            color: x.palette.base.color6,
            style: m,
            data: j
          }
        )
      }
    )
  ] }) }) });
};
export {
  cr as VerticalBarsChartWidget
};
