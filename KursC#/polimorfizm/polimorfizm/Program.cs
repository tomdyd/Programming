using polimorfizm;

Shape[] shapes = { new Circle(), new Triangle(), new Rectangle() };

foreach (Shape shape in shapes)
{
    shape.Draw();
}