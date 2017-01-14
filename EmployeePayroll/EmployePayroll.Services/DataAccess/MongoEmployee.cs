using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployePayroll.Services.DataAccess
{
    public class MongoEmployee : MongoEntity
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public double grossPay { get; set; }
    }
}
