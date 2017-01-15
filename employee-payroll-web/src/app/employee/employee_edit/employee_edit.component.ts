import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee, EmployeeService } from '../shared/index';
import { Deduction, DeductionService } from '../../deduction/index';

@Component({
    moduleId: module.id,
    selector: 'employee-edit',
    templateUrl: 'employee_edit.component.html',
    styleUrls: ['../employee_styles.css']
})
export class EmployeeEditComponent implements OnInit {
    @Input() employee: Employee;
    @Output() done: EventEmitter<any> = new EventEmitter<any>();
    allDeductions: Deduction[];
    constructor(private employeeService: EmployeeService,
        private deductionService: DeductionService) { }

    ngOnInit() {
        this.updateDeductions();
    }

    onBack(){
        this.done.emit();
    }

    onSubmit(){
        this.employeeService.saveEmployee(this.employee);
        this.done.emit();
    }

    addDeduction(deduction:Deduction){
        this.employee.deductions.push(deduction);
        this.updateDeductions();
    }

    removeDeduction(deduction:Deduction){
        this.employeeService.removeDeduction(this.employee,deduction);
        this.updateDeductions();
    }

    updateDeductions(){        
        this.deductionService.getDeductions().subscribe(n => {
            this.allDeductions = n.filter(d=>
                !this.employee.deductions.find(e=>e.id===d.id)
            )
        });
    }

}