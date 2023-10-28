﻿using Microsoft.VisualBasic.FileIO;

double epsilon = 0.001;
double a = -2;
double b = 1;
double fa, fx, x0;

fa = a*a*a-a+1;

do
{
    x0 = (a + b) / 2;
    fx = x0 * x0 * x0 - x0 + 1;

        if (fx * fa < 0)
        {
            b = x0;
        }

        else
        {
            a = x0; 
            fa = fx;
        }

}while (Math.Abs(fx) > epsilon);

Console.WriteLine(x0);

Console.ReadKey();