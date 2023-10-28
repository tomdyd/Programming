using ProjectPerson;
using System.Net.Http.Headers;
using System.Security;



Console.Write("Podaj imię użytkownika: ");
string UserName = Console.ReadLine();

Console.Write("Podaj nazwisko użytkownika: ");
string Surname= Console.ReadLine();

Person[] User;
User = new Person[2];

for (int i = 0; i < 2; i++)
{
    User[i] = new Person(UserName, Surname);
}

Console.Write($"Podaj datę urodzenia użytkownika {User[0].FirstName}: ");
User[0].DateOfBirth = DateTime.Parse(Console.ReadLine());

Console.Write($"Podaj numer telefonu użytkownika {User[0].FirstName}: ");
User[0].PhoneNumber = Console.ReadLine();

//Console.Write("Podaj datę urodzenia użytkownika Paulina: ");
//date = DateTime.Parse(Console.ReadLine());
//Paulina.SetDateOfBirth(date);

//Console.Write("Podaj datę urodzenia użytkownika John: ");
//date = DateTime.Parse(Console.ReadLine());
//John.SetDateOfBirth(date);

//Tomasz.sayHi();
Console.WriteLine(User[0].FirstName);
Console.WriteLine(User[0].LastName);
Console.WriteLine(User[0].DateOfBirth);
Console.WriteLine(User[0].PhoneNumber);

//Paulina.sayHi();
//John.sayHi();

Console.ReadLine();