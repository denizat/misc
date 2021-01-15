var max, sum;
max = 1000;
sum = 0;
for (var i = 0; i < max; i++){
    if (i%3 == 0){
	sum = sum + i
    }
    if (i%5 == 0){
	sum = sum + i
    }
    if (i%3 == 0 && i%5==0){
	sum = sum - i
    }
}
console.log(sum)
