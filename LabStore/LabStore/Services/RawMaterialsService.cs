using LabStore.Models;
using LabStore.Models.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LabStore.Services
{
    public class RawMaterialsService
    {
        private readonly IMongoCollection<RawMaterials> _rawMaterialsCollection;

        public RawMaterialsService(
            IOptions<LabStoreDatabaseSettings> labStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                labStoreDatabaseSettings.Value.ConnectionString);

            var mongoDataBase = mongoClient.GetDatabase(
                labStoreDatabaseSettings.Value.DatabaseName);

            _rawMaterialsCollection = mongoDataBase.GetCollection<RawMaterials>(
                labStoreDatabaseSettings.Value.RawMaterialsCollectionName);
        }
        public async Task<List<RawMaterials>> GetAsync() =>
            await _rawMaterialsCollection.Find(_ => true).ToListAsync();

        public async Task<RawMaterials?> GetAsyncById(string id) =>
            await _rawMaterialsCollection.Find(x => x._id == id).FirstOrDefaultAsync();

        public async Task<RawMaterials> GetAsyncByName(string fullName) =>
            await _rawMaterialsCollection.Find(x => x._fullName == fullName).FirstOrDefaultAsync();

        public async Task CreateAsync(RawMaterials newRawMaterial) =>
            await _rawMaterialsCollection.InsertOneAsync(newRawMaterial);

        public async Task UpdateAsync(string id, RawMaterials updatedRawMaterial) =>
            await _rawMaterialsCollection.ReplaceOneAsync(x => x._id == id, updatedRawMaterial);

        public async Task RemoveAsync(string id) =>
            await _rawMaterialsCollection.DeleteOneAsync(x => x._id == id);
    }
}
