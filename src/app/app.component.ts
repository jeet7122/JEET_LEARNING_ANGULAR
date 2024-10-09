import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Employee} from './models/employee';
import {NgForOf, NgIf} from '@angular/common';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeService} from './Services/employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, EmployeeListComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  // title = 'Employee List';
  // name:string = 'Jeet Thakkar';
  // message:string = 'Welcome to my first Angular App';
  title:string = 'Employee-List';
  featuredEmployee?:Employee;

  constructor(private employeeServices: EmployeeService){}
  ngOnInit() {
    this.employeeServices.getEmployeeByID(1).subscribe({
      next: (employee)=>{
        this.featuredEmployee= employee;
      },
      error: err => console.log('Error fetching employee', err),
      complete: ()=> console.log('fetch completed!')
    });
  }


}
