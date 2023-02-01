import { Injectable } from '@angular/core';
import { Results } from '../models/data-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


const enum endpoint{
  getAllRegion = '/getAllRegions',
  getRegionId = '/getRegionId',

  getAllEmployees = '/getAllEmployees',
  getEmployeeName = '/getEmployeeName',
  getEmployeeDepartment = '/getDepartmentforEmployee',

  addRegion = '/addRegion',
  updateRegion = '/updateRegion',
  deleteRegion = '/deleteRegion',

  getAllCountriesInRegion = '/getCountriesInRegion',
  getRegionById = '/getRegionByID'
}

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private URL = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  getRegionNames(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllRegion}`, {
    });
  }

  getRegionId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getRegionId}`, {
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

  addRegion(regionName: any, regionId: any): Observable<Results>{
    return this.http.post<Results>(`${this.URL}${endpoint.addRegion}/${regionName}/${regionId}`, {

    });
  }

  updateRegion(existingRegionName: any, newRegionName: any, newRegionId: any): Observable<Results>{
    return this.http.put<Results>(`${this.URL}${endpoint.updateRegion}/${existingRegionName}/${newRegionName}/${newRegionId}`, {

    });
  }

  deleteRegion(regionName: any): Observable<Results>{
    return this.http.delete<Results>(`${this.URL}${endpoint.deleteRegion}/${regionName}`, {

    });
  }


  getAllCountriesInRegion(regionName: any): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllCountriesInRegion}/${regionName}`, {
    });
  }

  getRegionById(regionId: any): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getRegionById}/${regionId}`, {
    });
  }

}
