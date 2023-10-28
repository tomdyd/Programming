Random rand = new Random();

int n = int.Parse(Console.ReadLine());

for (int i = 0; i < n; i++)
{
    Thread.Sleep(5);
    int kostka = rand.Next(1, 43);    

    if (i < n - 1)
        Console.Write($"{kostka}, ");
    else
        Console.Write($"{kostka}");

}




Console.ReadLine();

