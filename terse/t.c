#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>

int go = 1;

void
spam()
{
	while (1) {
		while (go) {
			printf("WE ARE GOING\n");
			sleep(1);
		}
		sleep(1);
	}
}

void
stop()
{
	while (1) {
		if (getchar() == 'q') {
			go = !go;
			printf("We Have Stopped");
		}
	}
}

int
main()
{
	pthread_t t1, t2;
	pthread_create(&t1, NULL, spam, NULL);
	pthread_create(&t2, NULL, stop, NULL);

	pthread_join(t2, NULL);

	printf("Its over\n");
	return 0;
}

