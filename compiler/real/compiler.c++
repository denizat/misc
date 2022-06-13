#include <string>
#include <iostream>

using namespace std;

static FILE *f;

static char gc()
{
	return fgetc(f);
}

enum Token {
	tokeof = -1,

	tokdef = -5,
	tokextern = -2,

	toksymbol = -3,
	toknumber = -4
};

static string symbolstr;
static double numval;



static int gettok()
{
	// last char
	static int c = ' ';

	while (c == ' ')
		c = gc();

	if (isalpha(c)) {
		symbolstr = c;

		while (isalnum((c = gc())))
			symbolstr += c;
		if (symbolstr == "def")
			return tokdef;
		if (symbolstr == "extern")
			return tokextern;
		return toksymbol;
	}

	if (isdigit(c) || c == '.') {
		string numstr;
		do {
			numstr += c;
			c = gc();
		} while (isdigit(c) || c == '.');

		numval = strtod(numstr.c_str(), 0);
		return toknumber;
	}

	if (c == '#') {
		do
			c = gc();
		while (c != EOF && c != '\n' && c != '\r');

		if (c != EOF)
			return gettok();
	}

	if (c == '/') {
		c = gc();
		if (c == '/') {
			do
				c = gc();
			while (c != EOF && c != '\n' && c != '\r');

			if (c != EOF)
				return gettok();
		}

		else if (c == '*') {
			int ccount = 1; // comment count
			do {
				c = gc();
				if (c == '/') {
					c = gc();
					if (c == '*')
						ccount++;
				}
				if (c == '*') {
					c = gc();
					if (c == '/')
						ccount--;
				}

			} while (c != EOF && ccount != 0);

			if (c != EOF)
				return gettok();
		}
	}

	if (c == EOF)
		return tokeof;

	int out = c;
	c = gc();
	return out;
}

int main()
{
	f = fopen("test.tc", "r");
	int tok;
	while ((tok = gettok()) != tokeof) {
		if (tok == toksymbol)
			cout << symbolstr << '\n';
		else if (tok == toknumber)
			cout << numval << '\n';
		else
			cout << (char)tok << '\n';
	}


	return 0;
}
