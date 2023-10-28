namespace GenericTypes
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var dictionary = new Dictionary<int, string>[]
            {
                new Dictionary<int, string>(0, "koń"),
                new Dictionary<int, string>(1, "owca"),
                new Dictionary<int, string>(2, "ryba"),
                new Dictionary<int, string>(3, "pies"),
                new Dictionary<int, string>(4, "kot")
            };
            Console.WriteLine("Przed sortowaniem");
            foreach (var item in dictionary)
            {
                Console.WriteLine(item);
            }

            Array.Sort(dictionary);

            Console.WriteLine("Po sortowaniu");
            foreach (var item in dictionary)
            {
                Console.WriteLine(item);
            }

            var array = new int[5];
            Array.Sort(array);
        }

        Dictionary<int, string> dictionary;
    }
}