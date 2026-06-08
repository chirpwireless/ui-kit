"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("@mui/material"),p=require("../../styles/constants.cjs.js"),l=require("../../theme/palette.cjs.js"),d=t.styled("label")`
    display: flex;
    width: max-content;
    cursor: pointer;
`,s=t.styled("input")`
    position: absolute;
    width: 0;
    height: 0;
    border: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
`,c=t.styled(t.Box,{shouldForwardProp:e=>e!=="hasAdornment"})(({theme:e,checked:o,size:n,variant:a,hasAdornment:i})=>{const r=l.chirpPalette(e);return{border:"1px solid",borderColor:r.borders.primary,background:e.palette.mode===p.CurrentTheme.Dark?r.neutral.grey1:r.neutral.white,borderRadius:"3px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",userSelect:"none",color:r.neutral.primary,width:"max-content","&:hover, &:focus-visible":{borderColor:r.borders.secondary},...n==="small"&&{maxHeight:"26px",fontSize:"12px",lineHeight:"20px",padding:i?"3px 2px 3px 12px":"3px 12px"},...n==="big"&&{maxHeight:"32px",fontSize:"13px",lineHeight:"20px",padding:"6px 16px"},...o&&{color:e.palette.secondary.main,background:a==="primary"?r.primaryColors.accent:r.primaryColors.accentLight2??r.primaryColors.accentLight,borderColor:r.primaryColors.accent}}}),x=t.styled(t.Box)(({theme:e,checked:o})=>({padding:"2px 4px",background:o?e.palette.secondary.main:e.palette.primary.dark,color:o?e.palette.secondary.contrastText:e.palette.secondary.main,borderRadius:"3px",marginLeft:"10px",fontSize:"12px",lineHeight:"18px",minWidth:"22px",maxHeight:"22px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}));exports.Adornment=x;exports.Checkmark=c;exports.HiddenInput=s;exports.Label=d;
