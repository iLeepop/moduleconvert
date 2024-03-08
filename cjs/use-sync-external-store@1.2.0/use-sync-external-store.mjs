/* esm.sh - esbuild bundle(use-sync-external-store@1.2.0) es2022 production */
import * as __0$ from "react";
var require = n => { const e = m => typeof m.default < "u" ? m.default : m, c = m => Object.assign({}, m); switch (n) { case "react": return e(__0$); default: throw new Error("module \"" + n + "\" not found"); } };
var S = Object.create; var c = Object.defineProperty; var E = Object.getOwnPropertyDescriptor; var y = Object.getOwnPropertyNames; var q = Object.getPrototypeOf, v = Object.prototype.hasOwnProperty; var j = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (r, t) => (typeof require < "u" ? require : r)[t] }) : e)(function (e) { if (typeof require < "u") return require.apply(this, arguments); throw Error('Dynamic require of "' + e + '" is not supported') }); var d = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports), N = (e, r) => { for (var t in r) c(e, t, { get: r[t], enumerable: !0 }) }, n = (e, r, t, a) => { if (r && typeof r == "object" || typeof r == "function") for (let u of y(r)) !v.call(e, u) && u !== t && c(e, u, { get: () => r[u], enumerable: !(a = E(r, u)) || a.enumerable }); return e }, o = (e, r, t) => (n(e, r, "default"), t && n(t, r, "default")), i = (e, r, t) => (t = e != null ? S(q(e)) : {}, n(r || !e || !e.__esModule ? c(t, "default", { value: e, enumerable: !0 }) : t, e)); var x = d(p => { "use strict"; var D = j("react").useSyncExternalStore; p.useSyncExternalStore = D }); var l = d((k, f) => { "use strict"; f.exports = x() }); var s = {}; N(s, { default: () => b, useSyncExternalStore: () => O }); var m = i(l()); o(s, i(l())); var { useSyncExternalStore: O } = m, { default: _, ...V } = m, b = _ !== void 0 ? _ : V; export { b as default, O as useSyncExternalStore };
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store.production.min.js:
  (**
   * @license React
   * use-sync-external-store.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=use-sync-external-store.mjs.map
