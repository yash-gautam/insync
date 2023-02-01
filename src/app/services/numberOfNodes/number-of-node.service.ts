import { Injectable } from '@angular/core';
import { Results } from 'src/app/models/data-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const enum endpoint{
  getNumberOfRegions = '/getNumberOfRegions',
  getNumberOfCountries = '/getNumberOfCountries',
  getNumberOfLocations = '/getNumberOfLocations',
  getNumberOfDepartments = '/getNumberOfDepartments',
  getNumberOfJobs = '/getNumberOfJobs',
  getNumberOfEmployees = '/getNumberOfEmployees',
  getNumberOfJobHistories = '/getNumberOfJobHistory'

}

@Injectable({
  providedIn: 'root'
})
export class NumberOfNodeService {
  private URL = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  // getNumberOfRegions(): Observable<Results>{
  //   return this.http.get<Results>(`${this.URL}${endpoint.getNumberOfRegions}`, {
  //   });
  // }

  // getNumberOfCountries(): Observable<Results>{
  //   return this.http.get<Results>(`${this.URL}${endpoint.getNumberOfCountries}`, {
  //   });
  // }

  // getNumberOfLocations(): Observable<Results>{
  //   return this.http.get<Results>(`${this.URL}${endpoint.getNumberOfLocations}`, {
  //   });
  // }

  // getNumberOfDepartments(): Observable<Results>{
  //   return this.http.get<Results>(`${this.URL}${endpoint.getNumberOfDepartments}`, {
  //   });
  // }

  // getNumberOfJobs(): Observable<Results>{
  //   return this.http.get<Results>(`${this.URL}${endpoint.getNumberOfJobs}`, {
  //   });
  // }

  // getNumberOfEmployees(): Observable<Results>{
  //   return this.http.get<Results>(`${this.URL}${endpoint.getNumberOfEmployees}`, {
  //   });
  // }

  // getNumberOfJobHistories(): Observable<Results>{
  //   return this.http.get<Results>(`${this.URL}${endpoint.getNumberOfJobHistories}`, {
  //   });
  // }

}
