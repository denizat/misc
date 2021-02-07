U8* PI(U64 n)
{
 U8 ar[6];
 U64 i;
 for(i=1;i<6;i++){/**/}
}

U8 isP(U64 n)
{

}


U64 LPP()
{
 U64 max=0,i=100,k=100;
 for(i=100;i<1000;i++){
  for(k=i;k<1000;k++){
    if(isP(i*k)&&i*k>max) max = i*k;
  }
 }
 return max;
}