/* esm.sh - esbuild bundle(use-sync-external-store@1.2.0/shim) es2022 production */
import * as __0$ from "react";
var require = n => { const e = m => typeof m.default < "u" ? m.default : m, c = m => Object.assign({}, m); switch (n) { case "react": return e(__0$); default: throw new Error("module \"" + n + "\" not found"); } };
var _ = Object.create; var d = Object.defineProperty; var h = Object.getOwnPropertyDescriptor; var w = Object.getOwnPropertyNames; var g = Object.getPrototypeOf, j = Object.prototype.hasOwnProperty; var q = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (t, n) => (typeof require < "u" ? require : t)[n] }) : e)(function (e) { if (typeof require < "u") return require.apply(this, arguments); throw Error('Dynamic require of "' + e + '" is not supported') }); var p = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), O = (e, t) => { for (var n in t) d(e, n, { get: t[n], enumerable: !0 }) }, f = (e, t, n, s) => { if (t && typeof t == "object" || typeof t == "function") for (let r of w(t)) !j.call(e, r) && r !== n && d(e, r, { get: () => t[r], enumerable: !(s = h(t, r)) || s.enumerable }); return e }, o = (e, t, n) => (f(e, t, "default"), n && f(n, t, "default")), v = (e, t, n) => (n = e != null ? _(g(e)) : {}, f(t || !e || !e.__esModule ? d(n, "default", { value: e, enumerable: !0 }) : n, e)); var m = p(S => { "use strict"; var i = q("react"); function D(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t } var N = typeof Object.is == "function" ? Object.is : D, V = i.useState, k = i.useEffect, L = i.useLayoutEffect, z = i.useDebugValue; function A(e, t) { var n = t(), s = V({ inst: { value: n, getSnapshot: t } }), r = s[0].inst, c = s[1]; return L(function () { r.value = n, r.getSnapshot = t, a(r) && c({ inst: r }) }, [e, n, t]), k(function () { return a(r) && c({ inst: r }), e(function () { a(r) && c({ inst: r }) }) }, [e]), z(n), n } function a(e) { var t = e.getSnapshot; e = e.value; try { var n = t(); return !N(e, n) } catch { return !0 } } function B(e, t) { return t() } var C = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? B : A; S.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : C }); var l = p((K, y) => { "use strict"; y.exports = m() }); var u = {}; O(u, { default: () => H, useSyncExternalStore: () => F }); var E = v(l()); o(u, v(l())); var { useSyncExternalStore: F } = E, { default: x, ...G } = E, H = x !== void 0 ? x : G; export { H as default, F as useSyncExternalStore };
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=shim.js.map
