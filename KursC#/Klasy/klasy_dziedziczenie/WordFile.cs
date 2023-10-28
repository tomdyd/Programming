using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace klasy_dziedziczenie
{
    public class WordFile : File
    {
        public void Print()
        {
            Console.WriteLine($"{FileName} printing...");
        }
    }
}
