using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace LabStore.Models
{
    public class Model
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _id { get; set; }
        public string? _index { get; set; }
        [BsonElement("Name")]
        public string? _fullName { get; set; }
        public string _inci { get; set; }
        public string? _supplier { get; set; }
        public string _producer { get; set; }
        public DateOnly _acceptanceDate { get; set; }
        public DateOnly _expiriationDate { get; set; }
        public int _amount { get; set; }
        public string? _storagePlace { get; set; }
    }
}
