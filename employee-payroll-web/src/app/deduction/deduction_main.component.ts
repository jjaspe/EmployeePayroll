import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Deduction } from './shared/index';
import { Employee} from '../employee/index';

@Component({
    moduleId: module.id,
    selector: 'deduction_main',
    templateUrl: 'deduction_main.component.html',
    styles: ['app/deduction/deduction_styles.css']
})
export class DeductionMainComponent implements OnInit {
    @Input() employee:Employee;
    notSelectedDeductions:Deduction[];
    constructor() { }

    ngOnInit() { }

}