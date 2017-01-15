using EmployePayroll.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployePayroll.Services.DataAccess
{
    public abstract class MongoToServiceEntityRepository<MongoType,ServiceType> : IEntityRepository<ServiceType>
        where MongoType:MongoEntity,new()
        where ServiceType:Entity,new()
    {
        protected IMongoDatabase db = MongoConnectUtility.getMongoDB();
        protected string table;

        public MongoToServiceEntityRepository(string table)
        {
            this.table = table;
        }

        public List<ServiceType> getAll()
        {
            return db.GetCollection<MongoType>(table).Find(n => true).ToList().
              Select(n => toServiceType(n)).ToList();
        }

        public ServiceType get(string id)
        {
            ObjectId _id = new ObjectId(id);
            var mongoEntity = db.GetCollection<MongoType>(table).
                Find(n => n._id == _id).FirstOrDefault();
            return mongoEntity == null ? null : toServiceType(mongoEntity);
        }

        public void update(ServiceType serviceEntity)
        {
            var mongoEntity = toMongoType(serviceEntity);
            var filter = Builders<MongoType>.Filter.Eq(r => r._id, mongoEntity._id);
            db.GetCollection<MongoType>(table).ReplaceOne(filter, mongoEntity);
        }

        public void add(ServiceType serviceEntity)
        {
            var mongoEntity = toMongoType(serviceEntity);
            db.GetCollection<MongoType>(table).InsertOne(mongoEntity);
            serviceEntity.id = mongoEntity._id.ToString();
        }

        public ServiceType remove(ServiceType serviceEntity)
        {
            var mongoEntity = toMongoType(serviceEntity);
            var filter = Builders<MongoType>.Filter.Eq(r => r._id, mongoEntity._id);
            var deletedEntity = db.GetCollection<MongoType>(table).FindOneAndDelete(filter);
            return toServiceType(deletedEntity);
        }

        protected virtual MongoType toMongoType(ServiceType serviceEntity)
        {
            return new MongoType()
            {                
                _id = String.IsNullOrEmpty(serviceEntity.id) ?
                    new ObjectId() : new ObjectId(serviceEntity.id)
            };
        }

        protected virtual ServiceType toServiceType(MongoType mongoEntity)
        {
            return new ServiceType()
            {
                id = mongoEntity._id.ToString()
            };
        }
    }
}
