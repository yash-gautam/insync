import { Injectable } from '@angular/core';
import { Results } from 'src/app/models/data-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const enum endpoint{
  getJobHistory = '/getJobHistory',
  getJobHistoryDepartmentId = '/getJobHistoryDepartmentId',
  getJobHistoryEmployeeId = '/getJobHistoryEmployeeId',
  getJobHistoryJobId = '/getJobHistoryJobId',
  getJobHistoryStartDate = '/getJobHistoryStartDate',
  getJobHistoryEndDate = '/getJobHistoryEndDate',


  getAllEmployees = '/getAllEmployees',
  // getEmployeeName = '/getEmployeeName',
  getEmployeeDepartment = '/getDepartmentforEmployee',

  addJobHistory = '/addJobHistoryToEmployee',
  updateJobHistory = '/updateJobHistory',
  deleteJobHistory = '/deleteJobHistory',

  getJobHistoryById = '/getJobHistoryByID'
}


@Injectable({
  providedIn: 'root'
})
export class JobHistoryService {

  private URL = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  getJobHistoryDetails(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getJobHistory}`, {
    });
  }

  getJobHistoryDepartmentId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getJobHistoryDepartmentId}`, {
    });
  }

  getJobHistoryEmployeeId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getJobHistoryEmployeeId}`, {
    });
  }

  getJobHistoryJobId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getJobHistoryJobId}`, {
    });
  }

  getJobHistoryStartDate(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getJobHistoryStartDate}`, {
    });
  }

  getJobHistoryEndDate(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getJobHistoryEndDate}`, {
    });
  }


  getAllEmployees(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllEmployees}`, {
    });
  }

  // getEmployeeName(): Observable<Results>{
  //   return this.http.get<Results>(`${this.URL}${endpoint.getEmployeeName}`, {
  //   });
  // }



  addJobHistory(employeeId: any, startDate: any, endDate: any, jobId: any, departmentId: any ): Observable<Results>{
    return this.http.post<Results>(`${this.URL}${endpoint.addJobHistory}/${employeeId}/${startDate}/${endDate}/${jobId}/${departmentId}`, {
    });
  }

  updateJobHistory(existingEmployeeId: any, newEmployeeId: any, newStartDate: any,
    newEndDate: any, newJobId: any, newDepartmentId: any): Observable<Results>{
    return this.http.put<Results>(`${this.URL}${endpoint.updateJobHistory}/${existingEmployeeId}/${newEmployeeId}/${newStartDate}/${newEndDate}/${newJobId}/${newDepartmentId}`, {

    });
  }

  deleteJobHistory(employeeId: any): Observable<Results>{
    return this.http.delete<Results>(`${this.URL}${endpoint.deleteJobHistory}/${employeeId}`, {

    });
  }



  getJobHistoryById(employeeId: any): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getJobHistoryById}/${employeeId}`, {
    });
  }


}
