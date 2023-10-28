using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericTypes
{
    public class Dictionary<TKey, TValue> : IComparable<Dictionary<TKey, TValue>>
        where TKey: IComparable
        where TValue : IComparable
    {        
        public Dictionary(TKey key, TValue value)
        {
            Key = key;
            Value = value;
        }
        public TKey Key { get; set; }
        public TValue Value { get; set; }

        public int CompareTo(Dictionary<TKey, TValue>? other)
        {
            if (other == null) return 1;
            var resultat = Value.CompareTo(other.Value);
            if (resultat != 0)
                return resultat;
            return Key.CompareTo(other.Key);
        }

        public override string ToString()
        {
            return $"{Key} {Value}";
        }

    }    
}
