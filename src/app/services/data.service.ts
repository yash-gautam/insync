import { Injectable } from '@angular/core';
import { Results } from '../models/data-interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


const enum endpoint{
  getAllRegion = '/getAllRegions',
  getAllCountries = '/getAllCountries',
  getAllCountryId = '/getAllCountryId',
  getRegionIdforCountry = '/getRegionIdforCountry',

  getAllEmployees = '/getAllEmployees',
  getEmployeeName = '/getEmployeeName',
  getEmployeeDepartment = '/getDepartmentforEmployee',


  addCountryToRegion = '/addCountryToRegion',
  updateCountry = '/updateCountryData',
  deleteCountry = '/deleteCountry',

  getAllLocationsInCountry = '/getAllLocationsInCountry',
  getCountryById = '/getCountryByID'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL = 'http://127.0.0.1:5000';


  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllCountries}`, {
    });
  }

  getCountryId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllCountryId}`, {
    });
  }

  getRegionIdForCountry(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getRegionIdforCountry}`, {
    });
  }

  getEmployeeName(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getEmployeeName}`, {
    });
  }

  getAllEmployees(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllEmployees}`, {
    });
  }

  // regionIdStatic = 'regionId'
  // countryNameStatic = 'countryName'
  // countryIDStatic = 'countryID'

  slash = '/';
  // question = '?';
  // ampersand = '&';
  // equalTo = '=';


  // addCountry(regionId: any, countryName: any, countryId: any): Observable<Results>{
  //   return this.http.post<Results>(`${this.URL}${endpoint.addCountryToRegion}/${regionId}/${countryName}/${countryId}`, {

  //   });
  // }

  addCountry(regionId: any, countryName: any, countryId: any): Observable<Results>{
    return this.http.post<Results>(`${this.URL}${endpoint.addCountryToRegion}/${regionId}/${countryName}
    /${countryId}`, {

    });
  }

  updateCountry(existingCountryName: any, newRegionId: any, newCountryId: any, newCountryName: any): Observable<Results>{
    return this.http.put<Results>(`${this.URL}${endpoint.updateCountry}/${existingCountryName}/${newRegionId}/${newCountryId}/${newCountryName}`, {

    });
  }

  deleteCountry(countryName: any): Observable<Results>{
    return this.http.delete<Results>(`${this.URL}${endpoint.deleteCountry}/${countryName}`, {

    });
  }





  getAllLocationsInCountry(countryName: any): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllLocationsInCountry}/${countryName}`, {
    });
  }

  getCountryById(countryId: any): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getCountryById}/${countryId}`, {
    });
  }





  getEmployeeDepartment(employeeName: any): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getEmployeeDepartment}${this.slash}${employeeName}`, {
    });
  }
}

