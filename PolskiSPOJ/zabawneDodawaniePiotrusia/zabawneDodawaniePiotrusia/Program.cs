string input = Console.ReadLine();
char[] ints = input.ToCharArray();
char[] newints = new char[ints.Length];

for (int i = 0;  i < newints.Length; i++)
{
    newints[ints.Length-1-i] = ints[i];
}

string newstring = (string)newints.ToString();

Console.WriteLine(newstring);
Console.WriteLine($"\n{input}");

Console.ReadLine();