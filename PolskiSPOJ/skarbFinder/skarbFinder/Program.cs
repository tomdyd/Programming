int t = int.Parse(Console.ReadLine());

for (int i = 0; i < t; i++)
{
    int horizontal = 0;
    int vertical = 0;
    int D = int.Parse(Console.ReadLine());

    for (int j = 0; j < D; j++)
    {     
        string input = Console.ReadLine();
        string[] clues = input.Split(' ');

        int destination = int.Parse(clues[0]);
        int numberOfSteps = int.Parse(clues[1]);


        if (destination == 0) //Północ
            vertical += numberOfSteps;

        else if (destination == 1) //Południe
            vertical -= numberOfSteps;

        else if (destination == 2) //Zachód
            horizontal += numberOfSteps;

        else if (destination == 3) //Wschód
            horizontal -= numberOfSteps;       
    }

    if (vertical == 0 && horizontal == 0)
    {
        Console.WriteLine("studnia");
    }
    else if (vertical > 0)
    {
        Console.WriteLine($"0 {vertical}");
    }
    else if (vertical < 0)
    {
        vertical = -vertical;
        Console.WriteLine($"1 {vertical}");
    }

    if (horizontal > 0)
    {
        Console.WriteLine($"2 {horizontal}");
    }
    else if (horizontal < 0)
    {
        horizontal = -horizontal;
        Console.WriteLine($"3 {horizontal}");
    }
}

Console.ReadLine();