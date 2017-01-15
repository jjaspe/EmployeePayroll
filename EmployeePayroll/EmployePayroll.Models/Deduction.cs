using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployePayroll.Models
{
    public class Deduction : Entity
    {
        public string name { get; set; }
        public double amount { get; set; }
        public DeductionType type { get; set; }
    }
}
