import { Component, OnInit } from '@angular/core';
import { Constants } from '../utilities/index';
import { Employee, EmployeeService } from './shared/index';

@Component({
    moduleId: module.id,
    selector: 'employee-main',
    templateUrl: 'employee_main.component.html'
})
export class EmployeeMainComponent implements OnInit {
    view:string = Constants.EmployeeViews.list;
    views:any = Constants.EmployeeViews;
    allEmployees: Employee[];
    selected: Employee;
    constructor(private employeeService:EmployeeService) { }

    ngOnInit() { 
        this.employeeService.getEmployees().subscribe(n=>{
            this.allEmployees = n;
        });
    }

    cardSelected(employee:any){
        this.selected = employee;
        this.view = Constants.EmployeeViews.details;
    }

    onBack(){
        this.selected = null;
        this.view = Constants.EmployeeViews.list;
    }
}