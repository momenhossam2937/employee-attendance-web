import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddEmployeeRequest } from '../models/create/create-employee-request.model';
import { AddEmployeeResponse } from '../models/create/create-employee-response.model';
import { EditEmployeeResponse } from '../models/edit/edit-employee-response.model';
import { EditEmployeeRequest } from '../models/edit/edit_employee-request.model';
import { GetEmployeeList } from '../models/get-employee-list.model';
import { GetEmployee } from '../models/get-employee.model';
import { RemoveEmployeeRequest } from '../models/remove/remove-employee.request';
import { RemoveEmployeeResponse } from '../models/remove/remove-employee.response';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private serviceUrl = 'https://localhost:44397/api/employee';

  constructor(private http: HttpClient) {}

  getEmployeeList(): Observable<GetEmployeeList> {
    return this.http.get<GetEmployeeList>(
      `${this.serviceUrl}/GetActiveEmployees`
    );
  } 
  getEmployee(id:number): Observable<GetEmployee> {
    return this.http.get<GetEmployee>(
      `${this.serviceUrl}/Get?id=`+id
    );
  }
  public addEmployee(request: AddEmployeeRequest): Observable<AddEmployeeResponse> {
    return this.http.post<AddEmployeeResponse>(
      `${this.serviceUrl}/create`,
      request
    );
    
  }
  public editEmployee(request: EditEmployeeRequest): Observable<EditEmployeeResponse> {
    return this.http.post<EditEmployeeResponse>(
      `${this.serviceUrl}/Update`,
      request
    );
  }
  public removeEmployee(request: RemoveEmployeeRequest): Observable<RemoveEmployeeResponse> {
    return this.http.post<RemoveEmployeeResponse>(
      `${this.serviceUrl}/remove`,
      request
    );
    
  }
}
