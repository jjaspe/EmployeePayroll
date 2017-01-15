import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Constants, HttpService } from '../../utilities/index';
import { Employee } from './employee.model';
import { Deduction } from '../../deduction/index';

@Injectable()
export class EmployeeService {
    url: string;
    employeesCache: Employee[];
    employees: Subject<Employee[]>;
    constructor(private httpService: HttpService) { }

    initUrls(baseUrl: string) {
        this.url = baseUrl + Constants.EMPLOYEE_PATH;
    }

    getEmployees(): Observable<Employee[]> {
        if (this.url) {
            if (!this.employees) {
                this.getEmployeesFromApi().subscribe(n => {
                    this.employeesCache = n;
                    this.employees.next(n);
                });
                this.employees = new Subject<Employee[]>();
            }
        }
        return this.employees;
    }

    getEmployeesFromApi(): Observable<Employee[]> {
        return this.httpService.get(this.url);
    }

    saveEmployee(employee:Employee){
        this.httpService.put(this.url, employee).subscribe(n=>console.log('back'));
    }

    calculateNetPay(employee: Employee) {
        let net: number = employee.grossPay;
        employee.deductions.sort( (a,b) => a.type - b.type).forEach(n => {
            if (n.type == 1) {
                net = net * (1 - n.amount / 100);
            }
            else
                net -= n.amount;
        });
        return net > 0 ? net : 0;
    }

    removeDeduction(employee:Employee, deduction:Deduction){
        employee.deductions = employee.deductions.filter(n=>n.id!==deduction.id);
    }

}