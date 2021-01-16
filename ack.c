#include<stdio.h>
#include<stdlib.h>
#include<string.h>

// The ackerman function in C.

int ack(int m,int n)
{
        // printf("m:%i__n:%i\n",m,n);
        if(m == 0)
        {
                return n+1;
        }
        if(n == 0)
        {
                return ack(m-1,1);
        }
        return ack(m-1,ack(m,n-1));
}

int main(int argc, char** argv)
{
        printf("ack(%s,%s)=%i\n",argv[1],argv[2],ack(atoi(argv[1]),atoi(argv[2])));
        return 0;
}
