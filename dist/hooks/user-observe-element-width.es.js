import { useState as c, useRef as u, useEffect as f } from "react";
const b = () => {
  const [s, n] = c(0), t = u(null);
  return f(() => {
    const e = t.current, r = new ResizeObserver((o) => {
      n(o[0].contentRect.width);
    });
    return e && r.observe(e), () => {
      e && r.unobserve(e);
    };
  }, []), {
    width: s,
    ref: t
  };
};
export {
  b as useObserveElementWidth
};
