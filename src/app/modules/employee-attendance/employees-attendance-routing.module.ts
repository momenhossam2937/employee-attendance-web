import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from 'src/app/shell/shell.service';
import { CreateEmployeeAttendanceComponent } from './pages/create-employee-attendance/create-employee-attendance.component';
import { GetEmployeeAttendanceComponent } from './pages/get-employee-attendance/get-employee-attendance.component';




const routes: Routes = [
  Shell.childRoutes([
    {
        path: 'employeesAttendance',
        component: GetEmployeeAttendanceComponent,
        data: { title: 'Employees Attendance' },
      },
      {
        path: 'employeesAttendance/create',
        component: CreateEmployeeAttendanceComponent,
        data: { title: 'Create Employees Attendance' },
      },

  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class EmplyeesAttendanceRoutingModule {}
