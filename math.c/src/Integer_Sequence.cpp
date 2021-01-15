// All of the functions return the nth number, so fib(0) will return the first Fibonacci number.

// Returns the nth Fibonacci number, very scuffed, pls fix, I feel really dumb.
unsigned long long fib(unsigned long long n)
{
    unsigned long long a{0}, b{1};
    for (unsigned long long i = 0; i < n; i += 2)
    {
        a += b;
        b += a;
    }
    if (n % 2 == 0)
    {
        return a;
    }
    return b-a;
}

// Uses a recursive algorithim, only int because cant go too deep recuresively, much slower than fib().
int recursiveFib(int n)
{
    if (n == 1)
    {
        return 1;
    }
    if (n == 0)
    {
        return 0;
    }
    return recursiveFib(n - 1) + recursiveFib(n - 2);
}

// Same algorithim as fib()
unsigned long long lucas(unsigned long long n)
{
    unsigned long long a{2}, b{1};
    for (unsigned long long i = 0; i < n; i += 2)
    {
        a += b;
        b += a;
    }
    if (n % 2 == 0)
    {
        return a;
    }
    return b-a;
}

// Same algorithim as recursiveFib()
int recursiveLucas(int n)
{
    if (n == 1)
    {
        return 1;
    }
    if (n == 0)
    {
        return 2;
    }
    return recursiveLucas(n - 1) + recursiveLucas(n - 2);
}
/*
unsigned long long abundantNums(unsigned long long n)
{
    if(sum())
}
*/