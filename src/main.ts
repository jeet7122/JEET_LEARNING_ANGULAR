import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {EmployeeDetailsComponent} from './app/employee-details/employee-details.component';
import {EmployeeListComponent} from './app/employee-list/employee-list.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';
import {ModifyEmployeeListComponent} from './app/modify-employee-list/modify-employee-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeeListComponent},
  {path:'employees/:id', component: EmployeeDetailsComponent},
  {path:'modify-employee', component:ModifyEmployeeListComponent},
  {path:'**', component: PageNotFoundComponent}
]
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap Successful'))
