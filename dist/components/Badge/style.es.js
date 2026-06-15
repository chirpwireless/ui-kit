import { styled as t, Box as o } from "@mui/material";
import { CurrentTheme as i } from "../../styles/constants.es.js";
import { chirpPalette as n } from "../../theme/palette.es.js";
const p = t(o)(({ theme: e }) => {
  const r = n(e);
  return {
    borderRadius: "12px",
    padding: "4px 12px",
    background: e.palette.mode === i.Dark ? r.neutral.grey1 : r.neutral.white,
    border: `1px solid ${r.borders.primary}`,
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "center",
    width: "min-content",
    color: r.neutral.primary
  };
}), m = t(o)(({ theme: e }) => {
  const r = n(e);
  return {
    borderRadius: "12px",
    padding: "4px 12px",
    background: e.palette.mode === i.Dark ? r.neutral.grey1 : r.neutral.white,
    border: `1px solid ${r.borders.primary}`,
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "center",
    width: "min-content",
    color: r.neutral.primary,
    float: "left",
    margin: "2px"
  };
});
export {
  p as Badge,
  m as SimpleBadge
};
