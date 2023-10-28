

using Microsoft.VisualBasic;
using System;
using System.Drawing;
using System.Text;

StringBuilder sb = new StringBuilder();
string slowo;
do
{
    slowo = Console.ReadLine();
}while (slowo == null);

int[] ints = new int[slowo.Length];

string[] slowos = new string[slowo.Length];
for (int i = 0; i < slowo.Length; i++)

{
    sb.Append(slowos[i]);
}

ints = Array.ConvertAll(slowos, int.Parse);

for (int i = 0 ; i < ints.Length; i++)
{
    Console.WriteLine(ints[i]);
}

//Console.WriteLine($"Podaj i z zakresu od 0 do {slowo.Length-1}");
//int j = int.Parse(Console.ReadLine());

//Console.WriteLine(slowo[j]);