function tri(n) {
    return (n * (n + 1)) / 2;
}

function divs(n) {
    var out = 2;
    var sqrtn = Math.sqrt(n)
    for (var i = 2; i < sqrtn; i++) {
        if (n % i === 0) {
            out += 2;
        }
    }
    return out;
}

var i = 0;
while (divs(tri(i)) < 500) {
    i += 1;
}
console.log(tri(i));