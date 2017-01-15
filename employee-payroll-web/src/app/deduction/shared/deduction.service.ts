import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Constants, HttpService } from '../../utilities/index';
import { Deduction } from './deduction.model';

@Injectable()
export class DeductionService {
    url: string;
    deductionsCache: Deduction[];
    deductions: Subject<Deduction[]>;
    constructor(private httpService: HttpService) { }

    initUrls(baseUrl: string) {
        this.url = baseUrl + Constants.DEDUCTIONS_PATH;
    }

    getDeductions(): Observable<Deduction[]> {
        if (this.url) {
            if (!this.deductions) {
                this.getDeductionsFromApi().subscribe(n => {
                    this.deductionsCache = n;           
                    this.deductions.next(n);
                });
                this.deductions = new Subject<Deduction[]>();
            }
        }
        return this.deductions;
    }

    getDeductionsFromApi(): Observable<Deduction[]> {
        return this.httpService.get(this.url);
    }

}