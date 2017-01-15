import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../shared/employee.model';

@Component({
    moduleId: module.id,
    selector: 'employee-list',
    templateUrl: 'employee_list.component.html',
    styleUrls:['../employee_styles.css']
})
export class EmployeeListComponent implements OnInit {
    @Input() employees: Employee[] = new Array<Employee>();
    @Output() onSelected: EventEmitter<Employee> = new EventEmitter<Employee>();
    constructor() { }

    ngOnInit() { }

    cardSelected(employee:Employee){
        this.onSelected.emit(employee);
    }

}