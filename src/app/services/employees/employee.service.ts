import { Injectable } from '@angular/core';
import { Results } from 'src/app/models/data-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const enum endpoint{
  getEmployeeDepartmentId = '/getEmployeeDepartmentId',
  getEmployeeId = '/getEmployeeId',
  // getAllEmployees = '/getEmployeeName',
  getEmployeeJobId = '/getEmployeeJobId',
  getEmployeeManagerId = '/getManagerId',
  getEmployeePhoneNumber = '/getEmployeePhoneNumber',
  getEmployeeSalary = '/getEmployeeSalary',


  getAllEmployees = '/getAllEmployees',
  getEmployeeName = '/getEmployeeName',
  getEmployeeDepartment = '/getDepartmentforEmployee',

  addEmployee = '/addEmployeeToJob',
  updateEmployee = '/updateEmployee',
  deleteEmployee = '/deleteEmployee',

  getAllJobHistoryOfEmployee = '/getJobHistoryOfEmployee',
  getEmployeeById = '/getEmployeeByID'
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private URL = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  getEmployeeDepartmentId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getEmployeeDepartmentId}`, {
    });
  }

  getEmployeeId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getEmployeeId}`, {
    });
  }

  getAllEmployees(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllEmployees}`, {
    });
  }

  getEmployeeJobId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getEmployeeJobId}`, {
    });
  }

  getEmployeeManagerId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getEmployeeManagerId}`, {
    });
  }

  getEmployeePhoneNumber(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getEmployeePhoneNumber}`, {
    });
  }

  getEmployeeSalary(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getEmployeeSalary}`, {
    });
  }


  getEmployeeName(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getEmployeeName}`, {
    });
  }

  addEmployee(employeeId: any, firstName: any, lastName: any, phoneNumber: any, jobId: any,
              salary: any, managerId: any, departmentId: any): Observable<Results>{
    return this.http.post<Results>(`${this.URL}${endpoint.addEmployee}/${employeeId}/${firstName}/${lastName}/${phoneNumber}/${jobId}/${salary}/${managerId}/${departmentId}`, {
    });
  }

  updateEmployee(existingEmployeeId: any, newEmployeeId: any, newFirstName: any,
    newLastName: any, newPhoneNumber: any, newJobId: any, newSalary: any, newManagerId: any, newDepartmentId: any): Observable<Results>{
    return this.http.put<Results>(`${this.URL}${endpoint.updateEmployee}/${existingEmployeeId}/${newEmployeeId}/${newFirstName}/${newLastName}/${newPhoneNumber}/${newJobId}/${newSalary}/${newManagerId}/${newDepartmentId}`, {

    });
  }

  deleteEmployee(firstName: any, lastName: any): Observable<Results>{
    return this.http.delete<Results>(`${this.URL}${endpoint.deleteEmployee}/${firstName}/${lastName}`, {

    });
  }


  getAllJobHistoryOfEmployee(employeeFirstName: any, employeeLastName: any): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllJobHistoryOfEmployee}/${employeeFirstName}/${employeeLastName}`, {
    });
  }

  getEmployeeById(employeeId: any): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getEmployeeById}/${employeeId}`, {
    });
  }
}
