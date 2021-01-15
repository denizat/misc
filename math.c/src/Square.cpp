// This uses the babylonian method
double sqrt(double x = 0, int epochs = 100)
{
    // Need to add errors
    if(x <= 0)
    {
        return 0;
    }
    // Uses the Deniz method for the inital guess
    double out{1};
    while(out * out < x)
    {
        out += 1;
    }
    while(epochs > 0)
    {
        out = 0.5*(out+(x/out));
        epochs -= 1;
    }
    return out;
}

// This uses the Deniz method, this is useful when finding primes
int intSqrt(int x)
{   
    if(x < 1)
    {
        // Todo: throw error if negative number
        return 0;
    }
    int i{1};
    while(i * i < x)
    {
        i += 1;
    }
    return i;
}