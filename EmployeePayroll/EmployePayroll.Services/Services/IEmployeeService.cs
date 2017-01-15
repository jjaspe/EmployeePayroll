using System.Collections.Generic;
using EmployePayroll.Models;

namespace EmployePayroll.Services.Services
{
    public interface IEmployeeService
    {
        List<Employee> GetAll();
        void Add(Employee emp);
        Employee Get(string id);

        void Update(Employee employee);
    }
}