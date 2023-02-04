import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared';
import { GetEmployeeAttendanceComponent } from './pages/get-employee-attendance/get-employee-attendance.component';
import { EmplyeesAttendanceRoutingModule } from './employees-attendance-routing.module';
import { CreateEmployeeAttendanceComponent } from './pages/create-employee-attendance/create-employee-attendance.component';






@NgModule({
  declarations: [

  
    GetEmployeeAttendanceComponent,
          CreateEmployeeAttendanceComponent
  ],
  imports: [
    CommonModule,SharedModule,EmplyeesAttendanceRoutingModule
  ]
})
export class EmployeesAttendanceModule { }
