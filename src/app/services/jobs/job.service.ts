import { Injectable } from '@angular/core';
import { Results } from 'src/app/models/data-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const enum endpoint{
  getAllJobs = '/getAllJobs',
  getJobId = '/getJobId',
  getJobMaxSalary = '/getJobMaxSalary',
  getJobMinSalary = '/getJobMinSalary',


  getAllEmployees = '/getAllEmployees',
  getEmployeeName = '/getEmployeeName',
  getEmployeeDepartment = '/getDepartmentforEmployee',

  addJob = '/addJobsToDepartment',
  updateJob = '/updateJobs',
  deleteJob = '/deleteJob',

  getAllEmployeesInJob = '/getAllEmployeesInJob',
  getJobById = '/getJobByID'
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private URL = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  getJobDetails(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllJobs}`, {
    });
  }

  getJobTitles(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllJobs}`, {
    });
  }

  getJobId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getJobId}`, {
    });
  }

  getJobMaxSalary(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getJobMaxSalary}`, {
    });
  }

  getJobMinSalary(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getJobMinSalary}`, {
    });
  }


  getAllEmployees(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllEmployees}`, {
    });
  }

  getEmployeeName(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getEmployeeName}`, {
    });
  }



  addJob(jobId: any, jobTitle: any, minSalary: any, maxSalary: any, departmentId: any ): Observable<Results>{
    return this.http.post<Results>(`${this.URL}${endpoint.addJob}/${jobId}/${jobTitle}/${minSalary}/${maxSalary}/${departmentId}`, {
    });
  }

  updateJob(existingJobTitle: any, newJobId: any, newJobTitle: any,
    newMinSalary: any, newMaxSalary: any): Observable<Results>{
    return this.http.put<Results>(`${this.URL}${endpoint.updateJob}/${existingJobTitle}/${newJobId}/${newJobTitle}/${newMinSalary}/${newMaxSalary}`, {

    });
  }

  deleteJob(jobTitle: any): Observable<Results>{
    return this.http.delete<Results>(`${this.URL}${endpoint.deleteJob}/${jobTitle}`, {

    });
  }

  getAllEmployeesInJob(jobTitle: any): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllEmployeesInJob}/${jobTitle}`, {
    });
  }

  getJobById(jobId: any): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getJobById}/${jobId}`, {
    });
  }


}
