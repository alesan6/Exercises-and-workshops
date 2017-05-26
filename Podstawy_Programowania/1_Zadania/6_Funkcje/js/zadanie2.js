function power(a, n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * a;
    }
    return result;
}
