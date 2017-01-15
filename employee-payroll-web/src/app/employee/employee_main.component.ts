import { Component, OnInit } from '@angular/core';
import { Constants } from '../utilities/index';
import { Employee, EmployeeService } from './shared/index';
import { Deduction, DeductionService } from '../deduction/index';

@Component({
    moduleId: module.id,
    selector: 'employee-main',
    templateUrl: 'employee_main.component.html',
    styleUrls:['./employee_styles.css']
})
export class EmployeeMainComponent implements OnInit {
    view:string = Constants.EmployeeViews.list;
    views:any = Constants.EmployeeViews;
    allEmployees: Employee[];
    selected: Employee;
    constructor(private employeeService:EmployeeService, private deductionService:DeductionService) { }

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