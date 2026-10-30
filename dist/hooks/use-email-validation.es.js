import { useState as e } from "react";
// src/hooks/use-email-validation.ts
var t = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, n = () => {
	let [n, r] = e(!1);
	return {
		emailError: n,
		validateEmail: (e) => {
			if (!e.length) return !1;
			let n = t.test(e);
			return e.trim().length > 0 ? r(!n) : r(!1), n;
		},
		resetEmailError: () => r(!1)
	};
};
export { n as useEmailValidation };
