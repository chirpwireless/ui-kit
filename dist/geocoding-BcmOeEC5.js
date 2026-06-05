import { commonjsGlobal as q, getDefaultExportFromCjs as ce } from "./_commonjsHelpers-TBt1UqMc.js";
var N = le, fe = Object.prototype.hasOwnProperty;
function le() {
  for (var e = {}, r = 0; r < arguments.length; r++) {
    var t = arguments[r];
    for (var n in t)
      fe.call(t, n) && (e[n] = t[n]);
  }
  return e;
}
function pe(e) {
  var r = e.match(/\s*(.+)\s*=\s*"?([^"]+)"?/);
  return r ? {
    key: r[1],
    value: r[2]
  } : null;
}
function de(e) {
  var r = e.match(/<?([^>]*)>(.*)/);
  if (!r) return null;
  var t = r[1], n = r[2].split(";"), a = null, i = n.reduce(function(s, v) {
    var o = pe(v);
    return o ? o.key === "rel" ? (a || (a = o.value), s) : (s[o.key] = o.value, s) : s;
  }, {});
  return a ? {
    url: t,
    rel: a,
    params: i
  } : null;
}
function ve(e) {
  return e ? e.split(/,\s*</).reduce(function(r, t) {
    var n = de(t);
    if (!n) return r;
    var a = n.rel.split(/\s+/);
    return a.forEach(function(i) {
      r[i] || (r[i] = {
        url: n.url,
        params: n.params
      });
    }), r;
  }, {}) : {};
}
var he = ve, ye = he;
function F(e, r) {
  this.request = e, this.headers = r.headers, this.rawBody = r.body, this.statusCode = r.statusCode;
  try {
    this.body = JSON.parse(r.body || "{}");
  } catch {
    this.body = r.body;
  }
  this.links = ye(this.headers.link);
}
F.prototype.hasNextPage = function() {
  return !!this.links.next;
};
F.prototype.nextPage = function() {
  return this.hasNextPage() ? this.request._extend({
    path: this.links.next.url
  }) : null;
};
var ge = F, L = {
  API_ORIGIN: "https://api.mapbox.com",
  EVENT_PROGRESS_DOWNLOAD: "downloadProgress",
  EVENT_PROGRESS_UPLOAD: "uploadProgress",
  EVENT_ERROR: "error",
  EVENT_RESPONSE: "response",
  ERROR_HTTP: "HttpError",
  ERROR_REQUEST_ABORTED: "RequestAbortedError"
}, H = L;
function be(e) {
  var r = e.type || H.ERROR_HTTP, t;
  if (e.body)
    try {
      t = JSON.parse(e.body);
    } catch {
      t = e.body;
    }
  else
    t = null;
  var n = e.message || null;
  n || (typeof t == "string" ? n = t : t && typeof t.message == "string" ? n = t.message : r === H.ERROR_REQUEST_ABORTED && (n = "Request aborted")), this.message = n, this.type = r, this.statusCode = e.statusCode || null, this.request = e.request, this.body = t;
}
var me = be;
function Ee(e) {
  var r = e.indexOf(":"), t = e.substring(0, r).trim().toLowerCase(), n = e.substring(r + 1).trim();
  return {
    name: t,
    value: n
  };
}
function Oe(e) {
  var r = {};
  return e && e.trim().split(/[\r|\n]+/).forEach(function(t) {
    var n = Ee(t);
    r[n.name] = n.value;
  }), r;
}
var we = Oe, Re = ge, U = me, M = L, _e = we, C = {};
function Ae(e) {
  var r = C[e.id];
  r && (r.abort(), delete C[e.id]);
}
function xe(e, r) {
  return new Re(e, {
    body: r.response,
    headers: _e(r.getAllResponseHeaders()),
    statusCode: r.status
  });
}
function D(e) {
  var r = e.total, t = e.loaded, n = 100 * t / r;
  return {
    total: r,
    transferred: t,
    percent: n
  };
}
function Pe(e, r) {
  return new Promise(function(t, n) {
    r.onprogress = function(s) {
      e.emitter.emit(
        M.EVENT_PROGRESS_DOWNLOAD,
        D(s)
      );
    };
    var a = e.file;
    a && (r.upload.onprogress = function(s) {
      e.emitter.emit(
        M.EVENT_PROGRESS_UPLOAD,
        D(s)
      );
    }), r.onerror = function(s) {
      n(s);
    }, r.onabort = function() {
      var s = new U({
        request: e,
        type: M.ERROR_REQUEST_ABORTED
      });
      n(s);
    }, r.onload = function() {
      if (delete C[e.id], r.status < 200 || r.status >= 400) {
        var s = new U({
          request: e,
          body: r.response,
          statusCode: r.status
        });
        n(s);
        return;
      }
      t(r);
    };
    var i = e.body;
    typeof i == "string" ? r.send(i) : i ? r.send(JSON.stringify(i)) : a ? r.send(a) : r.send(), C[e.id] = r;
  }).then(function(t) {
    return xe(e, t);
  });
}
function Te(e, r) {
  var t = e.url(r), n = new window.XMLHttpRequest();
  return n.open(e.method, t), Object.keys(e.headers).forEach(function(a) {
    n.setRequestHeader(a, e.headers[a]);
  }), n;
}
function qe(e) {
  return Promise.resolve().then(function() {
    var r = Te(e, e.client.accessToken);
    return Pe(e, r);
  });
}
var Se = {
  browserAbort: Ae,
  browserSend: qe
}, j = { exports: {} };
/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
j.exports;
(function(e, r) {
  (function(t) {
    var n = r, a = e && e.exports == n && e, i = typeof q == "object" && q;
    (i.global === i || i.window === i) && (t = i);
    var s = function(u) {
      this.message = u;
    };
    s.prototype = new Error(), s.prototype.name = "InvalidCharacterError";
    var v = function(u) {
      throw new s(u);
    }, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = /[\t\n\f\r ]/g, l = function(u) {
      u = String(u).replace(f, "");
      var m = u.length;
      m % 4 == 0 && (u = u.replace(/==?$/, ""), m = u.length), (m % 4 == 1 || // http://whatwg.org/C#alphanumeric-ascii-characters
      /[^+a-zA-Z0-9/]/.test(u)) && v(
        "Invalid character: the string to be decoded is not correctly encoded."
      );
      for (var c = 0, E, w, h = "", A = -1; ++A < m; )
        w = o.indexOf(u.charAt(A)), E = c % 4 ? E * 64 + w : w, c++ % 4 && (h += String.fromCharCode(
          255 & E >> (-2 * c & 6)
        ));
      return h;
    }, p = function(u) {
      u = String(u), /[^\0-\xFF]/.test(u) && v(
        "The string to be encoded contains characters outside of the Latin1 range."
      );
      for (var m = u.length % 3, c = "", E = -1, w, h, A, O, ue = u.length - m; ++E < ue; )
        w = u.charCodeAt(E) << 16, h = u.charCodeAt(++E) << 8, A = u.charCodeAt(++E), O = w + h + A, c += o.charAt(O >> 18 & 63) + o.charAt(O >> 12 & 63) + o.charAt(O >> 6 & 63) + o.charAt(O & 63);
      return m == 2 ? (w = u.charCodeAt(E) << 8, h = u.charCodeAt(++E), O = w + h, c += o.charAt(O >> 10) + o.charAt(O >> 4 & 63) + o.charAt(O << 2 & 63) + "=") : m == 1 && (O = u.charCodeAt(E), c += o.charAt(O >> 2) + o.charAt(O << 4 & 63) + "=="), c;
    }, b = {
      encode: p,
      decode: l,
      version: "0.1.0"
    };
    if (n && !n.nodeType)
      if (a)
        a.exports = b;
      else
        for (var g in b)
          b.hasOwnProperty(g) && (n[g] = b[g]);
    else
      t.base64 = b;
  })(q);
})(j, j.exports);
var Ce = j.exports, je = Ce, $ = {};
function ke(e) {
  if ($[e])
    return $[e];
  var r = e.split("."), t = r[0], n = r[1];
  if (!n)
    throw new Error("Invalid token");
  var a = Ne(n), i = {
    usage: t,
    user: a.u
  };
  return x(a, "a") && (i.authorization = a.a), x(a, "exp") && (i.expires = a.exp * 1e3), x(a, "iat") && (i.created = a.iat * 1e3), x(a, "scopes") && (i.scopes = a.scopes), x(a, "client") && (i.client = a.client), x(a, "ll") && (i.lastLogin = a.ll), x(a, "iu") && (i.impersonator = a.iu), $[e] = i, i;
}
function Ne(e) {
  try {
    return JSON.parse(je.decode(e));
  } catch {
    throw new Error("Invalid token");
  }
}
function x(e, r) {
  return Object.prototype.hasOwnProperty.call(e, r);
}
var Q = ke, J = { exports: {} };
(function(e) {
  var r = Object.prototype.hasOwnProperty, t = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (t = !1));
  function a(o, f, l) {
    this.fn = o, this.context = f, this.once = l || !1;
  }
  function i(o, f, l, p, b) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var g = new a(l, p || o, b), u = t ? t + f : f;
    return o._events[u] ? o._events[u].fn ? o._events[u] = [o._events[u], g] : o._events[u].push(g) : (o._events[u] = g, o._eventsCount++), o;
  }
  function s(o, f) {
    --o._eventsCount === 0 ? o._events = new n() : delete o._events[f];
  }
  function v() {
    this._events = new n(), this._eventsCount = 0;
  }
  v.prototype.eventNames = function() {
    var f = [], l, p;
    if (this._eventsCount === 0) return f;
    for (p in l = this._events)
      r.call(l, p) && f.push(t ? p.slice(1) : p);
    return Object.getOwnPropertySymbols ? f.concat(Object.getOwnPropertySymbols(l)) : f;
  }, v.prototype.listeners = function(f) {
    var l = t ? t + f : f, p = this._events[l];
    if (!p) return [];
    if (p.fn) return [p.fn];
    for (var b = 0, g = p.length, u = new Array(g); b < g; b++)
      u[b] = p[b].fn;
    return u;
  }, v.prototype.listenerCount = function(f) {
    var l = t ? t + f : f, p = this._events[l];
    return p ? p.fn ? 1 : p.length : 0;
  }, v.prototype.emit = function(f, l, p, b, g, u) {
    var m = t ? t + f : f;
    if (!this._events[m]) return !1;
    var c = this._events[m], E = arguments.length, w, h;
    if (c.fn) {
      switch (c.once && this.removeListener(f, c.fn, void 0, !0), E) {
        case 1:
          return c.fn.call(c.context), !0;
        case 2:
          return c.fn.call(c.context, l), !0;
        case 3:
          return c.fn.call(c.context, l, p), !0;
        case 4:
          return c.fn.call(c.context, l, p, b), !0;
        case 5:
          return c.fn.call(c.context, l, p, b, g), !0;
        case 6:
          return c.fn.call(c.context, l, p, b, g, u), !0;
      }
      for (h = 1, w = new Array(E - 1); h < E; h++)
        w[h - 1] = arguments[h];
      c.fn.apply(c.context, w);
    } else {
      var A = c.length, O;
      for (h = 0; h < A; h++)
        switch (c[h].once && this.removeListener(f, c[h].fn, void 0, !0), E) {
          case 1:
            c[h].fn.call(c[h].context);
            break;
          case 2:
            c[h].fn.call(c[h].context, l);
            break;
          case 3:
            c[h].fn.call(c[h].context, l, p);
            break;
          case 4:
            c[h].fn.call(c[h].context, l, p, b);
            break;
          default:
            if (!w) for (O = 1, w = new Array(E - 1); O < E; O++)
              w[O - 1] = arguments[O];
            c[h].fn.apply(c[h].context, w);
        }
    }
    return !0;
  }, v.prototype.on = function(f, l, p) {
    return i(this, f, l, p, !1);
  }, v.prototype.once = function(f, l, p) {
    return i(this, f, l, p, !0);
  }, v.prototype.removeListener = function(f, l, p, b) {
    var g = t ? t + f : f;
    if (!this._events[g]) return this;
    if (!l)
      return s(this, g), this;
    var u = this._events[g];
    if (u.fn)
      u.fn === l && (!b || u.once) && (!p || u.context === p) && s(this, g);
    else {
      for (var m = 0, c = [], E = u.length; m < E; m++)
        (u[m].fn !== l || b && !u[m].once || p && u[m].context !== p) && c.push(u[m]);
      c.length ? this._events[g] = c.length === 1 ? c[0] : c : s(this, g);
    }
    return this;
  }, v.prototype.removeAllListeners = function(f) {
    var l;
    return f ? (l = t ? t + f : f, this._events[l] && s(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
  }, v.prototype.off = v.prototype.removeListener, v.prototype.addListener = v.prototype.on, v.prefixed = t, v.EventEmitter = v, e.exports = v;
})(J);
var Le = J.exports;
function Me(e) {
  return e.map(encodeURIComponent).join(",");
}
function X(e) {
  return Array.isArray(e) ? Me(e) : encodeURIComponent(String(e));
}
function W(e, r, t) {
  if (t === !1 || t === null)
    return e;
  var n = /\?/.test(e) ? "&" : "?", a = encodeURIComponent(r);
  return t !== void 0 && t !== "" && t !== !0 && (a += "=" + X(t)), "" + e + n + a;
}
function $e(e, r) {
  if (!r)
    return e;
  var t = e;
  return Object.keys(r).forEach(function(n) {
    var a = r[n];
    a !== void 0 && (Array.isArray(a) && (a = a.filter(function(i) {
      return i != null;
    }).join(",")), t = W(t, n, a));
  }), t;
}
function Ve(e, r) {
  if (!r || e.slice(0, 4) === "http")
    return e;
  var t = e[0] === "/" ? "" : "/";
  return "" + r.replace(/\/$/, "") + t + e;
}
function Fe(e, r) {
  return r ? e.replace(/\/:([a-zA-Z0-9]+)/g, function(t, n) {
    var a = r[n];
    if (a === void 0)
      throw new Error("Unspecified route parameter " + n);
    var i = X(a);
    return "/" + i;
  }) : e;
}
var Ie = {
  appendQueryObject: $e,
  appendQueryParam: W,
  prependOrigin: Ve,
  interpolateRouteParams: Fe
}, Be = Q, I = N, Ge = Le, S = Ie, z = L, He = 1;
function R(e, r) {
  if (!e)
    throw new Error("MapiRequest requires a client");
  if (!r || !r.path || !r.method)
    throw new Error(
      "MapiRequest requires an options object with path and method properties"
    );
  var t = {};
  r.body && (t["content-type"] = "application/json");
  var n = I(t, r.headers), a = Object.keys(n).reduce(function(i, s) {
    return i[s.toLowerCase()] = n[s], i;
  }, {});
  this.id = He++, this._options = r, this.emitter = new Ge(), this.client = e, this.response = null, this.error = null, this.sent = !1, this.aborted = !1, this.path = r.path, this.method = r.method, this.origin = r.origin || e.origin, this.query = r.query || {}, this.params = r.params || {}, this.body = r.body || null, this.file = r.file || null, this.encoding = r.encoding || "utf8", this.sendFileAs = r.sendFileAs || null, this.headers = a;
}
R.prototype.url = function(r) {
  var t = S.prependOrigin(this.path, this.origin);
  t = S.appendQueryObject(t, this.query);
  var n = this.params, a = r ?? this.client.accessToken;
  if (a) {
    t = S.appendQueryParam(t, "access_token", a);
    var i = Be(a).user;
    n = I({ ownerId: i }, n);
  }
  return t = S.interpolateRouteParams(t, n), t;
};
R.prototype.send = function() {
  var r = this;
  if (r.sent)
    throw new Error(
      "This request has already been sent. Check the response and error properties. Create a new request with clone()."
    );
  return r.sent = !0, r.client.sendRequest(r).then(
    function(t) {
      return r.response = t, r.emitter.emit(z.EVENT_RESPONSE, t), t;
    },
    function(t) {
      throw r.error = t, r.emitter.emit(z.EVENT_ERROR, t), t;
    }
  );
};
R.prototype.abort = function() {
  this._nextPageRequest && (this._nextPageRequest.abort(), delete this._nextPageRequest), !(this.response || this.error || this.aborted) && (this.aborted = !0, this.client.abortRequest(this));
};
R.prototype.eachPage = function(r) {
  var t = this;
  function n(s) {
    function v() {
      delete t._nextPageRequest;
      var o = s.nextPage();
      o && (t._nextPageRequest = o, i(o));
    }
    r(null, s, v);
  }
  function a(s) {
    r(s, null, function() {
    });
  }
  function i(s) {
    s.send().then(n, a);
  }
  i(this);
};
R.prototype.clone = function() {
  return this._extend();
};
R.prototype._extend = function(r) {
  var t = I(this._options, r);
  return new R(this.client, t);
};
var Ue = R, De = Q, ze = Ue, Qe = L;
function Z(e) {
  if (!e || !e.accessToken)
    throw new Error("Cannot create a client without an access token");
  De(e.accessToken), this.accessToken = e.accessToken, this.origin = e.origin || Qe.API_ORIGIN;
}
Z.prototype.createRequest = function(r) {
  return new ze(this, r);
};
var K = Z, Y = Se, ee = K;
function T(e) {
  ee.call(this, e);
}
T.prototype = Object.create(ee.prototype);
T.prototype.constructor = T;
T.prototype.sendRequest = Y.browserSend;
T.prototype.abortRequest = Y.browserAbort;
function Je(e) {
  return new T(e);
}
var Xe = Je, We = Object.prototype.toString, Ze = function(e) {
  var r;
  return We.call(e) === "[object Object]" && (r = Object.getPrototypeOf(e), r === null || r === Object.getPrototypeOf({}));
}, Ke = Ze, Ye = N, re = "value", V = `
  `, y = {};
y.assert = function(e, r) {
  return r = r || {}, function(t) {
    var n = _(e, t);
    if (n) {
      var a = B(n, r);
      throw r.apiName && (a = r.apiName + ": " + a), new Error(a);
    }
  };
};
y.shape = function(r) {
  var t = nr(r);
  return function(a) {
    var i = _(y.plainObject, a);
    if (i)
      return i;
    for (var s, v, o = [], f = 0; f < t.length; f++)
      s = t[f].key, v = t[f].value, i = _(v, a[s]), i && o.push([s].concat(i));
    return o.length < 2 ? o[0] : function(l) {
      o = o.map(function(g) {
        var u = g[0], m = B(g, l).split(`
`).join(V);
        return "- " + u + ": " + m;
      });
      var p = l.path.join("."), b = p === re ? "" : " of " + p;
      return "The following properties" + b + " have invalid values:" + V + o.join(V);
    };
  };
};
y.strictShape = function(r) {
  var t = y.shape(r);
  return function(a) {
    var i = t(a);
    if (i)
      return i;
    var s = Object.keys(a).reduce(function(v, o) {
      return r[o] === void 0 && v.push(o), v;
    }, []);
    if (s.length !== 0)
      return function() {
        return "The following keys are invalid: " + s.join(", ");
      };
  };
};
y.arrayOf = function(r) {
  return te(r);
};
y.tuple = function() {
  var r = Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments);
  return te(r);
};
function te(e) {
  var r = Array.isArray(e), t = function(n) {
    return r ? e[n] : e;
  };
  return function(a) {
    var i = _(y.plainArray, a);
    if (i)
      return i;
    if (r && a.length !== e.length)
      return "an array with " + e.length + " items";
    for (var s = 0; s < a.length; s++)
      if (i = _(t(s), a[s]), i)
        return [s].concat(i);
  };
}
y.required = function(r) {
  function t(n) {
    return n == null ? function(a) {
      return ne(
        a,
        ae(a.path) ? "cannot be undefined/null." : "is required."
      );
    } : r.apply(this, arguments);
  }
  return t.__required = !0, t;
};
y.oneOfType = function() {
  var r = Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments);
  return function(n) {
    var a = r.map(function(i) {
      return _(i, n);
    }).filter(Boolean);
    if (a.length === r.length)
      return a.every(function(i) {
        return i.length === 1 && typeof i[0] == "string";
      }) ? er(
        a.map(function(i) {
          return i[0];
        })
      ) : a.reduce(function(i, s) {
        return s.length > i.length ? s : i;
      });
  };
};
y.equal = function(r) {
  return function(n) {
    if (n !== r)
      return JSON.stringify(r);
  };
};
y.oneOf = function() {
  var r = Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments), t = r.map(function(n) {
    return y.equal(n);
  });
  return y.oneOfType.apply(this, t);
};
y.range = function(r) {
  var t = r[0], n = r[1];
  return function(i) {
    var s = _(y.number, i);
    if (s || i < t || i > n)
      return "number between " + t + " & " + n + " (inclusive)";
  };
};
y.any = function() {
};
y.boolean = function(r) {
  if (typeof r != "boolean")
    return "boolean";
};
y.number = function(r) {
  if (typeof r != "number")
    return "number";
};
y.plainArray = function(r) {
  if (!Array.isArray(r))
    return "array";
};
y.plainObject = function(r) {
  if (!Ke(r))
    return "object";
};
y.string = function(r) {
  if (typeof r != "string")
    return "string";
};
y.func = function(r) {
  if (typeof r != "function")
    return "function";
};
function _(e, r) {
  if (!(r == null && !e.hasOwnProperty("__required"))) {
    var t = e(r);
    if (t)
      return Array.isArray(t) ? t : [t];
  }
}
function B(e, r) {
  var t = e.length, n = e[t - 1], a = e.slice(0, t - 1);
  return a.length === 0 && (a = [re]), r = Ye(r, { path: a }), typeof n == "function" ? n(r) : ne(r, rr(n));
}
function er(e) {
  return e.length < 2 ? e[0] : e.length === 2 ? e.join(" or ") : e.slice(0, -1).join(", ") + ", or " + e.slice(-1);
}
function rr(e) {
  return "must be " + tr(e) + ".";
}
function tr(e) {
  return /^an? /.test(e) ? e : /^[aeiou]/i.test(e) ? "an " + e : /^[a-z]/i.test(e) ? "a " + e : e;
}
function ne(e, r) {
  var t = ae(e.path), n = e.path.join(".") + " " + r, a = t ? "Item at position " : "";
  return a + n;
}
function ae(e) {
  return typeof e[e.length - 1] == "number" || typeof e[0] == "number";
}
function nr(e) {
  return Object.keys(e || {}).map(function(r) {
    return { key: r, value: e[r] };
  });
}
y.validate = _;
y.processMessage = B;
var ar = y, ir = N, P = ar;
function or(e) {
  if (typeof window < "u")
    return e instanceof q.Blob || e instanceof q.ArrayBuffer ? void 0 : "Blob or ArrayBuffer";
  if (!(typeof e == "string" || e.pipe !== void 0))
    return "Filename or Readable stream";
}
function sr(e, r) {
  return P.assert(P.strictShape(e), r);
}
function ur(e) {
  var r = "date";
  if (typeof e == "boolean")
    return r;
  try {
    var t = new Date(e);
    if (t.getTime && isNaN(t.getTime()))
      return r;
  } catch {
    return r;
  }
}
function cr(e) {
  return P.tuple(P.number, P.number)(e);
}
var fr = ir(P, {
  file: or,
  date: ur,
  coordinates: cr,
  assertShape: sr
});
function lr(e, r) {
  var t = function(n, a) {
    return r.indexOf(n) !== -1 && a !== void 0;
  };
  return typeof r == "function" && (t = r), Object.keys(e).filter(function(n) {
    return t(n, e[n]);
  }).reduce(function(n, a) {
    return n[a] = e[a], n;
  }, {});
}
var pr = lr;
function dr(e, r) {
  return Object.keys(e).reduce(function(t, n) {
    return t[n] = r(n, e[n]), t;
  }, {});
}
var vr = dr, hr = vr;
function yr(e) {
  return hr(e, function(r, t) {
    return typeof t == "boolean" ? JSON.stringify(t) : t;
  });
}
var gr = yr, br = K, mr = Xe;
function Er(e) {
  return function(r) {
    var t;
    br.prototype.isPrototypeOf(r) ? t = r : t = mr(r);
    var n = Object.create(e);
    return n.client = t, n;
  };
}
var Or = Er, ie = N, d = fr, k = pr, oe = gr, wr = Or, G = {}, se = [
  "country",
  "region",
  "postcode",
  "district",
  "place",
  "locality",
  "neighborhood",
  "address",
  "poi",
  "poi.landmark"
];
G.forwardGeocode = function(e) {
  d.assertShape({
    query: d.required(d.string),
    mode: d.oneOf("mapbox.places", "mapbox.places-permanent"),
    countries: d.arrayOf(d.string),
    proximity: d.oneOf(d.coordinates, "ip"),
    types: d.arrayOf(d.oneOf(se)),
    autocomplete: d.boolean,
    bbox: d.arrayOf(d.number),
    limit: d.number,
    language: d.arrayOf(d.string),
    routing: d.boolean,
    fuzzyMatch: d.boolean,
    worldview: d.string,
    session_token: d.string
  })(e), e.mode = e.mode || "mapbox.places";
  var r = oe(
    ie(
      { country: e.countries },
      k(e, [
        "proximity",
        "types",
        "autocomplete",
        "bbox",
        "limit",
        "language",
        "routing",
        "fuzzyMatch",
        "worldview",
        "session_token"
      ])
    )
  );
  return this.client.createRequest({
    method: "GET",
    path: "/geocoding/v5/:mode/:query.json",
    params: k(e, ["mode", "query"]),
    query: r
  });
};
G.reverseGeocode = function(e) {
  d.assertShape({
    query: d.required(d.coordinates),
    mode: d.oneOf("mapbox.places", "mapbox.places-permanent"),
    countries: d.arrayOf(d.string),
    types: d.arrayOf(d.oneOf(se)),
    bbox: d.arrayOf(d.number),
    limit: d.number,
    language: d.arrayOf(d.string),
    reverseMode: d.oneOf("distance", "score"),
    routing: d.boolean,
    worldview: d.string,
    session_token: d.string
  })(e), e.mode = e.mode || "mapbox.places";
  var r = oe(
    ie(
      { country: e.countries },
      k(e, [
        "country",
        "types",
        "bbox",
        "limit",
        "language",
        "reverseMode",
        "routing",
        "worldview",
        "session_token"
      ])
    )
  );
  return this.client.createRequest({
    method: "GET",
    path: "/geocoding/v5/:mode/:query.json",
    params: k(e, ["mode", "query"]),
    query: r
  });
};
var Rr = wr(G);
const Ar = /* @__PURE__ */ ce(Rr);
export {
  Xe as browserClient,
  Rr as geocoding,
  N as immutable,
  Ar as mbxGeocoding
};
