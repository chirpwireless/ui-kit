import { styled as e, Box as a, Stack as i, alpha as d } from "@mui/material";
import { CurrentTheme as p } from "../../styles/constants.es.js";
import { chirpPalette as t } from "../../theme/palette.es.js";
const b = e(a)(({ theme: r }) => ({
  width: "100%",
  border: `1px solid ${t(r).borders.primary}`,
  padding: "40px",
  borderRadius: "12px",
  height: "100%",
  maxWidth: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  overflow: "auto",
  [r.breakpoints.down("lg")]: {
    marginTop: "8px",
    "&.non-scrollable": {
      overflow: "hidden"
    }
  },
  [r.breakpoints.down("md")]: {
    padding: "24px 16px"
  }
})), g = e(i)(({ theme: r }) => {
  const o = t(r);
  return {
    background: `linear-gradient(180deg, ${r.palette.mode === p.Dark ? o.neutral.grey1 : o.neutral.white} 0%, ${d(r.palette.primary.main, 0.1)} 100%)`,
    width: "100%",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: `inset 0px 0px 0px 1px ${o.borders.primary}`,
    border: `1px solid ${o.borders.primary}`,
    [r.breakpoints.down("sm")]: {
      padding: "12px"
    }
  };
});
export {
  b as SettingsCard,
  g as SettingsContainer
};
