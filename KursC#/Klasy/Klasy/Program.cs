using Klasy;

Person bill = new Person("Bill", "Wick");

bill.SayHi();

Person john = new Person(new DateTime(1999, 05, 09),"John", "Wick");
john.SayHi();

Console.WriteLine($"Objects of person type count: {Person.Count}");