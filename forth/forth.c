#include <stdio.h>
#include <stdlib.h>

#include "forth.h"

#define IS_WHITESPACE(C) (C == ' ' || C == '\n' || C == '\t' || C == '\r')
#define IS_NUMBER(C) (C == '1' || C == '2'|| C == '3' || C == '4' || C == '5' || C == '6' || C == '7' || C == '8' || C == '9' || C == '0')

enum { STACK_NUM, STACK_STR };

typedef struct {
	union {
		int num;
		char *str;
	};
	int type;
} StackItem;

StackItem *stack;
int stack_length = 0;

typedef struct Word {
	char *name;
	char **words;
	// length of words array
	int wlen;
} Word;

// dictonary is composed of an array of words, words point to names and a word array,
// when we find a word to execute in the array, we send the contents of the array in the word to
// handle word directly

Word *dict;
int dict_length = 0;

void
dict_push(char *word)
{
	dict = (Word *)realloc(dict,++dict_length * sizeof(Word));
	dict[dict_length - 1] =  (struct Word){ .name = word, .words = NULL };
}

void
word_push(char *word);

void
push(StackItem val)
{
	// printf("%s\n",__FUNCTION__);
	/* printf("just pushed %d\n", val); */
	stack = (StackItem *)realloc(stack,++stack_length * sizeof(StackItem));
	stack[stack_length - 1] = val;
}

StackItem
pop()
{
	// printf("%s\n",__FUNCTION__);
	StackItem out = stack[--stack_length];
	/* printf("just popped %d\n", out); */
	stack = (StackItem *)realloc(stack, stack_length * sizeof(StackItem));
	return out;
}

// get the top of the stack without popping it.
inline StackItem
get_top()
{
	return stack[stack_length - 1];
}


// this gets the next word in the file
void
get_next(FILE *fp, char *buf)
{
	// printf("%s\n",__FUNCTION__);
	int c = fgetc(fp);
	while (IS_WHITESPACE(c) && c != EOF) c = fgetc(fp);
	if (c == EOF) {
		buf[0] = '\0';
		return;
	}
	int pos = 0;
	do {
		buf[pos++] = c;
		c = fgetc(fp);
	} while (!IS_WHITESPACE(c));
	buf[pos] = '\0';
}

int
is_number(char *str)
{
	// printf("%s\n",__FUNCTION__);
	int pos = 0;
	while(IS_NUMBER(str[pos])) pos++;
	if (str[pos] == '\0') return 1;
	return 0;
}

// checks if two strings are equal
int
equal_s(char *a, char *b)
{
	// printf("%s\n",__FUNCTION__);
	int pos = 0;
	/* printf("a:%s,b:%s"); */
	while (a[pos] != '\0') {
		if (a[pos] != b[pos]) return 0;
		pos++;
	}
	if (a[pos] != b[pos]) return 0;
	return 1;
}

void
do_word(char *word)
{
	printf("%s,%s\n",__FUNCTION__,word);
	for (int i = 0; i < dict_length; i++) {
		if (equal_s(word, dict[i].name)) {
			handle_word(dict[i].next->name);
			return;
		}
	}
}


inline void
print(StackItem item)
{
	if (item.type == STACK_NUM)
		printf("%d ",item.num);
	else
		printf("%s ",item.str);
}

// see stack
inline void
sees()
{
	for(int i = 0; i < stack_length; i++)
		print(stack[i]);
}

// duplicate top of stack
inline void
dup()
{
	push(get_top());
}

inline void
drop()
{
	pop();
}

inline void
cr()
{
	printf("\n");
}

inline void
swap()
{
	StackItem n1 = pop();
	StackItem n2 = pop();
	push(n1);
	push(n2);
}

inline void
over()
{
	StackItem n1 = pop();
	StackItem n2 = pop();
	push(n2);
	push(n1);
	push(n2);
}

inline void
period()
{
	print(pop());
}

inline void
push_num(int num)
{
	StackItem tmp = { .num = num, .type = STACK_NUM };
	push(tmp);
}

inline void
add()
{
	push_num(pop().num + pop().num);
}

inline void
equal()
{
	if (pop().num == pop().num)
		push_num(-1);
	else
		push_num(0);
}

int in_function = 0;

void
handle_word(char *word)
{
	// printf("%s\n",__FUNCTION__);
	if (in_function) {
	/* printf("IN FUNCTION\n"); */
		if (equal_s(word,";")) {
			in_function = 0;
			return;
		}

		dict[dict_length - 1].

	} else if (is_number(word))
		push_num(atoi(word));
	else if (equal_s(word,"+"))
		add();
	else if (equal_s(word,"="))
		equal();
	else if (equal_s(word,"."))
		period();
	else if (equal_s(word,"sees"))
		sees();
	else if (equal_s(word,"dup"))
		dup();
	else if (equal_s(word,"drop"))
		drop();
	else if (equal_s(word,"cr"))
		cr();
	else if (equal_s(word,"swap"))
		swap();
	else if (equal_s(word,"over"))
		over();
	else if (equal_s(word,":")) {
		in_function = 1;
		dict_push(word);
	}
	else {
		do_word(word);

	}


}

int
main(int argc, char **argv)
{
	// printf("%s\n",__FUNCTION__);
	FILE *fp;
	if (argc < 2)
		fp = fopen("/dev/stdin", "r");
	else
		fp = fopen(argv[1], "r");
	char buf[100];
	get_next(fp,buf);
	while (buf[0] != '\0') {
		/* puts(buf); */
		handle_word(buf);
		get_next(fp,buf);
	}

	return 0;
}

