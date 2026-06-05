"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("../../jsx-runtime-BRMkMA8J.cjs"),t=require("@mui/material"),s=require("react"),g=t.keyframes`
  0% {
    transform: translateX(calc(-1 * var(--diagonal-length))) rotate(-15deg);
  }
  100% {
    transform: translateX(var(--diagonal-length)) rotate(-15deg);
  }
`,l=t.styled(t.Box)(({theme:{palette:n}})=>({position:"relative",width:"100%",height:"100%",background:`linear-gradient(240.16deg, ${n.background.background6} 0%, rgba(53, 53, 53, 0) 100%)`,overflow:"hidden","--diagonal-length":"0px"})),c=t.styled("div")`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 13px;
    height: 140%;
    background-color: white;
    transform-origin: bottom left;
    opacity: 0.1;
    animation: ${g} 1s linear infinite;
    filter: blur(20px);
`,u=({sx:n})=>{const e=s.useRef(null),o=()=>{if(e.current){const r=e.current.offsetWidth,i=e.current.offsetHeight,d=Math.sqrt(r*r+i*i);e.current.style.setProperty("--diagonal-length",`${d}px`)}};return s.useEffect(()=>(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[]),a.jsxRuntimeExports.jsx(l,{ref:e,sx:n,children:a.jsxRuntimeExports.jsx(c,{})})};exports.Skeleton=u;exports.SkeletonContainer=l;exports.SkeletonDiagonalStripe=c;
