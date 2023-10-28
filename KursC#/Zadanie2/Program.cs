Console.Write("Podaj swoją datę urodzenia: ");
DateTime date = DateTime.Parse(Console.ReadLine());
Console.WriteLine(date);

TimeSpan timeSpan = DateTime.Now - date;

Console.WriteLine($"Urodziłeś się {timeSpan.TotalDays} dni temu.");



