"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("@mui/material"),a=require("react-toastify"),o=t.styled(a.ToastContainer)`
    &&&.Toastify__toast-container {
        background: transparent;
        width: min(400px, calc(100% - 2rem));
        padding: 0;
        bottom: 16px;
        right: 32px;
    }
    .Toastify__toast {
        background: transparent;
        padding: 0;
        border-radius: 8px;
        min-height: 50px;
    }
    .Toastify__toast-body {
        padding: 0;
    }
`;exports.ToastContainer=o;
