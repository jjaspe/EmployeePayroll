import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpService } from './utilities/http.service'
import { EmployeeModule } from './employee/employee.module';
import { EmployeeService } from './employee/index';
import { DeductionModule } from './deduction/deduction.module';
import { DeductionService } from './deduction/index';

@NgModule({
    imports: [BrowserModule, HttpModule, EmployeeModule, CommonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [HttpService, EmployeeService]
})
export class AppModule { }
