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
var index_1 = require("../utilities/index");
var index_2 = require("./shared/index");
var EmployeeMainComponent = (function () {
    function EmployeeMainComponent(employeeService) {
        this.employeeService = employeeService;
        this.view = index_1.Constants.EmployeeViews.list;
        this.views = index_1.Constants.EmployeeViews;
    }
    EmployeeMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployees().subscribe(function (n) {
            _this.allEmployees = n;
        });
    };
    EmployeeMainComponent.prototype.cardSelected = function (employee) {
        this.selected = employee;
        this.view = index_1.Constants.EmployeeViews.details;
    };
    EmployeeMainComponent.prototype.onBack = function () {
        this.selected = null;
        this.view = index_1.Constants.EmployeeViews.list;
    };
    return EmployeeMainComponent;
}());
EmployeeMainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'employee-main',
        templateUrl: 'employee_main.component.html'
    }),
    __metadata("design:paramtypes", [index_2.EmployeeService])
], EmployeeMainComponent);
exports.EmployeeMainComponent = EmployeeMainComponent;
//# sourceMappingURL=employee_main.component.js.map