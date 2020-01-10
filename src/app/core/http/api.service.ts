import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly SPACEX_API_URL = 'https://api.spacexdata.com/v2/launches';

  constructor(private http: HttpClient) { }

  getSpaceXData(): Observable<any>{
    return this.http.get(this.SPACEX_API_URL);
  }
}
