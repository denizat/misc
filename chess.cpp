#include <iostream>

class chess
{
private:
    char board[8][8];

public:
    chess()
    {
        for (int i{0}; i < 8; i++)
        {
            for (int k{0}; k < 8; k++)
            {
                board[i][k] = '+';
            }
        }
        board[0][0] = board[7][0] = board[0][7] = board[7][7] = 'r';
        board[0][1] = board[7][1] = board[0][6] = board[7][6] = 'n';
        board[0][2] = board[7][2] = board[0][5] = board[7][5] = 'b';
        for (int i{0}; i < 8; i++)
        {
            board[6][i] = board[1][i] = 'p';
        }
        board[0][4] = board[7][4] = 'k';
        board[0][3] = board[7][3] = 'q';
    }
    void move(char x1, int y1, char x2, int y2)
    {
        int xi1{}, xi2{};
        switch (x1)
        {
        case 'a':
            xi1 = 0;
            break;
        case 'b':
            xi1 = 1;
            break;
        case 'c':
            xi1 = 2;
            break;
        case 'd':
            xi1 = 3;
            break;
        case 'e':
            xi1 = 4;
            break;
        case 'f':
            xi1 = 5;
            break;
        case 'g':
            xi1 = 6;
            break;
        case 'h':
            xi1 = 7;
            break;
        }
        switch (x2)
        {
        case 'a':
            xi2 = 0;
            break;
        case 'b':
            xi2 = 1;
            break;
        case 'c':
            xi2 = 2;
            break;
        case 'd':
            xi2 = 3;
            break;
        case 'e':
            xi2 = 4;
            break;
        case 'f':
            xi2 = 5;
            break;
        case 'g':
            xi2 = 6;
            break;
        case 'h':
            xi2 = 7;
            break;
        }
        board[-1 * (y2 - 8)][xi2] = board[-1 * (y1 - 8)][xi1];
        board[-1 * (y1 - 8)][xi1] = '+';
    }
    void showBoard()
    {
        for (int i{0}; i < 8; i++)
        {
            for (int k{0}; k < 8; k++)
            {
                std::cout << board[i][k];
            }
            std::cout << "\n";
        }
    }
};

int main()
{
    chess a;
    a.move('b', 2, 'b', 3);
    a.showBoard();
    std::cout << "\033[1;30mbold red text\033[0m\n";
}