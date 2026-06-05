import { alpha as g } from "@mui/material";
import { SelectIndicator as c } from "../../_legacy/select-indicator/index.es.js";
import "../../jsx-runtime-BgepH7Pb.js";
import "../../_legacy/avatar/styles.es.js";
import "../../_legacy/typogrpahy/index.es.js";
import "../../_legacy/link/index.es.js";
import "../../_legacy/skeleton/index.es.js";
import "../../_legacy/theme-switch/index.es.js";
import "../../_legacy/button/style.es.js";
import "../../_legacy/loader/style.es.js";
import "../../_legacy/icon-button/style.es.js";
import "../../_legacy/action-dialog/style.es.js";
import "../../_legacy/alerts-count/index.es.js";
import "../../_legacy/autocomplete/index.es.js";
import "../../_legacy/text-field/style.es.js";
import "../../_legacy/badge/index.es.js";
import "../../_legacy/modal/style.es.js";
import "../../_legacy/confirmation-dialog/style.es.js";
import "react-i18next";
import "../../_legacy/dialog/index.es.js";
import "../../_legacy/select/style.es.js";
import "../../_legacy/search-input/style.es.js";
import "react";
import "@mui/material/MenuItem";
import "../../_legacy/image-preview/style.es.js";
import "@mui/material/Stack";
import "@mui/x-tree-view";
import "../../_legacy/tree-select/style.es.js";
import "../../_legacy/phone-field/styles.es.js";
import "../../_legacy/tabs/style.es.js";
import "../../_legacy/map/base-map.es.js";
import "../../index-BaJfFTpt.js";
import "../../mapbox-gl-BQVqFhjB.js";
import "../../moment-DHYryOIn.js";
import "../../_legacy/map/constance.es.js";
import "../../_legacy/list-item/index.es.js";
import "../../_legacy/checkbox/style.es.js";
import "../../_legacy/table/components/skeleton-rows.es.js";
import "../../_legacy/table/components/table-head/style.es.js";
import "../../_legacy/table/style.es.js";
import "../../_legacy/table/components/table-component/style.es.js";
/* empty css                              */
import "../../_legacy/range-picker/styles.es.js";
import "../../_legacy/range-picker/constants.es.js";
import "../../_legacy/range-picker/components/range-picker-menu.es.js";
import "../../_legacy/toast/style.es.js";
import "../../_legacy/toast-container/style.es.js";
import "../../_legacy/switch/style.es.js";
import "../../_legacy/charts/line-chart/index.es.js";
import "../../_legacy/charts/donut-chart/index.es.js";
import "../../_legacy/old-widgets/base-widget/styles.es.js";
import "../../_legacy/old-widgets/list-widget/styles.es.js";
import "../../_legacy/old-widgets/common/color-list-item/styles.es.js";
import "../../_legacy/old-widgets/stacked-line-widget/styles.es.js";
import "../../_legacy/widgets/base-widget/style.es.js";
import "../../_legacy/widgets/quantitative-list-widget/style.es.js";
import "../../_legacy/widgets/progress-widget/style.es.js";
import "../../_legacy/widgets/list-with-icons-widget/style.es.js";
import "@mui/material/styles";
import "../../style-7NNmyytw.js";
import "../../_legacy/charts/vertical-bar-chart/index.es.js";
import "../../_legacy/charts/zoom-bar-chart/index.es.js";
import "../../_legacy/charts/stacked-chart/index.es.js";
import "../../_legacy/user-popup/style.es.js";
import "../../_legacy/logout/style.es.js";
import "../../_legacy/language-selector/style.es.js";
import "../../_legacy/map/drawable-map/index.es.js";
import "../../_legacy/color-picker/clickable-color-cell/style.es.js";
import "../../_legacy/color-picker/style.es.js";
import "../../_legacy/map/trip-map/index.es.js";
import "../../_legacy/cards/base-card/styles.es.js";
import "../../_legacy/cards/column-card/styles.es.js";
import "../../_legacy/cards/card-with-image/styles.es.js";
import "../../lodash-DMsYbvmB.js";
import "../../_legacy/chirp-widgets/current-value/style.es.js";
import "../../_legacy/chirp-widgets/widget-base/style.es.js";
import "../../_legacy/chirp-widgets/flat-linear-graph/index.es.js";
import "../../_legacy/chirp-widgets/widget-base/components/settings/value-boundaries-form/style.es.js";
import "../../_legacy/widget-toggle/style.es.js";
import "../../_legacy/filter-item/style.es.js";
import "../../_legacy/chirp-widgets/progress-bar/style.es.js";
import "../../_legacy/system-widget/style.es.js";
import "../../_legacy/dropdown-multiselect/dropdown-button/style.es.js";
import "../../_legacy/dropdown-multiselect/dropdown-content/style.es.js";
import "../../_legacy/badge-select/style.es.js";
import "../../_legacy/slider/style.es.js";
import "../../_legacy/map/helpers/geocoding-client.es.js";
import "../../_legacy/select-with-search/style.es.js";
const No = (o) => {
  var r, i, m, p, t, n, d, s, u;
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body, #__next": {
          height: "100%",
          "& ::-webkit-scrollbar": {
            width: "2px",
            height: "2px"
          },
          "& ::-webkit-scrollbar-track": {
            backgroundColor: (r = o == null ? void 0 : o.background) == null ? void 0 : r.background6
          },
          "& ::-webkit-scrollbar-thumb": {
            borderRadius: "31px",
            backgroundColor: (i = o == null ? void 0 : o.text) == null ? void 0 : i.search
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          ".MuiButton-endIcon": {
            marginLeft: "4px"
          },
          ".MuiButton-startIcon": {
            marginRight: "4px"
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          svg: {
            width: "20px",
            height: "20px"
          }
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: c
      },
      styleOverrides: {
        icon: {
          top: "50%",
          transform: "translateY(-50%)",
          transition: "transform 200ms",
          color: (m = o == null ? void 0 : o.text) == null ? void 0 : m.secondary
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
          backgroundImage: "none",
          minWidth: "544px",
          padding: "32px"
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: "24px",
          lineHeight: "29px",
          letterSpacing: "0.3px",
          padding: 0,
          marginBottom: "12px"
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          fontFamily: "Simplon Mono",
          fontSize: "14px",
          lineHeight: "160%",
          letterSpacing: "0.25px",
          textTransform: "uppercase",
          maxWidth: "330px",
          textAlign: "center",
          padding: 0,
          marginBottom: "40px"
        }
      }
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          fontFamily: "Simplon Mono",
          fontSize: "14px",
          lineHeight: "160%",
          letterSpacing: "0.25px",
          textTransform: "uppercase"
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          flexDirection: "column",
          padding: 0,
          gap: "16px",
          width: "75%"
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 0,
          background: (p = o == null ? void 0 : o.background) == null ? void 0 : p.background15,
          padding: "8px 16px",
          fontSize: "14px",
          lineHeight: "20px",
          color: (t = o == null ? void 0 : o.text) == null ? void 0 : t.primary
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: o == null ? void 0 : o.border.input
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: "2px 16px 2px 16px",
          height: "36px",
          "&:hover": {
            backgroundColor: ((n = o == null ? void 0 : o.base) == null ? void 0 : n.color61) && g((d = o == null ? void 0 : o.base) == null ? void 0 : d.color61, 0.1),
            color: o == null ? void 0 : o.base.color6
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiInputAdornment-root": {
            width: "20px",
            height: "20px"
          }
        }
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        slotProps: {
          paper: {
            sx: {
              backgroundColor: (s = o == null ? void 0 : o.background) == null ? void 0 : s.background2
            }
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: (u = o == null ? void 0 : o.background) == null ? void 0 : u.background2,
          backgroundImage: "none",
          marginTop: "4px"
        }
      }
    }
  };
};
export {
  No as createComponents
};
