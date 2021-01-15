var s = 0;
var b = 0;

for (var i = 1; i < 101; i++) {
    s += i * i;
    b += i;
}
console.log(b * b - s);