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
var EmployeeCardComponent = (function () {
    function EmployeeCardComponent() {
        this.onSelected = new core_1.EventEmitter();
    }
    EmployeeCardComponent.prototype.ngOnInit = function () { };
    EmployeeCardComponent.prototype.selected = function () {
        this.onSelected.emit();
    };
    return EmployeeCardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_model_1.Employee)
], EmployeeCardComponent.prototype, "employee", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EmployeeCardComponent.prototype, "onSelected", void 0);
EmployeeCardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'employee-card',
        templateUrl: 'employee_card.component.html',
        styleUrls: ['../employee_styles.css']
    }),
    __metadata("design:paramtypes", [])
], EmployeeCardComponent);
exports.EmployeeCardComponent = EmployeeCardComponent;
//# sourceMappingURL=employee_card.component.js.map