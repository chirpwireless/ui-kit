import { styled as n, Stack as c } from "@mui/material";
import { CurrentTheme as o } from "../../styles/constants.es.js";
import { chirpPalette as p } from "../../theme/palette.es.js";
const a = (t, r) => {
  const e = t.match(/^rgba?\(([^)]+)\)$/);
  if (!e) return t;
  const [i, d, l] = e[1].split(",").map((s) => s.trim());
  return `rgba(${i}, ${d}, ${l}, ${r})`;
}, y = n(c)(({ theme: t }) => {
  const r = p(t), e = t.palette.mode === o.Dark ? r.neutral.grey1 : r.neutral.white;
  return {
    ".rdrCalendarWrapper": {
      color: r.neutral.primary,
      background: "transparent",
      fontSize: "12px",
      width: "100%",
      maxWidth: "264px"
    },
    ".rdrDateDisplayWrapper": {
      background: "transparent"
    },
    ".rdrDateRangeWrapper": {
      background: "transparent"
    },
    ".rdrDateInput": {
      width: "132px"
    },
    ".rdrDateDisplay": {
      margin: "0",
      display: "flex",
      gap: "16px",
      justifyContent: "flex-start"
    },
    ".rdrDateDisplayItem": {
      borderRadius: "4px",
      backgroundColor: "transparent",
      boxShadow: "0 1px 2px 0 rgba(35, 57, 66, 0.21)",
      border: "1px solid transparent",
      flexGrow: "unset",
      minWidth: "100px"
    },
    ".rdrDateDisplayItem + .rdrDateDisplayItem": {
      margin: "0"
    },
    ".rdrDateDisplayItem input": {
      cursor: "pointer",
      height: "36px",
      lineHeight: "20px",
      border: "none",
      fontSize: "13px",
      borderRadius: "8px",
      backgroundColor: e,
      width: "100%",
      color: r.neutral.primary,
      fontFamily: t.typography.fontFamily
    },
    ".rdrMonthAndYearWrapper": {
      alignItems: "center",
      paddingTop: "0",
      marginTop: "28px",
      marginBottom: "12px"
    },
    ".rdrMonthAndYearPickers": {
      display: "none"
    },
    ".rdrMonthAndYearPickers select": {
      "-moz-appearance": "none",
      appearance: "none",
      "-webkit-appearance": "none",
      border: "0",
      background: "transparent",
      padding: "10px 30px 10px 10px",
      borderRadius: "4px",
      outline: "0",
      color: r.neutral.primary,
      backgroundPosition: "right 8px center",
      cursor: "pointer",
      textAlign: "center"
    },
    ".rdrMonthAndYearPickers select:hover": {
      backgroundColor: r.primaryColors.accentLight2
    },
    ".rdrMonthPicker, .rdrYearPicker": {
      margin: "0 5px"
    },
    ".rdrNextPrevButton": {
      display: "block",
      width: "28px",
      height: "28px",
      margin: "0",
      padding: "0",
      border: "0",
      borderRadius: "5px",
      background: e,
      i: {
        display: "block",
        width: "0",
        height: "0",
        padding: "0",
        textAlign: "center",
        margin: "auto",
        transform: "translate(-3px, 0px)",
        position: "relative"
      }
    },
    ".rdrNextPrevButton:hover": {
      backgroundColor: r.primaryColors.accentLight2,
      i: {
        border: "none"
      }
    },
    ".rdrPprevButton i": {
      "&:after": {
        content: '""',
        position: "absolute",
        top: "-3px",
        left: "-1px",
        width: "5px",
        height: "5px",
        border: `solid ${r.neutral.primary}`,
        borderWidth: "0 2px 2px 0",
        transform: "rotate(135deg)"
      }
    },
    ".rdrNextButton i": {
      "&:after": {
        content: '" "',
        position: "absolute",
        top: "-3px",
        left: "0",
        width: "5px",
        height: "5px",
        border: `solid ${r.neutral.primary}`,
        borderWidth: "0 2px 2px 0",
        transform: "rotate(-45deg)"
      }
    },
    ".rdrWeekDays": {
      marginBottom: "8px",
      ".rdrWeekDay": {
        color: r.neutral.grey4
      }
    },
    ".rdrMonth": {
      padding: "0",
      position: "relative",
      "&:first-of-type": {
        ".rdrMonthName": {
          position: "absolute",
          width: "176px",
          left: "41px",
          top: "-35px !important",
          color: r.neutral.primary,
          textAlign: "center"
        }
      },
      "&:last-of-type": {
        ".rdrMonthName": {
          position: "absolute",
          width: "176px",
          right: "50px",
          top: "-35px",
          color: r.neutral.primary,
          textAlign: "center"
        }
      }
    },
    ".rdrMonth .rdrWeekDays": {
      padding: "0"
    },
    ".rdrMonths.rdrMonthsHorizontal": {
      gap: "16px"
    },
    ".rdrDays": {
      gap: "2px"
    },
    ".rdrDay": {
      background: e,
      boxSizing: "inherit",
      width: "calc((100% / 7) - 2px)",
      height: "28px",
      position: "relative",
      font: "inherit",
      cursor: "pointer",
      borderRadius: "3px",
      border: `1px solid ${e}`,
      "&.rdrDayPassive": {
        opacity: "0"
      },
      "&.rdrDayHovered": {
        border: `1px solid ${r.primaryColors.accent}`
      },
      ".rdrDayNumber span": {
        color: r.neutral.primary
      },
      "&.rdrDayDisabled:not(.rdrDayToday)": {
        cursor: "not-allowed",
        background: a(e, 0.3),
        borderColor: "transparent",
        ".rdrDayNumber span": {
          color: a(r.neutral.primary, 0.3)
        }
      },
      "&.rdrDayDisabled": {
        backgroundColor: "transparent"
      }
    },
    ".rdrDayToday .rdrDayNumber span::after": {
      background: `${r.primaryColors.accent} !important`
    },
    ".rdrDayPassive .rdrDayNumber span": {
      color: r.neutral.grey4
    },
    ".rdrMonthName": {
      color: r.neutral.primary
    },
    // Override default hover effect for Calendar (non-range) mode
    ".rdrCalendarWrapper:not(.rdrDateRangeWrapper) .rdrDayHovered .rdrDayNumber::after": {
      borderColor: r.primaryColors.accent
    },
    ".rdrDayStartPreview, .rdrDayInPreview, .rdrDayEndPreview": {
      background: a(r.primaryColors.accent, 0.2),
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: "none",
      zIndex: 1,
      borderRadius: "3px"
    },
    ".rdrSelected, .rdrInRange": {
      background: a(r.primaryColors.accent, 0.2),
      position: "absolute",
      top: "0",
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "3px"
    },
    ".rdrStartEdge, .rdrEndEdge": {
      background: r.primaryColors.accent,
      position: "absolute",
      top: "0",
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "3px"
    }
  };
}), b = n("input")(({ theme: t }) => {
  const r = p(t);
  return {
    padding: "8px 16px",
    cursor: "pointer",
    height: "36px",
    lineHeight: "20px",
    border: "none",
    fontSize: "13px",
    borderRadius: "8px",
    backgroundColor: t.palette.mode === o.Dark ? r.neutral.grey1 : r.neutral.white,
    width: "100%",
    color: r.neutral.primary,
    fontFamily: t.typography.fontFamily,
    "&::-webkit-calendar-picker-indicator": {
      filter: t.palette.mode === o.Dark ? "invert(0.7)" : "none"
    }
  };
});
export {
  b as MobileDateInput,
  y as RangePickerWrapper
};
