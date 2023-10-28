using LabStore.Models;
using LabStore.Models.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LabStore.Services
{
    public class CansService
    {
        private readonly IMongoCollection<Cans> _cansCollection;

        public CansService(
            IOptions<LabStoreDatabaseSettings> LabStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                LabStoreDatabaseSettings.Value.ConnectionString);

            var mongoDataBase = mongoClient.GetDatabase(
                LabStoreDatabaseSettings.Value.DatabaseName);

            _cansCollection = mongoDataBase.GetCollection<Cans>(
                LabStoreDatabaseSettings.Value.CansCollectionName);
        }

        public async Task<List<Cans>> GetAsync() =>
            await _cansCollection.Find(_ => true).ToListAsync();

        public async Task<Cans?> GetAsyncById(string id) =>
            await _cansCollection.Find(x => x._id == id).FirstOrDefaultAsync();

        public async Task<Cans> GetAsyncByName(string fullName) =>
            await _cansCollection.Find(x => x._fullName == fullName).FirstOrDefaultAsync();

        public async Task CreateAsync(Cans newCan) =>
            await _cansCollection.InsertOneAsync(newCan);

        public async Task UpdateAsync(string id, Cans updatedCan) =>
            await _cansCollection.ReplaceOneAsync(x => x._id == id, updatedCan);

        public async Task RemoveAsync(string id) =>
            await _cansCollection.DeleteOneAsync(x => x._id == id);
    }
}
