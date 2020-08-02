import { observable, action } from 'mobx';
import {Employee} from "../models/employee";

export class EmployeesStore {
    @observable
    employees: Employee[] = [];

    @action
    addEmployee = (employee: Employee) => {
        this.employees.push(employee)
    }

    @action
    editEmployee = (index: number, employee: Employee) => {
        this.employees[index] = employee;
    }

    @action
    removeEmployee = (index: number) => {
        this.employees = this.employees.filter((e, i) => i !== index)
    }
}