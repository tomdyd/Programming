using System.Runtime.ExceptionServices;
using kodGraya;

Methods method= new Methods();


Console.WriteLine("1. Zamiana z kodu Graya na kod binarny\n2. Zamiana z kodu binarnego na kod Graya");
int button = int.Parse(Console.ReadLine());
Console.Clear();

Console.Write("Podaj z ilu bitów składa się słowo: ");
int D = int.Parse(Console.ReadLine());

int[] gray = new int[D];
int[] bin = new int[D];


Console.Clear();

switch (button)
{
    case 1:

        Console.Write("Podaj kod: ");
        int code = int.Parse(Console.ReadLine());
        gray = method.GetIntArray(code);
        

        //for (int i = 0; i < D; i++)
        //{
        //    gray[i] = code % 10;
        //    code = code / 10;
        //}

        for (int i = 0; i < gray.Length; i++)
        {
            if (i == 0)
            {
                bin[i] = gray[i];
            }
            else
            {
                bin[i] = method.XOR(bin[i - 1], gray[i]);
            }

            Console.Write(bin[i]);
        }
        break;

    case 2:

        for (int i = 0; i < D; i++)
        {
            Console.Write($"Podaj wartość {i + 1} bitu: ");
            bin[i] = int.Parse(Console.ReadLine());
            Console.Clear();
        }

        for (int i = 0; i < bin.Length; i++)
        {
            if (i == 0)
            {
                gray[i] = bin[i];
            }
            else
            {
                if (bin[i-1] == 1)
                {
                    gray[i] = method.not(bin[i]);
                }
                else
                {
                    gray[i] = bin[i];
                }
            }
            Console.Write(gray[i]);
        }
        break;
}
Console.ReadKey();
