Object.defineProperty(exports,Symbol.toStringTag,{value:`Module`});const e=require("../../theme/palette.cjs.js");let t=require("@mui/material");var n=(e,t)=>{let n=e.match(/^rgba?\(([^)]+)\)$/);if(!n)return e;let[r,i,a]=n[1].split(`,`).map(e=>e.trim());return`rgba(${r}, ${i}, ${a}, ${t})`},r=(0,t.styled)(`label`)`
    display: flex;
    width: max-content;
    align-items: center;
`,i=(0,t.styled)(`label`)`
    display: flex;
    width: max-content;
    align-items: flex-start;
    flex-direction: column;
`,a=(0,t.styled)(`input`)`
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
`,o=(0,t.styled)(`span`,{shouldForwardProp:e=>e!==`isLoading`&&e!==`checked`&&e!==`disabled`})(({theme:t,isLoading:r,checked:i,disabled:a})=>{let o=e.chirpPalette(t);return{width:`32px`,height:`18px`,position:`relative`,borderRadius:`20px`,border:`1px solid`,borderColor:r?`${n(o.neutral.primary,.5)}`:a?o.borders.primary:i?o.primaryColors.accent:o.borders.primary}}),s=(0,t.styled)(t.Box,{shouldForwardProp:e=>e!==`isLoading`&&e!==`disabled`})(({checked:t,isLoading:n,disabled:r,theme:i})=>{let a=e.chirpPalette(i);return{display:`flex`,justifyContent:`center`,alignItems:`center`,position:`absolute`,height:`12px`,width:n?`16px`:`12px`,left:t?`15px`:`3px`,top:`50%`,transform:`translateY(-50%)`,background:n?a.neutral.primary:r?a.neutral.grey4:t?a.primaryColors.accent:a.neutral.grey4,borderRadius:`17px`,transition:`0.4s`}}),c=(0,t.styled)(t.Typography,{shouldForwardProp:e=>e!==`checked`&&e!==`disabled`})(({theme:t,checked:n,disabled:r})=>{let i=e.chirpPalette(t);return{marginRight:`12px`,userSelect:`none`,fontSize:`12px`,minWidth:`60px`,color:r?i.neutral.grey4:n?i.neutral.primary:i.neutral.grey4}});exports.Checkmark=o,exports.CheckmarkPin=s,exports.HiddenInput=a,exports.Label=c,exports.MobileToggle=i,exports.Toggle=r;