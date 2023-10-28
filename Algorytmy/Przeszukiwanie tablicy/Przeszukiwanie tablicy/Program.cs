const int n = 10;
Random rand = new Random();
int[] tab = new int[n];
for(int i = 0; i < n; i++)
{
    tab[i] = rand.Next(0, 10);
    //Console.Write($"{tab[i]}, ");
}

Console.Write("Podaj element którego szukasz: ");
int x = int.Parse(Console.ReadLine());
szukaj(tab, 0, tab.Length-1, x);
void szukaj(int[] tab, int left, int right, int x)
{
    if (left > right)
    {
        Console.WriteLine($"Element {x} nie został odnaleziony.");
    }
    else if (tab[left] == x)
    {
        Console.WriteLine($"Odnalazłem element {x}, w tab[{left}].");
    }    
    else
    {
        szukaj(tab, left + 1, right, x);
    }
}
