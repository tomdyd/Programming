int t = int.Parse(Console.ReadLine());
for (int j = 0; j < t; j++)
{
    double n = double.Parse(Console.ReadLine());

    if (n == 1)
        Console.WriteLine("NIE");
    else if (n == 2)
        Console.WriteLine("TAK");

    for (int i = 2; i <= n - 1; i++)
    {
        double tmp = n / i;
        double temp = Math.Round(tmp);

        if (tmp == temp)
        {
            Console.WriteLine("NIE");
            break;
        }
        else if (i == n - 1)
            Console.WriteLine("TAK");
    }
}
