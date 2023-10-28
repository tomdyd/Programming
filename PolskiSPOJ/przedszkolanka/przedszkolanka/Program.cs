int N = int.Parse(Console.ReadLine());

for (int i = 0; i < N; i++)
{
    string inputs = Console.ReadLine();
    string[] ints = inputs.Split(' ');

    int a = int.Parse(ints[0]);
    int b = int.Parse(ints[1]);
    int wynik;

    if (a == 0)
    {
        wynik = b;
        Console.WriteLine(wynik);
    }
    else if (b == 0)
    {
        wynik = a;
        Console.WriteLine(wynik);
    }

    if (a != 0 && b != 0)
    {
        double multiply;
        for (int j = 1; ; j++)
        {
            double result;
            multiply = a * j;
            result = multiply / b;

            if (result % 1 == 0)
            {
                break;
            }
        }

            wynik = (int)multiply;
            Console.WriteLine(wynik);
    }
}

Console.ReadLine();

//double a = double.Parse(Console.ReadLine());

//if (a % 1 == 0)
//{
//    Console.WriteLine("LICZBA CAŁKOWITA");
//}
//else
//    Console.WriteLine("TO NIE JEST LICZBA CAŁKOWITA");
