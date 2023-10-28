void merge(int t)
{
    for (int i = 0; i < t; i++)
    {
        string text = Console.ReadLine();

        string[] split = text.Split(' ');

        string word0 = split[0];
        string word1 = split[1];

        if (word0.Length < word1.Length)
        {
            for (int j = 0; j < word0.Length; j++)
            {
                Console.Write(word0[j]);
                Console.Write(word1[j]);
            }
        }
        else
        {
            for (int a = 0; a < word1.Length; a++)
            {
                Console.Write(word0[a]);
                Console.Write(word1[a]);
            }
        }
        Console.WriteLine();
    }
}

merge(int.Parse(Console.ReadLine()));

