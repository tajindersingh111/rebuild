import {
    s as ae,
    k as Pt,
    l as Lt,
    n as Dt,
    d as Ct,
    o as Ot,
    i as Rt,
    v as Zt,
    a as Wt,
    e as se,
    w as Jt,
    c as Gt,
    p as wt,
    x as Qt,
    m as Ee,
    q as De,
    r as Kt,
    H as Ie
} from "../chunks/scheduler.Bal8Y2GG.js";
import {
    S as le,
    i as he,
    g as Ce,
    b as Nt,
    d as Me,
    t as zt,
    c as Ht,
    a as Xt,
    m as Ft,
    e as Yt
} from "../chunks/index.BruxqCn-.js";
import {
    f as we
} from "../chunks/fetchClient.DtCbC4hg.js";
import {
    L as je
} from "../chunks/loading.DPFq8fxy.js";

function Be(vt) {
    let gt, P, ct, V, Z, ot, ht;
    const st = [ze, Ne],
        J = [];

    function et(Y, z) {
        return Y[7] ? 0 : 1
    }
    return V = et(vt), Z = J[V] = st[V](vt), {
        c() {
            gt = Pt("div"), P = Zt(vt[0]), ct = Wt(), Z.c(), ot = se(), this.h()
        },
        l(Y) {
            gt = Lt(Y, "DIV", {
                class: !0
            });
            var z = Dt(gt);
            P = Jt(z, vt[0]), z.forEach(Ct), ct = Gt(Y), Z.l(Y), ot = se(), this.h()
        },
        h() {
            Ot(gt, "class", "dashboard-card-title svelte-hliq9k")
        },
        m(Y, z) {
            Rt(Y, gt, z), wt(gt, P), Rt(Y, ct, z), J[V].m(Y, z), Rt(Y, ot, z), ht = !0
        },
        p(Y, z) {
            (!ht || z & 1) && Qt(P, Y[0]);
            let H = V;
            V = et(Y), V === H ? J[V].p(Y, z) : (Ce(), Nt(J[H], 1, 1, () => {
                J[H] = null
            }), Me(), Z = J[V], Z ? Z.p(Y, z) : (Z = J[V] = st[V](Y), Z.c()), zt(Z, 1), Z.m(ot.parentNode, ot))
        },
        i(Y) {
            ht || (zt(Z), ht = !0)
        },
        o(Y) {
            Nt(Z), ht = !1
        },
        d(Y) {
            Y && (Ct(gt), Ct(ct), Ct(ot)), J[V].d(Y)
        }
    }
}

function Re(vt) {
    let gt, P, ct, V, Z = "Retry",
        ot, ht;
    return {
        c() {
            gt = Pt("p"), P = Zt(vt[1]), ct = Wt(), V = Pt("button"), V.textContent = Z, this.h()
        },
        l(st) {
            gt = Lt(st, "P", {
                class: !0
            });
            var J = Dt(gt);
            P = Jt(J, vt[1]), J.forEach(Ct), ct = Gt(st), V = Lt(st, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), Ee(V) !== "svelte-1y3nrwp" && (V.textContent = Z), this.h()
        },
        h() {
            Ot(gt, "class", "error-text"), Ot(V, "class", "btn")
        },
        m(st, J) {
            Rt(st, gt, J), wt(gt, P), Rt(st, ct, J), Rt(st, V, J), ot || (ht = De(V, "click", vt[8]), ot = !0)
        },
        p(st, J) {
            J & 2 && Qt(P, st[1])
        },
        i: Kt,
        o: Kt,
        d(st) {
            st && (Ct(gt), Ct(ct), Ct(V)), ot = !1, ht()
        }
    }
}

function Ne(vt) {
    let gt, P, ct, V, Z, ot, ht, st, J = vt[4] !== null && xe(vt),
        et = vt[3] !== null && ye(vt),
        Y = vt[6] !== null && ve(vt);
    return {
        c() {
            gt = Pt("div"), P = Pt("div"), ct = Pt("div"), V = Zt(vt[2]), Z = Wt(), J && J.c(), ot = Wt(), et && et.c(), ht = Wt(), Y && Y.c(), st = se(), this.h()
        },
        l(z) {
            gt = Lt(z, "DIV", {
                class: !0
            });
            var H = Dt(gt);
            P = Lt(H, "DIV", {});
            var w = Dt(P);
            ct = Lt(w, "DIV", {
                class: !0
            });
            var I = Dt(ct);
            V = Jt(I, vt[2]), I.forEach(Ct), Z = Gt(w), J && J.l(w), w.forEach(Ct), ot = Gt(H), et && et.l(H), H.forEach(Ct), ht = Gt(z), Y && Y.l(z), st = se(), this.h()
        },
        h() {
            Ot(ct, "class", "dashboard-card-value svelte-hliq9k"), Ot(gt, "class", "dashboard-card-content svelte-hliq9k")
        },
        m(z, H) {
            Rt(z, gt, H), wt(gt, P), wt(P, ct), wt(ct, V), wt(P, Z), J && J.m(P, null), wt(gt, ot), et && et.m(gt, null), Rt(z, ht, H), Y && Y.m(z, H), Rt(z, st, H)
        },
        p(z, H) {
            H & 4 && Qt(V, z[2]), z[4] !== null ? J ? J.p(z, H) : (J = xe(z), J.c(), J.m(P, null)) : J && (J.d(1), J = null), z[3] !== null ? et ? et.p(z, H) : (et = ye(z), et.c(), et.m(gt, null)) : et && (et.d(1), et = null), z[6] !== null ? Y ? Y.p(z, H) : (Y = ve(z), Y.c(), Y.m(st.parentNode, st)) : Y && (Y.d(1), Y = null)
        },
        i: Kt,
        o: Kt,
        d(z) {
            z && (Ct(gt), Ct(ht), Ct(st)), J && J.d(), et && et.d(), Y && Y.d(z)
        }
    }
}

function ze(vt) {
    let gt, P;
    return gt = new je({}), {
        c() {
            Ht(gt.$$.fragment)
        },
        l(ct) {
            Xt(gt.$$.fragment, ct)
        },
        m(ct, V) {
            Ft(gt, ct, V), P = !0
        },
        p: Kt,
        i(ct) {
            P || (zt(gt.$$.fragment, ct), P = !0)
        },
        o(ct) {
            Nt(gt.$$.fragment, ct), P = !1
        },
        d(ct) {
            Yt(gt, ct)
        }
    }
}

function xe(vt) {
    let gt, P;
    return {
        c() {
            gt = Pt("div"), P = Zt(vt[4]), this.h()
        },
        l(ct) {
            gt = Lt(ct, "DIV", {
                class: !0
            });
            var V = Dt(gt);
            P = Jt(V, vt[4]), V.forEach(Ct), this.h()
        },
        h() {
            Ot(gt, "class", "dashboard-card-subscript")
        },
        m(ct, V) {
            Rt(ct, gt, V), wt(gt, P)
        },
        p(ct, V) {
            V & 16 && Qt(P, ct[4])
        },
        d(ct) {
            ct && Ct(gt)
        }
    }
}

function ye(vt) {
    let gt, P, ct, V, Z = vt[5] !== null && be(vt);
    return {
        c() {
            gt = Pt("div"), P = Pt("div"), ct = Zt(vt[3]), V = Wt(), Z && Z.c(), this.h()
        },
        l(ot) {
            gt = Lt(ot, "DIV", {});
            var ht = Dt(gt);
            P = Lt(ht, "DIV", {
                class: !0
            });
            var st = Dt(P);
            ct = Jt(st, vt[3]), st.forEach(Ct), V = Gt(ht), Z && Z.l(ht), ht.forEach(Ct), this.h()
        },
        h() {
            Ot(P, "class", "dashboard-card-value svelte-hliq9k")
        },
        m(ot, ht) {
            Rt(ot, gt, ht), wt(gt, P), wt(P, ct), wt(gt, V), Z && Z.m(gt, null)
        },
        p(ot, ht) {
            ht & 8 && Qt(ct, ot[3]), ot[5] !== null ? Z ? Z.p(ot, ht) : (Z = be(ot), Z.c(), Z.m(gt, null)) : Z && (Z.d(1), Z = null)
        },
        d(ot) {
            ot && Ct(gt), Z && Z.d()
        }
    }
}

function be(vt) {
    let gt, P;
    return {
        c() {
            gt = Pt("div"), P = Zt(vt[5]), this.h()
        },
        l(ct) {
            gt = Lt(ct, "DIV", {
                class: !0
            });
            var V = Dt(gt);
            P = Jt(V, vt[5]), V.forEach(Ct), this.h()
        },
        h() {
            Ot(gt, "class", "dashboard-card-subscript")
        },
        m(ct, V) {
            Rt(ct, gt, V), wt(gt, P)
        },
        p(ct, V) {
            V & 32 && Qt(P, ct[5])
        },
        d(ct) {
            ct && Ct(gt)
        }
    }
}

function ve(vt) {
    let gt, P;
    return {
        c() {
            gt = Pt("div"), P = Zt(vt[6]), this.h()
        },
        l(ct) {
            gt = Lt(ct, "DIV", {
                class: !0
            });
            var V = Dt(gt);
            P = Jt(V, vt[6]), V.forEach(Ct), this.h()
        },
        h() {
            Ot(gt, "class", "dashboard-card-message svelte-hliq9k")
        },
        m(ct, V) {
            Rt(ct, gt, V), wt(gt, P)
        },
        p(ct, V) {
            V & 64 && Qt(P, ct[6])
        },
        d(ct) {
            ct && Ct(gt)
        }
    }
}

function We(vt) {
    let gt, P, ct, V;
    const Z = [Re, Be],
        ot = [];

    function ht(st, J) {
        return st[1] ? 0 : 1
    }
    return P = ht(vt), ct = ot[P] = Z[P](vt), {
        c() {
            gt = Pt("div"), ct.c(), this.h()
        },
        l(st) {
            gt = Lt(st, "DIV", {
                class: !0
            });
            var J = Dt(gt);
            ct.l(J), J.forEach(Ct), this.h()
        },
        h() {
            Ot(gt, "class", "dashboard-card card svelte-hliq9k")
        },
        m(st, J) {
            Rt(st, gt, J), ot[P].m(gt, null), V = !0
        },
        p(st, [J]) {
            let et = P;
            P = ht(st), P === et ? ot[P].p(st, J) : (Ce(), Nt(ot[et], 1, 1, () => {
                ot[et] = null
            }), Me(), ct = ot[P], ct ? ct.p(st, J) : (ct = ot[P] = Z[P](st), ct.c()), zt(ct, 1), ct.m(gt, null))
        },
        i(st) {
            V || (zt(ct), V = !0)
        },
        o(st) {
            Nt(ct), V = !1
        },
        d(st) {
            st && Ct(gt), ot[P].d()
        }
    }
}

function Ge(vt, gt, P) {
    let {
        url: ct
    } = gt, {
        title: V
    } = gt, Z = null, ot = "-", ht = null, st = null, J = null, et = null, Y = !0;
    const z = async () => {
        P(1, Z = null), P(7, Y = !0), (async () => {
            const H = await we.GET(ct);
            if (H.error) {
                P(1, Z = H.error.message);
                return
            }
            P(2, ot = H.data.data.value_1), P(3, ht = H.data.data.value_2), P(4, st = H.data.data.subscript_1), P(5, J = H.data.data.subscript_2), H.data.data.message !== void 0 && P(6, et = H.data.data.message)
        })().finally(() => P(7, Y = !1))
    };
    return z(), vt.$$set = H => {
        "url" in H && P(9, ct = H.url), "title" in H && P(0, V = H.title)
    }, [V, Z, ot, ht, st, J, et, Y, z, ct]
}
class qt extends le {
    constructor(gt) {
        super(), he(this, gt, Ge, We, ae, {
            url: 9,
            title: 0
        })
    }
}
var He = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Ae(vt) {
    return vt && vt.__esModule && Object.prototype.hasOwnProperty.call(vt, "default") ? vt.default : vt
}
var Te = {
    exports: {}
};
(function(vt) {
    (function(gt, P) {
        vt.exports ? (P.default = P, vt.exports = gt && gt.document ? P(gt) : P) : (gt.Highcharts && gt.Highcharts.error(16, !0), gt.Highcharts = P(gt))
    })(typeof window < "u" ? window : He, function(gt) {
        var P = {};

        function ct(V, Z, ot, ht) {
            V.hasOwnProperty(Z) || (V[Z] = ht.apply(null, ot), typeof CustomEvent == "function" && gt.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
                detail: {
                    path: Z,
                    module: V[Z]
                }
            })))
        }
        return ct(P, "Core/Globals.js", [], function() {
            var V, Z;
            return (Z = V || (V = {})).SVG_NS = "http://www.w3.org/2000/svg", Z.product = "Highcharts", Z.version = "11.4.3", Z.win = gt !== void 0 ? gt : {}, Z.doc = Z.win.document, Z.svg = Z.doc && Z.doc.createElementNS && !!Z.doc.createElementNS(Z.SVG_NS, "svg").createSVGRect, Z.userAgent = Z.win.navigator && Z.win.navigator.userAgent || "", Z.isChrome = Z.userAgent.indexOf("Chrome") !== -1, Z.isFirefox = Z.userAgent.indexOf("Firefox") !== -1, Z.isMS = /(edge|msie|trident)/i.test(Z.userAgent) && !Z.win.opera, Z.isSafari = !Z.isChrome && Z.userAgent.indexOf("Safari") !== -1, Z.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(Z.userAgent), Z.isWebKit = Z.userAgent.indexOf("AppleWebKit") !== -1, Z.deg2rad = 2 * Math.PI / 360, Z.hasBidiBug = Z.isFirefox && 4 > parseInt(Z.userAgent.split("Firefox/")[1], 10), Z.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], Z.noop = function() {}, Z.supportsPassiveEvents = function() {
                let ot = !1;
                if (!Z.isMS) {
                    let ht = Object.defineProperty({}, "passive", {
                        get: function() {
                            ot = !0
                        }
                    });
                    Z.win.addEventListener && Z.win.removeEventListener && (Z.win.addEventListener("testPassive", Z.noop, ht), Z.win.removeEventListener("testPassive", Z.noop, ht))
                }
                return ot
            }(), Z.charts = [], Z.composed = [], Z.dateFormats = {}, Z.seriesTypes = {}, Z.symbolSizes = {}, Z.chartCount = 0, V
        }), ct(P, "Core/Utilities.js", [P["Core/Globals.js"]], function(V) {
            let Z, {
                charts: ot,
                doc: ht,
                win: st
            } = V;

            function J(t, e, o, i) {
                let l = e ? "Highcharts error" : "Highcharts warning";
                t === 32 && (t = `${l}: Deprecated member`);
                let a = D(t),
                    b = a ? `${l} #${t}: www.highcharts.com/errors/${t}/` : t.toString();
                if (i !== void 0) {
                    let O = "";
                    a && (b += "?"), k(i, function(_, y) {
                        O += `
 - ${y}: ${_}`, a && (b += encodeURI(y) + "=" + encodeURI(_))
                    }), b += O
                }
                p(V, "displayError", {
                    chart: o,
                    code: t,
                    message: b,
                    params: i
                }, function() {
                    if (e) throw Error(b);
                    st.console && J.messages.indexOf(b) === -1 && console.warn(b)
                }), J.messages.push(b)
            }

            function et(t, e) {
                return parseInt(t, e || 10)
            }

            function Y(t) {
                return typeof t == "string"
            }

            function z(t) {
                let e = Object.prototype.toString.call(t);
                return e === "[object Array]" || e === "[object Array Iterator]"
            }

            function H(t, e) {
                return !!t && typeof t == "object" && (!e || !z(t))
            }

            function w(t) {
                return H(t) && typeof t.nodeType == "number"
            }

            function I(t) {
                let e = t && t.constructor;
                return !!(H(t, !0) && !w(t) && e && e.name && e.name !== "Object")
            }

            function D(t) {
                return typeof t == "number" && !isNaN(t) && t < 1 / 0 && t > -1 / 0
            }

            function T(t) {
                return t != null
            }

            function v(t, e, o) {
                let i, l = Y(e) && !T(o),
                    a = (b, O) => {
                        T(b) ? t.setAttribute(O, b) : l ? (i = t.getAttribute(O)) || O !== "class" || (i = t.getAttribute(O + "Name")) : t.removeAttribute(O)
                    };
                return Y(e) ? a(o, e) : k(e, a), i
            }

            function M(t) {
                return z(t) ? t : [t]
            }

            function u(t, e) {
                let o;
                for (o in t || (t = {}), e) t[o] = e[o];
                return t
            }

            function m() {
                let t = arguments,
                    e = t.length;
                for (let o = 0; o < e; o++) {
                    let i = t[o];
                    if (i != null) return i
                }
            }

            function h(t, e) {
                u(t.style, e)
            }

            function x(t) {
                return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
            }

            function X(t, e) {
                return t > 1e14 ? t : parseFloat(t.toPrecision(e || 14))
            }(J || (J = {})).messages = [], Math.easeInOutSine = function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            };
            let L = Array.prototype.find ? function(t, e) {
                return t.find(e)
            } : function(t, e) {
                let o, i = t.length;
                for (o = 0; o < i; o++)
                    if (e(t[o], o)) return t[o]
            };

            function k(t, e, o) {
                for (let i in t) Object.hasOwnProperty.call(t, i) && e.call(o || t[i], t[i], i, t)
            }

            function r(t, e, o) {
                function i(b, O) {
                    let _ = t.removeEventListener;
                    _ && _.call(t, b, O, !1)
                }

                function l(b) {
                    let O, _;
                    t.nodeName && (e ? (O = {})[e] = !0 : O = b, k(O, function(y, j) {
                        if (b[j])
                            for (_ = b[j].length; _--;) i(j, b[j][_].fn)
                    }))
                }
                let a = typeof t == "function" && t.prototype || t;
                if (Object.hasOwnProperty.call(a, "hcEvents")) {
                    let b = a.hcEvents;
                    if (e) {
                        let O = b[e] || [];
                        o ? (b[e] = O.filter(function(_) {
                            return o !== _.fn
                        }), i(e, o)) : (l(b), b[e] = [])
                    } else l(b), delete a.hcEvents
                }
            }

            function p(t, e, o, i) {
                if (o = o || {}, ht.createEvent && (t.dispatchEvent || t.fireEvent && t !== V)) {
                    let l = ht.createEvent("Events");
                    l.initEvent(e, !0, !0), o = u(l, o), t.dispatchEvent ? t.dispatchEvent(o) : t.fireEvent(e, o)
                } else if (t.hcEvents) {
                    o.target || u(o, {
                        preventDefault: function() {
                            o.defaultPrevented = !0
                        },
                        target: t,
                        type: e
                    });
                    let l = [],
                        a = t,
                        b = !1;
                    for (; a.hcEvents;) Object.hasOwnProperty.call(a, "hcEvents") && a.hcEvents[e] && (l.length && (b = !0), l.unshift.apply(l, a.hcEvents[e])), a = Object.getPrototypeOf(a);
                    b && l.sort((O, _) => O.order - _.order), l.forEach(O => {
                        O.fn.call(t, o) === !1 && o.preventDefault()
                    })
                }
                i && !o.defaultPrevented && i.call(t, o)
            }
            k({
                map: "map",
                each: "forEach",
                grep: "filter",
                reduce: "reduce",
                some: "some"
            }, function(t, e) {
                V[e] = function(o) {
                    return J(32, !1, void 0, {
                        [`Highcharts.${e}`]: `use Array.${t}`
                    }), Array.prototype[t].apply(o, [].slice.call(arguments, 1))
                }
            });
            let n = function() {
                let t = Math.random().toString(36).substring(2, 9) + "-",
                    e = 0;
                return function() {
                    return "highcharts-" + (Z ? "" : t) + e++
                }
            }();
            return st.jQuery && (st.jQuery.fn.highcharts = function() {
                let t = [].slice.call(arguments);
                if (this[0]) return t[0] ? (new V[Y(t[0]) ? t.shift() : "Chart"](this[0], t[0], t[1]), this) : ot[v(this[0], "data-highcharts-chart")]
            }), {
                addEvent: function(t, e, o, i = {}) {
                    let l = typeof t == "function" && t.prototype || t;
                    Object.hasOwnProperty.call(l, "hcEvents") || (l.hcEvents = {});
                    let a = l.hcEvents;
                    V.Point && t instanceof V.Point && t.series && t.series.chart && (t.series.chart.runTrackerClick = !0);
                    let b = t.addEventListener;
                    b && b.call(t, e, o, !!V.supportsPassiveEvents && {
                        passive: i.passive === void 0 ? e.indexOf("touch") !== -1 : i.passive,
                        capture: !1
                    }), a[e] || (a[e] = []);
                    let O = {
                        fn: o,
                        order: typeof i.order == "number" ? i.order : 1 / 0
                    };
                    return a[e].push(O), a[e].sort((_, y) => _.order - y.order),
                        function() {
                            r(t, e, o)
                        }
                },
                arrayMax: function(t) {
                    let e = t.length,
                        o = t[0];
                    for (; e--;) t[e] > o && (o = t[e]);
                    return o
                },
                arrayMin: function(t) {
                    let e = t.length,
                        o = t[0];
                    for (; e--;) t[e] < o && (o = t[e]);
                    return o
                },
                attr: v,
                clamp: function(t, e, o) {
                    return t > e ? t < o ? t : o : e
                },
                clearTimeout: function(t) {
                    T(t) && clearTimeout(t)
                },
                correctFloat: X,
                createElement: function(t, e, o, i, l) {
                    let a = ht.createElement(t);
                    return e && u(a, e), l && h(a, {
                        padding: "0",
                        border: "none",
                        margin: "0"
                    }), o && h(a, o), i && i.appendChild(a), a
                },
                crisp: (t, e = 0, o) => {
                    let i = e % 2 / 2,
                        l = o ? -1 : 1;
                    return (Math.round(t * l - i) + i) * l
                },
                css: h,
                defined: T,
                destroyObjectProperties: function(t, e, o) {
                    k(t, function(i, l) {
                        i !== e && (i != null && i.destroy) && i.destroy(), (i != null && i.destroy || !o) && delete t[l]
                    })
                },
                diffObjects: function(t, e, o, i) {
                    let l = {};
                    return function a(b, O, _, y) {
                        let j = o ? O : b;
                        k(b, function(G, W) {
                            if (!y && i && i.indexOf(W) > -1 && O[W]) {
                                G = M(G), _[W] = [];
                                for (let it = 0; it < Math.max(G.length, O[W].length); it++) O[W][it] && (G[it] === void 0 ? _[W][it] = O[W][it] : (_[W][it] = {}, a(G[it], O[W][it], _[W][it], y + 1)))
                            } else H(G, !0) && !G.nodeType ? (_[W] = z(G) ? [] : {}, a(G, O[W] || {}, _[W], y + 1), Object.keys(_[W]).length !== 0 || W === "colorAxis" && y === 0 || delete _[W]) : (b[W] !== O[W] || W in b && !(W in O)) && W !== "__proto__" && W !== "constructor" && (_[W] = j[W])
                        })
                    }(t, e, l, 0), l
                },
                discardElement: function(t) {
                    t && t.parentElement && t.parentElement.removeChild(t)
                },
                erase: function(t, e) {
                    let o = t.length;
                    for (; o--;)
                        if (t[o] === e) {
                            t.splice(o, 1);
                            break
                        }
                },
                error: J,
                extend: u,
                extendClass: function(t, e) {
                    let o = function() {};
                    return o.prototype = new t, u(o.prototype, e), o
                },
                find: L,
                fireEvent: p,
                getClosestDistance: function(t, e) {
                    let o, i, l, a = !e;
                    return t.forEach(b => {
                        if (b.length > 1)
                            for (l = b.length - 1; l > 0; l--)(i = b[l] - b[l - 1]) < 0 && !a ? (e == null || e(), e = void 0) : i && (o === void 0 || i < o) && (o = i)
                    }), o
                },
                getMagnitude: x,
                getNestedProperty: function(t, e) {
                    let o = t.split(".");
                    for (; o.length && T(e);) {
                        let i = o.shift();
                        if (i === void 0 || i === "__proto__") return;
                        if (i === "this") {
                            let a;
                            return H(e) && (a = e["@this"]), a ? ? e
                        }
                        let l = e[i];
                        if (!T(l) || typeof l == "function" || typeof l.nodeType == "number" || l === st) return;
                        e = l
                    }
                    return e
                },
                getStyle: function t(e, o, i) {
                    let l;
                    if (o === "width") {
                        let b = Math.min(e.offsetWidth, e.scrollWidth),
                            O = e.getBoundingClientRect && e.getBoundingClientRect().width;
                        return O < b && O >= b - 1 && (b = Math.floor(O)), Math.max(0, b - (t(e, "padding-left", !0) || 0) - (t(e, "padding-right", !0) || 0))
                    }
                    if (o === "height") return Math.max(0, Math.min(e.offsetHeight, e.scrollHeight) - (t(e, "padding-top", !0) || 0) - (t(e, "padding-bottom", !0) || 0));
                    let a = st.getComputedStyle(e, void 0);
                    return a && (l = a.getPropertyValue(o), m(i, o !== "opacity") && (l = et(l))), l
                },
                inArray: function(t, e, o) {
                    return J(32, !1, void 0, {
                        "Highcharts.inArray": "use Array.indexOf"
                    }), e.indexOf(t, o)
                },
                insertItem: function(t, e) {
                    let o, i = t.options.index,
                        l = e.length;
                    for (o = t.options.isInternal ? l : 0; o < l + 1; o++)
                        if (!e[o] || D(i) && i < m(e[o].options.index, e[o]._i) || e[o].options.isInternal) {
                            e.splice(o, 0, t);
                            break
                        }
                    return o
                },
                isArray: z,
                isClass: I,
                isDOMElement: w,
                isFunction: function(t) {
                    return typeof t == "function"
                },
                isNumber: D,
                isObject: H,
                isString: Y,
                keys: function(t) {
                    return J(32, !1, void 0, {
                        "Highcharts.keys": "use Object.keys"
                    }), Object.keys(t)
                },
                merge: function() {
                    let t, e = arguments,
                        o = {},
                        i = function(a, b) {
                            return typeof a != "object" && (a = {}), k(b, function(O, _) {
                                _ !== "__proto__" && _ !== "constructor" && (!H(O, !0) || I(O) || w(O) ? a[_] = b[_] : a[_] = i(a[_] || {}, O))
                            }), a
                        };
                    e[0] === !0 && (o = e[1], e = Array.prototype.slice.call(e, 2));
                    let l = e.length;
                    for (t = 0; t < l; t++) o = i(o, e[t]);
                    return o
                },
                normalizeTickInterval: function(t, e, o, i, l) {
                    let a, b = t;
                    o = m(o, x(t));
                    let O = t / o;
                    for (!e && (e = l ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], i === !1 && (o === 1 ? e = e.filter(function(_) {
                            return _ % 1 == 0
                        }) : o <= .1 && (e = [1 / o]))), a = 0; a < e.length && (b = e[a], (!l || !(b * o >= t)) && (l || !(O <= (e[a] + (e[a + 1] || e[a])) / 2))); a++);
                    return X(b * o, -Math.round(Math.log(.001) / Math.LN10))
                },
                objectEach: k,
                offset: function(t) {
                    let e = ht.documentElement,
                        o = t.parentElement || t.parentNode ? t.getBoundingClientRect() : {
                            top: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        };
                    return {
                        top: o.top + (st.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: o.left + (st.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
                        width: o.width,
                        height: o.height
                    }
                },
                pad: function(t, e, o) {
                    return Array((e || 2) + 1 - String(t).replace("-", "").length).join(o || "0") + t
                },
                pick: m,
                pInt: et,
                pushUnique: function(t, e) {
                    return 0 > t.indexOf(e) && !!t.push(e)
                },
                relativeLength: function(t, e, o) {
                    return /%$/.test(t) ? e * parseFloat(t) / 100 + (o || 0) : parseFloat(t)
                },
                removeEvent: r,
                replaceNested: function(t, ...e) {
                    let o, i;
                    do
                        for (i of (o = t, e)) t = t.replace(i[0], i[1]); while (t !== o);
                    return t
                },
                splat: M,
                stableSort: function(t, e) {
                    let o, i, l = t.length;
                    for (i = 0; i < l; i++) t[i].safeI = i;
                    for (t.sort(function(a, b) {
                            return (o = e(a, b)) === 0 ? a.safeI - b.safeI : o
                        }), i = 0; i < l; i++) delete t[i].safeI
                },
                syncTimeout: function(t, e, o) {
                    return e > 0 ? setTimeout(t, e, o) : (t.call(0, o), -1)
                },
                timeUnits: {
                    millisecond: 1,
                    second: 1e3,
                    minute: 6e4,
                    hour: 36e5,
                    day: 864e5,
                    week: 6048e5,
                    month: 24192e5,
                    year: 314496e5
                },
                uniqueKey: n,
                useSerialIds: function(t) {
                    return Z = m(t, Z)
                },
                wrap: function(t, e, o) {
                    let i = t[e];
                    t[e] = function() {
                        let l = arguments,
                            a = this;
                        return o.apply(this, [function() {
                            return i.apply(a, arguments.length ? arguments : l)
                        }].concat([].slice.call(arguments)))
                    }
                }
            }
        }), ct(P, "Core/Chart/ChartDefaults.js", [], function() {
            return {
                alignThresholds: !1,
                panning: {
                    enabled: !1,
                    type: "x"
                },
                styledMode: !1,
                borderRadius: 0,
                colorCount: 10,
                allowMutatingData: !0,
                ignoreHiddenSeries: !0,
                spacing: [10, 10, 15, 10],
                resetZoomButton: {
                    theme: {},
                    position: {}
                },
                reflow: !0,
                type: "line",
                zooming: {
                    singleTouch: !1,
                    resetButton: {
                        theme: {
                            zIndex: 6
                        },
                        position: {
                            align: "right",
                            x: -10,
                            y: 10
                        }
                    }
                },
                width: null,
                height: null,
                borderColor: "#334eff",
                backgroundColor: "#ffffff",
                plotBorderColor: "#cccccc"
            }
        }), ct(P, "Core/Color/Palettes.js", [], function() {
            return {
                colors: ["#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1"]
            }
        }), ct(P, "Core/Time.js", [P["Core/Globals.js"], P["Core/Utilities.js"]], function(V, Z) {
            let {
                win: ot
            } = V, {
                defined: ht,
                error: st,
                extend: J,
                isNumber: et,
                isObject: Y,
                merge: z,
                objectEach: H,
                pad: w,
                pick: I,
                splat: D,
                timeUnits: T
            } = Z, v = V.isSafari && ot.Intl && ot.Intl.DateTimeFormat.prototype.formatRange, M = V.isSafari && ot.Intl && !ot.Intl.DateTimeFormat.prototype.formatRange;
            class u {
                constructor(h) {
                    this.options = {}, this.useUTC = !1, this.variableTimezone = !1, this.Date = ot.Date, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.update(h)
                }
                get(h, x) {
                    if (this.variableTimezone || this.timezoneOffset) {
                        let X = x.getTime(),
                            L = X - this.getTimezoneOffset(x);
                        x.setTime(L);
                        let k = x["getUTC" + h]();
                        return x.setTime(X), k
                    }
                    return this.useUTC ? x["getUTC" + h]() : x["get" + h]()
                }
                set(h, x, X) {
                    if (this.variableTimezone || this.timezoneOffset) {
                        if (h === "Milliseconds" || h === "Seconds" || h === "Minutes" && this.getTimezoneOffset(x) % 36e5 == 0) return x["setUTC" + h](X);
                        let L = this.getTimezoneOffset(x),
                            k = x.getTime() - L;
                        x.setTime(k), x["setUTC" + h](X);
                        let r = this.getTimezoneOffset(x);
                        return k = x.getTime() + r, x.setTime(k)
                    }
                    return this.useUTC || v && h === "FullYear" ? x["setUTC" + h](X) : x["set" + h](X)
                }
                update(h = {}) {
                    let x = I(h.useUTC, !0);
                    this.options = h = z(!0, this.options, h), this.Date = h.Date || ot.Date || Date, this.useUTC = x, this.timezoneOffset = x && h.timezoneOffset || void 0, this.getTimezoneOffset = this.timezoneOffsetFunction(), this.variableTimezone = x && !!(h.getTimezoneOffset || h.timezone)
                }
                makeTime(h, x, X, L, k, r) {
                    let p, n, t;
                    return this.useUTC ? (p = this.Date.UTC.apply(0, arguments), n = this.getTimezoneOffset(p), p += n, n !== (t = this.getTimezoneOffset(p)) ? p += t - n : n - 36e5 !== this.getTimezoneOffset(p - 36e5) || M || (p -= 36e5)) : p = new this.Date(h, x, I(X, 1), I(L, 0), I(k, 0), I(r, 0)).getTime(), p
                }
                timezoneOffsetFunction() {
                    let h = this,
                        x = this.options,
                        X = x.getTimezoneOffset;
                    return this.useUTC ? x.timezone ? L => {
                        try {
                            let k = `shortOffset,${x.timezone||""}`,
                                [r, p, n, t, e = 0] = (u.formatCache[k] = u.formatCache[k] || Intl.DateTimeFormat("en", {
                                    timeZone: x.timezone,
                                    timeZoneName: "shortOffset"
                                })).format(L).split(/(GMT|:)/).map(Number),
                                o = -(36e5 * (n + e / 60));
                            if (et(o)) return o
                        } catch {
                            st(34)
                        }
                        return 0
                    } : this.useUTC && X ? L => 6e4 * X(L.valueOf()) : () => 6e4 * (h.timezoneOffset || 0) : L => 6e4 * new Date(L.toString()).getTimezoneOffset()
                }
                dateFormat(h, x, X) {
                    if (!ht(x) || isNaN(x)) return V.defaultOptions.lang && V.defaultOptions.lang.invalidDate || "";
                    h = I(h, "%Y-%m-%d %H:%M:%S");
                    let L = this,
                        k = new this.Date(x),
                        r = this.get("Hours", k),
                        p = this.get("Day", k),
                        n = this.get("Date", k),
                        t = this.get("Month", k),
                        e = this.get("FullYear", k),
                        o = V.defaultOptions.lang,
                        i = o && o.weekdays,
                        l = o && o.shortWeekdays;
                    return H(J({
                        a: l ? l[p] : i[p].substr(0, 3),
                        A: i[p],
                        d: w(n),
                        e: w(n, 2, " "),
                        w: p,
                        b: o.shortMonths[t],
                        B: o.months[t],
                        m: w(t + 1),
                        o: t + 1,
                        y: e.toString().substr(2, 2),
                        Y: e,
                        H: w(r),
                        k: r,
                        I: w(r % 12 || 12),
                        l: r % 12 || 12,
                        M: w(this.get("Minutes", k)),
                        p: r < 12 ? "AM" : "PM",
                        P: r < 12 ? "am" : "pm",
                        S: w(this.get("Seconds", k)),
                        L: w(Math.floor(x % 1e3), 3)
                    }, V.dateFormats), function(a, b) {
                        for (; h.indexOf("%" + b) !== -1;) h = h.replace("%" + b, typeof a == "function" ? a.call(L, x) : a)
                    }), X ? h.substr(0, 1).toUpperCase() + h.substr(1) : h
                }
                resolveDTLFormat(h) {
                    return Y(h, !0) ? h : {
                        main: (h = D(h))[0],
                        from: h[1],
                        to: h[2]
                    }
                }
                getTimeTicks(h, x, X, L) {
                    let k, r, p, n, t = this,
                        e = t.Date,
                        o = [],
                        i = {},
                        l = new e(x),
                        a = h.unitRange,
                        b = h.count || 1;
                    if (L = I(L, 1), ht(x)) {
                        t.set("Milliseconds", l, a >= T.second ? 0 : b * Math.floor(t.get("Milliseconds", l) / b)), a >= T.second && t.set("Seconds", l, a >= T.minute ? 0 : b * Math.floor(t.get("Seconds", l) / b)), a >= T.minute && t.set("Minutes", l, a >= T.hour ? 0 : b * Math.floor(t.get("Minutes", l) / b)), a >= T.hour && t.set("Hours", l, a >= T.day ? 0 : b * Math.floor(t.get("Hours", l) / b)), a >= T.day && t.set("Date", l, a >= T.month ? 1 : Math.max(1, b * Math.floor(t.get("Date", l) / b))), a >= T.month && (t.set("Month", l, a >= T.year ? 0 : b * Math.floor(t.get("Month", l) / b)), r = t.get("FullYear", l)), a >= T.year && (r -= r % b, t.set("FullYear", l, r)), a === T.week && (n = t.get("Day", l), t.set("Date", l, t.get("Date", l) - n + L + (n < L ? -7 : 0))), r = t.get("FullYear", l);
                        let O = t.get("Month", l),
                            _ = t.get("Date", l),
                            y = t.get("Hours", l);
                        x = l.getTime(), (t.variableTimezone || !t.useUTC) && ht(X) && (p = X - x > 4 * T.month || t.getTimezoneOffset(x) !== t.getTimezoneOffset(X));
                        let j = l.getTime();
                        for (k = 1; j < X;) o.push(j), a === T.year ? j = t.makeTime(r + k * b, 0) : a === T.month ? j = t.makeTime(r, O + k * b) : p && (a === T.day || a === T.week) ? j = t.makeTime(r, O, _ + k * b * (a === T.day ? 1 : 7)) : p && a === T.hour && b > 1 ? j = t.makeTime(r, O, _, y + k * b) : j += a * b, k++;
                        o.push(j), a <= T.hour && o.length < 1e4 && o.forEach(function(G) {
                            G % 18e5 == 0 && t.dateFormat("%H%M%S%L", G) === "000000000" && (i[G] = "day")
                        })
                    }
                    return o.info = J(h, {
                        higherRanks: i,
                        totalRange: a * b
                    }), o
                }
                getDateFormat(h, x, X, L) {
                    let k = this.dateFormat("%m-%d %H:%M:%S.%L", x),
                        r = "01-01 00:00:00.000",
                        p = {
                            millisecond: 15,
                            second: 12,
                            minute: 9,
                            hour: 6,
                            day: 3
                        },
                        n = "millisecond",
                        t = n;
                    for (n in T) {
                        if (h === T.week && +this.dateFormat("%w", x) === X && k.substr(6) === r.substr(6)) {
                            n = "week";
                            break
                        }
                        if (T[n] > h) {
                            n = t;
                            break
                        }
                        if (p[n] && k.substr(p[n]) !== r.substr(p[n])) break;
                        n !== "week" && (t = n)
                    }
                    return this.resolveDTLFormat(L[n]).main
                }
            }
            return u.formatCache = {}, u
        }), ct(P, "Core/Defaults.js", [P["Core/Chart/ChartDefaults.js"], P["Core/Globals.js"], P["Core/Color/Palettes.js"], P["Core/Time.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht, st) {
            let {
                isTouchDevice: J
            } = Z, {
                fireEvent: et,
                merge: Y
            } = st, z = {
                colors: ot.colors,
                symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
                lang: {
                    loading: "Loading...",
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    decimalPoint: ".",
                    numericSymbols: ["k", "M", "G", "T", "P", "E"],
                    resetZoom: "Reset zoom",
                    resetZoomTitle: "Reset zoom level 1:1",
                    thousandsSep: " "
                },
                global: {
                    buttonTheme: {
                        fill: "#f7f7f7",
                        padding: 8,
                        r: 2,
                        stroke: "#cccccc",
                        "stroke-width": 1,
                        style: {
                            color: "#333333",
                            cursor: "pointer",
                            fontSize: "0.8em",
                            fontWeight: "normal"
                        },
                        states: {
                            hover: {
                                fill: "#e6e6e6"
                            },
                            select: {
                                fill: "#e6e9ff",
                                style: {
                                    color: "#000000",
                                    fontWeight: "bold"
                                }
                            },
                            disabled: {
                                style: {
                                    color: "#cccccc"
                                }
                            }
                        }
                    }
                },
                time: {
                    Date: void 0,
                    getTimezoneOffset: void 0,
                    timezone: void 0,
                    timezoneOffset: 0,
                    useUTC: !0
                },
                chart: V,
                title: {
                    style: {
                        color: "#333333",
                        fontWeight: "bold"
                    },
                    text: "Chart title",
                    align: "center",
                    margin: 15,
                    widthAdjust: -44
                },
                subtitle: {
                    style: {
                        color: "#666666",
                        fontSize: "0.8em"
                    },
                    text: "",
                    align: "center",
                    widthAdjust: -44
                },
                caption: {
                    margin: 15,
                    style: {
                        color: "#666666",
                        fontSize: "0.8em"
                    },
                    text: "",
                    align: "left",
                    verticalAlign: "bottom"
                },
                plotOptions: {},
                legend: {
                    enabled: !0,
                    align: "center",
                    alignColumns: !0,
                    className: "highcharts-no-tooltip",
                    layout: "horizontal",
                    itemMarginBottom: 2,
                    itemMarginTop: 2,
                    labelFormatter: function() {
                        return this.name
                    },
                    borderColor: "#999999",
                    borderRadius: 0,
                    navigation: {
                        style: {
                            fontSize: "0.8em"
                        },
                        activeColor: "#0022ff",
                        inactiveColor: "#cccccc"
                    },
                    itemStyle: {
                        color: "#333333",
                        cursor: "pointer",
                        fontSize: "0.8em",
                        textDecoration: "none",
                        textOverflow: "ellipsis"
                    },
                    itemHoverStyle: {
                        color: "#000000"
                    },
                    itemHiddenStyle: {
                        color: "#666666",
                        textDecoration: "line-through"
                    },
                    shadow: !1,
                    itemCheckboxStyle: {
                        position: "absolute",
                        width: "13px",
                        height: "13px"
                    },
                    squareSymbol: !0,
                    symbolPadding: 5,
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    title: {
                        style: {
                            fontSize: "0.8em",
                            fontWeight: "bold"
                        }
                    }
                },
                loading: {
                    labelStyle: {
                        fontWeight: "bold",
                        position: "relative",
                        top: "45%"
                    },
                    style: {
                        position: "absolute",
                        backgroundColor: "#ffffff",
                        opacity: .5,
                        textAlign: "center"
                    }
                },
                tooltip: {
                    enabled: !0,
                    animation: {
                        duration: 300,
                        easing: w => Math.sqrt(1 - Math.pow(w - 1, 2))
                    },
                    borderRadius: 3,
                    dateTimeLabelFormats: {
                        millisecond: "%A, %e %b, %H:%M:%S.%L",
                        second: "%A, %e %b, %H:%M:%S",
                        minute: "%A, %e %b, %H:%M",
                        hour: "%A, %e %b, %H:%M",
                        day: "%A, %e %b %Y",
                        week: "Week from %A, %e %b %Y",
                        month: "%B %Y",
                        year: "%Y"
                    },
                    footerFormat: "",
                    headerShape: "callout",
                    hideDelay: 500,
                    padding: 8,
                    shape: "callout",
                    shared: !1,
                    snap: J ? 25 : 10,
                    headerFormat: '<span style="font-size: 0.8em">{point.key}</span><br/>',
                    pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
                    backgroundColor: "#ffffff",
                    borderWidth: void 0,
                    shadow: !0,
                    stickOnContact: !1,
                    style: {
                        color: "#333333",
                        cursor: "default",
                        fontSize: "0.8em"
                    },
                    useHTML: !1
                },
                credits: {
                    enabled: !0,
                    href: "https://www.highcharts.com?credits",
                    position: {
                        align: "right",
                        x: -10,
                        verticalAlign: "bottom",
                        y: -5
                    },
                    style: {
                        cursor: "pointer",
                        color: "#999999",
                        fontSize: "0.6em"
                    },
                    text: "Highcharts.com"
                }
            };
            z.chart.styledMode = !1;
            let H = new ht(z.time);
            return {
                defaultOptions: z,
                defaultTime: H,
                getOptions: function() {
                    return z
                },
                setOptions: function(w) {
                    return et(Z, "setOptions", {
                        options: w
                    }), Y(!0, z, w), (w.time || w.global) && (Z.time ? Z.time.update(Y(z.global, z.time, w.global, w.time)) : Z.time = H), z
                }
            }
        }), ct(P, "Core/Color/Color.js", [P["Core/Globals.js"], P["Core/Utilities.js"]], function(V, Z) {
            let {
                isNumber: ot,
                merge: ht,
                pInt: st
            } = Z;
            class J {
                static parse(Y) {
                    return Y ? new J(Y) : J.None
                }
                constructor(Y) {
                    let z, H, w, I;
                    this.rgba = [NaN, NaN, NaN, NaN], this.input = Y;
                    let D = V.Color;
                    if (D && D !== J) return new D(Y);
                    if (typeof Y == "object" && Y.stops !== void 0) this.stops = Y.stops.map(T => new J(T[1]));
                    else if (typeof Y == "string") {
                        if (this.input = Y = J.names[Y.toLowerCase()] || Y, Y.charAt(0) === "#") {
                            let T = Y.length,
                                v = parseInt(Y.substr(1), 16);
                            T === 7 ? H = [(16711680 & v) >> 16, (65280 & v) >> 8, 255 & v, 1] : T === 4 && (H = [(3840 & v) >> 4 | (3840 & v) >> 8, (240 & v) >> 4 | 240 & v, (15 & v) << 4 | 15 & v, 1])
                        }
                        if (!H)
                            for (w = J.parsers.length; w-- && !H;)(z = (I = J.parsers[w]).regex.exec(Y)) && (H = I.parse(z))
                    }
                    H && (this.rgba = H)
                }
                get(Y) {
                    let z = this.input,
                        H = this.rgba;
                    if (typeof z == "object" && this.stops !== void 0) {
                        let w = ht(z);
                        return w.stops = [].slice.call(w.stops), this.stops.forEach((I, D) => {
                            w.stops[D] = [w.stops[D][0], I.get(Y)]
                        }), w
                    }
                    return H && ot(H[0]) ? Y !== "rgb" && (Y || H[3] !== 1) ? Y === "a" ? `${H[3]}` : "rgba(" + H.join(",") + ")" : "rgb(" + H[0] + "," + H[1] + "," + H[2] + ")" : z
                }
                brighten(Y) {
                    let z = this.rgba;
                    if (this.stops) this.stops.forEach(function(H) {
                        H.brighten(Y)
                    });
                    else if (ot(Y) && Y !== 0)
                        for (let H = 0; H < 3; H++) z[H] += st(255 * Y), z[H] < 0 && (z[H] = 0), z[H] > 255 && (z[H] = 255);
                    return this
                }
                setOpacity(Y) {
                    return this.rgba[3] = Y, this
                }
                tweenTo(Y, z) {
                    let H = this.rgba,
                        w = Y.rgba;
                    if (!ot(H[0]) || !ot(w[0])) return Y.input || "none";
                    let I = w[3] !== 1 || H[3] !== 1;
                    return (I ? "rgba(" : "rgb(") + Math.round(w[0] + (H[0] - w[0]) * (1 - z)) + "," + Math.round(w[1] + (H[1] - w[1]) * (1 - z)) + "," + Math.round(w[2] + (H[2] - w[2]) * (1 - z)) + (I ? "," + (w[3] + (H[3] - w[3]) * (1 - z)) : "") + ")"
                }
            }
            return J.names = {
                white: "#ffffff",
                black: "#000000"
            }, J.parsers = [{
                regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                parse: function(et) {
                    return [st(et[1]), st(et[2]), st(et[3]), parseFloat(et[4], 10)]
                }
            }, {
                regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                parse: function(et) {
                    return [st(et[1]), st(et[2]), st(et[3]), 1]
                }
            }], J.None = new J(""), J
        }), ct(P, "Core/Animation/Fx.js", [P["Core/Color/Color.js"], P["Core/Globals.js"], P["Core/Utilities.js"]], function(V, Z, ot) {
            let {
                parse: ht
            } = V, {
                win: st
            } = Z, {
                isNumber: J,
                objectEach: et
            } = ot;
            class Y {
                constructor(H, w, I) {
                    this.pos = NaN, this.options = w, this.elem = H, this.prop = I
                }
                dSetter() {
                    let H = this.paths,
                        w = H && H[0],
                        I = H && H[1],
                        D = this.now || 0,
                        T = [];
                    if (D !== 1 && w && I)
                        if (w.length === I.length && D < 1)
                            for (let v = 0; v < I.length; v++) {
                                let M = w[v],
                                    u = I[v],
                                    m = [];
                                for (let h = 0; h < u.length; h++) {
                                    let x = M[h],
                                        X = u[h];
                                    J(x) && J(X) && !(u[0] === "A" && (h === 4 || h === 5)) ? m[h] = x + D * (X - x) : m[h] = X
                                }
                                T.push(m)
                            } else T = I;
                        else T = this.toD || [];
                    this.elem.attr("d", T, void 0, !0)
                }
                update() {
                    let H = this.elem,
                        w = this.prop,
                        I = this.now,
                        D = this.options.step;
                    this[w + "Setter"] ? this[w + "Setter"]() : H.attr ? H.element && H.attr(w, I, null, !0) : H.style[w] = I + this.unit, D && D.call(H, I, this)
                }
                run(H, w, I) {
                    let D = this,
                        T = D.options,
                        v = function(m) {
                            return !v.stopped && D.step(m)
                        },
                        M = st.requestAnimationFrame || function(m) {
                            setTimeout(m, 13)
                        },
                        u = function() {
                            for (let m = 0; m < Y.timers.length; m++) Y.timers[m]() || Y.timers.splice(m--, 1);
                            Y.timers.length && M(u)
                        };
                    H !== w || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = H, this.end = w, this.unit = I, this.now = this.start, this.pos = 0, v.elem = this.elem, v.prop = this.prop, v() && Y.timers.push(v) === 1 && M(u)) : (delete T.curAnim[this.prop], T.complete && Object.keys(T.curAnim).length === 0 && T.complete.call(this.elem))
                }
                step(H) {
                    let w, I, D = +new Date,
                        T = this.options,
                        v = this.elem,
                        M = T.complete,
                        u = T.duration,
                        m = T.curAnim;
                    return v.attr && !v.element ? w = !1 : H || D >= u + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), m[this.prop] = !0, I = !0, et(m, function(h) {
                        h !== !0 && (I = !1)
                    }), I && M && M.call(v), w = !1) : (this.pos = T.easing((D - this.startTime) / u), this.now = this.start + (this.end - this.start) * this.pos, this.update(), w = !0), w
                }
                initPath(H, w, I) {
                    let D = H.startX,
                        T = H.endX,
                        v = I.slice(),
                        M = H.isArea,
                        u = M ? 2 : 1,
                        m, h, x, X, L = w && w.slice();
                    if (!L) return [v, v];

                    function k(p, n) {
                        for (; p.length < h;) {
                            let t = p[0],
                                e = n[h - p.length];
                            if (e && t[0] === "M" && (e[0] === "C" ? p[0] = ["C", t[1], t[2], t[1], t[2], t[1], t[2]] : p[0] = ["L", t[1], t[2]]), p.unshift(t), M) {
                                let o = p.pop();
                                p.push(p[p.length - 1], o)
                            }
                        }
                    }

                    function r(p) {
                        for (; p.length < h;) {
                            let n = p[Math.floor(p.length / u) - 1].slice();
                            if (n[0] === "C" && (n[1] = n[5], n[2] = n[6]), M) {
                                let t = p[Math.floor(p.length / u)].slice();
                                p.splice(p.length / 2, 0, n, t)
                            } else p.push(n)
                        }
                    }
                    if (D && T && T.length) {
                        for (x = 0; x < D.length; x++) {
                            if (D[x] === T[0]) {
                                m = x;
                                break
                            }
                            if (D[0] === T[T.length - D.length + x]) {
                                m = x, X = !0;
                                break
                            }
                            if (D[D.length - 1] === T[T.length - D.length + x]) {
                                m = D.length - x;
                                break
                            }
                        }
                        m === void 0 && (L = [])
                    }
                    return L.length && J(m) && (h = v.length + m * u, X ? (k(L, v), r(v)) : (k(v, L), r(L))), [L, v]
                }
                fillSetter() {
                    Y.prototype.strokeSetter.apply(this, arguments)
                }
                strokeSetter() {
                    this.elem.attr(this.prop, ht(this.start).tweenTo(ht(this.end), this.pos), void 0, !0)
                }
            }
            return Y.timers = [], Y
        }), ct(P, "Core/Animation/AnimationUtilities.js", [P["Core/Animation/Fx.js"], P["Core/Utilities.js"]], function(V, Z) {
            let {
                defined: ot,
                getStyle: ht,
                isArray: st,
                isNumber: J,
                isObject: et,
                merge: Y,
                objectEach: z,
                pick: H
            } = Z;

            function w(D) {
                return et(D) ? Y({
                    duration: 500,
                    defer: 0
                }, D) : {
                    duration: D ? 500 : 0,
                    defer: 0
                }
            }

            function I(D, T) {
                let v = V.timers.length;
                for (; v--;) V.timers[v].elem !== D || T && T !== V.timers[v].prop || (V.timers[v].stopped = !0)
            }
            return {
                animate: function(D, T, v) {
                    let M, u = "",
                        m, h, x;
                    et(v) || (x = arguments, v = {
                        duration: x[2],
                        easing: x[3],
                        complete: x[4]
                    }), J(v.duration) || (v.duration = 400), v.easing = typeof v.easing == "function" ? v.easing : Math[v.easing] || Math.easeInOutSine, v.curAnim = Y(T), z(T, function(X, L) {
                        I(D, L), h = new V(D, v, L), m = void 0, L === "d" && st(T.d) ? (h.paths = h.initPath(D, D.pathArray, T.d), h.toD = T.d, M = 0, m = 1) : D.attr ? M = D.attr(L) : (M = parseFloat(ht(D, L)) || 0, L !== "opacity" && (u = "px")), m || (m = X), typeof m == "string" && m.match("px") && (m = m.replace(/px/g, "")), h.run(M, m, u)
                    })
                },
                animObject: w,
                getDeferredAnimation: function(D, T, v) {
                    let M = w(T),
                        u = v ? [v] : D.series,
                        m = 0,
                        h = 0;
                    return u.forEach(x => {
                        let X = w(x.options.animation);
                        m = et(T) && ot(T.defer) ? M.defer : Math.max(m, X.duration + X.defer), h = Math.min(M.duration, X.duration)
                    }), D.renderer.forExport && (m = 0), {
                        defer: Math.max(0, m - h),
                        duration: Math.min(m, h)
                    }
                },
                setAnimation: function(D, T) {
                    T.renderer.globalAnimation = H(D, T.options.chart.animation, !0)
                },
                stop: I
            }
        }), ct(P, "Core/Renderer/HTML/AST.js", [P["Core/Globals.js"], P["Core/Utilities.js"]], function(V, Z) {
            let {
                SVG_NS: ot,
                win: ht
            } = V, {
                attr: st,
                createElement: J,
                css: et,
                error: Y,
                isFunction: z,
                isString: H,
                objectEach: w,
                splat: I
            } = Z, {
                trustedTypes: D
            } = ht, T = D && z(D.createPolicy) && D.createPolicy("highcharts", {
                createHTML: m => m
            }), v = T ? T.createHTML("") : "", M = function() {
                try {
                    return !!new DOMParser().parseFromString(v, "text/html")
                } catch {
                    return !1
                }
            }();
            class u {
                static filterUserAttributes(h) {
                    return w(h, (x, X) => {
                        let L = !0;
                        u.allowedAttributes.indexOf(X) === -1 && (L = !1), ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(X) !== -1 && (L = H(x) && u.allowedReferences.some(k => x.indexOf(k) === 0)), L || (Y(33, !1, void 0, {
                            "Invalid attribute in config": `${X}`
                        }), delete h[X]), H(x) && h[X] && (h[X] = x.replace(/</g, "&lt;"))
                    }), h
                }
                static parseStyle(h) {
                    return h.split(";").reduce((x, X) => {
                        let L = X.split(":").map(r => r.trim()),
                            k = L.shift();
                        return k && L.length && (x[k.replace(/-([a-z])/g, r => r[1].toUpperCase())] = L.join(":")), x
                    }, {})
                }
                static setElementHTML(h, x) {
                    h.innerHTML = u.emptyHTML, x && new u(x).addToDOM(h)
                }
                constructor(h) {
                    this.nodes = typeof h == "string" ? this.parseMarkup(h) : h
                }
                addToDOM(h) {
                    return function x(X, L) {
                        let k;
                        return I(X).forEach(function(r) {
                            let p, n = r.tagName,
                                t = r.textContent ? V.doc.createTextNode(r.textContent) : void 0,
                                e = u.bypassHTMLFiltering;
                            if (n)
                                if (n === "#text") p = t;
                                else if (u.allowedTags.indexOf(n) !== -1 || e) {
                                let o = n === "svg" ? ot : L.namespaceURI || ot,
                                    i = V.doc.createElementNS(o, n),
                                    l = r.attributes || {};
                                w(r, function(a, b) {
                                    b !== "tagName" && b !== "attributes" && b !== "children" && b !== "style" && b !== "textContent" && (l[b] = a)
                                }), st(i, e ? l : u.filterUserAttributes(l)), r.style && et(i, r.style), t && i.appendChild(t), x(r.children || [], i), p = i
                            } else Y(33, !1, void 0, {
                                "Invalid tagName in config": n
                            });
                            p && L.appendChild(p), k = p
                        }), k
                    }(this.nodes, h)
                }
                parseMarkup(h) {
                    let x, X = [];
                    if (h = h.trim().replace(/ style=(["'])/g, " data-style=$1"), M) x = new DOMParser().parseFromString(T ? T.createHTML(h) : h, "text/html");
                    else {
                        let k = J("div");
                        k.innerHTML = h, x = {
                            body: k
                        }
                    }
                    let L = (k, r) => {
                        let p = k.nodeName.toLowerCase(),
                            n = {
                                tagName: p
                            };
                        p === "#text" && (n.textContent = k.textContent || "");
                        let t = k.attributes;
                        if (t) {
                            let e = {};
                            [].forEach.call(t, o => {
                                o.name === "data-style" ? n.style = u.parseStyle(o.value) : e[o.name] = o.value
                            }), n.attributes = e
                        }
                        if (k.childNodes.length) {
                            let e = [];
                            [].forEach.call(k.childNodes, o => {
                                L(o, e)
                            }), e.length && (n.children = e)
                        }
                        r.push(n)
                    };
                    return [].forEach.call(x.body.childNodes, k => L(k, X)), X
                }
            }
            return u.allowedAttributes = ["alt", "aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-pressed", "aria-readonly", "aria-roledescription", "aria-selected", "class", "clip-path", "color", "colspan", "cx", "cy", "d", "dx", "dy", "disabled", "fill", "filterUnits", "flood-color", "flood-opacity", "height", "href", "id", "in", "markerHeight", "markerWidth", "offset", "opacity", "orient", "padding", "paddingLeft", "paddingRight", "patternUnits", "r", "refX", "refY", "role", "scope", "slope", "src", "startOffset", "stdDeviation", "stroke", "stroke-linecap", "stroke-width", "style", "tableValues", "result", "rowspan", "summary", "target", "tabindex", "text-align", "text-anchor", "textAnchor", "textLength", "title", "type", "valign", "width", "x", "x1", "x2", "xlink:href", "y", "y1", "y2", "zIndex"], u.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"], u.allowedTags = ["a", "abbr", "b", "br", "button", "caption", "circle", "clipPath", "code", "dd", "defs", "div", "dl", "dt", "em", "feComponentTransfer", "feDropShadow", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feOffset", "feMerge", "feMergeNode", "filter", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "linearGradient", "marker", "ol", "p", "path", "pattern", "pre", "rect", "small", "span", "stop", "strong", "style", "sub", "sup", "svg", "table", "text", "textPath", "thead", "title", "tbody", "tspan", "td", "th", "tr", "u", "ul", "#text"], u.emptyHTML = v, u.bypassHTMLFiltering = !1, u
        }), ct(P, "Core/Templating.js", [P["Core/Defaults.js"], P["Core/Utilities.js"]], function(V, Z) {
            let {
                defaultOptions: ot,
                defaultTime: ht
            } = V, {
                extend: st,
                getNestedProperty: J,
                isArray: et,
                isNumber: Y,
                isObject: z,
                pick: H,
                pInt: w
            } = Z, I = {
                add: (v, M) => v + M,
                divide: (v, M) => M !== 0 ? v / M : "",
                eq: (v, M) => v == M,
                each: function(v) {
                    let M = arguments[arguments.length - 1];
                    return !!et(v) && v.map((u, m) => D(M.body, st(z(u) ? u : {
                        "@this": u
                    }, {
                        "@index": m,
                        "@first": m === 0,
                        "@last": m === v.length - 1
                    }))).join("")
                },
                ge: (v, M) => v >= M,
                gt: (v, M) => v > M,
                if: v => !!v,
                le: (v, M) => v <= M,
                lt: (v, M) => v < M,
                multiply: (v, M) => v * M,
                ne: (v, M) => v != M,
                subtract: (v, M) => v - M,
                unless: v => !v
            };

            function D(v = "", M, u) {
                let m = /\{([a-zA-Z0-9\:\.\,;\-\/<>%_@"'= #\(\)]+)\}/g,
                    h = /\(([a-zA-Z0-9\:\.\,;\-\/<>%_@"'= ]+)\)/g,
                    x = [],
                    X = /f$/,
                    L = /\.([0-9])/,
                    k = ot.lang,
                    r = u && u.time || ht,
                    p = u && u.numberFormatter || T,
                    n = (l = "") => {
                        let a;
                        return l === "true" || l !== "false" && ((a = Number(l)).toString() === l ? a : J(l, M))
                    },
                    t, e, o = 0,
                    i;
                for (;
                    (t = m.exec(v)) !== null;) {
                    let l = h.exec(t[1]);
                    l && (t = l, i = !0), e && e.isBlock || (e = {
                        ctx: M,
                        expression: t[1],
                        find: t[0],
                        isBlock: t[1].charAt(0) === "#",
                        start: t.index,
                        startInner: t.index + t[0].length,
                        length: t[0].length
                    });
                    let a = t[1].split(" ")[0].replace("#", "");
                    I[a] && (e.isBlock && a === e.fn && o++, e.fn || (e.fn = a));
                    let b = t[1] === "else";
                    if (e.isBlock && e.fn && (t[1] === `/${e.fn}` || b))
                        if (o) !b && o--;
                        else {
                            let O = e.startInner,
                                _ = v.substr(O, t.index - O);
                            e.body === void 0 ? (e.body = _, e.startInner = t.index + t[0].length) : e.elseBody = _, e.find += _ + t[0], b || (x.push(e), e = void 0)
                        }
                    else e.isBlock || x.push(e);
                    if (l && !(e != null && e.isBlock)) break
                }
                return x.forEach(l => {
                    let a, b, {
                        body: O,
                        elseBody: _,
                        expression: y,
                        fn: j
                    } = l;
                    if (j) {
                        let G = [l],
                            W = y.split(" ");
                        for (b = I[j].length; b--;) G.unshift(n(W[b + 1]));
                        a = I[j].apply(M, G), l.isBlock && typeof a == "boolean" && (a = D(a ? O : _, M, u))
                    } else {
                        let G = y.split(":");
                        if (a = n(G.shift() || ""), G.length && typeof a == "number") {
                            let W = G.join(":");
                            if (X.test(W)) {
                                let it = parseInt((W.match(L) || ["", "-1"])[1], 10);
                                a !== null && (a = p(a, it, k.decimalPoint, W.indexOf(",") > -1 ? k.thousandsSep : ""))
                            } else a = r.dateFormat(W, a)
                        }
                    }
                    v = v.replace(l.find, H(a, ""))
                }), i ? D(v, M, u) : v
            }

            function T(v, M, u, m) {
                let h, x;
                v = +v || 0, M = +M;
                let X = ot.lang,
                    L = (v.toString().split(".")[1] || "").split("e")[0].length,
                    k = v.toString().split("e"),
                    r = M;
                M === -1 ? M = Math.min(L, 20) : Y(M) ? M && k[1] && k[1] < 0 && ((x = M + +k[1]) >= 0 ? (k[0] = (+k[0]).toExponential(x).split("e")[0], M = x) : (k[0] = k[0].split(".")[0] || 0, v = M < 20 ? (k[0] * Math.pow(10, k[1])).toFixed(M) : 0, k[1] = 0)) : M = 2;
                let p = (Math.abs(k[1] ? k[0] : v) + Math.pow(10, -Math.max(M, L) - 1)).toFixed(M),
                    n = String(w(p)),
                    t = n.length > 3 ? n.length % 3 : 0;
                return u = H(u, X.decimalPoint), m = H(m, X.thousandsSep), h = (v < 0 ? "-" : "") + (t ? n.substr(0, t) + m : ""), 0 > +k[1] && !r ? h = "0" : h += n.substr(t).replace(/(\d{3})(?=\d)/g, "$1" + m), M ? h += u + p.slice(-M) : +h == 0 && (h = "0"), k[1] && +h != 0 && (h += "e" + k[1]), h
            }
            return {
                dateFormat: function(v, M, u) {
                    return ht.dateFormat(v, M, u)
                },
                format: D,
                helpers: I,
                numberFormat: T
            }
        }), ct(P, "Core/Renderer/RendererRegistry.js", [P["Core/Globals.js"]], function(V) {
            var Z, ot;
            let ht;
            return (ot = Z || (Z = {})).rendererTypes = {}, ot.getRendererType = function(st = ht) {
                return ot.rendererTypes[st] || ot.rendererTypes[ht]
            }, ot.registerRendererType = function(st, J, et) {
                ot.rendererTypes[st] = J, (!ht || et) && (ht = st, V.Renderer = J)
            }, Z
        }), ct(P, "Core/Renderer/RendererUtilities.js", [P["Core/Utilities.js"]], function(V) {
            var Z;
            let {
                clamp: ot,
                pick: ht,
                pushUnique: st,
                stableSort: J
            } = V;
            return (Z || (Z = {})).distribute = function et(Y, z, H) {
                let w = Y,
                    I = w.reducedLen || z,
                    D = (n, t) => n.target - t.target,
                    T = [],
                    v = Y.length,
                    M = [],
                    u = T.push,
                    m, h, x, X = !0,
                    L, k, r = 0,
                    p;
                for (m = v; m--;) r += Y[m].size;
                if (r > I) {
                    for (J(Y, (n, t) => (t.rank || 0) - (n.rank || 0)), x = (p = Y[0].rank === Y[Y.length - 1].rank) ? v / 2 : -1, h = p ? x : v - 1; x && r > I;) L = Y[m = Math.floor(h)], st(M, m) && (r -= L.size), h += x, p && h >= Y.length && (x /= 2, h = x);
                    M.sort((n, t) => t - n).forEach(n => u.apply(T, Y.splice(n, 1)))
                }
                for (J(Y, D), Y = Y.map(n => ({
                        size: n.size,
                        targets: [n.target],
                        align: ht(n.align, .5)
                    })); X;) {
                    for (m = Y.length; m--;) L = Y[m], k = (Math.min.apply(0, L.targets) + Math.max.apply(0, L.targets)) / 2, L.pos = ot(k - L.size * L.align, 0, z - L.size);
                    for (m = Y.length, X = !1; m--;) m > 0 && Y[m - 1].pos + Y[m - 1].size > Y[m].pos && (Y[m - 1].size += Y[m].size, Y[m - 1].targets = Y[m - 1].targets.concat(Y[m].targets), Y[m - 1].align = .5, Y[m - 1].pos + Y[m - 1].size > z && (Y[m - 1].pos = z - Y[m - 1].size), Y.splice(m, 1), X = !0)
                }
                return u.apply(w, T), m = 0, Y.some(n => {
                    let t = 0;
                    return (n.targets || []).some(() => (w[m].pos = n.pos + t, H !== void 0 && Math.abs(w[m].pos - w[m].target) > H ? (w.slice(0, m + 1).forEach(e => delete e.pos), w.reducedLen = (w.reducedLen || z) - .1 * z, w.reducedLen > .1 * z && et(w, z, H), !0) : (t += w[m].size, m++, !1)))
                }), J(w, D), w
            }, Z
        }), ct(P, "Core/Renderer/SVG/SVGElement.js", [P["Core/Animation/AnimationUtilities.js"], P["Core/Color/Color.js"], P["Core/Globals.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht) {
            let {
                animate: st,
                animObject: J,
                stop: et
            } = V, {
                deg2rad: Y,
                doc: z,
                svg: H,
                SVG_NS: w,
                win: I
            } = ot, {
                addEvent: D,
                attr: T,
                createElement: v,
                crisp: M,
                css: u,
                defined: m,
                erase: h,
                extend: x,
                fireEvent: X,
                isArray: L,
                isFunction: k,
                isObject: r,
                isString: p,
                merge: n,
                objectEach: t,
                pick: e,
                pInt: o,
                pushUnique: i,
                replaceNested: l,
                syncTimeout: a,
                uniqueKey: b
            } = ht;
            class O {
                _defaultGetter(y) {
                    let j = e(this[y + "Value"], this[y], this.element ? this.element.getAttribute(y) : null, 0);
                    return /^[\-0-9\.]+$/.test(j) && (j = parseFloat(j)), j
                }
                _defaultSetter(y, j, G) {
                    G.setAttribute(j, y)
                }
                add(y) {
                    let j, G = this.renderer,
                        W = this.element;
                    return y && (this.parentGroup = y), this.textStr !== void 0 && this.element.nodeName === "text" && G.buildText(this), this.added = !0, (!y || y.handleZ || this.zIndex) && (j = this.zIndexSetter()), j || (y ? y.element : G.box).appendChild(W), this.onAdd && this.onAdd(), this
                }
                addClass(y, j) {
                    let G = j ? "" : this.attr("class") || "";
                    return (y = (y || "").split(/ /g).reduce(function(W, it) {
                        return G.indexOf(it) === -1 && W.push(it), W
                    }, G ? [G] : []).join(" ")) !== G && this.attr("class", y), this
                }
                afterSetters() {
                    this.doTransform && (this.updateTransform(), this.doTransform = !1)
                }
                align(y, j, G, W = !0) {
                    let it, d, c, S, B = {},
                        s = this.renderer,
                        g = s.alignedObjects,
                        f = !!y;
                    y ? (this.alignOptions = y, this.alignByTranslate = j, this.alignTo = G) : (y = this.alignOptions || {}, j = this.alignByTranslate, G = this.alignTo);
                    let C = !G || p(G) ? G || "renderer" : void 0;
                    C && (f && i(g, this), G = void 0);
                    let A = e(G, s[C], s),
                        N = y.align,
                        U = y.verticalAlign;
                    return it = (A.x || 0) + (y.x || 0), d = (A.y || 0) + (y.y || 0), N === "right" ? c = 1 : N === "center" && (c = 2), c && (it += ((A.width || 0) - (y.width || 0)) / c), B[j ? "translateX" : "x"] = Math.round(it), U === "bottom" ? S = 1 : U === "middle" && (S = 2), S && (d += ((A.height || 0) - (y.height || 0)) / S), B[j ? "translateY" : "y"] = Math.round(d), W && (this[this.placed ? "animate" : "attr"](B), this.placed = !0), this.alignAttr = B, this
                }
                alignSetter(y) {
                    let j = {
                        left: "start",
                        center: "middle",
                        right: "end"
                    };
                    j[y] && (this.alignValue = y, this.element.setAttribute("text-anchor", j[y]))
                }
                animate(y, j, G) {
                    let W = J(e(j, this.renderer.globalAnimation, !0)),
                        it = W.defer;
                    return z.hidden && (W.duration = 0), W.duration !== 0 ? (G && (W.complete = G), a(() => {
                        this.element && st(this, y, W)
                    }, it)) : (this.attr(y, void 0, G || W.complete), t(y, function(d, c) {
                        W.step && W.step.call(this, d, {
                            prop: c,
                            pos: 1,
                            elem: this
                        })
                    }, this)), this
                }
                applyTextOutline(y) {
                    let j = this.element;
                    y.indexOf("contrast") !== -1 && (y = y.replace(/contrast/g, this.renderer.getContrast(j.style.fill)));
                    let G = y.split(" "),
                        W = G[G.length - 1],
                        it = G[0];
                    if (it && it !== "none" && ot.svg) {
                        this.fakeTS = !0, it = it.replace(/(^[\d\.]+)(.*?)$/g, function(s, g, f) {
                            return 2 * Number(g) + f
                        }), this.removeTextOutline();
                        let d = z.createElementNS(w, "tspan");
                        T(d, {
                            class: "highcharts-text-outline",
                            fill: W,
                            stroke: W,
                            "stroke-width": it,
                            "stroke-linejoin": "round"
                        });
                        let c = j.querySelector("textPath") || j;
                        [].forEach.call(c.childNodes, s => {
                            let g = s.cloneNode(!0);
                            g.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach(f => g.removeAttribute(f)), d.appendChild(g)
                        });
                        let S = 0;
                        [].forEach.call(c.querySelectorAll("text tspan"), s => {
                            S += Number(s.getAttribute("dy"))
                        });
                        let B = z.createElementNS(w, "tspan");
                        B.textContent = "​", T(B, {
                            x: Number(j.getAttribute("x")),
                            dy: -S
                        }), d.appendChild(B), c.insertBefore(d, c.firstChild)
                    }
                }
                attr(y, j, G, W) {
                    let {
                        element: it
                    } = this, d = O.symbolCustomAttribs, c, S, B = this, s;
                    return typeof y == "string" && j !== void 0 && (c = y, (y = {})[c] = j), typeof y == "string" ? B = (this[y + "Getter"] || this._defaultGetter).call(this, y, it) : (t(y, function(g, f) {
                        s = !1, W || et(this, f), this.symbolName && d.indexOf(f) !== -1 && (S || (this.symbolAttr(y), S = !0), s = !0), this.rotation && (f === "x" || f === "y") && (this.doTransform = !0), s || (this[f + "Setter"] || this._defaultSetter).call(this, g, f, it)
                    }, this), this.afterSetters()), G && G.call(this), B
                }
                clip(y) {
                    if (y && !y.clipPath) {
                        let j = b() + "-",
                            G = this.renderer.createElement("clipPath").attr({
                                id: j
                            }).add(this.renderer.defs);
                        x(y, {
                            clipPath: G,
                            id: j,
                            count: 0
                        }), y.add(G)
                    }
                    return this.attr("clip-path", y ? `url(${this.renderer.url}#${y.id})` : "none")
                }
                crisp(y, j) {
                    j = Math.round(j || y.strokeWidth || 0);
                    let G = y.x || this.x || 0,
                        W = y.y || this.y || 0,
                        it = (y.width || this.width || 0) + G,
                        d = (y.height || this.height || 0) + W,
                        c = M(G, j),
                        S = M(W, j);
                    return x(y, {
                        x: c,
                        y: S,
                        width: M(it, j) - c,
                        height: M(d, j) - S
                    }), m(y.strokeWidth) && (y.strokeWidth = j), y
                }
                complexColor(y, j, G) {
                    let W = this.renderer,
                        it, d, c, S, B, s, g, f, C, A, N = [],
                        U;
                    X(this.renderer, "complexColor", {
                        args: arguments
                    }, function() {
                        if (y.radialGradient ? d = "radialGradient" : y.linearGradient && (d = "linearGradient"), d) {
                            if (c = y[d], B = W.gradients, s = y.stops, C = G.radialReference, L(c) && (y[d] = c = {
                                    x1: c[0],
                                    y1: c[1],
                                    x2: c[2],
                                    y2: c[3],
                                    gradientUnits: "userSpaceOnUse"
                                }), d === "radialGradient" && C && !m(c.gradientUnits) && (S = c, c = n(c, W.getRadialAttr(C, S), {
                                    gradientUnits: "userSpaceOnUse"
                                })), t(c, function(q, K) {
                                    K !== "id" && N.push(K, q)
                                }), t(s, function(q) {
                                    N.push(q)
                                }), B[N = N.join(",")]) A = B[N].attr("id");
                            else {
                                c.id = A = b();
                                let q = B[N] = W.createElement(d).attr(c).add(W.defs);
                                q.radAttr = S, q.stops = [], s.forEach(function(K) {
                                    K[1].indexOf("rgba") === 0 ? (g = (it = Z.parse(K[1])).get("rgb"), f = it.get("a")) : (g = K[1], f = 1);
                                    let at = W.createElement("stop").attr({
                                        offset: K[0],
                                        "stop-color": g,
                                        "stop-opacity": f
                                    }).add(q);
                                    q.stops.push(at)
                                })
                            }
                            U = "url(" + W.url + "#" + A + ")", G.setAttribute(j, U), G.gradient = N, y.toString = function() {
                                return U
                            }
                        }
                    })
                }
                css(y) {
                    let j = this.styles,
                        G = {},
                        W = this.element,
                        it, d = !j;
                    if (j && t(y, function(c, S) {
                            j && j[S] !== c && (G[S] = c, d = !0)
                        }), d) {
                        j && (y = x(j, G)), y.width === null || y.width === "auto" ? delete this.textWidth : W.nodeName.toLowerCase() === "text" && y.width && (it = this.textWidth = o(y.width)), x(this.styles, y), it && !H && this.renderer.forExport && delete y.width;
                        let c = n(y);
                        W.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "width"].forEach(S => c && delete c[S]), c.color && (c.fill = c.color)), u(W, c)
                    }
                    return this.added && (this.element.nodeName === "text" && this.renderer.buildText(this), y.textOutline && this.applyTextOutline(y.textOutline)), this
                }
                dashstyleSetter(y) {
                    let j, G = this["stroke-width"];
                    if (G === "inherit" && (G = 1), y = y && y.toLowerCase()) {
                        let W = y.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                        for (j = W.length; j--;) W[j] = "" + o(W[j]) * e(G, NaN);
                        y = W.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", y)
                    }
                }
                destroy() {
                    var S;
                    let y = this,
                        j = y.element || {},
                        G = y.renderer,
                        W = j.ownerSVGElement,
                        it = j.nodeName === "SPAN" && y.parentGroup || void 0,
                        d, c;
                    if (j.onclick = j.onmouseout = j.onmouseover = j.onmousemove = j.point = null, et(y), y.clipPath && W) {
                        let B = y.clipPath;
                        [].forEach.call(W.querySelectorAll("[clip-path],[CLIP-PATH]"), function(s) {
                            s.getAttribute("clip-path").indexOf(B.element.id) > -1 && s.removeAttribute("clip-path")
                        }), y.clipPath = B.destroy()
                    }
                    if (y.connector = (S = y.connector) == null ? void 0 : S.destroy(), y.stops) {
                        for (c = 0; c < y.stops.length; c++) y.stops[c].destroy();
                        y.stops.length = 0, y.stops = void 0
                    }
                    for (y.safeRemoveChild(j); it && it.div && it.div.childNodes.length === 0;) d = it.parentGroup, y.safeRemoveChild(it.div), delete it.div, it = d;
                    y.alignOptions && h(G.alignedObjects, y), t(y, function(B, s) {
                        y[s] && y[s].parentGroup === y && y[s].destroy && y[s].destroy(), delete y[s]
                    })
                }
                dSetter(y, j, G) {
                    L(y) && (typeof y[0] == "string" && (y = this.renderer.pathToSegments(y)), this.pathArray = y, y = y.reduce((W, it, d) => it && it.join ? (d ? W + " " : "") + it.join(" ") : (it || "").toString(), "")), /(NaN| {2}|^$)/.test(y) && (y = "M 0 0"), this[j] !== y && (G.setAttribute(j, y), this[j] = y)
                }
                fillSetter(y, j, G) {
                    typeof y == "string" ? G.setAttribute(j, y) : y && this.complexColor(y, j, G)
                }
                hrefSetter(y, j, G) {
                    G.setAttributeNS("http://www.w3.org/1999/xlink", j, y)
                }
                getBBox(y, j) {
                    let G, W, it, d, {
                            alignValue: c,
                            element: S,
                            renderer: B,
                            styles: s,
                            textStr: g
                        } = this,
                        {
                            cache: f,
                            cacheKeys: C
                        } = B,
                        A = S.namespaceURI === this.SVG_NS,
                        N = e(j, this.rotation, 0),
                        U = B.styledMode ? S && O.prototype.getStyle.call(S, "font-size") : s.fontSize;
                    if (m(g) && ((d = g.toString()).indexOf("<") === -1 && (d = d.replace(/[0-9]/g, "0")), d += ["", B.rootFontSize, U, N, this.textWidth, c, s.textOverflow, s.fontWeight].join(",")), d && !y && (G = f[d]), !G) {
                        if (A || B.forExport) {
                            try {
                                it = this.fakeTS && function(q) {
                                    let K = S.querySelector(".highcharts-text-outline");
                                    K && u(K, {
                                        display: q
                                    })
                                }, k(it) && it("none"), G = S.getBBox ? x({}, S.getBBox()) : {
                                    width: S.offsetWidth,
                                    height: S.offsetHeight,
                                    x: 0,
                                    y: 0
                                }, k(it) && it("")
                            } catch {}(!G || G.width < 0) && (G = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            })
                        } else G = this.htmlGetBBox();
                        W = G.height, A && (G.height = W = {
                            "11px,17": 14,
                            "13px,20": 16
                        }[`${U||""},${Math.round(W)}`] || W), N && (G = this.getRotatedBox(G, N))
                    }
                    if (d && (g === "" || G.height > 0)) {
                        for (; C.length > 250;) delete f[C.shift()];
                        f[d] || C.push(d), f[d] = G
                    }
                    return G
                }
                getRotatedBox(y, j) {
                    let {
                        x: G,
                        y: W,
                        width: it,
                        height: d
                    } = y, {
                        alignValue: c,
                        translateY: S,
                        rotationOriginX: B = 0,
                        rotationOriginY: s = 0
                    } = this, g = {
                        right: 1,
                        center: .5
                    }[c || 0] || 0, f = Number(this.element.getAttribute("y") || 0) - (S ? 0 : W), C = j * Y, A = (j - 90) * Y, N = Math.cos(C), U = Math.sin(C), q = it * N, K = it * U, at = Math.cos(A), lt = Math.sin(A), [
                        [R, E],
                        [F, $]
                    ] = [B, s].map(kt => [kt - kt * N, kt * U]), Q = G + g * (it - q) + R + $ + f * at, rt = Q + q, tt = rt - d * at, nt = tt - q, dt = W + f - g * K - E + F + f * lt, pt = dt + K, ut = pt - d * lt, ft = ut - K, mt = Math.min(Q, rt, tt, nt), bt = Math.min(dt, pt, ut, ft), yt = Math.max(Q, rt, tt, nt) - mt, xt = Math.max(dt, pt, ut, ft) - bt;
                    return {
                        x: mt,
                        y: bt,
                        width: yt,
                        height: xt
                    }
                }
                getStyle(y) {
                    return I.getComputedStyle(this.element || this, "").getPropertyValue(y)
                }
                hasClass(y) {
                    return ("" + this.attr("class")).split(" ").indexOf(y) !== -1
                }
                hide() {
                    return this.attr({
                        visibility: "hidden"
                    })
                }
                htmlGetBBox() {
                    return {
                        height: 0,
                        width: 0,
                        x: 0,
                        y: 0
                    }
                }
                constructor(y, j) {
                    this.onEvents = {}, this.opacity = 1, this.SVG_NS = w, this.element = j === "span" || j === "body" ? v(j) : z.createElementNS(this.SVG_NS, j), this.renderer = y, this.styles = {}, X(this, "afterInit")
                }
                on(y, j) {
                    let {
                        onEvents: G
                    } = this;
                    return G[y] && G[y](), G[y] = D(this.element, y, j), this
                }
                opacitySetter(y, j, G) {
                    let W = Number(Number(y).toFixed(3));
                    this.opacity = W, G.setAttribute(j, W)
                }
                reAlign() {
                    var y;
                    (y = this.alignOptions) != null && y.width && this.alignOptions.align !== "left" && (this.alignOptions.width = this.getBBox().width, this.placed = !1, this.align())
                }
                removeClass(y) {
                    return this.attr("class", ("" + this.attr("class")).replace(p(y) ? RegExp(`(^| )${y}( |$)`) : y, " ").replace(/ +/g, " ").trim())
                }
                removeTextOutline() {
                    let y = this.element.querySelector("tspan.highcharts-text-outline");
                    y && this.safeRemoveChild(y)
                }
                safeRemoveChild(y) {
                    let j = y.parentNode;
                    j && j.removeChild(y)
                }
                setRadialReference(y) {
                    let j = this.element.gradient && this.renderer.gradients[this.element.gradient];
                    return this.element.radialReference = y, j && j.radAttr && j.animate(this.renderer.getRadialAttr(y, j.radAttr)), this
                }
                setTextPath(y, j) {
                    j = n(!0, {
                        enabled: !0,
                        attributes: {
                            dy: -5,
                            startOffset: "50%",
                            textAnchor: "middle"
                        }
                    }, j);
                    let G = this.renderer.url,
                        W = this.text || this,
                        it = W.textPath,
                        {
                            attributes: d,
                            enabled: c
                        } = j;
                    if (y = y || it && it.path, it && it.undo(), y && c) {
                        let S = D(W, "afterModifyTree", B => {
                            if (y && c) {
                                let s = y.attr("id");
                                s || y.attr("id", s = b());
                                let g = {
                                    x: 0,
                                    y: 0
                                };
                                m(d.dx) && (g.dx = d.dx, delete d.dx), m(d.dy) && (g.dy = d.dy, delete d.dy), W.attr(g), this.attr({
                                    transform: ""
                                }), this.box && (this.box = this.box.destroy());
                                let f = B.nodes.slice(0);
                                B.nodes.length = 0, B.nodes[0] = {
                                    tagName: "textPath",
                                    attributes: x(d, {
                                        "text-anchor": d.textAnchor,
                                        href: `${G}#${s}`
                                    }),
                                    children: f
                                }
                            }
                        });
                        W.textPath = {
                            path: y,
                            undo: S
                        }
                    } else W.attr({
                        dx: 0,
                        dy: 0
                    }), delete W.textPath;
                    return this.added && (W.textCache = "", this.renderer.buildText(W)), this
                }
                shadow(y) {
                    var it;
                    let {
                        renderer: j
                    } = this, G = n(((it = this.parentGroup) == null ? void 0 : it.rotation) === 90 ? {
                        offsetX: -1,
                        offsetY: -1
                    } : {}, r(y) ? y : {}), W = j.shadowDefinition(G);
                    return this.attr({
                        filter: y ? `url(${j.url}#${W})` : "none"
                    })
                }
                show(y = !0) {
                    return this.attr({
                        visibility: y ? "inherit" : "visible"
                    })
                }
                "stroke-widthSetter" (y, j, G) {
                    this[j] = y, G.setAttribute(j, y)
                }
                strokeWidth() {
                    if (!this.renderer.styledMode) return this["stroke-width"] || 0;
                    let y = this.getStyle("stroke-width"),
                        j = 0,
                        G;
                    return /px$/.test(y) ? j = o(y) : y !== "" && (T(G = z.createElementNS(w, "rect"), {
                        width: y,
                        "stroke-width": 0
                    }), this.element.parentNode.appendChild(G), j = G.getBBox().width, G.parentNode.removeChild(G)), j
                }
                symbolAttr(y) {
                    let j = this;
                    O.symbolCustomAttribs.forEach(function(G) {
                        j[G] = e(y[G], j[G])
                    }), j.attr({
                        d: j.renderer.symbols[j.symbolName](j.x, j.y, j.width, j.height, j)
                    })
                }
                textSetter(y) {
                    y !== this.textStr && (delete this.textPxLength, this.textStr = y, this.added && this.renderer.buildText(this), this.reAlign())
                }
                titleSetter(y) {
                    let j = this.element,
                        G = j.getElementsByTagName("title")[0] || z.createElementNS(this.SVG_NS, "title");
                    j.insertBefore ? j.insertBefore(G, j.firstChild) : j.appendChild(G), G.textContent = l(e(y, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                }
                toFront() {
                    let y = this.element;
                    return y.parentNode.appendChild(y), this
                }
                translate(y, j) {
                    return this.attr({
                        translateX: y,
                        translateY: j
                    })
                }
                updateTransform(y = "transform") {
                    var f;
                    let {
                        element: j,
                        matrix: G,
                        rotation: W = 0,
                        rotationOriginX: it,
                        rotationOriginY: d,
                        scaleX: c,
                        scaleY: S,
                        translateX: B = 0,
                        translateY: s = 0
                    } = this, g = ["translate(" + B + "," + s + ")"];
                    m(G) && g.push("matrix(" + G.join(",") + ")"), W && (g.push("rotate(" + W + " " + e(it, j.getAttribute("x"), 0) + " " + e(d, j.getAttribute("y") || 0) + ")"), ((f = this.text) == null ? void 0 : f.element.tagName) === "SPAN" && this.text.attr({
                        rotation: W,
                        rotationOriginX: (it || 0) - this.padding,
                        rotationOriginY: (d || 0) - this.padding
                    })), (m(c) || m(S)) && g.push("scale(" + e(c, 1) + " " + e(S, 1) + ")"), g.length && !(this.text || this).textPath && j.setAttribute(y, g.join(" "))
                }
                visibilitySetter(y, j, G) {
                    y === "inherit" ? G.removeAttribute(j) : this[j] !== y && G.setAttribute(j, y), this[j] = y
                }
                xGetter(y) {
                    return this.element.nodeName === "circle" && (y === "x" ? y = "cx" : y === "y" && (y = "cy")), this._defaultGetter(y)
                }
                zIndexSetter(y, j) {
                    let G = this.renderer,
                        W = this.parentGroup,
                        it = (W || G).element || G.box,
                        d = this.element,
                        c = it === G.box,
                        S, B, s, g = !1,
                        f, C = this.added,
                        A;
                    if (m(y) ? (d.setAttribute("data-z-index", y), y = +y, this[j] === y && (C = !1)) : m(this[j]) && d.removeAttribute("data-z-index"), this[j] = y, C) {
                        for ((y = this.zIndex) && W && (W.handleZ = !0), A = (S = it.childNodes).length - 1; A >= 0 && !g; A--) f = !m(s = (B = S[A]).getAttribute("data-z-index")), B !== d && (y < 0 && f && !c && !A ? (it.insertBefore(d, S[A]), g = !0) : (o(s) <= y || f && (!m(y) || y >= 0)) && (it.insertBefore(d, S[A + 1]), g = !0));
                        g || (it.insertBefore(d, S[c ? 3 : 0]), g = !0)
                    }
                    return g
                }
            }
            return O.symbolCustomAttribs = ["anchorX", "anchorY", "clockwise", "end", "height", "innerR", "r", "start", "width", "x", "y"], O.prototype.strokeSetter = O.prototype.fillSetter, O.prototype.yGetter = O.prototype.xGetter, O.prototype.matrixSetter = O.prototype.rotationOriginXSetter = O.prototype.rotationOriginYSetter = O.prototype.rotationSetter = O.prototype.scaleXSetter = O.prototype.scaleYSetter = O.prototype.translateXSetter = O.prototype.translateYSetter = O.prototype.verticalAlignSetter = function(_, y) {
                this[y] = _, this.doTransform = !0
            }, O
        }), ct(P, "Core/Renderer/SVG/SVGLabel.js", [P["Core/Renderer/SVG/SVGElement.js"], P["Core/Utilities.js"]], function(V, Z) {
            let {
                defined: ot,
                extend: ht,
                isNumber: st,
                merge: J,
                pick: et,
                removeEvent: Y
            } = Z;
            class z extends V {
                constructor(w, I, D, T, v, M, u, m, h, x) {
                    let X;
                    super(w, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.textStr = I, this.x = D, this.y = T, this.anchorX = M, this.anchorY = u, this.baseline = h, this.className = x, this.addClass(x === "button" ? "highcharts-no-tooltip" : "highcharts-label"), x && this.addClass("highcharts-" + x), this.text = w.text(void 0, 0, 0, m).attr({
                        zIndex: 1
                    }), typeof v == "string" && ((X = /^url\((.*?)\)$/.test(v)) || this.renderer.symbols[v]) && (this.symbolKey = v), this.bBox = z.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = w.styledMode || X, this.deferredAttr = {}, this.alignFactor = 0
                }
                alignSetter(w) {
                    let I = {
                        left: 0,
                        center: .5,
                        right: 1
                    }[w];
                    I !== this.alignFactor && (this.alignFactor = I, this.bBox && st(this.xSetting) && this.attr({
                        x: this.xSetting
                    }))
                }
                anchorXSetter(w, I) {
                    this.anchorX = w, this.boxAttr(I, Math.round(w) - this.getCrispAdjust() - this.xSetting)
                }
                anchorYSetter(w, I) {
                    this.anchorY = w, this.boxAttr(I, w - this.ySetting)
                }
                boxAttr(w, I) {
                    this.box ? this.box.attr(w, I) : this.deferredAttr[w] = I
                }
                css(w) {
                    if (w) {
                        let I = {};
                        w = J(w), z.textProps.forEach(D => {
                            w[D] !== void 0 && (I[D] = w[D], delete w[D])
                        }), this.text.css(I), "fontSize" in I || "fontWeight" in I ? this.updateTextPadding() : ("width" in I || "textOverflow" in I) && this.updateBoxSize()
                    }
                    return V.prototype.css.call(this, w)
                }
                destroy() {
                    Y(this.element, "mouseenter"), Y(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), V.prototype.destroy.call(this)
                }
                fillSetter(w, I) {
                    w && (this.needsBox = !0), this.fill = w, this.boxAttr(I, w)
                }
                getBBox(w, I) {
                    this.textStr && this.bBox.width === 0 && this.bBox.height === 0 && this.updateBoxSize();
                    let {
                        padding: D,
                        height: T = 0,
                        translateX: v = 0,
                        translateY: M = 0,
                        width: u = 0
                    } = this, m = et(this.paddingLeft, D), h = I ? ? (this.rotation || 0), x = {
                        width: u,
                        height: T,
                        x: v + this.bBox.x - m,
                        y: M + this.bBox.y - D + this.baselineOffset
                    };
                    return h && (x = this.getRotatedBox(x, h)), x
                }
                getCrispAdjust() {
                    return (this.renderer.styledMode && this.box ? this.box.strokeWidth() : this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2
                }
                heightSetter(w) {
                    this.heightSetting = w
                }
                onAdd() {
                    this.text.add(this), this.attr({
                        text: et(this.textStr, ""),
                        x: this.x || 0,
                        y: this.y || 0
                    }), this.box && ot(this.anchorX) && this.attr({
                        anchorX: this.anchorX,
                        anchorY: this.anchorY
                    })
                }
                paddingSetter(w, I) {
                    st(w) ? w !== this[I] && (this[I] = w, this.updateTextPadding()) : this[I] = void 0
                }
                rSetter(w, I) {
                    this.boxAttr(I, w)
                }
                strokeSetter(w, I) {
                    this.stroke = w, this.boxAttr(I, w)
                }
                "stroke-widthSetter" (w, I) {
                    w && (this.needsBox = !0), this["stroke-width"] = w, this.boxAttr(I, w)
                }
                "text-alignSetter" (w) {
                    this.textAlign = w
                }
                textSetter(w) {
                    w !== void 0 && this.text.attr({
                        text: w
                    }), this.updateTextPadding(), this.reAlign()
                }
                updateBoxSize() {
                    let w, I = this.text,
                        D = {},
                        T = this.padding,
                        v = this.bBox = (!st(this.widthSetting) || !st(this.heightSetting) || this.textAlign) && ot(I.textStr) ? I.getBBox(void 0, 0) : z.emptyBBox;
                    this.width = this.getPaddedWidth(), this.height = (this.heightSetting || v.height || 0) + 2 * T;
                    let M = this.renderer.fontMetrics(I);
                    if (this.baselineOffset = T + Math.min((this.text.firstLineMetrics || M).b, v.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - M.h) / 2), this.needsBox && !I.textPath) {
                        if (!this.box) {
                            let u = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
                            u.addClass((this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), u.add(this)
                        }
                        w = this.getCrispAdjust(), D.x = w, D.y = (this.baseline ? -this.baselineOffset : 0) + w, D.width = Math.round(this.width), D.height = Math.round(this.height), this.box.attr(ht(D, this.deferredAttr)), this.deferredAttr = {}
                    }
                }
                updateTextPadding() {
                    let w = this.text;
                    if (!w.textPath) {
                        this.updateBoxSize();
                        let I = this.baseline ? 0 : this.baselineOffset,
                            D = et(this.paddingLeft, this.padding);
                        ot(this.widthSetting) && this.bBox && (this.textAlign === "center" || this.textAlign === "right") && (D += {
                            center: .5,
                            right: 1
                        }[this.textAlign] * (this.widthSetting - this.bBox.width)), (D !== w.x || I !== w.y) && (w.attr("x", D), w.hasBoxWidthChanged && (this.bBox = w.getBBox(!0)), I !== void 0 && w.attr("y", I)), w.x = D, w.y = I
                    }
                }
                widthSetter(w) {
                    this.widthSetting = st(w) ? w : void 0
                }
                getPaddedWidth() {
                    let w = this.padding,
                        I = et(this.paddingLeft, w),
                        D = et(this.paddingRight, w);
                    return (this.widthSetting || this.bBox.width || 0) + I + D
                }
                xSetter(w) {
                    this.x = w, this.alignFactor && (w -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.xSetting = Math.round(w), this.attr("translateX", this.xSetting)
                }
                ySetter(w) {
                    this.ySetting = this.y = Math.round(w), this.attr("translateY", this.ySetting)
                }
            }
            return z.emptyBBox = {
                width: 0,
                height: 0,
                x: 0,
                y: 0
            }, z.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"], z
        }), ct(P, "Core/Renderer/SVG/Symbols.js", [P["Core/Utilities.js"]], function(V) {
            let {
                defined: Z,
                isNumber: ot,
                pick: ht
            } = V;

            function st(Y, z, H, w, I) {
                let D = [];
                if (I) {
                    let T = I.start || 0,
                        v = ht(I.r, H),
                        M = ht(I.r, w || H),
                        u = 2e-4 / Math.max(v, 1),
                        m = Math.abs((I.end || 0) - T - 2 * Math.PI) < u,
                        h = (I.end || 0) - u,
                        x = I.innerR,
                        X = ht(I.open, m),
                        L = Math.cos(T),
                        k = Math.sin(T),
                        r = Math.cos(h),
                        p = Math.sin(h),
                        n = ht(I.longArc, h - T - Math.PI < u ? 0 : 1),
                        t = ["A", v, M, 0, n, ht(I.clockwise, 1), Y + v * r, z + M * p];
                    t.params = {
                        start: T,
                        end: h,
                        cx: Y,
                        cy: z
                    }, D.push(["M", Y + v * L, z + M * k], t), Z(x) && ((t = ["A", x, x, 0, n, Z(I.clockwise) ? 1 - I.clockwise : 0, Y + x * L, z + x * k]).params = {
                        start: h,
                        end: T,
                        cx: Y,
                        cy: z
                    }, D.push(X ? ["M", Y + x * r, z + x * p] : ["L", Y + x * r, z + x * p], t)), X || D.push(["Z"])
                }
                return D
            }

            function J(Y, z, H, w, I) {
                return I && I.r ? et(Y, z, H, w, I) : [
                    ["M", Y, z],
                    ["L", Y + H, z],
                    ["L", Y + H, z + w],
                    ["L", Y, z + w],
                    ["Z"]
                ]
            }

            function et(Y, z, H, w, I) {
                let D = (I == null ? void 0 : I.r) || 0;
                return [
                    ["M", Y + D, z],
                    ["L", Y + H - D, z],
                    ["A", D, D, 0, 0, 1, Y + H, z + D],
                    ["L", Y + H, z + w - D],
                    ["A", D, D, 0, 0, 1, Y + H - D, z + w],
                    ["L", Y + D, z + w],
                    ["A", D, D, 0, 0, 1, Y, z + w - D],
                    ["L", Y, z + D],
                    ["A", D, D, 0, 0, 1, Y + D, z],
                    ["Z"]
                ]
            }
            return {
                arc: st,
                callout: function(Y, z, H, w, I) {
                    let D = Math.min(I && I.r || 0, H, w),
                        T = D + 6,
                        v = I && I.anchorX,
                        M = I && I.anchorY || 0,
                        u = et(Y, z, H, w, {
                            r: D
                        });
                    if (!ot(v) || v < H && v > 0 && M < w && M > 0) return u;
                    if (Y + v > H - T)
                        if (M > z + T && M < z + w - T) u.splice(3, 1, ["L", Y + H, M - 6], ["L", Y + H + 6, M], ["L", Y + H, M + 6], ["L", Y + H, z + w - D]);
                        else if (v < H) {
                        let m = M < z + T,
                            h = m ? z : z + w;
                        u.splice(m ? 2 : 5, 0, ["L", v, M], ["L", Y + H - D, h])
                    } else u.splice(3, 1, ["L", Y + H, w / 2], ["L", v, M], ["L", Y + H, w / 2], ["L", Y + H, z + w - D]);
                    else if (Y + v < T)
                        if (M > z + T && M < z + w - T) u.splice(7, 1, ["L", Y, M + 6], ["L", Y - 6, M], ["L", Y, M - 6], ["L", Y, z + D]);
                        else if (v > 0) {
                        let m = M < z + T,
                            h = m ? z : z + w;
                        u.splice(m ? 1 : 6, 0, ["L", v, M], ["L", Y + D, h])
                    } else u.splice(7, 1, ["L", Y, w / 2], ["L", v, M], ["L", Y, w / 2], ["L", Y, z + D]);
                    else M > w && v < H - T ? u.splice(5, 1, ["L", v + 6, z + w], ["L", v, z + w + 6], ["L", v - 6, z + w], ["L", Y + D, z + w]) : M < 0 && v > T && u.splice(1, 1, ["L", v - 6, z], ["L", v, z - 6], ["L", v + 6, z], ["L", H - D, z]);
                    return u
                },
                circle: function(Y, z, H, w) {
                    return st(Y + H / 2, z + w / 2, H / 2, w / 2, {
                        start: .5 * Math.PI,
                        end: 2.5 * Math.PI,
                        open: !1
                    })
                },
                diamond: function(Y, z, H, w) {
                    return [
                        ["M", Y + H / 2, z],
                        ["L", Y + H, z + w / 2],
                        ["L", Y + H / 2, z + w],
                        ["L", Y, z + w / 2],
                        ["Z"]
                    ]
                },
                rect: J,
                roundedRect: et,
                square: J,
                triangle: function(Y, z, H, w) {
                    return [
                        ["M", Y + H / 2, z],
                        ["L", Y + H, z + w],
                        ["L", Y, z + w],
                        ["Z"]
                    ]
                },
                "triangle-down": function(Y, z, H, w) {
                    return [
                        ["M", Y, z],
                        ["L", Y + H, z],
                        ["L", Y + H / 2, z + w],
                        ["Z"]
                    ]
                }
            }
        }), ct(P, "Core/Renderer/SVG/TextBuilder.js", [P["Core/Renderer/HTML/AST.js"], P["Core/Globals.js"], P["Core/Utilities.js"]], function(V, Z, ot) {
            let {
                doc: ht,
                SVG_NS: st,
                win: J
            } = Z, {
                attr: et,
                extend: Y,
                fireEvent: z,
                isString: H,
                objectEach: w,
                pick: I
            } = ot;
            return class {
                constructor(D) {
                    let T = D.styles;
                    this.renderer = D.renderer, this.svgElement = D, this.width = D.textWidth, this.textLineHeight = T && T.lineHeight, this.textOutline = T && T.textOutline, this.ellipsis = !!(T && T.textOverflow === "ellipsis"), this.noWrap = !!(T && T.whiteSpace === "nowrap")
                }
                buildSVG() {
                    let D = this.svgElement,
                        T = D.element,
                        v = D.renderer,
                        M = I(D.textStr, "").toString(),
                        u = M.indexOf("<") !== -1,
                        m = T.childNodes,
                        h = !D.added && v.box,
                        x = [M, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, D.getStyle("font-size"), this.width].join(",");
                    if (x !== D.textCache) {
                        D.textCache = x, delete D.actualWidth;
                        for (let X = m.length; X--;) T.removeChild(m[X]);
                        if (u || this.ellipsis || this.width || D.textPath || M.indexOf(" ") !== -1 && (!this.noWrap || /<br.*?>/g.test(M))) {
                            if (M !== "") {
                                h && h.appendChild(T);
                                let X = new V(M);
                                this.modifyTree(X.nodes), X.addToDOM(T), this.modifyDOM(), this.ellipsis && (T.textContent || "").indexOf("…") !== -1 && D.attr("title", this.unescapeEntities(D.textStr || "", ["&lt;", "&gt;"])), h && h.removeChild(T)
                            }
                        } else T.appendChild(ht.createTextNode(this.unescapeEntities(M)));
                        H(this.textOutline) && D.applyTextOutline && D.applyTextOutline(this.textOutline)
                    }
                }
                modifyDOM() {
                    let D, T = this.svgElement,
                        v = et(T.element, "x");
                    for (T.firstLineMetrics = void 0;
                        (D = T.element.firstChild) && /^[\s\u200B]*$/.test(D.textContent || " ");) T.element.removeChild(D);
                    [].forEach.call(T.element.querySelectorAll("tspan.highcharts-br"), (h, x) => {
                        h.nextSibling && h.previousSibling && (x === 0 && h.previousSibling.nodeType === 1 && (T.firstLineMetrics = T.renderer.fontMetrics(h.previousSibling)), et(h, {
                            dy: this.getLineHeight(h.nextSibling),
                            x: v
                        }))
                    });
                    let M = this.width || 0;
                    if (!M) return;
                    let u = (h, x) => {
                            let X = h.textContent || "",
                                L = X.replace(/([^\^])-/g, "$1- ").split(" "),
                                k = !this.noWrap && (L.length > 1 || T.element.childNodes.length > 1),
                                r = this.getLineHeight(x),
                                p = 0,
                                n = T.actualWidth;
                            if (this.ellipsis) X && this.truncate(h, X, void 0, 0, Math.max(0, M - .8 * r), (t, e) => t.substring(0, e) + "…");
                            else if (k) {
                                let t = [],
                                    e = [];
                                for (; x.firstChild && x.firstChild !== h;) e.push(x.firstChild), x.removeChild(x.firstChild);
                                for (; L.length;) L.length && !this.noWrap && p > 0 && (t.push(h.textContent || ""), h.textContent = L.join(" ").replace(/- /g, "-")), this.truncate(h, void 0, L, p === 0 && n || 0, M, (o, i) => L.slice(0, i).join(" ").replace(/- /g, "-")), n = T.actualWidth, p++;
                                e.forEach(o => {
                                    x.insertBefore(o, h)
                                }), t.forEach(o => {
                                    x.insertBefore(ht.createTextNode(o), h);
                                    let i = ht.createElementNS(st, "tspan");
                                    i.textContent = "​", et(i, {
                                        dy: r,
                                        x: v
                                    }), x.insertBefore(i, h)
                                })
                            }
                        },
                        m = h => {
                            [].slice.call(h.childNodes).forEach(x => {
                                x.nodeType === J.Node.TEXT_NODE ? u(x, h) : (x.className.baseVal.indexOf("highcharts-br") !== -1 && (T.actualWidth = 0), m(x))
                            })
                        };
                    m(T.element)
                }
                getLineHeight(D) {
                    let T = D.nodeType === J.Node.TEXT_NODE ? D.parentElement : D;
                    return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(T || this.svgElement.element).h
                }
                modifyTree(D) {
                    let T = (v, M) => {
                        let {
                            attributes: u = {},
                            children: m,
                            style: h = {},
                            tagName: x
                        } = v, X = this.renderer.styledMode;
                        if (x === "b" || x === "strong" ? X ? u.class = "highcharts-strong" : h.fontWeight = "bold" : (x === "i" || x === "em") && (X ? u.class = "highcharts-emphasized" : h.fontStyle = "italic"), h && h.color && (h.fill = h.color), x === "br") {
                            u.class = "highcharts-br", v.textContent = "​";
                            let L = D[M + 1];
                            L && L.textContent && (L.textContent = L.textContent.replace(/^ +/gm, ""))
                        } else x === "a" && m && m.some(L => L.tagName === "#text") && (v.children = [{
                            children: m,
                            tagName: "tspan"
                        }]);
                        x !== "#text" && x !== "a" && (v.tagName = "tspan"), Y(v, {
                            attributes: u,
                            style: h
                        }), m && m.filter(L => L.tagName !== "#text").forEach(T)
                    };
                    D.forEach(T), z(this.svgElement, "afterModifyTree", {
                        nodes: D
                    })
                }
                truncate(D, T, v, M, u, m) {
                    let h, x, X = this.svgElement,
                        {
                            rotation: L
                        } = X,
                        k = [],
                        r = v ? 1 : 0,
                        p = (T || v || "").length,
                        n = p,
                        t = function(e, o) {
                            let i = o || e,
                                l = D.parentNode;
                            if (l && k[i] === void 0 && l.getSubStringLength) try {
                                k[i] = M + l.getSubStringLength(0, v ? i + 1 : i)
                            } catch {}
                            return k[i]
                        };
                    if (X.rotation = 0, M + (x = t(D.textContent.length)) > u) {
                        for (; r <= p;) n = Math.ceil((r + p) / 2), v && (h = m(v, n)), x = t(n, h && h.length - 1), r === p ? r = p + 1 : x > u ? p = n - 1 : r = n;
                        p === 0 ? D.textContent = "" : T && p === T.length - 1 || (D.textContent = h || m(T || v, n))
                    }
                    v && v.splice(0, n), X.actualWidth = x, X.rotation = L
                }
                unescapeEntities(D, T) {
                    return w(this.renderer.escapes, function(v, M) {
                        T && T.indexOf(v) !== -1 || (D = D.toString().replace(RegExp(v, "g"), M))
                    }), D
                }
            }
        }), ct(P, "Core/Renderer/SVG/SVGRenderer.js", [P["Core/Renderer/HTML/AST.js"], P["Core/Defaults.js"], P["Core/Color/Color.js"], P["Core/Globals.js"], P["Core/Renderer/RendererRegistry.js"], P["Core/Renderer/SVG/SVGElement.js"], P["Core/Renderer/SVG/SVGLabel.js"], P["Core/Renderer/SVG/Symbols.js"], P["Core/Renderer/SVG/TextBuilder.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht, st, J, et, Y, z, H) {
            let w, {
                    defaultOptions: I
                } = Z,
                {
                    charts: D,
                    deg2rad: T,
                    doc: v,
                    isFirefox: M,
                    isMS: u,
                    isWebKit: m,
                    noop: h,
                    SVG_NS: x,
                    symbolSizes: X,
                    win: L
                } = ht,
                {
                    addEvent: k,
                    attr: r,
                    createElement: p,
                    crisp: n,
                    css: t,
                    defined: e,
                    destroyObjectProperties: o,
                    extend: i,
                    isArray: l,
                    isNumber: a,
                    isObject: b,
                    isString: O,
                    merge: _,
                    pick: y,
                    pInt: j,
                    replaceNested: G,
                    uniqueKey: W
                } = H;
            class it {
                constructor(c, S, B, s, g, f, C) {
                    let A, N, U = this.createElement("svg").attr({
                            version: "1.1",
                            class: "highcharts-root"
                        }),
                        q = U.element;
                    C || U.css(this.getStyle(s || {})), c.appendChild(q), r(c, "dir", "ltr"), c.innerHTML.indexOf("xmlns") === -1 && r(q, "xmlns", this.SVG_NS), this.box = q, this.boxWrapper = U, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(v.createTextNode("Created with Highcharts 11.4.3")), this.defs = this.createElement("defs").add(), this.allowHTML = f, this.forExport = g, this.styledMode = C, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = U.getStyle("font-size"), this.setSize(S, B, !1), M && c.getBoundingClientRect && ((A = function() {
                        t(c, {
                            left: 0,
                            top: 0
                        }), N = c.getBoundingClientRect(), t(c, {
                            left: Math.ceil(N.left) - N.left + "px",
                            top: Math.ceil(N.top) - N.top + "px"
                        })
                    })(), this.unSubPixelFix = k(L, "resize", A))
                }
                definition(c) {
                    return new V([c]).addToDOM(this.defs.element)
                }
                getReferenceURL() {
                    if ((M || m) && v.getElementsByTagName("base").length) {
                        if (!e(w)) {
                            let c = W(),
                                S = new V([{
                                    tagName: "svg",
                                    attributes: {
                                        width: 8,
                                        height: 8
                                    },
                                    children: [{
                                        tagName: "defs",
                                        children: [{
                                            tagName: "clipPath",
                                            attributes: {
                                                id: c
                                            },
                                            children: [{
                                                tagName: "rect",
                                                attributes: {
                                                    width: 4,
                                                    height: 4
                                                }
                                            }]
                                        }]
                                    }, {
                                        tagName: "rect",
                                        attributes: {
                                            id: "hitme",
                                            width: 8,
                                            height: 8,
                                            "clip-path": `url(#${c})`,
                                            fill: "rgba(0,0,0,0.001)"
                                        }
                                    }]
                                }]).addToDOM(v.body);
                            t(S, {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                zIndex: 9e5
                            });
                            let B = v.elementFromPoint(6, 6);
                            w = (B && B.id) === "hitme", v.body.removeChild(S)
                        }
                        if (w) return G(L.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"])
                    }
                    return ""
                }
                getStyle(c) {
                    return this.style = i({
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: "1rem"
                    }, c), this.style
                }
                setStyle(c) {
                    this.boxWrapper.css(this.getStyle(c))
                }
                isHidden() {
                    return !this.boxWrapper.getBBox().width
                }
                destroy() {
                    let c = this.defs;
                    return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), o(this.gradients || {}), this.gradients = null, this.defs = c.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null
                }
                createElement(c) {
                    return new this.Element(this, c)
                }
                getRadialAttr(c, S) {
                    return {
                        cx: c[0] - c[2] / 2 + (S.cx || 0) * c[2],
                        cy: c[1] - c[2] / 2 + (S.cy || 0) * c[2],
                        r: (S.r || 0) * c[2]
                    }
                }
                shadowDefinition(c) {
                    let S = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(c).map(s => `${s}-${c[s]}`)].join("-").toLowerCase().replace(/[^a-z0-9\-]/g, ""),
                        B = _({
                            color: "#000000",
                            offsetX: 1,
                            offsetY: 1,
                            opacity: .15,
                            width: 5
                        }, c);
                    return this.defs.element.querySelector(`#${S}`) || this.definition({
                        tagName: "filter",
                        attributes: {
                            id: S,
                            filterUnits: B.filterUnits
                        },
                        children: [{
                            tagName: "feDropShadow",
                            attributes: {
                                dx: B.offsetX,
                                dy: B.offsetY,
                                "flood-color": B.color,
                                "flood-opacity": Math.min(5 * B.opacity, 1),
                                stdDeviation: B.width / 2
                            }
                        }]
                    }), S
                }
                buildText(c) {
                    new z(c).buildSVG()
                }
                getContrast(c) {
                    let S = ot.parse(c).rgba.map(s => {
                            let g = s / 255;
                            return g <= .03928 ? g / 12.92 : Math.pow((g + .055) / 1.055, 2.4)
                        }),
                        B = .2126 * S[0] + .7152 * S[1] + .0722 * S[2];
                    return 1.05 / (B + .05) > (B + .05) / .05 ? "#FFFFFF" : "#000000"
                }
                button(c, S, B, s, g = {}, f, C, A, N, U) {
                    let q = this.label(c, S, B, N, void 0, void 0, U, void 0, "button"),
                        K = this.styledMode,
                        at = arguments,
                        lt = 0;
                    g = _(I.global.buttonTheme, g), K && (delete g.fill, delete g.stroke, delete g["stroke-width"]);
                    let R = g.states || {},
                        E = g.style || {};
                    delete g.states, delete g.style;
                    let F = [V.filterUserAttributes(g)],
                        $ = [E];
                    return K || ["hover", "select", "disabled"].forEach((Q, rt) => {
                        F.push(_(F[0], V.filterUserAttributes(at[rt + 5] || R[Q] || {}))), $.push(F[rt + 1].style), delete F[rt + 1].style
                    }), k(q.element, u ? "mouseover" : "mouseenter", function() {
                        lt !== 3 && q.setState(1)
                    }), k(q.element, u ? "mouseout" : "mouseleave", function() {
                        lt !== 3 && q.setState(lt)
                    }), q.setState = (Q = 0) => {
                        if (Q !== 1 && (q.state = lt = Q), q.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][Q]), !K) {
                            q.attr(F[Q]);
                            let rt = $[Q];
                            b(rt) && q.css(rt)
                        }
                    }, q.attr(F[0]), !K && (q.css(i({
                        cursor: "default"
                    }, E)), U && q.text.css({
                        pointerEvents: "none"
                    })), q.on("touchstart", Q => Q.stopPropagation()).on("click", function(Q) {
                        lt !== 3 && s.call(q, Q)
                    })
                }
                crispLine(c, S) {
                    let [B, s] = c;
                    return e(B[1]) && B[1] === s[1] && (B[1] = s[1] = n(B[1], S)), e(B[2]) && B[2] === s[2] && (B[2] = s[2] = n(B[2], S)), c
                }
                path(c) {
                    let S = this.styledMode ? {} : {
                        fill: "none"
                    };
                    return l(c) ? S.d = c : b(c) && i(S, c), this.createElement("path").attr(S)
                }
                circle(c, S, B) {
                    let s = b(c) ? c : c === void 0 ? {} : {
                            x: c,
                            y: S,
                            r: B
                        },
                        g = this.createElement("circle");
                    return g.xSetter = g.ySetter = function(f, C, A) {
                        A.setAttribute("c" + C, f)
                    }, g.attr(s)
                }
                arc(c, S, B, s, g, f) {
                    let C;
                    b(c) ? (S = (C = c).y, B = C.r, s = C.innerR, g = C.start, f = C.end, c = C.x) : C = {
                        innerR: s,
                        start: g,
                        end: f
                    };
                    let A = this.symbol("arc", c, S, B, B, C);
                    return A.r = B, A
                }
                rect(c, S, B, s, g, f) {
                    let C = b(c) ? c : c === void 0 ? {} : {
                            x: c,
                            y: S,
                            r: g,
                            width: Math.max(B || 0, 0),
                            height: Math.max(s || 0, 0)
                        },
                        A = this.createElement("rect");
                    return this.styledMode || (f !== void 0 && (C["stroke-width"] = f, i(C, A.crisp(C))), C.fill = "none"), A.rSetter = function(N, U, q) {
                        A.r = N, r(q, {
                            rx: N,
                            ry: N
                        })
                    }, A.rGetter = function() {
                        return A.r || 0
                    }, A.attr(C)
                }
                roundedRect(c) {
                    return this.symbol("roundedRect").attr(c)
                }
                setSize(c, S, B) {
                    this.width = c, this.height = S, this.boxWrapper.animate({
                        width: c,
                        height: S
                    }, {
                        step: function() {
                            this.attr({
                                viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                            })
                        },
                        duration: y(B, !0) ? void 0 : 0
                    }), this.alignElements()
                }
                g(c) {
                    let S = this.createElement("g");
                    return c ? S.attr({
                        class: "highcharts-" + c
                    }) : S
                }
                image(c, S, B, s, g, f) {
                    let C = {
                        preserveAspectRatio: "none"
                    };
                    a(S) && (C.x = S), a(B) && (C.y = B), a(s) && (C.width = s), a(g) && (C.height = g);
                    let A = this.createElement("image").attr(C),
                        N = function(U) {
                            A.attr({
                                href: c
                            }), f.call(A, U)
                        };
                    if (f) {
                        A.attr({
                            href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        });
                        let U = new L.Image;
                        k(U, "load", N), U.src = c, U.complete && N({})
                    } else A.attr({
                        href: c
                    });
                    return A
                }
                symbol(c, S, B, s, g, f) {
                    let C, A, N, U, q = this,
                        K = /^url\((.*?)\)$/,
                        at = K.test(c),
                        lt = !at && (this.symbols[c] ? c : "circle"),
                        R = lt && this.symbols[lt];
                    if (R) typeof S == "number" && (A = R.call(this.symbols, S || 0, B || 0, s || 0, g || 0, f)), C = this.path(A), q.styledMode || C.attr("fill", "none"), i(C, {
                        symbolName: lt || void 0,
                        x: S,
                        y: B,
                        width: s,
                        height: g
                    }), f && i(C, f);
                    else if (at) {
                        N = c.match(K)[1];
                        let E = C = this.image(N);
                        E.imgwidth = y(f && f.width, X[N] && X[N].width), E.imgheight = y(f && f.height, X[N] && X[N].height), U = F => F.attr({
                            width: F.width,
                            height: F.height
                        }), ["width", "height"].forEach(F => {
                            E[`${F}Setter`] = function($, Q) {
                                this[Q] = $;
                                let {
                                    alignByTranslate: rt,
                                    element: tt,
                                    width: nt,
                                    height: dt,
                                    imgwidth: pt,
                                    imgheight: ut
                                } = this, ft = Q === "width" ? pt : ut, mt = 1;
                                f && f.backgroundSize === "within" && nt && dt && pt && ut ? (mt = Math.min(nt / pt, dt / ut), r(tt, {
                                    width: Math.round(pt * mt),
                                    height: Math.round(ut * mt)
                                })) : tt && ft && tt.setAttribute(Q, ft), !rt && pt && ut && this.translate(((nt || 0) - pt * mt) / 2, ((dt || 0) - ut * mt) / 2)
                            }
                        }), e(S) && E.attr({
                            x: S,
                            y: B
                        }), E.isImg = !0, e(E.imgwidth) && e(E.imgheight) ? U(E) : (E.attr({
                            width: 0,
                            height: 0
                        }), p("img", {
                            onload: function() {
                                let F = D[q.chartIndex];
                                this.width === 0 && (t(this, {
                                    position: "absolute",
                                    top: "-999em"
                                }), v.body.appendChild(this)), X[N] = {
                                    width: this.width,
                                    height: this.height
                                }, E.imgwidth = this.width, E.imgheight = this.height, E.element && U(E), this.parentNode && this.parentNode.removeChild(this), q.imgCount--, q.imgCount || !F || F.hasLoaded || F.onload()
                            },
                            src: N
                        }), this.imgCount++)
                    }
                    return C
                }
                clipRect(c, S, B, s) {
                    return this.rect(c, S, B, s, 0)
                }
                text(c, S, B, s) {
                    let g = {};
                    if (s && (this.allowHTML || !this.forExport)) return this.html(c, S, B);
                    g.x = Math.round(S || 0), B && (g.y = Math.round(B)), e(c) && (g.text = c);
                    let f = this.createElement("text").attr(g);
                    return s && (!this.forExport || this.allowHTML) || (f.xSetter = function(C, A, N) {
                        let U = N.getElementsByTagName("tspan"),
                            q = N.getAttribute(A);
                        for (let K = 0, at; K < U.length; K++)(at = U[K]).getAttribute(A) === q && at.setAttribute(A, C);
                        N.setAttribute(A, C)
                    }), f
                }
                fontMetrics(c) {
                    let S = j(J.prototype.getStyle.call(c, "font-size") || 0),
                        B = S < 24 ? S + 3 : Math.round(1.2 * S),
                        s = Math.round(.8 * B);
                    return {
                        h: B,
                        b: s,
                        f: S
                    }
                }
                rotCorr(c, S, B) {
                    let s = c;
                    return S && B && (s = Math.max(s * Math.cos(S * T), 4)), {
                        x: -c / 3 * Math.sin(S * T),
                        y: s
                    }
                }
                pathToSegments(c) {
                    let S = [],
                        B = [],
                        s = {
                            A: 8,
                            C: 7,
                            H: 2,
                            L: 3,
                            M: 3,
                            Q: 5,
                            S: 5,
                            T: 3,
                            V: 2
                        };
                    for (let g = 0; g < c.length; g++) O(B[0]) && a(c[g]) && B.length === s[B[0].toUpperCase()] && c.splice(g, 0, B[0].replace("M", "L").replace("m", "l")), typeof c[g] == "string" && (B.length && S.push(B.slice(0)), B.length = 0), B.push(c[g]);
                    return S.push(B.slice(0)), S
                }
                label(c, S, B, s, g, f, C, A, N) {
                    return new et(this, c, S, B, s, g, f, C, A, N)
                }
                alignElements() {
                    this.alignedObjects.forEach(c => c.align())
                }
            }
            return i(it.prototype, {
                Element: J,
                SVG_NS: x,
                escapes: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    "'": "&#39;",
                    '"': "&quot;"
                },
                symbols: Y,
                draw: h
            }), st.registerRendererType("svg", it, !0), it
        }), ct(P, "Core/Renderer/HTML/HTMLElement.js", [P["Core/Renderer/HTML/AST.js"], P["Core/Globals.js"], P["Core/Renderer/SVG/SVGElement.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht) {
            let {
                composed: st
            } = Z, {
                attr: J,
                css: et,
                createElement: Y,
                defined: z,
                extend: H,
                pInt: w,
                pushUnique: I
            } = ht;

            function D(u, m, h) {
                var X;
                let x = ((X = this.div) == null ? void 0 : X.style) || h.style;
                ot.prototype[`${m}Setter`].call(this, u, m, h), x && (x[m] = u)
            }
            let T = (u, m) => {
                var h;
                if (!u.div) {
                    let x = J(u.element, "class"),
                        X = u.css,
                        L = Y("div", x ? {
                            className: x
                        } : void 0, {
                            position: "absolute",
                            left: `${u.translateX||0}px`,
                            top: `${u.translateY||0}px`,
                            ...u.styles,
                            display: u.display,
                            opacity: u.opacity,
                            visibility: u.visibility
                        }, ((h = u.parentGroup) == null ? void 0 : h.div) || m);
                    u.classSetter = (k, r, p) => {
                        p.setAttribute("class", k), L.className = k
                    }, u.translateXSetter = u.translateYSetter = (k, r) => {
                        u[r] = k, L.style[r === "translateX" ? "left" : "top"] = `${k}px`, u.doTransform = !0
                    }, u.opacitySetter = u.visibilitySetter = D, u.css = k => (X.call(u, k), k.cursor && (L.style.cursor = k.cursor), k.pointerEvents && (L.style.pointerEvents = k.pointerEvents), u), u.on = function() {
                        return ot.prototype.on.apply({
                            element: L,
                            onEvents: u.onEvents
                        }, arguments), u
                    }, u.div = L
                }
                return u.div
            };
            class v extends ot {
                static compose(m) {
                    I(st, this.compose) && (m.prototype.html = function(h, x, X) {
                        return new v(this, "span").attr({
                            text: h,
                            x: Math.round(x),
                            y: Math.round(X)
                        })
                    })
                }
                constructor(m, h) {
                    super(m, h), this.css({
                        position: "absolute",
                        ...m.styledMode ? {} : {
                            fontFamily: m.style.fontFamily,
                            fontSize: m.style.fontSize
                        }
                    }), this.element.style.whiteSpace = "nowrap"
                }
                getSpanCorrection(m, h, x) {
                    this.xCorr = -m * x, this.yCorr = -h
                }
                css(m) {
                    let h, {
                            element: x
                        } = this,
                        X = x.tagName === "SPAN" && m && "width" in m,
                        L = X && m.width;
                    return X && (delete m.width, this.textWidth = w(L) || void 0, h = !0), (m == null ? void 0 : m.textOverflow) === "ellipsis" && (m.whiteSpace = "nowrap", m.overflow = "hidden"), H(this.styles, m), et(x, m), h && this.updateTransform(), this
                }
                htmlGetBBox() {
                    let {
                        element: m
                    } = this;
                    return {
                        x: m.offsetLeft,
                        y: m.offsetTop,
                        width: m.offsetWidth,
                        height: m.offsetHeight
                    }
                }
                updateTransform() {
                    var l;
                    if (!this.added) {
                        this.alignOnAdd = !0;
                        return
                    }
                    let {
                        element: m,
                        renderer: h,
                        rotation: x,
                        rotationOriginX: X,
                        rotationOriginY: L,
                        styles: k,
                        textAlign: r = "left",
                        textWidth: p,
                        translateX: n = 0,
                        translateY: t = 0,
                        x: e = 0,
                        y: o = 0
                    } = this, i = k.whiteSpace;
                    if (et(m, {
                            marginLeft: `${n}px`,
                            marginTop: `${t}px`
                        }), m.tagName === "SPAN") {
                        let a = [x, r, m.innerHTML, p, this.textAlign].join(","),
                            b = -(((l = this.parentGroup) == null ? void 0 : l.padding) * 1) || 0,
                            O, _ = !1;
                        if (p !== this.oldTextWidth) {
                            let it = this.textPxLength ? this.textPxLength : (et(m, {
                                    width: "",
                                    whiteSpace: i || "nowrap"
                                }), m.offsetWidth),
                                d = p || 0;
                            (d > this.oldTextWidth || it > d) && (/[ \-]/.test(m.textContent || m.innerText) || m.style.textOverflow === "ellipsis") && (et(m, {
                                width: it > d || x ? p + "px" : "auto",
                                display: "block",
                                whiteSpace: i || "normal"
                            }), this.oldTextWidth = p, _ = !0)
                        }
                        this.hasBoxWidthChanged = _, a !== this.cTT && (O = h.fontMetrics(m).b, z(x) && (x !== (this.oldRotation || 0) || r !== this.oldAlign) && this.setSpanRotation(x, b, b), this.getSpanCorrection(!z(x) && this.textPxLength || m.offsetWidth, O, {
                            left: 0,
                            center: .5,
                            right: 1
                        }[r]));
                        let {
                            xCorr: y = 0,
                            yCorr: j = 0
                        } = this, G = (X ? ? e) - y - e - b, W = (L ? ? o) - j - o - b;
                        et(m, {
                            left: `${e+y}px`,
                            top: `${o+j}px`,
                            transformOrigin: `${G}px ${W}px`
                        }), this.cTT = a, this.oldRotation = x, this.oldAlign = r
                    }
                }
                setSpanRotation(m, h, x) {
                    et(this.element, {
                        transform: `rotate(${m}deg)`,
                        transformOrigin: `${h}% ${x}px`
                    })
                }
                add(m) {
                    let h, x = this.renderer.box.parentNode,
                        X = [];
                    if (this.parentGroup = m, m && !(h = m.div)) {
                        let L = m;
                        for (; L;) X.push(L), L = L.parentGroup;
                        for (let k of X.reverse()) h = T(k, x)
                    }
                    return (h || x).appendChild(this.element), this.added = !0, this.alignOnAdd && this.updateTransform(), this
                }
                textSetter(m) {
                    m !== this.textStr && (delete this.bBox, delete this.oldTextWidth, V.setElementHTML(this.element, m ? ? ""), this.textStr = m, this.doTransform = !0)
                }
                alignSetter(m) {
                    this.alignValue = this.textAlign = m, this.doTransform = !0
                }
                xSetter(m, h) {
                    this[h] = m, this.doTransform = !0
                }
            }
            let M = v.prototype;
            return M.visibilitySetter = M.opacitySetter = D, M.ySetter = M.rotationSetter = M.rotationOriginXSetter = M.rotationOriginYSetter = M.xSetter, v
        }), ct(P, "Core/Axis/AxisDefaults.js", [], function() {
            var V, Z;
            return (Z = V || (V = {})).xAxis = {
                alignTicks: !0,
                allowDecimals: void 0,
                panningEnabled: !0,
                zIndex: 2,
                zoomEnabled: !0,
                dateTimeLabelFormats: {
                    millisecond: {
                        main: "%H:%M:%S.%L",
                        range: !1
                    },
                    second: {
                        main: "%H:%M:%S",
                        range: !1
                    },
                    minute: {
                        main: "%H:%M",
                        range: !1
                    },
                    hour: {
                        main: "%H:%M",
                        range: !1
                    },
                    day: {
                        main: "%e %b"
                    },
                    week: {
                        main: "%e %b"
                    },
                    month: {
                        main: "%b '%y"
                    },
                    year: {
                        main: "%Y"
                    }
                },
                endOnTick: !1,
                gridLineDashStyle: "Solid",
                gridZIndex: 1,
                labels: {
                    autoRotationLimit: 80,
                    distance: 15,
                    enabled: !0,
                    indentation: 10,
                    overflow: "justify",
                    reserveSpace: void 0,
                    rotation: void 0,
                    staggerLines: 0,
                    step: 0,
                    useHTML: !1,
                    zIndex: 7,
                    style: {
                        color: "#333333",
                        cursor: "default",
                        fontSize: "0.8em"
                    }
                },
                maxPadding: .01,
                minorGridLineDashStyle: "Solid",
                minorTickLength: 2,
                minorTickPosition: "outside",
                minorTicksPerMajor: 5,
                minPadding: .01,
                offset: void 0,
                reversed: void 0,
                reversedStacks: !1,
                showEmpty: !0,
                showFirstLabel: !0,
                showLastLabel: !0,
                startOfWeek: 1,
                startOnTick: !1,
                tickLength: 10,
                tickPixelInterval: 100,
                tickmarkPlacement: "between",
                tickPosition: "outside",
                title: {
                    align: "middle",
                    useHTML: !1,
                    x: 0,
                    y: 0,
                    style: {
                        color: "#666666",
                        fontSize: "0.8em"
                    }
                },
                type: "linear",
                uniqueNames: !0,
                visible: !0,
                minorGridLineColor: "#f2f2f2",
                minorGridLineWidth: 1,
                minorTickColor: "#999999",
                lineColor: "#333333",
                lineWidth: 1,
                gridLineColor: "#e6e6e6",
                gridLineWidth: void 0,
                tickColor: "#333333"
            }, Z.yAxis = {
                reversedStacks: !0,
                endOnTick: !0,
                maxPadding: .05,
                minPadding: .05,
                tickPixelInterval: 72,
                showLastLabel: !0,
                labels: {
                    x: void 0
                },
                startOnTick: !0,
                title: {
                    text: "Values"
                },
                stackLabels: {
                    animation: {},
                    allowOverlap: !1,
                    enabled: !1,
                    crop: !0,
                    overflow: "justify",
                    formatter: function() {
                        let {
                            numberFormatter: ot
                        } = this.axis.chart;
                        return ot(this.total || 0, -1)
                    },
                    style: {
                        color: "#000000",
                        fontSize: "0.7em",
                        fontWeight: "bold",
                        textOutline: "1px contrast"
                    }
                },
                gridLineWidth: 1,
                lineWidth: 0
            }, V
        }), ct(P, "Core/Foundation.js", [P["Core/Utilities.js"]], function(V) {
            var Z;
            let {
                addEvent: ot,
                isFunction: ht,
                objectEach: st,
                removeEvent: J
            } = V;
            return (Z || (Z = {})).registerEventOptions = function(et, Y) {
                et.eventOptions = et.eventOptions || {}, st(Y.events, function(z, H) {
                    et.eventOptions[H] !== z && (et.eventOptions[H] && (J(et, H, et.eventOptions[H]), delete et.eventOptions[H]), ht(z) && (et.eventOptions[H] = z, ot(et, H, z, {
                        order: 0
                    })))
                })
            }, Z
        }), ct(P, "Core/Axis/Tick.js", [P["Core/Templating.js"], P["Core/Globals.js"], P["Core/Utilities.js"]], function(V, Z, ot) {
            let {
                deg2rad: ht
            } = Z, {
                clamp: st,
                correctFloat: J,
                defined: et,
                destroyObjectProperties: Y,
                extend: z,
                fireEvent: H,
                isNumber: w,
                merge: I,
                objectEach: D,
                pick: T
            } = ot;
            return class {
                constructor(v, M, u, m, h) {
                    this.isNew = !0, this.isNewLabel = !0, this.axis = v, this.pos = M, this.type = u || "", this.parameters = h || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, H(this, "init"), u || m || this.addLabel()
                }
                addLabel() {
                    let v = this,
                        M = v.axis,
                        u = M.options,
                        m = M.chart,
                        h = M.categories,
                        x = M.logarithmic,
                        X = M.names,
                        L = v.pos,
                        k = T(v.options && v.options.labels, u.labels),
                        r = M.tickPositions,
                        p = L === r[0],
                        n = L === r[r.length - 1],
                        t = (!k.step || k.step === 1) && M.tickInterval === 1,
                        e = r.info,
                        o = v.label,
                        i, l, a, b = this.parameters.category || (h ? T(h[L], X[L], L) : L);
                    x && w(b) && (b = J(x.lin2log(b))), M.dateTime && (e ? i = (l = m.time.resolveDTLFormat(u.dateTimeLabelFormats[!u.grid && e.higherRanks[L] || e.unitName])).main : w(b) && (i = M.dateTime.getXDateFormat(b, u.dateTimeLabelFormats || {}))), v.isFirst = p, v.isLast = n;
                    let O = {
                        axis: M,
                        chart: m,
                        dateTimeLabelFormat: i,
                        isFirst: p,
                        isLast: n,
                        pos: L,
                        tick: v,
                        tickPositionInfo: e,
                        value: b
                    };
                    H(this, "labelFormat", O);
                    let _ = G => k.formatter ? k.formatter.call(G, G) : k.format ? (G.text = M.defaultLabelFormatter.call(G), V.format(k.format, G, m)) : M.defaultLabelFormatter.call(G),
                        y = _.call(O, O),
                        j = l && l.list;
                    j ? v.shortenLabel = function() {
                        for (a = 0; a < j.length; a++)
                            if (z(O, {
                                    dateTimeLabelFormat: j[a]
                                }), o.attr({
                                    text: _.call(O, O)
                                }), o.getBBox().width < M.getSlotWidth(v) - 2 * (k.padding || 0)) return;
                        o.attr({
                            text: ""
                        })
                    } : v.shortenLabel = void 0, t && M._addedPlotLB && v.moveLabel(y, k), et(o) || v.movedLabel ? o && o.textStr !== y && !t && (!o.textWidth || k.style.width || o.styles.width || o.css({
                        width: null
                    }), o.attr({
                        text: y
                    }), o.textPxLength = o.getBBox().width) : (v.label = o = v.createLabel(y, k), v.rotation = 0)
                }
                createLabel(v, M, u) {
                    let m = this.axis,
                        h = m.chart,
                        x = et(v) && M.enabled ? h.renderer.text(v, u == null ? void 0 : u.x, u == null ? void 0 : u.y, M.useHTML).add(m.labelGroup) : void 0;
                    return x && (h.styledMode || x.css(I(M.style)), x.textPxLength = x.getBBox().width), x
                }
                destroy() {
                    Y(this, this.axis)
                }
                getPosition(v, M, u, m) {
                    let h = this.axis,
                        x = h.chart,
                        X = m && x.oldChartHeight || x.chartHeight,
                        L = {
                            x: v ? J(h.translate(M + u, void 0, void 0, m) + h.transB) : h.left + h.offset + (h.opposite ? (m && x.oldChartWidth || x.chartWidth) - h.right - h.left : 0),
                            y: v ? X - h.bottom + h.offset - (h.opposite ? h.height : 0) : J(X - h.translate(M + u, void 0, void 0, m) - h.transB)
                        };
                    return L.y = st(L.y, -1e5, 1e5), H(this, "afterGetPosition", {
                        pos: L
                    }), L
                }
                getLabelPosition(v, M, u, m, h, x, X, L) {
                    let k, r, p = this.axis,
                        n = p.transA,
                        t = p.isLinked && p.linkedParent ? p.linkedParent.reversed : p.reversed,
                        e = p.staggerLines,
                        o = p.tickRotCorr || {
                            x: 0,
                            y: 0
                        },
                        i = m || p.reserveSpaceDefault ? 0 : -p.labelOffset * (p.labelAlign === "center" ? .5 : 1),
                        l = h.distance,
                        a = {};
                    return k = p.side === 0 ? u.rotation ? -l : -u.getBBox().height : p.side === 2 ? o.y + l : Math.cos(u.rotation * ht) * (o.y - u.getBBox(!1, 0).height / 2), et(h.y) && (k = p.side === 0 && p.horiz ? h.y + k : h.y), v = v + T(h.x, [0, 1, 0, -1][p.side] * l) + i + o.x - (x && m ? x * n * (t ? -1 : 1) : 0), M = M + k - (x && !m ? x * n * (t ? 1 : -1) : 0), e && (r = X / (L || 1) % e, p.opposite && (r = e - r - 1), M += p.labelOffset / e * r), a.x = v, a.y = Math.round(M), H(this, "afterGetLabelPosition", {
                        pos: a,
                        tickmarkOffset: x,
                        index: X
                    }), a
                }
                getLabelSize() {
                    return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
                }
                getMarkPath(v, M, u, m, h = !1, x) {
                    return x.crispLine([
                        ["M", v, M],
                        ["L", v + (h ? 0 : -u), M + (h ? u : 0)]
                    ], m)
                }
                handleOverflow(v) {
                    let M = this.axis,
                        u = M.options.labels,
                        m = v.x,
                        h = M.chart.chartWidth,
                        x = M.chart.spacing,
                        X = T(M.labelLeft, Math.min(M.pos, x[3])),
                        L = T(M.labelRight, Math.max(M.isRadial ? 0 : M.pos + M.len, h - x[1])),
                        k = this.label,
                        r = this.rotation,
                        p = {
                            left: 0,
                            center: .5,
                            right: 1
                        }[M.labelAlign || k.attr("align")],
                        n = k.getBBox().width,
                        t = M.getSlotWidth(this),
                        e = {},
                        o = t,
                        i = 1,
                        l, a, b;
                    r || u.overflow !== "justify" ? r < 0 && m - p * n < X ? b = Math.round(m / Math.cos(r * ht) - X) : r > 0 && m + p * n > L && (b = Math.round((h - m) / Math.cos(r * ht))) : (l = m - p * n, a = m + (1 - p) * n, l < X ? o = v.x + o * (1 - p) - X : a > L && (o = L - v.x + o * p, i = -1), (o = Math.min(t, o)) < t && M.labelAlign === "center" && (v.x += i * (t - o - p * (t - Math.min(n, o)))), (n > o || M.autoRotation && (k.styles || {}).width) && (b = o)), b && (this.shortenLabel ? this.shortenLabel() : (e.width = Math.floor(b) + "px", (u.style || {}).textOverflow || (e.textOverflow = "ellipsis"), k.css(e)))
                }
                moveLabel(v, M) {
                    let u = this,
                        m = u.label,
                        h = u.axis,
                        x = !1,
                        X;
                    m && m.textStr === v ? (u.movedLabel = m, x = !0, delete u.label) : D(h.ticks, function(L) {
                        x || L.isNew || L === u || !L.label || L.label.textStr !== v || (u.movedLabel = L.label, x = !0, L.labelPos = u.movedLabel.xy, delete L.label)
                    }), !x && (u.labelPos || m) && (X = u.labelPos || m.xy, u.movedLabel = u.createLabel(v, M, X), u.movedLabel && u.movedLabel.attr({
                        opacity: 0
                    }))
                }
                render(v, M, u) {
                    let m = this.axis,
                        h = m.horiz,
                        x = this.pos,
                        X = T(this.tickmarkOffset, m.tickmarkOffset),
                        L = this.getPosition(h, x, X, M),
                        k = L.x,
                        r = L.y,
                        p = m.pos,
                        n = p + m.len,
                        t = h ? k : r;
                    !m.chart.polar && this.isNew && (J(t) < p || t > n) && (u = 0);
                    let e = T(u, this.label && this.label.newOpacity, 1);
                    u = T(u, 1), this.isActive = !0, this.renderGridLine(M, u), this.renderMark(L, u), this.renderLabel(L, M, e, v), this.isNew = !1, H(this, "afterRender")
                }
                renderGridLine(v, M) {
                    let u = this.axis,
                        m = u.options,
                        h = {},
                        x = this.pos,
                        X = this.type,
                        L = T(this.tickmarkOffset, u.tickmarkOffset),
                        k = u.chart.renderer,
                        r = this.gridLine,
                        p, n = m.gridLineWidth,
                        t = m.gridLineColor,
                        e = m.gridLineDashStyle;
                    this.type === "minor" && (n = m.minorGridLineWidth, t = m.minorGridLineColor, e = m.minorGridLineDashStyle), r || (u.chart.styledMode || (h.stroke = t, h["stroke-width"] = n || 0, h.dashstyle = e), X || (h.zIndex = 1), v && (M = 0), this.gridLine = r = k.path().attr(h).addClass("highcharts-" + (X ? X + "-" : "") + "grid-line").add(u.gridGroup)), r && (p = u.getPlotLinePath({
                        value: x + L,
                        lineWidth: r.strokeWidth(),
                        force: "pass",
                        old: v,
                        acrossPanes: !1
                    })) && r[v || this.isNew ? "attr" : "animate"]({
                        d: p,
                        opacity: M
                    })
                }
                renderMark(v, M) {
                    let u = this.axis,
                        m = u.options,
                        h = u.chart.renderer,
                        x = this.type,
                        X = u.tickSize(x ? x + "Tick" : "tick"),
                        L = v.x,
                        k = v.y,
                        r = T(m[x !== "minor" ? "tickWidth" : "minorTickWidth"], !x && u.isXAxis ? 1 : 0),
                        p = m[x !== "minor" ? "tickColor" : "minorTickColor"],
                        n = this.mark,
                        t = !n;
                    X && (u.opposite && (X[0] = -X[0]), n || (this.mark = n = h.path().addClass("highcharts-" + (x ? x + "-" : "") + "tick").add(u.axisGroup), u.chart.styledMode || n.attr({
                        stroke: p,
                        "stroke-width": r
                    })), n[t ? "attr" : "animate"]({
                        d: this.getMarkPath(L, k, X[0], n.strokeWidth(), u.horiz, h),
                        opacity: M
                    }))
                }
                renderLabel(v, M, u, m) {
                    let h = this.axis,
                        x = h.horiz,
                        X = h.options,
                        L = this.label,
                        k = X.labels,
                        r = k.step,
                        p = T(this.tickmarkOffset, h.tickmarkOffset),
                        n = v.x,
                        t = v.y,
                        e = !0;
                    L && w(n) && (L.xy = v = this.getLabelPosition(n, t, L, x, k, p, m, r), (!this.isFirst || this.isLast || X.showFirstLabel) && (!this.isLast || this.isFirst || X.showLastLabel) ? !x || k.step || k.rotation || M || u === 0 || this.handleOverflow(v) : e = !1, r && m % r && (e = !1), e && w(v.y) ? (v.opacity = u, L[this.isNewLabel ? "attr" : "animate"](v).show(!0), this.isNewLabel = !1) : (L.hide(), this.isNewLabel = !0))
                }
                replaceMovedLabel() {
                    let v = this.label,
                        M = this.axis;
                    v && !this.isNew && (v.animate({
                        opacity: 0
                    }, void 0, v.destroy), delete this.label), M.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel
                }
            }
        }), ct(P, "Core/Axis/Axis.js", [P["Core/Animation/AnimationUtilities.js"], P["Core/Axis/AxisDefaults.js"], P["Core/Color/Color.js"], P["Core/Defaults.js"], P["Core/Foundation.js"], P["Core/Globals.js"], P["Core/Axis/Tick.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht, st, J, et, Y) {
            let {
                animObject: z
            } = V, {
                xAxis: H,
                yAxis: w
            } = Z, {
                defaultOptions: I
            } = ht, {
                registerEventOptions: D
            } = st, {
                deg2rad: T
            } = J, {
                arrayMax: v,
                arrayMin: M,
                clamp: u,
                correctFloat: m,
                defined: h,
                destroyObjectProperties: x,
                erase: X,
                error: L,
                extend: k,
                fireEvent: r,
                getClosestDistance: p,
                insertItem: n,
                isArray: t,
                isNumber: e,
                isString: o,
                merge: i,
                normalizeTickInterval: l,
                objectEach: a,
                pick: b,
                relativeLength: O,
                removeEvent: _,
                splat: y,
                syncTimeout: j
            } = Y, G = (it, d) => l(d, void 0, void 0, b(it.options.allowDecimals, d < .5 || it.tickAmount !== void 0), !!it.tickAmount);
            k(I, {
                xAxis: H,
                yAxis: i(H, w)
            });
            class W {
                constructor(d, c, S) {
                    this.init(d, c, S)
                }
                init(d, c, S = this.coll) {
                    let B = S === "xAxis",
                        s = this.isZAxis || (d.inverted ? !B : B);
                    this.chart = d, this.horiz = s, this.isXAxis = B, this.coll = S, r(this, "init", {
                        userOptions: c
                    }), this.opposite = b(c.opposite, this.opposite), this.side = b(c.side, this.side, s ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(c);
                    let g = this.options,
                        f = g.labels,
                        C = g.type;
                    this.userOptions = c, this.minPixelPadding = 0, this.reversed = b(g.reversed, this.reversed), this.visible = g.visible, this.zoomEnabled = g.zoomEnabled, this.hasNames = C === "category" || g.categories === !0, this.categories = t(g.categories) && g.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = h(g.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len ? ? (this.len = 0), this.minRange = this.userMinRange = g.minRange || g.maxZoom, this.range = g.range, this.offset = g.offset || 0, this.max = void 0, this.min = void 0;
                    let A = b(g.crosshair, y(d.options.tooltip.crosshairs)[B ? 0 : 1]);
                    this.crosshair = A === !0 ? {} : A, d.axes.indexOf(this) === -1 && (B ? d.axes.splice(d.xAxis.length, 0, this) : d.axes.push(this), n(this, d[this.coll])), d.orderItems(this.coll), this.series = this.series || [], d.inverted && !this.isZAxis && B && !h(this.reversed) && (this.reversed = !0), this.labelRotation = e(f.rotation) ? f.rotation : void 0, D(this, g), r(this, "afterInit")
                }
                setOptions(d) {
                    let c = this.horiz ? {
                        labels: {
                            autoRotation: [-45],
                            padding: 4
                        },
                        margin: 15
                    } : {
                        labels: {
                            padding: 1
                        },
                        title: {
                            rotation: 90 * this.side
                        }
                    };
                    this.options = i(c, I[this.coll], d), r(this, "afterSetOptions", {
                        userOptions: d
                    })
                }
                defaultLabelFormatter() {
                    let d = this.axis,
                        {
                            numberFormatter: c
                        } = this.chart,
                        S = e(this.value) ? this.value : NaN,
                        B = d.chart.time,
                        s = d.categories,
                        g = this.dateTimeLabelFormat,
                        f = I.lang,
                        C = f.numericSymbols,
                        A = f.numericSymbolMagnitude || 1e3,
                        N = d.logarithmic ? Math.abs(S) : d.tickInterval,
                        U = C && C.length,
                        q, K;
                    if (s) K = `${this.value}`;
                    else if (g) K = B.dateFormat(g, S);
                    else if (U && C && N >= 1e3)
                        for (; U-- && K === void 0;) N >= (q = Math.pow(A, U + 1)) && 10 * S % q == 0 && C[U] !== null && S !== 0 && (K = c(S / q, -1) + C[U]);
                    return K === void 0 && (K = Math.abs(S) >= 1e4 ? c(S, -1) : c(S, -1, void 0, "")), K
                }
                getSeriesExtremes() {
                    let d, c = this;
                    r(this, "getSeriesExtremes", null, function() {
                        c.hasVisibleSeries = !1, c.dataMin = c.dataMax = c.threshold = void 0, c.softThreshold = !c.isXAxis, c.series.forEach(S => {
                            if (S.reserveSpace()) {
                                let B = S.options,
                                    s, g = B.threshold,
                                    f, C;
                                if (c.hasVisibleSeries = !0, c.positiveValuesOnly && 0 >= (g || 0) && (g = void 0), c.isXAxis)(s = S.xData) && s.length && (s = c.logarithmic ? s.filter(A => A > 0) : s, f = (d = S.getXExtremes(s)).min, C = d.max, e(f) || f instanceof Date || (s = s.filter(e), f = (d = S.getXExtremes(s)).min, C = d.max), s.length && (c.dataMin = Math.min(b(c.dataMin, f), f), c.dataMax = Math.max(b(c.dataMax, C), C)));
                                else {
                                    let A = S.applyExtremes();
                                    e(A.dataMin) && (f = A.dataMin, c.dataMin = Math.min(b(c.dataMin, f), f)), e(A.dataMax) && (C = A.dataMax, c.dataMax = Math.max(b(c.dataMax, C), C)), h(g) && (c.threshold = g), (!B.softThreshold || c.positiveValuesOnly) && (c.softThreshold = !1)
                                }
                            }
                        })
                    }), r(this, "afterGetSeriesExtremes")
                }
                translate(d, c, S, B, s, g) {
                    var lt;
                    let f = this.linkedParent || this,
                        C = B && f.old ? f.old.min : f.min;
                    if (!e(C)) return NaN;
                    let A = f.minPixelPadding,
                        N = (f.isOrdinal || ((lt = f.brokenAxis) == null ? void 0 : lt.hasBreaks) || f.logarithmic && s) && f.lin2val,
                        U = 1,
                        q = 0,
                        K = B && f.old ? f.old.transA : f.transA,
                        at = 0;
                    return K || (K = f.transA), S && (U *= -1, q = f.len), f.reversed && (U *= -1, q -= U * (f.sector || f.len)), c ? (at = (d = d * U + q - A) / K + C, N && (at = f.lin2val(at))) : (N && (d = f.val2lin(d)), at = U * (d - C) * K + q + U * A + (e(g) ? K * g : 0), f.isRadial || (at = m(at))), at
                }
                toPixels(d, c) {
                    return this.translate(d, !1, !this.horiz, void 0, !0) + (c ? 0 : this.pos)
                }
                toValue(d, c) {
                    return this.translate(d - (c ? 0 : this.pos), !0, !this.horiz, void 0, !0)
                }
                getPlotLinePath(d) {
                    let c = this,
                        S = c.chart,
                        B = c.left,
                        s = c.top,
                        g = d.old,
                        f = d.value,
                        C = d.lineWidth,
                        A = g && S.oldChartHeight || S.chartHeight,
                        N = g && S.oldChartWidth || S.chartWidth,
                        U = c.transB,
                        q = d.translatedValue,
                        K = d.force,
                        at, lt, R, E, F;

                    function $(rt, tt, nt) {
                        return K !== "pass" && (rt < tt || rt > nt) && (K ? rt = u(rt, tt, nt) : F = !0), rt
                    }
                    let Q = {
                        value: f,
                        lineWidth: C,
                        old: g,
                        force: K,
                        acrossPanes: d.acrossPanes,
                        translatedValue: q
                    };
                    return r(this, "getPlotLinePath", Q, function(rt) {
                        at = R = (q = u(q = b(q, c.translate(f, void 0, void 0, g)), -1e5, 1e5)) + U, lt = E = A - q - U, e(q) ? c.horiz ? (lt = s, E = A - c.bottom + (S.scrollablePixelsY || 0), at = R = $(at, B, B + c.width)) : (at = B, R = N - c.right + (S.scrollablePixelsX || 0), lt = E = $(lt, s, s + c.height)) : (F = !0, K = !1), rt.path = F && !K ? void 0 : S.renderer.crispLine([
                            ["M", at, lt],
                            ["L", R, E]
                        ], C || 1)
                    }), Q.path
                }
                getLinearTickPositions(d, c, S) {
                    let B, s, g, f = m(Math.floor(c / d) * d),
                        C = m(Math.ceil(S / d) * d),
                        A = [];
                    if (m(f + d) === f && (g = 20), this.single) return [c];
                    for (B = f; B <= C && (A.push(B), (B = m(B + d, g)) !== s);) s = B;
                    return A
                }
                getMinorTickInterval() {
                    let {
                        minorTicks: d,
                        minorTickInterval: c
                    } = this.options;
                    return d === !0 ? b(c, "auto") : d !== !1 ? c : void 0
                }
                getMinorTickPositions() {
                    let d = this.options,
                        c = this.tickPositions,
                        S = this.minorTickInterval,
                        B = this.pointRangePadding || 0,
                        s = (this.min || 0) - B,
                        g = (this.max || 0) + B,
                        f = g - s,
                        C = [],
                        A;
                    if (f && f / S < this.len / 3) {
                        let N = this.logarithmic;
                        if (N) this.paddedTicks.forEach(function(U, q, K) {
                            q && C.push.apply(C, N.getLogTickPositions(S, K[q - 1], K[q], !0))
                        });
                        else if (this.dateTime && this.getMinorTickInterval() === "auto") C = C.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(S), s, g, d.startOfWeek));
                        else
                            for (A = s + (c[0] - s) % S; A <= g && A !== C[0]; A += S) C.push(A)
                    }
                    return C.length !== 0 && this.trimTicks(C), C
                }
                adjustForMinRange() {
                    let d = this.options,
                        c = this.logarithmic,
                        {
                            max: S,
                            min: B,
                            minRange: s
                        } = this,
                        g, f, C, A;
                    this.isXAxis && s === void 0 && !c && (s = h(d.min) || h(d.max) || h(d.floor) || h(d.ceiling) ? null : Math.min(5 * (p(this.series.map(N => {
                        var U;
                        return (N.xIncrement ? (U = N.xData) == null ? void 0 : U.slice(0, 2) : N.xData) || []
                    })) || 0), this.dataMax - this.dataMin)), e(S) && e(B) && e(s) && S - B < s && (f = this.dataMax - this.dataMin >= s, g = (s - S + B) / 2, C = [B - g, b(d.min, B - g)], f && (C[2] = c ? c.log2lin(this.dataMin) : this.dataMin), A = [(B = v(C)) + s, b(d.max, B + s)], f && (A[2] = c ? c.log2lin(this.dataMax) : this.dataMax), (S = M(A)) - B < s && (C[0] = S - s, C[1] = b(d.min, S - s), B = v(C))), this.minRange = s, this.min = B, this.max = S
                }
                getClosest() {
                    let d, c;
                    if (this.categories) c = 1;
                    else {
                        let S = [];
                        this.series.forEach(function(B) {
                            var g;
                            let s = B.closestPointRange;
                            ((g = B.xData) == null ? void 0 : g.length) === 1 ? S.push(B.xData[0]) : !B.noSharedTooltip && h(s) && B.reserveSpace() && (c = h(c) ? Math.min(c, s) : s)
                        }), S.length && (S.sort((B, s) => B - s), d = p([S]))
                    }
                    return d && c ? Math.min(d, c) : d || c
                }
                nameToX(d) {
                    let c = t(this.options.categories),
                        S = c ? this.categories : this.names,
                        B = d.options.x,
                        s;
                    return d.series.requireSorting = !1, h(B) || (B = this.options.uniqueNames && S ? c ? S.indexOf(d.name) : b(S.keys[d.name], -1) : d.series.autoIncrement()), B === -1 ? !c && S && (s = S.length) : s = B, s !== void 0 ? (this.names[s] = d.name, this.names.keys[d.name] = s) : d.x && (s = d.x), s
                }
                updateNames() {
                    let d = this,
                        c = this.names;
                    c.length > 0 && (Object.keys(c.keys).forEach(function(S) {
                        delete c.keys[S]
                    }), c.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(S => {
                        S.xIncrement = null, (!S.points || S.isDirtyData) && (d.max = Math.max(d.max, S.xData.length - 1), S.processData(), S.generatePoints()), S.data.forEach(function(B, s) {
                            let g;
                            B != null && B.options && B.name !== void 0 && (g = d.nameToX(B)) !== void 0 && g !== B.x && (B.x = g, S.xData[s] = g)
                        })
                    }))
                }
                setAxisTranslation() {
                    let d = this,
                        c = d.max - d.min,
                        S = d.linkedParent,
                        B = !!d.categories,
                        s = d.isXAxis,
                        g = d.axisPointRange || 0,
                        f, C = 0,
                        A = 0,
                        N, U = d.transA;
                    (s || B || g) && (f = d.getClosest(), S ? (C = S.minPointOffset, A = S.pointRangePadding) : d.series.forEach(function(q) {
                        let K = B ? 1 : s ? b(q.options.pointRange, f, 0) : d.axisPointRange || 0,
                            at = q.options.pointPlacement;
                        if (g = Math.max(g, K), !d.single || B) {
                            let lt = q.is("xrange") ? !s : s;
                            C = Math.max(C, lt && o(at) ? 0 : K / 2), A = Math.max(A, lt && at === "on" ? 0 : K)
                        }
                    }), N = d.ordinal && d.ordinal.slope && f ? d.ordinal.slope / f : 1, d.minPointOffset = C *= N, d.pointRangePadding = A *= N, d.pointRange = Math.min(g, d.single && B ? 1 : c), s && f && (d.closestPointRange = f)), d.translationSlope = d.transA = U = d.staticScale || d.len / (c + A || 1), d.transB = d.horiz ? d.left : d.bottom, d.minPixelPadding = U * C, r(this, "afterSetAxisTranslation")
                }
                minFromRange() {
                    let {
                        max: d,
                        min: c
                    } = this;
                    return e(d) && e(c) && d - c || void 0
                }
                setTickInterval(d) {
                    var yt, xt, kt, St;
                    let {
                        categories: c,
                        chart: S,
                        dataMax: B,
                        dataMin: s,
                        dateTime: g,
                        isXAxis: f,
                        logarithmic: C,
                        options: A,
                        softThreshold: N
                    } = this, U = e(this.threshold) ? this.threshold : void 0, q = this.minRange || 0, {
                        ceiling: K,
                        floor: at,
                        linkedTo: lt,
                        softMax: R,
                        softMin: E
                    } = A, F = e(lt) && ((yt = S[this.coll]) == null ? void 0 : yt[lt]), $ = A.tickPixelInterval, Q = A.maxPadding, rt = A.minPadding, tt = 0, nt, dt = e(A.tickInterval) && A.tickInterval >= 0 ? A.tickInterval : void 0, pt, ut, ft, mt;
                    if (g || c || F || this.getTickAmount(), ft = b(this.userMin, A.min), mt = b(this.userMax, A.max), F ? (this.linkedParent = F, nt = F.getExtremes(), this.min = b(nt.min, nt.dataMin), this.max = b(nt.max, nt.dataMax), A.type !== F.options.type && L(11, !0, S)) : (N && h(U) && e(B) && e(s) && (s >= U ? (pt = U, rt = 0) : B <= U && (ut = U, Q = 0)), this.min = b(ft, pt, s), this.max = b(mt, ut, B)), e(this.max) && e(this.min) && (C && (this.positiveValuesOnly && !d && 0 >= Math.min(this.min, b(s, this.min)) && L(10, !0, S), this.min = m(C.log2lin(this.min), 16), this.max = m(C.log2lin(this.max), 16)), this.range && e(s) && (this.userMin = this.min = ft = Math.max(s, this.minFromRange() || 0), this.userMax = mt = this.max, this.range = void 0)), r(this, "foundExtremes"), this.adjustForMinRange(), e(this.min) && e(this.max)) {
                        if (!e(this.userMin) && e(E) && E < this.min && (this.min = ft = E), !e(this.userMax) && e(R) && R > this.max && (this.max = mt = R), c || this.axisPointRange || (xt = this.stacking) != null && xt.usePercentage || F || !(tt = this.max - this.min) || (!h(ft) && rt && (this.min -= tt * rt), h(mt) || !Q || (this.max += tt * Q)), !e(this.userMin) && e(at) && (this.min = Math.max(this.min, at)), !e(this.userMax) && e(K) && (this.max = Math.min(this.max, K)), N && e(s) && e(B)) {
                            let Mt = U || 0;
                            !h(ft) && this.min < Mt && s >= Mt ? this.min = A.minRange ? Math.min(Mt, this.max - q) : Mt : !h(mt) && this.max > Mt && B <= Mt && (this.max = A.minRange ? Math.max(Mt, this.min + q) : Mt)
                        }!S.polar && this.min > this.max && (h(A.min) ? this.max = this.min : h(A.max) && (this.min = this.max)), tt = this.max - this.min
                    }
                    if (this.min !== this.max && e(this.min) && e(this.max) ? F && !dt && $ === F.options.tickPixelInterval ? this.tickInterval = dt = F.tickInterval : this.tickInterval = b(dt, this.tickAmount ? tt / Math.max(this.tickAmount - 1, 1) : void 0, c ? 1 : tt * $ / Math.max(this.len, $)) : this.tickInterval = 1, f && !d) {
                        let Mt = this.min !== ((kt = this.old) == null ? void 0 : kt.min) || this.max !== ((St = this.old) == null ? void 0 : St.max);
                        this.series.forEach(function(Tt) {
                            var At;
                            Tt.forceCrop = (At = Tt.forceCropping) == null ? void 0 : At.call(Tt), Tt.processData(Mt)
                        }), r(this, "postProcessData", {
                            hasExtremesChanged: Mt
                        })
                    }
                    this.setAxisTranslation(), r(this, "initialAxisTranslation"), this.pointRange && !dt && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
                    let bt = b(A.minTickInterval, g && !this.series.some(Mt => Mt.noSharedTooltip) ? this.closestPointRange : 0);
                    !dt && this.tickInterval < bt && (this.tickInterval = bt), g || C || dt || (this.tickInterval = G(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions()
                }
                setTickPositions() {
                    var N, U;
                    let d = this.options,
                        c = d.tickPositions,
                        S = d.tickPositioner,
                        B = this.getMinorTickInterval(),
                        s = !this.isPanning,
                        g = s && d.startOnTick,
                        f = s && d.endOnTick,
                        C = [],
                        A;
                    if (this.tickmarkOffset = this.categories && d.tickmarkPlacement === "between" && this.tickInterval === 1 ? .5 : 0, this.minorTickInterval = B === "auto" && this.tickInterval ? this.tickInterval / d.minorTicksPerMajor : B, this.single = this.min === this.max && h(this.min) && !this.tickAmount && (this.min % 1 == 0 || d.allowDecimals !== !1), c) C = c.slice();
                    else if (e(this.min) && e(this.max)) {
                        if (!((N = this.ordinal) != null && N.positions) && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) C = [this.min, this.max], L(19, !1, this.chart);
                        else if (this.dateTime) C = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, d.units), this.min, this.max, d.startOfWeek, (U = this.ordinal) == null ? void 0 : U.positions, this.closestPointRange, !0);
                        else if (this.logarithmic) C = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
                        else {
                            let q = this.tickInterval,
                                K = q;
                            for (; K <= 2 * q && (C = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && C.length > this.tickAmount);) this.tickInterval = G(this, K *= 1.1)
                        }
                        C.length > this.len && (C = [C[0], C[C.length - 1]])[0] === C[1] && (C.length = 1), S && (this.tickPositions = C, (A = S.apply(this, [this.min, this.max])) && (C = A))
                    }
                    this.tickPositions = C, this.paddedTicks = C.slice(0), this.trimTicks(C, g, f), !this.isLinked && e(this.min) && e(this.max) && (this.single && C.length < 2 && !this.categories && !this.series.some(q => q.is("heatmap") && q.options.pointPlacement === "between") && (this.min -= .5, this.max += .5), c || A || this.adjustTickAmount()), r(this, "afterSetTickPositions")
                }
                trimTicks(d, c, S) {
                    let B = d[0],
                        s = d[d.length - 1],
                        g = !this.isOrdinal && this.minPointOffset || 0;
                    if (r(this, "trimTicks"), !this.isLinked) {
                        if (c && B !== -1 / 0) this.min = B;
                        else
                            for (; this.min - g > d[0];) d.shift();
                        if (S) this.max = s;
                        else
                            for (; this.max + g < d[d.length - 1];) d.pop();
                        d.length === 0 && h(B) && !this.options.tickPositions && d.push((s + B) / 2)
                    }
                }
                alignToOthers() {
                    let d, c = this,
                        S = c.chart,
                        B = [this],
                        s = c.options,
                        g = S.options.chart,
                        f = this.coll === "yAxis" && g.alignThresholds,
                        C = [];
                    if (c.thresholdAlignment = void 0, (g.alignTicks !== !1 && s.alignTicks || f) && s.startOnTick !== !1 && s.endOnTick !== !1 && !c.logarithmic) {
                        let A = U => {
                                let {
                                    horiz: q,
                                    options: K
                                } = U;
                                return [q ? K.left : K.top, K.width, K.height, K.pane].join(",")
                            },
                            N = A(this);
                        S[this.coll].forEach(function(U) {
                            let {
                                series: q
                            } = U;
                            q.length && q.some(K => K.visible) && U !== c && A(U) === N && (d = !0, B.push(U))
                        })
                    }
                    if (d && f) {
                        B.forEach(N => {
                            let U = N.getThresholdAlignment(c);
                            e(U) && C.push(U)
                        });
                        let A = C.length > 1 ? C.reduce((N, U) => N += U, 0) / C.length : void 0;
                        B.forEach(N => {
                            N.thresholdAlignment = A
                        })
                    }
                    return d
                }
                getThresholdAlignment(d) {
                    if ((!e(this.dataMin) || this !== d && this.series.some(c => c.isDirty || c.isDirtyData)) && this.getSeriesExtremes(), e(this.threshold)) {
                        let c = u((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
                        return this.options.reversed && (c = 1 - c), c
                    }
                }
                getTickAmount() {
                    let d = this.options,
                        c = d.tickPixelInterval,
                        S = d.tickAmount;
                    h(d.tickInterval) || S || !(this.len < c) || this.isRadial || this.logarithmic || !d.startOnTick || !d.endOnTick || (S = 2), !S && this.alignToOthers() && (S = Math.ceil(this.len / c) + 1), S < 4 && (this.finalTickAmt = S, S = 5), this.tickAmount = S
                }
                adjustTickAmount() {
                    let d = this,
                        {
                            finalTickAmt: c,
                            max: S,
                            min: B,
                            options: s,
                            tickPositions: g,
                            tickAmount: f,
                            thresholdAlignment: C
                        } = d,
                        A = g == null ? void 0 : g.length,
                        N = b(d.threshold, d.softThreshold ? 0 : null),
                        U, q, K = d.tickInterval,
                        at, lt = () => g.push(m(g[g.length - 1] + K)),
                        R = () => g.unshift(m(g[0] - K));
                    if (e(C) && (at = C < .5 ? Math.ceil(C * (f - 1)) : Math.floor(C * (f - 1)), s.reversed && (at = f - 1 - at)), d.hasData() && e(B) && e(S)) {
                        let E = () => {
                            d.transA *= (A - 1) / (f - 1), d.min = s.startOnTick ? g[0] : Math.min(B, g[0]), d.max = s.endOnTick ? g[g.length - 1] : Math.max(S, g[g.length - 1])
                        };
                        if (e(at) && e(d.threshold)) {
                            for (; g[at] !== N || g.length !== f || g[0] > B || g[g.length - 1] < S;) {
                                for (g.length = 0, g.push(d.threshold); g.length < f;) g[at] === void 0 || g[at] > d.threshold ? R() : lt();
                                if (K > 8 * d.tickInterval) break;
                                K *= 2
                            }
                            E()
                        } else if (A < f) {
                            for (; g.length < f;) g.length % 2 || B === N ? lt() : R();
                            E()
                        }
                        if (h(c)) {
                            for (q = U = g.length; q--;)(c === 3 && q % 2 == 1 || c <= 2 && q > 0 && q < U - 1) && g.splice(q, 1);
                            d.finalTickAmt = void 0
                        }
                    }
                }
                setScale() {
                    var g, f;
                    let {
                        coll: d,
                        stacking: c
                    } = this, S = !1, B = !1;
                    this.series.forEach(C => {
                        S = S || C.isDirtyData || C.isDirty, B = B || C.xAxis && C.xAxis.isDirty || !1
                    }), this.setAxisSize();
                    let s = this.len !== (this.old && this.old.len);
                    s || S || B || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (c && d === "yAxis" && c.buildStacks(), this.forceRedraw = !1, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), c && d === "xAxis" && c.buildStacks(), this.isDirty || (this.isDirty = s || this.min !== ((g = this.old) == null ? void 0 : g.min) || this.max !== ((f = this.old) == null ? void 0 : f.max))) : c && c.cleanStacks(), S && delete this.allExtremes, r(this, "afterSetScale")
                }
                setExtremes(d, c, S = !0, B, s) {
                    this.series.forEach(g => {
                        delete g.kdTree
                    }), r(this, "setExtremes", s = k(s, {
                        min: d,
                        max: c
                    }), g => {
                        this.userMin = g.min, this.userMax = g.max, this.eventArgs = g, S && this.chart.redraw(B)
                    })
                }
                setAxisSize() {
                    let d = this.chart,
                        c = this.options,
                        S = c.offsets || [0, 0, 0, 0],
                        B = this.horiz,
                        s = this.width = Math.round(O(b(c.width, d.plotWidth - S[3] + S[1]), d.plotWidth)),
                        g = this.height = Math.round(O(b(c.height, d.plotHeight - S[0] + S[2]), d.plotHeight)),
                        f = this.top = Math.round(O(b(c.top, d.plotTop + S[0]), d.plotHeight, d.plotTop)),
                        C = this.left = Math.round(O(b(c.left, d.plotLeft + S[3]), d.plotWidth, d.plotLeft));
                    this.bottom = d.chartHeight - g - f, this.right = d.chartWidth - s - C, this.len = Math.max(B ? s : g, 0), this.pos = B ? C : f
                }
                getExtremes() {
                    let d = this.logarithmic;
                    return {
                        min: d ? m(d.lin2log(this.min)) : this.min,
                        max: d ? m(d.lin2log(this.max)) : this.max,
                        dataMin: this.dataMin,
                        dataMax: this.dataMax,
                        userMin: this.userMin,
                        userMax: this.userMax
                    }
                }
                getThreshold(d) {
                    let c = this.logarithmic,
                        S = c ? c.lin2log(this.min) : this.min,
                        B = c ? c.lin2log(this.max) : this.max;
                    return d === null || d === -1 / 0 ? d = S : d === 1 / 0 ? d = B : S > d ? d = S : B < d && (d = B), this.translate(d, 0, 1, 0, 1)
                }
                autoLabelAlign(d) {
                    let c = (b(d, 0) - 90 * this.side + 720) % 360,
                        S = {
                            align: "center"
                        };
                    return r(this, "autoLabelAlign", S, function(B) {
                        c > 15 && c < 165 ? B.align = "right" : c > 195 && c < 345 && (B.align = "left")
                    }), S.align
                }
                tickSize(d) {
                    let c = this.options,
                        S = b(c[d === "tick" ? "tickWidth" : "minorTickWidth"], d === "tick" && this.isXAxis && !this.categories ? 1 : 0),
                        B = c[d === "tick" ? "tickLength" : "minorTickLength"],
                        s;
                    S && B && (c[d + "Position"] === "inside" && (B = -B), s = [B, S]);
                    let g = {
                        tickSize: s
                    };
                    return r(this, "afterTickSize", g), g.tickSize
                }
                labelMetrics() {
                    let d = this.chart.renderer,
                        c = this.ticks,
                        S = c[Object.keys(c)[0]] || {};
                    return this.chart.renderer.fontMetrics(S.label || S.movedLabel || d.box)
                }
                unsquish() {
                    let d = this.options.labels,
                        c = d.padding || 0,
                        S = this.horiz,
                        B = this.tickInterval,
                        s = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / B),
                        g = d.rotation,
                        f = m(.8 * this.labelMetrics().h),
                        C = Math.max(this.max - this.min, 0),
                        A = function(at) {
                            let lt = (at + 2 * c) / (s || 1);
                            return (lt = lt > 1 ? Math.ceil(lt) : 1) * B > C && at !== 1 / 0 && s !== 1 / 0 && C && (lt = Math.ceil(C / B)), m(lt * B)
                        },
                        N = B,
                        U, q = Number.MAX_VALUE,
                        K;
                    if (S) {
                        if (!d.staggerLines && (e(g) ? K = [g] : s < d.autoRotationLimit && (K = d.autoRotation)), K) {
                            let at, lt;
                            for (let R of K)(R === g || R && R >= -90 && R <= 90) && (lt = (at = A(Math.abs(f / Math.sin(T * R)))) + Math.abs(R / 360)) < q && (q = lt, U = R, N = at)
                        }
                    } else N = A(.75 * f);
                    return this.autoRotation = K, this.labelRotation = b(U, e(g) ? g : 0), d.step ? B : N
                }
                getSlotWidth(d) {
                    let c = this.chart,
                        S = this.horiz,
                        B = this.options.labels,
                        s = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                        g = c.margin[3];
                    if (d && e(d.slotWidth)) return d.slotWidth;
                    if (S && B.step < 2) return B.rotation ? 0 : (this.staggerLines || 1) * this.len / s;
                    if (!S) {
                        let f = B.style.width;
                        if (f !== void 0) return parseInt(String(f), 10);
                        if (g) return g - c.spacing[3]
                    }
                    return .33 * c.chartWidth
                }
                renderUnsquish() {
                    let d = this.chart,
                        c = d.renderer,
                        S = this.tickPositions,
                        B = this.ticks,
                        s = this.options.labels,
                        g = s.style,
                        f = this.horiz,
                        C = this.getSlotWidth(),
                        A = Math.max(1, Math.round(C - (f ? 2 * (s.padding || 0) : s.distance || 0))),
                        N = {},
                        U = this.labelMetrics(),
                        q = g.textOverflow,
                        K, at, lt = 0,
                        R, E;
                    if (o(s.rotation) || (N.rotation = s.rotation || 0), S.forEach(function(F) {
                            let $ = B[F];
                            $.movedLabel && $.replaceMovedLabel(), $ && $.label && $.label.textPxLength > lt && (lt = $.label.textPxLength)
                        }), this.maxLabelLength = lt, this.autoRotation) lt > A && lt > U.h ? N.rotation = this.labelRotation : this.labelRotation = 0;
                    else if (C && (K = A, !q))
                        for (at = "clip", E = S.length; !f && E--;)(R = B[S[E]].label) && (R.styles.textOverflow === "ellipsis" ? R.css({
                            textOverflow: "clip"
                        }) : R.textPxLength > C && R.css({
                            width: C + "px"
                        }), R.getBBox().height > this.len / S.length - (U.h - U.f) && (R.specificTextOverflow = "ellipsis"));
                    N.rotation && (K = lt > .5 * d.chartHeight ? .33 * d.chartHeight : lt, q || (at = "ellipsis")), this.labelAlign = s.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (N.align = this.labelAlign), S.forEach(function(F) {
                        let $ = B[F],
                            Q = $ && $.label,
                            rt = g.width,
                            tt = {};
                        Q && (Q.attr(N), $.shortenLabel ? $.shortenLabel() : K && !rt && g.whiteSpace !== "nowrap" && (K < Q.textPxLength || Q.element.tagName === "SPAN") ? (tt.width = K + "px", q || (tt.textOverflow = Q.specificTextOverflow || at), Q.css(tt)) : !Q.styles.width || tt.width || rt || Q.css({
                            width: null
                        }), delete Q.specificTextOverflow, $.rotation = N.rotation)
                    }, this), this.tickRotCorr = c.rotCorr(U.b, this.labelRotation || 0, this.side !== 0)
                }
                hasData() {
                    return this.series.some(function(d) {
                        return d.hasData()
                    }) || this.options.showEmpty && h(this.min) && h(this.max)
                }
                addTitle(d) {
                    let c, S = this.chart.renderer,
                        B = this.horiz,
                        s = this.opposite,
                        g = this.options.title,
                        f = this.chart.styledMode;
                    this.axisTitle || ((c = g.textAlign) || (c = (B ? {
                        low: "left",
                        middle: "center",
                        high: "right"
                    } : {
                        low: s ? "right" : "left",
                        middle: "center",
                        high: s ? "left" : "right"
                    })[g.align]), this.axisTitle = S.text(g.text || "", 0, 0, g.useHTML).attr({
                        zIndex: 7,
                        rotation: g.rotation || 0,
                        align: c
                    }).addClass("highcharts-axis-title"), f || this.axisTitle.css(i(g.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), f || g.style.width || this.isRadial || this.axisTitle.css({
                        width: this.len + "px"
                    }), this.axisTitle[d ? "show" : "hide"](d)
                }
                generateTick(d) {
                    let c = this.ticks;
                    c[d] ? c[d].addLabel() : c[d] = new et(this, d)
                }
                createGroups() {
                    let {
                        axisParent: d,
                        chart: c,
                        coll: S,
                        options: B
                    } = this, s = c.renderer, g = (f, C, A) => s.g(f).attr({
                        zIndex: A
                    }).addClass(`highcharts-${S.toLowerCase()}${C} ` + (this.isRadial ? `highcharts-radial-axis${C} ` : "") + (B.className || "")).add(d);
                    this.axisGroup || (this.gridGroup = g("grid", "-grid", B.gridZIndex), this.axisGroup = g("axis", "", B.zIndex), this.labelGroup = g("axis-labels", "-labels", B.labels.zIndex))
                }
                getOffset() {
                    let d = this,
                        {
                            chart: c,
                            horiz: S,
                            options: B,
                            side: s,
                            ticks: g,
                            tickPositions: f,
                            coll: C
                        } = d,
                        A = c.inverted && !d.isZAxis ? [1, 0, 3, 2][s] : s,
                        N = d.hasData(),
                        U = B.title,
                        q = B.labels,
                        K = e(B.crossing),
                        at = c.axisOffset,
                        lt = c.clipOffset,
                        R = [-1, 1, 1, -1][s],
                        E, F = 0,
                        $, Q = 0,
                        rt = 0,
                        tt, nt;
                    if (d.showAxis = E = N || B.showEmpty, d.staggerLines = d.horiz && q.staggerLines || void 0, d.createGroups(), N || d.isLinked ? (f.forEach(function(dt) {
                            d.generateTick(dt)
                        }), d.renderUnsquish(), d.reserveSpaceDefault = s === 0 || s === 2 || {
                            1: "left",
                            3: "right"
                        }[s] === d.labelAlign, b(q.reserveSpace, !K && null, d.labelAlign === "center" || null, d.reserveSpaceDefault) && f.forEach(function(dt) {
                            rt = Math.max(g[dt].getLabelSize(), rt)
                        }), d.staggerLines && (rt *= d.staggerLines), d.labelOffset = rt * (d.opposite ? -1 : 1)) : a(g, function(dt, pt) {
                            dt.destroy(), delete g[pt]
                        }), U != null && U.text && U.enabled !== !1 && (d.addTitle(E), E && !K && U.reserveSpace !== !1 && (d.titleOffset = F = d.axisTitle.getBBox()[S ? "height" : "width"], Q = h($ = U.offset) ? 0 : b(U.margin, S ? 5 : 10))), d.renderLine(), d.offset = R * b(B.offset, at[s] ? at[s] + (B.margin || 0) : 0), d.tickRotCorr = d.tickRotCorr || {
                            x: 0,
                            y: 0
                        }, nt = s === 0 ? -d.labelMetrics().h : s === 2 ? d.tickRotCorr.y : 0, tt = Math.abs(rt) + Q, rt && (tt -= nt, tt += R * (S ? b(q.y, d.tickRotCorr.y + R * q.distance) : b(q.x, R * q.distance))), d.axisTitleMargin = b($, tt), d.getMaxLabelDimensions && (d.maxLabelDimensions = d.getMaxLabelDimensions(g, f)), C !== "colorAxis" && lt) {
                        let dt = this.tickSize("tick");
                        at[s] = Math.max(at[s], (d.axisTitleMargin || 0) + F + R * d.offset, tt, f && f.length && dt ? dt[0] + R * d.offset : 0);
                        let pt = !d.axisLine || B.offset ? 0 : d.axisLine.strokeWidth() / 2;
                        lt[A] = Math.max(lt[A], pt)
                    }
                    r(this, "afterGetOffset")
                }
                getLinePath(d) {
                    let c = this.chart,
                        S = this.opposite,
                        B = this.offset,
                        s = this.horiz,
                        g = this.left + (S ? this.width : 0) + B,
                        f = c.chartHeight - this.bottom - (S ? this.height : 0) + B;
                    return S && (d *= -1), c.renderer.crispLine([
                        ["M", s ? this.left : g, s ? f : this.top],
                        ["L", s ? c.chartWidth - this.right : g, s ? f : c.chartHeight - this.bottom]
                    ], d)
                }
                renderLine() {
                    this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
                        stroke: this.options.lineColor,
                        "stroke-width": this.options.lineWidth,
                        zIndex: 7
                    }))
                }
                getTitlePosition(d) {
                    let c = this.horiz,
                        S = this.left,
                        B = this.top,
                        s = this.len,
                        g = this.options.title,
                        f = c ? S : B,
                        C = this.opposite,
                        A = this.offset,
                        N = g.x,
                        U = g.y,
                        q = this.chart.renderer.fontMetrics(d),
                        K = d ? Math.max(d.getBBox(!1, 0).height - q.h - 1, 0) : 0,
                        at = {
                            low: f + (c ? 0 : s),
                            middle: f + s / 2,
                            high: f + (c ? s : 0)
                        }[g.align],
                        lt = (c ? B + this.height : S) + (c ? 1 : -1) * (C ? -1 : 1) * (this.axisTitleMargin || 0) + [-K, K, q.f, -K][this.side],
                        R = {
                            x: c ? at + N : lt + (C ? this.width : 0) + A + N,
                            y: c ? lt + U - (C ? this.height : 0) + A : at + U
                        };
                    return r(this, "afterGetTitlePosition", {
                        titlePosition: R
                    }), R
                }
                renderMinorTick(d, c) {
                    let S = this.minorTicks;
                    S[d] || (S[d] = new et(this, d, "minor")), c && S[d].isNew && S[d].render(null, !0), S[d].render(null, !1, 1)
                }
                renderTick(d, c, S) {
                    let B = this.isLinked,
                        s = this.ticks;
                    (!B || d >= this.min && d <= this.max || this.grid && this.grid.isColumn) && (s[d] || (s[d] = new et(this, d)), S && s[d].isNew && s[d].render(c, !0, -1), s[d].render(c))
                }
                render() {
                    let d, c, S = this,
                        B = S.chart,
                        s = S.logarithmic,
                        g = B.renderer,
                        f = S.options,
                        C = S.isLinked,
                        A = S.tickPositions,
                        N = S.axisTitle,
                        U = S.ticks,
                        q = S.minorTicks,
                        K = S.alternateBands,
                        at = f.stackLabels,
                        lt = f.alternateGridColor,
                        R = f.crossing,
                        E = S.tickmarkOffset,
                        F = S.axisLine,
                        $ = S.showAxis,
                        Q = z(g.globalAnimation);
                    if (S.labelEdge.length = 0, S.overlap = !1, [U, q, K].forEach(function(rt) {
                            a(rt, function(tt) {
                                tt.isActive = !1
                            })
                        }), e(R)) {
                        let rt = this.isXAxis ? B.yAxis[0] : B.xAxis[0],
                            tt = [1, -1, -1, 1][this.side];
                        if (rt) {
                            let nt = rt.toPixels(R, !0);
                            S.horiz && (nt = rt.len - nt), S.offset = tt * nt
                        }
                    }
                    if (S.hasData() || C) {
                        let rt = S.chart.hasRendered && S.old && e(S.old.min);
                        S.minorTickInterval && !S.categories && S.getMinorTickPositions().forEach(function(tt) {
                            S.renderMinorTick(tt, rt)
                        }), A.length && (A.forEach(function(tt, nt) {
                            S.renderTick(tt, nt, rt)
                        }), E && (S.min === 0 || S.single) && (U[-1] || (U[-1] = new et(S, -1, null, !0)), U[-1].render(-1))), lt && A.forEach(function(tt, nt) {
                            c = A[nt + 1] !== void 0 ? A[nt + 1] + E : S.max - E, nt % 2 == 0 && tt < S.max && c <= S.max + (B.polar ? -E : E) && (K[tt] || (K[tt] = new J.PlotLineOrBand(S, {})), d = tt + E, K[tt].options = {
                                from: s ? s.lin2log(d) : d,
                                to: s ? s.lin2log(c) : c,
                                color: lt,
                                className: "highcharts-alternate-grid"
                            }, K[tt].render(), K[tt].isActive = !0)
                        }), S._addedPlotLB || (S._addedPlotLB = !0, (f.plotLines || []).concat(f.plotBands || []).forEach(function(tt) {
                            S.addPlotBandOrLine(tt)
                        }))
                    }[U, q, K].forEach(function(rt) {
                        let tt = [],
                            nt = Q.duration;
                        a(rt, function(dt, pt) {
                            dt.isActive || (dt.render(pt, !1, 0), dt.isActive = !1, tt.push(pt))
                        }), j(function() {
                            let dt = tt.length;
                            for (; dt--;) rt[tt[dt]] && !rt[tt[dt]].isActive && (rt[tt[dt]].destroy(), delete rt[tt[dt]])
                        }, rt !== K && B.hasRendered && nt ? nt : 0)
                    }), F && (F[F.isPlaced ? "animate" : "attr"]({
                        d: this.getLinePath(F.strokeWidth())
                    }), F.isPlaced = !0, F[$ ? "show" : "hide"]($)), N && $ && (N[N.isNew ? "attr" : "animate"](S.getTitlePosition(N)), N.isNew = !1), at && at.enabled && S.stacking && S.stacking.renderStackTotals(), S.old = {
                        len: S.len,
                        max: S.max,
                        min: S.min,
                        transA: S.transA,
                        userMax: S.userMax,
                        userMin: S.userMin
                    }, S.isDirty = !1, r(this, "afterRender")
                }
                redraw() {
                    this.visible && (this.render(), this.plotLinesAndBands.forEach(function(d) {
                        d.render()
                    })), this.series.forEach(function(d) {
                        d.isDirty = !0
                    })
                }
                getKeepProps() {
                    return this.keepProps || W.keepProps
                }
                destroy(d) {
                    let c = this,
                        S = c.plotLinesAndBands,
                        B = this.eventOptions;
                    if (r(this, "destroy", {
                            keepEvents: d
                        }), d || _(c), [c.ticks, c.minorTicks, c.alternateBands].forEach(function(s) {
                            x(s)
                        }), S) {
                        let s = S.length;
                        for (; s--;) S[s].destroy()
                    }
                    for (let s in ["axisLine", "axisTitle", "axisGroup", "gridGroup", "labelGroup", "cross", "scrollbar"].forEach(function(g) {
                            c[g] && (c[g] = c[g].destroy())
                        }), c.plotLinesAndBandsGroups) c.plotLinesAndBandsGroups[s] = c.plotLinesAndBandsGroups[s].destroy();
                    a(c, function(s, g) {
                        c.getKeepProps().indexOf(g) === -1 && delete c[g]
                    }), this.eventOptions = B
                }
                drawCrosshair(d, c) {
                    let S = this.crosshair,
                        B = b(S && S.snap, !0),
                        s = this.chart,
                        g, f, C, A = this.cross,
                        N;
                    if (r(this, "drawCrosshair", {
                            e: d,
                            point: c
                        }), d || (d = this.cross && this.cross.e), S && (h(c) || !B) !== !1) {
                        if (B ? h(c) && (f = b(this.coll !== "colorAxis" ? c.crosshairPos : null, this.isXAxis ? c.plotX : this.len - c.plotY)) : f = d && (this.horiz ? d.chartX - this.pos : this.len - d.chartY + this.pos), h(f) && (N = {
                                value: c && (this.isXAxis ? c.x : b(c.stackY, c.y)),
                                translatedValue: f
                            }, s.polar && k(N, {
                                isCrosshair: !0,
                                chartX: d && d.chartX,
                                chartY: d && d.chartY,
                                point: c
                            }), g = this.getPlotLinePath(N) || null), !h(g)) {
                            this.hideCrosshair();
                            return
                        }
                        C = this.categories && !this.isRadial, A || (this.cross = A = s.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (C ? "category " : "thin ") + (S.className || "")).attr({
                            zIndex: b(S.zIndex, 2)
                        }).add(), !s.styledMode && (A.attr({
                            stroke: S.color || (C ? ot.parse("#ccd3ff").setOpacity(.25).get() : "#cccccc"),
                            "stroke-width": b(S.width, 1)
                        }).css({
                            "pointer-events": "none"
                        }), S.dashStyle && A.attr({
                            dashstyle: S.dashStyle
                        }))), A.show().attr({
                            d: g
                        }), C && !S.width && A.attr({
                            "stroke-width": this.transA
                        }), this.cross.e = d
                    } else this.hideCrosshair();
                    r(this, "afterDrawCrosshair", {
                        e: d,
                        point: c
                    })
                }
                hideCrosshair() {
                    this.cross && this.cross.hide(), r(this, "afterHideCrosshair")
                }
                update(d, c) {
                    let S = this.chart;
                    d = i(this.userOptions, d), this.destroy(!0), this.init(S, d), S.isDirtyBox = !0, b(c, !0) && S.redraw()
                }
                remove(d) {
                    let c = this.chart,
                        S = this.coll,
                        B = this.series,
                        s = B.length;
                    for (; s--;) B[s] && B[s].remove(!1);
                    X(c.axes, this), X(c[S] || [], this), c.orderItems(S), this.destroy(), c.isDirtyBox = !0, b(d, !0) && c.redraw()
                }
                setTitle(d, c) {
                    this.update({
                        title: d
                    }, c)
                }
                setCategories(d, c) {
                    this.update({
                        categories: d
                    }, c)
                }
            }
            return W.keepProps = ["coll", "extKey", "hcEvents", "len", "names", "series", "userMax", "userMin"], W
        }), ct(P, "Core/Axis/DateTimeAxis.js", [P["Core/Utilities.js"]], function(V) {
            var Z;
            let {
                addEvent: ot,
                getMagnitude: ht,
                normalizeTickInterval: st,
                timeUnits: J
            } = V;
            return function(et) {
                function Y() {
                    return this.chart.time.getTimeTicks.apply(this.chart.time, arguments)
                }

                function z() {
                    if (this.options.type !== "datetime") {
                        this.dateTime = void 0;
                        return
                    }
                    this.dateTime || (this.dateTime = new H(this))
                }
                et.compose = function(w) {
                    return w.keepProps.includes("dateTime") || (w.keepProps.push("dateTime"), w.prototype.getTimeTicks = Y, ot(w, "afterSetOptions", z)), w
                };
                class H {
                    constructor(I) {
                        this.axis = I
                    }
                    normalizeTimeTickInterval(I, D) {
                        let T = D || [
                                ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                                ["second", [1, 2, 5, 10, 15, 30]],
                                ["minute", [1, 2, 5, 10, 15, 30]],
                                ["hour", [1, 2, 3, 4, 6, 8, 12]],
                                ["day", [1, 2]],
                                ["week", [1, 2]],
                                ["month", [1, 2, 3, 4, 6]],
                                ["year", null]
                            ],
                            v = T[T.length - 1],
                            M = J[v[0]],
                            u = v[1],
                            m;
                        for (m = 0; m < T.length && (M = J[(v = T[m])[0]], u = v[1], !T[m + 1] || !(I <= (M * u[u.length - 1] + J[T[m + 1][0]]) / 2)); m++);
                        M === J.year && I < 5 * M && (u = [1, 2, 5]);
                        let h = st(I / M, u, v[0] === "year" ? Math.max(ht(I / M), 1) : 1);
                        return {
                            unitRange: M,
                            count: h,
                            unitName: v[0]
                        }
                    }
                    getXDateFormat(I, D) {
                        let {
                            axis: T
                        } = this, v = T.chart.time;
                        return T.closestPointRange ? v.getDateFormat(T.closestPointRange, I, T.options.startOfWeek, D) || v.resolveDTLFormat(D.year).main : v.resolveDTLFormat(D.day).main
                    }
                }
                et.Additions = H
            }(Z || (Z = {})), Z
        }), ct(P, "Core/Axis/LogarithmicAxis.js", [P["Core/Utilities.js"]], function(V) {
            var Z;
            let {
                addEvent: ot,
                normalizeTickInterval: ht,
                pick: st
            } = V;
            return function(J) {
                function et(H) {
                    let w = H.userOptions,
                        I = this.logarithmic;
                    w.type !== "logarithmic" ? this.logarithmic = void 0 : I || (I = this.logarithmic = new z(this))
                }

                function Y() {
                    let H = this.logarithmic;
                    H && (this.lin2val = function(w) {
                        return H.lin2log(w)
                    }, this.val2lin = function(w) {
                        return H.log2lin(w)
                    })
                }
                J.compose = function(H) {
                    return H.keepProps.includes("logarithmic") || (H.keepProps.push("logarithmic"), ot(H, "init", et), ot(H, "afterInit", Y)), H
                };
                class z {
                    constructor(w) {
                        this.axis = w
                    }
                    getLogTickPositions(w, I, D, T) {
                        let v = this.axis,
                            M = v.len,
                            u = v.options,
                            m = [];
                        if (T || (this.minorAutoInterval = void 0), w >= .5) w = Math.round(w), m = v.getLinearTickPositions(w, I, D);
                        else if (w >= .08) {
                            let h, x, X, L, k, r, p, n = Math.floor(I);
                            for (h = w > .3 ? [1, 2, 4] : w > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], x = n; x < D + 1 && !p; x++)
                                for (X = 0, L = h.length; X < L && !p; X++)(k = this.log2lin(this.lin2log(x) * h[X])) > I && (!T || r <= D) && r !== void 0 && m.push(r), r > D && (p = !0), r = k
                        } else {
                            let h = this.lin2log(I),
                                x = this.lin2log(D),
                                X = T ? v.getMinorTickInterval() : u.tickInterval,
                                L = u.tickPixelInterval / (T ? 5 : 1),
                                k = T ? M / v.tickPositions.length : M;
                            w = ht(w = st(X === "auto" ? null : X, this.minorAutoInterval, (x - h) * L / (k || 1))), m = v.getLinearTickPositions(w, h, x).map(this.log2lin), T || (this.minorAutoInterval = w / 5)
                        }
                        return T || (v.tickInterval = w), m
                    }
                    lin2log(w) {
                        return Math.pow(10, w)
                    }
                    log2lin(w) {
                        return Math.log(w) / Math.LN10
                    }
                }
                J.Additions = z
            }(Z || (Z = {})), Z
        }), ct(P, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [P["Core/Utilities.js"]], function(V) {
            var Z;
            let {
                erase: ot,
                extend: ht,
                isNumber: st
            } = V;
            return function(J) {
                let et;

                function Y(v) {
                    return this.addPlotBandOrLine(v, "plotBands")
                }

                function z(v, M) {
                    let u = this.userOptions,
                        m = new et(this, v);
                    if (this.visible && (m = m.render()), m) {
                        if (this._addedPlotLB || (this._addedPlotLB = !0, (u.plotLines || []).concat(u.plotBands || []).forEach(h => {
                                this.addPlotBandOrLine(h)
                            })), M) {
                            let h = u[M] || [];
                            h.push(v), u[M] = h
                        }
                        this.plotLinesAndBands.push(m)
                    }
                    return m
                }

                function H(v) {
                    return this.addPlotBandOrLine(v, "plotLines")
                }

                function w(v, M, u) {
                    u = u || this.options;
                    let m = this.getPlotLinePath({
                            value: M,
                            force: !0,
                            acrossPanes: u.acrossPanes
                        }),
                        h = [],
                        x = this.horiz,
                        X = !st(this.min) || !st(this.max) || v < this.min && M < this.min || v > this.max && M > this.max,
                        L = this.getPlotLinePath({
                            value: v,
                            force: !0,
                            acrossPanes: u.acrossPanes
                        }),
                        k, r = 1,
                        p;
                    if (L && m)
                        for (X && (p = L.toString() === m.toString(), r = 0), k = 0; k < L.length; k += 2) {
                            let n = L[k],
                                t = L[k + 1],
                                e = m[k],
                                o = m[k + 1];
                            (n[0] === "M" || n[0] === "L") && (t[0] === "M" || t[0] === "L") && (e[0] === "M" || e[0] === "L") && (o[0] === "M" || o[0] === "L") && (x && e[1] === n[1] ? (e[1] += r, o[1] += r) : x || e[2] !== n[2] || (e[2] += r, o[2] += r), h.push(["M", n[1], n[2]], ["L", t[1], t[2]], ["L", o[1], o[2]], ["L", e[1], e[2]], ["Z"])), h.isFlat = p
                        }
                    return h
                }

                function I(v) {
                    this.removePlotBandOrLine(v)
                }

                function D(v) {
                    let M = this.plotLinesAndBands,
                        u = this.options,
                        m = this.userOptions;
                    if (M) {
                        let h = M.length;
                        for (; h--;) M[h].id === v && M[h].destroy();
                        [u.plotLines || [], m.plotLines || [], u.plotBands || [], m.plotBands || []].forEach(function(x) {
                            for (h = x.length; h--;)(x[h] || {}).id === v && ot(x, x[h])
                        })
                    }
                }

                function T(v) {
                    this.removePlotBandOrLine(v)
                }
                J.compose = function(v, M) {
                    let u = M.prototype;
                    return u.addPlotBand || (et = v, ht(u, {
                        addPlotBand: Y,
                        addPlotLine: H,
                        addPlotBandOrLine: z,
                        getPlotBandPath: w,
                        removePlotBand: I,
                        removePlotLine: T,
                        removePlotBandOrLine: D
                    })), M
                }
            }(Z || (Z = {})), Z
        }), ct(P, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [P["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], P["Core/Utilities.js"]], function(V, Z) {
            let {
                arrayMax: ot,
                arrayMin: ht,
                defined: st,
                destroyObjectProperties: J,
                erase: et,
                fireEvent: Y,
                merge: z,
                objectEach: H,
                pick: w
            } = Z;
            class I {
                static compose(T) {
                    return V.compose(I, T)
                }
                constructor(T, v) {
                    this.axis = T, this.options = v, this.id = v.id
                }
                render() {
                    Y(this, "render");
                    let {
                        axis: T,
                        options: v
                    } = this, {
                        horiz: M,
                        logarithmic: u
                    } = T, {
                        color: m,
                        events: h,
                        zIndex: x = 0
                    } = v, X = {}, L = T.chart.renderer, k = v.to, r = v.from, p = v.value, n = v.borderWidth, t = v.label, {
                        label: e,
                        svgElem: o
                    } = this, i = [], l, a = st(r) && st(k), b = st(p), O = !o, _ = {
                        class: "highcharts-plot-" + (a ? "band " : "line ") + (v.className || "")
                    }, y = a ? "bands" : "lines";
                    if (!T.chart.styledMode && (b ? (_.stroke = m || "#999999", _["stroke-width"] = w(v.width, 1), v.dashStyle && (_.dashstyle = v.dashStyle)) : a && (_.fill = m || "#e6e9ff", n && (_.stroke = v.borderColor, _["stroke-width"] = n))), X.zIndex = x, y += "-" + x, (l = T.plotLinesAndBandsGroups[y]) || (T.plotLinesAndBandsGroups[y] = l = L.g("plot-" + y).attr(X).add()), o || (this.svgElem = o = L.path().attr(_).add(l)), st(p)) i = T.getPlotLinePath({
                        value: (u == null ? void 0 : u.log2lin(p)) ? ? p,
                        lineWidth: o.strokeWidth(),
                        acrossPanes: v.acrossPanes
                    });
                    else {
                        if (!(st(r) && st(k))) return;
                        i = T.getPlotBandPath((u == null ? void 0 : u.log2lin(r)) ? ? r, (u == null ? void 0 : u.log2lin(k)) ? ? k, v)
                    }
                    return !this.eventsAdded && h && (H(h, (j, G) => {
                        o == null || o.on(G, W => {
                            h[G].apply(this, [W])
                        })
                    }), this.eventsAdded = !0), (O || !o.d) && (i != null && i.length) ? o.attr({
                        d: i
                    }) : o && (i ? (o.show(), o.animate({
                        d: i
                    })) : o.d && (o.hide(), e && (this.label = e = e.destroy()))), t && (st(t.text) || st(t.formatter)) && (i != null && i.length) && T.width > 0 && T.height > 0 && !i.isFlat ? (t = z({
                        align: M && a ? "center" : void 0,
                        x: M ? !a && 4 : 10,
                        verticalAlign: !M && a ? "middle" : void 0,
                        y: M ? a ? 16 : 10 : a ? 6 : -4,
                        rotation: M && !a ? 90 : 0
                    }, t), this.renderLabel(t, i, a, x)) : e && e.hide(), this
                }
                renderLabel(T, v, M, u) {
                    let m = this.axis,
                        h = m.chart.renderer,
                        x = this.label;
                    x || (this.label = x = h.text(this.getLabelText(T), 0, 0, T.useHTML).attr({
                        align: T.textAlign || T.align,
                        rotation: T.rotation,
                        class: "highcharts-plot-" + (M ? "band" : "line") + "-label " + (T.className || ""),
                        zIndex: u
                    }), m.chart.styledMode || x.css(z({
                        fontSize: "0.8em",
                        textOverflow: "ellipsis"
                    }, T.style)), x.add());
                    let X = v.xBounds || [v[0][1], v[1][1], M ? v[2][1] : v[0][1]],
                        L = v.yBounds || [v[0][2], v[1][2], M ? v[2][2] : v[0][2]],
                        k = ht(X),
                        r = ht(L);
                    if (x.align(T, !1, {
                            x: k,
                            y: r,
                            width: ot(X) - k,
                            height: ot(L) - r
                        }), !x.alignValue || x.alignValue === "left") {
                        let p = T.clip ? m.width : m.chart.chartWidth;
                        x.css({
                            width: (x.rotation === 90 ? m.height - (x.alignAttr.y - m.top) : p - (x.alignAttr.x - m.left)) + "px"
                        })
                    }
                    x.show(!0)
                }
                getLabelText(T) {
                    return st(T.formatter) ? T.formatter.call(this) : T.text
                }
                destroy() {
                    et(this.axis.plotLinesAndBands, this), delete this.axis, J(this)
                }
            }
            return I
        }), ct(P, "Core/Tooltip.js", [P["Core/Animation/AnimationUtilities.js"], P["Core/Templating.js"], P["Core/Globals.js"], P["Core/Renderer/RendererUtilities.js"], P["Core/Renderer/RendererRegistry.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht, st, J) {
            var et;
            let {
                animObject: Y
            } = V, {
                format: z
            } = Z, {
                composed: H,
                doc: w,
                isSafari: I
            } = ot, {
                distribute: D
            } = ht, {
                addEvent: T,
                clamp: v,
                css: M,
                discardElement: u,
                extend: m,
                fireEvent: h,
                isArray: x,
                isNumber: X,
                isString: L,
                merge: k,
                pick: r,
                pushUnique: p,
                splat: n,
                syncTimeout: t
            } = J;
            class e {
                constructor(i, l, a) {
                    this.allowShared = !0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.options = {}, this.outside = !1, this.chart = i, this.init(i, l), this.pointer = a
                }
                bodyFormatter(i) {
                    return i.map(function(l) {
                        let a = l.series.tooltipOptions;
                        return (a[(l.point.formatPrefix || "point") + "Formatter"] || l.point.tooltipFormatter).call(l.point, a[(l.point.formatPrefix || "point") + "Format"] || "")
                    })
                }
                cleanSplit(i) {
                    this.chart.series.forEach(function(l) {
                        let a = l && l.tt;
                        a && (!a.isActive || i ? l.tt = a.destroy() : a.isActive = !1)
                    })
                }
                defaultFormatter(i) {
                    let l, a = this.points || n(this);
                    return (l = (l = [i.tooltipFooterHeaderFormatter(a[0])]).concat(i.bodyFormatter(a))).push(i.tooltipFooterHeaderFormatter(a[0], !0)), l
                }
                destroy() {
                    this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), u(this.container)), J.clearTimeout(this.hideTimer)
                }
                getAnchor(i, l) {
                    let a, {
                            chart: b,
                            pointer: O
                        } = this,
                        _ = b.inverted,
                        y = b.plotTop,
                        j = b.plotLeft;
                    if ((i = n(i))[0].series && i[0].series.yAxis && !i[0].series.yAxis.options.reversedStacks && (i = i.slice().reverse()), this.followPointer && l) l.chartX === void 0 && (l = O.normalize(l)), a = [l.chartX - j, l.chartY - y];
                    else if (i[0].tooltipPos) a = i[0].tooltipPos;
                    else {
                        let G = 0,
                            W = 0;
                        i.forEach(function(it) {
                            let d = it.pos(!0);
                            d && (G += d[0], W += d[1])
                        }), G /= i.length, W /= i.length, this.shared && i.length > 1 && l && (_ ? G = l.chartX : W = l.chartY), a = [G - j, W - y]
                    }
                    return a.map(Math.round)
                }
                getClassName(i, l, a) {
                    let b = this.options,
                        O = i.series,
                        _ = O.options;
                    return [b.className, "highcharts-label", a && "highcharts-tooltip-header", l ? "highcharts-tooltip-box" : "highcharts-tooltip", !a && "highcharts-color-" + r(i.colorIndex, O.colorIndex), _ && _.className].filter(L).join(" ")
                }
                getLabel() {
                    let i = this,
                        l = this.chart.styledMode,
                        a = this.options,
                        b = this.split && this.allowShared,
                        O = this.container,
                        _ = this.chart.renderer;
                    if (this.label) {
                        let y = !this.label.hasClass("highcharts-label");
                        (!b && y || b && !y) && this.destroy()
                    }
                    if (!this.label) {
                        if (this.outside) {
                            let y = this.chart.options.chart.style,
                                j = st.getRendererType();
                            this.container = O = ot.doc.createElement("div"), O.className = "highcharts-tooltip-container", M(O, {
                                position: "absolute",
                                top: "1px",
                                pointerEvents: "none",
                                zIndex: Math.max(this.options.style.zIndex || 0, (y && y.zIndex || 0) + 3)
                            }), this.renderer = _ = new j(O, 0, 0, y, void 0, void 0, _.styledMode)
                        }
                        if (b ? this.label = _.g("tooltip") : (this.label = _.label("", 0, 0, a.shape, void 0, void 0, a.useHTML, void 0, "tooltip").attr({
                                padding: a.padding,
                                r: a.borderRadius
                            }), l || this.label.attr({
                                fill: a.backgroundColor,
                                "stroke-width": a.borderWidth || 0
                            }).css(a.style).css({
                                pointerEvents: a.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none")
                            })), i.outside) {
                            let y = this.label;
                            [y.xSetter, y.ySetter].forEach((j, G) => {
                                y[G ? "ySetter" : "xSetter"] = W => {
                                    j.call(y, i.distance), y[G ? "y" : "x"] = W, O && (O.style[G ? "top" : "left"] = `${W}px`)
                                }
                            })
                        }
                        this.label.attr({
                            zIndex: 8
                        }).shadow(a.shadow).add()
                    }
                    return O && !O.parentElement && ot.doc.body.appendChild(O), this.label
                }
                getPlayingField() {
                    let {
                        body: i,
                        documentElement: l
                    } = w, {
                        chart: a,
                        distance: b,
                        outside: O
                    } = this;
                    return {
                        width: O ? Math.max(i.scrollWidth, l.scrollWidth, i.offsetWidth, l.offsetWidth, l.clientWidth) - 2 * b : a.chartWidth,
                        height: O ? Math.max(i.scrollHeight, l.scrollHeight, i.offsetHeight, l.offsetHeight, l.clientHeight) : a.chartHeight
                    }
                }
                getPosition(i, l, a) {
                    var Q, rt;
                    let {
                        distance: b,
                        chart: O,
                        outside: _,
                        pointer: y
                    } = this, {
                        inverted: j,
                        plotLeft: G,
                        plotTop: W,
                        polar: it
                    } = O, {
                        plotX: d = 0,
                        plotY: c = 0
                    } = a, S = {}, B = j && a.h || 0, {
                        height: s,
                        width: g
                    } = this.getPlayingField(), f = y.getChartPosition(), C = tt => tt * f.scaleX, A = tt => tt * f.scaleY, N = tt => {
                        let nt = tt === "x";
                        return [tt, nt ? g : s, nt ? i : l].concat(_ ? [nt ? C(i) : A(l), nt ? f.left - b + C(d + G) : f.top - b + A(c + W), 0, nt ? g : s] : [nt ? i : l, nt ? d + G : c + W, nt ? G : W, nt ? G + O.plotWidth : W + O.plotHeight])
                    }, U = N("y"), q = N("x"), K, at = !!a.negative;
                    !it && ((rt = (Q = O.hoverSeries) == null ? void 0 : Q.yAxis) != null && rt.reversed) && (at = !at);
                    let lt = !this.followPointer && r(a.ttBelow, !it && !j === at),
                        R = function(tt, nt, dt, pt, ut, ft, mt) {
                            let bt = _ ? tt === "y" ? A(b) : C(b) : b,
                                yt = (dt - pt) / 2,
                                xt = pt < ut - b,
                                kt = ut + b + pt < nt,
                                St = ut - bt - dt + yt,
                                Mt = ut + bt - yt;
                            if (lt && kt) S[tt] = Mt;
                            else if (!lt && xt) S[tt] = St;
                            else if (xt) S[tt] = Math.min(mt - pt, St - B < 0 ? St : St - B);
                            else {
                                if (!kt) return !1;
                                S[tt] = Math.max(ft, Mt + B + dt > nt ? Mt : Mt + B)
                            }
                        },
                        E = function(tt, nt, dt, pt, ut) {
                            if (ut < b || ut > nt - b) return !1;
                            ut < dt / 2 ? S[tt] = 1 : ut > nt - pt / 2 ? S[tt] = nt - pt - 2 : S[tt] = ut - dt / 2
                        },
                        F = function(tt) {
                            [U, q] = [q, U], K = tt
                        },
                        $ = () => {
                            R.apply(0, U) !== !1 ? E.apply(0, q) !== !1 || K || (F(!0), $()) : K ? S.x = S.y = 0 : (F(!0), $())
                        };
                    return (j && !it || this.len > 1) && F(), $(), S
                }
                hide(i) {
                    let l = this;
                    J.clearTimeout(this.hideTimer), i = r(i, this.options.hideDelay), this.isHidden || (this.hideTimer = t(function() {
                        let a = l.getLabel();
                        l.getLabel().animate({
                            opacity: 0
                        }, {
                            duration: i && 150,
                            complete: () => {
                                a.hide(), l.container && l.container.remove()
                            }
                        }), l.isHidden = !0
                    }, i))
                }
                init(i, l) {
                    this.chart = i, this.options = l, this.crosshairs = [], this.isHidden = !0, this.split = l.split && !i.inverted && !i.polar, this.shared = l.shared || this.split, this.outside = r(l.outside, !!(i.scrollablePixelsX || i.scrollablePixelsY))
                }
                shouldStickOnContact(i) {
                    return !!(!this.followPointer && this.options.stickOnContact && (!i || this.pointer.inClass(i.target, "highcharts-tooltip")))
                }
                move(i, l, a, b) {
                    let O = this,
                        _ = Y(!O.isHidden && O.options.animation),
                        y = O.followPointer || (O.len || 0) > 1,
                        j = {
                            x: i,
                            y: l
                        };
                    y || (j.anchorX = a, j.anchorY = b), _.step = () => O.drawTracker(), O.getLabel().animate(j, _)
                }
                refresh(i, l) {
                    let {
                        chart: a,
                        options: b,
                        pointer: O,
                        shared: _
                    } = this, y = n(i), j = y[0], G = [], W = b.format, it = b.formatter || this.defaultFormatter, d = a.styledMode, c = {};
                    if (!b.enabled || !j.series) return;
                    J.clearTimeout(this.hideTimer), this.allowShared = !(!x(i) && i.series && i.series.noSharedTooltip), this.followPointer = !this.split && j.series.tooltipOptions.followPointer;
                    let S = this.getAnchor(i, l),
                        B = S[0],
                        s = S[1];
                    _ && this.allowShared ? (O.applyInactiveState(y), y.forEach(function(C) {
                        C.setState("hover"), G.push(C.getLabelConfig())
                    }), (c = j.getLabelConfig()).points = G) : c = j.getLabelConfig(), this.len = G.length;
                    let g = L(W) ? z(W, c, a) : it.call(c, this),
                        f = j.series;
                    if (this.distance = r(f.tooltipOptions.distance, 16), g === !1) this.hide();
                    else {
                        if (this.split && this.allowShared) this.renderSplit(g, y);
                        else {
                            let C = B,
                                A = s;
                            if (l && O.isDirectTouch && (C = l.chartX - a.plotLeft, A = l.chartY - a.plotTop), a.polar || f.options.clip === !1 || y.some(N => O.isDirectTouch || N.series.shouldShowTooltip(C, A))) {
                                let N = this.getLabel();
                                (!b.style.width || d) && N.css({
                                    width: (this.outside ? this.getPlayingField() : a.spacingBox).width + "px"
                                }), N.attr({
                                    text: g && g.join ? g.join("") : g
                                }), N.addClass(this.getClassName(j), !0), d || N.attr({
                                    stroke: b.borderColor || j.color || f.color || "#666666"
                                }), this.updatePosition({
                                    plotX: B,
                                    plotY: s,
                                    negative: j.negative,
                                    ttBelow: j.ttBelow,
                                    h: S[2] || 0
                                })
                            } else {
                                this.hide();
                                return
                            }
                        }
                        this.isHidden && this.label && this.label.attr({
                            opacity: 1
                        }).show(), this.isHidden = !1
                    }
                    h(this, "refresh")
                }
                renderSplit(i, l) {
                    var nt;
                    let a = this,
                        {
                            chart: b,
                            chart: {
                                chartWidth: O,
                                chartHeight: _,
                                plotHeight: y,
                                plotLeft: j,
                                plotTop: G,
                                scrollablePixelsY: W = 0,
                                scrollablePixelsX: it,
                                styledMode: d
                            },
                            distance: c,
                            options: S,
                            options: {
                                positioner: B
                            },
                            pointer: s
                        } = a,
                        {
                            scrollLeft: g = 0,
                            scrollTop: f = 0
                        } = ((nt = b.scrollablePlotArea) == null ? void 0 : nt.scrollingContainer) || {},
                        C = a.outside && typeof it != "number" ? w.documentElement.getBoundingClientRect() : {
                            left: g,
                            right: g + O,
                            top: f,
                            bottom: f + _
                        },
                        A = a.getLabel(),
                        N = this.renderer || b.renderer,
                        U = !!(b.xAxis[0] && b.xAxis[0].opposite),
                        {
                            left: q,
                            top: K
                        } = s.getChartPosition(),
                        at = G + f,
                        lt = 0,
                        R = y - W;

                    function E(dt, pt, ut, ft, mt = !0) {
                        let bt, yt;
                        return ut ? (bt = U ? 0 : R, yt = v(dt - ft / 2, C.left, C.right - ft - (a.outside ? q : 0))) : (bt = pt - at, yt = v(yt = mt ? dt - ft - c : dt + c, mt ? yt : C.left, C.right)), {
                            x: yt,
                            y: bt
                        }
                    }
                    L(i) && (i = [!1, i]);
                    let F = i.slice(0, l.length + 1).reduce(function(dt, pt, ut) {
                        if (pt !== !1 && pt !== "") {
                            let ft = l[ut - 1] || {
                                    isHeader: !0,
                                    plotX: l[0].plotX,
                                    plotY: y,
                                    series: {}
                                },
                                mt = ft.isHeader,
                                bt = mt ? a : ft.series,
                                yt = bt.tt = function(Tt, At, It) {
                                    let Et = Tt,
                                        {
                                            isHeader: Ut,
                                            series: _t
                                        } = At;
                                    if (!Et) {
                                        let Vt = {
                                            padding: S.padding,
                                            r: S.borderRadius
                                        };
                                        d || (Vt.fill = S.backgroundColor, Vt["stroke-width"] = S.borderWidth ? ? 1), Et = N.label("", 0, 0, S[Ut ? "headerShape" : "shape"], void 0, void 0, S.useHTML).addClass(a.getClassName(At, !0, Ut)).attr(Vt).add(A)
                                    }
                                    return Et.isActive = !0, Et.attr({
                                        text: It
                                    }), d || Et.css(S.style).attr({
                                        stroke: S.borderColor || At.color || _t.color || "#333333"
                                    }), Et
                                }(bt.tt, ft, pt.toString()),
                                xt = yt.getBBox(),
                                kt = xt.width + yt.strokeWidth();
                            mt && (lt = xt.height, R += lt, U && (at -= lt));
                            let {
                                anchorX: St,
                                anchorY: Mt
                            } = function(Tt) {
                                let At, It, {
                                    isHeader: Et,
                                    plotX: Ut = 0,
                                    plotY: _t = 0,
                                    series: Vt
                                } = Tt;
                                if (Et) At = Math.max(j + Ut, j), It = G + y / 2;
                                else {
                                    let {
                                        xAxis: jt,
                                        yAxis: Bt
                                    } = Vt;
                                    At = jt.pos + v(Ut, -c, jt.len + c), Vt.shouldShowTooltip(0, Bt.pos - G + _t, {
                                        ignoreX: !0
                                    }) && (It = Bt.pos + _t)
                                }
                                return {
                                    anchorX: At = v(At, C.left - c, C.right + c),
                                    anchorY: It
                                }
                            }(ft);
                            if (typeof Mt == "number") {
                                let Tt = xt.height + 1,
                                    At = B ? B.call(a, kt, Tt, ft) : E(St, Mt, mt, kt);
                                dt.push({
                                    align: B ? 0 : void 0,
                                    anchorX: St,
                                    anchorY: Mt,
                                    boxWidth: kt,
                                    point: ft,
                                    rank: r(At.rank, mt ? 1 : 0),
                                    size: Tt,
                                    target: At.y,
                                    tt: yt,
                                    x: At.x
                                })
                            } else yt.isActive = !1
                        }
                        return dt
                    }, []);
                    !B && F.some(dt => {
                        let {
                            outside: pt
                        } = a, ut = (pt ? q : 0) + dt.anchorX;
                        return ut < C.left && ut + dt.boxWidth < C.right || ut < q - C.left + dt.boxWidth && C.right - ut > ut
                    }) && (F = F.map(dt => {
                        let {
                            x: pt,
                            y: ut
                        } = E(dt.anchorX, dt.anchorY, dt.point.isHeader, dt.boxWidth, !1);
                        return m(dt, {
                            target: ut,
                            x: pt
                        })
                    })), a.cleanSplit(), D(F, R);
                    let $ = {
                        left: q,
                        right: q
                    };
                    F.forEach(function(dt) {
                        let {
                            x: pt,
                            boxWidth: ut,
                            isHeader: ft
                        } = dt;
                        !ft && (a.outside && q + pt < $.left && ($.left = q + pt), !ft && a.outside && $.left + ut > $.right && ($.right = q + pt))
                    }), F.forEach(function(dt) {
                        let {
                            x: pt,
                            anchorX: ut,
                            anchorY: ft,
                            pos: mt,
                            point: {
                                isHeader: bt
                            }
                        } = dt, yt = {
                            visibility: mt === void 0 ? "hidden" : "inherit",
                            x: pt,
                            y: (mt || 0) + at,
                            anchorX: ut,
                            anchorY: ft
                        };
                        if (a.outside && pt < ut) {
                            let xt = q - $.left;
                            xt > 0 && (bt || (yt.x = pt + xt, yt.anchorX = ut + xt), bt && (yt.x = ($.right - $.left) / 2, yt.anchorX = ut + xt))
                        }
                        dt.tt.attr(yt)
                    });
                    let {
                        container: Q,
                        outside: rt,
                        renderer: tt
                    } = a;
                    if (rt && Q && tt) {
                        let {
                            width: dt,
                            height: pt,
                            x: ut,
                            y: ft
                        } = A.getBBox();
                        tt.setSize(dt + ut, pt + ft, !1), Q.style.left = $.left + "px", Q.style.top = K + "px"
                    }
                    I && A.attr({
                        opacity: A.opacity === 1 ? .999 : 1
                    })
                }
                drawTracker() {
                    if (!this.shouldStickOnContact()) {
                        this.tracker && (this.tracker = this.tracker.destroy());
                        return
                    }
                    let i = this.chart,
                        l = this.label,
                        a = this.shared ? i.hoverPoints : i.hoverPoint;
                    if (!l || !a) return;
                    let b = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        },
                        O = this.getAnchor(a),
                        _ = l.getBBox();
                    O[0] += i.plotLeft - (l.translateX || 0), O[1] += i.plotTop - (l.translateY || 0), b.x = Math.min(0, O[0]), b.y = Math.min(0, O[1]), b.width = O[0] < 0 ? Math.max(Math.abs(O[0]), _.width - O[0]) : Math.max(Math.abs(O[0]), _.width), b.height = O[1] < 0 ? Math.max(Math.abs(O[1]), _.height - Math.abs(O[1])) : Math.max(Math.abs(O[1]), _.height), this.tracker ? this.tracker.attr(b) : (this.tracker = l.renderer.rect(b).addClass("highcharts-tracker").add(l), i.styledMode || this.tracker.attr({
                        fill: "rgba(0,0,0,0)"
                    }))
                }
                styledModeFormat(i) {
                    return i.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"')
                }
                tooltipFooterHeaderFormatter(i, l) {
                    let a = i.series,
                        b = a.tooltipOptions,
                        O = a.xAxis,
                        _ = O && O.dateTime,
                        y = {
                            isFooter: l,
                            labelConfig: i
                        },
                        j = b.xDateFormat,
                        G = b[l ? "footerFormat" : "headerFormat"];
                    return h(this, "headerFormatter", y, function(W) {
                        _ && !j && X(i.key) && (j = _.getXDateFormat(i.key, b.dateTimeLabelFormats)), _ && j && (i.point && i.point.tooltipDateKeys || ["key"]).forEach(function(it) {
                            G = G.replace("{point." + it + "}", "{point." + it + ":" + j + "}")
                        }), a.chart.styledMode && (G = this.styledModeFormat(G)), W.text = z(G, {
                            point: i,
                            series: a
                        }, this.chart)
                    }), y.text
                }
                update(i) {
                    this.destroy(), this.init(this.chart, k(!0, this.options, i))
                }
                updatePosition(i) {
                    let {
                        chart: l,
                        container: a,
                        distance: b,
                        options: O,
                        pointer: _,
                        renderer: y
                    } = this, {
                        height: j = 0,
                        width: G = 0
                    } = this.getLabel(), {
                        left: W,
                        top: it,
                        scaleX: d,
                        scaleY: c
                    } = _.getChartPosition(), S = (O.positioner || this.getPosition).call(this, G, j, i), B = (i.plotX || 0) + l.plotLeft, s = (i.plotY || 0) + l.plotTop, g;
                    y && a && (O.positioner && (S.x += W - b, S.y += it - b), g = (O.borderWidth || 0) + 2 * b + 2, y.setSize(G + g, j + g, !1), (d !== 1 || c !== 1) && (M(a, {
                        transform: `scale(${d}, ${c})`
                    }), B *= d, s *= c), B += W - S.x, s += it - S.y), this.move(Math.round(S.x), Math.round(S.y || 0), B, s)
                }
            }
            return (et = e || (e = {})).compose = function(o) {
                p(H, "Core.Tooltip") && T(o, "afterInit", function() {
                    let i = this.chart;
                    i.options.tooltip && (i.tooltip = new et(i, i.options.tooltip, this))
                })
            }, e
        }), ct(P, "Core/Series/Point.js", [P["Core/Renderer/HTML/AST.js"], P["Core/Animation/AnimationUtilities.js"], P["Core/Defaults.js"], P["Core/Templating.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht, st) {
            let {
                animObject: J
            } = Z, {
                defaultOptions: et
            } = ot, {
                format: Y
            } = ht, {
                addEvent: z,
                crisp: H,
                erase: w,
                extend: I,
                fireEvent: D,
                getNestedProperty: T,
                isArray: v,
                isFunction: M,
                isNumber: u,
                isObject: m,
                merge: h,
                pick: x,
                syncTimeout: X,
                removeEvent: L,
                uniqueKey: k
            } = st;
            class r {
                animateBeforeDestroy() {
                    let n = this,
                        t = {
                            x: n.startXPos,
                            opacity: 0
                        },
                        e = n.getGraphicalProps();
                    e.singular.forEach(function(o) {
                        n[o] = n[o].animate(o === "dataLabel" ? {
                            x: n[o].startXPos,
                            y: n[o].startYPos,
                            opacity: 0
                        } : t)
                    }), e.plural.forEach(function(o) {
                        n[o].forEach(function(i) {
                            i.element && i.animate(I({
                                x: n.startXPos
                            }, i.startYPos ? {
                                x: i.startXPos,
                                y: i.startYPos
                            } : {}))
                        })
                    })
                }
                applyOptions(n, t) {
                    let e = this.series,
                        o = e.options.pointValKey || e.pointValKey;
                    return I(this, n = r.prototype.optionsToObject.call(this, n)), this.options = this.options ? I(this.options, n) : n, n.group && delete this.group, n.dataLabels && delete this.dataLabels, o && (this.y = r.prototype.getNestedProperty.call(this, o)), this.selected && (this.state = "select"), "name" in this && t === void 0 && e.xAxis && e.xAxis.hasNames && (this.x = e.xAxis.nameToX(this)), this.x === void 0 && e ? t === void 0 ? this.x = e.autoIncrement() : this.x = t : u(n.x) && e.options.relativeXValue && (this.x = e.autoIncrement(n.x)), this.isNull = this.isValid && !this.isValid(), this.formatPrefix = this.isNull ? "null" : "point", this
                }
                destroy() {
                    if (!this.destroyed) {
                        let n = this,
                            t = n.series,
                            e = t.chart,
                            o = t.options.dataSorting,
                            i = e.hoverPoints,
                            l = J(n.series.chart.renderer.globalAnimation),
                            a = () => {
                                for (let b in (n.graphic || n.graphics || n.dataLabel || n.dataLabels) && (L(n), n.destroyElements()), n) delete n[b]
                            };
                        n.legendItem && e.legend.destroyItem(n), i && (n.setState(), w(i, n), i.length || (e.hoverPoints = null)), n === e.hoverPoint && n.onMouseOut(), o && o.enabled ? (this.animateBeforeDestroy(), X(a, l.duration)) : a(), e.pointCount--
                    }
                    this.destroyed = !0
                }
                destroyElements(n) {
                    let t = this,
                        e = t.getGraphicalProps(n);
                    e.singular.forEach(function(o) {
                        t[o] = t[o].destroy()
                    }), e.plural.forEach(function(o) {
                        t[o].forEach(function(i) {
                            i && i.element && i.destroy()
                        }), delete t[o]
                    })
                }
                firePointEvent(n, t, e) {
                    let o = this,
                        i = this.series.options;
                    o.manageEvent(n), n === "click" && i.allowPointSelect && (e = function(l) {
                        !o.destroyed && o.select && o.select(null, l.ctrlKey || l.metaKey || l.shiftKey)
                    }), D(o, n, t, e)
                }
                getClassName() {
                    return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (this.colorIndex !== void 0 ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
                }
                getGraphicalProps(n) {
                    let t, e, o = this,
                        i = [],
                        l = {
                            singular: [],
                            plural: []
                        };
                    for ((n = n || {
                            graphic: 1,
                            dataLabel: 1
                        }).graphic && i.push("graphic", "connector"), n.dataLabel && i.push("dataLabel", "dataLabelPath", "dataLabelUpper"), e = i.length; e--;) o[t = i[e]] && l.singular.push(t);
                    return ["graphic", "dataLabel"].forEach(function(a) {
                        let b = a + "s";
                        n[a] && o[b] && l.plural.push(b)
                    }), l
                }
                getLabelConfig() {
                    return {
                        x: this.category,
                        y: this.y,
                        color: this.color,
                        colorIndex: this.colorIndex,
                        key: this.name || this.category,
                        series: this.series,
                        point: this,
                        percentage: this.percentage,
                        total: this.total || this.stackTotal
                    }
                }
                getNestedProperty(n) {
                    return n ? n.indexOf("custom.") === 0 ? T(n, this.options) : this[n] : void 0
                }
                getZone() {
                    let n = this.series,
                        t = n.zones,
                        e = n.zoneAxis || "y",
                        o, i = 0;
                    for (o = t[0]; this[e] >= o.value;) o = t[++i];
                    return this.nonZonedColor || (this.nonZonedColor = this.color), o && o.color && !this.options.color ? this.color = o.color : this.color = this.nonZonedColor, o
                }
                hasNewShapeType() {
                    return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType
                }
                constructor(n, t, e) {
                    this.formatPrefix = "point", this.visible = !0, this.series = n, this.applyOptions(t, e), this.id ? ? (this.id = k()), this.resolveColor(), n.chart.pointCount++, D(this, "afterInit")
                }
                isValid() {
                    return (u(this.x) || this.x instanceof Date) && u(this.y)
                }
                optionsToObject(n) {
                    let t = this.series,
                        e = t.options.keys,
                        o = e || t.pointArrayMap || ["y"],
                        i = o.length,
                        l = {},
                        a, b = 0,
                        O = 0;
                    if (u(n) || n === null) l[o[0]] = n;
                    else if (v(n))
                        for (!e && n.length > i && ((a = typeof n[0]) == "string" ? l.name = n[0] : a === "number" && (l.x = n[0]), b++); O < i;) e && n[b] === void 0 || (o[O].indexOf(".") > 0 ? r.prototype.setNestedProperty(l, n[b], o[O]) : l[o[O]] = n[b]), b++, O++;
                    else typeof n == "object" && (l = n, n.dataLabels && (t.hasDataLabels = () => !0), n.marker && (t._hasPointMarkers = !0));
                    return l
                }
                pos(n, t = this.plotY) {
                    if (!this.destroyed) {
                        let {
                            plotX: e,
                            series: o
                        } = this, {
                            chart: i,
                            xAxis: l,
                            yAxis: a
                        } = o, b = 0, O = 0;
                        if (u(e) && u(t)) return n && (b = l ? l.pos : i.plotLeft, O = a ? a.pos : i.plotTop), i.inverted && l && a ? [a.len - t + O, l.len - e + b] : [e + b, t + O]
                    }
                }
                resolveColor() {
                    let n = this.series,
                        t = n.chart.options.chart,
                        e = n.chart.styledMode,
                        o, i, l = t.colorCount,
                        a;
                    delete this.nonZonedColor, n.options.colorByPoint ? (e || (o = (i = n.options.colors || n.chart.options.colors)[n.colorCounter], l = i.length), a = n.colorCounter, n.colorCounter++, n.colorCounter === l && (n.colorCounter = 0)) : (e || (o = n.color), a = n.colorIndex), this.colorIndex = x(this.options.colorIndex, a), this.color = x(this.options.color, o)
                }
                setNestedProperty(n, t, e) {
                    return e.split(".").reduce(function(o, i, l, a) {
                        let b = a.length - 1 === l;
                        return o[i] = b ? t : m(o[i], !0) ? o[i] : {}, o[i]
                    }, n), n
                }
                shouldDraw() {
                    return !this.isNull
                }
                tooltipFormatter(n) {
                    let t = this.series,
                        e = t.tooltipOptions,
                        o = x(e.valueDecimals, ""),
                        i = e.valuePrefix || "",
                        l = e.valueSuffix || "";
                    return t.chart.styledMode && (n = t.chart.tooltip.styledModeFormat(n)), (t.pointArrayMap || ["y"]).forEach(function(a) {
                        a = "{point." + a, (i || l) && (n = n.replace(RegExp(a + "}", "g"), i + a + "}" + l)), n = n.replace(RegExp(a + "}", "g"), a + ":,." + o + "f}")
                    }), Y(n, {
                        point: this,
                        series: this.series
                    }, t.chart)
                }
                update(n, t, e, o) {
                    let i, l = this,
                        a = l.series,
                        b = l.graphic,
                        O = a.chart,
                        _ = a.options;

                    function y() {
                        l.applyOptions(n);
                        let j = b && l.hasMockGraphic,
                            G = l.y === null ? !j : j;
                        b && G && (l.graphic = b.destroy(), delete l.hasMockGraphic), m(n, !0) && (b && b.element && n && n.marker && n.marker.symbol !== void 0 && (l.graphic = b.destroy()), n != null && n.dataLabels && l.dataLabel && (l.dataLabel = l.dataLabel.destroy())), i = l.index, a.updateParallelArrays(l, i), _.data[i] = m(_.data[i], !0) || m(n, !0) ? l.options : x(n, _.data[i]), a.isDirty = a.isDirtyData = !0, !a.fixedBox && a.hasCartesianSeries && (O.isDirtyBox = !0), _.legendType === "point" && (O.isDirtyLegend = !0), t && O.redraw(e)
                    }
                    t = x(t, !0), o === !1 ? y() : l.firePointEvent("update", {
                        options: n
                    }, y)
                }
                remove(n, t) {
                    this.series.removePoint(this.series.data.indexOf(this), n, t)
                }
                select(n, t) {
                    let e = this,
                        o = e.series,
                        i = o.chart;
                    n = x(n, !e.selected), this.selectedStaging = n, e.firePointEvent(n ? "select" : "unselect", {
                        accumulate: t
                    }, function() {
                        e.selected = e.options.selected = n, o.options.data[o.data.indexOf(e)] = e.options, e.setState(n && "select"), t || i.getSelectedPoints().forEach(function(l) {
                            let a = l.series;
                            l.selected && l !== e && (l.selected = l.options.selected = !1, a.options.data[a.data.indexOf(l)] = l.options, l.setState(i.hoverPoints && a.options.inactiveOtherPoints ? "inactive" : ""), l.firePointEvent("unselect"))
                        })
                    }), delete this.selectedStaging
                }
                onMouseOver(n) {
                    let {
                        inverted: t,
                        pointer: e
                    } = this.series.chart;
                    e && (n = n ? e.normalize(n) : e.getChartCoordinatesFromPoint(this, t), e.runPointActions(n, this))
                }
                onMouseOut() {
                    let n = this.series.chart;
                    this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (n.hoverPoints || []).forEach(function(t) {
                        t.setState()
                    }), n.hoverPoints = n.hoverPoint = null
                }
                manageEvent(n) {
                    var o, i, l, a, b;
                    let t = h(this.series.options.point, this.options),
                        e = (o = t.events) == null ? void 0 : o[n];
                    M(e) && (!((i = this.hcEvents) != null && i[n]) || ((a = (l = this.hcEvents) == null ? void 0 : l[n]) == null ? void 0 : a.map(O => O.fn).indexOf(e)) === -1) ? (z(this, n, e), this.hasImportedEvents = !0) : this.hasImportedEvents && !e && ((b = this.hcEvents) != null && b[n]) && (L(this, n), delete this.hcEvents[n], Object.keys(this.hcEvents) || (this.hasImportedEvents = !1))
                }
                setState(n, t) {
                    var f;
                    let e = this.series,
                        o = this.state,
                        i = e.options.states[n || "normal"] || {},
                        l = et.plotOptions[e.type].marker && e.options.marker,
                        a = l && l.enabled === !1,
                        b = l && l.states && l.states[n || "normal"] || {},
                        O = b.enabled === !1,
                        _ = this.marker || {},
                        y = e.chart,
                        j = l && e.markerAttribs,
                        G = e.halo,
                        W, it, d, c = e.stateMarkerGraphic,
                        S;
                    if ((n = n || "") === this.state && !t || this.selected && n !== "select" || i.enabled === !1 || n && (O || a && b.enabled === !1) || n && _.states && _.states[n] && _.states[n].enabled === !1) return;
                    if (this.state = n, j && (W = e.markerAttribs(this, n)), this.graphic && !this.hasMockGraphic) {
                        if (o && this.graphic.removeClass("highcharts-point-" + o), n && this.graphic.addClass("highcharts-point-" + n), !y.styledMode) {
                            it = e.pointAttribs(this, n), d = x(y.options.chart.animation, i.animation);
                            let C = it.opacity;
                            e.options.inactiveOtherPoints && u(C) && (this.dataLabels || []).forEach(function(A) {
                                A && !A.hasClass("highcharts-data-label-hidden") && (A.animate({
                                    opacity: C
                                }, d), A.connector && A.connector.animate({
                                    opacity: C
                                }, d))
                            }), this.graphic.animate(it, d)
                        }
                        W && this.graphic.animate(W, x(y.options.chart.animation, b.animation, l.animation)), c && c.hide()
                    } else n && b && (S = _.symbol || e.symbol, c && c.currentSymbol !== S && (c = c.destroy()), W && (c ? c[t ? "animate" : "attr"]({
                        x: W.x,
                        y: W.y
                    }) : S && (e.stateMarkerGraphic = c = y.renderer.symbol(S, W.x, W.y, W.width, W.height).add(e.markerGroup), c.currentSymbol = S)), !y.styledMode && c && this.state !== "inactive" && c.attr(e.pointAttribs(this, n))), c && (c[n && this.isInside ? "show" : "hide"](), c.element.point = this, c.addClass(this.getClassName(), !0));
                    let B = i.halo,
                        s = this.graphic || c,
                        g = s && s.visibility || "inherit";
                    B && B.size && s && g !== "hidden" && !this.isCluster ? (G || (e.halo = G = y.renderer.path().add(s.parentGroup)), G.show()[t ? "animate" : "attr"]({
                        d: this.haloPath(B.size)
                    }), G.attr({
                        class: "highcharts-halo highcharts-color-" + x(this.colorIndex, e.colorIndex) + (this.className ? " " + this.className : ""),
                        visibility: g,
                        zIndex: -1
                    }), G.point = this, y.styledMode || G.attr(I({
                        fill: this.color || e.color,
                        "fill-opacity": B.opacity
                    }, V.filterUserAttributes(B.attributes || {})))) : (f = G == null ? void 0 : G.point) != null && f.haloPath && !G.point.destroyed && G.animate({
                        d: G.point.haloPath(0)
                    }, null, G.hide), D(this, "afterSetState", {
                        state: n
                    })
                }
                haloPath(n) {
                    let t = this.pos();
                    return t ? this.series.chart.renderer.symbols.circle(H(t[0], 1) - n, t[1] - n, 2 * n, 2 * n) : []
                }
            }
            return r
        }), ct(P, "Core/Pointer.js", [P["Core/Color/Color.js"], P["Core/Globals.js"], P["Core/Utilities.js"]], function(V, Z, ot) {
            var ht;
            let {
                parse: st
            } = V, {
                charts: J,
                composed: et,
                isTouchDevice: Y
            } = Z, {
                addEvent: z,
                attr: H,
                css: w,
                extend: I,
                find: D,
                fireEvent: T,
                isNumber: v,
                isObject: M,
                objectEach: u,
                offset: m,
                pick: h,
                pushUnique: x,
                splat: X
            } = ot;
            class L {
                applyInactiveState(r) {
                    let p = [],
                        n;
                    (r || []).forEach(function(t) {
                        n = t.series, p.push(n), n.linkedParent && p.push(n.linkedParent), n.linkedSeries && (p = p.concat(n.linkedSeries)), n.navigatorSeries && p.push(n.navigatorSeries)
                    }), this.chart.series.forEach(function(t) {
                        p.indexOf(t) === -1 ? t.setState("inactive", !0) : t.options.inactiveOtherPoints && t.setAllPointsToState("inactive")
                    })
                }
                destroy() {
                    let r = this;
                    this.eventsToUnbind.forEach(p => p()), this.eventsToUnbind = [], !Z.chartCount && (L.unbindDocumentMouseUp && (L.unbindDocumentMouseUp = L.unbindDocumentMouseUp()), L.unbindDocumentTouchEnd && (L.unbindDocumentTouchEnd = L.unbindDocumentTouchEnd())), clearInterval(r.tooltipTimeout), u(r, function(p, n) {
                        r[n] = void 0
                    })
                }
                getSelectionMarkerAttrs(r, p) {
                    let n = {
                        args: {
                            chartX: r,
                            chartY: p
                        },
                        attrs: {},
                        shapeType: "rect"
                    };
                    return T(this, "getSelectionMarkerAttrs", n, t => {
                        let e, {
                                chart: o,
                                zoomHor: i,
                                zoomVert: l
                            } = this,
                            {
                                mouseDownX: a = 0,
                                mouseDownY: b = 0
                            } = o,
                            O = t.attrs;
                        O.x = o.plotLeft, O.y = o.plotTop, O.width = i ? 1 : o.plotWidth, O.height = l ? 1 : o.plotHeight, i && (e = r - a, O.width = Math.max(1, Math.abs(e)), O.x = (e > 0 ? 0 : e) + a), l && (e = p - b, O.height = Math.max(1, Math.abs(e)), O.y = (e > 0 ? 0 : e) + b)
                    }), n
                }
                drag(r) {
                    let {
                        chart: p
                    } = this, {
                        mouseDownX: n = 0,
                        mouseDownY: t = 0
                    } = p, {
                        panning: e,
                        panKey: o,
                        selectionMarkerFill: i
                    } = p.options.chart, l = p.plotLeft, a = p.plotTop, b = p.plotWidth, O = p.plotHeight, _ = M(e) ? e.enabled : e, y = o && r[`${o}Key`], j = r.chartX, G = r.chartY, W, it = this.selectionMarker;
                    if ((!it || !it.touch) && (j < l ? j = l : j > l + b && (j = l + b), G < a ? G = a : G > a + O && (G = a + O), this.hasDragged = Math.sqrt(Math.pow(n - j, 2) + Math.pow(t - G, 2)), this.hasDragged > 10)) {
                        W = p.isInsidePlot(n - l, t - a, {
                            visiblePlotOnly: !0
                        });
                        let {
                            shapeType: d,
                            attrs: c
                        } = this.getSelectionMarkerAttrs(j, G);
                        (p.hasCartesianSeries || p.mapView) && this.hasZoom && W && !y && !it && (this.selectionMarker = it = p.renderer[d](), it.attr({
                            class: "highcharts-selection-marker",
                            zIndex: 7
                        }).add(), p.styledMode || it.attr({
                            fill: i || st("#334eff").setOpacity(.25).get()
                        })), it && it.attr(c), W && !it && _ && p.pan(r, e)
                    }
                }
                dragStart(r) {
                    let p = this.chart;
                    p.mouseIsDown = r.type, p.cancelClick = !1, p.mouseDownX = r.chartX, p.mouseDownY = r.chartY
                }
                getSelectionBox(r) {
                    let p = {
                        args: {
                            marker: r
                        },
                        result: r.getBBox()
                    };
                    return T(this, "getSelectionBox", p), p.result
                }
                drop(r) {
                    let p, {
                        chart: n,
                        selectionMarker: t
                    } = this;
                    for (let e of n.axes) e.isPanning && (e.isPanning = !1, (e.options.startOnTick || e.options.endOnTick || e.series.some(o => o.boosted)) && (e.forceRedraw = !0, e.setExtremes(e.userMin, e.userMax, !1), p = !0));
                    if (p && n.redraw(), t && r) {
                        if (this.hasDragged) {
                            let e = this.getSelectionBox(t);
                            n.transform({
                                axes: n.axes.filter(o => o.zoomEnabled && (o.coll === "xAxis" && this.zoomX || o.coll === "yAxis" && this.zoomY)),
                                selection: {
                                    originalEvent: r,
                                    xAxis: [],
                                    yAxis: [],
                                    ...e
                                },
                                from: e
                            })
                        }
                        v(n.index) && (this.selectionMarker = t.destroy())
                    }
                    n && v(n.index) && (w(n.container, {
                        cursor: n._cursor
                    }), n.cancelClick = this.hasDragged > 10, n.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = [])
                }
                findNearestKDPoint(r, p, n) {
                    let t;
                    return r.forEach(function(e) {
                        let o = !(e.noSharedTooltip && p) && 0 > e.options.findNearestPointBy.indexOf("y"),
                            i = e.searchPoint(n, o);
                        M(i, !0) && i.series && (!M(t, !0) || function(l, a) {
                            var y, j;
                            let b = l.distX - a.distX,
                                O = l.dist - a.dist,
                                _ = ((y = a.series.group) == null ? void 0 : y.zIndex) - ((j = l.series.group) == null ? void 0 : j.zIndex);
                            return b !== 0 && p ? b : O !== 0 ? O : _ !== 0 ? _ : l.series.index > a.series.index ? -1 : 1
                        }(t, i) > 0) && (t = i)
                    }), t
                }
                getChartCoordinatesFromPoint(r, p) {
                    let {
                        xAxis: n,
                        yAxis: t
                    } = r.series, e = r.shapeArgs;
                    if (n && t) {
                        let o = r.clientX ? ? r.plotX ? ? 0,
                            i = r.plotY || 0;
                        return r.isNode && e && v(e.x) && v(e.y) && (o = e.x, i = e.y), p ? {
                            chartX: t.len + t.pos - i,
                            chartY: n.len + n.pos - o
                        } : {
                            chartX: o + n.pos,
                            chartY: i + t.pos
                        }
                    }
                    if (e && e.x && e.y) return {
                        chartX: e.x,
                        chartY: e.y
                    }
                }
                getChartPosition() {
                    if (this.chartPosition) return this.chartPosition;
                    let {
                        container: r
                    } = this.chart, p = m(r);
                    this.chartPosition = {
                        left: p.left,
                        top: p.top,
                        scaleX: 1,
                        scaleY: 1
                    };
                    let {
                        offsetHeight: n,
                        offsetWidth: t
                    } = r;
                    return t > 2 && n > 2 && (this.chartPosition.scaleX = p.width / t, this.chartPosition.scaleY = p.height / n), this.chartPosition
                }
                getCoordinates(r) {
                    let p = {
                        xAxis: [],
                        yAxis: []
                    };
                    for (let n of this.chart.axes) p[n.isXAxis ? "xAxis" : "yAxis"].push({
                        axis: n,
                        value: n.toValue(r[n.horiz ? "chartX" : "chartY"])
                    });
                    return p
                }
                getHoverData(r, p, n, t, e, o) {
                    let i = [],
                        l = function(y) {
                            return y.visible && !(!e && y.directTouch) && h(y.options.enableMouseTracking, !0)
                        },
                        a = p,
                        b, O = {
                            chartX: o ? o.chartX : void 0,
                            chartY: o ? o.chartY : void 0,
                            shared: e
                        };
                    T(this, "beforeGetHoverData", O), b = a && !a.stickyTracking ? [a] : n.filter(y => y.stickyTracking && (O.filter || l)(y));
                    let _ = t && r || !o ? r : this.findNearestKDPoint(b, e, o);
                    return a = _ && _.series, _ && (e && !a.noSharedTooltip ? (b = n.filter(function(y) {
                        return O.filter ? O.filter(y) : l(y) && !y.noSharedTooltip
                    })).forEach(function(y) {
                        let j = D(y.points, function(G) {
                            return G.x === _.x && !G.isNull
                        });
                        M(j) && (y.boosted && y.boost && (j = y.boost.getPoint(j)), i.push(j))
                    }) : i.push(_)), T(this, "afterGetHoverData", O = {
                        hoverPoint: _
                    }), {
                        hoverPoint: O.hoverPoint,
                        hoverSeries: a,
                        hoverPoints: i
                    }
                }
                getPointFromEvent(r) {
                    let p = r.target,
                        n;
                    for (; p && !n;) n = p.point, p = p.parentNode;
                    return n
                }
                onTrackerMouseOut(r) {
                    let p = this.chart,
                        n = r.relatedTarget,
                        t = p.hoverSeries;
                    this.isDirectTouch = !1, !t || !n || t.stickyTracking || this.inClass(n, "highcharts-tooltip") || this.inClass(n, "highcharts-series-" + t.index) && this.inClass(n, "highcharts-tracker") || t.onMouseOut()
                }
                inClass(r, p) {
                    let n = r,
                        t;
                    for (; n;) {
                        if (t = H(n, "class")) {
                            if (t.indexOf(p) !== -1) return !0;
                            if (t.indexOf("highcharts-container") !== -1) return !1
                        }
                        n = n.parentElement
                    }
                }
                constructor(r, p) {
                    var n;
                    this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = p, this.chart = r, this.runChartClick = !!((n = p.chart.events) != null && n.click), this.pinchDown = [], this.setDOMEvents(), T(this, "afterInit")
                }
                normalize(r, p) {
                    let n = r.touches,
                        t = n ? n.length ? n.item(0) : h(n.changedTouches, r.changedTouches)[0] : r;
                    p || (p = this.getChartPosition());
                    let e = t.pageX - p.left,
                        o = t.pageY - p.top;
                    return I(r, {
                        chartX: Math.round(e /= p.scaleX),
                        chartY: Math.round(o /= p.scaleY)
                    })
                }
                onContainerClick(r) {
                    let p = this.chart,
                        n = p.hoverPoint,
                        t = this.normalize(r),
                        e = p.plotLeft,
                        o = p.plotTop;
                    !p.cancelClick && (n && this.inClass(t.target, "highcharts-tracker") ? (T(n.series, "click", I(t, {
                        point: n
                    })), p.hoverPoint && n.firePointEvent("click", t)) : (I(t, this.getCoordinates(t)), p.isInsidePlot(t.chartX - e, t.chartY - o, {
                        visiblePlotOnly: !0
                    }) && T(p, "click", t)))
                }
                onContainerMouseDown(r) {
                    var n;
                    let p = (1 & (r.buttons || r.button)) == 1;
                    r = this.normalize(r), Z.isFirefox && r.button !== 0 && this.onContainerMouseMove(r), (r.button === void 0 || p) && (this.zoomOption(r), p && ((n = r.preventDefault) == null || n.call(r)), this.dragStart(r))
                }
                onContainerMouseLeave(r) {
                    let {
                        pointer: p
                    } = J[h(L.hoverChartIndex, -1)] || {};
                    r = this.normalize(r), this.onContainerMouseMove(r), p && r.relatedTarget && !this.inClass(r.relatedTarget, "highcharts-tooltip") && (p.reset(), p.chartPosition = void 0)
                }
                onContainerMouseEnter() {
                    delete this.chartPosition
                }
                onContainerMouseMove(r) {
                    let p = this.chart,
                        n = p.tooltip,
                        t = this.normalize(r);
                    this.setHoverChartIndex(r), (p.mouseIsDown === "mousedown" || this.touchSelect(t)) && this.drag(t), !p.openMenu && (this.inClass(t.target, "highcharts-tracker") || p.isInsidePlot(t.chartX - p.plotLeft, t.chartY - p.plotTop, {
                        visiblePlotOnly: !0
                    })) && !(n && n.shouldStickOnContact(t)) && (this.inClass(t.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(t))
                }
                onDocumentTouchEnd(r) {
                    this.onDocumentMouseUp(r)
                }
                onContainerTouchMove(r) {
                    this.touchSelect(r) ? this.onContainerMouseMove(r) : this.touch(r)
                }
                onContainerTouchStart(r) {
                    this.touchSelect(r) ? this.onContainerMouseDown(r) : (this.zoomOption(r), this.touch(r, !0))
                }
                onDocumentMouseMove(r) {
                    let p = this.chart,
                        n = p.tooltip,
                        t = this.chartPosition,
                        e = this.normalize(r, t);
                    !t || p.isInsidePlot(e.chartX - p.plotLeft, e.chartY - p.plotTop, {
                        visiblePlotOnly: !0
                    }) || n && n.shouldStickOnContact(e) || this.inClass(e.target, "highcharts-tracker") || this.reset()
                }
                onDocumentMouseUp(r) {
                    var p, n;
                    (n = (p = J[h(L.hoverChartIndex, -1)]) == null ? void 0 : p.pointer) == null || n.drop(r)
                }
                pinch(r) {
                    let p = this,
                        {
                            chart: n,
                            hasZoom: t,
                            lastTouches: e
                        } = p,
                        o = [].map.call(r.touches || [], O => p.normalize(O)),
                        i = o.length,
                        l = i === 1 && (p.inClass(r.target, "highcharts-tracker") && n.runTrackerClick || p.runChartClick),
                        a = n.tooltip,
                        b = i === 1 && h(a == null ? void 0 : a.options.followTouchMove, !0);
                    i > 1 ? p.initiated = !0 : b && (p.initiated = !1), t && p.initiated && !l && r.cancelable !== !1 && r.preventDefault(), r.type === "touchstart" ? (p.pinchDown = o, p.res = !0) : b ? this.runPointActions(p.normalize(r)) : e && (T(n, "touchpan", {
                        originalEvent: r,
                        touches: o
                    }, () => {
                        let O = _ => {
                            let y = _[0],
                                j = _[1] || y;
                            return {
                                x: y.chartX,
                                y: y.chartY,
                                width: j.chartX - y.chartX,
                                height: j.chartY - y.chartY
                            }
                        };
                        n.transform({
                            axes: n.axes.filter(_ => _.zoomEnabled && (this.zoomHor && _.horiz || this.zoomVert && !_.horiz)),
                            to: O(o),
                            from: O(e),
                            trigger: r.type
                        })
                    }), p.res && (p.res = !1, this.reset(!1, 0))), p.lastTouches = o
                }
                reset(r, p) {
                    let n = this.chart,
                        t = n.hoverSeries,
                        e = n.hoverPoint,
                        o = n.hoverPoints,
                        i = n.tooltip,
                        l = i && i.shared ? o : e;
                    r && l && X(l).forEach(function(a) {
                        a.series.isCartesian && a.plotX === void 0 && (r = !1)
                    }), r ? i && l && X(l).length && (i.refresh(l), i.shared && o ? o.forEach(function(a) {
                        a.setState(a.state, !0), a.series.isCartesian && (a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null, a), a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null, a))
                    }) : e && (e.setState(e.state, !0), n.axes.forEach(function(a) {
                        a.crosshair && e.series[a.coll] === a && a.drawCrosshair(null, e)
                    }))) : (e && e.onMouseOut(), o && o.forEach(function(a) {
                        a.setState()
                    }), t && t.onMouseOut(), i && i.hide(p), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), n.axes.forEach(function(a) {
                        a.hideCrosshair()
                    }), n.hoverPoints = n.hoverPoint = void 0)
                }
                runPointActions(r, p, n) {
                    let t = this.chart,
                        e = t.series,
                        o = t.tooltip && t.tooltip.options.enabled ? t.tooltip : void 0,
                        i = !!o && o.shared,
                        l = p || t.hoverPoint,
                        a = l && l.series || t.hoverSeries,
                        b = (!r || r.type !== "touchmove") && (!!p || a && a.directTouch && this.isDirectTouch),
                        O = this.getHoverData(l, a, e, b, i, r);
                    l = O.hoverPoint, a = O.hoverSeries;
                    let _ = O.hoverPoints,
                        y = a && a.tooltipOptions.followPointer && !a.tooltipOptions.split,
                        j = i && a && !a.noSharedTooltip;
                    if (l && (n || l !== t.hoverPoint || o && o.isHidden)) {
                        if ((t.hoverPoints || []).forEach(function(G) {
                                _.indexOf(G) === -1 && G.setState()
                            }), t.hoverSeries !== a && a.onMouseOver(), this.applyInactiveState(_), (_ || []).forEach(function(G) {
                                G.setState("hover")
                            }), t.hoverPoint && t.hoverPoint.firePointEvent("mouseOut"), !l.series) return;
                        t.hoverPoints = _, t.hoverPoint = l, l.firePointEvent("mouseOver", void 0, () => {
                            o && l && o.refresh(j ? _ : l, r)
                        })
                    } else if (y && o && !o.isHidden) {
                        let G = o.getAnchor([{}], r);
                        t.isInsidePlot(G[0], G[1], {
                            visiblePlotOnly: !0
                        }) && o.updatePosition({
                            plotX: G[0],
                            plotY: G[1]
                        })
                    }
                    this.unDocMouseMove || (this.unDocMouseMove = z(t.container.ownerDocument, "mousemove", G => {
                        var W, it;
                        return (it = (W = J[L.hoverChartIndex ? ? -1]) == null ? void 0 : W.pointer) == null ? void 0 : it.onDocumentMouseMove(G)
                    }), this.eventsToUnbind.push(this.unDocMouseMove)), t.axes.forEach(function(G) {
                        let W, it = h((G.crosshair || {}).snap, !0);
                        !it || (W = t.hoverPoint) && W.series[G.coll] === G || (W = D(_, d => d.series && d.series[G.coll] === G)), W || !it ? G.drawCrosshair(r, W) : G.hideCrosshair()
                    })
                }
                setDOMEvents() {
                    let r = this.chart.container,
                        p = r.ownerDocument;
                    r.onmousedown = this.onContainerMouseDown.bind(this), r.onmousemove = this.onContainerMouseMove.bind(this), r.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(z(r, "mouseenter", this.onContainerMouseEnter.bind(this)), z(r, "mouseleave", this.onContainerMouseLeave.bind(this))), L.unbindDocumentMouseUp || (L.unbindDocumentMouseUp = z(p, "mouseup", this.onDocumentMouseUp.bind(this)));
                    let n = this.chart.renderTo.parentElement;
                    for (; n && n.tagName !== "BODY";) this.eventsToUnbind.push(z(n, "scroll", () => {
                        delete this.chartPosition
                    })), n = n.parentElement;
                    this.eventsToUnbind.push(z(r, "touchstart", this.onContainerTouchStart.bind(this), {
                        passive: !1
                    }), z(r, "touchmove", this.onContainerTouchMove.bind(this), {
                        passive: !1
                    })), L.unbindDocumentTouchEnd || (L.unbindDocumentTouchEnd = z(p, "touchend", this.onDocumentTouchEnd.bind(this), {
                        passive: !1
                    })), this.setPointerCapture(), z(this.chart, "redraw", this.setPointerCapture.bind(this))
                }
                setPointerCapture() {
                    var e, o;
                    if (!Y) return;
                    let r = this.pointerCaptureEventsToUnbind,
                        p = this.chart,
                        n = p.container,
                        t = h((e = p.options.tooltip) == null ? void 0 : e.followTouchMove, !0) && p.series.some(i => i.options.findNearestPointBy.indexOf("y") > -1);
                    !this.hasPointerCapture && t ? (r.push(z(n, "pointerdown", i => {
                        var l, a;
                        (l = i.target) != null && l.hasPointerCapture(i.pointerId) && ((a = i.target) == null || a.releasePointerCapture(i.pointerId))
                    }), z(n, "pointermove", i => {
                        var l, a;
                        (a = (l = p.pointer) == null ? void 0 : l.getPointFromEvent(i)) == null || a.onMouseOver(i)
                    })), p.styledMode || w(n, {
                        "touch-action": "none"
                    }), n.className += " highcharts-no-touch-action", this.hasPointerCapture = !0) : this.hasPointerCapture && !t && (r.forEach(i => i()), r.length = 0, p.styledMode || w(n, {
                        "touch-action": h((o = p.options.chart.style) == null ? void 0 : o["touch-action"], "manipulation")
                    }), n.className = n.className.replace(" highcharts-no-touch-action", ""), this.hasPointerCapture = !1)
                }
                setHoverChartIndex(r) {
                    var t;
                    let p = this.chart,
                        n = Z.charts[h(L.hoverChartIndex, -1)];
                    n && n !== p && ((t = n.pointer) == null || t.onContainerMouseLeave(r || {
                        relatedTarget: p.container
                    })), n && n.mouseIsDown || (L.hoverChartIndex = p.index)
                }
                touch(r, p) {
                    let n, {
                        chart: t,
                        pinchDown: e = []
                    } = this;
                    this.setHoverChartIndex(), r.touches.length === 1 ? (r = this.normalize(r), t.isInsidePlot(r.chartX - t.plotLeft, r.chartY - t.plotTop, {
                        visiblePlotOnly: !0
                    }) && !t.openMenu ? (p && this.runPointActions(r), r.type === "touchmove" && (n = !!e[0] && Math.pow(e[0].chartX - r.chartX, 2) + Math.pow(e[0].chartY - r.chartY, 2) >= 16), h(n, !0) && this.pinch(r)) : p && this.reset()) : r.touches.length === 2 && this.pinch(r)
                }
                touchSelect(r) {
                    return !!(this.chart.zooming.singleTouch && r.touches && r.touches.length === 1)
                }
                zoomOption(r) {
                    let p = this.chart,
                        n = p.inverted,
                        t = p.zooming.type || "",
                        e, o;
                    /touch/.test(r.type) && (t = h(p.zooming.pinchType, t)), this.zoomX = e = /x/.test(t), this.zoomY = o = /y/.test(t), this.zoomHor = e && !n || o && n, this.zoomVert = o && !n || e && n, this.hasZoom = e || o
                }
            }
            return (ht = L || (L = {})).compose = function(k) {
                x(et, "Core.Pointer") && z(k, "beforeRender", function() {
                    this.pointer = new ht(this, this.options)
                })
            }, L
        }), ct(P, "Core/Legend/Legend.js", [P["Core/Animation/AnimationUtilities.js"], P["Core/Templating.js"], P["Core/Globals.js"], P["Core/Series/Point.js"], P["Core/Renderer/RendererUtilities.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht, st, J) {
            var et;
            let {
                animObject: Y,
                setAnimation: z
            } = V, {
                format: H
            } = Z, {
                composed: w,
                marginNames: I
            } = ot, {
                distribute: D
            } = st, {
                addEvent: T,
                createElement: v,
                css: M,
                defined: u,
                discardElement: m,
                find: h,
                fireEvent: x,
                isNumber: X,
                merge: L,
                pick: k,
                pushUnique: r,
                relativeLength: p,
                stableSort: n,
                syncTimeout: t
            } = J;
            class e {
                constructor(i, l) {
                    this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = i, this.setOptions(l), l.enabled && (this.render(), T(this.chart, "endResize", function() {
                        this.legend.positionCheckboxes()
                    })), T(this.chart, "render", () => {
                        this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems())
                    })
                }
                setOptions(i) {
                    let l = k(i.padding, 8);
                    this.options = i, this.chart.styledMode || (this.itemStyle = i.itemStyle, this.itemHiddenStyle = L(this.itemStyle, i.itemHiddenStyle)), this.itemMarginTop = i.itemMarginTop, this.itemMarginBottom = i.itemMarginBottom, this.padding = l, this.initialItemY = l - 5, this.symbolWidth = k(i.symbolWidth, 16), this.pages = [], this.proximate = i.layout === "proximate" && !this.chart.inverted, this.baseline = void 0
                }
                update(i, l) {
                    let a = this.chart;
                    this.setOptions(L(!0, this.options, i)), this.destroy(), a.isDirtyLegend = a.isDirtyBox = !0, k(l, !0) && a.redraw(), x(this, "afterUpdate", {
                        redraw: l
                    })
                }
                colorizeItem(i, l) {
                    let {
                        area: a,
                        group: b,
                        label: O,
                        line: _,
                        symbol: y
                    } = i.legendItem || {};
                    if (b == null || b[l ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
                        let {
                            itemHiddenStyle: j = {}
                        } = this, G = j.color, {
                            fillColor: W,
                            fillOpacity: it,
                            lineColor: d,
                            marker: c
                        } = i.options, S = B => (!l && (B.fill && (B.fill = G), B.stroke && (B.stroke = G)), B);
                        O == null || O.css(L(l ? this.itemStyle : j)), _ == null || _.attr(S({
                            stroke: d || i.color
                        })), y && y.attr(S(c && y.isMarker ? i.pointAttribs() : {
                            fill: i.color
                        })), a == null || a.attr(S({
                            fill: W || i.color,
                            "fill-opacity": W ? 1 : it ? ? .75
                        }))
                    }
                    x(this, "afterColorizeItem", {
                        item: i,
                        visible: l
                    })
                }
                positionItems() {
                    this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes()
                }
                positionItem(i) {
                    let {
                        group: l,
                        x: a = 0,
                        y: b = 0
                    } = i.legendItem || {}, O = this.options, _ = O.symbolPadding, y = !O.rtl, j = i.checkbox;
                    if (l && l.element) {
                        let G = {
                            translateX: y ? a : this.legendWidth - a - 2 * _ - 4,
                            translateY: b
                        };
                        l[u(l.translateY) ? "animate" : "attr"](G, void 0, () => {
                            x(this, "afterPositionItem", {
                                item: i
                            })
                        })
                    }
                    j && (j.x = a, j.y = b)
                }
                destroyItem(i) {
                    let l = i.checkbox,
                        a = i.legendItem || {};
                    for (let b of ["group", "label", "line", "symbol"]) a[b] && (a[b] = a[b].destroy());
                    l && m(l), i.legendItem = void 0
                }
                destroy() {
                    for (let i of this.getAllItems()) this.destroyItem(i);
                    for (let i of ["clipRect", "up", "down", "pager", "nav", "box", "title", "group"]) this[i] && (this[i] = this[i].destroy());
                    this.display = null
                }
                positionCheckboxes() {
                    let i, l = this.group && this.group.alignAttr,
                        a = this.clipHeight || this.legendHeight,
                        b = this.titleHeight;
                    l && (i = l.translateY, this.allItems.forEach(function(O) {
                        let _, y = O.checkbox;
                        y && (_ = i + b + y.y + (this.scrollOffset || 0) + 3, M(y, {
                            left: l.translateX + O.checkboxOffset + y.x - 20 + "px",
                            top: _ + "px",
                            display: this.proximate || _ > i - 6 && _ < i + a - 6 ? "" : "none"
                        }))
                    }, this))
                }
                renderTitle() {
                    let i = this.options,
                        l = this.padding,
                        a = i.title,
                        b, O = 0;
                    a.text && (this.title || (this.title = this.chart.renderer.label(a.text, l - 3, l - 4, void 0, void 0, void 0, i.useHTML, void 0, "legend-title").attr({
                        zIndex: 1
                    }), this.chart.styledMode || this.title.css(a.style), this.title.add(this.group)), a.width || this.title.css({
                        width: this.maxLegendWidth + "px"
                    }), O = (b = this.title.getBBox()).height, this.offsetWidth = b.width, this.contentGroup.attr({
                        translateY: O
                    })), this.titleHeight = O
                }
                setText(i) {
                    let l = this.options;
                    i.legendItem.label.attr({
                        text: l.labelFormat ? H(l.labelFormat, i, this.chart) : l.labelFormatter.call(i)
                    })
                }
                renderItem(i) {
                    let l = i.legendItem = i.legendItem || {},
                        a = this.chart,
                        b = a.renderer,
                        O = this.options,
                        _ = O.layout === "horizontal",
                        y = this.symbolWidth,
                        j = O.symbolPadding || 0,
                        G = this.itemStyle,
                        W = this.itemHiddenStyle,
                        it = _ ? k(O.itemDistance, 20) : 0,
                        d = !O.rtl,
                        c = !i.series,
                        S = !c && i.series.drawLegendSymbol ? i.series : i,
                        B = S.options,
                        s = !!this.createCheckboxForItem && B && B.showCheckbox,
                        g = O.useHTML,
                        f = i.options.className,
                        C = l.label,
                        A = y + j + it + (s ? 20 : 0);
                    !C && (l.group = b.g("legend-item").addClass("highcharts-" + S.type + "-series highcharts-color-" + i.colorIndex + (f ? " " + f : "") + (c ? " highcharts-series-" + i.index : "")).attr({
                        zIndex: 1
                    }).add(this.scrollGroup), l.label = C = b.text("", d ? y + j : -j, this.baseline || 0, g), a.styledMode || C.css(L(i.visible ? G : W)), C.attr({
                        align: d ? "left" : "right",
                        zIndex: 2
                    }).add(l.group), !this.baseline && (this.fontMetrics = b.fontMetrics(C), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, C.attr("y", this.baseline), this.symbolHeight = k(O.symbolHeight, this.fontMetrics.f), O.squareSymbol && (this.symbolWidth = k(O.symbolWidth, Math.max(this.symbolHeight, 16)), A = this.symbolWidth + j + it + (s ? 20 : 0), d && C.attr("x", this.symbolWidth + j))), S.drawLegendSymbol(this, i), this.setItemEvents && this.setItemEvents(i, C, g)), s && !i.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(i), this.colorizeItem(i, i.visible), (a.styledMode || !G.width) && C.css({
                        width: (O.itemWidth || this.widthOption || a.spacingBox.width) - A + "px"
                    }), this.setText(i);
                    let N = C.getBBox(),
                        U = this.fontMetrics && this.fontMetrics.h || 0;
                    i.itemWidth = i.checkboxOffset = O.itemWidth || l.labelWidth || N.width + A, this.maxItemWidth = Math.max(this.maxItemWidth, i.itemWidth), this.totalItemWidth += i.itemWidth, this.itemHeight = i.itemHeight = Math.round(l.labelHeight || (N.height > 1.5 * U ? N.height : U))
                }
                layoutItem(i) {
                    let l = this.options,
                        a = this.padding,
                        b = l.layout === "horizontal",
                        O = i.itemHeight,
                        _ = this.itemMarginBottom,
                        y = this.itemMarginTop,
                        j = b ? k(l.itemDistance, 20) : 0,
                        G = this.maxLegendWidth,
                        W = l.alignColumns && this.totalItemWidth > G ? this.maxItemWidth : i.itemWidth,
                        it = i.legendItem || {};
                    b && this.itemX - a + W > G && (this.itemX = a, this.lastLineHeight && (this.itemY += y + this.lastLineHeight + _), this.lastLineHeight = 0), this.lastItemY = y + this.itemY + _, this.lastLineHeight = Math.max(O, this.lastLineHeight), it.x = this.itemX, it.y = this.itemY, b ? this.itemX += W : (this.itemY += y + O + _, this.lastLineHeight = O), this.offsetWidth = this.widthOption || Math.max((b ? this.itemX - a - (i.checkbox ? 0 : j) : W) + a, this.offsetWidth)
                }
                getAllItems() {
                    let i = [];
                    return this.chart.series.forEach(function(l) {
                        let a = l && l.options;
                        l && k(a.showInLegend, !u(a.linkedTo) && void 0, !0) && (i = i.concat((l.legendItem || {}).labels || (a.legendType === "point" ? l.data : l)))
                    }), x(this, "afterGetAllItems", {
                        allItems: i
                    }), i
                }
                getAlignment() {
                    let i = this.options;
                    return this.proximate ? i.align.charAt(0) + "tv" : i.floating ? "" : i.align.charAt(0) + i.verticalAlign.charAt(0) + i.layout.charAt(0)
                }
                adjustMargins(i, l) {
                    let a = this.chart,
                        b = this.options,
                        O = this.getAlignment();
                    O && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(_, y) {
                        _.test(O) && !u(i[y]) && (a[I[y]] = Math.max(a[I[y]], a.legend[(y + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][y] * b[y % 2 ? "x" : "y"] + k(b.margin, 12) + l[y] + (a.titleOffset[y] || 0)))
                    })
                }
                proximatePositions() {
                    let i, l = this.chart,
                        a = [],
                        b = this.options.align === "left";
                    for (let O of (this.allItems.forEach(function(_) {
                            let y, j, G = b,
                                W, it;
                            _.yAxis && (_.xAxis.options.reversed && (G = !G), _.points && (y = h(G ? _.points : _.points.slice(0).reverse(), function(d) {
                                return X(d.plotY)
                            })), j = this.itemMarginTop + _.legendItem.label.getBBox().height + this.itemMarginBottom, it = _.yAxis.top - l.plotTop, W = _.visible ? (y ? y.plotY : _.yAxis.height) + (it - .3 * j) : it + _.yAxis.height, a.push({
                                target: W,
                                size: j,
                                item: _
                            }))
                        }, this), D(a, l.plotHeight))) i = O.item.legendItem || {}, X(O.pos) && (i.y = l.plotTop - l.spacing[0] + O.pos)
                }
                render() {
                    let i = this.chart,
                        l = i.renderer,
                        a = this.options,
                        b = this.padding,
                        O = this.getAllItems(),
                        _, y, j, G = this.group,
                        W, it = this.box;
                    this.itemX = b, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = p(a.width, i.spacingBox.width - b), W = i.spacingBox.width - 2 * b - a.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (W /= 2), this.maxLegendWidth = this.widthOption || W, G || (this.group = G = l.g("legend").addClass(a.className || "").attr({
                        zIndex: 7
                    }).add(), this.contentGroup = l.g().attr({
                        zIndex: 1
                    }).add(G), this.scrollGroup = l.g().add(this.contentGroup)), this.renderTitle(), n(O, (d, c) => (d.options && d.options.legendIndex || 0) - (c.options && c.options.legendIndex || 0)), a.reversed && O.reverse(), this.allItems = O, this.display = _ = !!O.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, O.forEach(this.renderItem, this), O.forEach(this.layoutItem, this), y = (this.widthOption || this.offsetWidth) + b, j = this.lastItemY + this.lastLineHeight + this.titleHeight, j = this.handleOverflow(j) + b, it || (this.box = it = l.rect().addClass("highcharts-legend-box").attr({
                        r: a.borderRadius
                    }).add(G)), i.styledMode || it.attr({
                        stroke: a.borderColor,
                        "stroke-width": a.borderWidth || 0,
                        fill: a.backgroundColor || "none"
                    }).shadow(a.shadow), y > 0 && j > 0 && it[it.placed ? "animate" : "attr"](it.crisp.call({}, {
                        x: 0,
                        y: 0,
                        width: y,
                        height: j
                    }, it.strokeWidth())), G[_ ? "show" : "hide"](), i.styledMode && G.getStyle("display") === "none" && (y = j = 0), this.legendWidth = y, this.legendHeight = j, _ && this.align(), this.proximate || this.positionItems(), x(this, "afterRender")
                }
                align(i = this.chart.spacingBox) {
                    let l = this.chart,
                        a = this.options,
                        b = i.y;
                    /(lth|ct|rth)/.test(this.getAlignment()) && l.titleOffset[0] > 0 ? b += l.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && l.titleOffset[2] > 0 && (b -= l.titleOffset[2]), b !== i.y && (i = L(i, {
                        y: b
                    })), l.hasRendered || (this.group.placed = !1), this.group.align(L(a, {
                        width: this.legendWidth,
                        height: this.legendHeight,
                        verticalAlign: this.proximate ? "top" : a.verticalAlign
                    }), !0, i)
                }
                handleOverflow(i) {
                    let l = this,
                        a = this.chart,
                        b = a.renderer,
                        O = this.options,
                        _ = O.y,
                        y = O.verticalAlign === "top",
                        j = this.padding,
                        G = O.maxHeight,
                        W = O.navigation,
                        it = k(W.animation, !0),
                        d = W.arrowSize || 12,
                        c = this.pages,
                        S = this.allItems,
                        B = function(q) {
                            typeof q == "number" ? U.attr({
                                height: q
                            }) : U && (l.clipRect = U.destroy(), l.contentGroup.clip()), l.contentGroup.div && (l.contentGroup.div.style.clip = q ? "rect(" + j + "px,9999px," + (j + q) + "px,0)" : "auto")
                        },
                        s = function(q) {
                            return l[q] = b.circle(0, 0, 1.3 * d).translate(d / 2, d / 2).add(N), a.styledMode || l[q].attr("fill", "rgba(0,0,0,0.0001)"), l[q]
                        },
                        g, f, C, A = a.spacingBox.height + (y ? -_ : _) - j,
                        N = this.nav,
                        U = this.clipRect;
                    return O.layout !== "horizontal" || O.verticalAlign === "middle" || O.floating || (A /= 2), G && (A = Math.min(A, G)), c.length = 0, i && A > 0 && i > A && W.enabled !== !1 ? (this.clipHeight = g = Math.max(A - 20 - this.titleHeight - j, 0), this.currentPage = k(this.currentPage, 1), this.fullHeight = i, S.forEach((q, K) => {
                        let at = (C = q.legendItem || {}).y || 0,
                            lt = Math.round(C.label.getBBox().height),
                            R = c.length;
                        (!R || at - c[R - 1] > g && (f || at) !== c[R - 1]) && (c.push(f || at), R++), C.pageIx = R - 1, f && ((S[K - 1].legendItem || {}).pageIx = R - 1), K === S.length - 1 && at + lt - c[R - 1] > g && at > c[R - 1] && (c.push(at), C.pageIx = R), at !== f && (f = at)
                    }), U || (U = l.clipRect = b.clipRect(0, j - 2, 9999, 0), l.contentGroup.clip(U)), B(g), N || (this.nav = N = b.g().attr({
                        zIndex: 1
                    }).add(this.group), this.up = b.symbol("triangle", 0, 0, d, d).add(N), s("upTracker").on("click", function() {
                        l.scroll(-1, it)
                    }), this.pager = b.text("", 15, 10).addClass("highcharts-legend-navigation"), !a.styledMode && W.style && this.pager.css(W.style), this.pager.add(N), this.down = b.symbol("triangle-down", 0, 0, d, d).add(N), s("downTracker").on("click", function() {
                        l.scroll(1, it)
                    })), l.scroll(0), i = A) : N && (B(), this.nav = N.destroy(), this.scrollGroup.attr({
                        translateY: 1
                    }), this.clipHeight = 0), i
                }
                scroll(i, l) {
                    let a = this.chart,
                        b = this.pages,
                        O = b.length,
                        _ = this.clipHeight,
                        y = this.options.navigation,
                        j = this.pager,
                        G = this.padding,
                        W = this.currentPage + i;
                    W > O && (W = O), W > 0 && (l !== void 0 && z(l, a), this.nav.attr({
                        translateX: G,
                        translateY: _ + this.padding + 7 + this.titleHeight,
                        visibility: "inherit"
                    }), [this.up, this.upTracker].forEach(function(it) {
                        it.attr({
                            class: W === 1 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                        })
                    }), j.attr({
                        text: W + "/" + O
                    }), [this.down, this.downTracker].forEach(function(it) {
                        it.attr({
                            x: 18 + this.pager.getBBox().width,
                            class: W === O ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                        })
                    }, this), a.styledMode || (this.up.attr({
                        fill: W === 1 ? y.inactiveColor : y.activeColor
                    }), this.upTracker.css({
                        cursor: W === 1 ? "default" : "pointer"
                    }), this.down.attr({
                        fill: W === O ? y.inactiveColor : y.activeColor
                    }), this.downTracker.css({
                        cursor: W === O ? "default" : "pointer"
                    })), this.scrollOffset = -b[W - 1] + this.initialItemY, this.scrollGroup.animate({
                        translateY: this.scrollOffset
                    }), this.currentPage = W, this.positionCheckboxes(), t(() => {
                        x(this, "afterScroll", {
                            currentPage: W
                        })
                    }, Y(k(l, a.renderer.globalAnimation, !0)).duration))
                }
                setItemEvents(i, l, a) {
                    let b = this,
                        O = i.legendItem || {},
                        _ = b.chart.renderer.boxWrapper,
                        y = i instanceof ht,
                        j = "highcharts-legend-" + (y ? "point" : "series") + "-active",
                        G = b.chart.styledMode,
                        W = a ? [l, O.symbol] : [O.group],
                        it = d => {
                            b.allItems.forEach(c => {
                                i !== c && [c].concat(c.linkedSeries || []).forEach(S => {
                                    S.setState(d, !y)
                                })
                            })
                        };
                    for (let d of W) d && d.on("mouseover", function() {
                        i.visible && it("inactive"), i.setState("hover"), i.visible && _.addClass(j), G || l.css(b.options.itemHoverStyle)
                    }).on("mouseout", function() {
                        b.chart.styledMode || l.css(L(i.visible ? b.itemStyle : b.itemHiddenStyle)), it(""), _.removeClass(j), i.setState()
                    }).on("click", function(c) {
                        let S = "legendItemClick",
                            B = function() {
                                i.setVisible && i.setVisible(), it(i.visible ? "inactive" : "")
                            };
                        _.removeClass(j), c = {
                            browserEvent: c
                        }, i.firePointEvent ? i.firePointEvent(S, c, B) : x(i, S, c, B)
                    })
                }
                createCheckboxForItem(i) {
                    i.checkbox = v("input", {
                        type: "checkbox",
                        className: "highcharts-legend-checkbox",
                        checked: i.selected,
                        defaultChecked: i.selected
                    }, this.options.itemCheckboxStyle, this.chart.container), T(i.checkbox, "click", function(l) {
                        let a = l.target;
                        x(i.series || i, "checkboxClick", {
                            checked: a.checked,
                            item: i
                        }, function() {
                            i.select()
                        })
                    })
                }
            }
            return (et = e || (e = {})).compose = function(o) {
                r(w, "Core.Legend") && T(o, "beforeMargins", function() {
                    this.legend = new et(this, this.options.legend)
                })
            }, e
        }), ct(P, "Core/Legend/LegendSymbol.js", [P["Core/Utilities.js"]], function(V) {
            var Z;
            let {
                extend: ot,
                merge: ht,
                pick: st
            } = V;
            return function(J) {
                function et(Y, z, H) {
                    var n;
                    let w = this.legendItem = this.legendItem || {},
                        {
                            chart: I,
                            options: D
                        } = this,
                        {
                            baseline: T = 0,
                            symbolWidth: v,
                            symbolHeight: M
                        } = Y,
                        u = this.symbol || "circle",
                        m = M / 2,
                        h = I.renderer,
                        x = w.group,
                        X = T - Math.round(M * (H ? .4 : .3)),
                        L = {},
                        k, r = D.marker,
                        p = 0;
                    if (I.styledMode || (L["stroke-width"] = Math.min(D.lineWidth || 0, 24), D.dashStyle ? L.dashstyle = D.dashStyle : D.linecap === "square" || (L["stroke-linecap"] = "round")), w.line = h.path().addClass("highcharts-graph").attr(L).add(x), H && (w.area = h.path().addClass("highcharts-area").add(x)), L["stroke-linecap"] && (p = Math.min(w.line.strokeWidth(), v) / 2), v) {
                        let t = [
                            ["M", p, X],
                            ["L", v - p, X]
                        ];
                        w.line.attr({
                            d: t
                        }), (n = w.area) == null || n.attr({
                            d: [...t, ["L", v - p, T],
                                ["L", p, T]
                            ]
                        })
                    }
                    if (r && r.enabled !== !1 && v) {
                        let t = Math.min(st(r.radius, m), m);
                        u.indexOf("url") === 0 && (r = ht(r, {
                            width: M,
                            height: M
                        }), t = 0), w.symbol = k = h.symbol(u, v / 2 - t, X - t, 2 * t, 2 * t, ot({
                            context: "legend"
                        }, r)).addClass("highcharts-point").add(x), k.isMarker = !0
                    }
                }
                J.areaMarker = function(Y, z) {
                    et.call(this, Y, z, !0)
                }, J.lineMarker = et, J.rectangle = function(Y, z) {
                    let H = z.legendItem || {},
                        w = Y.options,
                        I = Y.symbolHeight,
                        D = w.squareSymbol,
                        T = D ? I : Y.symbolWidth;
                    H.symbol = this.chart.renderer.rect(D ? (Y.symbolWidth - I) / 2 : 0, Y.baseline - I + 1, T, I, st(Y.options.symbolRadius, I / 2)).addClass("highcharts-point").attr({
                        zIndex: 3
                    }).add(H.group)
                }
            }(Z || (Z = {})), Z
        }), ct(P, "Core/Series/SeriesDefaults.js", [], function() {
            return {
                lineWidth: 2,
                allowPointSelect: !1,
                crisp: !0,
                showCheckbox: !1,
                animation: {
                    duration: 1e3
                },
                enableMouseTracking: !0,
                events: {},
                marker: {
                    enabledThreshold: 2,
                    lineColor: "#ffffff",
                    lineWidth: 0,
                    radius: 4,
                    states: {
                        normal: {
                            animation: !0
                        },
                        hover: {
                            animation: {
                                duration: 150
                            },
                            enabled: !0,
                            radiusPlus: 2,
                            lineWidthPlus: 1
                        },
                        select: {
                            fillColor: "#cccccc",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: {
                    animation: {},
                    align: "center",
                    borderWidth: 0,
                    defer: !0,
                    formatter: function() {
                        let {
                            numberFormatter: V
                        } = this.series.chart;
                        return typeof this.y != "number" ? "" : V(this.y, -1)
                    },
                    padding: 5,
                    style: {
                        fontSize: "0.7em",
                        fontWeight: "bold",
                        color: "contrast",
                        textOutline: "1px contrast"
                    },
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0
                },
                cropThreshold: 300,
                opacity: 1,
                pointRange: 0,
                softThreshold: !0,
                states: {
                    normal: {
                        animation: !0
                    },
                    hover: {
                        animation: {
                            duration: 150
                        },
                        lineWidthPlus: 1,
                        marker: {},
                        halo: {
                            size: 10,
                            opacity: .25
                        }
                    },
                    select: {
                        animation: {
                            duration: 0
                        }
                    },
                    inactive: {
                        animation: {
                            duration: 150
                        },
                        opacity: .2
                    }
                },
                stickyTracking: !0,
                turboThreshold: 1e3,
                findNearestPointBy: "x"
            }
        }), ct(P, "Core/Series/SeriesRegistry.js", [P["Core/Globals.js"], P["Core/Defaults.js"], P["Core/Series/Point.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht) {
            var st;
            let {
                defaultOptions: J
            } = Z, {
                extend: et,
                extendClass: Y,
                merge: z
            } = ht;
            return function(H) {
                function w(I, D) {
                    let T = J.plotOptions || {},
                        v = D.defaultOptions,
                        M = D.prototype;
                    return M.type = I, M.pointClass || (M.pointClass = ot), !H.seriesTypes[I] && (v && (T[I] = v), H.seriesTypes[I] = D, !0)
                }
                H.seriesTypes = V.seriesTypes, H.registerSeriesType = w, H.seriesType = function(I, D, T, v, M) {
                    let u = J.plotOptions || {};
                    if (D = D || "", u[I] = z(u[D], T), delete H.seriesTypes[I], w(I, Y(H.seriesTypes[D] || function() {}, v)), H.seriesTypes[I].prototype.type = I, M) {
                        class m extends ot {}
                        et(m.prototype, M), H.seriesTypes[I].prototype.pointClass = m
                    }
                    return H.seriesTypes[I]
                }
            }(st || (st = {})), st
        }), ct(P, "Core/Series/Series.js", [P["Core/Animation/AnimationUtilities.js"], P["Core/Defaults.js"], P["Core/Foundation.js"], P["Core/Globals.js"], P["Core/Legend/LegendSymbol.js"], P["Core/Series/Point.js"], P["Core/Series/SeriesDefaults.js"], P["Core/Series/SeriesRegistry.js"], P["Core/Renderer/SVG/SVGElement.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht, st, J, et, Y, z, H) {
            let {
                animObject: w,
                setAnimation: I
            } = V, {
                defaultOptions: D
            } = Z, {
                registerEventOptions: T
            } = ot, {
                svg: v,
                win: M
            } = ht, {
                seriesTypes: u
            } = Y, {
                arrayMax: m,
                arrayMin: h,
                clamp: x,
                correctFloat: X,
                crisp: L,
                defined: k,
                destroyObjectProperties: r,
                diffObjects: p,
                erase: n,
                error: t,
                extend: e,
                find: o,
                fireEvent: i,
                getClosestDistance: l,
                getNestedProperty: a,
                insertItem: b,
                isArray: O,
                isNumber: _,
                isString: y,
                merge: j,
                objectEach: G,
                pick: W,
                removeEvent: it,
                splat: d,
                syncTimeout: c
            } = H;
            class S {
                constructor() {
                    this.zoneAxis = "y"
                }
                init(s, g) {
                    let f;
                    i(this, "init", {
                        options: g
                    });
                    let C = this,
                        A = s.series;
                    this.eventsToUnbind = [], C.chart = s, C.options = C.setOptions(g);
                    let N = C.options,
                        U = N.visible !== !1;
                    C.linkedSeries = [], C.bindAxes(), e(C, {
                        name: N.name,
                        state: "",
                        visible: U,
                        selected: N.selected === !0
                    }), T(this, N);
                    let q = N.events;
                    (q && q.click || N.point && N.point.events && N.point.events.click || N.allowPointSelect) && (s.runTrackerClick = !0), C.getColor(), C.getSymbol(), C.parallelArrays.forEach(function(K) {
                        C[K + "Data"] || (C[K + "Data"] = [])
                    }), C.isCartesian && (s.hasCartesianSeries = !0), A.length && (f = A[A.length - 1]), C._i = W(f && f._i, -1) + 1, C.opacity = C.options.opacity, s.orderItems("series", b(this, A)), N.dataSorting && N.dataSorting.enabled ? C.setDataSortingOptions() : C.points || C.data || C.setData(N.data, !1), i(this, "afterInit")
                }
                is(s) {
                    return u[s] && this instanceof u[s]
                }
                bindAxes() {
                    let s, g = this,
                        f = g.options,
                        C = g.chart;
                    i(this, "bindAxes", null, function() {
                        (g.axisTypes || []).forEach(function(A) {
                            (C[A] || []).forEach(function(N) {
                                s = N.options, (W(f[A], 0) === N.index || f[A] !== void 0 && f[A] === s.id) && (b(g, N.series), g[A] = N, N.isDirty = !0)
                            }), g[A] || g.optionalAxis === A || t(18, !0, C)
                        })
                    }), i(this, "afterBindAxes")
                }
                updateParallelArrays(s, g, f) {
                    let C = s.series,
                        A = _(g) ? function(N) {
                            let U = N === "y" && C.toYData ? C.toYData(s) : s[N];
                            C[N + "Data"][g] = U
                        } : function(N) {
                            Array.prototype[g].apply(C[N + "Data"], f)
                        };
                    C.parallelArrays.forEach(A)
                }
                hasData() {
                    return this.visible && this.dataMax !== void 0 && this.dataMin !== void 0 || this.visible && this.yData && this.yData.length > 0
                }
                hasMarkerChanged(s, g) {
                    let f = s.marker,
                        C = g.marker || {};
                    return f && (C.enabled && !f.enabled || C.symbol !== f.symbol || C.height !== f.height || C.width !== f.width)
                }
                autoIncrement(s) {
                    let g = this.options,
                        f = g.pointIntervalUnit,
                        C = g.relativeXValue,
                        A = this.chart.time,
                        N = this.xIncrement,
                        U, q;
                    return N = W(N, g.pointStart, 0), this.pointInterval = q = W(this.pointInterval, g.pointInterval, 1), C && _(s) && (q *= s), f && (U = new A.Date(N), f === "day" ? A.set("Date", U, A.get("Date", U) + q) : f === "month" ? A.set("Month", U, A.get("Month", U) + q) : f === "year" && A.set("FullYear", U, A.get("FullYear", U) + q), q = U.getTime() - N), C && _(s) ? N + q : (this.xIncrement = N + q, N)
                }
                setDataSortingOptions() {
                    let s = this.options;
                    e(this, {
                        requireSorting: !1,
                        sorted: !1,
                        enabledDataSorting: !0,
                        allowDG: !1
                    }), k(s.pointRange) || (s.pointRange = 1)
                }
                setOptions(s) {
                    var Q, rt;
                    let g, f = this.chart,
                        C = f.options.plotOptions,
                        A = f.userOptions || {},
                        N = j(s),
                        U = f.styledMode,
                        q = {
                            plotOptions: C,
                            userOptions: N
                        };
                    i(this, "setOptions", q);
                    let K = q.plotOptions[this.type],
                        at = A.plotOptions || {},
                        lt = at.series || {},
                        R = D.plotOptions[this.type] || {},
                        E = at[this.type] || {};
                    this.userOptions = q.userOptions;
                    let F = j(K, C.series, E, N);
                    this.tooltipOptions = j(D.tooltip, (Q = D.plotOptions.series) == null ? void 0 : Q.tooltip, R == null ? void 0 : R.tooltip, f.userOptions.tooltip, (rt = at.series) == null ? void 0 : rt.tooltip, E.tooltip, N.tooltip), this.stickyTracking = W(N.stickyTracking, E.stickyTracking, lt.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || F.stickyTracking), K.marker === null && delete F.marker, this.zoneAxis = F.zoneAxis || "y";
                    let $ = this.zones = (F.zones || []).map(tt => ({ ...tt
                    }));
                    return (F.negativeColor || F.negativeFillColor) && !F.zones && (g = {
                        value: F[this.zoneAxis + "Threshold"] || F.threshold || 0,
                        className: "highcharts-negative"
                    }, U || (g.color = F.negativeColor, g.fillColor = F.negativeFillColor), $.push(g)), $.length && k($[$.length - 1].value) && $.push(U ? {} : {
                        color: this.color,
                        fillColor: this.fillColor
                    }), i(this, "afterSetOptions", {
                        options: F
                    }), F
                }
                getName() {
                    return W(this.options.name, "Series " + (this.index + 1))
                }
                getCyclic(s, g, f) {
                    let C, A, N = this.chart,
                        U = `${s}Index`,
                        q = `${s}Counter`,
                        K = (f == null ? void 0 : f.length) || N.options.chart.colorCount;
                    !g && (k(A = W(s === "color" ? this.options.colorIndex : void 0, this[U])) ? C = A : (N.series.length || (N[q] = 0), C = N[q] % K, N[q] += 1), f && (g = f[C])), C !== void 0 && (this[U] = C), this[s] = g
                }
                getColor() {
                    this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || D.plotOptions[this.type].color, this.chart.options.colors)
                }
                getPointsCollection() {
                    return (this.hasGroupedData ? this.points : this.data) || []
                }
                getSymbol() {
                    let s = this.options.marker;
                    this.getCyclic("symbol", s.symbol, this.chart.options.symbols)
                }
                findPointIndex(s, g) {
                    let f, C, A, N = s.id,
                        U = s.x,
                        q = this.points,
                        K = this.options.dataSorting;
                    if (N) {
                        let at = this.chart.get(N);
                        at instanceof J && (f = at)
                    } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
                        let at = lt => !lt.touched && lt.index === s.index;
                        if (K && K.matchByName ? at = lt => !lt.touched && lt.name === s.name : this.options.relativeXValue && (at = lt => !lt.touched && lt.options.x === s.x), !(f = o(q, at))) return
                    }
                    return f && (A = f && f.index) !== void 0 && (C = !0), A === void 0 && _(U) && (A = this.xData.indexOf(U, g)), A !== -1 && A !== void 0 && this.cropped && (A = A >= this.cropStart ? A - this.cropStart : A), !C && _(A) && q[A] && q[A].touched && (A = void 0), A
                }
                updateData(s, g) {
                    let f = this.options,
                        C = f.dataSorting,
                        A = this.points,
                        N = [],
                        U = this.requireSorting,
                        q = s.length === A.length,
                        K, at, lt, R, E = !0;
                    if (this.xIncrement = null, s.forEach(function(F, $) {
                            let Q, rt = k(F) && this.pointClass.prototype.optionsToObject.call({
                                    series: this
                                }, F) || {},
                                tt = rt.x;
                            rt.id || _(tt) ? ((Q = this.findPointIndex(rt, R)) === -1 || Q === void 0 ? N.push(F) : A[Q] && F !== f.data[Q] ? (A[Q].update(F, !1, null, !1), A[Q].touched = !0, U && (R = Q + 1)) : A[Q] && (A[Q].touched = !0), (!q || $ !== Q || C && C.enabled || this.hasDerivedData) && (K = !0)) : N.push(F)
                        }, this), K)
                        for (at = A.length; at--;)(lt = A[at]) && !lt.touched && lt.remove && lt.remove(!1, g);
                    else !q || C && C.enabled ? E = !1 : (s.forEach(function(F, $) {
                        F === A[$].y || A[$].destroyed || A[$].update(F, !1, null, !1)
                    }), N.length = 0);
                    return A.forEach(function(F) {
                        F && (F.touched = !1)
                    }), !!E && (N.forEach(function(F) {
                        this.addPoint(F, !1, null, null, !1)
                    }, this), this.xIncrement === null && this.xData && this.xData.length && (this.xIncrement = m(this.xData), this.autoIncrement()), !0)
                }
                setData(s, g = !0, f, C) {
                    var yt;
                    let A = this,
                        N = A.points,
                        U = N && N.length || 0,
                        q = A.options,
                        K = A.chart,
                        at = q.dataSorting,
                        lt = A.xAxis,
                        R = q.turboThreshold,
                        E = this.xData,
                        F = this.yData,
                        $ = A.pointArrayMap,
                        Q = $ && $.length,
                        rt = q.keys,
                        tt, nt, dt, pt = 0,
                        ut = 1,
                        ft = null,
                        mt;
                    K.options.chart.allowMutatingData || (q.data && delete A.options.data, A.userOptions.data && delete A.userOptions.data, mt = j(!0, s));
                    let bt = (s = mt || s || []).length;
                    if (at && at.enabled && (s = this.sortData(s)), K.options.chart.allowMutatingData && C !== !1 && bt && U && !A.cropped && !A.hasGroupedData && A.visible && !A.boosted && (dt = this.updateData(s, f)), !dt) {
                        if (A.xIncrement = null, A.colorCounter = 0, this.parallelArrays.forEach(function(xt) {
                                A[xt + "Data"].length = 0
                            }), R && bt > R)
                            if (_(ft = A.getFirstValidPoint(s)))
                                for (tt = 0; tt < bt; tt++) E[tt] = this.autoIncrement(), F[tt] = s[tt];
                            else if (O(ft))
                            if (Q)
                                if (ft.length === Q)
                                    for (tt = 0; tt < bt; tt++) E[tt] = this.autoIncrement(), F[tt] = s[tt];
                                else
                                    for (tt = 0; tt < bt; tt++) nt = s[tt], E[tt] = nt[0], F[tt] = nt.slice(1, Q + 1);
                        else if (rt && (pt = rt.indexOf("x"), ut = rt.indexOf("y"), pt = pt >= 0 ? pt : 0, ut = ut >= 0 ? ut : 1), ft.length === 1 && (ut = 0), pt === ut)
                            for (tt = 0; tt < bt; tt++) E[tt] = this.autoIncrement(), F[tt] = s[tt][ut];
                        else
                            for (tt = 0; tt < bt; tt++) nt = s[tt], E[tt] = nt[pt], F[tt] = nt[ut];
                        else t(12, !1, K);
                        else
                            for (tt = 0; tt < bt; tt++) nt = {
                                series: A
                            }, A.pointClass.prototype.applyOptions.apply(nt, [s[tt]]), A.updateParallelArrays(nt, tt);
                        for (F && y(F[0]) && t(14, !0, K), A.data = [], A.options.data = A.userOptions.data = s, tt = U; tt--;)(yt = N[tt]) == null || yt.destroy();
                        lt && (lt.minRange = lt.userMinRange), A.isDirty = K.isDirtyBox = !0, A.isDirtyData = !!N, f = !1
                    }
                    q.legendType === "point" && (this.processData(), this.generatePoints()), g && K.redraw(f)
                }
                sortData(s) {
                    let g = this,
                        f = g.options.dataSorting.sortKey || "y",
                        C = function(A, N) {
                            return k(N) && A.pointClass.prototype.optionsToObject.call({
                                series: A
                            }, N) || {}
                        };
                    return s.forEach(function(A, N) {
                        s[N] = C(g, A), s[N].index = N
                    }, this), s.concat().sort((A, N) => {
                        let U = a(f, A),
                            q = a(f, N);
                        return q < U ? -1 : q > U ? 1 : 0
                    }).forEach(function(A, N) {
                        A.x = N
                    }, this), g.linkedSeries && g.linkedSeries.forEach(function(A) {
                        let N = A.options,
                            U = N.data;
                        N.dataSorting && N.dataSorting.enabled || !U || (U.forEach(function(q, K) {
                            U[K] = C(A, q), s[K] && (U[K].x = s[K].x, U[K].index = K)
                        }), A.setData(U, !1))
                    }), s
                }
                getProcessedData(s) {
                    let g = this,
                        f = g.xAxis,
                        C = g.options.cropThreshold,
                        A = f == null ? void 0 : f.logarithmic,
                        N = g.isCartesian,
                        U, q, K = 0,
                        at, lt, R, E = g.xData,
                        F = g.yData,
                        $ = !1,
                        Q = E.length;
                    f && (lt = (at = f.getExtremes()).min, R = at.max, $ = !!(f.categories && !f.names.length)), N && g.sorted && !s && (!C || Q > C || g.forceCrop) && (E[Q - 1] < lt || E[0] > R ? (E = [], F = []) : g.yData && (E[0] < lt || E[Q - 1] > R) && (E = (U = this.cropData(g.xData, g.yData, lt, R)).xData, F = U.yData, K = U.start, q = !0));
                    let rt = l([A ? E.map(A.log2lin) : E], () => g.requireSorting && !$ && t(15, !1, g.chart));
                    return {
                        xData: E,
                        yData: F,
                        cropped: q,
                        cropStart: K,
                        closestPointRange: rt
                    }
                }
                processData(s) {
                    let g = this.xAxis;
                    if (this.isCartesian && !this.isDirty && !g.isDirty && !this.yAxis.isDirty && !s) return !1;
                    let f = this.getProcessedData();
                    this.cropped = f.cropped, this.cropStart = f.cropStart, this.processedXData = f.xData, this.processedYData = f.yData, this.closestPointRange = this.basePointRange = f.closestPointRange, i(this, "afterProcessData")
                }
                cropData(s, g, f, C) {
                    let A = s.length,
                        N, U, q = 0,
                        K = A;
                    for (N = 0; N < A; N++)
                        if (s[N] >= f) {
                            q = Math.max(0, N - 1);
                            break
                        }
                    for (U = N; U < A; U++)
                        if (s[U] > C) {
                            K = U + 1;
                            break
                        }
                    return {
                        xData: s.slice(q, K),
                        yData: g.slice(q, K),
                        start: q,
                        end: K
                    }
                }
                generatePoints() {
                    let s = this.options,
                        g = this.processedData || s.data,
                        f = this.processedXData,
                        C = this.processedYData,
                        A = this.pointClass,
                        N = f.length,
                        U = this.cropStart || 0,
                        q = this.hasGroupedData,
                        K = s.keys,
                        at = [],
                        lt = s.dataGrouping && s.dataGrouping.groupAll ? U : 0,
                        R, E, F, $, Q = this.data;
                    if (!Q && !q) {
                        let rt = [];
                        rt.length = g.length, Q = this.data = rt
                    }
                    for (K && q && (this.options.keys = !1), $ = 0; $ < N; $++) E = U + $, q ? ((F = new A(this, [f[$]].concat(d(C[$])))).dataGroup = this.groupMap[lt + $], F.dataGroup.options && (F.options = F.dataGroup.options, e(F, F.dataGroup.options), delete F.dataLabels)) : (F = Q[E]) || g[E] === void 0 || (Q[E] = F = new A(this, g[E], f[$])), F && (F.index = q ? lt + $ : E, at[$] = F);
                    if (this.options.keys = K, Q && (N !== (R = Q.length) || q))
                        for ($ = 0; $ < R; $++) $ !== U || q || ($ += N), Q[$] && (Q[$].destroyElements(), Q[$].plotX = void 0);
                    this.data = Q, this.points = at, i(this, "afterGeneratePoints")
                }
                getXExtremes(s) {
                    return {
                        min: h(s),
                        max: m(s)
                    }
                }
                getExtremes(s, g) {
                    let f = this.xAxis,
                        C = this.yAxis,
                        A = [],
                        N = this.requireSorting && !this.is("column") ? 1 : 0,
                        U = !!C && C.positiveValuesOnly,
                        q = g || this.getExtremesFromAll || this.options.getExtremesFromAll,
                        {
                            processedXData: K,
                            processedYData: at
                        } = this,
                        lt, R, E, F, $, Q, rt, tt = 0,
                        nt = 0,
                        dt = 0;
                    if (this.cropped && q) {
                        let mt = this.getProcessedData(!0);
                        K = mt.xData, at = mt.yData
                    }
                    let pt = (s = s || this.stackedYData || at || []).length,
                        ut = K || this.xData;
                    for (f && (tt = (lt = f.getExtremes()).min, nt = lt.max), Q = 0; Q < pt; Q++)
                        if (F = ut[Q], R = (_($ = s[Q]) || O($)) && ((_($) ? $ > 0 : $.length) || !U), E = g || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !f || (ut[Q + N] || F) >= tt && (ut[Q - N] || F) <= nt, R && E)
                            if (rt = $.length)
                                for (; rt--;) _($[rt]) && (A[dt++] = $[rt]);
                            else A[dt++] = $;
                    let ft = {
                        activeYData: A,
                        dataMin: h(A),
                        dataMax: m(A)
                    };
                    return i(this, "afterGetExtremes", {
                        dataExtremes: ft
                    }), ft
                }
                applyExtremes() {
                    let s = this.getExtremes();
                    return this.dataMin = s.dataMin, this.dataMax = s.dataMax, s
                }
                getFirstValidPoint(s) {
                    let g = s.length,
                        f = 0,
                        C = null;
                    for (; C === null && f < g;) C = s[f], f++;
                    return C
                }
                translate() {
                    var nt;
                    this.processedXData || this.processData(), this.generatePoints();
                    let s = this.options,
                        g = s.stacking,
                        f = this.xAxis,
                        C = f.categories,
                        A = this.enabledDataSorting,
                        N = this.yAxis,
                        U = this.points,
                        q = U.length,
                        K = this.pointPlacementToXValue(),
                        at = !!K,
                        lt = s.threshold,
                        R = s.startFromThreshold ? lt : 0,
                        E, F, $, Q, rt = Number.MAX_VALUE;

                    function tt(dt) {
                        return x(dt, -1e5, 1e5)
                    }
                    for (E = 0; E < q; E++) {
                        let dt, pt = U[E],
                            ut = pt.x,
                            ft, mt, bt = pt.y,
                            yt = pt.low,
                            xt = g && ((nt = N.stacking) == null ? void 0 : nt.stacks[(this.negStacks && bt < (R ? 0 : lt) ? "-" : "") + this.stackKey]);
                        F = f.translate(ut, !1, !1, !1, !0, K), pt.plotX = _(F) ? X(tt(F)) : void 0, g && this.visible && xt && xt[ut] && (Q = this.getStackIndicator(Q, ut, this.index), !pt.isNull && Q.key && (mt = (ft = xt[ut]).points[Q.key]), ft && O(mt) && (yt = mt[0], bt = mt[1], yt === R && Q.key === xt[ut].base && (yt = W(_(lt) ? lt : N.min)), N.positiveValuesOnly && k(yt) && yt <= 0 && (yt = void 0), pt.total = pt.stackTotal = W(ft.total), pt.percentage = k(pt.y) && ft.total ? pt.y / ft.total * 100 : void 0, pt.stackY = bt, this.irregularWidths || ft.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), pt.yBottom = k(yt) ? tt(N.translate(yt, !1, !0, !1, !0)) : void 0, this.dataModify && (bt = this.dataModify.modifyValue(bt, E)), _(bt) && pt.plotX !== void 0 && (dt = _(dt = N.translate(bt, !1, !0, !1, !0)) ? tt(dt) : void 0), pt.plotY = dt, pt.isInside = this.isPointInside(pt), pt.clientX = at ? X(f.translate(ut, !1, !1, !1, !0, K)) : F, pt.negative = (pt.y || 0) < (lt || 0), pt.category = W(C && C[pt.x], pt.x), pt.isNull || pt.visible === !1 || ($ !== void 0 && (rt = Math.min(rt, Math.abs(F - $))), $ = F), pt.zone = this.zones.length ? pt.getZone() : void 0, !pt.graphic && this.group && A && (pt.isNew = !0)
                    }
                    this.closestPointRangePx = rt, i(this, "afterTranslate")
                }
                getValidPoints(s, g, f) {
                    let C = this.chart;
                    return (s || this.points || []).filter(function(A) {
                        let {
                            plotX: N,
                            plotY: U
                        } = A;
                        return !!((f || !A.isNull && _(U)) && (!g || C.isInsidePlot(N, U, {
                            inverted: C.inverted
                        }))) && A.visible !== !1
                    })
                }
                getClipBox() {
                    let {
                        chart: s,
                        xAxis: g,
                        yAxis: f
                    } = this, {
                        x: C,
                        y: A,
                        width: N,
                        height: U
                    } = j(s.clipBox);
                    return g && g.len !== s.plotSizeX && (N = g.len), f && f.len !== s.plotSizeY && (U = f.len), s.inverted && !this.invertible && ([N, U] = [U, N]), {
                        x: C,
                        y: A,
                        width: N,
                        height: U
                    }
                }
                getSharedClipKey() {
                    return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey
                }
                setClip() {
                    let {
                        chart: s,
                        group: g,
                        markerGroup: f
                    } = this, C = s.sharedClips, A = s.renderer, N = this.getClipBox(), U = this.getSharedClipKey(), q = C[U];
                    q ? q.animate(N) : C[U] = q = A.clipRect(N), g && g.clip(this.options.clip === !1 ? void 0 : q), f && f.clip()
                }
                animate(s) {
                    let {
                        chart: g,
                        group: f,
                        markerGroup: C
                    } = this, A = g.inverted, N = w(this.options.animation), U = [this.getSharedClipKey(), N.duration, N.easing, N.defer].join(","), q = g.sharedClips[U], K = g.sharedClips[U + "m"];
                    if (s && f) {
                        let at = this.getClipBox();
                        if (q) q.attr("height", at.height);
                        else {
                            at.width = 0, A && (at.x = g.plotHeight), q = g.renderer.clipRect(at), g.sharedClips[U] = q;
                            let lt = {
                                x: -99,
                                y: -99,
                                width: A ? g.plotWidth + 199 : 99,
                                height: A ? 99 : g.plotHeight + 199
                            };
                            K = g.renderer.clipRect(lt), g.sharedClips[U + "m"] = K
                        }
                        f.clip(q), C == null || C.clip(K)
                    } else if (q && !q.hasClass("highcharts-animating")) {
                        let at = this.getClipBox(),
                            lt = N.step;
                        (C != null && C.element.childNodes.length || g.series.length > 1) && (N.step = function(R, E) {
                            lt && lt.apply(E, arguments), E.prop === "width" && (K != null && K.element) && K.attr(A ? "height" : "width", R + 99)
                        }), q.addClass("highcharts-animating").animate(at, N)
                    }
                }
                afterAnimate() {
                    this.setClip(), G(this.chart.sharedClips, (s, g, f) => {
                        s && !this.chart.container.querySelector(`[clip-path="url(#${s.id})"]`) && (s.destroy(), delete f[g])
                    }), this.finishedAnimating = !0, i(this, "afterAnimate")
                }
                drawPoints(s = this.points) {
                    let g, f, C, A, N, U, q, K = this.chart,
                        at = K.styledMode,
                        {
                            colorAxis: lt,
                            options: R
                        } = this,
                        E = R.marker,
                        F = this[this.specialGroup || "markerGroup"],
                        $ = this.xAxis,
                        Q = W(E.enabled, !$ || !!$.isRadial || null, this.closestPointRangePx >= E.enabledThreshold * E.radius);
                    if (E.enabled !== !1 || this._hasPointMarkers)
                        for (g = 0; g < s.length; g++)
                            if (A = (C = (f = s[g]).graphic) ? "animate" : "attr", N = f.marker || {}, U = !!f.marker, (Q && N.enabled === void 0 || N.enabled) && !f.isNull && f.visible !== !1) {
                                let rt = W(N.symbol, this.symbol, "rect");
                                q = this.markerAttribs(f, f.selected && "select"), this.enabledDataSorting && (f.startXPos = $.reversed ? -(q.width || 0) : $.width);
                                let tt = f.isInside !== !1;
                                if (!C && tt && ((q.width || 0) > 0 || f.hasImage) && (f.graphic = C = K.renderer.symbol(rt, q.x, q.y, q.width, q.height, U ? N : E).add(F), this.enabledDataSorting && K.hasRendered && (C.attr({
                                        x: f.startXPos
                                    }), A = "animate")), C && A === "animate" && C[tt ? "show" : "hide"](tt).animate(q), C) {
                                    let nt = this.pointAttribs(f, at || !f.selected ? void 0 : "select");
                                    at ? lt && C.css({
                                        fill: nt.fill
                                    }) : C[A](nt)
                                }
                                C && C.addClass(f.getClassName(), !0)
                            } else C && (f.graphic = C.destroy())
                }
                markerAttribs(s, g) {
                    let f = this.options,
                        C = f.marker,
                        A = s.marker || {},
                        N = A.symbol || C.symbol,
                        U = {},
                        q, K, at = W(A.radius, C && C.radius);
                    g && (q = C.states[g], at = W((K = A.states && A.states[g]) && K.radius, q && q.radius, at && at + (q && q.radiusPlus || 0))), s.hasImage = N && N.indexOf("url") === 0, s.hasImage && (at = 0);
                    let lt = s.pos();
                    return _(at) && lt && (f.crisp && (lt[0] = L(lt[0], s.hasImage ? 0 : N === "rect" ? (C == null ? void 0 : C.lineWidth) || 0 : 1)), U.x = lt[0] - at, U.y = lt[1] - at), at && (U.width = U.height = 2 * at), U
                }
                pointAttribs(s, g) {
                    let f = this.options.marker,
                        C = s && s.options,
                        A = C && C.marker || {},
                        N = C && C.color,
                        U = s && s.color,
                        q = s && s.zone && s.zone.color,
                        K, at, lt = this.color,
                        R, E, F = W(A.lineWidth, f.lineWidth),
                        $ = 1;
                    return lt = N || q || U || lt, R = A.fillColor || f.fillColor || lt, E = A.lineColor || f.lineColor || lt, g = g || "normal", K = f.states[g] || {}, F = W((at = A.states && A.states[g] || {}).lineWidth, K.lineWidth, F + W(at.lineWidthPlus, K.lineWidthPlus, 0)), R = at.fillColor || K.fillColor || R, {
                        stroke: E = at.lineColor || K.lineColor || E,
                        "stroke-width": F,
                        fill: R,
                        opacity: $ = W(at.opacity, K.opacity, $)
                    }
                }
                destroy(s) {
                    let g, f, C, A = this,
                        N = A.chart,
                        U = /AppleWebKit\/533/.test(M.navigator.userAgent),
                        q = A.data || [];
                    for (i(A, "destroy", {
                            keepEventsForUpdate: s
                        }), this.removeEvents(s), (A.axisTypes || []).forEach(function(K) {
                            (C = A[K]) && C.series && (n(C.series, A), C.isDirty = C.forceRedraw = !0)
                        }), A.legendItem && A.chart.legend.destroyItem(A), g = q.length; g--;)(f = q[g]) && f.destroy && f.destroy();
                    for (let K of A.zones) r(K, void 0, !0);
                    H.clearTimeout(A.animationTimeout), G(A, function(K, at) {
                        K instanceof z && !K.survive && K[U && at === "group" ? "hide" : "destroy"]()
                    }), N.hoverSeries === A && (N.hoverSeries = void 0), n(N.series, A), N.orderItems("series"), G(A, function(K, at) {
                        s && at === "hcEvents" || delete A[at]
                    })
                }
                applyZones() {
                    let {
                        area: s,
                        chart: g,
                        graph: f,
                        zones: C,
                        points: A,
                        xAxis: N,
                        yAxis: U,
                        zoneAxis: q
                    } = this, {
                        inverted: K,
                        renderer: at
                    } = g, lt = this[`${q}Axis`], {
                        isXAxis: R,
                        len: E = 0
                    } = lt || {}, F = ((f == null ? void 0 : f.strokeWidth()) || 0) / 2 + 1, $ = (Q, rt = 0, tt = 0) => {
                        K && (tt = E - tt);
                        let {
                            translated: nt = 0,
                            lineClip: dt
                        } = Q, pt = tt - nt;
                        dt == null || dt.push(["L", rt, Math.abs(pt) < F ? tt - F * (pt <= 0 ? -1 : 1) : nt])
                    };
                    if (C.length && (f || s) && lt && _(lt.min)) {
                        let Q = lt.getExtremes().max,
                            rt = dt => {
                                dt.forEach((pt, ut) => {
                                    (pt[0] === "M" || pt[0] === "L") && (dt[ut] = [pt[0], R ? E - pt[1] : pt[1], R ? pt[2] : E - pt[2]])
                                })
                            };
                        if (C.forEach(dt => {
                                dt.lineClip = [], dt.translated = x(lt.toPixels(W(dt.value, Q), !0) || 0, 0, E)
                            }), f && !this.showLine && f.hide(), s && s.hide(), q === "y" && A.length < N.len)
                            for (let dt of A) {
                                let {
                                    plotX: pt,
                                    plotY: ut,
                                    zone: ft
                                } = dt, mt = ft && C[C.indexOf(ft) - 1];
                                ft && $(ft, pt, ut), mt && $(mt, pt, ut)
                            }
                        let tt = [],
                            nt = lt.toPixels(lt.getExtremes().min, !0);
                        C.forEach(dt => {
                            var Tt, At;
                            let pt = dt.lineClip || [],
                                ut = Math.round(dt.translated || 0);
                            N.reversed && pt.reverse();
                            let {
                                clip: ft,
                                simpleClip: mt
                            } = dt, bt = 0, yt = 0, xt = N.len, kt = U.len;
                            R ? (bt = ut, xt = nt) : (yt = ut, kt = nt);
                            let St = [
                                    ["M", bt, yt],
                                    ["L", xt, yt],
                                    ["L", xt, kt],
                                    ["L", bt, kt],
                                    ["Z"]
                                ],
                                Mt = [St[0], ...pt, St[1], St[2], ...tt, St[3], St[4]];
                            tt = pt.reverse(), nt = ut, K && (rt(Mt), s && rt(St)), ft ? (ft.animate({
                                d: Mt
                            }), mt == null || mt.animate({
                                d: St
                            })) : (ft = dt.clip = at.path(Mt), s && (mt = dt.simpleClip = at.path(St))), f && ((Tt = dt.graph) == null || Tt.clip(ft)), s && ((At = dt.area) == null || At.clip(mt))
                        })
                    } else this.visible && (f && f.show(), s && s.show())
                }
                plotGroup(s, g, f, C, A) {
                    let N = this[s],
                        U = !N,
                        q = {
                            visibility: f,
                            zIndex: C || .1
                        };
                    return k(this.opacity) && !this.chart.styledMode && this.state !== "inactive" && (q.opacity = this.opacity), N || (this[s] = N = this.chart.renderer.g().add(A)), N.addClass("highcharts-" + g + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (k(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (N.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), N.attr(q)[U ? "attr" : "animate"](this.getPlotBox(g)), N
                }
                getPlotBox(s) {
                    let g = this.xAxis,
                        f = this.yAxis,
                        C = this.chart,
                        A = C.inverted && !C.polar && g && this.invertible && s === "series";
                    return C.inverted && (g = f, f = this.xAxis), {
                        translateX: g ? g.left : C.plotLeft,
                        translateY: f ? f.top : C.plotTop,
                        rotation: A ? 90 : 0,
                        rotationOriginX: A ? (g.len - f.len) / 2 : 0,
                        rotationOriginY: A ? (g.len + f.len) / 2 : 0,
                        scaleX: A ? -1 : 1,
                        scaleY: 1
                    }
                }
                removeEvents(s) {
                    let {
                        eventsToUnbind: g
                    } = this;
                    s || it(this), g.length && (g.forEach(f => {
                        f()
                    }), g.length = 0)
                }
                render() {
                    var at, lt, R, E, F;
                    let s = this,
                        {
                            chart: g,
                            options: f,
                            hasRendered: C
                        } = s,
                        A = w(f.animation),
                        N = s.visible ? "inherit" : "hidden",
                        U = f.zIndex,
                        q = g.seriesGroup,
                        K = s.finishedAnimating ? 0 : A.duration;
                    i(this, "render"), s.plotGroup("group", "series", N, U, q), s.markerGroup = s.plotGroup("markerGroup", "markers", N, U, q), f.clip !== !1 && s.setClip(), K && ((at = s.animate) == null || at.call(s, !0)), s.drawGraph && (s.drawGraph(), s.applyZones()), s.visible && s.drawPoints(), (lt = s.drawDataLabels) == null || lt.call(s), (R = s.redrawPoints) == null || R.call(s), f.enableMouseTracking && ((E = s.drawTracker) == null || E.call(s)), K && ((F = s.animate) == null || F.call(s)), C || (K && A.defer && (K += A.defer), s.animationTimeout = c(() => {
                        s.afterAnimate()
                    }, K || 0)), s.isDirty = !1, s.hasRendered = !0, i(s, "afterRender")
                }
                redraw() {
                    let s = this.isDirty || this.isDirtyData;
                    this.translate(), this.render(), s && delete this.kdTree
                }
                reserveSpace() {
                    return this.visible || !this.chart.options.chart.ignoreHiddenSeries
                }
                searchPoint(s, g) {
                    let {
                        xAxis: f,
                        yAxis: C
                    } = this, A = this.chart.inverted;
                    return this.searchKDTree({
                        clientX: A ? f.len - s.chartY + f.pos : s.chartX - f.pos,
                        plotY: A ? C.len - s.chartX + C.pos : s.chartY - C.pos
                    }, g, s)
                }
                buildKDTree(s) {
                    this.buildingKdTree = !0;
                    let g = this,
                        f = g.options.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
                    delete g.kdTree, c(function() {
                        g.kdTree = function C(A, N, U) {
                            let q, K, at = A == null ? void 0 : A.length;
                            if (at) return q = g.kdAxisArray[N % U], A.sort((lt, R) => (lt[q] || 0) - (R[q] || 0)), {
                                point: A[K = Math.floor(at / 2)],
                                left: C(A.slice(0, K), N + 1, U),
                                right: C(A.slice(K + 1), N + 1, U)
                            }
                        }(g.getValidPoints(void 0, !g.directTouch), f, f), g.buildingKdTree = !1
                    }, g.options.kdNow || (s == null ? void 0 : s.type) === "touchstart" ? 0 : 1)
                }
                searchKDTree(s, g, f) {
                    let C = this,
                        [A, N] = this.kdAxisArray,
                        U = g ? "distX" : "dist",
                        q = (C.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1,
                        K = !!C.isBubble;
                    if (this.kdTree || this.buildingKdTree || this.buildKDTree(f), this.kdTree) return function at(lt, R, E, F) {
                        var ft;
                        let $ = R.point,
                            Q = C.kdAxisArray[E % F],
                            rt, tt, nt = $;
                        (function(mt, bt) {
                            var It;
                            let yt = mt[A],
                                xt = bt[A],
                                kt = k(yt) && k(xt) ? yt - xt : null,
                                St = mt[N],
                                Mt = bt[N],
                                Tt = k(St) && k(Mt) ? St - Mt : 0,
                                At = K && ((It = bt.marker) == null ? void 0 : It.radius) || 0;
                            bt.dist = Math.sqrt((kt && kt * kt || 0) + Tt * Tt) - At, bt.distX = k(kt) ? Math.abs(kt) - At : Number.MAX_VALUE
                        })(lt, $);
                        let dt = (lt[Q] || 0) - ($[Q] || 0) + (K && ((ft = $.marker) == null ? void 0 : ft.radius) || 0),
                            pt = dt < 0 ? "left" : "right",
                            ut = dt < 0 ? "right" : "left";
                        return R[pt] && (nt = (rt = at(lt, R[pt], E + 1, F))[U] < nt[U] ? rt : $), R[ut] && Math.sqrt(dt * dt) < nt[U] && (nt = (tt = at(lt, R[ut], E + 1, F))[U] < nt[U] ? tt : nt), nt
                    }(s, this.kdTree, q, q)
                }
                pointPlacementToXValue() {
                    let {
                        options: s,
                        xAxis: g
                    } = this, f = s.pointPlacement;
                    return f === "between" && (f = g.reversed ? -.5 : .5), _(f) ? f * (s.pointRange || g.pointRange) : 0
                }
                isPointInside(s) {
                    let {
                        chart: g,
                        xAxis: f,
                        yAxis: C
                    } = this, {
                        plotX: A = -1,
                        plotY: N = -1
                    } = s;
                    return N >= 0 && N <= (C ? C.len : g.plotHeight) && A >= 0 && A <= (f ? f.len : g.plotWidth)
                }
                drawTracker() {
                    var R;
                    let s = this,
                        g = s.options,
                        f = g.trackByArea,
                        C = [].concat((f ? s.areaPath : s.graphPath) || []),
                        A = s.chart,
                        N = A.pointer,
                        U = A.renderer,
                        q = ((R = A.options.tooltip) == null ? void 0 : R.snap) || 0,
                        K = () => {
                            g.enableMouseTracking && A.hoverSeries !== s && s.onMouseOver()
                        },
                        at = "rgba(192,192,192," + (v ? 1e-4 : .002) + ")",
                        lt = s.tracker;
                    lt ? lt.attr({
                        d: C
                    }) : s.graph && (s.tracker = lt = U.path(C).attr({
                        visibility: s.visible ? "inherit" : "hidden",
                        zIndex: 2
                    }).addClass(f ? "highcharts-tracker-area" : "highcharts-tracker-line").add(s.group), A.styledMode || lt.attr({
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        stroke: at,
                        fill: f ? at : "none",
                        "stroke-width": s.graph.strokeWidth() + (f ? 0 : 2 * q)
                    }), [s.tracker, s.markerGroup, s.dataLabelsGroup].forEach(E => {
                        E && (E.addClass("highcharts-tracker").on("mouseover", K).on("mouseout", F => {
                            N == null || N.onTrackerMouseOut(F)
                        }), g.cursor && !A.styledMode && E.css({
                            cursor: g.cursor
                        }), E.on("touchstart", K))
                    })), i(this, "afterDrawTracker")
                }
                addPoint(s, g, f, C, A) {
                    let N, U, q = this.options,
                        K = this.data,
                        at = this.chart,
                        lt = this.xAxis,
                        R = lt && lt.hasNames && lt.names,
                        E = q.data,
                        F = this.xData;
                    g = W(g, !0);
                    let $ = {
                        series: this
                    };
                    this.pointClass.prototype.applyOptions.apply($, [s]);
                    let Q = $.x;
                    if (U = F.length, this.requireSorting && Q < F[U - 1])
                        for (N = !0; U && F[U - 1] > Q;) U--;
                    this.updateParallelArrays($, "splice", [U, 0, 0]), this.updateParallelArrays($, U), R && $.name && (R[Q] = $.name), E.splice(U, 0, s), (N || this.processedData) && (this.data.splice(U, 0, null), this.processData()), q.legendType === "point" && this.generatePoints(), f && (K[0] && K[0].remove ? K[0].remove(!1) : (K.shift(), this.updateParallelArrays($, "shift"), E.shift())), A !== !1 && i(this, "addPoint", {
                        point: $
                    }), this.isDirty = !0, this.isDirtyData = !0, g && at.redraw(C)
                }
                removePoint(s, g, f) {
                    let C = this,
                        A = C.data,
                        N = A[s],
                        U = C.points,
                        q = C.chart,
                        K = function() {
                            U && U.length === A.length && U.splice(s, 1), A.splice(s, 1), C.options.data.splice(s, 1), C.updateParallelArrays(N || {
                                series: C
                            }, "splice", [s, 1]), N && N.destroy(), C.isDirty = !0, C.isDirtyData = !0, g && q.redraw()
                        };
                    I(f, q), g = W(g, !0), N ? N.firePointEvent("remove", null, K) : K()
                }
                remove(s, g, f, C) {
                    let A = this,
                        N = A.chart;

                    function U() {
                        A.destroy(C), N.isDirtyLegend = N.isDirtyBox = !0, N.linkSeries(C), W(s, !0) && N.redraw(g)
                    }
                    f !== !1 ? i(A, "remove", null, U) : U()
                }
                update(s, g) {
                    var rt, tt, nt;
                    i(this, "update", {
                        options: s = p(s, this.userOptions)
                    });
                    let f = this,
                        C = f.chart,
                        A = f.userOptions,
                        N = f.initialType || f.type,
                        U = C.options.plotOptions,
                        q = u[N].prototype,
                        K = f.finishedAnimating && {
                            animation: !1
                        },
                        at = {},
                        lt, R, E = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"],
                        F = s.type || A.type || C.options.chart.type,
                        $ = !(this.hasDerivedData || F && F !== this.type || s.pointStart !== void 0 || s.pointInterval !== void 0 || s.relativeXValue !== void 0 || s.joinBy || s.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some(dt => f.hasOptionChanged(dt)));
                    F = F || N, $ && (E.push("data", "isDirtyData", "isDirtyCanvas", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX", "transformGroups"), s.visible !== !1 && E.push("area", "graph"), f.parallelArrays.forEach(function(dt) {
                        E.push(dt + "Data")
                    }), s.data && (s.dataSorting && e(f.options.dataSorting, s.dataSorting), this.setData(s.data, !1))), s = j(A, {
                        index: A.index === void 0 ? f.index : A.index,
                        pointStart: ((rt = U == null ? void 0 : U.series) == null ? void 0 : rt.pointStart) ? ? A.pointStart ? ? ((tt = f.xData) == null ? void 0 : tt[0])
                    }, !$ && {
                        data: f.options.data
                    }, s, K), $ && s.data && (s.data = f.options.data), (E = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(E)).forEach(function(dt) {
                        E[dt] = f[dt], delete f[dt]
                    });
                    let Q = !1;
                    if (u[F]) {
                        if (Q = F !== f.type, f.remove(!1, !1, !1, !0), Q)
                            if (C.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(f, u[F].prototype);
                            else {
                                let dt = Object.hasOwnProperty.call(f, "hcEvents") && f.hcEvents;
                                for (R in q) f[R] = void 0;
                                e(f, u[F].prototype), dt ? f.hcEvents = dt : delete f.hcEvents
                            }
                    } else t(17, !0, C, {
                        missingModuleFor: F
                    });
                    if (E.forEach(function(dt) {
                            f[dt] = E[dt]
                        }), f.init(C, s), $ && this.points)
                        for (let dt of ((lt = f.options).visible === !1 ? (at.graphic = 1, at.dataLabel = 1) : (this.hasMarkerChanged(lt, A) && (at.graphic = 1), (nt = f.hasDataLabels) != null && nt.call(f) || (at.dataLabel = 1)), this.points)) dt && dt.series && (dt.resolveColor(), Object.keys(at).length && dt.destroyElements(at), lt.showInLegend === !1 && dt.legendItem && C.legend.destroyItem(dt));
                    f.initialType = N, C.linkSeries(), C.setSortedData(), Q && f.linkedSeries.length && (f.isDirtyData = !0), i(this, "afterUpdate"), W(g, !0) && C.redraw(!!$ && void 0)
                }
                setName(s) {
                    this.name = this.options.name = this.userOptions.name = s, this.chart.isDirtyLegend = !0
                }
                hasOptionChanged(s) {
                    var U, q;
                    let g = this.chart,
                        f = this.options[s],
                        C = g.options.plotOptions,
                        A = this.userOptions[s],
                        N = W((U = C == null ? void 0 : C[this.type]) == null ? void 0 : U[s], (q = C == null ? void 0 : C.series) == null ? void 0 : q[s]);
                    return A && !k(N) ? f !== A : f !== W(N, f)
                }
                onMouseOver() {
                    let s = this.chart,
                        g = s.hoverSeries,
                        f = s.pointer;
                    f == null || f.setHoverChartIndex(), g && g !== this && g.onMouseOut(), this.options.events.mouseOver && i(this, "mouseOver"), this.setState("hover"), s.hoverSeries = this
                }
                onMouseOut() {
                    let s = this.options,
                        g = this.chart,
                        f = g.tooltip,
                        C = g.hoverPoint;
                    g.hoverSeries = null, C && C.onMouseOut(), this && s.events.mouseOut && i(this, "mouseOut"), f && !this.stickyTracking && (!f.shared || this.noSharedTooltip) && f.hide(), g.series.forEach(function(A) {
                        A.setState("", !0)
                    })
                }
                setState(s, g) {
                    let f = this,
                        C = f.options,
                        A = f.graph,
                        N = C.inactiveOtherPoints,
                        U = C.states,
                        q = W(U[s || "normal"] && U[s || "normal"].animation, f.chart.options.chart.animation),
                        K = C.lineWidth,
                        at = C.opacity;
                    if (s = s || "", f.state !== s && ([f.group, f.markerGroup, f.dataLabelsGroup].forEach(function(lt) {
                            lt && (f.state && lt.removeClass("highcharts-series-" + f.state), s && lt.addClass("highcharts-series-" + s))
                        }), f.state = s, !f.chart.styledMode)) {
                        if (U[s] && U[s].enabled === !1) return;
                        if (s && (K = U[s].lineWidth || K + (U[s].lineWidthPlus || 0), at = W(U[s].opacity, at)), A && !A.dashstyle && _(K))
                            for (let lt of [A, ...this.zones.map(R => R.graph)]) lt == null || lt.animate({
                                "stroke-width": K
                            }, q);
                        N || [f.group, f.markerGroup, f.dataLabelsGroup, f.labelBySeries].forEach(function(lt) {
                            lt && lt.animate({
                                opacity: at
                            }, q)
                        })
                    }
                    g && N && f.points && f.setAllPointsToState(s || void 0)
                }
                setAllPointsToState(s) {
                    this.points.forEach(function(g) {
                        g.setState && g.setState(s)
                    })
                }
                setVisible(s, g) {
                    var q;
                    let f = this,
                        C = f.chart,
                        A = C.options.chart.ignoreHiddenSeries,
                        N = f.visible;
                    f.visible = s = f.options.visible = f.userOptions.visible = s === void 0 ? !N : s;
                    let U = s ? "show" : "hide";
                    ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(K => {
                        var at;
                        (at = f[K]) == null || at[U]()
                    }), (C.hoverSeries === f || ((q = C.hoverPoint) == null ? void 0 : q.series) === f) && f.onMouseOut(), f.legendItem && C.legend.colorizeItem(f, s), f.isDirty = !0, f.options.stacking && C.series.forEach(K => {
                        K.options.stacking && K.visible && (K.isDirty = !0)
                    }), f.linkedSeries.forEach(K => {
                        K.setVisible(s, !1)
                    }), A && (C.isDirtyBox = !0), i(f, U), g !== !1 && C.redraw()
                }
                show() {
                    this.setVisible(!0)
                }
                hide() {
                    this.setVisible(!1)
                }
                select(s) {
                    this.selected = s = this.options.selected = s === void 0 ? !this.selected : s, this.checkbox && (this.checkbox.checked = s), i(this, s ? "select" : "unselect")
                }
                shouldShowTooltip(s, g, f = {}) {
                    return f.series = this, f.visiblePlotOnly = !0, this.chart.isInsidePlot(s, g, f)
                }
                drawLegendSymbol(s, g) {
                    var f;
                    (f = st[this.options.legendSymbol || "rectangle"]) == null || f.call(this, s, g)
                }
            }
            return S.defaultOptions = et, S.types = Y.seriesTypes, S.registerType = Y.registerSeriesType, e(S.prototype, {
                axisTypes: ["xAxis", "yAxis"],
                coll: "series",
                colorCounter: 0,
                directTouch: !1,
                invertible: !0,
                isCartesian: !0,
                kdAxisArray: ["clientX", "plotY"],
                parallelArrays: ["x", "y"],
                pointClass: J,
                requireSorting: !0,
                sorted: !0
            }), Y.series = S, S
        }), ct(P, "Core/Chart/Chart.js", [P["Core/Animation/AnimationUtilities.js"], P["Core/Axis/Axis.js"], P["Core/Defaults.js"], P["Core/Templating.js"], P["Core/Foundation.js"], P["Core/Globals.js"], P["Core/Renderer/RendererRegistry.js"], P["Core/Series/Series.js"], P["Core/Series/SeriesRegistry.js"], P["Core/Renderer/SVG/SVGRenderer.js"], P["Core/Time.js"], P["Core/Utilities.js"], P["Core/Renderer/HTML/AST.js"], P["Core/Axis/Tick.js"]], function(V, Z, ot, ht, st, J, et, Y, z, H, w, I, D, T) {
            let {
                animate: v,
                animObject: M,
                setAnimation: u
            } = V, {
                defaultOptions: m,
                defaultTime: h
            } = ot, {
                numberFormat: x
            } = ht, {
                registerEventOptions: X
            } = st, {
                charts: L,
                doc: k,
                marginNames: r,
                svg: p,
                win: n
            } = J, {
                seriesTypes: t
            } = z, {
                addEvent: e,
                attr: o,
                createElement: i,
                css: l,
                defined: a,
                diffObjects: b,
                discardElement: O,
                erase: _,
                error: y,
                extend: j,
                find: G,
                fireEvent: W,
                getStyle: it,
                isArray: d,
                isNumber: c,
                isObject: S,
                isString: B,
                merge: s,
                objectEach: g,
                pick: f,
                pInt: C,
                relativeLength: A,
                removeEvent: N,
                splat: U,
                syncTimeout: q,
                uniqueKey: K
            } = I;
            class at {
                static chart(R, E, F) {
                    return new at(R, E, F)
                }
                constructor(R, E, F) {
                    this.sharedClips = {};
                    let $ = [...arguments];
                    (B(R) || R.nodeName) && (this.renderTo = $.shift()), this.init($[0], $[1])
                }
                setZoomOptions() {
                    let R = this.options.chart,
                        E = R.zooming;
                    this.zooming = { ...E,
                        type: f(R.zoomType, E.type),
                        key: f(R.zoomKey, E.key),
                        pinchType: f(R.pinchType, E.pinchType),
                        singleTouch: f(R.zoomBySingleTouch, E.singleTouch, !1),
                        resetButton: s(E.resetButton, R.resetZoomButton)
                    }
                }
                init(R, E) {
                    W(this, "init", {
                        args: arguments
                    }, function() {
                        let F = s(m, R),
                            $ = F.chart;
                        this.userOptions = j({}, R), this.margin = [], this.spacing = [], this.labelCollectors = [], this.callback = E, this.isResizing = 0, this.options = F, this.axes = [], this.series = [], this.time = R.time && Object.keys(R.time).length ? new w(R.time) : J.time, this.numberFormatter = $.numberFormatter || x, this.styledMode = $.styledMode, this.hasCartesianSeries = $.showAxes, this.index = L.length, L.push(this), J.chartCount++, X(this, $), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), W(this, "afterInit"), this.firstRender()
                    })
                }
                initSeries(R) {
                    let E = this.options.chart,
                        F = R.type || E.type,
                        $ = t[F];
                    $ || y(17, !0, this, {
                        missingModuleFor: F
                    });
                    let Q = new $;
                    return typeof Q.init == "function" && Q.init(this, R), Q
                }
                setSortedData() {
                    this.getSeriesOrderByLinks().forEach(function(R) {
                        R.points || R.data || !R.enabledDataSorting || R.setData(R.options.data, !1)
                    })
                }
                getSeriesOrderByLinks() {
                    return this.series.concat().sort(function(R, E) {
                        return R.linkedSeries.length || E.linkedSeries.length ? E.linkedSeries.length - R.linkedSeries.length : 0
                    })
                }
                orderItems(R, E = 0) {
                    let F = this[R],
                        $ = this.options[R] = U(this.options[R]).slice(),
                        Q = this.userOptions[R] = this.userOptions[R] ? U(this.userOptions[R]).slice() : [];
                    if (this.hasRendered && ($.splice(E), Q.splice(E)), F)
                        for (let rt = E, tt = F.length; rt < tt; ++rt) {
                            let nt = F[rt];
                            nt && (nt.index = rt, nt instanceof Y && (nt.name = nt.getName()), nt.options.isInternal || ($[rt] = nt.options, Q[rt] = nt.userOptions))
                        }
                }
                isInsidePlot(R, E, F = {}) {
                    var xt;
                    let {
                        inverted: $,
                        plotBox: Q,
                        plotLeft: rt,
                        plotTop: tt,
                        scrollablePlotBox: nt
                    } = this, {
                        scrollLeft: dt = 0,
                        scrollTop: pt = 0
                    } = F.visiblePlotOnly && ((xt = this.scrollablePlotArea) == null ? void 0 : xt.scrollingContainer) || {}, ut = F.series, ft = F.visiblePlotOnly && nt || Q, mt = F.inverted ? E : R, bt = F.inverted ? R : E, yt = {
                        x: mt,
                        y: bt,
                        isInsidePlot: !0,
                        options: F
                    };
                    if (!F.ignoreX) {
                        let kt = ut && ($ && !this.polar ? ut.yAxis : ut.xAxis) || {
                                pos: rt,
                                len: 1 / 0
                            },
                            St = F.paneCoordinates ? kt.pos + mt : rt + mt;
                        St >= Math.max(dt + rt, kt.pos) && St <= Math.min(dt + rt + ft.width, kt.pos + kt.len) || (yt.isInsidePlot = !1)
                    }
                    if (!F.ignoreY && yt.isInsidePlot) {
                        let kt = !$ && F.axis && !F.axis.isXAxis && F.axis || ut && ($ ? ut.xAxis : ut.yAxis) || {
                                pos: tt,
                                len: 1 / 0
                            },
                            St = F.paneCoordinates ? kt.pos + bt : tt + bt;
                        St >= Math.max(pt + tt, kt.pos) && St <= Math.min(pt + tt + ft.height, kt.pos + kt.len) || (yt.isInsidePlot = !1)
                    }
                    return W(this, "afterIsInsidePlot", yt), yt.isInsidePlot
                }
                redraw(R) {
                    W(this, "beforeRedraw");
                    let E = this.hasCartesianSeries ? this.axes : this.colorAxis || [],
                        F = this.series,
                        $ = this.pointer,
                        Q = this.legend,
                        rt = this.userOptions.legend,
                        tt = this.renderer,
                        nt = tt.isHidden(),
                        dt = [],
                        pt, ut, ft, mt = this.isDirtyBox,
                        bt = this.isDirtyLegend,
                        yt;
                    for (tt.rootFontSize = tt.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(!1), u(!!this.hasRendered && R, this), nt && this.temporaryDisplay(), this.layOutTitles(!1), ft = F.length; ft--;)
                        if (((yt = F[ft]).options.stacking || yt.options.centerInCategory) && (ut = !0, yt.isDirty)) {
                            pt = !0;
                            break
                        }
                    if (pt)
                        for (ft = F.length; ft--;)(yt = F[ft]).options.stacking && (yt.isDirty = !0);
                    F.forEach(function(xt) {
                        xt.isDirty && (xt.options.legendType === "point" ? (typeof xt.updateTotals == "function" && xt.updateTotals(), bt = !0) : rt && (rt.labelFormatter || rt.labelFormat) && (bt = !0)), xt.isDirtyData && W(xt, "updatedData")
                    }), bt && Q && Q.options.enabled && (Q.render(), this.isDirtyLegend = !1), ut && this.getStacks(), E.forEach(function(xt) {
                        xt.updateNames(), xt.setScale()
                    }), this.getMargins(), E.forEach(function(xt) {
                        xt.isDirty && (mt = !0)
                    }), E.forEach(function(xt) {
                        let kt = xt.min + "," + xt.max;
                        xt.extKey !== kt && (xt.extKey = kt, dt.push(function() {
                            W(xt, "afterSetExtremes", j(xt.eventArgs, xt.getExtremes())), delete xt.eventArgs
                        })), (mt || ut) && xt.redraw()
                    }), mt && this.drawChartBox(), W(this, "predraw"), F.forEach(function(xt) {
                        (mt || xt.isDirty) && xt.visible && xt.redraw(), xt.isDirtyData = !1
                    }), $ && $.reset(!0), tt.draw(), W(this, "redraw"), W(this, "render"), nt && this.temporaryDisplay(!0), dt.forEach(function(xt) {
                        xt.call()
                    })
                }
                get(R) {
                    let E = this.series;

                    function F(Q) {
                        return Q.id === R || Q.options && Q.options.id === R
                    }
                    let $ = G(this.axes, F) || G(this.series, F);
                    for (let Q = 0; !$ && Q < E.length; Q++) $ = G(E[Q].points || [], F);
                    return $
                }
                getAxes() {
                    let R = this.userOptions;
                    for (let E of (W(this, "getAxes"), ["xAxis", "yAxis"]))
                        for (let F of R[E] = U(R[E] || {})) new Z(this, F, E);
                    W(this, "afterGetAxes")
                }
                getSelectedPoints() {
                    return this.series.reduce((R, E) => (E.getPointsCollection().forEach(F => {
                        f(F.selectedStaging, F.selected) && R.push(F)
                    }), R), [])
                }
                getSelectedSeries() {
                    return this.series.filter(function(R) {
                        return R.selected
                    })
                }
                setTitle(R, E, F) {
                    this.applyDescription("title", R), this.applyDescription("subtitle", E), this.applyDescription("caption", void 0), this.layOutTitles(F)
                }
                applyDescription(R, E) {
                    let F = this,
                        $ = this.options[R] = s(this.options[R], E),
                        Q = this[R];
                    Q && E && (this[R] = Q = Q.destroy()), $ && !Q && ((Q = this.renderer.text($.text, 0, 0, $.useHTML).attr({
                        align: $.align,
                        class: "highcharts-" + R,
                        zIndex: $.zIndex || 4
                    }).add()).update = function(rt, tt) {
                        F.applyDescription(R, rt), F.layOutTitles(tt)
                    }, this.styledMode || Q.css(j(R === "title" ? {
                        fontSize: this.options.isStock ? "1em" : "1.2em"
                    } : {}, $.style)), this[R] = Q)
                }
                layOutTitles(R = !0) {
                    let E = [0, 0, 0],
                        F = this.renderer,
                        $ = this.spacingBox;
                    ["title", "subtitle", "caption"].forEach(function(rt) {
                        let tt = this[rt],
                            nt = this.options[rt],
                            dt = nt.verticalAlign || "top",
                            pt = rt === "title" ? dt === "top" ? -3 : 0 : dt === "top" ? E[0] + 2 : 0;
                        if (tt) {
                            tt.css({
                                width: (nt.width || $.width + (nt.widthAdjust || 0)) + "px"
                            });
                            let ut = F.fontMetrics(tt).b,
                                ft = Math.round(tt.getBBox(nt.useHTML).height);
                            tt.align(j({
                                y: dt === "bottom" ? ut : pt + ut,
                                height: ft
                            }, nt), !1, "spacingBox"), nt.floating || (dt === "top" ? E[0] = Math.ceil(E[0] + ft) : dt === "bottom" && (E[2] = Math.ceil(E[2] + ft)))
                        }
                    }, this), E[0] && (this.options.title.verticalAlign || "top") === "top" && (E[0] += this.options.title.margin), E[2] && this.options.caption.verticalAlign === "bottom" && (E[2] += this.options.caption.margin);
                    let Q = !this.titleOffset || this.titleOffset.join(",") !== E.join(",");
                    this.titleOffset = E, W(this, "afterLayOutTitles"), !this.isDirtyBox && Q && (this.isDirtyBox = this.isDirtyLegend = Q, this.hasRendered && R && this.isDirtyBox && this.redraw())
                }
                getContainerBox() {
                    return {
                        width: it(this.renderTo, "width", !0) || 0,
                        height: it(this.renderTo, "height", !0) || 0
                    }
                }
                getChartSize() {
                    let R = this.options.chart,
                        E = R.width,
                        F = R.height,
                        $ = this.getContainerBox();
                    this.chartWidth = Math.max(0, E || $.width || 600), this.chartHeight = Math.max(0, A(F, this.chartWidth) || ($.height > 1 ? $.height : 400)), this.containerBox = $
                }
                temporaryDisplay(R) {
                    let E = this.renderTo,
                        F;
                    if (R)
                        for (; E && E.style;) E.hcOrigStyle && (l(E, E.hcOrigStyle), delete E.hcOrigStyle), E.hcOrigDetached && (k.body.removeChild(E), E.hcOrigDetached = !1), E = E.parentNode;
                    else
                        for (; E && E.style && (k.body.contains(E) || E.parentNode || (E.hcOrigDetached = !0, k.body.appendChild(E)), (it(E, "display", !1) === "none" || E.hcOricDetached) && (E.hcOrigStyle = {
                                display: E.style.display,
                                height: E.style.height,
                                overflow: E.style.overflow
                            }, F = {
                                display: "block",
                                overflow: "hidden"
                            }, E !== this.renderTo && (F.height = 0), l(E, F), E.offsetWidth || E.style.setProperty("display", "block", "important")), (E = E.parentNode) !== k.body););
                }
                setClassName(R) {
                    this.container.className = "highcharts-container " + (R || "")
                }
                getContainer() {
                    var ft;
                    let R = this.options,
                        E = R.chart,
                        F = "data-highcharts-chart",
                        $ = K(),
                        Q, rt = this.renderTo;
                    rt || (this.renderTo = rt = E.renderTo), B(rt) && (this.renderTo = rt = k.getElementById(rt)), rt || y(13, !0, this);
                    let tt = C(o(rt, F));
                    c(tt) && L[tt] && L[tt].hasRendered && L[tt].destroy(), o(rt, F, this.index), rt.innerHTML = D.emptyHTML, E.skipClone || rt.offsetWidth || this.temporaryDisplay(), this.getChartSize();
                    let nt = this.chartHeight,
                        dt = this.chartWidth;
                    l(rt, {
                        overflow: "hidden"
                    }), this.styledMode || (Q = j({
                        position: "relative",
                        overflow: "hidden",
                        width: dt + "px",
                        height: nt + "px",
                        textAlign: "left",
                        lineHeight: "normal",
                        zIndex: 0,
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        userSelect: "none",
                        "touch-action": "manipulation",
                        outline: "none"
                    }, E.style || {}));
                    let pt = i("div", {
                        id: $
                    }, Q, rt);
                    this.container = pt, this.getChartSize(), dt === this.chartWidth || (dt = this.chartWidth, this.styledMode || l(pt, {
                        width: f((ft = E.style) == null ? void 0 : ft.width, dt + "px")
                    })), this.containerBox = this.getContainerBox(), this._cursor = pt.style.cursor;
                    let ut = E.renderer || !p ? et.getRendererType(E.renderer) : H;
                    if (this.renderer = new ut(pt, dt, nt, void 0, E.forExport, R.exporting && R.exporting.allowHTML, this.styledMode), u(void 0, this), this.setClassName(E.className), this.styledMode)
                        for (let mt in R.defs) this.renderer.definition(R.defs[mt]);
                    else this.renderer.setStyle(E.style);
                    this.renderer.chartIndex = this.index, W(this, "afterGetContainer")
                }
                getMargins(R) {
                    let {
                        spacing: E,
                        margin: F,
                        titleOffset: $
                    } = this;
                    this.resetMargins(), $[0] && !a(F[0]) && (this.plotTop = Math.max(this.plotTop, $[0] + E[0])), $[2] && !a(F[2]) && (this.marginBottom = Math.max(this.marginBottom, $[2] + E[2])), this.legend && this.legend.display && this.legend.adjustMargins(F, E), W(this, "getMargins"), R || this.getAxisMargins()
                }
                getAxisMargins() {
                    let R = this,
                        E = R.axisOffset = [0, 0, 0, 0],
                        F = R.colorAxis,
                        $ = R.margin,
                        Q = function(rt) {
                            rt.forEach(function(tt) {
                                tt.visible && tt.getOffset()
                            })
                        };
                    R.hasCartesianSeries ? Q(R.axes) : F && F.length && Q(F), r.forEach(function(rt, tt) {
                        a($[tt]) || (R[rt] += E[tt])
                    }), R.setChartSize()
                }
                getOptions() {
                    return b(this.userOptions, m)
                }
                reflow(R) {
                    var Q;
                    let E = this,
                        F = E.containerBox,
                        $ = E.getContainerBox();
                    (Q = E.pointer) == null || delete Q.chartPosition, !E.isPrinting && !E.isResizing && F && $.width && (($.width !== F.width || $.height !== F.height) && (I.clearTimeout(E.reflowTimeout), E.reflowTimeout = q(function() {
                        E.container && E.setSize(void 0, void 0, !1)
                    }, R ? 100 : 0)), E.containerBox = $)
                }
                setReflow() {
                    let R = this,
                        E = F => {
                            var $;
                            ($ = R.options) != null && $.chart.reflow && R.hasLoaded && R.reflow(F)
                        };
                    if (typeof ResizeObserver == "function") new ResizeObserver(E).observe(R.renderTo);
                    else {
                        let F = e(n, "resize", E);
                        e(this, "destroy", F)
                    }
                }
                setSize(R, E, F) {
                    let $ = this,
                        Q = $.renderer;
                    $.isResizing += 1, u(F, $);
                    let rt = Q.globalAnimation;
                    $.oldChartHeight = $.chartHeight, $.oldChartWidth = $.chartWidth, R !== void 0 && ($.options.chart.width = R), E !== void 0 && ($.options.chart.height = E), $.getChartSize();
                    let {
                        chartWidth: tt,
                        chartHeight: nt,
                        scrollablePixelsX: dt = 0,
                        scrollablePixelsY: pt = 0
                    } = $;
                    ($.isDirtyBox || tt !== $.oldChartWidth || nt !== $.oldChartHeight) && ($.styledMode || (rt ? v : l)($.container, {
                        width: `${tt+dt}px`,
                        height: `${nt+pt}px`
                    }, rt), $.setChartSize(!0), Q.setSize(tt, nt, rt), $.axes.forEach(function(ut) {
                        ut.isDirty = !0, ut.setScale()
                    }), $.isDirtyLegend = !0, $.isDirtyBox = !0, $.layOutTitles(), $.getMargins(), $.redraw(rt), $.oldChartHeight = void 0, W($, "resize"), setTimeout(() => {
                        $ && W($, "endResize")
                    }, M(rt).duration)), $.isResizing -= 1
                }
                setChartSize(R) {
                    let E, F, $, Q, {
                            chartHeight: rt,
                            chartWidth: tt,
                            inverted: nt,
                            spacing: dt,
                            renderer: pt
                        } = this,
                        ut = this.clipOffset,
                        ft = Math[nt ? "floor" : "round"];
                    this.plotLeft = E = Math.round(this.plotLeft), this.plotTop = F = Math.round(this.plotTop), this.plotWidth = $ = Math.max(0, Math.round(tt - E - this.marginRight)), this.plotHeight = Q = Math.max(0, Math.round(rt - F - this.marginBottom)), this.plotSizeX = nt ? Q : $, this.plotSizeY = nt ? $ : Q, this.spacingBox = pt.spacingBox = {
                        x: dt[3],
                        y: dt[0],
                        width: tt - dt[3] - dt[1],
                        height: rt - dt[0] - dt[2]
                    }, this.plotBox = pt.plotBox = {
                        x: E,
                        y: F,
                        width: $,
                        height: Q
                    }, ut && (this.clipBox = {
                        x: ft(ut[3]),
                        y: ft(ut[0]),
                        width: ft(this.plotSizeX - ut[1] - ut[3]),
                        height: ft(this.plotSizeY - ut[0] - ut[2])
                    }), R || (this.axes.forEach(function(mt) {
                        mt.setAxisSize(), mt.setAxisTranslation()
                    }), pt.alignElements()), W(this, "afterSetChartSize", {
                        skipAxes: R
                    })
                }
                resetMargins() {
                    W(this, "resetMargins");
                    let R = this,
                        E = R.options.chart,
                        F = E.plotBorderWidth || 0,
                        $ = F / 2;
                    ["margin", "spacing"].forEach(function(Q) {
                        let rt = E[Q],
                            tt = S(rt) ? rt : [rt, rt, rt, rt];
                        ["Top", "Right", "Bottom", "Left"].forEach(function(nt, dt) {
                            R[Q][dt] = f(E[Q + nt], tt[dt])
                        })
                    }), r.forEach(function(Q, rt) {
                        R[Q] = f(R.margin[rt], R.spacing[rt])
                    }), R.axisOffset = [0, 0, 0, 0], R.clipOffset = [$, $, $, $], R.plotBorderWidth = F
                }
                drawChartBox() {
                    let R = this.options.chart,
                        E = this.renderer,
                        F = this.chartWidth,
                        $ = this.chartHeight,
                        Q = this.styledMode,
                        rt = this.plotBGImage,
                        tt = R.backgroundColor,
                        nt = R.plotBackgroundColor,
                        dt = R.plotBackgroundImage,
                        pt = this.plotLeft,
                        ut = this.plotTop,
                        ft = this.plotWidth,
                        mt = this.plotHeight,
                        bt = this.plotBox,
                        yt = this.clipRect,
                        xt = this.clipBox,
                        kt = this.chartBackground,
                        St = this.plotBackground,
                        Mt = this.plotBorder,
                        Tt, At, It, Et = "animate";
                    kt || (this.chartBackground = kt = E.rect().addClass("highcharts-background").add(), Et = "attr"), Q ? Tt = At = kt.strokeWidth() : (At = (Tt = R.borderWidth || 0) + (R.shadow ? 8 : 0), It = {
                        fill: tt || "none"
                    }, (Tt || kt["stroke-width"]) && (It.stroke = R.borderColor, It["stroke-width"] = Tt), kt.attr(It).shadow(R.shadow)), kt[Et]({
                        x: At / 2,
                        y: At / 2,
                        width: F - At - Tt % 2,
                        height: $ - At - Tt % 2,
                        r: R.borderRadius
                    }), Et = "animate", St || (Et = "attr", this.plotBackground = St = E.rect().addClass("highcharts-plot-background").add()), St[Et](bt), !Q && (St.attr({
                        fill: nt || "none"
                    }).shadow(R.plotShadow), dt && (rt ? (dt !== rt.attr("href") && rt.attr("href", dt), rt.animate(bt)) : this.plotBGImage = E.image(dt, pt, ut, ft, mt).add())), yt ? yt.animate({
                        width: xt.width,
                        height: xt.height
                    }) : this.clipRect = E.clipRect(xt), Et = "animate", Mt || (Et = "attr", this.plotBorder = Mt = E.rect().addClass("highcharts-plot-border").attr({
                        zIndex: 1
                    }).add()), Q || Mt.attr({
                        stroke: R.plotBorderColor,
                        "stroke-width": R.plotBorderWidth || 0,
                        fill: "none"
                    }), Mt[Et](Mt.crisp({
                        x: pt,
                        y: ut,
                        width: ft,
                        height: mt
                    }, -Mt.strokeWidth())), this.isDirtyBox = !1, W(this, "afterDrawChartBox")
                }
                propFromSeries() {
                    let R, E, F, $ = this,
                        Q = $.options.chart,
                        rt = $.options.series;
                    ["inverted", "angular", "polar"].forEach(function(tt) {
                        for (E = t[Q.type], F = Q[tt] || E && E.prototype[tt], R = rt && rt.length; !F && R--;)(E = t[rt[R].type]) && E.prototype[tt] && (F = !0);
                        $[tt] = F
                    })
                }
                linkSeries(R) {
                    let E = this,
                        F = E.series;
                    F.forEach(function($) {
                        $.linkedSeries.length = 0
                    }), F.forEach(function($) {
                        let {
                            linkedTo: Q
                        } = $.options;
                        if (B(Q)) {
                            let rt;
                            (rt = Q === ":previous" ? E.series[$.index - 1] : E.get(Q)) && rt.linkedParent !== $ && (rt.linkedSeries.push($), $.linkedParent = rt, rt.enabledDataSorting && $.setDataSortingOptions(), $.visible = f($.options.visible, rt.options.visible, $.visible))
                        }
                    }), W(this, "afterLinkSeries", {
                        isUpdating: R
                    })
                }
                renderSeries() {
                    this.series.forEach(function(R) {
                        R.translate(), R.render()
                    })
                }
                render() {
                    var pt;
                    let R = this.axes,
                        E = this.colorAxis,
                        F = this.renderer,
                        $ = this.options.chart.axisLayoutRuns || 2,
                        Q = ut => {
                            ut.forEach(ft => {
                                ft.visible && ft.render()
                            })
                        },
                        rt = 0,
                        tt = !0,
                        nt, dt = 0;
                    for (let ut of (this.setTitle(), W(this, "beforeMargins"), (pt = this.getStacks) == null || pt.call(this), this.getMargins(!0), this.setChartSize(), R)) {
                        let {
                            options: ft
                        } = ut, {
                            labels: mt
                        } = ft;
                        if (this.hasCartesianSeries && ut.horiz && ut.visible && mt.enabled && ut.series.length && ut.coll !== "colorAxis" && !this.polar) {
                            rt = ft.tickLength, ut.createGroups();
                            let bt = new T(ut, 0, "", !0),
                                yt = bt.createLabel("x", mt);
                            if (bt.destroy(), yt && f(mt.reserveSpace, !c(ft.crossing)) && (rt = yt.getBBox().height + mt.distance + Math.max(ft.offset || 0, 0)), rt) {
                                yt == null || yt.destroy();
                                break
                            }
                        }
                    }
                    for (this.plotHeight = Math.max(this.plotHeight - rt, 0);
                        (tt || nt || $ > 1) && dt < $;) {
                        let ut = this.plotWidth,
                            ft = this.plotHeight;
                        for (let mt of R) dt === 0 ? mt.setScale() : (mt.horiz && tt || !mt.horiz && nt) && mt.setTickInterval(!0);
                        dt === 0 ? this.getAxisMargins() : this.getMargins(), tt = ut / this.plotWidth > (dt ? 1 : 1.1), nt = ft / this.plotHeight > (dt ? 1 : 1.05), dt++
                    }
                    this.drawChartBox(), this.hasCartesianSeries ? Q(R) : E && E.length && Q(E), this.seriesGroup || (this.seriesGroup = F.g("series-group").attr({
                        zIndex: 3
                    }).shadow(this.options.chart.seriesGroupShadow).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0
                }
                addCredits(R) {
                    let E = this,
                        F = s(!0, this.options.credits, R);
                    F.enabled && !this.credits && (this.credits = this.renderer.text(F.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
                        F.href && (n.location.href = F.href)
                    }).attr({
                        align: F.position.align,
                        zIndex: 8
                    }), E.styledMode || this.credits.css(F.style), this.credits.add().align(F.position), this.credits.update = function($) {
                        E.credits = E.credits.destroy(), E.addCredits($)
                    })
                }
                destroy() {
                    let R, E = this,
                        F = E.axes,
                        $ = E.series,
                        Q = E.container,
                        rt = Q && Q.parentNode;
                    for (W(E, "destroy"), E.renderer.forExport ? _(L, E) : L[E.index] = void 0, J.chartCount--, E.renderTo.removeAttribute("data-highcharts-chart"), N(E), R = F.length; R--;) F[R] = F[R].destroy();
                    for (this.scroller && this.scroller.destroy && this.scroller.destroy(), R = $.length; R--;) $[R] = $[R].destroy();
                    ["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"].forEach(function(tt) {
                        let nt = E[tt];
                        nt && nt.destroy && (E[tt] = nt.destroy())
                    }), Q && (Q.innerHTML = D.emptyHTML, N(Q), rt && O(Q)), g(E, function(tt, nt) {
                        delete E[nt]
                    })
                }
                firstRender() {
                    var $;
                    let R = this,
                        E = R.options;
                    R.getContainer(), R.resetMargins(), R.setChartSize(), R.propFromSeries(), R.getAxes();
                    let F = d(E.series) ? E.series : [];
                    E.series = [], F.forEach(function(Q) {
                        R.initSeries(Q)
                    }), R.linkSeries(), R.setSortedData(), W(R, "beforeRender"), R.render(), ($ = R.pointer) == null || $.getChartPosition(), R.renderer.imgCount || R.hasLoaded || R.onload(), R.temporaryDisplay(!0)
                }
                onload() {
                    this.callbacks.concat([this.callback]).forEach(function(R) {
                        R && this.index !== void 0 && R.apply(this, [this])
                    }, this), W(this, "load"), W(this, "render"), a(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = !0
                }
                warnIfA11yModuleNotLoaded() {
                    let {
                        options: R,
                        title: E
                    } = this;
                    !R || this.accessibility || (this.renderer.boxWrapper.attr({
                        role: "img",
                        "aria-label": (E && E.element.textContent || "").replace(/</g, "&lt;")
                    }), R.accessibility && R.accessibility.enabled === !1 || y('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', !1, this))
                }
                addSeries(R, E, F) {
                    let $, Q = this;
                    return R && (E = f(E, !0), W(Q, "addSeries", {
                        options: R
                    }, function() {
                        $ = Q.initSeries(R), Q.isDirtyLegend = !0, Q.linkSeries(), $.enabledDataSorting && $.setData(R.data, !1), W(Q, "afterAddSeries", {
                            series: $
                        }), E && Q.redraw(F)
                    })), $
                }
                addAxis(R, E, F, $) {
                    return this.createAxis(E ? "xAxis" : "yAxis", {
                        axis: R,
                        redraw: F,
                        animation: $
                    })
                }
                addColorAxis(R, E, F) {
                    return this.createAxis("colorAxis", {
                        axis: R,
                        redraw: E,
                        animation: F
                    })
                }
                createAxis(R, E) {
                    let F = new Z(this, E.axis, R);
                    return f(E.redraw, !0) && this.redraw(E.animation), F
                }
                showLoading(R) {
                    let E = this,
                        F = E.options,
                        $ = F.loading,
                        Q = function() {
                            rt && l(rt, {
                                left: E.plotLeft + "px",
                                top: E.plotTop + "px",
                                width: E.plotWidth + "px",
                                height: E.plotHeight + "px"
                            })
                        },
                        rt = E.loadingDiv,
                        tt = E.loadingSpan;
                    rt || (E.loadingDiv = rt = i("div", {
                        className: "highcharts-loading highcharts-loading-hidden"
                    }, null, E.container)), tt || (E.loadingSpan = tt = i("span", {
                        className: "highcharts-loading-inner"
                    }, null, rt), e(E, "redraw", Q)), rt.className = "highcharts-loading", D.setElementHTML(tt, f(R, F.lang.loading, "")), E.styledMode || (l(rt, j($.style, {
                        zIndex: 10
                    })), l(tt, $.labelStyle), E.loadingShown || (l(rt, {
                        opacity: 0,
                        display: ""
                    }), v(rt, {
                        opacity: $.style.opacity || .5
                    }, {
                        duration: $.showDuration || 0
                    }))), E.loadingShown = !0, Q()
                }
                hideLoading() {
                    let R = this.options,
                        E = this.loadingDiv;
                    E && (E.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || v(E, {
                        opacity: 0
                    }, {
                        duration: R.loading.hideDuration || 100,
                        complete: function() {
                            l(E, {
                                display: "none"
                            })
                        }
                    })), this.loadingShown = !1
                }
                update(R, E, F, $) {
                    let Q, rt, tt, nt = this,
                        dt = {
                            credits: "addCredits",
                            title: "setTitle",
                            subtitle: "setSubtitle",
                            caption: "setCaption"
                        },
                        pt = R.isResponsiveOptions,
                        ut = [];
                    W(nt, "update", {
                        options: R
                    }), pt || nt.setResponsive(!1, !0), R = b(R, nt.options), nt.userOptions = s(nt.userOptions, R);
                    let ft = R.chart;
                    ft && (s(!0, nt.options.chart, ft), this.setZoomOptions(), "className" in ft && nt.setClassName(ft.className), ("inverted" in ft || "polar" in ft || "type" in ft) && (nt.propFromSeries(), Q = !0), "alignTicks" in ft && (Q = !0), "events" in ft && X(this, ft), g(ft, function(yt, xt) {
                        nt.propsRequireUpdateSeries.indexOf("chart." + xt) !== -1 && (rt = !0), nt.propsRequireDirtyBox.indexOf(xt) !== -1 && (nt.isDirtyBox = !0), nt.propsRequireReflow.indexOf(xt) === -1 || (nt.isDirtyBox = !0, pt || (tt = !0))
                    }), !nt.styledMode && ft.style && nt.renderer.setStyle(nt.options.chart.style || {})), !nt.styledMode && R.colors && (this.options.colors = R.colors), R.time && (this.time === h && (this.time = new w(R.time)), s(!0, nt.options.time, R.time)), g(R, function(yt, xt) {
                        nt[xt] && typeof nt[xt].update == "function" ? nt[xt].update(yt, !1) : typeof nt[dt[xt]] == "function" ? nt[dt[xt]](yt) : xt !== "colors" && nt.collectionsWithUpdate.indexOf(xt) === -1 && s(!0, nt.options[xt], R[xt]), xt !== "chart" && nt.propsRequireUpdateSeries.indexOf(xt) !== -1 && (rt = !0)
                    }), this.collectionsWithUpdate.forEach(function(yt) {
                        R[yt] && (U(R[yt]).forEach(function(xt, kt) {
                            let St, Mt = a(xt.id);
                            Mt && (St = nt.get(xt.id)), !St && nt[yt] && (St = nt[yt][f(xt.index, kt)]) && (Mt && a(St.options.id) || St.options.isInternal) && (St = void 0), St && St.coll === yt && (St.update(xt, !1), F && (St.touched = !0)), !St && F && nt.collectionsWithInit[yt] && (nt.collectionsWithInit[yt][0].apply(nt, [xt].concat(nt.collectionsWithInit[yt][1] || []).concat([!1])).touched = !0)
                        }), F && nt[yt].forEach(function(xt) {
                            xt.touched || xt.options.isInternal ? delete xt.touched : ut.push(xt)
                        }))
                    }), ut.forEach(function(yt) {
                        yt.chart && yt.remove && yt.remove(!1)
                    }), Q && nt.axes.forEach(function(yt) {
                        yt.update({}, !1)
                    }), rt && nt.getSeriesOrderByLinks().forEach(function(yt) {
                        yt.chart && yt.update({}, !1)
                    }, this);
                    let mt = ft && ft.width,
                        bt = ft && (B(ft.height) ? A(ft.height, mt || nt.chartWidth) : ft.height);
                    tt || c(mt) && mt !== nt.chartWidth || c(bt) && bt !== nt.chartHeight ? nt.setSize(mt, bt, $) : f(E, !0) && nt.redraw($), W(nt, "afterUpdate", {
                        options: R,
                        redraw: E,
                        animation: $
                    })
                }
                setSubtitle(R, E) {
                    this.applyDescription("subtitle", R), this.layOutTitles(E)
                }
                setCaption(R, E) {
                    this.applyDescription("caption", R), this.layOutTitles(E)
                }
                showResetZoom() {
                    let R = this,
                        E = m.lang,
                        F = R.zooming.resetButton,
                        $ = F.theme,
                        Q = F.relativeTo === "chart" || F.relativeTo === "spacingBox" ? null : "plotBox";

                    function rt() {
                        R.zoomOut()
                    }
                    W(this, "beforeShowResetZoom", null, function() {
                        R.resetZoomButton = R.renderer.button(E.resetZoom, null, null, rt, $).attr({
                            align: F.position.align,
                            title: E.resetZoomTitle
                        }).addClass("highcharts-reset-zoom").add().align(F.position, !1, Q)
                    }), W(this, "afterShowResetZoom")
                }
                zoomOut() {
                    W(this, "selection", {
                        resetSelection: !0
                    }, () => this.transform({
                        reset: !0,
                        trigger: "zoom"
                    }))
                }
                pan(R, E) {
                    let F = this,
                        $ = typeof E == "object" ? E : {
                            enabled: E,
                            type: "x"
                        },
                        Q = $.type,
                        rt = Q && F[{
                            x: "xAxis",
                            xy: "axes",
                            y: "yAxis"
                        }[Q]].filter(nt => nt.options.panningEnabled && !nt.options.isInternal),
                        tt = F.options.chart;
                    tt != null && tt.panning && (tt.panning = $), W(this, "pan", {
                        originalEvent: R
                    }, () => {
                        F.transform({
                            axes: rt,
                            event: R,
                            to: {
                                x: R.chartX - (F.mouseDownX || 0),
                                y: R.chartY - (F.mouseDownY || 0)
                            },
                            trigger: "pan"
                        }), l(F.container, {
                            cursor: "move"
                        })
                    })
                }
                transform(R) {
                    var ft;
                    let {
                        axes: E = this.axes,
                        event: F,
                        from: $ = {},
                        reset: Q,
                        selection: rt,
                        to: tt = {},
                        trigger: nt
                    } = R, {
                        inverted: dt
                    } = this, pt = !1, ut;
                    for (let mt of ((ft = this.hoverPoints) == null || ft.forEach(bt => bt.setState()), E)) {
                        let {
                            horiz: bt,
                            len: yt,
                            minPointOffset: xt = 0,
                            options: kt,
                            reversed: St
                        } = mt, Mt = bt ? "width" : "height", Tt = bt ? "x" : "y", At = f(tt[Mt], mt.len), It = f($[Mt], mt.len), Et = 10 > Math.abs(At) ? 1 : At / It, Ut = ($[Tt] || 0) + It / 2 - mt.pos, _t = Ut - ((tt[Tt] ? ? mt.pos) + At / 2 - mt.pos) / Et, Vt = St && !dt || !St && dt ? -1 : 1;
                        if (!Q && (Ut < 0 || Ut > mt.len)) continue;
                        let jt = mt.toValue(_t, !0) + (rt ? 0 : xt * Vt),
                            Bt = mt.toValue(_t + yt / Et, !0) - (rt ? 0 : xt * Vt || 0),
                            $t = mt.allExtremes;
                        if (jt > Bt && ([jt, Bt] = [Bt, jt]), Et === 1 && !Q && mt.coll === "yAxis" && !$t) {
                            for (let me of mt.series) {
                                let ie = me.getExtremes(me.getProcessedData(!0).yData, !0);
                                $t ? ? ($t = {
                                    dataMin: Number.MAX_VALUE,
                                    dataMax: -Number.MAX_VALUE
                                }), c(ie.dataMin) && c(ie.dataMax) && ($t.dataMin = Math.min(ie.dataMin, $t.dataMin), $t.dataMax = Math.max(ie.dataMax, $t.dataMax))
                            }
                            mt.allExtremes = $t
                        }
                        let {
                            dataMin: Le,
                            dataMax: Oe,
                            min: de,
                            max: ce
                        } = j(mt.getExtremes(), $t || {}), pe = Le ? ? kt.min, ue = Oe ? ? kt.max, re = Bt - jt, ge = mt.categories ? 0 : Math.min(re, ue - pe), oe = pe - ge * (a(kt.min) ? 0 : kt.minPadding), ne = ue + ge * (a(kt.max) ? 0 : kt.maxPadding), fe = mt.allowZoomOutside || Et === 1 || nt !== "zoom" && Et > 1, te = Math.min(kt.min ? ? oe, oe, fe ? de : oe), ee = Math.max(kt.max ? ? ne, ne, fe ? ce : ne);
                        (!mt.isOrdinal || Et !== 1 || Q) && (jt < te && (jt = te, Et >= 1 && (Bt = jt + re)), Bt > ee && (Bt = ee, Et >= 1 && (jt = Bt - re)), (Q || mt.series.length && (jt !== de || Bt !== ce) && jt >= te && Bt <= ee) && (rt ? rt[mt.coll].push({
                            axis: mt,
                            min: jt,
                            max: Bt
                        }) : (mt.isPanning = nt !== "zoom", mt.setExtremes(Q ? void 0 : jt, Q ? void 0 : Bt, !1, !1, {
                            move: _t,
                            trigger: nt,
                            scale: Et
                        }), !Q && (jt > te || Bt < ee) && nt !== "mousewheel" && (ut = !0)), pt = !0), F && (this[bt ? "mouseDownX" : "mouseDownY"] = F[bt ? "chartX" : "chartY"]))
                    }
                    return pt && (rt ? W(this, "selection", rt, () => {
                        delete R.selection, R.trigger = "zoom", this.transform(R)
                    }) : (ut && !this.resetZoomButton ? this.showResetZoom() : !ut && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()), this.redraw(nt === "zoom" && (this.options.chart.animation ? ? this.pointCount < 100)))), pt
                }
            }
            return j(at.prototype, {
                callbacks: [],
                collectionsWithInit: {
                    xAxis: [at.prototype.addAxis, [!0]],
                    yAxis: [at.prototype.addAxis, [!1]],
                    series: [at.prototype.addSeries]
                },
                collectionsWithUpdate: ["xAxis", "yAxis", "series"],
                propsRequireDirtyBox: ["backgroundColor", "borderColor", "borderWidth", "borderRadius", "plotBackgroundColor", "plotBackgroundImage", "plotBorderColor", "plotBorderWidth", "plotShadow", "shadow"],
                propsRequireReflow: ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "spacing", "spacingTop", "spacingRight", "spacingBottom", "spacingLeft"],
                propsRequireUpdateSeries: ["chart.inverted", "chart.polar", "chart.ignoreHiddenSeries", "chart.type", "colors", "plotOptions", "time", "tooltip"]
            }), at
        }), ct(P, "Extensions/ScrollablePlotArea.js", [P["Core/Animation/AnimationUtilities.js"], P["Core/Globals.js"], P["Core/Renderer/RendererRegistry.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht) {
            let {
                stop: st
            } = V, {
                composed: J
            } = Z, {
                addEvent: et,
                createElement: Y,
                css: z,
                defined: H,
                merge: w,
                pushUnique: I
            } = ht;

            function D() {
                let M = this.scrollablePlotArea;
                (this.scrollablePixelsX || this.scrollablePixelsY) && !M && (this.scrollablePlotArea = M = new v(this)), M == null || M.applyFixed()
            }

            function T() {
                this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0)
            }
            class v {
                static compose(u, m, h) {
                    I(J, this.compose) && (et(u, "afterInit", T), et(m, "afterSetChartSize", x => this.afterSetSize(x.target, x)), et(m, "render", D), et(h, "show", T))
                }
                static afterSetSize(u, m) {
                    let h, x, X, {
                            minWidth: L,
                            minHeight: k
                        } = u.options.chart.scrollablePlotArea || {},
                        {
                            clipBox: r,
                            plotBox: p,
                            inverted: n,
                            renderer: t
                        } = u;
                    if (!t.forExport && (L ? (u.scrollablePixelsX = h = Math.max(0, L - u.chartWidth), h && (u.scrollablePlotBox = w(u.plotBox), p.width = u.plotWidth += h, r[n ? "height" : "width"] += h, X = !0)) : k && (u.scrollablePixelsY = x = Math.max(0, k - u.chartHeight), H(x) && (u.scrollablePlotBox = w(u.plotBox), p.height = u.plotHeight += x, r[n ? "width" : "height"] += x, X = !1)), H(X) && !m.skipAxes))
                        for (let e of u.axes) e.horiz === X && (e.setAxisSize(), e.setAxisTranslation())
                }
                constructor(u) {
                    var o;
                    let m, h = u.options.chart,
                        x = ot.getRendererType(),
                        X = h.scrollablePlotArea || {},
                        L = this.moveFixedElements.bind(this),
                        k = {
                            WebkitOverflowScrolling: "touch",
                            overflowX: "hidden",
                            overflowY: "hidden"
                        };
                    u.scrollablePixelsX && (k.overflowX = "auto"), u.scrollablePixelsY && (k.overflowY = "auto"), this.chart = u;
                    let r = this.parentDiv = Y("div", {
                            className: "highcharts-scrolling-parent"
                        }, {
                            position: "relative"
                        }, u.renderTo),
                        p = this.scrollingContainer = Y("div", {
                            className: "highcharts-scrolling"
                        }, k, r),
                        n = this.innerContainer = Y("div", {
                            className: "highcharts-inner-container"
                        }, void 0, p),
                        t = this.fixedDiv = Y("div", {
                            className: "highcharts-fixed"
                        }, {
                            position: "absolute",
                            overflow: "hidden",
                            pointerEvents: "none",
                            zIndex: (((o = h.style) == null ? void 0 : o.zIndex) || 0) + 2,
                            top: 0
                        }, void 0, !0),
                        e = this.fixedRenderer = new x(t, u.chartWidth, u.chartHeight, h.style);
                    this.mask = e.path().attr({
                        fill: h.backgroundColor || "#fff",
                        "fill-opacity": X.opacity ? ? .85,
                        zIndex: -1
                    }).addClass("highcharts-scrollable-mask").add(), p.parentNode.insertBefore(t, p), z(u.renderTo, {
                        overflow: "visible"
                    }), et(u, "afterShowResetZoom", L), et(u, "afterApplyDrilldown", L), et(u, "afterLayOutTitles", L), et(p, "scroll", () => {
                        let {
                            pointer: i,
                            hoverPoint: l
                        } = u;
                        i && (delete i.chartPosition, l && (m = l), i.runPointActions(void 0, m, !0))
                    }), n.appendChild(u.container)
                }
                applyFixed() {
                    var c;
                    let {
                        chart: u,
                        fixedRenderer: m,
                        isDirty: h,
                        scrollingContainer: x
                    } = this, {
                        axisOffset: X,
                        chartWidth: L,
                        chartHeight: k,
                        container: r,
                        plotHeight: p,
                        plotLeft: n,
                        plotTop: t,
                        plotWidth: e,
                        scrollablePixelsX: o = 0,
                        scrollablePixelsY: i = 0
                    } = u, {
                        scrollPositionX: l = 0,
                        scrollPositionY: a = 0
                    } = u.options.chart.scrollablePlotArea || {}, b = L + o, O = k + i;
                    m.setSize(L, k), (h ? ? !0) && (this.isDirty = !1, this.moveFixedElements()), st(u.container), z(r, {
                        width: `${b}px`,
                        height: `${O}px`
                    }), u.renderer.boxWrapper.attr({
                        width: b,
                        height: O,
                        viewBox: [0, 0, b, O].join(" ")
                    }), (c = u.chartBackground) == null || c.attr({
                        width: b,
                        height: O
                    }), z(x, {
                        width: `${L}px`,
                        height: `${k}px`
                    }), H(h) || (x.scrollLeft = o * l, x.scrollTop = i * a);
                    let _ = t - X[0] - 1,
                        y = n - X[3] - 1,
                        j = t + p + X[2] + 1,
                        G = n + e + X[1] + 1,
                        W = n + e - o,
                        it = t + p - i,
                        d = [
                            ["M", 0, 0]
                        ];
                    o ? d = [
                        ["M", 0, _],
                        ["L", n - 1, _],
                        ["L", n - 1, j],
                        ["L", 0, j],
                        ["Z"],
                        ["M", W, _],
                        ["L", L, _],
                        ["L", L, j],
                        ["L", W, j],
                        ["Z"]
                    ] : i && (d = [
                        ["M", y, 0],
                        ["L", y, t - 1],
                        ["L", G, t - 1],
                        ["L", G, 0],
                        ["Z"],
                        ["M", y, it],
                        ["L", y, k],
                        ["L", G, k],
                        ["L", G, it],
                        ["Z"]
                    ]), u.redrawTrigger !== "adjustHeight" && this.mask.attr({
                        d
                    })
                }
                moveFixedElements() {
                    let u, {
                            container: m,
                            inverted: h,
                            scrollablePixelsX: x,
                            scrollablePixelsY: X
                        } = this.chart,
                        L = this.fixedRenderer,
                        k = v.fixedSelectors;
                    for (let r of (x && !h ? u = ".highcharts-yaxis" : x && h || X && !h ? u = ".highcharts-xaxis" : X && h && (u = ".highcharts-yaxis"), u && k.push(`${u}:not(.highcharts-radial-axis)`, `${u}-labels:not(.highcharts-radial-axis-labels)`), k))[].forEach.call(m.querySelectorAll(r), p => {
                        (p.namespaceURI === L.SVG_NS ? L.box : L.box.parentNode).appendChild(p), p.style.pointerEvents = "auto"
                    })
                }
            }
            return v.fixedSelectors = [".highcharts-breadcrumbs-group", ".highcharts-contextbutton", ".highcharts-caption", ".highcharts-credits", ".highcharts-drillup-button", ".highcharts-legend", ".highcharts-legend-checkbox", ".highcharts-navigator-series", ".highcharts-navigator-xaxis", ".highcharts-navigator-yaxis", ".highcharts-navigator", ".highcharts-range-selector-group", ".highcharts-reset-zoom", ".highcharts-scrollbar", ".highcharts-subtitle", ".highcharts-title"], v
        }), ct(P, "Core/Axis/Stacking/StackItem.js", [P["Core/Templating.js"], P["Core/Series/SeriesRegistry.js"], P["Core/Utilities.js"]], function(V, Z, ot) {
            let {
                format: ht
            } = V, {
                series: st
            } = Z, {
                destroyObjectProperties: J,
                fireEvent: et,
                isNumber: Y,
                pick: z
            } = ot;
            return class {
                constructor(H, w, I, D, T) {
                    let v = H.chart.inverted,
                        M = H.reversed;
                    this.axis = H;
                    let u = this.isNegative = !!I != !!M;
                    this.options = w = w || {}, this.x = D, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = !1, this.stack = T, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = {
                        align: w.align || (v ? u ? "left" : "right" : "center"),
                        verticalAlign: w.verticalAlign || (v ? "middle" : u ? "bottom" : "top"),
                        y: w.y,
                        x: w.x
                    }, this.textAlign = w.textAlign || (v ? u ? "right" : "left" : "center")
                }
                destroy() {
                    J(this, this.axis)
                }
                render(H) {
                    let w = this.axis.chart,
                        I = this.options,
                        D = I.format,
                        T = D ? ht(D, this, w) : I.formatter.call(this);
                    if (this.label) this.label.attr({
                        text: T,
                        visibility: "hidden"
                    });
                    else {
                        this.label = w.renderer.label(T, null, void 0, I.shape, void 0, void 0, I.useHTML, !1, "stack-labels");
                        let v = {
                            r: I.borderRadius || 0,
                            text: T,
                            padding: z(I.padding, 5),
                            visibility: "hidden"
                        };
                        w.styledMode || (v.fill = I.backgroundColor, v.stroke = I.borderColor, v["stroke-width"] = I.borderWidth, this.label.css(I.style || {})), this.label.attr(v), this.label.added || this.label.add(H)
                    }
                    this.label.labelrank = w.plotSizeY, et(this, "afterRender")
                }
                setOffset(H, w, I, D, T, v) {
                    let {
                        alignOptions: M,
                        axis: u,
                        label: m,
                        options: h,
                        textAlign: x
                    } = this, X = u.chart, L = this.getStackBox({
                        xOffset: H,
                        width: w,
                        boxBottom: I,
                        boxTop: D,
                        defaultX: T,
                        xAxis: v
                    }), {
                        verticalAlign: k
                    } = M;
                    if (m && L) {
                        let r = m.getBBox(void 0, 0),
                            p = m.padding,
                            n = z(h.overflow, "justify") === "justify",
                            t;
                        M.x = h.x || 0, M.y = h.y || 0;
                        let {
                            x: e,
                            y: o
                        } = this.adjustStackPosition({
                            labelBox: r,
                            verticalAlign: k,
                            textAlign: x
                        });
                        L.x -= e, L.y -= o, m.align(M, !1, L), (t = X.isInsidePlot(m.alignAttr.x + M.x + e, m.alignAttr.y + M.y + o)) || (n = !1), n && st.prototype.justifyDataLabel.call(u, m, M, m.alignAttr, r, L), m.attr({
                            x: m.alignAttr.x,
                            y: m.alignAttr.y,
                            rotation: h.rotation,
                            rotationOriginX: r.width * {
                                left: 0,
                                center: .5,
                                right: 1
                            }[h.textAlign || "center"],
                            rotationOriginY: r.height / 2
                        }), z(!n && h.crop, !0) && (t = Y(m.x) && Y(m.y) && X.isInsidePlot(m.x - p + (m.width || 0), m.y) && X.isInsidePlot(m.x + p, m.y)), m[t ? "show" : "hide"]()
                    }
                    et(this, "afterSetOffset", {
                        xOffset: H,
                        width: w
                    })
                }
                adjustStackPosition({
                    labelBox: H,
                    verticalAlign: w,
                    textAlign: I
                }) {
                    let D = {
                            bottom: 0,
                            middle: 1,
                            top: 2,
                            right: 1,
                            center: 0,
                            left: -1
                        },
                        T = D[w],
                        v = D[I];
                    return {
                        x: H.width / 2 + H.width / 2 * v,
                        y: H.height / 2 * T
                    }
                }
                getStackBox(H) {
                    let w = this.axis,
                        I = w.chart,
                        {
                            boxTop: D,
                            defaultX: T,
                            xOffset: v,
                            width: M,
                            boxBottom: u
                        } = H,
                        m = w.stacking.usePercentage ? 100 : z(D, this.total, 0),
                        h = w.toPixels(m),
                        x = H.xAxis || I.xAxis[0],
                        X = z(T, x.translate(this.x)) + v,
                        L = Math.abs(h - w.toPixels(u || Y(w.min) && w.logarithmic && w.logarithmic.lin2log(w.min) || 0)),
                        k = I.inverted,
                        r = this.isNegative;
                    return k ? {
                        x: (r ? h : h - L) - I.plotLeft,
                        y: x.height - X - M,
                        width: L,
                        height: M
                    } : {
                        x: X + x.transB - I.plotLeft,
                        y: (r ? h - L : h) - I.plotTop,
                        width: M,
                        height: L
                    }
                }
            }
        }), ct(P, "Core/Axis/Stacking/StackingAxis.js", [P["Core/Animation/AnimationUtilities.js"], P["Core/Axis/Axis.js"], P["Core/Series/SeriesRegistry.js"], P["Core/Axis/Stacking/StackItem.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht, st) {
            var J;
            let {
                getDeferredAnimation: et
            } = V, {
                series: {
                    prototype: Y
                }
            } = ot, {
                addEvent: z,
                correctFloat: H,
                defined: w,
                destroyObjectProperties: I,
                fireEvent: D,
                isArray: T,
                isNumber: v,
                objectEach: M,
                pick: u
            } = st;

            function m() {
                let t = this.inverted;
                this.axes.forEach(e => {
                    e.stacking && e.stacking.stacks && e.hasVisibleSeries && (e.stacking.oldStacks = e.stacking.stacks)
                }), this.series.forEach(e => {
                    let o = e.xAxis && e.xAxis.options || {};
                    e.options.stacking && e.reserveSpace() && (e.stackKey = [e.type, u(e.options.stack, ""), t ? o.top : o.left, t ? o.height : o.width].join(","))
                })
            }

            function h() {
                var e;
                let t = this.stacking;
                if (t) {
                    let o = t.stacks;
                    M(o, (i, l) => {
                        I(i), delete o[l]
                    }), (e = t.stackTotalGroup) == null || e.destroy()
                }
            }

            function x() {
                this.stacking || (this.stacking = new n(this))
            }

            function X(t, e, o, i) {
                return !w(t) || t.x !== e || i && t.stackKey !== i ? t = {
                    x: e,
                    index: 0,
                    key: i,
                    stackKey: i
                } : t.index++, t.key = [o, e, t.index].join(","), t
            }

            function L() {
                let t, e = this,
                    o = e.yAxis,
                    i = e.stackKey || "",
                    l = o.stacking.stacks,
                    a = e.processedXData,
                    b = e.options.stacking,
                    O = e[b + "Stacker"];
                O && [i, "-" + i].forEach(_ => {
                    var it;
                    let y = a.length,
                        j, G, W;
                    for (; y--;) j = a[y], t = e.getStackIndicator(t, j, e.index, _), G = (it = l[_]) == null ? void 0 : it[j], (W = G == null ? void 0 : G.points[t.key || ""]) && O.call(e, W, G, y)
                })
            }

            function k(t, e, o) {
                let i = e.total ? 100 / e.total : 0;
                t[0] = H(t[0] * i), t[1] = H(t[1] * i), this.stackedYData[o] = t[1]
            }

            function r(t) {
                (this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && !this.options.stacking && this.chart.series.length > 1 ? Y.setStackedPoints.call(this, t, "group") : t.stacking.resetStacks())
            }

            function p(t, e) {
                var K, at;
                let o, i, l, a, b, O, _, y, j, G = e || this.options.stacking;
                if (!G || !this.reserveSpace() || ({
                        group: "xAxis"
                    }[G] || "yAxis") !== t.coll) return;
                let W = this.processedXData,
                    it = this.processedYData,
                    d = [],
                    c = it.length,
                    S = this.options,
                    B = S.threshold || 0,
                    s = S.startFromThreshold ? B : 0,
                    g = S.stack,
                    f = e ? `${this.type},${G}` : this.stackKey || "",
                    C = "-" + f,
                    A = this.negStacks,
                    N = t.stacking,
                    U = N.stacks,
                    q = N.oldStacks;
                for (N.stacksTouched += 1, _ = 0; _ < c; _++) {
                    y = W[_], j = it[_], O = (o = this.getStackIndicator(o, y, this.index)).key || "", U[b = (i = A && j < (s ? 0 : B)) ? C : f] || (U[b] = {}), U[b][y] || ((K = q[b]) != null && K[y] ? (U[b][y] = q[b][y], U[b][y].total = null) : U[b][y] = new ht(t, t.options.stackLabels, !!i, y, g)), l = U[b][y], j !== null ? (l.points[O] = l.points[this.index] = [u(l.cumulative, s)], w(l.cumulative) || (l.base = O), l.touched = N.stacksTouched, o.index > 0 && this.singleStacks === !1 && (l.points[O][0] = l.points[this.index + "," + y + ",0"][0])) : (delete l.points[O], delete l.points[this.index]);
                    let lt = l.total || 0;
                    G === "percent" ? (a = i ? f : C, lt = A && ((at = U[a]) != null && at[y]) ? (a = U[a][y]).total = Math.max(a.total || 0, lt) + Math.abs(j) || 0 : H(lt + (Math.abs(j) || 0))) : G === "group" ? (T(j) && (j = j[0]), j !== null && lt++) : lt = H(lt + (j || 0)), G === "group" ? l.cumulative = (lt || 1) - 1 : l.cumulative = H(u(l.cumulative, s) + (j || 0)), l.total = lt, j !== null && (l.points[O].push(l.cumulative), d[_] = l.cumulative, l.hasValidPoints = !0)
                }
                G === "percent" && (N.usePercentage = !0), G !== "group" && (this.stackedYData = d), N.oldStacks = {}
            }
            class n {
                constructor(e) {
                    this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = e
                }
                buildStacks() {
                    let e, o, i = this.axis,
                        l = i.series,
                        a = i.coll === "xAxis",
                        b = i.options.reversedStacks,
                        O = l.length;
                    for (this.resetStacks(), this.usePercentage = !1, o = O; o--;) e = l[b ? o : O - o - 1], a && e.setGroupedPoints(i), e.setStackedPoints(i);
                    if (!a)
                        for (o = 0; o < O; o++) l[o].modifyStacks();
                    D(i, "afterBuildStacks")
                }
                cleanStacks() {
                    this.oldStacks && (this.stacks = this.oldStacks, M(this.stacks, e => {
                        M(e, o => {
                            o.cumulative = o.total
                        })
                    }))
                }
                resetStacks() {
                    M(this.stacks, e => {
                        M(e, (o, i) => {
                            v(o.touched) && o.touched < this.stacksTouched ? (o.destroy(), delete e[i]) : (o.total = null, o.cumulative = null)
                        })
                    })
                }
                renderStackTotals() {
                    var O;
                    let e = this.axis,
                        o = e.chart,
                        i = o.renderer,
                        l = this.stacks,
                        a = et(o, ((O = e.options.stackLabels) == null ? void 0 : O.animation) || !1),
                        b = this.stackTotalGroup = this.stackTotalGroup || i.g("stack-labels").attr({
                            zIndex: 6,
                            opacity: 0
                        }).add();
                    b.translate(o.plotLeft, o.plotTop), M(l, _ => {
                        M(_, y => {
                            y.render(b)
                        })
                    }), b.animate({
                        opacity: 1
                    }, a)
                }
            }
            return (J || (J = {})).compose = function(t, e, o) {
                let i = e.prototype,
                    l = o.prototype;
                i.getStacks || (z(t, "init", x), z(t, "destroy", h), i.getStacks = m, l.getStackIndicator = X, l.modifyStacks = L, l.percentStacker = k, l.setGroupedPoints = r, l.setStackedPoints = p)
            }, J
        }), ct(P, "Series/Line/LineSeries.js", [P["Core/Series/Series.js"], P["Core/Series/SeriesRegistry.js"], P["Core/Utilities.js"]], function(V, Z, ot) {
            let {
                defined: ht,
                merge: st,
                isObject: J
            } = ot;
            class et extends V {
                drawGraph() {
                    let z = this.options,
                        H = (this.gappedPath || this.getGraphPath).call(this),
                        w = this.chart.styledMode;
                    [this, ...this.zones].forEach((I, D) => {
                        let T, v = I.graph,
                            M = v ? "animate" : "attr",
                            u = I.dashStyle || z.dashStyle;
                        v ? (v.endX = this.preventGraphAnimation ? null : H.xMap, v.animate({
                            d: H
                        })) : H.length && (I.graph = v = this.chart.renderer.path(H).addClass("highcharts-graph" + (D ? ` highcharts-zone-graph-${D-1} ` : " ") + (D && I.className || "")).attr({
                            zIndex: 1
                        }).add(this.group)), v && !w && (T = {
                            stroke: !D && z.lineColor || I.color || this.color || "#cccccc",
                            "stroke-width": z.lineWidth || 0,
                            fill: this.fillGraph && this.color || "none"
                        }, u ? T.dashstyle = u : z.linecap !== "square" && (T["stroke-linecap"] = T["stroke-linejoin"] = "round"), v[M](T).shadow(D < 2 && z.shadow && st({
                            filterUnits: "userSpaceOnUse"
                        }, J(z.shadow) ? z.shadow : {}))), v && (v.startX = H.xMap, v.isArea = H.isArea)
                    })
                }
                getGraphPath(z, H, w) {
                    let I = this,
                        D = I.options,
                        T = [],
                        v = [],
                        M, u = D.step,
                        m = (z = z || I.points).reversed;
                    return m && z.reverse(), (u = {
                        right: 1,
                        center: 2
                    }[u] || u && 3) && m && (u = 4 - u), (z = this.getValidPoints(z, !1, !(D.connectNulls && !H && !w))).forEach(function(h, x) {
                        let X, L = h.plotX,
                            k = h.plotY,
                            r = z[x - 1],
                            p = h.isNull || typeof k != "number";
                        (h.leftCliff || r && r.rightCliff) && !w && (M = !0), p && !ht(H) && x > 0 ? M = !D.connectNulls : p && !H ? M = !0 : (x === 0 || M ? X = [
                            ["M", h.plotX, h.plotY]
                        ] : I.getPointSpline ? X = [I.getPointSpline(z, h, x)] : u ? (X = u === 1 ? [
                            ["L", r.plotX, k]
                        ] : u === 2 ? [
                            ["L", (r.plotX + L) / 2, r.plotY],
                            ["L", (r.plotX + L) / 2, k]
                        ] : [
                            ["L", L, r.plotY]
                        ]).push(["L", L, k]) : X = [
                            ["L", L, k]
                        ], v.push(h.x), u && (v.push(h.x), u === 2 && v.push(h.x)), T.push.apply(T, X), M = !1)
                    }), T.xMap = v, I.graphPath = T, T
                }
            }
            return et.defaultOptions = st(V.defaultOptions, {
                legendSymbol: "lineMarker"
            }), Z.registerSeriesType("line", et), et
        }), ct(P, "Series/Area/AreaSeriesDefaults.js", [], function() {
            return {
                threshold: 0,
                legendSymbol: "areaMarker"
            }
        }), ct(P, "Series/Area/AreaSeries.js", [P["Series/Area/AreaSeriesDefaults.js"], P["Core/Series/SeriesRegistry.js"], P["Core/Utilities.js"]], function(V, Z, ot) {
            let {
                seriesTypes: {
                    line: ht
                }
            } = Z, {
                extend: st,
                merge: J,
                objectEach: et,
                pick: Y
            } = ot;
            class z extends ht {
                drawGraph() {
                    this.areaPath = [], super.drawGraph.apply(this);
                    let {
                        areaPath: w,
                        options: I
                    } = this;
                    [this, ...this.zones].forEach((D, T) => {
                        let v = {},
                            M = D.fillColor || I.fillColor,
                            u = D.area,
                            m = u ? "animate" : "attr";
                        u ? (u.endX = this.preventGraphAnimation ? null : w.xMap, u.animate({
                            d: w
                        })) : (v.zIndex = 0, (u = D.area = this.chart.renderer.path(w).addClass("highcharts-area" + (T ? ` highcharts-zone-area-${T-1} ` : " ") + (T && D.className || "")).add(this.group)).isArea = !0), this.chart.styledMode || (v.fill = M || D.color || this.color, v["fill-opacity"] = M ? 1 : I.fillOpacity ? ? .75, u.css({
                            pointerEvents: this.stickyTracking ? "none" : "auto"
                        })), u[m](v), u.startX = w.xMap, u.shiftUnit = I.step ? 2 : 1
                    })
                }
                getGraphPath(w) {
                    let I, D, T, v = ht.prototype.getGraphPath,
                        M = this.options,
                        u = M.stacking,
                        m = this.yAxis,
                        h = [],
                        x = [],
                        X = this.index,
                        L = m.stacking.stacks[this.stackKey],
                        k = M.threshold,
                        r = Math.round(m.getThreshold(M.threshold)),
                        p = Y(M.connectNulls, u === "percent"),
                        n = function(a, b, O) {
                            let _ = w[a],
                                y = u && L[_.x].points[X],
                                j = _[O + "Null"] || 0,
                                G = _[O + "Cliff"] || 0,
                                W, it, d = !0;
                            G || j ? (W = (j ? y[0] : y[1]) + G, it = y[0] + G, d = !!j) : !u && w[b] && w[b].isNull && (W = it = k), W !== void 0 && (x.push({
                                plotX: I,
                                plotY: W === null ? r : m.getThreshold(W),
                                isNull: d,
                                isCliff: !0
                            }), h.push({
                                plotX: I,
                                plotY: it === null ? r : m.getThreshold(it),
                                doCurve: !1
                            }))
                        };
                    w = w || this.points, u && (w = this.getStackPoints(w));
                    for (let a = 0, b = w.length; a < b; ++a) u || (w[a].leftCliff = w[a].rightCliff = w[a].leftNull = w[a].rightNull = void 0), D = w[a].isNull, I = Y(w[a].rectPlotX, w[a].plotX), T = u ? Y(w[a].yBottom, r) : r, D && !p || (p || n(a, a - 1, "left"), D && !u && p || (x.push(w[a]), h.push({
                        x: a,
                        plotX: I,
                        plotY: T
                    })), p || n(a, a + 1, "right"));
                    let t = v.call(this, x, !0, !0);
                    h.reversed = !0;
                    let e = v.call(this, h, !0, !0),
                        o = e[0];
                    o && o[0] === "M" && (e[0] = ["L", o[1], o[2]]);
                    let i = t.concat(e);
                    i.length && i.push(["Z"]);
                    let l = v.call(this, x, !1, p);
                    return i.xMap = t.xMap, this.areaPath = i, l
                }
                getStackPoints(w) {
                    let I = this,
                        D = [],
                        T = [],
                        v = this.xAxis,
                        M = this.yAxis,
                        u = M.stacking.stacks[this.stackKey],
                        m = {},
                        h = M.series,
                        x = h.length,
                        X = M.options.reversedStacks ? 1 : -1,
                        L = h.indexOf(I);
                    if (w = w || this.points, this.options.stacking) {
                        for (let r = 0; r < w.length; r++) w[r].leftNull = w[r].rightNull = void 0, m[w[r].x] = w[r];
                        et(u, function(r, p) {
                            r.total !== null && T.push(p)
                        }), T.sort(function(r, p) {
                            return r - p
                        });
                        let k = h.map(r => r.visible);
                        T.forEach(function(r, p) {
                            let n = 0,
                                t, e;
                            if (m[r] && !m[r].isNull) D.push(m[r]), [-1, 1].forEach(function(o) {
                                let i = o === 1 ? "rightNull" : "leftNull",
                                    l = u[T[p + o]],
                                    a = 0;
                                if (l) {
                                    let b = L;
                                    for (; b >= 0 && b < x;) {
                                        let O = h[b].index;
                                        !(t = l.points[O]) && (O === I.index ? m[r][i] = !0 : k[b] && (e = u[r].points[O]) && (a -= e[1] - e[0])), b += X
                                    }
                                }
                                m[r][o === 1 ? "rightCliff" : "leftCliff"] = a
                            });
                            else {
                                let o = L;
                                for (; o >= 0 && o < x;) {
                                    let i = h[o].index;
                                    if (t = u[r].points[i]) {
                                        n = t[1];
                                        break
                                    }
                                    o += X
                                }
                                n = Y(n, 0), n = M.translate(n, 0, 1, 0, 1), D.push({
                                    isNull: !0,
                                    plotX: v.translate(r, 0, 0, 0, 1),
                                    x: r,
                                    plotY: n,
                                    yBottom: n
                                })
                            }
                        })
                    }
                    return D
                }
            }
            return z.defaultOptions = J(ht.defaultOptions, V), st(z.prototype, {
                singleStacks: !1
            }), Z.registerSeriesType("area", z), z
        }), ct(P, "Series/Spline/SplineSeries.js", [P["Core/Series/SeriesRegistry.js"], P["Core/Utilities.js"]], function(V, Z) {
            let {
                line: ot
            } = V.seriesTypes, {
                merge: ht,
                pick: st
            } = Z;
            class J extends ot {
                getPointSpline(Y, z, H) {
                    let w, I, D, T, v = z.plotX || 0,
                        M = z.plotY || 0,
                        u = Y[H - 1],
                        m = Y[H + 1];

                    function h(X) {
                        return X && !X.isNull && X.doCurve !== !1 && !z.isCliff
                    }
                    if (h(u) && h(m)) {
                        let X = u.plotX || 0,
                            L = u.plotY || 0,
                            k = m.plotX || 0,
                            r = m.plotY || 0,
                            p = 0;
                        w = (1.5 * v + X) / 2.5, I = (1.5 * M + L) / 2.5, D = (1.5 * v + k) / 2.5, T = (1.5 * M + r) / 2.5, D !== w && (p = (T - I) * (D - v) / (D - w) + M - T), I += p, T += p, I > L && I > M ? (I = Math.max(L, M), T = 2 * M - I) : I < L && I < M && (I = Math.min(L, M), T = 2 * M - I), T > r && T > M ? (T = Math.max(r, M), I = 2 * M - T) : T < r && T < M && (T = Math.min(r, M), I = 2 * M - T), z.rightContX = D, z.rightContY = T, z.controlPoints = {
                            low: [w, I],
                            high: [D, T]
                        }
                    }
                    let x = ["C", st(u.rightContX, u.plotX, 0), st(u.rightContY, u.plotY, 0), st(w, v, 0), st(I, M, 0), v, M];
                    return u.rightContX = u.rightContY = void 0, x
                }
            }
            return J.defaultOptions = ht(ot.defaultOptions), V.registerSeriesType("spline", J), J
        }), ct(P, "Series/AreaSpline/AreaSplineSeries.js", [P["Series/Spline/SplineSeries.js"], P["Core/Series/SeriesRegistry.js"], P["Core/Utilities.js"]], function(V, Z, ot) {
            let {
                area: ht,
                area: {
                    prototype: st
                }
            } = Z.seriesTypes, {
                extend: J,
                merge: et
            } = ot;
            class Y extends V {}
            return Y.defaultOptions = et(V.defaultOptions, ht.defaultOptions), J(Y.prototype, {
                getGraphPath: st.getGraphPath,
                getStackPoints: st.getStackPoints,
                drawGraph: st.drawGraph
            }), Z.registerSeriesType("areaspline", Y), Y
        }), ct(P, "Series/Column/ColumnSeriesDefaults.js", [], function() {
            return {
                borderRadius: 3,
                centerInCategory: !1,
                groupPadding: .2,
                marker: null,
                pointPadding: .1,
                minPointLength: 0,
                cropThreshold: 50,
                pointRange: null,
                states: {
                    hover: {
                        halo: !1,
                        brightness: .1
                    },
                    select: {
                        color: "#cccccc",
                        borderColor: "#000000"
                    }
                },
                dataLabels: {
                    align: void 0,
                    verticalAlign: void 0,
                    y: void 0
                },
                startFromThreshold: !0,
                stickyTracking: !1,
                tooltip: {
                    distance: 6
                },
                threshold: 0,
                borderColor: "#ffffff"
            }
        }), ct(P, "Series/Column/ColumnSeries.js", [P["Core/Animation/AnimationUtilities.js"], P["Core/Color/Color.js"], P["Series/Column/ColumnSeriesDefaults.js"], P["Core/Globals.js"], P["Core/Series/Series.js"], P["Core/Series/SeriesRegistry.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht, st, J, et) {
            let {
                animObject: Y
            } = V, {
                parse: z
            } = Z, {
                noop: H
            } = ht, {
                clamp: w,
                crisp: I,
                defined: D,
                extend: T,
                fireEvent: v,
                isArray: M,
                isNumber: u,
                merge: m,
                pick: h,
                objectEach: x
            } = et;
            class X extends st {
                animate(k) {
                    let r, p, n = this,
                        t = this.yAxis,
                        e = t.pos,
                        o = t.reversed,
                        i = n.options,
                        {
                            clipOffset: l,
                            inverted: a
                        } = this.chart,
                        b = {},
                        O = a ? "translateX" : "translateY";
                    k && l ? (b.scaleY = .001, p = w(t.toPixels(i.threshold), e, e + t.len), a ? (p += o ? -Math.floor(l[0]) : Math.ceil(l[2]), b.translateX = p - t.len) : (p += o ? Math.ceil(l[0]) : -Math.floor(l[2]), b.translateY = p), n.clipBox && n.setClip(), n.group.attr(b)) : (r = Number(n.group.attr(O)), n.group.animate({
                        scaleY: 1
                    }, T(Y(n.options.animation), {
                        step: function(_, y) {
                            n.group && (b[O] = r + y.pos * (e - r), n.group.attr(b))
                        }
                    })))
                }
                init(k, r) {
                    super.init.apply(this, arguments);
                    let p = this;
                    (k = p.chart).hasRendered && k.series.forEach(function(n) {
                        n.type === p.type && (n.isDirty = !0)
                    })
                }
                getColumnMetrics() {
                    var j, G;
                    let k = this,
                        r = k.options,
                        p = k.xAxis,
                        n = k.yAxis,
                        t = p.options.reversedStacks,
                        e = p.reversed && !t || !p.reversed && t,
                        o = {},
                        i, l = 0;
                    r.grouping === !1 ? l = 1 : k.chart.series.forEach(function(W) {
                        let it, d = W.yAxis,
                            c = W.options;
                        W.type === k.type && W.reserveSpace() && n.len === d.len && n.pos === d.pos && (c.stacking && c.stacking !== "group" ? (o[i = W.stackKey] === void 0 && (o[i] = l++), it = o[i]) : c.grouping !== !1 && (it = l++), W.columnIndex = it)
                    });
                    let a = Math.min(Math.abs(p.transA) * (!((j = p.brokenAxis) != null && j.hasBreaks) && ((G = p.ordinal) == null ? void 0 : G.slope) || r.pointRange || p.closestPointRange || p.tickInterval || 1), p.len),
                        b = a * r.groupPadding,
                        O = (a - 2 * b) / (l || 1),
                        _ = Math.min(r.maxPointWidth || p.len, h(r.pointWidth, O * (1 - 2 * r.pointPadding))),
                        y = (k.columnIndex || 0) + (e ? 1 : 0);
                    return k.columnMetrics = {
                        width: _,
                        offset: (O - _) / 2 + (b + y * O - a / 2) * (e ? -1 : 1),
                        paddedWidth: O,
                        columnCount: l
                    }, k.columnMetrics
                }
                crispCol(k, r, p, n) {
                    let t = this.borderWidth,
                        e = this.chart.inverted;
                    return n = I(r + n, t, e) - (r = I(r, t, e)), this.options.crisp && (p = I(k + p, t) - (k = I(k, t))), {
                        x: k,
                        y: r,
                        width: p,
                        height: n
                    }
                }
                adjustForMissingColumns(k, r, p, n) {
                    var t;
                    if (!p.isNull && n.columnCount > 1) {
                        let e = this.xAxis.series.filter(a => a.visible).map(a => a.index),
                            o = 0,
                            i = 0;
                        x((t = this.xAxis.stacking) == null ? void 0 : t.stacks, a => {
                            if (typeof p.x == "number") {
                                let b = a[p.x.toString()];
                                if (b && M(b.points[this.index])) {
                                    let O = Object.keys(b.points).filter(_ => !_.match(",") && b.points[_] && b.points[_].length > 1).map(parseFloat).filter(_ => e.indexOf(_) !== -1).sort((_, y) => y - _);
                                    o = O.indexOf(this.index), i = O.length
                                }
                            }
                        }), o = this.xAxis.reversed ? i - 1 - o : o;
                        let l = (i - 1) * n.paddedWidth + r;
                        k = (p.plotX || 0) + l / 2 - r - o * n.paddedWidth
                    }
                    return k
                }
                translate() {
                    let k = this,
                        r = k.chart,
                        p = k.options,
                        n = k.dense = k.closestPointRange * k.xAxis.transA < 2,
                        t = k.borderWidth = h(p.borderWidth, n ? 0 : 1),
                        e = k.xAxis,
                        o = k.yAxis,
                        i = p.threshold,
                        l = h(p.minPointLength, 5),
                        a = k.getColumnMetrics(),
                        b = a.width,
                        O = k.pointXOffset = a.offset,
                        _ = k.dataMin,
                        y = k.dataMax,
                        j = k.translatedThreshold = o.getThreshold(i),
                        G = k.barW = Math.max(b, 1 + 2 * t);
                    p.pointPadding && (G = Math.ceil(G)), st.prototype.translate.apply(k), k.points.forEach(function(W) {
                        let it = h(W.yBottom, j),
                            d = 999 + Math.abs(it),
                            c = W.plotX || 0,
                            S = w(W.plotY, -d, o.len + d),
                            B, s = Math.min(S, it),
                            g = Math.max(S, it) - s,
                            f = b,
                            C = c + O,
                            A = G;
                        l && Math.abs(g) < l && (g = l, B = !o.reversed && !W.negative || o.reversed && W.negative, u(i) && u(y) && W.y === i && y <= i && (o.min || 0) < i && (_ !== y || (o.max || 0) <= i) && (B = !B, W.negative = !W.negative), s = Math.abs(s - j) > l ? it - l : j - (B ? l : 0)), D(W.options.pointWidth) && (C -= Math.round(((f = A = Math.ceil(W.options.pointWidth)) - b) / 2)), p.centerInCategory && !p.stacking && (C = k.adjustForMissingColumns(C, f, W, a)), W.barX = C, W.pointWidth = f, W.tooltipPos = r.inverted ? [w(o.len + o.pos - r.plotLeft - S, o.pos - r.plotLeft, o.len + o.pos - r.plotLeft), e.len + e.pos - r.plotTop - C - A / 2, g] : [e.left - r.plotLeft + C + A / 2, w(S + o.pos - r.plotTop, o.pos - r.plotTop, o.len + o.pos - r.plotTop), g], W.shapeType = k.pointClass.prototype.shapeType || "roundedRect", W.shapeArgs = k.crispCol(C, W.isNull ? j : s, A, W.isNull ? 0 : g)
                    }), v(this, "afterColumnTranslate")
                }
                drawGraph() {
                    this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
                }
                pointAttribs(k, r) {
                    let p = this.options,
                        n = this.pointAttrToOptions || {},
                        t = n.stroke || "borderColor",
                        e = n["stroke-width"] || "borderWidth",
                        o, i, l, a = k && k.color || this.color,
                        b = k && k[t] || p[t] || a,
                        O = k && k.options.dashStyle || p.dashStyle,
                        _ = k && k[e] || p[e] || this[e] || 0,
                        y = h(k && k.opacity, p.opacity, 1);
                    k && this.zones.length && (i = k.getZone(), a = k.options.color || i && (i.color || k.nonZonedColor) || this.color, i && (b = i.borderColor || b, O = i.dashStyle || O, _ = i.borderWidth || _)), r && k && (l = (o = m(p.states[r], k.options.states && k.options.states[r] || {})).brightness, a = o.color || l !== void 0 && z(a).brighten(o.brightness).get() || a, b = o[t] || b, _ = o[e] || _, O = o.dashStyle || O, y = h(o.opacity, y));
                    let j = {
                        fill: a,
                        stroke: b,
                        "stroke-width": _,
                        opacity: y
                    };
                    return O && (j.dashstyle = O), j
                }
                drawPoints(k = this.points) {
                    let r, p = this,
                        n = this.chart,
                        t = p.options,
                        e = n.renderer,
                        o = t.animationLimit || 250;
                    k.forEach(function(i) {
                        let l = i.plotY,
                            a = i.graphic,
                            b = !!a,
                            O = a && n.pointCount < o ? "animate" : "attr";
                        u(l) && i.y !== null ? (r = i.shapeArgs, a && i.hasNewShapeType() && (a = a.destroy()), p.enabledDataSorting && (i.startXPos = p.xAxis.reversed ? -(r && r.width || 0) : p.xAxis.width), !a && (i.graphic = a = e[i.shapeType](r).add(i.group || p.group), a && p.enabledDataSorting && n.hasRendered && n.pointCount < o && (a.attr({
                            x: i.startXPos
                        }), b = !0, O = "animate")), a && b && a[O](m(r)), n.styledMode || a[O](p.pointAttribs(i, i.selected && "select")).shadow(i.allowShadow !== !1 && t.shadow), a && (a.addClass(i.getClassName(), !0), a.attr({
                            visibility: i.visible ? "inherit" : "hidden"
                        }))) : a && (i.graphic = a.destroy())
                    })
                }
                drawTracker(k = this.points) {
                    let r, p = this,
                        n = p.chart,
                        t = n.pointer,
                        e = function(o) {
                            let i = t == null ? void 0 : t.getPointFromEvent(o);
                            t && i && p.options.enableMouseTracking && (t.isDirectTouch = !0, i.onMouseOver(o))
                        };
                    k.forEach(function(o) {
                        r = M(o.dataLabels) ? o.dataLabels : o.dataLabel ? [o.dataLabel] : [], o.graphic && (o.graphic.element.point = o), r.forEach(function(i) {
                            (i.div || i.element).point = o
                        })
                    }), p._hasTracking || (p.trackerGroups.forEach(function(o) {
                        p[o] && (p[o].addClass("highcharts-tracker").on("mouseover", e).on("mouseout", function(i) {
                            t == null || t.onTrackerMouseOut(i)
                        }).on("touchstart", e), !n.styledMode && p.options.cursor && p[o].css({
                            cursor: p.options.cursor
                        }))
                    }), p._hasTracking = !0), v(this, "afterDrawTracker")
                }
                remove() {
                    let k = this,
                        r = k.chart;
                    r.hasRendered && r.series.forEach(function(p) {
                        p.type === k.type && (p.isDirty = !0)
                    }), st.prototype.remove.apply(k, arguments)
                }
            }
            return X.defaultOptions = m(st.defaultOptions, ot), T(X.prototype, {
                directTouch: !0,
                getSymbol: H,
                negStacks: !0,
                trackerGroups: ["group", "dataLabelsGroup"]
            }), J.registerSeriesType("column", X), X
        }), ct(P, "Core/Series/DataLabel.js", [P["Core/Animation/AnimationUtilities.js"], P["Core/Templating.js"], P["Core/Utilities.js"]], function(V, Z, ot) {
            var ht;
            let {
                getDeferredAnimation: st
            } = V, {
                format: J
            } = Z, {
                defined: et,
                extend: Y,
                fireEvent: z,
                isArray: H,
                isString: w,
                merge: I,
                objectEach: D,
                pick: T,
                pInt: v,
                splat: M
            } = ot;
            return function(u) {
                function m() {
                    return p(this).some(t => t == null ? void 0 : t.enabled)
                }

                function h(t, e, o, i, l) {
                    var S;
                    let {
                        chart: a,
                        enabledDataSorting: b
                    } = this, O = this.isCartesian && a.inverted, _ = t.plotX, y = t.plotY, j = o.rotation || 0, G = et(_) && et(y) && a.isInsidePlot(_, Math.round(y), {
                        inverted: O,
                        paneCoordinates: !0,
                        series: this
                    }), W = j === 0 && T(o.overflow, b ? "none" : "justify") === "justify", it = this.visible && t.visible !== !1 && et(_) && (t.series.forceDL || b && !W || G || T(o.inside, !!this.options.stacking) && i && a.isInsidePlot(_, O ? i.x + 1 : i.y + i.height - 1, {
                        inverted: O,
                        paneCoordinates: !0,
                        series: this
                    })), d = t.pos();
                    if (it && d) {
                        var c;
                        let B = e.getBBox(),
                            s = e.getBBox(void 0, 0),
                            g = {
                                right: 1,
                                center: .5
                            }[o.align || 0] || 0,
                            f = {
                                bottom: 1,
                                middle: .5
                            }[o.verticalAlign || 0] || 0;
                        if (i = Y({
                                x: d[0],
                                y: Math.round(d[1]),
                                width: 0,
                                height: 0
                            }, i || {}), o.alignTo === "plotEdges" && this.isCartesian && (i[O ? "x" : "y"] = 0, i[O ? "width" : "height"] = ((S = this.yAxis) == null ? void 0 : S.len) || 0), Y(o, {
                                width: B.width,
                                height: B.height
                            }), c = i, b && this.xAxis && !W && this.setDataLabelStartPos(t, e, l, G, c), e.align(I(o, {
                                width: s.width,
                                height: s.height
                            }), !1, i, !1), e.alignAttr.x += g * (s.width - B.width), e.alignAttr.y += f * (s.height - B.height), e[e.placed ? "animate" : "attr"]({
                                x: e.alignAttr.x + (B.width - s.width) / 2,
                                y: e.alignAttr.y + (B.height - s.height) / 2,
                                rotationOriginX: (e.width || 0) / 2,
                                rotationOriginY: (e.height || 0) / 2
                            }), W && i.height >= 0) this.justifyDataLabel(e, o, e.alignAttr, B, i, l);
                        else if (T(o.crop, !0)) {
                            let {
                                x: C,
                                y: A
                            } = e.alignAttr;
                            it = a.isInsidePlot(C, A, {
                                paneCoordinates: !0,
                                series: this
                            }) && a.isInsidePlot(C + B.width - 1, A + B.height - 1, {
                                paneCoordinates: !0,
                                series: this
                            })
                        }
                        o.shape && !j && e[l ? "attr" : "animate"]({
                            anchorX: d[0],
                            anchorY: d[1]
                        })
                    }
                    l && b && (e.placed = !1), it || b && !W ? (e.show(), e.placed = !0) : (e.hide(), e.placed = !1)
                }

                function x() {
                    return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6)
                }

                function X(t) {
                    let e = this.hasRendered || 0,
                        o = this.initDataLabelsGroup().attr({
                            opacity: +e
                        });
                    return !e && o && (this.visible && o.show(), this.options.animation ? o.animate({
                        opacity: 1
                    }, t) : o.attr({
                        opacity: 1
                    })), o
                }

                function L(t) {
                    var it;
                    let e;
                    t = t || this.points;
                    let o = this,
                        i = o.chart,
                        l = o.options,
                        a = i.renderer,
                        {
                            backgroundColor: b,
                            plotBackgroundColor: O
                        } = i.options.chart,
                        _ = a.getContrast(w(O) && O || w(b) && b || "#000000"),
                        y = p(o),
                        {
                            animation: j,
                            defer: G
                        } = y[0],
                        W = G ? st(i, j, o) : {
                            defer: 0,
                            duration: 0
                        };
                    z(this, "drawDataLabels"), (it = o.hasDataLabels) != null && it.call(o) && (e = this.initDataLabels(W), t.forEach(d => {
                        var B, s;
                        let c = d.dataLabels || [];
                        M(r(y, d.dlOptions || ((B = d.options) == null ? void 0 : B.dataLabels))).forEach((g, f) => {
                            var rt;
                            let C = g.enabled && (d.visible || d.dataLabelOnHidden) && (!d.isNull || d.dataLabelOnNull) && function(tt, nt) {
                                    let dt = nt.filter;
                                    if (dt) {
                                        let pt = dt.operator,
                                            ut = tt[dt.property],
                                            ft = dt.value;
                                        return pt === ">" && ut > ft || pt === "<" && ut < ft || pt === ">=" && ut >= ft || pt === "<=" && ut <= ft || pt === "==" && ut == ft || pt === "===" && ut === ft || pt === "!=" && ut != ft || pt === "!==" && ut !== ft
                                    }
                                    return !0
                                }(d, g),
                                {
                                    backgroundColor: A,
                                    borderColor: N,
                                    distance: U,
                                    style: q = {}
                                } = g,
                                K, at, lt, R, E = {},
                                F = c[f],
                                $ = !F,
                                Q;
                            if (C && (at = T(g[d.formatPrefix + "Format"], g.format), K = d.getLabelConfig(), lt = et(at) ? J(at, K, i) : (g[d.formatPrefix + "Formatter"] || g.formatter).call(K, g), R = g.rotation, !i.styledMode && (q.color = T(g.color, q.color, w(o.color) ? o.color : void 0, "#000000"), q.color === "contrast" ? (A !== "none" && (Q = A), d.contrastColor = a.getContrast(Q !== "auto" && Q || d.color || o.color), q.color = Q || !et(U) && g.inside || 0 > v(U || 0) || l.stacking ? d.contrastColor : _) : delete d.contrastColor, l.cursor && (q.cursor = l.cursor)), E = {
                                    r: g.borderRadius || 0,
                                    rotation: R,
                                    padding: g.padding,
                                    zIndex: 1
                                }, i.styledMode || (E.fill = A === "auto" ? d.color : A, E.stroke = N === "auto" ? d.color : N, E["stroke-width"] = g.borderWidth), D(E, (tt, nt) => {
                                    tt === void 0 && delete E[nt]
                                })), !F || C && et(lt) && !!F.div == !!g.useHTML && (F.rotation && g.rotation || F.rotation === g.rotation) || (F = void 0, $ = !0), C && et(lt) && (F ? E.text = lt : (F = a.label(lt, 0, 0, g.shape, void 0, void 0, g.useHTML, void 0, "data-label")).addClass(" highcharts-data-label-color-" + d.colorIndex + " " + (g.className || "") + (g.useHTML ? " highcharts-tracker" : "")), F)) {
                                F.options = g, F.attr(E), i.styledMode || F.css(q).shadow(g.shadow);
                                let tt = g[d.formatPrefix + "TextPath"] || g.textPath;
                                tt && !g.useHTML && (F.setTextPath(((rt = d.getDataLabelPath) == null ? void 0 : rt.call(d, F)) || d.graphic, tt), d.dataLabelPath && !tt.enabled && (d.dataLabelPath = d.dataLabelPath.destroy())), F.added || F.add(e), o.alignDataLabel(d, F, g, void 0, $), F.isActive = !0, c[f] && c[f] !== F && c[f].destroy(), c[f] = F
                            }
                        });
                        let S = c.length;
                        for (; S--;) c[S] && c[S].isActive ? c[S].isActive = !1 : ((s = c[S]) == null || s.destroy(), c.splice(S, 1));
                        d.dataLabel = c[0], d.dataLabels = c
                    })), z(this, "afterDrawDataLabels")
                }

                function k(t, e, o, i, l, a) {
                    let b = this.chart,
                        O = e.align,
                        _ = e.verticalAlign,
                        y = t.box ? 0 : t.padding || 0,
                        j = b.inverted ? this.yAxis : this.xAxis,
                        G = j ? j.left - b.plotLeft : 0,
                        W = b.inverted ? this.xAxis : this.yAxis,
                        it = W ? W.top - b.plotTop : 0,
                        {
                            x: d = 0,
                            y: c = 0
                        } = e,
                        S, B;
                    return (S = (o.x || 0) + y + G) < 0 && (O === "right" && d >= 0 ? (e.align = "left", e.inside = !0) : d -= S, B = !0), (S = (o.x || 0) + i.width - y + G) > b.plotWidth && (O === "left" && d <= 0 ? (e.align = "right", e.inside = !0) : d += b.plotWidth - S, B = !0), (S = o.y + y + it) < 0 && (_ === "bottom" && c >= 0 ? (e.verticalAlign = "top", e.inside = !0) : c -= S, B = !0), (S = (o.y || 0) + i.height - y + it) > b.plotHeight && (_ === "top" && c <= 0 ? (e.verticalAlign = "bottom", e.inside = !0) : c += b.plotHeight - S, B = !0), B && (e.x = d, e.y = c, t.placed = !a, t.align(e, void 0, l)), B
                }

                function r(t, e) {
                    let o = [],
                        i;
                    if (H(t) && !H(e)) o = t.map(function(l) {
                        return I(l, e)
                    });
                    else if (H(e) && !H(t)) o = e.map(function(l) {
                        return I(t, l)
                    });
                    else if (H(t) || H(e)) {
                        if (H(t) && H(e))
                            for (i = Math.max(t.length, e.length); i--;) o[i] = I(t[i], e[i])
                    } else o = I(t, e);
                    return o
                }

                function p(t) {
                    var o, i;
                    let e = t.chart.options.plotOptions;
                    return M(r(r((o = e == null ? void 0 : e.series) == null ? void 0 : o.dataLabels, (i = e == null ? void 0 : e[t.type]) == null ? void 0 : i.dataLabels), t.options.dataLabels))
                }

                function n(t, e, o, i, l) {
                    let a = this.chart,
                        b = a.inverted,
                        O = this.xAxis,
                        _ = O.reversed,
                        y = ((b ? e.height : e.width) || 0) / 2,
                        j = t.pointWidth,
                        G = j ? j / 2 : 0;
                    e.startXPos = b ? l.x : _ ? -y - G : O.width - y + G, e.startYPos = b ? _ ? this.yAxis.height - y + G : -y - G : l.y, i ? e.visibility === "hidden" && (e.show(), e.attr({
                        opacity: 0
                    }).animate({
                        opacity: 1
                    })) : e.attr({
                        opacity: 1
                    }).animate({
                        opacity: 0
                    }, void 0, e.hide), a.hasRendered && (o && e.attr({
                        x: e.startXPos,
                        y: e.startYPos
                    }), e.placed = !0)
                }
                u.compose = function(t) {
                    let e = t.prototype;
                    e.initDataLabels || (e.initDataLabels = X, e.initDataLabelsGroup = x, e.alignDataLabel = h, e.drawDataLabels = L, e.justifyDataLabel = k, e.setDataLabelStartPos = n, e.hasDataLabels = m)
                }
            }(ht || (ht = {})), ht
        }), ct(P, "Series/Column/ColumnDataLabel.js", [P["Core/Series/DataLabel.js"], P["Core/Globals.js"], P["Core/Series/SeriesRegistry.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht) {
            var st;
            let {
                composed: J
            } = Z, {
                series: et
            } = ot, {
                merge: Y,
                pick: z,
                pushUnique: H
            } = ht;
            return function(w) {
                function I(D, T, v, M, u) {
                    let m = this.chart.inverted,
                        h = D.series,
                        x = (h.xAxis ? h.xAxis.len : this.chart.plotSizeX) || 0,
                        X = (h.yAxis ? h.yAxis.len : this.chart.plotSizeY) || 0,
                        L = D.dlBox || D.shapeArgs,
                        k = z(D.below, D.plotY > z(this.translatedThreshold, X)),
                        r = z(v.inside, !!this.options.stacking);
                    if (L) {
                        if (M = Y(L), !(v.overflow === "allow" && v.crop === !1)) {
                            M.y < 0 && (M.height += M.y, M.y = 0);
                            let p = M.y + M.height - X;
                            p > 0 && p < M.height - 1 && (M.height -= p)
                        }
                        m && (M = {
                            x: X - M.y - M.height,
                            y: x - M.x - M.width,
                            width: M.height,
                            height: M.width
                        }), r || (m ? (M.x += k ? 0 : M.width, M.width = 0) : (M.y += k ? M.height : 0, M.height = 0))
                    }
                    v.align = z(v.align, !m || r ? "center" : k ? "right" : "left"), v.verticalAlign = z(v.verticalAlign, m || r ? "middle" : k ? "top" : "bottom"), et.prototype.alignDataLabel.call(this, D, T, v, M, u), v.inside && D.contrastColor && T.css({
                        color: D.contrastColor
                    })
                }
                w.compose = function(D) {
                    V.compose(et), H(J, "ColumnDataLabel") && (D.prototype.alignDataLabel = I)
                }
            }(st || (st = {})), st
        }), ct(P, "Series/Bar/BarSeries.js", [P["Series/Column/ColumnSeries.js"], P["Core/Series/SeriesRegistry.js"], P["Core/Utilities.js"]], function(V, Z, ot) {
            let {
                extend: ht,
                merge: st
            } = ot;
            class J extends V {}
            return J.defaultOptions = st(V.defaultOptions, {}), ht(J.prototype, {
                inverted: !0
            }), Z.registerSeriesType("bar", J), J
        }), ct(P, "Series/Scatter/ScatterSeriesDefaults.js", [], function() {
            return {
                lineWidth: 0,
                findNearestPointBy: "xy",
                jitter: {
                    x: 0,
                    y: 0
                },
                marker: {
                    enabled: !0
                },
                tooltip: {
                    headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>',
                    pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                }
            }
        }), ct(P, "Series/Scatter/ScatterSeries.js", [P["Series/Scatter/ScatterSeriesDefaults.js"], P["Core/Series/SeriesRegistry.js"], P["Core/Utilities.js"]], function(V, Z, ot) {
            let {
                column: ht,
                line: st
            } = Z.seriesTypes, {
                addEvent: J,
                extend: et,
                merge: Y
            } = ot;
            class z extends st {
                applyJitter() {
                    let w = this,
                        I = this.options.jitter,
                        D = this.points.length;
                    I && this.points.forEach(function(T, v) {
                        ["x", "y"].forEach(function(M, u) {
                            if (I[M] && !T.isNull) {
                                let m = `plot${M.toUpperCase()}`,
                                    h = w[`${M}Axis`],
                                    x = I[M] * h.transA;
                                if (h && !h.logarithmic) {
                                    let X = Math.max(0, (T[m] || 0) - x),
                                        L = Math.min(h.len, (T[m] || 0) + x);
                                    T[m] = X + (L - X) * function(k) {
                                        let r = 1e4 * Math.sin(k);
                                        return r - Math.floor(r)
                                    }(v + u * D), M === "x" && (T.clientX = T.plotX)
                                }
                            }
                        })
                    })
                }
                drawGraph() {
                    this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy())
                }
            }
            return z.defaultOptions = Y(st.defaultOptions, V), et(z.prototype, {
                drawTracker: ht.prototype.drawTracker,
                sorted: !1,
                requireSorting: !1,
                noSharedTooltip: !0,
                trackerGroups: ["group", "markerGroup", "dataLabelsGroup"]
            }), J(z, "afterTranslate", function() {
                this.applyJitter()
            }), Z.registerSeriesType("scatter", z), z
        }), ct(P, "Series/CenteredUtilities.js", [P["Core/Globals.js"], P["Core/Series/Series.js"], P["Core/Utilities.js"]], function(V, Z, ot) {
            var ht, st;
            let {
                deg2rad: J
            } = V, {
                fireEvent: et,
                isNumber: Y,
                pick: z,
                relativeLength: H
            } = ot;
            return (st = ht || (ht = {})).getCenter = function() {
                let w = this.options,
                    I = this.chart,
                    D = 2 * (w.slicedOffset || 0),
                    T = I.plotWidth - 2 * D,
                    v = I.plotHeight - 2 * D,
                    M = w.center,
                    u = Math.min(T, v),
                    m = w.thickness,
                    h, x = w.size,
                    X = w.innerSize || 0,
                    L, k;
                typeof x == "string" && (x = parseFloat(x)), typeof X == "string" && (X = parseFloat(X));
                let r = [z(M[0], "50%"), z(M[1], "50%"), z(x && x < 0 ? void 0 : w.size, "100%"), z(X && X < 0 ? void 0 : w.innerSize || 0, "0%")];
                for (!I.angular || this instanceof Z || (r[3] = 0), L = 0; L < 4; ++L) k = r[L], h = L < 2 || L === 2 && /%$/.test(k), r[L] = H(k, [T, v, u, r[2]][L]) + (h ? D : 0);
                return r[3] > r[2] && (r[3] = r[2]), Y(m) && 2 * m < r[2] && m > 0 && (r[3] = r[2] - 2 * m), et(this, "afterGetCenter", {
                    positions: r
                }), r
            }, st.getStartAndEndRadians = function(w, I) {
                let D = Y(w) ? w : 0,
                    T = Y(I) && I > D && I - D < 360 ? I : D + 360;
                return {
                    start: J * (D + -90),
                    end: J * (T + -90)
                }
            }, ht
        }), ct(P, "Series/Pie/PiePoint.js", [P["Core/Animation/AnimationUtilities.js"], P["Core/Series/Point.js"], P["Core/Utilities.js"]], function(V, Z, ot) {
            let {
                setAnimation: ht
            } = V, {
                addEvent: st,
                defined: J,
                extend: et,
                isNumber: Y,
                pick: z,
                relativeLength: H
            } = ot;
            class w extends Z {
                getConnectorPath(D) {
                    let T = D.dataLabelPosition,
                        v = D.options || {},
                        M = v.connectorShape,
                        u = this.connectorShapes[M] || M;
                    return T && u.call(this, { ...T.computed,
                        alignment: T.alignment
                    }, T.connectorPosition, v) || []
                }
                getTranslate() {
                    return this.sliced && this.slicedTranslation || {
                        translateX: 0,
                        translateY: 0
                    }
                }
                haloPath(D) {
                    let T = this.shapeArgs;
                    return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(T.x, T.y, T.r + D, T.r + D, {
                        innerR: T.r - 1,
                        start: T.start,
                        end: T.end,
                        borderRadius: T.borderRadius
                    })
                }
                constructor(D, T, v) {
                    super(D, T, v), this.half = 0, this.name ? ? (this.name = "Slice");
                    let M = u => {
                        this.slice(u.type === "select")
                    };
                    st(this, "select", M), st(this, "unselect", M)
                }
                isValid() {
                    return Y(this.y) && this.y >= 0
                }
                setVisible(D, T = !0) {
                    D !== this.visible && this.update({
                        visible: D ? ? !this.visible
                    }, T, void 0, !1)
                }
                slice(D, T, v) {
                    let M = this.series;
                    ht(v, M.chart), T = z(T, !0), this.sliced = this.options.sliced = D = J(D) ? D : !this.sliced, M.options.data[M.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate())
                }
            }
            return et(w.prototype, {
                connectorShapes: {
                    fixedOffset: function(I, D, T) {
                        let v = D.breakAt,
                            M = D.touchingSliceAt,
                            u = T.softConnector ? ["C", I.x + (I.alignment === "left" ? -5 : 5), I.y, 2 * v.x - M.x, 2 * v.y - M.y, v.x, v.y] : ["L", v.x, v.y];
                        return [
                            ["M", I.x, I.y], u, ["L", M.x, M.y]
                        ]
                    },
                    straight: function(I, D) {
                        let T = D.touchingSliceAt;
                        return [
                            ["M", I.x, I.y],
                            ["L", T.x, T.y]
                        ]
                    },
                    crookedLine: function(I, D, T) {
                        let {
                            breakAt: v,
                            touchingSliceAt: M
                        } = D, {
                            series: u
                        } = this, [m, h, x] = u.center, X = x / 2, {
                            plotLeft: L,
                            plotWidth: k
                        } = u.chart, r = I.alignment === "left", {
                            x: p,
                            y: n
                        } = I, t = v.x;
                        if (T.crookDistance) {
                            let o = H(T.crookDistance, 1);
                            t = r ? m + X + (k + L - m - X) * (1 - o) : L + (m - X) * o
                        } else t = m + (h - n) * Math.tan((this.angle || 0) - Math.PI / 2);
                        let e = [
                            ["M", p, n]
                        ];
                        return (r ? t <= p && t >= v.x : t >= p && t <= v.x) && e.push(["L", t, n]), e.push(["L", v.x, v.y], ["L", M.x, M.y]), e
                    }
                }
            }), w
        }), ct(P, "Series/Pie/PieSeriesDefaults.js", [], function() {
            return {
                borderRadius: 3,
                center: [null, null],
                clip: !1,
                colorByPoint: !0,
                dataLabels: {
                    connectorPadding: 5,
                    connectorShape: "crookedLine",
                    crookDistance: void 0,
                    distance: 30,
                    enabled: !0,
                    formatter: function() {
                        return this.point.isNull ? void 0 : this.point.name
                    },
                    softConnector: !0,
                    x: 0
                },
                fillColor: void 0,
                ignoreHiddenPoint: !0,
                inactiveOtherPoints: !0,
                legendType: "point",
                marker: null,
                size: null,
                showInLegend: !1,
                slicedOffset: 10,
                stickyTracking: !1,
                tooltip: {
                    followPointer: !0
                },
                borderColor: "#ffffff",
                borderWidth: 1,
                lineWidth: void 0,
                states: {
                    hover: {
                        brightness: .1
                    }
                }
            }
        }), ct(P, "Series/Pie/PieSeries.js", [P["Series/CenteredUtilities.js"], P["Series/Column/ColumnSeries.js"], P["Core/Globals.js"], P["Series/Pie/PiePoint.js"], P["Series/Pie/PieSeriesDefaults.js"], P["Core/Series/Series.js"], P["Core/Series/SeriesRegistry.js"], P["Core/Renderer/SVG/Symbols.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht, st, J, et, Y, z) {
            let {
                getStartAndEndRadians: H
            } = V, {
                noop: w
            } = ot, {
                clamp: I,
                extend: D,
                fireEvent: T,
                merge: v,
                pick: M
            } = z;
            class u extends J {
                animate(h) {
                    let x = this,
                        X = x.points,
                        L = x.startAngleRad;
                    h || X.forEach(function(k) {
                        let r = k.graphic,
                            p = k.shapeArgs;
                        r && p && (r.attr({
                            r: M(k.startR, x.center && x.center[3] / 2),
                            start: L,
                            end: L
                        }), r.animate({
                            r: p.r,
                            start: p.start,
                            end: p.end
                        }, x.options.animation))
                    })
                }
                drawEmpty() {
                    let h, x, X = this.startAngleRad,
                        L = this.endAngleRad,
                        k = this.options;
                    this.total === 0 && this.center ? (h = this.center[0], x = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(h, x, this.center[1] / 2, 0, X, L).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({
                        d: Y.arc(h, x, this.center[2] / 2, 0, {
                            start: X,
                            end: L,
                            innerR: this.center[3] / 2
                        })
                    }), this.chart.styledMode || this.graph.attr({
                        "stroke-width": k.borderWidth,
                        fill: k.fillColor || "none",
                        stroke: k.color || "#cccccc"
                    })) : this.graph && (this.graph = this.graph.destroy())
                }
                drawPoints() {
                    let h = this.chart.renderer;
                    this.points.forEach(function(x) {
                        x.graphic && x.hasNewShapeType() && (x.graphic = x.graphic.destroy()), x.graphic || (x.graphic = h[x.shapeType](x.shapeArgs).add(x.series.group), x.delayedRendering = !0)
                    })
                }
                generatePoints() {
                    super.generatePoints(), this.updateTotals()
                }
                getX(h, x, X, L) {
                    let k = this.center,
                        r = this.radii ? this.radii[X.index] || 0 : k[2] / 2,
                        p = L.dataLabelPosition,
                        n = (p == null ? void 0 : p.distance) || 0,
                        t = Math.asin(I((h - k[1]) / (r + n), -1, 1));
                    return k[0] + Math.cos(t) * (r + n) * (x ? -1 : 1) + (n > 0 ? (x ? -1 : 1) * (L.padding || 0) : 0)
                }
                hasData() {
                    return !!this.processedXData.length
                }
                redrawPoints() {
                    let h, x, X, L, k = this,
                        r = k.chart;
                    this.drawEmpty(), k.group && !r.styledMode && k.group.shadow(k.options.shadow), k.points.forEach(function(p) {
                        let n = {};
                        x = p.graphic, !p.isNull && x ? (L = p.shapeArgs, h = p.getTranslate(), r.styledMode || (X = k.pointAttribs(p, p.selected && "select")), p.delayedRendering ? (x.setRadialReference(k.center).attr(L).attr(h), r.styledMode || x.attr(X).attr({
                            "stroke-linejoin": "round"
                        }), p.delayedRendering = !1) : (x.setRadialReference(k.center), r.styledMode || v(!0, n, X), v(!0, n, L, h), x.animate(n)), x.attr({
                            visibility: p.visible ? "inherit" : "hidden"
                        }), x.addClass(p.getClassName(), !0)) : x && (p.graphic = x.destroy())
                    })
                }
                sortByAngle(h, x) {
                    h.sort(function(X, L) {
                        return X.angle !== void 0 && (L.angle - X.angle) * x
                    })
                }
                translate(h) {
                    T(this, "translate"), this.generatePoints();
                    let x = this.options,
                        X = x.slicedOffset,
                        L = H(x.startAngle, x.endAngle),
                        k = this.startAngleRad = L.start,
                        r = (this.endAngleRad = L.end) - k,
                        p = this.points,
                        n = x.ignoreHiddenPoint,
                        t = p.length,
                        e, o, i, l, a, b, O, _ = 0;
                    for (h || (this.center = h = this.getCenter()), b = 0; b < t; b++) {
                        O = p[b], e = k + _ * r, O.isValid() && (!n || O.visible) && (_ += O.percentage / 100), o = k + _ * r;
                        let y = {
                            x: h[0],
                            y: h[1],
                            r: h[2] / 2,
                            innerR: h[3] / 2,
                            start: Math.round(1e3 * e) / 1e3,
                            end: Math.round(1e3 * o) / 1e3
                        };
                        O.shapeType = "arc", O.shapeArgs = y, (i = (o + e) / 2) > 1.5 * Math.PI ? i -= 2 * Math.PI : i < -Math.PI / 2 && (i += 2 * Math.PI), O.slicedTranslation = {
                            translateX: Math.round(Math.cos(i) * X),
                            translateY: Math.round(Math.sin(i) * X)
                        }, l = Math.cos(i) * h[2] / 2, a = Math.sin(i) * h[2] / 2, O.tooltipPos = [h[0] + .7 * l, h[1] + .7 * a], O.half = i < -Math.PI / 2 || i > Math.PI / 2 ? 1 : 0, O.angle = i
                    }
                    T(this, "afterTranslate")
                }
                updateTotals() {
                    let h = this.points,
                        x = h.length,
                        X = this.options.ignoreHiddenPoint,
                        L, k, r = 0;
                    for (L = 0; L < x; L++)(k = h[L]).isValid() && (!X || k.visible) && (r += k.y);
                    for (L = 0, this.total = r; L < x; L++)(k = h[L]).percentage = r > 0 && (k.visible || !X) ? k.y / r * 100 : 0, k.total = r
                }
            }
            return u.defaultOptions = v(J.defaultOptions, st), D(u.prototype, {
                axisTypes: [],
                directTouch: !0,
                drawGraph: void 0,
                drawTracker: Z.prototype.drawTracker,
                getCenter: V.getCenter,
                getSymbol: w,
                invertible: !1,
                isCartesian: !1,
                noSharedTooltip: !0,
                pointAttribs: Z.prototype.pointAttribs,
                pointClass: ht,
                requireSorting: !1,
                searchPoint: w,
                trackerGroups: ["group", "dataLabelsGroup"]
            }), et.registerSeriesType("pie", u), u
        }), ct(P, "Series/Pie/PieDataLabel.js", [P["Core/Series/DataLabel.js"], P["Core/Globals.js"], P["Core/Renderer/RendererUtilities.js"], P["Core/Series/SeriesRegistry.js"], P["Core/Utilities.js"]], function(V, Z, ot, ht, st) {
            var J;
            let {
                composed: et,
                noop: Y
            } = Z, {
                distribute: z
            } = ot, {
                series: H
            } = ht, {
                arrayMax: w,
                clamp: I,
                defined: D,
                pick: T,
                pushUnique: v,
                relativeLength: M
            } = st;
            return function(u) {
                let m = {
                    radialDistributionY: function(k, r) {
                        var p;
                        return (((p = r.dataLabelPosition) == null ? void 0 : p.top) || 0) + k.distributeBox.pos
                    },
                    radialDistributionX: function(k, r, p, n, t) {
                        let e = t.dataLabelPosition;
                        return k.getX(p < ((e == null ? void 0 : e.top) || 0) + 2 || p > ((e == null ? void 0 : e.bottom) || 0) - 2 ? n : p, r.half, r, t)
                    },
                    justify: function(k, r, p, n) {
                        var t;
                        return n[0] + (k.half ? -1 : 1) * (p + (((t = r.dataLabelPosition) == null ? void 0 : t.distance) || 0))
                    },
                    alignToPlotEdges: function(k, r, p, n) {
                        let t = k.getBBox().width;
                        return r ? t + n : p - t - n
                    },
                    alignToConnectors: function(k, r, p, n) {
                        let t = 0,
                            e;
                        return k.forEach(function(o) {
                            (e = o.dataLabel.getBBox().width) > t && (t = e)
                        }), r ? t + n : p - t - n
                    }
                };

                function h(k, r) {
                    let {
                        center: p,
                        options: n
                    } = this, t = p[2] / 2, e = k.angle || 0, o = Math.cos(e), i = Math.sin(e), l = p[0] + o * t, a = p[1] + i * t, b = Math.min((n.slicedOffset || 0) + (n.borderWidth || 0), r / 5);
                    return {
                        natural: {
                            x: l + o * r,
                            y: a + i * r
                        },
                        computed: {},
                        alignment: r < 0 ? "center" : k.half ? "right" : "left",
                        connectorPosition: {
                            breakAt: {
                                x: l + o * b,
                                y: a + i * b
                            },
                            touchingSliceAt: {
                                x: l,
                                y: a
                            }
                        },
                        distance: r
                    }
                }

                function x() {
                    var it;
                    let k = this,
                        r = k.points,
                        p = k.chart,
                        n = p.plotWidth,
                        t = p.plotHeight,
                        e = p.plotLeft,
                        o = Math.round(p.chartWidth / 3),
                        i = k.center,
                        l = i[2] / 2,
                        a = i[1],
                        b = [
                            [],
                            []
                        ],
                        O = [0, 0, 0, 0],
                        _ = k.dataLabelPositioners,
                        y, j, G, W = 0;
                    k.visible && ((it = k.hasDataLabels) != null && it.call(k)) && (r.forEach(d => {
                        (d.dataLabels || []).forEach(c => {
                            c.shortened && (c.attr({
                                width: "auto"
                            }).css({
                                width: "auto",
                                textOverflow: "clip"
                            }), c.shortened = !1)
                        })
                    }), H.prototype.drawDataLabels.apply(k), r.forEach(d => {
                        (d.dataLabels || []).forEach((c, S) => {
                            var f;
                            let B = i[2] / 2,
                                s = c.options,
                                g = M((s == null ? void 0 : s.distance) || 0, B);
                            S === 0 && b[d.half].push(d), !D((f = s == null ? void 0 : s.style) == null ? void 0 : f.width) && c.getBBox().width > o && (c.css({
                                width: Math.round(.7 * o) + "px"
                            }), c.shortened = !0), c.dataLabelPosition = this.getDataLabelPosition(d, g), W = Math.max(W, g)
                        })
                    }), b.forEach((d, c) => {
                        let S = d.length,
                            B = [],
                            s, g, f = 0,
                            C;
                        S && (k.sortByAngle(d, c - .5), W > 0 && (s = Math.max(0, a - l - W), g = Math.min(a + l + W, p.plotHeight), d.forEach(A => {
                            (A.dataLabels || []).forEach(N => {
                                var q;
                                let U = N.dataLabelPosition;
                                U && U.distance > 0 && (U.top = Math.max(0, a - l - U.distance), U.bottom = Math.min(a + l + U.distance, p.plotHeight), f = N.getBBox().height || 21, A.distributeBox = {
                                    target: (((q = N.dataLabelPosition) == null ? void 0 : q.natural.y) || 0) - U.top + f / 2,
                                    size: f,
                                    rank: A.y
                                }, B.push(A.distributeBox))
                            })
                        }), z(B, C = g + f - s, C / 5)), d.forEach(A => {
                            (A.dataLabels || []).forEach(N => {
                                let U = N.options || {},
                                    q = A.distributeBox,
                                    K = N.dataLabelPosition,
                                    at = (K == null ? void 0 : K.natural.y) || 0,
                                    lt = U.connectorPadding || 0,
                                    R = 0,
                                    E = at,
                                    F = "inherit";
                                if (K) {
                                    if (B && D(q) && K.distance > 0 && (q.pos === void 0 ? F = "hidden" : (G = q.size, E = _.radialDistributionY(A, N))), U.justify) R = _.justify(A, N, l, i);
                                    else switch (U.alignTo) {
                                        case "connectors":
                                            R = _.alignToConnectors(d, c, n, e);
                                            break;
                                        case "plotEdges":
                                            R = _.alignToPlotEdges(N, c, n, e);
                                            break;
                                        default:
                                            R = _.radialDistributionX(k, A, E, at, N)
                                    }
                                    if (K.attribs = {
                                            visibility: F,
                                            align: K.alignment
                                        }, K.posAttribs = {
                                            x: R + (U.x || 0) + ({
                                                left: lt,
                                                right: -lt
                                            }[K.alignment] || 0),
                                            y: E + (U.y || 0) - N.getBBox().height / 2
                                        }, K.computed.x = R, K.computed.y = E, T(U.crop, !0)) {
                                        let $;
                                        R - (j = N.getBBox().width) < lt && c === 1 ? ($ = Math.round(j - R + lt), O[3] = Math.max($, O[3])) : R + j > n - lt && c === 0 && ($ = Math.round(R + j - n + lt), O[1] = Math.max($, O[1])), E - G / 2 < 0 ? O[0] = Math.max(Math.round(-E + G / 2), O[0]) : E + G / 2 > t && (O[2] = Math.max(Math.round(E + G / 2 - t), O[2])), K.sideOverflow = $
                                    }
                                }
                            })
                        }))
                    }), (w(O) === 0 || this.verifyDataLabelOverflow(O)) && (this.placeDataLabels(), this.points.forEach(d => {
                        (d.dataLabels || []).forEach(c => {
                            var g;
                            let {
                                connectorColor: S,
                                connectorWidth: B = 1
                            } = c.options || {}, s = c.dataLabelPosition;
                            if (B) {
                                let f;
                                y = c.connector, s && s.distance > 0 ? (f = !y, y || (c.connector = y = p.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + d.colorIndex + (d.className ? " " + d.className : "")).add(k.dataLabelsGroup)), p.styledMode || y.attr({
                                    "stroke-width": B,
                                    stroke: S || d.color || "#666666"
                                }), y[f ? "attr" : "animate"]({
                                    d: d.getConnectorPath(c)
                                }), y.attr({
                                    visibility: (g = s.attribs) == null ? void 0 : g.visibility
                                })) : y && (c.connector = y.destroy())
                            }
                        })
                    })))
                }

                function X() {
                    this.points.forEach(k => {
                        (k.dataLabels || []).forEach(r => {
                            var n;
                            let p = r.dataLabelPosition;
                            p ? (p.sideOverflow && (r.css({
                                width: Math.max(r.getBBox().width - p.sideOverflow, 0) + "px",
                                textOverflow: (((n = r.options) == null ? void 0 : n.style) || {}).textOverflow || "ellipsis"
                            }), r.shortened = !0), r.attr(p.attribs), r[r.moved ? "animate" : "attr"](p.posAttribs), r.moved = !0) : r && r.attr({
                                y: -9999
                            })
                        }), delete k.distributeBox
                    }, this)
                }

                function L(k) {
                    let r = this.center,
                        p = this.options,
                        n = p.center,
                        t = p.minSize || 80,
                        e = t,
                        o = p.size !== null;
                    return !o && (n[0] !== null ? e = Math.max(r[2] - Math.max(k[1], k[3]), t) : (e = Math.max(r[2] - k[1] - k[3], t), r[0] += (k[3] - k[1]) / 2), n[1] !== null ? e = I(e, t, r[2] - Math.max(k[0], k[2])) : (e = I(e, t, r[2] - k[0] - k[2]), r[1] += (k[0] - k[2]) / 2), e < r[2] ? (r[2] = e, r[3] = Math.min(p.thickness ? Math.max(0, e - 2 * p.thickness) : Math.max(0, M(p.innerSize || 0, e)), e), this.translate(r), this.drawDataLabels && this.drawDataLabels()) : o = !0), o
                }
                u.compose = function(k) {
                    if (V.compose(H), v(et, "PieDataLabel")) {
                        let r = k.prototype;
                        r.dataLabelPositioners = m, r.alignDataLabel = Y, r.drawDataLabels = x, r.getDataLabelPosition = h, r.placeDataLabels = X, r.verifyDataLabelOverflow = L
                    }
                }
            }(J || (J = {})), J
        }), ct(P, "Extensions/OverlappingDataLabels.js", [P["Core/Utilities.js"]], function(V) {
            let {
                addEvent: Z,
                fireEvent: ot,
                objectEach: ht,
                pick: st
            } = V;

            function J(z) {
                let H = z.length,
                    w = (m, h) => !(h.x >= m.x + m.width || h.x + h.width <= m.x || h.y >= m.y + m.height || h.y + h.height <= m.y),
                    I, D, T, v, M, u = !1;
                for (let m = 0; m < H; m++)(I = z[m]) && (I.oldOpacity = I.opacity, I.newOpacity = 1, I.absoluteBox = function(h) {
                    var x, X;
                    if (h && (!h.alignAttr || h.placed)) {
                        let L = h.box ? 0 : h.padding || 0,
                            k = h.alignAttr || {
                                x: h.attr("x"),
                                y: h.attr("y")
                            },
                            r = h.getBBox();
                        return h.width = r.width, h.height = r.height, {
                            x: k.x + (((x = h.parentGroup) == null ? void 0 : x.translateX) || 0) + L,
                            y: k.y + (((X = h.parentGroup) == null ? void 0 : X.translateY) || 0) + L,
                            width: (h.width || 0) - 2 * L,
                            height: (h.height || 0) - 2 * L
                        }
                    }
                }(I));
                z.sort((m, h) => (h.labelrank || 0) - (m.labelrank || 0));
                for (let m = 0; m < H; ++m) {
                    v = (D = z[m]) && D.absoluteBox;
                    for (let h = m + 1; h < H; ++h) M = (T = z[h]) && T.absoluteBox, v && M && D !== T && D.newOpacity !== 0 && T.newOpacity !== 0 && D.visibility !== "hidden" && T.visibility !== "hidden" && w(v, M) && ((D.labelrank < T.labelrank ? D : T).newOpacity = 0)
                }
                for (let m of z) et(m, this) && (u = !0);
                u && ot(this, "afterHideAllOverlappingLabels")
            }

            function et(z, H) {
                let w, I, D = !1;
                return z && (I = z.newOpacity, z.oldOpacity !== I && (z.hasClass("highcharts-data-label") ? (z[I ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), w = function() {
                    H.styledMode || z.css({
                        pointerEvents: I ? "auto" : "none"
                    })
                }, D = !0, z[z.isOld ? "animate" : "attr"]({
                    opacity: I
                }, void 0, w), ot(H, "afterHideOverlappingLabel")) : z.attr({
                    opacity: I
                })), z.isOld = !0), D
            }

            function Y() {
                var w;
                let z = this,
                    H = [];
                for (let I of z.labelCollectors || []) H = H.concat(I());
                for (let I of z.yAxis || []) I.stacking && I.options.stackLabels && !I.options.stackLabels.allowOverlap && ht(I.stacking.stacks, D => {
                    ht(D, T => {
                        T.label && H.push(T.label)
                    })
                });
                for (let I of z.series || [])
                    if (I.visible && ((w = I.hasDataLabels) != null && w.call(I))) {
                        let D = T => {
                            for (let v of T) v.visible && (v.dataLabels || []).forEach(M => {
                                var m;
                                let u = M.options || {};
                                M.labelrank = st(u.labelrank, v.labelrank, (m = v.shapeArgs) == null ? void 0 : m.height), u.allowOverlap ? ? Number(u.distance) > 0 ? (M.oldOpacity = M.opacity, M.newOpacity = 1, et(M, z)) : H.push(M)
                            })
                        };
                        D(I.nodes || []), D(I.points)
                    }
                this.hideOverlappingLabels(H)
            }
            return {
                compose: function(z) {
                    let H = z.prototype;
                    H.hideOverlappingLabels || (H.hideOverlappingLabels = J, Z(z, "render", Y))
                }
            }
        }), ct(P, "Extensions/BorderRadius.js", [P["Core/Defaults.js"], P["Core/Globals.js"], P["Core/Utilities.js"]], function(V, Z, ot) {
            let {
                defaultOptions: ht
            } = V, {
                noop: st
            } = Z, {
                addEvent: J,
                extend: et,
                isObject: Y,
                merge: z,
                relativeLength: H
            } = ot, w = {
                radius: 0,
                scope: "stack",
                where: void 0
            }, I = st, D = st;

            function T(h, x, X, L, k = {}) {
                let r = I(h, x, X, L, k),
                    {
                        innerR: p = 0,
                        r: n = X,
                        start: t = 0,
                        end: e = 0
                    } = k;
                if (k.open || !k.borderRadius) return r;
                let o = e - t,
                    i = Math.sin(o / 2),
                    l = Math.max(Math.min(H(k.borderRadius || 0, n - p), (n - p) / 2, n * i / (1 + i)), 0),
                    a = Math.min(l, o / Math.PI * 2 * p),
                    b = r.length - 1;
                for (; b--;)(function(O, _, y) {
                    let j, G, W, it = O[_],
                        d = O[_ + 1];
                    if (d[0] === "Z" && (d = O[0]), (it[0] === "M" || it[0] === "L") && d[0] === "A" ? (j = it, G = d, W = !0) : it[0] === "A" && (d[0] === "M" || d[0] === "L") && (j = d, G = it), j && G && G.params) {
                        let c = G[1],
                            S = G[5],
                            B = G.params,
                            {
                                start: s,
                                end: g,
                                cx: f,
                                cy: C
                            } = B,
                            A = S ? c - y : c + y,
                            N = A ? Math.asin(y / A) : 0,
                            U = S ? N : -N,
                            q = Math.cos(N) * A;
                        W ? (B.start = s + U, j[1] = f + q * Math.cos(s), j[2] = C + q * Math.sin(s), O.splice(_ + 1, 0, ["A", y, y, 0, 0, 1, f + c * Math.cos(B.start), C + c * Math.sin(B.start)])) : (B.end = g - U, G[6] = f + c * Math.cos(B.end), G[7] = C + c * Math.sin(B.end), O.splice(_ + 1, 0, ["A", y, y, 0, 0, 1, f + q * Math.cos(g), C + q * Math.sin(g)])), G[4] = Math.abs(B.end - B.start) < Math.PI ? 0 : 1
                    }
                })(r, b, b > 1 ? a : l);
                return r
            }

            function v() {
                var h, x;
                if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
                    let {
                        options: X,
                        yAxis: L
                    } = this, k = X.stacking === "percent", r = (x = (h = ht.plotOptions) == null ? void 0 : h[this.type]) == null ? void 0 : x.borderRadius, p = M(X.borderRadius, Y(r) ? r : {}), n = L.options.reversed;
                    for (let t of this.points) {
                        let {
                            shapeArgs: e
                        } = t;
                        if (t.shapeType === "roundedRect" && e) {
                            let {
                                width: o = 0,
                                height: i = 0,
                                y: l = 0
                            } = e, a = l, b = i;
                            if (p.scope === "stack" && t.stackTotal) {
                                let j = L.translate(k ? 100 : t.stackTotal, !1, !0, !1, !0),
                                    G = L.translate(X.threshold || 0, !1, !0, !1, !0),
                                    W = this.crispCol(0, Math.min(j, G), 0, Math.abs(j - G));
                                a = W.y, b = W.height
                            }
                            let O = (t.negative ? -1 : 1) * (n ? -1 : 1) == -1,
                                _ = p.where;
                            !_ && this.is("waterfall") && Math.abs((t.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (_ = "all"), _ || (_ = "end");
                            let y = Math.min(H(p.radius, o), o / 2, _ === "all" ? i / 2 : 1 / 0) || 0;
                            _ === "end" && (O && (a -= y), b += y), et(e, {
                                brBoxHeight: b,
                                brBoxY: a,
                                r: y
                            })
                        }
                    }
                }
            }

            function M(h, x) {
                return Y(h) || (h = {
                    radius: h || 0
                }), z(w, x, h)
            }

            function u() {
                let h = M(this.options.borderRadius);
                for (let x of this.points) {
                    let X = x.shapeArgs;
                    X && (X.borderRadius = H(h.radius, (X.r || 0) - (X.innerR || 0)))
                }
            }

            function m(h, x, X, L, k = {}) {
                let r = D(h, x, X, L, k),
                    {
                        r: p = 0,
                        brBoxHeight: n = L,
                        brBoxY: t = x
                    } = k,
                    e = x - t,
                    o = t + n - (x + L),
                    i = e - p > -.1 ? 0 : p,
                    l = o - p > -.1 ? 0 : p,
                    a = Math.max(i && e, 0),
                    b = Math.max(l && o, 0),
                    O = [h + i, x],
                    _ = [h + X - i, x],
                    y = [h + X, x + i],
                    j = [h + X, x + L - l],
                    G = [h + X - l, x + L],
                    W = [h + l, x + L],
                    it = [h, x + L - l],
                    d = [h, x + i],
                    c = (S, B) => Math.sqrt(Math.pow(S, 2) - Math.pow(B, 2));
                if (a) {
                    let S = c(i, i - a);
                    O[0] -= S, _[0] += S, y[1] = d[1] = x + i - a
                }
                if (L < i - a) {
                    let S = c(i, i - a - L);
                    y[0] = j[0] = h + X - i + S, G[0] = Math.min(y[0], G[0]), W[0] = Math.max(j[0], W[0]), it[0] = d[0] = h + i - S, y[1] = d[1] = x + L
                }
                if (b) {
                    let S = c(l, l - b);
                    G[0] += S, W[0] -= S, j[1] = it[1] = x + L - l + b
                }
                if (L < l - b) {
                    let S = c(l, l - b - L);
                    y[0] = j[0] = h + X - l + S, _[0] = Math.min(y[0], _[0]), O[0] = Math.max(j[0], O[0]), it[0] = d[0] = h + l - S, j[1] = it[1] = x
                }
                return r.length = 0, r.push(["M", ...O], ["L", ..._], ["A", i, i, 0, 0, 1, ...y], ["L", ...j], ["A", l, l, 0, 0, 1, ...G], ["L", ...W], ["A", l, l, 0, 0, 1, ...it], ["L", ...d], ["A", i, i, 0, 0, 1, ...O], ["Z"]), r
            }
            return {
                compose: function(h, x, X) {
                    let L = h.types.pie;
                    if (!x.symbolCustomAttribs.includes("borderRadius")) {
                        let k = X.prototype.symbols;
                        J(h, "afterColumnTranslate", v, {
                            order: 9
                        }), J(L, "afterTranslate", u), x.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY"), I = k.arc, D = k.roundedRect, k.arc = T, k.roundedRect = m
                    }
                },
                optionsToObject: M
            }
        }), ct(P, "Core/Responsive.js", [P["Core/Utilities.js"]], function(V) {
            var Z;
            let {
                diffObjects: ot,
                extend: ht,
                find: st,
                merge: J,
                pick: et,
                uniqueKey: Y
            } = V;
            return function(z) {
                function H(I, D) {
                    let T = I.condition;
                    (T.callback || function() {
                        return this.chartWidth <= et(T.maxWidth, Number.MAX_VALUE) && this.chartHeight <= et(T.maxHeight, Number.MAX_VALUE) && this.chartWidth >= et(T.minWidth, 0) && this.chartHeight >= et(T.minHeight, 0)
                    }).call(this) && D.push(I._id)
                }

                function w(I, D) {
                    let T = this.options.responsive,
                        v = this.currentResponsive,
                        M = [],
                        u;
                    !D && T && T.rules && T.rules.forEach(x => {
                        x._id === void 0 && (x._id = Y()), this.matchResponsiveRule(x, M)
                    }, this);
                    let m = J(...M.map(x => st((T || {}).rules || [], X => X._id === x)).map(x => x && x.chartOptions));
                    m.isResponsiveOptions = !0, M = M.toString() || void 0;
                    let h = v && v.ruleIds;
                    M !== h && (v && this.update(v.undoOptions, I, !0), M ? ((u = ot(m, this.options, !0, this.collectionsWithUpdate)).isResponsiveOptions = !0, this.currentResponsive = {
                        ruleIds: M,
                        mergedOptions: m,
                        undoOptions: u
                    }, this.update(m, I, !0)) : this.currentResponsive = void 0)
                }
                z.compose = function(I) {
                    let D = I.prototype;
                    return D.matchResponsiveRule || ht(D, {
                        matchResponsiveRule: H,
                        setResponsive: w
                    }), I
                }
            }(Z || (Z = {})), Z
        }), ct(P, "masters/highcharts.src.js", [P["Core/Globals.js"], P["Core/Utilities.js"], P["Core/Defaults.js"], P["Core/Animation/Fx.js"], P["Core/Animation/AnimationUtilities.js"], P["Core/Renderer/HTML/AST.js"], P["Core/Templating.js"], P["Core/Renderer/RendererRegistry.js"], P["Core/Renderer/RendererUtilities.js"], P["Core/Renderer/SVG/SVGElement.js"], P["Core/Renderer/SVG/SVGRenderer.js"], P["Core/Renderer/HTML/HTMLElement.js"], P["Core/Axis/Axis.js"], P["Core/Axis/DateTimeAxis.js"], P["Core/Axis/LogarithmicAxis.js"], P["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"], P["Core/Axis/Tick.js"], P["Core/Tooltip.js"], P["Core/Series/Point.js"], P["Core/Pointer.js"], P["Core/Legend/Legend.js"], P["Core/Legend/LegendSymbol.js"], P["Core/Chart/Chart.js"], P["Extensions/ScrollablePlotArea.js"], P["Core/Axis/Stacking/StackingAxis.js"], P["Core/Axis/Stacking/StackItem.js"], P["Core/Series/Series.js"], P["Core/Series/SeriesRegistry.js"], P["Series/Column/ColumnDataLabel.js"], P["Series/Pie/PieDataLabel.js"], P["Core/Series/DataLabel.js"], P["Extensions/OverlappingDataLabels.js"], P["Extensions/BorderRadius.js"], P["Core/Responsive.js"], P["Core/Color/Color.js"], P["Core/Time.js"]], function(V, Z, ot, ht, st, J, et, Y, z, H, w, I, D, T, v, M, u, m, h, x, X, L, k, r, p, n, t, e, o, i, l, a, b, O, _, y) {
            return V.AST = J, V.Axis = D, V.Chart = k, V.Color = _, V.DataLabel = l, V.Fx = ht, V.HTMLElement = I, V.Legend = X, V.LegendSymbol = L, V.OverlappingDataLabels = V.OverlappingDataLabels || a, V.PlotLineOrBand = M, V.Point = h, V.Pointer = x, V.RendererRegistry = Y, V.Series = t, V.SeriesRegistry = e, V.StackItem = n, V.SVGElement = H, V.SVGRenderer = w, V.Templating = et, V.Tick = u, V.Time = y, V.Tooltip = m, V.animate = st.animate, V.animObject = st.animObject, V.chart = k.chart, V.color = _.parse, V.dateFormat = et.dateFormat, V.defaultOptions = ot.defaultOptions, V.distribute = z.distribute, V.format = et.format, V.getDeferredAnimation = st.getDeferredAnimation, V.getOptions = ot.getOptions, V.numberFormat = et.numberFormat, V.seriesType = e.seriesType, V.setAnimation = st.setAnimation, V.setOptions = ot.setOptions, V.stop = st.stop, V.time = ot.defaultTime, V.timers = ht.timers, b.compose(V.Series, V.SVGElement, V.SVGRenderer), o.compose(V.Series.types.column), l.compose(V.Series), T.compose(V.Axis), I.compose(V.SVGRenderer), X.compose(V.Chart), v.compose(V.Axis), a.compose(V.Chart), i.compose(V.Series.types.pie), M.compose(V.Axis), x.compose(V.Chart), O.compose(V.Chart), r.compose(V.Axis, V.Chart, V.Series), p.compose(V.Axis, V.Chart, V.Series), m.compose(V.Pointer), Z.extend(V, Z), V
        }), P["masters/highcharts.src.js"]._modules = P, P["masters/highcharts.src.js"]
    })
})(Te);
var Xe = Te.exports;
const ke = Ae(Xe);
var Pe = {
    exports: {}
};
(function(vt) {
    (function(gt) {
        vt.exports ? vt.exports = gt : gt(Highcharts)
    })(function(gt) {
        (function(P) {
            var ct = P.defaultOptions,
                V = P.doc,
                Z = P.Chart,
                ot = P.addEvent,
                ht = P.removeEvent,
                st = P.fireEvent,
                J = P.createElement,
                et = P.discardElement,
                Y = P.css,
                z = P.merge,
                H = P.pick,
                w = P.each,
                I = P.objectEach,
                D = P.extend,
                T = P.isTouchDevice,
                v = P.win;
            v.navigator.userAgent;
            var M = P.Renderer.prototype.symbols;
            D(ct.lang, {
                printChart: "Print chart",
                downloadPNG: "Download PNG image",
                downloadJPEG: "Download JPEG image",
                downloadPDF: "Download PDF document",
                downloadSVG: "Download SVG vector image",
                contextButtonTitle: "Chart context menu"
            }), ct.navigation = {
                buttonOptions: {
                    theme: {},
                    symbolSize: 14,
                    symbolX: 12.5,
                    symbolY: 10.5,
                    align: "right",
                    buttonSpacing: 3,
                    height: 22,
                    verticalAlign: "top",
                    width: 24
                }
            }, z(!0, ct.navigation, {
                menuStyle: {
                    border: "1px solid #999999",
                    background: "#ffffff",
                    padding: "5px 0"
                },
                menuItemStyle: {
                    padding: "0.5em 1em",
                    background: "none",
                    color: "#333333",
                    fontSize: T ? "14px" : "11px",
                    transition: "background 250ms, color 250ms"
                },
                menuItemHoverStyle: {
                    background: "#335cad",
                    color: "#ffffff"
                },
                buttonOptions: {
                    symbolFill: "#666666",
                    symbolStroke: "#666666",
                    symbolStrokeWidth: 3,
                    theme: {
                        fill: "#ffffff",
                        stroke: "none",
                        padding: 5
                    }
                }
            }), ct.exporting = {
                type: "image/png",
                url: "https://export.highcharts.com/",
                printMaxWidth: 780,
                scale: 2,
                buttons: {
                    contextButton: {
                        className: "highcharts-contextbutton",
                        menuClassName: "highcharts-contextmenu",
                        symbol: "menu",
                        _titleKey: "contextButtonTitle",
                        menuItems: "printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")
                    }
                },
                menuItemDefinitions: {
                    printChart: {
                        textKey: "printChart",
                        onclick: function() {
                            this.print()
                        }
                    },
                    separator: {
                        separator: !0
                    },
                    downloadPNG: {
                        textKey: "downloadPNG",
                        onclick: function() {
                            this.exportChart()
                        }
                    },
                    downloadJPEG: {
                        textKey: "downloadJPEG",
                        onclick: function() {
                            this.exportChart({
                                type: "image/jpeg"
                            })
                        }
                    },
                    downloadPDF: {
                        textKey: "downloadPDF",
                        onclick: function() {
                            this.exportChart({
                                type: "application/pdf"
                            })
                        }
                    },
                    downloadSVG: {
                        textKey: "downloadSVG",
                        onclick: function() {
                            this.exportChart({
                                type: "image/svg+xml"
                            })
                        }
                    }
                }
            }, P.post = function(u, m, h) {
                var x = J("form", z({
                    method: "post",
                    action: u,
                    enctype: "multipart/form-data"
                }, h), {
                    display: "none"
                }, V.body);
                I(m, function(X, L) {
                    J("input", {
                        type: "hidden",
                        name: L,
                        value: X
                    }, null, x)
                }), x.submit(), et(x)
            }, D(Z.prototype, {
                sanitizeSVG: function(u, m) {
                    if (m && m.exporting && m.exporting.allowHTML) {
                        var h = u.match(/<\/svg>(.*?$)/);
                        h && h[1] && (h = '<foreignObject x="0" y="0" width="' + m.chart.width + '" height="' + m.chart.height + '"><body xmlns="http://www.w3.org/1999/xhtml">' + h[1] + "</body></foreignObject>", u = u.replace("</svg>", h + "</svg>"))
                    }
                    return u = u.replace(/zIndex="[^"]+"/g, "").replace(/isShadow="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g, "url($2)").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g, " xlink:href=").replace(/\n/, " ").replace(/<\/svg>.*?$/, "</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g, " ").replace(/&shy;/g, "­"), this.ieSanitizeSVG && (u = this.ieSanitizeSVG(u)), u
                },
                getChartHTML: function() {
                    return this.container.innerHTML
                },
                getSVG: function(u) {
                    var m, h, x, X, L, k = z(this.options, u);
                    return h = J("div", null, {
                        position: "absolute",
                        top: "-9999em",
                        width: this.chartWidth + "px",
                        height: this.chartHeight + "px"
                    }, V.body), x = this.renderTo.style.width, L = this.renderTo.style.height, x = k.exporting.sourceWidth || k.chart.width || /px$/.test(x) && parseInt(x, 10) || 600, L = k.exporting.sourceHeight || k.chart.height || /px$/.test(L) && parseInt(L, 10) || 400, D(k.chart, {
                        animation: !1,
                        renderTo: h,
                        forExport: !0,
                        renderer: "SVGRenderer",
                        width: x,
                        height: L
                    }), k.exporting.enabled = !1, delete k.data, k.series = [], w(this.series, function(r) {
                        X = z(r.userOptions, {
                            animation: !1,
                            enableMouseTracking: !1,
                            showCheckbox: !1,
                            visible: r.visible
                        }), X.isInternal || k.series.push(X)
                    }), w(this.axes, function(r) {
                        r.userOptions.internalKey || (r.userOptions.internalKey = P.uniqueKey())
                    }), m = new P.Chart(k, this.callback), u && w(["xAxis", "yAxis", "series"], function(r) {
                        var p = {};
                        u[r] && (p[r] = u[r], m.update(p))
                    }), w(this.axes, function(r) {
                        var p = P.find(m.axes, function(e) {
                                return e.options.internalKey === r.userOptions.internalKey
                            }),
                            t = r.getExtremes(),
                            n = t.userMin,
                            t = t.userMax;
                        !p || n === void 0 && t === void 0 || p.setExtremes(n, t, !0, !1)
                    }), x = m.getChartHTML(), x = this.sanitizeSVG(x, k), k = null, m.destroy(), et(h), x
                },
                getSVGForExport: function(u, m) {
                    var h = this.options.exporting;
                    return this.getSVG(z({
                        chart: {
                            borderRadius: 0
                        }
                    }, h.chartOptions, m, {
                        exporting: {
                            sourceWidth: u && u.sourceWidth || h.sourceWidth,
                            sourceHeight: u && u.sourceHeight || h.sourceHeight
                        }
                    }))
                },
                exportChart: function(u, m) {
                    m = this.getSVGForExport(u, m), u = z(this.options.exporting, u), P.post(u.url, {
                        filename: u.filename || "chart",
                        type: u.type,
                        width: u.width || 0,
                        scale: u.scale,
                        svg: m
                    }, u.formAttributes)
                },
                print: function() {
                    var u = this,
                        m = u.container,
                        h = [],
                        x = m.parentNode,
                        X = V.body,
                        L = X.childNodes,
                        k = u.options.exporting.printMaxWidth,
                        r, p;
                    u.isPrinting || (u.isPrinting = !0, u.pointer.reset(null, 0), st(u, "beforePrint"), (p = k && u.chartWidth > k) && (r = [u.options.chart.width, void 0, !1], u.setSize(k, void 0, !1)), w(L, function(n, t) {
                        n.nodeType === 1 && (h[t] = n.style.display, n.style.display = "none")
                    }), X.appendChild(m), v.focus(), v.print(), setTimeout(function() {
                        x.appendChild(m), w(L, function(n, t) {
                            n.nodeType === 1 && (n.style.display = h[t])
                        }), u.isPrinting = !1, p && u.setSize.apply(u, r), st(u, "afterPrint")
                    }, 1e3))
                },
                contextMenu: function(u, m, h, x, X, L, k) {
                    var r = this,
                        p = r.options.navigation,
                        n = r.chartWidth,
                        t = r.chartHeight,
                        e = "cache-" + u,
                        o = r[e],
                        i = Math.max(X, L),
                        l, a;
                    o || (r[e] = o = J("div", {
                        className: u
                    }, {
                        position: "absolute",
                        zIndex: 1e3,
                        padding: i + "px"
                    }, r.container), l = J("div", {
                        className: "highcharts-menu"
                    }, null, o), Y(l, D({
                        MozBoxShadow: "3px 3px 10px #888",
                        WebkitBoxShadow: "3px 3px 10px #888",
                        boxShadow: "3px 3px 10px #888"
                    }, p.menuStyle)), a = function() {
                        Y(o, {
                            display: "none"
                        }), k && k.setState(0), r.openMenu = !1
                    }, r.exportEvents.push(ot(o, "mouseleave", function() {
                        o.hideTimer = setTimeout(a, 500)
                    }), ot(o, "mouseenter", function() {
                        clearTimeout(o.hideTimer)
                    }), ot(V, "mouseup", function(b) {
                        r.pointer.inClass(b.target, u) || a()
                    })), w(m, function(b) {
                        if (typeof b == "string" && (b = r.options.exporting.menuItemDefinitions[b]), P.isObject(b, !0)) {
                            var O;
                            b.separator ? O = J("hr", null, null, l) : (O = J("div", {
                                className: "highcharts-menu-item",
                                onclick: function(_) {
                                    _ && _.stopPropagation(), a(), b.onclick && b.onclick.apply(r, arguments)
                                },
                                innerHTML: b.text || r.options.lang[b.textKey]
                            }, null, l), O.onmouseover = function() {
                                Y(this, p.menuItemHoverStyle)
                            }, O.onmouseout = function() {
                                Y(this, p.menuItemStyle)
                            }, Y(O, D({
                                cursor: "pointer"
                            }, p.menuItemStyle))), r.exportDivElements.push(O)
                        }
                    }), r.exportDivElements.push(l, o), r.exportMenuWidth = o.offsetWidth, r.exportMenuHeight = o.offsetHeight), m = {
                        display: "block"
                    }, h + r.exportMenuWidth > n ? m.right = n - h - X - i + "px" : m.left = h - i + "px", x + L + r.exportMenuHeight > t && k.alignOptions.verticalAlign !== "top" ? m.bottom = t - x - i + "px" : m.top = x + L - i + "px", Y(o, m), r.openMenu = !0
                },
                addButton: function(u) {
                    var m = this,
                        h = m.renderer,
                        x = z(m.options.navigation.buttonOptions, u),
                        X = x.onclick,
                        L = x.menuItems,
                        k, r, p = x.symbolSize || 12;
                    if (m.btnCount || (m.btnCount = 0), m.exportDivElements || (m.exportDivElements = [], m.exportSVGElements = []), x.enabled !== !1) {
                        var n = x.theme,
                            e = n.states,
                            t = e && e.hover,
                            e = e && e.select,
                            o;
                        delete n.states, X ? o = function(i) {
                            i.stopPropagation(), X.call(m, i)
                        } : L && (o = function() {
                            m.contextMenu(r.menuClassName, L, r.translateX, r.translateY, r.width, r.height, r), r.setState(2)
                        }), x.text && x.symbol ? n.paddingLeft = H(n.paddingLeft, 25) : x.text || D(n, {
                            width: x.width,
                            height: x.height,
                            padding: 0
                        }), r = h.button(x.text, 0, 0, o, n, t, e).addClass(u.className).attr({
                            "stroke-linecap": "round",
                            title: m.options.lang[x._titleKey],
                            zIndex: 3
                        }), r.menuClassName = u.menuClassName || "highcharts-menu-" + m.btnCount++, x.symbol && (k = h.symbol(x.symbol, x.symbolX - p / 2, x.symbolY - p / 2, p, p).addClass("highcharts-button-symbol").attr({
                            zIndex: 1
                        }).add(r), k.attr({
                            stroke: x.symbolStroke,
                            fill: x.symbolFill,
                            "stroke-width": x.symbolStrokeWidth || 1
                        })), r.add().align(D(x, {
                            width: r.width,
                            x: H(x.x, m.buttonOffset)
                        }), !0, "spacingBox"), m.buttonOffset += (r.width + x.buttonSpacing) * (x.align === "right" ? -1 : 1), m.exportSVGElements.push(r, k)
                    }
                },
                destroyExport: function(u) {
                    var m = u ? u.target : this;
                    u = m.exportSVGElements;
                    var h = m.exportDivElements,
                        x = m.exportEvents,
                        X;
                    u && (w(u, function(L, k) {
                        L && (L.onclick = L.ontouchstart = null, X = "cache-" + L.menuClassName, m[X] && delete m[X], m.exportSVGElements[k] = L.destroy())
                    }), u.length = 0), h && (w(h, function(L, k) {
                        clearTimeout(L.hideTimer), ht(L, "mouseleave"), m.exportDivElements[k] = L.onmouseout = L.onmouseover = L.ontouchstart = L.onclick = null, et(L)
                    }), h.length = 0), x && (w(x, function(L) {
                        L()
                    }), x.length = 0)
                }
            }), M.menu = function(u, m, h, x) {
                return ["M", u, m + 2.5, "L", u + h, m + 2.5, "M", u, m + x / 2 + .5, "L", u + h, m + x / 2 + .5, "M", u, m + x - 1.5, "L", u + h, m + x - 1.5]
            }, Z.prototype.renderExporting = function() {
                var u = this,
                    m = u.options.exporting,
                    h = m.buttons,
                    x = u.isDirtyExporting || !u.exportSVGElements;
                u.buttonOffset = 0, u.isDirtyExporting && u.destroyExport(), x && m.enabled !== !1 && (u.exportEvents = [], I(h, function(X) {
                    u.addButton(X)
                }), u.isDirtyExporting = !1), ot(u, "destroy", u.destroyExport)
            }, Z.prototype.callbacks.push(function(u) {
                u.renderExporting(), ot(u, "redraw", u.renderExporting), w(["exporting", "navigation"], function(m) {
                    u[m] = {
                        update: function(h, x) {
                            u.isDirtyExporting = !0, z(!0, u.options[m], h), H(x, !0) && u.redraw()
                        }
                    }
                })
            })
        })(gt)
    })
})(Pe);
var Fe = Pe.exports;
const Ye = Ae(Fe);

function Ue(vt) {
    let gt, P;
    return {
        c() {
            gt = Pt("figure"), P = Pt("div"), this.h()
        },
        l(ct) {
            gt = Lt(ct, "FIGURE", {
                class: !0
            });
            var V = Dt(gt);
            P = Lt(V, "DIV", {
                class: !0,
                id: !0
            }), Dt(P).forEach(Ct), V.forEach(Ct), this.h()
        },
        h() {
            Ot(P, "class", "card"), Ot(P, "id", vt[0]), Ot(gt, "class", "highcharts-figure")
        },
        m(ct, V) {
            Rt(ct, gt, V), wt(gt, P)
        },
        p(ct, [V]) {
            V & 1 && Ot(P, "id", ct[0])
        },
        i: Kt,
        o: Kt,
        d(ct) {
            ct && Ct(gt)
        }
    }
}

function Ve(vt, gt, P) {
    let {
        url: ct
    } = gt, {
        title: V
    } = gt, {
        containerName: Z
    } = gt, ot = [], ht = [], st = [];
    const J = async () => {
        Ye(ke);
        const et = await we.GET(ct);
        if (et.error) {
            et.error.message;
            return
        }
        console.log({
            res: et
        }), ot = [], ht = [], st = [], et.data.data.routes.forEach(z => {
            ot.push(z.name), ht.push(z.co2 !== null ? z.co2 : 0), st.push(z.nox !== null ? z.nox : 0)
        }), console.log({
            containerName: Z
        }), ke.chart(Z, {
            chart: {
                type: "column",
                backgroundColor: "transparent"
            },
            exporting: {
                enabled: !0
            },
            title: {
                text: V,
                align: "center"
            },
            xAxis: {
                categories: ot,
                crosshair: !0,
                accessibility: {
                    description: "Routes"
                }
            },
            yAxis: [{
                min: 0,
                title: {
                    text: "CO₂ Emissions (kg)"
                }
            }, {
                min: 0,
                title: {
                    text: "NOx Emissions (kg)"
                },
                opposite: !0
            }],
            tooltip: {},
            plotOptions: {
                column: {
                    pointPadding: .2,
                    borderWidth: 0
                }
            },
            series: [{
                yAxis: 0,
                name: "CO₂",
                data: ht,
                color: "#54b152",
                tooltip: {
                    valueSuffix: "kg"
                }
            }, {
                yAxis: 1,
                name: "NOx",
                data: st,
                color: "#7db903",
                tooltip: {
                    valueSuffix: "mg"
                }
            }],
            navigation: {
                theme: {
                    fill: "#54b152"
                },
                buttonOptions: {
                    symbolFill: "#54b152"
                }
            },
            credits: {
                enabled: !1
            }
        })
    };
    return Ie(() => {
        J()
    }), vt.$$set = et => {
        "url" in et && P(1, ct = et.url), "title" in et && P(2, V = et.title), "containerName" in et && P(0, Z = et.containerName)
    }, [Z, ct, V]
}
class Se extends le {
    constructor(gt) {
        super(), he(this, gt, Ve, Ue, ae, {
            url: 1,
            title: 2,
            containerName: 0
        })
    }
}

function $e(vt) {
    let gt, P, ct, V, Z, ot, ht, st, J, et, Y, z, H, w, I, D, T, v, M, u, m, h, x, X, L, k, r, p, n, t, e, o, i, l;
    return V = new qt({
        props: {
            url: "/v1/dashboard/total-card",
            title: "Total CO₂ & NOx"
        }
    }), ht = new qt({
        props: {
            title: "CO₂ & NOx (YTD)",
            url: "/v1/dashboard/ytd-card"
        }
    }), Y = new qt({
        props: {
            title: "Total Routes",
            url: "/v1/dashboard/total-routes"
        }
    }), w = new qt({
        props: {
            title: "Total Stops",
            url: "/v1/dashboard/total-stops"
        }
    }), T = new qt({
        props: {
            title: "Total Parcels",
            url: "/v1/dashboard/total-parcels"
        }
    }), m = new qt({
        props: {
            title: "Average Route CO₂ & NOx",
            url: "/v1/dashboard/per-route-card"
        }
    }), X = new qt({
        props: {
            title: "Average CO₂ & NOx per Stop",
            url: "/v1/dashboard/per-stop-card"
        }
    }), r = new qt({
        props: {
            title: "Average CO₂ & NOx per Parcel",
            url: "/v1/dashboard/per-parcel-card"
        }
    }), t = new Se({
        props: {
            url: "/v1/dashboard/top-25-graph",
            title: "Top 25 CO₂ Producing Routes",
            containerName: "graph-1"
        }
    }), i = new Se({
        props: {
            url: "/v1/dashboard/bottom-25-graph",
            title: "Bottom 25 CO₂ Producing Routes",
            containerName: "graph-2"
        }
    }), {
        c() {
            gt = Pt("div"), P = Pt("div"), ct = Pt("div"), Ht(V.$$.fragment), Z = Wt(), ot = Pt("div"), Ht(ht.$$.fragment), st = Wt(), J = Pt("div"), et = Pt("div"), Ht(Y.$$.fragment), z = Wt(), H = Pt("div"), Ht(w.$$.fragment), I = Wt(), D = Pt("div"), Ht(T.$$.fragment), v = Wt(), M = Pt("div"), u = Pt("div"), Ht(m.$$.fragment), h = Wt(), x = Pt("div"), Ht(X.$$.fragment), L = Wt(), k = Pt("div"), Ht(r.$$.fragment), p = Wt(), n = Pt("div"), Ht(t.$$.fragment), e = Wt(), o = Pt("div"), Ht(i.$$.fragment), this.h()
        },
        l(a) {
            gt = Lt(a, "DIV", {
                class: !0
            });
            var b = Dt(gt);
            P = Lt(b, "DIV", {
                class: !0
            });
            var O = Dt(P);
            ct = Lt(O, "DIV", {
                class: !0
            });
            var _ = Dt(ct);
            Xt(V.$$.fragment, _), _.forEach(Ct), Z = Gt(O), ot = Lt(O, "DIV", {
                class: !0
            });
            var y = Dt(ot);
            Xt(ht.$$.fragment, y), y.forEach(Ct), O.forEach(Ct), st = Gt(b), J = Lt(b, "DIV", {
                class: !0
            });
            var j = Dt(J);
            et = Lt(j, "DIV", {
                class: !0
            });
            var G = Dt(et);
            Xt(Y.$$.fragment, G), G.forEach(Ct), z = Gt(j), H = Lt(j, "DIV", {
                class: !0
            });
            var W = Dt(H);
            Xt(w.$$.fragment, W), W.forEach(Ct), I = Gt(j), D = Lt(j, "DIV", {
                class: !0
            });
            var it = Dt(D);
            Xt(T.$$.fragment, it), it.forEach(Ct), j.forEach(Ct), v = Gt(b), M = Lt(b, "DIV", {
                class: !0
            });
            var d = Dt(M);
            u = Lt(d, "DIV", {
                class: !0
            });
            var c = Dt(u);
            Xt(m.$$.fragment, c), c.forEach(Ct), h = Gt(d), x = Lt(d, "DIV", {
                class: !0
            });
            var S = Dt(x);
            Xt(X.$$.fragment, S), S.forEach(Ct), L = Gt(d), k = Lt(d, "DIV", {
                class: !0
            });
            var B = Dt(k);
            Xt(r.$$.fragment, B), B.forEach(Ct), d.forEach(Ct), p = Gt(b), n = Lt(b, "DIV", {
                class: !0
            });
            var s = Dt(n);
            Xt(t.$$.fragment, s), s.forEach(Ct), e = Gt(b), o = Lt(b, "DIV", {
                class: !0
            });
            var g = Dt(o);
            Xt(i.$$.fragment, g), g.forEach(Ct), b.forEach(Ct), this.h()
        },
        h() {
            Ot(ct, "class", "svelte-11g9mno"), Ot(ot, "class", "svelte-11g9mno"), Ot(P, "class", "container-row svelte-11g9mno"), Ot(et, "class", "svelte-11g9mno"), Ot(H, "class", "svelte-11g9mno"), Ot(D, "class", "svelte-11g9mno"), Ot(J, "class", "container-row svelte-11g9mno"), Ot(u, "class", "svelte-11g9mno"), Ot(x, "class", "svelte-11g9mno"), Ot(k, "class", "svelte-11g9mno"), Ot(M, "class", "container-row svelte-11g9mno"), Ot(n, "class", "graph-1"), Ot(o, "class", "graph-2"), Ot(gt, "class", "container svelte-11g9mno")
        },
        m(a, b) {
            Rt(a, gt, b), wt(gt, P), wt(P, ct), Ft(V, ct, null), wt(P, Z), wt(P, ot), Ft(ht, ot, null), wt(gt, st), wt(gt, J), wt(J, et), Ft(Y, et, null), wt(J, z), wt(J, H), Ft(w, H, null), wt(J, I), wt(J, D), Ft(T, D, null), wt(gt, v), wt(gt, M), wt(M, u), Ft(m, u, null), wt(M, h), wt(M, x), Ft(X, x, null), wt(M, L), wt(M, k), Ft(r, k, null), wt(gt, p), wt(gt, n), Ft(t, n, null), wt(gt, e), wt(gt, o), Ft(i, o, null), l = !0
        },
        p: Kt,
        i(a) {
            l || (zt(V.$$.fragment, a), zt(ht.$$.fragment, a), zt(Y.$$.fragment, a), zt(w.$$.fragment, a), zt(T.$$.fragment, a), zt(m.$$.fragment, a), zt(X.$$.fragment, a), zt(r.$$.fragment, a), zt(t.$$.fragment, a), zt(i.$$.fragment, a), l = !0)
        },
        o(a) {
            Nt(V.$$.fragment, a), Nt(ht.$$.fragment, a), Nt(Y.$$.fragment, a), Nt(w.$$.fragment, a), Nt(T.$$.fragment, a), Nt(m.$$.fragment, a), Nt(X.$$.fragment, a), Nt(r.$$.fragment, a), Nt(t.$$.fragment, a), Nt(i.$$.fragment, a), l = !1
        },
        d(a) {
            a && Ct(gt), Yt(V), Yt(ht), Yt(Y), Yt(w), Yt(T), Yt(m), Yt(X), Yt(r), Yt(t), Yt(i)
        }
    }
}
class Je extends le {
    constructor(gt) {
        super(), he(this, gt, null, $e, ae, {})
    }
}
export {
    Je as component
};