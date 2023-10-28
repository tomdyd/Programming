Console.WriteLine("Podaj podstawe");
int a = int.Parse(Console.ReadLine());
Console.WriteLine("Podaj wykładnik");
int b = int.Parse(Console.ReadLine());

double result = a;

for (int i = 1; i < b; i++)
{
    if (b == 0)
    {
        result = 1;
        Console.WriteLine(result);
    }
    if (b == 1)
    {
        result = a;
        Console.WriteLine(result);
    }

    else
    {
        result = result * a;
    }
}
Console.WriteLine(result);
Console.ReadLine();