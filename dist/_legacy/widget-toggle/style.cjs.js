"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@mui/material"),r=e.styled("label")`
    display: flex;
    width: max-content;
    cursor: pointer;
    align-items: center;
`,i=e.styled("label")`
    display: flex;
    width: max-content;
    cursor: pointer;
    align-items: flex-start;
    flex-direction: column;
`,a=e.styled("input")`
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
`,n=e.styled("span",{shouldForwardProp:t=>t!=="isLoading"&&t!=="checked"})(({theme:t,isLoading:l,checked:o})=>({width:"32px",height:"18px",position:"relative",borderRadius:"20px",border:"1px solid",borderColor:l?`${e.alpha(t.palette.text.text4,.5)}`:o?t.palette.base.color6:t.palette.text.text4})),p=e.styled(e.Box,{shouldForwardProp:t=>t!=="isLoading"})(({checked:t,isLoading:l,theme:o})=>({display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",height:"12px",width:l?"16px":"12px",left:t?"15px":"3px",top:"50%",transform:"translateY(-50%)",backgroundColor:l?o.palette.text.text4:t?o.palette.base.color6:o.palette.text.text7,borderColor:l?o.palette.text.text4:t?o.palette.base.color6:o.palette.text.text7,borderRadius:"17px",transition:"0.4s"})),s=e.styled(e.Typography,{shouldForwardProp:t=>t!=="checked"})(({theme:t,checked:l})=>({marginRight:"12px",userSelect:"none",fontSize:"12px",color:l?t.palette.text.text7:t.palette.text.text4}));exports.Checkmark=n;exports.CheckmarkPin=p;exports.HiddenInput=a;exports.Label=s;exports.WidgetMobileToggle=i;exports.WidgetToggle=r;
