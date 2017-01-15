using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployePayroll.Services
{
    public static class Constants
    {
        public const string mongoLocalDbConnectionKey = "localMongoConnection";
        public const string mongoRemoteDbConnectionKey = "remoteMongoConnection";
        public const string mongoDbNameKey = "mongoDatabase";
        public const string runLocalKey = "local";

        //Tables
        public const string employeeTable = "Employee";
        public const string deductionTable = "Deduction";
        public const string employeeDeductionTable = "EmployeeDeduction";
    }
}
