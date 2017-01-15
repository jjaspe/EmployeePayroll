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
var index_2 = require("../../deduction/index");
var EmployeeEditComponent = (function () {
    function EmployeeEditComponent(employeeService, deductionService) {
        this.employeeService = employeeService;
        this.deductionService = deductionService;
        this.done = new core_1.EventEmitter();
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        this.updateDeductions();
    };
    EmployeeEditComponent.prototype.onBack = function () {
        this.done.emit();
    };
    EmployeeEditComponent.prototype.onSubmit = function () {
        this.employeeService.saveEmployee(this.employee);
        this.done.emit();
    };
    EmployeeEditComponent.prototype.addDeduction = function (deduction) {
        this.employee.deductions.push(deduction);
        this.updateDeductions();
    };
    EmployeeEditComponent.prototype.removeDeduction = function (deduction) {
        this.employeeService.removeDeduction(this.employee, deduction);
        this.updateDeductions();
    };
    EmployeeEditComponent.prototype.updateDeductions = function () {
        var _this = this;
        this.deductionService.getDeductions().subscribe(function (n) {
            _this.allDeductions = n.filter(function (d) {
                return !_this.employee.deductions.find(function (e) { return e.id === d.id; });
            });
        });
    };
    return EmployeeEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Employee)
], EmployeeEditComponent.prototype, "employee", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EmployeeEditComponent.prototype, "done", void 0);
EmployeeEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'employee-edit',
        templateUrl: 'employee_edit.component.html',
        styleUrls: ['../employee_styles.css']
    }),
    __metadata("design:paramtypes", [index_1.EmployeeService,
        index_2.DeductionService])
], EmployeeEditComponent);
exports.EmployeeEditComponent = EmployeeEditComponent;
//# sourceMappingURL=employee_edit.component.js.map