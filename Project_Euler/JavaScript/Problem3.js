function isPrime(n) {
    if (n % 2 === 0) {
        return false;
    }
    var sqrtn = Math.sqrt(n);
    for (var i = 3; i < sqrtn + 1;) {
        if (n % i === 0) {
            return false;
        }
        i += 2;
    }
    return true;
}

var sqrtNum = Math.sqrt(600851475143);
var out = 0;
for (var i = 3; i < sqrtNum; i++) {
    if (600851475143 % i === 0 && isPrime(i)) {
        out = i;
    }
}
console.log(out);