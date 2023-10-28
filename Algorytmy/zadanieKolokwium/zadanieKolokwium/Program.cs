namespace program
{
    class metody
    {
        static int[,] tab = new int[10, 10];
        static string path;
        static public void GenerateTab()
        {
            for (int i = 0; i < 10; i++)
            {
                for (int j = 0; j < 10; j++)
                {
                    if (i == j || i + j == 10 - 1)
                        tab[i, j] = 1;
                    else if (i == 5 / 2 && j == 5 / 2)
                        tab[i, j] -= 1;
                    else
                        tab[i, j] = 0;
                }
            }
        }

        static public void Print()
        {
            for (int i = 0; i < 10; i++)
            {
                for (int j = 0; j < 10; j++)
                {
                    Console.Write($"{tab[i, j]} ");
                }
                Console.WriteLine();
            }
        }

        static public void ReadText()
        {
            StreamReader sw = new StreamReader(path);
            Console.WriteLine();
            Console.WriteLine(sw.ReadToEnd());
        }

        static public void SaveToText()
        {
            Console.Write("\nPodaj ścieżkę do pliku: ");
            path = Console.ReadLine();
            if (!File.Exists(path))
            {
                FileStream zapis = new FileStream(path, FileMode.OpenOrCreate, FileAccess.ReadWrite);
                StreamWriter sw = new StreamWriter(zapis);
                File.Create("tablica.txt");

                for (int i = 0; i < 10; i ++)
                {
                    for (int j = 0; j < 10; j++)
                    {
                        sw.Write($"{tab[i,j]} ");
                    }
                    sw.WriteLine();
                }                
                sw.Close();
            }
        }
        static void Main(string[] args)
        {
            GenerateTab();
            Print();
            SaveToText();
            ReadText();
            Console.ReadLine();
        }
    }
}




