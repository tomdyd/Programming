int D; // liczba przypadków
Console.WriteLine("Podaj ilosc przypadkow");
D = int.Parse(Console.ReadLine());
Console.WriteLine("Podaj a i b");
int a, b; // a - liczba, b - wykladnik
string num = Console.ReadLine();
string[] ints = num.Split(' ');
string.Join("", ints);

b = int.Parse(ints[1]);
a = int.Parse(ints[0]);

int result = Potegowanie(a, b);

Console.WriteLine(result);
Console.ReadLine();

int Potegowanie(int a, int b)
{
    int potega = 1;
    for (int i = 0; i < b; i++)
    {
        potega = potega * a;
    }
    return potega;
}






//Console.Write("Podaj kod: ");
//string num = Console.ReadLine();
//string[] code = num.Split(' ');
//string.Join(" ", code);
//int[] ints = new int[code.Length];

//for (int i = 0; i < code.Length; i++)
//{
//    ints[i] = int.Parse(code[i]);
//    if (i < code.Length - 1)
//        Console.Write($"{ints[i]}, ");

//    else
//        Console.Write($"{ints[i]}");
//}

//Console.ReadLine();