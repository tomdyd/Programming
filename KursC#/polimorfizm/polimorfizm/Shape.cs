﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace polimorfizm
{
    class Shape
    {
        public int X { get; set; }
        public int Y { get; set; }
        public virtual void Draw()
        {
            Console.WriteLine("Drawing shape");
        }

    }
    class Rectangle : Shape
    {
        public override void Draw()
        {
            Console.WriteLine("Drawing Rectangle");
        }
    }

    class Triangle : Shape
    {
        public override void Draw()
        {
            Console.WriteLine("Drawing Triangle");
        }
    }

    class Circle : Shape 
    {
        public override void Draw() 
        {
            Console.WriteLine("Drawing Circle");
        }
    }
}
