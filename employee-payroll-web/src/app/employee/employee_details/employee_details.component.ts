import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee, EmployeeService } from '../shared/index';
import { Deduction } from '../../deduction/index';

@Component({
    moduleId: module.id,
    selector: 'employee-details',
    templateUrl: 'employee_details.component.html',
    styleUrls:['../employee_styles.css']
})
export class EmployeeDetailsComponent implements OnInit {
    @Input() employee:Employee;
    @Output() onDeductionSelected = new EventEmitter<Deduction>();
    
    constructor(private employeeService:EmployeeService) { }

    ngOnInit() { 
        
    }

    netPay():number{
        return this.employee?this.employeeService.calculateNetPay(this.employee):0;
    }

    deductionSelected(deduction:Deduction){
        this.onDeductionSelected.emit(deduction);
    }
}