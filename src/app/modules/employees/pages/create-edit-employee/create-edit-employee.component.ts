import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddEditEmployee } from '../../models/add-edit-employee.model';
import { AddEmployeeRequest } from '../../models/create/create-employee-request.model';
import { AddEmployeeResponse } from '../../models/create/create-employee-response.model';
import { EditEmployeeResponse } from '../../models/edit/edit-employee-response.model';
import { EditEmployeeRequest } from '../../models/edit/edit_employee-request.model';

import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-create-edit-employee',
  templateUrl: './create-edit-employee.component.html',
  styleUrls: ['./create-edit-employee.component.css']
})
export class CreateEditEmployeeComponent implements OnInit {
  addEmployeeRequest!: AddEmployeeRequest;

  editEmployeeRequest!: EditEmployeeRequest;

  addEditEmployeeModel!:AddEditEmployee;

  isFormSubmitted: boolean = false;
  empId: number =0;
  editMode: boolean = false;

  constructor(
    private empService : EmployeesService,
    private tostar: ToastrService,
    private router: Router, 
    private activatedRoute: ActivatedRoute) 
    { }

  ngOnInit(): void {
    debugger
    this.activatedRoute.queryParams.subscribe(params => {
      this.initComponent(params);
    
    });
  
  }

  initComponent(params: any) {
    this.addEditEmployeeModel = new AddEditEmployee();
    if (params && params.empId) {
      this.empId = params.empId;
      this.editMode = true;

      this.loadEmployee();

     
    }
    
  }
  loadEmployee() {
    this.empService.getEmployee(this.empId).subscribe({
     
      next: (res) => { 
        console.log(res)
        this.addEditEmployeeModel.empid = res.employee.empid
        this.addEditEmployeeModel.name = res.employee.name
        this.addEditEmployeeModel.email = res.employee.email
        this.addEditEmployeeModel.phone = res.employee.phoneNo
        
      },    
      error: (error) => {
        console.log(error);
    
      }
   
  })
  }
  
  saveEmployee(empForm: NgForm) {
    if (!empForm.valid) {
      this.isFormSubmitted = true;
      return;
    }
   if(this.editMode)
   {
    this.editEmployeeRequest = {
      id: this.addEditEmployeeModel.empid,
      name: this.addEditEmployeeModel.name,
      phone: this.addEditEmployeeModel.phone,
      email: this.addEditEmployeeModel.email,
      }
    
    this.editEmployee();
   }
   else
   {
    this.addEmployeeRequest = {
      name: this.addEditEmployeeModel.name,
      phone: this.addEditEmployeeModel.phone,
      email: this.addEditEmployeeModel.email,
      }
    this.addEmployee();
   }

    
    }
  editEmployee() { 
    this.empService.editEmployee(this.editEmployeeRequest).subscribe(
      (response: EditEmployeeResponse) => {
        if (response && response.isUpdated) {
          this.tostar.success('Employee Updated Successfully');
          this.router.navigateByUrl('employees');
        } else {
          this.tostar.error('Error while adding new admin');
        }
      },

    );
  }
  
  addEmployee()
  {
    this.empService.addEmployee(this.addEmployeeRequest).subscribe(
      (response: AddEmployeeResponse) => {
        if (response && response.isCreated) {
          this.tostar.success('Employee Created Successfully');
          this.router.navigateByUrl('employees');
        } else {
          this.tostar.error('Error while adding new admin');
        }
      },

    );
  }
}
