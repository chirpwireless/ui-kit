// src/helpers/validate-password.tsx
var e = /[A-Z]/, t = /\d/, n = /[!@$&?_+\-*/]/, r = (r) => r.length < 8 || r.length > 16 ? "Password must be between 8 and 16 characters long" : e.test(r) ? t.test(r) ? n.test(r) ? "" : "Password must contain at least one special character (!, @, $, &, ?, _, -, +, *, /)" : "Password must contain at least one digit" : "Password must contain at least one uppercase letter";
export { r as validatePassword };
