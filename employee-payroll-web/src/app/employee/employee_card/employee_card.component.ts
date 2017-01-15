import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../shared/employee.model';

@Component({
    moduleId: module.id,
    selector: 'employee-card',
    templateUrl: 'employee_card.component.html'
})
export class EmployeeCardComponent implements OnInit {
    @Input() employee:Employee;
    @Output() onSelected = new EventEmitter<any>();
    constructor() { }

    ngOnInit() { }

    selected(){
        this.onSelected.emit();
    }
}