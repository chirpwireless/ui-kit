Object.defineProperty(exports,Symbol.toStringTag,{value:`Module`});const e=require("../../../../styles/constants.cjs.js"),t=require("../../../../theme/palette.cjs.js");let n=require("@mui/material");var r=(0,n.styled)(n.TableRow)`
    &:hover,
    &.MuiTableRow-hover:hover {
        background-color: transparent !important;
        td,
        th {
            background-color: transparent !important;
        }
    }
`,i=(0,n.styled)(n.TableCell)(({theme:n})=>{let r=t.chirpPalette(n);return{padding:`18px 12px 12px`,backgroundColor:`transparent !important`,borderBottom:`1px solid ${n.palette.mode,e.CurrentTheme.Dark,r.borders.primary}`,fontSize:`14px`,lineHeight:`20px`,fontFamily:n.typography.fontFamily,color:r.neutral.grey3,whiteSpace:`nowrap`,cursor:`auto`,letterSpacing:`0.2px`,[n.breakpoints.down(`lg`)]:{padding:`8px 6px`}}});exports.HeadCell=i,exports.Row=r;