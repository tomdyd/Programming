using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kodGraya
{
    internal class Methods
    {
        public int[] GetIntArray(int num)
        {

            List<int> listOfInts = new List<int>();
            while (num > 0)
            {
                listOfInts.Add(num % 10);
                num /= 10;
            }

            listOfInts.Reverse();
            return listOfInts.ToArray();
        }
        public int XOR(int b, int g)
        {
            if ((g == 1 && b == 1) || (g == 0 && b == 0))
                return 0;
            else
                return 1;
        }

        public int not(int b)
        {
            if (b == 0)
                return 1;
            else
                return 0;
        }
    }
}
