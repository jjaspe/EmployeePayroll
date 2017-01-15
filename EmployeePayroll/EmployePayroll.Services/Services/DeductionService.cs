using EmployePayroll.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployePayroll.Services.Services
{
    public class DeductionService : IDeductionService
    {
        IEntityRepository<Deduction> DeductionRepository;
        public DeductionService(IEntityRepository<Deduction> DeductionRepository)
        {
            this.DeductionRepository = DeductionRepository;
        }

        public void Add(Deduction Deduction)
        {
            this.DeductionRepository.add(Deduction);
        }

        public List<Deduction> GetAllDeductions()
        {
            return this.DeductionRepository.getAll();
        }

        public Deduction GetDeduction(string id)
        {
            return this.DeductionRepository.get(id);
        }
    }
}
