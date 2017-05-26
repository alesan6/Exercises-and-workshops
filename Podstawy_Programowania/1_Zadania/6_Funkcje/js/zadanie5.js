function max(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    }
    return c;
}
console.log(max(23, 5, 38));

// lub dłużej:
//var maxValue = 0;
//if ((a > b) && (a > c)) {
    //maxValue = a;
//} else if (b > c) {
    //maxValue = b;
//} else {
    //maxValue = c;
//}
//return maxValue;
//console.log(maxValue);
