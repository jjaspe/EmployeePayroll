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
var deduction_detail_component_1 = require("./deduction_detail/deduction_detail.component");
var deduction_list_component_1 = require("./deduction_list/deduction_list.component");
var deduction_card_component_1 = require("./deduction_card/deduction_card.component");
var DeductionModule = (function () {
    function DeductionModule() {
    }
    return DeductionModule;
}());
DeductionModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, common_1.CommonModule],
        declarations: [deduction_detail_component_1.DeductionDetailComponent, deduction_list_component_1.DeductionListComponent,
            deduction_card_component_1.DeductionCardComponent],
        exports: [deduction_list_component_1.DeductionListComponent, deduction_detail_component_1.DeductionDetailComponent,
            deduction_card_component_1.DeductionCardComponent]
    })
], DeductionModule);
exports.DeductionModule = DeductionModule;
//# sourceMappingURL=deduction.module.js.map