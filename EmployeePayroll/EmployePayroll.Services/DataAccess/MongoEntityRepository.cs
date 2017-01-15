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
    public abstract class MongoEntityRepository<MongoType,ServiceType> : IEntityRepository<ServiceType>
        where MongoType:MongoEntity,new()
        where ServiceType:Entity,new()
    {
        IMongoDatabase db = MongoConnectUtility.getMongoDB();
        protected string table;

        public MongoEntityRepository(string table)
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
            var mongoType = db.GetCollection<MongoType>(table).
                Find(n => n._id == _id).FirstOrDefault();
            return mongoType == null ? null : toServiceType(mongoType);
        }

        public void update(ServiceType serviceType)
        {
            var mongoType = toMongoType(serviceType);
            var filter = Builders<MongoType>.Filter.Eq(r => r._id, mongoType._id);
            db.GetCollection<MongoType>(table).ReplaceOne(filter, mongoType);
        }

        public void add(ServiceType serviceType)
        {
            var mongoType = toMongoType(serviceType);
            db.GetCollection<MongoType>(table).InsertOne(mongoType);
            serviceType.id = mongoType._id.ToString();
        }

        protected virtual MongoType toMongoType(ServiceType serviceType)
        {
            return new MongoType()
            {                
                _id = String.IsNullOrEmpty(serviceType.id) ?
                    new ObjectId() : new ObjectId(serviceType.id)
            };
        }

        protected virtual ServiceType toServiceType(MongoType mongoType)
        {
            return new ServiceType()
            {
                id = mongoType._id.ToString()
            };
        }
    }
}
