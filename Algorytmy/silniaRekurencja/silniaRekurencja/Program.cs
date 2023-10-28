static double silnia(int n)
{
    if (n == 0)
    {
        return 1;
    }
    else
    {
        return n*(silnia(n-1));
    }
}


Console.Write("Podaj silnie: ");
int n = int.Parse(Console.ReadLine());
Console.WriteLine(silnia(n));

