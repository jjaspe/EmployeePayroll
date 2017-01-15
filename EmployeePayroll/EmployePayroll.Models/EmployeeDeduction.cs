using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployePayroll.Models
{
    public class EmployeeDeduction:Entity
    {
        public string employeeId { get; set; }
        public string deductionId { get; set; }
    }
}
