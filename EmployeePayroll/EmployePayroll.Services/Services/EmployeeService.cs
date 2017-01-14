using EmployePayroll.Models;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployePayroll.Services.Services
{
    public class EmployeeService : IEmployeeService
    {
        IEmployeeRepository employeeRepository;
        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            this.employeeRepository = employeeRepository;
        }

        public void Add(Employee employee)
        {
            this.employeeRepository.add(employee);
        }

        public List<Employee> GetAllEmployees()
        {
            return this.employeeRepository.getAll();
        }

        public Employee GetEmployee(string id)
        {
            ObjectId _id = new ObjectId(id);
            return this.employeeRepository.get(_id);
        }
    }
}
