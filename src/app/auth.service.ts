// auth.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api'; // ton backend Laravel

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
   /*login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }*/
  getChartData() {
    return this.http.get(this.apiUrl);
  }
}


 

 
