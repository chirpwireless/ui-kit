"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("@mui/material"),l=require("../../theme/palette.cjs.js"),d=(e,a)=>{const i=e.match(/^rgba?\(([^)]+)\)$/);if(!i)return e;const[r,t,o]=i[1].split(",").map(s=>s.trim());return`rgba(${r}, ${t}, ${o}, ${a})`},c=n.styled("label")`
    display: flex;
    width: max-content;
    align-items: center;
`,p=n.styled("label")`
    display: flex;
    width: max-content;
    align-items: flex-start;
    flex-direction: column;
`,h=n.styled("input")`
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
`,u=n.styled("span",{shouldForwardProp:e=>e!=="isLoading"&&e!=="checked"&&e!=="disabled"})(({theme:e,isLoading:a,checked:i,disabled:r})=>{const t=l.chirpPalette(e);return{width:"32px",height:"18px",position:"relative",borderRadius:"20px",border:"1px solid",borderColor:a?`${d(t.neutral.primary,.5)}`:r?t.borders.primary:i?t.primaryColors.accent:t.borders.primary}}),g=n.styled(n.Box,{shouldForwardProp:e=>e!=="isLoading"&&e!=="disabled"})(({checked:e,isLoading:a,disabled:i,theme:r})=>{const t=l.chirpPalette(r);return{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",height:"12px",width:a?"16px":"12px",left:e?"15px":"3px",top:"50%",transform:"translateY(-50%)",background:a?t.neutral.primary:i?t.neutral.grey4:e?t.primaryColors.accent:t.neutral.grey4,borderRadius:"17px",transition:"0.4s"}}),m=n.styled(n.Typography,{shouldForwardProp:e=>e!=="checked"&&e!=="disabled"})(({theme:e,checked:a,disabled:i})=>{const r=l.chirpPalette(e);return{marginRight:"12px",userSelect:"none",fontSize:"12px",minWidth:"60px",color:i?r.neutral.grey4:a?r.neutral.primary:r.neutral.grey4}});exports.Checkmark=u;exports.CheckmarkPin=g;exports.HiddenInput=h;exports.Label=m;exports.MobileToggle=p;exports.Toggle=c;
