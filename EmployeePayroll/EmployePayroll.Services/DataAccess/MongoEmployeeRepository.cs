using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Driver.Linq;
using EmployePayroll.Models;

namespace EmployePayroll.Services.DataAccess
{
    public class MongoEmployeeRepository:MongoToServiceEntityRepository<MongoEmployee,Employee>
    {
        public MongoEmployeeRepository() :
            base(Constants.employeeTable)
        { }
        
        protected override MongoEmployee toMongoType(Employee employee)
        {
            return new MongoEmployee()
            {
                firstName = employee.firstName,
                lastName = employee.lastName,
                grossPay = employee.grossPay,
                _id = String.IsNullOrEmpty(employee.id)?
                    new ObjectId():new ObjectId(employee.id)
            };
        }

        protected override Employee toServiceType(MongoEmployee mEmployee)
        {
            return new Employee()
            {
                firstName = mEmployee.firstName,
                lastName = mEmployee.lastName,
                grossPay = mEmployee.grossPay,
                id = mEmployee._id.ToString()
            };
        }
    }
}
