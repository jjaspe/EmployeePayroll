import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Constants, HttpService } from '../../utilities/index';
import { Employee } from './employee.model';

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

}