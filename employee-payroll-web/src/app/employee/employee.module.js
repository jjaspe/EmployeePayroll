"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var employee_details_component_1 = require("./employee_details/employee_details.component");
var employee_list_component_1 = require("./employee_list/employee_list.component");
var employee_card_component_1 = require("./employee_card/employee_card.component");
var employee_main_component_1 = require("./employee_main.component");
var EmployeeModule = (function () {
    function EmployeeModule() {
    }
    return EmployeeModule;
}());
EmployeeModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, common_1.CommonModule],
        declarations: [employee_details_component_1.EmployeeDetailsComponent, employee_list_component_1.EmployeeListComponent,
            employee_card_component_1.EmployeeCardComponent, employee_main_component_1.EmployeeMainComponent],
        exports: [employee_list_component_1.EmployeeListComponent, employee_details_component_1.EmployeeDetailsComponent,
            employee_card_component_1.EmployeeCardComponent, employee_main_component_1.EmployeeMainComponent]
    })
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map