import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeAttendanceRequest } from '../models/create-employee-attendance/create-employee-attendance-request.model';
import { EmployeeAttendanceResponse } from '../models/create-employee-attendance/create-employee-attendance-response.model';
import { GetEmployeeAttendance } from '../models/get-employees-attendance/get-employees-attendance.model';
import { RemoveEmployeeAttendanceRequest } from '../models/remove-employee-attendance/remove-employee-attendance.request';
import { RemoveEmployeeAttendanceResponse } from '../models/remove-employee-attendance/remove-employee-attendance.response';



@Injectable({
  providedIn: 'root'
})
export class EmployeesAttendanceService {
  private serviceUrl = 'https://localhost:44397/api/attendance';

  constructor(private http: HttpClient) {}

  // getEmployeeAttendanceList(): Observable<GetEmployeeAttendance> {
  //   return this.http.get<GetEmployeeAttendance>(
  //     `${this.serviceUrl}/GetActiveEmployees`
  //   );
  // } 
  getEmployeeAttendanceList(id:number,month:number): Observable<GetEmployeeAttendance> {
    const params = new HttpParams()
    .set('eMPID', id)
    .set('month', month)
    return this.http.get<GetEmployeeAttendance>(
      `${this.serviceUrl}/Get`,{
        params
      }
    );
  }
  public addEmployeeAttendance(request: EmployeeAttendanceRequest): Observable<EmployeeAttendanceResponse> {
    return this.http.post<EmployeeAttendanceResponse>(
      `${this.serviceUrl}/create`,
      request
    );
  }
  public removeEmployeeAttendance(request: RemoveEmployeeAttendanceRequest): Observable<RemoveEmployeeAttendanceResponse> {
    return this.http.post<RemoveEmployeeAttendanceResponse>(
      `${this.serviceUrl}/remove`,
      request
    );
    
  }
  // }
  // public editEmployee(request: EditEmployeeRequest): Observable<EditEmployeeResponse> {
  //   return this.http.post<EditEmployeeResponse>(
  //     `${this.serviceUrl}/Update`,
  //     request
  //   );
  // }
  // public removeEmployee(request: RemoveEmployeeRequest): Observable<RemoveEmployeeResponse> {
  //   return this.http.post<RemoveEmployeeResponse>(
  //     `${this.serviceUrl}/remove`,
  //     request
  //   );
    
  // }
}
