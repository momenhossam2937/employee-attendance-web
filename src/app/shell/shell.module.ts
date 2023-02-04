import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { EmployeesModule } from "../modules/employees/employees.module";


@NgModule({
  
    imports: [
        CoreModule,
        CommonModule,
        RouterModule,
        SharedModule,
        EmployeesModule,
        
    ],
    declarations: [
      HeaderComponent,
      ShellComponent,
      
  ],
})
export class ShellModule {}
