using System.Text.RegularExpressions;

Regex regex = new Regex(@"^[a-z0-9]+\.?[a-z0-9]+@[a-z]+\.[a-z]{2,3}$");
Console.WriteLine("Podaj adres email");
string email = Console.ReadLine();
if (regex.IsMatch(email))
{
    Console.WriteLine(email);
}
else
{
    Console.WriteLine("Podany błędy adres mailowy!");
}
