import { Injectable } from '@angular/core';
import { Results } from 'src/app/models/data-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


const enum endpoint{
  getAllLocations = '/getAllLocations',
  getLocationId = '/getLocationId',
  getLocationPostalCode = '/getLocationPostalCode',
  getLocationCountryId = '/getLocationCountryId',


  getAllEmployees = '/getAllEmployees',
  getEmployeeName = '/getEmployeeName',
  getEmployeeDepartment = '/getDepartmentforEmployee',

  addLocation = '/addLocationToCountry',
  updateLocation = '/updateLocationData',
  deleteLocation = '/deleteLocation',

  getAllDepartmentsInLocation = '/getAllDepartmentsInLocation',
  getLocationById = '/getLocationByID'
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private URL = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  getAllLocations(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllLocations}`, {
    });
  }

  getLocationId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getLocationId}`, {
    });
  }

  getLocationPostalCode(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getLocationPostalCode}`, {
    });
  }

  getLocationCountryId(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getLocationCountryId}`, {
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

  addLocation(locationId: any, city: any, postalCode: any, countryId: any ): Observable<Results>{
    return this.http.post<Results>(`${this.URL}${endpoint.addLocation}/${locationId}/${postalCode}/${city}/${countryId}`, {
    });
  }

  updateLocation(existingCityName: any, newCityName: any, newCountryId: any, newLocationId: any, newPostalCode: any): Observable<Results>{
    return this.http.put<Results>(`${this.URL}${endpoint.updateLocation}/${existingCityName}/${newCityName}/${newCountryId}/${newLocationId}/${newPostalCode}`, {

    });
  }

  deleteLocation(locationName: any): Observable<Results>{
    return this.http.delete<Results>(`${this.URL}${endpoint.deleteLocation}/${locationName}`, {

    });
  }



  getAllDepartmentInLocation(locationCity: any): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllDepartmentsInLocation}/${locationCity}`, {
    });
  }

  getLocationById(locationId: any): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getLocationById}/${locationId}`, {
    });
  }



}
