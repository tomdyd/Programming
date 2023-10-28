using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NewOfficeProject
{
    class PowerPointFile : File
    {        
        public void Present()
        {
            Console.WriteLine($"{FileName} presenting...");
        }
    }
}
