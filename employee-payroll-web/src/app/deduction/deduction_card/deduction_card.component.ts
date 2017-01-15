import { Component, OnInit, Input } from '@angular/core';
import { Deduction } from '../shared/index';

@Component({
    moduleId: module.id,
    selector: 'deduction-card',
    templateUrl: 'deduction_card.component.html',
    styleUrls: ['../deduction_styles.css']
})
export class DeductionCardComponent implements OnInit {
    @Input() deduction:Deduction;
    constructor() { }

    ngOnInit() { }

}