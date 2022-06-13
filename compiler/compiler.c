#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>


#define IS_NUM(X) (X >= '0' && X <= '9')
#define IS_LETTER(X) ((X >= 'a' && X <= 'z') || (X >= 'A' && X <= 'Z'))
#define SEELINE printf("%d, %s\n",__LINE__,__FUNCTION__);

typedef struct {
	int type;
	char *value;
	int len;
} token;


int *y = {1,2,3,4,5};







void token_val_append(token *tok, char val)
{
	tok->len++;
	tok->value = realloc(tok->value, sizeof(char) * tok->len);
	tok->value[tok->len-1] = val;
}

enum type {
	NUMBER,
	SYMBOL,
	UNKNOWN,
	TEOF,
	INDENT,
	DIV,
	DEINDENT
};


token gettok(FILE *f)
{

	static int last_char = ' ';
	static int indent_counter = 0;
	token out;
	out.len = 0;
	out.value = NULL;

	if (last_char == ' ')
		while ((last_char = fgetc(f)) == ' ');

	if (IS_NUM(last_char)) {
		out.type = NUMBER;
		do {
			/* if (last_char != '_') */
				token_val_append(&out, last_char);
			last_char = fgetc(f);
		} while (IS_NUM(last_char) || last_char == '_');

		return out;
	}

	if (IS_LETTER(last_char)) {
		out.type = SYMBOL;
		do {
			token_val_append(&out, last_char);
			last_char = fgetc(f);
		} while (IS_LETTER(last_char));

		return out;
	}

	if (last_char == '/') {
		if ((last_char = fgetc(f)) == '/')
			while

	}

	if (last_char == EOF) {
		out.type = TEOF;
		return out;
	}




	last_char = fgetc(f);
	out.type = UNKNOWN;
	return out;

}

void tokenize(FILE *f)
{
	token tok;
	do {
		tok = gettok(f);
		if (tok.type != UNKNOWN && tok.type != TEOF) {
			if (tok.type == NUMBER)
				printf("NUMBER: %s\n", tok.value);
			if (tok.type == SYMBOL)
				printf("SYMBOL: %s\n", tok.value);
		}
		else
			printf("UNKNOWN\n");

	} while (tok.type != TEOF);
}

int main()
{
	FILE *f = fopen("test.tc", "r");
	tokenize(f);
	return 0;
}

