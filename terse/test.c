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

Window
makeWindow(int xlen, int ylen)
{
	Window win;
	win.xlen = xlen;
	win.ylen = ylen;
	win.rows = (Row*)malloc(ylen*sizeof(Row));
	for (int i = 0; i < ylen; i++)
		for (int k = 0; k < xlen; k++)
			win.rows[i] = (Point*)mal
	}
}

int
main()
{
	Window win =
	return 0;
}

