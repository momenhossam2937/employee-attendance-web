import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
import { EmplyeesRoutingModule } from './employees-routing.module';
import { SharedModule } from 'src/app/shared';
import { CreateEditEmployeeComponent } from './pages/create-edit-employee/create-edit-employee.component';





@NgModule({
  declarations: [
    EmployeesListComponent,
    CreateEditEmployeeComponent,
  ],
  imports: [
    CommonModule,EmplyeesRoutingModule,SharedModule,
  ]
})
export class EmployeesModule { }
