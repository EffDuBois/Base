using System;

class Program
{
    const int SHIP = 5;
    const int SUNK = 2;
    const int MISS = 3;
    const int SIZE = 9;
    static int[,] gameBoard = new int[SIZE, SIZE];

    static void Main()
    {
        // Initialize the game board
        for (int i = 0; i < SIZE; i++)
        {
            for (int j = 0; j < SIZE; j++)
            {
                gameBoard[i, j] = 0;
            }
        }

        // Place the ships
        gameBoard[1, 4] = SHIP;
        gameBoard[1, 5] = SHIP;
        gameBoard[1, 6] = SHIP;
        gameBoard[3, 2] = SHIP;
        gameBoard[3, 3] = SHIP;
        gameBoard[2, 8] = SHIP;
        gameBoard[3, 8] = SHIP;
        gameBoard[4, 8] = SHIP;
        gameBoard[5, 8] = SHIP;
        gameBoard[6, 8] = SHIP;
        gameBoard[5, 4] = SHIP;
        gameBoard[6, 4] = SHIP;
        gameBoard[7, 4] = SHIP;
        gameBoard[8, 6] = SHIP;
        gameBoard[8, 7] = SHIP;
        gameBoard[8, 8] = SHIP;
        gameBoard[8, 8] = SHIP;

        Console.WriteLine("Welcome to Battleship!");
        Console.WriteLine("========================");

        while (!EverythingSunk())
        {
            DisplayBoard();

            int row = GetInput("Enter row: ", 0, SIZE - 1);
            int column = GetInput("Enter a column: ", 0, SIZE - 1);

            CheckBoard(row, column);

            if (EverythingSunk())
            {
                Console.WriteLine("Congratulations! You have sunk all of the battleships!!!");
            }
            else
            {
                Console.WriteLine("There are still battleships left to be sunk!");
            }
        }
    }

    static void CheckBoard(int row, int column)
    {
        if (gameBoard[row, column] == SUNK)
        {
            Console.WriteLine("Already Hit!");
        }
        else if (gameBoard[row, column] == SHIP)
        {
            Console.WriteLine("Hit!");
            gameBoard[row, column] = SUNK;
        }
        else
        {
            Console.WriteLine("Miss!");
            gameBoard[row, column] = MISS;
        }
    }

    static bool EverythingSunk()
    {
        for (int i = 0; i < SIZE; i++)
        {
            for (int j = 0; j < SIZE; j++)
            {
                if (gameBoard[i, j] == SHIP)
                {
                    return false;
                }
            }
        }
        return true;
    }

    static void DisplayBoard()
{
    // Print column labels
    Console.Write("  ");
    for (int i = 0; i < SIZE; i++)
    {
        Console.Write(i + " ");
    }
    Console.WriteLine();

    for (int i = 0; i < SIZE; i++)
    {
        // Print row label
        Console.Write(i + " ");

        for (int j = 0; j < SIZE; j++)
        {
            switch (gameBoard[i, j])
            {
                case SUNK:
                    Console.Write("H ");
                    break;
                case MISS:
                    Console.Write("M ");
                    break;
                default:
                    Console.Write("? ");
                    break;
            }
        }
        Console.WriteLine();
    }
}


    static int GetInput(string prompt, int min, int max)
    {
        int result;
        do
        {
            Console.Write(prompt);
        } while (!int.TryParse(Console.ReadLine(), out result) || result < min || result > max);

        return result;
    }
}
