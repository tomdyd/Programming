int wiekMatki = int.Parse(Console.ReadLine());
int wiekDziecka;

Console.Write("Ile matka jest starsza od dziecka?: ");
int X = int.Parse(Console.ReadLine());
Console.Write("Podaj za Y lat matka będzie Z starsza od dziecka?: ");
int Y = int.Parse(Console.ReadLine());
int Z = int.Parse(Console.ReadLine());

float result = Z * wiekDziecka - wiekDziecka - X - Y + Z * Y;

Console.WriteLine(result);

Console.ReadLine();