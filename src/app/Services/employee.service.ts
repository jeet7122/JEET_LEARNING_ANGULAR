import { Injectable } from '@angular/core';
import {employeeList} from '../Shared/mockEmployee.data';
import {Observable, of} from 'rxjs';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = employeeList;

  constructor() { }
  getEmployees(): Observable<Employee[]>{
    return of(employeeList);
  }
  addEmployee(newEmployee:Employee): Observable<Employee[]>{
    this.employees.push(newEmployee)
    return of(employeeList);
  }

  updateEmployee(updatedEmployee:Employee): Observable<Employee[]>{
    const index = this.employees.findIndex(employee => employee.id === updatedEmployee.id)
    if(index !== -1){
      this.employees[index] = updatedEmployee;
    }
    return of(employeeList);
  }

  deleteEmployee(employeeId:number): Observable<Employee[]>{
    this.employees = this.employees.filter(employee => employee.id === employeeId)
    return of(this.employees);
  }
  getEmployeeByID(employeeId:number): Observable<Employee| undefined>{
    const employee = this.employees.find(employee => employee.id === employeeId)
    return of(employee);
  }

}
