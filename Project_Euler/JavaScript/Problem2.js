var a=1, b=1, sum=0;
while(a + b < 4000000){
    a = a + b
    if(a % 2 == 0){
	sum += a
    }
    b = a + b
    if(b % 2 == 0){
	sum += b
    }
}
console.log(sum)
