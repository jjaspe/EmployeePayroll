using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployePayroll.Services
{
    public static class Constants
    {
        public const string mongoServerKey = "mongoConnection";
        public const string mongoDbNameKey = "mongoDatabase";

        //Tables
        public const string employeeTable = "Employee";
        public const string deductionTable = "Deduction";
        public const string employeeDeductionTable = "EmployeeDeduction";
    }
}
