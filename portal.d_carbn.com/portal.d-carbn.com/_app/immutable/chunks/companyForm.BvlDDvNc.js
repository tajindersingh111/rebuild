import {
    s as Xt,
    y as v,
    k as f,
    a as _,
    l as d,
    n as T,
    c as u,
    m as De,
    d as C,
    o as m,
    i as Bt,
    p as r,
    q as At,
    G as Yt,
    z as b,
    t as Zt,
    F as xt,
    v as en,
    w as tn,
    x as nn
} from "./scheduler.Bal8Y2GG.js";
import {
    S as ln,
    i as rn,
    f as c,
    c as $,
    a as h,
    m as w,
    t as q,
    b as E,
    e as y
} from "./index.BruxqCn-.js"; /* empty css                                               */
import {
    T as I
} from "./textField.DQoTR3zu.js";
import {
    S as sn
} from "./selectField.gIhiPLNo.js";

function an(t = !0) {
    const s = this,
        a = new IntersectionObserver(function([o]) {
            const g = o.intersectionRatio;
            if (g < 1) {
                const n = g <= 0 && t ? "center" : "nearest";
                s.scrollIntoView({
                    block: n,
                    inline: n
                })
            }
            this.disconnect()
        });
    return a.observe(s), a
}
var kt;
typeof Element < "u" && !((kt = Element.prototype) != null && kt.scrollIntoViewIfNeeded) && typeof IntersectionObserver < "u" && (Element.prototype.scrollIntoViewIfNeeded = an);

function jt(t) {
    let s, a;
    return {
        c() {
            s = f("p"), a = en(t[1]), this.h()
        },
        l(o) {
            s = d(o, "P", {
                class: !0
            });
            var g = T(s);
            a = tn(g, t[1]), g.forEach(C), this.h()
        },
        h() {
            m(s, "class", "error-text")
        },
        m(o, g) {
            Bt(o, s, g), r(s, a)
        },
        p(o, g) {
            g & 2 && nn(a, o[1])
        },
        d(o) {
            o && C(s)
        }
    }
}

function on(t) {
    let s, a, o, g, n = "Details",
        me, O, A, be, ce, j, $e, he, Z, k, we, qe, G, B, Ee, ye, S, Ce, Ie, l, P, Ve, Ae, je, ke, F, fe, _t = "Address",
        Be, x, R, Se, Fe, z, Ne, Le, ee, H, Oe, Ge, M, Pe, Re, U, ze, He, Me, Ue, N, te, de, ut = "Billing Address",
        Je, J, ft = "Copy from Address",
        Ke, ne, K, Qe, We, Q, Xe, Ye, le, W, Ze, xe, X, et, tt, Y, nt, lt, ge, dt = "Save",
        Te, it, gt, p = t[1] && jt(t);

    function St(e) {
        t[5](e)
    }
    let mt = {
        name: "name",
        label: "Name",
        errors: t[2].name,
        required: !0
    };
    t[0].name !== void 0 && (mt.value = t[0].name), A = new I({
        props: mt
    }), v.push(() => c(A, "value", St));

    function Ft(e) {
        t[6](e)
    }
    let pt = {
        name: "email",
        label: "Email",
        errors: t[2].email,
        required: !0
    };
    t[0].email !== void 0 && (pt.value = t[0].email), j = new I({
        props: pt
    }), v.push(() => c(j, "value", Ft));

    function Nt(e) {
        t[7](e)
    }
    let vt = {
        name: "job_title",
        label: "Job title",
        errors: t[2].job_title,
        required: !0
    };
    t[0].job_title !== void 0 && (vt.value = t[0].job_title), k = new I({
        props: vt
    }), v.push(() => c(k, "value", Nt));

    function Lt(e) {
        t[8](e)
    }
    let bt = {
        name: "phone_number",
        label: "Phone number",
        errors: t[2].phone_number,
        required: !0
    };
    t[0].phone_number !== void 0 && (bt.value = t[0].phone_number), B = new I({
        props: bt
    }), v.push(() => c(B, "value", Lt));

    function Ot(e) {
        t[9](e)
    }
    let ct = {
        name: "main_contact_name",
        label: "Main contact name",
        errors: t[2].main_contact_name,
        required: !0
    };
    t[0].main_contact_name !== void 0 && (ct.value = t[0].main_contact_name), S = new I({
        props: ct
    }), v.push(() => c(S, "value", Ot));

    function Gt(e) {
        t[10](e)
    }
    let $t = {
        label: "Status",
        name: "status",
        options: [{
            label: "Active",
            value: "Active"
        }, {
            label: "Inactive",
            value: "Inactive"
        }],
        required: !0
    };
    t[0].status !== void 0 && ($t.value = t[0].status), P = new sn({
        props: $t
    }), v.push(() => c(P, "value", Gt));

    function Pt(e) {
        t[11](e)
    }
    let ht = {
        name: "address",
        label: "Address",
        errors: t[2].address,
        required: !0
    };
    t[0].address !== void 0 && (ht.value = t[0].address), R = new I({
        props: ht
    }), v.push(() => c(R, "value", Pt));

    function Rt(e) {
        t[12](e)
    }
    let wt = {
        name: "address_line_1",
        label: "Address line 1",
        errors: t[2].address_line_1,
        required: !0
    };
    t[0].address_line_1 !== void 0 && (wt.value = t[0].address_line_1), z = new I({
        props: wt
    }), v.push(() => c(z, "value", Rt));

    function zt(e) {
        t[13](e)
    }
    let qt = {
        name: "town_or_city",
        label: "Town or city",
        errors: t[2].town_or_city,
        required: !0
    };
    t[0].town_or_city !== void 0 && (qt.value = t[0].town_or_city), H = new I({
        props: qt
    }), v.push(() => c(H, "value", zt));

    function Ht(e) {
        t[14](e)
    }
    let Et = {
        name: "postcode",
        label: "Postcode",
        errors: t[2].postcode,
        required: !0
    };
    t[0].postcode !== void 0 && (Et.value = t[0].postcode), M = new I({
        props: Et
    }), v.push(() => c(M, "value", Ht));

    function Mt(e) {
        t[15](e)
    }
    let yt = {
        name: "country",
        label: "County",
        errors: t[2].county,
        required: !0
    };
    t[0].county !== void 0 && (yt.value = t[0].county), U = new I({
        props: yt
    }), v.push(() => c(U, "value", Mt));

    function Ut(e) {
        t[16](e)
    }
    let Ct = {
        name: "billing_address",
        label: "Billing Address",
        errors: t[2].billing_address,
        required: !0
    };
    t[0].billing_address !== void 0 && (Ct.value = t[0].billing_address), K = new I({
        props: Ct
    }), v.push(() => c(K, "value", Ut));

    function Jt(e) {
        t[17](e)
    }
    let It = {
        name: "billing_address_line_1",
        label: "Billing Address line 1",
        errors: t[2].billing_address_line_1,
        required: !0
    };
    t[0].billing_address_line_1 !== void 0 && (It.value = t[0].billing_address_line_1), Q = new I({
        props: It
    }), v.push(() => c(Q, "value", Jt));

    function Kt(e) {
        t[18](e)
    }
    let Dt = {
        name: "billing_town_or_city",
        label: "Billing Town or city",
        errors: t[2].billing_town_or_city,
        required: !0
    };
    t[0].billing_town_or_city !== void 0 && (Dt.value = t[0].billing_town_or_city), W = new I({
        props: Dt
    }), v.push(() => c(W, "value", Kt));

    function Qt(e) {
        t[19](e)
    }
    let Tt = {
        name: "billing_postcode",
        label: "Billing Postcode",
        errors: t[2].billing_postcode,
        required: !0
    };
    t[0].billing_postcode !== void 0 && (Tt.value = t[0].billing_postcode), X = new I({
        props: Tt
    }), v.push(() => c(X, "value", Qt));

    function Wt(e) {
        t[20](e)
    }
    let Vt = {
        name: "billing_county",
        label: "Billing County",
        errors: t[2].billing_county,
        required: !0
    };
    return t[0].billing_county !== void 0 && (Vt.value = t[0].billing_county), Y = new I({
        props: Vt
    }), v.push(() => c(Y, "value", Wt)), {
        c() {
            s = f("form"), p && p.c(), a = _(), o = f("fieldset"), g = f("legend"), g.textContent = n, me = _(), O = f("div"), $(A.$$.fragment), ce = _(), $(j.$$.fragment), he = _(), Z = f("div"), $(k.$$.fragment), qe = _(), G = f("div"), $(B.$$.fragment), ye = _(), $(S.$$.fragment), Ie = _(), l = f("div"), $(P.$$.fragment), Ae = _(), je = f("hr"), ke = _(), F = f("fieldset"), fe = f("legend"), fe.textContent = _t, Be = _(), x = f("div"), $(R.$$.fragment), Fe = _(), $(z.$$.fragment), Le = _(), ee = f("div"), $(H.$$.fragment), Ge = _(), $(M.$$.fragment), Re = _(), $(U.$$.fragment), He = _(), Me = f("hr"), Ue = _(), N = f("fieldset"), te = f("div"), de = f("legend"), de.textContent = ut, Je = _(), J = f("button"), J.textContent = ft, Ke = _(), ne = f("div"), $(K.$$.fragment), We = _(), $(Q.$$.fragment), Ye = _(), le = f("div"), $(W.$$.fragment), xe = _(), $(X.$$.fragment), tt = _(), $(Y.$$.fragment), lt = _(), ge = f("button"), ge.textContent = dt, this.h()
        },
        l(e) {
            s = d(e, "FORM", {
                class: !0
            });
            var i = T(s);
            p && p.l(i), a = u(i), o = d(i, "FIELDSET", {});
            var D = T(o);
            g = d(D, "LEGEND", {
                class: !0,
                "data-svelte-h": !0
            }), De(g) !== "svelte-ij6zox" && (g.textContent = n), me = u(D), O = d(D, "DIV", {
                class: !0
            });
            var ie = T(O);
            h(A.$$.fragment, ie), ce = u(ie), h(j.$$.fragment, ie), ie.forEach(C), he = u(D), Z = d(D, "DIV", {
                class: !0
            });
            var pe = T(Z);
            h(k.$$.fragment, pe), pe.forEach(C), qe = u(D), G = d(D, "DIV", {
                class: !0
            });
            var re = T(G);
            h(B.$$.fragment, re), ye = u(re), h(S.$$.fragment, re), re.forEach(C), Ie = u(D), l = d(D, "DIV", {
                class: !0
            });
            var ve = T(l);
            h(P.$$.fragment, ve), ve.forEach(C), D.forEach(C), Ae = u(i), je = d(i, "HR", {}), ke = u(i), F = d(i, "FIELDSET", {});
            var L = T(F);
            fe = d(L, "LEGEND", {
                class: !0,
                "data-svelte-h": !0
            }), De(fe) !== "svelte-16scikb" && (fe.textContent = _t), Be = u(L), x = d(L, "DIV", {
                class: !0
            });
            var se = T(x);
            h(R.$$.fragment, se), Fe = u(se), h(z.$$.fragment, se), se.forEach(C), Le = u(L), ee = d(L, "DIV", {
                class: !0
            });
            var ae = T(ee);
            h(H.$$.fragment, ae), Ge = u(ae), h(M.$$.fragment, ae), ae.forEach(C), Re = u(L), h(U.$$.fragment, L), L.forEach(C), He = u(i), Me = d(i, "HR", {}), Ue = u(i), N = d(i, "FIELDSET", {});
            var V = T(N);
            te = d(V, "DIV", {
                class: !0
            });
            var oe = T(te);
            de = d(oe, "LEGEND", {
                class: !0,
                "data-svelte-h": !0
            }), De(de) !== "svelte-1vcn9vc" && (de.textContent = ut), Je = u(oe), J = d(oe, "BUTTON", {
                class: !0,
                type: !0,
                "data-svelte-h": !0
            }), De(J) !== "svelte-14tk92y" && (J.textContent = ft), oe.forEach(C), Ke = u(V), ne = d(V, "DIV", {
                class: !0
            });
            var _e = T(ne);
            h(K.$$.fragment, _e), We = u(_e), h(Q.$$.fragment, _e), _e.forEach(C), Ye = u(V), le = d(V, "DIV", {
                class: !0
            });
            var ue = T(le);
            h(W.$$.fragment, ue), xe = u(ue), h(X.$$.fragment, ue), ue.forEach(C), tt = u(V), h(Y.$$.fragment, V), V.forEach(C), lt = u(i), ge = d(i, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), De(ge) !== "svelte-f435eb" && (ge.textContent = dt), i.forEach(C), this.h()
        },
        h() {
            m(g, "class", "subtitle"), m(O, "class", "row"), m(Z, "class", "row"), m(G, "class", "row"), m(l, "class", "row"), m(fe, "class", "subtitle"), m(x, "class", "row"), m(ee, "class", "row"), m(de, "class", "subtitle"), m(J, "class", "btn-primary"), m(J, "type", "button"), m(te, "class", "row"), m(ne, "class", "row"), m(le, "class", "row"), m(ge, "class", "btn-primary"), m(s, "class", "full-page-form")
        },
        m(e, i) {
            Bt(e, s, i), p && p.m(s, null), r(s, a), r(s, o), r(o, g), r(o, me), r(o, O), w(A, O, null), r(O, ce), w(j, O, null), r(o, he), r(o, Z), w(k, Z, null), r(o, qe), r(o, G), w(B, G, null), r(G, ye), w(S, G, null), r(o, Ie), r(o, l), w(P, l, null), r(s, Ae), r(s, je), r(s, ke), r(s, F), r(F, fe), r(F, Be), r(F, x), w(R, x, null), r(x, Fe), w(z, x, null), r(F, Le), r(F, ee), w(H, ee, null), r(ee, Ge), w(M, ee, null), r(F, Re), w(U, F, null), r(s, He), r(s, Me), r(s, Ue), r(s, N), r(N, te), r(te, de), r(te, Je), r(te, J), r(N, Ke), r(N, ne), w(K, ne, null), r(ne, We), w(Q, ne, null), r(N, Ye), r(N, le), w(W, le, null), r(le, xe), w(X, le, null), r(N, tt), w(Y, N, null), r(s, lt), r(s, ge), Te = !0, it || (gt = [At(J, "click", t[4]), At(s, "submit", Yt(t[21]))], it = !0)
        },
        p(e, [i]) {
            e[1] ? p ? p.p(e, i) : (p = jt(e), p.c(), p.m(s, a)) : p && (p.d(1), p = null);
            const D = {};
            i & 4 && (D.errors = e[2].name), !be && i & 1 && (be = !0, D.value = e[0].name, b(() => be = !1)), A.$set(D);
            const ie = {};
            i & 4 && (ie.errors = e[2].email), !$e && i & 1 && ($e = !0, ie.value = e[0].email, b(() => $e = !1)), j.$set(ie);
            const pe = {};
            i & 4 && (pe.errors = e[2].job_title), !we && i & 1 && (we = !0, pe.value = e[0].job_title, b(() => we = !1)), k.$set(pe);
            const re = {};
            i & 4 && (re.errors = e[2].phone_number), !Ee && i & 1 && (Ee = !0, re.value = e[0].phone_number, b(() => Ee = !1)), B.$set(re);
            const ve = {};
            i & 4 && (ve.errors = e[2].main_contact_name), !Ce && i & 1 && (Ce = !0, ve.value = e[0].main_contact_name, b(() => Ce = !1)), S.$set(ve);
            const L = {};
            !Ve && i & 1 && (Ve = !0, L.value = e[0].status, b(() => Ve = !1)), P.$set(L);
            const se = {};
            i & 4 && (se.errors = e[2].address), !Se && i & 1 && (Se = !0, se.value = e[0].address, b(() => Se = !1)), R.$set(se);
            const ae = {};
            i & 4 && (ae.errors = e[2].address_line_1), !Ne && i & 1 && (Ne = !0, ae.value = e[0].address_line_1, b(() => Ne = !1)), z.$set(ae);
            const V = {};
            i & 4 && (V.errors = e[2].town_or_city), !Oe && i & 1 && (Oe = !0, V.value = e[0].town_or_city, b(() => Oe = !1)), H.$set(V);
            const oe = {};
            i & 4 && (oe.errors = e[2].postcode), !Pe && i & 1 && (Pe = !0, oe.value = e[0].postcode, b(() => Pe = !1)), M.$set(oe);
            const _e = {};
            i & 4 && (_e.errors = e[2].county), !ze && i & 1 && (ze = !0, _e.value = e[0].county, b(() => ze = !1)), U.$set(_e);
            const ue = {};
            i & 4 && (ue.errors = e[2].billing_address), !Qe && i & 1 && (Qe = !0, ue.value = e[0].billing_address, b(() => Qe = !1)), K.$set(ue);
            const rt = {};
            i & 4 && (rt.errors = e[2].billing_address_line_1), !Xe && i & 1 && (Xe = !0, rt.value = e[0].billing_address_line_1, b(() => Xe = !1)), Q.$set(rt);
            const st = {};
            i & 4 && (st.errors = e[2].billing_town_or_city), !Ze && i & 1 && (Ze = !0, st.value = e[0].billing_town_or_city, b(() => Ze = !1)), W.$set(st);
            const at = {};
            i & 4 && (at.errors = e[2].billing_postcode), !et && i & 1 && (et = !0, at.value = e[0].billing_postcode, b(() => et = !1)), X.$set(at);
            const ot = {};
            i & 4 && (ot.errors = e[2].billing_county), !nt && i & 1 && (nt = !0, ot.value = e[0].billing_county, b(() => nt = !1)), Y.$set(ot)
        },
        i(e) {
            Te || (q(A.$$.fragment, e), q(j.$$.fragment, e), q(k.$$.fragment, e), q(B.$$.fragment, e), q(S.$$.fragment, e), q(P.$$.fragment, e), q(R.$$.fragment, e), q(z.$$.fragment, e), q(H.$$.fragment, e), q(M.$$.fragment, e), q(U.$$.fragment, e), q(K.$$.fragment, e), q(Q.$$.fragment, e), q(W.$$.fragment, e), q(X.$$.fragment, e), q(Y.$$.fragment, e), Te = !0)
        },
        o(e) {
            E(A.$$.fragment, e), E(j.$$.fragment, e), E(k.$$.fragment, e), E(B.$$.fragment, e), E(S.$$.fragment, e), E(P.$$.fragment, e), E(R.$$.fragment, e), E(z.$$.fragment, e), E(H.$$.fragment, e), E(M.$$.fragment, e), E(U.$$.fragment, e), E(K.$$.fragment, e), E(Q.$$.fragment, e), E(W.$$.fragment, e), E(X.$$.fragment, e), E(Y.$$.fragment, e), Te = !1
        },
        d(e) {
            e && C(s), p && p.d(), y(A), y(j), y(k), y(B), y(S), y(P), y(R), y(z), y(H), y(M), y(U), y(K), y(Q), y(W), y(X), y(Y), it = !1, Zt(gt)
        }
    }
}

function _n(t, s, a) {
    let {
        error: o = null
    } = s, {
        errors: g = {}
    } = s, {
        fields: n
    } = s;
    const me = xt(),
        O = () => {
            a(0, n.billing_address = n.address, n), a(0, n.billing_address_line_1 = n.address_line_1, n), a(0, n.billing_postcode = n.postcode, n), a(0, n.billing_town_or_city = n.town_or_city, n), a(0, n.billing_county = n.county, n)
        };

    function A(l) {
        t.$$.not_equal(n.name, l) && (n.name = l, a(0, n))
    }

    function be(l) {
        t.$$.not_equal(n.email, l) && (n.email = l, a(0, n))
    }

    function ce(l) {
        t.$$.not_equal(n.job_title, l) && (n.job_title = l, a(0, n))
    }

    function j(l) {
        t.$$.not_equal(n.phone_number, l) && (n.phone_number = l, a(0, n))
    }

    function $e(l) {
        t.$$.not_equal(n.main_contact_name, l) && (n.main_contact_name = l, a(0, n))
    }

    function he(l) {
        t.$$.not_equal(n.status, l) && (n.status = l, a(0, n))
    }

    function Z(l) {
        t.$$.not_equal(n.address, l) && (n.address = l, a(0, n))
    }

    function k(l) {
        t.$$.not_equal(n.address_line_1, l) && (n.address_line_1 = l, a(0, n))
    }

    function we(l) {
        t.$$.not_equal(n.town_or_city, l) && (n.town_or_city = l, a(0, n))
    }

    function qe(l) {
        t.$$.not_equal(n.postcode, l) && (n.postcode = l, a(0, n))
    }

    function G(l) {
        t.$$.not_equal(n.county, l) && (n.county = l, a(0, n))
    }

    function B(l) {
        t.$$.not_equal(n.billing_address, l) && (n.billing_address = l, a(0, n))
    }

    function Ee(l) {
        t.$$.not_equal(n.billing_address_line_1, l) && (n.billing_address_line_1 = l, a(0, n))
    }

    function ye(l) {
        t.$$.not_equal(n.billing_town_or_city, l) && (n.billing_town_or_city = l, a(0, n))
    }

    function S(l) {
        t.$$.not_equal(n.billing_postcode, l) && (n.billing_postcode = l, a(0, n))
    }

    function Ce(l) {
        t.$$.not_equal(n.billing_county, l) && (n.billing_county = l, a(0, n))
    }
    const Ie = () => me("submit");
    return t.$$set = l => {
        "error" in l && a(1, o = l.error), "errors" in l && a(2, g = l.errors), "fields" in l && a(0, n = l.fields)
    }, [n, o, g, me, O, A, be, ce, j, $e, he, Z, k, we, qe, G, B, Ee, ye, S, Ce, Ie]
}
class pn extends ln {
    constructor(s) {
        super(), rn(this, s, _n, on, Xt, {
            error: 1,
            errors: 2,
            fields: 0
        })
    }
}
export {
    pn as C
};