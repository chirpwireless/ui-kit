import { jsxRuntimeExports as o } from "../../../jsx-runtime-BgepH7Pb.js";
import { useCallback as v } from "react";
import { BaseWidget as C } from "../base-widget/index.es.js";
import { LegendContainer$1 as D, LabelAndDotWrapper$1 as L, Dot$1 as W, Label$1 as w } from "../../../style-CvP40jkz.js";
import { useTheme as F, Stack as T } from "@mui/material";
import "../../select-indicator/style.es.js";
import "../../avatar/styles.es.js";
import { Typography as k } from "../../typogrpahy/index.es.js";
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
import { useTranslation as z } from "react-i18next";
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
import "@tanstack/react-table";
import "../../table/style.es.js";
import "../../table/components/table-component/style.es.js";
import "@tanstack/react-virtual";
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
import "../../charts/vertical-bar-chart/index.es.js";
import { ZoomBarChart as B } from "../../charts/zoom-bar-chart/index.es.js";
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
const fo = (d) => {
  const { legendItems: n, data: i, legendContainerSx: x, emptyFallbackMsg: h, ...y } = d, t = F(), { t: p, i18n: a } = z("uiKit", { keyPrefix: "widgets" }), s = i.categories.length && i.series.length, f = v(
    (r) => {
      var c, g;
      const { seriesName: $, value: u, name: b, color: e } = r, S = typeof e == "object" && "colorStops" in e ? (g = (c = e.colorStops) == null ? void 0 : c[0]) == null ? void 0 : g.color : e, j = `font-size: ${String(t.typography.caption12.fontSize)}px; font-weight: ${String(t.typography.caption12.fontWeight)}; color: ${t.palette.text.textInput80};`, l = `font-size: ${String(t.typography.overline.fontSize)}px; font-weight: ${String(t.typography.overline.fontWeight)}; color: ${t.palette.text.text1};`;
      return `
                <div>
                    <div style="display: flex; align-items: center; margin-bottom: 8px;">
                        <span style="color: ${S}; margin-right: 5px;">●</span>
                        <span style="${j}">${$}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px; ${l}">
                        <span>${p("Fuel")}:</span>
                        <span>${Number(u).toLocaleString("en-US", { maximumFractionDigits: 2 })} ${p("L")}</span>
                    </div>
                    <div style="${l}">
                        ${(() => {
        const m = new Date(b);
        return `${m.getDate()} ${m.toLocaleString(a.language, { month: "long" })} ${m.getFullYear()}`;
      })()}
                    </div>
                </div>
            `;
    },
    [a.language, p, t]
  );
  return /* @__PURE__ */ o.jsx(
    C,
    {
      ...y,
      renderSubHeader: s && /* @__PURE__ */ o.jsx(D, { sx: { ...x }, children: n.map((r) => /* @__PURE__ */ o.jsxs(L, { children: [
        /* @__PURE__ */ o.jsx(W, { bgcolor: r.color }),
        /* @__PURE__ */ o.jsx(w, { variant: "caption12", children: r.label })
      ] }, r.id)) }),
      renderMainContent: s ? /* @__PURE__ */ o.jsx(
        B,
        {
          categories: i.categories,
          seriesData: i.series,
          legendItems: n,
          tooltipFormatter: f
        }
      ) : /* @__PURE__ */ o.jsx(T, { width: "100%", height: "100%", justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ o.jsx(k, { variant: "subtitle1", color: t.palette.text.text8, children: h }) })
    }
  );
};
export {
  fo as BarChartWidget
};
