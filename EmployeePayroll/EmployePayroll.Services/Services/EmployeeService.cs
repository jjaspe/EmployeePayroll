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
        IEntityRepository<EmployeeDeduction> employeeDeductionRepository;
        IEntityRepository<Deduction> deductionRepository;

        public EmployeeService(IEntityRepository<Employee> employeeRepository,
            IEntityRepository<EmployeeDeduction> employeeDeductionRepository,
            IEntityRepository<Deduction> deductionRepository)
        {
            this.employeeRepository = employeeRepository;
            this.deductionRepository = deductionRepository;
            this.employeeDeductionRepository = employeeDeductionRepository;
        }

        public void Add(Employee employee)
        {
            this.employeeRepository.add(employee);
        }

        public List<Employee> GetAll()
        {
            var employees =  this.employeeRepository.getAll().
                Select(n=>addDeductionsToEmployee(n)).ToList();
            return employees;
        }

        public Employee Get(string id)
        {
            return addDeductionsToEmployee(this.employeeRepository.get(id));
        }
        
        //Returns Employee so it can be used in fluid statements
        Employee addDeductionsToEmployee(Employee employee)
        {
            if (employee != null)
            {
                var employeeDeductions = this.employeeDeductionRepository.getAll().
                    Where(n => n.employeeId.Equals(employee.id)).ToList();
                employee.deductions = new List<Deduction>();
                employeeDeductions.ForEach(n => employee.deductions.Add(this.deductionRepository.get(n.deductionId)));
            }
            return employee;
        }

        public void Update(Employee employee)
        {
            var employeeDeductions = this.employeeDeductionRepository.getAll().
                Where(n => n.employeeId.Equals(employee.id)).ToList();            
            
            var removeFromDb = employeeDeductions.Where(n=>!employee.deductions.Select(m=>m.id).Contains(n.deductionId)).ToList();
            var addToDb = employee.deductions.Where(n => !employeeDeductions.Select(m => m.deductionId).Contains(n.id)).ToList();

            removeFromDb.ForEach(n => this.employeeDeductionRepository.remove(n));
            addToDb.ForEach(n =>
            {
                this.employeeDeductionRepository.add(new EmployeeDeduction()
                {
                    employeeId = employee.id,
                    deductionId = n.id
                });
            });

            this.employeeRepository.update(employee);
        }
    }
}
