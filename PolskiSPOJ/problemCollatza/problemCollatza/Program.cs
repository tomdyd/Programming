int t = int.Parse(Console.ReadLine());
for (int i = 0; i < t; i++)
{
    int x = int.Parse(Console.ReadLine());
    int j = 0;
    do
    {
        if (x == 1)
            Console.WriteLine(j);
        else
        {
            j++;
            if (x % 2 == 0)
            {
                x /= 2;
            }
            else
            {
                x = 3 * x + 1;
            }

            if (x == 1)
                Console.WriteLine(j);
            
        }
        
    } while (x != 1);
}

Console.ReadLine();
