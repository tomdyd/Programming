static void DisplayElements(List<int> list)
{
    Console.WriteLine("** LIST **");
    
    foreach (int element in list)
    {
        Console.Write($"{element}, ");
    }
    Console.WriteLine();
}

List<int> intList = new List<int>() { 6, 1, 20, 34, 10, 12, 9, 100, 87 };
DisplayElements(intList);

Console.Write("New element: ");
string userInput = Console.ReadLine();
int intValue = int.Parse(userInput);
intList.Add(intValue);
DisplayElements(intList);
Console.WriteLine();

Console.WriteLine("Remove range: ");
intList.RemoveRange(1, 2);
DisplayElements(intList);
Console.WriteLine();

Console.WriteLine("Sort:");
intList.Sort();
DisplayElements(intList);
