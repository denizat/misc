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

var sum = 2;

for(var i = 3; i < 2000000;) {
    if(isPrime(i)) {
        sum += i;
    }
    i += 2;
}
console.log(sum);