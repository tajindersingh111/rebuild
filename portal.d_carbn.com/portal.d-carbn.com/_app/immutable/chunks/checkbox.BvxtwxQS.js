import {
    s as C,
    k as m,
    a as q,
    l as o,
    n as v,
    c as L,
    d as u,
    o as f,
    i as E,
    p as r,
    q as _,
    r as b,
    t as P,
    F as S,
    v as T,
    w,
    x as A
} from "./scheduler.Bal8Y2GG.js";
import {
    S as B,
    i as D
} from "./index.BruxqCn-.js"; /* empty css                                               */
function k(n) {
    let l, i;
    return {
        c() {
            l = m("p"), i = T(n[1]), this.h()
        },
        l(e) {
            l = o(e, "P", {
                class: !0
            });
            var c = v(l);
            i = w(c, n[1]), c.forEach(u), this.h()
        },
        h() {
            f(l, "class", "label")
        },
        m(e, c) {
            E(e, l, c), r(l, i)
        },
        p(e, c) {
            c & 2 && A(i, e[1])
        },
        d(e) {
            e && u(l)
        }
    }
}

function F(n) {
    let l, i, e, c, h, a = n[1] !== null && k(n);
    return {
        c() {
            l = m("label"), a && a.c(), i = q(), e = m("input"), this.h()
        },
        l(t) {
            l = o(t, "LABEL", {
                class: !0
            });
            var s = v(l);
            a && a.l(s), i = L(s), e = o(s, "INPUT", {
                type: !0,
                class: !0,
                name: !0,
                id: !0
            }), s.forEach(u), this.h()
        },
        h() {
            f(e, "type", "checkbox"), f(e, "class", "checkbox svelte-1ov2u5i"), f(e, "name", n[2]), f(e, "id", n[3]), e.disabled = n[4], f(l, "class", "svelte-1ov2u5i")
        },
        m(t, s) {
            E(t, l, s), a && a.m(l, null), r(l, i), r(l, e), e.checked = n[0], c || (h = [_(e, "change", n[6]), _(e, "input", n[7])], c = !0)
        },
        p(t, [s]) {
            t[1] !== null ? a ? a.p(t, s) : (a = k(t), a.c(), a.m(l, i)) : a && (a.d(1), a = null), s & 4 && f(e, "name", t[2]), s & 8 && f(e, "id", t[3]), s & 16 && (e.disabled = t[4]), s & 1 && (e.checked = t[0])
        },
        i: b,
        o: b,
        d(t) {
            t && u(l), a && a.d(), c = !1, P(h)
        }
    }
}

function I(n, l, i) {
    let {
        checked: e = !1
    } = l, {
        label: c = null
    } = l, {
        name: h = null
    } = l, {
        id: a = h
    } = l, {
        disabled: t = !1
    } = l;
    const s = S();

    function g() {
        e = this.checked, i(0, e)
    }
    const p = d => setTimeout(() => s("input", {
        checked: e,
        e: d
    }), 0);
    return n.$$set = d => {
        "checked" in d && i(0, e = d.checked), "label" in d && i(1, c = d.label), "name" in d && i(2, h = d.name), "id" in d && i(3, a = d.id), "disabled" in d && i(4, t = d.disabled)
    }, [e, c, h, a, t, s, g, p]
}
class y extends B {
    constructor(l) {
        super(), D(this, l, I, F, C, {
            checked: 0,
            label: 1,
            name: 2,
            id: 3,
            disabled: 4
        })
    }
}
export {
    y as C
};