U64 m(U64 n)
{
 U64 sum=0;
 n -= 1;
 for(;n>0;n--){
  if(n%3==0||n%5==0) sum += n;
 }
 return sum;
}

m(1000);