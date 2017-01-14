using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeePayroll.WebAPI.Models
{
    public class EmployeeViewModel
    {
        public string id { get; set; }
        public string name { get; set; }
        public double grossPay { get; set; }
    }
}