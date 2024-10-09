import { Component } from '@angular/core';
import {Employee} from '../models/employee';
import {NgForOf, NgIf} from '@angular/common';
import {EmployeeDetailsComponent} from '../employee-details/employee-details.component';
import {EmployeeService} from '../Services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    NgForOf,
    EmployeeDetailsComponent,
    NgIf
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  displayedColumn:string[] = ['id', 'firstName', 'lastName', 'status', 'isManager'];
  employeeList:Employee [] = [];
  featuredEmployee?: Employee;
  constructor(private employeeServices: EmployeeService) {
  }
  ngOnInit(){
    this.employeeServices.getEmployees().subscribe({
      next: (data:Employee[])=> this.employeeList = data,
      error: err => console.log("Error fetching details", err),
      complete:()=> console.log("Fetch completed!")
    })
  }
  selectedEmployee?: Employee;
  selectEmployee(employee: Employee): void{
    this.selectedEmployee = employee;
  }
}
