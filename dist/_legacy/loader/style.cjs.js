"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@mui/material"),r=require("../typogrpahy/index.cjs.js"),l=e.keyframes`
  0% {
    opacity: 0.05;
  }
  14.28% {
    opacity: 0.15;
  }
  28.56% {
    opacity: 0.25;
  }
  42.84% {
    opacity: 0.35;
  }
  57.12% {
    opacity: 0.45;
  }
  71.4% {
    opacity: 0.7;
  }
  85.68% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`,a={small:{element:{width:"1px",height:"1.5px",translate:"translate(0, 5px)"},span:{width:"24px",height:"24px"}},large:{element:{width:"1.5px",height:"7.5px",translate:"translate(0, 11px)"},span:{width:"40px",height:"40px"}}},p=e.styled("div")(({theme:t,index:o,size:i,color:n})=>({position:"absolute",top:"50%",left:"50%",width:a[i].element.width,height:a[i].element.height,backgroundColor:n??t.palette.base.color6,borderRadius:"1.5px",animation:`${l} 1.2s infinite`,transformOrigin:"center",transform:`translate(-50%, -50%) rotate(${o*45}deg) ${a[i].element.translate}`,animationDelay:`${o/8*1.2}s`})),s=e.styled(e.Stack)(({text:t})=>({position:"relative",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",flexDirection:t?"row":"column",flexGrow:1})),d=e.styled("span")(({size:t})=>({position:"relative",display:"inline-block",width:a[t].span.width,height:a[t].span.height})),c=e.styled(r.Typography)(({theme:t})=>({marginLeft:"20px",color:t.palette.text.text1}));exports.LoaderContainer=s;exports.LoaderElement=p;exports.LoaderSpan=d;exports.LoaderText=c;
