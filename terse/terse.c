// Useful links
// ANSI colors: https://www.theurbanpenguin.com/4184-2/
#include <stdlib.h>
#include <stdio.h>
typedef struct {
	int x;
	int y;
} Coordinate;
typedef struct {
	char c;
	char* color;
} Point;
typedef Point* Row;
typedef struct {
	int xlen;
	int ylen;
	Coordinate cursor;
	Row* rows;
} Window;

int renderWithFrame = 0;


Window
makeWindow(int xlen, int ylen)
{
	Window win;
	win.xlen = xlen;
	win.ylen = ylen;
	win.cursor = (Coordinate){.x = xlen/2, .y = ylen/2};
	win.rows = (Row *)malloc(sizeof(Row *)*ylen);
	for (int i = 0; i < ylen; i++)
		win.rows[i] = (Row)malloc(sizeof(Point)*xlen);
	return win;
}

void
freeWindow(Window *win)
{
	for (int i = 0; i < win->ylen; i++)
		free(win->rows[i]);
	free(win->rows);
}

void
flushWindow(Window *win, char c, char* color)
{
	if (color == "red")
		color = "\033[0;31m";
	else if (color == "")
		color = "";
	for (int i = 0; i < win->ylen; i++) {
		for (int k = 0; k < win->xlen; k++) {
			win->rows[i][k].c = c;
			win->rows[i][k].color = color;
		}
	}
}

void
render(Window win)
{
	printf("\e[1;1H\e[2J");
	if (renderWithFrame) {
		for (int i = 0; i < win.ylen + 2; i++, putchar('-'));
		putchar('\n');
	}
	for (int i = 0; i < win.ylen; i++) {
		if (renderWithFrame) {
			putchar('|');
		}
		for (int k = 0; k < win.xlen; k++) {
			if (!(win.rows[i][k].color == ""))
				printf(win.rows[i][k].color);
			putchar(win.rows[i][k].c);
			printf("\033[0;37m");
		}
		if (renderWithFrame) {
			putchar('|');
		}
		putchar('\n');
	}
	if (renderWithFrame) {
		for (int i = 0; i < win.ylen + 2; i++, putchar('-'));
		putchar('\n');
	}
}

void
renderWithCursor(Window *win)
{
	char tmp = win->rows[win->cursor.y][win->cursor.x].c;
	win->rows[win->cursor.y][win->cursor.x].c = '#';
	render(*win);
	win->rows[win->cursor.y][win->cursor.x].c = tmp;
}

/* void */
/* borderRender(Window win) */
/* { */
/* 	for (int i = 0; i < win.ylen; i++) { */
/* 		for (int k = 0; k < win.xlen * 2 + 1; k++,putchar('-')); */
/* 		putchar('\n'); */
/* 		putchar('|'); */
/* 		for (int k = 0; k < win.xlen; k++) { */
/* 			putchar(win.rows[i][k]); */
/* 			putchar('|'); */
/* 		} */
/* 		putchar('\n'); */
/* 	} */
/* 	for (int k = 0; k < win.xlen * 2 + 1; k++,putchar('-')); */
/* } */

// https://stackoverflow.com/questions/7469139/what-is-the-equivalent-to-getch-getche-in-linux
#include <termios.h>

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
//


void
moveCursor(Window *win, char c)
{
	switch (c) {
		case 'k':
			if (win->cursor.y != 0)
				win->cursor.y--;
			break;
		case 'j':
			if (win->cursor.y != win->ylen-1)
				win->cursor.y++;
			break;
		case 'h':
			if (win->cursor.x != 0)
				win->cursor.x--;
			break;
		case 'l':
			if (win->cursor.x != win->xlen-1)
				win->cursor.x++;
			break;
	}
}
char
windowInput(Window *win)
{
	char c;
	switch (c = getch()) {
		case 'k':
			moveCursor(win,'k');
			break;
		case 'j':
			moveCursor(win,'j');
			break;
		case 'h':
			moveCursor(win,'h');
			break;
		case 'l':
			moveCursor(win,'l');
			break;
		case 'z':
			putchar('z');
			break;

	}
	return c;
}

void
setAtCursor(Window *win, char c, char* color)
{
	win->rows[win->cursor.y][win->cursor.x].c = c;
	win->rows[win->cursor.y][win->cursor.x].color = color;
}

char
renderThenInput(Window *win)
{
	renderWithCursor(win);
	return windowInput(win);
}

int
main()
{
	Window win = makeWindow(20,20);
	flushWindow(&win,' ',"");
	char trail = '\342';
	char trailOn = 0;
	char c;
	int use_color = 0;
	char* color = "";
	renderWithFrame = 1;
	while((c = renderThenInput(&win)) != 'q') {
		if (c == ' ')
			trailOn = !trailOn;
		if (trailOn)
			setAtCursor(&win,trail,color);

		if (c == 'c')
			use_color = !use_color;
		if (1) {
		/* if (use_color == 1) { */
			if (c == 'r')
				color = "\033[0;31m";
			if (c == 'w')
				color = "";
		}
	}
	freeWindow(&win);
	return 0;
}

