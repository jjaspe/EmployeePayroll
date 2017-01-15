import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee_details/employee_details.component';
import { EmployeeListComponent } from './employee_list/employee_list.component';
import { EmployeeCardComponent } from './employee_card/employee_card.component';
import { EmployeeMainComponent } from './employee_main.component';
import { EmployeeEditComponent } from './employee_edit/employee_edit.component';
import { DeductionModule } from '../deduction/deduction.module';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, CommonModule, DeductionModule],
    declarations: [EmployeeDetailsComponent, EmployeeListComponent, 
        EmployeeCardComponent, EmployeeMainComponent, EmployeeEditComponent],
    exports: [EmployeeListComponent, EmployeeDetailsComponent, 
        EmployeeCardComponent, EmployeeMainComponent, EmployeeEditComponent]
})
export class EmployeeModule { }