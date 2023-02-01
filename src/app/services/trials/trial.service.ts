import { Injectable } from '@angular/core';
import { Results } from 'src/app/models/data-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const enum endpoint{
  getAllNodes = '/getAllNodes',
  getAllRelationships = '/getAllRelationships',
  getAllRegions = '/getAllRegions'
}

@Injectable({
  providedIn: 'root'
})
export class TrialService {

  private URL = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  getAllNodes(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllNodes}`, {
    });
  }

  getAllRelationships(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllRelationships}`, {
    });
  }

  getAllRegions(): Observable<Results>{
    return this.http.get<Results>(`${this.URL}${endpoint.getAllRegions}`, {
    });
  }
}
