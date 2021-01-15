#include <iostream>
#include "lib.h"

int main()
{

	long a{1}, b{2};
	unsigned long long counter{0};
	long max{4000000};
	while(a < max && b < max)
	{
		if(a % 2 == 0)
		{
			counter = counter + a;
		}
		if(b % 2 == 0)
		{
			counter = counter + b;
		}
		a = a + b;
		b = b + a;
	}
	std::cout << counter << std::endl;
	return 0;
}
