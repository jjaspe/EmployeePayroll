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
var index_1 = require("../shared/index");
var EmployeeDetailsComponent = (function () {
    function EmployeeDetailsComponent(employeeService) {
        this.employeeService = employeeService;
        this.onDeductionSelected = new core_1.EventEmitter();
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
    };
    EmployeeDetailsComponent.prototype.netPay = function () {
        return this.employee ? this.employeeService.calculateNetPay(this.employee) : 0;
    };
    EmployeeDetailsComponent.prototype.deductionSelected = function (deduction) {
        this.onDeductionSelected.emit(deduction);
    };
    return EmployeeDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Employee)
], EmployeeDetailsComponent.prototype, "employee", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EmployeeDetailsComponent.prototype, "onDeductionSelected", void 0);
EmployeeDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'employee-details',
        templateUrl: 'employee_details.component.html',
        styleUrls: ['../employee_styles.css']
    }),
    __metadata("design:paramtypes", [index_1.EmployeeService])
], EmployeeDetailsComponent);
exports.EmployeeDetailsComponent = EmployeeDetailsComponent;
//# sourceMappingURL=employee_details.component.js.map