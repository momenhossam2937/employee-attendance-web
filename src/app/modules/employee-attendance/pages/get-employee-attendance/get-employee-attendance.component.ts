import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { EmployeeAttendance } from '../../models/employees-attendance.model';
import { RemoveEmployeeAttendanceRequest } from '../../models/remove-employee-attendance/remove-employee-attendance.request';
import { RemoveEmployeeAttendanceResponse } from '../../models/remove-employee-attendance/remove-employee-attendance.response';
import { EmployeesAttendanceService } from '../../service/employees-attendance.service';

@Component({
  selector: 'app-get-employee-attendance',
  templateUrl: './get-employee-attendance.component.html',
  styleUrls: ['./get-employee-attendance.component.css']
})
export class GetEmployeeAttendanceComponent implements OnInit {
  employeeAttendanceList:EmployeeAttendance[] =[]; 

  loading: boolean = false; 

  activityValues: number[] = [0, 100];
  empId:number = 0;
  month:number = 0;
  isFormSubmitted:boolean = false;
  constructor(private employeesAttendanceService:EmployeesAttendanceService, private tostar: ToastrService,private router: Router,private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

  }

  getEmployeeAttendance(empAttendanceForm: NgForm) {
    if (!empAttendanceForm.valid) {
      this.isFormSubmitted = true;
      return;
    }
     if(this.empId <=0 || this.month<=0)
     {
      this.tostar.error('Employee Id And Month Must Be Greater Than zero');
     }


    this.loading = true;

    this.employeesAttendanceService.getEmployeeAttendanceList(this.empId,this.month).subscribe({
      next: (res) => { 
        if(res.isSuccess)
        {
          this.employeeAttendanceList = res.employeeAttendances;
        }
        else
        {
             this.tostar.error(res.error)
        }
    
        this.loading = false; 
        },    
      error: (error) => {
        this.loading = false;
        console.log(error);
    
      }
   
  })
    
    }
    clearEmployeeAttendance()
    {
      debugger
      this.employeeAttendanceList = []
      this.empId = 0;
      this.month = 0;
    }
    onAddNewEmployeeAttendanceClick(){
      this.router.navigateByUrl('employeesAttendance/create');
    }
    onRmoveEmployeeAttendanceClick(event: Event,attendance :EmployeeAttendance){
      var removeEmployeeAttendanceRequest = new RemoveEmployeeAttendanceRequest();
      removeEmployeeAttendanceRequest.employeeId = attendance.userID;
      removeEmployeeAttendanceRequest.date = attendance.date;
      this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to remove this item?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.employeesAttendanceService.removeEmployeeAttendance(removeEmployeeAttendanceRequest).subscribe(
            (response: RemoveEmployeeAttendanceResponse) => {
              if (response && response.isDeleted) {
                debugger
                this.tostar.success('Employee Attendance Removed Successfully');
                   var elemntIdex = this.employeeAttendanceList.indexOf(attendance);
                 var newItem = new EmployeeAttendance();
                 newItem.userID = attendance.userID;
                 newItem.date = attendance.date;
                 newItem.FirstRecordDateTime = "";
                 newItem.LastRecordDateTime = "";

                this.employeeAttendanceList[elemntIdex] =newItem
             

               
              } else {
                this.tostar.error('Error while Removing new Employee Attendance');
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
