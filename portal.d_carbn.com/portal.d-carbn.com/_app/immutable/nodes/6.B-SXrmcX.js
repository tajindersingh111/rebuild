import {
    s as i,
    a as f,
    h as _,
    d as l,
    c as m,
    i as p,
    f as $,
    u as d,
    g as h,
    j as g
} from "../chunks/scheduler.Bal8Y2GG.js";
import {
    S as b,
    i as y,
    c as D,
    a as v,
    m as L,
    t as c,
    b as u,
    e as R
} from "../chunks/index.BruxqCn-.js";
import {
    R as S
} from "../chunks/resourceLayout.CcXc0dAb.js";

function j(n) {
    let s;
    const a = n[0].default,
        t = $(a, n, n[1], null);
    return {
        c() {
            t && t.c()
        },
        l(e) {
            t && t.l(e)
        },
        m(e, o) {
            t && t.m(e, o), s = !0
        },
        p(e, o) {
            t && t.p && (!s || o & 2) && d(t, a, e, e[1], s ? g(a, e[1], o, null) : h(e[1]), null)
        },
        i(e) {
            s || (c(t, e), s = !0)
        },
        o(e) {
            u(t, e), s = !1
        },
        d(e) {
            t && t.d(e)
        }
    }
}

function q(n) {
    let s, a, t;
    return a = new S({
        props: {
            title: "Dashboard",
            $$slots: {
                default: [j]
            },
            $$scope: {
                ctx: n
            }
        }
    }), {
        c() {
            s = f(), D(a.$$.fragment), this.h()
        },
        l(e) {
            _("svelte-3fh58o", document.head).forEach(l), s = m(e), v(a.$$.fragment, e), this.h()
        },
        h() {
            document.title = "D-carbN - Dashboard"
        },
        m(e, o) {
            p(e, s, o), L(a, e, o), t = !0
        },
        p(e, [o]) {
            const r = {};
            o & 2 && (r.$$scope = {
                dirty: o,
                ctx: e
            }), a.$set(r)
        },
        i(e) {
            t || (c(a.$$.fragment, e), t = !0)
        },
        o(e) {
            u(a.$$.fragment, e), t = !1
        },
        d(e) {
            e && l(s), R(a, e)
        }
    }
}

function w(n, s, a) {
    let {
        $$slots: t = {},
        $$scope: e
    } = s;
    return n.$$set = o => {
        "$$scope" in o && a(1, e = o.$$scope)
    }, [t, e]
}
class k extends b {
    constructor(s) {
        super(), y(this, s, w, q, i, {})
    }
}
export {
    k as component
};