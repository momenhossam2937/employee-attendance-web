import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from './shell/shell.service';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./modules/employees/employees.module').then((m) => m.EmployeesModule),
  },
  {
    path: '',
    loadChildren: () =>
    import('./modules/employee-attendance/employees-attendance.module').then((m) => m.EmployeesAttendanceModule),
  },

  // Fallback when no prior route is matched
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
