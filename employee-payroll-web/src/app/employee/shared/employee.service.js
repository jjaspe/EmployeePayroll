"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var index_1 = require("../../utilities/index");
var EmployeeService = (function () {
    function EmployeeService(httpService) {
        this.httpService = httpService;
    }
    EmployeeService.prototype.initUrls = function (baseUrl) {
        this.url = baseUrl + index_1.Constants.EMPLOYEE_PATH;
    };
    EmployeeService.prototype.getEmployees = function () {
        var _this = this;
        if (this.url) {
            if (!this.employees) {
                this.getEmployeesFromApi().subscribe(function (n) {
                    _this.employeesCache = n;
                    _this.employees.next(n);
                });
                this.employees = new Rx_1.Subject();
            }
        }
        return this.employees;
    };
    EmployeeService.prototype.getEmployeesFromApi = function () {
        return this.httpService.get(this.url);
    };
    EmployeeService.prototype.saveEmployee = function (employee) {
        this.httpService.put(this.url, employee).subscribe(function (n) { return console.log('back'); });
    };
    EmployeeService.prototype.calculateNetPay = function (employee) {
        var net = employee.grossPay;
        employee.deductions.sort(function (a, b) { return a.type - b.type; }).forEach(function (n) {
            if (n.type == 1) {
                net = net * (1 - n.amount / 100);
            }
            else
                net -= n.amount;
        });
        return net > 0 ? net : 0;
    };
    EmployeeService.prototype.removeDeduction = function (employee, deduction) {
        employee.deductions = employee.deductions.filter(function (n) { return n.id !== deduction.id; });
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.HttpService])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map