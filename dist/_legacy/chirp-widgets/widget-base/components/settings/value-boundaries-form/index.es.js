import { jsxRuntimeExports as ie } from "../../../../../../jsx-runtime-BgepH7Pb.js";
import { Stack as rt } from "@mui/material";
import b, { useMemo as Wt, useEffect as jt } from "react";
import { Form as qt, ResetInput as Ht, TextField as Gt } from "./style.es.js";
import { numericFormat as $t } from "../../../../../../helpers/validation.es.js";
import { Checkmark as Yt } from "../../../../../../assets/icons/Checkmark/index.es.js";
import { Button as Kt } from "../../../../../button/index.es.js";
import { Typography as zt } from "../../../../../typogrpahy/index.es.js";
import { useTranslation as Jt } from "react-i18next";
var ge = (e) => e.type === "checkbox", ue = (e) => e instanceof Date, q = (e) => e == null;
const Vt = (e) => typeof e == "object";
var p = (e) => !q(e) && !Array.isArray(e) && Vt(e) && !ue(e), _t = (e) => p(e) && e.target ? ge(e.target) ? e.target.checked : e.target.value : e, vt = (e, s) => s.split(".").some((t, a, u) => !isNaN(Number(t)) && e.has(u.slice(0, a).join("."))), Qt = (e) => {
  const s = e.constructor && e.constructor.prototype;
  return p(s) && s.hasOwnProperty("isPrototypeOf");
}, we = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function N(e) {
  if (e instanceof Date)
    return new Date(e);
  const s = typeof FileList < "u" && e instanceof FileList;
  if (we && (e instanceof Blob || s))
    return e;
  const t = Array.isArray(e);
  if (!t && !(p(e) && Qt(e)))
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
}, pe = "form", bt = "root", Ft = ["__proto__", "constructor", "prototype"];
var Ve = (e) => /^\w*$/.test(e), C = (e) => e === void 0, ke = (e) => e.split(/[.[\]'"]/g).filter(Boolean), m = (e, s, t) => {
  if (!s || !p(e))
    return t;
  const a = Ve(s) ? [s] : ke(s);
  if (a.some((l) => Ft.includes(l)))
    return t;
  const u = a.reduce((l, o) => q(l) ? void 0 : l[o], e);
  return C(u) || u === e ? C(e[s]) ? t : e[s] : u;
}, Y = (e) => typeof e == "boolean", G = (e) => typeof e == "function", R = (e, s, t) => {
  let a = -1;
  const u = Ve(s) ? [s] : ke(s), l = u.length, o = l - 1;
  for (; ++a < l; ) {
    const f = u[a];
    let S = t;
    if (a !== o) {
      const O = e[f];
      S = p(O) || Array.isArray(O) ? O : isNaN(+u[a + 1]) ? {} : [];
    }
    if (Ft.includes(f))
      return;
    e[f] = S, e = e[f];
  }
};
const xt = b.createContext(null);
xt.displayName = "HookFormControlContext";
const Be = () => b.useContext(xt);
var At = (e, s, t, a = !0) => {
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
const Pe = we ? b.useLayoutEffect : b.useEffect;
function Xt(e) {
  const s = Be(), { control: t = s, disabled: a, name: u, exact: l } = e || {}, [o, f] = b.useState(() => ({
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
  return Pe(() => t._subscribe({
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
  }, [t]), b.useMemo(() => At(o, t, S.current, !1), [o, t]);
}
var $ = (e) => typeof e == "string", Ue = (e, s, t, a, u) => $(e) ? (a && s.watch.add(e), m(t, e, u)) : Array.isArray(e) ? e.map((l) => (a && s.watch.add(l), m(t, l))) : (a && (s.watchAll = !0), t), Ne = (e) => q(e) || !Vt(e);
function K(e, s, t = /* @__PURE__ */ new WeakSet()) {
  if (e === s)
    return !0;
  if (Ne(e) || Ne(s))
    return Object.is(e, s);
  if (ue(e) && ue(s))
    return Object.is(e.getTime(), s.getTime());
  const a = Object.keys(e), u = Object.keys(s);
  if (a.length !== u.length)
    return !1;
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
function Zt(e) {
  const s = Be(), { control: t = s, name: a, defaultValue: u, disabled: l, exact: o, compute: f } = e || {}, S = b.useRef(u), O = b.useRef(f), H = b.useRef(void 0), v = b.useRef(t), F = b.useRef(a);
  O.current = f;
  const [_, W] = b.useState(() => {
    const k = t._getWatch(a, S.current);
    return O.current ? O.current(k) : k;
  }), T = b.useCallback((k) => {
    const w = Ue(a, t._names, k || t._formValues, !1, S.current);
    return O.current ? O.current(w) : w;
  }, [t._formValues, t._names, a]), M = b.useCallback((k) => {
    if (!l) {
      const w = Ue(a, t._names, k || t._formValues, !1, S.current);
      if (O.current) {
        const te = O.current(w);
        K(te, H.current) || (W(te), H.current = te);
      } else
        W(w);
    }
  }, [t._formValues, t._names, l, a]);
  Pe(() => ((v.current !== t || !K(F.current, a)) && (v.current = t, F.current = a, M()), t._subscribe({
    name: a,
    formState: {
      values: !0
    },
    exact: o,
    callback: (k) => {
      M(k.values);
    }
  })), [t, o, a, M]), b.useEffect(() => t._removeUnmounted());
  const I = v.current !== t, V = F.current, D = b.useMemo(() => {
    if (l)
      return null;
    const k = !I && !K(V, a);
    return I || k ? T() : null;
  }, [l, I, a, V, T]);
  return D !== null ? D : _;
}
function er(e) {
  const s = Be(), { name: t, disabled: a, control: u = s, shouldUnregister: l, defaultValue: o, exact: f = !0 } = e, S = vt(u._names.array, t), O = b.useMemo(() => m(u._formValues, t, m(u._defaultValues, t, o)), [u, t, o]), H = Zt({
    control: u,
    name: t,
    defaultValue: O,
    exact: f
  }), v = Xt({
    control: u,
    name: t,
    exact: f
  }), F = b.useRef(e), _ = b.useRef(u.register(t, {
    ...e.rules,
    value: H,
    ...Y(e.disabled) ? { disabled: e.disabled } : {}
  }));
  F.current = e;
  const W = b.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!m(v.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!m(v.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!m(v.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!m(v.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => m(v.errors, t)
    }
  }), [v, t]), T = b.useCallback((D) => _.current.onChange({
    target: {
      value: _t(D),
      name: t
    },
    type: ae.CHANGE
  }), [t]), M = b.useCallback(() => _.current.onBlur({
    target: {
      value: m(u._formValues, t),
      name: t
    },
    type: ae.BLUR
  }), [t, u._formValues]), I = b.useCallback((D) => {
    const k = m(u._fields, t);
    k && k._f && D && (k._f.ref = {
      focus: () => G(D.focus) && D.focus(),
      select: () => G(D.select) && D.select(),
      setCustomValidity: (w) => G(D.setCustomValidity) && D.setCustomValidity(w),
      reportValidity: () => G(D.reportValidity) && D.reportValidity()
    });
  }, [u._fields, t]), V = b.useMemo(() => ({
    name: t,
    value: H,
    ...Y(a) || v.disabled ? { disabled: v.disabled || a } : {},
    onChange: T,
    onBlur: M,
    ref: I
  }), [t, a, v.disabled, T, M, I, H]);
  return b.useEffect(() => {
    const D = u._options.shouldUnregister || l;
    u.register(t, {
      ...F.current.rules,
      ...Y(F.current.disabled) ? { disabled: F.current.disabled } : {}
    });
    const k = (w, te) => {
      const re = m(u._fields, w);
      re && re._f && (re._f.mount = te);
    };
    if (k(t, !0), D) {
      const w = N(m(u._defaultValues, t, m(u._options.defaultValues, t, F.current.defaultValue)));
      R(u._defaultValues, t, w), C(m(u._formValues, t)) && R(u._formValues, t, w);
    }
    return !S && u.register(t), () => {
      (S ? D && !u._state.action : D) ? u.unregister(t) : k(t, !1);
    };
  }, [t, u, S, l]), b.useEffect(() => {
    u._setDisabledField({
      disabled: a,
      name: t
    });
  }, [a, t, u]), b.useMemo(() => ({
    field: V,
    formState: v,
    fieldState: W
  }), [V, v, W]);
}
const tr = (e) => e.render(er(e)), rr = b.createContext(null);
rr.displayName = "HookFormContext";
var sr = (e, s, t, a, u) => s ? {
  ...t[e],
  types: {
    ...t[e] && t[e].types ? t[e].types : {},
    [a]: u || !0
  }
} : {}, Dt = (e) => Array.isArray(e) ? e.filter(Boolean) : [], xe = (e) => Array.isArray(e) ? e : [e], st = () => {
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
function wt(e, s) {
  const t = {};
  for (const a in e)
    if (e.hasOwnProperty(a)) {
      const u = e[a], l = s[a];
      if (u && p(u) && l) {
        const o = wt(u, l);
        p(o) && (t[a] = o);
      } else e[a] && (t[a] = l);
    }
  return t;
}
var j = (e) => p(e) && !Object.keys(e).length, We = (e) => e.type === "file", Ae = (e) => {
  if (!we)
    return !1;
  const s = e ? e.ownerDocument : 0;
  return e instanceof (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement);
}, kt = (e) => e.type === "select-multiple", je = (e) => e.type === "radio", ir = (e) => je(e) || ge(e), Ie = (e) => Ae(e) && e.isConnected;
function ar(e, s) {
  const t = s.slice(0, -1).length;
  let a = 0;
  for (; a < t; ) {
    if (q(e)) {
      e = void 0;
      break;
    }
    e = e[s[a]], a++;
  }
  return e;
}
function nr(e) {
  for (const s in e)
    if (e.hasOwnProperty(s) && !C(e[s]))
      return !1;
  return !0;
}
function B(e, s) {
  if ($(s) && Object.prototype.hasOwnProperty.call(e, s))
    return delete e[s], e;
  const t = Array.isArray(s) ? s : Ve(s) ? [s] : ke(s), a = t.length === 1 ? e : ar(e, t), u = t.length - 1, l = t[u];
  return a && delete a[l], u !== 0 && (p(a) && j(a) || Array.isArray(a) && nr(a)) && B(e, t.slice(0, -1)), e;
}
var lr = (e) => {
  for (const s in e)
    if (G(e[s]))
      return !0;
  return !1;
};
function Et(e) {
  return Array.isArray(e) || p(e) && !lr(e);
}
function Me(e, s = {}) {
  for (const t in e) {
    const a = e[t];
    Et(a) ? (s[t] = Array.isArray(a) ? [] : {}, Me(a, s[t])) : C(a) || (s[t] = !0);
  }
  return s;
}
function Le(e) {
  if (e !== !1) {
    if (e === !0)
      return !0;
    if (Array.isArray(e)) {
      const s = e.map((t) => Le(t));
      return s.some((t) => t !== void 0) ? s : void 0;
    }
    if (p(e)) {
      const s = {};
      for (const t in e) {
        const a = Le(e[t]);
        C(a) || (s[t] = a);
      }
      return Object.keys(s).length ? s : void 0;
    }
  }
}
function le(e, s, t) {
  t || (t = Me(s));
  for (const a in e) {
    const u = e[a];
    if (Et(u))
      C(s) || Ne(t[a]) ? t[a] = Me(u, Array.isArray(u) ? [] : {}) : le(u, q(s) ? {} : s[a], t[a]);
    else {
      const l = s[a];
      t[a] = !K(u, l);
    }
  }
  return Le(t) || {};
}
const it = {
  value: !1,
  isValid: !1
}, at = { value: !0, isValid: !0 };
var St = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const s = e.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: s, isValid: !!s.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !C(e[0].attributes.value) ? C(e[0].value) || e[0].value === "" ? at : { value: e[0].value, isValid: !0 } : at
    ) : it;
  }
  return it;
}, Rt = (e, { valueAsNumber: s, valueAsDate: t, setValueAs: a }) => C(e) ? e : s ? e === "" ? NaN : e && +e : t && $(e) ? new Date(e) : a ? a(e) : e;
const nt = {
  isValid: !1,
  value: null
};
var Ct = (e) => Array.isArray(e) ? e.reduce((s, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : s, nt) : nt;
function lt(e) {
  const s = e.ref;
  return We(s) ? s.files : je(s) ? Ct(e.refs).value : kt(s) ? [...s.selectedOptions].map(({ value: t }) => t) : ge(s) ? St(e.refs).value : Rt(C(s.value) ? e.ref.value : s.value, e);
}
var ur = (e, s, t, a) => {
  const u = {};
  for (const l of e) {
    const o = m(s, l);
    o && R(u, l, o._f);
  }
  return {
    criteriaMode: t,
    names: [...e],
    fields: u,
    shouldUseNativeValidation: a
  };
}, De = (e) => e instanceof RegExp, me = (e) => C(e) ? e : De(e) ? e.source : p(e) ? De(e.value) ? e.value.source : e.value : e, ut = (e) => ({
  isOnSubmit: !e || e === ee.onSubmit,
  isOnBlur: e === ee.onBlur,
  isOnChange: e === ee.onChange,
  isOnAll: e === ee.all,
  isOnTouch: e === ee.onTouched
});
const ot = "AsyncFunction";
var or = (e) => !!e && !!e.validate && !!(G(e.validate) && e.validate.constructor.name === ot || p(e.validate) && Object.values(e.validate).find((s) => s.constructor.name === ot)), dr = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), dt = (e, s, t) => !t && (s.watchAll || s.watch.has(e) || [...s.watch].some((a) => e.startsWith(`${a}.`)));
const he = (e, s, t, a) => {
  for (const u of t || Object.keys(e)) {
    const l = m(e, u);
    if (l) {
      const { _f: o, ...f } = l;
      if (o) {
        if (o.refs && o.refs[0] && s(o.refs[0], u) && !a)
          return !0;
        if (o.ref && s(o.ref, o.name) && !a)
          return !0;
        if (he(f, s))
          break;
      } else if (p(f) && he(f, s))
        break;
    }
  }
};
function ft(e, s, t) {
  const a = m(e, t);
  if (a || Ve(t))
    return {
      error: a,
      name: t
    };
  const u = t.split(".");
  for (; u.length; ) {
    const l = u.join("."), o = m(s, l), f = m(e, l);
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
var fr = (e, s, t, a) => {
  t(e);
  const { name: u, ...l } = e;
  return j(l) || a && Object.keys(l).length >= Object.keys(s).length || Object.keys(l).find((o) => s[o] === (!a || ee.all));
}, cr = (e, s, t) => !e || !s || e === s || xe(e).some((a) => a && (t ? a === s : a.startsWith(s) || s.startsWith(a))), yr = (e, s, t, a, u) => u.isOnAll ? !1 : !t && u.isOnTouch ? !(s || e) : (t ? a.isOnBlur : u.isOnBlur) ? !e : (t ? a.isOnChange : u.isOnChange) ? e : !0, mr = (e, s) => !Dt(m(e, s)).length && B(e, s), ct = (e, s, t) => {
  const a = m(e, t), u = Array.isArray(a) ? a : [];
  return R(u, bt, s[t]), R(e, t, u), e;
};
function yt(e, s, t = "validate") {
  if ($(e) || Array.isArray(e) && e.every($) || Y(e) && !e)
    return {
      type: t,
      message: $(e) ? e : "",
      ref: s
    };
}
var fe = (e) => p(e) && !De(e) ? e : {
  value: e,
  message: ""
}, mt = async (e, s, t, a, u, l) => {
  const { ref: o, refs: f, required: S, maxLength: O, minLength: H, min: v, max: F, pattern: _, validate: W, name: T, valueAsNumber: M, mount: I } = e._f, V = m(t, T);
  if (!I || s.has(T))
    return {};
  const D = f ? f[0] : o, k = (E) => {
    u && D.reportValidity && (D.setCustomValidity(Y(E) ? "" : E || ""), D.reportValidity());
  }, w = {}, te = je(o), re = ge(o), _e = te || re, oe = (M || We(o)) && C(o.value) && C(V) || Ae(o) && o.value === "" || V === "" || Array.isArray(V) && !V.length, Q = sr.bind(null, T, a, w), ve = (E, A, P, U = Z.maxLength, z = Z.minLength) => {
    const se = E ? A : P;
    w[T] = {
      type: E ? U : z,
      message: se,
      ref: o,
      ...Q(E ? U : z, se)
    };
  };
  if (l ? !Array.isArray(V) || !V.length : S && (!_e && (oe || q(V)) || Y(V) && !V || re && !St(f).isValid || te && !Ct(f).isValid)) {
    const { value: E, message: A } = $(S) ? { value: !!S, message: S } : fe(S);
    if (E && (w[T] = {
      type: Z.required,
      message: A,
      ref: D,
      ...Q(Z.required, A)
    }, !a))
      return k(A), w;
  }
  if (!oe && (!q(v) || !q(F))) {
    let E, A;
    const P = fe(F), U = fe(v);
    if (!q(V) && !isNaN(V)) {
      const z = o.valueAsNumber || V && +V;
      q(P.value) || (E = z > P.value), q(U.value) || (A = z < U.value);
    } else {
      const z = o.valueAsDate || new Date(V), se = (be) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + be), de = o.type == "time", ce = o.type == "week";
      $(P.value) && V && (E = de ? se(V) > se(P.value) : ce ? V > P.value : z > new Date(P.value)), $(U.value) && V && (A = de ? se(V) < se(U.value) : ce ? V < U.value : z < new Date(U.value));
    }
    if ((E || A) && (ve(!!E, P.message, U.message, Z.max, Z.min), !a))
      return k(w[T].message), w;
  }
  if ((O || H) && !oe && ($(V) || l && Array.isArray(V))) {
    const E = fe(O), A = fe(H), P = !q(E.value) && V.length > +E.value, U = !q(A.value) && V.length < +A.value;
    if ((P || U) && (ve(P, E.message, A.message), !a))
      return k(w[T].message), w;
  }
  if (_ && !oe && $(V)) {
    const { value: E, message: A } = fe(_);
    if (De(E) && !V.match(E) && (w[T] = {
      type: Z.pattern,
      message: A,
      ref: o,
      ...Q(Z.pattern, A)
    }, !a))
      return k(A), w;
  }
  if (W) {
    if (G(W)) {
      const E = await W(V, t), A = yt(E, D);
      if (A && (w[T] = {
        ...A,
        ...Q(Z.validate, A.message)
      }, !a))
        return k(A.message), w;
    } else if (p(W)) {
      let E = {};
      for (const A in W) {
        if (!j(E) && !a)
          break;
        const P = yt(await W[A](V, t), D, A);
        P && (E = {
          ...P,
          ...Q(A, P.message)
        }, k(P.message), a && (w[T] = E));
      }
      if (!j(E) && (w[T] = {
        ref: D,
        ...E
      }, !a))
        return w;
    }
  }
  return k(!0), w;
};
const hr = {
  mode: ee.onSubmit,
  reValidateMode: ee.onChange,
  shouldFocusError: !0
}, Ot = {
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
function gr(e = {}) {
  let s = {
    ...hr,
    ...e
  }, t = {
    ...N(Ot),
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
  const H = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, v = {
    ...H
  };
  let F = {
    ...v
  };
  const _ = {
    array: st(),
    state: st()
  }, W = s.criteriaMode === ee.all, T = (r) => (i) => {
    clearTimeout(O), O = setTimeout(r, i);
  }, M = async (r) => {
    if (!o.keepIsValid && !s.disabled && (v.isValid || F.isValid || r)) {
      let i;
      s.resolver ? (i = j((await Q()).errors), I()) : i = await A({
        fields: a,
        onlyCheckValid: !0,
        eventType: ae.VALID
      }), i !== t.isValid && _.state.next({
        isValid: i
      });
    }
  }, I = (r, i) => {
    !s.disabled && (v.isValidating || v.validatingFields || F.isValidating || F.validatingFields) && ((r || Array.from(f.mount)).forEach((n) => {
      n && (i ? R(t.validatingFields, n, i) : B(t.validatingFields, n));
    }), _.state.next({
      validatingFields: t.validatingFields,
      isValidating: !j(t.validatingFields)
    }));
  }, V = () => {
    t.dirtyFields = le(u, l);
  }, D = (r, i = [], n, d, y = !0, h = !0) => {
    if (d && n && !s.disabled) {
      if (o.action = !0, h && Array.isArray(m(a, r))) {
        const c = n(m(a, r), d.argA, d.argB);
        y && R(a, r, c);
      }
      if (h && Array.isArray(m(t.errors, r))) {
        const c = n(m(t.errors, r), d.argA, d.argB);
        y && R(t.errors, r, c), mr(t.errors, r);
      }
      if ((v.touchedFields || F.touchedFields) && h && Array.isArray(m(t.touchedFields, r))) {
        const c = n(m(t.touchedFields, r), d.argA, d.argB);
        y && R(t.touchedFields, r, c);
      }
      (v.dirtyFields || F.dirtyFields) && V(), _.state.next({
        name: r,
        isDirty: U(r, i),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      R(l, r, i);
  }, k = (r, i) => {
    R(t.errors, r, i), _.state.next({
      errors: t.errors
    });
  }, w = (r) => {
    t.errors = r, _.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, te = (r) => {
    const i = Ve(r) ? [r] : ke(r);
    let n = l, d = u;
    for (let y = 0; y < i.length - 1; y++) {
      const h = i[y];
      if (n = q(n) ? n : n[h], d = q(d) ? d : d[h], n === null && d !== null)
        return !0;
    }
    return !1;
  }, re = (r, i, n, d) => {
    const y = m(a, r);
    if (y) {
      if (te(r))
        return;
      const h = C(m(l, r)), c = m(l, r, C(n) ? m(u, r) : n);
      C(c) || d && d.defaultChecked || i ? R(l, r, i ? c : lt(y._f)) : de(r, c), o.mount && !o.action && (M(), h && t.isDirty && (v.isDirty || F.isDirty) && (U() || (t.isDirty = !1, _.state.next({ ...t }))));
    }
  }, _e = (r, i, n, d, y) => {
    let h = !1, c = !1;
    const g = {
      name: r
    };
    if (!s.disabled) {
      if (!n || d) {
        (v.isDirty || F.isDirty) && (c = t.isDirty, t.isDirty = g.isDirty = U(), h = c !== g.isDirty);
        const x = K(m(u, r), i);
        c = !!m(t.dirtyFields, r), x !== t.isDirty ? t.dirtyFields = le(u, l) : x ? B(t.dirtyFields, r) : R(t.dirtyFields, r, !0), g.dirtyFields = t.dirtyFields, h = h || (v.dirtyFields || F.dirtyFields) && c !== !x;
      }
      if (n) {
        const x = m(t.touchedFields, r);
        x || (R(t.touchedFields, r, n), g.touchedFields = t.touchedFields, h = h || (v.touchedFields || F.touchedFields) && x !== n);
      }
      h && y && _.state.next(g);
    }
    return h ? g : {};
  }, oe = (r, i, n, d) => {
    const y = m(t.errors, r), h = (v.isValid || F.isValid) && Y(i) && t.isValid !== i;
    if (s.delayError && n ? (S = T(() => k(r, n)), S(s.delayError)) : (clearTimeout(O), S = null, n ? R(t.errors, r, n) : B(t.errors, r)), (n ? !K(y, n) : y) || !j(d) || h) {
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
  }, Q = async (r) => (I(r, !0), await s.resolver(l, s.context, ur(r || f.mount, a, s.criteriaMode, s.shouldUseNativeValidation))), ve = async (r) => {
    const { errors: i } = await Q(r);
    if (I(r), r)
      for (const n of r) {
        const d = m(i, n);
        d ? f.array.has(n) && p(d) && !Object.keys(d).some((y) => !Number.isNaN(Number(y))) ? ct(t.errors, { [n]: d }, n) : R(t.errors, n, d) : B(t.errors, n);
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
          const y = n[d];
          y && Fe(`${pe}.${d}`, {
            message: $(y.message) ? y.message : "",
            type: y.type || Z.validate
          });
        }
      else $(n) || !n ? Fe(pe, {
        message: n || "",
        type: Z.validate
      }) : Ye(pe);
      return n;
    }
    return !0;
  }, A = async ({ fields: r, onlyCheckValid: i, name: n, eventType: d, context: y = {
    valid: !0,
    runRootValidation: !1
  } }) => {
    if (e.validate && (y.runRootValidation = !0, !await E({
      name: n,
      eventType: d
    }) && (y.valid = !1, i)))
      return y.valid;
    for (const h in r) {
      const c = r[h];
      if (c) {
        const { _f: g, ...x } = c;
        if (g) {
          const L = f.array.has(g.name), J = c._f && or(c._f), X = v.validatingFields || v.isValidating || F.validatingFields || F.isValidating;
          J && X && I([g.name], !0);
          const ne = await mt(c, f.disabled, l, W, s.shouldUseNativeValidation && !i, L);
          if (J && X && I([g.name]), ne[g.name] && (y.valid = !1, i) || (!i && (m(ne, g.name) ? L ? ct(t.errors, ne, g.name) : R(t.errors, g.name, ne[g.name]) : B(t.errors, g.name)), e.shouldUseNativeValidation && ne[g.name]))
            break;
        }
        !j(x) && await A({
          context: y,
          onlyCheckValid: i,
          fields: x,
          name: h,
          eventType: d
        });
      }
    }
    return y.valid;
  }, P = () => {
    for (const r of f.unMount) {
      const i = m(a, r);
      i && (i._f.refs ? i._f.refs.every((n) => !Ie(n)) : !Ie(i._f.ref)) && Se(r);
    }
    f.unMount = /* @__PURE__ */ new Set();
  }, U = (r, i) => !s.disabled && (r && i && R(l, r, i), !K(Ge(), u)), z = (r, i, n) => Ue(r, f, {
    ...o.mount ? l : C(i) ? u : $(r) ? { [r]: i } : i
  }, n, i), se = (r) => Dt(m(o.mount ? l : u, r, s.shouldUnregister ? m(u, r, []) : [])), de = (r, i, n = {}, d = !1) => {
    const y = m(a, r);
    let h = i;
    if (y) {
      const c = y._f;
      c && (!c.disabled && R(l, r, Rt(i, c)), h = Ae(c.ref) && q(i) ? "" : i, kt(c.ref) ? [...c.ref.options].forEach((g) => g.selected = h.includes(g.value)) : c.refs ? ge(c.ref) ? c.refs.forEach((g) => {
        (!g.defaultChecked || !g.disabled) && (Array.isArray(h) ? g.checked = !!h.find((x) => x === g.value) : g.checked = h === g.value || !!h);
      }) : c.refs.forEach((g) => g.checked = g.value === h) : We(c.ref) ? c.ref.value = "" : (c.ref.value = h, c.ref.type || _.state.next({
        name: r,
        values: d ? l : N(l)
      })));
    }
    (n.shouldDirty || n.shouldTouch) && _e(r, h, n.shouldTouch, n.shouldDirty, !0), n.shouldValidate && Ee(r);
  }, ce = (r, i, n, d = !1) => {
    for (const y in i) {
      if (!i.hasOwnProperty(y))
        return;
      const h = i[y], c = r + "." + y, g = m(a, c);
      (f.array.has(r) || p(h) || g && !g._f) && !ue(h) ? ce(c, h, n, d) : de(c, h, n, d);
    }
  }, be = (r, i, n, d) => {
    const y = m(a, r), h = f.array.has(r), c = d ? i : N(i), g = m(l, r), x = K(g, c);
    if (x || R(l, r, c), h)
      _.array.next({
        name: r,
        values: d ? l : N(l)
      }), (v.isDirty || v.dirtyFields || F.isDirty || F.dirtyFields) && n.shouldDirty && (V(), _.state.next({
        name: r,
        dirtyFields: t.dirtyFields,
        isDirty: U(r, c)
      }));
    else {
      const L = Array.isArray(c) && !c.length || j(c);
      !y || y._f || q(c) || L ? de(r, c, n, d) : ce(r, c, n, d);
    }
    if (!x) {
      const L = dt(r, f), J = d ? l : N(l);
      _.state.next({
        ...L && t,
        name: o.mount || L ? r : void 0,
        values: J
      });
    }
  }, ye = (r, i, n = {}) => be(r, i, n, !1), Tt = (r, i = {}) => {
    const n = G(r) ? r(l) : r;
    if (!K(l, n)) {
      l = {
        ...l,
        ...n
      };
      for (const d of f.mount)
        be(d, m(n, d), i, !0);
      _.state.next({
        ...t,
        name: void 0,
        type: void 0,
        values: l
      }), i.shouldValidate && M();
    }
  }, qe = async (r) => {
    o.mount = !0;
    const i = r.target;
    let n = i.name, d = !0;
    const y = m(a, n), h = (x) => {
      d = Number.isNaN(x) || ue(x) && isNaN(x.getTime()) || K(x, m(l, n, x));
    }, c = ut(s.mode), g = ut(s.reValidateMode);
    if (y) {
      let x, L;
      const J = i.type ? lt(y._f) : _t(r), X = r.type === ae.BLUR || r.type === ae.FOCUS_OUT, ne = !dr(y._f) && !e.validate && !s.resolver && !m(t.errors, n) && !y._f.deps || yr(X, m(t.touchedFields, n), t.isSubmitted, g, c), Oe = dt(n, f, X);
      R(l, n, J), X ? (!i || !i.readOnly) && (y._f.onBlur && y._f.onBlur(r), S && S(0)) : y._f.onChange && y._f.onChange(r);
      const Te = _e(n, J, X), Bt = !j(Te) || Oe;
      if (!X && _.state.next({
        name: n,
        type: r.type,
        values: N(l)
      }), ne)
        return (v.isValid || F.isValid) && (s.mode === "onBlur" ? X && M() : X || M()), Bt && _.state.next({ name: n, ...Oe ? {} : Te });
      if (!s.resolver && e.validate && await E({
        name: n,
        eventType: r.type
      }), !X && Oe && _.state.next({ ...t }), s.resolver) {
        const { errors: et } = await Q([n]);
        if (I([n]), h(J), d) {
          const Pt = ft(t.errors, a, n), tt = ft(et, a, Pt.name || n);
          x = tt.error, n = tt.name, L = j(et);
        }
      } else
        I([n], !0), x = (await mt(y, f.disabled, l, W, s.shouldUseNativeValidation))[n], I([n]), h(J), d && (x ? L = !1 : (v.isValid || F.isValid) && (L = await A({
          fields: a,
          onlyCheckValid: !0,
          name: n,
          eventType: r.type
        })));
      d && (y._f.deps && (!Array.isArray(y._f.deps) || y._f.deps.length > 0) && Ee(y._f.deps), oe(n, L, x, Te));
    }
  }, He = (r, i) => {
    if (m(t.errors, i) && r.focus)
      return r.focus(), 1;
  }, Ee = async (r, i = {}) => {
    let n, d;
    const y = xe(r);
    if (s.resolver) {
      const h = await ve(C(r) ? r : y);
      n = j(h), d = r ? !y.some((c) => m(h, c)) : n;
    } else r ? (d = (await Promise.all(y.map(async (h) => {
      const c = m(a, h);
      return await A({
        fields: c && c._f ? { [h]: c } : c,
        eventType: ae.TRIGGER
      });
    }))).every(Boolean), !(!d && !t.isValid) && M()) : d = n = await A({
      fields: a,
      name: r,
      eventType: ae.TRIGGER
    });
    return _.state.next({
      ...!$(r) || (v.isValid || F.isValid) && n !== t.isValid ? {} : { name: r },
      ...s.resolver || !r ? { isValid: n } : {},
      errors: t.errors
    }), i.shouldFocus && !d && he(a, He, r ? y : f.mount), d;
  }, Ge = (r, i) => {
    let n = {
      ...o.mount ? l : u
    };
    return i && (n = wt(i.dirtyFields ? t.dirtyFields : t.touchedFields, n)), C(r) ? n : $(r) ? m(n, r) : r.map((d) => m(n, d));
  }, $e = (r, i) => ({
    invalid: !!m((i || t).errors, r),
    isDirty: !!m((i || t).dirtyFields, r),
    error: m((i || t).errors, r),
    isValidating: !!m(t.validatingFields, r),
    isTouched: !!m((i || t).touchedFields, r)
  }), Ye = (r) => {
    const i = r ? xe(r) : void 0;
    i == null || i.forEach((n) => B(t.errors, n)), i ? i.forEach((n) => {
      _.state.next({
        name: n,
        errors: t.errors
      });
    }) : _.state.next({
      errors: {}
    });
  }, Fe = (r, i, n) => {
    const d = (m(a, r, { _f: {} })._f || {}).ref, y = m(t.errors, r) || {}, { ref: h, message: c, type: g, ...x } = y;
    R(t.errors, r, {
      ...x,
      ...i,
      ref: d
    }), _.state.next({
      name: r,
      errors: t.errors,
      isValid: !1
    }), n && n.shouldFocus && d && d.focus && d.focus();
  }, pt = (r, i) => G(r) ? _.state.subscribe({
    next: (n) => "values" in n && r(n.values || z(void 0, i), n)
  }) : z(r, i, !0), Ke = (r) => _.state.subscribe({
    next: (i) => {
      if (cr(r.name, i.name, r.exact) && fr(i, r.formState || v, Lt, r.reRenderRoot)) {
        const n = { ...l };
        r.callback({
          values: n,
          ...t,
          ...i,
          defaultValues: u
        });
      }
    }
  }).unsubscribe, It = (r) => (o.mount = !0, F = {
    ...F,
    ...r.formState
  }, Ke({
    ...r,
    formState: {
      ...H,
      ...r.formState
    }
  })), Se = (r, i = {}) => {
    for (const n of r ? xe(r) : f.mount)
      f.mount.delete(n), f.array.delete(n), i.keepValue || (B(a, n), B(l, n)), !i.keepError && B(t.errors, n), !i.keepDirty && B(t.dirtyFields, n), !i.keepTouched && B(t.touchedFields, n), !i.keepIsValidating && B(t.validatingFields, n), !s.shouldUnregister && !i.keepDefaultValue && B(u, n);
    _.state.next({
      values: N(l)
    }), _.state.next({
      ...t,
      ...i.keepDirty ? { isDirty: U() } : {}
    }), !i.keepIsValid && M();
  }, ze = ({ disabled: r, name: i }) => {
    if (Y(r) && o.mount || r || f.disabled.has(i)) {
      const y = f.disabled.has(i) !== !!r;
      r ? f.disabled.add(i) : f.disabled.delete(i), y && o.mount && !o.action && M();
    }
  }, Re = (r, i = {}) => {
    let n = m(a, r);
    const d = Y(i.disabled) || Y(s.disabled), y = !f.registerName.has(r) && n && n._f && !n._f.mount;
    return R(a, r, {
      ...n || {},
      _f: {
        ...n && n._f ? n._f : { ref: { name: r } },
        name: r,
        mount: !0,
        ...i
      }
    }), f.mount.add(r), n && !y ? ze({
      disabled: Y(i.disabled) ? i.disabled : s.disabled,
      name: r
    }) : re(r, !0, i.value), {
      ...d ? { disabled: i.disabled || s.disabled } : {},
      ...s.progressive ? {
        required: !!i.required,
        min: me(i.min),
        max: me(i.max),
        minLength: me(i.minLength),
        maxLength: me(i.maxLength),
        pattern: me(i.pattern)
      } : {},
      name: r,
      onChange: qe,
      onBlur: qe,
      ref: (h) => {
        if (h) {
          f.registerName.add(r), Re(r, i), f.registerName.delete(r), n = m(a, r);
          const c = C(h.value) && h.querySelectorAll && h.querySelectorAll("input,select,textarea")[0] || h, g = ir(c), x = n._f.refs || [];
          if (g ? x.find((L) => L === c) : c === n._f.ref)
            return;
          R(a, r, {
            _f: {
              ...n._f,
              ...g ? {
                refs: [
                  ...x.filter(Ie),
                  c,
                  ...Array.isArray(m(u, r)) ? [{}] : []
                ],
                ref: { type: c.type, name: r }
              } : { ref: c }
            }
          }), re(r, !1, void 0, c);
        } else
          n = m(a, r, {}), n._f && (n._f.mount = !1), (s.shouldUnregister || i.shouldUnregister) && !(vt(f.array, r) && o.action) && f.unMount.add(r);
      }
    };
  }, Ce = () => s.shouldFocusError && !s.shouldUseNativeValidation && he(a, He, f.mount), Ut = (r) => {
    Y(r) && (_.state.next({ disabled: r }), he(a, (i, n) => {
      const d = m(a, n);
      d && (i.disabled = d._f.disabled || r, Array.isArray(d._f.refs) && d._f.refs.forEach((y) => {
        y.disabled = d._f.disabled || r;
      }));
    }, 0, !1));
  }, Je = (r, i) => async (n) => {
    let d;
    n && (n.preventDefault && n.preventDefault(), n.persist && n.persist());
    let y = N(l);
    if (_.state.next({
      isSubmitting: !0
    }), s.resolver) {
      const { errors: h, values: c } = await Q();
      I(), t.errors = h, y = N(c);
    } else
      await A({
        fields: a,
        eventType: ae.SUBMIT
      });
    if (f.disabled.size)
      for (const h of f.disabled)
        B(y, h);
    if (B(t.errors, bt), j(t.errors)) {
      _.state.next({
        errors: {}
      });
      try {
        await r(y, n);
      } catch (h) {
        d = h;
      }
    } else
      i && await i({ ...t.errors }, n), Ce(), setTimeout(Ce);
    if (_.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: j(t.errors) && !d,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), d)
      throw d;
  }, Nt = (r, i = {}) => {
    m(a, r) && (C(i.defaultValue) ? ye(r, N(m(u, r))) : (ye(r, i.defaultValue), R(u, r, N(i.defaultValue))), i.keepTouched || B(t.touchedFields, r), i.keepDirty || (B(t.dirtyFields, r), t.isDirty = i.defaultValue ? U(r, N(m(u, r))) : U()), i.keepError || (B(t.errors, r), v.isValid && M()), _.state.next({ ...t }));
  }, Qe = (r, i = {}) => {
    const n = r ? N(r) : u, d = N(n), y = j(r), h = d;
    if (i.keepDefaultValues || (u = n), !i.keepValues) {
      if (i.keepDirtyValues) {
        const c = /* @__PURE__ */ new Set([
          ...f.mount,
          ...Object.keys(le(u, l))
        ]);
        for (const g of Array.from(c)) {
          const x = m(t.dirtyFields, g), L = m(l, g), J = m(h, g);
          x && !C(L) ? R(h, g, L) : !x && !C(J) && ye(g, J);
        }
      } else {
        if (we && C(r))
          for (const c of f.mount) {
            const g = m(a, c);
            if (g && g._f) {
              const x = Array.isArray(g._f.refs) ? g._f.refs[0] : g._f.ref;
              if (Ae(x)) {
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
            ye(c, m(h, c));
        else
          a = {};
      }
      if (s.shouldUnregister) {
        if (l = i.keepDefaultValues ? N(u) : {}, i.keepFieldsRef)
          for (const c of f.mount)
            R(l, c, m(h, c));
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
    }, o.mount = !v.isValid || !!i.keepIsValid || !!i.keepDirtyValues || !s.shouldUnregister && !j(h), o.watch = !!s.shouldUnregister, o.keepIsValid = !!i.keepIsValid, o.action = !1, i.keepErrors || (t.errors = {}), _.state.next({
      submitCount: i.keepSubmitCount ? t.submitCount : 0,
      isDirty: y ? !1 : i.keepDirty ? t.isDirty : i.keepValues ? U() : !!(i.keepDefaultValues && !K(r, u)),
      isSubmitted: i.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: y ? {} : i.keepDirtyValues ? i.keepDefaultValues && l ? le(u, l) : t.dirtyFields : i.keepDefaultValues && r ? le(u, r) : i.keepDirty ? t.dirtyFields : {},
      touchedFields: i.keepTouched ? t.touchedFields : {},
      errors: i.keepErrors ? t.errors : {},
      isSubmitSuccessful: i.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: u
    });
  }, Xe = (r, i) => Qe(G(r) ? r(l) : r, { ...s.resetOptions, ...i }), Mt = (r, i = {}) => {
    const n = m(a, r), d = n && n._f;
    if (d) {
      const y = d.refs ? d.refs[0] : d.ref;
      y.focus && setTimeout(() => {
        y.focus(), i.shouldSelect && G(y.select) && y.select();
      });
    }
  }, Lt = (r) => {
    t = {
      ...t,
      ...r
    };
  }, Ze = {
    control: {
      register: Re,
      unregister: Se,
      getFieldState: $e,
      handleSubmit: Je,
      setError: Fe,
      _subscribe: Ke,
      _runSchema: Q,
      _updateIsValidating: I,
      _focusError: Ce,
      _getWatch: z,
      _getDirty: U,
      _setValid: M,
      _setFieldArray: D,
      _setDisabledField: ze,
      _setErrors: w,
      _getFieldArray: se,
      _reset: Qe,
      _resetDefaultValues: () => G(s.defaultValues) && s.defaultValues().then((r) => {
        Xe(r, s.resetOptions), _.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: P,
      _disableForm: Ut,
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
    subscribe: It,
    trigger: Ee,
    register: Re,
    handleSubmit: Je,
    watch: pt,
    setValue: ye,
    setValues: Tt,
    getValues: Ge,
    reset: Xe,
    resetField: Nt,
    resetDefaultValues: (r, i = {}) => {
      if (u = N(r), !i.keepDirty) {
        const n = le(u, l);
        t.dirtyFields = n, t.isDirty = !j(n);
      }
      i.keepIsValid || M(), _.state.next({
        ...t,
        defaultValues: u
      });
    },
    clearErrors: Ye,
    unregister: Se,
    setError: Fe,
    setFocus: Mt,
    getFieldState: $e
  };
  return {
    ...Ze,
    formControl: Ze
  };
}
function Vr(e = {}) {
  const s = b.useRef(void 0), t = b.useRef(void 0), [a, u] = b.useState(() => ({
    ...N(Ot),
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
      const { formControl: o, ...f } = gr(e);
      s.current = {
        ...f,
        formState: a
      };
    }
  const l = s.current.control;
  return l._options = e, Pe(() => {
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
  }), s.current.formState = b.useMemo(() => At(a, l), [l, a]), s.current;
}
const ht = (e) => e === null || e === "" || isNaN(+e) ? null : +e, gt = (e) => typeof e == "number" && !isNaN(+e) ? { value: e, message: "Invalid range" } : void 0, Rr = ({ isLoading: e, valueFrom: s, valueTo: t, onSave: a, units: u }) => {
  const { t: l } = Jt("uiKit", { keyPrefix: "widgets" }), {
    control: o,
    formState: { errors: f, isValid: S },
    handleSubmit: O,
    setValue: H,
    watch: v
  } = Vr({
    defaultValues: {
      from: s ?? "",
      to: t ?? ""
    },
    mode: "onChange"
  }), F = v("from"), _ = v("to"), W = ["from", "to"], T = Wt(() => {
    const V = s === +F || s === void 0 && F === "", D = t === +_ || t === void 0 && _ === "";
    return V && D && !(s === void 0 && t === void 0) && !e;
  }, [s, t, F, _, e]), M = (V) => {
    a({
      from: ht(V.from),
      to: ht(V.to)
    });
  }, I = () => {
    a({ from: null, to: null });
  };
  return jt(() => {
    H("from", s ?? ""), H("to", t ?? "");
  }, [s, t, H]), /* @__PURE__ */ ie.jsxs(qt, { component: "form", onSubmit: O(M), onReset: I, children: [
    /* @__PURE__ */ ie.jsxs(rt, { direction: "row", justifyContent: "space-between", children: [
      /* @__PURE__ */ ie.jsx(zt, { color: "text.text3", variant: "caption12", children: l("Set the optimal value range") }),
      /* @__PURE__ */ ie.jsx(Ht, { type: "reset", value: l("Reset"), disableUnderline: !0, disabled: e, onClick: I })
    ] }),
    /* @__PURE__ */ ie.jsxs(rt, { direction: "row", gap: "8px", alignItems: "flex-end", children: [
      W.map((V) => /* @__PURE__ */ ie.jsx(
        tr,
        {
          name: V,
          control: o,
          rules: {
            min: V === "from" ? void 0 : gt(F),
            max: V === "to" ? void 0 : gt(_),
            pattern: { value: $t, message: "Invalid format" }
          },
          render: ({ field: D }) => {
            var k;
            return /* @__PURE__ */ ie.jsx(
              Gt,
              {
                ...D,
                label: ((k = f[V]) == null ? void 0 : k.message) || l(V),
                error: !!f[V],
                placeholder: `0 ${u}`
              }
            );
          }
        },
        V
      )),
      /* @__PURE__ */ ie.jsxs(
        Kt,
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
            T && /* @__PURE__ */ ie.jsx(Yt, {})
          ]
        }
      )
    ] })
  ] });
};
export {
  Rr as ValueBoundariesForm
};
