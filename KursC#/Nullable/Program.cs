int? favouriteNumber = null;

Console.Write("Podaj ulubioną liczbę: ");

Console.WriteLine($"Favourite number: " + favouriteNumber != null ? favouriteNumber : "" );

try
{
    Console.Write("Podaj Liczbę: ");
    int number = int.Parse(Console.ReadLine());
    Console.WriteLine(number);
}
catch (Exception e)
{
    Console.WriteLine("Błąd, nie podano liczby");
}



