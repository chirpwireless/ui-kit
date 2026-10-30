Object.defineProperty(exports,Symbol.toStringTag,{value:`Module`});const e=require("../../styles/constants.cjs.js"),t=require("../../theme/palette.cjs.js");let n=require("@mui/material");var r=(0,n.styled)(`label`)`
    display: flex;
    width: max-content;
    cursor: pointer;
`,i=(0,n.styled)(`input`)`
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
`,a=(0,n.styled)(n.Box,{shouldForwardProp:e=>e!==`hasAdornment`})(({theme:n,checked:r,size:i,variant:a,hasAdornment:o})=>{let s=t.chirpPalette(n);return{border:`1px solid`,borderColor:s.borders.primary,background:n.palette.mode===e.CurrentTheme.Dark?s.neutral.grey1:s.neutral.white,borderRadius:`3px`,cursor:`pointer`,display:`flex`,flexDirection:`row`,alignItems:`center`,userSelect:`none`,color:s.neutral.primary,width:`max-content`,"&:hover, &:focus-visible":{borderColor:s.borders.secondary},...i===`small`&&{maxHeight:`26px`,fontSize:`12px`,lineHeight:`20px`,padding:o?`3px 2px 3px 12px`:`3px 12px`},...i===`big`&&{maxHeight:`32px`,fontSize:`13px`,lineHeight:`20px`,padding:`6px 16px`},...r&&{color:n.palette.secondary.main,background:a===`primary`?s.primaryColors.accent:s.primaryColors.accentLight2??s.primaryColors.accentLight,borderColor:s.primaryColors.accent}}}),o=(0,n.styled)(n.Box)(({theme:e,checked:t})=>({padding:`2px 4px`,background:t?e.palette.secondary.main:e.palette.primary.dark,color:t?e.palette.secondary.contrastText:e.palette.secondary.main,borderRadius:`3px`,marginLeft:`10px`,fontSize:`12px`,lineHeight:`18px`,minWidth:`22px`,maxHeight:`22px`,display:`flex`,flexDirection:`row`,alignItems:`center`,justifyContent:`center`}));exports.Adornment=o,exports.Checkmark=a,exports.HiddenInput=i,exports.Label=r;