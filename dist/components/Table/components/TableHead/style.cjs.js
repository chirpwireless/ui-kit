"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@mui/material"),o=require("../../../../styles/constants.cjs.js"),a=require("../../../../theme/palette.cjs.js"),n=e.styled(e.TableRow)`
    &:hover,
    &.MuiTableRow-hover:hover {
        background-color: transparent !important;
        td,
        th {
            background-color: transparent !important;
        }
    }
`,l=e.styled(e.TableCell)(({theme:r})=>{const t=a.chirpPalette(r);return{padding:"18px 12px 12px",backgroundColor:"transparent !important",borderBottom:`1px solid ${r.palette.mode===o.CurrentTheme.Dark,t.borders.primary}`,fontSize:"14px",lineHeight:"20px",fontFamily:r.typography.fontFamily,color:t.neutral.grey3,whiteSpace:"nowrap",cursor:"auto",letterSpacing:"0.2px",[r.breakpoints.down("lg")]:{padding:"8px 6px"}}});exports.HeadCell=l;exports.Row=n;
