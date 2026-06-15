import { useState as c, useEffect as n } from "react";
const m = (e, t) => {
  const [o, u] = c(e);
  return n(() => {
    const r = setTimeout(() => u(e), t || 500);
    return () => {
      clearTimeout(r);
    };
  }, [e, t]), o;
};
export {
  m as useDebounce
};
