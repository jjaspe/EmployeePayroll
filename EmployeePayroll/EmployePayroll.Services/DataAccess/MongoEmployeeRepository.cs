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
    public class MongoEmployeeRepository:IEmployeeRepository
    {
        IMongoDatabase db = MongoConnectUtility.getMongoDB();
        public MongoEmployeeRepository()
        {
        }
        public List<Employee> getAll()
        {
            return db.GetCollection<MongoEmployee>(Constants.employeeTable).Find(n=>true).ToList().
              Select(n=>toEmployee(n)).ToList();
        }

        public Employee get(ObjectId id)
        {
            var mongoEmployee= db.GetCollection<MongoEmployee>(Constants.employeeTable).
                Find(n =>n._id == id).FirstOrDefault();
            return mongoEmployee == null ? null : toEmployee(mongoEmployee);
        }

        public void update(Employee employee)
        {
            var mongoEmployee = toMongoEmployee(employee);
            var filter = Builders<MongoEmployee>.Filter.Eq(r => r._id, mongoEmployee._id);
            db.GetCollection<MongoEmployee>(Constants.employeeTable).ReplaceOne(filter, mongoEmployee);
        }

        public void add(Employee employee)
        {
            var mongoEmployee = toMongoEmployee(employee);
            db.GetCollection<MongoEmployee>(Constants.employeeTable).InsertOne(mongoEmployee);
            employee.id = mongoEmployee._id.ToString();
        }


        MongoEmployee toMongoEmployee(Employee employee)
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

        Employee toEmployee(MongoEmployee mEmployee)
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
