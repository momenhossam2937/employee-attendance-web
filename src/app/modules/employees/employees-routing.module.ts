import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from 'src/app/shell/shell.service';
import { CreateEditEmployeeComponent } from './pages/create-edit-employee/create-edit-employee.component';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';



const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'employees',
      component: EmployeesListComponent,
      data: { title: 'employees' },
    },
    {
      path: 'employee/add',
      component: CreateEditEmployeeComponent,
      data: { title: 'Create Employee' }
    },  
    {
      path: 'employee/edit',
      component: CreateEditEmployeeComponent,
      data: { title:'Edit Employee'}
    },

  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class EmplyeesRoutingModule {}
