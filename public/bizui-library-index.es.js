import { LitElement as _, css as w, html as d, nothing as Re } from "lit";
import { repeat as qe } from "lit/directives/repeat.js";
var k = (e) => (t, i) => {
  i !== void 0 ? i.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
}, Ue = globalThis, st = Ue.ShadowRoot && (Ue.ShadyCSS === void 0 || Ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Tt = /* @__PURE__ */ Symbol(), vt = /* @__PURE__ */ new WeakMap(), Xt = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== Tt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (st && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = vt.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && vt.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
}, Zt = (e) => new Xt(typeof e == "string" ? e : e + "", void 0, Tt), Jt = (e, t) => {
  if (st) e.adoptedStyleSheets = t.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of t) {
    const r = document.createElement("style"), a = Ue.litNonce;
    a !== void 0 && r.setAttribute("nonce", a), r.textContent = i.cssText, e.appendChild(r);
  }
}, mt = st ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let i = "";
  for (const r of t.cssRules) i += r.cssText;
  return Zt(i);
})(e) : e, { is: ei, defineProperty: ti, getOwnPropertyDescriptor: ii, getOwnPropertyNames: ri, getOwnPropertySymbols: oi, getPrototypeOf: ai } = Object, et = globalThis, zt = et.trustedTypes, li = zt ? zt.emptyScript : "", si = et.reactiveElementPolyfillSupport, Fe = (e, t) => e, je = {
  toAttribute(e, t) {
    switch (t) {
      case Boolean:
        e = e ? li : null;
        break;
      case Object:
      case Array:
        e = e == null ? e : JSON.stringify(e);
    }
    return e;
  },
  fromAttribute(e, t) {
    let i = e;
    switch (t) {
      case Boolean:
        i = e !== null;
        break;
      case Number:
        i = e === null ? null : Number(e);
        break;
      case Object:
      case Array:
        try {
          i = JSON.parse(e);
        } catch {
          i = null;
        }
    }
    return i;
  }
}, nt = (e, t) => !ei(e, t), ft = {
  attribute: !0,
  type: String,
  converter: je,
  reflect: !1,
  useDefault: !1,
  hasChanged: nt
};
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), et.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var Pe = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = ft) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = /* @__PURE__ */ Symbol(), r = this.getPropertyDescriptor(e, i, t);
      r !== void 0 && ti(this.prototype, e, r);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: r, set: a } = ii(this.prototype, e) ?? {
      get() {
        return this[t];
      },
      set(s) {
        this[t] = s;
      }
    };
    return {
      get: r,
      set(s) {
        const n = r?.call(this);
        a?.call(this, s), this.requestUpdate(e, n, i);
      },
      configurable: !0,
      enumerable: !0
    };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? ft;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Fe("elementProperties"))) return;
    const e = ai(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Fe("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Fe("properties"))) {
      const t = this.properties, i = [...ri(t), ...oi(t)];
      for (const r of i) this.createProperty(r, t[r]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, r] of t) this.elementProperties.set(i, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const r = this._$Eu(t, i);
      r !== void 0 && this._$Eh.set(r, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const r of i) t.unshift(mt(r));
    } else e !== void 0 && t.push(mt(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
  }
  addController(e) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
  }
  removeController(e) {
    this._$EO?.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Jt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((e) => e.hostDisconnected?.());
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$ET(e, t) {
    const i = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, i);
    if (r !== void 0 && i.reflect === !0) {
      const a = (i.converter?.toAttribute !== void 0 ? i.converter : je).toAttribute(t, i.type);
      this._$Em = e, a == null ? this.removeAttribute(r) : this.setAttribute(r, a), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const i = this.constructor, r = i._$Eh.get(e);
    if (r !== void 0 && this._$Em !== r) {
      const a = i.getPropertyOptions(r), s = typeof a.converter == "function" ? { fromAttribute: a.converter } : a.converter?.fromAttribute !== void 0 ? a.converter : je;
      this._$Em = r;
      const n = s.fromAttribute(t, a.type);
      this[r] = n ?? this._$Ej?.get(r) ?? n, this._$Em = null;
    }
  }
  requestUpdate(e, t, i, r = !1, a) {
    if (e !== void 0) {
      const s = this.constructor;
      if (r === !1 && (a = this[e]), i ??= s.getPropertyOptions(e), !((i.hasChanged ?? nt)(a, t) || i.useDefault && i.reflect && a === this._$Ej?.get(e) && !this.hasAttribute(s._$Eu(e, i)))) return;
      this.C(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: i, reflect: r, wrapped: a }, s) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, s ?? t ?? this[e]), a !== !0 || s !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0), this._$AL.set(e, t)), r === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [r, a] of this._$Ep) this[r] = a;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [r, a] of i) {
        const { wrapped: s } = a, n = this[r];
        s !== !0 || this._$AL.has(r) || n === void 0 || this.C(r, void 0, a, n);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((i) => i.hostUpdate?.()), this.update(t)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach((t) => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq &&= this._$Eq.forEach((t) => this._$ET(t, this[t])), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
Pe.elementStyles = [], Pe.shadowRootOptions = { mode: "open" }, Pe[Fe("elementProperties")] = /* @__PURE__ */ new Map(), Pe[Fe("finalized")] = /* @__PURE__ */ new Map(), si?.({ ReactiveElement: Pe }), (et.reactiveElementVersions ??= []).push("2.1.2");
var ni = {
  attribute: !0,
  type: String,
  converter: je,
  reflect: !1,
  hasChanged: nt
}, di = (e = ni, t, i) => {
  const { kind: r, metadata: a } = i;
  let s = globalThis.litPropertyMetadata.get(a);
  if (s === void 0 && globalThis.litPropertyMetadata.set(a, s = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), s.set(i.name, e), r === "accessor") {
    const { name: n } = i;
    return {
      set(c) {
        const p = t.get.call(this);
        t.set.call(this, c), this.requestUpdate(n, p, e, !0, c);
      },
      init(c) {
        return c !== void 0 && this.C(n, void 0, e, c), c;
      }
    };
  }
  if (r === "setter") {
    const { name: n } = i;
    return function(c) {
      const p = this[n];
      t.call(this, c), this.requestUpdate(n, p, e, !0, c);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function l(e) {
  return (t, i) => typeof i == "object" ? di(e, t, i) : ((r, a, s) => {
    const n = a.hasOwnProperty(s);
    return a.constructor.createProperty(s, r), n ? Object.getOwnPropertyDescriptor(a, s) : void 0;
  })(e, t, i);
}
function g(e) {
  return l({
    ...e,
    state: !0,
    attribute: !1
  });
}
var yt = (e, t, i) => (i.configurable = !0, i.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, i), i);
function dt(e, t) {
  return (i, r, a) => {
    const s = (n) => n.renderRoot?.querySelector(e) ?? null;
    if (t) {
      const { get: n, set: c } = typeof r == "object" ? i : a ?? /* @__PURE__ */ (() => {
        const p = /* @__PURE__ */ Symbol();
        return {
          get() {
            return this[p];
          },
          set(b) {
            this[p] = b;
          }
        };
      })();
      return yt(i, r, { get() {
        let p = n.call(this);
        return p === void 0 && (p = s(this), (p !== null || this.hasUpdated) && c.call(this, p)), p;
      } });
    }
    return yt(i, r, { get() {
      return s(this);
    } });
  };
}
var ci = w`
  :host {
    --biz-application-shell-header-height: 64px;
    --biz-application-shell-footer-height: 48px;
    --biz-application-shell-sidebar-width: 256px;
    --biz-application-shell-sidebar-collapsed-width: 64px;

    --biz-application-shell-bg-color: #f9fafb;
    --biz-application-shell-header-bg: #ffffff;
    --biz-application-shell-sidebar-bg: #1f2937;
    --biz-application-shell-footer-bg: #ffffff;
    --biz-application-shell-border-color: #e5e7eb;

    --biz-application-shell-header-z-index: 100;
    --biz-application-shell-sidebar-z-index: 90;
    --biz-application-shell-overlay-z-index: 200;

    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .biz-application-shell__skip-link {
    position: absolute;
    top: -100px;
    left: 0;
    background: #000000;
    color: #ffffff;
    padding: 8px 16px;
    z-index: 1000;
    text-decoration: none;
  }

  .biz-application-shell__skip-link:focus {
    top: 0;
  }

  .biz-application-shell {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--biz-application-shell-bg-color);
  }

  .biz-application-shell--sticky-header .biz-application-shell__header {
    position: sticky;
    top: 0;
    z-index: var(--biz-application-shell-header-z-index);
  }

  .biz-application-shell__header {
    height: var(--biz-application-shell-header-height);
    background-color: var(--biz-application-shell-header-bg);
    border-bottom: 1px solid var(--biz-application-shell-border-color);
  }

  .biz-application-shell__body {
    display: flex;
    flex: 1;
    position: relative;
  }

  .biz-application-shell__sidebar {
    width: var(--biz-application-shell-sidebar-width);
    background-color: var(--biz-application-shell-sidebar-bg);
    border-right: 1px solid var(--biz-application-shell-border-color);
    transition: width 0.3s ease;
  }

  .biz-application-shell--fixed-sidebar .biz-application-shell__sidebar {
    position: sticky;
    top: var(--biz-application-shell-header-height);
    height: calc(100vh - var(--biz-application-shell-header-height));
    overflow-y: auto;
    z-index: var(--biz-application-shell-sidebar-z-index);
  }

  .biz-application-shell--sidebar-collapsed .biz-application-shell__sidebar {
    width: var(--biz-application-shell-sidebar-collapsed-width);
  }

  .biz-application-shell__content {
    flex: 1;
    overflow-y: auto;
    outline: none;
  }

  .biz-application-shell__footer {
    height: var(--biz-application-shell-footer-height);
    background-color: var(--biz-application-shell-footer-bg);
    border-top: 1px solid var(--biz-application-shell-border-color);
  }

  .biz-application-shell--variant-full-width .biz-application-shell__sidebar {
    display: none;
  }

  .biz-application-shell--variant-minimal .biz-application-shell__header,
  .biz-application-shell--variant-minimal .biz-application-shell__footer,
  .biz-application-shell--variant-minimal .biz-application-shell__sidebar {
    display: none;
  }

  .biz-application-shell__overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: calc(var(--biz-application-shell-overlay-z-index) - 1);
  }

`, ct = globalThis, xt = (e) => e, Ye = ct.trustedTypes, _t = Ye ? Ye.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, pt = "$lit$", ge = `lit$${Math.random().toFixed(9).slice(2)}$`, bt = "?" + ge, pi = `<${bt}>`, $e = document, Ge = () => $e.createComment(""), Le = (e) => e === null || typeof e != "object" && typeof e != "function", ut = Array.isArray, Mt = (e) => ut(e) || typeof e?.[Symbol.iterator] == "function", it = `[ 	
\f\r]`, Ve = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, wt = /-->/g, kt = />/g, we = RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), $t = /'/g, St = /"/g, At = /^(?:script|style|textarea|title)$/i, ht = (e) => (t, ...i) => ({
  _$litType$: e,
  strings: t,
  values: i
}), Or = ht(1), Rr = ht(2), Lr = ht(3), se = /* @__PURE__ */ Symbol.for("lit-noChange"), E = /* @__PURE__ */ Symbol.for("lit-nothing"), Ct = /* @__PURE__ */ new WeakMap(), ke = $e.createTreeWalker($e, 129);
function It(e, t) {
  if (!ut(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return _t !== void 0 ? _t.createHTML(t) : t;
}
var Bt = (e, t) => {
  const i = e.length - 1, r = [];
  let a, s = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = Ve;
  for (let c = 0; c < i; c++) {
    const p = e[c];
    let b, u, h = -1, v = 0;
    for (; v < p.length && (n.lastIndex = v, u = n.exec(p), u !== null); ) v = n.lastIndex, n === Ve ? u[1] === "!--" ? n = wt : u[1] !== void 0 ? n = kt : u[2] !== void 0 ? (At.test(u[2]) && (a = RegExp("</" + u[2], "g")), n = we) : u[3] !== void 0 && (n = we) : n === we ? u[0] === ">" ? (n = a ?? Ve, h = -1) : u[1] === void 0 ? h = -2 : (h = n.lastIndex - u[2].length, b = u[1], n = u[3] === void 0 ? we : u[3] === '"' ? St : $t) : n === St || n === $t ? n = we : n === wt || n === kt ? n = Ve : (n = we, a = void 0);
    const m = n === we && e[c + 1].startsWith("/>") ? " " : "";
    s += n === Ve ? p + pi : h >= 0 ? (r.push(b), p.slice(0, h) + pt + p.slice(h) + ge + m) : p + ge + (h === -2 ? c : m);
  }
  return [It(e, s + (e[i] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, ot = class Pt {
  constructor({ strings: t, _$litType$: i }, r) {
    let a;
    this.parts = [];
    let s = 0, n = 0;
    const c = t.length - 1, p = this.parts, [b, u] = Bt(t, i);
    if (this.el = Pt.createElement(b, r), ke.currentNode = this.el.content, i === 2 || i === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (a = ke.nextNode()) !== null && p.length < c; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const h of a.getAttributeNames()) if (h.endsWith(pt)) {
          const v = u[n++], m = a.getAttribute(h).split(ge), z = /([.?@])?(.*)/.exec(v);
          p.push({
            type: 1,
            index: s,
            name: z[2],
            strings: m,
            ctor: z[1] === "." ? Ot : z[1] === "?" ? Rt : z[1] === "@" ? Lt : He
          }), a.removeAttribute(h);
        } else h.startsWith(ge) && (p.push({
          type: 6,
          index: s
        }), a.removeAttribute(h));
        if (At.test(a.tagName)) {
          const h = a.textContent.split(ge), v = h.length - 1;
          if (v > 0) {
            a.textContent = Ye ? Ye.emptyScript : "";
            for (let m = 0; m < v; m++) a.append(h[m], Ge()), ke.nextNode(), p.push({
              type: 2,
              index: ++s
            });
            a.append(h[v], Ge());
          }
        }
      } else if (a.nodeType === 8) if (a.data === bt) p.push({
        type: 2,
        index: s
      });
      else {
        let h = -1;
        for (; (h = a.data.indexOf(ge, h + 1)) !== -1; ) p.push({
          type: 7,
          index: s
        }), h += ge.length - 1;
      }
      s++;
    }
  }
  static createElement(t, i) {
    const r = $e.createElement("template");
    return r.innerHTML = t, r;
  }
};
function Se(e, t, i = e, r) {
  if (t === se) return t;
  let a = r !== void 0 ? i._$Co?.[r] : i._$Cl;
  const s = Le(t) ? void 0 : t._$litDirective$;
  return a?.constructor !== s && (a?._$AO?.(!1), s === void 0 ? a = void 0 : (a = new s(e), a._$AT(e, i, r)), r !== void 0 ? (i._$Co ??= [])[r] = a : i._$Cl = a), a !== void 0 && (t = Se(e, a._$AS(e, t.values), a, r)), t;
}
var Vt = class {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: i } = this._$AD, r = (e?.creationScope ?? $e).importNode(t, !0);
    ke.currentNode = r;
    let a = ke.nextNode(), s = 0, n = 0, c = i[0];
    for (; c !== void 0; ) {
      if (s === c.index) {
        let p;
        c.type === 2 ? p = new gt(a, a.nextSibling, this, e) : c.type === 1 ? p = new c.ctor(a, c.name, c.strings, this, e) : c.type === 6 && (p = new Ht(a, this, e)), this._$AV.push(p), c = i[++n];
      }
      s !== c?.index && (a = ke.nextNode(), s++);
    }
    return ke.currentNode = $e, r;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}, gt = class Ft {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, i, r, a) {
    this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = r, this.options = a, this._$Cv = a?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return i !== void 0 && t?.nodeType === 11 && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = Se(this, t, i), Le(t) ? t === E || t == null || t === "" ? (this._$AH !== E && this._$AR(), this._$AH = E) : t !== this._$AH && t !== se && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Mt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== E && Le(this._$AH) ? this._$AA.nextSibling.data = t : this.T($e.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: i, _$litType$: r } = t, a = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = ot.createElement(It(r.h, r.h[0]), this.options)), r);
    if (this._$AH?._$AD === a) this._$AH.p(i);
    else {
      const s = new Vt(a, this), n = s.u(this.options);
      s.p(i), this.T(n), this._$AH = s;
    }
  }
  _$AC(t) {
    let i = Ct.get(t.strings);
    return i === void 0 && Ct.set(t.strings, i = new ot(t)), i;
  }
  k(t) {
    ut(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let r, a = 0;
    for (const s of t) a === i.length ? i.push(r = new Ft(this.O(Ge()), this.O(Ge()), this, this.options)) : r = i[a], r._$AI(s), a++;
    a < i.length && (this._$AR(r && r._$AB.nextSibling, a), i.length = a);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    for (this._$AP?.(!1, !0, i); t !== this._$AB; ) {
      const r = xt(t).nextSibling;
      xt(t).remove(), t = r;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}, He = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, r, a) {
    this.type = 1, this._$AH = E, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = a, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(/* @__PURE__ */ new String()), this.strings = i) : this._$AH = E;
  }
  _$AI(e, t = this, i, r) {
    const a = this.strings;
    let s = !1;
    if (a === void 0) e = Se(this, e, t, 0), s = !Le(e) || e !== this._$AH && e !== se, s && (this._$AH = e);
    else {
      const n = e;
      let c, p;
      for (e = a[0], c = 0; c < a.length - 1; c++) p = Se(this, n[i + c], t, c), p === se && (p = this._$AH[c]), s ||= !Le(p) || p !== this._$AH[c], p === E ? e = E : e !== E && (e += (p ?? "") + a[c + 1]), this._$AH[c] = p;
    }
    s && !r && this.j(e);
  }
  j(e) {
    e === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}, Ot = class extends He {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === E ? void 0 : e;
  }
}, Rt = class extends He {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== E);
  }
}, Lt = class extends He {
  constructor(e, t, i, r, a) {
    super(e, t, i, r, a), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Se(this, e, t, 0) ?? E) === se) return;
    const i = this._$AH, r = e === E && i !== E || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, a = e !== E && (i === E || r);
    r && this.element.removeEventListener(this.name, this, i), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}, Ht = class {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Se(this, e);
  }
}, bi = {
  M: pt,
  P: ge,
  A: bt,
  C: 1,
  L: Bt,
  R: Vt,
  D: Mt,
  V: Se,
  I: gt,
  H: He,
  N: Rt,
  U: Lt,
  B: Ot,
  F: Ht
}, ui = ct.litHtmlPolyfillSupport;
ui?.(ot, gt), (ct.litHtmlVersions ??= []).push("3.3.2");
var be = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
}, Ke = (e) => (...t) => ({
  _$litDirective$: e,
  values: t
}), Ne = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, i) {
    this._$Ct = e, this._$AM = t, this._$Ci = i;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
}, M = Ke(class extends Ne {
  constructor(e) {
    if (super(e), e.type !== be.ATTRIBUTE || e.name !== "class" || e.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
  }
  update(e, [t]) {
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((r) => r !== "")));
      for (const r in t) t[r] && !this.nt?.has(r) && this.st.add(r);
      return this.render(t);
    }
    const i = e.element.classList;
    for (const r of this.st) r in t || (i.remove(r), this.st.delete(r));
    for (const r in t) {
      const a = !!t[r];
      a === this.st.has(r) || this.nt?.has(r) || (a ? (i.add(r), this.st.add(r)) : (i.remove(r), this.st.delete(r)));
    }
    return se;
  }
}), hi = (e) => d`
  <a href="#main-content" class="biz-application-shell__skip-link">
    Skip to main content
  </a>
  <div
    class=${M({
  "biz-application-shell": !0,
  [`biz-application-shell--variant-${e.variant}`]: !0,
  "biz-application-shell--sticky-header": e.stickyHeader ?? !1,
  "biz-application-shell--fixed-sidebar": e.fixedSidebar ?? !1,
  "biz-application-shell--sidebar-collapsed": e.sidebarCollapsed ?? !1,
  "biz-application-shell--mobile-drawer-open": e.mobileDrawerOpen ?? !1
})}
  >
    ${e.variant !== "minimal" ? d`
      <header class="biz-application-shell__header" role="banner">
        <slot name="header-slot"></slot>
      </header>
    ` : null}

    <div class="biz-application-shell__body">
      ${e.variant === "default" ? d`
        <div
          class="biz-application-shell__overlay"
          @click=${e.handleOverlayClick}
        ></div>
        <aside
          class="biz-application-shell__sidebar"
          role="navigation"
          aria-expanded=${!e.sidebarCollapsed}
          @keydown=${e.handleSidebarKeyDown}
        >
          <slot name="sidebar-slot"></slot>
        </aside>
      ` : null}

      <main
        id="main-content"
        class="biz-application-shell__content"
        role="main"
        tabindex="-1"
      >
        <slot name="content-slot"></slot>
      </main>
    </div>

    ${e.variant !== "minimal" ? d`
      <footer class="biz-application-shell__footer" role="contentinfo">
        <slot name="footer-slot"></slot>
      </footer>
    ` : null}
  </div>
`;
function o(e, t, i, r) {
  var a = arguments.length, s = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(e, t, i, r);
  else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, i, s) : n(t, i)) || s);
  return a > 3 && s && Object.defineProperty(t, i, s), s;
}
var Ce = class extends _ {
  constructor(...t) {
    super(...t), this.variant = "default", this.sidebarCollapsed = !1, this.stickyHeader = !0, this.fixedSidebar = !0, this.mobileDrawerOpen = !1, this.resizeObserver = null, this.handleOverlayClick = () => {
      this.mobileDrawerOpen = !1;
    }, this.handleSidebarKeyDown = (i) => {
      i.key === "Escape" && this.mobileDrawerOpen && (this.mobileDrawerOpen = !1);
    }, this.handleGlobalKeyDown = (i) => {
      i.key === "Escape" && this.mobileDrawerOpen && (this.mobileDrawerOpen = !1);
    };
  }
  static {
    this.styles = ci;
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("keydown", this.handleGlobalKeyDown), this.setupResizeObserver();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("keydown", this.handleGlobalKeyDown), this.resizeObserver && this.resizeObserver.disconnect();
  }
  updated(t) {
    t.has("sidebarCollapsed") && this.dispatchSidebarToggleEvent();
  }
  setupResizeObserver() {
    this.resizeObserver = new ResizeObserver((t) => {
      for (const i of t) {
        const r = i.contentRect.width;
        let a = "desktop";
        r <= 768 ? a = "mobile" : r <= 1024 && (a = "tablet"), this.dispatchEvent(new CustomEvent("breakpoint-change", {
          detail: { breakpoint: a },
          bubbles: !0,
          composed: !0
        }));
      }
    }), this.resizeObserver.observe(this);
  }
  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
  toggleMobileDrawer() {
    this.mobileDrawerOpen = !this.mobileDrawerOpen;
  }
  dispatchSidebarToggleEvent() {
    this.dispatchEvent(new CustomEvent("sidebar-toggle", {
      detail: { collapsed: this.sidebarCollapsed },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return hi({
      variant: this.variant,
      sidebarCollapsed: this.sidebarCollapsed,
      stickyHeader: this.stickyHeader,
      fixedSidebar: this.fixedSidebar,
      mobileDrawerOpen: this.mobileDrawerOpen,
      handleOverlayClick: this.handleOverlayClick,
      handleSidebarKeyDown: this.handleSidebarKeyDown
    });
  }
};
o([l({ type: String })], Ce.prototype, "variant", void 0);
o([l({
  type: Boolean,
  attribute: "sidebar-collapsed",
  reflect: !0
})], Ce.prototype, "sidebarCollapsed", void 0);
o([l({
  type: Boolean,
  attribute: "sticky-header"
})], Ce.prototype, "stickyHeader", void 0);
o([l({
  type: Boolean,
  attribute: "fixed-sidebar"
})], Ce.prototype, "fixedSidebar", void 0);
o([g()], Ce.prototype, "mobileDrawerOpen", void 0);
Ce = o([k("biz-application-shell")], Ce);
var gi = ({ items: e, separator: t = "/", onPathClick: i }) => {
  const r = (a, s) => {
    a.preventDefault(), i && i(s);
  };
  return d`
    <nav class="biz-breadcrumb-nav" aria-label="Breadcrumb" style="--biz-breadcrumb-separator: '${t}'">
      <ol class="biz-breadcrumb-list">
        ${e.map((a, s) => {
    const n = s === e.length - 1;
    return d`
            <li class="biz-breadcrumb-item">
              ${n ? d`<span class="biz-breadcrumb-current" aria-current="page">${a.label}</span>` : d`
                  <a 
                    href="${a.href || "#"}" 
                    class="biz-breadcrumb-link"
                    @click=${(c) => r(c, a)}
                  >
                    ${a.label}
                  </a>`}
            </li>
          `;
  })}
      </ol>
    </nav>
  `;
}, vi = w`
  .biz-breadcrumb-nav {
  font-family: sans-serif;
  font-size: 14px;
}

.biz-breadcrumb-list {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}

.biz-breadcrumb-item {
  display: flex;
  align-items: center;
}

.biz-breadcrumb-item:not(:last-child)::after {
  content: var(--biz-breadcrumb-separator, '/');
  margin: 0 8px;
  color: #767676;
}

.biz-breadcrumb-link {
  color: #1f6fb2;
  text-decoration: none;
}

.biz-breadcrumb-link:hover {
  text-decoration: underline;
}

.biz-breadcrumb-current {
  color: #333;
  font-weight: 600;
}
`, Qe = class extends _ {
  constructor(...t) {
    super(...t), this.#e = [], this.#t = "/", this._handlePathClick = (i) => {
      this.dispatchEvent(new CustomEvent("path-click", { detail: { item: i } }));
    };
  }
  static {
    this.styles = vi;
  }
  #e;
  get items() {
    return this.#e;
  }
  set items(t) {
    this.#e = t;
  }
  #t;
  get separator() {
    return this.#t;
  }
  set separator(t) {
    this.#t = t;
  }
  render() {
    return gi({
      items: this.items,
      separator: this.separator,
      onPathClick: this._handlePathClick
    });
  }
};
o([l({ type: Array })], Qe.prototype, "items", null);
o([l({ type: String })], Qe.prototype, "separator", null);
Qe = o([k("biz-breadcrumb")], Qe);
var Xe = (e) => e ?? E, mi = (e) => {
  const { variant: t = "outlined", size: i = "medium", fullWidth: r = !1, borderedDivider: a = !1, hoverable: s = !1, disabled: n = !1, loading: c = !1, ariaLabelledby: p, onCardClick: b } = e, u = (v) => {
    n || c || b && b(v);
  }, h = (v) => {
    n || c || (v.key === "Enter" || v.key === " ") && (v.preventDefault(), b && b(v));
  };
  return d`
    <div
      class=${M({
    "biz-card-container": !0,
    [`biz-card-container--${t}`]: !0,
    [`biz-card-container--${i}`]: !0,
    "biz-card-container--full-width": r,
    "biz-card-container--bordered-divider": a,
    "biz-card-container--hoverable": s && !n && !c,
    "biz-card-container--disabled": n,
    "biz-card-container--loading": c
  })}
      role=${s ? "button" : "region"}
      tabindex=${s && !n ? "0" : "-1"}
      aria-labelledby=${Xe(p)}
      aria-disabled=${n ? "true" : "false"}
      aria-busy=${c ? "true" : "false"}
      @click=${u}
      @keydown=${h}
    >
      ${c ? d`
            <div class="biz-card-container__loading-overlay" aria-hidden="true">
              <span class="biz-card-container__spinner"></span>
            </div>
          ` : ""}

      <header class="biz-card-container__header">
        <slot name="header-slot"></slot>
      </header>

      ${a ? d`<div class="biz-card-container__divider" aria-hidden="true"></div>` : ""}

      <main class="biz-card-container__body">
        <slot></slot>
      </main>

      ${a ? d`<div class="biz-card-container__divider" aria-hidden="true"></div>` : ""}

      <footer class="biz-card-container__footer">
        <slot name="footer-slot"></slot>
      </footer>
    </div>
  `;
}, zi = w`
  :host {
    display: inline-block;
    box-sizing: border-box;

    --biz-card-container-padding-sm: 12px;
    --biz-card-container-padding-md: 16px;
    --biz-card-container-padding-lg: 24px;
    --biz-card-container-border-radius: 8px;

    --biz-card-container-bg-color: #ffffff;
    --biz-card-container-border-color: #e5e7eb;
    --biz-card-container-divider-color: #f3f4f6;

    --biz-card-container-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    --biz-card-container-hover-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --biz-card-container-focus-ring-color: #3b82f6;

    --biz-card-container-disabled-opacity: 0.6;
    --biz-card-container-filled-bg: #f9fafb;
    --biz-card-container-elevated-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  :host([full-width]) {
    display: block;
    width: 100%;
  }

  .biz-card-container {
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: var(--biz-card-container-border-radius);
    background-color: var(--biz-card-container-bg-color);
    transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    overflow: hidden;
  }

  /* Variants */
  .biz-card-container--outlined {
    border: 1px solid var(--biz-card-container-border-color);
    box-shadow: none;
  }

  .biz-card-container--filled {
    border: 1px solid transparent;
    background-color: var(--biz-card-container-filled-bg);
    box-shadow: none;
  }

  .biz-card-container--elevated {
    border: 1px solid transparent;
    box-shadow: var(--biz-card-container-elevated-shadow);
  }

  /* Sizes */
  .biz-card-container--small .biz-card-container__header,
  .biz-card-container--small .biz-card-container__body,
  .biz-card-container--small .biz-card-container__footer {
    padding: var(--biz-card-container-padding-sm);
  }

  .biz-card-container--medium .biz-card-container__header,
  .biz-card-container--medium .biz-card-container__body,
  .biz-card-container--medium .biz-card-container__footer {
    padding: var(--biz-card-container-padding-md);
  }

  .biz-card-container--large .biz-card-container__header,
  .biz-card-container--large .biz-card-container__body,
  .biz-card-container--large .biz-card-container__footer {
    padding: var(--biz-card-container-padding-lg);
  }

  /* Layout Properties */
  .biz-card-container--full-width {
    width: 100%;
  }

  .biz-card-container__divider {
    height: 1px;
    background-color: var(--biz-card-container-divider-color);
    width: 100%;
  }

  /* States: Hoverable */
  .biz-card-container--hoverable {
    cursor: pointer;
  }

  .biz-card-container--hoverable:hover {
    box-shadow: var(--biz-card-container-hover-shadow);
    border-color: var(--biz-card-container-border-color);
  }

  /* States: Focus / Focus-visible */
  .biz-card-container:focus-visible {
    outline: 2px solid var(--biz-card-container-focus-ring-color);
    outline-offset: 2px;
  }

  /* States: Disabled */
  .biz-card-container--disabled {
    opacity: var(--biz-card-container-disabled-opacity);
    cursor: not-allowed;
    pointer-events: none;
  }

  /* States: Loading */
  .biz-card-container--loading {
    pointer-events: none;
  }

  .biz-card-container__loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .biz-card-container__spinner {
    width: 24px;
    height: 24px;
    border: 3px solid var(--biz-card-container-border-color);
    border-top-color: var(--biz-card-container-focus-ring-color);
    border-radius: 50%;
    animation: biz-card-spinner 0.8s linear infinite;
  }

  @keyframes biz-card-spinner {
    to {
      transform: rotate(360deg);
    }
  }
`, ue = class extends _ {
  constructor(...t) {
    super(...t), this.variant = "outlined", this.size = "medium", this.fullWidth = !1, this.borderedDivider = !1, this.hoverable = !1, this.disabled = !1, this.loading = !1;
  }
  static {
    this.styles = zi;
  }
  _handleCardClick(t) {
    this.disabled || this.loading || this.dispatchEvent(new CustomEvent("card-click", {
      detail: { originalEvent: t },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return mi({
      variant: this.variant,
      size: this.size,
      fullWidth: this.fullWidth,
      borderedDivider: this.borderedDivider,
      hoverable: this.hoverable,
      disabled: this.disabled,
      loading: this.loading,
      ariaLabelledby: this.ariaLabelledby,
      onCardClick: this._handleCardClick.bind(this)
    });
  }
};
o([l({
  type: String,
  reflect: !0
})], ue.prototype, "variant", void 0);
o([l({
  type: String,
  reflect: !0
})], ue.prototype, "size", void 0);
o([l({
  type: Boolean,
  attribute: "full-width",
  reflect: !0
})], ue.prototype, "fullWidth", void 0);
o([l({
  type: Boolean,
  attribute: "bordered-divider",
  reflect: !0
})], ue.prototype, "borderedDivider", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], ue.prototype, "hoverable", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], ue.prototype, "disabled", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], ue.prototype, "loading", void 0);
o([l({
  type: String,
  attribute: "aria-labelledby"
})], ue.prototype, "ariaLabelledby", void 0);
ue = o([k("biz-card-container")], ue);
var fi = (e) => {
  const { checked: t, indeterminate: i, disabled: r, readonly: a, required: s, error: n, value: c, labelPosition: p, variant: b, size: u, descriptionId: h, onInput: v, onChange: m, onFocus: z, onBlur: D } = e;
  return d`
    <div
      class="biz-checkbox biz-checkbox--${u} biz-checkbox--${b} biz-checkbox--label-${p}"
      ?data-checked=${t}
      ?data-indeterminate=${i}
      ?data-disabled=${r}
      ?data-readonly=${a}
      ?data-error=${n}
    >
      <label class="biz-checkbox__wrapper">
        <slot name="start-slot"></slot>
        <div class="biz-checkbox__control-container">
          <input
            type="checkbox"
            class="biz-checkbox__native"
            .checked=${t}
            .value=${String(c)}
            ?disabled=${r}
            ?readonly=${a}
            ?required=${s}
            aria-checked=${i ? "mixed" : t ? "true" : "false"}
            aria-invalid=${n ? "true" : "false"}
            aria-required=${s ? "true" : "false"}
            aria-describedby=${Xe(h)}
            @input=${v}
            @change=${m}
            @focus=${z}
            @blur=${D}
          />
          <div class="biz-checkbox__control" aria-hidden="true">
            <slot name="icon-slot">
              ${i ? d`
                    <svg class="biz-checkbox__icon" viewBox="0 0 16 16" fill="none">
                      <rect x="3" y="7" width="10" height="2" rx="1" fill="currentColor" />
                    </svg>
                  ` : t ? d`
                    <svg class="biz-checkbox__icon" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M13.5 4.5L6.5 11.5L3 8"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ` : Re}
            </slot>
          </div>
        </div>
        <span class="biz-checkbox__label">
          <slot name="label-slot">
            <slot></slot>
          </slot>
        </span>
        <slot name="end-slot"></slot>
      </label>
      <div id=${Xe(h)} class="biz-checkbox__description">
        <slot name="description-slot">
          <slot name="helper-text-slot"></slot>
        </slot>
      </div>
    </div>
  `;
}, yi = w`
  :host {
    display: inline-block;
    box-sizing: border-box;

    --biz-checkbox-size-sm: 16px;
    --biz-checkbox-size-md: 20px;
    --biz-checkbox-size-lg: 24px;
    --biz-checkbox-label-gap: 8px;
    --biz-checkbox-border-radius: 4px;

    --biz-checkbox-bg: #ffffff;
    --biz-checkbox-border-color: #d1d5db;
    --biz-checkbox-text-color: #111827;

    --biz-checkbox-checked-bg: #2563eb;
    --biz-checkbox-checked-border-color: #2563eb;
    --biz-checkbox-icon-color: #ffffff;

    --biz-checkbox-hover-border-color: #9ca3af;
    --biz-checkbox-focus-ring-color: rgba(37, 99, 235, 0.2);

    --biz-checkbox-error-color: #dc2626;
    --biz-checkbox-disabled-bg: #f3f4f6;
    --biz-checkbox-disabled-border-color: #e5e7eb;
    --biz-checkbox-disabled-text-color: #9ca3af;

    --biz-checkbox-control-size: var(--biz-checkbox-size-md);
    --biz-checkbox-font-size: 14px;
    --biz-checkbox-card-padding: 8px 12px;
    --biz-checkbox-card-bg: #ffffff;
    --biz-checkbox-card-border: 1px solid var(--biz-checkbox-border-color);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .biz-checkbox {
    display: inline-flex;
    flex-direction: column;
    font-family: inherit;
    color: var(--biz-checkbox-text-color);
  }

  .biz-checkbox__wrapper {
    display: inline-flex;
    align-items: center;
    gap: var(--biz-checkbox-label-gap);
    cursor: pointer;
    user-select: none;
    position: relative;
  }

  .biz-checkbox--label-left .biz-checkbox__wrapper {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  .biz-checkbox--small {
    --biz-checkbox-control-size: var(--biz-checkbox-size-sm);
    --biz-checkbox-font-size: 12px;
    --biz-checkbox-card-padding: 6px 10px;
  }

  .biz-checkbox--medium {
    --biz-checkbox-control-size: var(--biz-checkbox-size-md);
    --biz-checkbox-font-size: 14px;
    --biz-checkbox-card-padding: 8px 12px;
  }

  .biz-checkbox--large {
    --biz-checkbox-control-size: var(--biz-checkbox-size-lg);
    --biz-checkbox-font-size: 16px;
    --biz-checkbox-card-padding: 10px 16px;
  }

  .biz-checkbox--outlined .biz-checkbox__wrapper {
    padding: var(--biz-checkbox-card-padding);
    border: var(--biz-checkbox-card-border);
    border-radius: calc(var(--biz-checkbox-border-radius) + 2px);
    background-color: var(--biz-checkbox-card-bg);
  }

  .biz-checkbox--filled .biz-checkbox__wrapper {
    padding: var(--biz-checkbox-card-padding);
    border: 1px solid transparent;
    border-radius: calc(var(--biz-checkbox-border-radius) + 2px);
    background-color: var(--biz-checkbox-disabled-bg);
  }

  .biz-checkbox__control-container {
    position: relative;
    width: var(--biz-checkbox-control-size);
    height: var(--biz-checkbox-control-size);
    flex-shrink: 0;
  }

  .biz-checkbox__native {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
    z-index: 1;
  }

  .biz-checkbox__control {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--biz-checkbox-bg);
    border: 1px solid var(--biz-checkbox-border-color);
    border-radius: var(--biz-checkbox-border-radius);
    color: var(--biz-checkbox-icon-color);
    transition: background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .biz-checkbox__icon {
    width: 70%;
    height: 70%;
  }

  .biz-checkbox__label {
    font-size: var(--biz-checkbox-font-size);
    line-height: 1.5;
  }

  .biz-checkbox__description {
    font-size: calc(var(--biz-checkbox-font-size) - 2px);
    color: #6b7280;
    margin-top: 4px;
    padding-left: calc(var(--biz-checkbox-control-size) + var(--biz-checkbox-label-gap));
  }

  .biz-checkbox--label-left .biz-checkbox__description {
    padding-left: 0;
    padding-right: calc(var(--biz-checkbox-control-size) + var(--biz-checkbox-label-gap));
  }

  .biz-checkbox__wrapper:hover .biz-checkbox__control {
    border-color: var(--biz-checkbox-hover-border-color);
  }

  .biz-checkbox__native:focus-visible + .biz-checkbox__control {
    border-color: var(--biz-checkbox-checked-border-color);
    box-shadow: 0 0 0 3px var(--biz-checkbox-focus-ring-color);
  }

  .biz-checkbox__native:active + .biz-checkbox__control {
    border-color: var(--biz-checkbox-checked-border-color);
  }

  .biz-checkbox[data-checked] .biz-checkbox__control,
  .biz-checkbox[data-indeterminate] .biz-checkbox__control {
    background-color: var(--biz-checkbox-checked-bg);
    border-color: var(--biz-checkbox-checked-border-color);
  }

  .biz-checkbox[data-error] .biz-checkbox__control {
    border-color: var(--biz-checkbox-error-color);
  }

  .biz-checkbox[data-error] .biz-checkbox__description {
    color: var(--biz-checkbox-error-color);
  }

  .biz-checkbox[data-disabled] {
    opacity: 0.6;
  }

  .biz-checkbox[data-disabled] .biz-checkbox__wrapper,
  .biz-checkbox[data-disabled] .biz-checkbox__native {
    cursor: not-allowed;
  }

  .biz-checkbox[data-disabled] .biz-checkbox__control {
    background-color: var(--biz-checkbox-disabled-bg);
    border-color: var(--biz-checkbox-disabled-border-color);
  }

  .biz-checkbox[data-disabled] .biz-checkbox__label {
    color: var(--biz-checkbox-disabled-text-color);
  }

  .biz-checkbox[data-readonly] .biz-checkbox__wrapper,
  .biz-checkbox[data-readonly] .biz-checkbox__native {
    cursor: default;
  }
`, J = class extends _ {
  constructor(...t) {
    super(...t), this.checked = !1, this.indeterminate = !1, this.value = "", this.disabled = !1, this.readonly = !1, this.required = !1, this.error = !1, this.labelPosition = "right", this.variant = "standard", this.size = "medium", this.isFocused = !1, this.uniqueDescriptionId = `biz-checkbox-desc-${Math.random().toString(36).substring(2, 9)}`;
  }
  static {
    this.styles = yi;
  }
  handleInput(t) {
    if (this.disabled || this.readonly) {
      t.preventDefault();
      return;
    }
    const i = t.target;
    this.checked = i.checked, this.indeterminate = !1;
  }
  handleChange(t) {
    if (this.disabled || this.readonly) {
      t.preventDefault(), t.stopPropagation();
      return;
    }
    this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: {
        checked: this.checked,
        value: this.value
      }
    }));
  }
  handleFocus(t) {
    this.disabled || (this.isFocused = !0, this.dispatchEvent(new CustomEvent("focus", {
      bubbles: !0,
      composed: !0,
      detail: t
    })));
  }
  handleBlur(t) {
    this.disabled || (this.isFocused = !1, this.dispatchEvent(new CustomEvent("blur", {
      bubbles: !0,
      composed: !0,
      detail: t
    })));
  }
  handleKeyDown(t) {
    this.disabled || this.readonly || t.code === "Space" && (t.preventDefault(), this.checked = !this.checked, this.indeterminate = !1, this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: {
        checked: this.checked,
        value: this.value
      }
    })));
  }
  firstUpdated() {
    this.addEventListener("keydown", this.handleKeyDown);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("keydown", this.handleKeyDown);
  }
  render() {
    return fi({
      checked: this.checked,
      indeterminate: this.indeterminate,
      disabled: this.disabled,
      readonly: this.readonly,
      required: this.required,
      error: this.error,
      value: this.value,
      labelPosition: this.labelPosition,
      variant: this.variant,
      size: this.size,
      descriptionId: this.uniqueDescriptionId,
      onInput: this.handleInput.bind(this),
      onChange: this.handleChange.bind(this),
      onFocus: this.handleFocus.bind(this),
      onBlur: this.handleBlur.bind(this)
    });
  }
};
o([l({
  type: Boolean,
  reflect: !0
})], J.prototype, "checked", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], J.prototype, "indeterminate", void 0);
o([l({ type: String })], J.prototype, "value", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], J.prototype, "disabled", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], J.prototype, "readonly", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], J.prototype, "required", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], J.prototype, "error", void 0);
o([l({
  type: String,
  attribute: "label-position"
})], J.prototype, "labelPosition", void 0);
o([l({ type: String })], J.prototype, "variant", void 0);
o([l({ type: String })], J.prototype, "size", void 0);
o([g()], J.prototype, "isFocused", void 0);
J = o([k("biz-checkbox")], J);
var xi = w`
  :host {
    display: inline-block;
    box-sizing: border-box;

    /* Design Tokens */
    --biz-checkbox-group-gap-sm: 8px;
    --biz-checkbox-group-gap-md: 12px;
    --biz-checkbox-group-gap-lg: 16px;
    --biz-checkbox-group-label-margin-bottom: 8px;

    --biz-checkbox-group-label-color: #111827;
    --biz-checkbox-group-helper-text-color: #6b7280;
    --biz-checkbox-group-error-color: #dc2626;
    --biz-checkbox-group-disabled-opacity: 0.5;

    --biz-checkbox-group-focus-ring-color: #2563eb;
    --biz-checkbox-group-border-color: #d1d5db;
    --biz-checkbox-group-bg: transparent;
  }

  :host([full-width]),
  .biz-checkbox-group--full-width {
    width: 100%;
    display: block;
  }

  .biz-checkbox-group {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
  }

  /* Label & Helper Styles */
  .biz-checkbox-group__label {
    color: var(--biz-checkbox-group-label-color);
    margin-bottom: var(--biz-checkbox-group-label-margin-bottom);
    font-weight: 600;
  }

  .biz-checkbox-group__helper-text {
    margin-top: 6px;
    font-size: 0.875rem;
    color: var(--biz-checkbox-group-helper-text-color);
  }

  /* Container & Orientation */
  .biz-checkbox-group__container {
    display: flex;
    box-sizing: border-box;
  }

  .biz-checkbox-group--vertical .biz-checkbox-group__container {
    flex-direction: column;
  }

  .biz-checkbox-group--horizontal .biz-checkbox-group__container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  /* Sizes */
  .biz-checkbox-group--small .biz-checkbox-group__container {
    gap: var(--biz-checkbox-group-gap-sm);
  }

  .biz-checkbox-group--small .biz-checkbox-group__label {
    font-size: 0.875rem;
  }

  .biz-checkbox-group--medium .biz-checkbox-group__container {
    gap: var(--biz-checkbox-group-gap-md);
  }

  .biz-checkbox-group--medium .biz-checkbox-group__label {
    font-size: 1rem;
  }

  .biz-checkbox-group--large .biz-checkbox-group__container {
    gap: var(--biz-checkbox-group-gap-lg);
  }

  .biz-checkbox-group--large .biz-checkbox-group__label {
    font-size: 1.125rem;
  }

  /* Variants */
  .biz-checkbox-group--standard {
    /* Standard Layout */
  }

  .biz-checkbox-group--card .biz-checkbox-group__container {
    padding: 4px;
  }

  .biz-checkbox-group--button .biz-checkbox-group__container {
    display: inline-flex;
    border-radius: 6px;
    background-color: #f3f4f6;
    padding: 2px;
  }

  /* States */
  .biz-checkbox-group--disabled {
    opacity: var(--biz-checkbox-group-disabled-opacity);
    cursor: not-allowed;
    pointer-events: none;
  }

  .biz-checkbox-group--readonly {
    pointer-events: none;
  }

  .biz-checkbox-group--error .biz-checkbox-group__label,
  .biz-checkbox-group--error .biz-checkbox-group__helper-text {
    color: var(--biz-checkbox-group-error-color);
  }

  .biz-checkbox-group:focus-within {
    outline: none;
  }
`, _i = (e) => {
  const { labelId: t, helperId: i, orientation: r = "vertical", size: a = "medium", variant: s = "standard", fullWidth: n = !1, required: c = !1, disabled: p = !1, readonly: b = !1, error: u = !1, onSlotChange: h } = e, v = [
    "biz-checkbox-group",
    `biz-checkbox-group--${r}`,
    `biz-checkbox-group--${a}`,
    `biz-checkbox-group--${s}`,
    n ? "biz-checkbox-group--full-width" : "",
    p ? "biz-checkbox-group--disabled" : "",
    b ? "biz-checkbox-group--readonly" : "",
    u ? "biz-checkbox-group--error" : ""
  ].filter(Boolean).join(" ");
  return d`
    <div
      class="${v}"
      role="group"
      aria-labelledby="${t}"
      aria-describedby="${i}"
      aria-invalid="${u ? "true" : "false"}"
      aria-required="${c ? "true" : "false"}"
      ?data-disabled="${p}"
      ?data-readonly="${b}"
    >
      <div id="${t}" class="biz-checkbox-group__label">
        <slot name="label-slot"></slot>
      </div>

      <div class="biz-checkbox-group__container">
        <slot @slotchange="${h}"></slot>
      </div>

      <div id="${i}" class="biz-checkbox-group__helper-text">
        <slot name="helper-text-slot"></slot>
      </div>
    </div>
  `;
}, Dt = 0, q = class extends _ {
  constructor(...t) {
    super(...t), this.value = [], this.name = "", this.orientation = "vertical", this.variant = "standard", this.size = "medium", this.required = !1, this.disabled = !1, this.readonly = !1, this.error = !1, this.fullWidth = !1, this.min = 0, this.max = Number.POSITIVE_INFINITY, this.labelId = `biz-checkbox-group-label-${++Dt}`, this.helperId = `biz-checkbox-group-helper-${Dt}`, this.handleChildChange = (i) => {
      if (this.disabled || this.readonly) return;
      const r = i.target;
      let a = [...this.value];
      if (r.checked) {
        if (a.length < this.max && !a.includes(r.value)) a.push(r.value);
        else if (a.length >= this.max) {
          r.checked = !1;
          return;
        }
      } else a = a.filter((s) => s !== r.value);
      this.value = a, this.dispatchChangeEvent();
    };
  }
  static {
    this.styles = xi;
  }
  handleSlotChange() {
    this.syncChildCheckboxes();
  }
  updated(t) {
    super.updated(t), (t.has("value") || t.has("disabled") || t.has("readonly") || t.has("name")) && this.syncChildCheckboxes();
  }
  getSlottedCheckboxes() {
    const t = this.shadowRoot?.querySelector("slot:not([name])");
    if (!t) return [];
    const i = t.assignedElements({ flatten: !0 }), r = [];
    return i.forEach((a) => {
      a instanceof HTMLInputElement && a.type === "checkbox" && r.push(a), a.querySelectorAll('input[type="checkbox"]').forEach((s) => r.push(s));
    }), r;
  }
  syncChildCheckboxes() {
    this.getSlottedCheckboxes().forEach((t) => {
      this.name && (t.name = this.name), t.checked = this.value.includes(t.value), t.disabled = this.disabled, t.readOnly = this.readonly, t.removeEventListener("change", this.handleChildChange), t.addEventListener("change", this.handleChildChange);
    });
  }
  dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent("change", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  clear() {
    this.disabled || this.readonly || (this.value = [], this.syncChildCheckboxes(), this.dispatchChangeEvent(), this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0
    })));
  }
  handleKeyDown(t) {
    t.key === "Escape" && this.clear();
  }
  render() {
    return _i({
      labelId: this.labelId,
      helperId: this.helperId,
      orientation: this.orientation,
      size: this.size,
      variant: this.variant,
      fullWidth: this.fullWidth,
      required: this.required,
      disabled: this.disabled,
      readonly: this.readonly,
      error: this.error,
      onSlotChange: () => this.handleSlotChange()
    });
  }
};
o([l({ type: Array })], q.prototype, "value", void 0);
o([l({ type: String })], q.prototype, "name", void 0);
o([l({ type: String })], q.prototype, "orientation", void 0);
o([l({ type: String })], q.prototype, "variant", void 0);
o([l({ type: String })], q.prototype, "size", void 0);
o([l({ type: Boolean })], q.prototype, "required", void 0);
o([l({ type: Boolean })], q.prototype, "disabled", void 0);
o([l({ type: Boolean })], q.prototype, "readonly", void 0);
o([l({ type: Boolean })], q.prototype, "error", void 0);
o([l({
  type: Boolean,
  attribute: "full-width"
})], q.prototype, "fullWidth", void 0);
o([l({ type: Number })], q.prototype, "min", void 0);
o([l({ type: Number })], q.prototype, "max", void 0);
o([g()], q.prototype, "labelId", void 0);
o([g()], q.prototype, "helperId", void 0);
q = o([k("biz-checkbox-group")], q);
var { I: qr } = bi;
var Kt = (e) => e.strings === void 0;
var wi = {}, ki = (e, t = wi) => e._$AH = t;
var Nt = Ke(class extends Ne {
  constructor(e) {
    if (super(e), e.type !== be.PROPERTY && e.type !== be.ATTRIBUTE && e.type !== be.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
    if (!Kt(e)) throw Error("`live` bindings can only contain a single expression");
  }
  render(e) {
    return e;
  }
  update(e, [t]) {
    if (t === se || t === E) return t;
    const i = e.element, r = e.name;
    if (e.type === be.PROPERTY) {
      if (t === i[r]) return se;
    } else if (e.type === be.BOOLEAN_ATTRIBUTE) {
      if (!!t === i.hasAttribute(r)) return se;
    } else if (e.type === be.ATTRIBUTE && i.getAttribute(r) === t + "") return se;
    return ki(e), t;
  }
}), $i = (e) => {
  const t = e.size === "small" ? "sm" : e.size === "large" ? "lg" : "md", i = e.variant || "outlined";
  return d`
    <div
      class=${M({
    "biz-chip": !0,
    [`biz-chip--${i}`]: !0,
    [`biz-chip--${t}`]: !0
  })}
    >
      <slot name="label-slot">
        <label class="biz-chip__label"></label>
      </slot>

      <div
        class=${M({
    "biz-chip__container": !0,
    "biz-chip__container--focused": e.isFocused,
    "biz-chip__container--disabled": e.disabled,
    "biz-chip__container--readonly": e.readonly,
    "biz-chip__container--error": e.error
  })}
        @click=${e.onContainerClick}
      >
        <slot name="start-slot"></slot>

        <ul class="biz-chip__item-list" role="list">
          ${qe(e.value, (r) => r, (r, a) => d`
              <li
                class=${M({
    "biz-chip__item": !0,
    "biz-chip__item--focused": e.focusedChipIndex === a
  })}
                role="listitem"
                tabindex=${e.focusedChipIndex === a ? "0" : "-1"}
              >
                <slot name="chip-item-slot" .item=${r} .index=${a}>
                  <span>${r}</span>
                  ${e.deletable && !e.disabled && !e.readonly ? d`
                        <button
                          type="button"
                          class="biz-chip__delete-btn"
                          aria-label=${`삭제: ${r}`}
                          tabindex="-1"
                          @click=${(s) => {
    s.stopPropagation(), e.onRemoveChip(a);
  }}
                        >
                          &times;
                        </button>
                      ` : ""}
                </slot>
              </li>
            `)}
        </ul>

        ${e.readonly ? "" : d`
              <input
                type="text"
                class="biz-chip__input"
                .value=${Nt(e.inputValue)}
                placeholder=${e.value.length === 0 ? e.placeholder : ""}
                ?disabled=${e.disabled}
                ?readonly=${e.readonly}
                aria-invalid=${e.error ? "true" : "false"}
                aria-required=${e.required ? "true" : "false"}
                aria-describedby=${e.helperTextId}
                @input=${e.onInput}
                @keydown=${e.onKeyDown}
                @focus=${e.onFocus}
                @blur=${e.onBlur}
              />
            `}

        <slot name="end-slot"></slot>
      </div>

      <div
        id=${e.helperTextId}
        class=${M({
    "biz-chip__helper-text": !0,
    "biz-chip__helper-text--error": e.error
  })}
      >
        <slot name="helper-text-slot"></slot>
      </div>

      <div class="sr-only" aria-live="polite" aria-atomic="true">
        ${e.liveMessage}
      </div>
    </div>
  `;
}, Si = w`
  :host {
    /* Layout & Sizing */
    --biz-chip-container-min-height-sm: 32px;
    --biz-chip-container-min-height-md: 40px;
    --biz-chip-container-min-height-lg: 48px;
    --biz-chip-container-padding-x: 8px;
    --biz-chip-container-padding-y: 4px;
    --biz-chip-gap: 6px;
    --biz-chip-border-radius: 4px;

    /* Individual Chip Styling */
    --biz-chip-item-bg-color: #e5e7eb;
    --biz-chip-item-text-color: #111827;
    --biz-chip-item-height: 24px;
    --biz-chip-item-border-radius: 12px;

    /* Colors - Base */
    --biz-chip-bg-color: #ffffff;
    --biz-chip-border-color: #d1d5db;
    --biz-chip-text-color: #111827;
    --biz-chip-placeholder-color: #9ca3af;

    /* Colors - Interactive States */
    --biz-chip-hover-border-color: #9ca3af;
    --biz-chip-focus-border-color: #2563eb;
    --biz-chip-focus-ring-color: rgba(37, 99, 235, 0.2);

    /* Colors - Error & Disabled */
    --biz-chip-error-color: #dc2626;
    --biz-chip-disabled-bg-color: #f3f4f6;
    --biz-chip-disabled-text-color: #9ca3af;

    display: inline-block;
    width: auto;
    font-family: inherit;
    box-sizing: border-box;
  }

  :host([full-width]) {
    display: block;
    width: 100%;
  }

  .biz-chip {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  }

  .biz-chip__label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: var(--biz-chip-text-color);
  }

  .biz-chip__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--biz-chip-gap);
    padding: var(--biz-chip-container-padding-y) var(--biz-chip-container-padding-x);
    background-color: var(--biz-chip-bg-color);
    border: 1px solid var(--biz-chip-border-color);
    border-radius: var(--biz-chip-border-radius);
    box-sizing: border-box;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  }

  .biz-chip__container:hover:not(.biz-chip__container--disabled):not(.biz-chip__container--readonly) {
    border-color: var(--biz-chip-hover-border-color);
  }

  .biz-chip__container--focused {
    border-color: var(--biz-chip-focus-border-color);
    box-shadow: 0 0 0 3px var(--biz-chip-focus-ring-color);
  }

  /* Variants */
  .biz-chip--outlined .biz-chip__container {
    background-color: transparent;
    border-style: solid;
  }

  .biz-chip--filled .biz-chip__container {
    background-color: #f3f4f6;
    border-color: transparent;
  }

  .biz-chip--filled .biz-chip__container:hover:not(.biz-chip__container--disabled):not(.biz-chip__container--readonly) {
    background-color: #e5e7eb;
    border-color: transparent;
  }

  .biz-chip--standard .biz-chip__container {
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid var(--biz-chip-border-color);
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
  }

  /* Sizes */
  .biz-chip--sm .biz-chip__container {
    min-height: var(--biz-chip-container-min-height-sm);
    font-size: 12px;
  }

  .biz-chip--sm .biz-chip__item {
    height: 20px;
    font-size: 11px;
    padding: 0 6px;
  }

  .biz-chip--md .biz-chip__container {
    min-height: var(--biz-chip-container-min-height-md);
    font-size: 14px;
  }

  .biz-chip--md .biz-chip__item {
    height: var(--biz-chip-item-height);
    font-size: 12px;
    padding: 0 8px;
  }

  .biz-chip--lg .biz-chip__container {
    min-height: var(--biz-chip-container-min-height-lg);
    font-size: 16px;
  }

  .biz-chip--lg .biz-chip__item {
    height: 28px;
    font-size: 14px;
    padding: 0 10px;
  }

  /* Chip Item */
  .biz-chip__item-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--biz-chip-gap);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .biz-chip__item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background-color: var(--biz-chip-item-bg-color);
    color: var(--biz-chip-item-text-color);
    border-radius: var(--biz-chip-item-border-radius);
    box-sizing: border-box;
    white-space: nowrap;
    outline: none;
  }

  .biz-chip__item--focused {
    box-shadow: 0 0 0 2px var(--biz-chip-focus-border-color);
  }

  .biz-chip__delete-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
    color: currentColor;
    opacity: 0.6;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    line-height: 1;
  }

  .biz-chip__delete-btn:hover {
    opacity: 1;
  }

  /* Input Field */
  .biz-chip__input {
    flex: 1 1 60px;
    min-width: 60px;
    border: none;
    outline: none;
    background: transparent;
    color: var(--biz-chip-text-color);
    font-family: inherit;
    font-size: inherit;
    padding: 0;
    margin: 0;
  }

  .biz-chip__input::placeholder {
    color: var(--biz-chip-placeholder-color);
  }

  /* States */
  .biz-chip__container--disabled {
    background-color: var(--biz-chip-disabled-bg-color);
    cursor: not-allowed;
    opacity: 0.6;
  }

  .biz-chip__container--disabled .biz-chip__input {
    cursor: not-allowed;
  }

  .biz-chip__container--readonly {
    background-color: transparent;
  }

  .biz-chip__container--error {
    border-color: var(--biz-chip-error-color);
  }

  .biz-chip__container--error.biz-chip__container--focused {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
  }

  .biz-chip__helper-text {
    font-size: 12px;
    color: #6b7280;
  }

  .biz-chip__helper-text--error {
    color: var(--biz-chip-error-color);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`, O = class extends _ {
  constructor(...t) {
    super(...t), this.value = [], this.placeholder = "", this.delimiter = ["Enter", ","], this.maxChips = 1 / 0, this.allowDuplicates = !1, this.required = !1, this.readonly = !1, this.disabled = !1, this.error = !1, this.deletable = !0, this.variant = "outlined", this.size = "medium", this.inputValue = "", this.isFocused = !1, this.focusedChipIndex = -1, this.liveMessage = "", this.uniqueId = `biz-chip-helper-${Math.random().toString(36).substring(2, 9)}`;
  }
  static {
    this.styles = Si;
  }
  handleInput(t) {
    const i = t.target.value, r = (Array.isArray(this.delimiter) ? this.delimiter : [this.delimiter]).find((a) => a.length === 1 && i.endsWith(a));
    if (r) {
      const a = i.slice(0, -r.length).trim();
      a ? this.addChip(a) : this.inputValue = "";
    } else this.inputValue = i;
  }
  handleKeyDown(t) {
    if (!(this.disabled || this.readonly)) {
      if ((Array.isArray(this.delimiter) ? this.delimiter : [this.delimiter]).includes(t.key)) {
        t.preventDefault();
        const i = this.inputValue.trim();
        i && this.addChip(i);
        return;
      }
      if (t.key === "Backspace") {
        this.inputValue === "" && (this.focusedChipIndex !== -1 ? (this.removeChip(this.focusedChipIndex), this.focusedChipIndex = this.value.length - 1 >= 0 ? this.value.length - 1 : -1) : this.value.length > 0 && (this.focusedChipIndex = this.value.length - 1));
        return;
      }
      if (t.key === "ArrowLeft") {
        (this.inputValue === "" || this.shadowRoot?.activeElement !== this.shadowRoot?.querySelector(".biz-chip__input")) && (this.focusedChipIndex === -1 ? this.focusedChipIndex = this.value.length - 1 : this.focusedChipIndex > 0 && this.focusedChipIndex--);
        return;
      }
      if (t.key === "ArrowRight") {
        this.focusedChipIndex !== -1 && (this.focusedChipIndex < this.value.length - 1 ? this.focusedChipIndex++ : (this.focusedChipIndex = -1, this.focusInput()));
        return;
      }
      if (t.key === "Delete") {
        this.focusedChipIndex !== -1 && (this.removeChip(this.focusedChipIndex), this.focusedChipIndex >= this.value.length && (this.focusedChipIndex = this.value.length - 1));
        return;
      }
      this.focusedChipIndex !== -1 && (this.focusedChipIndex = -1);
    }
  }
  addChip(t) {
    if (this.value.length >= this.maxChips) {
      this.error = !0;
      return;
    }
    if (!this.allowDuplicates && this.value.includes(t)) {
      this.error = !0;
      return;
    }
    const i = [...this.value, t];
    this.value = i, this.inputValue = "", this.error = !1, this.liveMessage = `${t} 칩이 추가되었습니다.`, this.dispatchEvent(new CustomEvent("chip-add", {
      bubbles: !0,
      composed: !0,
      detail: {
        addedValue: t,
        value: i
      }
    })), this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: { value: i }
    }));
  }
  removeChip(t) {
    if (t < 0 || t >= this.value.length) return;
    const i = this.value[t], r = this.value.filter((a, s) => s !== t);
    this.value = r, this.liveMessage = `${i} 칩이 삭제되었습니다.`, this.dispatchEvent(new CustomEvent("chip-remove", {
      bubbles: !0,
      composed: !0,
      detail: {
        removedValue: i,
        index: t,
        value: r
      }
    })), this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: { value: r }
    }));
  }
  handleFocus(t) {
    this.isFocused = !0, this.dispatchEvent(new FocusEvent("focus", {
      bubbles: !0,
      composed: !0,
      relatedTarget: t.relatedTarget
    }));
  }
  handleBlur(t) {
    this.isFocused = !1, this.focusedChipIndex = -1, this.dispatchEvent(new FocusEvent("blur", {
      bubbles: !0,
      composed: !0,
      relatedTarget: t.relatedTarget
    }));
  }
  handleContainerClick() {
    !this.disabled && !this.readonly && this.focusInput();
  }
  focusInput() {
    this.shadowRoot?.querySelector(".biz-chip__input")?.focus();
  }
  render() {
    return $i({
      value: this.value,
      placeholder: this.placeholder,
      variant: this.variant,
      size: this.size,
      disabled: this.disabled,
      readonly: this.readonly,
      required: this.required,
      error: this.error,
      deletable: this.deletable,
      focusedChipIndex: this.focusedChipIndex,
      isFocused: this.isFocused,
      inputValue: this.inputValue,
      liveMessage: this.liveMessage,
      helperTextId: this.uniqueId,
      onInput: this.handleInput.bind(this),
      onKeyDown: this.handleKeyDown.bind(this),
      onFocus: this.handleFocus.bind(this),
      onBlur: this.handleBlur.bind(this),
      onRemoveChip: this.removeChip.bind(this),
      onContainerClick: this.handleContainerClick.bind(this)
    });
  }
};
o([l({ type: Array })], O.prototype, "value", void 0);
o([l({ type: String })], O.prototype, "placeholder", void 0);
o([l({ type: Object })], O.prototype, "delimiter", void 0);
o([l({
  type: Number,
  attribute: "max-chips"
})], O.prototype, "maxChips", void 0);
o([l({
  type: Boolean,
  attribute: "allow-duplicates"
})], O.prototype, "allowDuplicates", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], O.prototype, "required", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], O.prototype, "readonly", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], O.prototype, "disabled", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], O.prototype, "error", void 0);
o([l({ type: Boolean })], O.prototype, "deletable", void 0);
o([l({ type: String })], O.prototype, "variant", void 0);
o([l({ type: String })], O.prototype, "size", void 0);
o([g()], O.prototype, "inputValue", void 0);
o([g()], O.prototype, "isFocused", void 0);
o([g()], O.prototype, "focusedChipIndex", void 0);
o([g()], O.prototype, "liveMessage", void 0);
O = o([k("biz-chip")], O);
var Ci = (e) => {
  const { variant: t = "standard", size: i = "medium", centered: r = !1, scrollable: a = !1, padding: s = !0, loading: n = !1, empty: c = !1, handleScroll: p } = e, b = [
    "biz-content-container",
    `biz-content-container--${t}`,
    `biz-content-container--${i}`,
    r ? "biz-content-container--centered" : "",
    a ? "biz-content-container--scrollable" : "",
    s ? "biz-content-container--padding" : "",
    n ? "biz-content-container--loading" : "",
    c ? "biz-content-container--empty" : ""
  ].filter(Boolean).join(" ");
  return d`
    <main
      class="${b}"
      role="main"
      aria-busy="${n ? "true" : "false"}"
      @scroll="${a ? p : null}"
    >
      <div class="biz-content-container__header">
        <slot name="header-slot"></slot>
      </div>

      <div class="biz-content-container__body">
        ${n ? d`
              <div class="biz-content-container__loading-state" aria-live="polite">
                <slot name="loading-slot">
                  <span class="biz-content-container__spinner" aria-hidden="true"></span>
                  <span class="biz-content-container__sr-only">로딩 중...</span>
                </slot>
              </div>
            ` : c ? d`
              <div class="biz-content-container__empty-state">
                <slot name="empty-slot">
                  <p class="biz-content-container__empty-text">표시할 콘텐츠가 없습니다.</p>
                </slot>
              </div>
            ` : d`<slot></slot>`}
      </div>

      <div class="biz-content-container__footer">
        <slot name="footer-slot"></slot>
      </div>
    </main>
  `;
}, Di = w`
  :host {
    /* Layout & Sizing Tokens */
    --biz-content-container-max-width-sm: 800px;
    --biz-content-container-max-width-md: 1200px;
    --biz-content-container-max-width-lg: 1600px;
    --biz-content-container-padding-x: 24px;
    --biz-content-container-padding-y: 24px;

    /* Colors Tokens */
    --biz-content-container-bg-color: #f9fafb;
    --biz-content-container-card-bg-color: #ffffff;
    --biz-content-container-border-color: #e5e7eb;
    --biz-content-container-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --biz-content-container-text-color: #111827;
    --biz-content-container-empty-text-color: #6b7280;
    --biz-content-container-spinner-color: #3b82f6;

    display: block;
    width: 100%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  .biz-content-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    background-color: var(--biz-content-container-bg-color);
    color: var(--biz-content-container-text-color);
    transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  /* Variants */
  .biz-content-container--standard {
    background-color: var(--biz-content-container-bg-color);
  }

  .biz-content-container--fluid {
    background-color: var(--biz-content-container-bg-color);
    max-width: 100% !important;
  }

  .biz-content-container--card {
    background-color: var(--biz-content-container-card-bg-color);
    border: 1px solid var(--biz-content-container-border-color);
    border-radius: 8px;
    box-shadow: var(--biz-content-container-shadow);
  }

  /* Sizes (Max-Width) */
  .biz-content-container--small {
    max-width: var(--biz-content-container-max-width-sm);
  }

  .biz-content-container--medium {
    max-width: var(--biz-content-container-max-width-md);
  }

  .biz-content-container--large {
    max-width: var(--biz-content-container-max-width-lg);
  }

  .biz-content-container--full {
    max-width: 100%;
  }

  /* Layout Control Options */
  .biz-content-container--centered {
    margin-left: auto;
    margin-right: auto;
  }

  .biz-content-container--scrollable {
    overflow-y: auto;
    max-height: 100%;
  }

  .biz-content-container--padding {
    padding: var(--biz-content-container-padding-y) var(--biz-content-container-padding-x);
  }

  /* States */
  .biz-content-container--loading {
    pointer-events: none;
    opacity: 0.8;
  }

  .biz-content-container__loading-state,
  .biz-content-container__empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    width: 100%;
  }

  .biz-content-container__empty-text {
    color: var(--biz-content-container-empty-text-color);
    font-size: 0.875rem;
  }

  .biz-content-container__spinner {
    width: 32px;
    height: 32px;
    border: 3px solid var(--biz-content-container-border-color);
    border-top-color: var(--biz-content-container-spinner-color);
    border-radius: 50%;
    animation: biz-content-container-spin 1s linear infinite;
  }

  @keyframes biz-content-container-spin {
    to {
      transform: rotate(360deg);
    }
  }

  .biz-content-container__sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .biz-content-container__body {
    flex: 1 1 auto;
  }
`, ve = class extends _ {
  constructor(...t) {
    super(...t), this.variant = "standard", this.size = "medium", this.centered = !1, this.scrollable = !1, this.padding = !0, this.loading = !1, this.empty = !1, this.handleScroll = (i) => {
      const r = i.target;
      this.dispatchEvent(new CustomEvent("scroll", {
        detail: { scrollTop: r.scrollTop },
        bubbles: !0,
        composed: !0
      }));
    }, this.handleKeyDown = (i) => {
      if (!this.scrollable) return;
      const r = this.shadowRoot?.querySelector("main");
      if (!r) return;
      const a = 40;
      switch (i.key) {
        case "PageUp":
          r.scrollTop -= r.clientHeight;
          break;
        case "PageDown":
          r.scrollTop += r.clientHeight;
          break;
        case "ArrowUp":
          r.scrollTop -= a;
          break;
        case "ArrowDown":
          r.scrollTop += a;
      }
    };
  }
  static {
    this.styles = Di;
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("keydown", this.handleKeyDown);
  }
  disconnectedCallback() {
    this.removeEventListener("keydown", this.handleKeyDown), super.disconnectedCallback();
  }
  updated(t) {
    super.updated(t), t.has("scrollable") && (this.scrollable ? this.setAttribute("tabindex", "0") : this.removeAttribute("tabindex"));
  }
  render() {
    return Ci(this);
  }
};
o([l({ type: String })], ve.prototype, "variant", void 0);
o([l({ type: String })], ve.prototype, "size", void 0);
o([l({ type: Boolean })], ve.prototype, "centered", void 0);
o([l({ type: Boolean })], ve.prototype, "scrollable", void 0);
o([l({ type: Boolean })], ve.prototype, "padding", void 0);
o([l({ type: Boolean })], ve.prototype, "loading", void 0);
o([l({ type: Boolean })], ve.prototype, "empty", void 0);
ve = o([k("biz-content-container")], ve);
var Ei = w`
  :host {
    display: inline-block;
    box-sizing: border-box;

    /* Design Tokens / Custom Properties */
    --biz-date-picker-height-sm: 32px;
    --biz-date-picker-height-md: 40px;
    --biz-date-picker-height-lg: 48px;
    --biz-date-picker-padding-x: 12px;
    --biz-date-picker-border-radius: 4px;
    --biz-date-picker-popover-width: 280px;
    --biz-date-picker-cell-size: 36px;

    /* Base Colors */
    --biz-date-picker-bg: #ffffff;
    --biz-date-picker-border-color: #d1d5db;
    --biz-date-picker-text-color: #111827;
    --biz-date-picker-placeholder-color: #9ca3af;

    /* Popover & Calendar Cell Colors */
    --biz-date-picker-popover-bg: #ffffff;
    --biz-date-picker-popover-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --biz-date-picker-cell-hover-bg: #f3f4f6;
    --biz-date-picker-cell-selected-bg: #2563eb;
    --biz-date-picker-cell-selected-text: #ffffff;
    --biz-date-picker-cell-range-bg: #eff6ff;
    --biz-date-picker-cell-disabled-text: #d1d5db;

    /* Interactive States Colors */
    --biz-date-picker-hover-border-color: #9ca3af;
    --biz-date-picker-focus-border-color: #2563eb;
    --biz-date-picker-focus-ring-color: rgba(37, 99, 235, 0.2);

    /* Error & Disabled Colors */
    --biz-date-picker-error-color: #dc2626;
    --biz-date-picker-disabled-bg: #f3f4f6;
    --biz-date-picker-disabled-text-color: #9ca3af;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .biz-date-picker {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    max-width: 280px;
    font-family: inherit;
    font-size: 14px;
    color: var(--biz-date-picker-text-color);
  }

  .biz-date-picker--full-width {
    max-width: 100%;
  }

  /* Label & Helper Area */
  .biz-date-picker__label-area {
    margin-bottom: 4px;
  }

  .biz-date-picker__helper-area {
    margin-top: 4px;
    font-size: 12px;
  }

  /* Input Container */
  .biz-date-picker__input-container {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    background-color: var(--biz-date-picker-bg);
    border: 1px solid var(--biz-date-picker-border-color);
    border-radius: var(--biz-date-picker-border-radius);
    padding: 0 var(--biz-date-picker-padding-x);
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
  }

  .biz-date-picker__input-container:hover {
    border-color: var(--biz-date-picker-hover-border-color);
  }

  .biz-date-picker__input-container:focus-within {
    border-color: var(--biz-date-picker-focus-border-color);
    box-shadow: 0 0 0 3px var(--biz-date-picker-focus-ring-color);
  }

  /* Input Element */
  .biz-date-picker__input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    padding: 0;
    width: 100%;
  }

  .biz-date-picker__input::placeholder {
    color: var(--biz-date-picker-placeholder-color);
  }

  /* Prefix & Suffix */
  .biz-date-picker__prefix,
  .biz-date-picker__suffix {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .biz-date-picker__prefix {
    margin-right: 8px;
  }

  .biz-date-picker__suffix {
    margin-left: 8px;
  }

  .biz-date-picker__clear-btn,
  .biz-date-picker__trigger-btn {
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--biz-date-picker-placeholder-color);
    transition: color 0.2s;
  }

  .biz-date-picker__clear-btn:hover,
  .biz-date-picker__trigger-btn:hover {
    color: var(--biz-date-picker-text-color);
  }

  .biz-date-picker__clear-btn {
    font-size: 16px;
    line-height: 1;
    margin-left: 4px;
  }

  /* Variants */
  .biz-date-picker--outlined .biz-date-picker__input-container {
    /* Base Outlined Style */
  }

  .biz-date-picker--filled .biz-date-picker__input-container {
    background-color: var(--biz-date-picker-disabled-bg);
    border-color: transparent;
  }

  .biz-date-picker--filled .biz-date-picker__input-container:hover {
    border-color: var(--biz-date-picker-hover-border-color);
  }

  .biz-date-picker--standard .biz-date-picker__input-container {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
  }

  /* Sizes */
  .biz-date-picker--small .biz-date-picker__input-container {
    height: var(--biz-date-picker-height-sm);
    font-size: 12px;
  }

  .biz-date-picker--medium .biz-date-picker__input-container {
    height: var(--biz-date-picker-height-md);
    font-size: 14px;
  }

  .biz-date-picker--large .biz-date-picker__input-container {
    height: var(--biz-date-picker-height-lg);
    font-size: 16px;
  }

  /* States: Disabled, Readonly, Error */
  .biz-date-picker--disabled .biz-date-picker__input-container {
    background-color: var(--biz-date-picker-disabled-bg);
    border-color: var(--biz-date-picker-border-color);
    cursor: not-allowed;
  }

  .biz-date-picker--disabled .biz-date-picker__input {
    color: var(--biz-date-picker-disabled-text-color);
    cursor: not-allowed;
  }

  .biz-date-picker--disabled .biz-date-picker__clear-btn,
  .biz-date-picker--disabled .biz-date-picker__trigger-btn {
    cursor: not-allowed;
    color: var(--biz-date-picker-disabled-text-color);
  }

  .biz-date-picker--readonly .biz-date-picker__input {
    cursor: default;
  }

  .biz-date-picker--error .biz-date-picker__input-container {
    border-color: var(--biz-date-picker-error-color);
  }

  .biz-date-picker--error .biz-date-picker__input-container:focus-within {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
  }

  /* Calendar Popover */
  .biz-date-picker__popover {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 1000;
    width: var(--biz-date-picker-popover-width);
    padding: 16px;
    background-color: var(--biz-date-picker-popover-bg);
    border-radius: var(--biz-date-picker-border-radius);
    box-shadow: var(--biz-date-picker-popover-shadow);
    border: 1px solid var(--biz-date-picker-border-color);
  }

  .biz-date-picker__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .biz-date-picker__current-month {
    font-weight: 600;
  }

  .biz-date-picker__nav-btn {
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
    color: inherit;
  }

  .biz-date-picker__nav-btn:hover {
    background-color: var(--biz-date-picker-cell-hover-bg);
  }

  /* Day Grid */
  .biz-date-picker__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    margin-bottom: 8px;
    color: var(--biz-date-picker-placeholder-color);
  }

  .biz-date-picker__days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
  }

  .biz-date-picker__cell {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: var(--biz-date-picker-cell-size);
    width: 100%;
    border: none;
    background: transparent;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    color: inherit;
    padding: 0;
    transition: background-color 0.15s, color 0.15s;
  }

  .biz-date-picker__cell:hover:not(.biz-date-picker__cell--disabled):not(.biz-date-picker__cell--empty) {
    background-color: var(--biz-date-picker-cell-hover-bg);
  }

  .biz-date-picker__cell--selected {
    background-color: var(--biz-date-picker-cell-selected-bg) !important;
    color: var(--biz-date-picker-cell-selected-text) !important;
  }

  .biz-date-picker__cell--range {
    background-color: var(--biz-date-picker-cell-range-bg);
    border-radius: 0;
  }

  .biz-date-picker__cell--today {
    font-weight: bold;
    text-decoration: underline;
  }

  .biz-date-picker__cell--disabled {
    color: var(--biz-date-picker-cell-disabled-text);
    cursor: not-allowed;
  }

  .biz-date-picker__cell--focused {
    outline: 2px solid var(--biz-date-picker-focus-border-color);
    outline-offset: -2px;
  }

  .biz-date-picker__cell--empty {
    cursor: default;
  }
`, Ti = (e) => {
  const t = [
    "일",
    "월",
    "화",
    "수",
    "목",
    "금",
    "토"
  ], i = (u, h) => new Date(u, h + 1, 0).getDate(), r = (u, h) => new Date(u, h, 1).getDay(), a = (u, h) => !u || !h ? !1 : u.getFullYear() === h.getFullYear() && u.getMonth() === h.getMonth() && u.getDate() === h.getDate(), s = (u) => {
    if (!u) return null;
    if (u instanceof Date) return u;
    const h = new Date(u);
    return isNaN(h.getTime()) ? null : h;
  }, n = (u) => {
    const h = s(e.minDate), v = s(e.maxDate);
    return h && u < new Date(h.setHours(0, 0, 0, 0)) || v && u > new Date(v.setHours(23, 59, 59, 999)) ? !0 : typeof e.disabledDates == "function" ? e.disabledDates(u) : Array.isArray(e.disabledDates) ? e.disabledDates.some((m) => {
      const z = s(m);
      return z ? a(z, u) : !1;
    }) : !1;
  }, c = () => {
    const u = i(e.currentYear, e.currentMonth), h = r(e.currentYear, e.currentMonth), v = [];
    for (let D = 0; D < h; D++) v.push(d`<div class="biz-date-picker__cell biz-date-picker__cell--empty"></div>`);
    let m = null, z = null;
    e.mode === "single" ? m = s(e.value) : Array.isArray(e.value) && (m = s(e.value[0]), z = s(e.value[1]));
    for (let D = 1; D <= u; D++) {
      const x = new Date(e.currentYear, e.currentMonth, D), W = n(x), Y = a(x, m) || a(x, z), P = a(x, /* @__PURE__ */ new Date()), re = a(x, e.focusedDate);
      let ce = !1;
      if (e.mode === "range") {
        if (m && z) ce = x > m && x < z;
        else if (m && e.hoveredDate) {
          const xe = m < e.hoveredDate ? m : e.hoveredDate, _e = m < e.hoveredDate ? e.hoveredDate : m;
          ce = x > xe && x < _e;
        }
      }
      const fe = [
        "biz-date-picker__cell",
        Y ? "biz-date-picker__cell--selected" : "",
        W ? "biz-date-picker__cell--disabled" : "",
        P ? "biz-date-picker__cell--today" : "",
        ce ? "biz-date-picker__cell--range" : "",
        re ? "biz-date-picker__cell--focused" : ""
      ].filter(Boolean).join(" "), ye = `${x.getFullYear()}년 ${x.getMonth() + 1}월 ${x.getDate()}일`;
      v.push(d`
        <button
          type="button"
          role="gridcell"
          class="${fe}"
          ?disabled="${W}"
          aria-selected="${Y ? "true" : "false"}"
          aria-disabled="${W ? "true" : "false"}"
          aria-label="${ye}"
          tabindex="${re ? "0" : "-1"}"
          @click="${() => !W && e.onSelectDate(x)}"
          @mouseenter="${() => e.onDateHover(x)}"
          @mouseleave="${() => e.onDateHover(null)}"
        >
          <slot name="date-cell-slot" .date="${x}">${D}</slot>
        </button>
      `);
    }
    return v;
  }, p = e.clearable && !e.disabled && !e.readonly && !!(e.inputValue || e.value), b = [
    "biz-date-picker",
    `biz-date-picker--${e.variant}`,
    `biz-date-picker--${e.size}`,
    e.fullWidth ? "biz-date-picker--full-width" : "",
    e.disabled ? "biz-date-picker--disabled" : "",
    e.readonly ? "biz-date-picker--readonly" : "",
    e.error ? "biz-date-picker--error" : "",
    e.isOpen ? "biz-date-picker--open" : ""
  ].filter(Boolean).join(" ");
  return d`
    <div class="${b}" @keydown="${e.onKeyDown}">
      <div class="biz-date-picker__label-area">
        <slot name="label-slot"></slot>
      </div>

      <div class="biz-date-picker__input-container">
        <div class="biz-date-picker__prefix">
          <slot name="prefix-slot"></slot>
        </div>

        <input
          type="text"
          class="biz-date-picker__input"
          role="combobox"
          .value="${e.inputValue}"
          placeholder="${e.placeholder}"
          ?disabled="${e.disabled}"
          ?readonly="${e.readonly}"
          aria-expanded="${e.isOpen ? "true" : "false"}"
          aria-haspopup="dialog"
          @input="${e.onInput}"
          @change="${e.onChange}"
        />

        ${p ? d`
              <button
                type="button"
                class="biz-date-picker__clear-btn"
                aria-label="입력값 초기화"
                @click="${e.onClear}"
              >
                &times;
              </button>
            ` : ""}

        <div class="biz-date-picker__suffix">
          <slot name="suffix-slot">
            <button
              type="button"
              class="biz-date-picker__trigger-btn"
              aria-label="달력 열기"
              ?disabled="${e.disabled || e.readonly}"
              @click="${e.onTogglePopover}"
            >
              <svg
                class="biz-date-picker__calendar-icon"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </button>
          </slot>
        </div>
      </div>

      <div class="biz-date-picker__helper-area">
        <slot name="helper-text-slot"></slot>
      </div>

      ${e.isOpen ? d`
            <div
              class="biz-date-picker__popover"
              role="dialog"
              aria-modal="true"
              aria-label="달력"
            >
              <div class="biz-date-picker__popover-header-slot">
                <slot name="header-slot"></slot>
              </div>

              <div class="biz-date-picker__header">
                <button
                  type="button"
                  class="biz-date-picker__nav-btn"
                  aria-label="이전 달"
                  @click="${e.onPrevMonth}"
                >
                  &lt;
                </button>
                <div class="biz-date-picker__current-month" aria-live="polite">
                  ${e.currentYear}년 ${e.currentMonth + 1}월
                </div>
                <button
                  type="button"
                  class="biz-date-picker__nav-btn"
                  aria-label="다음 달"
                  @click="${e.onNextMonth}"
                >
                  &gt;
                </button>
              </div>

              <div class="biz-date-picker__grid" role="grid">
                <div class="biz-date-picker__weekdays" role="row">
                  ${t.map((u) => d`
                      <div class="biz-date-picker__weekday" role="columnheader">
                        ${u}
                      </div>
                    `)}
                </div>
                <div class="biz-date-picker__days" role="row">
                  ${c()}
                </div>
              </div>

              <div class="biz-date-picker__popover-footer-slot">
                <slot name="footer-slot"></slot>
              </div>
            </div>
          ` : ""}
    </div>
  `;
}, A = class extends _ {
  constructor(...t) {
    super(...t), this.value = null, this.format = "YYYY-MM-DD", this.mode = "single", this.minDate = null, this.maxDate = null, this.disabledDates = [], this.placeholder = "YYYY-MM-DD", this.clearable = !1, this.readonly = !1, this.disabled = !1, this.error = !1, this.variant = "outlined", this.size = "medium", this.fullWidth = !1, this.isOpen = !1, this.currentYear = (/* @__PURE__ */ new Date()).getFullYear(), this.currentMonth = (/* @__PURE__ */ new Date()).getMonth(), this.hoveredDate = null, this.inputValue = "", this.focusedDate = null, this.handleFocusOut = (i) => {
      const r = i.relatedTarget;
      !this.contains(r) && !this.shadowRoot?.contains(r) && this.isOpen && this.closePopover();
    }, this.handleInput = (i) => {
      const r = i.target;
      this.inputValue = r.value, this.dispatchEvent(new CustomEvent("input", {
        detail: { rawValue: this.inputValue },
        bubbles: !0,
        composed: !0
      }));
    }, this.handleChange = (i) => {
      const r = i.target.value;
      if (this.mode === "single") {
        const a = this.parseDateString(r);
        a && (this.value = a, this.dispatchEvent(new CustomEvent("change", {
          detail: {
            value: this.formatDateString(a),
            date: a
          },
          bubbles: !0,
          composed: !0
        })));
      }
    }, this.handleTogglePopover = () => {
      this.disabled || this.readonly || (this.isOpen ? this.closePopover() : this.openPopover());
    }, this.handleClear = (i) => {
      i.stopPropagation(), this.value = null, this.inputValue = "", this.dispatchEvent(new CustomEvent("clear", {
        bubbles: !0,
        composed: !0
      })), this.dispatchEvent(new CustomEvent("change", {
        detail: {
          value: null,
          date: null
        },
        bubbles: !0,
        composed: !0
      }));
    }, this.handlePrevMonth = () => {
      this.currentMonth === 0 ? (this.currentMonth = 11, this.currentYear -= 1) : this.currentMonth -= 1, this.emitMonthChange();
    }, this.handleNextMonth = () => {
      this.currentMonth === 11 ? (this.currentMonth = 0, this.currentYear += 1) : this.currentMonth += 1, this.emitMonthChange();
    }, this.handleSelectDate = (i) => {
      if (this.mode === "single")
        this.value = i, this.inputValue = this.formatDateString(i), this.closePopover(), this.dispatchEvent(new CustomEvent("change", {
          detail: {
            value: this.inputValue,
            date: i
          },
          bubbles: !0,
          composed: !0
        }));
      else if (this.mode === "range") {
        if (!Array.isArray(this.value) || this.value.length === 0 || this.value.length === 2) this.value = [i];
        else if (this.value.length === 1) {
          const r = this.value[0] instanceof Date ? this.value[0] : new Date(this.value[0]);
          i < r ? this.value = [i, r] : this.value = [r, i], this.closePopover();
        }
        this.syncInputValueFromProps(), this.dispatchEvent(new CustomEvent("change", {
          detail: {
            value: this.value,
            date: i
          },
          bubbles: !0,
          composed: !0
        }));
      }
    }, this.handleDateHover = (i) => {
      this.hoveredDate = i;
    }, this.handleKeyDown = (i) => {
      if (this.disabled || this.readonly) return;
      if (i.key === "Escape" && this.isOpen) {
        i.stopPropagation(), this.closePopover(), this.shadowRoot?.querySelector("input")?.focus();
        return;
      }
      if (!this.isOpen) {
        (i.key === "ArrowDown" || i.key === "Enter") && this.openPopover();
        return;
      }
      const r = this.focusedDate || new Date(this.currentYear, this.currentMonth, 1);
      let a = null;
      switch (i.key) {
        case "ArrowLeft":
          a = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 1);
          break;
        case "ArrowRight":
          a = new Date(r.getFullYear(), r.getMonth(), r.getDate() + 1);
          break;
        case "ArrowUp":
          a = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 7);
          break;
        case "ArrowDown":
          a = new Date(r.getFullYear(), r.getMonth(), r.getDate() + 7);
          break;
        case "PageUp":
          i.shiftKey ? a = new Date(r.getFullYear() - 1, r.getMonth(), r.getDate()) : a = new Date(r.getFullYear(), r.getMonth() - 1, r.getDate());
          break;
        case "PageDown":
          i.shiftKey ? a = new Date(r.getFullYear() + 1, r.getMonth(), r.getDate()) : a = new Date(r.getFullYear(), r.getMonth() + 1, r.getDate());
          break;
        case "Enter":
        case " ":
          i.preventDefault(), this.focusedDate && this.handleSelectDate(this.focusedDate);
          return;
        default:
          return;
      }
      a && (i.preventDefault(), this.focusedDate = a, this.currentYear = a.getFullYear(), this.currentMonth = a.getMonth());
    };
  }
  static {
    this.styles = Ei;
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("focusout", this.handleFocusOut);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("focusout", this.handleFocusOut);
  }
  willUpdate(t) {
    (t.has("value") || t.has("format")) && this.syncInputValueFromProps();
  }
  formatDateString(t) {
    const i = t.getFullYear(), r = String(t.getMonth() + 1).padStart(2, "0"), a = String(t.getDate()).padStart(2, "0");
    return this.format.replace("YYYY", String(i)).replace("MM", r).replace("DD", a);
  }
  parseDateString(t) {
    if (!t) return null;
    const i = t.split(/[-./]/);
    if (i.length === 3) {
      const a = parseInt(i[0], 10), s = parseInt(i[1], 10) - 1, n = parseInt(i[2], 10), c = new Date(a, s, n);
      if (!isNaN(c.getTime())) return c;
    }
    const r = new Date(t);
    return isNaN(r.getTime()) ? null : r;
  }
  syncInputValueFromProps() {
    if (!this.value) {
      this.inputValue = "";
      return;
    }
    if (this.mode === "single") {
      const t = this.value instanceof Date ? this.value : this.parseDateString(String(this.value));
      t ? (this.inputValue = this.formatDateString(t), this.currentYear = t.getFullYear(), this.currentMonth = t.getMonth()) : this.inputValue = String(this.value);
    } else if (Array.isArray(this.value)) {
      const t = this.value[0] instanceof Date ? this.value[0] : this.parseDateString(String(this.value[0])), i = this.value[1] instanceof Date ? this.value[1] : this.parseDateString(String(this.value[1])), r = t ? this.formatDateString(t) : "", a = i ? this.formatDateString(i) : "";
      r || a ? this.inputValue = `${r} ~ ${a}` : this.inputValue = "", t && (this.currentYear = t.getFullYear(), this.currentMonth = t.getMonth());
    }
  }
  openPopover() {
    this.isOpen = !0, this.dispatchEvent(new CustomEvent("open", {
      bubbles: !0,
      composed: !0
    }));
  }
  closePopover() {
    this.isOpen = !1, this.dispatchEvent(new CustomEvent("close", {
      bubbles: !0,
      composed: !0
    }));
  }
  emitMonthChange() {
    this.dispatchEvent(new CustomEvent("month-change", {
      detail: {
        year: this.currentYear,
        month: this.currentMonth + 1
      },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return Ti({
      value: this.value,
      format: this.format,
      mode: this.mode,
      minDate: this.minDate,
      maxDate: this.maxDate,
      disabledDates: this.disabledDates,
      placeholder: this.placeholder,
      clearable: this.clearable,
      readonly: this.readonly,
      disabled: this.disabled,
      error: this.error,
      variant: this.variant,
      size: this.size,
      fullWidth: this.fullWidth,
      isOpen: this.isOpen,
      currentYear: this.currentYear,
      currentMonth: this.currentMonth,
      hoveredDate: this.hoveredDate,
      inputValue: this.inputValue,
      focusedDate: this.focusedDate,
      onInput: this.handleInput,
      onChange: this.handleChange,
      onTogglePopover: this.handleTogglePopover,
      onClear: this.handleClear,
      onPrevMonth: this.handlePrevMonth,
      onNextMonth: this.handleNextMonth,
      onSelectDate: this.handleSelectDate,
      onDateHover: this.handleDateHover,
      onKeyDown: this.handleKeyDown
    });
  }
};
o([l({ type: Object })], A.prototype, "value", void 0);
o([l({ type: String })], A.prototype, "format", void 0);
o([l({ type: String })], A.prototype, "mode", void 0);
o([l({
  type: Object,
  attribute: "min-date"
})], A.prototype, "minDate", void 0);
o([l({
  type: Object,
  attribute: "max-date"
})], A.prototype, "maxDate", void 0);
o([l({
  type: Object,
  attribute: "disabled-dates"
})], A.prototype, "disabledDates", void 0);
o([l({ type: String })], A.prototype, "placeholder", void 0);
o([l({ type: Boolean })], A.prototype, "clearable", void 0);
o([l({ type: Boolean })], A.prototype, "readonly", void 0);
o([l({ type: Boolean })], A.prototype, "disabled", void 0);
o([l({ type: Boolean })], A.prototype, "error", void 0);
o([l({ type: String })], A.prototype, "variant", void 0);
o([l({ type: String })], A.prototype, "size", void 0);
o([l({
  type: Boolean,
  attribute: "full-width"
})], A.prototype, "fullWidth", void 0);
o([g()], A.prototype, "isOpen", void 0);
o([g()], A.prototype, "currentYear", void 0);
o([g()], A.prototype, "currentMonth", void 0);
o([g()], A.prototype, "hoveredDate", void 0);
o([g()], A.prototype, "inputValue", void 0);
o([g()], A.prototype, "focusedDate", void 0);
A = o([k("biz-date-picker")], A);
var Mi = (e) => {
  const t = Array.isArray(e.placeholder) ? e.placeholder[0] : e.placeholder, i = Array.isArray(e.placeholder) ? e.placeholder[1] : e.placeholder;
  return d`
    <div
      class="biz-date-range-picker ${e.variant} ${e.size} ${e.disabled ? "disabled" : ""} ${e.readonly ? "readonly" : ""} ${e.error ? "error" : ""} ${e.loading ? "loading" : ""} ${e.open ? "open" : ""}"
      @keydown=${e.onKeyDown}
    >
      <div class="label-container">
        <slot name="label-slot"></slot>
      </div>

      <div
        class="control-container"
        role="combobox"
        aria-expanded=${e.open ? "true" : "false"}
        aria-haspopup="dialog"
        aria-disabled=${e.disabled ? "true" : "false"}
        @click=${e.onTogglePopover}
      >
        <span class="prefix">
          <slot name="prefix-slot"></slot>
        </span>

        ${e.inputMode === "single" ? d`
              <input
                type="text"
                class="input-field single-input"
                .value=${e.formattedStart && e.formattedEnd ? `${e.formattedStart} ~ ${e.formattedEnd}` : ""}
                placeholder=${Array.isArray(e.placeholder) ? e.placeholder.join(" ~ ") : e.placeholder}
                ?disabled=${e.disabled}
                ?readonly=${e.readonly}
                @input=${e.onSingleInput}
              />
            ` : d`
              <div class="double-input-group">
                <slot name="start-slot">
                  <input
                    type="text"
                    class="input-field start-input"
                    .value=${e.formattedStart}
                    placeholder=${t}
                    ?disabled=${e.disabled}
                    ?readonly=${e.readonly}
                    @input=${e.onStartInput}
                  />
                </slot>

                <span class="separator">
                  <slot name="separator-slot">~</slot>
                </span>

                <slot name="end-slot">
                  <input
                    type="text"
                    class="input-field end-input"
                    .value=${e.formattedEnd}
                    placeholder=${i}
                    ?disabled=${e.disabled}
                    ?readonly=${e.readonly}
                    @input=${e.onEndInput}
                  />
                </slot>
              </div>
            `}

        ${e.clearable && (e.value[0] || e.value[1]) && !e.disabled && !e.readonly ? d`
              <button type="button" class="clear-button" @click=${e.onClear} aria-label="Clear date range">
                &times;
              </button>
            ` : ""}

        <span class="suffix">
          <slot name="suffix-slot">
            <span class="calendar-icon" aria-hidden="true">📅</span>
          </slot>
        </span>

        ${e.loading ? d`<span class="loading-spinner" aria-hidden="true"></span>` : ""}
      </div>

      ${e.open ? d`
            <div class="popover-panel ${e.calendarMode}" role="dialog" aria-modal="true">
              <div class="popover-header">
                <slot name="header-slot"></slot>
              </div>

              <div class="popover-body">
                ${e.presets && e.presets.length > 0 ? d`
                      <div class="presets-sidebar">
                        <slot name="presets-slot">
                          ${e.presets.map((r) => d`
                              <button type="button" class="preset-button" @click=${() => e.onPresetClick(r.range)}>
                                ${r.label}
                              </button>
                            `)}
                        </slot>
                      </div>
                    ` : ""}

                <div class="calendars-container">
                  <div class="calendar-navigation-bar">
                    <button type="button" class="nav-prev" @click=${e.onPrevMonth} aria-label="이전 달">&lt;</button>
                    <button type="button" class="nav-next" @click=${e.onNextMonth} aria-label="다음 달">&gt;</button>
                  </div>
                  <div class="grids-wrapper">
                    ${e.renderCalendarGrid(0)}
                    ${e.calendarMode === "dual" ? e.renderCalendarGrid(1) : ""}
                  </div>
                </div>
              </div>

              <div class="popover-footer">
                <slot name="footer-slot">
                  <button type="button" class="action-button cancel" @click=${e.onCancel}>취소</button>
                  <button type="button" class="action-button apply" @click=${e.onApply}>확인</button>
                </slot>
              </div>
            </div>
          ` : ""}

      <div class="helper-text-container">
        <slot name="helper-text-slot"></slot>
      </div>

      <div class="sr-only" aria-live="polite">
        ${e.value[0] && e.value[1] ? `선택된 기간: ${e.formattedStart} 부터 ${e.formattedEnd} 까지` : e.value[0] ? `시작일 ${e.formattedStart} 선택됨. 종료일을 선택하세요.` : "날짜 범위를 선택하세요."}
      </div>
    </div>
  `;
}, Ai = w`
  :host {
    /* Layout & Sizing */
    --biz-date-range-picker-height-sm: 32px;
    --biz-date-range-picker-height-md: 40px;
    --biz-date-range-picker-height-lg: 48px;
    --biz-date-range-picker-padding-x: 12px;
    --biz-date-range-picker-border-radius: 4px;
    --biz-date-range-picker-popover-width: 620px;
    --biz-date-range-picker-cell-size: 36px;

    /* Colors - Base */
    --biz-date-range-picker-bg: #ffffff;
    --biz-date-range-picker-border-color: #d1d5db;
    --biz-date-range-picker-text-color: #111827;
    --biz-date-range-picker-placeholder-color: #9ca3af;

    /* Colors - Selection & Range Highlight */
    --biz-date-range-picker-popover-bg: #ffffff;
    --biz-date-range-picker-popover-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --biz-date-range-picker-cell-hover-bg: #f3f4f6;
    --biz-date-range-picker-range-start-bg: #2563eb;
    --biz-date-range-picker-range-start-text: #ffffff;
    --biz-date-range-picker-range-end-bg: #2563eb;
    --biz-date-range-picker-range-end-text: #ffffff;
    --biz-date-range-picker-in-range-bg: #eff6ff;
    --biz-date-range-picker-in-range-text: #1d4ed8;
    --biz-date-range-picker-cell-disabled-text: #d1d5db;

    /* Colors - Interactive States */
    --biz-date-range-picker-hover-border-color: #9ca3af;
    --biz-date-range-picker-focus-border-color: #2563eb;
    --biz-date-range-picker-focus-ring-color: rgba(37, 99, 235, 0.2);

    /* Colors - Error & Disabled */
    --biz-date-range-picker-error-color: #dc2626;
    --biz-date-range-picker-disabled-bg: #f3f4f6;
    --biz-date-range-picker-disabled-text-color: #9ca3af;

    display: inline-block;
    width: auto;
    font-family: system-ui, -apple-system, sans-serif;
    box-sizing: border-box;
  }

  :host([full-width]) {
    display: block;
    width: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .biz-date-range-picker {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  }

  .label-container {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--biz-date-range-picker-text-color);
  }

  .control-container {
    display: flex;
    align-items: center;
    padding: 0 var(--biz-date-range-picker-padding-x);
    background-color: var(--biz-date-range-picker-bg);
    border: 1px solid var(--biz-date-range-picker-border-color);
    border-radius: var(--biz-date-range-picker-border-radius);
    transition: border-color 0.2s, box-shadow 0.2s;
    cursor: pointer;
  }

  /* Variants */
  .biz-date-range-picker.outlined .control-container {
    background-color: var(--biz-date-range-picker-bg);
    border-style: solid;
  }

  .biz-date-range-picker.filled .control-container {
    background-color: #f8fafc;
    border-style: none;
    border-bottom: 2px solid var(--biz-date-range-picker-border-color);
    border-radius: var(--biz-date-range-picker-border-radius) var(--biz-date-range-picker-border-radius) 0 0;
  }

  .biz-date-range-picker.standard .control-container {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--biz-date-range-picker-border-color);
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
  }

  /* Sizes */
  .biz-date-range-picker.small .control-container {
    height: var(--biz-date-range-picker-height-sm);
    font-size: 0.875rem;
  }

  .biz-date-range-picker.medium .control-container {
    height: var(--biz-date-range-picker-height-md);
    font-size: 1rem;
  }

  .biz-date-range-picker.large .control-container {
    height: var(--biz-date-range-picker-height-lg);
    font-size: 1.125rem;
  }

  /* States: Hover, Focus, Active, Open */
  .control-container:hover {
    border-color: var(--biz-date-range-picker-hover-border-color);
  }

  .biz-date-range-picker.open .control-container,
  .control-container:focus-within {
    border-color: var(--biz-date-range-picker-focus-border-color);
    box-shadow: 0 0 0 3px var(--biz-date-range-picker-focus-ring-color);
  }

  /* States: Disabled */
  .biz-date-range-picker.disabled .control-container {
    background-color: var(--biz-date-range-picker-disabled-bg);
    border-color: var(--biz-date-range-picker-border-color);
    cursor: not-allowed;
    opacity: 0.6;
  }

  .biz-date-range-picker.disabled input {
    color: var(--biz-date-range-picker-disabled-text-color);
    cursor: not-allowed;
  }

  /* States: Readonly */
  .biz-date-range-picker.readonly .control-container {
    background-color: #f9fafb;
    cursor: default;
  }

  /* States: Error */
  .biz-date-range-picker.error .control-container {
    border-color: var(--biz-date-range-picker-error-color);
  }

  .biz-date-range-picker.error.open .control-container,
  .biz-date-range-picker.error .control-container:focus-within {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
  }

  /* States: Loading */
  .loading-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid var(--biz-date-range-picker-border-color);
    border-top-color: var(--biz-date-range-picker-focus-border-color);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-left: 8px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Inputs & Separator */
  .double-input-group {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 8px;
  }

  .input-field {
    border: none;
    outline: none;
    background: transparent;
    color: var(--biz-date-range-picker-text-color);
    font-family: inherit;
    font-size: inherit;
    width: 100%;
  }

  .input-field::placeholder {
    color: var(--biz-date-range-picker-placeholder-color);
  }

  .separator {
    color: var(--biz-date-range-picker-placeholder-color);
    user-select: none;
  }

  .clear-button {
    border: none;
    background: transparent;
    color: var(--biz-date-range-picker-placeholder-color);
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0 4px;
    line-height: 1;
  }

  .clear-button:hover {
    color: var(--biz-date-range-picker-text-color);
  }

  /* Popover Panel */
  .popover-panel {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    z-index: 1000;
    background-color: var(--biz-date-range-picker-popover-bg);
    border: 1px solid var(--biz-date-range-picker-border-color);
    border-radius: var(--biz-date-range-picker-border-radius);
    box-shadow: var(--biz-date-range-picker-popover-shadow);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .popover-panel.dual {
    width: var(--biz-date-range-picker-popover-width);
  }

  .popover-panel.single {
    width: calc(var(--biz-date-range-picker-popover-width) / 2);
  }

  .popover-body {
    display: flex;
    gap: 16px;
  }

  .presets-sidebar {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-right: 1px solid var(--biz-date-range-picker-border-color);
    padding-right: 16px;
    min-width: 110px;
  }

  .preset-button {
    background: transparent;
    border: none;
    text-align: left;
    padding: 6px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.875rem;
    color: var(--biz-date-range-picker-text-color);
  }

  .preset-button:hover {
    background-color: var(--biz-date-range-picker-cell-hover-bg);
  }

  .calendars-container {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .calendar-navigation-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding: 0 4px;
  }

  .calendar-navigation-bar button {
    background: transparent;
    border: 1px solid var(--biz-date-range-picker-border-color);
    border-radius: 4px;
    cursor: pointer;
    padding: 4px 8px;
    font-size: 0.875rem;
    line-height: 1;
  }

  .calendar-navigation-bar button:hover {
    background-color: var(--biz-date-range-picker-cell-hover-bg);
  }

  .grids-wrapper {
    display: flex;
    gap: 24px;
  }

  .calendar-grid {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .calendar-header-title {
    text-align: center;
    font-weight: 600;
    font-size: 0.95rem;
    color: var(--biz-date-range-picker-text-color);
    margin-bottom: 4px;
  }

  .weekdays-row {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--biz-date-range-picker-placeholder-color);
  }

  .days-matrix {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px 0;
  }

  .empty-cell {
    height: var(--biz-date-range-picker-cell-size);
  }

  .day-cell {
    width: 100%;
    height: var(--biz-date-range-picker-cell-size);
    border: none;
    background: transparent;
    font-size: 0.875rem;
    color: var(--biz-date-range-picker-text-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    padding: 0;
  }

  .day-cell:hover {
    background-color: var(--biz-date-range-picker-cell-hover-bg);
    border-radius: 4px;
  }

  .day-cell.start {
    background-color: var(--biz-date-range-picker-range-start-bg) !important;
    color: var(--biz-date-range-picker-range-start-text) !important;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .day-cell.end {
    background-color: var(--biz-date-range-picker-range-end-bg) !important;
    color: var(--biz-date-range-picker-range-end-text) !important;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .day-cell.in-range {
    background-color: var(--biz-date-range-picker-in-range-bg);
    color: var(--biz-date-range-picker-in-range-text);
  }

  .popover-footer {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    border-top: 1px solid var(--biz-date-range-picker-border-color);
    padding-top: 12px;
  }

  .action-button {
    padding: 6px 16px;
    border-radius: 4px;
    font-size: 0.875rem;
    cursor: pointer;
    font-weight: 500;
  }

  .action-button.cancel {
    background: transparent;
    border: 1px solid var(--biz-date-range-picker-border-color);
    color: var(--biz-date-range-picker-text-color);
  }

  .action-button.cancel:hover {
    background-color: var(--biz-date-range-picker-cell-hover-bg);
  }

  .action-button.apply {
    background: var(--biz-date-range-picker-range-start-bg);
    color: var(--biz-date-range-picker-range-start-text);
    border: none;
  }

  .action-button.apply:hover {
    opacity: 0.9;
  }

  .helper-text-container {
    font-size: 0.75rem;
    color: var(--biz-date-range-picker-placeholder-color);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`, C = class extends _ {
  static {
    this.styles = Ai;
  }
  constructor() {
    super(), this.value = [null, null], this.format = "YYYY-MM-DD", this.calendarMode = "dual", this.inputMode = "double", this.variant = "outlined", this.size = "medium", this.minDate = null, this.maxDate = null, this.minRange = null, this.maxRange = null, this.disabledDates = [], this.presets = [], this.placeholder = ["시작일", "종료일"], this.clearable = !1, this.readonly = !1, this.disabled = !1, this.error = !1, this.loading = !1, this._open = !1, this._selectingState = "idle", this._hoverDate = null, this._currentMonth = /* @__PURE__ */ new Date(), this._tempValue = [null, null], this._handleOutsideClick = this._handleOutsideClick.bind(this);
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("click", this._handleOutsideClick);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("click", this._handleOutsideClick);
  }
  willUpdate(t) {
    t.has("value") && (this._tempValue = [...this.value]);
  }
  _handleOutsideClick(t) {
    this._open && !t.composedPath().includes(this) && this._closePopover();
  }
  _togglePopover(t) {
    t.stopPropagation(), !(this.disabled || this.readonly) && (this._open ? this._closePopover() : this._openPopover());
  }
  _openPopover() {
    this._open = !0, this._selectingState = "start", this._tempValue = [...this.value], this.dispatchEvent(new CustomEvent("open", {
      bubbles: !0,
      composed: !0
    }));
  }
  _closePopover() {
    this._open = !1, this._selectingState = "idle", this._hoverDate = null, this.dispatchEvent(new CustomEvent("close", {
      bubbles: !0,
      composed: !0
    }));
  }
  _formatDate(t) {
    return !t || isNaN(t.getTime()) ? "" : `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
  }
  _parseDate(t) {
    if (!t) return null;
    const i = new Date(t);
    return isNaN(i.getTime()) ? null : i;
  }
  _handleStartInput(t) {
    const i = t.target, r = this._parseDate(i.value);
    this._tempValue = [r, this._tempValue[1]], this.dispatchEvent(new CustomEvent("input", {
      bubbles: !0,
      composed: !0,
      detail: { rawValue: i.value }
    }));
  }
  _handleEndInput(t) {
    const i = t.target, r = this._parseDate(i.value);
    this._tempValue = [this._tempValue[0], r], this.dispatchEvent(new CustomEvent("input", {
      bubbles: !0,
      composed: !0,
      detail: { rawValue: i.value }
    }));
  }
  _handleSingleInput(t) {
    const i = t.target, r = i.value.split("~").map((n) => n.trim()), a = this._parseDate(r[0]), s = r[1] ? this._parseDate(r[1]) : null;
    this._tempValue = [a, s], this.dispatchEvent(new CustomEvent("input", {
      bubbles: !0,
      composed: !0,
      detail: { rawValue: i.value }
    }));
  }
  _handleClear(t) {
    t.stopPropagation(), this.value = [null, null], this._tempValue = [null, null], this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: {
        value: [null, null],
        formattedValue: ["", ""]
      }
    }));
  }
  _handleDateClick(t) {
    this._selectingState === "start" || !this._tempValue[0] ? (this._tempValue = [t, null], this._selectingState = "end", this.dispatchEvent(new CustomEvent("range-start-select", {
      bubbles: !0,
      composed: !0,
      detail: { startDate: t }
    }))) : this._selectingState === "end" && (t < this._tempValue[0] ? (this._tempValue = [t, null], this.dispatchEvent(new CustomEvent("range-start-select", {
      bubbles: !0,
      composed: !0,
      detail: { startDate: t }
    }))) : (this._tempValue = [this._tempValue[0], t], this._selectingState = "idle", this.dispatchEvent(new CustomEvent("range-end-select", {
      bubbles: !0,
      composed: !0,
      detail: { endDate: t }
    }))));
  }
  _handleDateMouseEnter(t) {
    this._selectingState === "end" && this._tempValue[0] && (this._hoverDate = t);
  }
  _handleDateMouseLeave() {
    this._hoverDate = null;
  }
  _handlePrevMonth() {
    this._currentMonth = new Date(this._currentMonth.getFullYear(), this._currentMonth.getMonth() - 1, 1);
  }
  _handleNextMonth() {
    this._currentMonth = new Date(this._currentMonth.getFullYear(), this._currentMonth.getMonth() + 1, 1);
  }
  _handleApply() {
    this.value = [...this._tempValue], this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: {
        value: this.value,
        formattedValue: [this._formatDate(this.value[0]), this._formatDate(this.value[1])]
      }
    })), this._closePopover();
  }
  _handleCancel() {
    this._tempValue = [...this.value], this._closePopover();
  }
  _handlePresetClick(t) {
    this._tempValue = [...t], this.value = [...t], this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: {
        value: this.value,
        formattedValue: [this._formatDate(this.value[0]), this._formatDate(this.value[1])]
      }
    })), this._closePopover();
  }
  _handleKeyDown(t) {
    this.disabled || this.readonly || t.key === "Escape" && this._open && (t.preventDefault(), this._closePopover());
  }
  _renderCalendarGrid(t) {
    const i = new Date(this._currentMonth.getFullYear(), this._currentMonth.getMonth() + t, 1), r = i.getFullYear(), a = i.getMonth(), s = new Date(r, a + 1, 0).getDate(), n = new Date(r, a, 1).getDay(), c = [];
    for (let p = 0; p < n; p++) c.push(null);
    for (let p = 1; p <= s; p++) c.push(new Date(r, a, p));
    return d`
      <div class="calendar-grid" role="grid" aria-label="${r}년 ${a + 1}월">
        <div class="calendar-header-title">${r}년 ${a + 1}월</div>
        <div class="weekdays-row">
          <span>일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span>
        </div>
        <div class="days-matrix">
          ${c.map((p) => {
      if (!p) return d`<div class="empty-cell"></div>`;
      const b = this._tempValue[0] && p.toDateString() === this._tempValue[0].toDateString(), u = this._tempValue[1] && p.toDateString() === this._tempValue[1].toDateString(), h = this._tempValue[0] && this._tempValue[1] && p > this._tempValue[0] && p < this._tempValue[1], v = this._selectingState === "end" && this._tempValue[0] && this._hoverDate && p > this._tempValue[0] && p <= this._hoverDate;
      return d`
              <button
                type="button"
                role="gridcell"
                class="day-cell ${b ? "start" : ""} ${u ? "end" : ""} ${h || v ? "in-range" : ""}"
                aria-selected=${b || u ? "true" : "false"}
                @click=${() => this._handleDateClick(p)}
                @mouseenter=${() => this._handleDateMouseEnter(p)}
                @mouseleave=${this._handleDateMouseLeave}
              >
                ${p.getDate()}
              </button>
            `;
    })}
        </div>
      </div>
    `;
  }
  render() {
    const t = {
      value: this.value,
      format: this.format,
      calendarMode: this.calendarMode,
      inputMode: this.inputMode,
      variant: this.variant,
      size: this.size,
      minDate: typeof this.minDate == "string" ? new Date(this.minDate) : this.minDate,
      maxDate: typeof this.maxDate == "string" ? new Date(this.maxDate) : this.maxDate,
      placeholder: this.placeholder,
      clearable: this.clearable,
      readonly: this.readonly,
      disabled: this.disabled,
      error: this.error,
      loading: this.loading,
      open: this._open,
      selectingState: this._selectingState,
      hoverDate: this._hoverDate,
      currentMonth: this._currentMonth,
      presets: this.presets,
      formattedStart: this._formatDate(this.value[0]),
      formattedEnd: this._formatDate(this.value[1]),
      onStartInput: this._handleStartInput.bind(this),
      onEndInput: this._handleEndInput.bind(this),
      onSingleInput: this._handleSingleInput.bind(this),
      onTogglePopover: this._togglePopover.bind(this),
      onClear: this._handleClear.bind(this),
      onDateClick: this._handleDateClick.bind(this),
      onDateMouseEnter: this._handleDateMouseEnter.bind(this),
      onDateMouseLeave: this._handleDateMouseLeave.bind(this),
      onPrevMonth: this._handlePrevMonth.bind(this),
      onNextMonth: this._handleNextMonth.bind(this),
      onApply: this._handleApply.bind(this),
      onCancel: this._handleCancel.bind(this),
      onPresetClick: this._handlePresetClick.bind(this),
      onKeyDown: this._handleKeyDown.bind(this),
      renderCalendarGrid: this._renderCalendarGrid.bind(this)
    };
    return Mi(t);
  }
};
o([l({ type: Array })], C.prototype, "value", void 0);
o([l({ type: String })], C.prototype, "format", void 0);
o([l({
  type: String,
  attribute: "calendar-mode"
})], C.prototype, "calendarMode", void 0);
o([l({
  type: String,
  attribute: "input-mode"
})], C.prototype, "inputMode", void 0);
o([l({ type: String })], C.prototype, "variant", void 0);
o([l({ type: String })], C.prototype, "size", void 0);
o([l({ attribute: "min-date" })], C.prototype, "minDate", void 0);
o([l({ attribute: "max-date" })], C.prototype, "maxDate", void 0);
o([l({
  type: Number,
  attribute: "min-range"
})], C.prototype, "minRange", void 0);
o([l({
  type: Number,
  attribute: "max-range"
})], C.prototype, "maxRange", void 0);
o([l({ attribute: "disabled-dates" })], C.prototype, "disabledDates", void 0);
o([l({ type: Array })], C.prototype, "presets", void 0);
o([l()], C.prototype, "placeholder", void 0);
o([l({ type: Boolean })], C.prototype, "clearable", void 0);
o([l({ type: Boolean })], C.prototype, "readonly", void 0);
o([l({ type: Boolean })], C.prototype, "disabled", void 0);
o([l({ type: Boolean })], C.prototype, "error", void 0);
o([l({ type: Boolean })], C.prototype, "loading", void 0);
o([g()], C.prototype, "_open", void 0);
o([g()], C.prototype, "_selectingState", void 0);
o([g()], C.prototype, "_hoverDate", void 0);
o([g()], C.prototype, "_currentMonth", void 0);
o([g()], C.prototype, "_tempValue", void 0);
C = o([k("biz-date-range-picker")], C);
var Ii = (e) => {
  const t = e.viewDate.getFullYear(), i = e.viewDate.getMonth(), r = new Date(t, i, 1).getDay(), a = new Date(t, i + 1, 0).getDate(), s = [];
  for (let b = 0; b < r; b++) s.push(null);
  for (let b = 1; b <= a; b++) s.push(new Date(t, i, b));
  const n = Array.from({ length: e.use12Hours ? 12 : 24 }, (b, u) => e.use12Hours ? u + 1 : u), c = Array.from({ length: 60 }, (b, u) => u), p = Array.from({ length: 60 }, (b, u) => u);
  return d`
    <div
      class=${M({
    "biz-date-time-picker": !0,
    [`biz-date-time-picker--${e.variant}`]: !0,
    [`biz-date-time-picker--${e.size}`]: !0,
    "biz-date-time-picker--disabled": e.disabled,
    "biz-date-time-picker--readonly": e.readonly,
    "biz-date-time-picker--error": e.error,
    "biz-date-time-picker--open": e.isOpen,
    "biz-date-time-picker--full-width": e.fullWidth
  })}
      @keydown=${e.onKeyDown}
    >
      <div class="biz-date-time-picker__label">
        <slot name="label-slot"></slot>
      </div>

      <div
        class="biz-date-time-picker__control"
        role="combobox"
        aria-expanded=${e.isOpen ? "true" : "false"}
        aria-haspopup="dialog"
        aria-disabled=${e.disabled ? "true" : "false"}
        @click=${e.onInputClick}
      >
        <span class="biz-date-time-picker__prefix">
          <slot name="prefix-slot"></slot>
        </span>

        <input
          type="text"
          class="biz-date-time-picker__input"
          .value=${e.displayValue}
          placeholder=${e.placeholder}
          ?disabled=${e.disabled}
          ?readonly=${e.readonly}
          @input=${e.onInputType}
        />

        ${e.clearable && e.value && !e.disabled && !e.readonly ? d`
              <button
                type="button"
                class="biz-date-time-picker__clear-btn"
                aria-label="Clear value"
                @click=${e.onClearClick}
              >
                &times;
              </button>
            ` : ""}

        <span class="biz-date-time-picker__suffix">
          <slot name="suffix-slot">
            <svg class="biz-date-time-picker__icon" viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
            </svg>
          </slot>
        </span>
      </div>

      <div class="biz-date-time-picker__helper-text">
        <slot name="helper-text-slot"></slot>
      </div>

      ${e.isOpen ? d`
            <div class="biz-date-time-picker__popover" role="dialog" aria-modal="true">
              <div class="biz-date-time-picker__header">
                <slot name="header-slot"></slot>
              </div>

              ${e.layoutMode === "tabbed" ? d`
                    <div class="biz-date-time-picker__tabs" role="tablist">
                      <button
                        type="button"
                        role="tab"
                        class=${M({
    "biz-date-time-picker__tab": !0,
    "biz-date-time-picker__tab--active": e.activeTab === "date"
  })}
                        aria-selected=${e.activeTab === "date" ? "true" : "false"}
                        @click=${() => e.onTabChange("date")}
                      >
                        Date
                      </button>
                      <button
                        type="button"
                        role="tab"
                        class=${M({
    "biz-date-time-picker__tab": !0,
    "biz-date-time-picker__tab--active": e.activeTab === "time"
  })}
                        aria-selected=${e.activeTab === "time" ? "true" : "false"}
                        @click=${() => e.onTabChange("time")}
                      >
                        Time
                      </button>
                    </div>
                  ` : ""}

              <div
                class=${M({
    "biz-date-time-picker__body": !0,
    "biz-date-time-picker__body--side-by-side": e.layoutMode === "side-by-side",
    "biz-date-time-picker__body--tabbed": e.layoutMode === "tabbed"
  })}
              >
                ${e.layoutMode === "side-by-side" || e.activeTab === "date" ? d`
                      <div class="biz-date-time-picker__calendar-view">
                        <div class="biz-date-time-picker__calendar-header">
                          <button type="button" class="biz-date-time-picker__nav-btn" @click=${e.onPrevMonth}>&lt;</button>
                          <span class="biz-date-time-picker__current-month">
                            ${t}.${String(i + 1).padStart(2, "0")}
                          </span>
                          <button type="button" class="biz-date-time-picker__nav-btn" @click=${e.onNextMonth}>&gt;</button>
                        </div>

                        <div class="biz-date-time-picker__grid" role="grid">
                          <div class="biz-date-time-picker__weekdays" role="row">
                            <span role="columnheader">Su</span>
                            <span role="columnheader">Mo</span>
                            <span role="columnheader">Tu</span>
                            <span role="columnheader">We</span>
                            <span role="columnheader">Th</span>
                            <span role="columnheader">Fr</span>
                            <span role="columnheader">Sa</span>
                          </div>
                          <div class="biz-date-time-picker__days" role="row">
                            ${s.map((b) => {
    if (!b) return d`<div class="biz-date-time-picker__cell biz-date-time-picker__cell--empty" role="gridcell"></div>`;
    const u = e.selectedDate && e.selectedDate.getFullYear() === b.getFullYear() && e.selectedDate.getMonth() === b.getMonth() && e.selectedDate.getDate() === b.getDate();
    return d`
                                <div
                                  class=${M({
      "biz-date-time-picker__cell": !0,
      "biz-date-time-picker__cell--selected": !!u
    })}
                                  role="gridcell"
                                  aria-selected=${u ? "true" : "false"}
                                  tabindex="0"
                                  @click=${() => e.onDateSelect(b)}
                                >
                                  <slot name="date-cell-slot">
                                    ${b.getDate()}
                                  </slot>
                                </div>
                              `;
  })}
                          </div>
                        </div>
                      </div>
                    ` : ""}

                ${e.layoutMode === "side-by-side" || e.activeTab === "time" ? d`
                      <div class="biz-date-time-picker__time-view">
                        ${e.use12Hours ? d`
                              <div class="biz-date-time-picker__time-column" role="listbox">
                                ${["AM", "PM"].map((b) => d`
                                    <div
                                      class=${M({
    "biz-date-time-picker__time-option": !0,
    "biz-date-time-picker__time-option--selected": e.selectedTime.period === b
  })}
                                      role="option"
                                      aria-selected=${e.selectedTime.period === b ? "true" : "false"}
                                      @click=${() => e.onPeriodSelect(b)}
                                    >
                                      ${b}
                                    </div>
                                  `)}
                              </div>
                            ` : ""}

                        <div class="biz-date-time-picker__time-column" role="listbox">
                          ${n.map((b) => d`
                              <div
                                class=${M({
    "biz-date-time-picker__time-option": !0,
    "biz-date-time-picker__time-option--selected": e.selectedTime.hour === b
  })}
                                role="option"
                                aria-selected=${e.selectedTime.hour === b ? "true" : "false"}
                                @click=${() => e.onHourSelect(b)}
                              >
                                <slot name="time-option-slot">
                                  ${String(b).padStart(2, "0")}
                                </slot>
                              </div>
                            `)}
                        </div>

                        <div class="biz-date-time-picker__time-column" role="listbox">
                          ${c.map((b) => d`
                              <div
                                class=${M({
    "biz-date-time-picker__time-option": !0,
    "biz-date-time-picker__time-option--selected": e.selectedTime.minute === b
  })}
                                role="option"
                                aria-selected=${e.selectedTime.minute === b ? "true" : "false"}
                                @click=${() => e.onMinuteSelect(b)}
                              >
                                <slot name="time-option-slot">
                                  ${String(b).padStart(2, "0")}
                                </slot>
                              </div>
                            `)}
                        </div>

                        ${e.showSeconds ? d`
                              <div class="biz-date-time-picker__time-column" role="listbox">
                                ${p.map((b) => d`
                                    <div
                                      class=${M({
    "biz-date-time-picker__time-option": !0,
    "biz-date-time-picker__time-option--selected": e.selectedTime.second === b
  })}
                                      role="option"
                                      aria-selected=${e.selectedTime.second === b ? "true" : "false"}
                                      @click=${() => e.onSecondSelect(b)}
                                    >
                                      <slot name="time-option-slot">
                                        ${String(b).padStart(2, "0")}
                                      </slot>
                                    </div>
                                  `)}
                              </div>
                            ` : ""}
                      </div>
                    ` : ""}
              </div>

              <div class="biz-date-time-picker__footer">
                <slot name="footer-slot">
                  <div class="biz-date-time-picker__default-footer">
                    <button type="button" class="biz-date-time-picker__action-btn" @click=${e.onNowClick}>Now</button>
                    <div class="biz-date-time-picker__action-group">
                      <button type="button" class="biz-date-time-picker__action-btn" @click=${e.onCancelClick}>Cancel</button>
                      <button type="button" class="biz-date-time-picker__action-btn biz-date-time-picker__action-btn--primary" @click=${e.onConfirmClick}>OK</button>
                    </div>
                  </div>
                </slot>
              </div>
            </div>
          ` : ""}

      <div class="biz-date-time-picker__sr-live" aria-live="polite" aria-atomic="true">
        ${e.liveMessage}
      </div>
    </div>
  `;
}, Bi = w`
  :host {
    /* Layout & Sizing */
    --biz-date-time-picker-height-sm: 32px;
    --biz-date-time-picker-height-md: 40px;
    --biz-date-time-picker-height-lg: 48px;
    --biz-date-time-picker-padding-x: 12px;
    --biz-date-time-picker-border-radius: 4px;
    --biz-date-time-picker-popover-width: 480px;
    --biz-date-time-picker-calendar-width: 280px;
    --biz-date-time-picker-time-width: 200px;
    --biz-date-time-picker-cell-size: 36px;

    /* Colors - Base */
    --biz-date-time-picker-bg: #ffffff;
    --biz-date-time-picker-border-color: #d1d5db;
    --biz-date-time-picker-text-color: #111827;
    --biz-date-time-picker-placeholder-color: #9ca3af;

    /* Colors - Popover & Selection */
    --biz-date-time-picker-popover-bg: #ffffff;
    --biz-date-time-picker-popover-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --biz-date-time-picker-item-hover-bg: #f3f4f6;
    --biz-date-time-picker-item-selected-bg: #2563eb;
    --biz-date-time-picker-item-selected-text: #ffffff;
    --biz-date-time-picker-item-disabled-text: #d1d5db;

    /* Colors - Interactive States */
    --biz-date-time-picker-hover-border-color: #9ca3af;
    --biz-date-time-picker-focus-border-color: #2563eb;
    --biz-date-time-picker-focus-ring-color: rgba(37, 99, 235, 0.2);

    /* Colors - Error & Disabled */
    --biz-date-time-picker-error-color: #dc2626;
    --biz-date-time-picker-disabled-bg: #f3f4f6;
    --biz-date-time-picker-disabled-text-color: #9ca3af;

    display: inline-block;
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 14px;
    box-sizing: border-box;
  }

  :host *, :host *::before, :host *::after {
    box-sizing: inherit;
  }

  .biz-date-time-picker {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    width: 280px;
  }

  .biz-date-time-picker--full-width {
    width: 100%;
  }

  /* Control Area */
  .biz-date-time-picker__control {
    display: flex;
    align-items: center;
    background-color: var(--biz-date-time-picker-bg);
    border: 1px solid var(--biz-date-time-picker-border-color);
    border-radius: var(--biz-date-time-picker-border-radius);
    padding: 0 var(--biz-date-time-picker-padding-x);
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .biz-date-time-picker__control:hover {
    border-color: var(--biz-date-time-picker-hover-border-color);
  }

  .biz-date-time-picker__control:focus-within {
    border-color: var(--biz-date-time-picker-focus-border-color);
    box-shadow: 0 0 0 3px var(--biz-date-time-picker-focus-ring-color);
  }

  .biz-date-time-picker__input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: var(--biz-date-time-picker-text-color);
    font-size: inherit;
    width: 100%;
  }

  .biz-date-time-picker__input::placeholder {
    color: var(--biz-date-time-picker-placeholder-color);
  }

  /* Sizes */
  .biz-date-time-picker--small .biz-date-time-picker__control {
    height: var(--biz-date-time-picker-height-sm);
    font-size: 12px;
  }

  .biz-date-time-picker--medium .biz-date-time-picker__control {
    height: var(--biz-date-time-picker-height-md);
    font-size: 14px;
  }

  .biz-date-time-picker--large .biz-date-time-picker__control {
    height: var(--biz-date-time-picker-height-lg);
    font-size: 16px;
  }

  /* Variants */
  .biz-date-time-picker--outlined .biz-date-time-picker__control {
    border-style: solid;
  }

  .biz-date-time-picker--filled .biz-date-time-picker__control {
    background-color: var(--biz-date-time-picker-item-hover-bg);
    border-bottom: 2px solid var(--biz-date-time-picker-border-color);
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: var(--biz-date-time-picker-border-radius) var(--biz-date-time-picker-border-radius) 0 0;
  }

  .biz-date-time-picker--standard .biz-date-time-picker__control {
    background-color: transparent;
    border-bottom: 1px solid var(--biz-date-time-picker-border-color);
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
  }

  /* States */
  .biz-date-time-picker--disabled .biz-date-time-picker__control {
    background-color: var(--biz-date-time-picker-disabled-bg);
    border-color: var(--biz-date-time-picker-border-color);
    cursor: not-allowed;
  }

  .biz-date-time-picker--disabled .biz-date-time-picker__input {
    color: var(--biz-date-time-picker-disabled-text-color);
    cursor: not-allowed;
  }

  .biz-date-time-picker--readonly .biz-date-time-picker__control {
    cursor: default;
  }

  .biz-date-time-picker--error .biz-date-time-picker__control {
    border-color: var(--biz-date-time-picker-error-color);
  }

  .biz-date-time-picker__clear-btn {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    color: var(--biz-date-time-picker-placeholder-color);
    padding: 0 4px;
  }

  .biz-date-time-picker__clear-btn:hover {
    color: var(--biz-date-time-picker-text-color);
  }

  /* Popover Panel */
  .biz-date-time-picker__popover {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 1000;
    background-color: var(--biz-date-time-picker-popover-bg);
    border: 1px solid var(--biz-date-time-picker-border-color);
    border-radius: var(--biz-date-time-picker-border-radius);
    box-shadow: var(--biz-date-time-picker-popover-shadow);
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .biz-date-time-picker__body--side-by-side {
    display: flex;
    gap: 16px;
    width: var(--biz-date-time-picker-popover-width);
  }

  .biz-date-time-picker__body--tabbed {
    display: flex;
    flex-direction: column;
    width: var(--biz-date-time-picker-calendar-width);
  }

  .biz-date-time-picker__tabs {
    display: flex;
    border-bottom: 1px solid var(--biz-date-time-picker-border-color);
  }

  .biz-date-time-picker__tab {
    flex: 1;
    padding: 8px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-weight: 500;
  }

  .biz-date-time-picker__tab--active {
    border-bottom: 2px solid var(--biz-date-time-picker-item-selected-bg);
    color: var(--biz-date-time-picker-item-selected-bg);
  }

  /* Calendar View */
  .biz-date-time-picker__calendar-view {
    width: var(--biz-date-time-picker-calendar-width);
  }

  .biz-date-time-picker__calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .biz-date-time-picker__nav-btn {
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .biz-date-time-picker__nav-btn:hover {
    background-color: var(--biz-date-time-picker-item-hover-bg);
  }

  .biz-date-time-picker__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    margin-bottom: 4px;
  }

  .biz-date-time-picker__days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
  }

  .biz-date-time-picker__cell {
    height: var(--biz-date-time-picker-cell-size);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    font-size: 13px;
  }

  .biz-date-time-picker__cell:hover:not(.biz-date-time-picker__cell--empty) {
    background-color: var(--biz-date-time-picker-item-hover-bg);
  }

  .biz-date-time-picker__cell--selected {
    background-color: var(--biz-date-time-picker-item-selected-bg) !important;
    color: var(--biz-date-time-picker-item-selected-text);
  }

  /* Time View */
  .biz-date-time-picker__time-view {
    display: flex;
    height: 250px;
    border-left: 1px solid var(--biz-date-time-picker-border-color);
  }

  .biz-date-time-picker__time-column {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    scrollbar-width: thin;
  }

  .biz-date-time-picker__time-option {
    padding: 6px 12px;
    text-align: center;
    cursor: pointer;
  }

  .biz-date-time-picker__time-option:hover {
    background-color: var(--biz-date-time-picker-item-hover-bg);
  }

  .biz-date-time-picker__time-option--selected {
    background-color: var(--biz-date-time-picker-item-selected-bg);
    color: var(--biz-date-time-picker-item-selected-text);
  }

  /* Footer */
  .biz-date-time-picker__default-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--biz-date-time-picker-border-color);
    padding-top: 8px;
  }

  .biz-date-time-picker__action-group {
    display: flex;
    gap: 8px;
  }

  .biz-date-time-picker__action-btn {
    border: 1px solid var(--biz-date-time-picker-border-color);
    background: white;
    padding: 4px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
  }

  .biz-date-time-picker__action-btn--primary {
    background: var(--biz-date-time-picker-item-selected-bg);
    color: white;
    border: none;
  }

  .biz-date-time-picker__sr-live {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`, $ = class extends _ {
  constructor(...t) {
    super(...t), this.value = null, this.format = "YYYY-MM-DD HH:mm", this.layoutMode = "side-by-side", this.use12Hours = !1, this.showSeconds = !1, this.minDatetime = null, this.maxDatetime = null, this.disabledDates = [], this.disabledHours = null, this.disabledMinutes = null, this.placeholder = "YYYY-MM-DD HH:mm", this.clearable = !1, this.readonly = !1, this.disabled = !1, this.error = !1, this.variant = "outlined", this.size = "medium", this.fullWidth = !1, this.isOpen = !1, this.activeTab = "date", this.viewDate = /* @__PURE__ */ new Date(), this.selectedDate = null, this.selectedTime = {
      hour: 0,
      minute: 0,
      second: 0,
      period: "AM"
    }, this.displayValue = "", this.liveMessage = "", this.handleOutsideClick = (i) => {
      this.isOpen && !i.composedPath().includes(this) && this.closePopover();
    };
  }
  static {
    this.styles = Bi;
  }
  connectedCallback() {
    super.connectedCallback(), this.initValue(), document.addEventListener("click", this.handleOutsideClick);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("click", this.handleOutsideClick);
  }
  willUpdate(t) {
    t.has("value") && this.initValue();
  }
  initValue() {
    if (!this.value) {
      this.displayValue = "", this.selectedDate = null;
      return;
    }
    const t = new Date(this.value);
    if (!isNaN(t.getTime())) {
      this.selectedDate = t, this.viewDate = new Date(t);
      let i = t.getHours(), r = "AM";
      this.use12Hours && (r = i >= 12 ? "PM" : "AM", i = i % 12 || 12), this.selectedTime = {
        hour: i,
        minute: t.getMinutes(),
        second: t.getSeconds(),
        period: r
      }, this.updateDisplayValue();
    }
  }
  updateDisplayValue() {
    if (!this.selectedDate) {
      this.displayValue = "";
      return;
    }
    const t = this.selectedDate.getFullYear(), i = String(this.selectedDate.getMonth() + 1).padStart(2, "0"), r = String(this.selectedDate.getDate()).padStart(2, "0");
    let a = this.selectedTime.hour;
    this.use12Hours && this.selectedTime.period === "PM" && a < 12 && (a += 12), this.use12Hours && this.selectedTime.period === "AM" && a === 12 && (a = 0);
    const s = String(this.use12Hours ? this.selectedTime.hour : a).padStart(2, "0"), n = String(this.selectedTime.minute).padStart(2, "0"), c = String(this.selectedTime.second).padStart(2, "0");
    let p = this.format.replace("YYYY", String(t)).replace("MM", i).replace("DD", r).replace("HH", String(a).padStart(2, "0")).replace("hh", s).replace("mm", n).replace("ss", c);
    this.use12Hours && (p = p.replace("A", this.selectedTime.period)), this.displayValue = p;
  }
  togglePickerPopover() {
    this.disabled || this.readonly || (this.isOpen ? this.closePopover() : this.openPopover());
  }
  openPopover() {
    this.isOpen = !0, this.dispatchEvent(new CustomEvent("open", {
      bubbles: !0,
      composed: !0
    }));
  }
  closePopover() {
    this.isOpen = !1, this.dispatchEvent(new CustomEvent("close", {
      bubbles: !0,
      composed: !0
    }));
  }
  handleInputType(t) {
    const i = t.target.value;
    this.displayValue = i, this.dispatchEvent(new CustomEvent("input", {
      detail: { rawValue: i },
      bubbles: !0,
      composed: !0
    }));
  }
  handleClearClick(t) {
    t.stopPropagation(), this.value = null, this.selectedDate = null, this.displayValue = "", this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("change", {
      detail: {
        value: null,
        date: null
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handlePrevMonth(t) {
    t.stopPropagation(), this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() - 1, 1);
  }
  handleNextMonth(t) {
    t.stopPropagation(), this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 1);
  }
  handleDateSelect(t) {
    this.selectedDate = t, this.updateDisplayValue(), this.liveMessage = `${t.getFullYear()}년 ${t.getMonth() + 1}월 ${t.getDate()}일 선택됨`, this.dispatchEvent(new CustomEvent("date-change", {
      detail: { date: t },
      bubbles: !0,
      composed: !0
    }));
  }
  handleHourSelect(t) {
    this.selectedTime = {
      ...this.selectedTime,
      hour: t
    }, this.updateDisplayValue(), this.dispatchEvent(new CustomEvent("time-change", {
      detail: { time: this.getTimeString() },
      bubbles: !0,
      composed: !0
    }));
  }
  handleMinuteSelect(t) {
    this.selectedTime = {
      ...this.selectedTime,
      minute: t
    }, this.updateDisplayValue(), this.dispatchEvent(new CustomEvent("time-change", {
      detail: { time: this.getTimeString() },
      bubbles: !0,
      composed: !0
    }));
  }
  handleSecondSelect(t) {
    this.selectedTime = {
      ...this.selectedTime,
      second: t
    }, this.updateDisplayValue(), this.dispatchEvent(new CustomEvent("time-change", {
      detail: { time: this.getTimeString() },
      bubbles: !0,
      composed: !0
    }));
  }
  handlePeriodSelect(t) {
    this.selectedTime = {
      ...this.selectedTime,
      period: t
    }, this.updateDisplayValue(), this.dispatchEvent(new CustomEvent("time-change", {
      detail: { time: this.getTimeString() },
      bubbles: !0,
      composed: !0
    }));
  }
  getTimeString() {
    return `${String(this.selectedTime.hour).padStart(2, "0")}:${String(this.selectedTime.minute).padStart(2, "0")}:${String(this.selectedTime.second).padStart(2, "0")}`;
  }
  handleTabChange(t) {
    this.activeTab = t;
  }
  handleNowClick(t) {
    t.stopPropagation();
    const i = /* @__PURE__ */ new Date();
    this.selectedDate = i;
    let r = i.getHours(), a = "AM";
    this.use12Hours && (a = r >= 12 ? "PM" : "AM", r = r % 12 || 12), this.selectedTime = {
      hour: r,
      minute: i.getMinutes(),
      second: i.getSeconds(),
      period: a
    }, this.updateDisplayValue(), this.confirmSelection();
  }
  handleConfirmClick(t) {
    t.stopPropagation(), this.confirmSelection();
  }
  handleCancelClick(t) {
    t.stopPropagation(), this.closePopover();
  }
  confirmSelection() {
    if (!this.selectedDate) return;
    let t = this.selectedTime.hour;
    this.use12Hours && this.selectedTime.period === "PM" && t < 12 && (t += 12), this.use12Hours && this.selectedTime.period === "AM" && t === 12 && (t = 0);
    const i = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), t, this.selectedTime.minute, this.selectedTime.second);
    this.value = i.toISOString(), this.updateDisplayValue(), this.closePopover(), this.dispatchEvent(new CustomEvent("change", {
      detail: {
        value: this.displayValue,
        date: i
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleKeyDown(t) {
    t.key === "Escape" && this.isOpen ? (t.preventDefault(), this.closePopover()) : t.key === "Enter" && this.isOpen && (t.preventDefault(), this.confirmSelection());
  }
  render() {
    return Ii({
      value: this.value,
      format: this.format,
      layoutMode: this.layoutMode,
      use12Hours: this.use12Hours,
      showSeconds: this.showSeconds,
      minDatetime: this.minDatetime,
      maxDatetime: this.maxDatetime,
      disabledDates: this.disabledDates,
      disabledHours: this.disabledHours,
      disabledMinutes: this.disabledMinutes,
      placeholder: this.placeholder,
      clearable: this.clearable,
      readonly: this.readonly,
      disabled: this.disabled,
      error: this.error,
      variant: this.variant,
      size: this.size,
      fullWidth: this.fullWidth,
      isOpen: this.isOpen,
      activeTab: this.activeTab,
      viewDate: this.viewDate,
      selectedDate: this.selectedDate,
      selectedTime: this.selectedTime,
      displayValue: this.displayValue,
      liveMessage: this.liveMessage,
      onInputClick: () => this.togglePickerPopover(),
      onInputType: (t) => this.handleInputType(t),
      onClearClick: (t) => this.handleClearClick(t),
      onPrevMonth: (t) => this.handlePrevMonth(t),
      onNextMonth: (t) => this.handleNextMonth(t),
      onDateSelect: (t) => this.handleDateSelect(t),
      onHourSelect: (t) => this.handleHourSelect(t),
      onMinuteSelect: (t) => this.handleMinuteSelect(t),
      onSecondSelect: (t) => this.handleSecondSelect(t),
      onPeriodSelect: (t) => this.handlePeriodSelect(t),
      onTabChange: (t) => this.handleTabChange(t),
      onNowClick: (t) => this.handleNowClick(t),
      onConfirmClick: (t) => this.handleConfirmClick(t),
      onCancelClick: (t) => this.handleCancelClick(t),
      onKeyDown: (t) => this.handleKeyDown(t)
    });
  }
};
o([l({
  type: String,
  reflect: !0
})], $.prototype, "value", void 0);
o([l({ type: String })], $.prototype, "format", void 0);
o([l({
  type: String,
  attribute: "layout-mode"
})], $.prototype, "layoutMode", void 0);
o([l({
  type: Boolean,
  attribute: "use12-hours"
})], $.prototype, "use12Hours", void 0);
o([l({
  type: Boolean,
  attribute: "show-seconds"
})], $.prototype, "showSeconds", void 0);
o([l({
  type: String,
  attribute: "min-datetime"
})], $.prototype, "minDatetime", void 0);
o([l({
  type: String,
  attribute: "max-datetime"
})], $.prototype, "maxDatetime", void 0);
o([l({ type: Array })], $.prototype, "disabledDates", void 0);
o([l({ attribute: !1 })], $.prototype, "disabledHours", void 0);
o([l({ attribute: !1 })], $.prototype, "disabledMinutes", void 0);
o([l({ type: String })], $.prototype, "placeholder", void 0);
o([l({ type: Boolean })], $.prototype, "clearable", void 0);
o([l({ type: Boolean })], $.prototype, "readonly", void 0);
o([l({ type: Boolean })], $.prototype, "disabled", void 0);
o([l({ type: Boolean })], $.prototype, "error", void 0);
o([l({ type: String })], $.prototype, "variant", void 0);
o([l({ type: String })], $.prototype, "size", void 0);
o([l({
  type: Boolean,
  attribute: "full-width"
})], $.prototype, "fullWidth", void 0);
o([g()], $.prototype, "isOpen", void 0);
o([g()], $.prototype, "activeTab", void 0);
o([g()], $.prototype, "viewDate", void 0);
o([g()], $.prototype, "selectedDate", void 0);
o([g()], $.prototype, "selectedTime", void 0);
o([g()], $.prototype, "displayValue", void 0);
o([g()], $.prototype, "liveMessage", void 0);
$ = o([k("biz-date-time-picker")], $);
var Pi = ({ open: e = !1, modal: t = !0, onClose: i, onBackdropClick: r, children: a }) => d`
    <div 
      class="backdrop ${e ? "open" : ""} ${t ? "" : "non-modal"}" 
      @click=${r}
    >
      <div 
        class="dialog-content" 
        role="dialog" 
        aria-modal=${t}
        tabindex="-1"
      >
        <button class="close-button" @click=${i} aria-label="Close dialog">&times;</button>
        ${a}
      </div>
    </div>
  `, Vi = w`
  :host {
  display: contents;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.backdrop.open {
  display: flex;
}

.dialog-content {
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 90%;
  position: relative;
  outline: none;
}

.close-button {
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
}

.close-button:hover {
  color: #000;
}

/* Modal specific styles */
.backdrop.non-modal {
  background: transparent;
  pointer-events: none;
}

.non-modal .dialog-content {
  pointer-events: auto;
}
`, Ze = class extends _ {
  constructor(...t) {
    super(...t), this.open = !1, this.modal = !0, this._handleClose = () => {
      this.dispatchEvent(new CustomEvent("close"));
    }, this._handleBackdropClick = (i) => {
      this.dispatchEvent(new CustomEvent("backdrop-click", { detail: { originalEvent: i } }));
    };
  }
  static {
    this.styles = Vi;
  }
  render() {
    return Pi({
      open: this.open,
      modal: this.modal,
      onClose: this._handleClose,
      onBackdropClick: this._handleBackdropClick,
      children: d`<slot></slot>`
    });
  }
};
o([l({ type: Boolean })], Ze.prototype, "open", void 0);
o([l({ type: Boolean })], Ze.prototype, "modal", void 0);
Ze = o([k("biz-dialog")], Ze);
var Fi = w`
  :host {
    /* Layout & Sizing */
    --biz-dropdown-height-sm: 32px;
    --biz-dropdown-height-md: 40px;
    --biz-dropdown-height-lg: 48px;
    --biz-dropdown-padding-x: 12px;
    --biz-dropdown-padding-y: 8px;
    --biz-dropdown-border-radius: 4px;
    --biz-dropdown-popover-max-height: 256px;

    /* Colors - Base */
    --biz-dropdown-bg-color: #ffffff;
    --biz-dropdown-border-color: #d1d5db;
    --biz-dropdown-text-color: #111827;
    --biz-dropdown-placeholder-color: #9ca3af;
    --biz-dropdown-icon-color: #6b7280;

    /* Colors - Popover & Option */
    --biz-dropdown-popover-bg: #ffffff;
    --biz-dropdown-popover-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --biz-dropdown-option-hover-bg: #f3f4f6;
    --biz-dropdown-option-selected-bg: #eff6ff;
    --biz-dropdown-option-selected-text: #2563eb;

    /* Colors - Tag / Chip */
    --biz-dropdown-tag-bg: #e5e7eb;
    --biz-dropdown-tag-text: #374151;

    /* Colors - Interactive States */
    --biz-dropdown-hover-border-color: #9ca3af;
    --biz-dropdown-focus-border-color: #2563eb;
    --biz-dropdown-focus-ring-color: rgba(37, 99, 235, 0.2);

    /* Colors - Error & Disabled */
    --biz-dropdown-error-color: #dc2626;
    --biz-dropdown-disabled-bg-color: #f3f4f6;
    --biz-dropdown-disabled-text-color: #9ca3af;

    display: inline-block;
    font-family: inherit;
    box-sizing: border-box;
  }

  :host([full-width]) {
    display: block;
    width: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .biz-dropdown {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .biz-dropdown.full-width {
    width: 100%;
  }

  /* Trigger Control Base */
  .trigger-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 var(--biz-dropdown-padding-x);
    background-color: var(--biz-dropdown-bg-color);
    border: 1px solid var(--biz-dropdown-border-color);
    border-radius: var(--biz-dropdown-border-radius);
    color: var(--biz-dropdown-text-color);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    outline: none;
  }

  /* Variants */
  .biz-dropdown.outlined .trigger-control {
    background-color: var(--biz-dropdown-bg-color);
    border-style: solid;
  }

  .biz-dropdown.filled .trigger-control {
    background-color: #f9fafb;
    border: 1px solid transparent;
  }

  .biz-dropdown.standard .trigger-control {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--biz-dropdown-border-color);
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
  }

  /* Sizes */
  .biz-dropdown.small .trigger-control {
    min-height: var(--biz-dropdown-height-sm);
    font-size: 12px;
  }

  .biz-dropdown.medium .trigger-control {
    min-height: var(--biz-dropdown-height-md);
    font-size: 14px;
  }

  .biz-dropdown.large .trigger-control {
    min-height: var(--biz-dropdown-height-lg);
    font-size: 16px;
  }

  /* Value Container */
  .value-container {
    flex: 1;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    overflow: hidden;
  }

  .placeholder {
    color: var(--biz-dropdown-placeholder-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .selected-value {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .filter-input {
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    color: var(--biz-dropdown-text-color);
    padding: 0;
  }

  /* Tags */
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 2px 0;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background-color: var(--biz-dropdown-tag-bg);
    color: var(--biz-dropdown-tag-text);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
  }

  .tag-remove-btn {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
    line-height: 1;
  }

  /* Suffix & Actions */
  .suffix-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--biz-dropdown-icon-color);
  }

  .clear-btn {
    border: none;
    background: transparent;
    color: var(--biz-dropdown-icon-color);
    cursor: pointer;
    font-size: 16px;
    padding: 0;
    line-height: 1;
  }

  .clear-btn:hover {
    color: var(--biz-dropdown-text-color);
  }

  .arrow-icon {
    display: inline-flex;
    transition: transform 0.2s ease-in-out;
  }

  .biz-dropdown.open .arrow-icon {
    transform: rotate(180deg);
  }

  /* States - Hover & Focus */
  .trigger-control:hover {
    border-color: var(--biz-dropdown-hover-border-color);
  }

  .biz-dropdown.focused .trigger-control,
  .trigger-control:focus-visible {
    border-color: var(--biz-dropdown-focus-border-color);
    box-shadow: 0 0 0 3px var(--biz-dropdown-focus-ring-color);
  }

  .biz-dropdown.standard.focused .trigger-control {
    box-shadow: none;
    border-bottom-color: var(--biz-dropdown-focus-border-color);
  }

  /* States - Error */
  .biz-dropdown.error .trigger-control {
    border-color: var(--biz-dropdown-error-color);
  }

  .biz-dropdown.error.focused .trigger-control {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
  }

  /* States - Disabled */
  .biz-dropdown.disabled .trigger-control {
    background-color: var(--biz-dropdown-disabled-bg-color);
    color: var(--biz-dropdown-disabled-text-color);
    border-color: var(--biz-dropdown-border-color);
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* States - Readonly */
  .biz-dropdown.readonly .trigger-control {
    cursor: default;
    background-color: #f9fafb;
  }

  /* Popover */
  .popover {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    margin-top: 4px;
    background-color: var(--biz-dropdown-popover-bg);
    border: 1px solid var(--biz-dropdown-border-color);
    border-radius: var(--biz-dropdown-border-radius);
    box-shadow: var(--biz-dropdown-popover-shadow);
    display: none;
    flex-direction: column;
    overflow: hidden;
  }

  .popover.open {
    display: flex;
  }

  .options-container {
    max-height: var(--biz-dropdown-popover-max-height);
    overflow-y: auto;
  }

  .option-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    cursor: pointer;
    color: var(--biz-dropdown-text-color);
    transition: background-color 0.15s ease;
  }

  .option-item:hover,
  .option-item.active {
    background-color: var(--biz-dropdown-option-hover-bg);
  }

  .option-item.selected {
    background-color: var(--biz-dropdown-option-selected-bg);
    color: var(--biz-dropdown-option-selected-text);
    font-weight: 500;
  }

  .option-item.disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: transparent;
  }

  .empty-state {
    padding: 12px;
    text-align: center;
    color: var(--biz-dropdown-placeholder-color);
    font-size: 14px;
  }

  /* Spinner */
  .spinner {
    width: 14px;
    height: 14px;
    border: 2px solid var(--biz-dropdown-icon-color);
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Screen Reader Only */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`, Oi = (e) => {
  const { value: t, options: i, mode: r, variant: a, size: s, filterable: n, placeholder: c, clearable: p, maxTagCount: b, loading: u, required: h, readonly: v, disabled: m, error: z, fullWidth: D, isOpen: x, filterKeyword: W, activeIndex: Y, focused: P, onTriggerClick: re, onTriggerKeyDown: ce, onFilterInput: fe, onFilterKeyDown: ye, onOptionClick: xe, onClearClick: _e, onTagRemove: Te, onFocus: Me, onBlur: ze } = e, oe = Array.isArray(t) ? t : t != null ? [t] : [], ae = oe.length > 0, le = n && W ? i.filter((T) => T.label.toLowerCase().includes(W.toLowerCase())) : i, De = () => {
    if (r !== "multi" || !ae) return null;
    const T = b !== void 0 && b >= 0 ? oe.slice(0, b) : oe, y = oe.length - T.length;
    return d`
      <div class="tags-container">
        ${qe(T, (F) => F, (F) => {
      const he = i.find((Be) => Be.value === F), Ie = he ? he.label : String(F);
      return d`
              <span class="tag">
                <slot name="tag-slot" .tagValue=${F}>
                  <span class="tag-label">${Ie}</span>
                </slot>
                ${!m && !v ? d`
                      <button
                        type="button"
                        class="tag-remove-btn"
                        aria-label="Remove ${Ie}"
                        @click=${(Be) => Te(Be, F)}
                      >
                        &times;
                      </button>
                    ` : null}
              </span>
            `;
    })}
        ${y > 0 ? d`<span class="tag tag-more">+${y}</span>` : null}
      </div>
    `;
  }, Ee = () => {
    if (r === "multi") return De();
    if (ae) {
      const T = i.find((y) => y.value === oe[0]);
      return d`<span class="selected-value">${T ? T.label : String(oe[0])}</span>`;
    }
    return d`<span class="placeholder">${c}</span>`;
  }, Ae = (T) => oe.includes(T), f = Y >= 0 && le[Y] ? `option-${Y}` : "";
  return d`
    <div
      class="biz-dropdown ${a} ${s} ${m ? "disabled" : ""} ${v ? "readonly" : ""} ${z ? "error" : ""} ${P ? "focused" : ""} ${x ? "open" : ""} ${D ? "full-width" : ""}"
      @focusin=${Me}
      @focusout=${ze}
    >
      <div class="label-wrapper">
        <slot name="label-slot"></slot>
      </div>

      <div
        class="trigger-control"
        role="combobox"
        aria-expanded=${x ? "true" : "false"}
        aria-haspopup="listbox"
        aria-controls="dropdown-popover"
        aria-activedescendant=${f}
        aria-required=${h ? "true" : "false"}
        aria-disabled=${m ? "true" : "false"}
        tabindex=${m ? "-1" : "0"}
        @click=${re}
        @keydown=${ce}
      >
        <span class="prefix-icon">
          <slot name="prefix-slot"></slot>
        </span>

        <div class="value-container">
          ${n && x ? d`
                <input
                  type="text"
                  class="filter-input"
                  .value=${W}
                  placeholder=${ae && r === "single" ? "" : c}
                  ?disabled=${m}
                  ?readonly=${v}
                  @input=${fe}
                  @keydown=${ye}
                />
              ` : Ee()}
        </div>

        <div class="suffix-actions">
          ${p && ae && !m && !v ? d`
                <button
                  type="button"
                  class="clear-btn"
                  aria-label="Clear value"
                  @click=${_e}
                >
                  &times;
                </button>
              ` : null}

          ${u ? d`<span class="spinner" aria-hidden="true"></span>` : d`
                <span class="arrow-icon" aria-hidden="true">
                  <slot name="suffix-slot">&#9660;</slot>
                </span>
              `}
        </div>
      </div>

      <div
        id="dropdown-popover"
        class="popover ${x ? "open" : ""}"
        role="listbox"
        aria-multiselectable=${r === "multi" ? "true" : "false"}
      >
        <div class="popover-header">
          <slot name="header-slot"></slot>
        </div>

        <div class="options-container">
          ${le.length === 0 ? d`
                <div class="empty-state">
                  <slot name="empty-slot">검색 결과가 없습니다.</slot>
                </div>
              ` : qe(le, (T) => T.value, (T, y) => {
    const F = Ae(T.value);
    return d`
                    <div
                      id="option-${y}"
                      class="option-item ${F ? "selected" : ""} ${y === Y ? "active" : ""} ${T.disabled ? "disabled" : ""}"
                      role="option"
                      aria-selected=${F ? "true" : "false"}
                      aria-disabled=${T.disabled ? "true" : "false"}
                      @click=${() => !T.disabled && xe(T, y)}
                    >
                      <slot name="option-slot" .option=${T}>
                        ${r === "multi" ? d`<input type="checkbox" .checked=${F} tabindex="-1" ?disabled=${T.disabled} />` : null}
                        <span class="option-label">${T.label}</span>
                      </slot>
                    </div>
                  `;
  })}
        </div>

        <div class="popover-footer">
          <slot name="footer-slot"></slot>
        </div>
      </div>

      <div class="helper-text-wrapper">
        <slot name="helper-text-slot"></slot>
      </div>

      <div class="sr-only" aria-live="polite">
        ${x ? `${le.length}개의 옵션이 있습니다.` : ""}
      </div>
    </div>
  `;
}, I = class extends _ {
  constructor(...t) {
    super(...t), this.value = null, this.options = [], this.mode = "single", this.variant = "outlined", this.size = "medium", this.filterable = !1, this.placeholder = "선택하세요", this.clearable = !1, this.loading = !1, this.required = !1, this.readonly = !1, this.disabled = !1, this.error = !1, this.fullWidth = !1, this.isOpen = !1, this.filterKeyword = "", this.activeIndex = -1, this.focused = !1, this.handleDocumentClick = (i) => {
      i.composedPath().includes(this) || this.closePopover();
    }, this.handleTriggerClick = (i) => {
      i.stopPropagation(), !(this.disabled || this.readonly) && this.toggleDropdownPopover();
    }, this.handleTriggerKeyDown = (i) => {
      if (this.disabled || this.readonly) return;
      const r = this.getFilteredOptions();
      switch (i.key) {
        case "ArrowDown":
          i.preventDefault(), this.isOpen ? this.activeIndex = (this.activeIndex + 1) % r.length : (this.openPopover(), this.activeIndex = 0);
          break;
        case "ArrowUp":
          i.preventDefault(), this.isOpen ? this.activeIndex = (this.activeIndex - 1 + r.length) % r.length : (this.openPopover(), this.activeIndex = r.length - 1);
          break;
        case "Enter":
          if (i.preventDefault(), this.isOpen && this.activeIndex >= 0 && r[this.activeIndex]) {
            const a = r[this.activeIndex];
            a.disabled || this.selectOption(a);
          } else this.toggleDropdownPopover();
          break;
        case "Escape":
          i.preventDefault(), this.closePopover();
          break;
        case "Tab":
          this.closePopover();
          break;
        case "Backspace":
          if (this.mode === "multi" && this.filterable && this.filterKeyword === "" && Array.isArray(this.value) && this.value.length > 0) {
            const a = this.value[this.value.length - 1];
            this.removeTag(a);
          }
      }
    }, this.handleFilterInput = (i) => {
      const r = i.target;
      this.filterKeyword = r.value, this.activeIndex = -1, this.dispatchEvent(new CustomEvent("search", {
        detail: { keyword: this.filterKeyword },
        bubbles: !0,
        composed: !0
      }));
    }, this.handleFilterKeyDown = (i) => {
      this.handleTriggerKeyDown(i);
    }, this.handleOptionClick = (i, r) => {
      this.activeIndex = r, this.selectOption(i);
    }, this.handleClearClick = (i) => {
      i.stopPropagation(), !(this.disabled || this.readonly) && (this.value = this.mode === "multi" ? [] : null, this.filterKeyword = "", this.dispatchEvent(new CustomEvent("clear", {
        bubbles: !0,
        composed: !0
      })), this.dispatchEvent(new CustomEvent("change", {
        detail: {
          value: this.value,
          selectedOption: null
        },
        bubbles: !0,
        composed: !0
      })));
    }, this.handleTagRemove = (i, r) => {
      i.stopPropagation(), this.removeTag(r);
    }, this.handleFocus = () => {
      this.focused = !0;
    }, this.handleBlur = () => {
      this.focused = !1;
    };
  }
  static {
    this.styles = Fi;
  }
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("click", this.handleDocumentClick);
  }
  disconnectedCallback() {
    document.removeEventListener("click", this.handleDocumentClick), super.disconnectedCallback();
  }
  getFilteredOptions() {
    return this.filterable && this.filterKeyword ? this.options.filter((t) => t.label.toLowerCase().includes(this.filterKeyword.toLowerCase())) : this.options;
  }
  openPopover() {
    this.disabled || this.readonly || this.isOpen || (this.isOpen = !0, this.activeIndex = -1, this.dispatchEvent(new CustomEvent("open", {
      bubbles: !0,
      composed: !0
    })));
  }
  closePopover() {
    this.isOpen && (this.isOpen = !1, this.filterKeyword = "", this.activeIndex = -1, this.dispatchEvent(new CustomEvent("close", {
      bubbles: !0,
      composed: !0
    })));
  }
  toggleDropdownPopover() {
    this.isOpen ? this.closePopover() : this.openPopover();
  }
  selectOption(t) {
    if (!t.disabled) {
      if (this.mode === "multi") {
        const i = Array.isArray(this.value) ? [...this.value] : [], r = i.indexOf(t.value);
        r > -1 ? i.splice(r, 1) : i.push(t.value), this.value = i;
      } else
        this.value = t.value, this.closePopover();
      this.dispatchEvent(new CustomEvent("change", {
        detail: {
          value: this.value,
          selectedOption: t
        },
        bubbles: !0,
        composed: !0
      }));
    }
  }
  removeTag(t) {
    if (this.disabled || this.readonly || !Array.isArray(this.value)) return;
    const i = this.value.filter((r) => r !== t);
    this.value = i, this.dispatchEvent(new CustomEvent("tag-remove", {
      detail: { removedValue: t },
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("change", {
      detail: {
        value: this.value,
        selectedOption: null
      },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return Oi({
      value: this.value,
      options: this.options,
      mode: this.mode,
      variant: this.variant,
      size: this.size,
      filterable: this.filterable,
      placeholder: this.placeholder,
      clearable: this.clearable,
      maxTagCount: this.maxTagCount,
      loading: this.loading,
      required: this.required,
      readonly: this.readonly,
      disabled: this.disabled,
      error: this.error,
      fullWidth: this.fullWidth,
      isOpen: this.isOpen,
      filterKeyword: this.filterKeyword,
      activeIndex: this.activeIndex,
      focused: this.focused,
      onTriggerClick: this.handleTriggerClick,
      onTriggerKeyDown: this.handleTriggerKeyDown,
      onFilterInput: this.handleFilterInput,
      onFilterKeyDown: this.handleFilterKeyDown,
      onOptionClick: this.handleOptionClick,
      onClearClick: this.handleClearClick,
      onTagRemove: this.handleTagRemove,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    });
  }
};
o([l({ type: Object })], I.prototype, "value", void 0);
o([l({ type: Array })], I.prototype, "options", void 0);
o([l({ type: String })], I.prototype, "mode", void 0);
o([l({ type: String })], I.prototype, "variant", void 0);
o([l({ type: String })], I.prototype, "size", void 0);
o([l({ type: Boolean })], I.prototype, "filterable", void 0);
o([l({ type: String })], I.prototype, "placeholder", void 0);
o([l({ type: Boolean })], I.prototype, "clearable", void 0);
o([l({
  type: Number,
  attribute: "max-tag-count"
})], I.prototype, "maxTagCount", void 0);
o([l({ type: Boolean })], I.prototype, "loading", void 0);
o([l({ type: Boolean })], I.prototype, "required", void 0);
o([l({ type: Boolean })], I.prototype, "readonly", void 0);
o([l({ type: Boolean })], I.prototype, "disabled", void 0);
o([l({ type: Boolean })], I.prototype, "error", void 0);
o([l({
  type: Boolean,
  attribute: "full-width"
})], I.prototype, "fullWidth", void 0);
o([g()], I.prototype, "isOpen", void 0);
o([g()], I.prototype, "filterKeyword", void 0);
o([g()], I.prototype, "activeIndex", void 0);
o([g()], I.prototype, "focused", void 0);
I = o([k("biz-dropdown")], I);
var Ri = (e) => {
  const { variant: t = "dropzone", size: i = "medium", fullWidth: r = !1, disabled: a = !1, readonly: s = !1, error: n = !1, dragover: c = !1, uploading: p = !1, value: b = [], accept: u, multiple: h = !1, helperText: v, handleDragOver: m, handleDragLeave: z, handleDrop: D, handleFileSelect: x, handleTriggerClick: W, handleFileRemove: Y } = e;
  return d`
    <div
      class="biz-file-uploader variant-${t} size-${i} ${r ? "full-width" : ""} ${a ? "is-disabled" : ""} ${s ? "is-readonly" : ""} ${n ? "is-error" : ""} ${c ? "is-dragover" : ""} ${p ? "is-uploading" : ""}"
    >
      <div class="label-container">
        <slot name="label-slot"></slot>
      </div>

      <input
        type="file"
        class="hidden-input"
        ?disabled="${a || s}"
        ?multiple="${h}"
        accept="${u || ""}"
        tabindex="0"
        @change="${x}"
      />

      ${t === "button" ? d`
            <div class="trigger-button-wrapper">
              <slot name="upload-button-slot">
                <button
                  type="button"
                  class="upload-btn"
                  ?disabled="${a || s}"
                  @click="${W}"
                >
                  파일 선택
                </button>
              </slot>
            </div>
          ` : d`
            <div
              class="drop-zone"
              role="button"
              tabindex="${a ? -1 : 0}"
              aria-dropeffect="copy"
              aria-invalid="${n ? "true" : "false"}"
              @dragover="${m}"
              @dragleave="${z}"
              @drop="${D}"
              @click="${W}"
            >
              <slot name="drop-zone-content-slot">
                <div class="drop-zone-default-content">
                  <span class="drop-zone-icon">📁</span>
                  <span class="drop-zone-text">파일을 여기에 드롭하거나 클릭하여 업로드하세요</span>
                </div>
              </slot>

              <slot name="upload-button-slot"></slot>
            </div>
          `}

      ${b && b.length > 0 ? d`
            <ul class="file-list" role="list">
              ${b.map((P, re) => d`
                  <li class="file-item" aria-label="${P.name} ${P.size ? P.size + " bytes" : ""}">
                    <slot name="file-item-slot">
                      <div class="file-item-info">
                        <span class="file-name">${P.name}</span>
                        <span class="file-size">${P.size ? `${Math.round(P.size / 1024)} KB` : ""}</span>
                      </div>
                      ${P.progress !== void 0 && P.progress < 100 ? d`
                            <div class="progress-bar-container">
                              <div class="progress-bar" style="width: ${P.progress}%"></div>
                            </div>
                          ` : ""}
                      ${!s && !a ? d`
                            <button
                              type="button"
                              class="remove-btn"
                              aria-label="삭제"
                              @click="${(ce) => {
    ce.stopPropagation(), Y(P, re);
  }}"
                            >
                              ✕
                            </button>
                          ` : ""}
                    </slot>
                  </li>
                `)}
            </ul>
          ` : ""}

      <div class="helper-container">
        <slot name="helper-text-slot">
          ${v ? d`<span class="helper-text">${v}</span>` : ""}
        </slot>
      </div>
    </div>
  `;
}, Li = w`
  :host {
    display: inline-block;
    box-sizing: border-box;
    --biz-file-uploader-dropzone-padding: 24px;
    --biz-file-uploader-dropzone-min-height: 160px;
    --biz-file-uploader-border-radius: 8px;
    --biz-file-uploader-item-height: 48px;
    --biz-file-uploader-bg: #ffffff;
    --biz-file-uploader-border-color: #d1d5db;
    --biz-file-uploader-border-style: dashed;
    --biz-file-uploader-text-color: #111827;
    --biz-file-uploader-dragover-bg: #eff6ff;
    --biz-file-uploader-dragover-border-color: #2563eb;
    --biz-file-uploader-focus-ring-color: rgba(37, 99, 235, 0.2);
    --biz-file-uploader-item-bg: #f9fafb;
    --biz-file-uploader-progress-bar-bg: #2563eb;
    --biz-file-uploader-error-color: #dc2626;
    --biz-file-uploader-error-bg: #fef2f2;
    --biz-file-uploader-disabled-bg: #f3f4f6;
    --biz-file-uploader-disabled-text-color: #9ca3af;
  }

  .biz-file-uploader {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    color: var(--biz-file-uploader-text-color);
    box-sizing: border-box;
  }

  .biz-file-uploader.full-width {
    width: 100%;
  }

  .hidden-input {
    display: none;
  }

  .drop-zone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--biz-file-uploader-dropzone-padding);
    min-height: var(--biz-file-uploader-dropzone-min-height);
    background-color: var(--biz-file-uploader-bg);
    border: 2px var(--biz-file-uploader-border-style) var(--biz-file-uploader-border-color);
    border-radius: var(--biz-file-uploader-border-radius);
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;
    box-sizing: border-box;
  }

  .drop-zone:hover {
    border-color: var(--biz-file-uploader-dragover-border-color);
    background-color: var(--biz-file-uploader-dragover-bg);
  }

  .drop-zone:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--biz-file-uploader-focus-ring-color);
  }

  .drop-zone-default-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .drop-zone-icon {
    font-size: 32px;
  }

  .drop-zone-text {
    font-size: 14px;
    color: var(--biz-file-uploader-text-color);
  }

  .upload-btn {
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px solid var(--biz-file-uploader-border-color);
    background-color: var(--biz-file-uploader-bg);
    cursor: pointer;
    font-size: 14px;
  }

  .file-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .file-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--biz-file-uploader-item-height);
    padding: 0 12px;
    background-color: var(--biz-file-uploader-item-bg);
    border-radius: var(--biz-file-uploader-border-radius);
    position: relative;
    overflow: hidden;
  }

  .file-item-info {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }

  .file-name {
    font-weight: 500;
  }

  .file-size {
    font-size: 12px;
    color: var(--biz-file-uploader-disabled-text-color);
  }

  .progress-bar-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #e5e7eb;
  }

  .progress-bar {
    height: 100%;
    background-color: var(--biz-file-uploader-progress-bar-bg);
    transition: width 0.2s;
  }

  .remove-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: var(--biz-file-uploader-text-color);
    padding: 4px;
  }

  .variant-button .drop-zone {
    display: none;
  }

  .variant-compact .drop-zone {
    min-height: 80px;
    padding: 12px;
  }

  .variant-outlined {
    border-style: solid;
  }

  .variant-filled {
    background-color: var(--biz-file-uploader-item-bg);
  }

  .variant-standard {
    border-style: none;
  }

  .size-small {
    --biz-file-uploader-dropzone-min-height: 100px;
    --biz-file-uploader-dropzone-padding: 12px;
    --biz-file-uploader-item-height: 36px;
  }

  .size-medium {
    --biz-file-uploader-dropzone-min-height: 160px;
    --biz-file-uploader-dropzone-padding: 24px;
    --biz-file-uploader-item-height: 48px;
  }

  .size-large {
    --biz-file-uploader-dropzone-min-height: 220px;
    --biz-file-uploader-dropzone-padding: 32px;
    --biz-file-uploader-item-height: 56px;
  }

  .biz-file-uploader.is-dragover .drop-zone {
    background-color: var(--biz-file-uploader-dragover-bg);
    border-color: var(--biz-file-uploader-dragover-border-color);
  }

  .biz-file-uploader.is-error .drop-zone {
    border-color: var(--biz-file-uploader-error-color);
    background-color: var(--biz-file-uploader-error-bg);
  }

  .biz-file-uploader.is-disabled .drop-zone {
    background-color: var(--biz-file-uploader-disabled-bg);
    border-color: var(--biz-file-uploader-border-color);
    cursor: not-allowed;
    opacity: 0.6;
  }

  .biz-file-uploader.is-disabled .upload-btn,
  .biz-file-uploader.is-disabled .remove-btn {
    cursor: not-allowed;
    color: var(--biz-file-uploader-disabled-text-color);
  }

  .biz-file-uploader.is-readonly .drop-zone {
    cursor: default;
  }

  .biz-file-uploader.is-uploading {
    pointer-events: none;
  }

  .helper-text {
    font-size: 12px;
    color: var(--biz-file-uploader-disabled-text-color);
  }

  .biz-file-uploader.is-error .helper-text {
    color: var(--biz-file-uploader-error-color);
  }
`, R = class extends _ {
  constructor(...t) {
    super(...t), this.value = [], this.accept = null, this.multiple = !1, this.maxSize = null, this.maxCount = null, this.autoUpload = !0, this.disabled = !1, this.readonly = !1, this.error = !1, this.variant = "dropzone", this.size = "medium", this.fullWidth = !1, this.helperText = "", this.dragover = !1, this.uploading = !1;
  }
  static {
    this.styles = Li;
  }
  handleTriggerClick() {
    this.disabled || this.readonly || this.fileInput?.click();
  }
  handleDragOver(t) {
    t.preventDefault(), t.stopPropagation(), !(this.disabled || this.readonly) && (this.dragover = !0);
  }
  handleDragLeave(t) {
    t.preventDefault(), t.stopPropagation(), this.dragover = !1;
  }
  handleDrop(t) {
    if (t.preventDefault(), t.stopPropagation(), this.dragover = !1, this.disabled || this.readonly) return;
    const i = t.dataTransfer?.files;
    i && i.length > 0 && this.processFiles(Array.from(i));
  }
  handleFileSelect(t) {
    const i = t.target;
    i.files && i.files.length > 0 && (this.processFiles(Array.from(i.files)), i.value = "");
  }
  processFiles(t) {
    let i = [];
    for (const a of t) {
      if (this.accept) {
        const s = this.accept.split(",").map((p) => p.trim().toLowerCase()), n = `.${a.name.split(".").pop()?.toLowerCase()}`, c = a.type.toLowerCase();
        if (!s.some((p) => p.startsWith(".") ? n === p : p.endsWith("/*") ? c.startsWith(p.replace("/*", "")) : c === p)) {
          this.dispatchEvent(new CustomEvent("error", {
            bubbles: !0,
            composed: !0,
            detail: {
              type: "extension",
              message: `허용되지 않은 파일 형식입니다: ${a.name}`
            }
          }));
          continue;
        }
      }
      if (this.maxSize && a.size > this.maxSize) {
        this.dispatchEvent(new CustomEvent("error", {
          bubbles: !0,
          composed: !0,
          detail: {
            type: "size",
            message: `파일 용량이 제한을 초과했습니다: ${a.name}`
          }
        }));
        continue;
      }
      i.push(a);
    }
    if (i.length === 0) return;
    if (this.multiple || (i = [i[0]]), this.maxCount && this.value.length + i.length > this.maxCount) {
      this.dispatchEvent(new CustomEvent("error", {
        bubbles: !0,
        composed: !0,
        detail: {
          type: "count",
          message: `최대 업로드 파일 개수(${this.maxCount}개)를 초과했습니다.`
        }
      }));
      return;
    }
    const r = this.multiple ? [...this.value, ...i] : [...i];
    this.value = r, this.dispatchEvent(new CustomEvent("file-add", {
      bubbles: !0,
      composed: !0,
      detail: { addedFiles: i }
    })), this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: { files: this.value }
    })), this.value.length === 0 && this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0,
      detail: {}
    }));
  }
  handleFileRemove(t, i) {
    if (this.disabled || this.readonly) return;
    const r = this.value.filter((a, s) => s !== i);
    this.value = r, this.dispatchEvent(new CustomEvent("file-remove", {
      bubbles: !0,
      composed: !0,
      detail: { removedFile: t }
    })), this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: { files: this.value }
    })), this.value.length === 0 && this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0,
      detail: {}
    }));
  }
  render() {
    return Ri(this);
  }
};
o([l({ type: Array })], R.prototype, "value", void 0);
o([l({ type: String })], R.prototype, "accept", void 0);
o([l({ type: Boolean })], R.prototype, "multiple", void 0);
o([l({
  type: Number,
  attribute: "max-size"
})], R.prototype, "maxSize", void 0);
o([l({
  type: Number,
  attribute: "max-count"
})], R.prototype, "maxCount", void 0);
o([l({
  type: Boolean,
  attribute: "auto-upload"
})], R.prototype, "autoUpload", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], R.prototype, "disabled", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], R.prototype, "readonly", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], R.prototype, "error", void 0);
o([l({ type: String })], R.prototype, "variant", void 0);
o([l({ type: String })], R.prototype, "size", void 0);
o([l({
  type: Boolean,
  attribute: "full-width"
})], R.prototype, "fullWidth", void 0);
o([l({
  type: String,
  attribute: "helper-text"
})], R.prototype, "helperText", void 0);
o([g()], R.prototype, "dragover", void 0);
o([g()], R.prototype, "uploading", void 0);
o([dt(".hidden-input")], R.prototype, "fileInput", void 0);
R = o([k("biz-file-uploader")], R);
var Hi = (e) => {
  const t = !!e.errorMessage, i = !!e.successMessage && !t, r = e.errorMessage || e.successMessage || e.helperText;
  return d`
    <div
      class=${M({
    "biz-form-wrapper": !0,
    [`biz-form-wrapper--${e.layout}`]: !!e.layout,
    "biz-form-wrapper--disabled": e.disabled,
    "biz-form-wrapper--focused": e.isFocused,
    "biz-form-wrapper--error": t,
    "biz-form-wrapper--success": i,
    "biz-form-wrapper--full-width": e.fullWidth
  })}
      style=${e.labelWidth ? `--ui-form-wrapper-label-width: ${e.labelWidth}` : ""}
      @focusin=${e.handleFocusIn}
      @focusout=${e.handleFocusOut}
      @keydown=${e.handleKeyDown}
    >
      <div class="biz-form-wrapper__label-area" @click=${e.handleLabelClick}>
        <slot name="label-slot">
          ${e.label ? d`
                <label class="biz-form-wrapper__label">
                  ${e.label}
                  ${e.required ? d`<span class="biz-form-wrapper__required" aria-hidden="true">*</span>` : ""}
                </label>
              ` : ""}
        </slot>
        <slot name="extra-slot"></slot>
      </div>

      <div class="biz-form-wrapper__control-container">
        <div class="biz-form-wrapper__input-area">
          <slot @slotchange=${e.handleSlotChange}></slot>
        </div>

        ${r ? d`
              <div
                id=${e.helperTextId}
                class="biz-form-wrapper__message-area"
                role=${t ? "alert" : "status"}
              >
                <slot name="helper-text-slot">
                  <span class="biz-form-wrapper__message">${r}</span>
                </slot>
              </div>
            ` : d`
              <div class="biz-form-wrapper__message-area">
                <slot name="helper-text-slot"></slot>
              </div>
            `}
      </div>
    </div>
  `;
}, Ki = w`
  :host {
    display: inline-block;
    box-sizing: border-box;

    --biz-form-wrapper-gap: 6px;
    --biz-form-wrapper-label-width: 120px;
    --biz-form-wrapper-label-margin-bottom: 4px;

    --biz-form-wrapper-label-color: #111827;
    --biz-form-wrapper-required-color: #dc2626;
    --biz-form-wrapper-helper-text-color: #6b7280;

    --biz-form-wrapper-error-color: #dc2626;
    --biz-form-wrapper-success-color: #16a34a;

    --biz-form-wrapper-disabled-opacity: 0.5;

    --biz-form-wrapper-font-size-sm: 12px;
    --biz-form-wrapper-font-size-md: 14px;
    --biz-form-wrapper-font-size-lg: 16px;
  }

  :host([full-width]),
  .biz-form-wrapper--full-width {
    display: block;
    width: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .biz-form-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--biz-form-wrapper-gap);
    width: 100%;
  }

  .biz-form-wrapper--vertical {
    flex-direction: column;
  }

  .biz-form-wrapper--horizontal {
    flex-direction: row;
    align-items: flex-start;
  }

  .biz-form-wrapper--horizontal .biz-form-wrapper__label-area {
    width: var(--biz-form-wrapper-label-width);
    flex-shrink: 0;
    margin-bottom: 0;
    padding-top: 6px;
  }

  .biz-form-wrapper--horizontal .biz-form-wrapper__control-container {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .biz-form-wrapper--inline {
    flex-direction: row;
    align-items: center;
    gap: var(--biz-form-wrapper-gap);
  }

  .biz-form-wrapper--inline .biz-form-wrapper__control-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--biz-form-wrapper-gap);
  }

  .biz-form-wrapper--inline .biz-form-wrapper__message-area {
    margin-top: 0;
  }

  .biz-form-wrapper__label-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--biz-form-wrapper-label-margin-bottom);
  }

  .biz-form-wrapper__label {
    font-size: var(--biz-form-wrapper-font-size-md);
    font-weight: 500;
    color: var(--biz-form-wrapper-label-color);
    cursor: pointer;
  }

  .biz-form-wrapper__required {
    color: var(--biz-form-wrapper-required-color);
    margin-left: 2px;
  }

  .biz-form-wrapper__input-area {
    position: relative;
    width: 100%;
  }

  .biz-form-wrapper__message-area {
    margin-top: 4px;
    font-size: var(--biz-form-wrapper-font-size-sm);
    color: var(--biz-form-wrapper-helper-text-color);
  }

  .biz-form-wrapper--error .biz-form-wrapper__message-area {
    color: var(--biz-form-wrapper-error-color);
  }

  .biz-form-wrapper--success .biz-form-wrapper__message-area {
    color: var(--biz-form-wrapper-success-color);
  }

  .biz-form-wrapper--disabled {
    opacity: var(--biz-form-wrapper-disabled-opacity);
    pointer-events: none;
  }

  .biz-form-wrapper--disabled .biz-form-wrapper__label {
    cursor: not-allowed;
  }

  .biz-form-wrapper--small {
    font-size: var(--biz-form-wrapper-font-size-sm);
  }

  .biz-form-wrapper--medium {
    font-size: var(--biz-form-wrapper-font-size-md);
  }

  .biz-form-wrapper--large {
    font-size: var(--biz-form-wrapper-font-size-lg);
  }
`, ne = class extends _ {
  constructor(...t) {
    super(...t), this.label = "", this.required = !1, this.helperText = "", this.errorMessage = "", this.successMessage = "", this.layout = "vertical", this.disabled = !1, this.labelWidth = "", this.fullWidth = !1, this.isFocused = !1, this.helperTextId = `biz-form-wrapper-helper-${Math.random().toString(36).substring(2, 9)}`;
  }
  static {
    this.styles = Ki;
  }
  firstUpdated() {
    this.updateTargetAttributes();
  }
  updated(t) {
    (t.has("errorMessage") || t.has("required") || t.has("disabled") || t.has("helperText") || t.has("successMessage")) && this.updateTargetAttributes();
  }
  getTargetElement() {
    const t = this.shadowRoot?.querySelector("slot:not([name])");
    return t && t.assignedElements({ flatten: !0 })[0] || null;
  }
  updateTargetAttributes() {
    const t = this.getTargetElement();
    if (!t) return;
    this.errorMessage ? t.setAttribute("aria-invalid", "true") : t.removeAttribute("aria-invalid"), this.required ? t.setAttribute("aria-required", "true") : t.removeAttribute("aria-required"), this.disabled ? (t.setAttribute("aria-disabled", "true"), t.setAttribute("disabled", "")) : (t.removeAttribute("aria-disabled"), t.removeAttribute("disabled"));
    const i = [];
    (this.helperText || this.errorMessage || this.successMessage) && i.push(this.helperTextId), i.length > 0 ? t.setAttribute("aria-describedby", i.join(" ")) : t.removeAttribute("aria-describedby");
  }
  handleSlotChange() {
    this.updateTargetAttributes();
  }
  handleLabelClick() {
    if (this.disabled) return;
    const t = this.getTargetElement();
    t && t.focus();
  }
  handleFocusIn() {
    this.isFocused = !0;
  }
  handleFocusOut() {
    this.isFocused = !1;
  }
  handleKeyDown(t) {
    if (!this.disabled && t.key === "Escape") {
      const i = this.getTargetElement();
      i && "value" in i && (i.value = "", i.dispatchEvent(new Event("input", {
        bubbles: !0,
        composed: !0
      })), i.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
      })), this.dispatchEvent(new CustomEvent("clear", {
        bubbles: !0,
        composed: !0,
        detail: {
          source: "keyboard",
          key: t.key
        }
      })));
    }
  }
  render() {
    return Hi(this);
  }
};
o([l({ type: String })], ne.prototype, "label", void 0);
o([l({ type: Boolean })], ne.prototype, "required", void 0);
o([l({
  type: String,
  attribute: "helper-text"
})], ne.prototype, "helperText", void 0);
o([l({
  type: String,
  attribute: "error-message"
})], ne.prototype, "errorMessage", void 0);
o([l({
  type: String,
  attribute: "success-message"
})], ne.prototype, "successMessage", void 0);
o([l({ type: String })], ne.prototype, "layout", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], ne.prototype, "disabled", void 0);
o([l({
  type: String,
  attribute: "label-width"
})], ne.prototype, "labelWidth", void 0);
o([l({
  type: Boolean,
  attribute: "full-width"
})], ne.prototype, "fullWidth", void 0);
o([g()], ne.prototype, "isFocused", void 0);
ne = o([k("biz-form-wrapper")], ne);
var Ni = w`
  :host {
    /* Layout & Sizing */
    --biz-image-upload-width-sm: 100px;
    --biz-image-upload-height-sm: 100px;
    --biz-image-upload-width-md: 160px;
    --biz-image-upload-height-md: 160px;
    --biz-image-upload-width-lg: 240px;
    --biz-image-upload-height-lg: 240px;
    --biz-image-upload-border-radius: 8px;
    --biz-image-upload-crop-modal-width: 600px;

    /* Colors - Base & Drop Zone */
    --biz-image-upload-bg: #ffffff;
    --biz-image-upload-border-color: #d1d5db;
    --biz-image-upload-border-style: dashed;
    --biz-image-upload-text-color: #111827;

    /* Colors - Hover & Overlay */
    --biz-image-upload-dragover-bg: #eff6ff;
    --biz-image-upload-dragover-border-color: #2563eb;
    --biz-image-upload-overlay-bg: rgba(0, 0, 0, 0.5);
    --biz-image-upload-overlay-btn-color: #ffffff;

    /* Colors - Crop Canvas & Mask */
    --biz-image-upload-crop-bg: #000000;
    --biz-image-upload-crop-mask-bg: rgba(0, 0, 0, 0.6);

    /* Colors - Error & Disabled */
    --biz-image-upload-error-color: #dc2626;
    --biz-image-upload-disabled-bg: #f3f4f6;
    --biz-image-upload-disabled-text-color: #9ca3af;

    display: inline-block;
    box-sizing: border-box;
    font-family: inherit;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Root Container */
  .biz-image-upload {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: var(--biz-image-upload-width, var(--biz-image-upload-width-md));
  }

  /* Label & Helper Slots */
  .biz-image-upload__label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: var(--biz-image-upload-text-color);
  }

  .biz-image-upload__helper-text {
    font-size: 12px;
    color: #6b7280;
  }

  /* Drop Zone & Main Box */
  .biz-image-upload__container {
    position: relative;
    width: var(--biz-image-upload-width, var(--biz-image-upload-width-md));
    height: var(--biz-image-upload-height, var(--biz-image-upload-height-md));
    border-radius: var(--biz-image-upload-border-radius);
    border: 2px var(--biz-image-upload-border-style) var(--biz-image-upload-border-color);
    background-color: var(--biz-image-upload-bg);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }

  .biz-image-upload__drop-zone {
    padding: 12px;
    text-align: center;
    font-size: 13px;
    color: #6b7280;
  }

  /* Variants */
  .biz-image-upload--outlined .biz-image-upload__container {
    --biz-image-upload-border-style: solid;
  }

  .biz-image-upload--filled .biz-image-upload__container {
    --biz-image-upload-bg: #f9fafb;
    --biz-image-upload-border-style: none;
  }

  .biz-image-upload--standard .biz-image-upload__container {
    --biz-image-upload-border-style: dashed;
  }

  /* Shape: Circle Mode */
  .biz-image-upload--circle .biz-image-upload__container {
    border-radius: 50%;
  }

  /* Sizes */
  .biz-image-upload--sm {
    --biz-image-upload-width: var(--biz-image-upload-width-sm);
    --biz-image-upload-height: var(--biz-image-upload-height-sm);
  }

  .biz-image-upload--md {
    --biz-image-upload-width: var(--biz-image-upload-width-md);
    --biz-image-upload-height: var(--biz-image-upload-height-md);
  }

  .biz-image-upload--lg {
    --biz-image-upload-width: var(--biz-image-upload-width-lg);
    --biz-image-upload-height: var(--biz-image-upload-height-lg);
  }

  /* States: Dragover & Focus */
  .biz-image-upload__container:hover {
    border-color: var(--biz-image-upload-dragover-border-color);
  }

  .biz-image-upload--dragover .biz-image-upload__container {
    background-color: var(--biz-image-upload-dragover-bg);
    border-color: var(--biz-image-upload-dragover-border-color);
  }

  .biz-image-upload__container:focus-visible {
    outline: 2px solid var(--biz-image-upload-dragover-border-color);
    outline-offset: 2px;
  }

  /* State: Disabled */
  .biz-image-upload--disabled .biz-image-upload__container {
    background-color: var(--biz-image-upload-disabled-bg);
    border-color: #e5e7eb;
    cursor: not-allowed;
    opacity: 0.6;
  }

  .biz-image-upload--disabled .biz-image-upload__label {
    color: var(--biz-image-upload-disabled-text-color);
  }

  /* State: Readonly */
  .biz-image-upload--readonly .biz-image-upload__container {
    cursor: default;
    border-style: solid;
  }

  /* State: Error */
  .biz-image-upload--error .biz-image-upload__container {
    border-color: var(--biz-image-upload-error-color);
  }

  .biz-image-upload--error .biz-image-upload__helper-text {
    color: var(--biz-image-upload-error-color);
  }

  /* Preview Image & Control Overlay */
  .biz-image-upload__preview-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .biz-image-upload__overlay {
    position: absolute;
    inset: 0;
    background-color: var(--biz-image-upload-overlay-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .biz-image-upload__container:hover .biz-image-upload__overlay,
  .biz-image-upload__container:focus-within .biz-image-upload__overlay {
    opacity: 1;
  }

  .biz-image-upload__overlay-btn {
    background: transparent;
    border: 1px solid var(--biz-image-upload-overlay-btn-color);
    color: var(--biz-image-upload-overlay-btn-color);
    cursor: pointer;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 12px;
  }

  .biz-image-upload__overlay-btn:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  /* Crop Modal & Canvas Dialog */
  .biz-image-upload__modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: var(--biz-image-upload-crop-mask-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .biz-image-upload__modal {
    background-color: #ffffff;
    border-radius: 8px;
    width: var(--biz-image-upload-crop-modal-width);
    max-width: 90vw;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .biz-image-upload__crop-canvas {
    width: 100%;
    height: 360px;
    background-color: var(--biz-image-upload-crop-bg);
    color: #ffffff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .biz-image-upload__crop-toolbar,
  .biz-image-upload__crop-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    padding: 12px 16px;
    background-color: #f9fafb;
    border-top: 1px solid #e5e7eb;
  }

  .biz-image-upload__btn {
    padding: 6px 12px;
    border-radius: 4px;
    border: 1px solid #d1d5db;
    background-color: #ffffff;
    cursor: pointer;
    font-size: 13px;
  }

  .biz-image-upload__btn--primary {
    background-color: #2563eb;
    color: #ffffff;
    border-color: #2563eb;
  }

  /* Hidden Native Input */
  .biz-image-upload__input {
    display: none;
  }
`, Wi = (e) => d`
    <div class="${e.rootClasses}">
      <!-- Label Slot -->
      <div class="biz-image-upload__label">
        <slot name="label-slot"></slot>
      </div>

      <!-- Main Container (Drop Zone / Preview) -->
      <div
        class="biz-image-upload__container"
        role="button"
        tabindex="${e.disabled ? -1 : 0}"
        aria-disabled="${e.disabled}"
        aria-invalid="${e.error}"
        @click=${e.onTriggerFileInput}
        @dragover=${e.onDragOver}
        @dragleave=${e.onDragLeave}
        @drop=${e.onDrop}
        @keydown=${e.onKeyDown}
      >
        <input
          type="file"
          class="biz-image-upload__input"
          accept="${e.accept}"
          ?disabled=${e.disabled || e.readonly}
          @change=${e.onFileChange}
        />

        ${e.previewUrl ? d`
              <img
                src="${e.previewUrl}"
                alt="업로드된 이미지 미리보기"
                class="biz-image-upload__preview-img"
              />
              <div class="biz-image-upload__overlay">
                <slot name="preview-mask-slot">
                  ${e.readonly ? "" : d`
                        <button
                          type="button"
                          class="biz-image-upload__overlay-btn"
                          aria-label="이미지 삭제"
                          @click=${e.onRemove}
                        >
                          삭제
                        </button>
                      `}
                </slot>
              </div>
            ` : d`
              <div class="biz-image-upload__drop-zone">
                <slot name="drop-zone-slot">
                  <span>이미지를 드래그하거나 클릭하여 업로드</span>
                </slot>
              </div>
            `}
      </div>

      <!-- Helper Text Slot -->
      <div class="biz-image-upload__helper-text">
        <slot name="helper-text-slot"></slot>
      </div>

      <!-- Screen Reader Live Region -->
      <div class="sr-only" aria-live="polite">${e.liveMessage}</div>

      <!-- Crop Modal -->
      ${e.isCropping ? d`
            <div class="biz-image-upload__modal-backdrop">
              <div
                class="biz-image-upload__modal"
                role="dialog"
                aria-modal="true"
                aria-label="이미지 자르기 편집"
              >
                <div class="biz-image-upload__crop-canvas">
                  <span>Crop Area</span>
                </div>
                <div class="biz-image-upload__crop-toolbar">
                  <slot name="crop-toolbar-slot"></slot>
                </div>
                <div class="biz-image-upload__crop-footer">
                  <slot name="crop-footer-slot">
                    <button
                      type="button"
                      class="biz-image-upload__btn"
                      @click=${e.onCropCancel}
                    >
                      취소
                    </button>
                    <button
                      type="button"
                      class="biz-image-upload__btn biz-image-upload__btn--primary"
                      ?disabled=${e.isProcessing}
                      @click=${e.onCropConfirm}
                    >
                      확인
                    </button>
                  </slot>
                </div>
              </div>
            </div>
          ` : ""}
    </div>
  `, V = class extends _ {
  constructor(...t) {
    super(...t), this.value = null, this.accept = "image/jpeg,image/png,image/webp", this.maxSize = null, this.aspectRatio = null, this.shape = "square", this.enableCrop = !0, this.outputType = "blob", this.outputQuality = 0.92, this.disabled = !1, this.readonly = !1, this.error = !1, this.isDragOver = !1, this.isCropping = !1, this.isProcessing = !1, this.previewUrl = null, this.rawFile = null, this.liveMessage = "";
  }
  static {
    this.styles = [Ni];
  }
  connectedCallback() {
    super.connectedCallback(), this.syncPreviewUrl();
  }
  willUpdate(t) {
    t.has("value") && this.syncPreviewUrl();
  }
  syncPreviewUrl() {
    if (!this.value) {
      this.previewUrl = null;
      return;
    }
    typeof this.value == "string" ? this.previewUrl = this.value : this.value instanceof File || this.value instanceof Blob ? this.previewUrl = URL.createObjectURL(this.value) : typeof this.value == "object" && "url" in this.value && (this.previewUrl = this.value.url);
  }
  triggerFileInput() {
    this.disabled || this.readonly || this.fileInput?.click();
  }
  handleFileChange(t) {
    const i = t.target;
    i.files && i.files[0] && this.processSelectedFile(i.files[0]), i.value = "";
  }
  processSelectedFile(t) {
    if (this.maxSize && t.size > this.maxSize) {
      this.error = !0, this.liveMessage = "파일 용량이 초과되었습니다.", this.dispatchEvent(new CustomEvent("error", {
        detail: {
          type: "size",
          message: "File size exceeds maximum allowed limit."
        },
        bubbles: !0,
        composed: !0
      }));
      return;
    }
    if (!this.accept.split(",").map((i) => i.trim()).some((i) => i.endsWith("/*") ? t.type.startsWith(i.replace("/*", "")) : t.type === i)) {
      this.error = !0, this.liveMessage = "지원하지 않는 파일 형식입니다.", this.dispatchEvent(new CustomEvent("error", {
        detail: {
          type: "extension",
          message: "File format is not supported."
        },
        bubbles: !0,
        composed: !0
      }));
      return;
    }
    if (this.error = !1, this.rawFile = t, this.enableCrop)
      this.isCropping = !0, this.liveMessage = "크롭 모달이 열렸습니다.", this.dispatchEvent(new CustomEvent("crop-start", {
        detail: { rawFile: t },
        bubbles: !0,
        composed: !0
      }));
    else {
      const i = URL.createObjectURL(t);
      this.previewUrl = i, this.value = t, this.liveMessage = "이미지가 성공적으로 첨부되었습니다.", this.dispatchEvent(new CustomEvent("change", {
        detail: {
          file: t,
          url: i,
          cropData: null
        },
        bubbles: !0,
        composed: !0
      }));
    }
  }
  handleDragOver(t) {
    t.preventDefault(), !(this.disabled || this.readonly) && (this.isDragOver = !0);
  }
  handleDragLeave(t) {
    t.preventDefault(), this.isDragOver = !1;
  }
  handleDrop(t) {
    t.preventDefault(), this.isDragOver = !1, !(this.disabled || this.readonly) && t.dataTransfer?.files && t.dataTransfer.files[0] && this.processSelectedFile(t.dataTransfer.files[0]);
  }
  handleRemove(t) {
    t?.stopPropagation(), !(this.disabled || this.readonly) && (this.value = null, this.previewUrl = null, this.rawFile = null, this.error = !1, this.liveMessage = "이미지가 삭제되었습니다.", this.dispatchEvent(new CustomEvent("remove", {
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0
    })));
  }
  handleCropConfirm() {
    this.isProcessing = !0;
    const t = {
      file: this.rawFile ?? void 0,
      url: this.rawFile ? URL.createObjectURL(this.rawFile) : "",
      cropData: {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        rotation: 0
      }
    };
    this.isProcessing = !1, this.isCropping = !1, this.value = t, this.previewUrl = t.url, this.liveMessage = "이미지가 성공적으로 편집되어 저장되었습니다.", this.dispatchEvent(new CustomEvent("crop-complete", {
      detail: { croppedResult: t },
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("change", {
      detail: {
        file: t.file,
        url: t.url,
        cropData: t.cropData
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleCropCancel() {
    this.isCropping = !1, this.liveMessage = "크롭 편집이 취소되었습니다.", this.dispatchEvent(new CustomEvent("crop-cancel", {
      bubbles: !0,
      composed: !0
    }));
  }
  handleKeyDown(t) {
    if (!this.disabled) {
      if (this.isCropping) {
        t.key === "Escape" && this.handleCropCancel();
        return;
      }
      (t.key === "Enter" || t.key === " ") && (t.preventDefault(), this.previewUrl || this.triggerFileInput());
    }
  }
  render() {
    const t = [
      "biz-image-upload",
      this.shape === "circle" ? "biz-image-upload--circle" : "",
      this.isDragOver ? "biz-image-upload--dragover" : "",
      this.disabled ? "biz-image-upload--disabled" : "",
      this.readonly ? "biz-image-upload--readonly" : "",
      this.error ? "biz-image-upload--error" : ""
    ].filter(Boolean).join(" ");
    return Wi({
      rootClasses: t,
      value: this.value,
      accept: this.accept,
      maxSize: this.maxSize,
      aspectRatio: this.aspectRatio,
      shape: this.shape,
      enableCrop: this.enableCrop,
      outputType: this.outputType,
      outputQuality: this.outputQuality,
      disabled: this.disabled,
      readonly: this.readonly,
      error: this.error,
      isDragOver: this.isDragOver,
      isCropping: this.isCropping,
      isProcessing: this.isProcessing,
      previewUrl: this.previewUrl,
      liveMessage: this.liveMessage,
      onTriggerFileInput: () => this.triggerFileInput(),
      onFileChange: (i) => this.handleFileChange(i),
      onDragOver: (i) => this.handleDragOver(i),
      onDragLeave: (i) => this.handleDragLeave(i),
      onDrop: (i) => this.handleDrop(i),
      onRemove: (i) => this.handleRemove(i),
      onCropConfirm: () => this.handleCropConfirm(),
      onCropCancel: () => this.handleCropCancel(),
      onKeyDown: (i) => this.handleKeyDown(i)
    });
  }
};
o([l({ type: Object })], V.prototype, "value", void 0);
o([l({ type: String })], V.prototype, "accept", void 0);
o([l({
  type: Number,
  attribute: "max-size"
})], V.prototype, "maxSize", void 0);
o([l({
  type: Number,
  attribute: "aspect-ratio"
})], V.prototype, "aspectRatio", void 0);
o([l({ type: String })], V.prototype, "shape", void 0);
o([l({
  type: Boolean,
  attribute: "enable-crop"
})], V.prototype, "enableCrop", void 0);
o([l({
  type: String,
  attribute: "output-type"
})], V.prototype, "outputType", void 0);
o([l({
  type: Number,
  attribute: "output-quality"
})], V.prototype, "outputQuality", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], V.prototype, "disabled", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], V.prototype, "readonly", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], V.prototype, "error", void 0);
o([g()], V.prototype, "isDragOver", void 0);
o([g()], V.prototype, "isCropping", void 0);
o([g()], V.prototype, "isProcessing", void 0);
o([g()], V.prototype, "previewUrl", void 0);
o([g()], V.prototype, "rawFile", void 0);
o([g()], V.prototype, "liveMessage", void 0);
o([dt('input[type="file"]')], V.prototype, "fileInput", void 0);
V = o([k("biz-image-upload")], V);
var Ui = (e) => {
  const t = e.mode === "edit", i = `편집하려면 선택하세요: ${e.value || "값 없음"}`;
  return d`
    <div
      class=${M({
    "biz-inline-edit-wrapper": !0,
    [`biz-inline-edit-wrapper--${e.variant}`]: !0,
    [`biz-inline-edit-wrapper--${e.size}`]: !0,
    "biz-inline-edit-wrapper--edit": t,
    "biz-inline-edit-wrapper--view": !t,
    "biz-inline-edit-wrapper--disabled": e.disabled,
    "biz-inline-edit-wrapper--error": e.error,
    "biz-inline-edit-wrapper--loading": e.loading
  })}
    >
      ${t ? d`
            <div
              class="biz-inline-edit-wrapper__edit"
              aria-expanded="true"
              @keydown=${e.onEditKeyDown}
              @focusout=${e.autoSave ? e.onBlur : null}
            >
              <div class="biz-inline-edit-wrapper__control">
                <slot></slot>
              </div>

              ${e.showActions ? d`
                    <div class="biz-inline-edit-wrapper__actions">
                      <slot name="actions-slot">
                        <button
                          type="button"
                          class="biz-inline-edit-wrapper__btn biz-inline-edit-wrapper__btn--save"
                          ?disabled=${e.disabled || e.loading}
                          @click=${e.onSave}
                        >
                          저장
                        </button>
                        <button
                          type="button"
                          class="biz-inline-edit-wrapper__btn biz-inline-edit-wrapper__btn--cancel"
                          ?disabled=${e.disabled || e.loading}
                          @click=${e.onCancel}
                        >
                          취소
                        </button>
                      </slot>
                    </div>
                  ` : ""}
            </div>
          ` : d`
            <div
              class="biz-inline-edit-wrapper__view"
              role="button"
              tabindex=${e.disabled ? -1 : 0}
              aria-label=${i}
              aria-expanded="false"
              aria-disabled=${e.disabled ? "true" : "false"}
              @click=${e.trigger === "click" ? e.onViewTrigger : null}
              @dblclick=${e.trigger === "dblclick" ? e.onViewTrigger : null}
              @focus=${e.trigger === "focus" ? e.onViewTrigger : null}
              @keydown=${e.onViewKeyDown}
            >
              <slot name="view-slot">
                <span class="biz-inline-edit-wrapper__view-text">
                  ${e.value || d`<span class="biz-inline-edit-wrapper__placeholder">입력하세요</span>`}
                </span>
              </slot>
            </div>
          `}
      ${e.loading ? d`
            <div class="biz-inline-edit-wrapper__spinner" aria-hidden="true">
              <span class="biz-inline-edit-wrapper__spinner-icon"></span>
            </div>
          ` : ""}
    </div>
  `;
}, qi = w`
  :host {
    /* Layout & Sizing */
    --biz-inline-edit-wrapper-min-height-sm: 32px;
    --biz-inline-edit-wrapper-min-height-md: 40px;
    --biz-inline-edit-wrapper-min-height-lg: 48px;
    --biz-inline-edit-wrapper-padding-x: 8px;
    --biz-inline-edit-wrapper-padding-y: 4px;
    --biz-inline-edit-wrapper-border-radius: 4px;

    /* Colors - Base */
    --biz-inline-edit-wrapper-view-text-color: #111827;
    --biz-inline-edit-wrapper-view-hover-bg: #f3f4f6;
    --biz-inline-edit-wrapper-edit-bg: #ffffff;
    --biz-inline-edit-wrapper-border-color: #d1d5db;

    /* Colors - Interactive States */
    --biz-inline-edit-wrapper-focus-border-color: #2563eb;
    --biz-inline-edit-wrapper-focus-ring-color: rgba(37, 99, 235, 0.2);

    /* Colors - Error & Disabled */
    --biz-inline-edit-wrapper-error-color: #dc2626;
    --biz-inline-edit-wrapper-disabled-text-color: #9ca3af;
    --biz-inline-edit-wrapper-disabled-bg: #f9fafb;

    display: inline-block;
    box-sizing: border-box;
  }

  :host([full-width]) {
    display: block;
    width: 100%;
  }

  .biz-inline-edit-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    border-radius: var(--biz-inline-edit-wrapper-border-radius);
    transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  /* Sizes */
  .biz-inline-edit-wrapper--small {
    min-height: var(--biz-inline-edit-wrapper-min-height-sm);
    font-size: 14px;
  }

  .biz-inline-edit-wrapper--medium {
    min-height: var(--biz-inline-edit-wrapper-min-height-md);
    font-size: 16px;
  }

  .biz-inline-edit-wrapper--large {
    min-height: var(--biz-inline-edit-wrapper-min-height-lg);
    font-size: 18px;
  }

  /* Variants */
  .biz-inline-edit-wrapper--standard {
    border: 1px solid transparent;
  }

  .biz-inline-edit-wrapper--standard.biz-inline-edit-wrapper--view:hover {
    background-color: var(--biz-inline-edit-wrapper-view-hover-bg);
  }

  .biz-inline-edit-wrapper--outlined {
    border: 1px solid var(--biz-inline-edit-wrapper-border-color);
  }

  .biz-inline-edit-wrapper--outlined.biz-inline-edit-wrapper--view:hover {
    background-color: var(--biz-inline-edit-wrapper-view-hover-bg);
  }

  .biz-inline-edit-wrapper--ghost {
    border: 1px dashed var(--biz-inline-edit-wrapper-border-color);
    background-color: transparent;
  }

  .biz-inline-edit-wrapper--ghost.biz-inline-edit-wrapper--view:hover {
    border-style: solid;
    background-color: var(--biz-inline-edit-wrapper-view-hover-bg);
  }

  /* View & Edit Container Layout */
  .biz-inline-edit-wrapper__view {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: var(--biz-inline-edit-wrapper-padding-y) var(--biz-inline-edit-wrapper-padding-x);
    color: var(--biz-inline-edit-wrapper-view-text-color);
    cursor: pointer;
    box-sizing: border-box;
    outline: none;
    border-radius: var(--biz-inline-edit-wrapper-border-radius);
  }

  .biz-inline-edit-wrapper__view:focus-visible {
    border-color: var(--biz-inline-edit-wrapper-focus-border-color);
    box-shadow: 0 0 0 3px var(--biz-inline-edit-wrapper-focus-ring-color);
  }

  .biz-inline-edit-wrapper__edit {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: var(--biz-inline-edit-wrapper-padding-y) var(--biz-inline-edit-wrapper-padding-x);
    background-color: var(--biz-inline-edit-wrapper-edit-bg);
    box-sizing: border-box;
    border-radius: var(--biz-inline-edit-wrapper-border-radius);
  }

  .biz-inline-edit-wrapper__control {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .biz-inline-edit-wrapper__actions {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  /* Placeholder */
  .biz-inline-edit-wrapper__placeholder {
    color: var(--biz-inline-edit-wrapper-disabled-text-color);
    font-style: italic;
  }

  /* Buttons */
  .biz-inline-edit-wrapper__btn {
    padding: 4px 8px;
    font-size: 12px;
    border-radius: var(--biz-inline-edit-wrapper-border-radius);
    border: 1px solid var(--biz-inline-edit-wrapper-border-color);
    cursor: pointer;
    background-color: #ffffff;
  }

  .biz-inline-edit-wrapper__btn--save {
    background-color: var(--biz-inline-edit-wrapper-focus-border-color);
    color: #ffffff;
    border-color: var(--biz-inline-edit-wrapper-focus-border-color);
  }

  /* States */
  .biz-inline-edit-wrapper--disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: var(--biz-inline-edit-wrapper-disabled-bg);
  }

  .biz-inline-edit-wrapper--disabled .biz-inline-edit-wrapper__view {
    cursor: not-allowed;
    color: var(--biz-inline-edit-wrapper-disabled-text-color);
  }

  .biz-inline-edit-wrapper--error {
    border-color: var(--biz-inline-edit-wrapper-error-color) !important;
  }

  .biz-inline-edit-wrapper--loading {
    pointer-events: none;
    opacity: 0.8;
  }

  .biz-inline-edit-wrapper__spinner {
    position: absolute;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .biz-inline-edit-wrapper__spinner-icon {
    width: 16px;
    height: 16px;
    border: 2px solid var(--biz-inline-edit-wrapper-border-color);
    border-top-color: var(--biz-inline-edit-wrapper-focus-border-color);
    border-radius: 50%;
    animation: biz-inline-edit-spin 0.8s linear infinite;
  }

  @keyframes biz-inline-edit-spin {
    to {
      transform: rotate(360deg);
    }
  }
`, X = class extends _ {
  constructor(...t) {
    super(...t), this.value = "", this.mode = "view", this.trigger = "click", this.variant = "standard", this.size = "medium", this.showActions = !1, this.autoSave = !0, this.disabled = !1, this.error = !1, this.loading = !1, this.fullWidth = !1, this._oldValue = "", this._handleViewTrigger = () => {
      this.disabled || this.loading || (this.mode = "edit");
    }, this._handleViewKeyDown = (i) => {
      this.disabled || this.loading || (i.key === "Enter" || i.key === " ") && (i.preventDefault(), this.mode = "edit");
    }, this._handleEditKeyDown = (i) => {
      i.key === "Enter" ? (i.preventDefault(), this._triggerSave()) : i.key === "Escape" && (i.preventDefault(), this._triggerCancel());
    }, this._handleBlur = (i) => {
      if (!this.autoSave || this.mode !== "edit") return;
      const r = i.relatedTarget;
      r && this.contains(r) || this._triggerSave();
    }, this._triggerSave = () => {
      const i = this.shadowRoot?.querySelector("slot:not([name])");
      if (i) {
        const r = i.assignedElements({ flatten: !0 });
        if (r.length > 0) {
          const a = r[0];
          a && "value" in a && (this.value = a.value);
        }
      }
      this.dispatchEvent(new CustomEvent("save", {
        detail: {
          value: this.value,
          oldValue: this._oldValue
        },
        bubbles: !0,
        composed: !0
      })), this.mode = "view";
    }, this._triggerCancel = () => {
      this.value = this._oldValue, this.dispatchEvent(new CustomEvent("cancel", {
        detail: { value: this.value },
        bubbles: !0,
        composed: !0
      })), this.mode = "view";
    };
  }
  static {
    this.styles = qi;
  }
  updated(t) {
    t.has("mode") && (this.mode === "edit" && (this._oldValue = this.value, this.updateComplete.then(() => {
      this._focusEditControl();
    })), this.dispatchEvent(new CustomEvent("mode-change", {
      detail: { mode: this.mode },
      bubbles: !0,
      composed: !0
    })));
  }
  _focusEditControl() {
    const t = this.shadowRoot?.querySelector("slot:not([name])");
    if (t) {
      const i = t.assignedElements({ flatten: !0 });
      if (i.length > 0) {
        const r = i[0];
        if (typeof r.focus == "function") {
          r.focus();
          return;
        }
      }
    }
    this.shadowRoot?.querySelector(".biz-inline-edit-wrapper__control")?.focus();
  }
  render() {
    return Ui({
      value: this.value,
      mode: this.mode,
      trigger: this.trigger,
      variant: this.variant,
      size: this.size,
      showActions: this.showActions,
      autoSave: this.autoSave,
      disabled: this.disabled,
      error: this.error,
      loading: this.loading,
      onViewTrigger: this._handleViewTrigger,
      onViewKeyDown: this._handleViewKeyDown,
      onEditKeyDown: this._handleEditKeyDown,
      onBlur: this._handleBlur,
      onSave: this._triggerSave,
      onCancel: this._triggerCancel
    });
  }
};
o([l({ type: String })], X.prototype, "value", void 0);
o([l({ type: String })], X.prototype, "mode", void 0);
o([l({ type: String })], X.prototype, "trigger", void 0);
o([l({ type: String })], X.prototype, "variant", void 0);
o([l({ type: String })], X.prototype, "size", void 0);
o([l({
  type: Boolean,
  attribute: "show-actions"
})], X.prototype, "showActions", void 0);
o([l({
  type: Boolean,
  attribute: "auto-save"
})], X.prototype, "autoSave", void 0);
o([l({ type: Boolean })], X.prototype, "disabled", void 0);
o([l({ type: Boolean })], X.prototype, "error", void 0);
o([l({ type: Boolean })], X.prototype, "loading", void 0);
o([l({
  type: Boolean,
  attribute: "full-width",
  reflect: !0
})], X.prototype, "fullWidth", void 0);
o([g()], X.prototype, "_oldValue", void 0);
X = o([k("biz-inline-edit-wrapper")], X);
var ji = (e) => {
  const t = e.type === "ipv6" ? 8 : 4, i = e.type === "ipv6" ? ":" : ".", r = e.type === "ipv6" ? 4 : 3, a = [];
  for (let n = 0; n < t; n++) {
    const c = e.segments[n] || "", p = `${e.type === "ipv6" ? "IPv6" : "IP"} 주소 세그먼트 ${n + 1}/${t}`;
    a.push(d`
      <input
        type="text"
        class="biz-ip-address-input__segment"
        data-index="${n}"
        .value="${c}"
        maxlength="${r}"
        ?disabled="${e.disabled}"
        ?readonly="${e.readonly}"
        aria-invalid="${e.error}" 
        aria-required="${e.required}"
        aria-label="${p}"
        @input="${(b) => e.onSegmentInput(n, b)}"
        @keydown="${(b) => e.onSegmentKeyDown(n, b)}"
        @paste="${(b) => e.onSegmentPaste(n, b)}"
        @focus="${(b) => e.onSegmentFocus(n, b)}"
        @blur="${(b) => e.onSegmentBlur(n, b)}"
      />
    `), n < t - 1 && a.push(d`
        <span class="biz-ip-address-input__separator" aria-hidden="true">
          <slot name="separator-slot">${i}</slot>
        </span>
      `);
  }
  const s = [
    "biz-ip-address-input",
    `biz-ip-address-input--${e.variant || "outlined"}`,
    `biz-ip-address-input--${e.size || "medium"}`,
    `biz-ip-address-input--${e.type || "ipv4"}`,
    e.disabled ? "biz-ip-address-input--disabled" : "",
    e.readonly ? "biz-ip-address-input--readonly" : "",
    e.error ? "biz-ip-address-input--error" : "",
    e.fullWidth ? "biz-ip-address-input--full-width" : ""
  ].filter(Boolean).join(" ");
  return d`
    <div class="${s}" role="group" aria-label="IP 주소 입력">
      <div class="biz-ip-address-input__label-area">
        <slot name="label-slot">
          ${e.label ? d`<label class="biz-ip-address-input__label">${e.label}</label>` : ""}
        </slot>
      </div>

      <div class="biz-ip-address-input__field">
        <slot name="prefix-slot"></slot>
        <div class="biz-ip-address-input__segments">
          ${a}
        </div>
        <slot name="suffix-slot"></slot>
      </div>

      <div class="biz-ip-address-input__helper-area" id="helper-text">
        <slot name="helper-text-slot">
          ${e.helperText ? d`<span class="biz-ip-address-input__helper-text">${e.helperText}</span>` : ""}
        </slot>
      </div>
    </div>
  `;
}, Yi = w`
  :host {
    /* Layout & Sizing Tokens */
    --biz-ip-address-input-height-sm: 32px;
    --biz-ip-address-input-height-md: 40px;
    --biz-ip-address-input-height-lg: 48px;
    --biz-ip-address-input-padding-x: 8px;
    --biz-ip-address-input-padding-y: 4px;
    --biz-ip-address-input-border-radius: 4px;
    --biz-ip-address-input-segment-width-ipv4: 40px;
    --biz-ip-address-input-segment-width-ipv6: 52px;

    /* Colors - Base */
    --biz-ip-address-input-bg-color: #ffffff;
    --biz-ip-address-input-border-color: #d1d5db;
    --biz-ip-address-input-text-color: #111827;
    --biz-ip-address-input-separator-color: #6b7280;

    /* Colors - Interactive States */
    --biz-ip-address-input-hover-border-color: #9ca3af;
    --biz-ip-address-input-focus-border-color: #2563eb;
    --biz-ip-address-input-focus-ring-color: rgba(37, 99, 235, 0.2);

    /* Colors - Error & Disabled */
    --biz-ip-address-input-error-color: #dc2626;
    --biz-ip-address-input-disabled-bg-color: #f3f4f6;
    --biz-ip-address-input-disabled-text-color: #9ca3af;

    display: inline-block;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    box-sizing: border-box;
  }

  :host([full-width]),
  .biz-ip-address-input--full-width {
    display: block;
    width: 100%;
  }

  .biz-ip-address-input {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: fit-content;
  }

  .biz-ip-address-input--full-width {
    width: 100%;
  }

  /* Field Container */
  .biz-ip-address-input__field {
    display: inline-flex;
    align-items: center;
    background-color: var(--biz-ip-address-input-bg-color);
    border-radius: var(--biz-ip-address-input-border-radius);
    padding: var(--biz-ip-address-input-padding-y) var(--biz-ip-address-input-padding-x);
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
    box-sizing: border-box;
  }

  /* Variants */
  .biz-ip-address-input--outlined .biz-ip-address-input__field {
    border: 1px solid var(--biz-ip-address-input-border-color);
  }

  .biz-ip-address-input--filled .biz-ip-address-input__field {
    background-color: var(--biz-ip-address-input-disabled-bg-color);
    border: 1px solid transparent;
    border-bottom: 1px solid var(--biz-ip-address-input-border-color);
  }

  .biz-ip-address-input--standard .biz-ip-address-input__field {
    border: none;
    border-bottom: 1px solid var(--biz-ip-address-input-border-color);
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
    background-color: transparent;
  }

  /* Sizes */
  .biz-ip-address-input--small .biz-ip-address-input__field {
    height: var(--biz-ip-address-input-height-sm);
    font-size: 12px;
  }

  .biz-ip-address-input--medium .biz-ip-address-input__field {
    height: var(--biz-ip-address-input-height-md);
    font-size: 14px;
  }

  .biz-ip-address-input--large .biz-ip-address-input__field {
    height: var(--biz-ip-address-input-height-lg);
    font-size: 16px;
  }

  /* Segments Layout */
  .biz-ip-address-input__segments {
    display: flex;
    align-items: center;
  }

  /* Inputs & Separator */
  .biz-ip-address-input__segment {
    border: none;
    outline: none;
    background: transparent;
    text-align: center;
    color: var(--biz-ip-address-input-text-color);
    font-family: inherit;
    font-size: inherit;
    padding: 0;
    margin: 0;
  }

  .biz-ip-address-input--ipv4 .biz-ip-address-input__segment {
    width: var(--biz-ip-address-input-segment-width-ipv4);
  }

  .biz-ip-address-input--ipv6 .biz-ip-address-input__segment {
    width: var(--biz-ip-address-input-segment-width-ipv6);
  }

  .biz-ip-address-input__separator {
    color: var(--biz-ip-address-input-separator-color);
    user-select: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  /* Hover State */
  .biz-ip-address-input:hover:not(.biz-ip-address-input--disabled):not(.biz-ip-address-input--error) .biz-ip-address-input__field {
    border-color: var(--biz-ip-address-input-hover-border-color);
  }

  /* Focus States */
  .biz-ip-address-input__field:focus-within {
    border-color: var(--biz-ip-address-input-focus-border-color);
    box-shadow: 0 0 0 3px var(--biz-ip-address-input-focus-ring-color);
  }

  /* Error State */
  .biz-ip-address-input--error .biz-ip-address-input__field {
    border-color: var(--biz-ip-address-input-error-color);
  }

  .biz-ip-address-input--error .biz-ip-address-input__field:focus-within {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
  }

  .biz-ip-address-input--error .biz-ip-address-input__helper-text {
    color: var(--biz-ip-address-input-error-color);
  }

  /* Disabled State */
  .biz-ip-address-input--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .biz-ip-address-input--disabled .biz-ip-address-input__field {
    background-color: var(--biz-ip-address-input-disabled-bg-color);
    border-color: var(--biz-ip-address-input-border-color);
  }

  .biz-ip-address-input--disabled .biz-ip-address-input__segment {
    color: var(--biz-ip-address-input-disabled-text-color);
    cursor: not-allowed;
  }

  /* Readonly State */
  .biz-ip-address-input--readonly .biz-ip-address-input__field {
    background-color: var(--biz-ip-address-input-disabled-bg-color);
  }

  /* Labels & Helper Text */
  .biz-ip-address-input__label {
    font-size: 14px;
    font-weight: 500;
    color: var(--biz-ip-address-input-text-color);
  }

  .biz-ip-address-input__helper-text {
    font-size: 12px;
    color: var(--biz-ip-address-input-separator-color);
  }
`, G = class extends _ {
  constructor(...t) {
    super(...t), this.value = "", this.type = "ipv4", this.variant = "outlined", this.size = "medium", this.autoFocusNext = !0, this.required = !1, this.readonly = !1, this.disabled = !1, this.error = !1, this.fullWidth = !1, this.label = "", this.helperText = "", this.segments = [], this.isFocused = !1, this.handleSegmentInput = (i, r) => {
      if (this.disabled || this.readonly) return;
      const a = r.target;
      let s = a.value;
      this.type === "ipv4" ? (s = s.replace(/[^0-9]/g, ""), s !== "" && parseInt(s, 10) > 255 && (s = "255")) : s = s.replace(/[^0-9a-fA-F]/g, ""), a.value = s;
      const n = [...this.segments];
      n[i] = s, this.segments = n, this.updateValueFromSegments(), this.dispatchEvent(new CustomEvent("input", {
        detail: {
          value: this.value,
          segments: [...this.segments]
        },
        bubbles: !0,
        composed: !0
      }));
      const c = this.type === "ipv6" ? 4 : 3;
      this.autoFocusNext && s.length === c && i < this.segments.length - 1 && this.focusSegment(i + 1);
    }, this.handleSegmentKeyDown = (i, r) => {
      if (this.disabled || this.readonly) return;
      const a = r.target, s = this.type === "ipv6" ? ":" : ".";
      if (r.key === s || r.key === "Dot" || r.key === "Decimal" || this.type === "ipv4" && r.key === ".") {
        r.preventDefault(), this.autoFocusNext && i < this.segments.length - 1 && this.focusSegment(i + 1);
        return;
      }
      if (r.key === "ArrowRight") {
        a.selectionStart === a.value.length && i < this.segments.length - 1 && (r.preventDefault(), this.focusSegment(i + 1, "start"));
        return;
      }
      if (r.key === "ArrowLeft") {
        a.selectionStart === 0 && i > 0 && (r.preventDefault(), this.focusSegment(i - 1, "end"));
        return;
      }
      if (r.key === "Backspace" && a.value === "" && i > 0) {
        r.preventDefault();
        const n = this.getSegmentInput(i - 1);
        if (n) {
          n.focus();
          const c = n.value;
          if (c.length > 0) {
            const p = c.slice(0, -1);
            n.value = p;
            const b = [...this.segments];
            b[i - 1] = p, this.segments = b, this.updateValueFromSegments(), this.dispatchEvent(new CustomEvent("input", {
              detail: {
                value: this.value,
                segments: [...this.segments]
              },
              bubbles: !0,
              composed: !0
            }));
          }
        }
      }
    }, this.handleSegmentPaste = (i, r) => {
      if (this.disabled || this.readonly) return;
      r.preventDefault();
      const a = r.clipboardData?.getData("text") || "", s = this.type === "ipv6" ? ":" : ".", n = a.trim().split(s).map((b) => {
        if (this.type === "ipv4") {
          const u = b.replace(/[^0-9]/g, "").slice(0, 3);
          return u ? parseInt(u, 10) > 255 ? "255" : u : "";
        } else return b.replace(/[^0-9a-fA-F]/g, "").slice(0, 4);
      }), c = [...this.segments];
      let p = i;
      for (let b = 0; b < n.length; b++) {
        const u = i + b;
        u < c.length && (c[u] = n[b], p = u);
      }
      this.segments = c, this.updateValueFromSegments(), this.dispatchEvent(new CustomEvent("paste", {
        detail: {
          pastedValue: a,
          parsedSegments: [...this.segments]
        },
        bubbles: !0,
        composed: !0
      })), this.dispatchEvent(new CustomEvent("input", {
        detail: {
          value: this.value,
          segments: [...this.segments]
        },
        bubbles: !0,
        composed: !0
      })), this.focusSegment(p, "end");
    }, this.handleSegmentFocus = (i, r) => {
      this.isFocused || (this.isFocused = !0, this.dispatchEvent(new CustomEvent("focus", {
        detail: r,
        bubbles: !0,
        composed: !0
      })));
    }, this.handleSegmentBlur = (i, r) => {
      requestAnimationFrame(() => {
        const a = this.shadowRoot?.activeElement;
        a && a.classList.contains("biz-ip-address-input__segment") || (this.isFocused = !1, this.dispatchEvent(new CustomEvent("change", {
          detail: {
            value: this.value,
            segments: [...this.segments]
          },
          bubbles: !0,
          composed: !0
        })), this.dispatchEvent(new CustomEvent("blur", {
          detail: r,
          bubbles: !0,
          composed: !0
        })));
      });
    };
  }
  static {
    this.styles = Yi;
  }
  connectedCallback() {
    super.connectedCallback(), this.updateSegmentsFromValue();
  }
  willUpdate(t) {
    (t.has("value") || t.has("type")) && this.updateSegmentsFromValue();
  }
  updateSegmentsFromValue() {
    const t = this.type === "ipv6" ? 8 : 4, i = this.type === "ipv6" ? ":" : ".";
    if (this.value) {
      const r = this.value.split(i);
      this.segments = Array.from({ length: t }, (a, s) => r[s] || "");
    } else this.segments = Array.from({ length: t }, () => "");
  }
  updateValueFromSegments() {
    const t = this.type === "ipv6" ? ":" : ".";
    this.value = this.segments.join(t);
  }
  clear() {
    this.segments = this.segments.map(() => ""), this.updateValueFromSegments(), this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("input", {
      detail: {
        value: this.value,
        segments: [...this.segments]
      },
      bubbles: !0,
      composed: !0
    }));
  }
  getSegmentInput(t) {
    return this.shadowRoot?.querySelector(`input[data-index="${t}"]`) || null;
  }
  focusSegment(t, i) {
    const r = this.getSegmentInput(t);
    if (r) {
      if (r.focus(), i === "start") r.setSelectionRange(0, 0);
      else if (i === "end") {
        const a = r.value.length;
        r.setSelectionRange(a, a);
      }
    }
  }
  render() {
    return ji({
      value: this.value,
      type: this.type,
      variant: this.variant,
      size: this.size,
      autoFocusNext: this.autoFocusNext,
      required: this.required,
      readonly: this.readonly,
      disabled: this.disabled,
      error: this.error,
      fullWidth: this.fullWidth,
      segments: this.segments,
      helperText: this.helperText,
      label: this.label,
      onSegmentInput: this.handleSegmentInput,
      onSegmentKeyDown: this.handleSegmentKeyDown,
      onSegmentPaste: this.handleSegmentPaste,
      onSegmentFocus: this.handleSegmentFocus,
      onSegmentBlur: this.handleSegmentBlur
    });
  }
};
o([l({ type: String })], G.prototype, "value", void 0);
o([l({ type: String })], G.prototype, "type", void 0);
o([l({ type: String })], G.prototype, "variant", void 0);
o([l({ type: String })], G.prototype, "size", void 0);
o([l({
  type: Boolean,
  attribute: "auto-focus-next"
})], G.prototype, "autoFocusNext", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], G.prototype, "required", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], G.prototype, "readonly", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], G.prototype, "disabled", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], G.prototype, "error", void 0);
o([l({
  type: Boolean,
  attribute: "full-width",
  reflect: !0
})], G.prototype, "fullWidth", void 0);
o([l({ type: String })], G.prototype, "label", void 0);
o([l({
  type: String,
  attribute: "helper-text"
})], G.prototype, "helperText", void 0);
o([g()], G.prototype, "segments", void 0);
G = o([k("biz-ip-address-input")], G);
var Gi = "important", Qi = " !important", Xi = Ke(class extends Ne {
  constructor(e) {
    if (super(e), e.type !== be.ATTRIBUTE || e.name !== "style" || e.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return Object.keys(e).reduce((t, i) => {
      const r = e[i];
      return r == null ? t : t + `${i = i.includes("-") ? i : i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};`;
    }, "");
  }
  update(e, [t]) {
    const { style: i } = e.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const r of this.ft) t[r] ?? (this.ft.delete(r), r.includes("-") ? i.removeProperty(r) : i[r] = null);
    for (const r in t) {
      const a = t[r];
      if (a != null) {
        this.ft.add(r);
        const s = typeof a == "string" && a.endsWith(Qi);
        r.includes("-") || s ? i.setProperty(r, s ? a.slice(0, -11) : a, s ? Gi : "") : i[r] = a;
      }
    }
    return se;
  }
}), at = class extends Ne {
  constructor(e) {
    if (super(e), this.it = E, e.type !== be.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === E || e == null) return this._t = void 0, this.it = e;
    if (e === se) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.it) return this._t;
    this.it = e;
    const t = [e];
    return t.raw = t, this._t = {
      _$litType$: this.constructor.resultType,
      strings: t,
      values: []
    };
  }
};
at.directiveName = "unsafeHTML", at.resultType = 1;
var Zi = Ke(at), Ji = (e) => d`
  <div
    class=${M({
  "biz-markdown-editor": !0,
  "biz-markdown-editor--split": e.mode === "split",
  "biz-markdown-editor--edit": e.mode === "edit",
  "biz-markdown-editor--preview": e.mode === "preview",
  "biz-markdown-editor--disabled": e.disabled,
  "biz-markdown-editor--readonly": e.readonly
})}
    style=${Xi({
  height: e.height,
  maxHeight: e.maxHeight || "none"
})}
  >
    <div
      role="toolbar"
      aria-label="마크다운 에디터 도구 모음"
      class="biz-markdown-editor__toolbar"
    >
      <div class="biz-markdown-editor__toolbar-group">
        <slot name="toolbar-left-slot">
          <button
            type="button"
            aria-label="굵게"
            ?disabled=${e.disabled || e.readonly}
            @click=${() => e.onToolbarAction("bold")}
          >
            B
          </button>
          <button
            type="button"
            aria-label="기울임"
            ?disabled=${e.disabled || e.readonly}
            @click=${() => e.onToolbarAction("italic")}
          >
            I
          </button>
          <button
            type="button"
            aria-label="제목"
            ?disabled=${e.disabled || e.readonly}
            @click=${() => e.onToolbarAction("heading")}
          >
            H
          </button>
          <button
            type="button"
            aria-label="링크 삽입"
            ?disabled=${e.disabled || e.readonly}
            @click=${() => e.onToolbarAction("link")}
          >
            Link
          </button>
          <button
            type="button"
            aria-label="이미지 주입"
            ?disabled=${e.disabled || e.readonly}
            @click=${() => e.onToolbarAction("image")}
          >
            Image
          </button>
          <button
            type="button"
            aria-label="목록"
            ?disabled=${e.disabled || e.readonly}
            @click=${() => e.onToolbarAction("list")}
          >
            List
          </button>
        </slot>
      </div>

      <div class="biz-markdown-editor__toolbar-group">
        <slot name="toolbar-right-slot">
          <button
            type="button"
            aria-label="분할 뷰 모드"
            class=${M({ active: e.mode === "split" })}
            ?disabled=${e.disabled}
            @click=${() => e.onModeChange("split")}
          >
            Split
          </button>
          <button
            type="button"
            aria-label="에디터 전용 모드"
            class=${M({ active: e.mode === "edit" })}
            ?disabled=${e.disabled}
            @click=${() => e.onModeChange("edit")}
          >
            Edit
          </button>
          <button
            type="button"
            aria-label="미리보기 전용 모드"
            class=${M({ active: e.mode === "preview" })}
            ?disabled=${e.disabled}
            @click=${() => e.onModeChange("preview")}
          >
            Preview
          </button>
        </slot>
      </div>
    </div>

    <div class="biz-markdown-editor__body">
      ${e.mode !== "preview" ? d`
            <div class="biz-markdown-editor__editor-container">
              <slot name="editor-header-slot"></slot>
              <textarea
                id="editor-textarea"
                class="biz-markdown-editor__textarea"
                role="textbox"
                aria-multiline="true"
                aria-label="마크다운 에디터"
                .value=${e.value}
                placeholder=${e.placeholder}
                ?autofocus=${e.autofocus}
                ?readonly=${e.readonly}
                ?disabled=${e.disabled}
                @input=${e.onInput}
                @keydown=${e.onKeyDown}
                @scroll=${e.onScroll}
                @focus=${e.onFocus}
                @blur=${e.onBlur}
                @drop=${e.onDrop}
              ></textarea>
            </div>
          ` : ""}
      ${e.mode === "split" ? d`
            <div
              role="separator"
              aria-orientation="vertical"
              aria-label="화면 분할 조절바"
              class="biz-markdown-editor__resizer"
              @mousedown=${e.onMouseDownResizer}
            ></div>
          ` : ""}
      ${e.mode !== "edit" ? d`
            <div
              class="biz-markdown-editor__preview-container"
              role="region"
              aria-label="미리보기"
              @scroll=${e.onScroll}
            >
              <slot name="preview-header-slot"></slot>
              <slot name="custom-preview-slot">
                <div class="biz-markdown-editor__preview-content">
                  ${Zi(e.parsedHtml)}
                </div>
              </slot>
            </div>
          ` : ""}
    </div>

    <div class="biz-markdown-editor__statusbar">
      <slot name="statusbar-slot">
        <span class="biz-markdown-editor__status-item">
          Ln ${e.cursorLine}, Col ${e.cursorCol}
        </span>
        <span class="biz-markdown-editor__status-item">
          Lines: ${e.lineCount}
        </span>
        <span class="biz-markdown-editor__status-item">
          Words: ${e.wordCount}
        </span>
        <span class="biz-markdown-editor__status-item">
          Chars: ${e.charCount}
        </span>
        <span class="biz-markdown-editor__status-item">
          Mode: ${e.mode}
        </span>
      </slot>
    </div>

    <div aria-live="polite" class="biz-markdown-editor__sr-only">
      현재 ${e.mode} 모드입니다.
    </div>
  </div>
`, er = w`
  :host {
    /* Layout & Sizing */
    --biz-markdown-editor-width: 100%;
    --biz-markdown-editor-height: 500px;
    --biz-markdown-editor-border-radius: 6px;
    --biz-markdown-editor-toolbar-height: 42px;
    --biz-markdown-editor-statusbar-height: 28px;

    /* Colors - Base & Panels */
    --biz-markdown-editor-bg: #ffffff;
    --biz-markdown-editor-border-color: #d1d5db;
    --biz-markdown-editor-toolbar-bg: #f9fafb;
    --biz-markdown-editor-statusbar-bg: #f3f4f6;
    --biz-markdown-editor-text-color: #111827;

    /* Colors - Editor & Syntax */
    --biz-markdown-editor-editor-bg: #ffffff;
    --biz-markdown-editor-preview-bg: #ffffff;
    --biz-markdown-editor-resizer-bg: #e5e7eb;
    --biz-markdown-editor-resizer-hover-bg: #2563eb;

    /* Colors - Focus & Active States */
    --biz-markdown-editor-focus-border-color: #2563eb;
    --biz-markdown-editor-focus-ring-color: rgba(37, 99, 235, 0.2);
    --biz-markdown-editor-toolbar-btn-hover-bg: #e5e7eb;

    /* Colors - Disabled & Readonly */
    --biz-markdown-editor-disabled-bg: #f3f4f6;
    --biz-markdown-editor-disabled-text-color: #9ca3af;
    --biz-markdown-editor-error-border-color: #dc2626;

    display: block;
    width: var(--biz-markdown-editor-width);
    box-sizing: border-box;
  }

  .biz-markdown-editor {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: var(--biz-markdown-editor-height);
    border: 1px solid var(--biz-markdown-editor-border-color);
    border-radius: var(--biz-markdown-editor-border-radius);
    background-color: var(--biz-markdown-editor-bg);
    color: var(--biz-markdown-editor-text-color);
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    box-sizing: border-box;
  }

  /* Variants */
  .biz-markdown-editor--outlined {
    border: 1px solid var(--biz-markdown-editor-border-color);
  }

  .biz-markdown-editor--filled {
    border: none;
    background-color: var(--biz-markdown-editor-toolbar-bg);
  }

  .biz-markdown-editor--standard {
    border: none;
    border-bottom: 2px solid var(--biz-markdown-editor-border-color);
    border-radius: 0;
  }

  /* Sizes */
  .biz-markdown-editor--small {
    --biz-markdown-editor-toolbar-height: 34px;
    --biz-markdown-editor-statusbar-height: 22px;
    font-size: 12px;
  }

  .biz-markdown-editor--medium {
    --biz-markdown-editor-toolbar-height: 42px;
    --biz-markdown-editor-statusbar-height: 28px;
    font-size: 14px;
  }

  .biz-markdown-editor--large {
    --biz-markdown-editor-toolbar-height: 50px;
    --biz-markdown-editor-statusbar-height: 34px;
    font-size: 16px;
  }

  /* Toolbar */
  .biz-markdown-editor__toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--biz-markdown-editor-toolbar-height);
    background-color: var(--biz-markdown-editor-toolbar-bg);
    border-bottom: 1px solid var(--biz-markdown-editor-border-color);
    padding: 0 8px;
    box-sizing: border-box;
  }

  .biz-markdown-editor__toolbar-group {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .biz-markdown-editor__toolbar button {
    background: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    font-size: inherit;
    color: var(--biz-markdown-editor-text-color);
  }

  .biz-markdown-editor__toolbar button:hover:not(:disabled) {
    background-color: var(--biz-markdown-editor-toolbar-btn-hover-bg);
  }

  .biz-markdown-editor__toolbar button.active {
    background-color: var(--biz-markdown-editor-resizer-bg);
    font-weight: bold;
  }

  /* Body & Layout Modes */
  .biz-markdown-editor__body {
    display: flex;
    flex: 1;
    min-height: 0;
    position: relative;
  }

  .biz-markdown-editor__editor-container,
  .biz-markdown-editor__preview-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    box-sizing: border-box;
  }

  .biz-markdown-editor__textarea {
    width: 100%;
    height: 100%;
    border: none;
    padding: 12px;
    resize: none;
    outline: none;
    font-family: monospace;
    font-size: inherit;
    background-color: var(--biz-markdown-editor-editor-bg);
    color: var(--biz-markdown-editor-text-color);
    box-sizing: border-box;
  }

  .biz-markdown-editor__preview-container {
    background-color: var(--biz-markdown-editor-preview-bg);
    padding: 12px;
    border-left: 1px solid var(--biz-markdown-editor-border-color);
  }

  .biz-markdown-editor--edit .biz-markdown-editor__preview-container,
  .biz-markdown-editor--preview .biz-markdown-editor__editor-container {
    display: none;
  }

  .biz-markdown-editor--preview .biz-markdown-editor__preview-container {
    border-left: none;
  }

  /* Split Resizer */
  .biz-markdown-editor__resizer {
    width: 4px;
    background-color: var(--biz-markdown-editor-resizer-bg);
    cursor: col-resize;
    user-select: none;
    transition: background-color 0.2s;
  }

  .biz-markdown-editor__resizer:hover,
  .biz-markdown-editor__resizer:active {
    background-color: var(--biz-markdown-editor-resizer-hover-bg);
  }

  /* Status Bar */
  .biz-markdown-editor__statusbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    height: var(--biz-markdown-editor-statusbar-height);
    background-color: var(--biz-markdown-editor-statusbar-bg);
    border-top: 1px solid var(--biz-markdown-editor-border-color);
    padding: 0 12px;
    font-size: 12px;
    color: var(--biz-markdown-editor-disabled-text-color);
    box-sizing: border-box;
  }

  /* States: Focus, Hover, Active, Disabled, Readonly, Error, Loading */
  .biz-markdown-editor:focus-within {
    border-color: var(--biz-markdown-editor-focus-border-color);
    box-shadow: 0 0 0 3px var(--biz-markdown-editor-focus-ring-color);
  }

  .biz-markdown-editor--disabled {
    background-color: var(--biz-markdown-editor-disabled-bg);
    color: var(--biz-markdown-editor-disabled-text-color);
    cursor: not-allowed;
    opacity: 0.7;
  }

  .biz-markdown-editor--disabled .biz-markdown-editor__textarea {
    background-color: var(--biz-markdown-editor-disabled-bg);
    cursor: not-allowed;
  }

  .biz-markdown-editor--readonly .biz-markdown-editor__textarea {
    background-color: var(--biz-markdown-editor-disabled-bg);
  }

  .biz-markdown-editor--error {
    border-color: var(--biz-markdown-editor-error-border-color);
  }

  .biz-markdown-editor--loading {
    pointer-events: none;
    opacity: 0.6;
  }

  /* Screen Reader Only */
  .biz-markdown-editor__sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`, L = class extends _ {
  constructor(...t) {
    super(...t), this.value = "", this.mode = "split", this.placeholder = "마크다운을 입력하세요...", this.syncScroll = !0, this.height = "500px", this.maxHeight = null, this.autofocus = !1, this.readonly = !1, this.disabled = !1, this.sanitize = !0, this.parsedHtml = "", this.wordCount = 0, this.charCount = 0, this.lineCount = 1, this.cursorLine = 1, this.cursorCol = 1, this.isSyncingScroll = !1;
  }
  static {
    this.styles = er;
  }
  firstUpdated() {
    this.updateParsedContent(), this.autofocus && this.shadowRoot?.querySelector("#editor-textarea")?.focus();
  }
  willUpdate(t) {
    (t.has("value") || t.has("sanitize")) && this.updateParsedContent();
  }
  parseMarkdown(t) {
    let i = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return this.sanitize || (i = t), i = i.replace(/^### (.*$)/gim, "<h3>$1</h3>").replace(/^## (.*$)/gim, "<h2>$1</h2>").replace(/^# (.*$)/gim, "<h1>$1</h1>").replace(/\*\*(.* animate?)\*\*/gim, "<b>$1</b>").replace(/\*(.* animate?)\*/gim, "<i>$1</i>").replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" referrerpolicy="no-referrer" width="400px" height="300px"/>').replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>').replace(/\n/gim, "<br />"), i;
  }
  updateParsedContent() {
    this.parsedHtml = this.parseMarkdown(this.value), this.calculateStats();
  }
  calculateStats() {
    const t = this.value || "";
    this.charCount = t.length, this.wordCount = t.trim() ? t.trim().split(/\s+/).length : 0;
    const i = t.split(`
`);
    this.lineCount = i.length;
  }
  updateCursorPosition(t) {
    const i = t.selectionStart, r = t.value.substring(0, i).split(`
`);
    this.cursorLine = r.length, this.cursorCol = r[r.length - 1].length + 1;
  }
  handleInput(t) {
    const i = t.target;
    this.value = i.value, this.updateCursorPosition(i), this.dispatchEvent(new CustomEvent("change", {
      detail: {
        markdown: this.value,
        html: this.parsedHtml
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleKeyDown(t) {
    const i = t.target, r = navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? t.metaKey : t.ctrlKey;
    if (r && t.key.toLowerCase() === "b") {
      t.preventDefault(), this.applyFormatting("**", "**");
      return;
    }
    if (r && t.key.toLowerCase() === "i") {
      t.preventDefault(), this.applyFormatting("*", "*");
      return;
    }
    if (r && t.key.toLowerCase() === "k") {
      t.preventDefault(), this.applyFormatting("[", "](url)");
      return;
    }
    if (t.key === "Tab") {
      t.preventDefault();
      const s = i.selectionStart, n = i.selectionEnd;
      this.value = this.value.substring(0, s) + "  " + this.value.substring(n), this.updateComplete.then(() => {
        i.selectionStart = i.selectionEnd = s + 2, this.updateCursorPosition(i);
      });
      return;
    }
    if (t.key === "Escape") {
      i.blur();
      return;
    }
    const a = {
      "*": "*",
      "`": "`",
      "[": "]",
      "(": ")"
    };
    if (a[t.key]) {
      const s = i.selectionStart, n = i.selectionEnd;
      if (s !== n) {
        t.preventDefault();
        const c = this.value.substring(s, n), p = a[t.key];
        this.value = this.value.substring(0, s) + t.key + c + p + this.value.substring(n), this.updateComplete.then(() => {
          i.selectionStart = s + 1, i.selectionEnd = n + 1;
        });
      }
    }
    setTimeout(() => this.updateCursorPosition(i), 0);
  }
  applyFormatting(t, i) {
    const r = this.shadowRoot?.querySelector("#editor-textarea");
    if (!r) return;
    const a = r.selectionStart, s = r.selectionEnd, n = `${t}${this.value.substring(a, s)}${i}`;
    this.value = this.value.substring(0, a) + n + this.value.substring(s), this.dispatchEvent(new CustomEvent("change", {
      detail: {
        markdown: this.value,
        html: this.parsedHtml
      },
      bubbles: !0,
      composed: !0
    })), this.updateComplete.then(() => {
      r.focus(), r.setSelectionRange(a + t.length, s + t.length), this.updateCursorPosition(r);
    });
  }
  handleToolbarAction(t) {
    switch (t) {
      case "bold":
        this.applyFormatting("**", "**");
        break;
      case "italic":
        this.applyFormatting("*", "*");
        break;
      case "heading":
        this.applyFormatting("# ", "");
        break;
      case "link":
        this.applyFormatting("[", "](https://)");
        break;
      case "image":
        this.applyFormatting("![alt](", ")");
        break;
      case "list":
        this.applyFormatting("- ", "");
    }
  }
  handleModeChange(t) {
    this.mode = t, this.dispatchEvent(new CustomEvent("mode-change", {
      detail: { mode: this.mode },
      bubbles: !0,
      composed: !0
    }));
  }
  handleScroll(t) {
    if (!this.syncScroll || this.isSyncingScroll || this.mode !== "split") return;
    const i = t.target.classList.contains("biz-markdown-editor__textarea"), r = this.shadowRoot?.querySelector(".biz-markdown-editor__textarea"), a = this.shadowRoot?.querySelector(".biz-markdown-editor__preview-container");
    !r || !a || (this.isSyncingScroll = !0, i ? a.scrollTop = r.scrollTop / (r.scrollHeight - r.clientHeight || 1) * (a.scrollHeight - a.clientHeight) : r.scrollTop = a.scrollTop / (a.scrollHeight - a.clientHeight || 1) * (r.scrollHeight - r.clientHeight), requestAnimationFrame(() => {
      this.isSyncingScroll = !1;
    }));
  }
  handleMouseDownResizer(t) {
    t.preventDefault();
    const i = this.shadowRoot?.querySelector(".biz-markdown-editor__body"), r = this.shadowRoot?.querySelector(".biz-markdown-editor__editor-container");
    if (!i || !r) return;
    const a = t.clientX, s = r.getBoundingClientRect().width, n = i.getBoundingClientRect().width, c = (b) => {
      const u = b.clientX - a, h = `${Math.max(100, Math.min(n - 100, s + u)) / n * 100}%`;
      r.style.flex = `0 0 ${h}`;
    }, p = () => {
      window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", p);
    };
    window.addEventListener("mousemove", c), window.addEventListener("mouseup", p);
  }
  handleFocus(t) {
    this.dispatchEvent(new CustomEvent("focus", {
      detail: t,
      bubbles: !0,
      composed: !0
    }));
  }
  handleBlur(t) {
    this.dispatchEvent(new CustomEvent("blur", {
      detail: t,
      bubbles: !0,
      composed: !0
    }));
  }
  handleDrop(t) {
    if (!t.dataTransfer?.files || t.dataTransfer.files.length === 0) return;
    const i = t.dataTransfer.files[0];
    if (i.type.startsWith("image/")) {
      t.preventDefault();
      const r = (a) => {
        this.applyFormatting(`![${i.name}](`, `${a})`);
      };
      this.dispatchEvent(new CustomEvent("upload-image", {
        detail: {
          file: i,
          insert: r
        },
        bubbles: !0,
        composed: !0
      }));
    }
  }
  clear() {
    this.value = "", this.updateParsedContent(), this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return Ji({
      value: this.value,
      mode: this.mode,
      placeholder: this.placeholder,
      syncScroll: this.syncScroll,
      height: this.height,
      maxHeight: this.maxHeight,
      autofocus: this.autofocus,
      readonly: this.readonly,
      disabled: this.disabled,
      sanitize: this.sanitize,
      parsedHtml: this.parsedHtml,
      wordCount: this.wordCount,
      charCount: this.charCount,
      lineCount: this.lineCount,
      cursorLine: this.cursorLine,
      cursorCol: this.cursorCol,
      onInput: this.handleInput.bind(this),
      onKeyDown: this.handleKeyDown.bind(this),
      onScroll: this.handleScroll.bind(this),
      onToolbarAction: this.handleToolbarAction.bind(this),
      onModeChange: this.handleModeChange.bind(this),
      onMouseDownResizer: this.handleMouseDownResizer.bind(this),
      onFocus: this.handleFocus.bind(this),
      onBlur: this.handleBlur.bind(this),
      onDrop: this.handleDrop.bind(this)
    });
  }
};
o([l({ type: String })], L.prototype, "value", void 0);
o([l({ type: String })], L.prototype, "mode", void 0);
o([l({ type: String })], L.prototype, "placeholder", void 0);
o([l({
  type: Boolean,
  attribute: "sync-scroll"
})], L.prototype, "syncScroll", void 0);
o([l({ type: String })], L.prototype, "height", void 0);
o([l({
  type: String,
  attribute: "max-height"
})], L.prototype, "maxHeight", void 0);
o([l({ type: Boolean })], L.prototype, "autofocus", void 0);
o([l({ type: Boolean })], L.prototype, "readonly", void 0);
o([l({ type: Boolean })], L.prototype, "disabled", void 0);
o([l({ type: Boolean })], L.prototype, "sanitize", void 0);
o([g()], L.prototype, "parsedHtml", void 0);
o([g()], L.prototype, "wordCount", void 0);
o([g()], L.prototype, "charCount", void 0);
o([g()], L.prototype, "lineCount", void 0);
o([g()], L.prototype, "cursorLine", void 0);
o([g()], L.prototype, "cursorCol", void 0);
L = o([k("biz-markdown-editor")], L);
var tr = (e) => {
  const t = e.value ? e.value.length : 0, i = e.maxlength !== void 0 && e.maxlength !== null ? `${t}/${e.maxlength}` : `${t}`;
  return d`
    <div class="biz-multiline-text-input ${e.variant || "outlined"} ${e.size || "medium"} ${e.disabled ? "disabled" : ""} ${e.readonly ? "readonly" : ""} ${e.error ? "error" : ""} ${e.loading ? "loading" : ""} ${e.fullWidth ? "full-width" : ""}">
      <div class="biz-multiline-text-input__header">
        <slot name="label-slot"></slot>
        <slot name="header-extra-slot"></slot>
      </div>
      <div class="biz-multiline-text-input__control">
        <textarea
          class="biz-multiline-text-input__textarea"
          .value="${e.value || ""}"
          placeholder="${e.placeholder || ""}"
          rows="${e.rows || 3}"
          maxlength="${e.maxlength !== void 0 && e.maxlength !== null ? e.maxlength : Re}"
          ?readonly="${e.readonly}"
          ?disabled="${e.disabled}"
          ?required="${e.required}"
          aria-invalid="${e.error ? "true" : "false"}"
          aria-required="${e.required ? "true" : "false"}"
          aria-multiline="true"
          aria-describedby="helper-text counter-text"
          style="resize: ${e.autoResize ? "none" : e.resize || "vertical"};"
          @input="${e.handleInput}"
          @change="${e.handleChange}"
          @focus="${e.handleFocus}"
          @blur="${e.handleBlur}"
        ></textarea>
      </div>
      <div class="biz-multiline-text-input__footer">
        <div id="helper-text" class="biz-multiline-text-input__helper">
          <slot name="helper-text-slot"></slot>
        </div>
        <div class="biz-multiline-text-input__footer-right">
          <slot name="footer-extra-slot"></slot>
          ${e.showCount ? d`<span id="counter-text" class="biz-multiline-text-input__counter" aria-live="polite">${i}</span>` : Re}
        </div>
      </div>
    </div>
  `;
}, ir = w`
  :host {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;

    --biz-multiline-text-input-min-height: 80px;
    --biz-multiline-text-input-padding-x: 12px;
    --biz-multiline-text-input-padding-y: 8px;
    --biz-multiline-text-input-border-radius: 4px;

    --biz-multiline-text-input-bg-color: #ffffff;
    --biz-multiline-text-input-border-color: #d1d5db;
    --biz-multiline-text-input-text-color: #111827;
    --biz-multiline-text-input-placeholder-color: #9ca3af;
    --biz-multiline-text-input-counter-color: #6b7280;

    --biz-multiline-text-input-hover-border-color: #9ca3af;
    --biz-multiline-text-input-focus-border-color: #2563eb;
    --biz-multiline-text-input-focus-ring-color: rgba(37, 99, 235, 0.2);

    --biz-multiline-text-input-error-color: #dc2626;
    --biz-multiline-text-input-disabled-bg-color: #f3f4f6;
    --biz-multiline-text-input-disabled-text-color: #9ca3af;
  }

  :host([full-width]) {
    display: block;
    width: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .biz-multiline-text-input {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    font-family: inherit;
  }

  .biz-multiline-text-input__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: var(--biz-multiline-text-input-text-color);
  }

  .biz-multiline-text-input__control {
    position: relative;
    display: flex;
    width: 100%;
  }

  .biz-multiline-text-input__textarea {
    width: 100%;
    min-height: var(--biz-multiline-text-input-min-height);
    padding: var(--biz-multiline-text-input-padding-y) var(--biz-multiline-text-input-padding-x);
    font-family: inherit;
    font-size: 14px;
    line-height: 1.5;
    color: var(--biz-multiline-text-input-text-color);
    background-color: var(--biz-multiline-text-input-bg-color);
    border: 1px solid var(--biz-multiline-text-input-border-color);
    border-radius: var(--biz-multiline-text-input-border-radius);
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  }

  .biz-multiline-text-input__textarea::placeholder {
    color: var(--biz-multiline-text-input-placeholder-color);
  }

  .biz-multiline-text-input__textarea:hover:not(:disabled):not([readonly]) {
    border-color: var(--biz-multiline-text-input-hover-border-color);
  }

  .biz-multiline-text-input__textarea:focus:not(:disabled):not([readonly]) {
    border-color: var(--biz-multiline-text-input-focus-border-color);
    box-shadow: 0 0 0 3px var(--biz-multiline-text-input-focus-ring-color);
  }

  .biz-multiline-text-input.outlined .biz-multiline-text-input__textarea {
    border: 1px solid var(--biz-multiline-text-input-border-color);
    background-color: var(--biz-multiline-text-input-bg-color);
  }

  .biz-multiline-text-input.filled .biz-multiline-text-input__textarea {
    border: 1px solid transparent;
    background-color: #f3f4f6;
  }

  .biz-multiline-text-input.filled .biz-multiline-text-input__textarea:hover:not(:disabled):not([readonly]) {
    background-color: #e5e7eb;
  }

  .biz-multiline-text-input.filled .biz-multiline-text-input__textarea:focus:not(:disabled):not([readonly]) {
    background-color: var(--biz-multiline-text-input-bg-color);
    border-color: var(--biz-multiline-text-input-focus-border-color);
  }

  .biz-multiline-text-input.standard .biz-multiline-text-input__textarea {
    border: none;
    border-bottom: 1px solid var(--biz-multiline-text-input-border-color);
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
    background-color: transparent;
  }

  .biz-multiline-text-input.standard .biz-multiline-text-input__textarea:focus:not(:disabled):not([readonly]) {
    border-bottom-color: var(--biz-multiline-text-input-focus-border-color);
    box-shadow: 0 1px 0 0 var(--biz-multiline-text-input-focus-border-color);
  }

  .biz-multiline-text-input.small .biz-multiline-text-input__textarea {
    font-size: 12px;
    --biz-multiline-text-input-padding-x: 8px;
    --biz-multiline-text-input-padding-y: 6px;
    --biz-multiline-text-input-min-height: 60px;
  }

  .biz-multiline-text-input.medium .biz-multiline-text-input__textarea {
    font-size: 14px;
    --biz-multiline-text-input-padding-x: 12px;
    --biz-multiline-text-input-padding-y: 8px;
    --biz-multiline-text-input-min-height: 80px;
  }

  .biz-multiline-text-input.large .biz-multiline-text-input__textarea {
    font-size: 16px;
    --biz-multiline-text-input-padding-x: 16px;
    --biz-multiline-text-input-padding-y: 12px;
    --biz-multiline-text-input-min-height: 100px;
  }

  .biz-multiline-text-input.disabled .biz-multiline-text-input__textarea {
    background-color: var(--biz-multiline-text-input-disabled-bg-color);
    color: var(--biz-multiline-text-input-disabled-text-color);
    cursor: not-allowed;
    resize: none;
  }

  .biz-multiline-text-input.readonly .biz-multiline-text-input__textarea {
    background-color: #f9fafb;
    cursor: default;
  }

  .biz-multiline-text-input.error .biz-multiline-text-input__textarea {
    border-color: var(--biz-multiline-text-input-error-color);
  }

  .biz-multiline-text-input.error .biz-multiline-text-input__textarea:focus {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
  }

  .biz-multiline-text-input.loading .biz-multiline-text-input__textarea {
    opacity: 0.6;
    pointer-events: none;
  }

  .biz-multiline-text-input__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 12px;
    color: var(--biz-multiline-text-input-counter-color);
    margin-top: 2px;
  }

  .biz-multiline-text-input.error .biz-multiline-text-input__helper {
    color: var(--biz-multiline-text-input-error-color);
  }

  .biz-multiline-text-input__footer-right {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
  }

  .biz-multiline-text-input__counter {
    font-size: 12px;
    color: var(--biz-multiline-text-input-counter-color);
    white-space: nowrap;
  }

  .biz-multiline-text-input.error .biz-multiline-text-input__counter {
    color: var(--biz-multiline-text-input-error-color);
  }
`, H = class extends _ {
  constructor(...t) {
    super(...t), this.value = "", this.placeholder = "", this.rows = 3, this.maxRows = 0, this.showCount = !1, this.autoResize = !1, this.resize = "vertical", this.required = !1, this.readonly = !1, this.disabled = !1, this.error = !1, this.variant = "outlined", this.size = "medium", this.fullWidth = !1;
  }
  static {
    this.styles = ir;
  }
  updated(t) {
    super.updated(t), this.autoResize && (t.has("value") || t.has("autoResize")) && this.adjustHeight();
  }
  firstUpdated() {
    this.autoResize && this.adjustHeight();
  }
  adjustHeight() {
    if (!this.textareaElement) return;
    this.textareaElement.style.height = "auto";
    let t = this.textareaElement.scrollHeight;
    if (this.maxRows > 0) {
      const i = (parseFloat(getComputedStyle(this.textareaElement).lineHeight) || 21) * this.maxRows;
      t > i ? (t = i, this.textareaElement.style.overflowY = "auto") : this.textareaElement.style.overflowY = "hidden";
    } else this.textareaElement.style.overflowY = "hidden";
    this.textareaElement.style.height = `${t}px`;
  }
  handleInput(t) {
    const i = t.target;
    this.value = i.value, this.autoResize && this.adjustHeight(), this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(t) {
    const i = t.target;
    this.value = i.value, this.dispatchEvent(new CustomEvent("change", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleFocus(t) {
    this.dispatchEvent(new FocusEvent("focus", {
      bubbles: !0,
      composed: !0,
      relatedTarget: t.relatedTarget
    }));
  }
  handleBlur(t) {
    this.dispatchEvent(new FocusEvent("blur", {
      bubbles: !0,
      composed: !0,
      relatedTarget: t.relatedTarget
    }));
  }
  handleKeyDown(t) {
    t.key === "Escape" && this.dispatchEvent(new CustomEvent("clear", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return tr(this);
  }
};
o([l({ type: String })], H.prototype, "value", void 0);
o([l({ type: String })], H.prototype, "placeholder", void 0);
o([l({ type: Number })], H.prototype, "rows", void 0);
o([l({
  type: Number,
  attribute: "max-rows"
})], H.prototype, "maxRows", void 0);
o([l({ type: Number })], H.prototype, "maxlength", void 0);
o([l({
  type: Boolean,
  attribute: "show-count"
})], H.prototype, "showCount", void 0);
o([l({
  type: Boolean,
  attribute: "auto-resize"
})], H.prototype, "autoResize", void 0);
o([l({ type: String })], H.prototype, "resize", void 0);
o([l({ type: Boolean })], H.prototype, "required", void 0);
o([l({ type: Boolean })], H.prototype, "readonly", void 0);
o([l({ type: Boolean })], H.prototype, "disabled", void 0);
o([l({ type: Boolean })], H.prototype, "error", void 0);
o([l({ type: String })], H.prototype, "variant", void 0);
o([l({ type: String })], H.prototype, "size", void 0);
o([l({
  type: Boolean,
  attribute: "full-width"
})], H.prototype, "fullWidth", void 0);
o([dt("textarea")], H.prototype, "textareaElement", void 0);
H = o([k("biz-multiline-text-input")], H);
var rr = (e) => {
  const t = e.value !== null && e.value <= e.min, i = e.value !== null && e.value >= e.max, r = e.disabled || e.readonly, a = [
    "biz-number-input",
    `biz-number-input--variant-${e.variant}`,
    `biz-number-input--size-${e.size}`,
    `biz-number-input--controls-${e.controlsPosition}`,
    e.disabled ? "biz-number-input--disabled" : "",
    e.readonly ? "biz-number-input--readonly" : "",
    e.error ? "biz-number-input--error" : "",
    e.fullWidth ? "biz-number-input--full-width" : ""
  ].filter(Boolean).join(" "), s = () => d`
    <button
      type="button"
      class="biz-number-input__control biz-number-input__control--decrement"
      ?disabled=${r || t}
      aria-label="값 감소"
      tabindex="-1"
      @click=${e.onDecrement}
    >
      <slot name="decrement-icon-slot">-</slot>
    </button>
  `, n = () => d`
    <button
      type="button"
      class="biz-number-input__control biz-number-input__control--increment"
      ?disabled=${r || i}
      aria-label="값 증가"
      tabindex="-1"
      @click=${e.onIncrement}
    >
      <slot name="increment-icon-slot">+</slot>
    </button>
  `;
  return d`
    <div class=${a}>
      <div class="biz-number-input__label-wrapper">
        <slot name="label-slot"></slot>
      </div>

      <div class="biz-number-input__field-wrapper">
        ${e.controls && e.controlsPosition === "split" ? s() : ""}

        <div class="biz-number-input__input-container">
          <slot name="prefix-slot"></slot>
          <input
            type="text"
            role="spinbutton"
            class="biz-number-input__input"
            .value=${e.inputValue}
            ?disabled=${e.disabled}
            ?readonly=${e.readonly}
            ?required=${e.required}
            aria-valuenow=${e.value !== null ? e.value : ""}
            aria-valuemin=${e.min !== -1 / 0 ? e.min : ""}
            aria-valuemax=${e.max !== 1 / 0 ? e.max : ""}
            aria-invalid=${e.error ? "true" : "false"}
            aria-required=${e.required ? "true" : "false"}
            aria-describedby="helper-text"
            @input=${e.onInputChange}
            @focus=${e.onInputFocus}
            @blur=${e.onInputBlur}
            @keydown=${e.onKeyDown}
          />
          <slot name="suffix-slot"></slot>
        </div>

        ${e.controls && e.controlsPosition === "end" ? d`
              <div class="biz-number-input__controls-group">
                ${s()} ${n()}
              </div>
            ` : ""}
        ${e.controls && e.controlsPosition === "stacked" ? d`
              <div class="biz-number-input__controls-stacked">
                ${n()} ${s()}
              </div>
            ` : ""}
        ${e.controls && e.controlsPosition === "split" ? n() : ""}
      </div>

      <div id="helper-text" class="biz-number-input__helper-wrapper">
        <slot name="helper-text-slot"></slot>
      </div>
    </div>
  `;
}, or = w`
  :host {
    display: inline-block;
    box-sizing: border-box;

    /* Layout & Sizing */
    --biz-number-input-height-sm: 32px;
    --biz-number-input-height-md: 40px;
    --biz-number-input-height-lg: 48px;
    --biz-number-input-padding-x: 12px;
    --biz-number-input-padding-y: 8px;
    --biz-number-input-border-radius: 4px;

    /* Colors - Base */
    --biz-number-input-bg-color: #ffffff;
    --biz-number-input-border-color: #d1d5db;
    --biz-number-input-text-color: #111827;
    --biz-number-input-placeholder-color: #9ca3af;
    --biz-number-input-control-bg: #f9fafb;
    --biz-number-input-control-icon-color: #4b5563;

    /* Colors - Interactive States */
    --biz-number-input-hover-border-color: #9ca3af;
    --biz-number-input-focus-border-color: #2563eb;
    --biz-number-input-focus-ring-color: rgba(37, 99, 235, 0.2);
    --biz-number-input-control-hover-bg: #f3f4f6;

    /* Colors - Error & Disabled */
    --biz-number-input-error-color: #dc2626;
    --biz-number-input-disabled-bg-color: #f3f4f6;
    --biz-number-input-disabled-text-color: #9ca3af;
  }

  :host([full-width]) {
    display: block;
    width: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .biz-number-input {
    display: inline-flex;
    flex-direction: column;
    font-family: inherit;
    width: 100%;
  }

  .biz-number-input--full-width {
    width: 100%;
  }

  .biz-number-input__field-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    background-color: var(--biz-number-input-bg-color);
    border-radius: var(--biz-number-input-border-radius);
    transition: all 0.2s ease-in-out;
  }

  .biz-number-input__input-container {
    display: flex;
    align-items: center;
    flex: 1;
    width: 100%;
  }

  .biz-number-input__input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: var(--biz-number-input-text-color);
    font-size: 14px;
    padding: 0;
    text-align: right;
  }

  .biz-number-input__input::placeholder {
    color: var(--biz-number-input-placeholder-color);
  }

  /* Sizes */
  .biz-number-input--size-small .biz-number-input__field-wrapper {
    height: var(--biz-number-input-height-sm);
    padding: 0 var(--biz-number-input-padding-x);
  }
  .biz-number-input--size-small .biz-number-input__input {
    font-size: 12px;
  }

  .biz-number-input--size-medium .biz-number-input__field-wrapper {
    height: var(--biz-number-input-height-md);
    padding: 0 var(--biz-number-input-padding-x);
  }
  .biz-number-input--size-medium .biz-number-input__input {
    font-size: 14px;
  }

  .biz-number-input--size-large .biz-number-input__field-wrapper {
    height: var(--biz-number-input-height-lg);
    padding: 0 var(--biz-number-input-padding-x);
  }
  .biz-number-input--size-large .biz-number-input__input {
    font-size: 16px;
  }

  /* Variants */
  .biz-number-input--variant-outlined .biz-number-input__field-wrapper {
    border: 1px solid var(--biz-number-input-border-color);
  }

  .biz-number-input--variant-filled .biz-number-input__field-wrapper {
    background-color: var(--biz-number-input-control-bg);
    border: 1px solid transparent;
    border-bottom: 1px solid var(--biz-number-input-border-color);
  }

  .biz-number-input--variant-standard .biz-number-input__field-wrapper {
    border: none;
    border-bottom: 1px solid var(--biz-number-input-border-color);
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
  }

  /* States: Hover & Focus */
  .biz-number-input:not(.biz-number-input--disabled):not(
      .biz-number-input--readonly
    )
    .biz-number-input__field-wrapper:hover {
    border-color: var(--biz-number-input-hover-border-color);
  }

  .biz-number-input:not(.biz-number-input--disabled):not(
      .biz-number-input--readonly
    )
    .biz-number-input__field-wrapper:focus-within {
    border-color: var(--biz-number-input-focus-border-color);
    box-shadow: 0 0 0 3px var(--biz-number-input-focus-ring-color);
  }

  /* States: Error */
  .biz-number-input--error .biz-number-input__field-wrapper {
    border-color: var(--biz-number-input-error-color) !important;
  }

  .biz-number-input--error
    .biz-number-input__field-wrapper:focus-within {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2) !important;
  }

  /* States: Disabled */
  .biz-number-input--disabled .biz-number-input__field-wrapper {
    background-color: var(--biz-number-input-disabled-bg-color);
    border-color: var(--biz-number-input-border-color);
    cursor: not-allowed;
    opacity: 0.6;
  }

  .biz-number-input--disabled .biz-number-input__input {
    color: var(--biz-number-input-disabled-text-color);
    cursor: not-allowed;
  }

  /* States: Readonly */
  .biz-number-input--readonly .biz-number-input__field-wrapper {
    background-color: var(--biz-number-input-disabled-bg-color);
  }

  /* Controls Placement & Buttons */
  .biz-number-input__control {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--biz-number-input-control-bg);
    color: var(--biz-number-input-control-icon-color);
    border: 1px solid var(--biz-number-input-border-color);
    cursor: pointer;
    user-select: none;
    transition: background-color 0.15s ease;
    padding: 0;
  }

  .biz-number-input__control:hover:not(:disabled) {
    background-color: var(--biz-number-input-control-hover-bg);
  }

  .biz-number-input__control:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  /* Controls Position: End */
  .biz-number-input--controls-end .biz-number-input__controls-group {
    display: flex;
    gap: 2px;
    margin-left: 8px;
  }

  .biz-number-input--controls-end .biz-number-input__control {
    width: 24px;
    height: 24px;
    border-radius: 4px;
  }

  /* Controls Position: Stacked */
  .biz-number-input--controls-stacked .biz-number-input__controls-stacked {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 8px;
  }

  .biz-number-input--controls-stacked .biz-number-input__control {
    height: 50%;
    width: 20px;
    font-size: 10px;
    border-radius: 0;
  }

  .biz-number-input--controls-stacked
    .biz-number-input__control--increment {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  .biz-number-input--controls-stacked
    .biz-number-input__control--decrement {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  /* Controls Position: Split */
  .biz-number-input--controls-split .biz-number-input__control {
    width: 28px;
    height: 100%;
    border-radius: var(--biz-number-input-border-radius);
  }

  .biz-number-input--controls-split
    .biz-number-input__control--decrement {
    margin-right: 8px;
  }

  .biz-number-input--controls-split
    .biz-number-input__control--increment {
    margin-left: 8px;
  }

  /* Label & Helper Text Slots */
  .biz-number-input__label-wrapper {
    margin-bottom: 4px;
    font-size: 14px;
    color: var(--biz-number-input-text-color);
  }

  .biz-number-input__helper-wrapper {
    margin-top: 4px;
    font-size: 12px;
    color: var(--biz-number-input-placeholder-color);
  }

  .biz-number-input--error .biz-number-input__helper-wrapper {
    color: var(--biz-number-input-error-color);
  }
`, K = class extends _ {
  constructor(...t) {
    super(...t), this.value = null, this.min = -1 / 0, this.max = 1 / 0, this.step = 1, this.controls = !0, this.controlsPosition = "end", this.useGrouping = !1, this.required = !1, this.readonly = !1, this.disabled = !1, this.error = !1, this.variant = "outlined", this.size = "medium", this.fullWidth = !1, this.inputValue = "";
  }
  static {
    this.styles = or;
  }
  willUpdate(t) {
    (t.has("value") || t.has("precision") || t.has("useGrouping")) && (this.inputValue = this.formatValue(this.value));
  }
  formatValue(t) {
    if (t === null || isNaN(t)) return "";
    let i = t;
    return this.precision !== void 0 && (i = Number(t.toFixed(this.precision))), this.useGrouping ? i.toLocaleString() : String(i);
  }
  parseInputValue(t) {
    if (!t.trim()) return null;
    const i = t.replace(/,/g, ""), r = Number(i);
    return isNaN(r) ? null : r;
  }
  clampValue(t) {
    let i = Math.min(Math.max(t, this.min), this.max);
    return this.precision !== void 0 && (i = Number(i.toFixed(this.precision))), i;
  }
  dispatchCustomEvent(t, i = {}) {
    this.dispatchEvent(new CustomEvent(t, {
      detail: i,
      bubbles: !0,
      composed: !0
    }));
  }
  updateValue(t, i = !0) {
    let r = t;
    r !== null && (r = this.clampValue(r)), this.value = r, this.inputValue = this.formatValue(r), i ? this.dispatchCustomEvent("input", { value: this.value }) : this.dispatchCustomEvent("change", { value: this.value });
  }
  handleInput(t) {
    const i = t.target, r = this.parseInputValue(i.value);
    this.value = r, this.inputValue = i.value, this.dispatchCustomEvent("input", { value: this.value });
  }
  handleFocus(t) {
    this.dispatchEvent(new FocusEvent("focus", {
      bubbles: !0,
      composed: !0,
      relatedTarget: t.relatedTarget
    }));
  }
  handleBlur(t) {
    this.value !== null ? this.updateValue(this.value, !1) : this.dispatchCustomEvent("change", { value: null }), this.dispatchEvent(new FocusEvent("blur", {
      bubbles: !0,
      composed: !0,
      relatedTarget: t.relatedTarget
    }));
  }
  stepUp(t = this.step) {
    if (this.disabled || this.readonly) return;
    const i = this.value ?? 0, r = this.clampValue(i + t);
    this.updateValue(r, !0), this.dispatchCustomEvent("step-up", { value: r });
  }
  stepDown(t = this.step) {
    if (this.disabled || this.readonly) return;
    const i = this.value ?? 0, r = this.clampValue(i - t);
    this.updateValue(r, !0), this.dispatchCustomEvent("step-down", { value: r });
  }
  handleKeyDown(t) {
    if (!(this.disabled || this.readonly))
      switch (t.key) {
        case "ArrowUp":
          t.preventDefault(), this.stepUp();
          break;
        case "ArrowDown":
          t.preventDefault(), this.stepDown();
          break;
        case "Home":
          this.min !== -1 / 0 && (t.preventDefault(), this.updateValue(this.min, !0));
          break;
        case "End":
          this.max !== 1 / 0 && (t.preventDefault(), this.updateValue(this.max, !0));
          break;
        case "PageUp":
          t.preventDefault(), this.stepUp(this.step * 10);
          break;
        case "PageDown":
          t.preventDefault(), this.stepDown(this.step * 10);
          break;
        case "Enter":
          this.value !== null && this.updateValue(this.value, !1);
          break;
        case "Escape":
          this.inputValue = this.formatValue(this.value);
      }
  }
  render() {
    return rr({
      value: this.value,
      min: this.min,
      max: this.max,
      step: this.step,
      precision: this.precision,
      controls: this.controls,
      controlsPosition: this.controlsPosition,
      useGrouping: this.useGrouping,
      required: this.required,
      readonly: this.readonly,
      disabled: this.disabled,
      error: this.error,
      variant: this.variant,
      size: this.size,
      fullWidth: this.fullWidth,
      inputValue: this.inputValue,
      onInputChange: this.handleInput.bind(this),
      onInputBlur: this.handleBlur.bind(this),
      onInputFocus: this.handleFocus.bind(this),
      onKeyDown: this.handleKeyDown.bind(this),
      onDecrement: () => this.stepDown(),
      onIncrement: () => this.stepUp()
    });
  }
};
o([l({ type: Number })], K.prototype, "value", void 0);
o([l({ type: Number })], K.prototype, "min", void 0);
o([l({ type: Number })], K.prototype, "max", void 0);
o([l({ type: Number })], K.prototype, "step", void 0);
o([l({ type: Number })], K.prototype, "precision", void 0);
o([l({ type: Boolean })], K.prototype, "controls", void 0);
o([l({
  type: String,
  attribute: "controls-position"
})], K.prototype, "controlsPosition", void 0);
o([l({
  type: Boolean,
  attribute: "use-grouping"
})], K.prototype, "useGrouping", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], K.prototype, "required", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], K.prototype, "readonly", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], K.prototype, "disabled", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], K.prototype, "error", void 0);
o([l({
  type: String,
  reflect: !0
})], K.prototype, "variant", void 0);
o([l({
  type: String,
  reflect: !0
})], K.prototype, "size", void 0);
o([l({
  type: Boolean,
  attribute: "full-width",
  reflect: !0
})], K.prototype, "fullWidth", void 0);
o([g()], K.prototype, "inputValue", void 0);
K = o([k("biz-number-input")], K);
var ar = (e) => d`
  <header
    class="biz-page-header ${e.variant} ${e.size} ${e.fullWidth ? "full-width" : ""} ${e.compact ? "compact" : ""} ${e.disabled ? "disabled" : ""} ${e.error ? "error" : ""} ${e.loading ? "loading" : ""}"
    role="region"
    aria-label="Page Header"
    aria-invalid=${e.error ? "true" : "false"}
    aria-disabled=${e.disabled ? "true" : "false"}
    @click=${e.handleActionClick}
    @keydown=${e.handleKeyDown}
  >
    ${e.loading ? d`
          <div class="biz-page-header__skeleton">
            <div class="biz-page-header__skeleton-breadcrumb"></div>
            <div class="biz-page-header__skeleton-title"></div>
            <div class="biz-page-header__skeleton-subtitle"></div>
          </div>
        ` : d`
          <div class="biz-page-header__breadcrumb">
            <slot name="breadcrumb-slot" @slotchange=${e.handleSlotChange}></slot>
          </div>

          <div class="biz-page-header__main">
            <div class="biz-page-header__title-container">
              <slot name="title-slot" id=${e.titleId || "title-slot"} @slotchange=${e.handleSlotChange}>
                ${e.title ? d`<h1 class="biz-page-header__title">${e.title}</h1>` : Re}
              </slot>
              <div class="biz-page-header__meta-status">
                <slot name="meta-status-slot" @slotchange=${e.handleSlotChange}></slot>
              </div>
            </div>

            <div class="biz-page-header__extra-actions">
              <slot name="extra-actions-slot" @slotchange=${e.handleSlotChange}></slot>
            </div>
          </div>

          <div class="biz-page-header__subtitle-container">
            <slot name="subtitle-slot" id=${e.subtitleId || "subtitle-slot"} @slotchange=${e.handleSlotChange}>
              ${e.subtitle ? d`<p class="biz-page-header__subtitle">${e.subtitle}</p>` : Re}
            </slot>
          </div>
        `}
  </header>
`, lr = w`
  :host {
    /* Layout & Sizing Tokens */
    --biz-page-header-padding-x: 24px;
    --biz-page-header-padding-y: 16px;
    --biz-page-header-gap: 12px;
    --biz-page-header-title-size-sm: 18px;
    --biz-page-header-title-size-md: 24px;
    --biz-page-header-title-size-lg: 30px;
    --biz-page-header-subtitle-size-sm: 12px;
    --biz-page-header-subtitle-size-md: 14px;
    --biz-page-header-subtitle-size-lg: 16px;

    /* Color Tokens */
    --biz-page-header-bg-color: transparent;
    --biz-page-header-border-color: #e5e7eb;
    --biz-page-header-title-color: #111827;
    --biz-page-header-subtitle-color: #6b7280;
    --biz-page-header-focus-ring-color: #2563eb;
    --biz-page-header-disabled-opacity: 0.5;
    --biz-page-header-skeleton-bg: #e5e7eb;

    display: block;
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .biz-page-header {
    display: flex;
    flex-direction: column;
    padding: var(--biz-page-header-padding-y) var(--biz-page-header-padding-x);
    gap: var(--biz-page-header-gap);
    background-color: var(--biz-page-header-bg-color);
    border-bottom: 1px solid var(--biz-page-header-border-color);
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }

  /* Full Width & Compact */
  .biz-page-header--full-width {
    width: 100%;
  }

  .biz-page-header--compact {
    --biz-page-header-padding-y: 8px;
    --biz-page-header-gap: 6px;
  }

  /* Variants */
  .biz-page-header--variant-standard {
    --biz-page-header-bg-color: transparent;
    --biz-page-header-border-color: #e5e7eb;
  }

  .biz-page-header--variant-filled {
    --biz-page-header-bg-color: #f9fafb;
    --biz-page-header-border-color: #e5e7eb;
    border-radius: 8px;
  }

  .biz-page-header--variant-ghost {
    --biz-page-header-bg-color: transparent;
    --biz-page-header-border-color: transparent;
    border-bottom: none;
  }

  /* Sizes */
  .biz-page-header--size-small {
    --biz-page-header-padding-x: 16px;
    --biz-page-header-padding-y: 12px;
  }

  .biz-page-header--size-small .biz-page-header__title {
    font-size: var(--biz-page-header-title-size-sm);
  }

  .biz-page-header--size-small .biz-page-header__subtitle {
    font-size: var(--biz-page-header-subtitle-size-sm);
  }

  .biz-page-header--size-medium {
    --biz-page-header-padding-x: 24px;
    --biz-page-header-padding-y: 16px;
  }

  .biz-page-header--size-medium .biz-page-header__title {
    font-size: var(--biz-page-header-title-size-md);
  }

  .biz-page-header--size-medium .biz-page-header__subtitle {
    font-size: var(--biz-page-header-subtitle-size-md);
  }

  .biz-page-header--size-large {
    --biz-page-header-padding-x: 32px;
    --biz-page-header-padding-y: 24px;
  }

  .biz-page-header--size-large .biz-page-header__title {
    font-size: var(--biz-page-header-title-size-lg);
  }

  .biz-page-header--size-large .biz-page-header__subtitle {
    font-size: var(--biz-page-header-subtitle-size-lg);
  }

  /* Main Layout Elements */
  .biz-page-header__breadcrumb {
    display: block;
  }

  .biz-page-header__main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .biz-page-header__title-container {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .biz-page-header__title {
    margin: 0;
    font-weight: 700;
    line-height: 1.25;
    color: var(--biz-page-header-title-color);
  }

  .biz-page-header__meta-status {
    display: inline-flex;
    align-items: center;
  }

  .biz-page-header__extra-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
  }

  .biz-page-header__subtitle-container {
    display: block;
  }

  .biz-page-header__subtitle {
    margin: 0;
    color: var(--biz-page-header-subtitle-color);
    line-height: 1.5;
  }

  /* States */
  .biz-page-header:hover {
    border-color: var(--biz-page-header-border-hover-color, var(--biz-page-header-border-color));
  }

  .biz-page-header:focus-within {
    outline: 2px solid var(--biz-page-header-focus-ring-color);
    outline-offset: 2px;
  }

  .biz-page-header--disabled {
    opacity: var(--biz-page-header-disabled-opacity);
    pointer-events: none;
  }

  /* Loading & Skeleton State */
  .biz-page-header__skeleton {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .biz-page-header__skeleton-breadcrumb,
  .biz-page-header__skeleton-title,
  .biz-page-header__skeleton-subtitle {
    background-color: var(--biz-page-header-skeleton-bg);
    border-radius: 4px;
    animation: biz-page-header-pulse 1.5s infinite ease-in-out;
  }

  .biz-page-header__skeleton-breadcrumb {
    width: 120px;
    height: 14px;
  }

  .biz-page-header__skeleton-title {
    width: 240px;
    height: 28px;
  }

  .biz-page-header__skeleton-subtitle {
    width: 360px;
    height: 16px;
  }

  @keyframes biz-page-header-pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`, ee = class extends _ {
  constructor(...t) {
    super(...t), this.title = "", this.subtitle = "", this.variant = "standard", this.size = "medium", this.fullWidth = !1, this.compact = !1, this.disabled = !1, this.error = !1, this.titleId = "title-slot", this.subtitleId = "subtitle-slot", this.loading = !1, this.handleActionClick = (i) => {
      if (this.disabled) return;
      const r = i.target.closest("[data-action-id]");
      if (r) {
        const a = r.dataset.actionId || "";
        this.dispatchEvent(new CustomEvent("action-click", {
          bubbles: !0,
          composed: !0,
          detail: { actionId: a }
        }));
      }
    }, this.handleKeyDown = (i) => {
      if (!this.disabled)
        if (i.key === "Enter" || i.key === " ") {
          const r = i.target.dataset.actionId;
          r && (i.preventDefault(), this.dispatchEvent(new CustomEvent("action-click", {
            bubbles: !0,
            composed: !0,
            detail: { actionId: r }
          })));
        } else i.key === "Escape" && this.dispatchEvent(new CustomEvent("clear", {
          bubbles: !0,
          composed: !0,
          detail: {}
        }));
    }, this.handleSlotChange = (i) => {
      this.dispatchEvent(new CustomEvent("slot-change", {
        bubbles: !0,
        composed: !0,
        detail: { targetSlot: i.target.name }
      }));
    };
  }
  static {
    this.styles = lr;
  }
  render() {
    return ar({
      title: this.title,
      subtitle: this.subtitle,
      variant: this.variant,
      size: this.size,
      fullWidth: this.fullWidth,
      compact: this.compact,
      loading: this.loading,
      disabled: this.disabled,
      error: this.error,
      titleId: this.titleId,
      subtitleId: this.subtitleId,
      handleActionClick: this.handleActionClick,
      handleKeyDown: this.handleKeyDown,
      handleSlotChange: this.handleSlotChange
    });
  }
};
o([l({ type: String })], ee.prototype, "title", void 0);
o([l({ type: String })], ee.prototype, "subtitle", void 0);
o([l({ type: String })], ee.prototype, "variant", void 0);
o([l({ type: String })], ee.prototype, "size", void 0);
o([l({
  type: Boolean,
  attribute: "full-width"
})], ee.prototype, "fullWidth", void 0);
o([l({ type: Boolean })], ee.prototype, "compact", void 0);
o([l({ type: Boolean })], ee.prototype, "disabled", void 0);
o([l({ type: Boolean })], ee.prototype, "error", void 0);
o([l({ type: String })], ee.prototype, "titleId", void 0);
o([l({ type: String })], ee.prototype, "subtitleId", void 0);
o([g()], ee.prototype, "loading", void 0);
ee = o([k("biz-page-header")], ee);
var sr = (e) => {
  const { value: t = "", placeholder: i = "", visible: r = !1, required: a = !1, readonly: s = !1, disabled: n = !1, error: c = !1, clearable: p = !1, variant: b = "outlined", size: u = "medium", fullWidth: h = !1, handleInput: v, handleChange: m, handleToggleVisibility: z, handleClear: D, handleFocus: x, handleBlur: W } = e, Y = r ? "text" : "password", P = r ? "비밀번호 숨기기" : "비밀번호 표시", re = r ? "true" : "false";
  return d`
    <div
      class=${M({
    "biz-password-input": !0,
    [`biz-password-input--${b}`]: !0,
    [`biz-password-input--${u}`]: !0,
    "biz-password-input--full-width": h,
    "biz-password-input--disabled": n,
    "biz-password-input--readonly": s,
    "biz-password-input--error": c
  })}
    >
      <div class="biz-password-input__label-container">
        <slot name="label-slot"></slot>
      </div>

      <div class="biz-password-input__control">
        <slot name="start-slot"></slot>

        <input
          id="input"
          class="biz-password-input__field"
          type=${Y}
          .value=${t}
          placeholder=${i}
          ?disabled=${n}
          ?readonly=${s}
          ?required=${a}
          aria-invalid=${c ? "true" : "false"}
          aria-required=${a ? "true" : "false"}
          aria-describedby="helper-text"
          @input=${v}
          @change=${m}
          @focus=${x}
          @blur=${W}
        />

        ${p && t && !n && !s ? d`
              <button
                type="button"
                class="biz-password-input__clear-button"
                aria-label="입력 내용 초기화"
                @click=${D}
              >
                ✕
              </button>
            ` : ""}

        <button
          type="button"
          class="biz-password-input__toggle-button"
          aria-label=${P}
          aria-pressed=${re}
          ?disabled=${n || s}
          @click=${z}
        >
          <slot name="toggle-icon-slot">
            ${r ? d`<svg class="biz-password-input__icon" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>` : d`<svg class="biz-password-input__icon" viewBox="0 0 24 24"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.17c0-1.66-1.34-3-3-3l-.17.02z"/></svg>`}
          </slot>
        </button>

        <slot name="end-slot"></slot>
      </div>

      <div id="helper-text" class="biz-password-input__helper-container">
        <slot name="helper-text-slot"></slot>
      </div>

      <span class="biz-password-input__sr-only" aria-live="polite">
        ${r ? "비밀번호가 표시되었습니다." : "비밀번호가 숨겨졌습니다."}
      </span>
    </div>
  `;
}, nr = w`
  :host {
    display: inline-block;
    box-sizing: border-box;

    --biz-password-input-height-sm: 32px;
    --biz-password-input-height-md: 40px;
    --biz-password-input-height-lg: 48px;
    --biz-password-input-padding-x: 12px;
    --biz-password-input-padding-y: 8px;
    --biz-password-input-border-radius: 4px;

    --biz-password-input-bg-color: #ffffff;
    --biz-password-input-border-color: #d1d5db;
    --biz-password-input-text-color: #111827;
    --biz-password-input-placeholder-color: #9ca3af;
    --biz-password-input-toggle-icon-color: #6b7280;

    --biz-password-input-hover-border-color: #9ca3af;
    --biz-password-input-focus-border-color: #2563eb;
    --biz-password-input-focus-ring-color: rgba(37, 99, 235, 0.2);

    --biz-password-input-error-color: #dc2626;
    --biz-password-input-disabled-bg-color: #f3f4f6;
    --biz-password-input-disabled-text-color: #9ca3af;
  }

  :host([full-width]) {
    display: block;
    width: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .biz-password-input {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    font-family: inherit;
  }

  .biz-password-input--full-width {
    width: 100%;
  }

  .biz-password-input__control {
    display: flex;
    align-items: center;
    position: relative;
    background-color: var(--biz-password-input-bg-color);
    border-radius: var(--biz-password-input-border-radius);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .biz-password-input__field {
    flex: 1;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: var(--biz-password-input-text-color);
    font-size: 14px;
    padding: 0;
  }

  .biz-password-input__field::placeholder {
    color: var(--biz-password-input-placeholder-color);
  }

  /* Variants */
  .biz-password-input--outlined .biz-password-input__control {
    border: 1px solid var(--biz-password-input-border-color);
  }

  .biz-password-input--filled .biz-password-input__control {
    background-color: #f9fafb;
    border: 1px solid transparent;
    border-bottom: 1px solid var(--biz-password-input-border-color);
  }

  .biz-password-input--standard .biz-password-input__control {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--biz-password-input-border-color);
    border-radius: 0;
  }

  /* Sizes */
  .biz-password-input--small .biz-password-input__control {
    height: var(--biz-password-input-height-sm);
    padding: 0 var(--biz-password-input-padding-x);
  }

  .biz-password-input--medium .biz-password-input__control {
    height: var(--biz-password-input-height-md);
    padding: 0 var(--biz-password-input-padding-x);
  }

  .biz-password-input--large .biz-password-input__control {
    height: var(--biz-password-input-height-lg);
    padding: 0 var(--biz-password-input-padding-x);
  }

  /* States: Hover & Focus */
  .biz-password-input:not(.biz-password-input--disabled):not(.biz-password-input--readonly) .biz-password-input__control:hover {
    border-color: var(--biz-password-input-hover-border-color);
  }

  .biz-password-input:not(.biz-password-input--disabled):not(.biz-password-input--readonly) .biz-password-input__control:focus-within {
    border-color: var(--biz-password-input-focus-border-color);
    box-shadow: 0 0 0 3px var(--biz-password-input-focus-ring-color);
  }

  /* States: Error */
  .biz-password-input--error .biz-password-input__control {
    border-color: var(--biz-password-input-error-color) !important;
  }

  .biz-password-input--error .biz-password-input__control:focus-within {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2) !important;
  }

  .biz-password-input--error .biz-password-input__helper-container {
    color: var(--biz-password-input-error-color);
  }

  /* States: Disabled */
  .biz-password-input--disabled .biz-password-input__control {
    background-color: var(--biz-password-input-disabled-bg-color);
    border-color: var(--biz-password-input-border-color);
    cursor: not-allowed;
    opacity: 0.7;
  }

  .biz-password-input--disabled .biz-password-input__field {
    color: var(--biz-password-input-disabled-text-color);
    cursor: not-allowed;
  }

  /* States: Readonly */
  .biz-password-input--readonly .biz-password-input__control {
    background-color: #f3f4f6;
    border-color: var(--biz-password-input-border-color);
  }

  /* Buttons */
  .biz-password-input__clear-button,
  .biz-password-input__toggle-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    padding: 4px;
    margin: 0;
    cursor: pointer;
    color: var(--biz-password-input-toggle-icon-color);
    border-radius: 50%;
  }

  .biz-password-input__clear-button:hover,
  .biz-password-input__toggle-button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .biz-password-input__clear-button:focus-visible,
  .biz-password-input__toggle-button:focus-visible {
    outline: 2px solid var(--biz-password-input-focus-border-color);
  }

  .biz-password-input__icon {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }

  .biz-password-input__sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`, te = class extends _ {
  constructor(...t) {
    super(...t), this.value = "", this.placeholder = "", this.visible = !1, this.required = !1, this.readonly = !1, this.disabled = !1, this.error = !1, this.clearable = !1, this.variant = "outlined", this.size = "medium", this.fullWidth = !1;
  }
  static {
    this.styles = nr;
  }
  handleInput(t) {
    const i = t.target;
    this.value = i.value, this.dispatchEvent(new CustomEvent("input", {
      bubbles: !0,
      composed: !0,
      detail: { value: this.value }
    }));
  }
  handleChange(t) {
    const i = t.target;
    this.value = i.value, this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: { value: this.value }
    }));
  }
  handleToggleVisibility() {
    this.disabled || this.readonly || (this.visible = !this.visible, this.dispatchEvent(new CustomEvent("toggle-visibility", {
      bubbles: !0,
      composed: !0,
      detail: { visible: this.visible }
    })));
  }
  handleClear() {
    this.disabled || this.readonly || (this.value = "", this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0,
      detail: { value: "" }
    })), this.dispatchEvent(new CustomEvent("input", {
      bubbles: !0,
      composed: !0,
      detail: { value: "" }
    })));
  }
  handleFocus(t) {
    this.dispatchEvent(new CustomEvent("focus", {
      bubbles: !0,
      composed: !0,
      detail: t
    }));
  }
  handleBlur(t) {
    this.dispatchEvent(new CustomEvent("blur", {
      bubbles: !0,
      composed: !0,
      detail: t
    }));
  }
  handleKeyDown(t) {
    t.key === "Escape" && this.clearable && this.value && this.handleClear();
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("keydown", this.handleKeyDown);
  }
  disconnectedCallback() {
    this.removeEventListener("keydown", this.handleKeyDown), super.disconnectedCallback();
  }
  render() {
    return sr(this);
  }
};
o([l({ type: String })], te.prototype, "value", void 0);
o([l({ type: String })], te.prototype, "placeholder", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], te.prototype, "visible", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], te.prototype, "required", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], te.prototype, "readonly", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], te.prototype, "disabled", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], te.prototype, "error", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], te.prototype, "clearable", void 0);
o([l({
  type: String,
  reflect: !0
})], te.prototype, "variant", void 0);
o([l({
  type: String,
  reflect: !0
})], te.prototype, "size", void 0);
o([l({
  type: Boolean,
  attribute: "full-width",
  reflect: !0
})], te.prototype, "fullWidth", void 0);
te = o([k("biz-password-input")], te);
var dr = (e) => {
  const { checked: t = !1, value: i = "", name: r = "", size: a = "medium", variant: s = "standard", labelPosition: n = "right", readonly: c = !1, disabled: p = !1, error: b = !1, descriptionId: u, onInput: h, onChange: v, onFocus: m, onBlur: z } = e, D = !p && !c;
  return d`
    <div
      class=${[
    "biz-radio-button",
    `biz-radio-button--${a}`,
    `biz-radio-button--${s}`,
    `biz-radio-button--label-${n}`,
    t ? "biz-radio-button--checked" : "",
    p ? "biz-radio-button--disabled" : "",
    c ? "biz-radio-button--readonly" : "",
    b ? "biz-radio-button--error" : ""
  ].filter(Boolean).join(" ")}
    >
      <label class="biz-radio-button__label-container">
        <input
          type="radio"
          class="biz-radio-button__input"
          .checked=${t}
          .value=${String(i)}
          name=${r}
          ?disabled=${p}
          ?readonly=${c}
          aria-checked=${t ? "true" : "false"}
          aria-invalid=${b ? "true" : "false"}
          aria-describedby=${Xe(u || void 0)}
          @input=${D ? h : (x) => x.preventDefault()}
          @change=${D ? v : (x) => x.preventDefault()}
          @focus=${m}
          @blur=${z}
        />
        <span class="biz-radio-button__control" aria-hidden="true">
          <slot name="icon-slot">
            <span class="biz-radio-button__dot"></span>
          </slot>
        </span>
        <span class="biz-radio-button__label">
          <slot></slot>
        </span>
      </label>
      <div id=${u || ""} class="biz-radio-button__description">
        <slot name="description-slot"></slot>
      </div>
    </div>
  `;
}, cr = w`
  :host {
    display: inline-block;

    /* Layout & Sizing */
    --biz-radio-button-size-sm: 16px;
    --biz-radio-button-size-md: 20px;
    --biz-radio-button-size-lg: 24px;
    --biz-radio-button-dot-size-sm: 6px;
    --biz-radio-button-dot-size-md: 8px;
    --biz-radio-button-dot-size-lg: 10px;
    --biz-radio-button-label-gap: 8px;
    --biz-radio-button-font-size-sm: 14px;
    --biz-radio-button-font-size-md: 16px;
    --biz-radio-button-font-size-lg: 18px;

    /* Colors - Base */
    --biz-radio-button-bg: #ffffff;
    --biz-radio-button-border-color: #d1d5db;
    --biz-radio-button-text-color: #111827;

    /* Colors - Checked */
    --biz-radio-button-checked-border-color: #2563eb;
    --biz-radio-button-checked-icon-color: #2563eb;

    /* Colors - Interactive States */
    --biz-radio-button-hover-border-color: #9ca3af;
    --biz-radio-button-focus-ring-color: rgba(37, 99, 235, 0.2);

    /* Colors - Error & Disabled */
    --biz-radio-button-error-color: #dc2626;
    --biz-radio-button-disabled-bg: #f3f4f6;
    --biz-radio-button-disabled-border-color: #e5e7eb;
    --biz-radio-button-disabled-text-color: #9ca3af;
  }

  .biz-radio-button {
    display: inline-flex;
    flex-direction: column;
    font-family: inherit;
    box-sizing: border-box;
  }

  .biz-radio-button__label-container {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    user-select: none;
    gap: var(--biz-radio-button-label-gap);
  }

  .biz-radio-button--label-left .biz-radio-button__label-container {
    flex-direction: row-reverse;
  }

  /* Hidden Native Input */
  .biz-radio-button__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    pointer-events: none;
  }

  /* Visual Control Box */
  .biz-radio-button__control {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid var(--biz-radio-button-border-color);
    border-radius: 50%;
    background-color: var(--biz-radio-button-bg);
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  .biz-radio-button__dot {
    display: block;
    border-radius: 50%;
    background-color: var(--biz-radio-button-checked-icon-color);
    opacity: 0;
    transform: scale(0);
    transition: transform 0.15s ease-in-out, opacity 0.15s ease-in-out;
  }

  /* Checked State */
  .biz-radio-button--checked .biz-radio-button__control {
    border-color: var(--biz-radio-button-checked-border-color);
  }

  .biz-radio-button--checked .biz-radio-button__dot {
    opacity: 1;
    transform: scale(1);
  }

  /* Hover State */
  .biz-radio-button:not(.biz-radio-button--disabled):not(.biz-radio-button--readonly)
    .biz-radio-button__label-container:hover
    .biz-radio-button__control {
    border-color: var(--biz-radio-button-hover-border-color);
  }

  .biz-radio-button--checked:not(.biz-radio-button--disabled):not(.biz-radio-button--readonly)
    .biz-radio-button__label-container:hover
    .biz-radio-button__control {
    border-color: var(--biz-radio-button-checked-border-color);
  }

  /* Focus State */
  .biz-radio-button__input:focus-visible + .biz-radio-button__control {
    outline: none;
    box-shadow: 0 0 0 3px var(--biz-radio-button-focus-ring-color);
  }

  /* Sizes */
  .biz-radio-button--small .biz-radio-button__control {
    width: var(--biz-radio-button-size-sm);
    height: var(--biz-radio-button-size-sm);
  }
  .biz-radio-button--small .biz-radio-button__dot {
    width: var(--biz-radio-button-dot-size-sm);
    height: var(--biz-radio-button-dot-size-sm);
  }
  .biz-radio-button--small .biz-radio-button__label {
    font-size: var(--biz-radio-button-font-size-sm);
  }

  .biz-radio-button--medium .biz-radio-button__control {
    width: var(--biz-radio-button-size-md);
    height: var(--biz-radio-button-size-md);
  }
  .biz-radio-button--medium .biz-radio-button__dot {
    width: var(--biz-radio-button-dot-size-md);
    height: var(--biz-radio-button-dot-size-md);
  }
  .biz-radio-button--medium .biz-radio-button__label {
    font-size: var(--biz-radio-button-font-size-md);
  }

  .biz-radio-button--large .biz-radio-button__control {
    width: var(--biz-radio-button-size-lg);
    height: var(--biz-radio-button-size-lg);
  }
  .biz-radio-button--large .biz-radio-button__dot {
    width: var(--biz-radio-button-dot-size-lg);
    height: var(--biz-radio-button-dot-size-lg);
  }
  .biz-radio-button--large .biz-radio-button__label {
    font-size: var(--biz-radio-button-font-size-lg);
  }

  /* Variants */
  .biz-radio-button--button,
  .biz-radio-button--card {
    border: 1px solid var(--biz-radio-button-border-color);
    border-radius: 6px;
    padding: 8px 12px;
    background-color: var(--biz-radio-button-bg);
    transition: all 0.2s ease-in-out;
  }

  .biz-radio-button--button.biz-radio-button--checked,
  .biz-radio-button--card.biz-radio-button--checked {
    border-color: var(--biz-radio-button-checked-border-color);
    background-color: rgba(37, 99, 235, 0.04);
  }

  .biz-radio-button--card {
    padding: 12px 16px;
    border-radius: 8px;
  }

  /* Label Text */
  .biz-radio-button__label {
    color: var(--biz-radio-button-text-color);
  }

  /* Description Slot */
  .biz-radio-button__description {
    margin-top: 4px;
    padding-left: calc(var(--biz-radio-button-size-md) + var(--biz-radio-button-label-gap));
    font-size: 12px;
    color: var(--biz-radio-button-disabled-text-color);
  }

  /* Error State */
  .biz-radio-button--error .biz-radio-button__control {
    border-color: var(--biz-radio-button-error-color);
  }
  .biz-radio-button--error .biz-radio-button__label {
    color: var(--biz-radio-button-error-color);
  }

  /* Disabled State */
  .biz-radio-button--disabled {
    cursor: not-allowed;
  }
  .biz-radio-button--disabled .biz-radio-button__label-container {
    cursor: not-allowed;
  }
  .biz-radio-button--disabled .biz-radio-button__control {
    background-color: var(--biz-radio-button-disabled-bg);
    border-color: var(--biz-radio-button-disabled-border-color);
  }
  .biz-radio-button--disabled .biz-radio-button__dot {
    background-color: var(--biz-radio-button-disabled-text-color);
  }
  .biz-radio-button--disabled .biz-radio-button__label {
    color: var(--biz-radio-button-disabled-text-color);
  }

  /* Readonly State */
  .biz-radio-button--readonly {
    cursor: default;
  }
  .biz-radio-button--readonly .biz-radio-button__label-container {
    cursor: default;
  }
`, de = class extends _ {
  constructor(...t) {
    super(...t), this.checked = !1, this.value = "", this.name = "", this.size = "medium", this.variant = "standard", this.labelPosition = "right", this.readonly = !1, this.disabled = !1, this.error = !1, this.descriptionId = `biz-radio-desc-${Math.random().toString(36).substring(2, 9)}`;
  }
  static {
    this.styles = cr;
  }
  updated(t) {
    super.updated(t), t.has("checked") && this.setAttribute("aria-checked", this.checked ? "true" : "false"), t.has("disabled") && this.setAttribute("aria-disabled", this.disabled ? "true" : "false"), t.has("error") && this.setAttribute("aria-invalid", this.error ? "true" : "false");
  }
  handleInput(t) {
    if (this.disabled || this.readonly) {
      t.preventDefault();
      return;
    }
    const i = t.target;
    this.checked = i.checked, this.dispatchEvent(new CustomEvent("input", {
      bubbles: !0,
      composed: !0,
      detail: {
        checked: this.checked,
        value: this.value
      }
    }));
  }
  handleChange(t) {
    if (this.disabled || this.readonly) {
      t.preventDefault();
      return;
    }
    const i = t.target;
    this.checked = i.checked, this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: {
        checked: this.checked,
        value: this.value
      }
    }));
  }
  handleFocus(t) {
    this.dispatchEvent(new FocusEvent("focus", {
      bubbles: !0,
      composed: !0,
      relatedTarget: t.relatedTarget
    }));
  }
  handleBlur(t) {
    this.dispatchEvent(new FocusEvent("blur", {
      bubbles: !0,
      composed: !0,
      relatedTarget: t.relatedTarget
    }));
  }
  handleKeyDown(t) {
    this.disabled || this.readonly || t.code === "Space" && (t.preventDefault(), this.checked || (this.checked = !0, this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: {
        checked: this.checked,
        value: this.value
      }
    }))));
  }
  clear() {
    this.checked = !1, this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0,
      detail: {
        checked: !1,
        value: this.value
      }
    }));
  }
  render() {
    return d`
      <div @keydown=${this.handleKeyDown}>
        ${dr({
      checked: this.checked,
      value: this.value,
      name: this.name,
      size: this.size,
      variant: this.variant,
      labelPosition: this.labelPosition,
      readonly: this.readonly,
      disabled: this.disabled,
      error: this.error,
      descriptionId: this.descriptionId,
      onInput: this.handleInput.bind(this),
      onChange: this.handleChange.bind(this),
      onFocus: this.handleFocus.bind(this),
      onBlur: this.handleBlur.bind(this)
    })}
      </div>
    `;
  }
};
o([l({
  type: Boolean,
  reflect: !0
})], de.prototype, "checked", void 0);
o([l({ type: String })], de.prototype, "value", void 0);
o([l({
  type: String,
  reflect: !0
})], de.prototype, "name", void 0);
o([l({
  type: String,
  reflect: !0
})], de.prototype, "size", void 0);
o([l({
  type: String,
  reflect: !0
})], de.prototype, "variant", void 0);
o([l({
  type: String,
  attribute: "label-position",
  reflect: !0
})], de.prototype, "labelPosition", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], de.prototype, "readonly", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], de.prototype, "disabled", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], de.prototype, "error", void 0);
o([g()], de.prototype, "descriptionId", void 0);
de = o([k("biz-radio-button")], de);
var pr = (e) => d`
  <div
    class="biz-radio-button-group ${e.orientation} ${e.size} ${e.variant} ${e.disabled ? "disabled" : ""} ${e.error ? "error" : ""} ${e.readonly ? "readonly" : ""}"
    role="radiogroup"
    aria-labelledby=${e.labelId || "label-slot"}
    aria-describedby=${e.helperTextId || "helper-text-slot"}
    aria-invalid=${e.error ? "true" : "false"}
    aria-required=${e.required ? "true" : "false"}
    aria-disabled=${e.disabled ? "true" : "false"}
    aria-readonly=${e.readonly ? "true" : "false"}
  >
    <div class="biz-radio-button-group__label" id=${e.labelId || "label-slot"}>
      <slot name="label-slot">${e.label}</slot>
    </div>
    <div class="biz-radio-button-group__items" @change=${e.handleValueChange}>
      <slot @slotchange=${e.handleSlotChange}></slot>
    </div>
    <div class="biz-radio-button-group__helper-text" id=${e.helperTextId || "helper-text-slot"}>
      <slot name="helper-text-slot">${e.helperText}</slot>
    </div>
  </div>
`, br = w`
  :host {
    display: inline-flex;
    flex-direction: column;
    width: auto;
    box-sizing: border-box;
    --biz-radio-button-group-gap-sm: 8px;
    --biz-radio-button-group-gap-md: 12px;
    --biz-radio-button-group-gap-lg: 16px;
    --biz-radio-button-group-label-margin-bottom: 8px;
    --biz-radio-button-group-label-color: #111827;
    --biz-radio-button-group-helper-text-color: #6b7280;
    --biz-radio-button-group-error-color: #dc2626;
    --biz-radio-button-group-disabled-opacity: 0.5;
  }

  :host([full-width]) {
    display: flex;
    width: 100%;
  }

  .biz-radio-button-group {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
  }

  .biz-radio-button-group__label {
    display: block;
    margin-bottom: var(--biz-radio-button-group-label-margin-bottom);
    color: var(--biz-radio-button-group-label-color);
    font-weight: 600;
  }

  .biz-radio-button-group__items {
    display: flex;
    gap: var(--biz-radio-button-group-gap-md);
  }

  .biz-radio-button-group.vertical .biz-radio-button-group__items {
    flex-direction: column;
  }

  .biz-radio-button-group.horizontal .biz-radio-button-group__items {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .biz-radio-button-group.small .biz-radio-button-group__items {
    gap: var(--biz-radio-button-group-gap-sm);
    font-size: 0.875rem;
  }

  .biz-radio-button-group.medium .biz-radio-button-group__items {
    gap: var(--biz-radio-button-group-gap-md);
    font-size: 1rem;
  }

  .biz-radio-button-group.large .biz-radio-button-group__items {
    gap: var(--biz-radio-button-group-gap-lg);
    font-size: 1.125rem;
  }

  .biz-radio-button-group.standard {
    background-color: transparent;
  }

  .biz-radio-button-group.card {
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    background-color: #ffffff;
  }

  .biz-radio-button-group.button {
    display: inline-flex;
    padding: 4px;
    background-color: #f3f4f6;
    border-radius: 8px;
  }

  .biz-radio-button-group.outlined {
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 8px;
  }

  .biz-radio-button-group.filled {
    background-color: #f9fafb;
    border-radius: 6px;
    padding: 8px;
  }

  .biz-radio-button-group:hover {
    color: var(--biz-radio-button-group-label-color);
  }

  .biz-radio-button-group:focus-within {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  .biz-radio-button-group.disabled {
    opacity: var(--biz-radio-button-group-disabled-opacity);
    cursor: not-allowed;
    pointer-events: none;
  }

  .biz-radio-button-group.readonly {
    cursor: default;
  }

  .biz-radio-button-group.error .biz-radio-button-group__label {
    color: var(--biz-radio-button-group-error-color);
  }

  .biz-radio-button-group.error .biz-radio-button-group__helper-text {
    color: var(--biz-radio-button-group-error-color);
  }

  .biz-radio-button-group.loading {
    opacity: 0.7;
    pointer-events: none;
  }

  .biz-radio-button-group__helper-text {
    margin-top: 4px;
    font-size: 0.75rem;
    color: var(--biz-radio-button-group-helper-text-color);
  }
`, j = class extends _ {
  constructor(...t) {
    super(...t), this.value = "", this.name = "", this.orientation = "vertical", this.required = !1, this.disabled = !1, this.readonly = !1, this.error = !1, this.size = "medium", this.variant = "standard", this.label = "", this.helperText = "", this.fullWidth = !1, this.labelId = `biz-radio-group-label-${Math.random().toString(36).substring(2, 9)}`, this.helperTextId = `biz-radio-group-helper-${Math.random().toString(36).substring(2, 9)}`;
  }
  static {
    this.styles = br;
  }
  firstUpdated() {
    this.addEventListener("keydown", this.handleKeyDown.bind(this));
  }
  updated(t) {
    (t.has("name") || t.has("disabled") || t.has("readonly") || t.has("value")) && this.syncSubRadioButtons();
  }
  getRadios() {
    const t = this.shadowRoot?.querySelector("slot:not([name])");
    return t ? t.assignedElements({ flatten: !0 }).filter((i) => i.tagName.toLowerCase().includes("radio") || i.getAttribute("role") === "radio") : [];
  }
  syncSubRadioButtons() {
    this.getRadios().forEach((t) => {
      this.name && t.setAttribute("name", this.name), this.disabled ? t.setAttribute("disabled", "") : t.removeAttribute("disabled"), this.readonly ? t.setAttribute("readonly", "") : t.removeAttribute("readonly"), (t.getAttribute("value") || t.value) === this.value ? (t.setAttribute("checked", ""), t.checked = !0) : (t.removeAttribute("checked"), t.checked = !1);
    });
  }
  handleSlotChange() {
    this.syncSubRadioButtons();
  }
  handleValueChange(t) {
    if (this.disabled || this.readonly) return;
    const i = t.target, r = i.value || i.getAttribute("value") || "";
    this.value !== r && (this.value = r, this.dispatchChangeEvent());
  }
  dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent("change", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  clear() {
    this.disabled || this.readonly || (this.value = "", this.syncSubRadioButtons(), this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0
    })));
  }
  handleKeyDown(t) {
    if (this.disabled || this.readonly) return;
    const i = this.getRadios();
    if (i.length === 0) return;
    const r = i.findIndex((s) => s === document.activeElement || s.contains(document.activeElement) || s.checked);
    let a = -1;
    switch (t.key) {
      case "ArrowDown":
      case "ArrowRight":
        t.preventDefault(), a = r < i.length - 1 ? r + 1 : 0;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        t.preventDefault(), a = r > 0 ? r - 1 : i.length - 1;
        break;
      case " ":
      case "Enter":
        if (r >= 0) {
          const s = i[r], n = s.getAttribute("value") || s.value;
          n && this.value !== n && (this.value = n, this.dispatchChangeEvent());
        }
        break;
      case "Escape":
        this.clear();
    }
    if (a !== -1) {
      const s = i[a];
      s.focus();
      const n = s.getAttribute("value") || s.value;
      n && (this.value = n, this.dispatchChangeEvent());
    }
  }
  render() {
    return pr({
      value: this.value,
      name: this.name,
      orientation: this.orientation,
      required: this.required,
      disabled: this.disabled,
      readonly: this.readonly,
      error: this.error,
      size: this.size,
      variant: this.variant,
      label: this.label,
      helperText: this.helperText,
      labelId: this.labelId,
      helperTextId: this.helperTextId,
      handleSlotChange: this.handleSlotChange.bind(this),
      handleValueChange: this.handleValueChange.bind(this)
    });
  }
};
o([l({ type: String })], j.prototype, "value", void 0);
o([l({ type: String })], j.prototype, "name", void 0);
o([l({ type: String })], j.prototype, "orientation", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], j.prototype, "required", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], j.prototype, "disabled", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], j.prototype, "readonly", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], j.prototype, "error", void 0);
o([l({ type: String })], j.prototype, "size", void 0);
o([l({ type: String })], j.prototype, "variant", void 0);
o([l({ type: String })], j.prototype, "label", void 0);
o([l({
  type: String,
  attribute: "helper-text"
})], j.prototype, "helperText", void 0);
o([l({
  type: Boolean,
  attribute: "full-width",
  reflect: !0
})], j.prototype, "fullWidth", void 0);
o([g()], j.prototype, "labelId", void 0);
o([g()], j.prototype, "helperTextId", void 0);
j = o([k("biz-radio-button-group")], j);
var ur = w`
  :host {
    /* Layout & Sizing Token */
    --biz-rating-icon-size-sm: 16px;
    --biz-rating-icon-size-md: 24px;
    --biz-rating-icon-size-lg: 32px;
    --biz-rating-gap: 4px;

    /* Colors - Icon Token */
    --biz-rating-filled-color: #f59e0b;
    --biz-rating-empty-color: #e5e7eb;
    --biz-rating-hover-color: #fbbf24;

    /* Colors - Interactive & States Token */
    --biz-rating-focus-ring-color: rgba(245, 158, 11, 0.4);
    --biz-rating-disabled-filled-color: #d1d5db;
    --biz-rating-disabled-empty-color: #f3f4f6;

    display: inline-block;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .biz-rating {
    display: inline-flex;
    flex-direction: column;
    gap: 4px;
    outline: none;
    user-select: none;
    position: relative;
  }

  .biz-rating__track {
    display: inline-flex;
    align-items: center;
    gap: var(--biz-rating-gap);
  }

  /* Sizes */
  .biz-rating--sm .biz-rating__item {
    width: var(--biz-rating-icon-size-sm);
    height: var(--biz-rating-icon-size-sm);
  }

  .biz-rating--md .biz-rating__item {
    width: var(--biz-rating-icon-size-md);
    height: var(--biz-rating-icon-size-md);
  }

  .biz-rating--lg .biz-rating__item {
    width: var(--biz-rating-icon-size-lg);
    height: var(--biz-rating-icon-size-lg);
  }

  /* Rating Item Layout */
  .biz-rating__item {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.15s ease;
  }

  .biz-rating__icon-layer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .biz-rating__icon-layer--empty {
    color: var(--biz-rating-empty-color);
  }

  .biz-rating__icon-layer--filled {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--biz-rating-filled-color);
    white-space: nowrap;
    transition: width 0.1s ease;
  }

  .biz-rating__default-icon {
    width: 100%;
    height: 100%;
    fill: currentColor;
    flex-shrink: 0;
  }

  /* Tooltip */
  .biz-rating__tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 6px;
    padding: 2px 6px;
    background-color: #1f2937;
    color: #ffffff;
    font-size: 12px;
    border-radius: 4px;
    white-space: nowrap;
    pointer-events: none;
    z-index: 10;
  }

  /* States: Hover */
  .biz-rating:not(.biz-rating--disabled):not(.biz-rating--readonly) .biz-rating__item:hover {
    transform: scale(1.15);
  }

  .biz-rating:not(.biz-rating--disabled):not(.biz-rating--readonly) .biz-rating__icon-layer--filled {
    color: var(--biz-rating-hover-color);
  }

  /* States: Focus */
  .biz-rating--focused .biz-rating__track {
    border-radius: 4px;
    box-shadow: 0 0 0 3px var(--biz-rating-focus-ring-color);
  }

  /* States: Disabled */
  .biz-rating--disabled .biz-rating__item {
    cursor: not-allowed;
  }

  .biz-rating--disabled .biz-rating__icon-layer--empty {
    color: var(--biz-rating-disabled-empty-color);
  }

  .biz-rating--disabled .biz-rating__icon-layer--filled {
    color: var(--biz-rating-disabled-filled-color);
  }

  /* States: Readonly */
  .biz-rating--readonly .biz-rating__item {
    cursor: default;
  }

  /* Label & Helper Slots */
  .biz-rating__value-label {
    font-size: 14px;
    color: #4b5563;
  }

  .biz-rating__helper {
    font-size: 12px;
    color: #6b7280;
  }
`, hr = (e) => {
  const t = e.hoverValue !== null ? e.hoverValue : e.value, i = !e.readonly && !e.disabled, r = (s) => {
    s + 1;
    const n = Math.max(0, Math.min(1, t - s)), c = n > 0 && n < 1, p = `${n * 100}%`;
    return d`
      <div
        class="biz-rating__item ${n > 0 ? "biz-rating__item--active" : ""}"
        data-index="${s}"
        @mousemove=${(b) => i && e.onItemMouseMove(b, s)}
        @click=${(b) => i && e.onItemClick(b, s)}
      >
        <div class="biz-rating__icon-layer biz-rating__icon-layer--empty">
          <slot name="icon-empty-slot">
            <svg class="biz-rating__default-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </slot>
        </div>

        <div
          class="biz-rating__icon-layer biz-rating__icon-layer--filled"
          style="width: ${p};"
        >
          <slot name="${c ? "icon-half-slot" : "icon-filled-slot"}">
            <svg class="biz-rating__default-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </slot>
        </div>

        ${e.showTooltip && e.hoverValue !== null ? d`<div class="biz-rating__tooltip">${t}</div>` : ""}
      </div>
    `;
  }, a = Array.from({ length: e.max }, (s, n) => r(n));
  return d`
    <div
      class="biz-rating biz-rating--${e.size} ${e.disabled ? "biz-rating--disabled" : ""} ${e.readonly ? "biz-rating--readonly" : ""} ${e.focused ? "biz-rating--focused" : ""}"
      tabindex="${e.disabled ? "-1" : "0"}"
      role="slider"
      aria-valuenow="${e.value}"
      aria-valuemin="0"
      aria-valuemax="${e.max}"
      aria-valuetext="별점 ${e.max}점 만점에 ${e.value}점"
      aria-readonly="${e.readonly ? "true" : "false"}"
      aria-disabled="${e.disabled ? "true" : "false"}"
      @mouseleave=${i ? e.onItemMouseLeave : void 0}
      @keydown=${i ? e.onKeyDown : void 0}
      @focus=${i ? e.onFocus : void 0}
      @blur=${i ? e.onBlur : void 0}
    >
      ${e.name ? d`<input type="hidden" name="${e.name}" value="${e.value}" />` : ""}

      <div class="biz-rating__track">
        ${a}
      </div>

      <div class="biz-rating__value-label">
        <slot name="value-label-slot">
          <span class="biz-rating__value-text">${t} / ${e.max}</span>
        </slot>
      </div>

      <div class="biz-rating__helper">
        <slot name="helper-text-slot"></slot>
      </div>
    </div>
  `;
}, ie = class extends _ {
  constructor(...t) {
    super(...t), this.value = 0, this.max = 5, this.precision = 1, this.allowClear = !1, this.readonly = !1, this.disabled = !1, this.showTooltip = !1, this.size = "md", this.name = null, this.hoverValue = null, this.focused = !1;
  }
  static {
    this.styles = ur;
  }
  calculateValueFromEvent(t, i) {
    const r = t.currentTarget.getBoundingClientRect(), a = t.clientX - r.left, s = r.width;
    let n = i + 1;
    if (this.precision < 1) {
      const c = a / s;
      n = i + Math.ceil(c / this.precision) * this.precision;
    }
    return Math.min(Math.max(n, 0), this.max);
  }
  handleItemMouseMove(t, i) {
    if (this.disabled || this.readonly) return;
    const r = this.calculateValueFromEvent(t, i);
    this.hoverValue !== r && (this.hoverValue = r, this.dispatchEvent(new CustomEvent("hover-change", {
      detail: { value: this.hoverValue },
      bubbles: !0,
      composed: !0
    })));
  }
  handleItemMouseLeave() {
    this.disabled || this.readonly || this.hoverValue !== null && (this.hoverValue = null, this.dispatchEvent(new CustomEvent("hover-change", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    })));
  }
  handleItemClick(t, i) {
    if (this.disabled || this.readonly) return;
    const r = this.calculateValueFromEvent(t, i);
    this.setValue(r);
  }
  setValue(t) {
    this.allowClear && this.value === t ? (this.value = 0, this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0
    }))) : this.value = t, this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("change", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleKeyDown(t) {
    if (this.disabled || this.readonly) return;
    const i = this.precision || 1;
    let r = !1;
    switch (t.key) {
      case "ArrowRight":
      case "ArrowUp":
        this.setValue(Math.min(this.max, this.value + i)), r = !0;
        break;
      case "ArrowLeft":
      case "ArrowDown":
        this.setValue(Math.max(0, this.value - i)), r = !0;
        break;
      case "Home":
        this.setValue(0), r = !0;
        break;
      case "End":
        this.setValue(this.max), r = !0;
        break;
      case "Escape":
        this.hoverValue = null, r = !0;
    }
    r && (t.preventDefault(), t.stopPropagation());
  }
  handleFocus() {
    this.disabled || (this.focused = !0);
  }
  handleBlur() {
    this.focused = !1, this.hoverValue = null;
  }
  render() {
    return hr({
      value: this.value,
      max: this.max,
      precision: this.precision,
      allowClear: this.allowClear,
      readonly: this.readonly,
      disabled: this.disabled,
      showTooltip: this.showTooltip,
      size: this.size,
      name: this.name,
      hoverValue: this.hoverValue,
      focused: this.focused,
      onItemMouseMove: this.handleItemMouseMove.bind(this),
      onItemMouseLeave: this.handleItemMouseLeave.bind(this),
      onItemClick: this.handleItemClick.bind(this),
      onKeyDown: this.handleKeyDown.bind(this),
      onFocus: this.handleFocus.bind(this),
      onBlur: this.handleBlur.bind(this)
    });
  }
};
o([l({ type: Number })], ie.prototype, "value", void 0);
o([l({ type: Number })], ie.prototype, "max", void 0);
o([l({ type: Number })], ie.prototype, "precision", void 0);
o([l({
  type: Boolean,
  attribute: "allow-clear"
})], ie.prototype, "allowClear", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], ie.prototype, "readonly", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], ie.prototype, "disabled", void 0);
o([l({
  type: Boolean,
  attribute: "show-tooltip"
})], ie.prototype, "showTooltip", void 0);
o([l({ type: String })], ie.prototype, "size", void 0);
o([l({ type: String })], ie.prototype, "name", void 0);
o([g()], ie.prototype, "hoverValue", void 0);
o([g()], ie.prototype, "focused", void 0);
ie = o([k("biz-rating")], ie);
var gr = (e) => {
  const t = e.clearable && !e.disabled && !e.readonly && !!e.value, i = e.showSearchButton;
  return d`
    <div
      class=${M({
    "biz-search-input": !0,
    [`biz-search-input--${e.variant}`]: !0,
    [`biz-search-input--${e.size}`]: !0,
    "biz-search-input--disabled": e.disabled,
    "biz-search-input--readonly": e.readonly,
    "biz-search-input--error": e.error,
    "biz-search-input--loading": e.loading,
    "biz-search-input--full-width": e.fullWidth
  })}
    >
      <div class="biz-search-input__label-container">
        <slot name="label-slot">
          ${e.label ? d`<label for="search-control" class="biz-search-input__label">${e.label}</label>` : ""}
        </slot>
      </div>

      <div class="biz-search-input__control-wrapper">
        <span class="biz-search-input__start-slot">
          <slot name="start-slot">
            ${e.loading ? d`<span class="biz-search-input__spinner" aria-hidden="true"></span>` : d`
                  <svg class="biz-search-input__search-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                `}
          </slot>
        </span>

        <input
          id="search-control"
          type="text"
          role="searchbox"
          class="biz-search-input__control"
          .value=${Nt(e.value)}
          placeholder=${e.placeholder}
          ?disabled=${e.disabled}
          ?readonly=${e.readonly}
          ?required=${e.required}
          aria-invalid=${e.error ? "true" : "false"}
          aria-required=${e.required ? "true" : "false"}
          aria-busy=${e.loading ? "true" : "false"}
          aria-describedby="helper-text"
          @input=${e.handleInput}
          @change=${e.handleChange}
          @keydown=${e.handleKeyDown}
          @focus=${e.handleFocus}
          @blur=${e.handleBlur}
        />

        <span class="biz-search-input__end-slot">
          <slot name="end-slot">
            ${t ? d`
                  <button
                    type="button"
                    class="biz-search-input__clear-btn"
                    aria-label="검색어 삭제"
                    @click=${e.handleClear}
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                      <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </button>
                ` : ""}
            ${i ? d`
                  <slot name="search-button-slot">
                    <button
                      type="button"
                      class="biz-search-input__action-btn"
                      aria-label="검색 실행"
                      ?disabled=${e.disabled || e.readonly}
                      @click=${e.handleSearchAction}
                    >
                      검색
                    </button>
                  </slot>
                ` : ""}
          </slot>
        </span>
      </div>

      <div id="helper-text" class="biz-search-input__helper-container">
        <slot name="helper-text-slot">
          ${e.helperText ? d`<span class="biz-search-input__helper-text">${e.helperText}</span>` : ""}
        </slot>
      </div>

      <div class="biz-search-input__sr-only" aria-live="polite">
        ${e.srAnnounceText}
      </div>
    </div>
  `;
}, vr = w`
  :host {
    display: inline-block;
    box-sizing: border-box;

    /* Layout & Sizing */
    --biz-search-input-height-sm: 32px;
    --biz-search-input-height-md: 40px;
    --biz-search-input-height-lg: 48px;
    --biz-search-input-padding-x: 12px;
    --biz-search-input-padding-y: 8px;
    --biz-search-input-border-radius: 4px;

    /* Colors - Base */
    --biz-search-input-bg-color: #ffffff;
    --biz-search-input-filled-bg-color: #f3f4f6;
    --biz-search-input-border-color: #d1d5db;
    --biz-search-input-text-color: #111827;
    --biz-search-input-placeholder-color: #9ca3af;
    --biz-search-input-icon-color: #6b7280;

    /* Colors - Interactive States */
    --biz-search-input-hover-border-color: #9ca3af;
    --biz-search-input-focus-border-color: #2563eb;
    --biz-search-input-focus-ring-color: rgba(37, 99, 235, 0.2);

    /* Colors - Error & Disabled */
    --biz-search-input-error-color: #dc2626;
    --biz-search-input-disabled-bg-color: #f3f4f6;
    --biz-search-input-disabled-text-color: #9ca3af;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .biz-search-input {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 280px;
    font-family: inherit;
  }

  .biz-search-input--full-width {
    width: 100%;
  }

  .biz-search-input__label {
    font-size: 14px;
    font-weight: 500;
    color: var(--biz-search-input-text-color);
  }

  .biz-search-input__control-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    background-color: var(--biz-search-input-bg-color);
    border: 1px solid var(--biz-search-input-border-color);
    border-radius: var(--biz-search-input-border-radius);
    padding: 0 var(--biz-search-input-padding-x);
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  }

  /* Sizes */
  .biz-search-input--sm .biz-search-input__control-wrapper {
    height: var(--biz-search-input-height-sm);
    font-size: 12px;
  }

  .biz-search-input--md .biz-search-input__control-wrapper {
    height: var(--biz-search-input-height-md);
    font-size: 14px;
  }

  .biz-search-input--lg .biz-search-input__control-wrapper {
    height: var(--biz-search-input-height-lg);
    font-size: 16px;
  }

  /* Variants */
  .biz-search-input--outlined .biz-search-input__control-wrapper {
    border-style: solid;
  }

  .biz-search-input--filled .biz-search-input__control-wrapper {
    background-color: var(--biz-search-input-filled-bg-color);
    border-color: transparent;
  }

  .biz-search-input--standard .biz-search-input__control-wrapper {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
  }

  /* Input Control */
  .biz-search-input__control {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    color: var(--biz-search-input-text-color);
    font-size: inherit;
    font-family: inherit;
    outline: none;
    padding: 0 8px;
  }

  .biz-search-input__control::placeholder {
    color: var(--biz-search-input-placeholder-color);
  }

  /* Slots */
  .biz-search-input__start-slot,
  .biz-search-input__end-slot {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--biz-search-input-icon-color);
  }

  /* Buttons */
  .biz-search-input__clear-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    padding: 2px;
    margin: 0;
    cursor: pointer;
    color: var(--biz-search-input-icon-color);
    border-radius: 50%;
  }

  .biz-search-input__clear-btn:hover {
    opacity: 0.8;
  }

  .biz-search-input__action-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: var(--biz-search-input-focus-border-color);
    color: #ffffff;
    padding: 4px 10px;
    border-radius: var(--biz-search-input-border-radius);
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
  }

  /* Interactive States */
  .biz-search-input__control-wrapper:hover {
    border-color: var(--biz-search-input-hover-border-color);
  }

  .biz-search-input__control-wrapper:focus-within {
    border-color: var(--biz-search-input-focus-border-color);
    box-shadow: 0 0 0 3px var(--biz-search-input-focus-ring-color);
  }

  /* Disabled State */
  .biz-search-input--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .biz-search-input--disabled .biz-search-input__control-wrapper {
    background-color: var(--biz-search-input-disabled-bg-color);
    border-color: var(--biz-search-input-border-color);
  }

  .biz-search-input--disabled .biz-search-input__control {
    color: var(--biz-search-input-disabled-text-color);
    cursor: not-allowed;
  }

  /* Readonly State */
  .biz-search-input--readonly .biz-search-input__control {
    cursor: default;
  }

  /* Error State */
  .biz-search-input--error .biz-search-input__control-wrapper {
    border-color: var(--biz-search-input-error-color);
  }

  .biz-search-input--error .biz-search-input__control-wrapper:focus-within {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
  }

  .biz-search-input__helper-text {
    font-size: 12px;
    color: var(--biz-search-input-icon-color);
  }

  .biz-search-input--error .biz-search-input__helper-text {
    color: var(--biz-search-input-error-color);
  }

  /* Spinner */
  .biz-search-input__spinner {
    width: 14px;
    height: 14px;
    border: 2px solid var(--biz-search-input-icon-color);
    border-top-color: transparent;
    border-radius: 50%;
    animation: biz-search-input-spin 0.8s linear infinite;
  }

  @keyframes biz-search-input-spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Screen Reader Only */
  .biz-search-input__sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`, U = class extends _ {
  constructor(...t) {
    super(...t), this.value = "", this.placeholder = "검색어를 입력하세요", this.clearable = !0, this.showSearchButton = !1, this.loading = !1, this.required = !1, this.readonly = !1, this.disabled = !1, this.error = !1, this.variant = "outlined", this.size = "medium", this.fullWidth = !1, this.label = "", this.helperText = "", this.srAnnounceText = "";
  }
  static {
    this.styles = vr;
  }
  handleInput(t) {
    const i = t.target;
    this.value = i.value, this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(t) {
    const i = t.target;
    this.value = i.value, this.dispatchEvent(new CustomEvent("change", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleKeyDown(t) {
    this.disabled || (t.key === "Enter" ? this.handleSearchAction() : t.key === "Escape" && this.value && this.clearable && !this.readonly && this.handleClear());
  }
  handleClear() {
    this.disabled || this.readonly || (this.value = "", this.srAnnounceText = "검색어가 지워졌습니다", this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("input", {
      detail: { value: "" },
      bubbles: !0,
      composed: !0
    })));
  }
  handleSearchAction() {
    this.disabled || this.readonly || this.dispatchEvent(new CustomEvent("search", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleFocus(t) {
    this.dispatchEvent(new CustomEvent("focus", {
      detail: t,
      bubbles: !0,
      composed: !0
    }));
  }
  handleBlur(t) {
    this.dispatchEvent(new CustomEvent("blur", {
      detail: t,
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return gr({
      value: this.value,
      placeholder: this.placeholder,
      clearable: this.clearable,
      showSearchButton: this.showSearchButton,
      loading: this.loading,
      required: this.required,
      readonly: this.readonly,
      disabled: this.disabled,
      error: this.error,
      variant: this.variant,
      size: this.size,
      fullWidth: this.fullWidth,
      label: this.label,
      helperText: this.helperText,
      srAnnounceText: this.srAnnounceText,
      handleInput: this.handleInput.bind(this),
      handleChange: this.handleChange.bind(this),
      handleKeyDown: this.handleKeyDown.bind(this),
      handleClear: this.handleClear.bind(this),
      handleSearchAction: this.handleSearchAction.bind(this),
      handleFocus: this.handleFocus.bind(this),
      handleBlur: this.handleBlur.bind(this)
    });
  }
};
o([l({ type: String })], U.prototype, "value", void 0);
o([l({ type: String })], U.prototype, "placeholder", void 0);
o([l({ type: Boolean })], U.prototype, "clearable", void 0);
o([l({
  type: Boolean,
  attribute: "show-search-button"
})], U.prototype, "showSearchButton", void 0);
o([l({ type: Boolean })], U.prototype, "loading", void 0);
o([l({ type: Boolean })], U.prototype, "required", void 0);
o([l({ type: Boolean })], U.prototype, "readonly", void 0);
o([l({ type: Boolean })], U.prototype, "disabled", void 0);
o([l({ type: Boolean })], U.prototype, "error", void 0);
o([l({ type: String })], U.prototype, "variant", void 0);
o([l({ type: String })], U.prototype, "size", void 0);
o([l({
  type: Boolean,
  attribute: "full-width"
})], U.prototype, "fullWidth", void 0);
o([l({ type: String })], U.prototype, "label", void 0);
o([l({
  type: String,
  attribute: "helper-text"
})], U.prototype, "helperText", void 0);
o([g()], U.prototype, "srAnnounceText", void 0);
U = o([k("biz-search-input")], U);
var mr = (e) => {
  const t = e.mode === "range", i = e.orientation === "vertical", r = e.min ?? 0, a = e.max ?? 100, s = e.step ?? 1;
  let n = r, c = a;
  t ? Array.isArray(e.value) && (n = e.value[0] ?? r, c = e.value[1] ?? a) : c = typeof e.value == "number" ? e.value : Array.isArray(e.value) ? e.value[0] : r;
  const p = (z) => Math.max(0, Math.min(100, (z - r) / (a - r || 1) * 100)), b = t ? p(n) : 0, u = p(c), h = i ? `bottom: ${b}%; height: ${u - b}%;` : `left: ${b}%; width: ${u - b}%;`, v = i ? `bottom: ${b}%;` : `left: ${b}%;`, m = i ? `bottom: ${u}%;` : `left: ${u}%;`;
  return d`
    <div
      class="biz-slider ${e.variant ?? "standard"} ${e.size ?? "medium"} ${i ? "vertical" : "horizontal"} ${e.disabled ? "disabled" : ""} ${e.readonly ? "readonly" : ""} ${e.error ? "error" : ""} ${e.loading ? "loading" : ""}"
    >
      <div class="biz-slider__label-container">
        <slot name="label-slot"></slot>
      </div>

      <div class="biz-slider__body">
        <div class="biz-slider__prefix">
          <slot name="prefix-icon-slot"></slot>
        </div>

        <div
          class="biz-slider__track-container"
          @pointerdown=${e.handleTrackPointerDown}
        >
          <div class="biz-slider__track"></div>
          <div class="biz-slider__fill" style="${h}"></div>

          ${e.showTicks ? d`
            <div class="biz-slider__ticks">
              ${e.renderTicks ? e.renderTicks() : ""}
            </div>
          ` : ""}

          ${t ? d`
            <div
              class="biz-slider__thumb biz-slider__thumb--start ${e.activeThumb === "start" ? "active" : ""}"
              style="${v}"
              tabindex="${e.disabled ? -1 : 0}"
              role="slider"
              aria-valuemin="${r}"
              aria-valuemax="${a}"
              aria-valuenow="${n}"
              aria-orientation="${e.orientation ?? "horizontal"}"
              aria-disabled="${e.disabled ? "true" : "false"}"
              aria-readonly="${e.readonly ? "true" : "false"}"
              @keydown=${(z) => e.handleKeyDown(z, "start")}
              @focus=${(z) => e.handleFocus(z, "start")}
              @blur=${(z) => e.handleBlur(z, "start")}
              @pointerdown=${(z) => e.handleThumbPointerDown(z, "start")}
            >
              ${e.showTooltip !== "never" ? d`
                <div class="biz-slider__tooltip">
                  <slot name="tooltip-slot">
                    ${e.formatTooltip ? e.formatTooltip(n) : n}
                  </slot>
                </div>
              ` : ""}
            </div>
          ` : ""}

          <div
            class="biz-slider__thumb biz-slider__thumb--end ${e.activeThumb === "end" ? "active" : ""}"
            style="${m}"
            tabindex="${e.disabled ? -1 : 0}"
            role="slider"
            aria-valuemin="${r}"
            aria-valuemax="${a}"
            aria-valuenow="${c}"
            aria-orientation="${e.orientation ?? "horizontal"}"
            aria-disabled="${e.disabled ? "true" : "false"}"
            aria-readonly="${e.readonly ? "true" : "false"}"
            @keydown=${(z) => e.handleKeyDown(z, "end")}
            @focus=${(z) => e.handleFocus(z, "end")}
            @blur=${(z) => e.handleBlur(z, "end")}
            @pointerdown=${(z) => e.handleThumbPointerDown(z, "end")}
          >
            ${e.showTooltip !== "never" ? d`
              <div class="biz-slider__tooltip">
                <slot name="tooltip-slot">
                  ${e.formatTooltip ? e.formatTooltip(c) : c}
                </slot>
              </div>
            ` : ""}
          </div>

          <slot name="tick-label-slot"></slot>
        </div>

        <div class="biz-slider__suffix">
          <slot name="suffix-icon-slot"></slot>
        </div>
      </div>

      <div class="biz-slider__helper-container">
        <slot name="helper-text-slot"></slot>
      </div>

      <input
        type="range"
        class="biz-slider__native-input"
        .name=${e.name || ""}
        .min=${String(r)}
        .max=${String(a)}
        .step=${String(s)}
        .value=${String(t ? `${n},${c}` : c)}
        ?disabled=${e.disabled}
        hidden
      />
    </div>
  `;
}, zr = w`
  :host {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;

    --biz-slider-track-height: 6px;
    --biz-slider-thumb-size-sm: 14px;
    --biz-slider-thumb-size-md: 18px;
    --biz-slider-thumb-size-lg: 22px;
    --biz-slider-tick-size: 4px;

    --biz-slider-track-bg: #e5e7eb;
    --biz-slider-range-fill-bg: #2563eb;

    --biz-slider-thumb-bg: #ffffff;
    --biz-slider-thumb-border-color: #2563eb;
    --biz-slider-thumb-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    --biz-slider-tooltip-bg: #1f2937;
    --biz-slider-tooltip-text-color: #ffffff;

    --biz-slider-thumb-hover-bg: #eff6ff;
    --biz-slider-focus-ring-color: rgba(37, 99, 235, 0.3);

    --biz-slider-error-color: #dc2626;
    --biz-slider-disabled-track-bg: #f3f4f6;
    --biz-slider-disabled-fill-bg: #9ca3af;
    --biz-slider-disabled-thumb-border: #d1d5db;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  .biz-slider {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    font-family: inherit;
  }

  .biz-slider__body {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
  }

  .biz-slider.vertical .biz-slider__body {
    flex-direction: column;
    height: 200px;
  }

  .biz-slider__track-container {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 0;
    touch-action: none;
  }

  .biz-slider.vertical .biz-slider__track-container {
    height: 100%;
    padding: 0 10px;
    justify-content: center;
  }

  .biz-slider__track {
    width: 100%;
    height: var(--biz-slider-track-height);
    background-color: var(--biz-slider-track-bg);
    border-radius: 9999px;
    position: relative;
  }

  .biz-slider.vertical .biz-slider__track {
    width: var(--biz-slider-track-height);
    height: 100%;
  }

  .biz-slider__fill {
    position: absolute;
    background-color: var(--biz-slider-range-fill-bg);
    border-radius: 9999px;
    height: var(--biz-slider-track-height);
  }

  .biz-slider.vertical .biz-slider__fill {
    width: var(--biz-slider-track-height);
  }

  .biz-slider__thumb {
    position: absolute;
    width: var(--thumb-size, var(--biz-slider-thumb-size-md));
    height: var(--thumb-size, var(--biz-slider-thumb-size-md));
    background-color: var(--biz-slider-thumb-bg);
    border: 2px solid var(--biz-slider-thumb-border-color);
    border-radius: 50%;
    box-shadow: var(--biz-slider-thumb-shadow);
    transform: translate(-50%, -50%);
    top: 50%;
    cursor: grab;
    outline: none;
    transition: background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    z-index: 2;
  }

  .biz-slider.vertical .biz-slider__thumb {
    left: 50%;
    top: auto;
  }

  .biz-slider__thumb:hover {
    background-color: var(--biz-slider-thumb-hover-bg);
  }

  .biz-slider__thumb:focus-visible {
    box-shadow: 0 0 0 4px var(--biz-slider-focus-ring-color);
  }

  .biz-slider__thumb.active {
    cursor: grabbing;
    transform: translate(-50%, -50%) scale(1.15);
  }

  .biz-slider__tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    padding: 4px 8px;
    background-color: var(--biz-slider-tooltip-bg);
    color: var(--biz-slider-tooltip-text-color);
    font-size: 12px;
    border-radius: 4px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  .biz-slider__thumb:hover .biz-slider__tooltip,
  .biz-slider__thumb.active .biz-slider__tooltip,
  .biz-slider__thumb:focus-visible .biz-slider__tooltip {
    opacity: 1;
  }

  .biz-slider.small {
    --thumb-size: var(--biz-slider-thumb-size-sm);
  }

  .biz-slider.medium {
    --thumb-size: var(--biz-slider-thumb-size-md);
  }

  .biz-slider.large {
    --thumb-size: var(--biz-slider-thumb-size-lg);
  }

  .biz-slider.standard {
    border: none;
  }

  .biz-slider.outlined {
    border: 1px solid var(--biz-slider-track-bg);
    padding: 12px;
    border-radius: 8px;
  }

  .biz-slider.filled {
    background-color: #f9fafb;
    padding: 12px;
    border-radius: 8px;
  }

  .biz-slider.disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  .biz-slider.disabled .biz-slider__track {
    background-color: var(--biz-slider-disabled-track-bg);
  }

  .biz-slider.disabled .biz-slider__fill {
    background-color: var(--biz-slider-disabled-fill-bg);
  }

  .biz-slider.disabled .biz-slider__thumb {
    border-color: var(--biz-slider-disabled-thumb-border);
    cursor: not-allowed;
  }

  .biz-slider.readonly .biz-slider__track-container {
    cursor: default;
  }

  .biz-slider.readonly .biz-slider__thumb {
    cursor: default;
  }

  .biz-slider.error .biz-slider__fill {
    background-color: var(--biz-slider-error-color);
  }

  .biz-slider.error .biz-slider__thumb {
    border-color: var(--biz-slider-error-color);
  }

  .biz-slider.loading {
    opacity: 0.7;
    pointer-events: none;
  }

  .biz-slider__ticks {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
  }

  .biz-slider__native-input {
    display: none;
  }
`, N = class extends _ {
  constructor(...t) {
    super(...t), this.value = 0, this.min = 0, this.max = 100, this.step = 1, this.mode = "single", this.orientation = "horizontal", this.showTicks = !1, this.showTooltip = "hover", this.formatTooltip = null, this.readonly = !1, this.disabled = !1, this.error = !1, this.variant = "standard", this.size = "medium", this.name = "", this.activeThumb = null, this.isDragging = !1, this.handleDocumentPointerMove = (i) => {
      !this.isDragging || !this.activeThumb || this.disabled || this.readonly || this.updateValueFromPointer(i, this.activeThumb, !0);
    }, this.handleDocumentPointerUp = (i) => {
      if (!this.isDragging) return;
      this.isDragging = !1;
      const r = this.activeThumb;
      this.activeThumb = null, window.removeEventListener("pointermove", this.handleDocumentPointerMove), window.removeEventListener("pointerup", this.handleDocumentPointerUp), r && (this.updateValueFromPointer(i, r, !1), this.dispatchChangeEvent());
    };
  }
  static {
    this.styles = zr;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("pointermove", this.handleDocumentPointerMove), window.removeEventListener("pointerup", this.handleDocumentPointerUp);
  }
  getValueArray() {
    return Array.isArray(this.value) ? [this.value[0] ?? this.min, this.value[1] ?? this.max] : [this.min, typeof this.value == "number" ? this.value : this.min];
  }
  clampAndSnap(t) {
    let i = Math.max(this.min, Math.min(this.max, t));
    if (this.step > 0) {
      const r = Math.round((i - this.min) / this.step);
      i = this.min + r * this.step;
    }
    return Math.max(this.min, Math.min(this.max, Number(i.toFixed(10))));
  }
  updateValueFromPointer(t, i, r) {
    const a = this.shadowRoot?.querySelector(".biz-slider__track-container");
    if (!a) return;
    const s = a.getBoundingClientRect();
    let n = 0;
    this.orientation === "vertical" ? n = (s.bottom - t.clientY) / s.height : n = (t.clientX - s.left) / s.width, n = Math.max(0, Math.min(1, n));
    const c = this.min + n * (this.max - this.min), p = this.clampAndSnap(c);
    if (this.mode === "range") {
      const [b, u] = this.getValueArray();
      let h = b, v = u;
      i === "start" ? h = Math.min(p, u) : v = Math.max(p, b);
      const m = [h, v];
      (b !== h || u !== v) && (this.value = m, r && this.dispatchInputEvent());
    } else this.value !== p && (this.value = p, r && this.dispatchInputEvent());
  }
  handleTrackPointerDown(t) {
    if (this.disabled || this.readonly || t.target.classList.contains("biz-slider__thumb")) return;
    const i = this.shadowRoot?.querySelector(".biz-slider__track-container");
    if (!i) return;
    const r = i.getBoundingClientRect();
    let a = 0;
    this.orientation === "vertical" ? a = (r.bottom - t.clientY) / r.height : a = (t.clientX - r.left) / r.width, a = Math.max(0, Math.min(1, a));
    const s = this.clampAndSnap(this.min + a * (this.max - this.min));
    let n = "end";
    if (this.mode === "range") {
      const [c, p] = this.getValueArray();
      n = Math.abs(s - c) < Math.abs(s - p) ? "start" : "end";
    }
    this.activeThumb = n, this.isDragging = !0, this.updateValueFromPointer(t, n, !0), this.dispatchChangeEvent(), window.addEventListener("pointermove", this.handleDocumentPointerMove), window.addEventListener("pointerup", this.handleDocumentPointerUp);
  }
  handleThumbPointerDown(t, i) {
    this.disabled || this.readonly || (t.stopPropagation(), this.activeThumb = i, this.isDragging = !0, window.addEventListener("pointermove", this.handleDocumentPointerMove), window.addEventListener("pointerup", this.handleDocumentPointerUp));
  }
  handleFocus(t, i) {
    this.dispatchEvent(new CustomEvent("focus", {
      bubbles: !0,
      composed: !0
    }));
  }
  handleBlur(t, i) {
    this.dispatchEvent(new CustomEvent("blur", {
      bubbles: !0,
      composed: !0
    }));
  }
  handleKeyDown(t, i) {
    if (this.disabled || this.readonly) return;
    const r = this.mode === "range", [a, s] = this.getValueArray();
    let n = r ? i === "start" ? a : s : typeof this.value == "number" ? this.value : a, c = !0;
    const p = this.step * 10;
    switch (t.key) {
      case "ArrowRight":
      case "ArrowUp":
        n += this.step;
        break;
      case "ArrowLeft":
      case "ArrowDown":
        n -= this.step;
        break;
      case "PageUp":
        n += p;
        break;
      case "PageDown":
        n -= p;
        break;
      case "Home":
        n = this.min;
        break;
      case "End":
        n = this.max;
        break;
      default:
        c = !1;
    }
    if (c) {
      t.preventDefault();
      const b = this.clampAndSnap(n);
      if (r) {
        let u = a, h = s;
        i === "start" ? u = Math.min(b, s) : h = Math.max(b, a), this.value = [u, h];
      } else this.value = b;
      this.dispatchInputEvent(), this.dispatchChangeEvent();
    }
  }
  clear() {
    this.disabled || this.readonly || (this.mode === "range" ? this.value = [this.min, this.min] : this.value = this.min, this.dispatchInputEvent(), this.dispatchChangeEvent(), this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0
    })));
  }
  dispatchInputEvent() {
    this.dispatchEvent(new CustomEvent("input", {
      bubbles: !0,
      composed: !0,
      detail: { value: this.value }
    }));
  }
  dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: { value: this.value }
    }));
  }
  renderTicks() {
    if (!this.showTicks) return null;
    const t = Math.floor((this.max - this.min) / this.step);
    if (t <= 0 || t > 100) return null;
    const i = [];
    for (let r = 0; r <= t; r++) {
      const a = r / t * 100, s = this.orientation === "vertical" ? `bottom: ${a}%` : `left: ${a}%`;
      i.push(d`<span class="biz-slider__tick" style="${s}"></span>`);
    }
    return i;
  }
  render() {
    return mr(this);
  }
};
o([l({ type: Object })], N.prototype, "value", void 0);
o([l({ type: Number })], N.prototype, "min", void 0);
o([l({ type: Number })], N.prototype, "max", void 0);
o([l({ type: Number })], N.prototype, "step", void 0);
o([l({ type: String })], N.prototype, "mode", void 0);
o([l({ type: String })], N.prototype, "orientation", void 0);
o([l({
  type: Boolean,
  attribute: "show-ticks"
})], N.prototype, "showTicks", void 0);
o([l({
  type: String,
  attribute: "show-tooltip"
})], N.prototype, "showTooltip", void 0);
o([l({ attribute: !1 })], N.prototype, "formatTooltip", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], N.prototype, "readonly", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], N.prototype, "disabled", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], N.prototype, "error", void 0);
o([l({ type: String })], N.prototype, "variant", void 0);
o([l({ type: String })], N.prototype, "size", void 0);
o([l({ type: String })], N.prototype, "name", void 0);
o([g()], N.prototype, "activeThumb", void 0);
N = o([k("biz-slider")], N);
var fr = w`
  :host {
    --biz-split-pane-resizer-size-sm: 4px;
    --biz-split-pane-resizer-size-md: 6px;
    --biz-split-pane-resizer-size-lg: 8px;
    --biz-split-pane-resizer-hit-area: 12px;
    --biz-split-pane-bg-color: #ffffff;
    --biz-split-pane-resizer-bg-color: #e5e7eb;
    --biz-split-pane-resizer-hover-color: #2563eb;
    --biz-split-pane-resizer-active-color: #1d4ed8;
    --biz-split-pane-resizer-focus-ring-color: rgba(37, 99, 235, 0.2);

    display: flex;
    width: 100%;
    height: 100%;
  }

  .biz-split-pane {
    display: flex;
    background-color: var(--biz-split-pane-bg-color);
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .biz-split-pane.full-width {
    width: 100vw;
  }

  .biz-split-pane.full-height {
    height: 100vh;
  }

  .biz-split-pane.horizontal {
    flex-direction: row;
  }

  .biz-split-pane.vertical {
    flex-direction: column;
  }

  .pane {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: flex 0.1s ease;
  }

  .pane.collapsed {
    flex: 0 0 0% !important;
    min-width: 0 !important;
    min-height: 0 !important;
  }

  .resizer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--biz-split-pane-resizer-bg-color);
    z-index: 10;
    outline: none;
    transition: background-color 0.2s ease;
  }

  .resizer::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  .biz-split-pane.horizontal > .resizer {
    width: var(--biz-split-pane-resizer-size-md);
    cursor: col-resize;
  }

  .biz-split-pane.horizontal > .resizer::after {
    width: var(--biz-split-pane-resizer-hit-area);
    height: 100%;
  }

  .biz-split-pane.vertical > .resizer {
    height: var(--biz-split-pane-resizer-size-md);
    cursor: row-resize;
  }

  .biz-split-pane.vertical > .resizer::after {
    height: var(--biz-split-pane-resizer-hit-area);
    width: 100%;
  }

  .biz-split-pane.Small > .resizer {
    width: var(--biz-split-pane-resizer-size-sm);
  }

  .biz-split-pane.vertical.Small > .resizer {
    height: var(--biz-split-pane-resizer-size-sm);
  }

  .biz-split-pane.Large > .resizer {
    width: var(--biz-split-pane-resizer-size-lg);
  }

  .biz-split-pane.vertical.Large > .resizer {
    height: var(--biz-split-pane-resizer-size-lg);
  }

  .biz-split-pane.Invisible > .resizer {
    background-color: transparent;
  }

  .resizer:hover,
  .resizer:focus-visible {
    background-color: var(--biz-split-pane-resizer-hover-color);
  }

  .biz-split-pane.Invisible > .resizer:hover,
  .biz-split-pane.Invisible > .resizer:focus-visible {
    background-color: var(--biz-split-pane-resizer-hover-color);
  }

  .resizer:focus-visible {
    box-shadow: 0 0 0 3px var(--biz-split-pane-resizer-focus-ring-color);
  }

  .resizer.active {
    background-color: var(--biz-split-pane-resizer-active-color);
  }

  .biz-split-pane.disabled > .resizer {
    background-color: var(--biz-split-pane-resizer-bg-color);
    cursor: default;
    pointer-events: none;
  }

  .grip-icon {
    width: 4px;
    height: 16px;
    border-left: 1px solid #9ca3af;
    border-right: 1px solid #9ca3af;
  }

  .biz-split-pane.vertical .grip-icon {
    width: 16px;
    height: 4px;
    border-top: 1px solid #9ca3af;
    border-bottom: 1px solid #9ca3af;
    border-left: none;
    border-right: none;
  }
`, yr = (e) => d`
  <div 
    class="biz-split-pane ${e.direction} ${e.variant} ${e.size} ${e.disabled ? "disabled" : ""} ${e.collapsible ? "collapsible" : ""} ${e.fullWidth ? "full-width" : ""} ${e.fullHeight ? "full-height" : ""}"
  >
    <div 
      id="pane-1"
      class="pane pane-1 ${e.collapsed === 1 ? "collapsed" : ""}" 
      style="flex: ${e.sizes[0]} 1 0%; min-width: ${e.minSizes[0]}px; max-width: ${e.maxSizes[0] ? e.maxSizes[0] + "px" : "none"};"
    >
      <slot name="pane-1-slot"></slot>
    </div>
    
    <div
      class="resizer ${e.isDragging ? "active" : ""}"
      role="separator"
      aria-orientation="${e.direction}"
      aria-valuenow="${e.sizes[0]}"
      aria-valuemin="${e.minSizes[0]}"
      aria-valuemax="${e.maxSizes[0] || 100}"
      aria-controls="pane-1 pane-2"
      tabindex="${e.disabled ? "-1" : "0"}"
      @mousedown="${e.onResizeStart}"
      @touchstart="${e.onResizeStart}"
      @keydown="${e.onKeyDown}"
      @dblclick="${e.onDoubleClick}"
    >
      <slot name="resizer-slot">
        ${e.variant === "Grip" ? d`<div class="grip-icon"></div>` : d``}
      </slot>
    </div>

    <div 
      id="pane-2"
      class="pane pane-2 ${e.collapsed === 2 ? "collapsed" : ""}" 
      style="flex: ${e.sizes[1]} 1 0%; min-width: ${e.minSizes[1]}px; max-width: ${e.maxSizes[1] ? e.maxSizes[1] + "px" : "none"};"
    >
      <slot name="pane-2-slot"></slot>
    </div>
  </div>
`, Z = class extends _ {
  constructor(...t) {
    super(...t), this.direction = "horizontal", this.sizes = [50, 50], this.minSizes = [100, 100], this.maxSizes = [], this.disabled = !1, this.collapsible = !1, this.variant = "Line", this.size = "Medium", this.fullWidth = !1, this.fullHeight = !1, this.isDragging = !1, this.collapsed = 0, this.startPos = 0, this.startSizes = [], this.onResizeStart = (i) => {
      this.disabled || (this.isDragging = !0, this.startSizes = [...this.sizes], this.startPos = i instanceof MouseEvent ? this.direction === "horizontal" ? i.clientX : i.clientY : this.direction === "horizontal" ? i.touches[0].clientX : i.touches[0].clientY, window.addEventListener("mousemove", this.onResize), window.addEventListener("touchmove", this.onResize), window.addEventListener("mouseup", this.onResizeEnd), window.addEventListener("touchend", this.onResizeEnd), this.dispatchEvent(new CustomEvent("resize-start", {
        bubbles: !0,
        composed: !0,
        detail: { sizes: this.sizes }
      })));
    }, this.onResize = (i) => {
      if (!this.isDragging) return;
      const r = (i instanceof MouseEvent ? this.direction === "horizontal" ? i.clientX : i.clientY : this.direction === "horizontal" ? i.touches[0].clientX : i.touches[0].clientY) - this.startPos, a = this.getBoundingClientRect(), s = r / (this.direction === "horizontal" ? a.width : a.height) * 100, n = Math.max(0, this.startSizes[0] + s), c = Math.max(0, this.startSizes[1] - s);
      this.sizes = [n, c], this.dispatchEvent(new CustomEvent("resize", {
        bubbles: !0,
        composed: !0,
        detail: { sizes: this.sizes }
      }));
    }, this.onResizeEnd = () => {
      this.isDragging = !1, window.removeEventListener("mousemove", this.onResize), window.removeEventListener("touchmove", this.onResize), window.removeEventListener("mouseup", this.onResizeEnd), window.removeEventListener("touchend", this.onResizeEnd), this.dispatchEvent(new CustomEvent("resize-end", {
        bubbles: !0,
        composed: !0,
        detail: { sizes: this.sizes }
      }));
    }, this.onKeyDown = (i) => {
      if (this.disabled) return;
      const r = 5;
      let a = this.sizes[0], s = this.sizes[1];
      if (i.key === "ArrowLeft" || i.key === "ArrowUp")
        a -= r, s += r;
      else if (i.key === "ArrowRight" || i.key === "ArrowDown")
        a += r, s -= r;
      else if (i.key === "Home")
        a = 0, s = 100;
      else if (i.key === "End")
        a = 100, s = 0;
      else if (i.key === "Enter" && this.collapsible) {
        this.onDoubleClick();
        return;
      } else return;
      this.sizes = [Math.max(0, a), Math.max(0, s)], this.dispatchEvent(new CustomEvent("resize", {
        bubbles: !0,
        composed: !0,
        detail: { sizes: this.sizes }
      })), this.dispatchEvent(new CustomEvent("resize-end", {
        bubbles: !0,
        composed: !0,
        detail: { sizes: this.sizes }
      }));
    }, this.onDoubleClick = () => {
      !this.collapsible || this.disabled || (this.collapsed = this.collapsed === 1 ? 0 : 1, this.dispatchEvent(new CustomEvent("collapse", {
        bubbles: !0,
        composed: !0,
        detail: {
          paneIndex: 1,
          collapsed: this.collapsed === 1
        }
      })));
    };
  }
  static {
    this.styles = fr;
  }
  render() {
    return yr(this);
  }
};
o([l({ type: String })], Z.prototype, "direction", void 0);
o([l({ type: Array })], Z.prototype, "sizes", void 0);
o([l({
  type: Array,
  attribute: "min-sizes"
})], Z.prototype, "minSizes", void 0);
o([l({
  type: Array,
  attribute: "max-sizes"
})], Z.prototype, "maxSizes", void 0);
o([l({ type: Boolean })], Z.prototype, "disabled", void 0);
o([l({ type: Boolean })], Z.prototype, "collapsible", void 0);
o([l({ type: String })], Z.prototype, "variant", void 0);
o([l({ type: String })], Z.prototype, "size", void 0);
o([l({
  type: Boolean,
  attribute: "full-width"
})], Z.prototype, "fullWidth", void 0);
o([l({
  type: Boolean,
  attribute: "full-height"
})], Z.prototype, "fullHeight", void 0);
o([g()], Z.prototype, "isDragging", void 0);
o([g()], Z.prototype, "collapsed", void 0);
Z = o([k("biz-split-pane")], Z);
var xr = (e) => d`
  <div class="biz-text-input ${e.variant || "outlined"} ${e.size || "medium"} ${e.fullWidth ? "full-width" : ""} ${e.disabled ? "disabled" : ""} ${e.readonly ? "readonly" : ""} ${e.error ? "error" : ""} ${e.loading ? "loading" : ""}">
    <div class="biz-text-input__label-wrapper">
      <slot name="label-slot"></slot>
    </div>
    <div class="biz-text-input__control">
      <slot name="start-slot"></slot>
      <input
        id="input"
        class="biz-text-input__field"
        type="${e.type || "text"}"
        .value="${e.value || ""}"
        placeholder="${e.placeholder || ""}"
        ?disabled="${e.disabled}"
        ?readonly="${e.readonly}"
        ?required="${e.required}"
        aria-invalid="${e.error ? "true" : "false"}"
        aria-required="${e.required ? "true" : "false"}"
        aria-disabled="${e.disabled ? "true" : "false"}"
        aria-describedby="helper-text"
        @input="${e.handleInput}"
        @change="${e.handleChange}"
        @focus="${e.handleFocus}"
        @blur="${e.handleBlur}"
        @keydown="${e.handleKeyDown}"
      />
      ${e.loading ? d`<span class="biz-text-input__spinner"></span>` : ""}
      ${e.clearable && !e.disabled && !e.readonly && e.value ? d`
        <button type="button" class="biz-text-input__clear-btn" @click="${e.handleClear}" aria-label="Clear">
          &times;
        </button>
      ` : ""}
      <slot name="end-slot"></slot>
    </div>
    <div id="helper-text" class="biz-text-input__helper-wrapper">
      <slot name="helper-text-slot"></slot>
    </div>
  </div>
`, _r = w`
  :host {
    display: inline-block;
    --biz-text-input-height-sm: 32px;
    --biz-text-input-height-md: 40px;
    --biz-text-input-height-lg: 48px;
    --biz-text-input-padding-x: 12px;
    --biz-text-input-padding-y: 8px;
    --biz-text-input-border-radius: 4px;
    --biz-text-input-bg-color: #ffffff;
    --biz-text-input-border-color: #d1d5db;
    --biz-text-input-text-color: #111827;
    --biz-text-input-placeholder-color: #9ca3af;
    --biz-text-input-hover-border-color: #9ca3af;
    --biz-text-input-focus-border-color: #2563eb;
    --biz-text-input-focus-ring-color: rgba(37, 99, 235, 0.2);
    --biz-text-input-error-color: #dc2626;
    --biz-text-input-disabled-bg-color: #f3f4f6;
    --biz-text-input-disabled-text-color: #9ca3af;
  }

  :host([full-width]),
  .biz-text-input.full-width {
    width: 100%;
  }

  .biz-text-input {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    font-family: inherit;
  }

  .biz-text-input__control {
    display: flex;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    border-radius: var(--biz-text-input-border-radius);
    background-color: var(--biz-text-input-bg-color);
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .biz-text-input__field {
    flex: 1;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: var(--biz-text-input-text-color);
    font-size: 14px;
    padding: 0 var(--biz-text-input-padding-x);
    box-sizing: border-box;
  }

  .biz-text-input__field::placeholder {
    color: var(--biz-text-input-placeholder-color);
  }

  .biz-text-input.small .biz-text-input__control {
    height: var(--biz-text-input-height-sm);
  }

  .biz-text-input.small .biz-text-input__field {
    font-size: 12px;
  }

  .biz-text-input.medium .biz-text-input__control {
    height: var(--biz-text-input-height-md);
  }

  .biz-text-input.medium .biz-text-input__field {
    font-size: 14px;
  }

  .biz-text-input.large .biz-text-input__control {
    height: var(--biz-text-input-height-lg);
  }

  .biz-text-input.large .biz-text-input__field {
    font-size: 16px;
  }

  .biz-text-input.outlined .biz-text-input__control {
    border: 1px solid var(--biz-text-input-border-color);
  }

  .biz-text-input.filled .biz-text-input__control {
    border: none;
    border-bottom: 1px solid var(--biz-text-input-border-color);
    background-color: var(--biz-text-input-disabled-bg-color);
    border-radius: var(--biz-text-input-border-radius) var(--biz-text-input-border-radius) 0 0;
  }

  .biz-text-input.standard .biz-text-input__control {
    border: none;
    border-bottom: 1px solid var(--biz-text-input-border-color);
    border-radius: 0;
    background-color: transparent;
  }

  .biz-text-input.outlined .biz-text-input__control:hover:not(.disabled) {
    border-color: var(--biz-text-input-hover-border-color);
  }

  .biz-text-input__control:focus-within {
    border-color: var(--biz-text-input-focus-border-color);
    box-shadow: 0 0 0 3px var(--biz-text-input-focus-ring-color);
  }

  .biz-text-input.disabled .biz-text-input__control {
    background-color: var(--biz-text-input-disabled-bg-color);
    cursor: not-allowed;
    opacity: 0.6;
  }

  .biz-text-input.disabled .biz-text-input__field {
    color: var(--biz-text-input-disabled-text-color);
    cursor: not-allowed;
  }

  .biz-text-input.readonly .biz-text-input__control {
    background-color: var(--biz-text-input-disabled-bg-color);
  }

  .biz-text-input.error .biz-text-input__control {
    border-color: var(--biz-text-input-error-color);
  }

  .biz-text-input.error .biz-text-input__control:focus-within {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
  }

  .biz-text-input__clear-btn {
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0 8px;
    color: var(--biz-text-input-placeholder-color);
    font-size: 16px;
    line-height: 1;
  }

  .biz-text-input__spinner {
    width: 16px;
    height: 16px;
    border: 2px solid var(--biz-text-input-border-color);
    border-top-color: var(--biz-text-input-focus-border-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 8px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .biz-text-input__label-wrapper {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: var(--biz-text-input-text-color);
    line-height: 1.4;
  }

  .biz-text-input__label-wrapper ::slotted(label) {
    cursor: pointer;
  }

  .biz-text-input__helper-wrapper {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 1.4;
    color: var(--biz-text-input-placeholder-color);
    min-height: 18px;
  }

  .biz-text-input.error .biz-text-input__helper-wrapper {
    color: var(--biz-text-input-error-color);
  }

  .biz-text-input.disabled .biz-text-input__label-wrapper,
  .biz-text-input.disabled .biz-text-input__helper-wrapper {
    color: var(--biz-text-input-disabled-text-color);
    opacity: 0.6;
  }
`, Q = class extends _ {
  constructor(...t) {
    super(...t), this.value = "", this.type = "text", this.placeholder = "", this.required = !1, this.readonly = !1, this.disabled = !1, this.error = !1, this.clearable = !1, this.variant = "outlined", this.size = "medium", this.fullWidth = !1, this.loading = !1, this.isFocused = !1;
  }
  static {
    this.styles = _r;
  }
  handleInput(t) {
    const i = t.target;
    this.value = i.value, this.dispatchEvent(new CustomEvent("input", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleChange(t) {
    const i = t.target;
    this.value = i.value, this.dispatchEvent(new CustomEvent("change", {
      detail: { value: this.value },
      bubbles: !0,
      composed: !0
    }));
  }
  handleFocus(t) {
    this.isFocused = !0, this.dispatchEvent(new CustomEvent("focus", {
      detail: t,
      bubbles: !0,
      composed: !0
    }));
  }
  handleBlur(t) {
    this.isFocused = !1, this.dispatchEvent(new CustomEvent("blur", {
      detail: t,
      bubbles: !0,
      composed: !0
    }));
  }
  handleClear(t) {
    t.preventDefault(), t.stopPropagation(), this.value = "", this.dispatchEvent(new CustomEvent("clear", {
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("input", {
      detail: { value: "" },
      bubbles: !0,
      composed: !0
    })), this.dispatchEvent(new CustomEvent("change", {
      detail: { value: "" },
      bubbles: !0,
      composed: !0
    }));
  }
  handleKeyDown(t) {
    t.key === "Escape" && this.clearable && !this.disabled && !this.readonly && this.value && this.handleClear(t);
  }
  render() {
    return xr(this);
  }
};
o([l({ type: String })], Q.prototype, "value", void 0);
o([l({ type: String })], Q.prototype, "type", void 0);
o([l({ type: String })], Q.prototype, "placeholder", void 0);
o([l({ type: Boolean })], Q.prototype, "required", void 0);
o([l({ type: Boolean })], Q.prototype, "readonly", void 0);
o([l({ type: Boolean })], Q.prototype, "disabled", void 0);
o([l({ type: Boolean })], Q.prototype, "error", void 0);
o([l({ type: Boolean })], Q.prototype, "clearable", void 0);
o([l({ type: String })], Q.prototype, "variant", void 0);
o([l({ type: String })], Q.prototype, "size", void 0);
o([l({
  type: Boolean,
  attribute: "full-width"
})], Q.prototype, "fullWidth", void 0);
o([l({ type: Boolean })], Q.prototype, "loading", void 0);
o([g()], Q.prototype, "isFocused", void 0);
Q = o([k("biz-text-input")], Q);
var wr = (e) => {
  const t = (a) => {
    switch (a) {
      case "small":
        return "var(--biz-tile-layout-grid-gap-sm, 12px)";
      case "medium":
        return "var(--biz-tile-layout-grid-gap-md, 16px)";
      case "large":
        return "var(--biz-tile-layout-grid-gap-lg, 24px)";
      default:
        return a;
    }
  }, r = `
    --biz-tile-layout-grid-columns: ${((a, s) => typeof a == "number" ? `repeat(${a}, minmax(0, 1fr))` : a === "auto-fit" || a === "auto-fill" ? `repeat(${a}, minmax(${s}, 1fr))` : a)(e.columns, e.minTileWidth)};
    --biz-tile-layout-grid-gap-current: ${t(e.gap)};
    --biz-tile-layout-grid-aspect-ratio-current: ${e.aspectRatio};
  `;
  return d`
    <div
      class="biz-tile-layout-grid ${e.mode === "masonry" ? "biz-tile-layout-grid--masonry" : "biz-tile-layout-grid--fixed"} ${e.loading ? "biz-tile-layout-grid--loading" : ""} ${e.isEmpty ? "biz-tile-layout-grid--empty" : ""}"
      style="${r}"
      role="grid"
      aria-busy="${e.loading ? "true" : "false"}"
      @click="${e.onTileClick}"
      @keydown="${e.onKeyDown}"
    >
      <header class="biz-tile-layout-grid__header">
        <slot name="header-slot"></slot>
      </header>

      ${e.loading ? d`
            <div class="biz-tile-layout-grid__skeleton-container" aria-hidden="true">
              ${Array.from({ length: 6 }).map(() => d`<div class="biz-tile-layout-grid__skeleton-item"></div>`)}
            </div>
          ` : d`
            <main class="biz-tile-layout-grid__body">
              <slot @slotchange="${e.onSlotChange}"></slot>
              ${e.isEmpty ? d`
                    <div class="biz-tile-layout-grid__empty">
                      <slot name="empty-slot">
                        <p class="biz-tile-layout-grid__empty-text">표시할 타일이 없습니다.</p>
                      </slot>
                    </div>
                  ` : ""}
            </main>
          `}
    </div>
  `;
}, kr = w`
  :host {
    display: block;
    box-sizing: border-box;

    /* Layout & Sizing Tokens */
    --biz-tile-layout-grid-gap-sm: 12px;
    --biz-tile-layout-grid-gap-md: 16px;
    --biz-tile-layout-grid-gap-lg: 24px;
    --biz-tile-layout-grid-min-width: 280px;
    --biz-tile-layout-grid-aspect-ratio: 1 / 1;

    /* Colors - Base */
    --biz-tile-layout-grid-bg-color: transparent;
    --biz-tile-layout-grid-skeleton-bg-color: #e5e7eb;
    --biz-tile-layout-grid-skeleton-pulse-color: #f3f4f6;

    /* Colors - Interactive States */
    --biz-tile-layout-grid-focus-ring-color: rgba(37, 99, 235, 0.2);
    --biz-tile-layout-grid-border-color: #d1d5db;
    --biz-tile-layout-grid-hover-border-color: #9ca3af;
    --biz-tile-layout-grid-active-border-color: #2563eb;
    --biz-tile-layout-grid-error-border-color: #ef4444;

    /* Sizes */
    --biz-tile-layout-grid-padding-sm: 8px;
    --biz-tile-layout-grid-padding-md: 16px;
    --biz-tile-layout-grid-padding-lg: 24px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .biz-tile-layout-grid {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--biz-tile-layout-grid-bg-color);
  }

  .biz-tile-layout-grid__header {
    width: 100%;
    margin-bottom: var(--biz-tile-layout-grid-gap-current, var(--biz-tile-layout-grid-gap-md));
  }

  .biz-tile-layout-grid__header:empty {
    display: none;
  }

  .biz-tile-layout-grid__body {
    display: grid;
    grid-template-columns: var(--biz-tile-layout-grid-columns, repeat(auto-fit, minmax(var(--biz-tile-layout-grid-min-width), 1fr)));
    gap: var(--biz-tile-layout-grid-gap-current, var(--biz-tile-layout-grid-gap-md));
    width: 100%;
  }

  /* Variants: Mode */
  .biz-tile-layout-grid--fixed .biz-tile-layout-grid__body ::slotted(*) {
    aspect-ratio: var(--biz-tile-layout-grid-aspect-ratio-current, var(--biz-tile-layout-grid-aspect-ratio));
    height: 100%;
  }

  .biz-tile-layout-grid--masonry .biz-tile-layout-grid__body {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .biz-tile-layout-grid--masonry .biz-tile-layout-grid__body ::slotted(*) {
    flex: 1 1 var(--biz-tile-layout-grid-min-width);
    height: auto;
  }

  /* Variants: Visual Styles (Outlined, Filled, Standard) */
  .biz-tile-layout-grid--outlined {
    border: 1px solid var(--biz-tile-layout-grid-border-color);
    border-radius: 8px;
    padding: var(--biz-tile-layout-grid-padding-md);
  }

  .biz-tile-layout-grid--filled {
    background-color: #f9fafb;
    border-radius: 8px;
    padding: var(--biz-tile-layout-grid-padding-md);
  }

  .biz-tile-layout-grid--standard {
    border: none;
    padding: 0;
  }

  /* Sizes */
  .biz-tile-layout-grid--size-small {
    --biz-tile-layout-grid-gap-current: var(--biz-tile-layout-grid-gap-sm);
    padding: var(--biz-tile-layout-grid-padding-sm);
  }

  .biz-tile-layout-grid--size-medium {
    --biz-tile-layout-grid-gap-current: var(--biz-tile-layout-grid-gap-md);
    padding: var(--biz-tile-layout-grid-padding-md);
  }

  .biz-tile-layout-grid--size-large {
    --biz-tile-layout-grid-gap-current: var(--biz-tile-layout-grid-gap-lg);
    padding: var(--biz-tile-layout-grid-padding-lg);
  }

  /* States: Loading & Skeleton */
  .biz-tile-layout-grid__skeleton-container {
    display: grid;
    grid-template-columns: var(--biz-tile-layout-grid-columns, repeat(auto-fit, minmax(var(--biz-tile-layout-grid-min-width), 1fr)));
    gap: var(--biz-tile-layout-grid-gap-current, var(--biz-tile-layout-grid-gap-md));
    width: 100%;
  }

  .biz-tile-layout-grid__skeleton-item {
    width: 100%;
    aspect-ratio: var(--biz-tile-layout-grid-aspect-ratio-current, var(--biz-tile-layout-grid-aspect-ratio));
    background-color: var(--biz-tile-layout-grid-skeleton-bg-color);
    border-radius: 6px;
    animation: biz-tile-layout-grid-pulse 1.5s infinite ease-in-out;
  }

  @keyframes biz-tile-layout-grid-pulse {
    0% {
      background-color: var(--biz-tile-layout-grid-skeleton-bg-color);
    }
    50% {
      background-color: var(--biz-tile-layout-grid-skeleton-pulse-color);
    }
    100% {
      background-color: var(--biz-tile-layout-grid-skeleton-bg-color);
    }
  }

  /* States: Empty */
  .biz-tile-layout-grid__empty {
    grid-column: 1 / -1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    width: 100%;
    border: 1px dashed var(--biz-tile-layout-grid-border-color);
    border-radius: 8px;
  }

  .biz-tile-layout-grid__empty-text {
    color: #6b7280;
    font-size: 0.875rem;
    margin: 0;
  }

  /* Interactive States */
  .biz-tile-layout-grid:hover {
    border-color: var(--biz-tile-layout-grid-hover-border-color);
  }

  .biz-tile-layout-grid:focus-within {
    outline: none;
    box-shadow: 0 0 0 3px var(--biz-tile-layout-grid-focus-ring-color);
  }

  .biz-tile-layout-grid--active {
    border-color: var(--biz-tile-layout-grid-active-border-color);
  }

  .biz-tile-layout-grid--disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .biz-tile-layout-grid--readonly {
    user-select: none;
  }

  .biz-tile-layout-grid--error {
    border-color: var(--biz-tile-layout-grid-error-border-color);
  }
`, me = class extends _ {
  constructor(...t) {
    super(...t), this.mode = "fixed", this.columns = "auto-fit", this.minTileWidth = "280px", this.gap = "medium", this.aspectRatio = "1/1", this.loading = !1, this._isEmpty = !1, this._resizeObserver = null, this._previousCalculatedColumns = 0;
  }
  static {
    this.styles = kr;
  }
  connectedCallback() {
    super.connectedCallback(), this._setupResizeObserver();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null);
  }
  _setupResizeObserver() {
    this._resizeObserver = new ResizeObserver(() => {
      this._handleResize();
    }), this._resizeObserver.observe(this);
  }
  _handleResize() {
    const t = this._calculateCurrentColumns();
    t !== this._previousCalculatedColumns && (this._previousCalculatedColumns = t, this.dispatchEvent(new CustomEvent("layout-change", {
      bubbles: !0,
      composed: !0,
      detail: {
        columns: t,
        mode: this.mode
      }
    })));
  }
  _calculateCurrentColumns() {
    if (typeof this.columns == "number") return this.columns;
    const t = this.getBoundingClientRect().width, i = parseFloat(this.minTileWidth) || 280, r = Math.floor(t / i);
    return r > 0 ? r : 1;
  }
  _handleSlotChange(t) {
    const i = t.target.assignedElements({ flatten: !0 });
    this._isEmpty = i.length === 0, this._updateAriaAttributes(i.length);
  }
  _updateAriaAttributes(t) {
    const i = this._calculateCurrentColumns(), r = i > 0 ? Math.ceil(t / i) : 0;
    this.setAttribute("aria-rowcount", String(r)), this.setAttribute("aria-colcount", String(i));
  }
  _handleTileClick(t) {
    const i = t.target, r = this.shadowRoot?.querySelector("main slot");
    if (!r) return;
    const a = r.assignedElements({ flatten: !0 }), s = a.find((n) => n.contains(i) || n === i);
    if (s) {
      const n = a.indexOf(s);
      this.dispatchEvent(new CustomEvent("tile-click", {
        bubbles: !0,
        composed: !0,
        detail: {
          item: s,
          index: n
        }
      }));
    }
  }
  _handleKeyDown(t) {
    const i = this.shadowRoot?.querySelector("main slot");
    if (!i) return;
    const r = i.assignedElements({ flatten: !0 });
    if (r.length === 0) return;
    const a = document.activeElement;
    let s = r.findIndex((p) => p === a || p.contains(a));
    if (s === -1) return;
    const n = this._calculateCurrentColumns();
    let c = s;
    switch (t.key) {
      case "ArrowRight":
        c = Math.min(s + 1, r.length - 1);
        break;
      case "ArrowLeft":
        c = Math.max(s - 1, 0);
        break;
      case "ArrowDown":
        c = Math.min(s + n, r.length - 1);
        break;
      case "ArrowUp":
        c = Math.max(s - n, 0);
        break;
      case "Home":
        c = 0;
        break;
      case "End":
        c = r.length - 1;
        break;
      default:
        return;
    }
    c !== s && (t.preventDefault(), r[c].focus());
  }
  render() {
    return wr({
      mode: this.mode,
      columns: this.columns,
      minTileWidth: this.minTileWidth,
      gap: this.gap,
      aspectRatio: this.aspectRatio,
      loading: this.loading,
      isEmpty: this._isEmpty,
      onSlotChange: this._handleSlotChange.bind(this),
      onTileClick: this._handleTileClick.bind(this),
      onKeyDown: this._handleKeyDown.bind(this)
    });
  }
};
o([l({
  type: String,
  reflect: !0
})], me.prototype, "mode", void 0);
o([l({
  type: String,
  reflect: !0
})], me.prototype, "columns", void 0);
o([l({
  type: String,
  attribute: "min-tile-width",
  reflect: !0
})], me.prototype, "minTileWidth", void 0);
o([l({
  type: String,
  reflect: !0
})], me.prototype, "gap", void 0);
o([l({
  type: String,
  attribute: "aspect-ratio",
  reflect: !0
})], me.prototype, "aspectRatio", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], me.prototype, "loading", void 0);
o([g()], me.prototype, "_isEmpty", void 0);
me = o([k("biz-tile-layout-grid")], me);
var $r = w`
  :host {
    /* Layout & Sizing Tokens */
    --biz-time-picker-height-sm: 32px;
    --biz-time-picker-height-md: 40px;
    --biz-time-picker-height-lg: 48px;
    --biz-time-picker-padding-x: 12px;
    --biz-time-picker-border-radius: 4px;
    --biz-time-picker-panel-width: 220px;
    --biz-time-picker-column-height: 220px;
    --biz-time-picker-item-height: 32px;

    /* Base Colors */
    --biz-time-picker-bg: #ffffff;
    --biz-time-picker-filled-bg: #f3f4f6;
    --biz-time-picker-border-color: #d1d5db;
    --biz-time-picker-text-color: #111827;
    --biz-time-picker-placeholder-color: #9ca3af;

    /* Panel & Item Colors */
    --biz-time-picker-panel-bg: #ffffff;
    --biz-time-picker-panel-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --biz-time-picker-item-hover-bg: #f3f4f6;
    --biz-time-picker-item-selected-bg: #eff6ff;
    --biz-time-picker-item-selected-text: #2563eb;
    --biz-time-picker-item-disabled-text: #d1d5db;

    /* Interactive States Colors */
    --biz-time-picker-hover-border-color: #9ca3af;
    --biz-time-picker-focus-border-color: #2563eb;
    --biz-time-picker-focus-ring-color: rgba(37, 99, 235, 0.2);

    /* Error & Disabled Colors */
    --biz-time-picker-error-color: #dc2626;
    --biz-time-picker-disabled-bg: #f3f4f6;
    --biz-time-picker-disabled-text-color: #9ca3af;

    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    box-sizing: border-box;
  }

  :host([full-width]),
  .biz-time-picker--full-width {
    width: 100%;
    display: block;
  }

  .biz-time-picker {
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }

  /* Control Area */
  .biz-time-picker__control {
    display: flex;
    align-items: center;
    background-color: var(--biz-time-picker-bg);
    border-radius: var(--biz-time-picker-border-radius);
    padding: 0 var(--biz-time-picker-padding-x);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-sizing: border-box;
  }

  .biz-time-picker__input {
    flex: 1;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: var(--biz-time-picker-text-color);
    font-size: 14px;
    padding: 0;
    margin: 0;
  }

  .biz-time-picker__input::placeholder {
    color: var(--biz-time-picker-placeholder-color);
  }

  /* Variants */
  .biz-time-picker--outlined .biz-time-picker__control {
    border: 1px solid var(--biz-time-picker-border-color);
  }

  .biz-time-picker--filled .biz-time-picker__control {
    border: 1px solid transparent;
    background-color: var(--biz-time-picker-filled-bg);
  }

  .biz-time-picker--standard .biz-time-picker__control {
    border: none;
    border-bottom: 1px solid var(--biz-time-picker-border-color);
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
  }

  /* Sizes */
  .biz-time-picker--small .biz-time-picker__control {
    height: var(--biz-time-picker-height-sm);
  }
  .biz-time-picker--small .biz-time-picker__input {
    font-size: 12px;
  }

  .biz-time-picker--medium .biz-time-picker__control {
    height: var(--biz-time-picker-height-md);
  }
  .biz-time-picker--medium .biz-time-picker__input {
    font-size: 14px;
  }

  .biz-time-picker--large .biz-time-picker__control {
    height: var(--biz-time-picker-height-lg);
  }
  .biz-time-picker--large .biz-time-picker__input {
    font-size: 16px;
  }

  /* States: Hover, Focus & Open */
  .biz-time-picker__control:hover {
    border-color: var(--biz-time-picker-hover-border-color);
  }

  .biz-time-picker--open .biz-time-picker__control,
  .biz-time-picker__control:focus-within {
    border-color: var(--biz-time-picker-focus-border-color);
    box-shadow: 0 0 0 3px var(--biz-time-picker-focus-ring-color);
  }

  /* States: Error */
  .biz-time-picker--error .biz-time-picker__control {
    border-color: var(--biz-time-picker-error-color) !important;
  }
  .biz-time-picker--error .biz-time-picker__control:focus-within {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2) !important;
  }

  /* States: Disabled & Readonly */
  .biz-time-picker--disabled .biz-time-picker__control {
    background-color: var(--biz-time-picker-disabled-bg);
    border-color: var(--biz-time-picker-border-color);
    cursor: not-allowed;
    opacity: 0.7;
  }
  .biz-time-picker--disabled .biz-time-picker__input {
    color: var(--biz-time-picker-disabled-text-color);
    cursor: not-allowed;
  }

  .biz-time-picker--readonly .biz-time-picker__control {
    cursor: default;
    background-color: var(--biz-time-picker-bg);
  }

  /* Suffix & Clear Button */
  .biz-time-picker__suffix,
  .biz-time-picker__prefix {
    display: inline-flex;
    align-items: center;
    color: var(--biz-time-picker-placeholder-color);
  }

  .biz-time-picker__clear-button,
  .biz-time-picker__trigger-icon {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0 0 0 4px;
    cursor: pointer;
    color: var(--biz-time-picker-placeholder-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .biz-time-picker__clear-button:hover {
    color: var(--biz-time-picker-text-color);
  }

  /* Dropdown Panel */
  .biz-time-picker__panel {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 1000;
    min-width: var(--biz-time-picker-panel-width);
    background-color: var(--biz-time-picker-panel-bg);
    border: 1px solid var(--biz-time-picker-border-color);
    border-radius: var(--biz-time-picker-border-radius);
    box-shadow: var(--biz-time-picker-panel-shadow);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* Panel Columns Container */
  .biz-time-picker__columns {
    display: flex;
    height: var(--biz-time-picker-column-height);
    border-bottom: 1px solid var(--biz-time-picker-border-color);
  }

  .biz-time-picker__column {
    flex: 1;
    overflow-y: auto;
    scrollbar-width: thin;
    list-style: none;
    margin: 0;
    padding: 0;
    border-right: 1px solid var(--biz-time-picker-border-color);
  }

  .biz-time-picker__column:last-child {
    border-right: none;
  }

  .biz-time-picker__column--active {
    background-color: rgba(37, 99, 235, 0.03);
  }

  /* Option Items */
  .biz-time-picker__option {
    height: var(--biz-time-picker-item-height);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: var(--biz-time-picker-text-color);
    cursor: pointer;
    user-select: none;
    transition: background-color 0.15s ease;
  }

  .biz-time-picker__option:hover {
    background-color: var(--biz-time-picker-item-hover-bg);
  }

  .biz-time-picker__option--selected {
    background-color: var(--biz-time-picker-item-selected-bg);
    color: var(--biz-time-picker-item-selected-text);
    font-weight: 600;
  }

  .biz-time-picker__option--disabled {
    color: var(--biz-time-picker-item-disabled-text);
    cursor: not-allowed;
    background-color: transparent !important;
  }

  /* Action Footer */
  .biz-time-picker__footer {
    padding: 8px 12px;
    background-color: var(--biz-time-picker-bg);
  }

  .biz-time-picker__action-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .biz-time-picker__btn-now,
  .biz-time-picker__btn-cancel,
  .biz-time-picker__btn-confirm {
    border: none;
    background: transparent;
    font-size: 12px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .biz-time-picker__btn-now {
    color: var(--biz-time-picker-focus-border-color);
    font-weight: 500;
  }

  .biz-time-picker__btn-cancel {
    color: var(--biz-time-picker-placeholder-color);
  }

  .biz-time-picker__btn-confirm {
    background-color: var(--biz-time-picker-focus-border-color);
    color: #ffffff;
    font-weight: 500;
  }

  .biz-time-picker__btn-confirm:hover {
    opacity: 0.9;
  }

  /* SR Only Live Area */
  .biz-time-picker__sr-live {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`, Oe = (e, t) => {
  const i = e._$AN;
  if (i === void 0) return !1;
  for (const r of i) r._$AO?.(t, !1), Oe(r, t);
  return !0;
}, Je = (e) => {
  let t, i;
  do {
    if ((t = e._$AM) === void 0) break;
    i = t._$AN, i.delete(e), e = t;
  } while (i?.size === 0);
}, Wt = (e) => {
  for (let t; t = e._$AM; e = t) {
    let i = t._$AN;
    if (i === void 0) t._$AN = i = /* @__PURE__ */ new Set();
    else if (i.has(e)) break;
    i.add(e), Dr(t);
  }
};
function Sr(e) {
  this._$AN !== void 0 ? (Je(this), this._$AM = e, Wt(this)) : this._$AM = e;
}
function Cr(e, t = !1, i = 0) {
  const r = this._$AH, a = this._$AN;
  if (a !== void 0 && a.size !== 0) if (t) if (Array.isArray(r)) for (let s = i; s < r.length; s++) Oe(r[s], !1), Je(r[s]);
  else r != null && (Oe(r, !1), Je(r));
  else Oe(this, e);
}
var Dr = (e) => {
  e.type == be.CHILD && (e._$AP ??= Cr, e._$AQ ??= Sr);
}, Er = class extends Ne {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, t, i) {
    super._$AT(e, t, i), Wt(this), this.isConnected = e._$AU;
  }
  _$AO(e, t = !0) {
    e !== this.isConnected && (this.isConnected = e, e ? this.reconnected?.() : this.disconnected?.()), t && (Oe(this, e), Je(this));
  }
  setValue(e) {
    if (Kt(this._$Ct)) this._$Ct._$AI(e, this);
    else {
      const t = [...this._$Ct._$AH];
      t[this._$Ci] = e, this._$Ct._$AI(t, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}, rt = /* @__PURE__ */ new WeakMap(), Et = Ke(class extends Er {
  render(e) {
    return E;
  }
  update(e, [t]) {
    const i = t !== this.G;
    return i && this.G !== void 0 && this.rt(void 0), (i || this.lt !== this.ct) && (this.G = t, this.ht = e.options?.host, this.rt(this.ct = e.element)), E;
  }
  rt(e) {
    if (this.isConnected || (e = void 0), typeof this.G == "function") {
      const t = this.ht ?? globalThis;
      let i = rt.get(t);
      i === void 0 && (i = /* @__PURE__ */ new WeakMap(), rt.set(t, i)), i.get(this.G) !== void 0 && this.G.call(this.ht, void 0), i.set(this.G, e), e !== void 0 && this.G.call(this.ht, e);
    } else this.G.value = e;
  }
  get lt() {
    return typeof this.G == "function" ? rt.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
}), Tr = (e) => {
  const { displayValue: t, placeholder: i, clearable: r, readonly: a, disabled: s, error: n, variant: c, size: p, fullWidth: b, isOpen: u, activeColumn: h, selectedHour: v, selectedMinute: m, selectedSecond: z, selectedPeriod: D, showSeconds: x, use12Hours: W, hours: Y, minutes: P, seconds: re, periods: ce, onInput: fe, onFocus: ye, onBlur: xe, onKeydown: _e, onTogglePanel: Te, onClear: Me, onSelectOption: ze, onSelectNow: oe, onConfirm: ae, onCancel: le, inputRef: De, panelRef: Ee } = e, Ae = [
    "biz-time-picker",
    `biz-time-picker--${c}`,
    `biz-time-picker--${p}`,
    u ? "biz-time-picker--open" : "",
    s ? "biz-time-picker--disabled" : "",
    a ? "biz-time-picker--readonly" : "",
    n ? "biz-time-picker--error" : "",
    b ? "biz-time-picker--full-width" : ""
  ].filter(Boolean).join(" ");
  return d`
    <div class=${Ae}>
      <!-- Label Slot -->
      <div class="biz-time-picker__label-wrapper">
        <slot name="label-slot"></slot>
      </div>

      <!-- Main Input Control Container -->
      <div 
        class="biz-time-picker__control"
        role="combobox"
        aria-expanded=${u ? "true" : "false"}
        aria-haspopup="listbox"
        aria-disabled=${s ? "true" : "false"}
        @click=${a || s ? null : Te}
      >
        <!-- Prefix Slot -->
        <span class="biz-time-picker__prefix">
          <slot name="prefix-slot"></slot>
        </span>

        <!-- Input Element -->
        <input
          ${De ? Et(De) : ""}
          type="text"
          class="biz-time-picker__input"
          .value=${t}
          placeholder=${i}
          ?disabled=${s}
          ?readonly=${a}
          @input=${fe}
          @focus=${ye}
          @blur=${xe}
          @keydown=${_e}
        />

        <!-- Clear Button -->
        ${r && t && !s && !a ? d`
          <button
            type="button"
            class="biz-time-picker__clear-button"
            aria-label="Clear time"
            @click=${Me}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        ` : ""}

        <!-- Suffix Slot / Time Icon Trigger -->
        <span class="biz-time-picker__suffix">
          <slot name="suffix-slot">
            <button
              type="button"
              class="biz-time-picker__trigger-icon"
              tabindex="-1"
              ?disabled=${s}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            </button>
          </slot>
        </span>
      </div>

      <!-- Time Dropdown Panel -->
      ${u ? d`
        <div 
          ${Ee ? Et(Ee) : ""}
          class="biz-time-picker__panel"
          tabindex="-1"
        >
          <!-- Header Slot -->
          <div class="biz-time-picker__header">
            <slot name="header-slot"></slot>
          </div>

          <!-- Time Columns List Container -->
          <div class="biz-time-picker__columns">
            <!-- Period Column (12-Hour System) -->
            ${W ? d`
              <div 
                class="biz-time-picker__column ${h === "period" ? "biz-time-picker__column--active" : ""}"
                role="listbox"
                aria-label="Period"
              >
                ${ce.map((f) => d`
                  <div
                    class="biz-time-picker__option ${D === f.value ? "biz-time-picker__option--selected" : ""} ${f.disabled ? "biz-time-picker__option--disabled" : ""}"
                    role="option"
                    aria-selected=${D === f.value ? "true" : "false"}
                    aria-disabled=${f.disabled ? "true" : "false"}
                    @click=${f.disabled ? null : () => ze("period", f.value)}
                  >
                    <slot name="option-item-slot">${f.label}</slot>
                  </div>
                `)}
              </div>
            ` : ""}

            <!-- Hour Column -->
            <div 
              class="biz-time-picker__column ${h === "hour" ? "biz-time-picker__column--active" : ""}"
              role="listbox"
              aria-label="Hour"
            >
              ${Y.map((f) => d`
                <div
                  class="biz-time-picker__option ${v === f.value ? "biz-time-picker__option--selected" : ""} ${f.disabled ? "biz-time-picker__option--disabled" : ""}"
                  role="option"
                  aria-selected=${v === f.value ? "true" : "false"}
                  aria-disabled=${f.disabled ? "true" : "false"}
                  @click=${f.disabled ? null : () => ze("hour", f.value)}
                >
                  <slot name="option-item-slot">${f.label}</slot>
                </div>
              `)}
            </div>

            <!-- Minute Column -->
            <div 
              class="biz-time-picker__column ${h === "minute" ? "biz-time-picker__column--active" : ""}"
              role="listbox"
              aria-label="Minute"
            >
              ${P.map((f) => d`
                <div
                  class="biz-time-picker__option ${m === f.value ? "biz-time-picker__option--selected" : ""} ${f.disabled ? "biz-time-picker__option--disabled" : ""}"
                  role="option"
                  aria-selected=${m === f.value ? "true" : "false"}
                  aria-disabled=${f.disabled ? "true" : "false"}
                  @click=${f.disabled ? null : () => ze("minute", f.value)}
                >
                  <slot name="option-item-slot">${f.label}</slot>
                </div>
              `)}
            </div>

            <!-- Second Column -->
            ${x ? d`
              <div 
                class="biz-time-picker__column ${h === "second" ? "biz-time-picker__column--active" : ""}"
                role="listbox"
                aria-label="Second"
              >
                ${re.map((f) => d`
                  <div
                    class="biz-time-picker__option ${z === f.value ? "biz-time-picker__option--selected" : ""} ${f.disabled ? "biz-time-picker__option--disabled" : ""}"
                    role="option"
                    aria-selected=${z === f.value ? "true" : "false"}
                    aria-disabled=${f.disabled ? "true" : "false"}
                    @click=${f.disabled ? null : () => ze("second", f.value)}
                  >
                    <slot name="option-item-slot">${f.label}</slot>
                  </div>
                `)}
              </div>
            ` : ""}
          </div>

          <!-- Footer Area & Slot -->
          <div class="biz-time-picker__footer">
            <slot name="footer-slot">
              <div class="biz-time-picker__action-footer">
                <button type="button" class="biz-time-picker__btn-now" @click=${oe}>Now</button>
                <div class="biz-time-picker__action-btns">
                  <button type="button" class="biz-time-picker__btn-cancel" @click=${le}>Cancel</button>
                  <button type="button" class="biz-time-picker__btn-confirm" @click=${ae}>OK</button>
                </div>
              </div>
            </slot>
          </div>
        </div>
      ` : ""}

      <!-- Helper Text Slot -->
      <div class="biz-time-picker__helper-wrapper">
        <slot name="helper-text-slot"></slot>
      </div>

      <!-- Live Region for Screen Readers -->
      <div class="biz-time-picker__sr-live" aria-live="polite" aria-atomic="true">
        ${t ? `Selected time is ${t}` : ""}
      </div>
    </div>
  `;
}, S = class extends _ {
  constructor(...t) {
    super(...t), this.value = null, this.format = "HH:mm", this.use12Hours = !1, this.hourStep = 1, this.minuteStep = 1, this.secondStep = 1, this.showSeconds = !1, this.disabledHours = null, this.disabledMinutes = null, this.disabledSeconds = null, this.placeholder = "HH:mm", this.clearable = !1, this.readonly = !1, this.disabled = !1, this.error = !1, this.variant = "outlined", this.size = "medium", this.fullWidth = !1, this.isOpen = !1, this.activeColumn = "hour", this.selectedHour = null, this.selectedMinute = null, this.selectedSecond = null, this.selectedPeriod = null, this.displayValue = "", this.handleOutsideClick = (i) => {
      this.isOpen && (i.composedPath().includes(this) || this.closePanel());
    }, this.handleGlobalKeydown = (i) => {
      if (this.disabled || this.readonly) return;
      if (i.key === "Escape" && this.isOpen) {
        i.stopPropagation(), this.closePanel(), this.inputEl?.focus();
        return;
      }
      if (!this.isOpen) return;
      const r = [];
      this.use12Hours && r.push("period"), r.push("hour", "minute"), this.showSeconds && r.push("second");
      const a = r.indexOf(this.activeColumn);
      if (i.key === "ArrowRight") {
        i.preventDefault();
        const s = (a + 1) % r.length;
        this.activeColumn = r[s];
      } else if (i.key === "ArrowLeft") {
        i.preventDefault();
        const s = (a - 1 + r.length) % r.length;
        this.activeColumn = r[s];
      } else i.key === "ArrowDown" || i.key === "ArrowUp" ? (i.preventDefault(), this.navigateColumnOptions(i.key === "ArrowDown" ? 1 : -1)) : i.key === "Enter" && (i.preventDefault(), this.confirmSelection());
    }, this.togglePanel = (i) => {
      i && i.stopPropagation(), !(this.disabled || this.readonly) && (this.isOpen ? this.closePanel() : this.openPanel());
    }, this.handleInput = (i) => {
      const r = i.target;
      this.displayValue = r.value, this.dispatchEvent(new CustomEvent("input", {
        bubbles: !0,
        composed: !0,
        detail: { rawValue: r.value }
      }));
    }, this.handleFocus = (i) => {
      this.dispatchEvent(new CustomEvent("focus", {
        bubbles: !0,
        composed: !0,
        detail: i
      }));
    }, this.handleBlur = (i) => {
      this.dispatchEvent(new CustomEvent("blur", {
        bubbles: !0,
        composed: !0,
        detail: i
      }));
    }, this.handleClear = (i) => {
      i.stopPropagation(), !(this.disabled || this.readonly) && (this.value = null, this.displayValue = "", this.selectedHour = null, this.selectedMinute = null, this.selectedSecond = null, this.selectedPeriod = null, this.dispatchEvent(new CustomEvent("clear", {
        bubbles: !0,
        composed: !0
      })), this.dispatchEvent(new CustomEvent("change", {
        bubbles: !0,
        composed: !0,
        detail: {
          value: "",
          time: null
        }
      })));
    }, this.handleSelectOption = (i, r) => {
      this.activeColumn = i, i === "hour" && (this.selectedHour = r), i === "minute" && (this.selectedMinute = r), i === "second" && (this.selectedSecond = r), i === "period" && (this.selectedPeriod = r);
    }, this.handleSelectNow = () => {
      const i = /* @__PURE__ */ new Date();
      this.commitTimeSelection(i.getHours(), i.getMinutes(), i.getSeconds());
    }, this.handleConfirm = () => {
      this.confirmSelection();
    }, this.handleCancel = () => {
      this.syncValueToState(), this.closePanel();
    };
  }
  static {
    this.styles = $r;
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("keydown", this.handleGlobalKeydown), document.addEventListener("click", this.handleOutsideClick);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("keydown", this.handleGlobalKeydown), document.removeEventListener("click", this.handleOutsideClick);
  }
  willUpdate(t) {
    (t.has("value") || t.has("format") || t.has("use12Hours")) && this.syncValueToState();
  }
  syncValueToState() {
    if (!this.value) {
      this.displayValue = "", this.selectedHour = null, this.selectedMinute = null, this.selectedSecond = null, this.selectedPeriod = null;
      return;
    }
    let t = null;
    if (this.value instanceof Date) t = this.value;
    else if (typeof this.value == "string") {
      const i = this.value.split(":");
      if (i.length >= 2) {
        const r = parseInt(i[0], 10), a = parseInt(i[1], 10), s = i[2] ? parseInt(i[2], 10) : 0;
        !isNaN(r) && !isNaN(a) && (t = /* @__PURE__ */ new Date(), t.setHours(r, a, isNaN(s) ? 0 : s, 0));
      }
    }
    if (t) {
      const i = t.getHours(), r = t.getMinutes(), a = t.getSeconds();
      if (this.selectedMinute = r, this.selectedSecond = a, this.use12Hours) {
        this.selectedPeriod = i >= 12 ? "PM" : "AM";
        let s = i % 12;
        s === 0 && (s = 12), this.selectedHour = s;
      } else
        this.selectedHour = i, this.selectedPeriod = null;
      this.displayValue = this.formatTimeDisplay(i, r, a);
    } else typeof this.value == "string" && (this.displayValue = this.value);
  }
  formatTimeDisplay(t, i, r) {
    const a = (n) => String(n).padStart(2, "0");
    if (this.use12Hours) {
      const n = t >= 12 ? "PM" : "AM";
      let c = t % 12;
      c === 0 && (c = 12);
      let p = `${a(c)}:${a(i)}`;
      return this.showSeconds && (p += `:${a(r)}`), `${p} ${n}`;
    }
    let s = `${a(t)}:${a(i)}`;
    return this.showSeconds && (s += `:${a(r)}`), s;
  }
  navigateColumnOptions(t) {
    if (this.activeColumn === "hour") {
      const i = this.generateHourOptions(), r = this.selectedHour ?? i[0]?.value ?? 0, a = (i.findIndex((s) => s.value === r) + t + i.length) % i.length;
      i[a].disabled || (this.selectedHour = i[a].value);
    } else if (this.activeColumn === "minute") {
      const i = this.generateMinuteOptions(), r = this.selectedMinute ?? i[0]?.value ?? 0, a = (i.findIndex((s) => s.value === r) + t + i.length) % i.length;
      i[a].disabled || (this.selectedMinute = i[a].value);
    } else if (this.activeColumn === "second") {
      const i = this.generateSecondOptions(), r = this.selectedSecond ?? i[0]?.value ?? 0, a = (i.findIndex((s) => s.value === r) + t + i.length) % i.length;
      i[a].disabled || (this.selectedSecond = i[a].value);
    } else if (this.activeColumn === "period") {
      const i = this.generatePeriodOptions(), r = this.selectedPeriod ?? "AM", a = (i.findIndex((s) => s.value === r) + t + i.length) % i.length;
      i[a].disabled || (this.selectedPeriod = i[a].value);
    }
  }
  openPanel() {
    this.isOpen || (this.isOpen = !0, this.activeColumn = this.use12Hours ? "period" : "hour", this.dispatchEvent(new CustomEvent("open", {
      bubbles: !0,
      composed: !0
    })));
  }
  closePanel() {
    this.isOpen && (this.isOpen = !1, this.dispatchEvent(new CustomEvent("close", {
      bubbles: !0,
      composed: !0
    })));
  }
  confirmSelection() {
    let t = this.selectedHour ?? 0;
    const i = this.selectedMinute ?? 0, r = this.selectedSecond ?? 0;
    this.use12Hours && (this.selectedPeriod === "PM" && t < 12 && (t += 12), this.selectedPeriod === "AM" && t === 12 && (t = 0)), this.commitTimeSelection(t, i, r);
  }
  commitTimeSelection(t, i, r) {
    const a = /* @__PURE__ */ new Date();
    a.setHours(t, i, r, 0);
    const s = this.formatTimeDisplay(t, i, r);
    this.displayValue = s, this.value = s, this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: {
        value: s,
        time: a
      }
    })), this.closePanel();
  }
  generateHourOptions() {
    const t = this.use12Hours ? 12 : 23, i = this.use12Hours ? 1 : 0, r = [];
    for (let a = i; a <= t; a += this.hourStep) {
      const s = this.disabledHours ? this.disabledHours(a) : !1, n = String(a).padStart(2, "0");
      r.push({
        value: a,
        label: n,
        disabled: s
      });
    }
    return r;
  }
  generateMinuteOptions() {
    const t = [];
    for (let i = 0; i < 60; i += this.minuteStep) {
      const r = this.disabledMinutes ? this.disabledMinutes(i, this.selectedHour) : !1, a = String(i).padStart(2, "0");
      t.push({
        value: i,
        label: a,
        disabled: r
      });
    }
    return t;
  }
  generateSecondOptions() {
    const t = [];
    for (let i = 0; i < 60; i += this.secondStep) {
      const r = this.disabledSeconds ? this.disabledSeconds(i, this.selectedHour, this.selectedMinute) : !1, a = String(i).padStart(2, "0");
      t.push({
        value: i,
        label: a,
        disabled: r
      });
    }
    return t;
  }
  generatePeriodOptions() {
    return [{
      value: "AM",
      label: "AM",
      disabled: !1
    }, {
      value: "PM",
      label: "PM",
      disabled: !1
    }];
  }
  render() {
    const t = {
      value: this.value,
      displayValue: this.displayValue,
      format: this.format,
      use12Hours: this.use12Hours,
      hourStep: this.hourStep,
      minuteStep: this.minuteStep,
      secondStep: this.secondStep,
      showSeconds: this.showSeconds,
      placeholder: this.placeholder,
      clearable: this.clearable,
      readonly: this.readonly,
      disabled: this.disabled,
      error: this.error,
      variant: this.variant,
      size: this.size,
      fullWidth: this.fullWidth,
      isOpen: this.isOpen,
      activeColumn: this.activeColumn,
      selectedHour: this.selectedHour,
      selectedMinute: this.selectedMinute,
      selectedSecond: this.selectedSecond,
      selectedPeriod: this.selectedPeriod,
      hours: this.generateHourOptions(),
      minutes: this.generateMinuteOptions(),
      seconds: this.generateSecondOptions(),
      periods: this.generatePeriodOptions(),
      onInput: this.handleInput,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onKeydown: this.handleGlobalKeydown,
      onTogglePanel: this.togglePanel,
      onClear: this.handleClear,
      onSelectOption: this.handleSelectOption,
      onSelectNow: this.handleSelectNow,
      onConfirm: this.handleConfirm,
      onCancel: this.handleCancel,
      inputRef: (i) => {
        this.inputEl = i;
      },
      panelRef: (i) => {
        this.panelEl = i;
      }
    };
    return Tr(t);
  }
};
o([l({
  type: String,
  reflect: !0
})], S.prototype, "value", void 0);
o([l({ type: String })], S.prototype, "format", void 0);
o([l({
  type: Boolean,
  attribute: "use12-hours"
})], S.prototype, "use12Hours", void 0);
o([l({
  type: Number,
  attribute: "hour-step"
})], S.prototype, "hourStep", void 0);
o([l({
  type: Number,
  attribute: "minute-step"
})], S.prototype, "minuteStep", void 0);
o([l({
  type: Number,
  attribute: "second-step"
})], S.prototype, "secondStep", void 0);
o([l({
  type: Boolean,
  attribute: "show-seconds"
})], S.prototype, "showSeconds", void 0);
o([l({ type: Function })], S.prototype, "disabledHours", void 0);
o([l({ type: Function })], S.prototype, "disabledMinutes", void 0);
o([l({ type: Function })], S.prototype, "disabledSeconds", void 0);
o([l({ type: String })], S.prototype, "placeholder", void 0);
o([l({ type: Boolean })], S.prototype, "clearable", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], S.prototype, "readonly", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], S.prototype, "disabled", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], S.prototype, "error", void 0);
o([l({ type: String })], S.prototype, "variant", void 0);
o([l({ type: String })], S.prototype, "size", void 0);
o([l({
  type: Boolean,
  attribute: "full-width",
  reflect: !0
})], S.prototype, "fullWidth", void 0);
o([g()], S.prototype, "isOpen", void 0);
o([g()], S.prototype, "activeColumn", void 0);
o([g()], S.prototype, "selectedHour", void 0);
o([g()], S.prototype, "selectedMinute", void 0);
o([g()], S.prototype, "selectedSecond", void 0);
o([g()], S.prototype, "selectedPeriod", void 0);
o([g()], S.prototype, "displayValue", void 0);
S = o([k("biz-time-picker")], S);
var Mr = ({ message: e, type: t }) => d`
    <div class="biz-toast-item biz-toast-item--${t}" role="alert">
      ${e}
    </div>
  `, Ar = ({ toasts: e }) => d`
    <div class="biz-toast-manager">
      ${qe(e, (t) => t.id, (t) => Mr({
  message: t.message,
  type: t.type
}))}
    </div>
  `, Ir = w`
  .biz-toast-manager {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 2000;
}

.biz-toast-item {
  display: block;
  margin-bottom: 8px;
  padding: 12px 16px;
  border-radius: 4px;
  color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  animation: slideIn 0.3s ease-out;
  min-width: 200px;
  max-width: 400px;
}

@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.biz-toast-item--success { background-color: #2ecc71; }
.biz-toast-item--error { background-color: #e74c3c; }
.biz-toast-item--warning { background-color: #f1c40f; color: #333; }
.biz-toast-item--info { background-color: #3498db; }
`, lt = class extends _ {
  constructor(...t) {
    super(...t), this.toasts = [];
  }
  static {
    this.styles = Ir;
  }
  render() {
    return Ar({ toasts: this.toasts });
  }
};
o([l({ type: Array })], lt.prototype, "toasts", void 0);
lt = o([k("biz-toast-manager")], lt);
var Br = w`
  :host {
    /* Layout & Sizing */
    --biz-transfer-list-width: 600px;
    --biz-transfer-list-box-width: 250px;
    --biz-transfer-list-box-height: 320px;
    --biz-transfer-list-item-height: 40px;
    --biz-transfer-list-border-radius: 6px;
    --biz-transfer-list-gap: 16px;

    /* Colors - Base & Box */
    --biz-transfer-list-bg: #ffffff;
    --biz-transfer-list-border-color: #d1d5db;
    --biz-transfer-list-header-bg: #f9fafb;
    --biz-transfer-list-text-color: #111827;

    /* Colors - Item & Interaction */
    --biz-transfer-list-item-hover-bg: #f3f4f6;
    --biz-transfer-list-item-selected-bg: #eff6ff;
    --biz-transfer-list-item-selected-text: #2563eb;

    /* Colors - Action Buttons */
    --biz-transfer-list-btn-bg: #ffffff;
    --biz-transfer-list-btn-border-color: #d1d5db;
    --biz-transfer-list-btn-hover-bg: #f9fafb;
    --biz-transfer-list-btn-active-bg: #2563eb;
    --biz-transfer-list-btn-active-text: #ffffff;

    /* Colors - Disabled */
    --biz-transfer-list-disabled-bg: #f3f4f6;
    --biz-transfer-list-disabled-text: #9ca3af;
    --biz-transfer-list-disabled-border: #e5e7eb;

    display: inline-block;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  .biz-transfer-list__live-region {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Root Container */
  .biz-transfer-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--biz-transfer-list-gap);
    width: var(--biz-transfer-list-width);
    color: var(--biz-transfer-list-text-color);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  /* Variants */
  .biz-transfer-list--vertical {
    flex-direction: column;
    width: var(--biz-transfer-list-box-width);
  }

  .biz-transfer-list--vertical .biz-transfer-list__actions {
    flex-direction: row;
  }

  /* Sizes */
  .biz-transfer-list--small {
    --biz-transfer-list-box-width: 200px;
    --biz-transfer-list-box-height: 240px;
    --biz-transfer-list-item-height: 32px;
    font-size: 13px;
  }

  .biz-transfer-list--medium {
    --biz-transfer-list-box-width: 250px;
    --biz-transfer-list-box-height: 320px;
    --biz-transfer-list-item-height: 40px;
    font-size: 14px;
  }

  .biz-transfer-list--large {
    --biz-transfer-list-box-width: 300px;
    --biz-transfer-list-box-height: 400px;
    --biz-transfer-list-item-height: 48px;
    font-size: 16px;
  }

  /* List Box */
  .biz-transfer-list__box {
    display: flex;
    flex-direction: column;
    width: var(--biz-transfer-list-box-width);
    height: var(--biz-transfer-list-box-height);
    background-color: var(--biz-transfer-list-bg);
    border: 1px solid var(--biz-transfer-list-border-color);
    border-radius: var(--biz-transfer-list-border-radius);
    overflow: hidden;
  }

  /* Header */
  .biz-transfer-list__header {
    background-color: var(--biz-transfer-list-header-bg);
    border-bottom: 1px solid var(--biz-transfer-list-border-color);
    padding: 8px 12px;
  }

  .biz-transfer-list__header-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .biz-transfer-list__header-title {
    font-weight: 600;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .biz-transfer-list__header-count {
    font-size: 0.85em;
    color: #6b7280;
  }

  /* Search */
  .biz-transfer-list__search {
    padding: 8px;
    border-bottom: 1px solid var(--biz-transfer-list-border-color);
  }

  .biz-transfer-list__search-input {
    width: 100%;
    padding: 6px 10px;
    border: 1px solid var(--biz-transfer-list-border-color);
    border-radius: calc(var(--biz-transfer-list-border-radius) - 2px);
    font-size: inherit;
    outline: none;
    background-color: var(--biz-transfer-list-bg);
    color: inherit;
  }

  .biz-transfer-list__search-input:focus {
    border-color: var(--biz-transfer-list-btn-active-bg);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }

  /* List Body */
  .biz-transfer-list__body {
    flex: 1;
    overflow-y: auto;
    outline: none;
  }

  .biz-transfer-list__body:focus-visible {
    box-shadow: inset 0 0 0 2px var(--biz-transfer-list-btn-active-bg);
  }

  .biz-transfer-list__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Items */
  .biz-transfer-list__item {
    display: flex;
    align-items: center;
    gap: 8px;
    height: var(--biz-transfer-list-item-height);
    padding: 0 12px;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.15s ease, color 0.15s ease;
  }

  .biz-transfer-list__item:hover:not(.biz-transfer-list__item--disabled) {
    background-color: var(--biz-transfer-list-item-hover-bg);
  }

  .biz-transfer-list__item--selected {
    background-color: var(--biz-transfer-list-item-selected-bg);
    color: var(--biz-transfer-list-item-selected-text);
  }

  .biz-transfer-list__item--focused {
    outline: 2px solid var(--biz-transfer-list-btn-active-bg);
    outline-offset: -2px;
  }

  .biz-transfer-list__item--disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .biz-transfer-list__item-content {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .biz-transfer-list__checkbox {
    cursor: inherit;
  }

  /* Empty State */
  .biz-transfer-list__empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 16px;
    color: #9ca3af;
    font-size: 0.9em;
  }

  /* Footer */
  .biz-transfer-list__footer:not(:empty) {
    border-top: 1px solid var(--biz-transfer-list-border-color);
    padding: 8px 12px;
    background-color: var(--biz-transfer-list-header-bg);
  }

  /* Action Buttons Container */
  .biz-transfer-list__actions,
  .biz-transfer-list__reorder-actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
  }

  /* Action Button Styles */
  .biz-transfer-list__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 36px;
    padding: 0 8px;
    background-color: var(--biz-transfer-list-btn-bg);
    border: 1px solid var(--biz-transfer-list-btn-border-color);
    border-radius: var(--biz-transfer-list-border-radius);
    color: var(--biz-transfer-list-text-color);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s ease;
    outline: none;
  }

  .biz-transfer-list__btn:hover:not(:disabled) {
    background-color: var(--biz-transfer-list-btn-hover-bg);
    border-color: #9ca3af;
  }

  .biz-transfer-list__btn:focus-visible {
    box-shadow: 0 0 0 2px var(--biz-transfer-list-btn-active-bg);
  }

  .biz-transfer-list__btn:active:not(:disabled) {
    background-color: var(--biz-transfer-list-btn-active-bg);
    color: var(--biz-transfer-list-btn-active-text);
  }

  .biz-transfer-list__btn:disabled {
    background-color: var(--biz-transfer-list-disabled-bg);
    color: var(--biz-transfer-list-disabled-text);
    border-color: var(--biz-transfer-list-disabled-border);
    cursor: not-allowed;
  }

  /* Disabled State for Component */
  .biz-transfer-list--disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`, Pr = (e) => {
  const { sourceData: t, targetData: i, sourceTitle: r, targetTitle: a, showSearch: s, showSelectAll: n, showReorder: c, disabled: p, oneWay: b, variant: u = "horizontal", size: h = "medium", sourceSelectedKeys: v, targetSelectedKeys: m, sourceSearchQuery: z, targetSearchQuery: D, focusedSide: x, focusedIndex: W, liveMessage: Y, handleSelectAll: P, handleItemSelect: re, handleSearchInput: ce, handleMoveRight: fe, handleMoveAllRight: ye, handleMoveLeft: xe, handleMoveAllLeft: _e, handleMoveUp: Te, handleMoveDown: Me, handleKeyDown: ze } = e, oe = (y, F) => F.trim() ? y.filter((he) => he.label.toLowerCase().includes(F.toLowerCase())) : y, ae = oe(t, z), le = oe(i, D), De = ae.length > 0 && ae.every((y) => y.disabled || v.includes(y.key)), Ee = le.length > 0 && le.every((y) => y.disabled || m.includes(y.key)), Ae = ae.filter((y) => !y.disabled && v.includes(y.key)).length, f = le.filter((y) => !y.disabled && m.includes(y.key)).length, T = (y, F, he, Ie, Be, Ut, qt, jt) => d`
      <div class=${`biz-transfer-list__box biz-transfer-list__box--${y}`}>
        <div class="biz-transfer-list__header">
          <slot name=${qt}>
            <div class="biz-transfer-list__header-content">
              ${n ? d`
                <input
                  type="checkbox"
                  class="biz-transfer-list__checkbox"
                  .checked=${Ut}
                  .disabled=${p || he.length === 0}
                  @change=${(pe) => P(y, pe.target.checked)}
                  aria-label=${`${F} 전체 선택`}
                />
              ` : ""}
              <span class="biz-transfer-list__header-title">${F}</span>
              <span class="biz-transfer-list__header-count">
                ${Ie.length}/${he.length}
              </span>
            </div>
          </slot>
        </div>

        ${s ? d`
          <div class="biz-transfer-list__search">
            <input
              type="text"
              class="biz-transfer-list__search-input"
              placeholder="검색..."
              .value=${Be}
              .disabled=${p}
              @input=${(pe) => ce(y, pe)}
              aria-label=${`${F} 검색`}
            />
          </div>
        ` : ""}

        <div
          class="biz-transfer-list__body"
          role="listbox"
          aria-multiselectable="true"
          aria-label=${F}
          tabindex=${p ? -1 : 0}
          @keydown=${(pe) => ze(y, pe)}
        >
          ${he.length === 0 ? d`
            <div class="biz-transfer-list__empty">
              <slot name=${jt}>데이터가 없습니다.</slot>
            </div>
          ` : d`
            <ul class="biz-transfer-list__list">
              ${he.map((pe, Yt) => {
    const tt = Ie.includes(pe.key), Gt = x === y && W === Yt, We = p || !!pe.disabled;
    return d`
                  <li
                    class=${`biz-transfer-list__item ${tt ? "biz-transfer-list__item--selected" : ""} ${Gt ? "biz-transfer-list__item--focused" : ""} ${We ? "biz-transfer-list__item--disabled" : ""}`}
                    role="option"
                    aria-selected=${tt ? "true" : "false"}
                    aria-disabled=${We ? "true" : "false"}
                    @click=${(Qt) => !We && re(y, pe.key, Qt)}
                  >
                    <input
                      type="checkbox"
                      class="biz-transfer-list__checkbox"
                      .checked=${tt}
                      .disabled=${We}
                      tabindex="-1"
                      aria-hidden="true"
                    />
                    <div class="biz-transfer-list__item-content">
                      <slot name="item-slot" .item=${pe}>
                        <span class="biz-transfer-list__item-label">${pe.label}</span>
                      </slot>
                    </div>
                  </li>
                `;
  })}
            </ul>
          `}
        </div>

        <div class="biz-transfer-list__footer">
          <slot name="footer-slot"></slot>
        </div>
      </div>
    `;
  return d`
    <div
      class=${`biz-transfer-list biz-transfer-list--${u} biz-transfer-list--${h} ${p ? "biz-transfer-list--disabled" : ""}`}
      role="group"
      aria-label="Transfer List"
    >
      <div class="biz-transfer-list__live-region" aria-live="polite" aria-atomic="true">
        ${Y}
      </div>

      ${T("source", r, ae, v, z, De, "source-header-slot", "empty-source-slot")}

      <div class="biz-transfer-list__actions" role="group" aria-label="이동 제어">
        <slot name="action-controls-slot">
          <button
            type="button"
            class="biz-transfer-list__btn"
            .disabled=${p || Ae === 0}
            @click=${fe}
            aria-label="선택 항목 우측 이동"
          >
            &gt;
          </button>
          <button
            type="button"
            class="biz-transfer-list__btn"
            .disabled=${p || ae.filter((y) => !y.disabled).length === 0}
            @click=${ye}
            aria-label="전체 항목 우측 이동"
          >
            &gt;&gt;
          </button>
          ${b ? "" : d`
            <button
              type="button"
              class="biz-transfer-list__btn"
              .disabled=${p || f === 0}
              @click=${xe}
              aria-label="선택 항목 좌측 이동"
            >
              &lt;
            </button>
            <button
              type="button"
              class="biz-transfer-list__btn"
              .disabled=${p || le.filter((y) => !y.disabled).length === 0}
              @click=${_e}
              aria-label="전체 항목 좌측 이동"
            >
              &lt;&lt;
            </button>
          `}
        </slot>
      </div>

      ${T("target", a, le, m, D, Ee, "target-header-slot", "empty-target-slot")}

      ${c ? d`
        <div class="biz-transfer-list__reorder-actions" role="group" aria-label="순서 제어">
          <button
            type="button"
            class="biz-transfer-list__btn"
            .disabled=${p || m.length !== 1}
            @click=${Te}
            aria-label="위로 이동"
          >
            ▲
          </button>
          <button
            type="button"
            class="biz-transfer-list__btn"
            .disabled=${p || m.length !== 1}
            @click=${Me}
            aria-label="아래로 이동"
          >
            ▼
          </button>
        </div>
      ` : ""}
    </div>
  `;
}, B = class extends _ {
  constructor(...t) {
    super(...t), this.sourceData = [], this.targetData = [], this.value = [], this.sourceTitle = "Source", this.targetTitle = "Target", this.showSearch = !1, this.showSelectAll = !0, this.showReorder = !1, this.disabled = !1, this.oneWay = !1, this.variant = "horizontal", this.size = "medium", this.sourceSelectedKeys = [], this.targetSelectedKeys = [], this.sourceSearchQuery = "", this.targetSearchQuery = "", this.focusedSide = null, this.focusedIndex = -1, this.liveMessage = "", this.handleSelectAll = (i, r) => {
      const a = this.getFilteredItems(i).filter((s) => !s.disabled).map((s) => s.key);
      i === "source" ? r ? this.sourceSelectedKeys = Array.from(/* @__PURE__ */ new Set([...this.sourceSelectedKeys, ...a])) : this.sourceSelectedKeys = this.sourceSelectedKeys.filter((s) => !a.includes(s)) : r ? this.targetSelectedKeys = Array.from(/* @__PURE__ */ new Set([...this.targetSelectedKeys, ...a])) : this.targetSelectedKeys = this.targetSelectedKeys.filter((s) => !a.includes(s)), this.dispatchSelectChangeEvent();
    }, this.handleItemSelect = (i, r, a) => {
      let s = i === "source" ? [...this.sourceSelectedKeys] : [...this.targetSelectedKeys];
      s.includes(r) ? s = s.filter((c) => c !== r) : s.push(r), i === "source" ? this.sourceSelectedKeys = s : this.targetSelectedKeys = s;
      const n = this.getFilteredItems(i);
      this.focusedSide = i, this.focusedIndex = n.findIndex((c) => c.key === r), this.dispatchSelectChangeEvent();
    }, this.handleSearchInput = (i, r) => {
      const a = r.target.value;
      i === "source" ? this.sourceSearchQuery = a : this.targetSearchQuery = a, this.dispatchEvent(new CustomEvent("search", {
        bubbles: !0,
        composed: !0,
        detail: {
          side: i,
          query: a
        }
      }));
    }, this.handleMoveRight = () => {
      const i = this.sourceData.filter((a) => !a.disabled && this.sourceSelectedKeys.includes(a.key));
      if (i.length === 0) return;
      const r = i.map((a) => a.key);
      this.sourceData = this.sourceData.filter((a) => !r.includes(a.key)), this.targetData = [...this.targetData, ...i], this.sourceSelectedKeys = this.sourceSelectedKeys.filter((a) => !r.includes(a)), this.liveMessage = `${i.length}개 항목이 우측 선택 리스트로 이동되었습니다.`, this.dispatchChangeEvent(r, "right");
    }, this.handleMoveAllRight = () => {
      const i = this.getFilteredItems("source").filter((a) => !a.disabled);
      if (i.length === 0) return;
      const r = i.map((a) => a.key);
      this.sourceData = this.sourceData.filter((a) => !r.includes(a.key)), this.targetData = [...this.targetData, ...i], this.sourceSelectedKeys = this.sourceSelectedKeys.filter((a) => !r.includes(a)), this.liveMessage = `전체 ${i.length}개 항목이 우측 선택 리스트로 이동되었습니다.`, this.dispatchChangeEvent(r, "right");
    }, this.handleMoveLeft = () => {
      if (this.oneWay) return;
      const i = this.targetData.filter((a) => !a.disabled && this.targetSelectedKeys.includes(a.key));
      if (i.length === 0) return;
      const r = i.map((a) => a.key);
      this.targetData = this.targetData.filter((a) => !r.includes(a.key)), this.sourceData = [...this.sourceData, ...i], this.targetSelectedKeys = this.targetSelectedKeys.filter((a) => !r.includes(a)), this.liveMessage = `${i.length}개 항목이 좌측 원본 리스트로 이동되었습니다.`, this.dispatchChangeEvent(r, "left");
    }, this.handleMoveAllLeft = () => {
      if (this.oneWay) return;
      const i = this.getFilteredItems("target").filter((a) => !a.disabled);
      if (i.length === 0) return;
      const r = i.map((a) => a.key);
      this.targetData = this.targetData.filter((a) => !r.includes(a.key)), this.sourceData = [...this.sourceData, ...i], this.targetSelectedKeys = this.targetSelectedKeys.filter((a) => !r.includes(a)), this.liveMessage = `전체 ${i.length}개 항목이 좌측 원본 리스트로 이동되었습니다.`, this.dispatchChangeEvent(r, "left");
    }, this.handleMoveUp = () => {
      if (this.targetSelectedKeys.length !== 1) return;
      const i = this.targetSelectedKeys[0], r = this.targetData.findIndex((c) => c.key === i);
      if (r <= 0) return;
      const a = [...this.targetData], [s] = a.splice(r, 1), n = r - 1;
      a.splice(n, 0, s), this.targetData = a, this.value = this.targetData.map((c) => c.key), this.dispatchEvent(new CustomEvent("reorder", {
        bubbles: !0,
        composed: !0,
        detail: {
          targetData: [...this.targetData],
          movedKey: i,
          newIndex: n
        }
      }));
    }, this.handleMoveDown = () => {
      if (this.targetSelectedKeys.length !== 1) return;
      const i = this.targetSelectedKeys[0], r = this.targetData.findIndex((c) => c.key === i);
      if (r < 0 || r >= this.targetData.length - 1) return;
      const a = [...this.targetData], [s] = a.splice(r, 1), n = r + 1;
      a.splice(n, 0, s), this.targetData = a, this.value = this.targetData.map((c) => c.key), this.dispatchEvent(new CustomEvent("reorder", {
        bubbles: !0,
        composed: !0,
        detail: {
          targetData: [...this.targetData],
          movedKey: i,
          newIndex: n
        }
      }));
    }, this.handleKeyDown = (i, r) => {
      if (this.disabled) return;
      const a = this.getFilteredItems(i);
      if (a.length === 0) return;
      let s = this.focusedSide === i ? this.focusedIndex : 0;
      switch (s < 0 && (s = 0), r.key) {
        case "ArrowDown":
          r.preventDefault(), this.focusedSide = i, this.focusedIndex = Math.min(s + 1, a.length - 1);
          break;
        case "ArrowUp":
          r.preventDefault(), this.focusedSide = i, this.focusedIndex = Math.max(s - 1, 0);
          break;
        case " ":
          r.preventDefault(), a[s] && !a[s].disabled && this.handleItemSelect(i, a[s].key, r);
          break;
        case "Enter":
          r.preventDefault(), i === "source" ? this.handleMoveRight() : this.handleMoveLeft();
          break;
        case "a":
        case "A":
          (r.ctrlKey || r.metaKey) && (r.preventDefault(), this.handleSelectAll(i, !0));
      }
    };
  }
  static {
    this.styles = Br;
  }
  updated(t) {
    super.updated(t), t.has("value") && this.syncDataWithValue();
  }
  syncDataWithValue() {
    if (!this.value) return;
    const t = [...this.sourceData, ...this.targetData], i = /* @__PURE__ */ new Map();
    this.value.forEach((s) => {
      const n = t.find((c) => c.key === s);
      n && i.set(s, n);
    });
    const r = Array.from(i.values()), a = t.filter((s) => !i.has(s.key));
    this.sourceData = a, this.targetData = r;
  }
  getFilteredItems(t) {
    const i = t === "source" ? this.sourceData : this.targetData, r = t === "source" ? this.sourceSearchQuery : this.targetSearchQuery;
    return r.trim() ? i.filter((a) => a.label.toLowerCase().includes(r.toLowerCase())) : i;
  }
  dispatchSelectChangeEvent() {
    this.dispatchEvent(new CustomEvent("select-change", {
      bubbles: !0,
      composed: !0,
      detail: {
        sourceSelectedKeys: [...this.sourceSelectedKeys],
        targetSelectedKeys: [...this.targetSelectedKeys]
      }
    }));
  }
  dispatchChangeEvent(t, i) {
    this.value = this.targetData.map((r) => r.key), this.dispatchEvent(new CustomEvent("change", {
      bubbles: !0,
      composed: !0,
      detail: {
        sourceData: [...this.sourceData],
        targetData: [...this.targetData],
        movedKeys: t,
        direction: i
      }
    }));
  }
  render() {
    const t = {
      sourceData: this.sourceData,
      targetData: this.targetData,
      value: this.value,
      sourceTitle: this.sourceTitle,
      targetTitle: this.targetTitle,
      showSearch: this.showSearch,
      showSelectAll: this.showSelectAll,
      showReorder: this.showReorder,
      disabled: this.disabled,
      oneWay: this.oneWay,
      variant: this.variant,
      size: this.size,
      sourceSelectedKeys: this.sourceSelectedKeys,
      targetSelectedKeys: this.targetSelectedKeys,
      sourceSearchQuery: this.sourceSearchQuery,
      targetSearchQuery: this.targetSearchQuery,
      focusedSide: this.focusedSide,
      focusedIndex: this.focusedIndex,
      liveMessage: this.liveMessage,
      handleSelectAll: this.handleSelectAll,
      handleItemSelect: this.handleItemSelect,
      handleSearchInput: this.handleSearchInput,
      handleMoveRight: this.handleMoveRight,
      handleMoveAllRight: this.handleMoveAllRight,
      handleMoveLeft: this.handleMoveLeft,
      handleMoveAllLeft: this.handleMoveAllLeft,
      handleMoveUp: this.handleMoveUp,
      handleMoveDown: this.handleMoveDown,
      handleKeyDown: this.handleKeyDown
    };
    return Pr(t);
  }
};
o([l({
  type: Array,
  attribute: "source-data"
})], B.prototype, "sourceData", void 0);
o([l({
  type: Array,
  attribute: "target-data"
})], B.prototype, "targetData", void 0);
o([l({ type: Array })], B.prototype, "value", void 0);
o([l({
  type: String,
  attribute: "source-title"
})], B.prototype, "sourceTitle", void 0);
o([l({
  type: String,
  attribute: "target-title"
})], B.prototype, "targetTitle", void 0);
o([l({
  type: Boolean,
  attribute: "show-search"
})], B.prototype, "showSearch", void 0);
o([l({
  type: Boolean,
  attribute: "show-select-all"
})], B.prototype, "showSelectAll", void 0);
o([l({
  type: Boolean,
  attribute: "show-reorder"
})], B.prototype, "showReorder", void 0);
o([l({
  type: Boolean,
  reflect: !0
})], B.prototype, "disabled", void 0);
o([l({
  type: Boolean,
  attribute: "one-way"
})], B.prototype, "oneWay", void 0);
o([l({ type: String })], B.prototype, "variant", void 0);
o([l({ type: String })], B.prototype, "size", void 0);
o([g()], B.prototype, "sourceSelectedKeys", void 0);
o([g()], B.prototype, "targetSelectedKeys", void 0);
o([g()], B.prototype, "sourceSearchQuery", void 0);
o([g()], B.prototype, "targetSearchQuery", void 0);
o([g()], B.prototype, "focusedSide", void 0);
o([g()], B.prototype, "focusedIndex", void 0);
o([g()], B.prototype, "liveMessage", void 0);
B = o([k("biz-transfer-list")], B);
export {
  Ce as ApplicationShellWc,
  J as BizCheckbox,
  O as BizChip,
  A as BizDatePicker,
  $ as BizDateTimePicker,
  I as BizDropdown,
  ne as BizFormWrapper,
  L as BizMarkdownEditor,
  H as BizMultilineTextInput,
  K as BizNumberInput,
  te as BizPasswordInput,
  j as BizRadioButtonGroup,
  ie as BizRating,
  N as BizSlider,
  Z as BizSplitPane,
  Q as BizTextInput,
  S as BizTimePicker,
  B as BizTransferList,
  gi as BreadcrumbTemplate,
  Qe as BreadcrumbWC,
  ue as CardContainer,
  q as CheckboxGroupWc,
  ve as ContentContainer,
  C as DateRangePickerWc,
  Pi as DialogTemplate,
  Ze as DialogWC,
  R as FileUploaderWc,
  V as ImageUploadWc,
  X as InlineEditWrapperWc,
  G as IpAddressInputWc,
  ee as PageHeader,
  de as RadioButtonWc,
  U as SearchInputWC,
  me as TileLayoutGridWc,
  Mr as ToastItem,
  Ar as ToastManagerTemplate,
  lt as ToastManagerWC
};
