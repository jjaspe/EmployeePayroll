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
var employee_model_1 = require("../shared/employee.model");
var EmployeeDetailsComponent = (function () {
    function EmployeeDetailsComponent() {
        this.selected = new core_1.EventEmitter();
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () { };
    return EmployeeDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_model_1.Employee)
], EmployeeDetailsComponent.prototype, "employee", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EmployeeDetailsComponent.prototype, "selected", void 0);
EmployeeDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'employee-details',
        templateUrl: 'employee_details.component.html'
    }),
    __metadata("design:paramtypes", [])
], EmployeeDetailsComponent);
exports.EmployeeDetailsComponent = EmployeeDetailsComponent;
//# sourceMappingURL=employee_details.component.js.map