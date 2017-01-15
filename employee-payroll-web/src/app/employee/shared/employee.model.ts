import { Deduction } from '../../deduction/index';
export class Employee {
    firstName: string;
    lastName: string;
    grossPay: string;
    deductions:Deduction[]=[];
}