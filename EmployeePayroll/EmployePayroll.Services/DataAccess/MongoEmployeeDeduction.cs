using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployePayroll.Services.DataAccess
{
    public class MongoEmployeeDeduction:MongoEntity
    {
        public ObjectId employeeId { get; set; }
        public ObjectId deductionId { get; set; }
    }
}
