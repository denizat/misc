function isPalindrome(n) {
    for (var i = 0; i < (Math.floor(n.length / 2)); ++i) {
        if (n[i] !== n[n.length - i - 1]) {
            return false;
        }
    }
    return true;
}

var prod = 0;
var out = 0;
for (var i = 999; i > 99; i--) {
    for (var k = 999; k > 99; k--) {
        prod = i * k;
        if (prod > out && isPalindrome(prod.toString())) {
            out = prod;
        }

    }
}
console.log(out);