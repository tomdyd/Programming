static int silnia (int x, int tmp = 1)
{
    if (x == 0)
        return 1;
    else
    {
        Console.WriteLine($"{x}, {tmp}");
        return x * silnia(x - 1, x * tmp);
    }
}

Console.Write("Podaj wartość silni: ");
int n = int.Parse(Console.ReadLine());
    silnia(n);