Console.Write("Podaj liczbę: ");
bool isNumber = double.TryParse(Console.ReadLine(), out double userInput);

while(!isNumber)
{
    Console.WriteLine("Podana wartość nie jest liczbą!");
    Console.Write("Podaj liczbę: ");
    isNumber = double.TryParse(Console.ReadLine(), out userInput);
}

double sum = 0;
int i = 0;
double? maxValue = null;
do
{
    if (maxValue == null || userInput > maxValue)
    {
        maxValue = userInput;
    }
    sum += userInput;

    Console.Write("Podaj następną liczbę: ");
    isNumber = double.TryParse(Console.ReadLine(), out userInput);

    while (!isNumber)
    {
        Console.WriteLine("Podana wartość nie jest liczbą!");
        Console.Write("Podaj liczbę: ");
        isNumber = double.TryParse(Console.ReadLine(), out userInput);
    }

    i++;

} while (userInput != 0);

Console.WriteLine($"Suma wszystkich elementów wynosi {sum}");
Console.WriteLine($"Największy element wynosi: {maxValue}");
