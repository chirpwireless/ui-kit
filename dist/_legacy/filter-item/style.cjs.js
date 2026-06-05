"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("@mui/material"),p=t.styled("label")`
    display: flex;
    width: max-content;
    cursor: pointer;
`,i=t.styled("input")`
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
`,l=t.styled(t.Box,{shouldForwardProp:e=>e!=="hasAdornment"})(({theme:e,checked:o,size:r,variant:a,hasAdornment:n})=>({border:"1px solid",borderColor:e.palette.background.background4,background:e.palette.background.background4,borderRadius:"3px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",userSelect:"none",color:e.palette.text.text1,width:"max-content","&:hover, &:focus-visible":{borderColor:e.palette.border.border3},...r==="small"&&{maxHeight:"26px",fontSize:"12px",lineHeight:"20px",padding:n?"3px 2px 3px 12px":"3px 12px"},...r==="big"&&{maxHeight:"32px",fontSize:"13px",lineHeight:"20px",padding:"6px 16px"},...o&&{color:e.palette.base.color1,background:a==="primary"?e.palette.base.color6:e.palette.text.text4,borderColor:a==="primary"?e.palette.base.color6:e.palette.text.text4}})),d=t.styled(t.Box)(({theme:e,checked:o})=>({padding:"2px 4px",background:o?e.palette.background.background5:e.palette.primary.dark,color:o?e.palette.base.color1:e.palette.text.text1,borderRadius:"3px",marginLeft:"10px",fontSize:"12px",lineHeight:"18px",minWidth:"22px",maxHeight:"22px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}));exports.Adornment=d;exports.Checkmark=l;exports.HiddenInput=i;exports.Label=p;
