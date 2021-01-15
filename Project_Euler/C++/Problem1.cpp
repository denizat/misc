#include  <iostream>

int main()
{
	int input{1000};
	int counter{0};
	for(int i{0}; i < input; i++)
	{
		if(i % 3 == 0 || i % 5 == 0)
		{
			counter = counter + i;
		}
	}
	std::cout << counter << std::endl;
	return 0;

}
