#include "Factorial.h"
unsigned int root()
{
    return factorial(20);
}
// This is the exponentiation function
// It takes in a double b and an integer exponent (try to add double in the future, its doable!)
// It returns a double.
double exp(double b, int x)
{  
    bool neg{false};
    if(x < 0)
    {
        neg = true;
        x *= -1;   
    }
    x -=1;
    double h{b};
    while(x != 0)
    {
        b *=h;
        x -= 1;
    }
    if(neg){return 1/b;}
    return b;
}