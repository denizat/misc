CC = cc
CFLAGS = -std=c99 -Wall -ledit -lm
SRC = lisp.c mpc/mpc.c
OUT = a.out
all:
	$(CC) $(CFLAGS) $(SRC) -o $(OUT)

run: all
	./$(OUT)

test:
	$(CC) $(CFLAGS) -g $(SRC) -o $(OUT)
	gdb a.out
clean:
	rm $(OUT)


.PHONY: all run test clean
