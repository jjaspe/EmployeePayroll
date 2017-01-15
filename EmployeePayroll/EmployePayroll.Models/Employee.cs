using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployePayroll.Models
{
    public class Employee : Entity
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public double grossPay { get; set; }
    }
}
