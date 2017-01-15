using EmployePayroll.Models;
using EmployePayroll.Services.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeePayroll.WebAPI.Controllers
{
    public class DeductionController : ApiController
    {
        IDeductionService deductionService;
        public DeductionController(IDeductionService service)
        {
            this.deductionService = service;
        }

        [HttpGet]
        public HttpResponseMessage Get()
        {
            try
            {
                var deductions = this.deductionService.GetAllDeductions();
                return Request.CreateResponse(HttpStatusCode.OK, deductions);
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
                var deduction = this.deductionService.GetDeduction(id);
                return Request.CreateResponse(HttpStatusCode.OK, deduction);
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpPost]
        public HttpResponseMessage Post(Deduction deduction)
        {
            try
            {
                this.deductionService.Add(deduction);
                return Request.CreateResponse(HttpStatusCode.OK, deduction);
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, e);
            }
        }
    }
}
