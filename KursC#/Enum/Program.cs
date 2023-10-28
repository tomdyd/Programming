using Enum1;

Console.WriteLine("What is your gender? 1 - Male, 2 - Female");
string userInput = Console.ReadLine();

Gender userGender = (Gender)Enum.Parse(typeof(Gender), userInput);

if (userGender == Gender.Male)
{
    Console.WriteLine("Only woman allowed");
}
else if(userGender == Gender.Female)
{
    string path = @"E:\Gry\Filmy\bbe16850-1080p.mp4";

    Console.WriteLine(path);
}






