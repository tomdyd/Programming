int D = int.Parse(Console.ReadLine());
int[] n = new int[D];
int[] N = new int[D];
int jednosci, dziesiatki;

for (int i = 0; i < D; i++)
{
    n[i] = int.Parse(Console.ReadLine());
    N[i] = silnia(n[i]);
    jednosci = N[i] % 10;
    N[i] = N[i] / 10;
    dziesiatki = N[i] % 10;
    Console.WriteLine($"{dziesiatki} {jednosci}");
}        
static int silnia(int n)
{
    if (n <= 1)
    {
        return 1;
    }

    else
    {
        return n * silnia(n - 1);
    }
}

