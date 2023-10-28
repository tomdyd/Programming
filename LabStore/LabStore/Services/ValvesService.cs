using LabStore.Models;
using LabStore.Models.Settings;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace LabStore.Services
{
    public class ValvesService
    {
        private readonly IMongoCollection<Valves> _valvesCollection;

        public ValvesService(
            IOptions<LabStoreDatabaseSettings> labStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                labStoreDatabaseSettings.Value.ConnectionString);

            var mongoDataBase = mongoClient.GetDatabase(
                labStoreDatabaseSettings.Value.DatabaseName);

            _valvesCollection = mongoDataBase.GetCollection<Valves>(
                labStoreDatabaseSettings.Value.ValvesCollectionName);
        }

        public async Task<List<Valves>> GetAsync()
        {
            return await _valvesCollection.Find(_ => true).ToListAsync();
        }

        public async Task<Valves> GetAsyncById(string id)
        {
            return await _valvesCollection.Find(x => x._id == id).FirstOrDefaultAsync();
        }

        public async Task<Valves> GetAsyncByName(string name)
        {
            return await _valvesCollection.Find(x => x._fullName == name).FirstOrDefaultAsync();
        }

        public async Task CreateAsync(Valves newValve)
        {
            await _valvesCollection.InsertOneAsync(newValve);
        }

        public async Task UpdateAsync(Valves updatedValve, string id)
        {
            await _valvesCollection.ReplaceOneAsync(x => x._id == id, updatedValve);
        }

        public async Task DeleteAsync(string id)
        {
            await _valvesCollection.DeleteOneAsync(x => x._id == id);
        }
    }
}
