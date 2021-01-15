function divFrom(n) {
    for(var i = 2; i < 20; i++) {
        if(n % i !== 0) {
            return false;
        }
    }
    return true; 
}
var i = 1;
while(!divFrom(i)) {
    i+=1;
}
console.log(i);