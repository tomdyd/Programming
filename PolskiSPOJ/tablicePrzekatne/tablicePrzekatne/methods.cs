using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace tablicePrzekatne
{
    class methods
    {
        static int n;
        static int[,] tab = new int[n, n];
        static string check;
        public static void Read()
        {
            Console.WriteLine("Podaj rozmiar tabeli (format n x n)");
            n = int.Parse(Console.ReadLine());
            tab = new int[n, n];

            Random rand = new Random();

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    tab[i, j] = rand.Next(1, 10);
                }
            }
        }

        public static void Print()
        {
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    Console.Write($"{tab[i, j]} ");
                }
                Console.WriteLine();
            }
        }
        public static string Check()
        {
            Console.WriteLine("Czy chcesz dodać coś do przekątnych? (Y/N)");
            check = Console.ReadLine();

            while ((check != "Y" && check != "N") && (check != "y" && check != "n"))
            {
                Console.Clear();
                Console.WriteLine("Czy chcesz dodać coś do przekątnych? (Y/N)");
                check = Console.ReadLine();
            }

            return check;
        }

        public static void Add()
        {
            if (check == "Y" || check == "y")
            {
                Console.Write("Podaj liczbę jaką chcesz dodać: ");
                int add = int.Parse(Console.ReadLine());
                for (int i = 0; i < n; i++)
                {
                    for (int j = 0; j < n; j++)
                    {
                        if (i == j)
                            tab[i, j] += add;
                        else if (i + j == n - 1)
                        {
                            if (i == n / 2 || j == n / 2)
                            {

                            }
                            else
                                tab[i, j] += add;
                        }
                    }
                }
            }
        }
    }
}
