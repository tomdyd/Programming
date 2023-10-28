namespace LabStore.Models.Settings
{
    public class LabStoreDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string CansCollectionName { get; set; } = null!;
        public string RawMaterialsCollectionName { get; set; } = null!;
        public string ValvesCollectionName { get; set; }
    }
}
