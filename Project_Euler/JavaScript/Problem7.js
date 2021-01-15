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
var count = 1;
var i = 1;
while(count < 10001) {
    i +=2;
    if(isPrime(i)) {
        count += 1;
        //console.log(i);
    }
}
console.log(i)