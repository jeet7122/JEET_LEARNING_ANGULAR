import {Component, Input} from '@angular/core';
import {Employee} from '../models/employee';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent {
  @Input() employee?:Employee;
  toggleManager(employee: Employee){
    employee.isManager = !employee.isManager
  }
}
