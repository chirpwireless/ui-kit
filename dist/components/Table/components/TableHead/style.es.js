import { styled as t, TableRow as a, TableCell as e } from "@mui/material";
import { CurrentTheme as p } from "../../../../styles/constants.es.js";
import { chirpPalette as n } from "../../../../theme/palette.es.js";
const c = t(a)`
    &:hover,
    &.MuiTableRow-hover:hover {
        background-color: transparent !important;
        td,
        th {
            background-color: transparent !important;
        }
    }
`, m = t(e)(({ theme: r }) => {
  const o = n(r);
  return {
    padding: "18px 12px 12px",
    backgroundColor: "transparent !important",
    borderBottom: `1px solid ${r.palette.mode === p.Dark, o.borders.primary}`,
    fontSize: "14px",
    lineHeight: "20px",
    fontFamily: r.typography.fontFamily,
    color: o.neutral.grey3,
    whiteSpace: "nowrap",
    cursor: "auto",
    letterSpacing: "0.2px",
    [r.breakpoints.down("lg")]: {
      padding: "8px 6px"
    }
  };
});
export {
  m as HeadCell,
  c as Row
};
