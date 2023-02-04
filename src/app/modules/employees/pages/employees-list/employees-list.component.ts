import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Utilities } from 'src/app/core/Utilities';
import { Employee } from '../../models/employee.model';
import { GetEmployeeList } from '../../models/get-employee-list.model';
import { EmployeesService } from '../../services/employees.service';
import {ConfirmationService} from 'primeng/api';
import { RemoveEmployeeRequest } from '../../models/remove/remove-employee.request';
import { RemoveEmployeeResponse } from '../../models/remove/remove-employee.response';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
   empList : Employee[] = [];

   loading: boolean = true;

   activityValues: number[] = [0, 100];

  constructor(private empService : EmployeesService,private router: Router,
    private tostar: ToastrService,private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getAllEmployees();

  }

  getAllEmployees(){

    this.empService.getEmployeeList().subscribe({
      next: (res) => { 
        this.empList= res.employees;
         this.loading = false; },    
      error: (error) => {
        console.log(error);
    
      }
   
  })
  }
  onAddNewEmployeeClick() {
    debugger
    this.router.navigateByUrl('employee/add');
  }
  onUpdateEmployeeClick(row: Employee) {
    var url = `employee/edit`;
    this.router.navigate([url], {
      queryParams: { empId: row.empid }
    });
  }
  onRmoveEmployeeClick(event: Event,employee :Employee)
  {
    var removeEmployeeRequest = new RemoveEmployeeRequest();
    removeEmployeeRequest.id = employee.empid;
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to remove this item?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.empService.removeEmployee(removeEmployeeRequest).subscribe(
          (response: RemoveEmployeeResponse) => {
            if (response && response.isDeleted) {
              this.tostar.success('Employee Removed Successfully');
                 var elemntIdex = this.empList.indexOf(employee);
              this.empList.splice(elemntIdex,1);
            } else {
              this.tostar.error('Error while Removing new admin');
            }
          },
    
        );
      },
      reject: () => {
          //reject action
      }
  });
  }
}
