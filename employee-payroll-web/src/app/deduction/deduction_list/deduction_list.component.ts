import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Deduction } from '../shared/index';

@Component({
    moduleId: module.id,
    selector: 'deduction-list',
    templateUrl: 'deduction_list.component.html',
    styles: ['../deduction_styles.css']
})
export class DeductionListComponent implements OnInit {
    @Input() deductions:Deduction[];
    @Output() onSelected: EventEmitter<Deduction> = new EventEmitter<Deduction>();
    selectedCard:Deduction;
    constructor() { }

    ngOnInit() { }

    selected(deduction:Deduction){
        this.selectedCard=deduction;
        this.onSelected.emit(deduction);
    }

}