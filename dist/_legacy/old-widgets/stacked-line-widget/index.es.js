import { jsxRuntimeExports as o } from "../../../jsx-runtime-BgepH7Pb.js";
import { useState as k, useMemo as b, useEffect as B } from "react";
import { BaseWidget as P } from "../base-widget/index.es.js";
import { useTheme as T, Box as w, Stack as s } from "@mui/material";
import "../../select-indicator/style.es.js";
import "../../avatar/styles.es.js";
import "../../typogrpahy/index.es.js";
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
import { useTranslation as W } from "react-i18next";
import "../../dialog/index.es.js";
import { Select as H } from "../../select/index.es.js";
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
import { Checkbox as O } from "../../checkbox/index.es.js";
import "../../table/components/skeleton-rows.es.js";
import "../../table/components/table-head/style.es.js";
import "@tanstack/react-table";
import "../../table/style.es.js";
import "../../table/components/table-component/style.es.js";
import "@tanstack/react-virtual";
/* empty css                                 */
import "../../range-picker/styles.es.js";
import "date-fns/locale";
import "../../range-picker/constants.es.js";
import "../../range-picker/components/range-picker-menu.es.js";
import "../../toast/style.es.js";
import "../../toast-container/style.es.js";
import "../../switch/style.es.js";
import "../../charts/line-chart/index.es.js";
import "../../charts/donut-chart/index.es.js";
import "../list-widget/styles.es.js";
import { BaseWidgetCustomHeader as A } from "../base-widget/base-widget-custom-header.es.js";
import { ColorListItem as E } from "../common/color-list-item/list-item.es.js";
import "../../widgets/base-widget/style.es.js";
import "../../widgets/quantitative-list-widget/style.es.js";
import "../../widgets/progress-widget/style.es.js";
import "../../widgets/list-with-icons-widget/style.es.js";
import "@mui/material/styles";
import "../../../style-B2KorHsf.js";
import "../../charts/vertical-bar-chart/index.es.js";
import "../../charts/zoom-bar-chart/index.es.js";
import { StackedChart as K } from "../../charts/stacked-chart/index.es.js";
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
import { arrayToMap as L } from "../../../helpers/array-to-map.es.js";
import { StyledMenuItem as V } from "./styles.es.js";
import { CurrentItemContent as D } from "./current-item-content.es.js";
const Br = (I) => {
  var j, v;
  const { t: u } = W("uiKit", { keyPrefix: "widgets" }), S = T(), {
    collection: l,
    colors: e,
    dataKey: a,
    selectOptions: m,
    maxItems: N = 10,
    chartStyles: d,
    idKey: c,
    title: x,
    ...y
  } = I, [p, h] = k(null), [i, f] = k([]), M = (t) => {
    t.sort(), f(t);
  }, g = b(() => i != null && i.length ? l.filter((r) => i.includes(r[c])).map((r) => r[a]) : l.map((r) => r[a]), [i, l, a, c]), n = b(() => L(m, "value"), [m]);
  return B(() => {
    if (!m) return;
    const t = m.map((r) => r.value);
    f(t);
  }, [m]), /* @__PURE__ */ o.jsx(
    P,
    {
      title: x,
      ...y,
      customHeader: p !== null ? /* @__PURE__ */ o.jsx(
        A,
        {
          typeText: x,
          title: (j = n[p]) == null ? void 0 : j.label,
          onBackClick: () => h(null)
        }
      ) : void 0,
      children: p !== null ? /* @__PURE__ */ o.jsx(
        D,
        {
          data: [g[p]],
          color: e[p % e.length],
          itemName: (v = n[i[p]]) == null ? void 0 : v.label,
          chartStyles: d
        }
      ) : /* @__PURE__ */ o.jsx(w, { children: /* @__PURE__ */ o.jsxs(s, { direction: "row", gap: 4, children: [
        /* @__PURE__ */ o.jsx(
          K,
          {
            colors: e,
            style: { width: "100%", height: "100%", paddingTop: "34px", ...d },
            data: g
          }
        ),
        /* @__PURE__ */ o.jsxs(s, { children: [
          /* @__PURE__ */ o.jsx(
            H,
            {
              variant: "outlined",
              name: "vendor",
              multiple: !0,
              sx: {
                mt: 0,
                border: "none",
                backgroundColor: S.palette.background.background2,
                height: "30px",
                "& .MuiInputBase-input.MuiOutlinedInput-input": {
                  padding: "5.5px 12px"
                }
              },
              defaultValue: [],
              value: i,
              renderValue: () => u("All"),
              placeholder: u("All"),
              MenuProps: { PaperProps: { sx: { maxHeight: "300px" } } },
              onChange: (t) => M(t.target.value),
              children: m.map((t) => /* @__PURE__ */ o.jsxs(V, { value: t.value, children: [
                t.label,
                /* @__PURE__ */ o.jsx(
                  O,
                  {
                    checked: i.find((r) => r === t.value) !== void 0
                  }
                )
              ] }, t.value))
            }
          ),
          /* @__PURE__ */ o.jsx(s, { gap: 1, mt: 3, width: "220px", children: i == null ? void 0 : i.map((t, r) => {
            var C;
            return /* @__PURE__ */ o.jsx(
              E,
              {
                onClick: () => h(r),
                name: (C = n[t]) == null ? void 0 : C.label,
                value: null,
                color: e[r % e.length]
              },
              t
            );
          }) })
        ] })
      ] }) })
    }
  );
};
export {
  Br as StackedLineChartWidget
};
