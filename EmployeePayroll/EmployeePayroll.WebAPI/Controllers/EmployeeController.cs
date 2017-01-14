using EmployeePayroll.WebAPI.Models;
using EmployePayroll.Models;
using EmployePayroll.Services.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeePayroll.Controllers
{
    public class EmployeeController : ApiController
    {
        IEmployeeService employeeService;
        public EmployeeController(IEmployeeService service)
        {
            this.employeeService = service;
        }

        [HttpGet]
        public HttpResponseMessage Get()
        {
            try
            {
                var employees = this.employeeService.GetAllEmployees();
                return Request.CreateResponse(HttpStatusCode.OK, employees);
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpGet]
        public HttpResponseMessage Get(string id)
        {
            try
            {
                var employee = this.employeeService.GetEmployee(id);
                return Request.CreateResponse(HttpStatusCode.OK, employee);
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpPost]
        public HttpResponseMessage Post(Employee employee)
        {
            try
            {
                this.employeeService.Add(employee);
                return Request.CreateResponse(HttpStatusCode.OK, employee);
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, e);
            }
        }
    }
}
