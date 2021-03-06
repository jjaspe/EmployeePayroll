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
var EmployeeListComponent = (function () {
    function EmployeeListComponent() {
        this.employees = new Array();
        this.onSelected = new core_1.EventEmitter();
    }
    EmployeeListComponent.prototype.ngOnInit = function () { };
    EmployeeListComponent.prototype.cardSelected = function (employee) {
        this.onSelected.emit(employee);
    };
    return EmployeeListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], EmployeeListComponent.prototype, "employees", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EmployeeListComponent.prototype, "onSelected", void 0);
EmployeeListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'employee-list',
        templateUrl: 'employee_list.component.html',
        styleUrls: ['../employee_styles.css']
    }),
    __metadata("design:paramtypes", [])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee_list.component.js.map