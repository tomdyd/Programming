int t = int.Parse(Console.ReadLine());

for (int i = 0; i < t; i++)
{
    string ints = Console.ReadLine();
    string[] inputs = ints.Split(' ');
    double N = double.Parse(inputs[0]);
    double M = double.Parse(inputs[1]);
    double[] secs = new double[inputs.Length];
    double ileCiastek = 0;

    for (int j = 0; j < N; j++)
    {        
        secs[j] = int.Parse(Console.ReadLine());
    }

    for(int j = 0; j < secs.Length ; j++)
    {
        double ciastkaNaDobe = 24*3600/secs[j];
        ileCiastek += ciastkaNaDobe;
    }

    double result = ileCiastek / M;

    Console.WriteLine(Math.Ceiling(result));

    Console.ReadLine();
}