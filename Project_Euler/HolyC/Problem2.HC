
U64 EF()
{
 U64 a=0,b=1,sum=0, max = 4000000;
 while(a<max||b<max){
  a += b;
  if(a%2==0) sum += a;
  b += a;
  if(b%2==0) sum += b;
 }
 return sum;
}

EF;