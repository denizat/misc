#include <stdio.h>

int d(int n)
{
	int sum = 0;
	if(n % 2)
	{

		for(int i = 1; i < n;i+=2)
		{
			if(n%i == 0){sum += i;}
		}
	}
	else
	{
		for(int i = 1; i < n; i++)
		{
			if(n%i == 0){sum += i;}
		}
	}
	return sum;
}
int main()
{
	int max = 10000;
	int sum = 0;
	int temp = 0;
	for(int i = 1; i < max; i++)
	{
		temp = d(i);
		for(int j = i+1; j < max; j++)
		{
			if(j==temp && d(j)==i){sum += i + j; i = j;break;}
		}
	}
	printf("%i\n",sum);
}
