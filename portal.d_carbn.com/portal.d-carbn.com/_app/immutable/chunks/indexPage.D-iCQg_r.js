function i() {
    let t = Number(localStorage.getItem("paginationLimit"));
    return t > 0 ? t : 15
}

function n(t) {
    localStorage.setItem("paginationLimit", t.toString())
}
export {
    i as g, n as s
};