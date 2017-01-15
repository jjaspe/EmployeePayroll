using System.Collections.Generic;
using EmployePayroll.Models;

namespace EmployePayroll.Services.Services
{
    public interface IDeductionService
    {
        void Add(Deduction Deduction);
        List<Deduction> GetAllDeductions();
        Deduction GetDeduction(string id);
    }
}