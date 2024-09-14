import {
    s as ht,
    k as h,
    a as p,
    l as v,
    n as S,
    c as b,
    m as tl,
    d as $,
    o as k,
    i as pe,
    p as d,
    q as Ql,
    G as qt,
    F as Et,
    v as Kl,
    w as Jl,
    x as vt,
    y as X,
    z as Y,
    e as Zl,
    E as xl
} from "../chunks/scheduler.Bal8Y2GG.js";
import {
    S as kt,
    i as wt,
    c as q,
    a as E,
    m as I,
    t as a,
    g as ee,
    b as c,
    d as le,
    e as D,
    f as Z
} from "../chunks/index.BruxqCn-.js";
import {
    S as It,
    a as Dt
} from "../chunks/ServerGridBuilder.jRfZPao-.js"; /* empty css                               */
import {
    a as Ct,
    f as et
} from "../chunks/links.CXgoaKkn.js";
import {
    c as Ft
} from "../chunks/columns.CGYih0Kf.js";
import {
    M as Vt
} from "../chunks/modal.n1Zpv6l-.js";
import {
    C as te
} from "../chunks/checkbox.BvxtwxQS.js";
import {
    T as ie
} from "../chunks/textField.DQoTR3zu.js";
import {
    S as St
} from "../chunks/selectField.gIhiPLNo.js";
import {
    a as jt,
    r as Tt
} from "../chunks/loading.CjNYnET0.js";
import {
    f as Lt
} from "../chunks/fetchClient.DtCbC4hg.js";
import {
    g as Rt,
    s as Mt
} from "../chunks/indexPage.D-iCQg_r.js";

function lt(t) {
    let l, n;
    return {
        c() {
            l = h("p"), n = Kl(t[2]), this.h()
        },
        l(s) {
            l = v(s, "P", {
                class: !0
            });
            var _ = S(l);
            n = Jl(_, t[2]), _.forEach($), this.h()
        },
        h() {
            k(l, "class", "error-text")
        },
        m(s, _) {
            pe(s, l, _), d(l, n)
        },
        p(s, _) {
            _[0] & 4 && vt(n, s[2])
        },
        d(s) {
            s && $(l)
        }
    }
}

function tt(t) {
    let l, n, s;

    function _(e) {
        t[7](e)
    }
    let o = {
        name: "email",
        errors: t[3].email,
        required: t[1]
    };
    return t[0].email !== void 0 && (o.value = t[0].email), l = new ie({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 8 && (r.errors = e[3].email), i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].email, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function nt(t) {
    let l, n, s;

    function _(e) {
        t[9](e)
    }
    let o = {
        name: "job_title",
        errors: t[3].job_title,
        required: t[1]
    };
    return t[0].job_title !== void 0 && (o.value = t[0].job_title), l = new ie({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 8 && (r.errors = e[3].job_title), i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].job_title, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function it(t) {
    let l, n, s;

    function _(e) {
        t[11](e)
    }
    let o = {
        name: "phone_number",
        errors: t[3].phone_number,
        required: t[1]
    };
    return t[0].phone_number !== void 0 && (o.value = t[0].phone_number), l = new ie({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 8 && (r.errors = e[3].phone_number), i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].phone_number, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function st(t) {
    let l, n, s;

    function _(e) {
        t[13](e)
    }
    let o = {
        name: "main_contact_name",
        errors: t[3].main_contact_name,
        required: t[1]
    };
    return t[0].main_contact_name !== void 0 && (o.value = t[0].main_contact_name), l = new ie({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 8 && (r.errors = e[3].main_contact_name), i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].main_contact_name, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function rt(t) {
    let l, n, s;

    function _(e) {
        t[15](e)
    }
    let o = {
        name: "status",
        options: [{
            label: "Active",
            value: "Active"
        }, {
            label: "Inactive",
            value: "Inactive"
        }],
        required: t[1]
    };
    return t[0].status !== void 0 && (o.value = t[0].status), l = new St({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].status, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function ft(t) {
    let l, n, s;

    function _(e) {
        t[17](e)
    }
    let o = {
        name: "address",
        errors: t[3].address,
        required: t[1]
    };
    return t[0].address !== void 0 && (o.value = t[0].address), l = new ie({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 8 && (r.errors = e[3].address), i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].address, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function at(t) {
    let l, n, s;

    function _(e) {
        t[19](e)
    }
    let o = {
        name: "address_line_1",
        errors: t[3].address_line_1,
        required: t[1]
    };
    return t[0].address_line_1 !== void 0 && (o.value = t[0].address_line_1), l = new ie({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 8 && (r.errors = e[3].address_line_1), i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].address_line_1, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function ot(t) {
    let l, n, s;

    function _(e) {
        t[21](e)
    }
    let o = {
        name: "town_or_city",
        errors: t[3].town_or_city,
        required: t[1]
    };
    return t[0].town_or_city !== void 0 && (o.value = t[0].town_or_city), l = new ie({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 8 && (r.errors = e[3].town_or_city), i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].town_or_city, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function ut(t) {
    let l, n, s;

    function _(e) {
        t[23](e)
    }
    let o = {
        name: "postcode",
        errors: t[3].postcode,
        required: t[1]
    };
    return t[0].postcode !== void 0 && (o.value = t[0].postcode), l = new ie({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 8 && (r.errors = e[3].postcode), i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].postcode, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function dt(t) {
    let l, n, s;

    function _(e) {
        t[25](e)
    }
    let o = {
        name: "country",
        errors: t[3].county,
        required: t[1]
    };
    return t[0].county !== void 0 && (o.value = t[0].county), l = new ie({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 8 && (r.errors = e[3].county), i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].county, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function _t(t) {
    let l, n, s;

    function _(e) {
        t[27](e)
    }
    let o = {
        name: "billing_address",
        errors: t[3].billing_address,
        required: t[1]
    };
    return t[0].billing_address !== void 0 && (o.value = t[0].billing_address), l = new ie({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 8 && (r.errors = e[3].billing_address), i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].billing_address, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function ct(t) {
    let l, n, s;

    function _(e) {
        t[29](e)
    }
    let o = {
        name: "billing_address_line_1",
        errors: t[3].billing_address_line_1,
        required: t[1]
    };
    return t[0].billing_address_line_1 !== void 0 && (o.value = t[0].billing_address_line_1), l = new ie({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 8 && (r.errors = e[3].billing_address_line_1), i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].billing_address_line_1, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function mt(t) {
    let l, n, s;

    function _(e) {
        t[31](e)
    }
    let o = {
        name: "billing_town_or_city",
        errors: t[3].billing_town_or_city,
        required: t[1]
    };
    return t[0].billing_town_or_city !== void 0 && (o.value = t[0].billing_town_or_city), l = new ie({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 8 && (r.errors = e[3].billing_town_or_city), i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].billing_town_or_city, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function gt(t) {
    let l, n, s;

    function _(e) {
        t[33](e)
    }
    let o = {
        name: "billing_postcode",
        errors: t[3].billing_postcode,
        required: t[1]
    };
    return t[0].billing_postcode !== void 0 && (o.value = t[0].billing_postcode), l = new ie({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 8 && (r.errors = e[3].billing_postcode), i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].billing_postcode, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function pt(t) {
    let l, n, s;

    function _(e) {
        t[35](e)
    }
    let o = {
        name: "billing_county",
        errors: t[3].billing_county,
        required: t[1]
    };
    return t[0].billing_county !== void 0 && (o.value = t[0].billing_county), l = new ie({
        props: o
    }), X.push(() => Z(l, "value", _)), {
        c() {
            q(l.$$.fragment)
        },
        l(e) {
            E(l.$$.fragment, e)
        },
        m(e, i) {
            I(l, e, i), s = !0
        },
        p(e, i) {
            const r = {};
            i[0] & 8 && (r.errors = e[3].billing_county), i[0] & 2 && (r.required = e[1]), !n && i[0] & 1 && (n = !0, r.value = e[0].billing_county, Y(() => n = !1)), l.$set(r)
        },
        i(e) {
            s || (a(l.$$.fragment, e), s = !0)
        },
        o(e) {
            c(l.$$.fragment, e), s = !1
        },
        d(e) {
            D(l, e)
        }
    }
}

function Bt(t) {
    let l, n, s, _, o = "Details",
        e, i, r, L, C, j, g, V, se, F, T, w, W, Be, nl, fe, ae, il, sl, Ne, oe, ue, rl, fl, al, ol, ne, be, cl = "Address",
        ul, ge, de, _e, dl, u, $e, he, El, Il, Oe, ve, ke, Dl, Cl, we, qe, Fl, Vl, Ee, Ie, Sl, jl, Tl, Ll, re, ze, Wl = '<legend class="subtitle svelte-f12kld">Billing Address</legend>',
        Rl, Pe, De, Ce, Ml, Bl, Fe, Ve, Nl, Ol, Ae, Se, je, Pl, Al, Te, Le, yl, zl, Re, Me, Hl, Gl, He, Xl = "Save",
        ml, Ul, Yl, x = t[2] && lt(t);
    L = new te({
        props: {
            label: "Email:",
            checked: "email" in t[0]
        }
    }), L.$on("input", t[6]);
    let R = "email" in t[0] && tt(t);
    V = new te({
        props: {
            label: "Job Title:",
            checked: "job_title" in t[0]
        }
    }), V.$on("input", t[8]);
    let M = "job_title" in t[0] && nt(t);
    W = new te({
        props: {
            label: "Phone Number:",
            checked: "phone_number" in t[0]
        }
    }), W.$on("input", t[10]);
    let B = "phone_number" in t[0] && it(t);
    ae = new te({
        props: {
            label: "Main Contact Name:",
            checked: "main_contact_name" in t[0]
        }
    }), ae.$on("input", t[12]);
    let N = "main_contact_name" in t[0] && st(t);
    ue = new te({
        props: {
            label: "Status:",
            checked: "status" in t[0]
        }
    }), ue.$on("input", t[14]);
    let O = "status" in t[0] && rt(t);
    _e = new te({
        props: {
            label: "Address:",
            checked: "address" in t[0]
        }
    }), _e.$on("input", t[16]);
    let P = "address" in t[0] && ft(t);
    he = new te({
        props: {
            label: "Address Line 1:",
            checked: "address_line_1" in t[0]
        }
    }), he.$on("input", t[18]);
    let A = "address_line_1" in t[0] && at(t);
    ke = new te({
        props: {
            label: "Town or City:",
            checked: "town_or_city" in t[0]
        }
    }), ke.$on("input", t[20]);
    let y = "town_or_city" in t[0] && ot(t);
    qe = new te({
        props: {
            label: "Postcode:",
            checked: "postcode" in t[0]
        }
    }), qe.$on("input", t[22]);
    let z = "postcode" in t[0] && ut(t);
    Ie = new te({
        props: {
            label: "County:",
            checked: "county" in t[0]
        }
    }), Ie.$on("input", t[24]);
    let H = "county" in t[0] && dt(t);
    Ce = new te({
        props: {
            label: "Billing Address:",
            checked: "billing_address" in t[0]
        }
    }), Ce.$on("input", t[26]);
    let G = "billing_address" in t[0] && _t(t);
    Ve = new te({
        props: {
            label: "Billing Address Line 1:",
            checked: "billing_address_line_1" in t[0]
        }
    }), Ve.$on("input", t[28]);
    let U = "billing_address_line_1" in t[0] && ct(t);
    je = new te({
        props: {
            label: "Billing Town or City:",
            checked: "billing_town_or_city" in t[0]
        }
    }), je.$on("input", t[30]);
    let K = "billing_town_or_city" in t[0] && mt(t);
    Le = new te({
        props: {
            label: "Billing Postcode:",
            checked: "billing_postcode" in t[0]
        }
    }), Le.$on("input", t[32]);
    let J = "billing_postcode" in t[0] && gt(t);
    Me = new te({
        props: {
            label: "Billing County:",
            checked: "billing_county" in t[0]
        }
    }), Me.$on("input", t[34]);
    let Q = "billing_county" in t[0] && pt(t);
    return {
        c() {
            l = h("form"), x && x.c(), n = p(), s = h("fieldset"), _ = h("legend"), _.textContent = o, e = p(), i = h("div"), r = h("div"), q(L.$$.fragment), C = p(), R && R.c(), j = p(), g = h("div"), q(V.$$.fragment), se = p(), M && M.c(), F = p(), T = h("div"), w = h("div"), q(W.$$.fragment), Be = p(), B && B.c(), nl = p(), fe = h("div"), q(ae.$$.fragment), il = p(), N && N.c(), sl = p(), Ne = h("div"), oe = h("div"), q(ue.$$.fragment), rl = p(), O && O.c(), fl = p(), al = h("hr"), ol = p(), ne = h("fieldset"), be = h("legend"), be.textContent = cl, ul = p(), ge = h("div"), de = h("div"), q(_e.$$.fragment), dl = p(), P && P.c(), u = p(), $e = h("div"), q(he.$$.fragment), El = p(), A && A.c(), Il = p(), Oe = h("div"), ve = h("div"), q(ke.$$.fragment), Dl = p(), y && y.c(), Cl = p(), we = h("div"), q(qe.$$.fragment), Fl = p(), z && z.c(), Vl = p(), Ee = h("div"), q(Ie.$$.fragment), Sl = p(), H && H.c(), jl = p(), Tl = h("hr"), Ll = p(), re = h("fieldset"), ze = h("div"), ze.innerHTML = Wl, Rl = p(), Pe = h("div"), De = h("div"), q(Ce.$$.fragment), Ml = p(), G && G.c(), Bl = p(), Fe = h("div"), q(Ve.$$.fragment), Nl = p(), U && U.c(), Ol = p(), Ae = h("div"), Se = h("div"), q(je.$$.fragment), Pl = p(), K && K.c(), Al = p(), Te = h("div"), q(Le.$$.fragment), yl = p(), J && J.c(), zl = p(), Re = h("div"), q(Me.$$.fragment), Hl = p(), Q && Q.c(), Gl = p(), He = h("button"), He.textContent = Xl, this.h()
        },
        l(f) {
            l = v(f, "FORM", {
                class: !0
            });
            var m = S(l);
            x && x.l(m), n = b(m), s = v(m, "FIELDSET", {
                class: !0
            });
            var ce = S(s);
            _ = v(ce, "LEGEND", {
                class: !0,
                "data-svelte-h": !0
            }), tl(_) !== "svelte-ij6zox" && (_.textContent = o), e = b(ce), i = v(ce, "DIV", {
                class: !0
            });
            var Ge = S(i);
            r = v(Ge, "DIV", {
                class: !0
            });
            var Ue = S(r);
            E(L.$$.fragment, Ue), C = b(Ue), R && R.l(Ue), Ue.forEach($), j = b(Ge), g = v(Ge, "DIV", {
                class: !0
            });
            var Ke = S(g);
            E(V.$$.fragment, Ke), se = b(Ke), M && M.l(Ke), Ke.forEach($), Ge.forEach($), F = b(ce), T = v(ce, "DIV", {
                class: !0
            });
            var Je = S(T);
            w = v(Je, "DIV", {
                class: !0
            });
            var Qe = S(w);
            E(W.$$.fragment, Qe), Be = b(Qe), B && B.l(Qe), Qe.forEach($), nl = b(Je), fe = v(Je, "DIV", {
                class: !0
            });
            var We = S(fe);
            E(ae.$$.fragment, We), il = b(We), N && N.l(We), We.forEach($), Je.forEach($), sl = b(ce), Ne = v(ce, "DIV", {
                class: !0
            });
            var _l = S(Ne);
            oe = v(_l, "DIV", {
                class: !0
            });
            var Xe = S(oe);
            E(ue.$$.fragment, Xe), rl = b(Xe), O && O.l(Xe), Xe.forEach($), _l.forEach($), ce.forEach($), fl = b(m), al = v(m, "HR", {}), ol = b(m), ne = v(m, "FIELDSET", {
                class: !0
            });
            var me = S(ne);
            be = v(me, "LEGEND", {
                class: !0,
                "data-svelte-h": !0
            }), tl(be) !== "svelte-16scikb" && (be.textContent = cl), ul = b(me), ge = v(me, "DIV", {
                class: !0
            });
            var Ye = S(ge);
            de = v(Ye, "DIV", {
                class: !0
            });
            var Ze = S(de);
            E(_e.$$.fragment, Ze), dl = b(Ze), P && P.l(Ze), Ze.forEach($), u = b(Ye), $e = v(Ye, "DIV", {
                class: !0
            });
            var xe = S($e);
            E(he.$$.fragment, xe), El = b(xe), A && A.l(xe), xe.forEach($), Ye.forEach($), Il = b(me), Oe = v(me, "DIV", {
                class: !0
            });
            var el = S(Oe);
            ve = v(el, "DIV", {
                class: !0
            });
            var ll = S(ve);
            E(ke.$$.fragment, ll), Dl = b(ll), y && y.l(ll), ll.forEach($), Cl = b(el), we = v(el, "DIV", {
                class: !0
            });
            var gl = S(we);
            E(qe.$$.fragment, gl), Fl = b(gl), z && z.l(gl), gl.forEach($), el.forEach($), Vl = b(me), Ee = v(me, "DIV", {
                class: !0
            });
            var pl = S(Ee);
            E(Ie.$$.fragment, pl), Sl = b(pl), H && H.l(pl), pl.forEach($), me.forEach($), jl = b(m), Tl = v(m, "HR", {}), Ll = b(m), re = v(m, "FIELDSET", {
                class: !0
            });
            var ye = S(re);
            ze = v(ye, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), tl(ze) !== "svelte-1jr3gnh" && (ze.innerHTML = Wl), Rl = b(ye), Pe = v(ye, "DIV", {
                class: !0
            });
            var bl = S(Pe);
            De = v(bl, "DIV", {
                class: !0
            });
            var $l = S(De);
            E(Ce.$$.fragment, $l), Ml = b($l), G && G.l($l), $l.forEach($), Bl = b(bl), Fe = v(bl, "DIV", {
                class: !0
            });
            var hl = S(Fe);
            E(Ve.$$.fragment, hl), Nl = b(hl), U && U.l(hl), hl.forEach($), bl.forEach($), Ol = b(ye), Ae = v(ye, "DIV", {
                class: !0
            });
            var vl = S(Ae);
            Se = v(vl, "DIV", {
                class: !0
            });
            var kl = S(Se);
            E(je.$$.fragment, kl), Pl = b(kl), K && K.l(kl), kl.forEach($), Al = b(vl), Te = v(vl, "DIV", {
                class: !0
            });
            var wl = S(Te);
            E(Le.$$.fragment, wl), yl = b(wl), J && J.l(wl), wl.forEach($), vl.forEach($), zl = b(ye), Re = v(ye, "DIV", {
                class: !0
            });
            var ql = S(Re);
            E(Me.$$.fragment, ql), Hl = b(ql), Q && Q.l(ql), ql.forEach($), ye.forEach($), Gl = b(m), He = v(m, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), tl(He) !== "svelte-f435eb" && (He.textContent = Xl), m.forEach($), this.h()
        },
        h() {
            k(_, "class", "subtitle svelte-f12kld"), k(r, "class", "toggleField svelte-f12kld"), k(g, "class", "toggleField svelte-f12kld"), k(i, "class", "row"), k(w, "class", "toggleField svelte-f12kld"), k(fe, "class", "toggleField svelte-f12kld"), k(T, "class", "row"), k(oe, "class", "toggleField svelte-f12kld"), k(Ne, "class", "row"), k(s, "class", "svelte-f12kld"), k(be, "class", "subtitle svelte-f12kld"), k(de, "class", "toggleField svelte-f12kld"), k($e, "class", "toggleField svelte-f12kld"), k(ge, "class", "row"), k(ve, "class", "toggleField svelte-f12kld"), k(we, "class", "toggleField svelte-f12kld"), k(Oe, "class", "row"), k(Ee, "class", "toggleField svelte-f12kld"), k(ne, "class", "svelte-f12kld"), k(ze, "class", "row"), k(De, "class", "toggleField svelte-f12kld"), k(Fe, "class", "toggleField svelte-f12kld"), k(Pe, "class", "row"), k(Se, "class", "toggleField svelte-f12kld"), k(Te, "class", "toggleField svelte-f12kld"), k(Ae, "class", "row"), k(Re, "class", "toggleField svelte-f12kld"), k(re, "class", "svelte-f12kld"), k(He, "class", "btn-primary"), k(l, "class", "modal-form svelte-f12kld")
        },
        m(f, m) {
            pe(f, l, m), x && x.m(l, null), d(l, n), d(l, s), d(s, _), d(s, e), d(s, i), d(i, r), I(L, r, null), d(r, C), R && R.m(r, null), d(i, j), d(i, g), I(V, g, null), d(g, se), M && M.m(g, null), d(s, F), d(s, T), d(T, w), I(W, w, null), d(w, Be), B && B.m(w, null), d(T, nl), d(T, fe), I(ae, fe, null), d(fe, il), N && N.m(fe, null), d(s, sl), d(s, Ne), d(Ne, oe), I(ue, oe, null), d(oe, rl), O && O.m(oe, null), d(l, fl), d(l, al), d(l, ol), d(l, ne), d(ne, be), d(ne, ul), d(ne, ge), d(ge, de), I(_e, de, null), d(de, dl), P && P.m(de, null), d(ge, u), d(ge, $e), I(he, $e, null), d($e, El), A && A.m($e, null), d(ne, Il), d(ne, Oe), d(Oe, ve), I(ke, ve, null), d(ve, Dl), y && y.m(ve, null), d(Oe, Cl), d(Oe, we), I(qe, we, null), d(we, Fl), z && z.m(we, null), d(ne, Vl), d(ne, Ee), I(Ie, Ee, null), d(Ee, Sl), H && H.m(Ee, null), d(l, jl), d(l, Tl), d(l, Ll), d(l, re), d(re, ze), d(re, Rl), d(re, Pe), d(Pe, De), I(Ce, De, null), d(De, Ml), G && G.m(De, null), d(Pe, Bl), d(Pe, Fe), I(Ve, Fe, null), d(Fe, Nl), U && U.m(Fe, null), d(re, Ol), d(re, Ae), d(Ae, Se), I(je, Se, null), d(Se, Pl), K && K.m(Se, null), d(Ae, Al), d(Ae, Te), I(Le, Te, null), d(Te, yl), J && J.m(Te, null), d(re, zl), d(re, Re), I(Me, Re, null), d(Re, Hl), Q && Q.m(Re, null), d(l, Gl), d(l, He), ml = !0, Ul || (Yl = Ql(l, "submit", qt(t[36])), Ul = !0)
        },
        p(f, m) {
            f[2] ? x ? x.p(f, m) : (x = lt(f), x.c(), x.m(l, n)) : x && (x.d(1), x = null);
            const ce = {};
            m[0] & 1 && (ce.checked = "email" in f[0]), L.$set(ce), "email" in f[0] ? R ? (R.p(f, m), m[0] & 1 && a(R, 1)) : (R = tt(f), R.c(), a(R, 1), R.m(r, null)) : R && (ee(), c(R, 1, 1, () => {
                R = null
            }), le());
            const Ge = {};
            m[0] & 1 && (Ge.checked = "job_title" in f[0]), V.$set(Ge), "job_title" in f[0] ? M ? (M.p(f, m), m[0] & 1 && a(M, 1)) : (M = nt(f), M.c(), a(M, 1), M.m(g, null)) : M && (ee(), c(M, 1, 1, () => {
                M = null
            }), le());
            const Ue = {};
            m[0] & 1 && (Ue.checked = "phone_number" in f[0]), W.$set(Ue), "phone_number" in f[0] ? B ? (B.p(f, m), m[0] & 1 && a(B, 1)) : (B = it(f), B.c(), a(B, 1), B.m(w, null)) : B && (ee(), c(B, 1, 1, () => {
                B = null
            }), le());
            const Ke = {};
            m[0] & 1 && (Ke.checked = "main_contact_name" in f[0]), ae.$set(Ke), "main_contact_name" in f[0] ? N ? (N.p(f, m), m[0] & 1 && a(N, 1)) : (N = st(f), N.c(), a(N, 1), N.m(fe, null)) : N && (ee(), c(N, 1, 1, () => {
                N = null
            }), le());
            const Je = {};
            m[0] & 1 && (Je.checked = "status" in f[0]), ue.$set(Je), "status" in f[0] ? O ? (O.p(f, m), m[0] & 1 && a(O, 1)) : (O = rt(f), O.c(), a(O, 1), O.m(oe, null)) : O && (ee(), c(O, 1, 1, () => {
                O = null
            }), le());
            const Qe = {};
            m[0] & 1 && (Qe.checked = "address" in f[0]), _e.$set(Qe), "address" in f[0] ? P ? (P.p(f, m), m[0] & 1 && a(P, 1)) : (P = ft(f), P.c(), a(P, 1), P.m(de, null)) : P && (ee(), c(P, 1, 1, () => {
                P = null
            }), le());
            const We = {};
            m[0] & 1 && (We.checked = "address_line_1" in f[0]), he.$set(We), "address_line_1" in f[0] ? A ? (A.p(f, m), m[0] & 1 && a(A, 1)) : (A = at(f), A.c(), a(A, 1), A.m($e, null)) : A && (ee(), c(A, 1, 1, () => {
                A = null
            }), le());
            const _l = {};
            m[0] & 1 && (_l.checked = "town_or_city" in f[0]), ke.$set(_l), "town_or_city" in f[0] ? y ? (y.p(f, m), m[0] & 1 && a(y, 1)) : (y = ot(f), y.c(), a(y, 1), y.m(ve, null)) : y && (ee(), c(y, 1, 1, () => {
                y = null
            }), le());
            const Xe = {};
            m[0] & 1 && (Xe.checked = "postcode" in f[0]), qe.$set(Xe), "postcode" in f[0] ? z ? (z.p(f, m), m[0] & 1 && a(z, 1)) : (z = ut(f), z.c(), a(z, 1), z.m(we, null)) : z && (ee(), c(z, 1, 1, () => {
                z = null
            }), le());
            const me = {};
            m[0] & 1 && (me.checked = "county" in f[0]), Ie.$set(me), "county" in f[0] ? H ? (H.p(f, m), m[0] & 1 && a(H, 1)) : (H = dt(f), H.c(), a(H, 1), H.m(Ee, null)) : H && (ee(), c(H, 1, 1, () => {
                H = null
            }), le());
            const Ye = {};
            m[0] & 1 && (Ye.checked = "billing_address" in f[0]), Ce.$set(Ye), "billing_address" in f[0] ? G ? (G.p(f, m), m[0] & 1 && a(G, 1)) : (G = _t(f), G.c(), a(G, 1), G.m(De, null)) : G && (ee(), c(G, 1, 1, () => {
                G = null
            }), le());
            const Ze = {};
            m[0] & 1 && (Ze.checked = "billing_address_line_1" in f[0]), Ve.$set(Ze), "billing_address_line_1" in f[0] ? U ? (U.p(f, m), m[0] & 1 && a(U, 1)) : (U = ct(f), U.c(), a(U, 1), U.m(Fe, null)) : U && (ee(), c(U, 1, 1, () => {
                U = null
            }), le());
            const xe = {};
            m[0] & 1 && (xe.checked = "billing_town_or_city" in f[0]), je.$set(xe), "billing_town_or_city" in f[0] ? K ? (K.p(f, m), m[0] & 1 && a(K, 1)) : (K = mt(f), K.c(), a(K, 1), K.m(Se, null)) : K && (ee(), c(K, 1, 1, () => {
                K = null
            }), le());
            const el = {};
            m[0] & 1 && (el.checked = "billing_postcode" in f[0]), Le.$set(el), "billing_postcode" in f[0] ? J ? (J.p(f, m), m[0] & 1 && a(J, 1)) : (J = gt(f), J.c(), a(J, 1), J.m(Te, null)) : J && (ee(), c(J, 1, 1, () => {
                J = null
            }), le());
            const ll = {};
            m[0] & 1 && (ll.checked = "billing_county" in f[0]), Me.$set(ll), "billing_county" in f[0] ? Q ? (Q.p(f, m), m[0] & 1 && a(Q, 1)) : (Q = pt(f), Q.c(), a(Q, 1), Q.m(Re, null)) : Q && (ee(), c(Q, 1, 1, () => {
                Q = null
            }), le())
        },
        i(f) {
            ml || (a(L.$$.fragment, f), a(R), a(V.$$.fragment, f), a(M), a(W.$$.fragment, f), a(B), a(ae.$$.fragment, f), a(N), a(ue.$$.fragment, f), a(O), a(_e.$$.fragment, f), a(P), a(he.$$.fragment, f), a(A), a(ke.$$.fragment, f), a(y), a(qe.$$.fragment, f), a(z), a(Ie.$$.fragment, f), a(H), a(Ce.$$.fragment, f), a(G), a(Ve.$$.fragment, f), a(U), a(je.$$.fragment, f), a(K), a(Le.$$.fragment, f), a(J), a(Me.$$.fragment, f), a(Q), ml = !0)
        },
        o(f) {
            c(L.$$.fragment, f), c(R), c(V.$$.fragment, f), c(M), c(W.$$.fragment, f), c(B), c(ae.$$.fragment, f), c(N), c(ue.$$.fragment, f), c(O), c(_e.$$.fragment, f), c(P), c(he.$$.fragment, f), c(A), c(ke.$$.fragment, f), c(y), c(qe.$$.fragment, f), c(z), c(Ie.$$.fragment, f), c(H), c(Ce.$$.fragment, f), c(G), c(Ve.$$.fragment, f), c(U), c(je.$$.fragment, f), c(K), c(Le.$$.fragment, f), c(J), c(Me.$$.fragment, f), c(Q), ml = !1
        },
        d(f) {
            f && $(l), x && x.d(), D(L), R && R.d(), D(V), M && M.d(), D(W), B && B.d(), D(ae), N && N.d(), D(ue), O && O.d(), D(_e), P && P.d(), D(he), A && A.d(), D(ke), y && y.d(), D(qe), z && z.d(), D(Ie), H && H.d(), D(Ce), G && G.d(), D(Ve), U && U.d(), D(je), K && K.d(), D(Le), J && J.d(), D(Me), Q && Q.d(), Ul = !1, Yl()
        }
    }
}

function Nt(t, l, n) {
    let {
        showRequired: s = !0
    } = l, {
        error: _ = null
    } = l, {
        errors: o = {}
    } = l, {
        fields: e
    } = l;
    const i = Et();

    function r(u) {
        console.log({
            fields: e
        }), u in e ? (console.log("if"), delete e[u], console.log({
            fields: e
        })) : (console.log("else"), n(0, e[u] = "", e), console.log({
            fields: e
        })), n(0, e)
    }
    const L = u => r("email");

    function C(u) {
        t.$$.not_equal(e.email, u) && (e.email = u, n(0, e))
    }
    const j = u => r("job_title");

    function g(u) {
        t.$$.not_equal(e.job_title, u) && (e.job_title = u, n(0, e))
    }
    const V = u => r("phone_number");

    function se(u) {
        t.$$.not_equal(e.phone_number, u) && (e.phone_number = u, n(0, e))
    }
    const F = u => r("main_contact_name");

    function T(u) {
        t.$$.not_equal(e.main_contact_name, u) && (e.main_contact_name = u, n(0, e))
    }
    const w = u => r("status");

    function W(u) {
        t.$$.not_equal(e.status, u) && (e.status = u, n(0, e))
    }
    const Be = u => r("address");

    function nl(u) {
        t.$$.not_equal(e.address, u) && (e.address = u, n(0, e))
    }
    const fe = u => r("address_line_1");

    function ae(u) {
        t.$$.not_equal(e.address_line_1, u) && (e.address_line_1 = u, n(0, e))
    }
    const il = u => r("town_or_city");

    function sl(u) {
        t.$$.not_equal(e.town_or_city, u) && (e.town_or_city = u, n(0, e))
    }
    const Ne = u => r("postcode");

    function oe(u) {
        t.$$.not_equal(e.postcode, u) && (e.postcode = u, n(0, e))
    }
    const ue = u => r("county");

    function rl(u) {
        t.$$.not_equal(e.county, u) && (e.county = u, n(0, e))
    }
    const fl = u => r("billing_address");

    function al(u) {
        t.$$.not_equal(e.billing_address, u) && (e.billing_address = u, n(0, e))
    }
    const ol = u => r("billing_address_line_1");

    function ne(u) {
        t.$$.not_equal(e.billing_address_line_1, u) && (e.billing_address_line_1 = u, n(0, e))
    }
    const be = u => r("billing_town_or_city");

    function cl(u) {
        t.$$.not_equal(e.billing_town_or_city, u) && (e.billing_town_or_city = u, n(0, e))
    }
    const ul = u => r("billing_postcode");

    function ge(u) {
        t.$$.not_equal(e.billing_postcode, u) && (e.billing_postcode = u, n(0, e))
    }
    const de = u => r("billing_county");

    function _e(u) {
        t.$$.not_equal(e.billing_county, u) && (e.billing_county = u, n(0, e))
    }
    const dl = () => i("submit");
    return t.$$set = u => {
        "showRequired" in u && n(1, s = u.showRequired), "error" in u && n(2, _ = u.error), "errors" in u && n(3, o = u.errors), "fields" in u && n(0, e = u.fields)
    }, [e, s, _, o, i, r, L, C, j, g, V, se, F, T, w, W, Be, nl, fe, ae, il, sl, Ne, oe, ue, rl, fl, al, ol, ne, be, cl, ul, ge, de, _e, dl]
}
class Ot extends kt {
    constructor(l) {
        super(), wt(this, l, Nt, Bt, ht, {
            showRequired: 1,
            error: 2,
            errors: 3,
            fields: 0
        }, null, [-1, -1])
    }
}

function bt(t) {
    let l, n;
    return l = new Vt({
        props: {
            $$slots: {
                default: [Pt]
            },
            $$scope: {
                ctx: t
            }
        }
    }), {
        c() {
            q(l.$$.fragment)
        },
        l(s) {
            E(l.$$.fragment, s)
        },
        m(s, _) {
            I(l, s, _), n = !0
        },
        p(s, _) {
            const o = {};
            _ & 16414 && (o.$$scope = {
                dirty: _,
                ctx: s
            }), l.$set(o)
        },
        i(s) {
            n || (a(l.$$.fragment, s), n = !0)
        },
        o(s) {
            c(l.$$.fragment, s), n = !1
        },
        d(s) {
            D(l, s)
        }
    }
}

function Pt(t) {
    let l, n, s = "Mass Edit",
        _, o, e = "Close",
        i, r, L, C, j, g;

    function V(F) {
        t[8](F)
    }
    let se = {
        errors: t[3],
        error: t[4]
    };
    return t[1] !== void 0 && (se.fields = t[1]), r = new Ot({
        props: se
    }), X.push(() => Z(r, "fields", V)), r.$on("submit", t[5]), {
        c() {
            l = h("div"), n = h("h3"), n.textContent = s, _ = p(), o = h("btn"), o.textContent = e, i = p(), q(r.$$.fragment), this.h()
        },
        l(F) {
            l = v(F, "DIV", {
                style: !0
            });
            var T = S(l);
            n = v(T, "H3", {
                class: !0,
                "data-svelte-h": !0
            }), tl(n) !== "svelte-1t4jl4z" && (n.textContent = s), _ = b(T), o = v(T, "BTN", {
                class: !0,
                "data-svelte-h": !0
            }), tl(o) !== "svelte-xmkxh2" && (o.textContent = e), T.forEach($), i = b(F), E(r.$$.fragment, F), this.h()
        },
        h() {
            k(n, "class", "title"), k(o, "class", "btn-primary"), xl(l, "display", "flex"), xl(l, "justify-content", "space-between")
        },
        m(F, T) {
            pe(F, l, T), d(l, n), d(l, _), d(l, o), pe(F, i, T), I(r, F, T), C = !0, j || (g = Ql(o, "click", t[7]), j = !0)
        },
        p(F, T) {
            const w = {};
            T & 8 && (w.errors = F[3]), T & 16 && (w.error = F[4]), !L && T & 2 && (L = !0, w.fields = F[1], Y(() => L = !1)), r.$set(w)
        },
        i(F) {
            C || (a(r.$$.fragment, F), C = !0)
        },
        o(F) {
            c(r.$$.fragment, F), C = !1
        },
        d(F) {
            F && ($(l), $(i)), D(r, F), j = !1, g()
        }
    }
}

function $t(t) {
    var C;
    let l, n = ((C = t[0].selected) == null ? void 0 : C.size) + "",
        s, _, o, e, i = "Mass Edit",
        r, L;
    return {
        c() {
            l = h("p"), s = Kl(n), _ = Kl(" Record(s) Selected"), o = p(), e = h("button"), e.textContent = i, this.h()
        },
        l(j) {
            l = v(j, "P", {});
            var g = S(l);
            s = Jl(g, n), _ = Jl(g, " Record(s) Selected"), g.forEach($), o = b(j), e = v(j, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), tl(e) !== "svelte-1nh1gh3" && (e.textContent = i), this.h()
        },
        h() {
            k(e, "class", "btn-primary")
        },
        m(j, g) {
            pe(j, l, g), d(l, s), d(l, _), pe(j, o, g), pe(j, e, g), r || (L = Ql(e, "click", t[10]), r = !0)
        },
        p(j, g) {
            var V;
            g & 1 && n !== (n = ((V = j[0].selected) == null ? void 0 : V.size) + "") && vt(s, n)
        },
        d(j) {
            j && ($(l), $(o), $(e)), r = !1, L()
        }
    }
}

function At(t) {
    var j;
    let l, n, s, _, o, e, i = t[2] && bt(t);

    function r(g) {
        t[9](g)
    }
    let L = {
        canExpandRows: !1,
        hasOptions: !1
    };
    t[0] !== void 0 && (L.builder = t[0]), n = new It({
        props: L
    }), X.push(() => Z(n, "builder", r));
    let C = t[0].selected !== void 0 && ((j = t[0].selected) == null ? void 0 : j.size) > 0 && $t(t);
    return {
        c() {
            i && i.c(), l = p(), q(n.$$.fragment), _ = p(), C && C.c(), o = Zl()
        },
        l(g) {
            i && i.l(g), l = b(g), E(n.$$.fragment, g), _ = b(g), C && C.l(g), o = Zl()
        },
        m(g, V) {
            i && i.m(g, V), pe(g, l, V), I(n, g, V), pe(g, _, V), C && C.m(g, V), pe(g, o, V), e = !0
        },
        p(g, [V]) {
            var F;
            g[2] ? i ? (i.p(g, V), V & 4 && a(i, 1)) : (i = bt(g), i.c(), a(i, 1), i.m(l.parentNode, l)) : i && (ee(), c(i, 1, 1, () => {
                i = null
            }), le());
            const se = {};
            !s && V & 1 && (s = !0, se.builder = g[0], Y(() => s = !1)), n.$set(se), g[0].selected !== void 0 && ((F = g[0].selected) == null ? void 0 : F.size) > 0 ? C ? C.p(g, V) : (C = $t(g), C.c(), C.m(o.parentNode, o)) : C && (C.d(1), C = null)
        },
        i(g) {
            e || (a(i), a(n.$$.fragment, g), e = !0)
        },
        o(g) {
            c(i), c(n.$$.fragment, g), e = !1
        },
        d(g) {
            g && ($(l), $(_), $(o)), i && i.d(g), D(n, g), C && C.d(g)
        }
    }
}

function yt(t, l, n) {
    let {
        data: s
    } = l, _ = {}, o = !1, e = [], i = Rt(), r = new Dt({
        url: Ct("/v1/companies", {}),
        columns: [...Ft, {
            id: "edit",
            label: "Edit",
            link: w => et("/companies/{companyId}/edit", {
                companyId: w.id
            }),
            formatter: () => '<span class="btn">Edit</span>',
            searchable: !1,
            sortable: !1
        }],
        additionalFetchOptions: {
            credentials: "include"
        },
        rowLink: w => et("/companies/{companyId}", {
            companyId: w.id
        }),
        selected: new Map,
        limitOptions: [15, 25, 50, 100],
        limit: i
    });

    function L() {
        var W;
        let w = (W = r.selected) == null ? void 0 : W.keys();
        if (w === void 0) return e = [], [];
        e = [...w]
    }
    const C = async () => {
        const w = "company:mass-edit";
        jt(w), n(4, g = null), n(3, j = {}), L(), (async () => {
            var Be;
            console.log({
                fields: _
            });
            const W = await Lt.POST("/v1/companies/mass-edit", {
                body: {
                    fields: _,
                    records: e
                }
            });
            W.error ? (n(4, g = W.error.message), "errors" in W.error && n(3, j = (Be = W.error) == null ? void 0 : Be.errors)) : (n(2, o = !1), r.buildData())
        })().finally(() => Tt(w))
    };
    let j, g = null;
    const V = () => n(2, o = !1);

    function se(w) {
        _ = w, n(1, _)
    }

    function F(w) {
        r = w, n(0, r)
    }
    const T = () => n(2, o = !0);
    return t.$$set = w => {
        "data" in w && n(6, s = w.data)
    }, t.$$.update = () => {
        t.$$.dirty & 1 && Mt(r.paginator.limit)
    }, [r, _, o, j, g, C, s, V, se, F, T]
}
class ln extends kt {
    constructor(l) {
        super(), wt(this, l, yt, At, ht, {
            data: 6
        })
    }
}
export {
    ln as component
};