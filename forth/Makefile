CC = cc
CFLAGS = -std=c99 -Wall -O1

all:
	$(CC) $(CFLAGS) forth.c

asm:
	$(CC) $(CFLAGS) -S forth.c

test: all
	./a.out test.fth


clean:
	rm *.out
	rm *.s
