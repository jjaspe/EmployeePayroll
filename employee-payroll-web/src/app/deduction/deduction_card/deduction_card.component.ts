import { Component, OnInit } from '@angular/core';
import { Deduction } from '../shared/index';

@Component({
    moduleId: module.id,
    selector: 'deduction-card',
    templateUrl: 'deduction_card.component.html'
})
export class DeductionCardComponent implements OnInit {
    dedution:Deduction;
    constructor() { }

    ngOnInit() { }

}