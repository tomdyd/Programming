﻿double bok1, bok2, P;
double epsilon = 0.001;
Console.Write("Podaj wartość: ");
bool czyLiczba = double.TryParse(Console.ReadLine(), out P);

while (!czyLiczba)
{
    Console.WriteLine("Podana wartość musi być liczbą!");
    Console.Write("Podaj wartość: ");
    czyLiczba = double.TryParse(Console.ReadLine(), out P);
}

bok1 = P / 2;
bok2 = P / bok1;

while (Math.Abs(bok1 - bok2) > epsilon)
{
    bok1 = (bok1 + P / bok1) / 2;
    bok2 = P / bok1;
}

Console.WriteLine($"Pierwiastwk z liczby {P} wynosi {bok1}");