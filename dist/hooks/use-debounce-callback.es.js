import { useRef as r, useCallback as u } from "react";
const s = (e, t) => {
  const o = r(void 0);
  return u(() => {
    clearTimeout(o.current), o.current = setTimeout(() => {
      e == null || e();
    }, t);
  }, [e, t]);
};
export {
  s as useDebounceCallback
};
