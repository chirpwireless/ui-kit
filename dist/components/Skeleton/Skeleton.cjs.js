"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("../../jsx-runtime-BRMkMA8J.cjs"),n=require("@mui/material"),s=require("react"),c=require("../../styles/constants.cjs.js"),u=require("../../theme/palette.cjs.js"),d=n.keyframes`
  0% {
    transform: translateX(calc(-1 * var(--diagonal-length))) rotate(-15deg);
  }
  100% {
    transform: translateX(var(--diagonal-length)) rotate(-15deg);
  }
`,g=n.styled(n.Box)(({theme:t})=>{const e=u.chirpPalette(t);return{position:"relative",width:"100%",height:"100%",background:`linear-gradient(240.16deg, ${t.palette.mode===c.CurrentTheme.Dark?e.neutral.grey1:e.neutral.white} 0%, transparent 100%)`,color:e.neutral.white,overflow:"hidden","--diagonal-length":"0px"}}),h=n.styled("div")`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 13px;
    height: 140%;
    background-color: currentColor;
    transform-origin: bottom left;
    opacity: 0.1;
    animation: ${d} 1s linear infinite;
    filter: blur(20px);
`,f=({sx:t})=>{const e=s.useRef(null),r=()=>{if(e.current){const o=e.current.offsetWidth,i=e.current.offsetHeight,l=Math.sqrt(o*o+i*i);e.current.style.setProperty("--diagonal-length",`${l}px`)}};return s.useEffect(()=>(r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[]),a.jsxRuntimeExports.jsx(g,{ref:e,sx:t,children:a.jsxRuntimeExports.jsx(h,{})})};exports.Skeleton=f;
