import { Deduction } from '../../deduction/index';
export class Employee {
    firstName: string;
    lastName: string;
    grossPay: number;
    deductions:Deduction[]=[];
}