int D = int.Parse(Console.ReadLine());
for (int i = 0; i < D; i++)
{
    int n = int.Parse(Console.ReadLine());
    if (n < 10)
    {
        int wynik = 1;
        for (int j = 2; j <= n; j++)
        {
            wynik *= j;
        }

        int jednosci = wynik % 10;
        int dziesiatki = (wynik / 10) % 10;
        Console.WriteLine($"{dziesiatki} {jednosci}");
    }
    else
    {
        int dziesiatki = 0, jednosci = 0;
        Console.WriteLine($"{dziesiatki} {jednosci}");
    }            
}
