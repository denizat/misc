/* #include <stdio.h> */
/* #define clear() printf("\033[H\033[J") */
/* #define gotoxy(x,y) printf("\033[%d;%dH", (y), (x)) */
/* int main(void) */
/* { */
/*     int number; */
/*     clear(); */
/*     printf( */
/*         "Enter your number in the box below\n\n" */
/*         "+-----------------+\n\n" */
/*         "|                 |\n\n" */
/*         "+-----------------+\n\n" */
/*     ); */
/*     gotoxy(2, 3); */
/*     printf("\n\n\n\n\n\n"); */
/*     scanf("%d", &number); */
/*     printf("%d\n\n",number); */
/*     return 0; */
/* } */

/* int */
/* main() */
/* { */
/* 	system("stty raw"); */
/* 	while(1) { */
/* 		if (getchar() == '\033') { // if the first value is esc */
/* 		    getchar(); // skip the [ */
/* 		    switch(getchar()) { // the real value */
/* 			case 'A': */
/* 				printf("UP\n\n\r"); */
/* 			    // code for arrow up */
/* 			    break; */
/* 			case 'B': */
/* 				printf("DOWN\n\n"); */
/* 			    // code for arrow down */
/* 			    break; */
/* 			case 'C': */
/* 				printf("RIGHT\n\n"); */
/* 			    // code for arrow right */
/* 			    break; */
/* 			case 'D': */
/* 				printf("LEFT\n\n"); */
/* 			    // code for arrow left */
/* 			    break; */
/* 		    } */
/* 		} */
/* 	} */
/* 	return 0; */
/* } */


#include <termios.h>
#include <stdio.h>

static struct termios old, current;

/* Initialize new terminal i/o settings */
void initTermios(int echo)
{
  tcgetattr(0, &old); /* grab old terminal i/o settings */
  current = old; /* make new settings same as old settings */
  current.c_lflag &= ~ICANON; /* disable buffered i/o */
  if (echo) {
      current.c_lflag |= ECHO; /* set echo mode */
  } else {
      current.c_lflag &= ~ECHO; /* set no echo mode */
  }
  tcsetattr(0, TCSANOW, &current); /* use these new terminal i/o settings now */
}

/* Restore old terminal i/o settings */
void resetTermios(void)
{
  tcsetattr(0, TCSANOW, &old);
}

/* Read 1 character - echo defines echo mode */
char getch_(int echo)
{
  char ch;
  initTermios(echo);
  ch = getchar();
  resetTermios();
  return ch;
}

/* Read 1 character without echo */
char getch(void)
{
  return getch_(0);
}

/* Read 1 character with echo */
char getche(void)
{
  return getch_(1);
}

/* Let's test it out */
int main(void) {
  char c;
  printf("(getche example) please type a letter: ");
  c = getche();
  printf("\nYou typed: %c\n", c);
  printf("(getch example) please type a letter...");
  c = getch();
  printf("\nYou typed: %c\n", c);
  c = getch();
  printf("\nYou typed: %c\n", c);
  return 0;
}

