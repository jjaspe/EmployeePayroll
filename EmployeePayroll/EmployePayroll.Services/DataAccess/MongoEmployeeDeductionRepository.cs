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
    public class MongoEmployeeDeductionRepository:
        MongoToServiceEntityRepository<MongoEmployeeDeduction,EmployeeDeduction>
    {
        public MongoEmployeeDeductionRepository():
            base(Constants.employeeDeductionTable)
        {}

        protected override EmployeeDeduction toServiceType(MongoEmployeeDeduction mED)
        {
            var employeeDeduction = base.toServiceType(mED);
            employeeDeduction.deductionId = mED.deductionId.ToString();
            employeeDeduction.employeeId = mED.employeeId.ToString();
            return employeeDeduction;
        }

        protected override MongoEmployeeDeduction toMongoType(EmployeeDeduction ed)
        {
            var employeeDeduction = base.toMongoType(ed);
            employeeDeduction.deductionId = new ObjectId(ed.deductionId);
            employeeDeduction.employeeId = new ObjectId(ed.employeeId);
            return employeeDeduction;
        }
    }
}
