import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { EmployeeService, Employee } from './employee/index';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    title:string = 'Employee Payroll';
    apiUrl: string;
    constructor(private employeeService: EmployeeService, private elementRef: ElementRef) { }

    ngOnInit() {
        let native = this.elementRef.nativeElement;
        this.apiUrl = native.getAttribute('apiUrl');
        this.employeeService.initUrls(this.apiUrl);
    }

}