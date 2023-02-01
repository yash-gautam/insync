import { Injectable } from '@angular/core';
import { Results } from 'src/app/models/data-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


const enum endpoint{
  getAllDepartments = '/getAllDepartments',
  getDepartmentId = '/getDepartmentId',
  getDepartmentLocationId = '/getDepartmentLocationId',
  getDepartmentManagerId = '/getDepartmentManagerId',


  getAllEmployees = '/getAllEmployees',
  getEmployeeName = '/getEmployeeName',
  getEmployeeDepartment = '/getDepartmentforEmployee',

  addDepartment = '/addDepartmentToLocation',
  updateDepartment = '/updateDepartment',
  deleteDepartment = '/deleteDepartment',

  getAllJobsInDepartment = '/getAllJobsInDepartment',
  getDepartmentById = '/getDepartmentByID'
}


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private URL = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  getDepartmentDetails(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllDepartments}`, {
    });
  }

  getDepartmentId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getDepartmentId}`, {
    });
  }

  getDepartmentLocationId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getDepartmentLocationId}`, {
    });
  }

  getDepartmentManagerId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getDepartmentManagerId}`, {
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



  addDepartment(departmentId: any, departmentName: any, managerId: any, locationId: any ): Observable<Results>{
    return this.http.post<Results>(`${this.URL}${endpoint.addDepartment}/${departmentId}/${departmentName}/${managerId}/${locationId}`, {
    });
  }

  updateDepartment(existingDepartmentName: any, newDepartmentId: any, newDepartmentName: any,
    newManagerId: any, newLocationId: any): Observable<Results>{
    return this.http.put<Results>(`${this.URL}${endpoint.updateDepartment}/${existingDepartmentName}/${newDepartmentId}/${newDepartmentName}/${newManagerId}/${newLocationId}`, {

    });
  }

  deleteDepartment(departmentName: any): Observable<Results>{
    return this.http.delete<Results>(`${this.URL}${endpoint.deleteDepartment}/${departmentName}`, {

    });
  }


  getAllJobsInDepartment(departmentName: any): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllJobsInDepartment}/${departmentName}`, {
    });
  }

  getDepartmentById(departmentId: any): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getDepartmentById}/${departmentId}`, {
    });
  }

}
