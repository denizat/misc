#include <stdio.h>

int* ab(int n)
{
	int out[2] = {0,0};
	for(int i = 1; i < n; i++)
	{
		if(n%i==0){out[0]+=i;}
	}
	return out;
}

int main()
{
	int max = 2813;
	int sum = (max*(max + 1))/2;
	int *temp;
	for(int i = 1; i < max; i++)
	{
		temp = *ab(i)[0];
		for(int k = i+1; k < max; k++)
		{
			sum -= temp+ab(k);
		}
	}
	printf("%i\n",sum);
}
