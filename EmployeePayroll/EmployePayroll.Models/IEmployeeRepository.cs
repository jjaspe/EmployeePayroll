using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployePayroll.Models
{
    public interface IEmployeeRepository
    {
         List<Employee> getAll();

         Employee get(ObjectId id);

         void update(Employee employee);

         void add(Employee employee);
    }
}
