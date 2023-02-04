import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GetEmployeeDropDown } from 'src/app/modules/employees/models/get-employee-drop-down.model';
import { EmployeesService } from 'src/app/modules/employees/services/employees.service';
import { EmployeeAttendanceRequest } from '../../models/create-employee-attendance/create-employee-attendance-request.model';
import { EmployeeAttendanceResponse } from '../../models/create-employee-attendance/create-employee-attendance-response.model';
import { EmployeesAttendanceService } from '../../service/employees-attendance.service';

@Component({
  selector: 'app-create-employee-attendance',
  templateUrl: './create-employee-attendance.component.html',
  styleUrls: ['./create-employee-attendance.component.css']
})
export class CreateEmployeeAttendanceComponent implements OnInit {
   employees : GetEmployeeDropDown[]=[];
   empId:string = '';
   isFormSubmitted : boolean=false;
   employeeAttendanceRequest : EmployeeAttendanceRequest = new EmployeeAttendanceRequest();
  constructor(private empService : EmployeesService,private employeesAttendanceService:EmployeesAttendanceService,
      private tostar: ToastrService, private router: Router, ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }
  loadEmployees() {
    this.empService.getEmployeeList().subscribe({
      next: (res) => { 
      this.employees =  res.employees.map(data=> {
        return{
          id : data.empid,
          name:data.name
        }
        } );
    },    
      error: (error) => {
        console.log(error);
    
      }
   
  })
  }
  saveEmployeeAttendance(empForm: NgForm){
    if (!empForm.valid) {
      this.isFormSubmitted = true;
      return;
    }
    if(this.employeeAttendanceRequest.eMPID && this.employeeAttendanceRequest.eMPID ==null)
    {
       this.tostar.error("Employee is required");
    }
   this.employeesAttendanceService.addEmployeeAttendance(this.employeeAttendanceRequest).subscribe(     
    (response: EmployeeAttendanceResponse) => {
    if (response && response.isCreated) {
      this.tostar.success('Employee Attendance Created Successfully');
      this.router.navigateByUrl('employeesAttendance');
    } else {
      this.tostar.error('Error while adding new Employee Attendance');
    }
  },);
  }
}


