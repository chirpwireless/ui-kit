Object.defineProperty(exports,Symbol.toStringTag,{value:`Module`});const e=require("../../styles/constants.cjs.js"),t=require("../../theme/palette.cjs.js");let n=require("react"),r=require("@mui/material"),i=require("react/jsx-runtime");var a=r.keyframes`
  0% {
    transform: translateX(calc(-1 * var(--diagonal-length))) rotate(-15deg);
  }
  100% {
    transform: translateX(var(--diagonal-length)) rotate(-15deg);
  }
`,o=(0,r.styled)(r.Box)(({theme:n})=>{let r=t.chirpPalette(n);return{position:`relative`,width:`100%`,height:`100%`,background:`linear-gradient(240.16deg, ${n.palette.mode===e.CurrentTheme.Dark?r.neutral.grey1:r.neutral.white} 0%, transparent 100%)`,color:r.neutral.white,overflow:`hidden`,"--diagonal-length":`0px`}}),s=(0,r.styled)(`div`)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 13px;
    height: 140%;
    background-color: currentColor;
    transform-origin: bottom left;
    opacity: 0.1;
    animation: ${a} 1s linear infinite;
    filter: blur(20px);
`,c=({sx:e})=>{let t=(0,n.useRef)(null),r=()=>{if(t.current){let e=t.current.offsetWidth,n=t.current.offsetHeight,r=Math.sqrt(e*e+n*n);t.current.style.setProperty(`--diagonal-length`,`${r}px`)}};return(0,n.useEffect)(()=>(r(),window.addEventListener(`resize`,r),()=>{window.removeEventListener(`resize`,r)}),[]),(0,i.jsx)(o,{ref:t,sx:e,children:(0,i.jsx)(s,{})})};exports.Skeleton=c;