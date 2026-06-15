const e = /[A-Z]/, n = /\d/, R = /[!@$&?_+\-*/]/;
const _ = "Password must be between 8 and 16 characters long", s = "Password must contain at least one uppercase letter", E = "Password must contain at least one digit", S = "Password must contain at least one special character (!, @, $, &, ?, _, -, +, *, /)", a = (t) => t.length < 8 || t.length > 16 ? _ : e.test(t) ? n.test(t) ? R.test(t) ? "" : S : E : s;
export {
  a as validatePassword
};
