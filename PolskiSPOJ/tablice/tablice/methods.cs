using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace tablice
{
    internal class methods
    {
        public void ReadInput()
        {
            int t = int.Parse(Console.ReadLine()); //liczba testów

            for (int i = 0; i < t; i++)
            {
                string input = Console.ReadLine();
                string[] tab = input.Split(' ');

                Array.Reverse(tab);

                for (int j = 0; j < tab.Length - 1; j++)
                {
                    if (j != tab.Length - 2)
                        Console.Write($"{tab[j]} ");
                    else
                        Console.WriteLine($"{tab[j]}");
                }
            }     
            
        }

    }
}
