import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeductionDetailComponent } from './deduction_detail/deduction_detail.component';
import { DeductionListComponent } from './deduction_list/deduction_list.component';
import { DeductionCardComponent } from './deduction_card/deduction_card.component';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, CommonModule],
    declarations: [DeductionDetailComponent, DeductionListComponent, 
        DeductionCardComponent],
    exports: [DeductionListComponent, DeductionDetailComponent, 
        DeductionCardComponent]
})
export class DeductionModule { }