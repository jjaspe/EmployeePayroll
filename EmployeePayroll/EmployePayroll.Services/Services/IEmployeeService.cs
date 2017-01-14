using System.Collections.Generic;
using EmployePayroll.Models;

namespace EmployePayroll.Services.Services
{
    public interface IEmployeeService
    {
        List<Employee> GetAllEmployees();
        void Add(Employee emp);
        Employee GetEmployee(string id);
    }
}