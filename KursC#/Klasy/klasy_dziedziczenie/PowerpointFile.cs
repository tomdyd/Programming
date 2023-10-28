using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace klasy_dziedziczenie
{
    public class PowerpointFile : File
    {
        public void Present()
        {
            Console.WriteLine($"{FileName} presenting...");
        }
    }
}
