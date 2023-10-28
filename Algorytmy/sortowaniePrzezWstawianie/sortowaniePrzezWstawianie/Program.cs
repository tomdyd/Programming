static void InsertSort(int[] tab, int n)
{
    for (int i = 1; i < n; i++)
    {
        int j = i;
        int temp = tab[j];
        while ((j > 0) && (tab[j - 1] > temp))
        {
            tab[j] = tab[j - 1];
            j--;
        }
        tab[j] = temp;
    }
}
Console.Write("Podaj liczbę elementów w zbiorze: ");
int n = int.Parse(Console.ReadLine());

Console.WriteLine("Zbiór elementów: ");
int[] tab = new int[n];
Random rand = new Random();
for(int i = 0; i < tab.Length; i++)
{
    tab[i] = rand.Next(0, 21);
    Console.Write($"{tab[i]}, ");
}

InsertSort(tab, tab.Length);

Console.WriteLine();
for(int i = 0; i < tab.Length - 1 ; i++)
{
        Console.Write($"{tab[i]}, ");
}
Console.Write(tab[tab.Length-1]);