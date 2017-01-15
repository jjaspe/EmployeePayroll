import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../shared/employee.model';

@Component({
    moduleId: module.id,
    selector: 'employee-details',
    templateUrl: 'employee_details.component.html'
})
export class EmployeeDetailsComponent implements OnInit {
    @Input() employee:Employee;
    @Output() selected = new EventEmitter<any>();
    
    constructor() { }

    ngOnInit() { }
}