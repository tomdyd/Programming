using Microsoft.VisualBasic.FileIO;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Faktoryzacja
{
    internal class Methods
    {
        int input;
        public void ReadInput(string messege)
        {
            do
            {
                Console.Clear();
                Console.Write(messege);
                input = int.Parse(Console.ReadLine());
            } while (input < 0);
        }

        public int Factorial(int n)
        {
            int result;
            if (n == 0)
                return 1;
            else
            {
                result = n * Factorial(n - 1);
            }

            return result;
        }

        public void Print()
        {
            long result = Factorial(input);
            Console.WriteLine($"Silnia dla n = {input} wynosi {result}");
        }

        public void check()
        {
            int D = 50000;
            for (int i = 0; i < 50000; i++)
            {
                int sumaSilni = 0;
                while (i > 0)
                {
                    int cyfra = i % 10;
                    cyfra /= 10;

                    sumaSilni = sumaSilni + Factorial(cyfra);

                    if (sumaSilni == i)
                    {
                        Console.WriteLine($"Liczba {i} to faktorium");
                    }
                }

            }

        }
    }
}
