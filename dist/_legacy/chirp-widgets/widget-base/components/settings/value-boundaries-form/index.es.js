import { jsxRuntimeExports as ie } from "../../../../../../jsx-runtime-BgepH7Pb.js";
import { Stack as st } from "@mui/material";
import b, { useMemo as Ht, useEffect as jt } from "react";
import { Form as Gt, ResetInput as $t, TextField as Yt } from "./style.es.js";
import { numericFormat as Kt } from "../../../../../../helpers/validation.es.js";
import { Checkmark as zt } from "../../../../../../assets/icons/Checkmark/index.es.js";
import { Button as Jt } from "../../../../../button/index.es.js";
import { Typography as Qt } from "../../../../../typogrpahy/index.es.js";
import { useTranslation as Xt } from "react-i18next";
var Ve = (e) => e.type === "checkbox", ue = (e) => e instanceof Date, H = (e) => e == null;
const vt = (e) => typeof e == "object";
var p = (e) => !H(e) && !Array.isArray(e) && vt(e) && !ue(e), Ue = (e) => p(e) && e.target ? Ve(e.target) ? e.target.checked : e.target.value : e, bt = (e, s) => s.split(".").some((t, a, u) => !isNaN(Number(t)) && e.has(u.slice(0, a).join("."))), Ft = (e) => {
  const s = e.constructor && e.constructor.prototype;
  return p(s) && s.hasOwnProperty("isPrototypeOf");
}, ke = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function N(e) {
  if (e instanceof Date)
    return new Date(e);
  const s = typeof FileList < "u" && e instanceof FileList;
  if (ke && (e instanceof Blob || s))
    return e;
  const t = Array.isArray(e);
  if (!t && !(p(e) && Ft(e)))
    return e;
  const a = t ? [] : Object.create(Object.getPrototypeOf(e));
  for (const u in e)
    Object.prototype.hasOwnProperty.call(e, u) && (a[u] = N(e[u]));
  return a;
}
const ae = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change",
  SUBMIT: "submit",
  TRIGGER: "trigger",
  VALID: "valid"
}, ee = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Z = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, pe = "form", xt = "root", At = ["__proto__", "constructor", "prototype"];
var _e = (e) => /^\w*$/.test(e), R = (e) => e === void 0, Ee = (e) => e.split(/[.[\]'"]/g).filter(Boolean), y = (e, s, t) => {
  if (!s || !p(e))
    return t;
  const a = _e(s) ? [s] : Ee(s);
  if (a.some((l) => At.includes(l)))
    return t;
  const u = a.reduce((l, o) => H(l) ? void 0 : l[o], e);
  return R(u) || u === e ? R(e[s]) ? t : e[s] : u;
}, Y = (e) => typeof e == "boolean", G = (e) => typeof e == "function", C = (e, s, t) => {
  let a = -1;
  const u = _e(s) ? [s] : Ee(s), l = u.length, o = l - 1;
  for (; ++a < l; ) {
    const f = u[a];
    let S = t;
    if (a !== o) {
      const O = e[f];
      S = p(O) || Array.isArray(O) ? O : isNaN(+u[a + 1]) ? {} : [];
    }
    if (At.includes(f))
      return;
    e[f] = S, e = e[f];
  }
};
const Dt = b.createContext(null);
Dt.displayName = "HookFormControlContext";
const Pe = () => b.useContext(Dt);
var wt = (e, s, t, a = !0) => {
  const u = {};
  for (const l in e)
    Object.defineProperty(u, l, {
      get: () => {
        const o = l;
        return s._proxyFormState[o] !== ee.all && (s._proxyFormState[o] = !a || ee.all), t && (t[o] = !0), e[o];
      }
    });
  return u;
};
const We = ke ? b.useLayoutEffect : b.useEffect;
function Zt(e) {
  const s = Pe(), { control: t = s, disabled: a, name: u, exact: l } = e || {}, [o, f] = b.useState(() => ({
    ...t._formState,
    defaultValues: t._defaultValues
  })), S = b.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return We(() => t._subscribe({
    name: u,
    formState: S.current,
    exact: l,
    callback: (O) => {
      !a && f({
        ...t._formState,
        ...O,
        defaultValues: t._defaultValues
      });
    }
  }), [u, a, l]), b.useEffect(() => {
    S.current.isValid && t._setValid(!0);
  }, [t]), b.useMemo(() => wt(o, t, S.current, !1), [o, t]);
}
var $ = (e) => typeof e == "string", Ne = (e, s, t, a, u) => $(e) ? (a && s.watch.add(e), y(t, e, u)) : Array.isArray(e) ? e.map((l) => (a && s.watch.add(l), y(t, l))) : (a && (s.watchAll = !0), t), Me = (e) => H(e) || !vt(e);
const it = (e, s) => s.length === 0 && !Array.isArray(e) && !Ft(e);
function K(e, s, t = /* @__PURE__ */ new WeakSet()) {
  if (e === s)
    return !0;
  if (Me(e) || Me(s))
    return Object.is(e, s);
  if (ue(e) && ue(s))
    return Object.is(e.getTime(), s.getTime());
  const a = Object.keys(e), u = Object.keys(s);
  if (a.length !== u.length)
    return !1;
  if (it(e, a) || it(s, u))
    return Object.is(e, s);
  if (t.has(e) || t.has(s))
    return !0;
  t.add(e), t.add(s);
  for (const l of a) {
    const o = e[l];
    if (!(l in s))
      return !1;
    if (l !== "ref") {
      const f = s[l];
      if (ue(o) && ue(f) || (p(o) || Array.isArray(o)) && (p(f) || Array.isArray(f)) ? !K(o, f, t) : !Object.is(o, f))
        return !1;
    }
  }
  return !0;
}
function er(e) {
  const s = Pe(), { control: t = s, name: a, defaultValue: u, disabled: l, exact: o, compute: f } = e || {}, S = b.useRef(u), O = b.useRef(f), j = b.useRef(void 0), v = b.useRef(t), F = b.useRef(a);
  O.current = f;
  const [_, q] = b.useState(() => {
    const D = t._getWatch(a, S.current);
    return O.current ? O.current(D) : D;
  }), T = b.useCallback((D) => {
    const k = Ne(a, t._names, D || t._formValues, !1, S.current);
    return O.current ? O.current(k) : k;
  }, [t._formValues, t._names, a]), M = b.useCallback((D) => {
    if (!l) {
      const k = Ne(a, t._names, D || t._formValues, !1, S.current);
      if (O.current) {
        const te = O.current(k);
        K(te, j.current) || (q(te), j.current = te);
      } else
        q(k);
    }
  }, [t._formValues, t._names, l, a]);
  We(() => ((v.current !== t || !K(F.current, a)) && (v.current = t, F.current = a, M()), t._subscribe({
    name: a,
    formState: {
      values: !0
    },
    exact: o,
    callback: (D) => {
      M(D.values);
    }
  })), [t, o, a, M]), b.useEffect(() => t._removeUnmounted());
  const I = v.current !== t, V = F.current, A = b.useMemo(() => {
    if (l)
      return null;
    const D = !I && !K(V, a);
    return I || D ? T() : null;
  }, [l, I, a, V, T]);
  return A !== null ? A : _;
}
function tr(e) {
  const s = Pe(), { name: t, disabled: a, control: u = s, shouldUnregister: l, defaultValue: o, exact: f = !0 } = e, S = bt(u._names.array, t), O = b.useMemo(() => y(u._formValues, t, y(u._defaultValues, t, o)), [u, t, o]), j = er({
    control: u,
    name: t,
    defaultValue: O,
    exact: f
  }), v = Zt({
    control: u,
    name: t,
    exact: f
  }), F = b.useRef(e), _ = b.useRef(u.register(t, {
    ...e.rules,
    value: j,
    ...Y(e.disabled) ? { disabled: e.disabled } : {}
  }));
  F.current = e;
  const q = b.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!y(v.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!y(v.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!y(v.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!y(v.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => y(v.errors, t)
    }
  }), [v, t]), T = b.useCallback((A) => {
    const D = Ue(A);
    y(u._fields, t) || (_.current = u.register(t, {
      ...F.current.rules,
      value: D
    })), _.current.onChange({
      target: {
        value: Ue(A),
        name: t
      },
      type: ae.CHANGE
    });
  }, [t, u]), M = b.useCallback(() => _.current.onBlur({
    target: {
      value: y(u._formValues, t),
      name: t
    },
    type: ae.BLUR
  }), [t, u._formValues]), I = b.useCallback((A) => {
    const D = y(u._fields, t);
    D && D._f && A && (D._f.ref = {
      focus: () => G(A.focus) && A.focus(),
      select: () => G(A.select) && A.select(),
      setCustomValidity: (k) => G(A.setCustomValidity) && A.setCustomValidity(k),
      reportValidity: () => G(A.reportValidity) && A.reportValidity()
    });
  }, [u._fields, t]), V = b.useMemo(() => ({
    name: t,
    value: j,
    ...Y(a) || v.disabled ? { disabled: v.disabled || a } : {},
    onChange: T,
    onBlur: M,
    ref: I
  }), [t, a, v.disabled, T, M, I, j]);
  return b.useEffect(() => {
    const A = u._options.shouldUnregister || l;
    u.register(t, {
      ...F.current.rules,
      ...Y(F.current.disabled) ? { disabled: F.current.disabled } : {}
    });
    const D = (k, te) => {
      const re = y(u._fields, k);
      re && re._f && (re._f.mount = te);
    };
    if (D(t, !0), A) {
      const k = N(y(l ? u._defaultValues : u._options.values || u._defaultValues, t, y(u._options.defaultValues, t, F.current.defaultValue)));
      C(u._defaultValues, t, k), R(y(u._formValues, t)) && C(u._formValues, t, k);
    }
    return !S && u.register(t), () => {
      (S ? A && !u._state.action : A) ? u.unregister(t) : D(t, !1);
    };
  }, [t, u, S, l]), b.useEffect(() => {
    u._setDisabledField({
      disabled: a,
      name: t
    });
  }, [a, t, u]), b.useMemo(() => ({
    field: V,
    formState: v,
    fieldState: q
  }), [V, v, q]);
}
const rr = (e) => e.render(tr(e)), sr = b.createContext(null);
sr.displayName = "HookFormContext";
var ir = (e, s, t, a, u) => s ? {
  ...t[e],
  types: {
    ...t[e] && t[e].types ? t[e].types : {},
    [a]: u || !0
  }
} : {}, kt = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Ae = (e) => Array.isArray(e) ? e : [e], at = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (u) => {
      for (const l of e)
        l.next && l.next(u);
    },
    subscribe: (u) => (e.push(u), {
      unsubscribe: () => {
        e = e.filter((l) => l !== u);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
};
function Et(e, s) {
  const t = {};
  for (const a in e)
    if (e.hasOwnProperty(a)) {
      const u = e[a], l = s[a];
      if (u && p(u) && l) {
        const o = Et(u, l);
        p(o) && (t[a] = o);
      } else e[a] && (t[a] = l);
    }
  return t;
}
var W = (e) => p(e) && !Object.keys(e).length, qe = (e) => e.type === "file", De = (e) => {
  if (!ke)
    return !1;
  const s = e ? e.ownerDocument : 0;
  return e instanceof (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement);
}, St = (e) => e.type === "select-multiple", He = (e) => e.type === "radio", ar = (e) => He(e) || Ve(e), Ie = (e) => De(e) && e.isConnected;
function nr(e, s) {
  const t = s.slice(0, -1).length;
  let a = 0;
  for (; a < t; ) {
    if (H(e)) {
      e = void 0;
      break;
    }
    e = e[s[a]], a++;
  }
  return e;
}
function lr(e) {
  for (const s in e)
    if (e.hasOwnProperty(s) && !R(e[s]))
      return !1;
  return !0;
}
function B(e, s) {
  if ($(s) && Object.prototype.hasOwnProperty.call(e, s))
    return delete e[s], e;
  const t = Array.isArray(s) ? s : _e(s) ? [s] : Ee(s), a = t.length === 1 ? e : nr(e, t), u = t.length - 1, l = t[u];
  return a && delete a[l], u !== 0 && (p(a) && W(a) || Array.isArray(a) && lr(a)) && B(e, t.slice(0, -1)), e;
}
var ur = (e) => {
  for (const s in e)
    if (G(e[s]))
      return !0;
  return !1;
};
function Ct(e) {
  return Array.isArray(e) || p(e) && !ur(e);
}
function Le(e, s = {}) {
  for (const t in e) {
    const a = e[t];
    Ct(a) ? (s[t] = Array.isArray(a) ? [] : {}, Le(a, s[t])) : R(a) || (s[t] = !0);
  }
  return s;
}
function Be(e) {
  if (e !== !1) {
    if (e === !0)
      return !0;
    if (Array.isArray(e)) {
      const s = e.map((t) => Be(t));
      return s.some((t) => t !== void 0) ? s : void 0;
    }
    if (p(e)) {
      const s = {};
      for (const t in e) {
        const a = Be(e[t]);
        R(a) || (s[t] = a);
      }
      return Object.keys(s).length ? s : void 0;
    }
  }
}
function le(e, s, t) {
  t || (t = Le(s));
  for (const a in e) {
    const u = e[a];
    if (Ct(u))
      R(s) || Me(t[a]) ? t[a] = Le(u, Array.isArray(u) ? [] : {}) : le(u, H(s) ? {} : s[a], t[a]);
    else {
      const l = s[a];
      t[a] = !K(u, l);
    }
  }
  return Be(t) || {};
}
const nt = {
  value: !1,
  isValid: !1
}, lt = { value: !0, isValid: !0 };
var Rt = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const s = e.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: s, isValid: !!s.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !R(e[0].attributes.value) ? R(e[0].value) || e[0].value === "" ? lt : { value: e[0].value, isValid: !0 } : lt
    ) : nt;
  }
  return nt;
}, Ot = (e, { valueAsNumber: s, valueAsDate: t, setValueAs: a }) => R(e) ? e : s ? e === "" ? NaN : e && +e : t && $(e) ? new Date(e) : a ? a(e) : e;
const ut = {
  isValid: !1,
  value: null
};
var Tt = (e) => Array.isArray(e) ? e.reduce((s, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : s, ut) : ut;
function ot(e) {
  const s = e.ref;
  return qe(s) ? s.files : He(s) ? Tt(e.refs).value : St(s) ? [...s.selectedOptions].map(({ value: t }) => t) : Ve(s) ? Rt(e.refs).value : Ot(R(s.value) ? e.ref.value : s.value, e);
}
var or = (e, s, t, a) => {
  const u = {};
  for (const l of e) {
    const o = y(s, l);
    o && C(u, l, o._f);
  }
  return {
    criteriaMode: t,
    names: [...e],
    fields: u,
    shouldUseNativeValidation: a
  };
}, we = (e) => e instanceof RegExp, he = (e) => R(e) ? e : we(e) ? e.source : p(e) ? we(e.value) ? e.value.source : e.value : e, dt = (e) => ({
  isOnSubmit: !e || e === ee.onSubmit,
  isOnBlur: e === ee.onBlur,
  isOnChange: e === ee.onChange,
  isOnAll: e === ee.all,
  isOnTouch: e === ee.onTouched
});
const ft = "AsyncFunction";
var dr = (e) => !!e && !!e.validate && !!(G(e.validate) && e.validate.constructor.name === ft || p(e.validate) && Object.values(e.validate).find((s) => s.constructor.name === ft)), fr = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), ct = (e, s, t) => !t && (s.watchAll || s.watch.has(e) || [...s.watch].some((a) => e.startsWith(`${a}.`)));
const ge = (e, s, t, a) => {
  for (const u of t || Object.keys(e)) {
    const l = y(e, u);
    if (l) {
      const { _f: o, ...f } = l;
      if (o) {
        if (o.refs && o.refs[0] && s(o.refs[0], u) && !a)
          return !0;
        if (o.ref && s(o.ref, o.name) && !a)
          return !0;
        if (ge(f, s))
          break;
      } else if (p(f) && ge(f, s))
        break;
    }
  }
};
function yt(e, s, t) {
  const a = y(e, t);
  if (a || _e(t))
    return {
      error: a,
      name: t
    };
  const u = t.split(".");
  for (; u.length; ) {
    const l = u.join("."), o = y(s, l), f = y(e, l);
    if (o && !Array.isArray(o) && t !== l)
      return { name: t };
    if (f && f.type)
      return {
        name: l,
        error: f
      };
    if (f && f.root && f.root.type)
      return {
        name: `${l}.root`,
        error: f.root
      };
    u.pop();
  }
  return {
    name: t
  };
}
var cr = (e, s, t, a) => {
  t(e);
  const { name: u, ...l } = e;
  return W(l) || a && Object.keys(l).length >= Object.keys(s).length || Object.keys(l).find((o) => s[o] === (!a || ee.all));
}, yr = (e, s, t) => !e || !s || e === s || Ae(e).some((a) => a && (t ? a === s : a.startsWith(s) || s.startsWith(a))), mr = (e, s, t, a, u) => u.isOnAll ? !1 : !t && u.isOnTouch ? !(s || e) : (t ? a.isOnBlur : u.isOnBlur) ? !e : (t ? a.isOnChange : u.isOnChange) ? e : !0, hr = (e, s) => !kt(y(e, s)).length && B(e, s), mt = (e, s, t) => {
  const a = y(e, t), u = Array.isArray(a) ? a : [];
  return C(u, xt, s[t]), C(e, t, u), e;
};
function ht(e, s, t = "validate") {
  if ($(e) || Array.isArray(e) && e.every($) || Y(e) && !e)
    return {
      type: t,
      message: $(e) ? e : "",
      ref: s
    };
}
var fe = (e) => p(e) && !we(e) ? e : {
  value: e,
  message: ""
}, gt = async (e, s, t, a, u, l) => {
  const { ref: o, refs: f, required: S, maxLength: O, minLength: j, min: v, max: F, pattern: _, validate: q, name: T, valueAsNumber: M, mount: I } = e._f, V = y(t, T);
  if (!I || s.has(T))
    return {};
  const A = f ? f[0] : o, D = (E) => {
    u && A.reportValidity && (A.setCustomValidity(Y(E) ? "" : E || ""), A.reportValidity());
  }, k = {}, te = He(o), re = Ve(o), ve = te || re, oe = (M || qe(o)) && R(o.value) && R(V) || De(o) && o.value === "" || V === "" || Array.isArray(V) && !V.length, Q = ir.bind(null, T, a, k), be = (E, w, P, U = Z.maxLength, z = Z.minLength) => {
    const se = E ? w : P;
    k[T] = {
      type: E ? U : z,
      message: se,
      ref: o,
      ...Q(E ? U : z, se)
    };
  };
  if (l ? !Array.isArray(V) || !V.length : S && (!ve && (oe || H(V)) || Y(V) && !V || re && !Rt(f).isValid || te && !Tt(f).isValid)) {
    const { value: E, message: w } = $(S) ? { value: !!S, message: S } : fe(S);
    if (E && (k[T] = {
      type: Z.required,
      message: w,
      ref: A,
      ...Q(Z.required, w)
    }, !a))
      return D(w), k;
  }
  if (!oe && (!H(v) || !H(F))) {
    let E, w;
    const P = fe(F), U = fe(v);
    if (!H(V) && !isNaN(V)) {
      const z = o.valueAsNumber || V && +V;
      H(P.value) || (E = z > P.value), H(U.value) || (w = z < U.value);
    } else {
      const z = o.valueAsDate || new Date(V), se = (Fe) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Fe), de = o.type == "time", ce = o.type == "week";
      $(P.value) && V && (E = de ? se(V) > se(P.value) : ce ? V > P.value : z > new Date(P.value)), $(U.value) && V && (w = de ? se(V) < se(U.value) : ce ? V < U.value : z < new Date(U.value));
    }
    if ((E || w) && (be(!!E, P.message, U.message, Z.max, Z.min), !a))
      return D(k[T].message), k;
  }
  if ((O || j) && !oe && ($(V) || l && Array.isArray(V))) {
    const E = fe(O), w = fe(j), P = !H(E.value) && V.length > +E.value, U = !H(w.value) && V.length < +w.value;
    if ((P || U) && (be(P, E.message, w.message), !a))
      return D(k[T].message), k;
  }
  if (_ && !oe && $(V)) {
    const { value: E, message: w } = fe(_);
    if (we(E) && !V.match(E) && (k[T] = {
      type: Z.pattern,
      message: w,
      ref: o,
      ...Q(Z.pattern, w)
    }, !a))
      return D(w), k;
  }
  if (q) {
    if (G(q)) {
      const E = await q(V, t), w = ht(E, A);
      if (w && (k[T] = {
        ...w,
        ...Q(Z.validate, w.message)
      }, !a))
        return D(w.message), k;
    } else if (p(q)) {
      let E = {};
      for (const w in q) {
        if (!W(E) && !a)
          break;
        const P = ht(await q[w](V, t), A, w);
        P && (E = {
          ...P,
          ...Q(w, P.message)
        }, D(P.message), a && (k[T] = E));
      }
      if (!W(E) && (k[T] = {
        ref: A,
        ...E
      }, !a))
        return k;
    }
  }
  return D(!0), k;
};
const gr = {
  mode: ee.onSubmit,
  reValidateMode: ee.onChange,
  shouldFocusError: !0
}, pt = {
  submitCount: 0,
  isDirty: !1,
  isReady: !1,
  isValidating: !1,
  isSubmitted: !1,
  isSubmitting: !1,
  isSubmitSuccessful: !1,
  isValid: !1,
  touchedFields: {},
  dirtyFields: {},
  validatingFields: {}
};
function Vr(e = {}) {
  let s = {
    ...gr,
    ...e
  }, t = {
    ...N(pt),
    isLoading: G(s.defaultValues),
    errors: s.errors || {},
    disabled: s.disabled || !1
  }, a = {}, u = p(s.defaultValues) || p(s.values) ? N(s.defaultValues || s.values) || {} : {}, l = s.shouldUnregister ? {} : N(u), o = {
    action: !1,
    mount: !1,
    watch: !1,
    keepIsValid: !1
  }, f = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set(),
    registerName: /* @__PURE__ */ new Set()
  }, S, O = 0;
  const j = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, v = {
    ...j
  };
  let F = {
    ...v
  };
  const _ = {
    array: at(),
    state: at()
  }, q = s.criteriaMode === ee.all, T = (r) => (i) => {
    clearTimeout(O), O = setTimeout(r, i);
  }, M = async (r) => {
    if (!o.keepIsValid && !s.disabled && (v.isValid || F.isValid || r)) {
      let i;
      s.resolver ? (i = W((await Q()).errors), I()) : i = await w({
        fields: a,
        onlyCheckValid: !0,
        eventType: ae.VALID
      }), i !== t.isValid && _.state.next({
        isValid: i
      });
    }
  }, I = (r, i) => {
    !s.disabled && (v.isValidating || v.validatingFields || F.isValidating || F.validatingFields) && ((r || Array.from(f.mount)).forEach((n) => {
      n && (i ? C(t.validatingFields, n, i) : B(t.validatingFields, n));
    }), _.state.next({
      validatingFields: t.validatingFields,
      isValidating: !W(t.validatingFields)
    }));
  }, V = () => {
    t.dirtyFields = le(u, l);
  }, A = (r, i = [], n, d, m = !0, h = !0) => {
    if (d && n && !s.disabled) {
      if (o.action = !0, h && Array.isArray(y(a, r))) {
        const c = n(y(a, r), d.argA, d.argB);
        m && C(a, r, c);
      }
      if (h && Array.isArray(y(t.errors, r))) {
        const c = n(y(t.errors, r), d.argA, d.argB);
        m && C(t.errors, r, c), hr(t.errors, r);
      }
      if ((v.touchedFields || F.touchedFields) && h && Array.isArray(y(t.touchedFields, r))) {
        const c = n(y(t.touchedFields, r), d.argA, d.argB);
        m && C(t.touchedFields, r, c);
      }
      (v.dirtyFields || F.dirtyFields) && V(), _.state.next({
        name: r,
        isDirty: U(r, i),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      C(l, r, i);
  }, D = (r, i) => {
    C(t.errors, r, i), _.state.next({
      errors: t.errors
    });
  }, k = (r) => {
    t.errors = r, _.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, te = (r) => {
    const i = _e(r) ? [r] : Ee(r);
    let n = l, d = u;
    for (let m = 0; m < i.length - 1; m++) {
      const h = i[m];
      if (n = H(n) ? n : n[h], d = H(d) ? d : d[h], n === null && d !== null)
        return !0;
    }
    return !1;
  }, re = (r, i, n, d) => {
    const m = y(a, r);
    if (m) {
      if (te(r))
        return;
      const h = R(y(l, r)), c = y(l, r, R(n) ? y(u, r) : n);
      R(c) || d && d.defaultChecked || i ? C(l, r, i ? c : ot(m._f)) : de(r, c), o.mount && !o.action && (M(), h && t.isDirty && (v.isDirty || F.isDirty) && (U() || (t.isDirty = !1, _.state.next({ ...t }))));
    }
  }, ve = (r, i, n, d, m) => {
    let h = !1, c = !1;
    const g = {
      name: r
    };
    if (!s.disabled) {
      if (!n || d) {
        (v.isDirty || F.isDirty) && (c = t.isDirty, t.isDirty = g.isDirty = U(), h = c !== g.isDirty);
        const x = K(y(u, r), i);
        c = !!y(t.dirtyFields, r), x !== t.isDirty ? t.dirtyFields = le(u, l) : x ? B(t.dirtyFields, r) : C(t.dirtyFields, r, !0), g.dirtyFields = t.dirtyFields, h = h || (v.dirtyFields || F.dirtyFields) && c !== !x;
      }
      if (n) {
        const x = y(t.touchedFields, r);
        x || (C(t.touchedFields, r, n), g.touchedFields = t.touchedFields, h = h || (v.touchedFields || F.touchedFields) && x !== n);
      }
      h && m && _.state.next(g);
    }
    return h ? g : {};
  }, oe = (r, i, n, d) => {
    const m = y(t.errors, r), h = (v.isValid || F.isValid) && Y(i) && t.isValid !== i;
    if (s.delayError && n ? (S = T(() => D(r, n)), S(s.delayError)) : (clearTimeout(O), S = null, n ? C(t.errors, r, n) : B(t.errors, r)), (n ? !K(m, n) : m) || !W(d) || h) {
      const c = {
        ...d,
        ...h && Y(i) ? { isValid: i } : {},
        errors: t.errors,
        name: r
      };
      t = {
        ...t,
        ...c
      }, _.state.next(c);
    }
  }, Q = async (r) => (I(r, !0), await s.resolver(l, s.context, or(r || f.mount, a, s.criteriaMode, s.shouldUseNativeValidation))), be = async (r) => {
    const { errors: i } = await Q(r);
    if (I(r), r)
      for (const n of r) {
        const d = y(i, n);
        d ? f.array.has(n) && p(d) && !Object.keys(d).some((m) => !Number.isNaN(Number(m))) ? mt(t.errors, { [n]: d }, n) : C(t.errors, n, d) : B(t.errors, n);
      }
    else
      t.errors = i;
    return i;
  }, E = async ({ name: r, eventType: i }) => {
    if (e.validate) {
      const n = await e.validate({
        formValues: l,
        formState: t,
        name: r,
        eventType: i
      });
      if (p(n))
        for (const d in n) {
          const m = n[d];
          m && xe(`${pe}.${d}`, {
            message: $(m.message) ? m.message : "",
            type: m.type || Z.validate
          });
        }
      else $(n) || !n ? xe(pe, {
        message: n || "",
        type: Z.validate
      }) : Ke(pe);
      return n;
    }
    return !0;
  }, w = async ({ fields: r, onlyCheckValid: i, name: n, eventType: d, context: m = {
    valid: !0,
    runRootValidation: !1
  } }) => {
    if (e.validate && (m.runRootValidation = !0, !await E({
      name: n,
      eventType: d
    }) && (m.valid = !1, i)))
      return m.valid;
    for (const h in r) {
      const c = r[h];
      if (c) {
        const { _f: g, ...x } = c;
        if (g) {
          const L = f.array.has(g.name), J = c._f && dr(c._f), X = v.validatingFields || v.isValidating || F.validatingFields || F.isValidating;
          J && X && I([g.name], !0);
          const ne = await gt(c, f.disabled, l, q, s.shouldUseNativeValidation && !i, L);
          if (J && X && I([g.name]), ne[g.name] && (m.valid = !1, i) || (!i && (y(ne, g.name) ? L ? mt(t.errors, ne, g.name) : C(t.errors, g.name, ne[g.name]) : B(t.errors, g.name)), e.shouldUseNativeValidation && ne[g.name]))
            break;
        }
        !W(x) && await w({
          context: m,
          onlyCheckValid: i,
          fields: x,
          name: h,
          eventType: d
        });
      }
    }
    return m.valid;
  }, P = () => {
    for (const r of f.unMount) {
      const i = y(a, r);
      i && (i._f.refs ? i._f.refs.every((n) => !Ie(n)) : !Ie(i._f.ref)) && Ce(r);
    }
    f.unMount = /* @__PURE__ */ new Set();
  }, U = (r, i) => !s.disabled && (r && i && C(l, r, i), !K($e(), u)), z = (r, i, n) => Ne(r, f, {
    ...o.mount ? l : R(i) ? u : $(r) ? { [r]: i } : i
  }, n, i), se = (r) => kt(y(o.mount ? l : u, r, s.shouldUnregister ? y(u, r, []) : [])), de = (r, i, n = {}, d = !1) => {
    const m = y(a, r);
    let h = i;
    if (m) {
      const c = m._f;
      c && (!c.disabled && C(l, r, Ot(i, c)), h = De(c.ref) && H(i) ? "" : i, St(c.ref) ? [...c.ref.options].forEach((g) => g.selected = h.includes(g.value)) : c.refs ? Ve(c.ref) ? c.refs.forEach((g) => {
        (!g.defaultChecked || !g.disabled) && (Array.isArray(h) ? g.checked = !!h.find((x) => x === g.value) : g.checked = h === g.value || !!h);
      }) : c.refs.forEach((g) => g.checked = g.value === h) : qe(c.ref) ? c.ref.value = "" : (c.ref.value = h, c.ref.type || _.state.next({
        name: r,
        values: d ? l : N(l)
      })));
    }
    (n.shouldDirty || n.shouldTouch) && ve(r, h, n.shouldTouch, n.shouldDirty, !0), n.shouldValidate && Se(r);
  }, ce = (r, i, n, d = !1) => {
    for (const m in i) {
      if (!i.hasOwnProperty(m))
        return;
      const h = i[m], c = r + "." + m, g = y(a, c);
      (f.array.has(r) || p(h) || g && !g._f) && !ue(h) ? ce(c, h, n, d) : de(c, h, n, d);
    }
  }, Fe = (r, i, n, d) => {
    const m = y(a, r), h = f.array.has(r), c = d ? i : N(i), g = y(l, r), x = K(g, c);
    if (x || C(l, r, c), h)
      _.array.next({
        name: r,
        values: d ? l : N(l)
      }), (v.isDirty || v.dirtyFields || F.isDirty || F.dirtyFields) && n.shouldDirty && (V(), _.state.next({
        name: r,
        dirtyFields: t.dirtyFields,
        isDirty: U(r, c)
      }));
    else {
      const L = Array.isArray(c) && !c.length || W(c);
      !m || m._f || H(c) || L ? de(r, c, n, d) : ce(r, c, n, d);
    }
    if (!x) {
      const L = ct(r, f), J = d ? l : N(l);
      _.state.next({
        ...L && t,
        name: o.mount || L ? r : void 0,
        values: J
      });
    }
  }, ye = (r, i, n = {}) => Fe(r, i, n, !1), It = (r, i = {}) => {
    const n = G(r) ? r(l) : r;
    if (!K(l, n)) {
      l = {
        ...l,
        ...n
      };
      for (const d of f.mount)
        Fe(d, y(n, d), i, !0);
      _.state.next({
        ...t,
        name: void 0,
        type: void 0,
        values: l
      }), i.shouldValidate && M();
    }
  }, je = async (r) => {
    o.mount = !0;
    const i = r.target;
    let n = i.name, d = !0;
    const m = y(a, n), h = (x) => {
      d = Number.isNaN(x) || ue(x) && isNaN(x.getTime()) || K(x, y(l, n, x));
    }, c = dt(s.mode), g = dt(s.reValidateMode);
    if (m) {
      let x, L;
      const J = i.type ? ot(m._f) : Ue(r), X = r.type === ae.BLUR || r.type === ae.FOCUS_OUT, ne = !fr(m._f) && !e.validate && !s.resolver && !y(t.errors, n) && !m._f.deps || mr(X, y(t.touchedFields, n), t.isSubmitted, g, c), Te = ct(n, f, X);
      C(l, n, J), X ? (!i || !i.readOnly) && (m._f.onBlur && m._f.onBlur(r), S && S(0)) : m._f.onChange && m._f.onChange(r);
      const me = ve(n, J, X), Wt = !W(me) || Te;
      if (!X && _.state.next({
        name: n,
        type: r.type,
        values: N(l)
      }), ne)
        return (v.isValid || F.isValid) && (s.mode === "onBlur" ? X && M() : X || M()), Wt && _.state.next({ name: n, ...Te ? {} : me });
      if (!s.resolver && e.validate && await E({
        name: n,
        eventType: r.type
      }), !X && Te && _.state.next({ ...t }), s.resolver) {
        const { errors: tt } = await Q([n]);
        if (I([n]), h(J), !d) {
          !W(me) && _.state.next(me);
          return;
        }
        const qt = yt(t.errors, a, n), rt = yt(tt, a, qt.name || n);
        x = rt.error, n = rt.name, L = W(tt);
      } else
        I([n], !0), x = (await gt(m, f.disabled, l, q, s.shouldUseNativeValidation))[n], I([n]), h(J), d && (x ? L = !1 : (v.isValid || F.isValid) && (L = await w({
          fields: a,
          onlyCheckValid: !0,
          name: n,
          eventType: r.type
        })));
      d && (m._f.deps && (!Array.isArray(m._f.deps) || m._f.deps.length > 0) && Se(m._f.deps), oe(n, L, x, me));
    }
  }, Ge = (r, i) => {
    if (y(t.errors, i) && r.focus)
      return r.focus(), 1;
  }, Se = async (r, i = {}) => {
    let n, d;
    const m = Ae(r);
    if (s.resolver) {
      const h = await be(R(r) ? r : m);
      n = W(h), d = r ? !m.some((c) => y(h, c)) : n;
    } else r ? (d = (await Promise.all(m.map(async (h) => {
      const c = y(a, h);
      return await w({
        fields: c && c._f ? { [h]: c } : c,
        eventType: ae.TRIGGER
      });
    }))).every(Boolean), !(!d && !t.isValid) && M()) : d = n = await w({
      fields: a,
      name: r,
      eventType: ae.TRIGGER
    });
    return _.state.next({
      ...!$(r) || (v.isValid || F.isValid) && n !== t.isValid ? {} : { name: r },
      ...s.resolver || !r ? { isValid: n } : {},
      errors: t.errors
    }), i.shouldFocus && !d && ge(a, Ge, r ? m : f.mount), d;
  }, $e = (r, i) => {
    let n = {
      ...o.mount ? l : u
    };
    return i && (n = Et(i.dirtyFields ? t.dirtyFields : t.touchedFields, n)), R(r) ? n : $(r) ? y(n, r) : r.map((d) => y(n, d));
  }, Ye = (r, i) => ({
    invalid: !!y((i || t).errors, r),
    isDirty: !!y((i || t).dirtyFields, r),
    error: y((i || t).errors, r),
    isValidating: !!y(t.validatingFields, r),
    isTouched: !!y((i || t).touchedFields, r)
  }), Ke = (r) => {
    const i = r ? Ae(r) : void 0;
    i == null || i.forEach((n) => B(t.errors, n)), i ? i.forEach((n) => {
      _.state.next({
        name: n,
        errors: t.errors
      });
    }) : _.state.next({
      errors: {}
    });
  }, xe = (r, i, n) => {
    const d = (y(a, r, { _f: {} })._f || {}).ref, m = y(t.errors, r) || {}, { ref: h, message: c, type: g, ...x } = m;
    C(t.errors, r, {
      ...x,
      ...i,
      ref: d
    }), _.state.next({
      name: r,
      errors: t.errors,
      isValid: !1
    }), n && n.shouldFocus && d && d.focus && d.focus();
  }, Ut = (r, i) => G(r) ? _.state.subscribe({
    next: (n) => "values" in n && r(n.values || z(void 0, i), n)
  }) : z(r, i, !0), ze = (r) => _.state.subscribe({
    next: (i) => {
      if (yr(r.name, i.name, r.exact) && cr(i, r.formState || v, Pt, r.reRenderRoot)) {
        const n = { ...l };
        r.callback({
          values: n,
          ...t,
          ...i,
          defaultValues: u
        });
      }
    }
  }).unsubscribe, Nt = (r) => (o.mount = !0, F = {
    ...F,
    ...r.formState
  }, ze({
    ...r,
    formState: {
      ...j,
      ...r.formState
    }
  })), Ce = (r, i = {}) => {
    for (const n of r ? Ae(r) : f.mount)
      f.mount.delete(n), f.array.delete(n), i.keepValue || (B(a, n), B(l, n)), !i.keepError && B(t.errors, n), !i.keepDirty && B(t.dirtyFields, n), !i.keepTouched && B(t.touchedFields, n), !i.keepIsValidating && B(t.validatingFields, n), !s.shouldUnregister && !i.keepDefaultValue && B(u, n);
    _.state.next({
      values: N(l)
    }), _.state.next({
      ...t,
      ...i.keepDirty ? { isDirty: U() } : {}
    }), !i.keepIsValid && M();
  }, Je = ({ disabled: r, name: i }) => {
    if (Y(r) && o.mount || r || f.disabled.has(i)) {
      const m = f.disabled.has(i) !== !!r;
      r ? f.disabled.add(i) : f.disabled.delete(i), m && o.mount && !o.action && M();
    }
  }, Re = (r, i = {}) => {
    let n = y(a, r);
    const d = Y(i.disabled) || Y(s.disabled), m = !f.registerName.has(r) && n && n._f && !n._f.mount;
    return C(a, r, {
      ...n || {},
      _f: {
        ...n && n._f ? n._f : { ref: { name: r } },
        name: r,
        mount: !0,
        ...i
      }
    }), f.mount.add(r), n && !m ? Je({
      disabled: Y(i.disabled) ? i.disabled : s.disabled,
      name: r
    }) : re(r, !0, i.value), {
      ...d ? { disabled: i.disabled || s.disabled } : {},
      ...s.progressive ? {
        required: !!i.required,
        min: he(i.min),
        max: he(i.max),
        minLength: he(i.minLength),
        maxLength: he(i.maxLength),
        pattern: he(i.pattern)
      } : {},
      name: r,
      onChange: je,
      onBlur: je,
      ref: (h) => {
        if (h) {
          f.registerName.add(r), Re(r, i), f.registerName.delete(r), n = y(a, r);
          const c = R(h.value) && h.querySelectorAll && h.querySelectorAll("input,select,textarea")[0] || h, g = ar(c), x = n._f.refs || [];
          if (g ? x.find((L) => L === c) : c === n._f.ref)
            return;
          C(a, r, {
            _f: {
              ...n._f,
              ...g ? {
                refs: [
                  ...x.filter(Ie),
                  c,
                  ...Array.isArray(y(u, r)) ? [{}] : []
                ],
                ref: { type: c.type, name: r }
              } : { ref: c }
            }
          }), re(r, !1, void 0, c);
        } else
          n = y(a, r, {}), n._f && (n._f.mount = !1), (s.shouldUnregister || i.shouldUnregister) && !(bt(f.array, r) && o.action) && f.unMount.add(r);
      }
    };
  }, Oe = () => s.shouldFocusError && !s.shouldUseNativeValidation && ge(a, Ge, f.mount), Mt = (r) => {
    Y(r) && (_.state.next({ disabled: r }), ge(a, (i, n) => {
      const d = y(a, n);
      d && (i.disabled = d._f.disabled || r, Array.isArray(d._f.refs) && d._f.refs.forEach((m) => {
        m.disabled = d._f.disabled || r;
      }));
    }, 0, !1));
  }, Qe = (r, i) => async (n) => {
    let d;
    n && (n.preventDefault && n.preventDefault(), n.persist && n.persist());
    let m = N(l);
    if (_.state.next({
      isSubmitting: !0
    }), s.resolver) {
      const { errors: h, values: c } = await Q();
      I(), t.errors = h, m = N(c);
    } else
      await w({
        fields: a,
        eventType: ae.SUBMIT
      });
    if (f.disabled.size)
      for (const h of f.disabled)
        B(m, h);
    if (B(t.errors, xt), W(t.errors)) {
      _.state.next({
        errors: {}
      });
      try {
        await r(m, n);
      } catch (h) {
        d = h;
      }
    } else
      i && await i({ ...t.errors }, n), Oe(), setTimeout(Oe);
    if (_.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: W(t.errors) && !d,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), d)
      throw d;
  }, Lt = (r, i = {}) => {
    y(a, r) && (R(i.defaultValue) ? ye(r, N(y(u, r))) : (ye(r, i.defaultValue), C(u, r, N(i.defaultValue))), i.keepTouched || B(t.touchedFields, r), i.keepDirty || (B(t.dirtyFields, r), t.isDirty = i.defaultValue ? U(r, N(y(u, r))) : U()), i.keepError || (B(t.errors, r), v.isValid && M()), _.state.next({ ...t }));
  }, Xe = (r, i = {}) => {
    const n = r ? N(r) : u, d = N(n), m = W(r), h = d;
    if (i.keepDefaultValues || (u = n), !i.keepValues) {
      if (i.keepDirtyValues) {
        const c = /* @__PURE__ */ new Set([
          ...f.mount,
          ...Object.keys(le(u, l))
        ]);
        for (const g of Array.from(c)) {
          const x = y(t.dirtyFields, g), L = y(l, g), J = y(h, g);
          x && !R(L) ? C(h, g, L) : !x && !R(J) && ye(g, J);
        }
      } else {
        if (ke && R(r))
          for (const c of f.mount) {
            const g = y(a, c);
            if (g && g._f) {
              const x = Array.isArray(g._f.refs) ? g._f.refs[0] : g._f.ref;
              if (De(x)) {
                const L = x.closest("form");
                if (L) {
                  L.reset();
                  break;
                }
              }
            }
          }
        if (i.keepFieldsRef)
          for (const c of f.mount)
            ye(c, y(h, c));
        else
          a = {};
      }
      if (s.shouldUnregister) {
        if (l = i.keepDefaultValues ? N(u) : {}, i.keepFieldsRef)
          for (const c of f.mount)
            C(l, c, y(h, c));
      } else
        l = N(h);
      _.array.next({
        values: { ...h }
      }), _.state.next({
        values: { ...h }
      });
    }
    f = {
      mount: i.keepDirtyValues ? f.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      registerName: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, o.mount = !v.isValid || !!i.keepIsValid || !!i.keepDirtyValues || !s.shouldUnregister && !W(h), o.watch = !!s.shouldUnregister, o.keepIsValid = !!i.keepIsValid, o.action = !1, i.keepErrors || (t.errors = {}), _.state.next({
      submitCount: i.keepSubmitCount ? t.submitCount : 0,
      isDirty: m ? !1 : i.keepDirty ? t.isDirty : i.keepValues ? U() : !!(i.keepDefaultValues && !K(r, u)),
      isSubmitted: i.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: m ? {} : i.keepDirtyValues ? i.keepDefaultValues && l ? le(u, l) : t.dirtyFields : i.keepDefaultValues && r ? le(u, r) : i.keepDirty ? t.dirtyFields : {},
      touchedFields: i.keepTouched ? t.touchedFields : {},
      errors: i.keepErrors ? t.errors : {},
      isSubmitSuccessful: i.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: u
    });
  }, Ze = (r, i) => Xe(G(r) ? r(l) : r, { ...s.resetOptions, ...i }), Bt = (r, i = {}) => {
    const n = y(a, r), d = n && n._f;
    if (d) {
      const m = d.refs ? d.refs[0] : d.ref;
      m.focus && setTimeout(() => {
        m.focus(), i.shouldSelect && G(m.select) && m.select();
      });
    }
  }, Pt = (r) => {
    t = {
      ...t,
      ...r
    };
  }, et = {
    control: {
      register: Re,
      unregister: Ce,
      getFieldState: Ye,
      handleSubmit: Qe,
      setError: xe,
      _subscribe: ze,
      _runSchema: Q,
      _updateIsValidating: I,
      _focusError: Oe,
      _getWatch: z,
      _getDirty: U,
      _setValid: M,
      _setFieldArray: A,
      _setDisabledField: Je,
      _setErrors: k,
      _getFieldArray: se,
      _reset: Xe,
      _resetDefaultValues: () => G(s.defaultValues) && s.defaultValues().then((r) => {
        Ze(r, s.resetOptions), _.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: P,
      _disableForm: Mt,
      _subjects: _,
      _proxyFormState: v,
      get _fields() {
        return a;
      },
      get _formValues() {
        return l;
      },
      get _state() {
        return o;
      },
      set _state(r) {
        o = r;
      },
      get _defaultValues() {
        return u;
      },
      get _names() {
        return f;
      },
      set _names(r) {
        f = r;
      },
      get _formState() {
        return t;
      },
      get _options() {
        return s;
      },
      set _options(r) {
        s = {
          ...s,
          ...r
        };
      }
    },
    subscribe: Nt,
    trigger: Se,
    register: Re,
    handleSubmit: Qe,
    watch: Ut,
    setValue: ye,
    setValues: It,
    getValues: $e,
    reset: Ze,
    resetField: Lt,
    resetDefaultValues: (r, i = {}) => {
      if (u = N(r), !i.keepDirty) {
        const n = le(u, l);
        t.dirtyFields = n, t.isDirty = !W(n);
      }
      i.keepIsValid || M(), _.state.next({
        ...t,
        defaultValues: u
      });
    },
    clearErrors: Ke,
    unregister: Ce,
    setError: xe,
    setFocus: Bt,
    getFieldState: Ye
  };
  return {
    ...et,
    formControl: et
  };
}
function _r(e = {}) {
  const s = b.useRef(void 0), t = b.useRef(void 0), [a, u] = b.useState(() => ({
    ...N(pt),
    isLoading: G(e.defaultValues),
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: G(e.defaultValues) ? void 0 : e.defaultValues
  }));
  if (!s.current)
    if (e.formControl)
      s.current = {
        ...e.formControl,
        formState: a
      }, e.defaultValues && !G(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: o, ...f } = Vr(e);
      s.current = {
        ...f,
        formState: a
      };
    }
  const l = s.current.control;
  return l._options = e, We(() => {
    const o = l._subscribe({
      formState: l._proxyFormState,
      callback: () => u({
        ...l._formState,
        defaultValues: l._defaultValues
      }),
      reRenderRoot: !0
    });
    return u((f) => ({
      ...f,
      isReady: !0
    })), l._formState.isReady = !0, o;
  }, [l]), b.useEffect(() => l._disableForm(e.disabled), [l, e.disabled]), b.useEffect(() => {
    e.mode && (l._options.mode = e.mode), e.reValidateMode && (l._options.reValidateMode = e.reValidateMode);
  }, [l, e.mode, e.reValidateMode]), b.useEffect(() => {
    e.errors && (l._setErrors(e.errors), l._focusError());
  }, [l, e.errors]), b.useEffect(() => {
    e.shouldUnregister && l._subjects.state.next({
      values: l._getWatch()
    });
  }, [l, e.shouldUnregister]), b.useEffect(() => {
    if (l._proxyFormState.isDirty) {
      const o = l._getDirty();
      o !== a.isDirty && l._subjects.state.next({
        isDirty: o
      });
    }
  }, [l, a.isDirty]), b.useEffect(() => {
    var o;
    e.values && !K(e.values, t.current) ? (l._reset(e.values, {
      keepFieldsRef: !0,
      ...l._options.resetOptions
    }), !((o = l._options.resetOptions) === null || o === void 0) && o.keepIsValid || l._setValid(), t.current = e.values, u((f) => ({ ...f }))) : l._resetDefaultValues();
  }, [l, e.values]), b.useEffect(() => {
    l._state.mount || (l._setValid(), l._state.mount = !0), l._state.watch && (l._state.watch = !1, l._subjects.state.next({ ...l._formState })), l._removeUnmounted();
  }), s.current.formState = b.useMemo(() => wt(a, l), [l, a]), s.current;
}
const Vt = (e) => e === null || e === "" || isNaN(+e) ? null : +e, _t = (e) => typeof e == "number" && !isNaN(+e) ? { value: e, message: "Invalid range" } : void 0, Rr = ({ isLoading: e, valueFrom: s, valueTo: t, onSave: a, units: u }) => {
  const { t: l } = Xt("uiKit", { keyPrefix: "widgets" }), {
    control: o,
    formState: { errors: f, isValid: S },
    handleSubmit: O,
    setValue: j,
    watch: v
  } = _r({
    defaultValues: {
      from: s ?? "",
      to: t ?? ""
    },
    mode: "onChange"
  }), F = v("from"), _ = v("to"), q = ["from", "to"], T = Ht(() => {
    const V = s === +F || s === void 0 && F === "", A = t === +_ || t === void 0 && _ === "";
    return V && A && !(s === void 0 && t === void 0) && !e;
  }, [s, t, F, _, e]), M = (V) => {
    a({
      from: Vt(V.from),
      to: Vt(V.to)
    });
  }, I = () => {
    a({ from: null, to: null });
  };
  return jt(() => {
    j("from", s ?? ""), j("to", t ?? "");
  }, [s, t, j]), /* @__PURE__ */ ie.jsxs(Gt, { component: "form", onSubmit: O(M), onReset: I, children: [
    /* @__PURE__ */ ie.jsxs(st, { direction: "row", justifyContent: "space-between", children: [
      /* @__PURE__ */ ie.jsx(Qt, { color: "text.text3", variant: "caption12", children: l("Set the optimal value range") }),
      /* @__PURE__ */ ie.jsx($t, { type: "reset", value: l("Reset"), disableUnderline: !0, disabled: e, onClick: I })
    ] }),
    /* @__PURE__ */ ie.jsxs(st, { direction: "row", gap: "8px", alignItems: "flex-end", children: [
      q.map((V) => /* @__PURE__ */ ie.jsx(
        rr,
        {
          name: V,
          control: o,
          rules: {
            min: V === "from" ? void 0 : _t(F),
            max: V === "to" ? void 0 : _t(_),
            pattern: { value: Kt, message: "Invalid format" }
          },
          render: ({ field: A }) => {
            var D;
            return /* @__PURE__ */ ie.jsx(
              Yt,
              {
                ...A,
                label: ((D = f[V]) == null ? void 0 : D.message) || l(V),
                error: !!f[V],
                placeholder: `0 ${u}`
              }
            );
          }
        },
        V
      )),
      /* @__PURE__ */ ie.jsxs(
        Jt,
        {
          type: "submit",
          size: "small",
          variant: "primary",
          disabled: !S || e,
          sx: {
            minWidth: "80px",
            "&, &:hover, &:focus": {
              backgroundColor: T ? "alerts.success" : "alerts.alert",
              borderColor: T ? "alerts.success" : "alerts.alert"
            }
          },
          children: [
            l(T ? "Saved" : "Save"),
            T && /* @__PURE__ */ ie.jsx(zt, {})
          ]
        }
      )
    ] })
  ] });
};
export {
  Rr as ValueBoundariesForm
};
