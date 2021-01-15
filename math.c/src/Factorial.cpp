#ifndef MY_CLASS_H // include guard
#define MY_CLASS_H

unsigned long long factorial(unsigned long long x)
{
    if(x == 0)
    {
        return 1;
    }
    for(unsigned long long i = x - 1; i > 0; i--)
    {
        x *=i;
    }
    return x;
}

#endif