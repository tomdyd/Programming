int t = int.Parse(Console.ReadLine());
for (int j = 0; j < t; j++)
{
    int n = int.Parse(Console.ReadLine());

    string liczby = Console.ReadLine();
    string[] split = liczby.Split(' ');
    int result = 0;
    int[] ints = new int[split.Length];
    for (int i = 0; i < split.Length; i++)
    {
        ints[i] = int.Parse(split[i]);
        result += ints[i];
    }

    Console.WriteLine(result);
}
