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
    public class MongoDeductionRepository:MongoEntityRepository<MongoDeduction,Deduction>
    {
        IMongoDatabase db = MongoConnectUtility.getMongoDB();
        public MongoDeductionRepository():
            base(Constants.deductionTable)
        {
        }

        protected override MongoDeduction toMongoType(Deduction deduction)
        {
            var mongoDeduction = base.toMongoType(deduction);
            mongoDeduction.name = deduction.name;
            mongoDeduction.type = deduction.type;
            mongoDeduction.amount = deduction.amount;
            return mongoDeduction;
        }

        protected override Deduction toServiceType(MongoDeduction mongoDeduction)
        {
            var deduction = base.toServiceType(mongoDeduction);
            deduction.name = mongoDeduction.name;
            deduction.type = mongoDeduction.type;
            deduction.amount = mongoDeduction.amount;
            return deduction;
        }
    }

    
}
