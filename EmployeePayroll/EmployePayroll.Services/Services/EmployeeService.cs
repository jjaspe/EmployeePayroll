using EmployePayroll.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployePayroll.Services.Services
{
    public class EmployeeService :  IEmployeeService
    {
        IEntityRepository<Employee> employeeRepository;
        public EmployeeService(IEntityRepository<Employee> employeeRepository)
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
            return this.employeeRepository.get(id);
        }
    }
}
