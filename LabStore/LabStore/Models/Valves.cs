using MongoDB.Bson.Serialization.Attributes;

namespace LabStore.Models
{
    public class Valves : Model
    {
        public string? _tubeLength { get; set; }
        [BsonElement("Destiny")]
        public string? _destiny { get; set; }
    }
}
