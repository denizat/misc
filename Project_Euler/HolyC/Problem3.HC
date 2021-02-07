U64 LPF(U64 n)
{
 U64 i=1;
 while(i<n)
 {
  if(n%i==0) n /= i;
  i++;
 }
 return n;
}

LPF(600851475143);