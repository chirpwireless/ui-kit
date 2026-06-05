import { useState as a } from "react";
const i = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, m = () => {
  const [s, e] = a(!1);
  return {
    emailError: s,
    validateEmail: (r) => {
      if (!r.length) return !1;
      const t = i.test(r);
      return r.trim().length > 0 ? e(!t) : e(!1), t;
    },
    resetEmailError: () => e(!1)
  };
};
export {
  m as useEmailValidation
};
