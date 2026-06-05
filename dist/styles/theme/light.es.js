import { CurrentTheme as y } from "../constants.es.js";
import { alpha as o } from "@mui/material/styles";
import { referenceLightThemePalette as t, referenceDarkThemePalette as p } from "./reference-palettes.es.js";
const b = (a = t, r = p) => {
  var d, l, c, s, n;
  return {
    palette: {
      ...a,
      mode: y.Light,
      shadow: {
        primary: "0px 3px 40px 2px rgba(0, 0, 0, 0.14), 0px 8px 10px 1px rgba(0, 0, 0, 0.14)"
      },
      background: {
        ...a.background,
        background1: a.lightShades.primary,
        // #FFFFFF
        background2: a.lightShades.primary,
        // #FFFFFF
        background3: a.lightShades.primary,
        // #FFFFFF
        background4: (d = a.background) == null ? void 0 : d.primary,
        // #FBFBFB
        background5: a.darkShades.fifth,
        //'#F4F4F4',
        background6: a.darkShades.fifth,
        //'#F4F4F4',
        background7: a.darkShades.fifth,
        //'#F4F4F4',
        background8: a.darkShades.quaternary,
        // '#E4E4E4',
        background9: a.darkShades.quaternary,
        // '#E4E4E4',
        background10: a.darkShades.quaternary,
        // '#E4E4E4',
        background11: o(a.lightShades.primary, 0.5),
        // '#FFFFFF80',
        background12: o(a.darkShades.quaternary, 0.5),
        //'#A6A6A680',
        background13: o(a.primaryColors.accent, 0.1),
        //'#FF4D140D',
        background14: a.lightShades.primary,
        // #FFFFFF
        background15: a.lightShades.primary,
        // #FFFFFF
        background16: a.darkShades.fifth
        //'#F4F4F4',
      },
      primaryColors: {
        ...a.primaryColors
      },
      border: {
        border1: o(a.darkShades.primary, 0.08),
        // #00000014
        border2: o(a.darkShades.primary, 0.08),
        // #0000001
        border3: o(a.darkShades.primary, 0.1),
        // '#0000001A',/
        border4: o(a.lightShades.primary, 0.2),
        // '#FFFFFF33',
        border5: a.darkShades.quaternary,
        // '#E4E4E4',
        input: o(a.darkShades.secondary, 0.14),
        //'#5C5C5C24',
        input2: o(a.darkShades.secondary, 0.24),
        //'#5C5C5C3D',
        input3: o(a.darkShades.secondary, 0.24),
        //'#5C5C5C3D',
        input4Error: a.alerts.alert
        //'#FF4949',
      },
      text: {
        ...a.text,
        text1: (l = a.grey) == null ? void 0 : l[50],
        //'#000000',
        text2: (c = a.grey) == null ? void 0 : c[50],
        //'#000000',
        text3: (s = a.grey) == null ? void 0 : s[50],
        //'#000000',
        text4: a.darkShades.secondary,
        // '#5C5C5C',
        text5: a.darkShades.secondary,
        // '#5C5C5C',
        text6: a.darkShades.secondary,
        // '#5C5C5C',
        text7: a.darkShades.secondary,
        // '#5C5C5C',
        text8: a.darkShades.ternary,
        // '#A6A6A6',
        text9: a.darkShades.quaternary,
        // '#E4E4E4',
        search: a.darkShades.ternary,
        // '#A6A6A6',
        titleInput: "#656565",
        //'#656565',
        textInput40: o(a.darkShades.secondary, 0.4),
        //'#5C5C5C66',
        textInput60: o(a.darkShades.secondary, 0.6),
        //'#5C5C5C99',
        textInput80: o(a.darkShades.secondary, 0.8),
        //'#5C5C5CCC',
        textInput802: o(a.darkShades.secondary, 0.8)
        //'#5C5C5CCC',
      },
      // new colors:
      darkening: {
        darkening: o(a.darkShades.ternary, 0.2)
        //'#A6A6A633',
      },
      base: {
        color1: a.lightShades.primary,
        // #FFFFFF
        color2: a.lightShades.primary,
        // #FFFFFF
        color3: a.darkShades.ternary,
        //'#A6A6A6',
        color4: r.darkShades.ternary,
        //'#232323',
        color5: r.darkShades.secondary,
        //'#171717',
        color6: a.primaryColors.accent,
        //'#678AFB',
        hover: a.primaryColors.accentHover,
        //'#3262FF',
        color61: o(a.primaryColors.accent, 0.1),
        //'#678AFB1A',
        color62: o(a.primaryColors.accent, 0.1),
        //'#678AFB1A',
        color63: o(a.primaryColors.accent, 0.2),
        //'#678AFB33',
        color7: a.alerts.alert,
        //'#FF4949',
        color7_20: o(a.alerts.alert, 0.2),
        //'#FF494933',
        color8: ((n = a.grey) == null ? void 0 : n[50]) || "#000000",
        //'#000000',
        color21: a.alerts.warning,
        //'#FFF614',
        color9: "#01BE11",
        color10: "#D9D9D9",
        color11: "#7AD9E9",
        color12: "#586DEC",
        color16: r.additionalColors.lightBlue,
        //'#85EDFF',
        color16_20: o(r.additionalColors.lightBlue, 0.2),
        //'#84EDFF33',
        color17: "#50E0DB",
        color22: "#AB6CFF",
        color19: a.additionalColors.purple,
        //'#CCA6FF',
        color19_20: o(a.additionalColors.purple, 0.2),
        //'#CCA6FF33',
        color15: "#FFA6E3",
        color13: "#E85A2D",
        color14: "#FFB114",
        color18: "#FFE314",
        color20: "#CCFF5F",
        color23: r.additionalColors.blue,
        //'#5F75FF',
        colorNewGreen: r.alerts.success,
        // '#55E050'
        colorNewGreen_20: o(r.alerts.success, 0.2),
        // '#55E05033'
        colorNewYellow: a.additionalColors.yellow,
        // '#FFD262'
        colorNewYellow_20: o(a.additionalColors.yellow, 0.2),
        // '#FFD26233'
        colorNewGrey: r.lightShades.ternary,
        //'#BABABA',
        colorNewGrey_20: o(r.lightShades.ternary, 0.2),
        //'#BABABA33',
        colorNewRed: "#F74C14",
        colorNewYellow01: "#F9FB82",
        colorNewYellow02: "#FDD061",
        colorNewYellow03: "#CFBA46"
      }
    }
  };
};
export {
  b as lightTheme
};
