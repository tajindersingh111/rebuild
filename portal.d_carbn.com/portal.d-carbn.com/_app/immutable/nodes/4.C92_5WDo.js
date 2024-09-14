import {
    s as Z,
    a as w,
    e as N,
    h as x,
    d,
    c as $,
    i as h,
    b as ee,
    f as te,
    u as se,
    g as le,
    j as ae,
    k as C,
    l as v,
    m as g,
    n as j,
    o as b,
    p as R,
    q as P,
    r as G,
    t as ie,
    v as J,
    w as K
} from "../chunks/scheduler.Bal8Y2GG.js";
import {
    S as oe,
    i as ne,
    c as Q,
    a as W,
    m as X,
    t as y,
    b as E,
    d as fe,
    e as Y,
    g as re
} from "../chunks/index.BruxqCn-.js";
import {
    o as ce,
    g as me
} from "../chunks/entry.B98oQIZ2.js";
import {
    p as ue
} from "../chunks/stores.BLmWVoEm.js";
import {
    M as pe
} from "../chunks/modal.n1Zpv6l-.js";
import {
    R as _e
} from "../chunks/resourceLayout.CcXc0dAb.js";
import {
    f as de
} from "../chunks/fetchClient.DtCbC4hg.js";
import {
    f as A
} from "../chunks/links.CXgoaKkn.js";
import {
    e as he
} from "../chunks/index.DYMvb8Iz.js";
import {
    h as I,
    a as D
} from "../chunks/auth.e8T0Sx-3.js";

function be(f) {
    let e;
    const l = f[6].default,
        s = te(l, f, f[9], null);
    return {
        c() {
            s && s.c()
        },
        l(t) {
            s && s.l(t)
        },
        m(t, i) {
            s && s.m(t, i), e = !0
        },
        p(t, i) {
            s && s.p && (!e || i & 512) && se(s, l, t, t[9], e ? ae(l, t[9], i, null) : le(t[9]), null)
        },
        i(t) {
            e || (y(s, t), e = !0)
        },
        o(t) {
            E(s, t), e = !1
        },
        d(t) {
            s && s.d(t)
        }
    }
}

function O(f) {
    let e = I(f[3], ["showAll:companies", "showRelated:companies"]) && f[0].route.id !== F,
        l, s = I(f[3], ["manageAll:companies", "manageRelated:companies"]) && f[0].route.id !== T,
        t, i = I(f[3], ["manageAll:companies", "manageRelated:companies"]) && f[0].route.id !== T,
        r, a = e && q(f),
        n = s && B(f),
        c = i && M(f);
    return {
        c() {
            a && a.c(), l = w(), n && n.c(), t = w(), c && c.c(), r = N()
        },
        l(o) {
            a && a.l(o), l = $(o), n && n.l(o), t = $(o), c && c.l(o), r = N()
        },
        m(o, m) {
            a && a.m(o, m), h(o, l, m), n && n.m(o, m), h(o, t, m), c && c.m(o, m), h(o, r, m)
        },
        p(o, m) {
            m & 1 && (e = I(o[3], ["showAll:companies", "showRelated:companies"]) && o[0].route.id !== F), e ? a ? a.p(o, m) : (a = q(o), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null), m & 1 && (s = I(o[3], ["manageAll:companies", "manageRelated:companies"]) && o[0].route.id !== T), s ? n ? n.p(o, m) : (n = B(o), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null), m & 1 && (i = I(o[3], ["manageAll:companies", "manageRelated:companies"]) && o[0].route.id !== T), i ? c ? c.p(o, m) : (c = M(o), c.c(), c.m(r.parentNode, r)) : c && (c.d(1), c = null)
        },
        d(o) {
            o && (d(l), d(t), d(r)), a && a.d(o), n && n.d(o), c && c.d(o)
        }
    }
}

function q(f) {
    let e, l, s;
    return {
        c() {
            e = C("a"), l = J("Details"), this.h()
        },
        l(t) {
            e = v(t, "A", {
                href: !0,
                class: !0
            });
            var i = j(e);
            l = K(i, "Details"), i.forEach(d), this.h()
        },
        h() {
            b(e, "href", s = A("/companies/{companyId}", {
                companyId: f[2]
            })), b(e, "class", "btn")
        },
        m(t, i) {
            h(t, e, i), R(e, l)
        },
        p(t, i) {
            i & 4 && s !== (s = A("/companies/{companyId}", {
                companyId: t[2]
            })) && b(e, "href", s)
        },
        d(t) {
            t && d(e)
        }
    }
}

function B(f) {
    let e, l, s;
    return {
        c() {
            e = C("a"), l = J("Edit"), this.h()
        },
        l(t) {
            e = v(t, "A", {
                href: !0,
                class: !0
            });
            var i = j(e);
            l = K(i, "Edit"), i.forEach(d), this.h()
        },
        h() {
            b(e, "href", s = A("/companies/{companyId}/edit", {
                companyId: f[2]
            })), b(e, "class", "btn")
        },
        m(t, i) {
            h(t, e, i), R(e, l)
        },
        p(t, i) {
            i & 4 && s !== (s = A("/companies/{companyId}/edit", {
                companyId: t[2]
            })) && b(e, "href", s)
        },
        d(t) {
            t && d(e)
        }
    }
}

function M(f) {
    let e, l = "Delete",
        s, t;
    return {
        c() {
            e = C("button"), e.textContent = l, this.h()
        },
        l(i) {
            e = v(i, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), g(e) !== "svelte-1f8bw7t" && (e.textContent = l), this.h()
        },
        h() {
            b(e, "class", "btn-error")
        },
        m(i, r) {
            h(i, e, r), s || (t = P(e, "click", f[7]), s = !0)
        },
        p: G,
        d(i) {
            i && d(e), s = !1, t()
        }
    }
}

function ke(f) {
    let e;
    return {
        c() {
            e = C("hr"), this.h()
        },
        l(l) {
            e = v(l, "HR", {
                class: !0
            }), this.h()
        },
        h() {
            b(e, "class", "vertical")
        },
        m(l, s) {
            h(l, e, s)
        },
        d(l) {
            l && d(e)
        }
    }
}

function U(f) {
    let e, l = "Back to List";
    return {
        c() {
            e = C("a"), e.textContent = l, this.h()
        },
        l(s) {
            e = v(s, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), g(e) !== "svelte-bv9djq" && (e.textContent = l), this.h()
        },
        h() {
            b(e, "href", A("/companies", {})), b(e, "class", "btn")
        },
        m(s, t) {
            h(s, e, t)
        },
        d(s) {
            s && d(e)
        }
    }
}

function H(f) {
    let e, l = "Create";
    return {
        c() {
            e = C("a"), e.textContent = l, this.h()
        },
        l(s) {
            e = v(s, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), g(e) !== "svelte-1fkeg5h" && (e.textContent = l), this.h()
        },
        h() {
            b(e, "href", A("/companies/create", {})), b(e, "class", "btn")
        },
        m(s, t) {
            h(s, e, t)
        },
        d(s) {
            s && d(e)
        }
    }
}

function Ce(f) {
    var _;
    let e = (_ = f[0].route.id) == null ? void 0 : _.includes("companyId"),
        l, s = I(f[3], ["list:companies", "manageAll:companies"]),
        t, i = D(f[3], "list:companies") && f[0].route.id !== V,
        r, a = D(f[3], "manageAll:companies") && f[0].route.id !== z,
        n, c = e && O(f),
        o = s && ke(),
        m = i && U(),
        p = a && H();
    return {
        c() {
            c && c.c(), l = w(), o && o.c(), t = w(), m && m.c(), r = w(), p && p.c(), n = N()
        },
        l(u) {
            c && c.l(u), l = $(u), o && o.l(u), t = $(u), m && m.l(u), r = $(u), p && p.l(u), n = N()
        },
        m(u, k) {
            c && c.m(u, k), h(u, l, k), o && o.m(u, k), h(u, t, k), m && m.m(u, k), h(u, r, k), p && p.m(u, k), h(u, n, k)
        },
        p(u, k) {
            var L;
            k & 1 && (e = (L = u[0].route.id) == null ? void 0 : L.includes("companyId")), e ? c ? c.p(u, k) : (c = O(u), c.c(), c.m(l.parentNode, l)) : c && (c.d(1), c = null), k & 1 && (i = D(u[3], "list:companies") && u[0].route.id !== V), i ? m || (m = U(), m.c(), m.m(r.parentNode, r)) : m && (m.d(1), m = null), k & 1 && (a = D(u[3], "manageAll:companies") && u[0].route.id !== z), a ? p || (p = H(), p.c(), p.m(n.parentNode, n)) : p && (p.d(1), p = null)
        },
        d(u) {
            u && (d(l), d(t), d(r), d(n)), c && c.d(u), o && o.d(u), m && m.d(u), p && p.d(u)
        }
    }
}

function S(f) {
    let e, l;
    return e = new pe({
        props: {
            $$slots: {
                default: [ve]
            },
            $$scope: {
                ctx: f
            }
        }
    }), {
        c() {
            Q(e.$$.fragment)
        },
        l(s) {
            W(e.$$.fragment, s)
        },
        m(s, t) {
            X(e, s, t), l = !0
        },
        p(s, t) {
            const i = {};
            t & 514 && (i.$$scope = {
                dirty: t,
                ctx: s
            }), e.$set(i)
        },
        i(s) {
            l || (y(e.$$.fragment, s), l = !0)
        },
        o(s) {
            E(e.$$.fragment, s), l = !1
        },
        d(s) {
            Y(e, s)
        }
    }
}

function ve(f) {
    let e, l = "Are you sure you want to delete",
        s, t, i, r = "Close",
        a, n, c = "Delete",
        o, m;
    return {
        c() {
            e = C("h2"), e.textContent = l, s = w(), t = C("div"), i = C("button"), i.textContent = r, a = w(), n = C("button"), n.textContent = c, this.h()
        },
        l(p) {
            e = v(p, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), g(e) !== "svelte-f7ixjg" && (e.textContent = l), s = $(p), t = v(p, "DIV", {
                class: !0
            });
            var _ = j(t);
            i = v(_, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), g(i) !== "svelte-1ejmsne" && (i.textContent = r), a = $(_), n = v(_, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), g(n) !== "svelte-rwp0wc" && (n.textContent = c), _.forEach(d), this.h()
        },
        h() {
            b(e, "class", "subtitle"), b(i, "class", "btn"), b(n, "class", "btn-error"), b(t, "class", "row")
        },
        m(p, _) {
            h(p, e, _), h(p, s, _), h(p, t, _), R(t, i), R(t, a), R(t, n), o || (m = [P(i, "click", f[8]), P(n, "click", f[4])], o = !0)
        },
        p: G,
        d(p) {
            p && (d(e), d(s), d(t)), o = !1, ie(m)
        }
    }
}

function we(f) {
    let e, l, s, t, i;
    l = new _e({
        props: {
            title: "Companies",
            $$slots: {
                options: [Ce],
                default: [be]
            },
            $$scope: {
                ctx: f
            }
        }
    });
    let r = f[1] && S(f);
    return {
        c() {
            e = w(), Q(l.$$.fragment), s = w(), r && r.c(), t = N(), this.h()
        },
        l(a) {
            x("svelte-ijq5cd", document.head).forEach(d), e = $(a), W(l.$$.fragment, a), s = $(a), r && r.l(a), t = N(), this.h()
        },
        h() {
            document.title = "D-carbN - Companies"
        },
        m(a, n) {
            h(a, e, n), X(l, a, n), h(a, s, n), r && r.m(a, n), h(a, t, n), i = !0
        },
        p(a, [n]) {
            const c = {};
            n & 519 && (c.$$scope = {
                dirty: n,
                ctx: a
            }), l.$set(c), a[1] ? r ? (r.p(a, n), n & 2 && y(r, 1)) : (r = S(a), r.c(), y(r, 1), r.m(t.parentNode, t)) : r && (re(), E(r, 1, 1, () => {
                r = null
            }), fe())
        },
        i(a) {
            i || (y(l.$$.fragment, a), y(r), i = !0)
        },
        o(a) {
            E(l.$$.fragment, a), E(r), i = !1
        },
        d(a) {
            a && (d(e), d(s), d(t)), Y(l, a), r && r.d(a)
        }
    }
}
const V = "/(app)/(auth)/companies",
    z = "/(app)/(auth)/companies/create",
    F = "/(app)/(auth)/companies/[companyId]",
    T = "/(app)/(auth)/companies/[companyId]/edit";

function $e(f, e, l) {
    let s, t;
    ee(f, ue, _ => l(0, t = _));
    let {
        $$slots: i = {},
        $$scope: r
    } = e, {
        data: a
    } = e, n = a.user;
    const c = async () => {
        const _ = await de.DELETE("/v1/companies/{id}", {
            params: {
                path: {
                    id: s
                }
            }
        });
        _.error && he(_.response.status, _.error), me(A("/companies", {}), {
            invalidateAll: !0
        })
    };
    let o = !1;
    ce(() => {
        l(1, o = !1)
    });
    const m = () => l(1, o = !0),
        p = () => l(1, o = !1);
    return f.$$set = _ => {
        "data" in _ && l(5, a = _.data), "$$scope" in _ && l(9, r = _.$$scope)
    }, f.$$.update = () => {
        var _, u;
        f.$$.dirty & 1 && l(2, s = (u = (_ = t.data.company) == null ? void 0 : _.data) == null ? void 0 : u.id)
    }, [t, o, s, n, c, a, i, m, p, r]
}
class je extends oe {
    constructor(e) {
        super(), ne(this, e, $e, we, Z, {
            data: 5
        })
    }
}
export {
    je as component
};