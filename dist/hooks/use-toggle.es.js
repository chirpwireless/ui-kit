import { useState as c, useCallback as t } from "react";
const g = (s = !1) => {
  const [o, e] = c(s), l = t(() => {
    e((r) => !r);
  }, [e]), a = t(() => {
    e(!0);
  }, [e]), u = t(() => {
    e(!1);
  }, [e]);
  return {
    value: o,
    setValue: e,
    toggle: l,
    setTrue: a,
    setFalse: u
  };
};
export {
  g as useToggle
};
